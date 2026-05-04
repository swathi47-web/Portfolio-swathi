import React from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

// Import the image correctly
import profilePhoto from '../assets/1000225771.jpg';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/illuru-taraka-swathi-017a27291/', label: 'LinkedIn' },
    { icon: <FaEnvelope />, url: 'mailto:illuruswathi22@gmail.com', label: 'Email' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div
          ref={ref}
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="badge">✨ Welcome to my portfolio</span>
          </motion.div>

          <motion.h1 variants={itemVariants}>
            Hi, I'm <span className="highlight">Illuru Taraka Swathi</span>
          </motion.h1>

          <motion.h2 variants={itemVariants}>
            Web Developer & AI/ML Engineer <span className="wave">🚀</span>
          </motion.h2>

          <motion.p variants={itemVariants}>
            Aspiring AI/ML Engineer with hands-on experience in developing machine learning models, 
            web applications, and automation tools. Skilled in Python, data preprocessing, and model 
            deployment with a focus on solving real-world problems.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <a href="#contact" className="btn-primary">
              <span>💬 Get In Touch</span>
            </a>
            <a href="#projects" className="btn-secondary">
              <span>👁️ View My Work</span>
            </a>
          </motion.div>

          <motion.div className="social-links" variants={itemVariants}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={social.label}
              >
                {social.icon}
                <span className="social-tooltip">{social.label}</span>
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="image-wrapper">
            <div className="image-container">
              <img 
                src={profilePhoto}
                alt="Illuru Taraka Swathi"
                className="profile-photo"
              />
              <div className="glow-effect"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;