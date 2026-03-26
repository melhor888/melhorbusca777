import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Users, Package, DollarSign, Search, Check, X, RefreshCw, ArrowLeft, Crown, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useIsAdmin, PACKAGE_CONFIG } from "@/hooks/useSubscription";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface SellerWithSub {
  id: string;
  user_id: string;
  full_name: string;
  company_name: string | null;
  email: string;
  seller_type: string;
  city: string | null;
  subscription?: {
    id: string;
    tier: string;
    expires_at: string;
    is_active: boolean;
    payment_status: string | null;
  };
}

const tierIcons: Record<string, React.ElementType> = { basico: Zap, premium: Star, vip: Crown };

export default function AdminPanel() {
  const { user, loading: authLoading } = useAuth();
  const { isAdmin, loading: adminLoading } = useIsAdmin(user?.id);
  const navigate = useNavigate();
  const { toast } = useToast();
  const [sellers, setSellers] = useState<SellerWithSub[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState<"sellers" | "billing">("sellers");

  useEffect(() => {
    if (!authLoading && !adminLoading) {
      if (!user || !isAdmin) navigate("/painel");
    }
  }, [user, isAdmin, authLoading, adminLoading]);

  useEffect(() => {
    if (isAdmin) fetchSellers();
  }, [isAdmin]);

  const fetchSellers = async () => {
    setLoading(true);
    const { data: profiles } = await supabase.from("profiles").select("*");
    const { data: subs } = await supabase.from("seller_subscriptions").select("*").eq("is_active", true);

    const subsMap = new Map<string, any>();
    (subs || []).forEach((s: any) => subsMap.set(s.user_id, s));

    const mapped: SellerWithSub[] = (profiles || []).map((p: any) => ({
      id: p.id,
      user_id: p.user_id,
      full_name: p.full_name,
      company_name: p.company_name,
      email: p.email,
      seller_type: p.seller_type,
      city: p.city,
      subscription: subsMap.get(p.user_id)
        ? {
            id: subsMap.get(p.user_id).id,
            tier: subsMap.get(p.user_id).tier,
            expires_at: subsMap.get(p.user_id).expires_at,
            is_active: subsMap.get(p.user_id).is_active,
            payment_status: subsMap.get(p.user_id).payment_status,
          }
        : undefined,
    }));

    setSellers(mapped);
    setLoading(false);
  };

  const approvePayment = async (subId: string) => {
    const { error } = await supabase
      .from("seller_subscriptions")
      .update({ payment_status: "confirmado" } as any)
      .eq("id", subId);
    if (!error) {
      toast({ title: "Pagamento aprovado!" });
      fetchSellers();
    }
  };

  const cancelSubscription = async (subId: string) => {
    const { error } = await supabase
      .from("seller_subscriptions")
      .update({ is_active: false } as any)
      .eq("id", subId);
    if (!error) {
      toast({ title: "Assinatura cancelada" });
      fetchSellers();
    }
  };

  const renewSubscription = async (subId: string) => {
    const newExpiry = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
    const { error } = await supabase
      .from("seller_subscriptions")
      .update({ expires_at: newExpiry, is_active: true, payment_status: "confirmado" } as any)
      .eq("id", subId);
    if (!error) {
      toast({ title: "Assinatura renovada por +30 dias!" });
      fetchSellers();
    }
  };

  const filteredSellers = sellers.filter(
    (s) =>
      s.full_name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase()) ||
      s.company_name?.toLowerCase().includes(search.toLowerCase())
  );

  const totalByTier = {
    basico: sellers.filter((s) => s.subscription?.tier === "basico").length,
    premium: sellers.filter((s) => s.subscription?.tier === "premium").length,
    vip: sellers.filter((s) => s.subscription?.tier === "vip").length,
    sem_pacote: sellers.filter((s) => !s.subscription).length,
  };

  if (authLoading || adminLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="gradient-hero py-8">
        <div className="container max-w-6xl mx-auto px-4">
          <Link to="/painel" className="inline-flex items-center gap-2 text-white/70 text-sm mb-3 hover:text-white">
            <ArrowLeft size={16} /> Voltar
          </Link>
          <div className="flex items-center gap-3">
            <Shield size={28} className="text-white" />
            <h1 className="font-display font-extrabold text-2xl text-white">Painel Administrativo</h1>
          </div>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 -mt-6 relative z-10 pb-16">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {[
            { label: "Total Vendedores", value: sellers.length, icon: Users, color: "text-primary" },
            { label: "Básico", value: totalByTier.basico, icon: Zap, color: "text-slate-500" },
            { label: "Premium", value: totalByTier.premium, icon: Star, color: "text-amber-500" },
            { label: "VIP", value: totalByTier.vip, icon: Crown, color: "text-purple-500" },
          ].map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <s.icon size={16} className={s.color} />
                <span className="text-xs text-muted-foreground">{s.label}</span>
              </div>
              <p className="font-display font-bold text-2xl text-foreground">{s.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-4">
          <button onClick={() => setTab("sellers")}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${tab === "sellers" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
            <Users size={14} className="inline mr-1" /> Vendedores
          </button>
          <button onClick={() => setTab("billing")}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${tab === "billing" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
            <DollarSign size={14} className="inline mr-1" /> Faturamento
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar vendedor..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none" />
        </div>

        {tab === "sellers" && (
          <div className="space-y-3">
            {filteredSellers.map((seller) => {
              const sub = seller.subscription;
              const TierIcon = sub ? tierIcons[sub.tier] || Zap : Zap;
              const tierConfig = sub ? PACKAGE_CONFIG[sub.tier as keyof typeof PACKAGE_CONFIG] : null;
              const daysLeft = sub ? Math.ceil((new Date(sub.expires_at).getTime() - Date.now()) / (1000 * 60 * 60 * 24)) : null;

              return (
                <div key={seller.id} className="bg-card border border-border rounded-2xl p-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-display font-bold text-foreground">{seller.company_name || seller.full_name}</h3>
                        {sub && (
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${tierConfig?.badgeColor}`}>
                            <TierIcon size={10} className="inline mr-0.5" />
                            {tierConfig?.name}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">{seller.email} • {seller.seller_type} • {seller.city || "—"}</p>
                      {sub && (
                        <p className="text-xs mt-1">
                          {sub.payment_status === "pendente" && <span className="text-amber-500 font-semibold">⏳ Pagamento pendente</span>}
                          {sub.payment_status === "confirmado" && <span className="text-green-500 font-semibold">✅ Pago</span>}
                          {daysLeft !== null && (
                            <span className={`ml-2 ${daysLeft <= 7 ? "text-red-500" : "text-muted-foreground"}`}>
                              • {daysLeft > 0 ? `${daysLeft} dias restantes` : "Expirado"}
                            </span>
                          )}
                        </p>
                      )}
                    </div>

                    <div className="flex gap-1.5 flex-wrap">
                      {sub?.payment_status === "pendente" && (
                        <button onClick={() => approvePayment(sub.id)}
                          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-green-500/10 text-green-600 text-xs font-semibold hover:bg-green-500/20">
                          <Check size={12} /> Aprovar
                        </button>
                      )}
                      {sub && (
                        <>
                          <button onClick={() => renewSubscription(sub.id)}
                            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-semibold hover:bg-primary/20">
                            <RefreshCw size={12} /> Renovar
                          </button>
                          <button onClick={() => cancelSubscription(sub.id)}
                            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-destructive/10 text-destructive text-xs font-semibold hover:bg-destructive/20">
                            <X size={12} /> Cancelar
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {tab === "billing" && (
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-display font-bold text-lg text-foreground mb-4">Resumo de Faturamento</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {(["basico", "premium", "vip"] as const).map((tier) => {
                const config = PACKAGE_CONFIG[tier];
                const count = totalByTier[tier];
                const revenue = count * config.price;
                return (
                  <div key={tier} className={`rounded-xl border-2 ${config.borderColor} p-4`}>
                    <h4 className="font-display font-bold text-foreground">{config.name}</h4>
                    <p className="text-2xl font-bold text-foreground mt-1">{count} <span className="text-sm font-normal text-muted-foreground">assinantes</span></p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Receita mensal: <strong className="text-green-500">R$ {revenue.toFixed(2).replace(".", ",")}</strong>
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 p-4 bg-secondary rounded-xl">
              <p className="text-sm text-foreground">
                <strong>Receita mensal total estimada: </strong>
                <span className="text-green-500 font-bold text-lg">
                  R$ {(totalByTier.premium * PACKAGE_CONFIG.premium.price + totalByTier.vip * PACKAGE_CONFIG.vip.price).toFixed(2).replace(".", ",")}
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
