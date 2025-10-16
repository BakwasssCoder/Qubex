import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
// import TypingAnimation from "@/components/TypingAnimation";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Coverage", path: "/coverage" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-500 to-green-600 shadow-elegant backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-24">
          {/* Logo and Brand Name */}
          <Link to="/" className="flex flex-col items-center group">
            <div className="flex items-center space-x-1">
              <img 
                src="/logos/QubexLogo.jpg" 
                alt="Qubex Logo" 
                className="h-10 w-10 md:h-14 md:w-14 rounded-full object-contain"
              />
              <div className="flex items-baseline">
                <span className="text-white text-3xl md:text-4xl font-bold transition-all duration-300 group-hover:tracking-wider">Qub</span>
                <span className="text-orange-400 text-3xl md:text-4xl font-bold transition-all duration-300 group-hover:tracking-wider">Ex</span>
                <sup className="text-white text-xs md:text-sm mt-2">™</sup>
              </div>
            </div>
            <div className="text-black text-xs md:text-sm font-bold mt-1 ml-1">
              BuyNdeliver
            </div>
          </Link>

          {/* Slogan - Visible on larger screens */}
          <div className="hidden lg:block flex-1 mx-4">
            <p className="font-bold text-sm md:text-base text-center">
              {/* <TypingAnimation 
                texts={["Your Needs, our responsibility\nQubex brings city stores to your door"]}
                speed={50}
                pauseDuration={3000}
                singleLine={false}
                resetOnComplete={true}
                className="attention-slogan"
              /> */}
              Your Needs, our responsibility. Qubex brings city stores to your door.
            </p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-full border-2 border-white text-sm font-medium transition-all duration-300 hover:bg-white hover:text-orange-600 hover:scale-105 hover:shadow-lg ${
                  isActive(item.path) ? "bg-white text-orange-600 scale-105 font-bold shadow-lg" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4 ml-4">
            <a href="tel:+919515850682">
              <Button variant="outline" size="sm" className="gap-2 transition-all duration-300 hover:scale-105 bg-white/20 border-white text-white hover:bg-white hover:text-orange-600">
                <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                <span className="font-bold">Call Now</span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-3 border-t border-white/20 animate-fadeIn bg-gradient-to-r from-orange-500 to-green-600">
            {/* Logo and Brand Name for Mobile */}
            <div className="flex justify-center py-2">
              <Link to="/" className="flex flex-col items-center group" onClick={() => setIsOpen(false)}>
                <div className="flex items-center space-x-1">
                  <img 
                    src="/logos/QubexLogo.jpg" 
                    alt="Qubex Logo" 
                    className="h-10 w-10 rounded-full object-contain"
                  />
                  <div className="flex items-baseline">
                    <span className="text-white text-3xl font-bold transition-all duration-300 group-hover:tracking-wider">Qub</span>
                    <span className="text-orange-400 text-3xl font-bold transition-all duration-300 group-hover:tracking-wider">Ex</span>
                    <sup className="text-white text-xs mt-2">™</sup>
                  </div>
                </div>
                <div className="text-black text-xs font-bold mt-1 ml-1">
                  BuyNdeliver
                </div>
              </Link>
            </div>
            
            {/* Slogan in mobile menu */}
            <div className="px-4">
              <p className="font-bold text-sm text-center py-2">
                {/* <TypingAnimation 
                  texts={["Your Needs, our responsibility\nQubex brings city stores to your door"]}
                  speed={50}
                  pauseDuration={3000}
                  singleLine={false}
                  resetOnComplete={true}
                  className="attention-slogan"
                /> */}
                Your Needs, our responsibility. Qubex brings city stores to your door.
              </p>
            </div>
            
            <div className="px-4 grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 rounded-full border-2 text-center text-sm font-medium transition-all duration-300 hover:bg-white hover:text-orange-600 hover:scale-105 ${
                    isActive(item.path) ? "bg-white text-orange-600 scale-105 font-bold" : "text-white border-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="px-4 pt-2 space-y-2 border-t border-white/20">
              <a href="tel:+919515850682" className="block">
                <Button variant="outline" className="w-full gap-2 bg-white/20 border-white text-white hover:bg-white hover:text-orange-600">
                  <Phone className="h-4 w-4" />
                  <span className="font-bold">Call Now</span>
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;