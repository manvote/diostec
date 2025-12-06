import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutUs.css';

export default function AboutUs() {
  const navigate = useNavigate();
  
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
      {/* ABOUT US HERO SECTION */}
      <section className="about-hero-section">
        <div className="about-hero-container">
          <div className="about-breadcrumb">Diostec / About us</div>
          
          <h1 className="about-hero-title">ABOUT US</h1>
          
          <div className="about-hero-description">
            <p className="about-description-text">
              At Diostec, we believe in the transformative power of technology and the boundless <span className="highlight-orange">potential of individuals.</span> <span className="highlight-italic">Established in 2018</span> with a vision to bridge the gap between talent and opportunity, we specialize in <span className="highlight-orange">IT Services and AI productes</span> services that propel both businesses and careers forward.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="about-stats-grid">
            <div className="stat-card reveal">
              <h3 className="stat-number">100+</h3>
              <p className="stat-label">Successfully delivered projects</p>
            </div>

            <div className="stat-card reveal">
              <h3 className="stat-number">100+</h3>
              <p className="stat-label">Skilled software engineers</p>
            </div>

            <div className="stat-card reveal">
              <h3 className="stat-number">7 years</h3>
              <p className="stat-label">is the average employee tenure</p>
            </div>

            <div className="stat-card reveal">
              <h3 className="stat-number">7 years</h3>
              <p className="stat-label">of client lifetime</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO ENGAGE WITH US SECTION */}
      <section className="engage-section">
        <div className="engage-container">
          <h2 className="engage-title">HOW TO ENGAGE WITH US</h2>

          <div className="engage-cards">
            {/* Card 1 */}
            <div className="engage-card reveal">
              <div className="engage-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="5" width="20" height="14" rx="2"/>
                  <path d="M2 10h20"/>
                </svg>
              </div>
              <h3 className="engage-card-title">Flexible Engagement Models</h3>
              <p className="engage-card-description">
                Choose from our tailored engagement models designed to fit your unique business needs. Whether you need dedicated teams, project-based collaboration, or hourly consulting, we adapt to your requirements and budget for maximum efficiency.
              </p>
            </div>

            {/* Card 2 */}
            <div className="engage-card reveal">
              <div className="engage-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="engage-card-title">Agile Development Process</h3>
              <p className="engage-card-description">
                Experience seamless collaboration with our agile methodology. We deliver in sprints, ensuring continuous feedback, rapid iterations, and transparent progress tracking. Stay involved at every stage and see your vision come to life incrementally.
              </p>
            </div>

            {/* Card 3 */}
            <div className="engage-card reveal">
              <div className="engage-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="engage-card-title">Dedicated Expert Teams</h3>
              <p className="engage-card-description">
                Get access to highly skilled professionals who become an extension of your team. Our experts bring years of industry experience, cutting-edge technical knowledge, and a commitment to delivering excellence while maintaining complete control over your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE BUILD PRODUCTS SECTION */}
      <section className="build-products-section">
        <div className="build-products-container">
          <div className="build-products-header">
            <h2 className="build-products-title">HOW DO WE ACTUALLY<br />BUILD PRODUCTS?</h2>
            <p className="build-products-subtitle">
              We've distilled 07 years of expertise into ready-to-use solutions, making project setup simpler and reducing development time by 30-50%.
            </p>
          </div>

          <div className="build-products-content">
            {/* Left Side - Timeline */}
            <div className="build-timeline-wrapper">
              {/* Top Note */}
              <div className="timeline-note timeline-note-top reveal">
                <p className="timeline-note-text">
                  <span className="note-blue">Ready-to-use plugins and UI elements</span><br />
                  <span className="note-blue">improve the development speed.</span>
                </p>
              </div>

              {/* Timeline */}
              <div className="build-timeline">
                {/* Vertical Line */}
                <div className="timeline-line"></div>

                {/* Stage 1 */}
                <div className="timeline-stage stage-1 reveal">
                  <div className="stage-point"></div>
                  <div className="stage-label">Discovery &<br />Product Planning</div>
                  <div className="stage-bar">
                    <div className="bar-fill bar-30">
                      <span className="bar-text">-30%</span>
                    </div>
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="timeline-stage stage-2 reveal">
                  <div className="stage-point"></div>
                  <div className="stage-label">Development<br />Project Planning</div>
                  <div className="stage-bar">
                    <div className="bar-fill bar-50">
                      <span className="bar-text">-50%</span>
                    </div>
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="timeline-stage stage-3 reveal">
                  <div className="stage-point"></div>
                  <div className="stage-label">Development<br />Stage</div>
                  <div className="stage-bar">
                    <div className="bar-fill bar-50">
                      <span className="bar-text">-50%</span>
                    </div>
                  </div>
                </div>

                {/* Stage 4 */}
                <div className="timeline-stage stage-4 reveal">
                  <div className="stage-point"></div>
                  <div className="stage-label">Launch &<br />Further Iterations</div>
                </div>

                {/* Stage 5 */}
                <div className="timeline-stage stage-5 reveal">
                  <div className="stage-point"></div>
                  <div className="stage-label">Support and<br />Maintenance</div>
                </div>
              </div>

              {/* Bottom Note */}
              <div className="timeline-note timeline-note-bottom reveal">
                <p className="timeline-note-text">
                  <span className="note-blue">Built-in tools reduce the time spent on</span><br />
                  <span className="note-blue">proof-of-concept, rapid prototyping, and</span><br />
                  project planning.
                </p>
              </div>
            </div>

            {/* Right Side - Chart */}
            <div className="build-chart-wrapper reveal">
              <div className="chart-content">
                <div className="chart-circle">
                  <svg viewBox="0 0 200 200" className="donut-chart">
                    <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="35"/>
                    <circle cx="100" cy="100" r="70" fill="none" stroke="#d4915d" strokeWidth="35" 
                      strokeDasharray="440" strokeDashoffset="176" transform="rotate(-90 100 100)"/>
                  </svg>
                  <div className="chart-center">
                    <div className="chart-number">59%</div>
                  </div>
                </div>

                <div className="chart-labels">
                  <div className="chart-label-item">
                    <span className="label-text">DIOSTEC</span>
                  </div>
                  <div className="chart-label-item">
                    <span className="label-text">Other</span>
                  </div>
                </div>

                <p className="chart-save-text">
                  You'll save up to <span className="save-percentage">41%</span><br />
                  total development time
                </p>
              </div>

              <button className="build-cta-btn">Pre-Built Solutions</button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WORK WITH US SECTION */}
      <section className="why-work-section">
        <div className="why-work-container">
          <h2 className="why-work-title">WHY WORK WITH US</h2>

          <div className="why-work-grid">
            {/* Card 1 */}
            <div className="why-work-card reveal">
              <div className="why-work-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <h3 className="why-work-card-title">Long-Term Cooperation &<br />Support</h3>
              <p className="why-work-card-description">
                Over 80% of our clients partner with us for 7+ years, supported by a dedicated team with 5+ years of collaboration experience.
              </p>
            </div>

            {/* Card 2 */}
            <div className="why-work-card reveal">
              <div className="why-work-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
              </div>
              <h3 className="why-work-card-title">Accelerated Software<br />Development</h3>
              <p className="why-work-card-description">
                We reduce development time by 50% through pre-built solutions, ensuring faster delivery of POCs, prototypes, and final products.
              </p>
            </div>

            {/* Card 3 */}
            <div className="why-work-card reveal">
              <div className="why-work-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <h3 className="why-work-card-title">Quality Assurance &<br />Compliance</h3>
              <p className="why-work-card-description">
                Committed to CMMI and ISO standards, we ensure consistent quality, process optimization, and continuous improvement.
              </p>
            </div>

            {/* Card 4 */}
            <div className="why-work-card reveal">
              <div className="why-work-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <h3 className="why-work-card-title">Agile & SCRUM Practices</h3>
              <p className="why-work-card-description">
                We leverage Agile and SCRUM methodologies to enable a flexible, transparent, and collaborative project management approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR LEGACY SECTION */}
      <section className="legacy-section">
        <div className="legacy-container">
          <div className="legacy-background-logo">DIOSTEC</div>
          
          <div className="legacy-content">
            <h2 className="legacy-title">Our Legacy</h2>
            
            <p className="legacy-text legacy-intro">
              <strong>Diostec Software Solutions</strong> was founded by a team of passionate individuals 7 years ago, fuelled by their vision and determination to create a better future through technology.
            </p>

            <p className="legacy-text">
              Shortly after its inception, Diostec Software Solutions has positioned itself as one of the most sought-after technology companies over the world through our legendary product 'Forms*Converter' which eases Oracle Forms Migration.
            </p>

            <p className="legacy-text">
              We started as a product development company and eventually extended our wings to legacy migrations, and now we have transcended into a Technology Company that houses competences for a large spectrum of IT practices.
            </p>

            <p className="legacy-text">
              Diostec Software Solutions is one of the few companies that has witnessed the IT revolution in the information era and has grown along with it thereby combining experiences and also understanding its intricate nuances.
            </p>

            <p className="legacy-text legacy-highlight">
              <em>7 years in the industry, footprint in over 20 countries and our commendable top-notch collaborations have presented us with an impeccable volume of knowledge and resources that are deployed to best use for today's and future technology demands.</em>
            </p>
          </div>
        </div>
      </section>

      {/* OUR CAPABILITIES SECTION */}
      <section className="capabilities-section">
        <div className="capabilities-container">
          <h2 className="capabilities-title">Our Capabilities</h2>
          <p className="capabilities-subtitle">
            Diostec has spread its wings of capabilities from a simple migration support company to the universe of following IT capabilities to meet the dynamic demands of the clients in agile and swifter routines
          </p>

          <div className="capabilities-grid">
            {/* Row 1 */}
            <div className="capability-item reveal">
              <div className="capability-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="7.5 4.21 12 6.81 16.5 4.21"/>
                  <polyline points="7.5 19.79 7.5 14.6 3 12"/>
                  <polyline points="21 12 16.5 14.6 16.5 19.79"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <h3 className="capability-title">Application Migration<br />and Re-engineering</h3>
            </div>

            <div className="capability-item reveal">
              <div className="capability-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <ellipse cx="12" cy="5" rx="9" ry="3"/>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                </svg>
              </div>
              <h3 className="capability-title">Database<br />Migration</h3>
            </div>

            <div className="capability-item reveal">
              <div className="capability-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h3 className="capability-title">Application<br />Development</h3>
            </div>

            {/* Row 2 */}
            <div className="capability-item reveal">
              <div className="capability-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </div>
              <h3 className="capability-title">Application Maintenance<br />& Production Support</h3>
            </div>

            <div className="capability-item reveal">
              <div className="capability-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <h3 className="capability-title">Software<br />Testing</h3>
            </div>

            <div className="capability-item reveal">
              <div className="capability-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="capability-title">IT<br />Consulting</h3>
            </div>

            {/* Row 3 */}
            <div className="capability-item reveal">
              <div className="capability-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="2"/>
                  <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/>
                </svg>
              </div>
              <h3 className="capability-title">System<br />Integration</h3>
            </div>

            <div className="capability-item reveal">
              <div className="capability-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              </div>
              <h3 className="capability-title">Infrastructure<br />Management Services</h3>
            </div>

            <div className="capability-item reveal">
              <div className="capability-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
              </div>
              <h3 className="capability-title">Mobile Application<br />Development</h3>
            </div>

            {/* Row 4 */}
            <div className="capability-item reveal">
              <div className="capability-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4"/>
                  <path d="M12 8h.01"/>
                </svg>
              </div>
              <h3 className="capability-title">Machine<br />Learning</h3>
            </div>

            <div className="capability-item reveal">
              <div className="capability-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
                </svg>
              </div>
              <h3 className="capability-title">Cloud<br />Services</h3>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES SECTION */}
      <section className="values-section">
        <div className="values-container">
          <h2 className="values-title">Our Values</h2>

          <div className="values-grid">
            {/* Row 1 - Top 4 values */}
            <div className="value-card reveal">
              <div className="value-icon">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 8L28 12L24 8M32 8L36 12L40 8M32 8V4" stroke="#f5ba93" strokeWidth="2"/>
                  <circle cx="32" cy="32" r="8" stroke="#333" strokeWidth="2"/>
                  <path d="M20 20L28 28M44 20L36 28M20 44L28 36M44 44L36 36" stroke="#333" strokeWidth="2"/>
                  <rect x="18" y="18" width="8" height="8" rx="1" fill="#f5ba93"/>
                  <rect x="38" y="18" width="8" height="8" rx="1" fill="#f5ba93"/>
                  <rect x="18" y="38" width="8" height="8" rx="1" fill="#f5ba93"/>
                  <rect x="38" y="38" width="8" height="8" rx="1" fill="#f5ba93"/>
                </svg>
              </div>
              <h3 className="value-card-title">Enterprise Digital<br />Transformation</h3>
              <p className="value-card-text">
                Enabling end to end enterprise digital transformation has been our mantra ever since the day we began our very first enterprise migration
              </p>
            </div>

            <div className="value-card reveal">
              <div className="value-icon">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="12" stroke="#f5ba93" strokeWidth="2"/>
                  <path d="M32 20V24M32 40V44M20 32H24M40 32H44" stroke="#f5ba93" strokeWidth="2"/>
                  <path d="M24 24L27 27M37 37L40 40M40 24L37 27M27 37L24 40" stroke="#f5ba93" strokeWidth="2"/>
                  <circle cx="32" cy="32" r="4" fill="#f5ba93"/>
                  <path d="M32 28C30 28 28 30 28 32C28 34 30 36 32 36C34 36 36 34 36 32C36 30 34 28 32 28Z" stroke="#333" strokeWidth="1.5"/>
                </svg>
              </div>
              <h3 className="value-card-title">Expert<br />Innovation</h3>
              <p className="value-card-text">
                Infusing innovation in every aspect of solution delivery by nurturing an innovation powerhouse within Diostec software solutions
              </p>
            </div>

            <div className="value-card reveal">
              <div className="value-icon">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="14" stroke="#333" strokeWidth="2"/>
                  <path d="M32 18V22M32 42V46M18 32H22M42 32H46" stroke="#333" strokeWidth="2"/>
                  <path d="M22 22L26 26M38 38L42 42M42 22L38 26M26 38L22 42" stroke="#333" strokeWidth="2"/>
                  <rect x="28" y="26" width="8" height="12" rx="1" fill="#f5ba93"/>
                  <circle cx="32" cy="29" r="2" fill="#333"/>
                  <path d="M28 32H36M28 34H36" stroke="#333" strokeWidth="1"/>
                </svg>
              </div>
              <h3 className="value-card-title">Information<br />Security</h3>
              <p className="value-card-text">
                State of the art security protocols and ISMS practices ingrained in the very DNA of Diostec software solutions
              </p>
            </div>

            <div className="value-card reveal">
              <div className="value-icon">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 12L28 16L32 20L36 16L32 12Z" fill="#f5ba93" stroke="#f5ba93" strokeWidth="2"/>
                  <path d="M32 20L28 24L32 28L36 24L32 20Z" fill="#f5ba93" stroke="#f5ba93" strokeWidth="2"/>
                  <path d="M32 28L28 32L32 36L36 32L32 28Z" fill="#f5ba93" stroke="#f5ba93" strokeWidth="2"/>
                  <path d="M32 36L28 40L32 44L36 40L32 36Z" fill="#f5ba93" stroke="#f5ba93" strokeWidth="2"/>
                  <path d="M20 24L24 28L28 24M36 24L40 28L44 24" stroke="#f5ba93" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="value-card-title">Immense value<br />proposition</h3>
              <p className="value-card-text">
                Delivering beyond maximum value to the client through intelligent automation and innovation in all aspects of solution delivery
              </p>
            </div>

            {/* Row 2 - Bottom 3 values */}
            <div className="value-card reveal">
              <div className="value-icon">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="28" r="8" stroke="#333" strokeWidth="2"/>
                  <path d="M24 35C24 35 22 38 22 42C22 46 26 48 32 48C38 48 42 46 42 42C42 38 40 35 40 35" stroke="#333" strokeWidth="2"/>
                  <path d="M28 26L30 28M34 26L36 28" stroke="#333" strokeWidth="2"/>
                  <path d="M32 32C33 32 34 31 34 30" stroke="#333" strokeWidth="1.5"/>
                  <path d="M26 22L28 20M38 22L36 20M32 18V16" stroke="#f5ba93" strokeWidth="2"/>
                  <path d="M24 24L22 22M40 24L42 22" stroke="#f5ba93" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="value-card-title">Client<br />Centric Engagement</h3>
              <p className="value-card-text">
                Aligning with our client's best interests in every move and keeping them informed of every action with impeccable transparency all through the engagement
              </p>
            </div>

            <div className="value-card reveal">
              <div className="value-icon">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 20C28 20 24 22 24 26C24 28 25 30 27 31C25 32 24 34 24 36C24 40 28 42 32 42C36 42 40 40 40 36C40 34 39 32 37 31C39 30 40 28 40 26C40 22 36 20 32 20Z" stroke="#f5ba93" strokeWidth="2"/>
                  <path d="M28 26C28 24 29.5 23 32 23C34.5 23 36 24 36 26C36 27.5 34.5 28.5 32 28.5C29.5 28.5 28 27.5 28 26Z" fill="#f5ba93"/>
                  <circle cx="20" cy="30" r="3" stroke="#f5ba93" strokeWidth="1.5"/>
                  <circle cx="44" cy="30" r="3" stroke="#f5ba93" strokeWidth="1.5"/>
                  <path d="M20 34C18 35 16 37 16 40M44 34C46 35 48 37 48 40" stroke="#f5ba93" strokeWidth="1.5"/>
                </svg>
              </div>
              <h3 className="value-card-title">Employee<br />Wellness</h3>
              <p className="value-card-text">
                Empowering our pillars of strength to grow along with the organization and being invested in all aspects of their professional and personal wellness
              </p>
            </div>

            <div className="value-card reveal">
              <div className="value-icon">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="24" r="6" stroke="#f5ba93" strokeWidth="2"/>
                  <path d="M32 30L28 34L32 38L36 34L32 30Z" stroke="#f5ba93" strokeWidth="2" fill="#f5ba93"/>
                  <path d="M22 28L18 32L22 36M42 28L46 32L42 36" stroke="#333" strokeWidth="2"/>
                  <path d="M26 38L22 42L26 46M38 38L42 42L38 46" stroke="#333" strokeWidth="2"/>
                  <path d="M32 38L32 46" stroke="#333" strokeWidth="2"/>
                  <circle cx="32" cy="46" r="2" fill="#f5ba93"/>
                </svg>
              </div>
              <h3 className="value-card-title">Efficient utilization<br />of resources</h3>
              <p className="value-card-text">
                Extending our social responsibilities from 'Giving back to the society' to 'Cutting back on the resources' that we use.
              </p>
            </div>
          </div>

          <div className="values-dots">
            {Array.from({ length: 30 }).map((_, i) => (
              <span key={i} className="dot"></span>
            ))}
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
                <span className="address-text">TVH Agnitio Park (IT Park) Address: 141, Rajiv Gandhi Salai, Nehru Nagar, Perungudi, Chennai, Tamil Nadu 600096</span>
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
