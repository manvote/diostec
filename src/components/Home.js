import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../assets/services.jpg";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import cloud from "../assets/cloud.jpg";
import bi from "../assets/analyst.jpg";
import qa from "../assets/qa.jpg";
import mg from "../assets/mgservices.jpg";
import ai from "../assets/aiservices.jpg";
import man from "../assets/man.jpg";
import concept from "../assets/concept.jpg";
import second from "../assets/37691.jpg";
import banking from "../assets/banking.jpg";
import incur from "../assets/incursnce.jpg";
import cell from "../assets/cellphone.jpg";
import morden from "../assets/modern.jpg"
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const heroImages = [hero1, hero2, hero3];

  // ---- Hero Image Slider ----
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // ---- Scroll Reveal Effect ----
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  // ---- Projects Carousel Functionality ----
  useEffect(() => {
    const carousel = document.querySelector('.projects-carousel-container');
    const projectCards = document.querySelectorAll('.project-card');
    const navDots = document.querySelectorAll('.nav-dot');
    const scrollTopBtn = document.querySelector('.scroll-top-btn');

    if (!carousel || projectCards.length === 0) return;

    let currentSlide = 0;
    const totalSlides = projectCards.length;

    // Update active card and nav dot
    const updateSlide = (index) => {
      projectCards.forEach((card, i) => {
        card.classList.toggle('active', i === index);
      });
      navDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
      currentSlide = index;
    };

    // Handle scroll event
    const handleScroll = () => {
      const scrollTop = carousel.scrollTop;
      const slideHeight = carousel.clientHeight;
      const newSlide = Math.round(scrollTop / slideHeight);
      
      if (newSlide !== currentSlide && newSlide < totalSlides) {
        updateSlide(newSlide);
      }
    };

    // Navigation dots click
    navDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        carousel.scrollTo({
          top: index * carousel.clientHeight,
          behavior: 'smooth'
        });
        updateSlide(index);
      });
    });

    // Scroll to top button
    if (scrollTopBtn) {
      scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Listen to scroll
    carousel.addEventListener('scroll', handleScroll);

    // Initialize first slide
    updateSlide(0);

    return () => {
      carousel.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // ---- Industries Carousel Functionality ----
  useEffect(() => {
    const prevBtn = document.querySelector('.industry-prev');
    const nextBtn = document.querySelector('.industry-next');
    const slides = document.querySelectorAll('.industry-slide');
    const progressFill = document.querySelector('.industries-progress-fill');

    if (!prevBtn || !nextBtn || slides.length === 0) return;

    let currentIndex = 0;
    const totalSlides = slides.length;

    const updateSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });

      // Update progress bar
      const progressPercent = ((index + 1) / totalSlides) * 100;
      if (progressFill) {
        progressFill.style.width = `${progressPercent}%`;
      }

      currentIndex = index;
    };

    const goToNext = () => {
      const nextIndex = (currentIndex + 1) % totalSlides;
      updateSlide(nextIndex);
    };

    const goToPrev = () => {
      const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlide(prevIndex);
    };

    prevBtn.addEventListener('click', goToPrev);
    nextBtn.addEventListener('click', goToNext);

    // Initialize
    updateSlide(0);

    return () => {
      prevBtn.removeEventListener('click', goToPrev);
      nextBtn.removeEventListener('click', goToNext);
    };
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section reveal" style={{ backgroundImage: `url(${heroImages[currentHeroImage]})` }}>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-left">
              <h1 className="hero-title">
               Future-Ready Technology for Future-Ready Companies
              </h1>

              <p className="hero-description">
                Delivering powerful IT and AI services designed to scale your business and transform your operations.
              </p>

              <button className="cta-btn">
                BEGIN TODAY WITH US
                <span className="btn-icon">↗</span>
              </button>
            </div>
          </div>

          {/* FEATURE CARDS */}
          <div className="feature-cards reveal">
            <div className="feature-card">
              <h3 className="feature-title1">Smarter insights</h3>
              <p className="feature-description1">
                Make faster, data-driven decisions powered<br />
                by real-time AI analysis and prediction.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="feature-title1">Integrated AI solutions</h3>
              <p className="feature-description1">
                No extra tools or plugins needed.<br />
                Scalable AI from day one.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="feature-title1">End-to-end automation</h3>
              <p className="feature-description1">
                Eliminate bottlenecks with intelligent<br />
                workflows that never leave you guessing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE SECTION */}
      <section className="who-we-are-section reveal">
        <div className="who-container">
          <div className="who-label">
            <span className="green-dot"></span>
            Who We Are?
          </div>

          <h2 className="who-title">
            We helping <span className="img-text"><span className="emoji-globe"></span></span> grow businesses<br />
            and <span className="img-text"><span className="emoji-chart"></span></span> scale with smart, data-driven<br />
            AI agency <span className="img-text"><span className="metallic-bar"></span></span>
          </h2>

          <div className="floating-dots">
            <span className="dot dot-1"></span>
            <span className="dot dot-2"></span>
          </div>
        </div>
      </section>

      {/* SERVICES HEADING SECTION */}
<section id="services" className="services-heading-section reveal">
  <div className="services-heading-container">

    {/* Left Top Label */}
    <div className="services-label-row">
      <span className="green-dot-heading"></span>
      <span className="services-label-text">Our Main Services</span>

      
    </div>

    {/* Main Text + Button */}
    <div className="services-heading-main">
      <h2 className="services-heading-title">
        Helping you grow <br />
        <span className="ai-text">with the power of AI</span>
      </h2>

      <button className="services-view-btn" onClick={() => navigate('/services')}>
        VIEW MORE SERVICES
        <span className="services-btn-icon">↗</span>
      </button>
    </div>

  </div>
</section>


      {/* SERVICES EXPAND SECTION */}
      <section className="services-expand-section reveal">
        <div className="services-wrapper">

          <div className="service-item">
            <h3 className="service-title-vertical">Cloud Services</h3>
            <div className="service-content">
              <div className="service-text-content">
                <h4 className="service-content-title">Cloud Services</h4>
                <p className="service-description">
                  Transform your business with scalable cloud infrastructure. We deliver enterprise-grade 
                  cloud solutions that enhance performance, reduce costs, and ensure seamless scalability. 
                  From migration to optimization, our experts architect cloud environments that drive 
                  innovation and accelerate your digital transformation journey.
                </p>
                <button onClick={() => navigate('/services')} className="service-learn-btn">
                  <span className="service-arrow">↗</span>
                </button>
              </div>
              <img src={cloud} alt="Cloud Services" />
            </div>
          </div>

          <div className="service-item">
            <h3 className="service-title-vertical">BI Analytical Services</h3>
            <div className="service-content">
              <div className="service-text-content">
                <h4 className="service-content-title">BI Analytical Services</h4>
                <p className="service-description">
                  Unlock the power of your data with advanced Business Intelligence solutions. We transform 
                  raw data into actionable insights through interactive dashboards, predictive analytics, 
                  and intelligent reporting. Make data-driven decisions faster and stay ahead of market 
                  trends with our comprehensive BI expertise.
                </p>
                <button onClick={() => navigate('/services')} className="service-learn-btn">
                  <span className="service-arrow">↗</span>
                </button>
              </div>
              <img src={bi} alt="BI Analytical Services" />
            </div>
          </div>

          <div className="service-item">
            <h3 className="service-title-vertical">QA Services</h3>
            <div className="service-content">
              <div className="service-text-content">
                <h4 className="service-content-title">QA Services</h4>
                <p className="service-description">
                  Ensure flawless software delivery with our comprehensive Quality Assurance solutions. 
                  We employ cutting-edge testing methodologies, automation frameworks, and continuous 
                  testing practices to guarantee superior product quality. From functional to performance 
                  testing, we safeguard your reputation with zero-defect releases.
                </p>
                <button onClick={() => navigate('/services')} className="service-learn-btn">
                  <span className="service-arrow">↗</span>
                </button>
              </div>
              <img src={qa} alt="QA Services" />
            </div>
          </div>

          <div className="service-item">
            <h3 className="service-title-vertical">Managed Services</h3>
            <div className="service-content">
              <div className="service-text-content">
                <h4 className="service-content-title">Managed Services</h4>
                <p className="service-description">
                  Focus on your core business while we manage your IT infrastructure. Our proactive 
                  managed services provide 24/7 monitoring, maintenance, and support to ensure optimal 
                  system performance. Reduce downtime, enhance security, and achieve operational 
                  excellence with our dedicated team of experts.
                </p>
                <button onClick={() => navigate('/services')} className="service-learn-btn">
                  <span className="service-arrow">↗</span>
                </button>
              </div>
              <img src={mg} alt="Managed Services" />
            </div>
          </div>

          <div className="service-item">
            <h3 className="service-title-vertical">AMS Services</h3>
            <div className="service-content">
              <div className="service-text-content">
                <h4 className="service-content-title">AMS Services</h4>
                <p className="service-description">
                  Maximize your application investments with our Application Management Services. We provide 
                  end-to-end support, maintenance, and enhancement for your critical applications. From 
                  incident resolution to performance optimization, our AMS ensures your applications run 
                  smoothly, efficiently, and align with evolving business needs.
                </p>
                <button onClick={() => navigate('/services')} className="service-learn-btn">
                  <span className="service-arrow">↗</span>
                </button>
              </div>
              <img src={ai} alt="AMS Services" />
            </div>
          </div>

        </div>
      </section>





{/* PROJECTS CAROUSEL SECTION */}
<section className="projects-carousel-section reveal">
  <div className="carousel-wrapper">
    
    {/* Navigation Dots on Right */}
    <div className="carousel-nav-dots">
      <button className="nav-dot active" data-slide="0">1</button>
      <button className="nav-dot" data-slide="1">2</button>
      <button className="nav-dot" data-slide="2">3</button>
      <button className="nav-dot" data-slide="3">4</button>
    </div>

    {/* Scroll to Top Button */}
    <button className="scroll-top-btn">↑</button>

    {/* Project Cards Container */}
    <div className="projects-carousel-container">
      
      {/* Project Card 1 - AI-Powered Customer Support Platform */}
      <div className="project-card active" data-index="0">
        <div className="project-card-content">
          <div className="project-info">
            <span className="project-green-dot"></span>
            <h3 className="project-card-title">AI-Powered Customer Support Platform</h3>
            <p className="project-card-description">
              Developed an intelligent chatbot system that reduced response time by 70% and handled
              50,000+ customer queries monthly. The NLP-powered solution achieved 95% accuracy in
              intent recognition, significantly improving customer satisfaction scores.
            </p>
            
            <div className="project-details">
              <div className="project-detail-item">
                <span className="detail-label">Industry:</span>
                <span className="detail-value green">Data Processing</span>
              </div>
              {/* <div className="project-detail-item">
                <span className="detail-label">Country:</span>
                <span className="detail-value green">Germany, Issum</span>
              </div> */}
            </div>

            <div className="project-technologies">
              <span className="tech-label">Core Technologies:</span>
              <div className="tech-icons">
                <div className="tech-icon">🔄</div>
                <div className="tech-icon">⚪</div>
                <div className="tech-icon">🔶</div>
              </div>
            </div>

            <button onClick={() => navigate('/services')} className="project-read-btn">
              READ MORE
              <span className="read-btn-arrow">↗</span>
            </button>
          </div>

          <div className="project-image-side">
            <img src={service} alt="Chatbot Project" className="project-bg-image" />
          </div>
        </div>
      </div>

      {/* Project Card 2 - Enterprise E-Commerce Transformation */}
      <div className="project-card" data-index="1">
        <div className="project-card-content">
          <div className="project-info">
            <span className="project-green-dot"></span>
            <h3 className="project-card-title">Enterprise E-Commerce Transformation</h3>
            <p className="project-card-description">
              Built a scalable e-commerce platform with AI-driven recommendations that increased
              conversion rates by 45% and average order value by 32%. The system processes 1M+
              transactions monthly with 99.9% uptime, delivering personalized shopping experiences.
            </p>
            
            <div className="project-details">
              <div className="project-detail-item">
                <span className="detail-label">Industry:</span>
                <span className="detail-value green">Artificial Intelligence</span>
              </div>
              {/* <div className="project-detail-item">
                <span className="detail-label">Country:</span>
                <span className="detail-value green">Singapore</span>
              </div> */}
            </div>

            <div className="project-technologies">
              <span className="tech-label">Core Technologies:</span>
              <div className="tech-icons">
                <div className="tech-icon">🔄</div>
                <div className="tech-icon">🐍</div>
                <div className="tech-icon">💬</div>
              </div>
            </div>

            <button onClick={() => navigate('/services')} className="project-read-btn">
              READ MORE
              <span className="read-btn-arrow">↗</span>
            </button>
          </div>

          <div className="project-image-side">
            <img src={second} alt="E-commerce Project" className="project-bg-image" />
          </div>
        </div>
      </div>

      {/* Project Card 3 - Smart Manufacturing Quality Control */}
      <div className="project-card" data-index="2">
        <div className="project-card-content">
          <div className="project-info">
            <span className="project-green-dot"></span>
            <h3 className="project-card-title">Smart Manufacturing Quality Control</h3>
            <p className="project-card-description">
              Implemented an AI-powered computer vision system that automated product inspection,
              detecting defects with 98% accuracy. The solution reduced inspection time by 80%
              and saved $2M+ annually in quality control costs for a major manufacturer.
            </p>
            
            <div className="project-details">
              <div className="project-detail-item">
                <span className="detail-label">Industry:</span>
                <span className="detail-value green">Computer Vision</span>
              </div>
              {/* <div className="project-detail-item">
                <span className="detail-label">Country:</span>
                <span className="detail-value green">United States</span>
              </div> */}
            </div>

            <div className="project-technologies">
              <span className="tech-label">Core Technologies:</span>
              <div className="tech-icons">
                <div className="tech-icon">🎨</div>
                <div className="tech-icon">🅰️</div>
                <div className="tech-icon">🔄</div>
              </div>
            </div>

            <button onClick={() => navigate('/services')} className="project-read-btn">
              READ MORE
              <span className="read-btn-arrow">↗</span>
            </button>
          </div>

          <div className="project-image-side">
            <img src={man} alt="Computer Vision Project" className="project-bg-image" />
          </div>
        </div>
      </div>

      {/* Project Card 4 - Predictive Analytics Dashboard */}
      <div className="project-card" data-index="3">
        <div className="project-card-content">
          <div className="project-info">
            <span className="project-green-dot"></span>
            <h3 className="project-card-title">Predictive Analytics Dashboard</h3>
            <p className="project-card-description">
              Created a real-time analytics platform that forecasts business trends with 92% accuracy,
              processing 10TB+ of data daily. The solution enabled data-driven decision making,
              resulting in 25% revenue growth and optimized resource allocation for enterprise clients.
            </p>
            
            <div className="project-details">
              <div className="project-detail-item">
                <span className="detail-label">Industry:</span>
                <span className="detail-value green">Data Science</span>
              </div>
              <div className="project-detail-item">
                <span className="detail-label">Country:</span>
                <span className="detail-value green">Canada</span>
              </div>
            </div>

            <div className="project-technologies">
              <span className="tech-label">Core Technologies:</span>
              <div className="tech-icons">
                <div className="tech-icon">🐍</div>
                <div className="tech-icon">📊</div>
                <div className="tech-icon">🔵</div>
              </div>
            </div>

            <button onClick={() => navigate('/services')} className="project-read-btn">
              READ MORE
              <span className="read-btn-arrow">↗</span>
            </button>
          </div>

          <div className="project-image-side">
            <img src={concept} alt="Data Science Project" className="project-bg-image" />
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

{/* INDUSTRIES SECTION */}
<section className="industries-section reveal">
  <div className="industries-main-container">
    
    {/* Left Side - Static Content */}
    <div className="industries-left">
      <span className="industries-label">
        <span className="industries-label-dot"></span>
        Industries
      </span>
      
      <h2 className="industries-heading">
        Expertise that<br />
        Empowers Industries<br />
        Worldwide
      </h2>

      {/* Progress Bar */}
      <div className="industries-progress-wrapper">
        <div className="industries-progress-bar">
          <div className="industries-progress-fill"></div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="industries-nav-arrows">
        <button className="industry-arrow-btn industry-prev">
          <span>←</span>
        </button>
        <button className="industry-arrow-btn industry-next">
          <span>→</span>
        </button>
      </div>
    </div>

    {/* Right Side - Card Carousel */}
    <div className="industries-right">
      <div className="industries-carousel-wrapper">
        <div className="industries-carousel-track">
          
          {/* Card 1 - Banking Finance */}
          <div className="industry-slide active" data-index="0" data-color="#D97948">
            <div className="industry-slide-content">
              <h3 className="industry-slide-title">Banking Finance Sector</h3>
              <p className="industry-slide-description">
                Enabling SMEs with innovative technologies that optimize efficiency and meet their banking needs.
              </p>
              <button onClick={() => navigate('/services')} className="industry-slide-btn">
                <span className="slide-arrow">↗</span>
              </button>
              <div className="industry-slide-image">
                <img src={banking} alt="Banking Finance" />
              </div>
            </div>
          </div>

          {/* Card 2 - Insurance */}
          <div className="industry-slide" data-index="1" data-color="#1E5A8E">
            <div className="industry-slide-content">
              <h3 className="industry-slide-title">Insurance</h3>
              <p className="industry-slide-description">
                Scalable solutions that generate customer value and enhance your company's digital journey.
              </p>
              <button onClick={() => navigate('/services')} className="industry-slide-btn">
                <span className="slide-arrow">↗</span>
              </button>
              <div className="industry-slide-image">
                <img src={incur} alt="Insurance" />
              </div>
            </div>
          </div>

          {/* Card 3 - Telecom */}
          <div className="industry-slide" data-index="2" data-color="#5B2C6F">
            <div className="industry-slide-content">
              <h3 className="industry-slide-title">Telecom</h3>
              <p className="industry-slide-description">
                Solutions that drive growth and enable businesses to thrive in the rapidly evolving digital landscape.
              </p>
              <button onClick={() => navigate('/services')} className="industry-slide-btn">
                <span className="slide-arrow">↗</span>
              </button>
              <div className="industry-slide-image">
                <img src={cell} alt="Telecom" />
              </div>
            </div>
          </div>

          {/* Card 4 - Automotive */}
          <div className="industry-slide" data-index="3" data-color="#2B8FA8">
            <div className="industry-slide-content">
              <h3 className="industry-slide-title">Automotive</h3>
              <p className="industry-slide-description">
                AI-driven automotive solutions tailored to ensure enhanced security, and state-of-the-art automation.
              </p>
              <button onClick={() => navigate('/services')} className="industry-slide-btn">
                <span className="slide-arrow">↗</span>
              </button>
              <div className="industry-slide-image">
                <img src={morden} alt="Automotive" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</section>

{/* SOLUTIONS SECTION */}
<section className="solutions-section reveal">
  <div className="solutions-container">
    <div className="solutions-header">
      <span className="solutions-label">
        <span className="solutions-dot"></span>
        Solutions
      </span>
      <h2 className="solutions-title">
        Scalable Solutions that Drive<br />
        Meaningful Results
      </h2>
    </div>

    <div className="solutions-list">
      {/* Solution Row 1 */}
      <div className="solution-row">
        <div className="solution-icon">
          <div className="icon-pattern icon-pattern-1">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
        <div className="solution-content">
          <h3 className="solution-name">AI Solutions</h3>
          <p className="solution-description">
            AI solutions engineered to give your business a competitive edge.
          </p>
        </div>
      </div>

      {/* Solution Row 2 */}
      <div className="solution-row">
        <div className="solution-icon">
          <div className="icon-pattern icon-pattern-2">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
        <div className="solution-content">
          <h3 className="solution-name">Legacy Modernization</h3>
          <p className="solution-description">
            AI-driven Legacy Modernization solutions that ensure seamless transition to modern platforms and drive innovation.
          </p>
        </div>
      </div>

      {/* Solution Row 3 */}
      <div className="solution-row">
        <div className="solution-icon">
          <div className="icon-pattern icon-pattern-3">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
        <div className="solution-content">
          <h3 className="solution-name">Test Automation Solutions</h3>
          <p className="solution-description">
            We deliver high quality automated testing solutions, improving efficiency and ensuring optimal value
          </p>
        </div>
      </div>

      {/* Solution Row 4 */}
      <div className="solution-row">
        <div className="solution-icon">
          <div className="icon-pattern icon-pattern-4">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
        <div className="solution-content">
          <h3 className="solution-name">Regulatory & Compliance Solutions</h3>
          <p className="solution-description">
            Leveraging the latest technologies, we address regulatory changes and ensure industry compliance.
          </p>
        </div>
      </div>

      {/* Solution Row 5 */}
      <div className="solution-row">
        <div className="solution-icon">
          <div className="icon-pattern icon-pattern-5">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
        <div className="solution-content">
          <h3 className="solution-name">Credit Risk Management Solutions</h3>
          <p className="solution-description">
            Empowering financial institutions with Basel-compliant Credit, Market & Operational Risk systems
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* WHY CHOOSE US SECTION */}
<section className="why-choose-section reveal">
  <div className="why-header">
    <span className="why-dot"></span>
    Why Should Choose Us
    <span className="why-dot"></span>
  </div>

  <h2 className="why-title">
    Your success <span className="why-icon"></span> is our mission
  </h2>

  <div className="why-container">

    {/* LEFT */}
    <div className="why-cards-left">
      <div className="why-card"><div className="why-icon-box"><span>👤</span></div><p>Secure, ethical & scalable AI</p></div>
      <div className="why-card"><div className="why-icon-box"><span>💻</span></div><p>Custom-built solutions that fit you</p></div>
      <div className="why-card"><div className="why-icon-box"><span>🎤</span></div><p>Secure, ethical, and responsible AI</p></div>
    </div>

    {/* CENTER */}
   <div className="why-center">
  
  {/* TOP OUTLINE ELLIPSE */}
  <div className="ellipse ellipse-top"></div>

  {/* MIDDLE FILLED CYLINDER SLICE */}
  <div className="ellipse ellipse-middle"></div>

  {/* BOTTOM OUTLINE ELLIPSE */}
  <div className="ellipse ellipse-bottom"></div>

</div>


    {/* RIGHT */}
    <div className="why-cards-right">
      <div className="why-card"><div className="why-icon-box"><span>👨‍🔬</span></div><p>Expert team of AI specialists</p></div>
      <div className="why-card"><div className="why-icon-box"><span>🚀</span></div><p>Speed without sacrificing quality</p></div>
      <div className="why-card"><div className="why-icon-box"><span>🎯</span></div><p>Client-centered, business-focused</p></div>
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
