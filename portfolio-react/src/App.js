import React from 'react';
import './styles/globals.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Interests from './components/Interests';
import CVDownload from './components/CVDownload';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Interests />
      <CVDownload />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
