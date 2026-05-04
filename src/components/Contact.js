import React, { useState } from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  // Simplified contact info - just show actual values without duplicate labels
  const contactInfo = [
    { icon: <FaMapMarkerAlt />, value: 'Vijayawada, India' },
    { icon: <FaPhone />, value: '+91 9502394940' },
    { icon: <FaEnvelope />, value: 'illuruswathi22@gmail.com' },
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/illuru-taraka-swathi-017a27291/', label: 'LinkedIn' },
    { icon: <FaGithub />, url: 'https://github.com/yourusername', label: 'GitHub' },
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
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <div className="contact-content">
          <motion.div
            ref={ref}
            className="contact-info"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.p variants={itemVariants}>
              I'm always interested in hearing about new opportunities and exciting projects in AI/ML and web development.
              Feel free to reach out if you'd like to collaborate or just say hello!
            </motion.p>

            {/* Contact Information - Clean and simple */}
            <motion.div className="contact-details" variants={itemVariants}>
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-detail-item">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-value">{info.value}</div>
                </div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div className="social-connect" variants={itemVariants}>
              <h4>Connect with me:</h4>
              <div className="social-links-horizontal">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-connect-link"
                  >
                    {social.icon}
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <FaPaperPlane />
              </button>
              {submitStatus === 'success' && (
                <div className="success-message">Message sent successfully! I'll get back to you soon.</div>
              )}
              {submitStatus === 'error' && (
                <div className="error-message">Failed to send message. Please try again.</div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;