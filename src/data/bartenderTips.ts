export interface JapaneseTip {
  id: string;
  title: string;
  subtitle: string;
  category: "tecnica" | "apresentacao" | "harmonizacao" | "historia";
  requiredXP: number;
  icon: string;
  themeTag?: string;
  content: JapaneseTipSection[];
}

export interface JapaneseTipSection {
  heading?: string;
  text: string;
  highlight?: boolean;
}

export const tipCategories = {
  tecnica: { label: "Técnicas", color: "primary" },
  apresentacao: { label: "Apresentação", color: "accent" },
  harmonizacao: { label: "Harmonização", color: "gold" },
  historia: { label: "História", color: "wine" },
};

export type BartenderTip = JapaneseTip;

export function getTipById(id: string): JapaneseTip | undefined {
  return bartenderTips.find((t) => t.id === id);
}

export const bartenderTips: JapaneseTip[] = [
  {
    id: "arroz-perfeito",
    title: "Como Fazer Arroz Japonês Perfeito",
    subtitle: "A base de toda a culinária japonesa começa pelo arroz",
    category: "tecnica",
    requiredXP: 0,
    icon: "🍚",
    content: [
      { text: "O arroz é o coração da culinária japonesa. Um arroz mal feito arruina qualquer prato, desde sushi até um simples onigiri." },
      { heading: "Lavar é Obrigatório", text: "Lave o arroz 4-5 vezes até a água sair quase transparente. Isso remove o amido excessivo que torna o arroz grudento e pegajoso demais." },
      { heading: "Proporção de Água", text: "Para arroz japonês: 1 xícara de arroz = 1.1 xícaras de água. Levemente mais água que arroz. Deixe de molho por 30 min antes de cozinhar.", highlight: true },
      { heading: "Descanso Pós-Cozimento", text: "Após cozinhar, desligue o fogo e NÃO abra a tampa por 10 minutos. O vapor finaliza o cozimento uniformemente." },
      { text: "💡 Para sushi: tempere com vinagre de arroz (3 col.), açúcar (1 col.) e sal (1/2 col.) enquanto o arroz está quente. Misture com movimentos de corte, nunca amassar." },
    ],
  },
  {
    id: "corte-sashimi",
    title: "Técnicas de Corte para Sashimi",
    subtitle: "Cada peixe exige um corte diferente",
    category: "tecnica",
    requiredXP: 0,
    icon: "🔪",
    content: [
      { text: "Na culinária japonesa, o corte é uma arte. A forma como o peixe é fatiado afeta sabor, textura e apresentação." },
      { heading: "Hira-zukuri (Corte Reto)", text: "O corte mais comum. Fatias de 5-7mm, perpendiculares à fibra do peixe. Ideal para salmão e atum. Puxe a faca em um único movimento, sem serrar." },
      { heading: "Sogi-zukuri (Corte Diagonal)", text: "Corte na diagonal, resultando em fatias mais largas e finas. Perfeito para peixes brancos como pargo e robalo. A inclinação de 45° é ideal.", highlight: true },
      { heading: "Usu-zukuri (Corte Finíssimo)", text: "Fatias translúcidas de 1-2mm. Usado para fugu (baiacu) e peixes de carne firme. Requer faca extremamente afiada e mão firme." },
      { text: "💡 Use uma faca yanagiba (lâmina longa e fina) — a faca específica para sashimi. Molhe a lâmina entre os cortes para evitar que o peixe grude." },
    ],
  },
  {
    id: "tipos-shoyu",
    title: "Guia dos Tipos de Shoyu",
    subtitle: "Nem todo molho de soja é igual",
    category: "harmonizacao",
    requiredXP: 0,
    icon: "🫘",
    content: [
      { text: "O shoyu (molho de soja) é o tempero mais importante da culinária japonesa. Existem 5 tipos principais, cada um com uso específico." },
      { heading: "Koikuchi (Escuro)", text: "O mais comum (80% do consumo). Sabor intenso e equilibrado. Usado para cozinhar, marinar e como molho de mesa. É o shoyu 'padrão'." },
      { heading: "Usukuchi (Claro)", text: "Mais salgado que o escuro, mas com cor clara. Usado em pratos onde não se quer escurecer os ingredientes, como sopas e nimono (cozidos).", highlight: true },
      { heading: "Tamari", text: "Feito quase sem trigo — ideal para celíacos. Sabor mais rico e profundo. Perfeito para sashimi e como molho de imersão." },
      { heading: "Shiro (Branco)", text: "Feito principalmente de trigo. Cor dourada clara, sabor delicado e levemente adocicado. Usado em pratos refinados." },
      { text: "💡 Shoyu artesanal fermentado naturalmente por 1-2 anos é incomparavelmente superior ao industrial feito em semanas." },
    ],
  },
  {
    id: "dashi-fundamento",
    title: "Dashi: O Fundamento do Sabor Japonês",
    subtitle: "O caldo base que define toda a culinária",
    category: "tecnica",
    requiredXP: 0,
    icon: "🍲",
    content: [
      { text: "Dashi é o caldo fundamental japonês. Sem dashi, não existe culinária japonesa. É a essência do umami." },
      { heading: "Kombu Dashi", text: "Mergulhe uma tira de kombu (alga) em água fria por 30 min. Aqueça lentamente e retire ANTES de ferver. Fervura torna o caldo amargo e viscoso." },
      { heading: "Katsuobushi Dashi", text: "Após retirar o kombu, leve à fervura e adicione bonito flakes (katsuobushi). Desligue o fogo e espere 30 segundos. Coe imediatamente.", highlight: true },
      { heading: "Iriko Dashi", text: "Feito com sardinhas secas. Sabor mais forte e terroso. Base perfeita para missoshiru e udon de Sanuki." },
      { text: "💡 Dashi granulado (hon-dashi) é prático para o dia a dia, mas dashi fresco é infinitamente superior. A diferença é como caldo de carne caseiro vs. cubo." },
    ],
  },
  {
    id: "etiqueta-mesa",
    title: "Etiqueta Japonesa à Mesa",
    subtitle: "Regras essenciais para comer como os japoneses",
    category: "historia",
    requiredXP: 10,
    icon: "🥢",
    content: [
      { text: "A etiqueta à mesa no Japão é levada a sério. Conhecer as regras mostra respeito pela cultura e impressiona seus anfitriões." },
      { heading: "Itadakimasu", text: "Antes de comer, diga 'Itadakimasu' (いただきます) — significa 'recebo humildemente'. Após a refeição: 'Gochisousama deshita' (ごちそうさまでした) — 'foi um banquete'." },
      { heading: "Hashis (Pauzinhos)", text: "NUNCA espete comida com os hashis. NUNCA passe comida de hashi para hashi (ritual funerário). NUNCA fique os hashis em pé no arroz (lembra incenso funerário).", highlight: true },
      { heading: "Sopa", text: "Beba o caldo direto da tigela. Não use colher para missoshiru. Segure a tigela com as duas mãos." },
      { heading: "Barulho ao Comer", text: "Fazer barulho ao comer macarrão (ramen, udon, soba) é ESPERADO e educado. Significa que está apreciando a comida." },
      { text: "💡 Gorjeta NÃO existe no Japão e pode ser considerada ofensiva. O bom serviço é parte da cultura." },
    ],
  },
  {
    id: "wasabi-verdadeiro",
    title: "Wasabi Verdadeiro vs Industrial",
    subtitle: "95% do wasabi no mundo é falso",
    category: "harmonizacao",
    requiredXP: 10,
    icon: "🟢",
    content: [
      { text: "O wasabi que você come em 95% dos restaurantes NÃO é wasabi. É raiz-forte com corante verde." },
      { heading: "Wasabi Real", text: "Wasabia japonica cresce em córregos de montanha com água corrente fria. Leva 2 anos para maturar. É ralado na hora em um ralador de pele de tubarão (oroshi). Perde o sabor em 15 minutos." },
      { heading: "Wasabi Falso", text: "Feito de raiz-forte (horseradish), mostarda e corante verde. Tem ardor nasal agressivo mas sem complexidade. É o que vem em tubos e sachês.", highlight: true },
      { heading: "Como Identificar", text: "Wasabi real: cor verde-pastel, textura granulada, sabor complexo com notas herbáceas e doces. Falso: verde vibrante, textura cremosa lisa, ardor unidimensional." },
      { text: "💡 Wasabi real pode custar R$500-1000/kg. Em São Paulo e Rio, alguns restaurantes premium servem wasabi fresco ralado na mesa." },
    ],
  },
  {
    id: "historia-sushi",
    title: "A História do Sushi",
    subtitle: "De comida fermentada a arte gastronômica",
    category: "historia",
    requiredXP: 20,
    icon: "📖",
    content: [
      { text: "O sushi como conhecemos tem apenas 200 anos. Mas sua origem remonta a mais de 1.000 anos de evolução." },
      { heading: "Narezushi (Séc. IV)", text: "O ancestral do sushi era peixe fermentado em arroz por meses. O arroz era descartado — servia apenas como conservante. Originário do Sudeste Asiático, chegou ao Japão via China." },
      { heading: "Hayazushi (Séc. XVII)", text: "Os japoneses começaram a usar vinagre para acidificar o arroz, eliminando a fermentação longa. Pela primeira vez, o arroz era consumido junto com o peixe." },
      { heading: "Edomae Sushi (Séc. XIX)", text: "Hanaya Yohei, em Tóquio (então Edo), criou o nigiri-zushi: peixe fresco sobre arroz temperado. Fast food da era Edo — comido com as mãos nas barracas de rua.", highlight: true },
      { heading: "Sushi Moderno", text: "Após a 2ª Guerra, os vendedores de rua foram regulamentados e surgiram os restaurantes de sushi. O kaiten-sushi (esteira rolante) foi inventado em 1958 em Osaka." },
      { text: "💡 Jiro Ono, do documentário 'Jiro Dreams of Sushi', tem 3 estrelas Michelin e trabalha com sushi há mais de 70 anos. Seu restaurante tem apenas 10 lugares." },
    ],
  },
  {
    id: "fermentacao-japonesa",
    title: "Fermentação Japonesa",
    subtitle: "Missô, shoyu, sakê — tudo começa com koji",
    category: "tecnica",
    requiredXP: 20,
    icon: "🧫",
    content: [
      { text: "A fermentação é o coração do sabor japonês. Missô, shoyu, sakê, vinagre de arroz e mirin — todos dependem de um fungo: Aspergillus oryzae (koji)." },
      { heading: "Koji: O Fungo Nacional", text: "Koji é um mofo cultivado sobre arroz, soja ou cevada. Suas enzimas quebram proteínas e amidos, criando umami, doçura e complexidade. Foi declarado 'fungo nacional do Japão' em 2006.", highlight: true },
      { heading: "Missô", text: "Soja cozida + koji de arroz + sal, fermentado por meses a anos. Shiro (branco): 1-3 meses, suave. Aka (vermelho): 1-3 anos, intenso. Hatcho: 100% soja, 3 anos." },
      { heading: "Sakê", text: "Arroz polido + koji + levedura + água. O arroz é polido para remover a camada externa (proteínas e gorduras). Quanto mais polido, mais refinado o sakê. Daiginjo: 50%+ removido." },
      { text: "💡 Shio-koji (koji com sal) é o tempero secreto moderno — marine carnes por 24h para uma maciez e sabor incomparáveis." },
    ],
  },
  {
    id: "culinaria-kaiseki",
    title: "Culinária Kaiseki: A Alta Gastronomia Japonesa",
    subtitle: "A refeição mais sofisticada do mundo",
    category: "historia",
    requiredXP: 30,
    icon: "🎨",
    content: [
      { text: "Kaiseki é a forma mais elevada da culinária japonesa — uma sequência de pratos que celebra a estação, os ingredientes locais e a estética." },
      { heading: "Origem", text: "Nasceu da cerimônia do chá no séc. XVI. Originalmente, uma refeição leve servida antes do chá. Evoluiu para um formato de degustação de 7-14 pratos." },
      { heading: "Os Pratos", text: "Sakizuke (amuse-bouche) → Hassun (sazonais) → Mukōzuke (sashimi) → Takiawase (vegetais cozidos) → Yakimono (grelhado) → Gohan (arroz) → Mizumono (sobremesa).", highlight: true },
      { heading: "Filosofia", text: "Cada prato segue princípios de contraste: quente/frio, doce/salgado, crocante/macio. A louça é tão importante quanto a comida — cada prato usa cerâmica específica." },
      { text: "💡 Uma refeição kaiseki em Kyoto pode custar de ¥15.000 a ¥80.000 (R$500-2.700). Restaurantes como Kikunoi e Hyotei são patrimônio cultural vivo." },
    ],
  },
  {
    id: "algas-japonesas",
    title: "Guia das Algas Japonesas",
    subtitle: "Nori, kombu, wakame — cada uma com seu papel",
    category: "harmonizacao",
    requiredXP: 30,
    icon: "🌿",
    content: [
      { text: "As algas são indispensáveis na culinária japonesa. Cada tipo tem sabor, textura e uso específicos." },
      { heading: "Nori", text: "Alga fina e tostada usada para enrolar sushi, temaki e onigiri. Deve ser crocante — se está mole, está velho. Guarde em local seco e selado." },
      { heading: "Kombu", text: "Alga grossa e escura, base do dashi. Rica em ácido glutâmico (umami natural). Nunca lave o pó branco — é o glutamato! Apenas limpe com pano úmido.", highlight: true },
      { heading: "Wakame", text: "Alga macia usada em missoshiru e sunomono. Hidrate em água por 5 minutos — triplica de tamanho. Sabor delicado e textura agradável." },
      { heading: "Hijiki", text: "Alga preta filamentosa, cozida com shoyu e mirin. Rica em fibras e minerais. Comum em bentôs e pratos caseiros." },
      { text: "💡 Algas são superalimentos: ricas em iodo, cálcio, ferro e fibras. O Japão consome mais algas per capita que qualquer outro país." },
    ],
  },
];
