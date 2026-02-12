import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Merci pour votre message! Nous vous contacterons dans les 24 heures.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
        budget: '',
        timeline: ''
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: '📞',
      title: 'Téléphone',
      details: ['+237 654258965', '+237 698123456'],
      action: 'Appeler maintenant'
    },
    {
      icon: '📧',
      title: 'Email',
      details: ['contact@eyele.net', 'info@eyele.net'],
      action: 'Envoyer un email'
    },
    {
      icon: '📍',
      title: 'Adresse',
      details: ['Douala, Cameroun', 'Boulevard de la Liberté'],
      action: 'Voir sur carte'
    },
    {
      icon: '⏰',
      title: 'Horaires',
      details: ['Lun-Ven: 8h-18h', 'Sam: 9h-16h'],
      action: 'Prendre RDV'
    }
  ];

  const services = [
    'Conseil Audiovisuel',
    'Couverture Événementielle',
    'Location Matériel',
    'Production TV',
    'Photographie',
    'Drone & Aérien',
    'Post-Production',
    'Autre'
  ];

  const budgets = [
    'Moins de 500.000 FCFA',
    '500.000 - 1.000.000 FCFA',
    '1.000.000 - 5.000.000 FCFA',
    'Plus de 5.000.000 FCFA',
    'Sur devis'
  ];

  const timelines = [
    'Urgent (1-2 semaines)',
    'Standard (3-4 semaines)',
    'Flexible (1-3 mois)',
    'À planifier'
  ];

  return (
    <div className="contact">
      <section className="hero-contact">
        <div className="container">
          <h1>CONTACTEZ EYELE STUDIOS</h1>
          <p>Transformons vos idées en expériences audiovisuelles exceptionnelles</p>
        </div>
      </section>

      <section className="contact-info-section">
        <div className="container">
          <h2>NOS COORDONNÉES</h2>
          <div className="contact-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-card">
                <div className="contact-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                <div className="contact-details">
                  {info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
                <button className="contact-action">{info.action}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <div className="form-container">
            <div className="form-header">
              <h2>DÉMARRER VOTRE PROJET</h2>
              <p>Remplissez ce formulaire et notre équipe vous contactera dans les 24 heures</p>
            </div>
            
            {submitMessage ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Message Envoyé!</h3>
                <p>{submitMessage}</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => setSubmitMessage('')}
                >
                  Nouveau Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
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
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Téléphone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
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
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Intéressé *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Sélectionnez un service</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="budget">Budget Estimé</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="">Sélectionnez une fourchette</option>
                      {budgets.map(budget => (
                        <option key={budget} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="timeline">Délai Souhaité</label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                    >
                      <option value="">Sélectionnez un délai</option>
                      {timelines.map(timeline => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Description du Projet *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Décrivez votre projet en détail..."
                    required
                  ></textarea>
                </div>

                <div className="form-actions">
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le Message'}
                  </button>
                  <Link to="/service" className="btn btn-secondary">
                    Voir Nos Services
                  </Link>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>QUESTIONS FRÉQUENTES</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Quels sont vos délais de livraison ?</h3>
              <p>Nos délais varient selon la complexité du projet. Pour une production simple, comptez 2-4 semaines. Les projets complexes peuvent nécessiter 2-3 mois.</p>
            </div>
            <div className="faq-item">
              <h3>Proposez-vous des forfaits ?</h3>
              <p>Oui, nous proposons des forfaits adaptés aux différents besoins et budgets. Contactez-nous pour un devis personnalisé.</p>
            </div>
            <div className="faq-item">
              <h3>Intervenez-vous à l\'international ?</h3>
              <p>Absolument! Nous réalisons des projets dans toute l\'Afrique et au-delà. Contactez-nous pour discuter de votre projet international.</p>
            </div>
            <div className="faq-item">
              <h3>Quels équipements proposez-vous en location ?</h3>
              <p>Nous proposons des caméras 4K/8K, drones professionnels, équipements d'éclairage, matériel sonore et bien plus encore.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-contact">
        <div className="container">
          <h2>PRÊT À COLLABORER ?</h2>
          <p>Notre équipe est disponible pour discuter de votre projet et vous proposer la meilleure solution audiovisuelle.</p>
          <div className="cta-buttons">
            <a href="tel:+237654258965" className="btn btn-primary">Appeler Maintenant</a>
            <Link to="/galerie" className="btn btn-secondary">Voir Nos Réalisations</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
