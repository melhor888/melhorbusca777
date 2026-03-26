import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface RealSeller {
  id: string;
  name: string;
  logo: string;
  address: string;
  phone: string;
  segment: "imoveis" | "automoveis";
  show_location: boolean;
}

export interface RealItem {
  id: string;
  sellerId: string;
  title: string;
  price: number;
  image: string;
  images: string[];
  tags: string[];
  category: string;
  type: "imovel" | "veiculo";
  city?: string;
  brand?: string;
  model?: string;
  description?: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  year?: number;
  mileage?: number;
  sellerTier?: "basico" | "premium" | "vip";
}

const vehicleCategories = ["carro", "moto", "caminhao", "van", "utilitario"];

function mapItem(item: any): RealItem {
  const isVehicle = vehicleCategories.includes(item.category);
  const photos = item.photos?.length ? item.photos : [];
  return {
    id: item.id,
    sellerId: item.seller_id,
    title: item.title,
    price: item.price || 0,
    image: photos[0] || "",
    images: photos,
    tags: item.tags || [],
    category: item.category,
    type: isVehicle ? "veiculo" : "imovel",
    city: item.city,
    brand: item.brand,
    model: item.model,
    description: item.description,
    bedrooms: item.bedrooms,
    bathrooms: item.bathrooms,
    area: item.area,
    year: item.year,
    mileage: item.mileage,
  };
}

export function useRealListings(segment: "imoveis" | "automoveis") {
  const [sellers, setSellers] = useState<RealSeller[]>([]);
  const [items, setItems] = useState<RealItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch sellers of this segment
      const { data: profiles } = await supabase
        .from("profiles")
        .select("*")
        .eq("seller_type", segment);

      const mappedSellers: RealSeller[] = (profiles || []).map((p: any) => ({
        id: p.id,
        name: p.company_name || p.full_name,
        logo: p.logo_url || "",
        address: [p.address, p.city, p.state].filter(Boolean).join(", "),
        phone: p.phone || "",
        segment: p.seller_type,
        show_location: p.show_location ?? true,
      }));
      setSellers(mappedSellers);

      // Fetch subscriptions for tier info
      const { data: subs } = await supabase
        .from("seller_subscriptions")
        .select("seller_id, tier")
        .eq("is_active", true);
      const tierMap = new Map<string, string>();
      (subs || []).forEach((s: any) => tierMap.set(s.seller_id, s.tier));

      // Fetch active items from these sellers
      if (mappedSellers.length > 0) {
        const sellerIds = mappedSellers.map((s) => s.id);
        const { data: rawItems } = await supabase
          .from("seller_items")
          .select("*")
          .in("seller_id", sellerIds)
          .eq("status", "ativo")
          .order("created_at", { ascending: false });

        const mapped = (rawItems || []).map((item: any) => ({
          ...mapItem(item),
          sellerTier: (tierMap.get(item.seller_id) as any) || "basico",
        }));

        // Sort: VIP first, then Premium, then Basico
        const tierOrder = { vip: 0, premium: 1, basico: 2 };
        mapped.sort((a: any, b: any) => (tierOrder[a.sellerTier as keyof typeof tierOrder] ?? 2) - (tierOrder[b.sellerTier as keyof typeof tierOrder] ?? 2));

        setItems(mapped);
      }

      setLoading(false);
    };

    fetchData();
  }, [segment]);

  return { sellers, items, loading };
}
