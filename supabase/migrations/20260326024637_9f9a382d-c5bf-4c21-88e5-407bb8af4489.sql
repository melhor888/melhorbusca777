
-- Package tier enum
CREATE TYPE public.package_tier AS ENUM ('basico', 'premium', 'vip');

-- Seller subscriptions table
CREATE TABLE public.seller_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  seller_id UUID NOT NULL,
  tier package_tier NOT NULL DEFAULT 'basico',
  max_items INTEGER NOT NULL DEFAULT 10,
  started_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT (now() + interval '30 days'),
  is_active BOOLEAN NOT NULL DEFAULT true,
  payment_method TEXT DEFAULT 'manual',
  payment_status TEXT DEFAULT 'pendente',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.seller_subscriptions ENABLE ROW LEVEL SECURITY;

-- Everyone can see subscriptions (needed for badge display)
CREATE POLICY "Subscriptions viewable by everyone" ON public.seller_subscriptions
  FOR SELECT TO public USING (true);

-- Users can insert their own
CREATE POLICY "Users can insert own subscription" ON public.seller_subscriptions
  FOR INSERT TO public WITH CHECK (auth.uid() = user_id);

-- Users can update their own
CREATE POLICY "Users can update own subscription" ON public.seller_subscriptions
  FOR UPDATE TO public USING (auth.uid() = user_id);

-- User roles table for admin
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function for role check
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role
  )
$$;

-- Roles viewable by admins only
CREATE POLICY "Admins can view all roles" ON public.user_roles
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- Admin policies for subscriptions
CREATE POLICY "Admins can update any subscription" ON public.seller_subscriptions
  FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete subscriptions" ON public.seller_subscriptions
  FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert subscriptions" ON public.seller_subscriptions
  FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));
