import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from './SEO';
import './Services.css';

export default function Services() {
  const navigate = useNavigate();
  
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
      <SEO 
        title="Our Services - Diostec | Cloud, AI, BI & Managed IT Services Dubai"
        description="Explore our comprehensive IT services: Cloud Solutions, AI Development, Business Intelligence, QA Testing, Managed Services, and Application Management. Transform your business with Diostec's expert solutions in Dubai."
        keywords="cloud services Dubai, AI solutions UAE, business intelligence, QA testing services, managed IT services, application management, IT consulting Dubai, enterprise solutions"
        canonical="https://diostec.com/services"
      />
      {/* SERVICES HERO SECTION */}
      <section className="services-hero-section">
        <div className="services-hero-container">
          <div className="services-breadcrumb">DIOSTEC / Services</div>
          
          <h1 className="services-hero-title">DIOSTEC SOFTWARE SERVICES</h1>
          
          <div className="services-hero-description">
            <p className="services-description-text">
              At Diostec Software, we build solutions Driven By Business. With over a decade of experience and more than 50 successful projects, we provide full-cycle custom software development tailored to your unique goals.
            </p>
            <p className="services-description-text">
              We partner with companies to streamline operations, strengthen security, and scale sustainably. From IT consulting to end-to-end development, our services are designed to drive measurable business outcomes—not just deliver code.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="services-about-section">
        <div className="services-about-content">
          <div className="services-about-left">
            <h2 className="services-about-title">
              ABOUT <span className="highlight">US</span>
            </h2>
            <div className="services-stat">
              <div className="services-stat-number">100+</div>
              <div className="services-stat-text">Skilled<br/>Professionals</div>
              <div className="services-profile-images">
                <div className="profile-circle"></div>
                <div className="profile-circle"></div>
                <div className="profile-circle"></div>
              </div>
            </div>
          </div>
          <div className="services-about-right">
            <p className="services-about-description">
              Our software development company is dedicated to providing exceptional service and support, ensuring your projects succeed and your needs are met. Here's why our clients trust us.
            </p>
            <button className="services-about-button" onClick={() => navigate('/about')}>
              About Us
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="services-features-section">
        <div className="services-features-grid">
          <div className="services-feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="6" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 6V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V6" stroke="currentColor" strokeWidth="2"/>
                <path d="M3 10H21" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="feature-title">Long-Term Partnerships & Support</h3>
            <p className="feature-description">
              With 80% of clients staying 7+ years and our team collaborating for over 5 years, we ensure dedicated long-term support.
            </p>
          </div>

          <div className="services-feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="feature-title">Faster Software Development</h3>
            <p className="feature-description">
              We cut development time by 50%, speeding up POC, prototypes, and delivery with pre-built solutions.
            </p>
          </div>

          <div className="services-feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="feature-title">Quality Assurance & Standards Compliance</h3>
            <p className="feature-description">
              Adherence to CMMI and ISO standards for continuous improvement, quality, and process optimization.
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
            <h3 className="feature-title">Agile and SCRUM Methodologies</h3>
            <p className="feature-description">
              Flexible, transparent, and collaborative project management using Agile and SCRUM methods.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="services-offer-section">
        <div className="services-offer-container">
          <h2 className="services-offer-title">
            WHAT WE <span className="highlight-blue">OFFER</span>
          </h2>

          <div className="services-offer-grid">
            {/* Row 1 - Shuffled: Digital Transformation, IT Consulting, DevOps, Infrastructure */}
            <div className="service-offer-card">
              <div className="service-offer-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 3H6C4.89543 3 4 3.89543 4 5V7M8 3H16M8 3V5M16 3H18C19.1046 3 20 3.89543 20 5V7M16 3V5M4 7V17M4 7H20M4 17V19C4 20.1046 4.89543 21 6 21H8M4 17H8M20 7V17M20 17V19C20 20.1046 19.1046 21 18 21H16M20 17H16M8 21V17M8 21H16M16 21V17M8 17H16" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="service-offer-title">Digital Transformation</h3>
              <p className="service-offer-description">
                Evaluation and modernization of existing systems to improve efficiency, competitiveness, and future-readiness with a detailed transformation plan.
              </p>
            </div>

            <div className="service-offer-card">
              <div className="service-offer-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="service-offer-title">IT Consulting</h3>
              <p className="service-offer-description">
                Expert advice to align IT strategies with business objectives, enhance security, and drive digital transformation.
              </p>
            </div>

            <div className="service-offer-card">
              <div className="service-offer-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4L20 20M4 20L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="service-offer-title">DevOps Consulting Services</h3>
              <p className="service-offer-description">
                End-to-end DevOps strategies to automate deployments, improve collaboration, and enhance software delivery speed, quality, and resilience.
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
              <h3 className="service-offer-title">Infrastructure Services</h3>
              <p className="service-offer-description">
                Comprehensive support for managing and optimizing IT infrastructure, including cloud migration, scalability, and performance improvements.
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
              <h3 className="service-offer-title">IT Support</h3>
              <p className="service-offer-description">
                Ongoing technical support and maintenance to ensure system reliability, security, and performance, minimizing downtime and disruptions.
              </p>
            </div>

            <div className="service-offer-card">
              <div className="service-offer-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="service-offer-title">Dedicated Development Team</h3>
              <p className="service-offer-description">
                Scalable, cross-functional engineering teams embedded into your workflow to accelerate delivery, reduce overhead, and adapt to evolving business needs.
              </p>
            </div>

            <div className="service-offer-card">
              <div className="service-offer-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="service-offer-title">Web Development</h3>
              <p className="service-offer-description">
                Full-cycle development focused on custom, user-friendly, and scalable solutions.
              </p>
            </div>

            <div className="service-offer-card">
              <div className="service-offer-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="service-offer-title">Mobile App Development</h3>
              <p className="service-offer-description">
                Tailored mobile app solutions to enhance customer engagement and business operations.
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
              <h3 className="service-offer-title">UI/UX Design</h3>
              <p className="service-offer-description">
                Expert design services to create intuitive, visually appealing interfaces for web and mobile applications.
              </p>
            </div>

            <div className="service-offer-card">
              <div className="service-offer-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="service-offer-title">Testing & QA</h3>
              <p className="service-offer-description">
                Comprehensive testing services, including unit, integration, and end-to-end (E2E) testing.
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
              <h3 className="service-offer-title">MVP Development</h3>
              <p className="service-offer-description">
                Rapid development of Minimum Viable Products to test ideas, validate concepts, and speed up time-to-market with minimal risk.
              </p>
            </div>

            <div className="service-offer-card">
              <div className="service-offer-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="service-offer-title">AI Development</h3>
              <p className="service-offer-description">
                Custom AI solutions to automate processes, enhance decision-making, and drive innovation tailored to your business needs.
              </p>
            </div>

            {/* Row 4 - ML, Product Discovery */}
            <div className="service-offer-card">
              <div className="service-offer-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="service-offer-title">ML Development</h3>
              <p className="service-offer-description">
                Machine learning services to build predictive models, optimize operations, and uncover insights from data for competitive advantage.
              </p>
            </div>

            <div className="service-offer-card">
              <div className="service-offer-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="service-offer-title">Product Discovery</h3>
              <p className="service-offer-description">
                Strategic discovery workshops to define product vision, identify requirements, and align technical solutions with business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Design & Development Section */}
      <section className="services-app-design-section">
        <div className="services-app-design-container">
          <h2 className="services-app-design-title">Application Design & Development</h2>
          <p className="services-app-design-subtitle">
            Highly functional and structured services that design and development services that enable considerable cost savings, improved quality, process improvements, and most importantly the benefits of high offshore staffing ratios.
          </p>

          <div className="services-app-design-grid">
            <div className="app-design-card">
              <div className="app-design-image">
                <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop" alt="Solution Architecture" />
              </div>
              <div className="app-design-content">
                <h3 className="app-design-card-title">Solution architecture & design services</h3>
                <p className="app-design-card-description">
                  Enabling your organization to best understand technology and chart out the most efficient software architecture to accelerate your business potential and drive transformative growth with innovative solutions.
                </p>
              </div>
            </div>

            <div className="app-design-card">
              <div className="app-design-image">
                <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop" alt="Prototype Development" />
              </div>
              <div className="app-design-content">
                <h3 className="app-design-card-title">Prototype development services</h3>
                <p className="app-design-card-description">
                  Diostec's expertise in developing complex applications enables us to shape your novel ideas to best understand their feasibility in the market, validate concepts, and accelerate time-to-market with minimal investment risk.
                </p>
              </div>
            </div>

            <div className="app-design-card">
              <div className="app-design-image">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" alt="Application Enhancement" />
              </div>
              <div className="app-design-content">
                <h3 className="app-design-card-title">Application enhancement services</h3>
                <p className="app-design-card-description">
                  Upgrading the capabilities of your existing applications to accommodate the latest technology features to meet your dynamic business requirements effectively, ensuring scalability, performance, and competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Approach Section */}
      <section className="services-maintenance-section">
        <div className="services-maintenance-container">
          <div className="maintenance-left">
            <h2 className="maintenance-title">Diostec's Approach for Maintenance</h2>
            <p className="maintenance-description">
              Diostec's four-stage approach comprises application maintenance and production support that is supplemented with a unique set of additional processes, which bring measurable cost advantage and operational efficiency to your business operations.
            </p>
          </div>

          <div className="maintenance-right">
            <div className="maintenance-stage">
              <div className="stage-header initiation">
                <h3 className="stage-title">Initiation</h3>
              </div>
              <ul className="stage-list">
                <li>Assessment</li>
                <li>Finalize Scope</li>
                <li>Requirements</li>
                <li>Contract</li>
                <li>Environment</li>
                <li>Setup</li>
                <li>NDA</li>
                <li>Prioritization</li>
                <li>Communication</li>
                <li>Strategy</li>
              </ul>
            </div>

            <div className="maintenance-stage">
              <div className="stage-header knowledge">
                <h3 className="stage-title">Knowledge Acquisition</h3>
              </div>
              <ul className="stage-list">
                <li>Business</li>
                <li>Process</li>
                <li>Technology</li>
                <li>Standards</li>
                <li>Execution Strategy</li>
                <li>History</li>
                <li>Analysis</li>
                <li>Documentation</li>
              </ul>
            </div>

            <div className="maintenance-stage">
              <div className="stage-header transition">
                <h3 className="stage-title">Transition & Pilot</h3>
              </div>
              <ul className="stage-list">
                <li>Clarification</li>
                <li>Pilot Planning</li>
                <li>Pilot Execution</li>
                <li>Tracking Metrics</li>
                <li>Reporting</li>
                <li>Improvement Plan</li>
              </ul>
            </div>

            <div className="maintenance-stage">
              <div className="stage-header operational">
                <h3 className="stage-title">Operational State</h3>
              </div>
              <ul className="stage-list">
                <li>Emergency Data Fixes</li>
                <li>Emergency Code Fixes</li>
                <li>CR Planning & execution</li>
                <li>Tracking Metrics</li>
                <li>SLA Reporting</li>
                <li>Causal Analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="services-process-section">
        <div className="services-process-container">
          <div className="process-image">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop" alt="Professional Team Member" />
          </div>

          <div className="process-content">
            <h2 className="process-title">OUR PROCESS</h2>

            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3 className="step-title">NDA & Introductory Session</h3>
                <p className="step-description">
                  Our cooperation begins by signing an NDA and scheduling a quick introductory call to understand your needs and requirements. We then explain how our expertise can help you achieve your goals.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3 className="step-title">Creating Full Proposal for Scope Doc</h3>
                <p className="step-description">
                  We send a proposal to start working on a Scope Document. This detailed guide outlines the structure and design of a software system to align technical implementation and business needs.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="step-title">Working on Scope Doc with Tech Leads</h3>
                <p className="step-description">
                  We set up a call with our tech leads, who dive into the project details and create a Scope Doc with you. This process typically involves 3-5 calls, spanning 40-60 hours, and is completed within 1-2 weeks.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3 className="step-title">Finalizing the Development Proposal</h3>
                <p className="step-description">
                  We finalize the scope of work and submit a detailed proposal for the entire development process. This includes key milestones, deliverables, and timelines to ensure transparency and clear expectations.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3 className="step-title">Working with the Development Team</h3>
                <p className="step-description">
                  We plan and work in weekly sprints using Scrum methodology. The team holds daily 30-minute stand-up meetings to inform and involve you in updates, releases, and retrospectives. We use GitLab to manage and track tasks.
                </p>
              </div>
            </div>

            <div className="process-contact-card">
              <div className="contact-info">
                <h3 className="contact-name">Diostec Team</h3>
                <p className="contact-role">Business Development Manager</p>
              </div>
              <button className="contact-button">Discuss Your Project</button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Benefits Section */}
      <section className="services-benefits-section">
        <div className="services-benefits-container">
          <h2 className="benefits-title">Business Benefits</h2>

          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 2L9 6M15 2L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="benefit-title">Significant improvement in application stability</h3>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M2 12C2 10.6868 2.25866 9.38642 2.7612 8.17317C3.26375 6.95991 4.00035 5.85752 4.92893 4.92893" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="benefit-title">Cost reduction due to our variable cost approach</h3>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title">Meeting the business requirements on time</h3>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title">Knowledge Management</h3>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 13L3 8L8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title">Reduced risk of operations</h3>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="1" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="benefit-title">Improved maintenance productivity</h3>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="benefit-title">Better predictability</h3>
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
              <span className="email-text">info@diostec.com</span>
            </div>

            <div className="footer-nav">
              <div className="footer-nav-item" onClick={() => { navigate('/services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ cursor: 'pointer' }}>
                <span className="footer-nav-label">WHAT WE DO?</span>
                <h3 className="footer-nav-title">Services</h3>
              </div>

              <div className="footer-nav-item" onClick={() => { navigate('/about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ cursor: 'pointer' }}>
                <span className="footer-nav-label">WHO WE ARE?</span>
                <h3 className="footer-nav-title">About Us</h3>
              </div>

              <div className="footer-nav-item">
                <span className="footer-nav-label">HOW WE DELIVER</span>
                <h3 className="footer-nav-title">Contact Us</h3>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="footer-social">
              <div className="social-link">
                <span className="social-icon">f</span>
                <span className="social-text">FACEBOOK</span>
                <span className="social-arrow">↗</span>
              </div>
              <div className="social-link">
                <span className="social-icon">𝕏</span>
                <span className="social-text">TWITTER</span>
                <span className="social-arrow">↗</span>
              </div>
              <div className="social-link">
                <span className="social-icon">in</span>
                <span className="social-text">LINKEDIN</span>
                <span className="social-arrow">↗</span>
              </div>
              <div className="social-link">
                <span className="social-icon">▶</span>
                <span className="social-text">YOUTUBE</span>
                <span className="social-arrow">↗</span>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
              <div className="footer-address">
                <span className="address-icon">📍</span>
                <span className="address-text">Conrad Office Tower, Sheikh Zayed Road, 115143 Dubai, UAE</span>
              </div>

              <div className="footer-copyright">
                Copyright © 2018 diostec, All rights reserved.
              </div>

              <div className="footer-phone">
                <span className="phone-icon">📞</span>
                <span className="phone-text">+91 98405 70418</span>
                <button className="scroll-top-footer">↑</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
