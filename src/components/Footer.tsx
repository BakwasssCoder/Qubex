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
                <Link to="/privacy-policy" className="text-sm font-bold text-gray-700 hover:text-orange-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-sm font-bold text-gray-700 hover:text-orange-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-sm font-bold text-gray-700 hover:text-orange-600 transition-colors">
                  Refund Policy
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
                <a href="mailto:support@qubexdeliver.com" className="hover:text-orange-600 transition-colors">
                  support@qubexdeliver.com
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
          
          {/* Business Info Section */}
          <section id="footer-info" className="text-sm text-gray-500 mb-4">
            <p>© 2025 Qubex: BuyNDeliver™ — An initiative by QuickBuy Boy.</p>
            <p>Registered under MSME (Under Registration).</p>
            <p>Helpline: +91 95158 50682 | Email: support@qubexdeliver.com</p>
            <p>Operational Locations: Delhi | Hyderabad | Patna | Tamil Nadu</p>
            <p>We are committed to transparent, verified, and human-assisted deliveries.</p>
          </section>
          
          {/* Social Media Links */}
          <div className="flex flex-wrap justify-center gap-4 my-6">
            <a 
              href="https://www.instagram.com/qubex.buyndeliver/?igsh=MTR2eHJpdW9uMHhlcA%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold text-gray-700 hover:text-orange-600 transition-colors bg-gray-100 px-4 py-2 rounded-full"
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
            
            <a 
              href="https://www.facebook.com/profile.php?id=61582312474855&mibextid=ZbWKwL" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold text-gray-700 hover:text-orange-600 transition-colors bg-gray-100 px-4 py-2 rounded-full"
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
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <span>Facebook</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/quickbuy-boy-qubex-17b02438a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold text-gray-700 hover:text-orange-600 transition-colors bg-gray-100 px-4 py-2 rounded-full"
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
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span>LinkedIn</span>
            </a>
            
            <a 
              href="https://twitter.com/qubexdeliver" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold text-gray-700 hover:text-orange-600 transition-colors bg-gray-100 px-4 py-2 rounded-full"
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
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
              <span>Twitter</span>
            </a>
          </div>
          
          <div className="mt-2 flex flex-col items-center gap-2">
            <a 
              href="https://instagram.com/anikettt.tsx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold text-gray-800 hover:text-orange-600 transition-colors flex flex-col items-center"
            >
              <span>Developed By:</span>
              <span>BakwasssCoder</span>
              <span className="text-sm">aka Aniket</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;