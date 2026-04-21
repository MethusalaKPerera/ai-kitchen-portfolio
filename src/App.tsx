import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
// Pages
import { Home } from './pages/Home';
import { Domain } from './pages/Domain';
import { Milestones } from './pages/Milestones';
import { Documents } from './pages/Documents';
import { Presentations } from './pages/Presentations';
import { AboutUs } from './pages/AboutUs';
import { ContactUs } from './pages/ContactUs';

export function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen" style={{ background: '#0f172a' }}>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/domain" element={<Domain />} />
            <Route path="/milestones" element={<Milestones />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/presentations" element={<Presentations />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}