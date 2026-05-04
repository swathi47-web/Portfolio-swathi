import React, { useState } from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');

  // Your actual projects from the resume with images
  const projects = [
    {
      id: 1,
      title: 'Online Book Library',
      category: 'fullstack',
      description: 'Developed a full-stack web app using React, TypeScript, Node.js, Express.js, MongoDB with user authentication, CRUD operations, reviews, and role-based dashboards for seamless library management.',
      tech: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB'],
      github: 'https://github.com/swathi47-web/online-book-store',
      demo: 'https://onlinebook-omega.vercel.app/',
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=300&fit=crop',
      icon: '📚'
    },
    {
      id: 2,
      title: 'Real-Time Object Detection using YOLO',
      category: 'aiml',
      description: 'Built a YOLO-based object detection system with Streamlit for real-time detection from live feeds, videos, and images, featuring bounding box visualization and interactive interface.',
      tech: ['Python', 'YOLO', 'Streamlit', 'OpenCV', 'Computer Vision'],
      github: 'https://github.com/swathi47-web/Object-detection',
      demo: 'https://swathi47-web-object-detection-main-5iwaru.streamlit.app/',
      image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=300&fit=crop',
      icon: '👁️'
    },
    {
      id: 3,
      title: 'Smart Recruitment & Career Guidance Platform',
      category: 'aiml',
      description: 'Created an AI-driven recruitment system using NLP and machine learning for resume enhancement, job matching, hiring success prediction, and interview preparation, combined with blockchain-based certificate verification for fraud-free hiring.',
      tech: ['Python', 'NLP', 'Machine Learning', 'Blockchain', 'Gemini API'],
      github: 'https://github.com/swathi47-web/Smart-Recruitment-Career-Guidance-Platform',
      demo: 'https://recruitment-platform-demo.com',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop',
      icon: '🎯'
    },
    {
      id: 4,
      title: 'AI/ML Portfolio Website',
      category: 'frontend',
      description: 'A professional portfolio website showcasing AI/ML projects, research papers, and certifications with galaxy theme, dark mode, and responsive design. Features include animations, project filtering, and certificate viewer.',
      tech: ['React', 'Framer Motion', 'CSS3', 'EmailJS', 'React Icons'],
      github: 'https://github.com/yourusername/ai-ml-portfolio',
      demo: 'https://your-portfolio-demo.com',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj9hcKUbxsmY5HmX_26-QuaiandcalBf8UDg&s',
      icon: '🚀'
    },
  ];

  const categories = [
     { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'aiml', name: 'AI/ML' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <div className="project-filters">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <motion.div
          ref={ref}
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {filteredProjects.map(project => (
            <motion.div key={project.id} className="project-card" variants={itemVariants}>
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
                <div className="project-icon-badge">{project.icon}</div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;