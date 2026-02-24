import { Helmet } from "react-helmet-async";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PoliticaPrivacidade() {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade - Receitas MexicanasXP</title>
        <meta name="description" content="Política de Privacidade do Receitas MexicanasXP. Saiba como coletamos, usamos e protegemos seus dados pessoais conforme LGPD e GDPR." />
        <link rel="canonical" href="https://receitasmexicanas.lovable.app/privacidade" />
      </Helmet>
      <div className="min-h-screen pb-20">
        <div className="px-4 pt-16 max-w-2xl mx-auto">
          <Breadcrumbs items={[{ label: "Política de Privacidade" }]} />
          <h1 className="text-3xl font-display font-bold text-foreground mt-4 mb-6">Política de Privacidade</h1>
          <p className="text-xs text-muted-foreground mb-6">Última atualização: 24 de fevereiro de 2026</p>

          <div className="space-y-6 text-secondary-foreground leading-relaxed text-sm">
            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">1. Introdução</h2>
              <p>O Receitas MexicanasXP ("nós", "nosso" ou "site") valoriza a privacidade dos seus usuários. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos, compartilhamos e protegemos suas informações pessoais quando você utiliza nosso site e serviços, em conformidade com a Lei Geral de Proteção de Dados (LGPD) e o Regulamento Geral sobre a Proteção de Dados (GDPR).</p>
            </section>
            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">2. Dados que Coletamos</h2>
              <p>Coletamos dados fornecidos por você (nome, e-mail, preferências) e dados automáticos (IP, navegador, páginas visitadas).</p>
            </section>
            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">3. Seus Direitos</h2>
              <p>Você possui direitos de acesso, correção, exclusão, portabilidade e revogação do consentimento. Para exercer, entre em contato: <strong>privacidade@receitasmexicanasxp.com.br</strong></p>
            </section>
            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">4. Contato</h2>
              <p>E-mail: privacidade@receitasmexicanasxp.com.br</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
