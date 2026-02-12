import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import ImageSlider from '../components/ImageSlider';

const Services = () => {
  const serviceImages = {
    conseil: [
      'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    ],
    events: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    ],
    equipment: [
      'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1603796846097-bee99e4a6b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    ]
  };

  const services = [
    {
      id: 'conseil',
      title: 'CONSEIL AUDIOVISUEL',
      icon: '🎬',
      description: 'Notre expertise en production audiovisuelle vous accompagne à chaque étape de votre projet, de la conception à la réalisation.',
      features: [
        'Programmes TV et Documentaires',
        'Séries TV et Films de Fiction',
        'Photographie Professionnelle',
        'Films d\'Entreprise',
        'Publicités TV et Spots Audio',
        'Vidéos Clips et Musique',
        'Vidéos Web et Contenu Digital',
        'Stratégie de Contenu',
        'Scénario et Storyboarding'
      ],
      price: 'Sur devis',
      delivery: '2-8 semaines selon projet'
    },
    {
      id: 'events',
      title: 'COUVERTURE ÉVÉNEMENTIELLE',
      icon: '📹',
      description: 'Captation professionnelle de vos événements avec technologie de pointe pour une diffusion en direct ou post-production.',
      features: [
        'Live Streaming et Retransmissions',
        'Animation 2D/3D',
        'Prise de Vue par Drones',
        'Reportage Photo et Vidéo',
        'Multi-caméras HD/4K',
        'Mixage Audio Professionnel',
        'Diffusion sur Plateformes Web',
        'Événements Corporatifs',
        'Mariages et Cérémonies'
      ],
      price: 'À partir de 250.000 FCFA',
      delivery: 'Livraison 48-72h'
    },
    {
      id: 'equipment',
      title: 'LOCATION MATÉRIEL',
      icon: '🚁',
      description: 'Équipements professionnels de dernière génération disponibles à la location pour tous vos projets audiovisuels.',
      features: [
        'Drones Professionnels',
        'Caméras 4K et 8K',
        'Caméras Broadcast',
        'Équipements d\'Éclairage',
        'Matériel Sonore',
        'Grues et Stabilisateurs',
        'Moniteurs et Écrans',
        'Stockage et Backup',
        'Support Technique 24/7'
      ],
      price: '15.000-150.000 FCFA/jour',
      delivery: 'Disponibilité immédiate'
    }
  ];

  const process = [
    { step: 1, title: 'Consultation', description: 'Analyse de vos besoins et définition de votre vision' },
    { step: 2, title: 'Proposition', description: 'Présentation d\'une solution personnalisée avec devis détaillé' },
    { step: 3, title: 'Production', description: 'Réalisation de votre projet par notre équipe d\'experts' },
    { step: 4, title: 'Livraison', description: 'Remise du projet final avec support technique' }
  ];

  const testimonials = [
    {
      name: 'Marie Tchamda',
      company: 'Tech Innovations SA',
      text: 'Eyele Studios a transformé notre vision en réalité. La qualité de production et le professionnalisme de l\'équipe sont exceptionnels.',
      rating: 5
    },
    {
      name: 'Jean-Michel Biloa',
      company: 'Festival International de Douala',
      text: 'Une couverture événementielle impeccable. Le live streaming a permis à notre audience mondiale de vivre l\'expérience en temps réel.',
      rating: 5
    },
    {
      name: 'Sophie Ngono',
      company: 'Luxury Hotels Group',
      text: 'Le matériel de pointe et l\'expertise technique d\'Eyele Studios ont dépassé nos attentes pour notre campagne promotionnelle.',
      rating: 5
    }
  ];

  return (
    <div className="services">
      <section className="hero-services">
        <div className="container">
          <h1>NOS SERVICES PROFESSIONNELS</h1>
          <p>L'excellence audiovisuelle au service de votre réussite</p>
        </div>
      </section>

      <section className="services-intro">
        <div className="container">
          <h2>DES SOLUTIONS COMPLÈTES POUR TOUS VOS PROJETS</h2>
          <p>
            Eyele Studios vous offre une gamme complète de services audiovisuels professionnels. 
            De la conception à la réalisation, notre équipe d'experts met son savoir-faire 
            au service de votre vision pour créer des expériences mémorables.
          </p>
        </div>
      </section>

      <section className="services-details">
        <div className="container">
          {services.map((service, index) => (
            <div key={service.id} className={`service-detail ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="service-slider">
                <ImageSlider 
                  images={serviceImages[service.id].map(url => ({ url }))} 
                  className="service-slider"
                  interval={3000 + index * 500}
                />
              </div>
              <div className="service-info">
                <div className="service-header">
                  <span className="service-icon">{service.icon}</span>
                  <h3>{service.title}</h3>
                </div>
                <p className="service-description">{service.description}</p>
                <div className="service-features">
                  <h4>Services Inclus</h4>
                  <ul>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="service-meta">
                  <div className="meta-item">
                    <span className="meta-label">Tarif:</span>
                    <span className="meta-value">{service.price}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Délai:</span>
                    <span className="meta-value">{service.delivery}</span>
                  </div>
                </div>
                <Link to="/contact" className="btn btn-primary">Demander un Devis</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="process">
        <div className="container">
          <h2>NOTRE MÉTHODOLOGIE</h2>
          <div className="process-grid">
            {process.map((item, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2>TEMOIGNAGES CLIENTS</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-services">
        <div className="container">
          <h2>PRÊT À DÉMARRER VOTRE PROJET ?</h2>
          <p>Contactez-nous dès aujourd'hui pour une consultation gratuite et personnalisée</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Demander un Devis</Link>
            <Link to="/galerie" className="btn btn-secondary">Voir Nos Réalisations</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
