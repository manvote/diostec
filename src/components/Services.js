import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../useTranslation';
import SEO from './SEO';
import './Services.css';

export default function Services() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
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

  return (
    <>
      <div className="cursor-glow"></div>
      <SEO 
        title="Our Services - Diostec | Cloud, AI, BI & Managed IT Services Dubai"
        description="Explore our comprehensive IT services: Cloud Solutions, AI Development, Business Intelligence, QA Testing, Managed Services, and Application Management. Transform your business with Diostec's expert solutions in Dubai."
        keywords="cloud services Dubai, AI solutions UAE, business intelligence, QA testing services, managed IT services, application management, IT consulting Dubai, enterprise solutions"
        canonical="https://diostec.com/services"
      />
      {/* SERVICES HERO SECTION */}
      <section className="services-hero-section">
        <div className="services-hero-container">
          <div className="services-breadcrumb">{t('services', 'breadcrumb')}</div>
          
          <h1 className="services-hero-title">{t('services', 'heroTitle')}</h1>
          
          <div className="services-hero-description">
            <p className="services-description-text">
              {t('services', 'heroPara1')}
            </p>
            <p className="services-description-text">
              {t('services', 'heroPara2')}
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="services-about-section reveal">
        <div className="services-about-content">
          <div className="services-about-left">
            <h2 className="services-about-title">
              {t('services', 'aboutTitle')} <span className="highlight">{t('services', 'aboutTitleHighlight')}</span>
            </h2>
            <div className="services-stat">
              <div className="services-stat-number">{t('services', 'aboutStatNumber')}</div>
              <div className="services-stat-text" dangerouslySetInnerHTML={{ __html: t('services', 'aboutStatText') }}></div>
              <div className="services-profile-images">
                <div className="profile-circle"></div>
                <div className="profile-circle"></div>
                <div className="profile-circle"></div>
              </div>
            </div>
          </div>
          <div className="services-about-right">
            <p className="services-about-description">
              {t('services', 'aboutDesc')}
            </p>
            <button className="services-about-button" onClick={() => navigate('/about')}>
              {t('services', 'aboutButton')}
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="services-features-section reveal">
        <div className="services-features-grid">
          <div className="services-feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="6" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 6V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V6" stroke="currentColor" strokeWidth="2"/>
                <path d="M3 10H21" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="feature-title">{t('services', 'feature1Title')}</h3>
            <p className="feature-description">
              {t('services', 'feature1Desc')}
            </p>
          </div>

          <div className="services-feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="feature-title">{t('services', 'feature2Title')}</h3>
            <p className="feature-description">
              {t('services', 'feature2Desc')}
            </p>
          </div>

          <div className="services-feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="feature-title">{t('services', 'feature3Title')}</h3>
            <p className="feature-description">
              {t('services', 'feature3Desc')}
            </p>
          </div>

          <div className="services-feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 1V4M12 20V23M23 12H20M4 12H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M19.07 4.93L16.95 7.05M7.05 16.95L4.93 19.07M19.07 19.07L16.95 16.95M7.05 7.05L4.93 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="feature-title">{t('services', 'feature4Title')}</h3>
            <p className="feature-description">
              {t('services', 'feature4Desc')}
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="services-offer-section reveal">
        <div className="services-offer-container">
          <h2 className="services-offer-title">
            {t('services', 'offerTitlePart1')} <span className="highlight-blue">{t('services', 'offerTitlePart2')}</span>
          </h2>

          <div className="services-offer-grid">
            {/* Row 1 - Shuffled: Digital Transformation, IT Consulting, DevOps, Infrastructure */}
            <div className="service-offer-card">
              <div className="service-offer-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 3H6C4.89543 3 4 3.89543 4 5V7M8 3H16M8 3V5M16 3H18C19.1046 3 20 3.89543 20 5V7M16 3V5M4 7V17M4 7H20M4 17V19C4 20.1046 4.89543 21 6 21H8M4 17H8M20 7V17M20 17V19C20 20.1046 19.1046 21 18 21H16M20 17H16M8 21V17M8 21H16M16 21V17M8 17H16" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="service-offer-title">{t('services', 'offer1Title')}</h3>
              <p className="service-offer-description">
                {t('services', 'offer1Desc')}
              </p>
            </div>

            <div className="service-offer-card">
              <div className="service-offer-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="service-offer-title">{t('services', 'offer2Title')}</h3>
              <p className="service-offer-description">
                {t('services', 'offer2Desc')}
              </p>
            </div>

            <div className="service-offer-card">
              <div className="service-offer-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4L20 20M4 20L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="service-offer-title">{t('services', 'offer3Title')}</h3>
              <p className="service-offer-description">
                {t('services', 'offer3Desc')}
              </p>
            </div>

            <div className="service-offer-card">
              <div className="service-offer-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                  <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                  <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                  <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="service-offer-title">{t('services', 'offer4Title')}</h3>
              <p className="service-offer-description">
                {t('services', 'offer4Desc')}
              </p>
            </div>

            {/* Row 2 - IT Support, Dedicated Team, Web Dev, Mobile Dev */}
            <div className="service-offer-card">
              <div className="service-offer-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="service-offer-title">{t('services', 'offer5Title')}</h3>
              <p className="service-offer-description">
                {t('services', 'offer5Desc')}
              </p>
            </div>

            <div className="service-offer-card">
              <div className="service-offer-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="service-offer-title">{t('services', 'offer6Title')}</h3>
              <p className="service-offer-description">
                {t('services', 'offer6Desc')}
              </p>
            </div>

            <div className="service-offer-card">
              <div className="service-offer-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="service-offer-title">{t('services', 'offer7Title')}</h3>
              <p className="service-offer-description">
                {t('services', 'offer7Desc')}
              </p>
            </div>

            <div className="service-offer-card">
              <div className="service-offer-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="service-offer-title">{t('services', 'offer8Title')}</h3>
              <p className="service-offer-description">
                {t('services', 'offer8Desc')}
              </p>
            </div>

            {/* Row 3 - UI/UX, Testing, MVP, AI */}
            <div className="service-offer-card">
              <div className="service-offer-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="service-offer-title">{t('services', 'offer9Title')}</h3>
              <p className="service-offer-description">
                {t('services', 'offer9Desc')}
              </p>
            </div>

            <div className="service-offer-card">
              <div className="service-offer-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="service-offer-title">{t('services', 'offer10Title')}</h3>
              <p className="service-offer-description">
                {t('services', 'offer10Desc')}
              </p>
            </div>

            <div className="service-offer-card">
              <div className="service-offer-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="service-offer-title">{t('services', 'offer11Title')}</h3>
              <p className="service-offer-description">
                {t('services', 'offer11Desc')}
              </p>
            </div>

            <div className="service-offer-card">
              <div className="service-offer-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="service-offer-title">{t('services', 'offer12Title')}</h3>
              <p className="service-offer-description">
                {t('services', 'offer12Desc')}
              </p>
            </div>

            {/* Row 4 - ML, Product Discovery */}
            <div className="service-offer-card">
              <div className="service-offer-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="service-offer-title">{t('services', 'offer13Title')}</h3>
              <p className="service-offer-description">
                {t('services', 'offer13Desc')}
              </p>
            </div>

            <div className="service-offer-card">
              <div className="service-offer-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="service-offer-title">{t('services', 'offer14Title')}</h3>
              <p className="service-offer-description">
                {t('services', 'offer14Desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Design & Development Section */}
      <section className="services-app-design-section reveal">
        <div className="services-app-design-container">
          <h2 className="services-app-design-title">{t('services', 'appDesignTitle')}</h2>
          <p className="services-app-design-subtitle">
            {t('services', 'appDesignSubtitle')}
          </p>

          <div className="services-app-design-grid">
            <div className="app-design-card">
              <div className="app-design-image">
                <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop" alt="Solution Architecture" />
              </div>
              <div className="app-design-content">
                <h3 className="app-design-card-title">{t('services', 'appDesign1Title')}</h3>
                <p className="app-design-card-description">
                  {t('services', 'appDesign1Desc')}
                </p>
              </div>
            </div>

            <div className="app-design-card">
              <div className="app-design-image">
                <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop" alt="Prototype Development" />
              </div>
              <div className="app-design-content">
                <h3 className="app-design-card-title">{t('services', 'appDesign2Title')}</h3>
                <p className="app-design-card-description">
                  {t('services', 'appDesign2Desc')}
                </p>
              </div>
            </div>

            <div className="app-design-card">
              <div className="app-design-image">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" alt="Application Enhancement" />
              </div>
              <div className="app-design-content">
                <h3 className="app-design-card-title">{t('services', 'appDesign3Title')}</h3>
                <p className="app-design-card-description">
                  {t('services', 'appDesign3Desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Approach Section */}
      <section className="services-maintenance-section reveal">
        <div className="services-maintenance-container">
          <div className="maintenance-left">
            <h2 className="maintenance-title">{t('services', 'maintenanceTitle')}</h2>
            <p className="maintenance-description">
              {t('services', 'maintenanceDesc')}
            </p>
          </div>

          <div className="maintenance-right">
            <div className="maintenance-stage">
              <div className="stage-header initiation">
                <h3 className="stage-title">{t('services', 'maintenanceStage1')}</h3>
              </div>
              <ul className="stage-list">
                <li>{t('services', 'stage1Item1')}</li>
                <li>{t('services', 'stage1Item2')}</li>
                <li>{t('services', 'stage1Item3')}</li>
                <li>{t('services', 'stage1Item4')}</li>
                <li>{t('services', 'stage1Item5')}</li>
                <li>{t('services', 'stage1Item6')}</li>
                <li>{t('services', 'stage1Item7')}</li>
                <li>{t('services', 'stage1Item8')}</li>
                <li>{t('services', 'stage1Item9')}</li>
                <li>{t('services', 'stage1Item10')}</li>
              </ul>
            </div>

            <div className="maintenance-stage">
              <div className="stage-header knowledge">
                <h3 className="stage-title">{t('services', 'maintenanceStage2')}</h3>
              </div>
              <ul className="stage-list">
                <li>{t('services', 'stage2Item1')}</li>
                <li>{t('services', 'stage2Item2')}</li>
                <li>{t('services', 'stage2Item3')}</li>
                <li>{t('services', 'stage2Item4')}</li>
                <li>{t('services', 'stage2Item5')}</li>
                <li>{t('services', 'stage2Item6')}</li>
                <li>{t('services', 'stage2Item7')}</li>
                <li>{t('services', 'stage2Item8')}</li>
              </ul>
            </div>

            <div className="maintenance-stage">
              <div className="stage-header transition">
                <h3 className="stage-title">{t('services', 'maintenanceStage3')}</h3>
              </div>
              <ul className="stage-list">
                <li>{t('services', 'stage3Item1')}</li>
                <li>{t('services', 'stage3Item2')}</li>
                <li>{t('services', 'stage3Item3')}</li>
                <li>{t('services', 'stage3Item4')}</li>
                <li>{t('services', 'stage3Item5')}</li>
                <li>{t('services', 'stage3Item6')}</li>
              </ul>
            </div>

            <div className="maintenance-stage">
              <div className="stage-header operational">
                <h3 className="stage-title">{t('services', 'maintenanceStage4')}</h3>
              </div>
              <ul className="stage-list">
                <li>{t('services', 'stage4Item1')}</li>
                <li>{t('services', 'stage4Item2')}</li>
                <li>{t('services', 'stage4Item3')}</li>
                <li>{t('services', 'stage4Item4')}</li>
                <li>{t('services', 'stage4Item5')}</li>
                <li>{t('services', 'stage4Item6')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="services-process-section reveal">
        <div className="services-process-container">
          <div className="process-image">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop" alt="Professional Team Member" />
          </div>

          <div className="process-content">
            <h2 className="process-title">{t('services', 'processTitle')}</h2>

            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3 className="step-title">{t('services', 'process1Title')}</h3>
                <p className="step-description">
                  {t('services', 'process1Desc')}
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3 className="step-title">{t('services', 'process2Title')}</h3>
                <p className="step-description">
                  {t('services', 'process2Desc')}
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="step-title">{t('services', 'process3Title')}</h3>
                <p className="step-description">
                  {t('services', 'process3Desc')}
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3 className="step-title">{t('services', 'process4Title')}</h3>
                <p className="step-description">
                  {t('services', 'process4Desc')}
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3 className="step-title">{t('services', 'process5Title')}</h3>
                <p className="step-description">
                  {t('services', 'process5Desc')}
                </p>
              </div>
            </div>

            <div className="process-contact-card">
              <div className="contact-info">
                <h3 className="contact-name">{t('services', 'contactName')}</h3>
                <p className="contact-role">{t('services', 'contactRole')}</p>
              </div>
              <button className="contact-button">{t('services', 'contactButton')}</button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Benefits Section */}
      <section className="services-benefits-section reveal">
        <div className="services-benefits-container">
          <h2 className="benefits-title">{t('services', 'benefitsTitle')}</h2>

          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 2L9 6M15 2L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="benefit-title">{t('services', 'benefit1')}</h3>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M2 12C2 10.6868 2.25866 9.38642 2.7612 8.17317C3.26375 6.95991 4.00035 5.85752 4.92893 4.92893" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="benefit-title">{t('services', 'benefit2')}</h3>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title">{t('services', 'benefit3')}</h3>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title">{t('services', 'benefit4')}</h3>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 13L3 8L8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title">{t('services', 'benefit5')}</h3>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="1" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="benefit-title">{t('services', 'benefit6')}</h3>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="benefit-title">{t('services', 'benefit7')}</h3>
            </div>
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

              <button className="scroll-top-footer">↑</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
