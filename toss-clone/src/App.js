// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Support from './pages/Support';
import SupportSearch from './pages/SupportSearch';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target); // 한 번만 실행
        }
      });
    });

    document.querySelectorAll('.scroll-fade-in, .scroll-fade-up').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/support" element={<Support />} />
        <Route path="/support_search" element={<SupportSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
