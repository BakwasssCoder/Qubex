import { Check, MessageSquare, Search, Truck, CreditCard, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import OrderWidget from "@/components/OrderWidget";

const HowItWorks = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <OrderWidget isSticky />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">How Qubex Works</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent, and fast. From request to delivery in just a few steps.
            </p>
          </div>

          {/* Main Process */}
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-accent rounded-2xl flex items-center justify-center shadow-elegant">
                  <MessageSquare className="h-12 w-12 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <div className="text-accent font-bold mb-2">Step 1</div>
                <h2 className="text-2xl font-bold mb-3">Send Your Request</h2>
                <p className="text-muted-foreground mb-4">
                  Fill out our order form or directly WhatsApp us at <a href="tel:+919515850682" className="text-accent hover:underline">+91 95158 50682</a>. 
                  Share your name, address, and a list of items you need. Include medicine names, dosages, and quantities for accuracy.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent mt-0.5" />
                    <span className="text-sm">For prescription meds, be ready to send prescription photo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent mt-0.5" />
                    <span className="text-sm">Mention urgency: Now, within 24h, or scheduled</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent mt-0.5" />
                    <span className="text-sm">UPI payment required before confirmation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0 md:order-2">
                <div className="w-24 h-24 bg-accent rounded-2xl flex items-center justify-center shadow-elegant">
                  <Search className="h-12 w-12 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <div className="text-accent font-bold mb-2">Step 2</div>
                <h2 className="text-2xl font-bold mb-3">We Source & Confirm Price</h2>
                <p className="text-muted-foreground mb-4">
                  Our team immediately starts sourcing your items from verified pharmacies and suppliers. We check availability, 
                  compare prices, and calculate the total including delivery fees. You'll receive a confirmed quote on WhatsApp within minutes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent mt-0.5" />
                    <span className="text-sm">Transparent pricing: Item cost + ₹200 service margin + delivery fee</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent mt-0.5" />
                    <span className="text-sm">If items unavailable, we suggest alternatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent mt-0.5" />
                    <span className="text-sm">No hidden charges—what we quote is what you pay</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-accent rounded-2xl flex items-center justify-center shadow-elegant">
                  <CreditCard className="h-12 w-12 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <div className="text-accent font-bold mb-2">Step 3</div>
                <h2 className="text-2xl font-bold mb-3">Pay via UPI</h2>
                <p className="text-muted-foreground mb-4">
                  Review the quote and complete payment using our UPI QR code. Scan the QR or use our UPI ID (8106438953@ybl). 
                  Once payment is confirmed, we proceed with sourcing and delivery.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent mt-0.5" />
                    <span className="text-sm">Pay via any UPI app (GPay, PhonePe, Paytm)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent mt-0.5" />
                    <span className="text-sm">Share UTR/Transaction ID with us on WhatsApp</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent mt-0.5" />
                    <span className="text-sm">Invoice sent after payment confirmation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0 md:order-2">
                <div className="w-24 h-24 bg-accent rounded-2xl flex items-center justify-center shadow-elegant">
                  <Truck className="h-12 w-12 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <div className="text-accent font-bold mb-2">Step 4</div>
                <h2 className="text-2xl font-bold mb-3">Delivery to Your Doorstep</h2>
                <p className="text-muted-foreground mb-4">
                  Our trained riders deliver your order directly to your address. For urgent orders, expect delivery within 30-60 minutes. 
                  Standard orders arrive within 24 hours. Village deliveries may take up to 48 hours depending on distance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent mt-0.5" />
                    <span className="text-sm">Track your rider via WhatsApp updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent mt-0.5" />
                    <span className="text-sm">Contactless delivery available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent mt-0.5" />
                    <span className="text-sm">Bills and receipts included in package</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="glass-panel p-8 rounded-2xl shadow-elegant">
              <h3 className="text-2xl font-bold mb-6">Special Services</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <Phone className="h-5 w-5 text-accent" />
                    Emergency / Hospital Sourcing
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    For post-surgery or ICU discharge needs, we source from multiple pharmacies and deliver everything in one go. 
                    Call us directly for immediate assistance.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-accent" />
                    Recurring Prescriptions
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Set up monthly or weekly deliveries for chronic medications. We'll remember your order and deliver on schedule 
                    without you having to request each time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8">Place your first order and experience hassle-free delivery.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/919515850682?text=Hello%20Qubex,%20I%20want%20to%20place%20an%20order">
                <Button size="lg" className="gradient-gold text-primary font-semibold">
                  Order on WhatsApp
                </Button>
              </a>
              <a href="tel:+919515850682">
                <Button size="lg" variant="outline">
                  Call Now
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

export default HowItWorks;
