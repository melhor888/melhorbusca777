import { useState, useEffect } from "react";

const cache = new Map<string, string[]>();

export function useCitiesByState(uf: string) {
  const [cities, setCities] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!uf) {
      setCities([]);
      return;
    }

    if (cache.has(uf)) {
      setCities(cache.get(uf)!);
      return;
    }

    setLoading(true);
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios?orderBy=nome`)
      .then((res) => res.json())
      .then((data: any[]) => {
        const names = data.map((m) => m.nome).sort();
        cache.set(uf, names);
        setCities(names);
      })
      .catch(() => setCities([]))
      .finally(() => setLoading(false));
  }, [uf]);

  return { cities, loading };
}
