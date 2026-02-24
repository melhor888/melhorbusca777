import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, Sparkles, Zap, UtensilsCrossed } from "lucide-react";
import { dishes } from "@/data/dishes";
import { getDishImage } from "@/data/dishImages";
import { useXP } from "@/hooks/useXP";
import XPToast from "@/components/XPToast";
import QuizHeroBanner from "@/components/QuizHeroBanner";

const XP_QUIZ = 25;

interface Question {
  question: string;
  options: { label: string; tags: string[] }[];
}

const questions: Question[] = [
  {
    question: "Qual sabor te atrai mais na culinária mexicana?",
    options: [
      { label: "🌶️ Picante e ousado", tags: ["picante", "intenso"] },
      { label: "🥑 Fresco e suave (guacamole)", tags: ["fresco", "suave"] },
      { label: "🧀 Rico e cremoso (queijo, crema)", tags: ["cremoso", "rico"] },
      { label: "🍮 Doce e reconfortante", tags: ["doce", "sobremesa"] },
    ],
  },
  {
    question: "Qual situação combina mais com você agora?",
    options: [
      { label: "🎉 Festa mexicana com amigos", tags: ["festa", "casual"] },
      { label: "🍽️ Jantar especial e elaborado", tags: ["especial", "elaborado"] },
      { label: "🌮 Comida de rua rápida e deliciosa", tags: ["street", "rapido"] },
      { label: "🫕 Algo quente e reconfortante", tags: ["reconfortante", "sopa"] },
    ],
  },
  {
    question: "Qual ingrediente principal te chama mais atenção?",
    options: [
      { label: "🥩 Carne (boi, porco, carnitas)", tags: ["carne", "porco"] },
      { label: "🍗 Frango ou peru", tags: ["frango", "ave"] },
      { label: "🦐 Frutos do mar e peixes", tags: ["marisco", "peixe"] },
      { label: "🌽 Milho, feijão e vegetais", tags: ["vegetal", "milho"] },
    ],
  },
  {
    question: "Qual nível de preparo você busca?",
    options: [
      { label: "👌 Fácil — quero algo simples", tags: ["facil"] },
      { label: "🎯 Médio — aceito um desafio", tags: ["medio"] },
      { label: "🔥 Avançado — quero impressionar!", tags: ["avancado"] },
      { label: "🤷 Tanto faz, surpreenda-me!", tags: ["qualquer"] },
    ],
  },
  {
    question: "Qual estilo de prato mexicano te fascina?",
    options: [
      { label: "🌮 Tacos e Burritos", tags: ["taco", "street"] },
      { label: "🫔 Tamales e Enchiladas", tags: ["tamale", "tradicional"] },
      { label: "🫕 Pozole, Birria e Sopas", tags: ["sopa", "reconfortante"] },
      { label: "🌶️ Mole e Molhos Complexos", tags: ["mole", "elaborado"] },
    ],
  },
];

const tagToDishScore: Record<string, (d: typeof dishes[0]) => number> = {
  picante: (d) => (d.ingredients.some((i) => /pimenta|jalapeño|chipotle|habanero|chili/i.test(i)) ? 3 : 0),
  intenso: (d) => (d.category === "Carnes & Guisados" ? 3 : 0),
  fresco: (d) => (d.ingredients.some((i) => /abacate|guacamole|coentro|limão/i.test(i)) ? 3 : 0),
  suave: (d) => (d.difficulty === "Fácil" ? 2 : 0),
  cremoso: (d) => (d.ingredients.some((i) => /queijo|crema|creme/i.test(i)) ? 3 : 0),
  rico: (d) => (d.category === "Carnes & Guisados" ? 2 : 0),
  doce: (d) => (d.category === "Sobremesas" ? 5 : 0),
  sobremesa: (d) => (d.category === "Sobremesas" ? 5 : 0),
  festa: (d) => (d.category === "Antojitos" || d.category === "Tacos" ? 3 : 0),
  casual: (d) => (d.category === "Tacos" || d.category === "Antojitos" ? 3 : 0),
  especial: (d) => (d.difficulty === "Avançado" || d.difficulty === "Médio" ? 2 : 0),
  elaborado: (d) => (d.difficulty === "Avançado" ? 3 : 0),
  street: (d) => (d.category === "Tacos" || d.category === "Antojitos" ? 5 : 0),
  rapido: (d) => (d.time && parseInt(d.time) <= 30 ? 3 : 0),
  reconfortante: (d) => (d.category === "Sopas & Caldos" ? 5 : 0),
  sopa: (d) => (d.category === "Sopas & Caldos" ? 5 : 0),
  carne: (d) => (d.ingredients.some((i) => /carne|boi|porco|carnitas|res/i.test(i)) ? 3 : 0),
  porco: (d) => (d.ingredients.some((i) => /porco|carnitas|cochinita/i.test(i)) ? 4 : 0),
  frango: (d) => (d.ingredients.some((i) => /frango|pollo/i.test(i)) ? 4 : 0),
  ave: (d) => (d.ingredients.some((i) => /frango|peru|pollo/i.test(i)) ? 3 : 0),
  marisco: (d) => (d.category === "Mariscos" ? 5 : 0),
  peixe: (d) => (d.ingredients.some((i) => /peixe|camarão|tilápia/i.test(i)) ? 3 : 0),
  vegetal: (d) => (d.ingredients.some((i) => /feijão|milho|abóbora|vegetais/i.test(i)) ? 3 : 0),
  milho: (d) => (d.ingredients.some((i) => /milho|tortilla/i.test(i)) ? 3 : 0),
  taco: (d) => (d.category === "Tacos" ? 5 : 0),
  tamale: (d) => (d.category === "Tamales & Massas" ? 5 : 0),
  tradicional: (d) => (d.category === "Tamales & Massas" || d.category === "Carnes & Guisados" ? 3 : 0),
  mole: (d) => (d.name.toLowerCase().includes("mole") ? 5 : d.category === "Molhos & Salsas" ? 3 : 0),
  facil: (d) => (d.difficulty === "Fácil" ? 3 : 0),
  medio: (d) => (d.difficulty === "Médio" ? 3 : 0),
  avancado: (d) => (d.difficulty === "Avançado" ? 3 : 0),
  qualquer: () => 1,
};

function getRecommendations(tags: string[]): typeof dishes {
  const scored = dishes.map((d) => {
    let score = 0;
    for (const tag of tags) {
      const fn = tagToDishScore[tag];
      if (fn) score += fn(d);
    }
    return { dish: d, score };
  });
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 5).map((s) => s.dish);
}

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[][]>([]);
  const [results, setResults] = useState<typeof dishes | null>(null);
  const [showXP, setShowXP] = useState(false);
  const { addRecipeXP } = useXP();
  const navigate = useNavigate();

  const handleAnswer = (tags: string[]) => {
    const newAnswers = [...answers, tags];
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      const allTags = newAnswers.flat();
      setResults(getRecommendations(allTags));
      const quizDone = localStorage.getItem("cq-quiz-done");
      if (!quizDone) {
        localStorage.setItem("cq-quiz-done", "true");
        setShowXP(true);
      }
    }
  };

  const restart = () => {
    setStep(0);
    setAnswers([]);
    setResults(null);
  };

  const q = questions[step];

  return (
    <div className="min-h-screen pb-24">
      <Helmet>
        <title>Quiz - Qual prato mexicano combina com você? | Receitas MexicanasXP</title>
        <meta name="description" content="Descubra qual prato da culinária mexicana combina com seu paladar neste quiz interativo." />
      </Helmet>
      <XPToast xp={XP_QUIZ} show={showXP} onClose={() => setShowXP(false)} />

      <div className="sticky top-0 z-40 glass-card border-b border-border/50 px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
          <ArrowLeft size={18} className="text-foreground" />
        </button>
        <h1 className="font-display font-bold text-foreground text-lg">Quiz Gastronômico 🌮</h1>
      </div>

      <QuizHeroBanner />

      {!results ? (
        <div className="px-6 pt-8 max-w-lg mx-auto">
          <div className="flex gap-1.5 mb-8">
            {questions.map((_, i) => (
              <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${i <= step ? "bg-primary" : "bg-secondary"}`} />
            ))}
          </div>

          <div className="animate-fade-in" key={step}>
            <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">
              Pergunta {step + 1} de {questions.length}
            </p>
            <h2 className="text-2xl font-display font-bold text-foreground mb-8">{q.question}</h2>

            <div className="space-y-3">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt.tags)}
                  className="w-full text-left px-5 py-4 rounded-xl bg-secondary hover:bg-secondary/80 border border-border/50 hover:border-primary/50 transition-all text-foreground font-medium flex items-center justify-between group"
                >
                  <span>{opt.label}</span>
                  <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="px-6 pt-8 max-w-lg mx-auto animate-fade-in">
          <div className="text-center mb-8">
            <Sparkles className="mx-auto text-primary mb-3" size={40} />
            <h2 className="text-2xl font-display font-bold text-foreground mb-2">
              Seus Pratos Ideais! 🇲🇽
            </h2>
            <p className="text-muted-foreground text-sm">
              Baseado nas suas preferências, esses pratos mexicanos combinam com você:
            </p>
            {showXP && (
              <div className="mt-3 inline-flex items-center gap-1.5 bg-primary/20 text-primary rounded-full px-4 py-1.5">
                <Zap size={14} />
                <span className="text-xs font-bold">+{XP_QUIZ} XP pelo Quiz!</span>
              </div>
            )}
          </div>

          <div className="space-y-3">
            {results.map((dish, i) => (
              <button
                key={dish.id}
                onClick={() => navigate(`/recipe/${dish.id}`)}
                className="w-full flex items-center gap-4 p-3 rounded-xl bg-card hover:bg-card/80 border border-border/50 hover:border-primary/30 transition-all animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={getDishImage(dish.image)} alt={dish.name} className="w-full h-full object-cover" />
                  <div className="absolute top-1 left-1 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                </div>
                <div className="text-left flex-1">
                  <h3 className="font-display font-bold text-foreground">{dish.name}</h3>
                  <p className="text-xs text-muted-foreground">{dish.category} · {dish.difficulty}</p>
                </div>
                <ArrowRight size={16} className="text-muted-foreground" />
              </button>
            ))}
          </div>

          <button
            onClick={restart}
            className="w-full mt-6 py-3 rounded-xl border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all text-sm font-medium"
          >
            Refazer Quiz
          </button>
        </div>
      )}
    </div>
  );
}
