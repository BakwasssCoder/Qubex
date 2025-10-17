import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
          
          <div className="glass-panel p-6 md:p-8 rounded-2xl shadow-elegant">
            <p className="text-sm text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Introduction</h2>
              <p className="mb-4">
                Qubex: BuyNDeliver ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website qubexdeliver.com (the "Site") and use our services.
              </p>
              <p>
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Information We Collect</h2>
              <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
              <p className="mb-4">
                We may collect personally identifiable information, such as your name, email address, phone number, delivery address, and payment information when you place an order or contact us.
              </p>
              
              <h3 className="text-lg font-semibold mb-2">Usage Data</h3>
              <p>
                We may also collect information that your browser sends whenever you visit our Site ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Use of Your Information</h2>
              <p className="mb-2">We may use the information we collect in the following ways:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our services</li>
                <li>To process and fulfill your orders</li>
                <li>To communicate with you, including responding to your inquiries</li>
                <li>To send you updates and promotional materials</li>
                <li>To improve our website and services</li>
                <li>To detect, prevent, and address technical issues</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Disclosure of Your Information</h2>
              <p className="mb-2">We may share your information in the following situations:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With service providers who perform services on our behalf</li>
                <li>With delivery partners to fulfill your orders</li>
                <li>With law enforcement or other governmental authorities when required by law</li>
                <li>In connection with a merger, sale, or other business transfer</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect the security of your personal information. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Your Rights</h2>
              <p className="mb-2">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access and receive a copy of your personal information</li>
                <li>Correct any inaccurate personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict the processing of your personal information</li>
                <li>Withdraw your consent at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p className="mt-2">
                Email: aniket@qubexdeliver.com<br />
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

export default PrivacyPolicy;