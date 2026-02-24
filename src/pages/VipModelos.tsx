import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import {
  Crown, Lock, ArrowLeft, Copy, Check, FileText, Truck, Store,
  Building2, Package, PartyPopper, Gift, CalendarDays, ChevronDown, ChevronUp,
  Edit3
} from "lucide-react";
import { isVipUnlocked } from "@/utils/vipKeys";
import { Button } from "@/components/ui/button";

// ======== TIPOS ========
interface ModeloItem {
  name: string;
  price: string;
  desc?: string;
}
interface ModeloSection {
  title: string;
  items: ModeloItem[];
}
interface Modelo {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  color: string;
  sections: ModeloSection[];
  footer?: string;
}

// ======== DADOS ========
const cardapiosEditaveis: Modelo[] = [
  {
    id: "cardapio-completo",
    icon: FileText,
    title: "Cardápio Completo — Restaurante Mexicano",
    subtitle: "Menu completo com entradas, pratos principais, sobremesas e bebidas",
    color: "from-amber-500 to-orange-600",
    sections: [
      { title: "🌮 ENTRADAS & ANTOJITOS", items: [
        { name: "Guacamole Fresco", price: "R$ 22", desc: "Abacate, tomate, coentro, cebola, limão — feito na hora" },
        { name: "Nachos Supreme", price: "R$ 28", desc: "Totopos, feijão, queijo, jalapeño, creme, pico de gallo" },
        { name: "Queso Fundido", price: "R$ 26", desc: "Queijo derretido com chorizo e rajas de poblano" },
        { name: "Elotes Mexicanos", price: "R$ 16", desc: "Milho grelhado com maionese, cotija, chile e limão" },
        { name: "Tostadas de Tinga", price: "R$ 18", desc: "Frango desfiado em chipotle sobre tostada crocante" },
      ]},
      { title: "🌮 TACOS (3 unidades)", items: [
        { name: "Tacos al Pastor", price: "R$ 32", desc: "Carne marinada com abacaxi e coentro" },
        { name: "Tacos de Carnitas", price: "R$ 30", desc: "Porco confitado estilo Michoacán" },
        { name: "Tacos de Birria", price: "R$ 35", desc: "Carne braseada em consomé com queijo" },
        { name: "Tacos de Camarão", price: "R$ 38", desc: "Camarão empanado com repolho e chipotle" },
        { name: "Tacos Veganos", price: "R$ 26", desc: "Couve-flor assada com feijão e abacate" },
      ]},
      { title: "🫔 PRATOS PRINCIPAIS", items: [
        { name: "Enchiladas Suizas", price: "R$ 38", desc: "3 enchiladas em molho verde cremoso gratinadas" },
        { name: "Burrito Completo", price: "R$ 36", desc: "Tortilla gigante com carne, arroz, feijão e guacamole" },
        { name: "Fajitas Mistas", price: "R$ 48", desc: "Carne e frango grelhados com pimentões na chapa" },
        { name: "Mole Poblano", price: "R$ 42", desc: "Frango em mole de 20+ ingredientes com arroz" },
        { name: "Cochinita Pibil", price: "R$ 40", desc: "Porco marinado em achiote, cebola roxa e habanero" },
      ]},
      { title: "🍬 SOBREMESAS", items: [
        { name: "Churros con Chocolate", price: "R$ 18", desc: "3 churros com calda de chocolate mexicano" },
        { name: "Flan Napolitano", price: "R$ 16", desc: "Flan cremoso com calda de caramelo" },
        { name: "Tres Leches", price: "R$ 20", desc: "Bolo encharcado em 3 leites com chantilly" },
      ]},
      { title: "🍹 BEBIDAS", items: [
        { name: "Agua de Horchata", price: "R$ 10", desc: "Bebida de arroz com canela e baunilha" },
        { name: "Agua de Jamaica", price: "R$ 10", desc: "Chá gelado de hibisco" },
        { name: "Margarita Clássica", price: "R$ 28", desc: "Tequila, Cointreau e limão" },
        { name: "Michelada", price: "R$ 18", desc: "Cerveja preparada com limão, sal e molhos" },
      ]},
    ],
    footer: "🌶️ Pergunte ao garçom sobre o nível de ardência\n📍 Todos os pratos acompanham tortillas artesanais",
  },
  {
    id: "cardapio-executivo",
    icon: FileText,
    title: "Cardápio Executivo — Almoço",
    subtitle: "Menu executivo com entrada + prato + sobremesa",
    color: "from-blue-500 to-indigo-600",
    sections: [
      { title: "MENU EXECUTIVO — R$ 35,90", items: [
        { name: "Entrada (escolha 1)", price: "", desc: "Sopa de Tortilla | Nachos Simples | Guacamole Individual" },
        { name: "Prato Principal (escolha 1)", price: "", desc: "Tacos al Pastor (3) | Burrito de Frango | Enchiladas Verdes | Quesadilla Completa" },
        { name: "Sobremesa", price: "", desc: "Churro com Doce de Leite | Flan" },
        { name: "Bebida", price: "", desc: "Agua de Horchata | Jamaica | Refrigerante" },
      ]},
      { title: "EXTRAS", items: [
        { name: "Guacamole extra", price: "+R$ 8" },
        { name: "Trocar por carne premium", price: "+R$ 10" },
        { name: "Margarita", price: "+R$ 15" },
      ]},
    ],
    footer: "⏰ Seg a Sex, 11h30-15h | 🌮 Inclui tortillas artesanais",
  },
];

const cardapiosDelivery: Modelo[] = [
  {
    id: "delivery-ifood",
    icon: Truck,
    title: "Cardápio Delivery — iFood/Rappi",
    subtitle: "Otimizado para plataformas com combos e promoções",
    color: "from-red-500 to-rose-600",
    sections: [
      { title: "⭐ MAIS PEDIDOS", items: [
        { name: "Combo Taco Fiesta (5 tacos)", price: "R$ 45", desc: "5 tacos variados + molho extra + nachos" },
        { name: "Burrito Supreme", price: "R$ 32", desc: "Burrito gigante com tudo + refrigerante" },
        { name: "Nachos Loaded", price: "R$ 28", desc: "Nachos com carne, queijo, guacamole e creme" },
      ]},
      { title: "🌮 TACOS (3 unidades + molho)", items: [
        { name: "Al Pastor", price: "R$ 28" },
        { name: "Carnitas", price: "R$ 26" },
        { name: "Birria", price: "R$ 30" },
        { name: "Camarão", price: "R$ 34" },
        { name: "Vegano", price: "R$ 22" },
      ]},
      { title: "🫔 PRATOS", items: [
        { name: "Enchiladas (3) + arroz", price: "R$ 34" },
        { name: "Quesadilla Completa", price: "R$ 26" },
        { name: "Bowl Mexicano", price: "R$ 30", desc: "Arroz, feijão, carne, guacamole, pico de gallo" },
      ]},
      { title: "🥤 COMBOS DELIVERY", items: [
        { name: "Combo Solo", price: "R$ 35", desc: "Prato + bebida + churro" },
        { name: "Combo Casal", price: "R$ 65", desc: "2 pratos + 2 bebidas + nachos" },
        { name: "Combo Família (4 pessoas)", price: "R$ 120", desc: "4 pratos + 4 bebidas + nachos + guacamole" },
      ]},
    ],
    footer: "🚚 Entrega grátis acima de R$ 60 | ⏱️ 30-45 min | 📦 Embalagem lacrada",
  },
];

const cardapiosFoodTruck: Modelo[] = [
  {
    id: "food-truck",
    icon: Store,
    title: "Cardápio Food Truck Mexicano",
    subtitle: "Menu enxuto e eficiente para operação rápida",
    color: "from-green-500 to-emerald-600",
    sections: [
      { title: "🌮 TACOS (unidade)", items: [
        { name: "Al Pastor", price: "R$ 12" },
        { name: "Carnitas", price: "R$ 11" },
        { name: "Birria c/ consomé", price: "R$ 14" },
        { name: "Vegano (couve-flor)", price: "R$ 10" },
      ]},
      { title: "🫔 COMBOS RÁPIDOS", items: [
        { name: "3 Tacos + Bebida", price: "R$ 30" },
        { name: "Burrito + Bebida", price: "R$ 28" },
        { name: "Quesadilla + Bebida", price: "R$ 24" },
        { name: "5 Tacos (escolha)", price: "R$ 45" },
      ]},
      { title: "EXTRAS", items: [
        { name: "Guacamole", price: "+R$ 6" },
        { name: "Nachos com queijo", price: "R$ 15" },
        { name: "Elote (milho)", price: "R$ 10" },
      ]},
      { title: "🥤 BEBIDAS", items: [
        { name: "Horchata / Jamaica", price: "R$ 8" },
        { name: "Refrigerante", price: "R$ 6" },
        { name: "Cerveja", price: "R$ 10" },
      ]},
    ],
    footer: "🔥 Tudo feito na hora | 🌶️ Molhos: Suave · Médio · Quente · Habanero",
  },
];

const cardapiosDarkKitchen: Modelo[] = [
  {
    id: "dark-kitchen",
    icon: Building2,
    title: "Cardápio Dark Kitchen",
    subtitle: "Menu focado em delivery com margem otimizada",
    color: "from-purple-500 to-violet-600",
    sections: [
      { title: "💎 SIGNATURE BOWLS", items: [
        { name: "Bowl Al Pastor", price: "R$ 32", desc: "Arroz, carne al pastor, abacaxi, coentro, cebola, salsa" },
        { name: "Bowl Carnitas", price: "R$ 30", desc: "Arroz, carnitas, feijão, guacamole, creme" },
        { name: "Bowl Vegano", price: "R$ 26", desc: "Arroz, feijão negro, couve-flor, abacate, milho, salsa" },
        { name: "Bowl Birria", price: "R$ 35", desc: "Arroz, birria desfiada, consomé lateral, queijo, cebola" },
      ]},
      { title: "🌮 TACO KITS", items: [
        { name: "Kit 6 Tacos Variados", price: "R$ 48", desc: "2 al pastor + 2 carnitas + 2 birria + molhos" },
        { name: "Kit 10 Tacos (festa)", price: "R$ 75", desc: "Mix de tacos + guacamole + nachos + molhos" },
        { name: "Kit Birria Completo", price: "R$ 55", desc: "6 tacos de birria + consomé + cebola + limão" },
      ]},
      { title: "🥤 ADD-ONS", items: [
        { name: "Guacamole 200g", price: "+R$ 12" },
        { name: "Nachos + queijo", price: "+R$ 14" },
        { name: "Churros (3 un)", price: "+R$ 10" },
        { name: "Bebida 500ml", price: "+R$ 8" },
      ]},
    ],
    footer: "📦 Embalagem premium | 🕐 Pedido mínimo R$ 25 | 🚚 Frete calculado no app",
  },
];

const combosProntos: Modelo[] = [
  {
    id: "combos-eventos",
    icon: Package,
    title: "Combos para Eventos & Festas",
    subtitle: "Pacotes prontos para 10, 20 e 50 pessoas",
    color: "from-orange-500 to-red-600",
    sections: [
      { title: "🎉 PACOTE FIESTA (10 pessoas) — R$ 350", items: [
        { name: "30 Tacos variados", price: "incluso" },
        { name: "Guacamole 500g", price: "incluso" },
        { name: "Nachos 500g", price: "incluso" },
        { name: "10 Aguas frescas", price: "incluso" },
        { name: "Molhos (3 tipos)", price: "incluso" },
      ]},
      { title: "🎊 PACOTE GRAN FIESTA (20 pessoas) — R$ 650", items: [
        { name: "60 Tacos variados", price: "incluso" },
        { name: "Guacamole 1kg", price: "incluso" },
        { name: "Nachos Supreme 1kg", price: "incluso" },
        { name: "Arroz e feijão (2kg cada)", price: "incluso" },
        { name: "20 Aguas frescas", price: "incluso" },
        { name: "Churros (20 un)", price: "incluso" },
      ]},
      { title: "🏟️ PACOTE MEGA (50 pessoas) — R$ 1.500", items: [
        { name: "150 Tacos variados", price: "incluso" },
        { name: "Guacamole 2kg", price: "incluso" },
        { name: "Nachos Supreme 2kg", price: "incluso" },
        { name: "Arroz e feijão (5kg cada)", price: "incluso" },
        { name: "50 Bebidas variadas", price: "incluso" },
        { name: "Churros (50 un)", price: "incluso" },
        { name: "Decoração temática", price: "incluso" },
      ]},
    ],
    footer: "📞 Agende com 48h de antecedência | 🚚 Entrega inclusa até 15km",
  },
];

const kitsInauguracao: Modelo[] = [
  {
    id: "kit-inauguracao",
    icon: PartyPopper,
    title: "Kit de Inauguração",
    subtitle: "Promoções e estratégias para o dia de abertura",
    color: "from-yellow-500 to-amber-600",
    sections: [
      { title: "📋 SEMANA DE INAUGURAÇÃO", items: [
        { name: "Dia 1 — Amigos & Família", price: "50% OFF", desc: "Teste o cardápio com público próximo, peça feedback" },
        { name: "Dia 2 — Soft Opening", price: "30% OFF", desc: "Abra com capacidade reduzida (50%)" },
        { name: "Dia 3 — Inauguração Oficial", price: "Promos", desc: "Primeiro taco grátis para cada cliente, música ao vivo" },
        { name: "Dias 4-7 — Promoção de Lançamento", price: "20% OFF", desc: "Desconto progressivo: 20% semana 1, 15% semana 2, 10% semana 3" },
      ]},
      { title: "🎁 BRINDES DE INAUGURAÇÃO", items: [
        { name: "Chaveiro de pimenta", price: "R$ 2/un", desc: "Com logo do restaurante" },
        { name: "Adesivo para celular", price: "R$ 1/un", desc: "Design mexicano personalizado" },
        { name: "Cartão fidelidade", price: "R$ 0,50/un", desc: "Compre 10 tacos, ganhe 1" },
        { name: "Mini molho artesanal", price: "R$ 5/un", desc: "Potinho de salsa com logo" },
      ]},
      { title: "📱 CHECKLIST DE MARKETING", items: [
        { name: "Instagram — 30 posts agendados", price: "✓" },
        { name: "Google Meu Negócio configurado", price: "✓" },
        { name: "Cadastro iFood/Rappi", price: "✓" },
        { name: "Parcerias com influenciadores locais", price: "✓" },
        { name: "Flyers na região (1.000 un)", price: "R$ 150" },
      ]},
    ],
    footer: "💡 Dica: Inaugure numa quinta-feira para ter o fim de semana como segunda chance",
  },
];

const kitsPromocionais: Modelo[] = [
  {
    id: "kit-promo",
    icon: Gift,
    title: "Kits Promocionais",
    subtitle: "Promoções semanais, mensais e por horário",
    color: "from-pink-500 to-rose-600",
    sections: [
      { title: "🕐 PROMOÇÕES POR HORÁRIO", items: [
        { name: "Happy Hour (17h-19h)", price: "30% OFF", desc: "Margaritas e micheladas pela metade + nachos grátis acima de R$ 50" },
        { name: "Almoço Executivo (11h30-15h)", price: "R$ 35,90", desc: "Entrada + prato + sobremesa + bebida" },
        { name: "Late Night (22h-00h)", price: "20% OFF", desc: "Todos os tacos com desconto" },
      ]},
      { title: "📅 PROMOÇÕES SEMANAIS", items: [
        { name: "Terça do Taco", price: "R$ 8/taco", desc: "Todos os tacos por preço único" },
        { name: "Quarta do Burrito", price: "Leve 2 Pague 1", desc: "Qualquer burrito" },
        { name: "Quinta Mexicana", price: "Combo R$ 29,90", desc: "3 tacos + nachos + bebida" },
        { name: "Sexta da Margarita", price: "2 por R$ 35", desc: "Todas as margaritas" },
      ]},
      { title: "📱 PROMOÇÕES REDES SOCIAIS", items: [
        { name: "Story do Prato", price: "Sobremesa grátis", desc: "Poste story marcando o restaurante e ganhe churro" },
        { name: "Review no Google", price: "10% OFF", desc: "Avaliação 5 estrelas = desconto na próxima visita" },
        { name: "Aniversariante", price: "Prato grátis", desc: "Aniversariante come grátis com grupo de 4+" },
      ]},
    ],
    footer: "📊 Acompanhe o ROI de cada promoção para otimizar resultados",
  },
];

const campanhasSazonais: Modelo[] = [
  {
    id: "campanha-sazonal",
    icon: CalendarDays,
    title: "Campanhas Sazonais",
    subtitle: "Menus e promoções especiais para datas comemorativas",
    color: "from-teal-500 to-cyan-600",
    sections: [
      { title: "💀 DIA DOS MORTOS (1-2 Nov)", items: [
        { name: "Menu Temático Especial", price: "R$ 55/pessoa", desc: "Mole negro + tamales + pan de muerto + atole + calaveritas de azúcar" },
        { name: "Decoração temática", price: "", desc: "Ofrenda, cempasúchil, calaveritas, papel picado" },
        { name: "Cocktail especial: La Catrina", price: "R$ 25", desc: "Mezcal, hibisco, limão e flor comestível" },
      ]},
      { title: "🎄 NATAL MEXICANO (Posadas — 16-24 Dez)", items: [
        { name: "Ceia Mexicana (por pessoa)", price: "R$ 75", desc: "Bacalhau a la Vizcaína + tamales + romeritos + ponche" },
        { name: "Kit Posada (10 pessoas)", price: "R$ 450", desc: "Menu completo + piñata + ponche + buñuelos" },
        { name: "Panetone Mexicano", price: "R$ 35", desc: "Rosca de Reyes (disponível em janeiro)" },
      ]},
      { title: "🌮 CINCO DE MAYO (5 Mai)", items: [
        { name: "Festival de Tacos", price: "R$ 10/taco", desc: "10 tipos de tacos por preço único" },
        { name: "Margarita Ilimitada", price: "R$ 50/pessoa", desc: "2h de margaritas à vontade" },
        { name: "Combo Puebla", price: "R$ 45", desc: "Mole poblano + chiles en nogada + agua de horchata" },
      ]},
      { title: "❤️ DIA DOS NAMORADOS (12 Jun)", items: [
        { name: "Jantar Romântico para 2", price: "R$ 180", desc: "Entrada + 2 pratos + sobremesa compartilhada + 2 margaritas" },
        { name: "Fajitas na Chapa (casal)", price: "R$ 95", desc: "Fajitas mistas fumegantes com tudo" },
      ]},
      { title: "🏖️ VERÃO (Dez-Mar)", items: [
        { name: "Menu Refrescante", price: "", desc: "Ceviches, aguachile, tacos de peixe, margaritas frozen" },
        { name: "Happy Hour Estendido", price: "17h-21h", desc: "Micheladas e margaritas frozen com 40% OFF" },
      ]},
      { title: "🥶 INVERNO (Jun-Ago)", items: [
        { name: "Festival de Caldos", price: "", desc: "Pozole, caldo tlalpeño, sopa de tortilla — R$ 25 cada" },
        { name: "Chocolate Mexicano Quente", price: "R$ 12", desc: "Com canela e pimenta" },
      ]},
    ],
    footer: "📅 Planeje campanhas com 30 dias de antecedência para máximo impacto",
  },
];

// ======== COMPONENTE DE MODELO ========
function ModeloCard({ modelo }: { modelo: Modelo }) {
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [sections, setSections] = useState(modelo.sections);
  const [copied, setCopied] = useState(false);

  const generateText = () => {
    let text = `${modelo.title}\n${"═".repeat(40)}\n\n`;
    sections.forEach(s => {
      text += `── ${s.title} ──\n`;
      s.items.forEach(item => {
        text += `  ${item.name}`;
        if (item.price) text += ` ............ ${item.price}`;
        text += "\n";
        if (item.desc) text += `    ${item.desc}\n`;
      });
      text += "\n";
    });
    if (modelo.footer) text += `\n${modelo.footer}\n`;
    return text;
  };

  const copyText = () => {
    navigator.clipboard.writeText(generateText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const Icon = modelo.icon;

  return (
    <div className="rounded-2xl border border-border overflow-hidden bg-card">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center gap-3 p-4 text-left">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${modelo.color} flex items-center justify-center flex-shrink-0`}>
          <Icon size={20} className="text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-foreground truncate">{modelo.title}</p>
          <p className="text-xs text-muted-foreground">{modelo.subtitle}</p>
        </div>
        {open ? <ChevronUp size={18} className="text-muted-foreground flex-shrink-0" /> : <ChevronDown size={18} className="text-muted-foreground flex-shrink-0" />}
      </button>

      {open && (
        <div className="px-4 pb-4 border-t border-border pt-4 space-y-4">
          <div className="flex gap-2">
            <Button size="sm" variant={editing ? "default" : "outline"} onClick={() => setEditing(!editing)} className="text-xs">
              <Edit3 size={14} /> {editing ? "Visualizar" : "Editar"}
            </Button>
            <Button size="sm" variant={copied ? "secondary" : "outline"} onClick={copyText} className="text-xs">
              {copied ? <><Check size={14} /> Copiado!</> : <><Copy size={14} /> Copiar</>}
            </Button>
          </div>

          {editing ? (
            <div className="space-y-4">
              {sections.map((sec, si) => (
                <div key={si} className="space-y-2">
                  <input
                    value={sec.title}
                    onChange={e => { const u = [...sections]; u[si] = { ...u[si], title: e.target.value }; setSections(u); }}
                    className="w-full px-3 py-1.5 rounded-lg bg-secondary text-foreground text-xs font-bold"
                  />
                  {sec.items.map((item, ii) => (
                    <div key={ii} className="grid grid-cols-[1fr_80px] gap-1 pl-3">
                      <input value={item.name} onChange={e => { const u = [...sections]; u[si].items[ii] = { ...u[si].items[ii], name: e.target.value }; setSections(u); }} className="px-2 py-1 rounded bg-secondary text-foreground text-xs" />
                      <input value={item.price} onChange={e => { const u = [...sections]; u[si].items[ii] = { ...u[si].items[ii], price: e.target.value }; setSections(u); }} className="px-2 py-1 rounded bg-secondary text-foreground text-xs" />
                      {item.desc !== undefined && (
                        <input value={item.desc} onChange={e => { const u = [...sections]; u[si].items[ii] = { ...u[si].items[ii], desc: e.target.value }; setSections(u); }} className="col-span-2 px-2 py-1 rounded bg-secondary text-foreground text-xs" placeholder="Descrição" />
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {sections.map((sec, si) => (
                <div key={si}>
                  <p className="text-xs font-bold text-foreground mb-1.5">{sec.title}</p>
                  {sec.items.map((item, ii) => (
                    <div key={ii} className="flex justify-between items-start py-1 border-b border-border/30 last:border-0">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-foreground font-medium">{item.name}</p>
                        {item.desc && <p className="text-[10px] text-muted-foreground">{item.desc}</p>}
                      </div>
                      {item.price && <span className="text-xs font-bold text-primary ml-2 flex-shrink-0">{item.price}</span>}
                    </div>
                  ))}
                </div>
              ))}
              {modelo.footer && (
                <p className="text-[10px] text-muted-foreground whitespace-pre-line border-t border-border pt-2">{modelo.footer}</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ======== CATEGORIAS DE MODELOS ========
const modelCategories = [
  { id: "cardapios", title: "📋 Cardápios Editáveis", models: cardapiosEditaveis },
  { id: "delivery", title: "🚚 Cardápios para Delivery", models: cardapiosDelivery },
  { id: "foodtruck", title: "🚛 Cardápios para Food Truck", models: cardapiosFoodTruck },
  { id: "darkkitchen", title: "🏭 Cardápios para Dark Kitchen", models: cardapiosDarkKitchen },
  { id: "combos", title: "📦 Combos Prontos", models: combosProntos },
  { id: "inauguracao", title: "🎉 Kits de Inauguração", models: kitsInauguracao },
  { id: "promocionais", title: "🎁 Kits Promocionais", models: kitsPromocionais },
  { id: "sazonais", title: "📅 Campanhas Sazonais", models: campanhasSazonais },
];

// ======== PÁGINA PRINCIPAL ========
export default function VipModelos() {
  const navigate = useNavigate();
  const [unlocked, setUnlockedState] = useState(false);
  const [activeTab, setActiveTab] = useState("cardapios");

  useEffect(() => {
    setUnlockedState(isVipUnlocked());
  }, []);

  if (!unlocked) {
    return (
      <>
        <Helmet><title>Modelos Prontos VIP | Mexi Food XP</title></Helmet>
        <main className="px-4 pt-8 pb-32 lg:pb-12 text-center">
          <Lock size={48} className="mx-auto text-muted-foreground mb-4" />
          <h1 className="font-display text-2xl font-bold text-foreground">Modelos Prontos VIP</h1>
          <p className="text-muted-foreground text-sm mt-2 max-w-md mx-auto">Cardápios, combos, kits e campanhas prontos para usar. Exclusivo para membros VIP.</p>
          <Button onClick={() => navigate("/queroservip")} className="mt-6">
            <Crown size={18} /> Quero ser VIP
          </Button>
        </main>
      </>
    );
  }

  const activeCategory = modelCategories.find(c => c.id === activeTab);

  return (
    <>
      <Helmet>
        <title>Modelos Prontos VIP | Mexi Food XP</title>
        <meta name="description" content="Modelos prontos VIP: cardápios editáveis, delivery, food truck, dark kitchen, combos, kits e campanhas sazonais." />
      </Helmet>
      <main className="px-4 pt-6 pb-32 lg:pb-12 max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => navigate("/vip")} className="text-muted-foreground hover:text-foreground"><ArrowLeft size={20} /></button>
          <div>
            <h1 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
              <Crown size={22} className="text-yellow-500" /> Modelos Prontos
            </h1>
            <p className="text-xs text-muted-foreground">Cardápios, combos e campanhas editáveis</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-3 mb-4">
          {modelCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                activeTab === cat.id ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Models */}
        <div className="space-y-3">
          {activeCategory?.models.map(modelo => (
            <ModeloCard key={modelo.id} modelo={modelo} />
          ))}
        </div>
      </main>
    </>
  );
}
