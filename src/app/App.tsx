import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import svgPaths from "../imports/svg-h2m55t9jbc";
import svgPathsFooter from "../imports/svg-ro01cix2zi";
import { INIT_ANALYTICS } from './analytics';
// ASSET REPLACED: Hero images
const imgHero31 = "/wp-content/2025/12/Hero3-v2.webp";
const imgHeroV21 = "/wp-content/2025/12/Hero-v2.webp";
const imgHero21 = "/wp-content/2025/12/Hero2.webp";
// ASSET REPLACED: Stories & Case Studies card images
const imgFrame50 = "/wp-content/2025/12/Kinvest-Case-Study-Example-CARD.webp";
const imgFrame49 = "/wp-content/2025/12/Pantegral-Case-Study-Example-Card.webp";
const imgFrame47 = "/wp-content/2025/12/c78d59df8eded3238410432d7c04b50cfa4ed464.png";
// ASSET REPLACED: About section image
const imgDarbyBio21 = "/wp-content/2025/12/Darby-Bio2-Multiply.webp";
// ASSET REPLACED: Collaborators logos
const imgLogo13 = "/wp-content/2025/11/Logo3.webp";
const imgLogo21 = "/wp-content/2025/11/Logo4.webp";
const imgLogo31 = "/wp-content/2025/11/Logo1.webp";
const imgLogo41 = "/wp-content/2025/11/Logo2.webp";
const imgLogo51 = "/wp-content/2025/11/Logo5.webp";
const imgLogo71 = "/wp-content/2025/11/Logo7.webp";
const imgLogo61 = "/wp-content/2025/11/Logo6.webp";
const imgLogo81 = "/wp-content/2025/11/Logo8.webp";
const imgLogo91 = "/wp-content/2025/11/Logo9.webp";
const imgLogo101 = "/wp-content/2025/11/Logo10.webp";
const imgLogo111 = "/wp-content/2025/11/Logo11.webp";
const imgLogo121 = "/wp-content/2025/11/Logo12.webp";
// ASSET REPLACED: Footer logo
const imgLogoAlt1 = "/wp-content/2025/12/Logo-Alt.png";
import { imgGroup, imgGroup1, imgGroup2 } from "../imports/svg-7eaib";
import CaseStudy from './CaseStudy';
import CaseStudy2 from './CaseStudy2';
import CaseStudy3 from './CaseStudy3';
import ContactForm from './ContactForm';

function LandingPage() {
  INIT_ANALYTICS();
  // CHANGE 3: Mobile hamburger menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showWord, setShowWord] = useState(true);
  // MOTION: Cycling headline words
  const [headlineWordIndex, setHeadlineWordIndex] = useState(0);
  const headlineWords = ['Intention.', 'Empathy.', 'Story.', 'Curiosity.'];

  const WORD_ANIIMATION_DURATION =  3000
  // MOTION: Cycle through headline words
  useEffect(() => {
    const interval = setInterval(() => {
      setShowWord(false)
      setTimeout(() => {
        setShowWord(true)
      setHeadlineWordIndex((prev) => (prev + 1) % headlineWords.length);
      },0)

    }, WORD_ANIIMATION_DURATION - 1); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // MOTION: Intersection Observer for scroll-triggered entrance animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
     
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all elements with data-animate attribute
    const animatedElements = document.querySelectorAll('[data-animate]');

    animatedElements.forEach(el => {

      observer.observe(el);
      // Only immediately add animate-in class for hero section elements
      const isHeroElement = el.closest('.hero-section');
      if (isHeroElement) {
        const rect = el.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInView) {
          el.classList.add('animate-in');
        }
      }
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scrolling behavior
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = 'html { scroll-behavior: smooth; }';
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    // CHANGE 3: Close mobile menu on navigation
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#f1eee7] min-h-screen w-full overflow-x-hidden">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f1eee7]/95 backdrop-blur-sm">
        <div className="flex items-center justify-end px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[66px] py-4 md:py-6 lg:py-[40px]">
          {/* CHANGE 3: Hamburger button - mobile only */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-2 text-[#555] hover:text-[#8b9544] focus:outline-none focus:ring-2 focus:ring-[#8b9544]"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* CHANGE 3: Desktop navigation - hidden on mobile */}
          <div className="hidden sm:flex flex-wrap gap-3 sm:gap-4 md:gap-[22px] items-center justify-end font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[12px] sm:text-[14px] md:text-[16px] text-[#555] tracking-[0.32px] uppercase">
            <a href="#offerings" onClick={(e) => handleNavClick(e, 'offerings')} className="text-center hover:text-[#8b9544] transition-colors whitespace-nowrap">Offerings</a>
            <a href="#stories" onClick={(e) => handleNavClick(e, 'stories')} className="text-center hover:text-[#8b9544] transition-colors whitespace-nowrap">Stories</a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-center hover:text-[#8b9544] transition-colors whitespace-nowrap">About</a>
            <a href="#collaborators" onClick={(e) => handleNavClick(e, 'collaborators')} className="text-center hover:text-[#8b9544] transition-colors whitespace-nowrap">Collaborators</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-center hover:text-[#8b9544] transition-colors whitespace-nowrap">Contact</a>
          </div>
        </div>

        {/* CHANGE 3: Mobile menu dropdown */}
        {/* MOTION: Mobile menu entrance animation */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-[#f1eee7] border-t border-[#ccc] mobile-menu-enter">
            <div className="flex flex-col gap-2 px-4 py-4 font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[14px] text-[#555] tracking-[0.32px] uppercase">
              <a href="#offerings" onClick={(e) => handleNavClick(e, 'offerings')} className="py-2 hover:text-[#8b9544] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8b9544]">Offerings</a>
              <a href="#stories" onClick={(e) => handleNavClick(e, 'stories')} className="py-2 hover:text-[#8b9544] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8b9544]">Stories</a>
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="py-2 hover:text-[#8b9544] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8b9544]">About</a>
              <a href="#collaborators" onClick={(e) => handleNavClick(e, 'collaborators')} className="py-2 hover:text-[#8b9544] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8b9544]">Collaborators</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="py-2 hover:text-[#8b9544] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8b9544]">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Mobile: stacked vertically with 40px gap, Desktop: images above tagline */}
      <section className="hero-section min-h-screen relative flex items-end lg:items-center justify-center pt-24 md:pt-32 lg:pt-0 pb-8 md:pb-12 lg:pb-0 px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 md:gap-12 lg:gap-16">
          {/* Hero Images - Mobile: vertical stack, Desktop: horizontal centered above text */}
          {/* MOTION: Sequential fade-in on page load */}
          <div className="flex flex-col md:flex-row gap-[40px] md:gap-6 lg:gap-[16px] items-center justify-center w-full">
            <div className="relative w-[186px] h-[186px] md:w-full md:h-auto md:aspect-square lg:w-[425px] lg:h-[425px] shrink-0 hero-image-1">
              <img alt="" className="w-full h-full object-cover" src={imgHero31} />
            </div>
            <div className="relative w-[186px] h-[186px] md:w-full md:h-auto md:aspect-square lg:w-[425px] lg:h-[425px] shrink-0 hero-image-2">
              <img alt="" className="w-full h-full object-cover" src={imgHeroV21} />
            </div>
            <div className="relative w-[186px] h-[186px] md:w-full md:h-auto md:aspect-square lg:w-[425px] lg:h-[425px] shrink-0 hero-image-3">
              <img alt="" className="w-full h-full object-cover" src={imgHero21} />
            </div>
          </div>

          {/* Tagline - positioned at bottom on mobile, centered below images on desktop */}
          {/* MOTION: Fade in tagline */}
          <div className="flex flex-col gap-4 items-start w-full lg:items-start lg:max-w-3xl" data-animate>
            <div className="w-full">
              <p className="font-['Neue_Haas_Grotesk_Display_Pro:95_Black',sans-serif] leading-[1.1] lg:leading-[55px] text-[#333] text-[36px] sm:text-[48px] lg:text-[64px] tracking-[-1.5px] lg:tracking-[-2.56px] uppercase">
                <span className="inline lg:inline">Great Design Begins with</span>
                <br className="block lg:hidden" />
                {
                  showWord &&                 <span className="text-[#8b9544] cycling-word inline lg:inline" style={{
                    animationDuration: `${WORD_ANIIMATION_DURATION}ms`,
                  }}> {headlineWords[headlineWordIndex]}</span>
                }

              </p>
            </div>
            <div className="w-full">
              <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] leading-[28px] lg:leading-[32px] text-[#333] text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.4px]">Darby Yule Creative Studios</p>
            </div>
          </div>
        </div>
      </section>

      {/* Heartbeat Section */}
      {/* MOTION: Fade in heartbeat content */}
      <section className="min-h-[500px] md:min-h-[700px] lg:min-h-[891px] relative py-12 md:py-16 lg:py-[100px] px-4 sm:px-8 md:px-12 lg:px-16 heartbeat-fade" data-animate>
        <div className="flex flex-col items-center justify-center size-full">
          <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center gap-8 md:gap-12" data-animate>
            {/* Top Line */}
            <div className="w-full max-w-2xl h-px bg-[#555555]" />

            {/* Headline */}
            <p className="font-['Neue_Haas_Grotesk_Display_Pro:75_Bold',sans-serif] leading-tight md:leading-normal text-[#333] text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] text-center tracking-[1.2px] md:tracking-[1.92px] uppercase px-4 md:px-8">
              <span className="text-[#8b9544]">Brands need a heartbeat.</span>
              <span> We Craft strategic, high-impact Web Content that resonates with real people in real moments.</span>
            </p>

            {/* Bottom Line */}
            <div className="w-full max-w-2xl h-px bg-[#555555]" />

            {/* ASSET REPLACED: Heartbeat Section image */}
            {/* MOTION: Fade in logo on scroll */}
            <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[111px] lg:h-[111px] relative flex items-center justify-center" data-animate>
              <img src="/wp-content/2025/10/cropped-frame-13.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Stories Section - Header on top, cards below (consistent with other sections) */}
      <section id="stories" className="relative w-full py-8 md:py-12 lg:py-16 px-4 sm:px-8 md:px-12 lg:px-[80px]" data-animate>
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col gap-8 md:gap-12 lg:gap-[80px] w-full">
            {/* Section Header */}
            {/* MOTION: Fade in section header */}
            <p className="font-['Neue_Haas_Grotesk_Display_Pro:75_Bold',sans-serif] leading-tight md:leading-normal text-[#8b9544] text-[32px] md:text-[40px] lg:text-[48px] tracking-[1.2px] md:tracking-[1.92px] uppercase" data-animate>
              Stories & Case Studies
            </p>
            
            {/* Case Study Cards */}
            {/* MOTION: Staggered entrance for story cards */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-[40px] items-stretch justify-center w-full">
              {/* Card 1 */}
              <Link to="/case-study/kinvest" className="flex flex-col items-center px-4 py-8 md:py-[40px] relative rounded-[10px] flex-1 min-h-[400px] md:min-h-[511px] card-hover" data-animate="stagger-1">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
                  <img alt="" className="absolute w-full h-full object-cover rounded-[10px]" src={imgFrame50} />
                  <div className="absolute bg-gradient-to-b from-[#000000] from-[18.75%] inset-0 rounded-[10px] to-[rgba(0,0,0,0)]" />
                </div>
                <div aria-hidden="true" className="absolute border-[#818380] border-4 md:border-[6px] border-solid inset-[-4px] md:inset-[-6px] pointer-events-none rounded-[14px] md:rounded-[16px]" />
                {/* CHANGE 1: Mobile chip positioning - bottom-right on mobile */}
                <div className="flex flex-col h-full items-end justify-between relative z-10 w-full">
                  <div className="flex items-start w-full">
                    <p className="font-['Neue_Haas_Grotesk_Display_Pro:96_Black_Italic',sans-serif] italic leading-tight text-[#e1c78f] text-[32px] md:text-[40px] lg:text-[48px] tracking-[-0.96px] uppercase">The Cost of Competing With Yourself</p>
                  </div>
                  <div className="flex gap-3 md:gap-[16px] items-start justify-end flex-wrap">
                    <div className="bg-[#555] relative rounded-[10px]">
                      <div className="flex gap-2 items-center justify-center px-3 md:px-[16px] py-2 md:py-[8px] rounded-[inherit]">
                        {/* ASSET REPLACED: UX icon */}
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48" className="w-full h-full"><g fill="none" stroke="#F1EEE7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="M24 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 34a3 3 0 1 0 0-6a3 3 0 0 0 0 6M7 27a3 3 0 1 0 0-6a3 3 0 0 0 0 6m34 0a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/><path d="M24.197 15.744a8.99 8.99 0 0 0 7.438-3.931a14.5 14.5 0 0 1 4.686 4.498A9 9 0 0 0 32 24a9 9 0 0 0 4.527 7.811a14.5 14.5 0 0 1-4.426 4.532a9 9 0 0 0-7.905-4.694c-3.4 0-6.36 1.885-7.89 4.668a14.5 14.5 0 0 1-4.494-4.683a8.99 8.99 0 0 0 3.93-7.438a8.99 8.99 0 0 0-3.907-7.422a14.5 14.5 0 0 1 4.94-4.938a8.99 8.99 0 0 0 7.42 3.907"/></g></svg>
                        </div>
                        <p className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] leading-[28px] md:leading-[32px] text-[#f1eee7] text-[14px] md:text-[16px] whitespace-nowrap tracking-[0.64px]">UX</p>
                      </div>
                      <div aria-hidden="true" className="absolute border-[#ccc] border-[2px] md:border-[3px] border-solid inset-0 pointer-events-none rounded-[10px]" />
                    </div>
                    <div className="bg-[#555] relative rounded-[10px]">
                      <div className="flex gap-2 items-center justify-center px-3 md:px-[16px] py-2 md:py-[8px] rounded-[inherit]">
                        {/* ASSET REPLACED: Research icon */}
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48" className="w-full h-full"><g fill="none" stroke="#F1EEE7" strokeLinejoin="round" strokeWidth="4"><path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"/><path d="M24 44c7.732 0 14-6.268 14-14s-6.268-14-14-14s-14 6.268-14 14s6.268 14 14 14Z"/><path d="M24 44a8 8 0 1 0 0-16a8 8 0 0 0 0 16Z"/></g></svg>
                        </div>
                        <p className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] leading-[28px] md:leading-[32px] text-[#f1eee7] text-[14px] md:text-[16px] text-center whitespace-nowrap tracking-[0.64px]">Research</p>
                      </div>
                      <div aria-hidden="true" className="absolute border-[#ccc] border-[2px] md:border-[3px] border-solid inset-0 pointer-events-none rounded-[10px]" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Card 2 */}
              {/* LINKED: Card "The Amazing Thing You Can't Explain" → Case Study page */}
              <Link to="/case-study/pantegral" className="flex flex-col items-center px-4 py-8 md:py-[40px] relative rounded-[10px] flex-1 min-h-[400px] md:min-h-[511px] card-hover" data-animate="stagger-2">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
                  <img alt="" className="absolute w-full h-full object-cover rounded-[10px]" src={imgFrame49} />
                  <div className="absolute bg-gradient-to-b from-[#000000] from-[18.75%] inset-0 rounded-[10px] to-[rgba(0,0,0,0)]" />
                </div>
                <div aria-hidden="true" className="absolute border-[#818380] border-4 md:border-[6px] border-solid inset-[-4px] md:inset-[-6px] pointer-events-none rounded-[14px] md:rounded-[16px]" />
                {/* CHANGE 1: Mobile chip positioning - bottom-right on mobile */}
                <div className="flex flex-col h-full items-end justify-between relative z-10 w-full">
                  <div className="flex items-start w-full">
                    <p className="font-['Neue_Haas_Grotesk_Display_Pro:96_Black_Italic',sans-serif] italic leading-tight text-[#e1c78f] text-[32px] md:text-[40px] lg:text-[48px] tracking-[-0.96px] uppercase">The Amazing Thing You Can't Explain</p>
                  </div>
                  <div className="flex gap-3 md:gap-[16px] items-start justify-end flex-wrap">
                    <div className="bg-[#555] relative rounded-[10px]">
                      <div className="flex gap-2 items-center justify-center px-3 md:px-[16px] py-2 md:py-[8px] rounded-[inherit]">
                        {/* ASSET REPLACED: Content Design icon */}
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48" className="w-full h-full"><g fill="none" stroke="#F1EEE7" strokeLinejoin="round" strokeWidth="4"><path d="M19 32c-7.732 0-14-6.268-14-14S11.268 4 19 4s14 6.268 14 14"/><path d="M44 18H18v26h26z"/></g></svg>
                        </div>
                        <p className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] leading-[28px] md:leading-[32px] text-[#f1eee7] text-[14px] md:text-[16px] text-center whitespace-nowrap tracking-[0.64px]">Content</p>
                      </div>
                      <div aria-hidden="true" className="absolute border-[#ccc] border-[2px] md:border-[3px] border-solid inset-0 pointer-events-none rounded-[10px]" />
                    </div>
                    <div className="bg-[#555] relative rounded-[10px]">
                      <div className="flex gap-2 items-center justify-center px-3 md:px-[16px] py-2 md:py-[8px] rounded-[inherit]">
                        {/* ASSET REPLACED: Writing icon */}
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48" className="w-full h-full"><g fill="none" stroke="#F1EEE7" strokeLinejoin="round" strokeWidth="4"><rect width="36" height="20" x="6" y="6" rx="2"/><path strokeLinecap="round" d="M14 13h8m-8 6h20M8 44l4.889-6h21.778L40 44M24 26v18"/></g></svg>
                        </div>
                        <p className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] leading-[28px] md:leading-[32px] text-[#f1eee7] text-[14px] md:text-[16px] text-center whitespace-nowrap tracking-[0.64px]">Writing</p>
                      </div>
                      <div aria-hidden="true" className="absolute border-[#ccc] border-[2px] md:border-[3px] border-solid inset-0 pointer-events-none rounded-[10px]" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Card 3 */}
              {/* LINKED: Card "Teaching the Product to Sell Itself" → Case Study page */}
              <Link to="/case-study/product-self-sell" className="flex flex-col items-center px-4 py-8 md:py-[40px] relative rounded-[10px] flex-1 min-h-[400px] md:min-h-[511px] card-hover" data-animate="stagger-3">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
                  <img alt="" className="absolute w-full h-full object-cover rounded-[10px]" src={imgFrame47} />
                  <div className="absolute bg-gradient-to-b from-[#000000] from-[18.75%] inset-0 rounded-[10px] to-[rgba(0,0,0,0)]" />
                </div>
                <div aria-hidden="true" className="absolute border-[#818380] border-4 md:border-[6px] border-solid inset-[-4px] md:inset-[-6px] pointer-events-none rounded-[14px] md:rounded-[16px]" />
                {/* CHANGE 1: Mobile chip positioning - bottom-right on mobile */}
                <div className="flex flex-col h-full items-end justify-between relative z-10 w-full">
                  <div className="flex items-start w-full">
                    <p className="font-['Neue_Haas_Grotesk_Display_Pro:96_Black_Italic',sans-serif] italic leading-tight text-[#e1c78f] text-[32px] md:text-[40px] lg:text-[48px] tracking-[-0.96px] uppercase">Teaching the Product to Sell Itself</p>
                  </div>
                  <div className="flex gap-3 md:gap-[16px] items-start justify-end flex-wrap">
                    <div className="bg-[#555] relative rounded-[10px]">
                      <div className="flex gap-2 items-center justify-center px-3 md:px-[16px] py-2 md:py-[8px] rounded-[inherit]">
                        {/* ASSET REPLACED: UX icon */}
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48" className="w-full h-full"><g fill="none" stroke="#F1EEE7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="M24 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 34a3 3 0 1 0 0-6a3 3 0 0 0 0 6M7 27a3 3 0 1 0 0-6a3 3 0 0 0 0 6m34 0a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/><path d="M24.197 15.744a8.99 8.99 0 0 0 7.438-3.931a14.5 14.5 0 0 1 4.686 4.498A9 9 0 0 0 32 24a9 9 0 0 0 4.527 7.811a14.5 14.5 0 0 1-4.426 4.532a9 9 0 0 0-7.905-4.694c-3.4 0-6.36 1.885-7.89 4.668a14.5 14.5 0 0 1-4.494-4.683a8.99 8.99 0 0 0 3.93-7.438a8.99 8.99 0 0 0-3.907-7.422a14.5 14.5 0 0 1 4.94-4.938a8.99 8.99 0 0 0 7.42 3.907"/></g></svg>
                        </div>
                        <p className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] leading-[28px] md:leading-[32px] text-[#f1eee7] text-[14px] md:text-[16px] whitespace-nowrap tracking-[0.64px]">UX</p>
                      </div>
                      <div aria-hidden="true" className="absolute border-[#ccc] border-[2px] md:border-[3px] border-solid inset-0 pointer-events-none rounded-[10px]" />
                    </div>
                    <div className="bg-[#555] relative rounded-[10px]">
                      <div className="flex gap-2 items-center justify-center px-3 md:px-[16px] py-2 md:py-[8px] rounded-[inherit]">
                        {/* ASSET REPLACED: Content Design icon */}
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48" className="w-full h-full"><g fill="none" stroke="#F1EEE7" strokeLinejoin="round" strokeWidth="4"><path d="M19 32c-7.732 0-14-6.268-14-14S11.268 4 19 4s14 6.268 14 14"/><path d="M44 18H18v26h26z"/></g></svg>
                        </div>
                        <p className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] leading-[28px] md:leading-[32px] text-[#f1eee7] text-[14px] md:text-[16px] text-center whitespace-nowrap tracking-[0.64px]">Content</p>
                      </div>
                      <div aria-hidden="true" className="absolute border-[#ccc] border-[2px] md:border-[3px] border-solid inset-0 pointer-events-none rounded-[10px]" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section id="offerings" className="relative w-full py-8 md:py-12 lg:py-16 px-4 sm:px-8 md:px-12 lg:px-[80px]" data-animate>
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col gap-8 md:gap-12 lg:gap-[80px] items-start w-full">
            {/* MOTION: Fade in section header */}
            <p className="font-['Neue_Haas_Grotesk_Display_Pro:75_Bold',sans-serif] leading-tight md:leading-normal text-[#8b9544] text-[32px] md:text-[40px] lg:text-[48px] tracking-[1.2px] md:tracking-[1.92px] uppercase" data-animate>Offerings</p>
            
            {/* Services Grid */}
            {/* MOTION: Fade in services grid */}
            <div className="w-full" data-animate>
              <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 w-full">
                {/* Content Design & Management */}
                <div className="flex flex-col gap-6 md:gap-8 lg:gap-[40px] items-start flex-1">
                  <div className="flex gap-4 md:gap-6 items-center w-full">
                    <div className="w-8 h-8 md:w-10 md:h-10 lg:w-[38.4px] lg:h-[38.4px] flex-shrink-0">
                      <div className="w-full h-full mask-alpha mask-intersect mask-no-clip mask-no-repeat" style={{ maskImage: `url('${imgGroup}')` }}>
                        <svg className="w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 38.4 38.4">
                          <g>
                            <path clipRule="evenodd" d={svgPaths.p9d1c280} fill="#222021" fillRule="evenodd" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] leading-[28px] md:leading-[32px] text-[#222021] text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.4px]">Content Design & Management</p>
                  </div>
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-[40px] w-full">
                    <div className="flex flex-col gap-4 md:gap-6 items-start flex-1">
                      <div className="flex gap-3 items-center w-full">
                        <div className="flex items-center justify-center flex-shrink-0">
                          <div className="scale-y-[-100%]">
                            <div className="w-5 h-5 md:w-6 md:h-6">
                              <div className="w-full h-full mask-alpha mask-intersect mask-no-clip mask-no-repeat" style={{ maskImage: `url('${imgGroup1}')` }}>
                                <svg className="w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                  <g>
                                    <path clipRule="evenodd" d={svgPaths.p1817bf00} fill="#555555" fillRule="evenodd" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] leading-normal text-[#555] text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.4px]">Content Strategy</p>
                      </div>
                      <div className="flex gap-3 items-center w-full">
                        <div className="flex items-center justify-center flex-shrink-0">
                          <div className="scale-y-[-100%]">
                            <div className="w-5 h-5 md:w-6 md:h-6">
                              <div className="w-full h-full mask-alpha mask-intersect mask-no-clip mask-no-repeat" style={{ maskImage: `url('${imgGroup1}')` }}>
                                <svg className="w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                  <g>
                                    <path clipRule="evenodd" d={svgPaths.p1817bf00} fill="#555555" fillRule="evenodd" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] leading-normal text-[#555] text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.4px]">Brand Design</p>
                      </div>
                      <div className="flex gap-3 items-center w-full">
                        <div className="flex items-center justify-center flex-shrink-0">
                          <div className="scale-y-[-100%]">
                            <div className="w-5 h-5 md:w-6 md:h-6">
                              <div className="w-full h-full mask-alpha mask-intersect mask-no-clip mask-no-repeat" style={{ maskImage: `url('${imgGroup1}')` }}>
                                <svg className="w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                  <g>
                                    <path clipRule="evenodd" d={svgPaths.p1817bf00} fill="#555555" fillRule="evenodd" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] leading-normal text-[#555] text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.4px]">Blog Writing</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-6 items-start flex-1">
                      <div className="flex gap-3 items-center w-full">
                        <div className="flex items-center justify-center flex-shrink-0">
                          <div className="scale-y-[-100%]">
                            <div className="w-5 h-5 md:w-6 md:h-6">
                              <div className="w-full h-full mask-alpha mask-intersect mask-no-clip mask-no-repeat" style={{ maskImage: `url('${imgGroup1}')` }}>
                                <svg className="w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                  <g>
                                    <path clipRule="evenodd" d={svgPaths.p1817bf00} fill="#555555" fillRule="evenodd" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] leading-normal text-[#555] text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.4px]">Graphic Design</p>
                      </div>
                      <div className="flex gap-3 items-center w-full">
                        <div className="flex items-center justify-center flex-shrink-0">
                          <div className="scale-y-[-100%]">
                            <div className="w-5 h-5 md:w-6 md:h-6">
                              <div className="w-full h-full mask-alpha mask-intersect mask-no-clip mask-no-repeat" style={{ maskImage: `url('${imgGroup1}')` }}>
                                <svg className="w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                  <g>
                                    <path clipRule="evenodd" d={svgPaths.p1817bf00} fill="#555555" fillRule="evenodd" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] leading-normal text-[#555] text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.4px]">Content Writing</p>
                      </div>
                      <div className="flex gap-3 items-center w-full">
                        <div className="flex items-center justify-center flex-shrink-0">
                          <div className="scale-y-[-100%]">
                            <div className="w-5 h-5 md:w-6 md:h-6">
                              <div className="w-full h-full mask-alpha mask-intersect mask-no-clip mask-no-repeat" style={{ maskImage: `url('${imgGroup1}')` }}>
                                <svg className="w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                  <g>
                                    <path clipRule="evenodd" d={svgPaths.p1817bf00} fill="#555555" fillRule="evenodd" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] leading-normal text-[#555] text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.4px]">Content Management</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider for large screens */}
                <div className="hidden lg:block w-px bg-[#ccc] self-stretch" />

                {/* User Experience Design & Websites */}
                <div className="flex flex-col gap-6 md:gap-8 lg:gap-[40px] items-start flex-1">
                  <div className="flex gap-4 md:gap-6 items-center w-full">
                    <div className="w-8 h-8 md:w-10 md:h-10 lg:w-[38.4px] lg:h-[38.4px] flex-shrink-0">
                      <div className="w-full h-full mask-alpha mask-intersect mask-no-clip mask-no-repeat" style={{ maskImage: `url('${imgGroup2}')` }}>
                        <svg className="w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 38.4 38.4">
                          <g>
                            <path clipRule="evenodd" d={svgPaths.p259f5b80} fill="#222021" fillRule="evenodd" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] leading-[28px] md:leading-[32px] text-[#222021] text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.4px]">User Experience Design & Websites</p>
                  </div>
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-[40px] w-full">
                    <div className="flex flex-col gap-4 md:gap-6 items-start flex-1">
                      <div className="flex gap-3 items-center w-full">
                        <div className="flex items-center justify-center flex-shrink-0">
                          <div className="scale-y-[-100%]">
                            <div className="w-5 h-5 md:w-6 md:h-6">
                              <div className="w-full h-full mask-alpha mask-intersect mask-no-clip mask-no-repeat" style={{ maskImage: `url('${imgGroup1}')` }}>
                                <svg className="w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                  <g>
                                    <path clipRule="evenodd" d={svgPaths.p1817bf00} fill="#555555" fillRule="evenodd" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] leading-normal text-[#555] text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.4px]">UX Research</p>
                      </div>
                      <div className="flex gap-3 items-center w-full">
                        <div className="flex items-center justify-center flex-shrink-0">
                          <div className="scale-y-[-100%]">
                            <div className="w-5 h-5 md:w-6 md:h-6">
                              <div className="w-full h-full mask-alpha mask-intersect mask-no-clip mask-no-repeat" style={{ maskImage: `url('${imgGroup1}')` }}>
                                <svg className="w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                  <g>
                                    <path clipRule="evenodd" d={svgPaths.p1817bf00} fill="#555555" fillRule="evenodd" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] leading-normal text-[#555] text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.4px]">UX Strategy</p>
                      </div>
                      <div className="flex gap-3 items-center w-full">
                        <div className="flex items-center justify-center flex-shrink-0">
                          <div className="scale-y-[-100%]">
                            <div className="w-5 h-5 md:w-6 md:h-6">
                              <div className="w-full h-full mask-alpha mask-intersect mask-no-clip mask-no-repeat" style={{ maskImage: `url('${imgGroup1}')` }}>
                                <svg className="w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                  <g>
                                    <path clipRule="evenodd" d={svgPaths.p1817bf00} fill="#555555" fillRule="evenodd" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] leading-normal text-[#555] text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.4px]">UI Design</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-6 items-start flex-1">
                      <div className="flex gap-3 items-center w-full">
                        <div className="flex items-center justify-center flex-shrink-0">
                          <div className="scale-y-[-100%]">
                            <div className="w-5 h-5 md:w-6 md:h-6">
                              <div className="w-full h-full mask-alpha mask-intersect mask-no-clip mask-no-repeat" style={{ maskImage: `url('${imgGroup1}')` }}>
                                <svg className="w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                  <g>
                                    <path clipRule="evenodd" d={svgPaths.p1817bf00} fill="#555555" fillRule="evenodd" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] leading-normal text-[#555] text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.4px]">Competitive Research</p>
                      </div>
                      <div className="flex gap-3 items-center w-full">
                        <div className="flex items-center justify-center flex-shrink-0">
                          <div className="scale-y-[-100%]">
                            <div className="w-5 h-5 md:w-6 md:h-6">
                              <div className="w-full h-full mask-alpha mask-intersect mask-no-clip mask-no-repeat" style={{ maskImage: `url('${imgGroup1}')` }}>
                                <svg className="w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                  <g>
                                    <path clipRule="evenodd" d={svgPaths.p1817bf00} fill="#555555" fillRule="evenodd" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] leading-normal text-[#555] text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.4px]">Website Development</p>
                      </div>
                      <div className="flex gap-3 items-center w-full">
                        <div className="flex items-center justify-center flex-shrink-0">
                          <div className="scale-y-[-100%]">
                            <div className="w-5 h-5 md:w-6 md:h-6">
                              <div className="w-full h-full mask-alpha mask-intersect mask-no-clip mask-no-repeat" style={{ maskImage: `url('${imgGroup1}')` }}>
                                <svg className="w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                  <g>
                                    <path clipRule="evenodd" d={svgPaths.p1817bf00} fill="#555555" fillRule="evenodd" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] leading-normal text-[#555] text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.4px]">AI Integration</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#f1eee7] relative w-full py-8 md:py-12 lg:py-16 px-4 sm:px-8 md:px-12 lg:px-[80px]" data-animate>
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col gap-8 md:gap-12 lg:gap-[80px] w-full">
            {/* MOTION: Fade in section header */}
            <p className="font-['Neue_Haas_Grotesk_Display_Pro:75_Bold',sans-serif] leading-tight md:leading-normal text-[#8b9544] text-[32px] md:text-[40px] lg:text-[48px] tracking-[1.2px] md:tracking-[1.92px] uppercase" data-animate>About</p>
            
            {/* About Content */}
            {/* MOTION: Staggered entrance for about content */}
            <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-[80px] items-start w-full">
              {/* Photo */}
              {/* CHANGE 2: Width constraint - max 429px */}
              <div className="w-full lg:w-auto flex-shrink-0" data-animate="stagger-1">
                <img alt="" src={imgDarbyBio21} className="max-w-[429px] w-full h-auto" />
              </div>
              
              {/* Bio Text */}
              <div className="flex flex-col gap-6 md:gap-8 flex-1" data-animate="stagger-2">
                <div className="flex flex-col gap-4 md:gap-6">
                  {/* CHANGE 4: Updated About text as specified */}
                  <p className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] leading-[26px] md:leading-[28px] lg:leading-[32px] text-[#555] text-[14px] md:text-[16px] lg:text-[18px] tracking-[0.32px]">
                   Darby Yule Creative Studios designs work that reduces friction, earns trust, and meets people where they are. The studio operates across digital systems and storytelling, shaping work with care. We partner with agencies and brands that need to move decisively and hit well above their weight.
                  </p>
                  <p className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] leading-[26px] md:leading-[28px] lg:leading-[32px] text-[#555] text-[14px] md:text-[16px] lg:text-[18px] tracking-[0.32px]">
                   Work at Darby Yule Creative Studios begins with people. Each project starts with in-depth research, then moves through deliberate shaping into disciplined execution. Process matters because it produces work with coherence and durability. Every output is treated as part of a larger system, designed to function together and finished with precision.
                  </p>
                  <p className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] leading-[26px] md:leading-[28px] lg:leading-[32px] text-[#555] text-[14px] md:text-[16px] lg:text-[18px] tracking-[0.32px]">
                    We partner with organizations that take how they show up seriously. Our strongest work requires well-informed, collaborative teams committed to a holistic and disciplined approach to design. Success looks like alignment between a company and its audience, supported by sound decisions and grounded craft.
                  </p>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborators Section */}
      <section id="collaborators" className="bg-[#f1eee7] relative w-full py-8 md:py-12 lg:py-16 px-4 sm:px-8 md:px-12 lg:px-[80px]" data-animate>
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col gap-8 md:gap-12 lg:gap-[80px] w-full">
            {/* MOTION: Fade in section header */}
            <p className="font-['Neue_Haas_Grotesk_Display_Pro:75_Bold',sans-serif] leading-tight md:leading-normal text-[#8b9544] text-[32px] md:text-[40px] lg:text-[48px] tracking-[1.2px] md:tracking-[1.92px] uppercase" data-animate>Collaborators</p>
            
            {/* Logo Grid */}
            {/* MOTION: Subtle hover effect on logos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full" data-animate>
              <div className="aspect-[3/2] relative logo-hover">
                <img alt="" className="w-full h-full object-contain" src={imgLogo13} />
              </div>
              <div className="aspect-[3/2] relative logo-hover">
                <img alt="" className="w-full h-full object-contain" src={imgLogo21} />
              </div>
              <div className="aspect-[3/2] relative logo-hover">
                <img alt="" className="w-full h-full object-contain" src={imgLogo31} />
              </div>
              <div className="aspect-[3/2] relative logo-hover">
                <img alt="" className="w-full h-full object-contain" src={imgLogo41} />
              </div>
              <div className="aspect-[3/2] relative logo-hover">
                <img alt="" className="w-full h-full object-contain" src={imgLogo51} />
              </div>
              <div className="aspect-[3/2] relative logo-hover">
                <img alt="" className="w-full h-full object-contain" src={imgLogo71} />
              </div>
              <div className="aspect-[3/2] relative logo-hover">
                <img alt="" className="w-full h-full object-contain" src={imgLogo61} />
              </div>
              <div className="aspect-[3/2] relative logo-hover">
                <img alt="" className="w-full h-full object-contain" src={imgLogo81} />
              </div>
              <div className="aspect-[3/2] relative logo-hover">
                <img alt="" className="w-full h-full object-contain" src={imgLogo91} />
              </div>
              <div className="aspect-[3/2] relative logo-hover">
                <img alt="" className="w-full h-full object-contain" src={imgLogo101} />
              </div>
              <div className="aspect-[3/2] relative logo-hover">
                <img alt="" className="w-full h-full object-contain" src={imgLogo111} />
              </div>
              <div className="aspect-[3/2] relative logo-hover">
                <img alt="" className="w-full h-full object-contain" src={imgLogo121} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
     <ContactForm/>

      {/* CHANGE 2: Replaced footer with Figma frame */}
      <footer className="bg-gradient-to-r from-[#e1c78f] to-[#7b6d4e] relative w-full">
        {/* CHANGE 3: Mobile spacing fix - adequate vertical spacing on mobile */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between px-6 sm:px-8 md:px-10 lg:px-[40px] py-8 sm:py-6 md:py-[28px] w-full gap-8 lg:gap-0">
          {/* Logo and Navigation */}
          <div className="flex flex-col gap-6 md:gap-[32px] w-full lg:w-auto mb-0 lg:mb-0">
            <div className="h-[45px] md:h-[60.212px] w-auto max-w-[160px] md:max-w-[214.089px]">
              <img alt="Darby Yule Creative Studios" className="h-full w-auto object-contain" src={imgLogoAlt1} />
            </div>
            <nav className="flex flex-wrap gap-4 md:gap-[24px] items-center font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[14px] md:text-[16px] text-[#555] tracking-[0.32px] uppercase">
              <a href="#offerings" onClick={(e) => handleNavClick(e, 'offerings')} className="hover:text-[#222021] transition-colors">Offerings</a>
              <a href="#stories" onClick={(e) => handleNavClick(e, 'stories')} className="hover:text-[#222021] transition-colors">Stories</a>
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-[#222021] transition-colors">About</a>
              <a href="#collaborators" onClick={(e) => handleNavClick(e, 'collaborators')} className="hover:text-[#222021] transition-colors">Collaborators</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-[#222021] transition-colors">Contact</a>
              <a href="#privacy" className="hover:text-[#222021] transition-colors">Privacy Policy</a>
            </nav>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 md:gap-[40px] items-center">
            {/* LinkedIn */}
            <a className="relative w-8 h-8 md:w-[32.094px] md:h-[32.094px] hover:opacity-80 transition-opacity cursor-pointer" href="https://www.linkedin.com/in/darbyyule/" target="_blank">
              <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.0941 32.0941">
                <g clipPath="url(#clip0_footer_1)">
                  <path d={svgPathsFooter.p1ee81980} fill="#F1EEE7" />
                </g>
                <defs>
                  <clipPath id="clip0_footer_1">
                    <rect fill="white" height="32.0941" width="32.0941" />
                  </clipPath>
                </defs>
              </svg>
            </a>

            {/* Instagram */}
            <a className="relative w-8 h-8 md:w-[32.094px] md:h-[32.094px] hover:opacity-80 transition-opacity cursor-pointer" href="https://www.instagram.com/darbyyule.png/" target="_blank">
              <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.0941 32.0941">
                <g clipPath="url(#clip0_footer_2)">
                  <path d={svgPathsFooter.p3439d780} fill="#F1EEE7" />
                  <path d={svgPathsFooter.p2bde0600} fill="white" />
                  <path d={svgPathsFooter.p370f0b00} fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_footer_2">
                    <rect fill="white" height="32.0941" width="32.0941" />
                  </clipPath>
                </defs>
              </svg>
            </a>

            {/* Email */}
            <a href="mailto:info@darbyyulecreative.studio"  className="relative rounded-[7.294px] w-8 h-8 md:w-[32.094px] md:h-[32.094px] border-2 border-[#f1eee7] hover:opacity-80 transition-opacity cursor-pointer flex items-center justify-center">
              <svg className="block w-6 h-6 md:w-[24px] md:h-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g>
                  <path d={svgPathsFooter.p26ba6c80} fill="#F1EEE7" />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/case-study/kinvest" element={<CaseStudy />} />
        {/* LINKED: Card "The Amazing Thing You Can't Explain" → Case Study page */}
        <Route path="/case-study/pantegral" element={<CaseStudy2 />} />
        {/* LINKED: Card "Teaching the Product to Sell Itself" → Case Study page */}
        <Route path="/case-study/product-self-sell" element={<CaseStudy3 />} />
      </Routes>
    </BrowserRouter>
  );
}