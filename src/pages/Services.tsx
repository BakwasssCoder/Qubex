import { Pill, ShoppingBag, Heart, Stethoscope, Baby, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import OrderWidget from "@/components/OrderWidget";

const Services = () => {
  const services = [
    {
      icon: Pill,
      title: "Medicines & Healthcare",
      description: "All types of prescription drugs, OTC medicines, and health supplements.",
      features: [
        "Prescription medicines (with valid Rx)",
        "Chronic illness medications (diabetes, BP, thyroid)",
        "OTC medicines, pain relievers, fever reducers",
        "Vitamins, protein powders, health drinks",
        "Medical equipment: BP monitors, glucometers",
      ],
    },
    {
      icon: ShoppingBag,
      title: "Electronics & Gadgets",
      description: "Mobile accessories, electronics, and tech essentials delivered fast.",
      features: [
        "Mobile phone accessories and chargers",
        "Earphones, speakers, power banks",
        "Computer accessories and peripherals",
        "Smart home devices and gadgets",
        "Camera accessories and memory cards",
      ],
    },
    {
      icon: Home,
      title: "Home Appliances & Parts",
      description: "Small appliances, spare parts, and home essentials.",
      features: [
        "Kitchen appliances: mixers, kettles, toasters",
        "Electrical parts: bulbs, switches, wires",
        "Plumbing spare parts and fixtures",
        "Door locks, hinges, and hardware",
        "Cleaning equipment and tools",
      ],
    },
    {
      icon: Heart,
      title: "Groceries & Daily Essentials",
      description: "Fresh groceries, staples, and household items at your doorstep.",
      features: [
        "Rice, wheat, atta, dal, oil, spices",
        "Milk, bread, eggs, dairy products",
        "Personal care: soaps, shampoo, toiletries",
        "Household cleaning supplies",
        "Baby care: diapers, wipes, formula",
      ],
    },
    {
      icon: Stethoscope,
      title: "Event & Party Supplies",
      description: "Decorations, party items, and bulk orders for your celebrations.",
      features: [
        "Birthday party decorations and supplies",
        "Festival and celebration items",
        "Bulk orders for events and gatherings",
        "Disposable plates, cups, cutlery",
        "Gift items and wrapping materials",
      ],
    },
    {
      icon: Baby,
      title: "Custom & Special Orders",
      description: "Can't find it? We'll source it for you from city markets.",
      features: [
        "Special item sourcing from multiple stores",
        "Hard-to-find products and brands",
        "Bulk procurement for businesses",
        "Emergency hospital discharge items",
        "Anything available in city stores",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <OrderWidget isSticky />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From medicines to electronics, spare parts, groceries, event items, and custom orders — 
              we deliver anything from city stores to your village doorstep.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index} 
                  className="glass-panel p-8 rounded-2xl shadow-elegant hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer group"
                >
                  <div className="bg-gradient-to-br from-accent/20 to-accent/5 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-sm flex items-start gap-2 group-hover:translate-x-1 transition-transform">
                        <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 group-hover:scale-150 transition-transform" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Special Services */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Special Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-panel p-8 rounded-2xl shadow-elegant">
                <h3 className="text-xl font-bold mb-4">Recurring Deliveries</h3>
                <p className="text-muted-foreground mb-4">
                  Set up automatic monthly or weekly deliveries for your regular medications. Perfect for:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2" />
                    <span>Chronic disease medications (diabetes, hypertension)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2" />
                    <span>Elderly parents living alone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2" />
                    <span>Never run out of essential medicines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2" />
                    <span>Scheduled delivery dates, no repeat orders needed</span>
                  </li>
                </ul>
              </div>

              <div className="glass-panel p-8 rounded-2xl shadow-elegant">
                <h3 className="text-xl font-bold mb-4">Nationwide Coverage</h3>
                <p className="text-muted-foreground mb-4">
                  We deliver to villages and rural areas across India:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2" />
                    <span>Serving Delhi, Hyderabad, Chennai, Patna, and expanding nationwide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2" />
                    <span>City to village delivery within 24-48 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2" />
                    <span>Delivery fees based on distance and location</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2" />
                    <span>Serving areas where local stores are unavailable</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* What We Don't Deliver */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-destructive/10 border border-destructive/20 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Important Guidelines</h3>
              <p className="text-sm text-muted-foreground mb-4">
                To ensure safety and compliance, we cannot deliver:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-destructive mt-2" />
                  <span>Controlled pharmaceutical substances without proper prescription</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-destructive mt-2" />
                  <span>Illegal or prohibited items under Indian law</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-destructive mt-2" />
                  <span>Expired products or items without proper packaging</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-destructive mt-2" />
                  <span>Highly perishable items beyond our cold chain capacity</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                If you're unsure about an item, contact us on WhatsApp and we'll help you find a solution.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Need Something Specific?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              If you're not sure whether we can deliver what you need, just ask. 
              We'll do our best to help or find an alternative.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/919515850682?text=Hello%20Qubex,%20do%20you%20deliver%20[your%20item]?">
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold gap-2 hover:from-green-600 hover:to-green-700">
                  Ask on WhatsApp
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </a>
              <a href="tel:+919515850682">
                <Button size="lg" variant="outline">
                  Call Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
