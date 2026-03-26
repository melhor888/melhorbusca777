-- Create seller_category enum
CREATE TYPE public.seller_category AS ENUM (
  'imobiliaria',
  'corretor',
  'proprietario',
  'loja_veiculos',
  'autonomo',
  'concessionaria'
);

-- Add columns to profiles
ALTER TABLE public.profiles
  ADD COLUMN seller_category public.seller_category DEFAULT NULL,
  ADD COLUMN creci text DEFAULT NULL;