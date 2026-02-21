import { Helmet } from "react-helmet-async";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PoliticaCookies() {
  return (
    <>
      <Helmet>
        <title>Política de Cookies - Nihon Food</title>
        <meta name="description" content="Política de Cookies da Nihon Food. Saiba quais cookies utilizamos e como gerenciá-los." />
        <link rel="canonical" href="https://japanfood.lovable.app/cookies" />
      </Helmet>
      <div className="min-h-screen pb-20">
        <div className="px-4 pt-16 max-w-2xl mx-auto">
          <Breadcrumbs items={[{ label: "Política de Cookies" }]} />
          <h1 className="text-3xl font-display font-bold text-foreground mt-4 mb-6">Política de Cookies</h1>
          <p className="text-xs text-muted-foreground mb-6">Última atualização: 21 de fevereiro de 2026</p>

          <div className="space-y-6 text-secondary-foreground leading-relaxed text-sm">
            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">1. O Que São Cookies</h2>
              <p>Cookies são pequenos arquivos de texto armazenados no seu navegador quando você visita um site. Eles permitem que o site reconheça seu dispositivo e lembre suas preferências, melhorando sua experiência de navegação.</p>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">2. Tipos de Cookies que Utilizamos</h2>
              
              <h3 className="font-semibold text-foreground mt-3 mb-1">2.1 Cookies Essenciais (Obrigatórios)</h3>
              <p>Necessários para o funcionamento básico do site. Incluem cookies de sessão, preferências de consentimento e segurança. Não podem ser desativados.</p>
              <ul className="list-disc list-inside space-y-1 ml-2 mt-1">
                <li><strong>cookie_consent:</strong> armazena suas preferências de cookies</li>
                <li><strong>session_id:</strong> mantém sua sessão ativa durante a navegação</li>
              </ul>

              <h3 className="font-semibold text-foreground mt-3 mb-1">2.2 Cookies de Desempenho e Análise</h3>
              <p>Coletam informações sobre como você utiliza o site (páginas visitadas, tempo de permanência). Utilizamos o Google Analytics para essa finalidade.</p>
              <ul className="list-disc list-inside space-y-1 ml-2 mt-1">
                <li><strong>_ga, _gid:</strong> Google Analytics – identificam usuários únicos</li>
                <li><strong>_gat:</strong> Google Analytics – limitam a taxa de solicitações</li>
              </ul>

              <h3 className="font-semibold text-foreground mt-3 mb-1">2.3 Cookies de Funcionalidade</h3>
              <p>Permitem lembrar suas escolhas (como receitas favoritas e progresso de XP) para oferecer recursos personalizados.</p>

              <h3 className="font-semibold text-foreground mt-3 mb-1">2.4 Cookies de Publicidade</h3>
              <p>Utilizados pelo Google AdSense e parceiros de publicidade para exibir anúncios relevantes para você.</p>
              <ul className="list-disc list-inside space-y-1 ml-2 mt-1">
                <li><strong>__gads:</strong> Google AdSense – mede interações com anúncios</li>
                <li><strong>__gpi:</strong> Google Publisher – identifica usuário para anúncios</li>
                <li><strong>IDE, DSID:</strong> Google DoubleClick – remarketing e personalização</li>
                <li><strong>NID:</strong> Google – preferências e personalização de anúncios</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">3. Cookies de Terceiros</h2>
              <p>Os seguintes terceiros podem definir cookies em seu dispositivo quando você visita nosso site:</p>
              <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
                <li><strong>Google (google.com):</strong> Analytics, AdSense, DoubleClick</li>
                <li><strong>YouTube (youtube.com):</strong> vídeos incorporados (quando aplicável)</li>
              </ul>
              <p className="mt-2">Cada terceiro possui sua própria política de privacidade e cookies.</p>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">4. Como Gerenciar Cookies</h2>
              <p>Você pode gerenciar suas preferências de cookies a qualquer momento através do nosso banner de consentimento ou das configurações do seu navegador:</p>
              <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
                <li><strong>Chrome:</strong> Configurações &gt; Privacidade e segurança &gt; Cookies</li>
                <li><strong>Firefox:</strong> Preferências &gt; Privacidade &gt; Cookies</li>
                <li><strong>Safari:</strong> Preferências &gt; Privacidade</li>
                <li><strong>Edge:</strong> Configurações &gt; Cookies e permissões do site</li>
              </ul>
              <p className="mt-2">A desativação de alguns cookies pode afetar a funcionalidade do site.</p>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">5. Consentimento</h2>
              <p>Na primeira visita ao nosso site, exibimos um banner solicitando seu consentimento para o uso de cookies não essenciais. Você pode aceitar todos, recusar ou configurar quais categorias deseja permitir. Seu consentimento é armazenado por 12 meses.</p>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">6. Alterações nesta Política</h2>
              <p>Podemos atualizar esta política periodicamente. Alterações serão publicadas nesta página com a data de atualização revisada.</p>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">7. Contato</h2>
              <p>Dúvidas sobre cookies: <strong>privacidade@nihonfood.com.br</strong></p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
