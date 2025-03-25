
import { Leaf, Sprout, Wheat, Trees } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import CropShowcase from "@/components/CropShowcase";
import Footer from "@/components/Footer";

const Index = () => {
  const features = [
    {
      icon: Sprout,
      title: "Crop Information",
      description: "Access detailed information about various crops including growing conditions, care tips, and harvesting guidelines."
    },
    {
      icon: Leaf,
      title: "Plant Database",
      description: "Explore our extensive database of plants with comprehensive details on cultivation, care, and ornamental uses."
    },
    {
      icon: Trees,
      title: "Tree Guide",
      description: "Learn about different tree species, their growth patterns, ecological benefits, and maintenance requirements."
    },
    {
      icon: Wheat,
      title: "Agricultural Analytics",
      description: "Leverage data-driven insights to optimize your agricultural practices and improve crop yields."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      
      {/* Features Section */}
      <section id="features" className="section-padding px-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
            <span className="text-xs uppercase tracking-widest font-medium text-nature-600">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
              Comprehensive Agricultural Insights
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover the tools and resources we provide to help you succeed in your agricultural endeavors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>
      
      <CropShowcase />
      
      {/* Plants & Trees Section */}
      <section id="plants" className="section-padding px-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <span className="text-xs uppercase tracking-widest font-medium text-nature-600">Plants & Trees</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
                Complete Guide for Every Plant & Tree
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                From ornamental plants to towering trees, our comprehensive database provides detailed information about various plant species, their care requirements, and ecological benefits.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-nature-100 dark:bg-nature-900/30 flex items-center justify-center text-nature-600 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">Detailed care instructions for every plant species</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-nature-100 dark:bg-nature-900/30 flex items-center justify-center text-nature-600 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">Information on growth patterns and environmental needs</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-nature-100 dark:bg-nature-900/30 flex items-center justify-center text-nature-600 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">Tips for pest management and disease prevention</span>
                </li>
              </ul>
              <button className="px-6 py-3 bg-nature-600 hover:bg-nature-700 text-white font-medium rounded-full transition-smooth">
                Explore Plant Database
              </button>
            </div>
            
            <div className="order-1 md:order-2 relative h-80 md:h-96 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <div className="absolute inset-0 overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80" 
                  alt="Trees in forest" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 right-4 bottom-4 -z-10 rounded-2xl bg-nature-100 dark:bg-nature-900/20"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 px-6 bg-nature-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.7,-68.4C52.8,-62.8,65.8,-54.7,71.7,-42.9C77.6,-31.1,76.3,-15.5,74.3,-1.2C72.3,13.2,69.5,26.4,63.2,38.8C56.9,51.3,47.1,63,34.9,70.5C22.6,78.1,7.9,81.6,-5.5,78.9C-18.9,76.2,-31.1,67.5,-44.6,59.4C-58.2,51.4,-73.2,44.1,-83.1,31.3C-93,18.5,-97.9,0.2,-94.3,-16.5C-90.7,-33.2,-78.7,-48.2,-64.3,-57.8C-49.9,-67.4,-33.1,-71.6,-18.9,-72.5C-4.7,-73.5,7,-76.3,18.4,-74.4C29.9,-72.6,41,-74,39.7,-68.4Z" transform="translate(200 200) scale(1.5)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Optimize Your Agricultural Practices?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Join thousands of farmers and gardeners who are already using our platform to access comprehensive information and improve their results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-nature-700 font-medium rounded-full shadow-lg hover:shadow-xl transition-smooth">
                Get Started for Free
              </button>
              <button className="px-8 py-3 bg-transparent hover:bg-nature-700 text-white border border-white/30 font-medium rounded-full transition-smooth">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
