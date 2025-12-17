import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../useTranslation';
import SEO from './SEO';
import './Contact.css';

export default function Contact() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState('');
  
  // Cursor Glow Effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const glow = document.querySelector('.cursor-glow');
      if (glow) {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  // Scroll Reveal Effect
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/meoyzyvv', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus(''), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <>
      <div className="cursor-glow"></div>
      <SEO 
        title="Contact Us - Diostec | Get In Touch With Our Experts"
        description="Ready to transform your business with AI and IT solutions? Contact Diostec today to discuss your project. Our offices in Dubai and Chennai are ready to help."
        keywords="contact Diostec, AI consulting Dubai, IT services contact, software development inquiry, Dubai office, Chennai office"
        canonical="https://diostec.com/contact"
      />
      
      {/* Contact Hero Section */}
      <section className="contact-hero-section">
        <div className="contact-hero-container">
          <span className="contact-label">{t('contact', 'label')}</span>
          <h1 className="contact-hero-title" dangerouslySetInnerHTML={{ __html: t('contact', 'heroTitle') }}></h1>
          
          <p className="contact-hero-description">
            {t('contact', 'heroDesc1')}
          </p>
          
          <p className="contact-hero-description">
            {t('contact', 'heroDesc2')}
          </p>
          
          <p className="contact-hero-description">
            {t('contact', 'heroDesc3')}
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section reveal">
        <div className="contact-form-container">
          <div className="contact-form-left reveal">
            <div className="map-container">
              <iframe
                title="Dubai Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.0989076428397!2d55.27493!3d25.092883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b4d0c6f5d3f%3A0x1e2a3b4c5d6e7f8!2sConrad%20Dubai!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="contact-form-right reveal">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group reveal">
                <label htmlFor="firstName">{t('contact', 'firstNameLabel')}</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group reveal">
                <label htmlFor="lastName">{t('contact', 'lastNameLabel')}</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group reveal">
                <label htmlFor="email">{t('contact', 'emailLabel')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group reveal">
                <label htmlFor="company">{t('contact', 'companyLabel')}</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group form-group-full reveal">
                <label htmlFor="message">{t('contact', 'messageLabel')}</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="form-textarea"
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                {t('contact', 'submitButton')}
              </button>

              {formStatus === 'success' && (
                <div className="form-message success">{t('contact', 'successMessage')}</div>
              )}
              {formStatus === 'error' && (
                <div className="form-message error">{t('contact', 'errorMessage')}</div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <section className="footer-section">
        <div className="footer-container">
          <div className="footer-background-text">DIOSTEC</div>
          
          <div className="footer-content">
            <div className="footer-email">
              <span className="email-icon">✉</span>
              <span className="email-text">info@diostecllc.com</span>
            </div>

            <div className="footer-nav">
         <div className="footer-nav-item" onClick={() => { navigate('/services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ cursor: 'pointer' }}>
                <span className="footer-nav-label">{t('home', 'footerWhatLabel')}</span>
                <h3 className="footer-nav-title">{t('home', 'footerWhatTitle')}</h3>
              </div>

              <div className="footer-nav-item" onClick={() => { navigate('/about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ cursor: 'pointer' }}>
                <span className="footer-nav-label">{t('home', 'footerWhoLabel')}</span>
                <h3 className="footer-nav-title">{t('home', 'footerWhoTitle')}</h3>
              </div>

              <div className="footer-nav-item" onClick={() => { navigate('/contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ cursor: 'pointer' }}>
                <span className="footer-nav-label">{t('home', 'footerHowLabel')}</span>
                <h3 className="footer-nav-title">{t('home', 'footerHowTitle')}</h3>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="footer-social">
              <a href="https://www.facebook.com/share/1D7R5mkM1L/" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">f</span>
                <span className="social-text">{t('home', 'footerFacebook')}</span>
                <span className="social-arrow">↗</span>
              </a>
              <div className="social-link">
                <span className="social-icon">𝕏</span>
                <span className="social-text">{t('home', 'footerTwitter')}</span>
                <span className="social-arrow">↗</span>
              </div>
              <a href="https://www.linkedin.com/company/diostec-software-solutions/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">in</span>
                <span className="social-text">{t('home', 'footerLinkedin')}</span>
                <span className="social-arrow">↗</span>
              </a>
              <a href="https://www.instagram.com/diostec_software_solution/" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">📷</span>
                <span className="social-text">{t('home', 'footerInstagram')}</span>
                <span className="social-arrow">↗</span>
              </a>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
              <div className="footer-address">
                <span className="address-icon">📍</span>
                <span className="address-text">{t('home', 'footerAddress')}</span>
              </div>

              <div className="footer-copyright">
                {t('home', 'footerCopyright')}
              </div>

              <div className="footer-phone">
                <div className="phone-item">
                  <span className="phone-icon">📞</span>
                  <span className="phone-text">UAE: +971 507853357</span>
                </div>
                <div className="phone-item">
                  <span className="phone-icon">📞</span>
                  <span className="phone-text">India: +91 98405 70418</span>
                </div>
                <button className="scroll-top-footer">↑</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
