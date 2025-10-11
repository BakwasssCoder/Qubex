import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import OrderWidget from "@/components/OrderWidget";

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <OrderWidget isSticky />
      <div className="pt-24 pb-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No hidden charges. What we quote is what you pay.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto glass-panel p-8 rounded-2xl shadow-elegant mb-12">
          <h2 className="text-2xl font-bold mb-6">Pricing Structure</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-accent pl-6">
              <h3 className="font-bold mb-2">Item Cost</h3>
              <p className="text-sm text-muted-foreground">Actual MRP of medicines/items from pharmacy</p>
            </div>
            <div className="text-2xl font-bold text-center">+</div>
            <div className="border-l-4 border-accent pl-6">
              <h3 className="font-bold mb-2">Service Margin: ₹200</h3>
              <p className="text-sm text-muted-foreground">Fixed per order for sourcing, verification & packaging</p>
            </div>
            <div className="text-2xl font-bold text-center">+</div>
            <div className="border-l-4 border-accent pl-6">
              <h3 className="font-bold mb-2">Delivery Fee: ₹50-₹150</h3>
              <p className="text-sm text-muted-foreground">Based on distance & urgency</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a href="https://wa.me/919515850682?text=Hello%20Qubex,%20I%20want%20to%20place%20an%20order">
            <Button size="lg" className="gradient-gold text-primary font-semibold">Get Your Quote</Button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
