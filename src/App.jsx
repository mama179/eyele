import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Import theme styles
import './styles/light-theme.css';
import './styles/dark-theme.css';

// Import pages
import Accueil from './pages/Accueil';
import APropos from './pages/APropos';
import Services from './pages/Services';
import Galerie from './pages/Galerie';
import Contact from './pages/Contact';
import Connexion from './pages/Connexion';
import Dashboard from './pages/Dashboard';

// Import components
import ThemeToggle from './components/ThemeToggle';

// Header Component
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <Link to="/">
              <h2>Eyele Studios</h2>
            </Link>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">A propos</Link></li>
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/galerie">Galerie</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/connexion">Connexion</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <Link to="/">ACCUEIL</Link>
          <Link to="/about">A PROPOS</Link>
          <Link to="/service">SERVICES</Link>
          <Link to="/galerie">GALERIE</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
        <div className="contact-info">
          <h3>NOUS CONTACTER</h3>
          <p><a href="tel:+237654258965">+237 654258965</a></p>
          <p>
            <a href="https://www.tugraz.at/fileadmin/user_upload/Institute/ICG/Documents/courses/cameradrones/CD_Lecture1.pdf" target="_blank" rel="noopener noreferrer">
              Documentation Technique Drones
            </a>
          </p>
          <p>
            <a href="https://drone.teledetection.fr/articles/Souchon_CAMLIGHT_IGN_rev.pdf" target="_blank" rel="noopener noreferrer">
              Guide Expert Camélight
            </a>
          </p>
          <h4>NOS RESEAUX SOCIAUX</h4>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <ThemeToggle />
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/about" element={<APropos />} />
            <Route path="/service" element={<Services />} />
            <Route path="/galerie" element={<Galerie />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
