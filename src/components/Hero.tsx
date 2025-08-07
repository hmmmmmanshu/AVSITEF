
import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Removed Lottie animation for a cleaner hero

  // Removed mouse tilt effect for simplified hero
  
  useEffect(() => {
    // Skip parallax on mobile
    if (isMobile) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);
  
  return (
    <section 
      className="relative overflow-hidden bg-gradient-to-b from-pulse-50/60 to-background" 
      id="hero" 
      style={{
        padding: isMobile ? '100px 16px 96px' : '160px 24px 140px'
      }}
    >
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-pulse-gradient opacity-20 blur-3xl rounded-full"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div 
            className="pulse-chip mb-3 sm:mb-6 animate-fade-in" 
            style={{ animationDelay: "0.1s" }}
          >
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">⭐</span>
            <span>Trusted by 547+ Founders</span>
          </div>
          
          <h1 
            className="section-title text-4xl sm:text-6xl xl:text-7xl leading-tight animate-enter will-change-transform" 
            style={{ animationDelay: "0.3s" }}
          >
            Build with clarity.<br className="hidden sm:inline" /> Scale from day one.
          </h1>
          
          <p 
            style={{ animationDelay: "0.5s" }} 
            className="section-subtitle mt-3 sm:mt-6 mb-6 sm:mb-10 leading-relaxed animate-enter text-muted-foreground font-normal text-base sm:text-lg"
          >
            A focused, step‑by‑step roadmap to validate, launch, and grow—without guesswork or clutter.
          </p>
          
          <div 
            className="flex items-center justify-center animate-fade-in" 
            style={{ animationDelay: "0.7s" }}
          >
            <a 
              href="#programs" 
              className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors px-6 py-3"
            >
              Explore Our Programs
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-pulse-100/30 rounded-full blur-3xl -z-10 parallax" data-speed="0.05"></div>
    </section>
  );
};

export default Hero;
