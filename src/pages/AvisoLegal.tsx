import { Helmet } from "react-helmet-async";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function AvisoLegal() {
  return (
    <>
      <Helmet>
        <title>Aviso Legal (Disclaimer) - Receitas MexicanasXP</title>
        <meta name="description" content="Aviso Legal do Receitas MexicanasXP. Informações sobre responsabilidade, conteúdo e limitações do site." />
        <link rel="canonical" href="https://receitasmexicanas.lovable.app/aviso-legal" />
      </Helmet>
      <div className="min-h-screen pb-20">
        <div className="px-4 pt-16 max-w-2xl mx-auto">
          <Breadcrumbs items={[{ label: "Aviso Legal" }]} />
          <h1 className="text-3xl font-display font-bold text-foreground mt-4 mb-6">Aviso Legal (Disclaimer)</h1>

          <div className="space-y-6 text-secondary-foreground leading-relaxed text-sm">
            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">1. Natureza do Conteúdo</h2>
              <p>O conteúdo disponibilizado no Receitas MexicanasXP, incluindo receitas de comida mexicana, artigos e dicas, tem caráter exclusivamente informativo e educacional.</p>
            </section>
            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">2. Segurança Alimentar</h2>
              <p>Recomendamos atenção especial ao preparar receitas que envolvam pimentas fortes, frituras em alta temperatura e uso de facas. Consulte um profissional de saúde em caso de alergias.</p>
            </section>
            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">3. Isenção de Responsabilidade</h2>
              <p>O Receitas MexicanasXP não se responsabiliza por resultados obtidos ao reproduzir as receitas, reações alérgicas, acidentes durante o preparo ou danos decorrentes do uso das informações.</p>
            </section>
            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">4. Alergias e Intolerâncias</h2>
              <p>Algumas receitas podem conter alérgenos como leite, ovos, trigo, amendoim, pimentas e frutos do mar. Sempre verifique os ingredientes.</p>
            </section>
            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">5. Contato</h2>
              <p>Para questões legais: <strong>contato@receitasmexicanasxp.com.br</strong></p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
