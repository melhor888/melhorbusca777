import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, Wine, Sparkles, Zap } from "lucide-react";
import { drinks } from "@/data/drinks";
import { getDrinkImage } from "@/data/drinkImages";
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
    question: "Qual sabor te atrai mais?",
    options: [
      { label: "🍋 Cítrico e refrescante", tags: ["citrico", "refrescante"] },
      { label: "🍫 Doce e cremoso", tags: ["doce", "cremoso"] },
      { label: "🌶️ Forte e marcante", tags: ["forte", "amargo"] },
      { label: "🍓 Frutado e tropical", tags: ["frutado", "tropical"] },
    ],
  },
  {
    question: "Qual a sua vibe agora?",
    options: [
      { label: "🏖️ Relaxando na praia", tags: ["tropical", "refrescante"] },
      { label: "🎉 Festa com amigos", tags: ["forte", "shots"] },
      { label: "🕯️ Noite romântica", tags: ["classico", "elegante"] },
      { label: "☕ Momento aconchegante", tags: ["cafe", "cremoso"] },
    ],
  },
  {
    question: "Qual destilado você prefere?",
    options: [
      { label: "🍸 Vodka", tags: ["vodka"] },
      { label: "🥃 Whisky", tags: ["whisky"] },
      { label: "🌿 Gin", tags: ["gin"] },
      { label: "🌵 Tequila / Rum", tags: ["tequila", "rum"] },
    ],
  },
  {
    question: "Nível de doçura?",
    options: [
      { label: "🍬 Bem doce", tags: ["doce", "frutado"] },
      { label: "⚖️ Equilibrado", tags: ["classico", "equilibrado"] },
      { label: "🥂 Seco e elegante", tags: ["seco", "elegante"] },
      { label: "🚫 Sem álcool", tags: ["sem-alcool"] },
    ],
  },
  {
    question: "Complexidade do drink?",
    options: [
      { label: "👌 Fácil e rápido", tags: ["facil"] },
      { label: "🎯 Desafiador", tags: ["medio"] },
      { label: "🔥 Avançado, quero impressionar!", tags: ["avancado"] },
      { label: "🤷 Tanto faz!", tags: ["qualquer"] },
    ],
  },
];

const tagToDrinkScore: Record<string, (d: typeof drinks[0]) => number> = {
  citrico: (d) => (d.ingredients.some((i) => /lim[aã]o|laranja|grapefruit/i.test(i)) ? 3 : 0),
  refrescante: (d) => (d.ingredients.some((i) => /água com gás|ginger|hortelã|tônica/i.test(i)) ? 3 : 0),
  doce: (d) => (d.ingredients.some((i) => /xarope|açúcar|licor|grenadine|creme de coco/i.test(i)) ? 3 : 0),
  cremoso: (d) => (d.ingredients.some((i) => /creme|leite|baileys|licor de café/i.test(i)) ? 3 : 0),
  forte: (d) => (d.difficulty === "Avançado" || d.ingredients.length >= 5 ? 2 : 0),
  amargo: (d) => (d.ingredients.some((i) => /angostura|campari|fernet|amaro/i.test(i)) ? 3 : 0),
  frutado: (d) => (d.ingredients.some((i) => /suco|abacaxi|maracujá|cranberry|morango|manga/i.test(i)) ? 3 : 0),
  tropical: (d) => (d.category === "Drinks Tropicais" ? 5 : d.ingredients.some((i) => /coco|abacaxi|maracujá/i.test(i)) ? 2 : 0),
  vodka: (d) => (d.category === "Vodka" ? 5 : 0),
  whisky: (d) => (d.category === "Whisky" ? 5 : 0),
  gin: (d) => (d.category === "Gin" ? 5 : 0),
  tequila: (d) => (d.category === "Tequila" ? 5 : 0),
  rum: (d) => (d.category === "Rum / Bacardi" ? 5 : 0),
  classico: (d) => (d.category === "Coquetéis Clássicos" ? 4 : 0),
  elegante: (d) => (d.category === "Champagne & Espumantes" || d.category === "Coquetéis Clássicos" ? 3 : 0),
  cafe: (d) => (d.category === "Café & Licores" ? 5 : d.ingredients.some((i) => /café|espresso|kahlúa/i.test(i)) ? 3 : 0),
  seco: (d) => (d.ingredients.some((i) => /vermute seco|champagne|prosecco/i.test(i)) ? 3 : 0),
  "sem-alcool": (d) => (d.category === "Não Alcoólicos" ? 10 : 0),
  facil: (d) => (d.difficulty === "Fácil" ? 3 : 0),
  medio: (d) => (d.difficulty === "Médio" ? 3 : 0),
  avancado: (d) => (d.difficulty === "Avançado" ? 3 : 0),
  shots: (d) => (d.category === "Shots e Rápidos" ? 5 : 0),
  qualquer: () => 1,
  equilibrado: () => 1,
};

function getRecommendations(tags: string[]): typeof drinks {
  const scored = drinks.map((d) => {
    let score = 0;
    for (const tag of tags) {
      const fn = tagToDrinkScore[tag];
      if (fn) score += fn(d);
    }
    return { drink: d, score };
  });
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 5).map((s) => s.drink);
}

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[][]>([]);
  const [results, setResults] = useState<typeof drinks | null>(null);
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
      // Grant quiz XP
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
        <title>Quiz - Qual drink combina com você? | Cachaça Quest</title>
      </Helmet>
      <XPToast xp={XP_QUIZ} show={showXP} onClose={() => setShowXP(false)} />

      {/* Header */}
      <div className="sticky top-0 z-40 glass-card border-b border-border/50 px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
          <ArrowLeft size={18} className="text-foreground" />
        </button>
        <h1 className="font-display font-bold text-foreground text-lg">Quiz de Drinks</h1>
      </div>

      {/* Hero Banner Netflix-style */}
      <QuizHeroBanner />

      {!results ? (
        <div className="px-6 pt-8 max-w-lg mx-auto">
          {/* Progress */}
          <div className="flex gap-1.5 mb-8">
            {questions.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-full transition-colors ${
                  i <= step ? "bg-primary" : "bg-secondary"
                }`}
              />
            ))}
          </div>

          <div className="animate-fade-in" key={step}>
            <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">
              Pergunta {step + 1} de {questions.length}
            </p>
            <h2 className="text-2xl font-display font-bold text-foreground mb-8">
              {q.question}
            </h2>

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
              Seus Drinks Perfeitos!
            </h2>
            <p className="text-muted-foreground text-sm">
              Baseado nas suas preferências, esses drinks combinam com você:
            </p>
            {showXP && (
              <div className="mt-3 inline-flex items-center gap-1.5 bg-primary/20 text-primary rounded-full px-4 py-1.5">
                <Zap size={14} />
                <span className="text-xs font-bold">+{XP_QUIZ} XP pelo Quiz!</span>
              </div>
            )}
          </div>

          <div className="space-y-3">
            {results.map((drink, i) => (
              <button
                key={drink.id}
                onClick={() => navigate(`/recipe/${drink.id}`)}
                className="w-full flex items-center gap-4 p-3 rounded-xl bg-card hover:bg-card/80 border border-border/50 hover:border-primary/30 transition-all animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={getDrinkImage(drink.image)} alt={drink.name} className="w-full h-full object-cover" />
                  <div className="absolute top-1 left-1 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                </div>
                <div className="text-left flex-1">
                  <h3 className="font-display font-bold text-foreground">{drink.name}</h3>
                  <p className="text-xs text-muted-foreground">{drink.category} · {drink.difficulty}</p>
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
