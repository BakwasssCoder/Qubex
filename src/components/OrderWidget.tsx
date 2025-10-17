import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Package, Phone, Copy, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { QRCodeSVG } from "qrcode.react";
import { useAppContext } from "@/context/AppContext";

const orderSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  phone: z.string().trim().min(10, "Valid phone number required").max(15, "Phone number too long"),
  city: z.string().trim().min(1, "City is required").max(100),
  address: z.string().trim().min(1, "Address is required").max(500, "Address too long"),
  items: z.string().trim().min(1, "Please list items").max(1000, "Items list too long"),
  urgency: z.enum(["now", "within_24h", "scheduled"]),
  payment_ref: z.string().trim().optional(),
});

type OrderFormData = z.infer<typeof orderSchema>;

interface OrderWidgetProps {
  isSticky?: boolean;
}

const OrderWidget = ({ isSticky = false }: OrderWidgetProps) => {
  const { addOrder } = useAppContext();
  const [isOpen, setIsOpen] = useState(!isSticky);
  const [showPayment, setShowPayment] = useState(false);
  const [orderData, setOrderData] = useState<OrderFormData | null>(null);
  const [copied, setCopied] = useState(false);

  // Scroll to top when form opens
  useEffect(() => {
    if (isOpen && isSticky) {
      // Scroll to top of page smoothly
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }, [isOpen, isSticky]);

  const form = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      name: "",
      phone: "",
      city: "Hyderabad",
      address: "",
      items: "",
      urgency: "now",
      payment_ref: "",
    },
  });

  const calculateEstimate = (items: string) => {
    // Simple estimation: ₹200 service margin + ₹60 avg delivery
    const baseMargin = 200;
    const avgDelivery = 60;
    return baseMargin + avgDelivery;
  };

  const onSubmit = async (data: OrderFormData) => {
    setOrderData(data);
    setShowPayment(true);
  };

  const handlePaymentConfirm = async () => {
    if (!orderData) return;

    try {
      // Save to local context instead of database
      addOrder({
        customer: orderData.name,
        item: orderData.items,
        status: "Pending",
        date: new Date().toISOString().split('T')[0],
      });

      // Create WhatsApp deep link
      const urgencyMap = {
        now: "URGENT - Now",
        within_24h: "Within 24 hours",
        scheduled: "Scheduled delivery",
      };

      // Format message based on whether reference ID is provided
      let message = `Hello Qubex Team,

I am ${orderData.name} (${orderData.phone}) from ${orderData.city}.

📍 Delivery Address: ${orderData.address}

📦 Items Needed:
${orderData.items}

⏰ Urgency: ${urgencyMap[orderData.urgency]}
💳 Payment: UPI (Payment verifying)`;

      // Add transaction ID if provided
      if (orderData.payment_ref) {
        message += `

Transaction ID: ${orderData.payment_ref}`;
      }

      message += `

Please confirm the final price and delivery time. Thank you!`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/919515850682?text=${encodedMessage}`;

      // Redirect to WhatsApp
      window.open(whatsappUrl, "_blank");

      toast.success("Order request sent! Redirecting to WhatsApp...");
      form.reset();
      setShowPayment(false);
      setOrderData(null);
    } catch (error) {
      console.error("Error submitting order:", error);
      toast.error("Failed to submit order. Please try again or call us directly.");
    }
  };

  // New function to handle continuing without payment
  const handleContinueWithoutPayment = async () => {
    if (!orderData) return;

    try {
      // Save to local context instead of database
      addOrder({
        customer: orderData.name,
        item: orderData.items,
        status: "Pending",
        date: new Date().toISOString().split('T')[0],
      });

      // Create WhatsApp deep link
      const urgencyMap = {
        now: "URGENT - Now",
        within_24h: "Within 24 hours",
        scheduled: "Scheduled delivery",
      };

      // For continuing without payment, show "Payment pending"
      const message = `Hello Qubex Team,

I am ${orderData.name} (${orderData.phone}) from ${orderData.city}.

📍 Delivery Address: ${orderData.address}

📦 Items Needed:
${orderData.items}

⏰ Urgency: ${urgencyMap[orderData.urgency]}
💳 Payment: UPI (Payment pending)

Please confirm the final price and delivery time. Thank you!`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/919515850682?text=${encodedMessage}`;

      // Redirect to WhatsApp
      window.open(whatsappUrl, "_blank");

      toast.success("Order request sent! Redirecting to WhatsApp...");
      form.reset();
      setShowPayment(false);
      setOrderData(null);
    } catch (error) {
      console.error("Error submitting order:", error);
      toast.error("Failed to submit order. Please try again or call us directly.");
    }
  };

  const copyUpiId = () => {
    navigator.clipboard.writeText("8106438953@ybl");
    setCopied(true);
    toast.success("UPI ID copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  if (showPayment && orderData) {
    return (
      <div className="glass-panel shadow-elegant rounded-2xl p-6 md:p-8 max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Pay via UPI</h2>
        <p className="text-sm text-muted-foreground text-center mb-6">
          Complete payment before order confirmation
        </p>
        
        <div className="bg-background/50 rounded-xl p-6 mb-6 flex flex-col items-center">
          <div className="text-center mb-4">
            <h3 className="font-bold text-lg">Pay ₹200 Advance</h3>
            <p className="text-sm text-muted-foreground">Scan QR to pay directly</p>
          </div>
          <QRCodeSVG value="upi://pay?pa=8106438953@ybl&pn=Qubex&am=200&cu=INR" size={200} />
          <div className="mt-4 flex items-center gap-2">
            <code className="bg-background px-3 py-2 rounded text-sm">8106438953@ybl</code>
            <Button
              variant="outline"
              size="sm"
              onClick={copyUpiId}
              className="gap-2"
            >
              {copied ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied!" : "Copy"}
            </Button>
          </div>
        </div>

        <Form {...form}>
          <form className="space-y-4">
            <FormField
              control={form.control}
              name="payment_ref"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>UTR / Transaction ID (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter transaction reference" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setShowPayment(false);
                  setOrderData(null);
                }}
                className="flex-1"
              >
                Back
              </Button>
              <Button
                type="button"
                onClick={handlePaymentConfirm}
                className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold gap-2 hover:from-yellow-500 hover:to-orange-600"
              >
                <Phone className="h-4 w-4" />
                Confirm via WhatsApp
              </Button>
            </div>
          </form>
        </Form>
      </div>
    );
  }

  if (isSticky) {
    return (
      <div className="fixed bottom-4 right-4 z-40">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold shadow-lg gap-2 rounded-full h-14 w-14 md:h-14 md:w-auto md:px-6 hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
          >
            <Package className="h-5 w-5 md:mr-2" />
            <span className="hidden md:inline">Book Service</span>
          </Button>
        )}

        {isOpen && (
          <div className="glass-panel shadow-elegant rounded-2xl p-6 w-80 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Quick Order</h3>
              <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
                ✕
              </button>
            </div>
            <OrderForm form={form} onSubmit={onSubmit} compact />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="glass-panel shadow-elegant rounded-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-accent/10 p-3 rounded-full">
          <Package className="h-6 w-6 text-accent" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Place Your Order</h2>
          <p className="text-sm text-muted-foreground">We'll confirm price on WhatsApp</p>
        </div>
      </div>
      <OrderForm form={form} onSubmit={onSubmit} />
    </div>
  );
};

interface OrderFormProps {
  form: any;
  onSubmit: (data: OrderFormData) => void;
  compact?: boolean;
}

const OrderForm = ({ form, onSubmit, compact = false }: OrderFormProps) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={compact ? "text-sm" : ""}>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={compact ? "text-sm" : ""}>Phone</FormLabel>
              <FormControl>
                <Input placeholder="+91 XXXXX XXXXX" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={compact ? "text-sm" : ""}>City</FormLabel>
              <FormControl>
                <Input placeholder="City" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={compact ? "text-sm" : ""}>Delivery Address</FormLabel>
              <FormControl>
                <Textarea placeholder="Full address with landmarks" rows={compact ? 2 : 3} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="items"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={compact ? "text-sm" : ""}>Items Needed</FormLabel>
              <FormControl>
                <Textarea placeholder="List medicines/items (include brand, dosage, quantity)" rows={compact ? 3 : 4} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="urgency"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={compact ? "text-sm" : ""}>Urgency</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select urgency" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="now">URGENT - Deliver Now</SelectItem>
                  <SelectItem value="within_24h">Within 24 Hours</SelectItem>
                  <SelectItem value="scheduled">Scheduled Delivery</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />


        <div className="pt-4 space-y-2">
          <Button type="submit" className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold gap-2 hover:from-yellow-500 hover:to-orange-600">
            <Package className="h-4 w-4" />
            Continue via WhatsApp
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default OrderWidget;