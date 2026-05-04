import React from 'react';
import './Skills.css';
import { 
  FaPython, FaReact, FaNodeJs, FaDatabase, FaHtml5, FaFigma 
} from 'react-icons/fa';
import { 
  SiC, SiMongodb, SiTensorflow, SiOpencv, SiJupyter 
} from 'react-icons/si';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getSkillIcon = (skillName) => {
    const icons = {
      'Python': <FaPython />,
      'C': <SiC />,
      'React': <FaReact />,
      'Node.js': <FaNodeJs />,
      'MongoDB': <SiMongodb />,
      'Machine Learning': <SiTensorflow />,
      'YOLO': <SiOpencv />,
      'HTML': <FaHtml5 />,
      'UI/UX': <FaFigma />,
      'Prompt Engineering': <SiTensorflow />,
      'Gemini API': <SiTensorflow />,
      'Image Detection': <SiOpencv />,
      'GitHub': <FaDatabase />,
      'VS Code': <FaDatabase />,
      'Google Colab': <SiJupyter />,
      'Jupyter Notebook': <SiJupyter />,
    };
    return icons[skillName] || <FaDatabase />;
  };

  // Skills data from your resume
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'C', level: 75 }
      ]
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'HTML', level: 85 },
        { name: 'UI/UX', level: 70 }
      ]
    },
    {
      title: 'Machine Learning & AI',
      skills: [
        { name: 'Prompt Engineering', level: 80 },
        { name: 'Gemini API', level: 75 },
        { name: 'YOLO', level: 75 },
        { name: 'Image Detection', level: 70 }
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'GitHub', level: 75 },
        { name: 'VS Code', level: 80 },
        { name: 'Google Colab', level: 75 },
        { name: 'Jupyter Notebook', level: 75 },
        { name: 'Figma', level: 70 }
      ]
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
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>

        <motion.div
          ref={ref}
          className="skills-container"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} className="skill-category" variants={itemVariants}>
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <div className="skill-icon">{getSkillIcon(skill.name)}</div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;