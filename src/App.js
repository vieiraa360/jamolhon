import './App.css';

import React, { useState, useEffect } from 'react';
import Projects from './components/Projects.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Design from './components/Design.js';
import VFX from './components/VFX.js';
import VideoBackground from './components/video-background.js';

function App() {
  const [currentPage, setCurrentPage] = useState('projects'); // initial page

  useEffect(() => {
    document.title = '${currentPage[0].toUpperCase() + currentPage.slice(1)} - My App';
  }, [currentPage]);

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <nav>
        <button onClick={() => navigateTo('projects')}>Projects</button>
        <button onClick={() => navigateTo('about')}>About</button>
        <button onClick={() => navigateTo('contact')}>Contact</button>
        <button onClick={() => navigateTo('design')}>Design</button>
        <button onClick={() => navigateTo('vfx')}>VFX</button>
      </nav>
      {currentPage === 'projects' && <Projects />}
      {currentPage === 'about' && <About />}
      {currentPage === 'contact' && <Contact />}
      {currentPage === 'design' && <Design />}
      {currentPage === 'vfx' && <VFX />}

   </div>
  );
}

export default App;