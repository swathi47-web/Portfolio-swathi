import React from 'react';
import './Certificates.css';
import { FaCertificate, FaAward, FaStar, FaCalendarAlt, FaMapMarkerAlt, FaFileAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Certificates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Your ICWIHI Research Paper Certificate
  const researchPapers = [
    {
      id: 1,
      title: "AI & Blockchain Powered Smart Recruitment and Career Guidance System",
      conference: "Second International Conference on Web Intelligence and Human-Machine Interaction (ICWIHI 2026)",
      organizer: "RP Sarathy Institute of Technology",
      location: "Salem, Tamil Nadu, India",
      date: "24-25 April 2026",
      publisher: "Springer",
      certificateImage: "/certificates/icwihi-certificate.pdf",
      credentialId: "ICWIHI-2026-SP-0425",
      presentationType: "Paper Presentation"
    }
  ];

  // Your Professional Certifications
  const otherCertifications = [
    {
      name: "C Programming Training",
      issuer: "Spoken Tutorial Project, IIT Bombay",
      icon: "🔷"
    },
    {
      name: "Python Foundation Certification",
      issuer: "Infosys Springboard",
      icon: "🐍"
    },
    {
      name: "Java SE 8 Features",
      issuer: "Infosys Springboard",
      icon: "☕"
    },
    {
      name: "Basics for Students",
      issuer: "MongoDB",
      icon: "🍃"
    },
    {
      name: "Power Bi Job Simulation",
      issuer: "Forage",
      icon: "📊"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Research & Certifications
        </motion.h2>

        <motion.div
          ref={ref}
          className="certificates-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Research Paper Section - ICWIHI Springer Certificate */}
          <motion.div className="research-section" variants={itemVariants}>
            <h3>
              <FaAward className="section-icon" /> 
              Research Paper Publication
            </h3>
            {researchPapers.map((paper) => (
              <div key={paper.id} className="research-card">
                <div className="research-badge">
                  <FaStar className="star-icon" />
                  <span>{paper.publisher} Publication</span>
                </div>
                <h4>{paper.title}</h4>
                <div className="research-details">
                  <p>
                    <FaFileAlt className="icon" /> 
                    <strong>Conference:</strong> {paper.conference}
                  </p>
                  <p>
                    <FaCalendarAlt className="icon" /> 
                    <strong>Date:</strong> {paper.date}
                  </p>
                  <p>
                    <FaMapMarkerAlt className="icon" /> 
                    <strong>Location:</strong> {paper.location}
                  </p>
                  <p>
                    <FaCertificate className="icon" /> 
                    <strong>Organized by:</strong> {paper.organizer}
                  </p>
                </div>
                <div className="research-credentials">
                  <span className="credential-label">Credential ID:</span>
                  <span className="credential-value">{paper.credentialId}</span>
                </div>
                <div className="certificate-preview">
                  <button 
                    className="view-certificate-btn"
                    onClick={() => window.open(paper.certificateImage, '_blank')}
                  >
                    📄 View Certificate (PDF)
                    <FaExternalLinkAlt className="btn-icon" />
                  </button>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Professional Certifications Section */}
          <motion.div className="certifications-list-section" variants={itemVariants}>
            <h3>
              <FaCertificate className="section-icon" /> 
              Professional Certifications
            </h3>
            <div className="certifications-grid">
              {otherCertifications.map((cert, index) => (
                <div key={index} className="cert-item">
                  <div className="cert-icon">{cert.icon}</div>
                  <div className="cert-info">
                    <h4>{cert.name}</h4>
                    <p>{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;