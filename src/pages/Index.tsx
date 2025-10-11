import { Link } from "react-router-dom";
import { ArrowRight, Clock, Shield, Truck, Heart, Pill, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import OrderWidget from "@/components/OrderWidget";
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 gradient-hero opacity-95" />
          <img src={heroImage} alt="Qubex Delivery" className="w-full h-full object-cover mix-blend-overlay opacity-40" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-accent/30">
              <Clock className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Available 24/7 • Emergency Ready</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              We Deliver Anything,
              <br />
              <span className="text-accent">Anytime</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-4 text-white/90 max-w-3xl mx-auto">
              From medicines to electronics, spare parts, groceries, event items, and custom orders — from city markets to your village doorstep.
            </p>
            
            <p className="text-base md:text-lg font-semibold mb-8 text-accent">
              Aapka samaan, hamari zimmedari — Qubex brings city stores to your door
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="https://wa.me/919515850682?text=Hello%20Qubex,%20I%20need%20urgent%20delivery">
                <Button size="lg" className="gradient-gold text-primary font-semibold gap-2 shadow-glow text-lg px-8 py-6">
                  Order on WhatsApp
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </a>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm text-lg px-8 py-6">
                  How It Works
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="glass-panel p-4 rounded-xl">
                <div className="text-2xl font-bold text-accent mb-1">24/7</div>
                <div className="text-sm text-white/80">Always Open</div>
              </div>
              <div className="glass-panel p-4 rounded-xl">
                <div className="text-2xl font-bold text-accent mb-1">30min</div>
                <div className="text-sm text-white/80">Avg Delivery</div>
              </div>
              <div className="glass-panel p-4 rounded-xl">
                <div className="text-2xl font-bold text-accent mb-1">100%</div>
                <div className="text-sm text-white/80">Verified</div>
              </div>
              <div className="glass-panel p-4 rounded-xl">
                <div className="text-2xl font-bold text-accent mb-1">UPI</div>
                <div className="text-sm text-white/80">Payment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Qubex?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're not just a delivery service. We're your on-demand delivery partner for anything you need, available 24/7.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass-panel p-8 rounded-2xl shadow-elegant hover:shadow-glow transition-all">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Emergency Ready</h3>
              <p className="text-muted-foreground">
                Urgent medicine at 3 AM? Electronics needed today? Event supplies in hours? We handle it all with priority delivery.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl shadow-elegant hover:shadow-glow transition-all">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Anything, Anywhere</h3>
              <p className="text-muted-foreground">
                Medicines, electronics, spare parts, groceries, event items — if city stores have it, we'll deliver it to you.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl shadow-elegant hover:shadow-glow transition-all">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Truck className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">City to Village</h3>
              <p className="text-muted-foreground">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Deliver</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              From emergency medicines to electronics, spare parts, groceries, event items, and beyond — we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all hover:scale-105 cursor-pointer group">
              <img src={medicineIcon} alt="Medicine" className="w-20 h-20 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Medicines & Healthcare</h3>
              <p className="text-white/80 mb-4">
                Prescription drugs, OTC medicines, health supplements, and medical equipment.
              </p>
              <Link to="/services" className="text-accent hover:underline inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all hover:scale-105 cursor-pointer group">
              <img src={groceryIcon} alt="Electronics" className="w-20 h-20 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Electronics & Appliances</h3>
              <p className="text-white/80 mb-4">
                Mobile accessories, spare parts, home appliances, gadgets, and tech essentials.
              </p>
              <Link to="/services" className="text-accent hover:underline inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all hover:scale-105 cursor-pointer group">
              <img src={deliveryIcon} alt="Groceries & More" className="w-20 h-20 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Groceries & More</h3>
              <p className="text-white/80 mb-4">
                Daily groceries, event supplies, party items, custom orders — anything you need.
              </p>
              <Link to="/services" className="text-accent hover:underline inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="bg-accent text-primary hover:bg-accent/90 font-semibold gap-2">
                View All Services
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
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
                Fill the form or WhatsApp us with your medicine list and address.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-2xl font-bold text-primary mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Get Quote</h3>
              <p className="text-muted-foreground">
                We confirm availability and send you the exact price on WhatsApp.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-2xl font-bold text-primary mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Pay & Receive</h3>
              <p className="text-muted-foreground">
                Complete UPI payment, then your order arrives at your doorstep safely.
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

      {/* CTA Section */}
      <section className="py-20 gradient-gold">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-16 w-16 text-primary mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Need Emergency Delivery?
          </h2>
          <p className="text-primary/80 text-lg mb-8 max-w-2xl mx-auto">
            Don't wait. Our team is standing by 24/7 to help you get what you need, when you need it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919515850682?text=Hello%20Qubex,%20I%20need%20urgent%20delivery">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-semibold gap-2 hover:scale-105 transition-transform">
                WhatsApp Now
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+919515850682">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 font-semibold hover:scale-105 transition-transform">
                  Call +91 95158 50682
                </Button>
              </a>
              <a href="tel:+916202815368">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 font-semibold hover:scale-105 transition-transform">
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
