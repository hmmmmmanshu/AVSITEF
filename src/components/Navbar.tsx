import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };
  return <header className={cn("fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300", isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent")}>
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center space-x-3" onClick={e => {
        e.preventDefault();
        scrollToTop();
      }} aria-label="Acharya Ventures">
          <div className="flex items-center space-x-2">
            <div className="bg-primary text-primary-foreground rounded-md px-2 py-1 text-sm font-bold">
              AV
            </div>
            <span className="text-lg sm:text-xl font-bold text-foreground">
              Acharya Ventures
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#programs" className="nav-link">Programs</a>
          <a href="#community" className="nav-link">Community</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#studio" className="nav-link">Studio</a>
          <a href="/about" className="nav-link">About</a>
          <Button asChild size="sm" className="ml-2">
            <a href="#contact" aria-label="Contact Acharya Ventures">Contact</a>
          </Button>
        </nav>

        {/* Mobile menu button - increased touch target */}
        <button className="md:hidden text-gray-700 p-3 focus:outline-none" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - improved for better touch experience */}
      <div className={cn("fixed inset-0 z-40 bg-white flex flex-col pt-16 px-6 md:hidden transition-all duration-300 ease-in-out", isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none")}>
        <nav className="flex flex-col space-y-8 items-center mt-8">
          <a href="#" className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" onClick={e => {
          e.preventDefault();
          scrollToTop();
          setIsMenuOpen(false);
          document.body.style.overflow = '';
        }}>
            Home
          </a>
          <a href="#programs" className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" onClick={() => {
          setIsMenuOpen(false);
          document.body.style.overflow = '';
        }}>
            Programs
          </a>
          <a href="#community" className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" onClick={() => {
          setIsMenuOpen(false);
          document.body.style.overflow = '';
        }}>
            Community
          </a>
          <a href="#services" className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" onClick={() => {
          setIsMenuOpen(false);
          document.body.style.overflow = '';
        }}>
            Services
          </a>
          <a href="/about" className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" onClick={() => {
          setIsMenuOpen(false);
          document.body.style.overflow = '';
        }}>
            About
          </a>
          <div className="w-full pt-2">
            <Button asChild size="lg" className="w-full">
              <a href="#contact" onClick={() => { setIsMenuOpen(false); document.body.style.overflow = ''; }}>Contact</a>
            </Button>
          </div>
        </nav>
      </div>
    </header>;
};
export default Navbar;
