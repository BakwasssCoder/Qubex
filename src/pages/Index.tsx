import { Link } from "react-router-dom";
import { ArrowRight, Clock, Shield, Truck, Heart, Pill, ShoppingBag, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import OrderWidget from "@/components/OrderWidget";
import TypingAnimation from "@/components/TypingAnimation";
import heroImage from "@/assets/hero-delivery.jpg";
import medicineIcon from "@/assets/medicine-icon.png";
import groceryIcon from "@/assets/grocery-icon.png";
import deliveryIcon from "@/assets/delivery-icon.png";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <OrderWidget isSticky />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-40">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40" />
          <img src={heroImage} alt="Qubex Delivery" className="w-full h-full object-cover mix-blend-overlay opacity-70" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-orange-200 shadow-lg mx-auto">
              <Clock className="h-4 w-4 text-orange-600" />
              <span className="text-sm font-bold text-orange-800">Available 24/7 • Emergency Ready</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              We Buy And Deliver To You
              <br />
              <span className="text-orange-300">Anything-Anywhere-Anytime</span>
            </h1>
            
            <div className="mb-6">
              <p className="text-sm md:text-base font-bold text-white">
                Made in India, Made for India
              </p>
              <p className="text-sm md:text-base font-bold text-white mt-2">
                An initiative by QuickBuy Boy — India's trusted on-demand delivery network.
              </p>
            </div>
            
            <p className="text-lg md:text-xl mb-4 text-white max-w-3xl mx-auto font-medium">
              <TypingAnimation 
                texts={[
                  "From medicines to electronics, spare parts, groceries, event items, and custom orders — from city markets to your village doorstep.\n\nYour virtual assistant — shop anything, anywhere, anytime, right from your place. For detailed service information, connect with us now.",
                ]}
                speed={50}
                pauseDuration={2000}
                resetOnComplete={true}
              />
            </p>
            
            {/* Slogan moved to header */}

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="https://wa.me/919515850682?text=Hello%20Qubex,%20I%20need%20urgent%20delivery">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold gap-2 shadow-lg text-lg px-8 py-6 hover:from-orange-600 hover:to-orange-700 transition-all">
                  Order on WhatsApp
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </a>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline" className="bg-white/80 border-orange-300 text-orange-700 hover:bg-white font-bold text-lg px-8 py-6 shadow-lg">
                  How It Works
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-orange-600 mb-1">24/7</div>
                <div className="text-sm font-bold text-gray-700">Always Open</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
                <div className="text-sm font-bold text-gray-700">Verified</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-orange-600 mb-1">Fast</div>
                <div className="text-sm font-bold text-gray-700">Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Choose Qubex?</h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg font-bold">
              We're not just a delivery service. We're your on-demand delivery partner for anything you need, available 24/7.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass-panel p-8 rounded-2xl shadow-elegant hover:shadow-glow transition-all bg-white/80">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Emergency Ready</h3>
              <p className="text-gray-700 font-medium">
                Urgent medicine at 3 AM? Electronics needed today? Event supplies in hours? We handle it all with priority delivery.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl shadow-elegant hover:shadow-glow transition-all bg-white/80">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Anything, Anywhere</h3>
              <p className="text-gray-700 font-medium">
                Medicines, electronics, spare parts, groceries, event items — if city stores have it, we'll deliver it to you.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl shadow-elegant hover:shadow-glow transition-all bg-white/80">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Truck className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">City to Village</h3>
              <p className="text-gray-700 font-medium">
                Serving Delhi, Hyderabad, Chennai, Patna — and delivering to nearby villages and rural areas nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What services we provide</h2>
            <p className="text-white/90 max-w-2xl mx-auto text-lg font-medium">
              From emergency medicines to electronics, spare parts, groceries, event items, and beyond — we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 hover:bg-white/25 transition-all hover:scale-105 cursor-pointer group">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">🛒 Shop & Deliver</h3>
              <p className="text-white/90 font-medium">
                Groceries, medicines, clothes, gifts, and daily essentials — we buy and deliver fast.
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 hover:bg-white/25 transition-all hover:scale-105 cursor-pointer group">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Pill className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">⚙ Electronics & Mechanical Spares</h3>
              <p className="text-white/90 font-medium">
                Get genuine spare parts for your electronics, vehicles, and machinery — delivered right to your door.
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 hover:bg-white/25 transition-all hover:scale-105 cursor-pointer group">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">🎨 Printing & Decoration</h3>
              <p className="text-white/90 font-medium">
                Business diaries, posters, banners, and decoration items — we print and deliver anywhere.
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 hover:bg-white/25 transition-all hover:scale-105 cursor-pointer group">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Home className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">🏪 For Small Businesses & Shops</h3>
              <p className="text-white/90 font-medium">
                We help local shop owners and small businesses manage inventory, place stock orders, reduce lead time, and increase profits through reliable logistics support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple 3-Step Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From request to delivery, we make it effortless.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-2xl font-bold text-primary mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Send Request</h3>
              <p className="text-muted-foreground">
                Fill our order form or WhatsApp us with your item list and delivery address. Include specific details like brand names, models, or quantities for accuracy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-2xl font-bold text-primary mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Get Quote</h3>
              <p className="text-muted-foreground">
                We source your items from verified suppliers and send you a confirmed price on WhatsApp within minutes. Includes item cost + service fee + delivery charges.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-2xl font-bold text-primary mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Receive Items</h3>
              <p className="text-muted-foreground">
                We proceed with sourcing and delivery of your items. Track your order via WhatsApp updates. Receive your items at your doorstep with bills included.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/how-it-works">
              <Button size="lg" variant="outline" className="gap-2">
                Detailed Process
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted Delivery Partners */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted Delivery Partners</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We use trusted logistics networks to ensure your deliveries arrive safely and on time.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-8 max-w-7xl mx-auto items-center justify-center">
            <div className="flex flex-col items-center justify-center p-6 glass-panel rounded-2xl shadow-elegant">
              <img src="/logos/dhl-logo-transparent-free-png.webp" alt="DHL" className="w-24 h-24 mb-4 object-contain rounded-lg" />
              <span className="font-semibold text-lg">DHL</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 glass-panel rounded-2xl shadow-elegant">
              <img src="/logos/dtdc.jpg" alt="DTDC" className="w-24 h-24 mb-4 object-contain rounded-lg" />
              <span className="font-semibold text-lg">DTDC</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 glass-panel rounded-2xl shadow-elegant">
              <img src="/logos/blue-dart-logo-freelogovectors.jpg" alt="BlueDart" className="w-24 h-24 mb-4 object-contain rounded-lg" />
              <span className="font-semibold text-lg">BlueDart</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 glass-panel rounded-2xl shadow-elegant">
              <img src="/logos/fedex.jpg" alt="FedEx" className="w-24 h-24 mb-4 object-contain rounded-lg" />
              <span className="font-semibold text-lg">FedEx</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 glass-panel rounded-2xl shadow-elegant">
              <img src="/logos/porter.jpg" alt="Porter" className="w-24 h-24 mb-4 object-contain rounded-lg" />
              <span className="font-semibold text-lg">Porter</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 glass-panel rounded-2xl shadow-elegant">
              <img src="/logos/wefast.jpg" alt="Wefast" className="w-24 h-24 mb-4 object-contain rounded-lg" />
              <span className="font-semibold text-lg">Wefast</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 glass-panel rounded-2xl shadow-elegant">
              <img src="/logos/cargo.jpg" alt="Cargo Services" className="w-24 h-24 mb-4 object-contain rounded-lg" />
              <span className="font-semibold text-lg">Cargo</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 glass-panel rounded-2xl shadow-elegant">
              <img src="/logos/cargotrain.jpg" alt="Train Cargo Services" className="w-24 h-24 mb-4 object-contain rounded-lg" />
              <span className="font-semibold text-lg">Train Cargo</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 glass-panel rounded-2xl shadow-elegant">
              <img src="/logos/rapido.jpg" alt="Rapido" className="w-24 h-24 mb-4 object-contain rounded-lg" />
              <span className="font-semibold text-lg">Rapido</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-10 bg-gradient-to-r from-orange-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Why Trust Qubex?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center justify-center gap-2 p-4 bg-white rounded-lg shadow-sm">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-sm font-medium text-gray-700">Verified MSME under registration</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-4 bg-white rounded-lg shadow-sm">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-sm font-medium text-gray-700">Secured by SSL Certificate</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-4 bg-white rounded-lg shadow-sm">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-sm font-medium text-gray-700">Verified Delivery Partners: DHL | DTDC | FedEx</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-4 bg-white rounded-lg shadow-sm">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-sm font-medium text-gray-700">Powered by QuickBuy Boy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-gold">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-16 w-16 text-orange-800 mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-4">
            Need Emergency Delivery?
          </h2>
          <p className="text-orange-900/90 text-lg mb-8 max-w-2xl mx-auto font-bold">
            Don't wait. Our team is standing by 24/7 to help you get what you need, when you need it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919515850682?text=Hello%20Qubex,%20I%20need%20urgent%20delivery">
              <Button size="lg" className="bg-orange-800 text-white hover:bg-orange-900 font-bold gap-2 hover:scale-105 transition-transform shadow-lg">
                WhatsApp Now
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+919515850682">
                <Button size="lg" variant="outline" className="border-orange-800 text-orange-900 hover:bg-orange-100 font-bold hover:scale-105 transition-transform shadow-lg">
                  Call +91 95158 50682
                </Button>
              </a>
              <a href="tel:+916202815368">
                <Button size="lg" variant="outline" className="border-orange-800 text-orange-900 hover:bg-orange-100 font-bold hover:scale-105 transition-transform shadow-lg">
                  Call +91 62028 15368
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;