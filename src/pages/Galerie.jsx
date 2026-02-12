import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Galerie.css';

const Galerie = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tous' },
    { id: 'production', name: 'Production TV' },
    { id: 'events', name: 'Événements' },
    { id: 'drone', name: 'Drone & Aérien' },
    { id: 'photo', name: 'Photographie' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Documentaire "Cameroun Terre d\'Accueil"',
      category: 'production',
      image: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Documentaire primé sur la diversité culturelle camerounaise',
      client: 'TV5 Monde',
      year: '2024',
      duration: '52 min'
    },
    {
      id: 2,
      title: 'Série "Entrepreneurs du Futur"',
      category: 'production',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Série documentaire sur les startups camerounaises innovantes',
      client: 'Canal2 International',
      year: '2024',
      duration: '8 épisodes'
    },
    {
      id: 3,
      title: 'Festival International de Douala 2024',
      category: 'events',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Couverture complète du festival avec streaming en direct',
      client: 'Mairie de Douala',
      year: '2024',
      duration: '3 jours'
    },
    {
      id: 4,
      title: 'Lancement Produit Tech Innovations',
      category: 'events',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Événement corporatif avec multi-caméras et effets spéciaux',
      client: 'Tech Innovations SA',
      year: '2024',
      duration: '1 journée'
    },
    {
      id: 5,
      title: 'Cameroun Vue du Ciel',
      category: 'drone',
      image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Prises de vue aériennes spectaculaires des paysages camerounais',
      client: 'Ministère du Tourisme',
      year: '2024',
      duration: '15 min'
    },
    {
      id: 6,
      title: 'Infrastructure Industrielle',
      category: 'drone',
      image: 'https://images.unsplash.com/photo-1603796846097-bee99e4a6b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Surveillance aérienne pour projet industriel majeur',
      client: 'Sonara',
      year: '2024',
      duration: '30 min'
    },
    {
      id: 7,
      title: 'Collection Fashion Week Douala',
      category: 'photo',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Shooting photo pour la semaine de la mode de Douala',
      client: 'Douala Fashion Week',
      year: '2024',
      duration: '2 jours'
    },
    {
      id: 8,
      title: 'Portrait Corporate C-Suite',
      category: 'photo',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Portraits professionnels pour direction générale',
      client: 'Banque Atlantique',
      year: '2024',
      duration: '1 journée'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="galerie">
      <section className="hero-galerie">
        <div className="container">
          <h1>NOTRE GALERIE DE PROJETS</h1>
          <p>Découvrez nos réalisations audiovisuelles professionnelles</p>
        </div>
      </section>

      <section className="categories">
        <div className="container">
          <div className="category-tabs">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-tab ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-grid">
        <div className="container">
          <div className="projects">
            {filteredProjects.map(project => (
              <div 
                key={project.id} 
                className="project-card"
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-info">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <span className="view-more">Voir les détails →</span>
                    </div>
                  </div>
                </div>
                <div className="project-meta">
                  <span className="client">{project.client}</span>
                  <span className="year">{project.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <section className="project-modal">
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}></div>
          <div className="modal-content">
            <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
            <div className="modal-header">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>
            <div className="modal-body">
              <h2>{selectedProject.title}</h2>
              <p className="project-description">{selectedProject.description}</p>
              <div className="project-details">
                <div className="detail-item">
                  <span className="label">Client:</span>
                  <span className="value">{selectedProject.client}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Année:</span>
                  <span className="value">{selectedProject.year}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Durée:</span>
                  <span className="value">{selectedProject.duration}</span>
                </div>
              </div>
              <div className="modal-actions">
                <Link to="/contact" className="btn btn-primary">Projet Similaire ?</Link>
                <button className="btn btn-secondary" onClick={() => setSelectedProject(null)}>Fermer</button>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="cta-galerie">
        <div className="container">
          <h2>INSPIRÉ PAR NOS RÉALISATIONS ?</h2>
          <p>Chaque projet est unique. Contactez-nous pour discuter de votre vision et comment nous pouvons la réaliser ensemble.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Démarrer Votre Projet</Link>
            <Link to="/service" className="btn btn-secondary">Nos Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Galerie;
