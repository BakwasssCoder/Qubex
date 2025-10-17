import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Refund Policy</h1>
          
          <div className="glass-panel p-6 md:p-8 rounded-2xl shadow-elegant">
            <p className="text-sm text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Our Refund Commitment</h2>
              <p className="mb-4">
                At Qubex: BuyNDeliver, we are committed to ensuring your complete satisfaction with our services. This Refund Policy outlines the terms under which refunds may be issued for our services.
              </p>
              <p>
                Please read this policy carefully to understand our stance on refunds and the process for requesting them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">General Refund Policy</h2>
              <p className="mb-4">
                As an intermediary service, we facilitate purchases and deliveries on behalf of our customers. Our refund policy is designed to be fair and transparent while considering the nature of our service.
              </p>
              <p>
                Refunds are considered on a case-by-case basis and are subject to the terms outlined in this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Eligibility for Refunds</h2>
              <p className="mb-2">Refunds may be considered in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Non-Delivery:</strong> If your order is not delivered within the agreed timeframe and we are unable to provide a reasonable explanation</li>
                <li><strong>Wrong Item Delivered:</strong> If you receive an item that is significantly different from what was ordered</li>
                <li><strong>Damaged Items:</strong> If items are received in damaged condition and this was not disclosed prior to purchase</li>
                <li><strong>Service Issues:</strong> If there are significant issues with our intermediary service that prevent order fulfillment</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Non-Refundable Situations</h2>
              <p className="mb-2">Refunds will not be issued for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Change of mind after order placement</li>
                <li>Incorrect information provided by the customer</li>
                <li>Delays caused by factors beyond our control (weather, traffic, etc.)</li>
                <li>Items that are as described but do not meet personal preferences</li>
                <li>Orders that have already been processed and dispatched</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Refund Process</h2>
              <p className="mb-2">To request a refund:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Contact our customer service team within 48 hours of delivery or expected delivery time</li>
                <li>Provide order details and reason for refund request</li>
                <li>Include photos or evidence supporting your claim (if applicable)</li>
                <li>Our team will review your request and respond within 3-5 business days</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Refund Methods</h2>
              <p className="mb-4">
                Approved refunds will be processed through the original payment method whenever possible. If the original payment method is not available, we will work with you to determine an appropriate refund method.
              </p>
              <p>
                Processing time for refunds may vary depending on the payment method used.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Special Circumstances</h2>
              <p>
                We reserve the right to make exceptions to this policy in cases where it is deemed appropriate to do so. Our customer satisfaction is our priority, and we will work to resolve issues fairly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">Contact for Refund Requests</h2>
              <p>If you wish to request a refund, please contact us at:</p>
              <p className="mt-2">
                Email: aniket@qubexdeliver.com<br />
                Phone: +91 95158 50682<br />
                WhatsApp: +91 95158 50682
              </p>
              <p className="mt-4">
                Please include your order number, date of order, and detailed explanation of your refund request.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicy;