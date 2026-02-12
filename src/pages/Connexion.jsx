import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Connexion.css';

const Connexion = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    company: '',
    phone: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      if (isLogin) {
        setMessage('Connexion réussie! Redirection...');
        setTimeout(() => {
          navigate('/dashboard');
        }, 1500);
      } else {
        setMessage('Compte créé avec succès! Vous pouvez maintenant vous connecter.');
        setIsLogin(true);
        setFormData({
          email: '',
          password: '',
          name: '',
          company: '',
          phone: ''
        });
      }
    }, 2000);
  };

  const features = [
    {
      icon: '🎬',
      title: 'Gestion de Projets',
      description: 'Suivez tous vos projets audiovisuels en temps réel'
    },
    {
      icon: '📊',
      title: 'Rapports Détaillés',
      description: 'Accédez à des analyses et rapports personnalisés'
    },
    {
      icon: '🤝',
      title: 'Support Prioritaire',
      description: 'Bénéficiez d\'un support technique dédié 24/7'
    },
    {
      icon: '📁',
      title: 'Stockage Cloud',
      description: 'Espace de stockage sécurisé pour vos fichiers médias'
    }
  ];

  const testimonials = [
    {
      name: 'Marie Tchamda',
      company: 'Tech Innovations SA',
      text: 'L\'espace client Eyele Studios a transformé notre façon de gérer nos projets. Tout est centralisé et accessible!'
    },
    {
      name: 'Jean-Michel Biloa',
      company: 'Festival International',
      text: 'Un outil indispensable pour suivre nos productions en temps réel. Interface intuitive et très professionnelle.'
    }
  ];

  return (
    <div className="connexion">
      <section className="hero-connexion">
        <div className="container">
          <h1>ESPACE CLIENT EYELE STUDIOS</h1>
          <p>Accédez à votre espace personnel pour gérer vos projets</p>
        </div>
      </section>

      <section className="auth-section">
        <div className="container">
          <div className="auth-container">
            <div className="auth-tabs">
              <button 
                className={`tab ${isLogin ? 'active' : ''}`}
                onClick={() => setIsLogin(true)}
              >
                Connexion
              </button>
              <button 
                className={`tab ${!isLogin ? 'active' : ''}`}
                onClick={() => setIsLogin(false)}
              >
                Créer un Compte
              </button>
            </div>

            <div className="auth-form">
              {message && (
                <div className={`message ${message.includes('succès') || message.includes('réussie') ? 'success' : 'info'}`}>
                  {message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {!isLogin && (
                  <>
                    <div className="form-group">
                      <label htmlFor="name">Nom Complet *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">Entreprise</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Téléphone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </>
                )}
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="password">Mot de passe *</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                {isLogin && (
                  <div className="form-options">
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>Se souvenir de moi</span>
                    </label>
                    <Link to="/forgot-password" className="forgot-password">
                      Mot de passe oublié?
                    </Link>
                  </div>
                )}

                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isLoading}
                >
                  {isLoading ? 'Chargement...' : (isLogin ? 'Se Connecter' : 'Créer un Compte')}
                </button>
              </form>

              <div className="auth-footer">
                <p>
                  {isLogin ? 'Pas encore de compte?' : 'Déjà un compte?'}
                  <button 
                    className="link-btn"
                    onClick={() => setIsLogin(!isLogin)}
                  >
                    {isLogin ? 'Créer un compte' : 'Se connecter'}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2>POURQUOI CHOISIR NOTRE ESPACE CLIENT?</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <h2>CE QUE NOS CLIENTS EN DISENT</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <p>"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="support-section">
        <div className="container">
          <h2>BESOIN D\'AIDE?</h2>
          <p>Notre équipe de support est disponible pour vous accompagner</p>
          <div className="support-options">
            <div className="support-option">
              <div className="support-icon">📞</div>
              <h3>Support Téléphonique</h3>
              <p>+237 654258965</p>
              <span>Lun-Ven: 8h-18h</span>
            </div>
            <div className="support-option">
              <div className="support-icon">📧</div>
              <h3>Support Email</h3>
              <p>support@eyele.net</p>
              <span>Réponse sous 24h</span>
            </div>
            <div className="support-option">
              <div className="support-icon">💬</div>
              <h3>Chat en Direct</h3>
              <p>Disponible 24/7</p>
              <span>Réponse instantanée</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Connexion;
