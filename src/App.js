import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Stars from './components/Stars';

function App() {
  // Check localStorage for saved theme preference
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return true; // Default to dark mode
  };

  const [darkMode, setDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="app">
      {darkMode && <Stars />} {/* Only show stars in dark mode */}
      {darkMode && <div className="nebula"></div>}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;