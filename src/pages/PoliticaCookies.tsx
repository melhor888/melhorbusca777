import { Helmet } from "react-helmet-async";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PoliticaCookies() {
  return (
    <>
      <Helmet>
        <title>Política de Cookies - Mexi Food XP</title>
        <meta name="description" content="Política de Cookies do Mexi Food XP. Saiba quais cookies utilizamos e como gerenciá-los." />
        <link rel="canonical" href="https://receitasmexicanas.lovable.app/cookies" />
      </Helmet>
      <div className="min-h-screen pb-20">
        <div className="px-4 pt-16 max-w-2xl mx-auto">
          <Breadcrumbs items={[{ label: "Política de Cookies" }]} />
          <h1 className="text-3xl font-display font-bold text-foreground mt-4 mb-6">Política de Cookies</h1>
          <p className="text-xs text-muted-foreground mb-6">Última atualização: 24 de fevereiro de 2026</p>

          <div className="space-y-6 text-secondary-foreground leading-relaxed text-sm">
            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">1. O Que São Cookies</h2>
              <p>Cookies são pequenos arquivos de texto armazenados no seu navegador quando você visita um site. Eles permitem que o site reconheça seu dispositivo e lembre suas preferências, melhorando sua experiência de navegação.</p>
            </section>
            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">2. Tipos de Cookies que Utilizamos</h2>
              <h3 className="font-semibold text-foreground mt-3 mb-1">2.1 Cookies Essenciais (Obrigatórios)</h3>
              <p>Necessários para o funcionamento básico do site. Incluem cookies de sessão, preferências de consentimento e segurança.</p>
              <h3 className="font-semibold text-foreground mt-3 mb-1">2.2 Cookies de Desempenho e Análise</h3>
              <p>Coletam informações sobre como você utiliza o site (páginas visitadas, tempo de permanência). Utilizamos o Google Analytics para essa finalidade.</p>
              <h3 className="font-semibold text-foreground mt-3 mb-1">2.3 Cookies de Funcionalidade</h3>
              <p>Permitem lembrar suas escolhas (como receitas favoritas e progresso de XP) para oferecer recursos personalizados.</p>
              <h3 className="font-semibold text-foreground mt-3 mb-1">2.4 Cookies de Publicidade</h3>
              <p>Utilizados pelo Google AdSense e parceiros de publicidade para exibir anúncios relevantes para você.</p>
            </section>
            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">3. Como Gerenciar Cookies</h2>
              <p>Você pode gerenciar suas preferências de cookies a qualquer momento através do nosso banner de consentimento ou das configurações do seu navegador.</p>
            </section>
            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">4. Contato</h2>
              <p>Dúvidas sobre cookies: <strong>privacidade@mexifoodxp.com.br</strong></p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}