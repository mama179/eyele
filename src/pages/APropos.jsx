import React from 'react';
import { Link } from 'react-router-dom';
import './APropos.css';
import ImageSlider from '../components/ImageSlider';

const APropos = () => {
  const aboutImages = [
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'
  ];

  const team = [
    {
      name: 'Jean-Paul Eyele',
      role: 'Fondateur & Directeur Artistique',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Expert en production audiovisuelle avec plus de 15 ans d\'expérience dans l\'industrie.'
    },
    {
      name: 'Marie Dubois',
      role: 'Responsable Production',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Spécialiste en logistique événementielle et coordination de projets complexes.'
    },
    {
      name: 'Thomas Martin',
      role: 'Chef Opérateur Drone',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Pilote professionnel certifié avec plus de 1000 heures de vol en production.'
    },
    {
      name: 'Sophie Laurent',
      role: 'Directrice Post-Production',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Monteuse experte spécialisée dans les documentaires et films d\'entreprise.'
    }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'Nous nous engageons à livrer des productions de la plus haute qualité, dépassant systématiquement les attentes de nos clients.'
    },
    {
      icon: '🤝',
      title: 'Intégrité',
      description: 'La transparence et l\'honnêteté sont au cœur de toutes nos relations professionnelles et créatives.'
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Nous intégrons constamment les dernières technologies pour offrir des solutions audiovisuelles de pointe.'
    },
    {
      icon: '💡',
      title: 'Créativité',
      description: 'Chaque projet est une opportunité d\'explorer de nouvelles idées et de repousser les limites créatives.'
    }
  ];

  const milestones = [
    { year: '2014', title: 'Fondation', description: 'Création de Eyele Studios avec une vision de révolutionner la production audiovisuelle au Cameroun.' },
    { year: '2016', title: 'Premier Grand Projet', description: 'Production d\'un documentaire primé diffusé sur plusieurs chaînes internationales.' },
    { year: '2018', title: 'Expansion Drone', description: 'Acquisition d\'équipements de pointe et certification de nos pilotes pour les prises de vue aériennes.' },
    { year: '2020', title: 'Internationalisation', description: 'Collaboration avec des clients internationaux et participation à des festivals de renommée mondiale.' },
    { year: '2022', title: 'Innovation Technologique', description: 'Intégration de la 4K, 8K et des technologies de streaming en direct dans notre offre de services.' },
    { year: '2024', title: 'Excellence Reconnue', description: 'Plus de 150 projets réalisés et reconnaissance comme leader dans la production audiovisuelle professionnelle.' }
  ];

  return (
    <div className="a-propos">
      <section className="hero-about">
        <div className="container">
          <h1>EYELE STUDIOS</h1>
          <p>L'excellence audiovisuelle au service de votre vision</p>
        </div>
      </section>

      <section className="about-intro">
        <div className="container">
          <div className="about-slider">
            <ImageSlider 
              images={aboutImages.map(url => ({ url }))} 
              className="about-slider"
              interval={4500}
            />
          </div>
          <div className="about-content">
            <h2>NOTRE HISTOIRE</h2>
            <p>
              Fondée en 2014 par Jean-Paul Eyele, notre studio est devenu une référence dans la production audiovisuelle 
              professionnelle au Cameroun et au-delà. Avec une passion pour le storytelling et une maîtrise technique 
              exceptionnelle, nous transformons vos idées en expériences visuelles mémorables.
            </p>
            <p>
              Notre équipe de professionnels passionnés met son expertise au service de projets variés : des productions 
              TV aux films d'entreprise, en passant par la couverture d'événements et les prises de vue aériennes. 
              Chaque projet est une opportunité de repousser les limites de la créativité et de l'innovation.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">150+</span>
                <span className="stat-label">Projets Réalisés</span>
              </div>
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Années d'Expérience</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Clients Satisfaits</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2>NOS VALEURS</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <h2>NOTRE ÉQUIPE</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-member">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <h4>{member.role}</h4>
                  <p>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="milestones">
        <div className="container">
          <h2>NOTRE PARCOURS</h2>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="milestone">
                <div className="milestone-year">{milestone.year}</div>
                <div className="milestone-content">
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-about">
        <div className="container">
          <h2>REJOIGNEZ L'AVENTURE EYELE STUDIOS</h2>
          <p>
            Que vous soyez un client, un partenaire ou un futur collaborateur, nous serions ravis de discuter 
            de la manière dont nous pouvons travailler ensemble pour créer des expériences audiovisuelles exceptionnelles.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Nous Contacter</Link>
            <Link to="/service" className="btn btn-secondary">Découvrir Nos Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default APropos;
