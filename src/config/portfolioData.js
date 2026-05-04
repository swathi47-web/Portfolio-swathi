// src/config/portfolioData.js

const portfolioData = {
  // Personal Information
  name: "Illuru Taraka Swathi",
  role: "AI/ML Engineer",
  shortBio: "Aspiring AI/ML Engineer with hands-on experience in developing machine learning models, web applications, and automation tools.",
  
  // Contact Information
  email: "illuruswathi22@gmail.com",
  phone: "+91 9502394940",
  location: "Vijayawada, India",
  
  // Social Links
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/illuru-taraka-swathi-017a27291/",
    github: "https://github.com/yourusername", // Add your GitHub URL
    twitter: "https://twitter.com/yourusername", // Add your Twitter URL
  },
  
  // Career Objective
  careerObjective: "Aspiring AI/ML Engineer with hands-on experience in developing machine learning models, web applications, and automation tools. Skilled in Python, data preprocessing, and model deployment with a focus on solving real-world problems. Eager to contribute to building scalable AI solutions that drive measurable business impact and efficiency.",
  
  // Education
  education: [
    {
      degree: "B. Tech in CSE (AI & ML)",
      institution: "Dhanekula Institute of Engineering and Technology",
      location: "Vijayawada",
      period: "2021-2025",
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Chaitanya Junior College",
      location: "Vijayawada",
      period: "2019-2021",
    },
    {
      degree: "SSC",
      institution: "Grace English Medium High School",
      location: "Vijayawada",
      period: "2019",
    },
  ],
  
  // Certifications
  certifications: [
    "C Programming Training - Spoken Tutorial Project, IIT Bombay",
    "Python Foundation Certification - Infosys Springboard",
    "Java SE 8 Features - Infosys Springboard",
    "Basics for Students - MongoDB",
    "Power Bi Job Simulation - Forage",
  ],
  
  // Internships
  internships: [
    {
      title: "MERN Stack Intern",
      company: "Edubot Technologies",
      period: "January 2025 - July 2025",
      description: "Built and optimized full-stack apps using React, TypeScript, Node.js, Express.js, MongoDB, improving performance and reducing deployment issues.",
    },
    {
      title: "Cyber Security Intern",
      company: "Aimers",
      period: "May 2024 - August 2024",
      description: "Developed a YOLO-based object detection pipeline for real-time threat analysis and applied key computer vision techniques for enhanced security solutions.",
    },
  ],
  
  // Projects
  projects: [
    {
      id: 1,
      title: "Online Book Library",
      category: "fullstack",
      description: "Developed a full-stack web app using React, TypeScript, Node.js, Express.js, MongoDB with user authentication, CRUD operations, reviews, and role-based dashboards for seamless library management.",
      tech: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/yourusername/book-library",
      demo: "https://book-library-demo.com",
    },
    {
      id: 2,
      title: "Real-Time Object Detection using YOLO",
      category: "ai-ml",
      description: "Built a YOLO-based object detection system with Streamlit for real-time detection from live feeds, videos, and images, featuring bounding box visualization and interactive interface.",
      tech: ["Python", "YOLO", "Streamlit", "OpenCV", "Computer Vision"],
      github: "https://github.com/yourusername/yolo-detection",
      demo: "https://yolo-detection-demo.com",
    },
    {
      id: 3,
      title: "Smart Recruitment & Career Guidance Platform",
      category: "ai-ml",
      description: "Created an AI-driven recruitment system using NLP and machine learning for resume enhancement, job matching, hiring success prediction, and interview preparation, combined with blockchain-based certificate verification for fraud-free hiring.",
      tech: ["Python", "NLP", "Machine Learning", "Blockchain", "Gemini API"],
      github: "https://github.com/yourusername/recruitment-platform",
      demo: "https://recruitment-platform-demo.com",
    },
  ],
  
  // Technical Skills
  technicalSkills: {
    programmingLanguages: ["Python", "C"],
    webTechnologies: ["HTML", "CSS", "UI/UX"],
    machineLearning: ["Prompt Engineering", "Gemini API", "YOLO", "Image Detection"],
    toolsPlatforms: ["GitHub", "VS Code", "Google Colab", "Jupyter Notebook", "Figma"],
  },
  
  // Skills with percentage (for Skills component)
  skillsWithLevel: [
    { name: "Python", icon: "python", level: 85 },
    { name: "C Programming", icon: "c", level: 75 },
    { name: "React", icon: "react", level: 80 },
    { name: "Node.js", icon: "nodejs", level: 75 },
    { name: "MongoDB", icon: "mongodb", level: 70 },
    { name: "Machine Learning", icon: "ml", level: 80 },
    { name: "YOLO/Computer Vision", icon: "cv", level: 75 },
    { name: "HTML/CSS", icon: "html", level: 85 },
    { name: "UI/UX Design", icon: "uiux", level: 70 },
    { name: "Prompt Engineering", icon: "prompt", level: 80 },
  ],
  
  // About Me
  about: {
    description1: "I'm a passionate AI/ML Engineer with hands-on experience in developing machine learning models, web applications, and automation tools. I love creating solutions that solve real-world problems and provide exceptional user experiences.",
    description2: "My journey in tech started with C programming and evolved through Python, web development, and now AI/ML. I've worked with various technologies including MERN stack, YOLO for object detection, and NLP for recruitment systems. I'm constantly learning and staying up-to-date with the latest industry trends.",
    experience: "2+ Years",
  },
};

export default portfolioData;