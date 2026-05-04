import React from 'react';
import './About.css';
import { FaCode, FaMobile, FaRobot, FaDatabase, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    { 
      icon: <FaRobot />, 
      title: 'AI/ML Development', 
      description: 'Building intelligent systems with machine learning, YOLO, and computer vision',
      bgColor: '#e94560',
      iconBg: 'rgba(233, 69, 96, 0.15)',
      backgroundImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
      overlay: 'linear-gradient(135deg, rgba(233, 69, 96, 0.9), rgba(0, 0, 0, 0.7))'
    },
    { 
      icon: <FaCode />, 
      title: 'Full Stack Web', 
      description: 'Creating responsive web apps with MERN stack and TypeScript',
      bgColor: '#6c5ce7',
      iconBg: 'rgba(108, 92, 231, 0.15)',
      backgroundImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
      overlay: 'linear-gradient(135deg, rgba(108, 92, 231, 0.9), rgba(0, 0, 0, 0.7))'
    },
    { 
      icon: <FaDatabase />, 
      title: 'Data Processing', 
      description: 'Data preprocessing, analysis, and model deployment',
      bgColor: '#00b894',
      iconBg: 'rgba(0, 184, 148, 0.15)',
      backgroundImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      overlay: 'linear-gradient(135deg, rgba(0, 184, 148, 0.9), rgba(0, 0, 0, 0.7))'
    },
    { 
      icon: <FaMobile />, 
      title: 'AI Tools Integration', 
      description: 'Using Claude, ChatGPT, Gemini API for automation solutions',
      bgColor: '#fdcb6e',
      iconBg: 'rgba(253, 203, 110, 0.15)',
      backgroundImage: 'https://images.unsplash.com/photo-1676299081848-8241a5a4f5a7?w=400&h=300&fit=crop',
      overlay: 'linear-gradient(135deg, rgba(253, 203, 110, 0.9), rgba(0, 0, 0, 0.7))'
    },
  ];

  const education = [
    {
      degree: "B.Tech in CSE (AI & ML)",
      institution: "Dhanekula Institute of Engineering and Technology",
      location: "Vijayawada",
      period: "2022-2026",
      percentage: "8.34 CGPA",
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Chaitanya Junior College",
      location: "Vijayawada",
      period: "2020-2022",
      percentage: "9.5 CGPA",
    },
    {
      degree: "SSC",
      institution: "Grace English Medium High School",
      location: "Vijayawada",
      period: "2020",
      percentage: "9.8 CGPA",
    },
  ];

  const internships = [
    {
      title: "Data Science Intern",
      company: "Sand Space Technologies",
      period: "2 months",
      description: "Used AI tools to screen resumes and shortlist candidates based on skills, experience, and job requirements. Applied Machine Learning and NLP to evaluate candidate profiles and ensure better role matching.",
    },
    {
      title: "MERN Stack Intern",
      company: "Edubot Technologies",
      period: "2 months",
      description: "Built and optimized full-stack apps using React, TypeScript, Node.js, Express.js, MongoDB, improving performance and reducing deployment issues.",
    },
    {
      title: "Cyber Security Intern",
      company: "Aimers",
      period: "3 months",
      description: "Developed a YOLO-based object detection pipeline for real-time threat analysis and applied key computer vision techniques for enhanced security solutions.",
    },
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
    <section id="about" className="about">
      <div className="about-background">
        <div className="bg-pattern"></div>
        <div className="bg-gradient"></div>
      </div>
      
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            ref={ref}
            className="about-text"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.p variants={itemVariants}>
              I'm an aspiring AI/ML Engineer with hands-on experience in developing machine learning models, 
              web applications, and automation tools. Skilled in Python, data preprocessing, and model deployment 
              with a focus on solving real-world problems.
            </motion.p>

            <motion.p variants={itemVariants}>
              My journey started with Python and evolved through web development, AI/ML, and computer vision. 
              I've worked with various technologies including the MERN stack, YOLO for object detection, NLP 
              for recruitment systems, and various AI tools like Claude, ChatGPT, and Gemini API.
            </motion.p>

            <motion.div className="personal-info" variants={itemVariants}>
              <div className="info-item">
                <span className="info-label">Name:</span>
                <span className="info-value">Illuru Taraka Swathi</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">illuruswathi22@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location:</span>
                <span className="info-value">Vijayawada, India</span>
              </div>
              <div className="info-item">
                <span className="info-label">Education:</span>
                <span className="info-value">B.Tech CSE (AI&ML)</span>
              </div>
            </motion.div>

            <motion.div className="education-section" variants={itemVariants}>
              <h3><FaGraduationCap /> Education</h3>
              {education.map((edu, index) => (
                <div key={index} className="education-item">
                  <h4>{edu.degree}</h4>
                  <p>{edu.institution}, {edu.location}</p>
                  <div className="education-meta">
                    <span className="education-period">{edu.period}</span>
                    <span className="education-percentage"> | {edu.percentage}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div className="internships-section" variants={itemVariants}>
              <h3><FaBriefcase /> Internships</h3>
              {internships.map((internship, index) => (
                <div key={index} className="internship-item">
                  <h4>{internship.title} at {internship.company}</h4>
                  <span className="internship-period">{internship.period}</span>
                  <p>{internship.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="service-card" 
                variants={itemVariants}
                style={{
                  backgroundImage: `url(${service.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="service-card-overlay" style={{ background: service.overlay }}></div>
                <div className="service-card-content">
                  <div className="service-icon-wrapper" style={{ background: service.iconBg }}>
                    <div className="service-icon" style={{ color: service.bgColor }}>
                      {service.icon}
                    </div>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;