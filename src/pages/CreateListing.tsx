import { useState } from "react";
import { Car, Home, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export default function CreateListing() {
  const [type, setType] = useState<"car" | "property">("car");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !price || !location || !whatsapp) {
      toast.error("Preencha todos os campos obrigatórios");
      return;
    }
    toast.success("Anúncio criado com sucesso! Em breve estará disponível.");
    setTitle("");
    setPrice("");
    setLocation("");
    setWhatsapp("");
    setDescription("");
  };

  return (
    <div className="container max-w-2xl mx-auto px-4 py-8">
      <h1 className="font-display font-bold text-3xl text-foreground mb-2">Criar Anúncio</h1>
      <p className="text-muted-foreground text-sm mb-8">Preencha os dados do seu carro ou imóvel</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Type selector */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setType("car")}
            className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl border-2 font-semibold text-sm transition-all ${
              type === "car" ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:border-muted-foreground"
            }`}
          >
            <Car size={20} />
            Carro
          </button>
          <button
            type="button"
            onClick={() => setType("property")}
            className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl border-2 font-semibold text-sm transition-all ${
              type === "property" ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:border-muted-foreground"
            }`}
          >
            <Home size={20} />
            Imóvel
          </button>
        </div>

        <div className="space-y-4">
          <Field label="Título *" placeholder={type === "car" ? "Ex: Honda Civic 2023 Touring" : "Ex: Apartamento 3 quartos - Vila Mariana"} value={title} onChange={setTitle} />
          <Field label="Preço (R$) *" placeholder="Ex: 150000" value={price} onChange={setPrice} type="number" />
          <Field label="Localização *" placeholder="Ex: São Paulo, SP" value={location} onChange={setLocation} />
          <Field label="WhatsApp *" placeholder="Ex: 5511999999999" value={whatsapp} onChange={setWhatsapp}>
            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
              <MessageCircle size={12} />
              Formato: código do país + DDD + número (sem espaços)
            </p>
          </Field>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Descrição</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descreva seu anúncio..."
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-secondary text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Publicar Anúncio
        </button>
      </form>
    </div>
  );
}

function Field({ label, placeholder, value, onChange, type = "text", children }: {
  label: string; placeholder: string; value: string; onChange: (v: string) => void; type?: string; children?: React.ReactNode;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground mb-1.5 block">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg bg-secondary text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
      {children}
    </div>
  );
}
