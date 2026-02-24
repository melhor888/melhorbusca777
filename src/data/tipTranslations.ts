import { MexicanTip, tipCategories } from "./bartenderTips";
import { tipTranslationsEN, TipTranslation } from "./tipTranslations-en";
import { autoTranslatePtToEs } from "./translations/index";
import i18n from "@/i18n/config";

/** Translated tip category labels */
const tipCategoryTranslations: Record<string, Record<string, string>> = {
  en: {
    tecnica: "Technique",
    apresentacao: "Presentation",
    harmonizacao: "Pairing",
    historia: "History",
  },
  es: {
    tecnica: "Técnica",
    apresentacao: "Presentación",
    harmonizacao: "Armonización",
    historia: "Historia",
  },
};

export function getTranslatedTipCategoryLabel(categoryKey: string): string {
  const lang = i18n.language;
  if (lang === "pt-BR" || lang.startsWith("pt")) {
    return tipCategories[categoryKey as keyof typeof tipCategories]?.label || categoryKey;
  }
  const langKey = lang.startsWith("es") ? "es" : "en";
  return tipCategoryTranslations[langKey]?.[categoryKey]
    || tipCategories[categoryKey as keyof typeof tipCategories]?.label
    || categoryKey;
}

/**
 * Returns a translated version of a tip.
 * - For EN: uses manual translations
 * - For ES: auto-translates from Portuguese
 * - For pt-BR: returns original
 */
export function getTranslatedTip(tip: MexicanTip): MexicanTip {
  const lang = i18n.language;

  if (lang === "pt-BR" || lang.startsWith("pt")) return tip;

  const langKey = lang.startsWith("es") ? "es" : "en";

  if (langKey === "en") {
    const t = tipTranslationsEN[tip.id];
    if (t) {
      return {
        ...tip,
        title: t.title,
        subtitle: t.subtitle,
        content: t.content.map((c, i) => ({
          ...tip.content[i],
          heading: c.heading,
          text: c.text,
        })),
      };
    }
    return tip;
  }

  // ES: auto-translate from Portuguese
  return {
    ...tip,
    title: autoTranslatePtToEs(tip.title),
    subtitle: autoTranslatePtToEs(tip.subtitle),
    content: tip.content.map((c) => ({
      ...c,
      heading: c.heading ? autoTranslatePtToEs(c.heading) : undefined,
      text: autoTranslatePtToEs(c.text),
    })),
  };
}

/** Helper for UI strings on the Tips page */
export function getTipsUIStrings() {
  const lang = i18n.language;
  if (lang === "pt-BR" || lang.startsWith("pt")) {
    return {
      pageTitle: "Escola Mexicana 🌮",
      level: "Nível",
      unlocked: "Desbloqueadas",
      read: "Lidas",
      locked: "Bloqueadas",
      readingProgress: "Progresso de Leitura",
      nextTipRequires: "Próxima dica requer",
      achievements: "Conquistas",
      unlockedTips: "📖 Dicas Desbloqueadas",
      toUnlock: "🔒 A Desbloquear",
      readLabel: "✓ Lido",
      requiresLevel: "Nível",
      unlockWith: "Desbloqueie com",
      requiresLevelFull: "Requer Nível",
      unlockedWith: "Desbloqueado com",
      tipNotFound: "Dica não encontrada.",
      schoolLabel: "Escola Mexicana",
    };
  }
  const langKey = lang.startsWith("es") ? "es" : "en";
  if (langKey === "es") {
    return {
      pageTitle: "Escuela Mexicana 🌮",
      level: "Nivel",
      unlocked: "Desbloqueadas",
      read: "Leídas",
      locked: "Bloqueadas",
      readingProgress: "Progreso de Lectura",
      nextTipRequires: "Próximo tip requiere",
      achievements: "Logros",
      unlockedTips: "📖 Tips Desbloqueados",
      toUnlock: "🔒 Por Desbloquear",
      readLabel: "✓ Leído",
      requiresLevel: "Nivel",
      unlockWith: "Desbloquea con",
      requiresLevelFull: "Requiere Nivel",
      unlockedWith: "Desbloqueado con",
      tipNotFound: "Tip no encontrado.",
      schoolLabel: "Escuela Mexicana",
    };
  }
  return {
    pageTitle: "Mexican School 🌮",
    level: "Level",
    unlocked: "Unlocked",
    read: "Read",
    locked: "Locked",
    readingProgress: "Reading Progress",
    nextTipRequires: "Next tip requires",
    achievements: "Achievements",
    unlockedTips: "📖 Unlocked Tips",
    toUnlock: "🔒 To Unlock",
    readLabel: "✓ Read",
    requiresLevel: "Level",
    unlockWith: "Unlock with",
    requiresLevelFull: "Requires Level",
    unlockedWith: "Unlocked with",
    tipNotFound: "Tip not found.",
    schoolLabel: "Mexican School",
  };
}
