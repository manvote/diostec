import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "./SEO";
import { useTranslation } from "../useTranslation";
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
  const { t } = useTranslation();
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const heroImages = useMemo(() => [hero1, hero2, hero3], []);

  // ---- Cursor Glow Effect ----
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

  // ---- Preload First Hero Image Only ----
  useEffect(() => {
    // Only preload the first hero image for faster initial load
    const img = new Image();
    img.src = heroImages[0];
    
    // Preload other hero images after a delay
    const timer = setTimeout(() => {
      heroImages.slice(1).forEach((imageSrc) => {
        const img = new Image();
        img.src = imageSrc;
      });
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [heroImages]);

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
      <div className="cursor-glow"></div>
      <SEO 
        title="Diostec - AI & Cloud Solutions | Digital Transformation Services Dubai"
        description="Leading AI and cloud solutions provider in Dubai. Transform your business with cutting-edge AI services, cloud infrastructure, BI analytics, QA testing, and managed services. Expert digital transformation partner."
        keywords="AI solutions Dubai, cloud services UAE, digital transformation, business intelligence, QA testing, managed services, application management, IT consulting Dubai, AI company UAE"
        canonical="https://diostec.com/"
      />
      {/* HERO SECTION */}
      <section className="hero-section reveal" style={{ backgroundImage: `url(${heroImages[currentHeroImage]})` }}>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-left">
              <h1 className="hero-title">
               {t('home', 'heroTitle')}
              </h1>

              <p className="hero-description">
                {t('home', 'heroDescription')}
              </p>

              <button className="cta-btn" onClick={() => { navigate('/contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                {t('home', 'ctaButton')}
                <span className="btn-icon">↗</span>
              </button>
            </div>
          </div>

          {/* FEATURE CARDS */}
          <div className="feature-cards reveal">
            <div className="feature-card">
              <h3 className="feature-title1">{t('home', 'feature1Title')}</h3>
              <p className="feature-description1">
                {t('home', 'feature1Desc')}
              </p>
            </div>

            <div className="feature-card">
              <h3 className="feature-title1">{t('home', 'feature2Title')}</h3>
              <p className="feature-description1">
                {t('home', 'feature2Desc')}
              </p>
            </div>

            <div className="feature-card">
              <h3 className="feature-title1">{t('home', 'feature3Title')}</h3>
              <p className="feature-description1">
                {t('home', 'feature3Desc')}
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
            {t('home', 'whoWeAreLabel')}
          </div>

          <h2 className="who-title">
            {t('home', 'whoWeAreTitle1')} <span className="img-text"><span className="emoji-globe"></span></span> {t('home', 'whoWeAreTitle2')}<br />
            {t('home', 'whoWeAreTitle3')} <span className="img-text"><span className="emoji-chart"></span></span> {t('home', 'whoWeAreTitle4')}<br />
            {t('home', 'whoWeAreTitle5')} <span className="img-text"><span className="metallic-bar"></span></span>
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
      <span className="services-label-text">{t('home', 'servicesLabel')}</span>

      
    </div>

    {/* Main Text + Button */}
    <div className="services-heading-main">
      <h2 className="services-heading-title">
        {t('home', 'servicesTitle1')} <br />
        <span className="ai-text">{t('home', 'servicesTitle2')}</span>
      </h2>

      <button className="services-view-btn" onClick={() => navigate('/services')}>
        {t('home', 'servicesViewBtn')}
        <span className="services-btn-icon">↗</span>
      </button>
    </div>

  </div>
</section>


      {/* SERVICES EXPAND SECTION */}
      <section className="services-expand-section reveal">
        <div className="services-wrapper">

          <div className="service-item">
            <h3 className="service-title-vertical">{t('home', 'cloudTitle')}</h3>
            <div className="service-content">
              <div className="service-text-content">
                <h4 className="service-content-title">{t('home', 'cloudTitle')}</h4>
                <p className="service-description">
                  {t('home', 'cloudDesc')}
                </p>
                <button onClick={() => navigate('/services')} className="service-learn-btn">
                  <span className="service-arrow">↗</span>
                </button>
              </div>
              <img src={cloud} alt={t('home', 'cloudTitle')} loading="lazy" decoding="async" />
            </div>
          </div>

          <div className="service-item">
            <h3 className="service-title-vertical">{t('home', 'biTitle')}</h3>
            <div className="service-content">
              <div className="service-text-content">
                <h4 className="service-content-title">{t('home', 'biTitle')}</h4>
                <p className="service-description">
                  {t('home', 'biDesc')}
                </p>
                <button onClick={() => navigate('/services')} className="service-learn-btn">
                  <span className="service-arrow">↗</span>
                </button>
              </div>
              <img src={bi} alt={t('home', 'biTitle')} loading="lazy" decoding="async" />
            </div>
          </div>

          <div className="service-item">
            <h3 className="service-title-vertical">{t('home', 'qaTitle')}</h3>
            <div className="service-content">
              <div className="service-text-content">
                <h4 className="service-content-title">{t('home', 'qaTitle')}</h4>
                <p className="service-description">
                  {t('home', 'qaDesc')}
                </p>
                <button onClick={() => navigate('/services')} className="service-learn-btn">
                  <span className="service-arrow">↗</span>
                </button>
              </div>
              <img src={qa} alt={t('home', 'qaTitle')} loading="lazy" decoding="async" />
            </div>
          </div>

          <div className="service-item">
            <h3 className="service-title-vertical">{t('home', 'mgTitle')}</h3>
            <div className="service-content">
              <div className="service-text-content">
                <h4 className="service-content-title">{t('home', 'mgTitle')}</h4>
                <p className="service-description">
                  {t('home', 'mgDesc')}
                </p>
                <button onClick={() => navigate('/services')} className="service-learn-btn">
                  <span className="service-arrow">↗</span>
                </button>
              </div>
              <img src={mg} alt={t('home', 'mgTitle')} loading="lazy" decoding="async" />
            </div>
          </div>

          <div className="service-item">
            <h3 className="service-title-vertical">{t('home', 'amsTitle')}</h3>
            <div className="service-content">
              <div className="service-text-content">
                <h4 className="service-content-title">{t('home', 'amsTitle')}</h4>
                <p className="service-description">
                  {t('home', 'amsDesc')}
                </p>
                <button onClick={() => navigate('/services')} className="service-learn-btn">
                  <span className="service-arrow">↗</span>
                </button>
              </div>
              <img src={ai} alt={t('home', 'amsTitle')} loading="lazy" decoding="async" />
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
            <h3 className="project-card-title">{t('home', 'project1Title')}</h3>
            <p className="project-card-description">
              {t('home', 'project1Desc')}
            </p>
            
            <div className="project-details">
              <div className="project-detail-item">
                <span className="detail-label">{t('home', 'industryLabel')}</span>
                <span className="detail-value green">{t('home', 'project1Industry')}</span>
              </div>
              {/* <div className="project-detail-item">
                <span className="detail-label">Country:</span>
                <span className="detail-value green">Germany, Issum</span>
              </div> */}
            </div>

            <div className="project-technologies">
              <span className="tech-label">{t('home', 'techLabel')}</span>
              <div className="tech-icons">
                <div className="tech-icon">🔄</div>
                <div className="tech-icon">⚪</div>
                <div className="tech-icon">🔶</div>
              </div>
            </div>

            <button onClick={() => navigate('/services')} className="project-read-btn">
              {t('home', 'readMoreBtn')}
              <span className="read-btn-arrow">↗</span>
            </button>
          </div>

          <div className="project-image-side">
            <img src={service} alt="Chatbot Project" className="project-bg-image" loading="lazy" decoding="async" fetchpriority="low" />
          </div>
        </div>
      </div>

      {/* Project Card 2 - Enterprise E-Commerce Transformation */}
      <div className="project-card" data-index="1">
        <div className="project-card-content">
          <div className="project-info">
            <span className="project-green-dot"></span>
            <h3 className="project-card-title">{t('home', 'project2Title')}</h3>
            <p className="project-card-description">
              {t('home', 'project2Desc')}
            </p>
            
            <div className="project-details">
              <div className="project-detail-item">
                <span className="detail-label">{t('home', 'industryLabel')}</span>
                <span className="detail-value green">{t('home', 'project2Industry')}</span>
              </div>
              {/* <div className="project-detail-item">
                <span className="detail-label">Country:</span>
                <span className="detail-value green">Singapore</span>
              </div> */}
            </div>

            <div className="project-technologies">
              <span className="tech-label">{t('home', 'techLabel')}</span>
              <div className="tech-icons">
                <div className="tech-icon">🔄</div>
                <div className="tech-icon">🐍</div>
                <div className="tech-icon">💬</div>
              </div>
            </div>

            <button onClick={() => navigate('/services')} className="project-read-btn">
              {t('home', 'readMoreBtn')}
              <span className="read-btn-arrow">↗</span>
            </button>
          </div>

          <div className="project-image-side">
            <img src={second} alt="E-commerce Project" className="project-bg-image" loading="lazy" decoding="async" fetchpriority="low" />
          </div>
        </div>
      </div>

      {/* Project Card 3 - Smart Manufacturing Quality Control */}
      <div className="project-card" data-index="2">
        <div className="project-card-content">
          <div className="project-info">
            <span className="project-green-dot"></span>
            <h3 className="project-card-title">{t('home', 'project3Title')}</h3>
            <p className="project-card-description">
              {t('home', 'project3Desc')}
            </p>
            
            <div className="project-details">
              <div className="project-detail-item">
                <span className="detail-label">{t('home', 'industryLabel')}</span>
                <span className="detail-value green">{t('home', 'project3Industry')}</span>
              </div>
              {/* <div className="project-detail-item">
                <span className="detail-label">Country:</span>
                <span className="detail-value green">United States</span>
              </div> */}
            </div>

            <div className="project-technologies">
              <span className="tech-label">{t('home', 'techLabel')}</span>
              <div className="tech-icons">
                <div className="tech-icon">🎨</div>
                <div className="tech-icon">🅰️</div>
                <div className="tech-icon">🔄</div>
              </div>
            </div>

            <button onClick={() => navigate('/services')} className="project-read-btn">
              {t('home', 'readMoreBtn')}
              <span className="read-btn-arrow">↗</span>
            </button>
          </div>

          <div className="project-image-side">
            <img src={man} alt="Computer Vision Project" className="project-bg-image" loading="lazy" decoding="async" fetchpriority="low" />
          </div>
        </div>
      </div>

      {/* Project Card 4 - Predictive Analytics Dashboard */}
      <div className="project-card" data-index="3">
        <div className="project-card-content">
          <div className="project-info">
            <span className="project-green-dot"></span>
            <h3 className="project-card-title">{t('home', 'project4Title')}</h3>
            <p className="project-card-description">
              {t('home', 'project4Desc')}
            </p>
            
            <div className="project-details">
              <div className="project-detail-item">
                <span className="detail-label">{t('home', 'industryLabel')}</span>
                <span className="detail-value green">{t('home', 'project4Industry')}</span>
              </div>
              <div className="project-detail-item">
                <span className="detail-label">Country:</span>
                <span className="detail-value green">Canada</span>
              </div>
            </div>

            <div className="project-technologies">
              <span className="tech-label">{t('home', 'techLabel')}</span>
              <div className="tech-icons">
                <div className="tech-icon">🐍</div>
                <div className="tech-icon">📊</div>
                <div className="tech-icon">🔵</div>
              </div>
            </div>

            <button onClick={() => navigate('/services')} className="project-read-btn">
              {t('home', 'readMoreBtn')}
              <span className="read-btn-arrow">↗</span>
            </button>
          </div>

          <div className="project-image-side">
            <img src={concept} alt="Data Science Project" className="project-bg-image" loading="lazy" decoding="async" fetchpriority="low" />
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
        {t('home', 'industriesLabel')}
      </span>
      
      <h2 className="industries-heading">
        {t('home', 'industriesTitle1')}<br />
        {t('home', 'industriesTitle2')}<br />
        {t('home', 'industriesTitle3')}
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
              <h3 className="industry-slide-title">{t('home', 'industry1Title')}</h3>
              <p className="industry-slide-description">
                {t('home', 'industry1Desc')}
              </p>
              <button onClick={() => navigate('/services')} className="industry-slide-btn">
                <span className="slide-arrow">↗</span>
              </button>
              <div className="industry-slide-image">
                <img src={banking} alt={t('home', 'industry1Title')} loading="lazy" decoding="async" />
              </div>
            </div>
          </div>

          {/* Card 2 - Insurance */}
          <div className="industry-slide" data-index="1" data-color="#1E5A8E">
            <div className="industry-slide-content">
              <h3 className="industry-slide-title">{t('home', 'industry2Title')}</h3>
              <p className="industry-slide-description">
                {t('home', 'industry2Desc')}
              </p>
              <button onClick={() => navigate('/services')} className="industry-slide-btn">
                <span className="slide-arrow">↗</span>
              </button>
              <div className="industry-slide-image">
                <img src={incur} alt={t('home', 'industry2Title')} loading="lazy" decoding="async" />
              </div>
            </div>
          </div>

          {/* Card 3 - Telecom */}
          <div className="industry-slide" data-index="2" data-color="#5B2C6F">
            <div className="industry-slide-content">
              <h3 className="industry-slide-title">{t('home', 'industry3Title')}</h3>
              <p className="industry-slide-description">
                {t('home', 'industry3Desc')}
              </p>
              <button onClick={() => navigate('/services')} className="industry-slide-btn">
                <span className="slide-arrow">↗</span>
              </button>
              <div className="industry-slide-image">
                <img src={cell} alt={t('home', 'industry3Title')} loading="lazy" decoding="async" />
              </div>
            </div>
          </div>

          {/* Card 4 - Automotive */}
          <div className="industry-slide" data-index="3" data-color="#2B8FA8">
            <div className="industry-slide-content">
              <h3 className="industry-slide-title">{t('home', 'industry4Title')}</h3>
              <p className="industry-slide-description">
                {t('home', 'industry4Desc')}
              </p>
              <button onClick={() => navigate('/services')} className="industry-slide-btn">
                <span className="slide-arrow">↗</span>
              </button>
              <div className="industry-slide-image">
                <img src={morden} alt={t('home', 'industry4Title')} loading="lazy" decoding="async" />
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
        {t('home', 'solutionsLabel')}
      </span>
      <h2 className="solutions-title">
        {t('home', 'solutionsTitle1')}<br />
        {t('home', 'solutionsTitle2')}
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
          <h3 className="solution-name">{t('home', 'solution1Name')}</h3>
          <p className="solution-description">
            {t('home', 'solution1Desc')}
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
          <h3 className="solution-name">{t('home', 'solution2Name')}</h3>
          <p className="solution-description">
            {t('home', 'solution2Desc')}
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
          <h3 className="solution-name">{t('home', 'solution3Name')}</h3>
          <p className="solution-description">
            {t('home', 'solution3Desc')}
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
          <h3 className="solution-name">{t('home', 'solution4Name')}</h3>
          <p className="solution-description">
            {t('home', 'solution4Desc')}
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
          <h3 className="solution-name">{t('home', 'solution5Name')}</h3>
          <p className="solution-description">
            {t('home', 'solution5Desc')}
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
    {t('home', 'whyLabel')}
    <span className="why-dot"></span>
  </div>

  <h2 className="why-title">
    {t('home', 'whyTitle1')} <span className="why-icon"></span> {t('home', 'whyTitle2')}
  </h2>

  <div className="why-container">

    {/* LEFT */}
    <div className="why-cards-left">
      <div className="why-card"><div className="why-icon-box"><span>👤</span></div><p>{t('home', 'whyCard1')}</p></div>
      <div className="why-card"><div className="why-icon-box"><span>💻</span></div><p>{t('home', 'whyCard2')}</p></div>
      <div className="why-card"><div className="why-icon-box"><span>🎤</span></div><p>{t('home', 'whyCard3')}</p></div>
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
      <div className="why-card"><div className="why-icon-box"><span>👨‍🔬</span></div><p>{t('home', 'whyCard4')}</p></div>
      <div className="why-card"><div className="why-icon-box"><span>🚀</span></div><p>{t('home', 'whyCard5')}</p></div>
      <div className="why-card"><div className="why-icon-box"><span>🎯</span></div><p>{t('home', 'whyCard6')}</p></div>
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
