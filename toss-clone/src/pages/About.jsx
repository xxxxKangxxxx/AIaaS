// src/pages/About.jsx
import React from 'react';
import AboutHeader from '../components/about/AboutHeader';
import AboutMain from '../components/about/AboutMain';
import AboutStats from '../components/about/AboutStats';
import '../styles/global.css'; 

const About = () => {
  return (
    <>
      <div className="gradient-overlay"></div>
      <AboutHeader />
      <AboutMain />
      <AboutStats />
    </>
  );
};

export default About;
