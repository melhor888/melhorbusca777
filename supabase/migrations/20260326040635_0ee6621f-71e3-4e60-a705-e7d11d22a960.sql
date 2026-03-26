CREATE TABLE public.seller_analytics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  seller_id uuid NOT NULL,
  event_type text NOT NULL CHECK (event_type IN ('view', 'whatsapp_click')),
  item_id uuid,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_seller_analytics_seller ON public.seller_analytics(seller_id, event_type, created_at);

ALTER TABLE public.seller_analytics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert analytics" ON public.seller_analytics FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Sellers can view own analytics" ON public.seller_analytics FOR SELECT TO authenticated USING (
  seller_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid())
);
CREATE POLICY "Admins can view all analytics" ON public.seller_analytics FOR SELECT TO authenticated USING (
  public.has_role(auth.uid(), 'admin')
);