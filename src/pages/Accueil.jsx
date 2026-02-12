import React from 'react';
import { Link } from 'react-router-dom';
import './Accueil.css';
import ImageSlider from '../components/ImageSlider';

const Accueil = () => {
  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
      content: (
        <>
          <h1>LES CONSEILS EN AUDIOVISUEL LE COEUR DE NOTRE METIER</h1>
          <p>conseil en audiovisuel, couverture evenementiel et location des appareils</p>
          <Link to="/service" className="btn">PLUS D'INFO</Link>
        </>
      )
    },
    {
      url: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
      content: (
        <>
          <h1>PRODUCTION AUDIOVISUELLE PROFESSIONNELLE</h1>
          <p>Films, documentaires, clips vidéo et streaming en direct</p>
          <Link to="/service" className="btn">NOS SERVICES</Link>
        </>
      )
    },
    {
      url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
      content: (
        <>
          <h1>TECHNOLOGIE DE POINTE</h1>
          <p>Drones, caméras 4K et équipements professionnels</p>
          <Link to="/galerie" className="btn">GALERIE</Link>
        </>
      )
    }
  ];

  const features = [
    {
      icon: '🎬',
      title: 'Production TV',
      description: 'Création de programmes TV, documentaires et séries avec une équipe de professionnels expérimentés.',
      image: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      icon: '📹',
      title: 'Événements',
      description: 'Couverture complète de vos événements avec streaming en direct et captation multi-caméras.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      icon: '🚁',
      title: 'Drone & Aérien',
      description: 'Prises de vue aériennes professionnelles avec des pilotes certifiés et équipements de pointe.',
      image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      icon: '🎥',
      title: 'Location Matériel',
      description: 'Location de caméras, drones et équipements professionnels pour tous vos projets audiovisuels.',
      image: 'https://images.unsplash.com/photo-1603796846097-bee99e4a6b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const stats = [
    { number: '150+', label: 'Projets Réalisés' },
    { number: '50+', label: 'Clients Satisfaits' },
    { number: '10+', label: 'Années d\'Expérience' },
    { number: '24/7', label: 'Support Technique' }
  ];

  return (
    <div className="accueil">
      <section className="hero">
        <ImageSlider images={heroImages} interval={4000} />
      </section>

      <section className="features">
        <div className="container">
          <h2>NOS SERVICES EXCELLENCE</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-image">
                  <img src={feature.image} alt={feature.title} />
                  <div className="feature-icon">{feature.icon}</div>
                </div>
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <Link to="/service" className="feature-link">En savoir plus →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>PRÊT À RÉALISER VOTRE PROJET AUDIOVISUEL ?</h2>
          <p>Contactez-nous dès aujourd'hui pour transformer vos idées en réalité</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Nous Contacter</Link>
            <Link to="/galerie" className="btn btn-secondary">Voir Nos Réalisations</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;
