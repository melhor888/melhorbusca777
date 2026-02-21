import { Helmet } from "react-helmet-async";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PoliticaPrivacidade() {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade - Receitas Japonesas XP</title>
        <meta name="description" content="Política de Privacidade do Receitas Japonesas XP. Saiba como coletamos, usamos e protegemos seus dados pessoais conforme LGPD e GDPR." />
        <link rel="canonical" href="https://japanfood.lovable.app/privacidade" />
      </Helmet>
      <div className="min-h-screen pb-20">
        <div className="px-4 pt-16 max-w-2xl mx-auto">
          <Breadcrumbs items={[{ label: "Política de Privacidade" }]} />
          <h1 className="text-3xl font-display font-bold text-foreground mt-4 mb-6">Política de Privacidade</h1>
          <p className="text-xs text-muted-foreground mb-6">Última atualização: 21 de fevereiro de 2026</p>

          <div className="space-y-6 text-secondary-foreground leading-relaxed text-sm">
            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">1. Introdução</h2>
              <p>O Receitas Japonesas XP ("nós", "nosso" ou "site") valoriza a privacidade dos seus usuários. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos, compartilhamos e protegemos suas informações pessoais quando você utiliza nosso site e serviços, em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018) e o Regulamento Geral sobre a Proteção de Dados da União Europeia (GDPR – Regulamento UE 2016/679).</p>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">2. Dados que Coletamos</h2>
              <h3 className="font-semibold text-foreground mt-3 mb-1">2.1 Dados fornecidos por você</h3>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Nome e e-mail (formulário de contato)</li>
                <li>Preferências de conteúdo e receitas favoritas</li>
                <li>Mensagens enviadas através do formulário</li>
              </ul>
              <h3 className="font-semibold text-foreground mt-3 mb-1">2.2 Dados coletados automaticamente</h3>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Endereço IP e geolocalização aproximada</li>
                <li>Tipo de navegador e sistema operacional</li>
                <li>Páginas visitadas, tempo de permanência e interações</li>
                <li>Dados de cookies e tecnologias similares</li>
                <li>Informações do dispositivo (modelo, resolução de tela)</li>
                <li>URL de referência (de onde você veio)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">3. Finalidade do Tratamento de Dados</h2>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Fornecer e melhorar nossos serviços e conteúdo</li>
                <li>Personalizar sua experiência de navegação</li>
                <li>Enviar comunicações sobre novos conteúdos (com consentimento)</li>
                <li>Exibir anúncios personalizados através do Google AdSense</li>
                <li>Realizar análises estatísticas de uso do site</li>
                <li>Cumprir obrigações legais e regulatórias</li>
                <li>Prevenir fraudes e garantir a segurança da plataforma</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">4. Base Legal para o Tratamento (LGPD/GDPR)</h2>
              <p>O tratamento dos seus dados pessoais é realizado com base nas seguintes hipóteses legais:</p>
              <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
                <li><strong>Consentimento:</strong> para cookies não essenciais, anúncios personalizados e comunicações</li>
                <li><strong>Interesse legítimo:</strong> para análise de uso, segurança e melhoria dos serviços</li>
                <li><strong>Execução de contrato:</strong> para fornecer os serviços solicitados por você</li>
                <li><strong>Obrigação legal:</strong> para cumprir legislação aplicável</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">5. Compartilhamento de Dados com Terceiros</h2>
              <p>Podemos compartilhar seus dados com os seguintes parceiros:</p>
              <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
                <li><strong>Google AdSense / Google Ads:</strong> para exibição de anúncios personalizados e remarketing</li>
                <li><strong>Google Analytics:</strong> para análise de tráfego e comportamento do usuário</li>
                <li><strong>Google Search Console:</strong> para monitoramento de indexação e desempenho</li>
                <li><strong>Provedores de hospedagem:</strong> para armazenamento seguro dos dados</li>
              </ul>
              <p className="mt-2">Todos os parceiros estão sujeitos a contratos de proteção de dados e operam em conformidade com LGPD e GDPR. Não vendemos seus dados pessoais a terceiros.</p>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">6. Cookies e Tecnologias de Rastreamento</h2>
              <p>Utilizamos cookies para melhorar sua experiência. Consulte nossa <a href="/cookies" className="text-primary underline">Política de Cookies</a> para informações detalhadas sobre os tipos de cookies utilizados e como gerenciá-los.</p>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">7. Remarketing e Anúncios Personalizados</h2>
              <p>Utilizamos o Google AdSense para exibir anúncios em nosso site. O Google pode utilizar cookies e identificadores de dispositivo para exibir anúncios com base em suas visitas anteriores a este e outros sites. Você pode desativar a personalização de anúncios visitando as <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary underline">Configurações de Anúncios do Google</a>.</p>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">8. Seus Direitos (LGPD e GDPR)</h2>
              <p>Você possui os seguintes direitos em relação aos seus dados pessoais:</p>
              <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
                <li>Confirmação da existência de tratamento de dados</li>
                <li>Acesso aos dados pessoais coletados</li>
                <li>Correção de dados incompletos ou desatualizados</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários</li>
                <li>Portabilidade dos dados a outro fornecedor</li>
                <li>Eliminação dos dados tratados com base no consentimento</li>
                <li>Informação sobre compartilhamento com terceiros</li>
                <li>Revogação do consentimento a qualquer momento</li>
                <li>Oposição ao tratamento baseado em interesse legítimo</li>
                <li>Direito ao esquecimento (exclusão total dos dados)</li>
              </ul>
              <p className="mt-2">Para exercer qualquer desses direitos, entre em contato pelo e-mail: <strong>privacidade@receitasjaponesasxp.com.br</strong></p>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">9. Retenção de Dados</h2>
              <p>Seus dados pessoais são armazenados pelo tempo necessário para cumprir as finalidades descritas nesta política, ou conforme exigido por lei. Dados de analytics são retidos por até 26 meses. Dados de contato são mantidos por até 2 anos após a última interação.</p>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">10. Segurança dos Dados</h2>
              <p>Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição, incluindo criptografia em trânsito (HTTPS/TLS), controle de acesso e monitoramento contínuo.</p>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">11. Transferência Internacional de Dados</h2>
              <p>Seus dados podem ser transferidos e processados em servidores localizados fora do Brasil e da União Europeia. Nestes casos, garantimos que existam salvaguardas adequadas conforme exigido pela LGPD e GDPR, incluindo cláusulas contratuais padrão.</p>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">12. Menores de Idade</h2>
              <p>Nosso site é destinado a todas as idades. Não coletamos intencionalmente dados de menores de 13 anos sem consentimento dos pais ou responsáveis. Se tomarmos conhecimento de que coletamos dados de um menor sem consentimento adequado, eles serão imediatamente excluídos.</p>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">13. Alterações nesta Política</h2>
              <p>Reservamo-nos o direito de atualizar esta Política de Privacidade periodicamente. Alterações significativas serão comunicadas através de aviso em nosso site. Recomendamos que revise esta página regularmente.</p>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">14. Contato e Encarregado de Dados (DPO)</h2>
              <p>Para questões sobre esta política ou sobre seus dados pessoais:</p>
              <ul className="list-none space-y-1 ml-2 mt-2">
                <li><strong>E-mail:</strong> privacidade@receitasjaponesasxp.com.br</li>
                <li><strong>Formulário:</strong> <a href="/contato" className="text-primary underline">Página de Contato</a></li>
              </ul>
              <p className="mt-2">Caso considere que o tratamento de dados viola seus direitos, você pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD) no Brasil ou à autoridade competente na União Europeia.</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
