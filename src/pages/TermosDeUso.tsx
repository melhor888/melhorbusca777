import { Helmet } from "react-helmet-async";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function TermosDeUso() {
  return (
    <>
      <Helmet>
        <title>Termos de Uso - Mexi Food XP</title>
        <meta name="description" content="Termos de Uso do Mexi Food XP. Condições de utilização do site, direitos e responsabilidades dos usuários." />
        <link rel="canonical" href="https://receitasmexicanas.lovable.app/termos" />
      </Helmet>
      <div className="min-h-screen pb-20">
        <div className="px-4 pt-16 max-w-2xl mx-auto">
          <Breadcrumbs items={[{ label: "Termos de Uso" }]} />
          <h1 className="text-3xl font-display font-bold text-foreground mt-4 mb-6">Termos de Uso</h1>
          <p className="text-xs text-muted-foreground mb-6">Última atualização: 24 de fevereiro de 2026</p>

          <div className="space-y-6 text-secondary-foreground leading-relaxed text-sm">
            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">1. Aceitação dos Termos</h2>
              <p>Ao acessar e utilizar o site Mexi Food XP ("Site"), você concorda com estes Termos de Uso.</p>
            </section>
            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">2. Descrição do Serviço</h2>
              <p>O Mexi Food XP é uma plataforma online que oferece receitas de comida mexicana, artigos educacionais sobre culinária e cultura mexicana, dicas de chefs profissionais e conteúdo relacionado ao universo da gastronomia do México.</p>
            </section>
            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">3. Propriedade Intelectual</h2>
              <p>Todo o conteúdo do Site é protegido por direitos autorais e pertence ao Mexi Food XP ou é utilizado com autorização.</p>
            </section>
            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">4. Segurança Alimentar</h2>
              <p>As receitas e informações são fornecidas "como estão", sem garantias. O Mexi Food XP não se responsabiliza por reações alérgicas ou adversas. Sempre verifique os ingredientes.</p>
            </section>
            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">5. Contato</h2>
              <p>Dúvidas: <strong>contato@mexifoodxp.com.br</strong></p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}