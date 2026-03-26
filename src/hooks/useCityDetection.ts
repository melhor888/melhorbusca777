import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export function useCityDetection() {
  const [detectedCity, setDetectedCity] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const detect = async () => {
      try {
        const { data, error } = await supabase.functions.invoke("detect-city");
        if (!error && data?.city) {
          setDetectedCity(data.city);
        }
      } catch {
        // silent fail
      }
      setLoading(false);
    };

    // Check localStorage first
    const saved = localStorage.getItem("preferred_city");
    if (saved) {
      setDetectedCity(saved);
      setLoading(false);
      return;
    }

    detect();
  }, []);

  const setCity = (city: string) => {
    localStorage.setItem("preferred_city", city);
    setDetectedCity(city);
  };

  return { detectedCity, loading, setCity };
}
