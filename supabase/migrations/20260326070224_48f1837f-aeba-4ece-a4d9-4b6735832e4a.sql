
CREATE TABLE public.ad_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  seller_id uuid NOT NULL,
  user_id uuid NOT NULL,
  platform text NOT NULL CHECK (platform IN ('google', 'facebook')),
  daily_budget numeric NOT NULL,
  duration_days integer NOT NULL,
  details text,
  subtotal numeric NOT NULL,
  tax_amount numeric NOT NULL DEFAULT 0,
  service_fee numeric NOT NULL DEFAULT 0,
  total numeric NOT NULL,
  status text NOT NULL DEFAULT 'pendente',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.ad_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Sellers can insert own ad requests" ON public.ad_requests
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Sellers can view own ad requests" ON public.ad_requests
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all ad requests" ON public.ad_requests
  FOR SELECT TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update ad requests" ON public.ad_requests
  FOR UPDATE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete ad requests" ON public.ad_requests
  FOR DELETE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));
