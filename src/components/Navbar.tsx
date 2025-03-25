
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300 ${
        isScrolled
          ? "py-3 glass-effect"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <span className="font-display font-bold text-xl md:text-2xl text-nature-800">
            PlantSage
          </span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#features" 
            className="text-sm font-medium text-foreground/80 hover:text-nature-600 transition-smooth"
          >
            Features
          </a>
          <a 
            href="#crops" 
            className="text-sm font-medium text-foreground/80 hover:text-nature-600 transition-smooth"
          >
            Crops
          </a>
          <a 
            href="#plants" 
            className="text-sm font-medium text-foreground/80 hover:text-nature-600 transition-smooth"
          >
            Plants
          </a>
          <a 
            href="#about" 
            className="text-sm font-medium text-foreground/80 hover:text-nature-600 transition-smooth"
          >
            About
          </a>
        </div>

        <div className="hidden md:block">
          <button className="bg-nature-600 hover:bg-nature-700 text-white font-medium px-6 py-2 rounded-full transition-smooth">
            Get Started
          </button>
        </div>

        <button 
          className="block md:hidden text-foreground" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-effect absolute top-full left-0 right-0 p-6 animate-fade-in-fast">
          <div className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-sm font-medium hover:text-nature-600 transition-smooth"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#crops" 
              className="text-sm font-medium hover:text-nature-600 transition-smooth"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Crops
            </a>
            <a 
              href="#plants" 
              className="text-sm font-medium hover:text-nature-600 transition-smooth"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Plants
            </a>
            <a 
              href="#about" 
              className="text-sm font-medium hover:text-nature-600 transition-smooth"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <button className="bg-nature-600 hover:bg-nature-700 text-white font-medium px-6 py-2 rounded-full transition-smooth w-full mt-2">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
