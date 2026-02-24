import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import {
  Flame, DollarSign, FileText, Package, Tag, Percent, Truck,
  Crown, Lock, ArrowLeft, ChevronDown, ChevronUp, Plus, Minus, Trash2,
  Copy, Check, RotateCcw
} from "lucide-react";
import { isVipUnlocked } from "@/utils/vipKeys";
import { Button } from "@/components/ui/button";

// ======== CALCULADORA DE ARDÊNCIA ========
function SpiceCalculator() {
  const [ingredients, setIngredients] = useState<{ name: string; shu: number; grams: number }[]>([
    { name: "Jalapeño", shu: 5000, grams: 50 },
  ]);
  const pepperDB = [
    { name: "Poblano", shu: 1500 },
    { name: "Jalapeño", shu: 5000 },
    { name: "Serrano", shu: 15000 },
    { name: "Chile de Árbol", shu: 30000 },
    { name: "Chipotle", shu: 8000 },
    { name: "Guajillo", shu: 5000 },
    { name: "Ancho", shu: 1500 },
    { name: "Pasilla", shu: 2500 },
    { name: "Habanero", shu: 350000 },
    { name: "Carolina Reaper", shu: 2200000 },
  ];

  const totalWeight = ingredients.reduce((s, i) => s + i.grams, 0);
  const weightedSHU = totalWeight > 0
    ? Math.round(ingredients.reduce((s, i) => s + i.shu * i.grams, 0) / totalWeight)
    : 0;

  const level = weightedSHU < 1000 ? 0 : weightedSHU < 5000 ? 1 : weightedSHU < 30000 ? 2 : 3;
  const labels = ["🌱 Suave", "🌶️ Médio", "🌶️🌶️ Forte", "🌶️🌶️🌶️ Extremo"];
  const colors = ["text-green-400", "text-yellow-400", "text-orange-400", "text-red-400"];

  return (
    <div className="space-y-4">
      <p className="text-xs text-muted-foreground">Calcule o nível de ardência da sua receita baseado nos chiles utilizados.</p>
      
      {ingredients.map((ing, i) => (
        <div key={i} className="flex items-center gap-2">
          <select
            value={ing.name}
            onChange={(e) => {
              const p = pepperDB.find(p => p.name === e.target.value);
              const updated = [...ingredients];
              updated[i] = { ...updated[i], name: e.target.value, shu: p?.shu || 0 };
              setIngredients(updated);
            }}
            className="flex-1 px-3 py-2 rounded-lg bg-secondary text-foreground text-sm border-0"
          >
            {pepperDB.map(p => <option key={p.name} value={p.name}>{p.name} ({p.shu.toLocaleString()} SHU)</option>)}
          </select>
          <input
            type="number"
            value={ing.grams}
            onChange={(e) => {
              const updated = [...ingredients];
              updated[i].grams = Number(e.target.value);
              setIngredients(updated);
            }}
            className="w-20 px-2 py-2 rounded-lg bg-secondary text-foreground text-sm text-center"
            min={0}
          />
          <span className="text-xs text-muted-foreground">g</span>
          <button onClick={() => setIngredients(ingredients.filter((_, j) => j !== i))} className="text-destructive">
            <Trash2 size={16} />
          </button>
        </div>
      ))}
      
      <button
        onClick={() => setIngredients([...ingredients, { name: "Jalapeño", shu: 5000, grams: 20 }])}
        className="flex items-center gap-1 text-xs text-primary font-semibold"
      >
        <Plus size={14} /> Adicionar pimenta
      </button>

      <div className="rounded-xl bg-card border border-border p-4 text-center space-y-2">
        <p className="text-2xl font-bold text-foreground">{weightedSHU.toLocaleString()} SHU</p>
        <p className={`text-lg font-bold ${colors[level]}`}>{labels[level]}</p>
        <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
          <div
            className="h-full rounded-full transition-all bg-gradient-to-r from-green-500 via-yellow-500 via-orange-500 to-red-600"
            style={{ width: `${Math.min(100, (weightedSHU / 50000) * 100)}%` }}
          />
        </div>
        <p className="text-xs text-muted-foreground">
          {level === 0 && "Perfeito para todos os paladares."}
          {level === 1 && "Leve ardência — agradável para a maioria."}
          {level === 2 && "Cuidado! Ardência notável. Avise seus clientes."}
          {level === 3 && "🔥 EXTREMO! Apenas para os corajosos. Use com responsabilidade."}
        </p>
      </div>
    </div>
  );
}

// ======== CALCULADORA DE LUCRO ========
function ProfitCalculator() {
  const [items, setItems] = useState([
    { name: "Ingrediente", cost: 15 },
  ]);
  const [portions, setPortions] = useState(10);
  const [sellPrice, setSellPrice] = useState(25);

  const totalCost = items.reduce((s, i) => s + i.cost, 0);
  const costPerPortion = totalCost / Math.max(portions, 1);
  const profitPerPortion = sellPrice - costPerPortion;
  const margin = sellPrice > 0 ? ((profitPerPortion / sellPrice) * 100) : 0;
  const totalProfit = profitPerPortion * portions;

  return (
    <div className="space-y-4">
      <p className="text-xs text-muted-foreground">Calcule o custo, margem e lucro por porção da sua receita.</p>
      
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <input
            value={item.name}
            onChange={(e) => { const u = [...items]; u[i].name = e.target.value; setItems(u); }}
            className="flex-1 px-3 py-2 rounded-lg bg-secondary text-foreground text-sm"
            placeholder="Ingrediente"
          />
          <span className="text-xs text-muted-foreground">R$</span>
          <input
            type="number"
            value={item.cost}
            onChange={(e) => { const u = [...items]; u[i].cost = Number(e.target.value); setItems(u); }}
            className="w-20 px-2 py-2 rounded-lg bg-secondary text-foreground text-sm text-center"
            min={0}
            step={0.5}
          />
          <button onClick={() => setItems(items.filter((_, j) => j !== i))} className="text-destructive">
            <Trash2 size={16} />
          </button>
        </div>
      ))}
      
      <button onClick={() => setItems([...items, { name: "", cost: 0 }])} className="flex items-center gap-1 text-xs text-primary font-semibold">
        <Plus size={14} /> Adicionar ingrediente
      </button>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-xs text-muted-foreground">Porções</label>
          <input type="number" value={portions} onChange={e => setPortions(Number(e.target.value))} className="w-full px-3 py-2 rounded-lg bg-secondary text-foreground text-sm" min={1} />
        </div>
        <div>
          <label className="text-xs text-muted-foreground">Preço de venda (R$)</label>
          <input type="number" value={sellPrice} onChange={e => setSellPrice(Number(e.target.value))} className="w-full px-3 py-2 rounded-lg bg-secondary text-foreground text-sm" min={0} step={0.5} />
        </div>
      </div>

      <div className="rounded-xl bg-card border border-border p-4 space-y-3">
        <div className="flex justify-between text-sm"><span className="text-muted-foreground">Custo total</span><span className="text-foreground font-bold">R$ {totalCost.toFixed(2)}</span></div>
        <div className="flex justify-between text-sm"><span className="text-muted-foreground">Custo/porção</span><span className="text-foreground font-bold">R$ {costPerPortion.toFixed(2)}</span></div>
        <div className="flex justify-between text-sm"><span className="text-muted-foreground">Lucro/porção</span><span className={`font-bold ${profitPerPortion >= 0 ? "text-green-400" : "text-red-400"}`}>R$ {profitPerPortion.toFixed(2)}</span></div>
        <div className="flex justify-between text-sm"><span className="text-muted-foreground">Margem</span><span className={`font-bold ${margin >= 50 ? "text-green-400" : margin >= 30 ? "text-yellow-400" : "text-red-400"}`}>{margin.toFixed(1)}%</span></div>
        <hr className="border-border" />
        <div className="flex justify-between text-base"><span className="text-muted-foreground font-semibold">Lucro total</span><span className={`font-bold ${totalProfit >= 0 ? "text-green-400" : "text-red-400"}`}>R$ {totalProfit.toFixed(2)}</span></div>
        <p className="text-xs text-muted-foreground">
          {margin >= 60 && "✅ Margem excelente!"}
          {margin >= 40 && margin < 60 && "👍 Margem boa."}
          {margin >= 25 && margin < 40 && "⚠️ Margem apertada — considere ajustar preços."}
          {margin < 25 && "🚨 Margem baixa — revise custos ou aumente o preço."}
        </p>
      </div>
    </div>
  );
}

// ======== GERADOR DE CARDÁPIO ========
function MenuGenerator() {
  const [restaurant, setRestaurant] = useState("");
  const [sections, setSections] = useState([
    { title: "Tacos", items: [{ name: "Taco al Pastor", price: "R$ 18", desc: "Carne marinada com abacaxi" }] },
    { title: "Bebidas", items: [{ name: "Margarita", price: "R$ 22", desc: "Tequila, limão e Cointreau" }] },
  ]);
  const [copied, setCopied] = useState(false);

  const addSection = () => setSections([...sections, { title: "Nova Seção", items: [{ name: "", price: "", desc: "" }] }]);
  const addItem = (si: number) => {
    const u = [...sections];
    u[si].items.push({ name: "", price: "", desc: "" });
    setSections(u);
  };

  const generateText = () => {
    let text = `🌮 ${restaurant || "MEU RESTAURANTE MEXICANO"}\n${"═".repeat(40)}\n\n`;
    sections.forEach(s => {
      text += `── ${s.title.toUpperCase()} ──\n`;
      s.items.forEach(item => {
        if (item.name) text += `  ${item.name} ............ ${item.price}\n    ${item.desc}\n`;
      });
      text += "\n";
    });
    return text;
  };

  const copyMenu = () => {
    navigator.clipboard.writeText(generateText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <p className="text-xs text-muted-foreground">Monte um cardápio profissional para seu restaurante mexicano.</p>
      <input
        value={restaurant}
        onChange={e => setRestaurant(e.target.value)}
        placeholder="Nome do restaurante"
        className="w-full px-3 py-2 rounded-lg bg-secondary text-foreground text-sm"
      />
      {sections.map((sec, si) => (
        <div key={si} className="rounded-xl bg-card border border-border p-4 space-y-3">
          <div className="flex items-center gap-2">
            <input
              value={sec.title}
              onChange={e => { const u = [...sections]; u[si].title = e.target.value; setSections(u); }}
              className="flex-1 px-3 py-2 rounded-lg bg-secondary text-foreground text-sm font-bold"
            />
            <button onClick={() => setSections(sections.filter((_, i) => i !== si))} className="text-destructive"><Trash2 size={16} /></button>
          </div>
          {sec.items.map((item, ii) => (
            <div key={ii} className="grid grid-cols-[1fr_80px] gap-2">
              <input value={item.name} onChange={e => { const u = [...sections]; u[si].items[ii].name = e.target.value; setSections(u); }} placeholder="Nome do prato" className="px-2 py-1.5 rounded bg-secondary text-foreground text-xs" />
              <input value={item.price} onChange={e => { const u = [...sections]; u[si].items[ii].price = e.target.value; setSections(u); }} placeholder="R$ 00" className="px-2 py-1.5 rounded bg-secondary text-foreground text-xs" />
              <input value={item.desc} onChange={e => { const u = [...sections]; u[si].items[ii].desc = e.target.value; setSections(u); }} placeholder="Descrição curta" className="col-span-2 px-2 py-1.5 rounded bg-secondary text-foreground text-xs" />
            </div>
          ))}
          <button onClick={() => addItem(si)} className="text-xs text-primary font-semibold flex items-center gap-1"><Plus size={14} /> Item</button>
        </div>
      ))}
      <button onClick={addSection} className="text-xs text-primary font-semibold flex items-center gap-1"><Plus size={14} /> Nova seção</button>
      
      <div className="rounded-xl bg-card border border-border p-4">
        <pre className="text-xs text-foreground whitespace-pre-wrap font-mono">{generateText()}</pre>
      </div>
      <Button onClick={copyMenu} className="w-full" variant={copied ? "secondary" : "default"}>
        {copied ? <><Check size={16} /> Copiado!</> : <><Copy size={16} /> Copiar Cardápio</>}
      </Button>
    </div>
  );
}

// ======== GERADOR DE COMBOS ========
function ComboGenerator() {
  const [items, setItems] = useState([
    { name: "Taco al Pastor", price: 18 },
    { name: "Guacamole", price: 12 },
    { name: "Margarita", price: 22 },
  ]);
  const [discount, setDiscount] = useState(15);
  
  const totalIndividual = items.reduce((s, i) => s + i.price, 0);
  const comboPrice = totalIndividual * (1 - discount / 100);
  const saving = totalIndividual - comboPrice;

  return (
    <div className="space-y-4">
      <p className="text-xs text-muted-foreground">Crie combos promocionais com desconto para aumentar o ticket médio.</p>
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <input value={item.name} onChange={e => { const u = [...items]; u[i].name = e.target.value; setItems(u); }} className="flex-1 px-3 py-2 rounded-lg bg-secondary text-foreground text-sm" placeholder="Item" />
          <span className="text-xs text-muted-foreground">R$</span>
          <input type="number" value={item.price} onChange={e => { const u = [...items]; u[i].price = Number(e.target.value); setItems(u); }} className="w-20 px-2 py-2 rounded-lg bg-secondary text-foreground text-sm text-center" min={0} />
          <button onClick={() => setItems(items.filter((_, j) => j !== i))} className="text-destructive"><Trash2 size={16} /></button>
        </div>
      ))}
      <button onClick={() => setItems([...items, { name: "", price: 0 }])} className="text-xs text-primary font-semibold flex items-center gap-1"><Plus size={14} /> Adicionar item</button>
      
      <div>
        <label className="text-xs text-muted-foreground">Desconto do combo (%)</label>
        <input type="range" min={5} max={40} value={discount} onChange={e => setDiscount(Number(e.target.value))} className="w-full accent-primary" />
        <p className="text-xs text-center text-primary font-bold">{discount}%</p>
      </div>

      <div className="rounded-xl bg-card border border-border p-4 space-y-2 text-center">
        <p className="text-sm text-muted-foreground line-through">De R$ {totalIndividual.toFixed(2)}</p>
        <p className="text-3xl font-bold text-primary">R$ {comboPrice.toFixed(2)}</p>
        <p className="text-xs text-green-400 font-semibold">Economia de R$ {saving.toFixed(2)} 🎉</p>
        <div className="rounded-lg bg-secondary p-3 mt-3 text-left">
          <p className="text-xs font-bold text-foreground mb-1">🌮 COMBO MEXICANO</p>
          {items.map((item, i) => item.name && <p key={i} className="text-xs text-muted-foreground">• {item.name}</p>)}
          <p className="text-xs text-primary font-bold mt-1">POR APENAS R$ {comboPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

// ======== GERADOR DE PREÇOS ========
function PriceGenerator() {
  const [cost, setCost] = useState(10);
  const [targetMargin, setTargetMargin] = useState(60);
  const [competitor, setCompetitor] = useState(25);
  
  const suggestedPrice = cost / (1 - targetMargin / 100);
  const marketDiff = suggestedPrice - competitor;

  return (
    <div className="space-y-4">
      <p className="text-xs text-muted-foreground">Calcule o preço ideal baseado no custo e margem desejada.</p>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-xs text-muted-foreground">Custo (R$)</label>
          <input type="number" value={cost} onChange={e => setCost(Number(e.target.value))} className="w-full px-3 py-2 rounded-lg bg-secondary text-foreground text-sm" min={0} step={0.5} />
        </div>
        <div>
          <label className="text-xs text-muted-foreground">Preço concorrência (R$)</label>
          <input type="number" value={competitor} onChange={e => setCompetitor(Number(e.target.value))} className="w-full px-3 py-2 rounded-lg bg-secondary text-foreground text-sm" min={0} step={0.5} />
        </div>
      </div>
      <div>
        <label className="text-xs text-muted-foreground">Margem desejada (%)</label>
        <input type="range" min={20} max={80} value={targetMargin} onChange={e => setTargetMargin(Number(e.target.value))} className="w-full accent-primary" />
        <p className="text-xs text-center text-primary font-bold">{targetMargin}%</p>
      </div>
      <div className="rounded-xl bg-card border border-border p-4 space-y-3">
        <div className="text-center">
          <p className="text-xs text-muted-foreground">Preço sugerido</p>
          <p className="text-3xl font-bold text-primary">R$ {suggestedPrice.toFixed(2)}</p>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="rounded-lg bg-secondary p-2">
            <p className="text-xs text-muted-foreground">Econômico</p>
            <p className="text-sm font-bold text-foreground">R$ {(suggestedPrice * 0.85).toFixed(2)}</p>
          </div>
          <div className="rounded-lg bg-primary/10 p-2 border border-primary/30">
            <p className="text-xs text-primary">Ideal</p>
            <p className="text-sm font-bold text-primary">R$ {suggestedPrice.toFixed(2)}</p>
          </div>
          <div className="rounded-lg bg-secondary p-2">
            <p className="text-xs text-muted-foreground">Premium</p>
            <p className="text-sm font-bold text-foreground">R$ {(suggestedPrice * 1.2).toFixed(2)}</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground text-center">
          {marketDiff > 5 && `⚠️ R$ ${marketDiff.toFixed(2)} acima da concorrência — destaque seu diferencial.`}
          {marketDiff <= 5 && marketDiff >= -5 && "✅ Preço competitivo com o mercado."}
          {marketDiff < -5 && `💡 R$ ${Math.abs(marketDiff).toFixed(2)} abaixo — margem para subir.`}
        </p>
      </div>
    </div>
  );
}

// ======== GERADOR DE PROMOÇÕES ========
function PromoGenerator() {
  const [promoType, setPromoType] = useState<"happy" | "2x1" | "percent" | "fidelidade">("happy");
  const [details, setDetails] = useState({ item: "Margarita", price: 22, discount: 30, days: "Seg a Qui", hours: "17h-19h", target: 10 });

  const promoTexts = {
    happy: `🌮 HAPPY HOUR MEXICANO!\n${details.days} das ${details.hours}\n${details.item} por apenas R$ ${(details.price * (1 - details.discount / 100)).toFixed(2)}\n(De R$ ${details.price.toFixed(2)} por R$ ${(details.price * (1 - details.discount / 100)).toFixed(2)})\n¡Ándale! 🔥`,
    "2x1": `🌮 LEVE 2 PAGUE 1!\n${details.item}\nCompre um, ganhe outro!\nApenas ${details.days}\n¡Vámonos! 🎉`,
    percent: `🌶️ ${details.discount}% OFF!\n${details.item}\nDe R$ ${details.price.toFixed(2)} por R$ ${(details.price * (1 - details.discount / 100)).toFixed(2)}\nVálido ${details.days}\n¡Aproveite! 🔥`,
    fidelidade: `⭐ PROGRAMA FIDELIDADE\nCompre ${details.target} ${details.item}\ne ganhe 1 GRÁTIS!\nVálido todos os dias\n¡Salud! 🌮`,
  };

  const [copied, setCopied] = useState(false);
  const copyPromo = () => {
    navigator.clipboard.writeText(promoTexts[promoType]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <p className="text-xs text-muted-foreground">Gere promoções prontas para redes sociais e cardápios.</p>
      <div className="grid grid-cols-2 gap-2">
        {([["happy", "🍹 Happy Hour"], ["2x1", "🎉 Leve 2 Pague 1"], ["percent", "💰 % Desconto"], ["fidelidade", "⭐ Fidelidade"]] as const).map(([type, label]) => (
          <button key={type} onClick={() => setPromoType(type)} className={`px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${promoType === type ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"}`}>
            {label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="col-span-2">
          <label className="text-xs text-muted-foreground">Item</label>
          <input value={details.item} onChange={e => setDetails({ ...details, item: e.target.value })} className="w-full px-3 py-2 rounded-lg bg-secondary text-foreground text-sm" />
        </div>
        <div>
          <label className="text-xs text-muted-foreground">Preço (R$)</label>
          <input type="number" value={details.price} onChange={e => setDetails({ ...details, price: Number(e.target.value) })} className="w-full px-3 py-2 rounded-lg bg-secondary text-foreground text-sm" />
        </div>
        <div>
          <label className="text-xs text-muted-foreground">Desconto (%)</label>
          <input type="number" value={details.discount} onChange={e => setDetails({ ...details, discount: Number(e.target.value) })} className="w-full px-3 py-2 rounded-lg bg-secondary text-foreground text-sm" />
        </div>
        <div>
          <label className="text-xs text-muted-foreground">Dias</label>
          <input value={details.days} onChange={e => setDetails({ ...details, days: e.target.value })} className="w-full px-3 py-2 rounded-lg bg-secondary text-foreground text-sm" />
        </div>
        <div>
          <label className="text-xs text-muted-foreground">Horário</label>
          <input value={details.hours} onChange={e => setDetails({ ...details, hours: e.target.value })} className="w-full px-3 py-2 rounded-lg bg-secondary text-foreground text-sm" />
        </div>
      </div>
      <div className="rounded-xl bg-card border border-border p-4">
        <pre className="text-sm text-foreground whitespace-pre-wrap">{promoTexts[promoType]}</pre>
      </div>
      <Button onClick={copyPromo} className="w-full" variant={copied ? "secondary" : "default"}>
        {copied ? <><Check size={16} /> Copiado!</> : <><Copy size={16} /> Copiar Promoção</>}
      </Button>
    </div>
  );
}

// ======== SIMULADOR DE DELIVERY ========
function DeliverySimulator() {
  const [orders, setOrders] = useState(100);
  const [avgTicket, setAvgTicket] = useState(35);
  const [foodCost, setFoodCost] = useState(35);
  const [platformFee, setPlatformFee] = useState(27);
  const [packaging, setPackaging] = useState(3);
  const [deliveryFee, setDeliveryFee] = useState(8);
  const [ownDelivery, setOwnDelivery] = useState(false);

  const revenue = orders * avgTicket;
  const costFood = revenue * (foodCost / 100);
  const costPlatform = ownDelivery ? 0 : revenue * (platformFee / 100);
  const costPack = orders * packaging;
  const deliveryRevenue = orders * deliveryFee;
  const totalCost = costFood + costPlatform + costPack;
  const profit = revenue + deliveryRevenue - totalCost;
  const profitMargin = revenue > 0 ? (profit / revenue) * 100 : 0;

  return (
    <div className="space-y-4">
      <p className="text-xs text-muted-foreground">Simule a viabilidade do delivery para seu restaurante mexicano.</p>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-xs text-muted-foreground">Pedidos/mês</label>
          <input type="number" value={orders} onChange={e => setOrders(Number(e.target.value))} className="w-full px-3 py-2 rounded-lg bg-secondary text-foreground text-sm" min={0} />
        </div>
        <div>
          <label className="text-xs text-muted-foreground">Ticket médio (R$)</label>
          <input type="number" value={avgTicket} onChange={e => setAvgTicket(Number(e.target.value))} className="w-full px-3 py-2 rounded-lg bg-secondary text-foreground text-sm" min={0} />
        </div>
        <div>
          <label className="text-xs text-muted-foreground">Custo alimento (%)</label>
          <input type="number" value={foodCost} onChange={e => setFoodCost(Number(e.target.value))} className="w-full px-3 py-2 rounded-lg bg-secondary text-foreground text-sm" min={0} max={100} />
        </div>
        <div>
          <label className="text-xs text-muted-foreground">Taxa plataforma (%)</label>
          <input type="number" value={platformFee} onChange={e => setPlatformFee(Number(e.target.value))} className="w-full px-3 py-2 rounded-lg bg-secondary text-foreground text-sm" min={0} max={50} disabled={ownDelivery} />
        </div>
        <div>
          <label className="text-xs text-muted-foreground">Embalagem (R$/pedido)</label>
          <input type="number" value={packaging} onChange={e => setPackaging(Number(e.target.value))} className="w-full px-3 py-2 rounded-lg bg-secondary text-foreground text-sm" min={0} />
        </div>
        <div>
          <label className="text-xs text-muted-foreground">Taxa entrega (R$)</label>
          <input type="number" value={deliveryFee} onChange={e => setDeliveryFee(Number(e.target.value))} className="w-full px-3 py-2 rounded-lg bg-secondary text-foreground text-sm" min={0} />
        </div>
      </div>
      <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
        <input type="checkbox" checked={ownDelivery} onChange={e => setOwnDelivery(e.target.checked)} className="accent-primary" />
        Delivery próprio (sem taxa de plataforma)
      </label>

      <div className="rounded-xl bg-card border border-border p-4 space-y-3">
        <div className="flex justify-between text-sm"><span className="text-muted-foreground">Faturamento</span><span className="font-bold text-foreground">R$ {revenue.toLocaleString()}</span></div>
        <div className="flex justify-between text-sm"><span className="text-muted-foreground">+ Taxa entrega</span><span className="font-bold text-foreground">R$ {deliveryRevenue.toLocaleString()}</span></div>
        <div className="flex justify-between text-sm"><span className="text-muted-foreground">- Custo alimentos</span><span className="font-bold text-red-400">-R$ {costFood.toLocaleString()}</span></div>
        {!ownDelivery && <div className="flex justify-between text-sm"><span className="text-muted-foreground">- Taxa plataforma</span><span className="font-bold text-red-400">-R$ {costPlatform.toLocaleString()}</span></div>}
        <div className="flex justify-between text-sm"><span className="text-muted-foreground">- Embalagens</span><span className="font-bold text-red-400">-R$ {costPack.toLocaleString()}</span></div>
        <hr className="border-border" />
        <div className="flex justify-between text-base"><span className="font-semibold text-muted-foreground">Lucro mensal</span><span className={`font-bold ${profit >= 0 ? "text-green-400" : "text-red-400"}`}>R$ {profit.toLocaleString()}</span></div>
        <p className={`text-xs font-semibold ${profitMargin >= 20 ? "text-green-400" : profitMargin >= 10 ? "text-yellow-400" : "text-red-400"}`}>
          Margem: {profitMargin.toFixed(1)}%
        </p>
        <p className="text-xs text-muted-foreground">
          {profitMargin >= 20 && "✅ Operação viável! Margem saudável para delivery."}
          {profitMargin >= 10 && profitMargin < 20 && "⚠️ Margem apertada — considere delivery próprio ou aumente ticket."}
          {profitMargin < 10 && "🚨 Margem insustentável — revise custos ou taxas."}
        </p>
      </div>
    </div>
  );
}

// ======== MAIN PAGE ========
const tools = [
  { id: "spice", icon: Flame, title: "Calculadora de Ardência 🌶️", desc: "Calcule o SHU da sua receita", color: "from-red-500 to-orange-600", component: SpiceCalculator },
  { id: "profit", icon: DollarSign, title: "Calculadora de Lucro", desc: "Custo, margem e lucro por porção", color: "from-green-500 to-emerald-600", component: ProfitCalculator },
  { id: "menu", icon: FileText, title: "Gerador de Cardápio", desc: "Monte cardápios profissionais", color: "from-amber-500 to-yellow-600", component: MenuGenerator },
  { id: "combo", icon: Package, title: "Gerador de Combos", desc: "Crie combos com desconto", color: "from-blue-500 to-indigo-600", component: ComboGenerator },
  { id: "price", icon: Tag, title: "Gerador de Preços", desc: "Preço ideal por margem", color: "from-purple-500 to-violet-600", component: PriceGenerator },
  { id: "promo", icon: Percent, title: "Gerador de Promoções", desc: "Promoções prontas para redes sociais", color: "from-pink-500 to-rose-600", component: PromoGenerator },
  { id: "delivery", icon: Truck, title: "Simulador de Delivery", desc: "Viabilidade financeira do delivery", color: "from-cyan-500 to-teal-600", component: DeliverySimulator },
];

export default function VipTools() {
  const navigate = useNavigate();
  const [unlocked, setUnlockedState] = useState(false);
  const [openTool, setOpenTool] = useState<string | null>(null);

  useEffect(() => {
    setUnlockedState(isVipUnlocked());
  }, []);

  if (!unlocked) {
    return (
      <>
        <Helmet><title>Ferramentas VIP | Receitas MexicanasXP</title></Helmet>
        <main className="px-4 pt-8 pb-32 lg:pb-12 text-center">
          <Lock size={48} className="mx-auto text-muted-foreground mb-4" />
          <h1 className="font-display text-2xl font-bold text-foreground">Ferramentas VIP</h1>
          <p className="text-muted-foreground text-sm mt-2 max-w-md mx-auto">Estas ferramentas são exclusivas para membros VIP. Desbloqueie seu acesso para usar calculadoras, geradores e simuladores profissionais.</p>
          <Button onClick={() => navigate("/queroservip")} className="mt-6">
            <Crown size={18} /> Quero ser VIP
          </Button>
        </main>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Ferramentas VIP | Receitas MexicanasXP</title>
        <meta name="description" content="Ferramentas exclusivas VIP: calculadora de ardência, lucro, gerador de cardápio, combos, preços, promoções e simulador de delivery." />
      </Helmet>
      <main className="px-4 pt-6 pb-32 lg:pb-12 max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => navigate("/vip")} className="text-muted-foreground hover:text-foreground"><ArrowLeft size={20} /></button>
          <div>
            <h1 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
              <Crown size={22} className="text-yellow-500" /> Ferramentas VIP
            </h1>
            <p className="text-xs text-muted-foreground">7 ferramentas profissionais para seu negócio mexicano</p>
          </div>
        </div>

        <div className="space-y-3">
          {tools.map((tool) => {
            const Icon = tool.icon;
            const isOpen = openTool === tool.id;
            const ToolComponent = tool.component;
            return (
              <div key={tool.id} className="rounded-2xl border border-border overflow-hidden bg-card">
                <button
                  onClick={() => setOpenTool(isOpen ? null : tool.id)}
                  className="w-full flex items-center gap-3 p-4 text-left"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-foreground">{tool.title}</p>
                    <p className="text-xs text-muted-foreground">{tool.desc}</p>
                  </div>
                  {isOpen ? <ChevronUp size={18} className="text-muted-foreground" /> : <ChevronDown size={18} className="text-muted-foreground" />}
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 border-t border-border pt-4">
                    <ToolComponent />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
