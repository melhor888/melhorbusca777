import { useState, useEffect, useMemo } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface CityItem {
  id: string;
  sellerId: string;
  sellerName: string;
  sellerLogo: string;
  title: string;
  price: number;
  image: string;
  images: string[];
  tags: string[];
  category: string;
  type: "imovel" | "veiculo";
  city?: string;
  neighborhood?: string;
  brand?: string;
  model?: string;
  description?: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  year?: number;
  mileage?: number;
}

const vehicleCategories = ["carro", "moto", "caminhao", "van", "utilitario"];

export function useCityData(city: string, segment: "imoveis" | "automoveis") {
  const [items, setItems] = useState<CityItem[]>([]);
  const [loading, setLoading] = useState(true);

  const normalizedCity = city.replace(/-/g, " ");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      // Fetch sellers of this segment in this city
      const { data: profiles } = await supabase
        .from("profiles")
        .select("id, company_name, full_name, logo_url, seller_type")
        .eq("seller_type", segment)
        .ilike("city", `%${normalizedCity}%`);

      const sellerMap = new Map<string, { name: string; logo: string }>();
      (profiles || []).forEach((p: any) => {
        sellerMap.set(p.id, {
          name: p.company_name || p.full_name,
          logo: p.logo_url || "",
        });
      });

      // Fetch items in this city
      const { data: rawItems } = await supabase
        .from("seller_items")
        .select("*")
        .ilike("city", `%${normalizedCity}%`)
        .eq("status", "ativo")
        .order("created_at", { ascending: false });

      const mapped: CityItem[] = (rawItems || []).map((item: any) => {
        const seller = sellerMap.get(item.seller_id);
        const photos = item.photos?.length ? item.photos : [];
        const isVehicle = vehicleCategories.includes(item.category);
        return {
          id: item.id,
          sellerId: item.seller_id,
          sellerName: seller?.name || "",
          sellerLogo: seller?.logo || "",
          title: item.title,
          price: item.price || 0,
          image: photos[0] || "",
          images: photos,
          tags: item.tags || [],
          category: item.category,
          type: isVehicle ? "veiculo" : "imovel",
          city: item.city,
          neighborhood: item.neighborhood,
          brand: item.brand,
          model: item.model,
          description: item.description,
          bedrooms: item.bedrooms,
          bathrooms: item.bathrooms,
          area: item.area,
          year: item.year,
          mileage: item.mileage,
        };
      });

      // Filter by segment type
      const filtered = segment === "imoveis"
        ? mapped.filter((i) => i.type === "imovel")
        : mapped.filter((i) => i.type === "veiculo");

      setItems(filtered);
      setLoading(false);
    };

    fetchData();
  }, [normalizedCity, segment]);

  return { items, loading, cityName: normalizedCity };
}

export function useAvailableCities() {
  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    const fetchCities = async () => {
      const { data } = await supabase
        .from("seller_items")
        .select("city")
        .eq("status", "ativo");

      const unique = new Set<string>();
      (data || []).forEach((item: any) => {
        if (item.city) unique.add(item.city.trim());
      });
      setCities(Array.from(unique).sort());
    };
    fetchCities();
  }, []);

  return cities;
}
