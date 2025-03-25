
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface CropItem {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
}

const crops: CropItem[] = [
  {
    id: 1,
    name: "Wheat",
    category: "Cereal",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
    description: "A staple food crop grown worldwide, providing essential nutrients and calories to billions of people."
  },
  {
    id: 2,
    name: "Rice",
    category: "Cereal",
    image: "https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?auto=format&fit=crop&w=800&q=80",
    description: "The most consumed staple food for over half the world's population, particularly in Asia."
  },
  {
    id: 3,
    name: "Corn",
    category: "Cereal",
    image: "https://images.unsplash.com/photo-1551861568-c4e7624534b2?auto=format&fit=crop&w=800&q=80",
    description: "Versatile crop used for food, animal feed, and biofuel production across many countries."
  },
  {
    id: 4,
    name: "Soybeans",
    category: "Legume",
    image: "https://images.unsplash.com/photo-1600857544700-b54aa6d6c228?auto=format&fit=crop&w=800&q=80",
    description: "Rich in protein and oil, soybeans are used for human consumption, livestock feed, and industrial applications."
  }
];

const CropShowcase = () => {
  const [activeCropId, setActiveCropId] = useState(crops[0].id);
  const activeCrop = crops.find(crop => crop.id === activeCropId) || crops[0];

  return (
    <section id="crops" className="section-padding px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <span className="text-xs uppercase tracking-widest font-medium text-nature-600">Crop Information</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
            Explore Our Crop Database
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Access detailed information about various crops, their growing conditions, and best practices for cultivation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Crop Selection */}
          <div className="md:col-span-1 bg-white dark:bg-gray-800/50 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <h3 className="text-xl font-semibold mb-6">Browse Crops</h3>
            <div className="flex flex-col space-y-1">
              {crops.map((crop) => (
                <button
                  key={crop.id}
                  onClick={() => setActiveCropId(crop.id)}
                  className={`flex items-center justify-between text-left px-4 py-3 rounded-lg transition-smooth ${
                    crop.id === activeCropId
                      ? "bg-nature-100 dark:bg-nature-900/30 text-nature-700 dark:text-nature-400"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700/50"
                  }`}
                >
                  <span className="font-medium">{crop.name}</span>
                  <ChevronRight size={16} className={crop.id === activeCropId ? "text-nature-600" : "text-gray-400"} />
                </button>
              ))}
            </div>
          </div>

          {/* Crop Details */}
          <div className="md:col-span-2 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="h-64 w-full">
                <img 
                  src={activeCrop.image} 
                  alt={activeCrop.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-display font-bold">{activeCrop.name}</h3>
                  <span className="text-xs uppercase tracking-widest font-medium text-nature-600 px-3 py-1 bg-nature-50 dark:bg-nature-900/30 rounded-full">
                    {activeCrop.category}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {activeCrop.description}
                </p>
                <button className="text-nature-600 hover:text-nature-700 dark:text-nature-400 dark:hover:text-nature-300 font-medium flex items-center gap-1 transition-smooth">
                  <span>Read full details</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CropShowcase;
