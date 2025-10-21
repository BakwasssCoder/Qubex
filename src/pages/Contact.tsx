import { Phone, Mail, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import OrderWidget from "@/components/OrderWidget";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-20 container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Qubex</h1>
          <p className="text-muted-foreground">We're here 24/7 to help you</p>
        </div>

        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="glass-panel p-8 rounded-2xl">
            <Phone className="h-12 w-12 text-accent mb-4" />
            <h3 className="font-bold mb-2">Call Us</h3>
            <a href="tel:+919515850682" className="text-accent hover:underline block">+91 95158 50682</a>
            <a href="tel:+916202815368" className="text-accent hover:underline block">+91 62028 15368</a>
          </div>
          
          <div className="glass-panel p-8 rounded-2xl">
            <Mail className="h-12 w-12 text-accent mb-4" />
            <h3 className="font-bold mb-2">Email Us</h3>
            <a href="mailto:getsupport@qubexdeliver.com" className="text-accent hover:underline">
              getsupport@qubexdeliver.com
            </a>
          </div>
        </div>

        {/* Business Info Section */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="glass-panel p-6 rounded-2xl">
            <section id="contact-info" className="text-sm text-gray-600">
              <p className="font-bold text-lg mb-2">© 2025 Qubex: BuyNDeliver™ — An initiative by QuickBuy Boy.</p>
              <p className="mb-1">Registered under MSME (Under Registration).</p>
              <p className="mb-1">Helpline: +91 95158 50682 | Email: getsupport@qubexdeliver.com</p>
              <p className="mb-1">Operational Locations: Delhi | Hyderabad | Patna | Tamil Nadu</p>
              <p>We are committed to transparent, verified, and human-assisted deliveries.</p>
            </section>
          </div>
        </div>

        <div className="mt-12">
          <OrderWidget />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;