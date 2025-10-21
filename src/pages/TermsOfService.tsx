import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms of Service</h1>
          
          <div className="glass-panel p-6 md:p-8 rounded-2xl shadow-elegant">
            <p className="text-sm text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Acceptance of Terms</h2>
              <p className="mb-4">
                Welcome to Qubex: BuyNDeliver. These Terms of Service ("Terms") govern your access to and use of our website qubexdeliver.com (the "Site") and services (collectively, the "Services").
              </p>
              <p>
                By accessing or using our Services, you agree to be bound by these Terms and all applicable laws and regulations. If you do not agree to these Terms, you may not access or use the Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Services Description</h2>
              <p className="mb-4">
                Qubex: BuyNDeliver provides an intermediary service that helps customers purchase and receive deliveries of various items including but not limited to medicines, electronics, groceries, and other consumer goods.
              </p>
              <p>
                We act as an intermediary between customers and verified sellers/delivery partners. We do not manufacture, stock, or resell any items.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">User Responsibilities</h2>
              <p className="mb-2">As a user of our Services, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information when placing orders</li>
                <li>Maintain the security of your account and password</li>
                <li>Use the Services only for lawful purposes</li>
                <li>Not interfere with or disrupt the Services or servers</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Order Placement and Payment</h2>
              <p className="mb-4">
                When you place an order through our Services, you are making an offer to purchase goods. All orders are subject to acceptance and availability.
              </p>
              <p>
                Payment must be made through the methods we provide. All payments are processed securely through UPI transactions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Pricing and Fees</h2>
              <p className="mb-4">
                All prices are subject to change without notice. We strive to provide accurate pricing information, but we do not guarantee that all prices are accurate.
              </p>
              <p>
                Service fees may apply to your orders and will be disclosed before you complete your purchase.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Delivery Terms</h2>
              <p className="mb-4">
                Delivery times are estimates only and are not guaranteed. We work with various delivery partners to fulfill orders.
              </p>
              <p>
                Risk of loss and title for items purchased are transferred to you upon our delivery of the items to the carrier.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Qubex: BuyNDeliver shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">Contact Information</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <p className="mt-2">
                Email: support@qubexdeliver.com<br />
                Phone: +91 95158 50682
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;