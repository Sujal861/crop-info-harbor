
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToContent = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center py-20 px-6 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/20 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=2000&q=80"
          alt="Agricultural landscape"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.9)' }}
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-3xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="inline-block px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-nature-800 mb-6">
            The Future of Agriculture
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Discover the World of Plants & Crops
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            Access comprehensive information about crops, plants, and trees to optimize your agricultural endeavors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-nature-600 hover:bg-nature-700 text-white font-medium rounded-full transition-smooth">
              Explore Crops
            </button>
            <button className="px-8 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 font-medium rounded-full transition-smooth">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default HeroSection;
