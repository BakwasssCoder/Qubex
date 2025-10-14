import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 mt-20 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/logos/QubexLogo.jpg" 
                alt="Qubex Logo" 
                className="h-12 w-12 rounded-full object-contain"
              />
              <div className="text-2xl font-bold">
                <span className="text-gray-900">Qub</span>
                <span className="text-orange-600">Ex</span>
                <sup className="text-gray-900 text-xs">™</sup>
              </div>
            </div>
            <p className="text-sm font-bold text-gray-800 mb-4">
              Your trusted partner for buying and delivering anything from anywhere, anytime.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/how-it-works" className="text-sm font-bold text-gray-700 hover:text-orange-600 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm font-bold text-gray-700 hover:text-orange-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm font-bold text-gray-700 hover:text-orange-600 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/coverage" className="text-sm font-bold text-gray-700 hover:text-orange-600 transition-colors">
                  Coverage Areas
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-sm font-bold text-gray-700 hover:text-orange-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm font-bold text-gray-700 hover:text-orange-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm font-bold text-gray-700 hover:text-orange-600 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm font-bold text-gray-700">
                <Phone className="h-4 w-4 text-orange-600" />
                <a href="tel:+919515850682" className="hover:text-orange-600 transition-colors">
                  +91 95158 50682
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm font-bold text-gray-700">
                <Phone className="h-4 w-4 text-orange-600" />
                <a href="tel:+916202815368" className="hover:text-orange-600 transition-colors">
                  +91 62028 15368
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm font-bold text-gray-700">
                <Mail className="h-4 w-4 text-orange-600" />
                <a href="mailto:gugulothrajkumar257@gmail.com" className="hover:text-orange-600 transition-colors">
                  gugulothrajkumar257@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm font-bold text-gray-700">
                <MapPin className="h-4 w-4 text-orange-600 mt-0.5" />
                <span>Hyderabad, Chennai, NCR, Patna & Nearby Areas</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8 text-center">
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6 rounded">
            <p className="font-bold text-lg">IMPORTANT NOTE:</p>
            <p className="mt-2">
              Qubex:BuyNdeliver operates under registration as a service intermediary. We procure products from authorized sellers on behalf of customers. 
              Qubex does not manufacture, stock, or resell any items. All purchases are verified and billed directly from the source seller. 
              Official registration documents (GST, LLP, etc.) are in process.
            </p>
          </div>
          <p className="font-bold text-gray-800">&copy; {new Date().getFullYear()} Qubex. All rights reserved.</p>
          <div className="mt-2 flex flex-col items-center gap-2">
            <p className="font-bold text-gray-800">Developed by BakwasssCoder</p>
            <a 
              href="https://instagram.com/anikettt.tsx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold text-gray-700 hover:text-orange-600 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="text-orange-600"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;