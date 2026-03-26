
CREATE TABLE public.store_domains (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  seller_id uuid NOT NULL,
  domain text NOT NULL UNIQUE,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.store_domains ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active domains" ON public.store_domains
  FOR SELECT TO public USING (true);

CREATE POLICY "Admins can insert domains" ON public.store_domains
  FOR INSERT TO authenticated WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update domains" ON public.store_domains
  FOR UPDATE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete domains" ON public.store_domains
  FOR DELETE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));
