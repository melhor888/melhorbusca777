import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight, Sparkles, Zap, UtensilsCrossed } from "lucide-react";
import { dishes } from "@/data/dishes";
import { getDishImage } from "@/data/dishImages";
import { getTranslatedDish } from "@/data/translations";
import { useXP } from "@/hooks/useXP";
import XPToast from "@/components/XPToast";
import QuizHeroBanner from "@/components/QuizHeroBanner";

const XP_QUIZ = 25;

interface QuizOption {
  label: string;
  tags: string[];
}

interface Question {
  question: string;
  options: QuizOption[];
}

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
  const { t } = useTranslation();

  const questions: Question[] = [
    {
      question: t("quiz.q1"),
      options: [
        { label: t("quiz.q1o1"), tags: ["picante", "intenso"] },
        { label: t("quiz.q1o2"), tags: ["fresco", "suave"] },
        { label: t("quiz.q1o3"), tags: ["cremoso", "rico"] },
        { label: t("quiz.q1o4"), tags: ["doce", "sobremesa"] },
      ],
    },
    {
      question: t("quiz.q2"),
      options: [
        { label: t("quiz.q2o1"), tags: ["festa", "casual"] },
        { label: t("quiz.q2o2"), tags: ["especial", "elaborado"] },
        { label: t("quiz.q2o3"), tags: ["street", "rapido"] },
        { label: t("quiz.q2o4"), tags: ["reconfortante", "sopa"] },
      ],
    },
    {
      question: t("quiz.q3"),
      options: [
        { label: t("quiz.q3o1"), tags: ["carne", "porco"] },
        { label: t("quiz.q3o2"), tags: ["frango", "ave"] },
        { label: t("quiz.q3o3"), tags: ["marisco", "peixe"] },
        { label: t("quiz.q3o4"), tags: ["vegetal", "milho"] },
      ],
    },
    {
      question: t("quiz.q4"),
      options: [
        { label: t("quiz.q4o1"), tags: ["facil"] },
        { label: t("quiz.q4o2"), tags: ["medio"] },
        { label: t("quiz.q4o3"), tags: ["avancado"] },
        { label: t("quiz.q4o4"), tags: ["qualquer"] },
      ],
    },
    {
      question: t("quiz.q5"),
      options: [
        { label: t("quiz.q5o1"), tags: ["taco", "street"] },
        { label: t("quiz.q5o2"), tags: ["tamale", "tradicional"] },
        { label: t("quiz.q5o3"), tags: ["sopa", "reconfortante"] },
        { label: t("quiz.q5o4"), tags: ["mole", "elaborado"] },
      ],
    },
  ];

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
        <title>{t("quiz.title")} | Receitas MexicanasXP</title>
      </Helmet>
      <XPToast xp={XP_QUIZ} show={showXP} onClose={() => setShowXP(false)} message={t("xp.quizCompleted")} />

      <div className="sticky top-0 z-40 glass-card border-b border-border/50 px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
          <ArrowLeft size={18} className="text-foreground" />
        </button>
        <h1 className="font-display font-bold text-foreground text-lg">{t("quiz.title")}</h1>
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
              {t("quiz.questionOf", { current: step + 1, total: questions.length })}
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
              {t("quiz.yourIdealDishes")}
            </h2>
            <p className="text-muted-foreground text-sm">
              {t("quiz.basedOnPreferences")}
            </p>
            {showXP && (
              <div className="mt-3 inline-flex items-center gap-1.5 bg-primary/20 text-primary rounded-full px-4 py-1.5">
                <Zap size={14} />
                <span className="text-xs font-bold">{t("quiz.xpFromQuiz", { xp: XP_QUIZ })}</span>
              </div>
            )}
          </div>

          <div className="space-y-3">
            {results.map((rawDish, i) => {
              const dish = getTranslatedDish(rawDish);
              return (
                <button
                  key={dish.id}
                  onClick={() => navigate(`/recipe/${dish.id}`)}
                  className="w-full flex items-center gap-4 p-3 rounded-xl bg-card hover:bg-card/80 border border-border/50 hover:border-primary/30 transition-all animate-fade-in"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={getDishImage(rawDish.image)} alt={dish.name} className="w-full h-full object-cover" />
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
              );
            })}
          </div>

          <button
            onClick={restart}
            className="w-full mt-6 py-3 rounded-xl border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all text-sm font-medium"
          >
            {t("quiz.retake")}
          </button>
        </div>
      )}
    </div>
  );
}