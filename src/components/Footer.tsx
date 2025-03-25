
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="inline-block mb-6">
              <span className="font-display font-bold text-2xl text-nature-800 dark:text-nature-200">
                PlantSage
              </span>
            </a>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Providing comprehensive information about crops, plants, and trees to optimize agricultural practices and promote sustainable farming.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-nature-600 hover:text-white transition-smooth">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-nature-600 hover:text-white transition-smooth">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-nature-600 hover:text-white transition-smooth">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-nature-600 dark:text-gray-400 dark:hover:text-nature-400 transition-smooth">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-600 hover:text-nature-600 dark:text-gray-400 dark:hover:text-nature-400 transition-smooth">
                  Features
                </a>
              </li>
              <li>
                <a href="#crops" className="text-gray-600 hover:text-nature-600 dark:text-gray-400 dark:hover:text-nature-400 transition-smooth">
                  Crops
                </a>
              </li>
              <li>
                <a href="#plants" className="text-gray-600 hover:text-nature-600 dark:text-gray-400 dark:hover:text-nature-400 transition-smooth">
                  Plants
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-nature-600 dark:text-gray-400 dark:hover:text-nature-400 transition-smooth">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">
                <span className="font-medium">Email:</span> info@plantsage.com
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                <span className="font-medium">Phone:</span> +1 (555) 123-4567
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                <span className="font-medium">Address:</span> 123 Green Avenue, Farmland, CA 94123
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 text-sm text-center">
          <p>© {currentYear} PlantSage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
