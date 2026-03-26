import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Package, Eye, Plus, Settings, Edit, Trash2, Copy, ToggleLeft, ToggleRight, Search, Building2, Car, Image, LogOut, BarChart3 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

type SellerItem = {
  id: string;
  title: string;
  category: string;
  price: number | null;
  status: string;
  photos: string[] | null;
  tags: string[] | null;
  views_count: number | null;
  city: string | null;
  created_at: string;
  seller_type: string;
};

export default function SellerDashboard() {
  const { user, profile, signOut, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [items, setItems] = useState<SellerItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("todos");

  useEffect(() => {
    if (!authLoading && !user) navigate("/entrar");
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) fetchItems();
  }, [user]);

  const fetchItems = async () => {
    const { data, error } = await supabase
      .from("seller_items")
      .select("id, title, category, price, status, photos, tags, views_count, city, created_at, seller_type")
      .eq("user_id", user!.id)
      .order("created_at", { ascending: false });
    if (!error && data) setItems(data);
    setLoading(false);
  };

  const toggleStatus = async (id: string, current: string) => {
    const newStatus = current === "ativo" ? "inativo" : "ativo";
    const { error } = await supabase.from("seller_items").update({ status: newStatus }).eq("id", id);
    if (!error) {
      setItems((prev) => prev.map((i) => (i.id === id ? { ...i, status: newStatus } : i)));
      toast({ title: `Item ${newStatus === "ativo" ? "ativado" : "desativado"}` });
    }
  };

  const deleteItem = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este item?")) return;
    const { error } = await supabase.from("seller_items").delete().eq("id", id);
    if (!error) {
      setItems((prev) => prev.filter((i) => i.id !== id));
      toast({ title: "Item excluído" });
    }
  };

  const duplicateItem = async (item: SellerItem) => {
    const { data: original } = await supabase.from("seller_items").select("*").eq("id", item.id).single();
    if (!original) return;
    const { id, created_at, updated_at, views_count, ...rest } = original;
    const { error } = await supabase.from("seller_items").insert({ ...rest, title: `${rest.title} (cópia)` });
    if (!error) {
      fetchItems();
      toast({ title: "Item duplicado!" });
    }
  };

  const filtered = items.filter((i) => {
    const matchesSearch = i.title.toLowerCase().includes(filter.toLowerCase());
    const matchesStatus = statusFilter === "todos" || i.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalActive = items.filter((i) => i.status === "ativo").length;
  const totalInactive = items.filter((i) => i.status === "inativo").length;
  const totalViews = items.reduce((sum, i) => sum + (i.views_count || 0), 0);

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="gradient-hero py-8">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                {profile?.logo_url ? (
                  <img src={profile.logo_url} alt="" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-white font-bold text-xl">
                    {profile?.full_name?.charAt(0) || "V"}
                  </span>
                )}
              </div>
              <div>
                <h1 className="font-display font-bold text-xl text-white">
                  Olá, {profile?.full_name || "Vendedor"}!
                </h1>
                <p className="text-white/70 text-sm">{profile?.company_name || profile?.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {profile?.id && (
                <Link
                  to={`/${profile.seller_type === "automoveis" ? "veiculos" : "imoveis"}/empresa/${profile.id}`}
                  className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-white/20 text-white hover:bg-white/30 transition-colors text-sm font-medium"
                >
                  <Eye size={16} /> <span className="hidden sm:inline">Ver Loja</span>
                </Link>
              )}
              <Link
                to="/painel/perfil"
                className="p-2.5 rounded-xl bg-white/20 text-white hover:bg-white/30 transition-colors"
              >
                <Settings size={18} />
              </Link>
              <button
                onClick={() => { signOut(); navigate("/"); }}
                className="p-2.5 rounded-xl bg-white/20 text-white hover:bg-white/30 transition-colors"
              >
                <LogOut size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 -mt-6 relative z-10">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {[
            { label: "Total", value: items.length, icon: Package, color: "text-primary" },
            { label: "Ativos", value: totalActive, icon: ToggleRight, color: "text-green-500" },
            { label: "Inativos", value: totalInactive, icon: ToggleLeft, color: "text-muted-foreground" },
            { label: "Visualizações", value: totalViews, icon: Eye, color: "text-accent" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-4"
            >
              <div className="flex items-center gap-2 mb-1">
                <s.icon size={16} className={s.color} />
                <span className="text-xs text-muted-foreground">{s.label}</span>
              </div>
              <p className="font-display font-bold text-2xl text-foreground">{s.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <Link
            to="/painel/novo"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors shadow-md"
          >
            <Plus size={16} /> Adicionar Novo Item
          </Link>
          <div className="flex-1 relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Buscar itens..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none"
          >
            <option value="todos">Todos</option>
            <option value="ativo">Ativos</option>
            <option value="inativo">Inativos</option>
          </select>
        </div>

        {/* Items Grid */}
        {filtered.length === 0 ? (
          <div className="bg-card border border-border rounded-2xl p-12 text-center">
            <Package size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="font-display font-bold text-lg text-foreground mb-2">Nenhum item encontrado</h3>
            <p className="text-muted-foreground text-sm mb-4">Comece adicionando seu primeiro item!</p>
            <Link
              to="/painel/novo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm"
            >
              <Plus size={16} /> Adicionar Item
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-2xl overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-video bg-muted">
                  {item.photos && item.photos.length > 0 ? (
                    <img src={item.photos[0]} alt={item.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Image size={32} className="text-muted-foreground" />
                    </div>
                  )}
                  <div className="absolute top-2 right-2 flex gap-1">
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                        item.status === "ativo"
                          ? "bg-green-500/90 text-white"
                          : "bg-muted-foreground/80 text-white"
                      }`}
                    >
                      {item.status === "ativo" ? "Ativo" : "Inativo"}
                    </span>
                  </div>
                  {item.tags && item.tags.length > 0 && (
                    <div className="absolute top-2 left-2 flex gap-1 flex-wrap">
                      {item.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded-full text-xs font-bold bg-accent text-accent-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display font-bold text-foreground line-clamp-1">{item.title}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {item.category} • {item.city || "Sem cidade"}
                      </p>
                    </div>
                    {item.price && (
                      <span className="font-bold text-green-600 text-sm whitespace-nowrap">
                        R$ {item.price.toLocaleString("pt-BR")}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1 mt-3 pt-3 border-t border-border">
                    <Link
                      to={`/painel/editar/${item.id}`}
                      className="flex-1 flex items-center justify-center gap-1 py-2 rounded-lg bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors"
                    >
                      <Edit size={12} /> Editar
                    </Link>
                    <button
                      onClick={() => duplicateItem(item)}
                      className="flex-1 flex items-center justify-center gap-1 py-2 rounded-lg bg-secondary text-secondary-foreground text-xs font-medium hover:bg-secondary/80 transition-colors"
                    >
                      <Copy size={12} /> Duplicar
                    </button>
                    <button
                      onClick={() => toggleStatus(item.id, item.status)}
                      className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                    >
                      {item.status === "ativo" ? <ToggleRight size={14} /> : <ToggleLeft size={14} />}
                    </button>
                    <button
                      onClick={() => deleteItem(item.id)}
                      className="p-2 rounded-lg bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
