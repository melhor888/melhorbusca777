-- Create enum for seller type
CREATE TYPE public.seller_type AS ENUM ('imoveis', 'automoveis');

-- Create enum for item status
CREATE TYPE public.item_status AS ENUM ('ativo', 'inativo');

-- Create enum for item category
CREATE TYPE public.item_category AS ENUM (
  'casa', 'apartamento', 'terreno', 'comercial', 'galpao', 'flat', 'aluguel',
  'carro', 'moto', 'caminhao', 'van', 'utilitario', 'outros'
);

-- Create enum for item tags
CREATE TYPE public.item_tag AS ENUM (
  'premium', 'luxo', 'prime', 'novo', 'em_destaque', 'oferta', 'exclusivo', 'top', 'limited',
  'lancamento', 'pronto_para_morar', 'cobertura', 'vista_panoramica', 'aluguel_flex'
);

-- Function for updating timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Profiles table for sellers
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  seller_type seller_type NOT NULL DEFAULT 'imoveis',
  company_name TEXT,
  logo_url TEXT,
  address TEXT,
  city TEXT,
  state TEXT DEFAULT 'ES',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING (auth.uid() = user_id);

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Seller items table
CREATE TABLE public.seller_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  seller_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  category item_category NOT NULL,
  seller_type seller_type NOT NULL,
  price NUMERIC(12,2),
  city TEXT,
  state TEXT DEFAULT 'ES',
  neighborhood TEXT,
  address TEXT,
  status item_status NOT NULL DEFAULT 'ativo',
  tags item_tag[] DEFAULT '{}',
  photos TEXT[] DEFAULT '{}',
  brand TEXT,
  model TEXT,
  year INTEGER,
  mileage INTEGER,
  fuel TEXT,
  transmission TEXT,
  color TEXT,
  bedrooms INTEGER,
  bathrooms INTEGER,
  area NUMERIC(10,2),
  parking_spots INTEGER,
  views_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.seller_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Items are viewable by everyone" ON public.seller_items FOR SELECT USING (true);
CREATE POLICY "Sellers can insert their own items" ON public.seller_items FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Sellers can update their own items" ON public.seller_items FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Sellers can delete their own items" ON public.seller_items FOR DELETE USING (auth.uid() = user_id);

CREATE TRIGGER update_seller_items_updated_at
  BEFORE UPDATE ON public.seller_items
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE INDEX idx_seller_items_seller ON public.seller_items(seller_id);
CREATE INDEX idx_seller_items_category ON public.seller_items(category);
CREATE INDEX idx_seller_items_status ON public.seller_items(status);
CREATE INDEX idx_seller_items_city ON public.seller_items(city);
CREATE INDEX idx_seller_items_seller_type ON public.seller_items(seller_type);

-- Storage bucket for uploads
INSERT INTO storage.buckets (id, name, public) VALUES ('seller-uploads', 'seller-uploads', true);

CREATE POLICY "Anyone can view seller uploads" ON storage.objects FOR SELECT USING (bucket_id = 'seller-uploads');
CREATE POLICY "Authenticated users can upload" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'seller-uploads' AND auth.role() = 'authenticated');
CREATE POLICY "Users can update their uploads" ON storage.objects FOR UPDATE USING (bucket_id = 'seller-uploads' AND auth.uid()::text = (storage.foldername(name))[1]);
CREATE POLICY "Users can delete their uploads" ON storage.objects FOR DELETE USING (bucket_id = 'seller-uploads' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Auto-create profile on signup trigger
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name, email)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    NEW.email
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();