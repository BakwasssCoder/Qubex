-- Add payment_ref column to orders table to store UPI transaction ID
ALTER TABLE public.orders 
ADD COLUMN payment_ref TEXT;