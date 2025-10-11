-- Create orders table for tracking delivery requests
CREATE TABLE public.orders (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  city TEXT NOT NULL,
  delivery_address TEXT NOT NULL,
  items TEXT NOT NULL,
  urgency TEXT NOT NULL CHECK (urgency IN ('now', 'within_24h', 'scheduled')),
  payment_method TEXT NOT NULL CHECK (payment_method IN ('cod', 'online')),
  estimated_price DECIMAL(10,2),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'in_progress', 'delivered', 'cancelled')),
  notes TEXT,
  rider_assigned TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create coverage_areas table for managing service areas
CREATE TABLE public.coverage_areas (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  city TEXT NOT NULL,
  pin_code TEXT NOT NULL,
  area_name TEXT NOT NULL,
  delivery_fee DECIMAL(10,2) NOT NULL DEFAULT 0,
  is_village BOOLEAN NOT NULL DEFAULT false,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create settings table for app configuration
CREATE TABLE public.app_settings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  setting_key TEXT NOT NULL UNIQUE,
  setting_value TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.coverage_areas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.app_settings ENABLE ROW LEVEL SECURITY;

-- Create policies for orders (public can insert, admin can view/update)
CREATE POLICY "Anyone can create orders" 
ON public.orders 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admins can view all orders" 
ON public.orders 
FOR SELECT 
USING (auth.role() = 'authenticated');

CREATE POLICY "Admins can update orders" 
ON public.orders 
FOR UPDATE 
USING (auth.role() = 'authenticated');

-- Create policies for coverage_areas (public read, admin manage)
CREATE POLICY "Anyone can view coverage areas" 
ON public.coverage_areas 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "Admins can manage coverage areas" 
ON public.coverage_areas 
FOR ALL 
USING (auth.role() = 'authenticated');

-- Create policies for settings (public read, admin manage)
CREATE POLICY "Anyone can view settings" 
ON public.app_settings 
FOR SELECT 
USING (true);

CREATE POLICY "Admins can manage settings" 
ON public.app_settings 
FOR ALL 
USING (auth.role() = 'authenticated');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_orders_updated_at
BEFORE UPDATE ON public.orders
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_coverage_areas_updated_at
BEFORE UPDATE ON public.coverage_areas
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_app_settings_updated_at
BEFORE UPDATE ON public.app_settings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default settings
INSERT INTO public.app_settings (setting_key, setting_value, description) VALUES
('service_margin', '200', 'Fixed margin per order in INR'),
('whatsapp_primary', '+919515850682', 'Primary WhatsApp business number'),
('whatsapp_backup', '+916202815368', 'Backup WhatsApp number'),
('business_email', 'gugulothrajkumar257@gmail.com', 'Business email for receipts');

-- Insert sample coverage areas
INSERT INTO public.coverage_areas (city, pin_code, area_name, delivery_fee, is_village, is_active) VALUES
('Hyderabad', '500001', 'Koti', 50, false, true),
('Hyderabad', '500002', 'Abids', 50, false, true),
('Hyderabad', '500003', 'Himayat Nagar', 60, false, true),
('Hyderabad', '500004', 'Narayanguda', 50, false, true),
('Hyderabad', '500016', 'Gachibowli', 80, false, true),
('Hyderabad', '500081', 'Madhapur', 80, false, true),
('Hyderabad', '500032', 'Secunderabad', 70, false, true);