import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const projects = [
    { id: 1, name: 'Documentaire "Cameroun Terre d\'Accueil"', status: 'En production', progress: 75 },
    { id: 2, name: 'Festival International de Douala', status: 'Terminé', progress: 100 },
    { id: 3, name: 'Publicité Tech Innovations', status: 'En post-production', progress: 90 },
    { id: 4, name: 'Série "Entrepreneurs du Futur"', status: 'Pré-production', progress: 25 }
  ];

  return (
    <div className="dashboard">
      <section className="dashboard-header">
        <div className="container">
          <h1>Bienvenue dans votre espace</h1>
          <p>Gérez vos projets et suivez leur progression</p>
        </div>
      </section>

      <section className="dashboard-content">
        <div className="container">
          <div className="dashboard-grid">
            <div className="dashboard-card">
              <h3>Projets Actifs</h3>
              <div className="project-list">
                {projects.map(project => (
                  <div key={project.id} className="project-item">
                    <div className="project-info">
                      <h4>{project.name}</h4>
                      <span className={`status ${project.status === 'Terminé' ? 'completed' : project.status === 'En production' ? 'production' : project.status === 'En post-production' ? 'post-production' : 'pre-production'}`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: `${project.progress}%` }}></div>
                    </div>
                    <span className="progress-text">{project.progress}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="dashboard-card">
              <h3>Actions Rapides</h3>
              <div className="quick-actions">
                <Link to="/contact" className="action-btn">Nouveau Projet</Link>
                <Link to="/galerie" className="action-btn">Voir Galerie</Link>
                <Link to="/service" className="action-btn">Demander Devis</Link>
                <button className="action-btn">Support Technique</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
