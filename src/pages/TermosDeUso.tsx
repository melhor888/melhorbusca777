import { Helmet } from "react-helmet-async";
import Breadcrumbs from "@/components/Breadcrumbs";


export default function TermosDeUso() {
  return (
    <>
      <Helmet>
        <title>Termos de Uso - Drink Quest</title>
        <meta name="description" content="Termos de Uso da Drink Quest. Condições de utilização do site, direitos e responsabilidades dos usuários." />
        <link rel="canonical" href="https://drinkseco.lovable.app/termos" />
      </Helmet>
      <div className="min-h-screen pb-20">
        <div className="px-4 pt-16 max-w-2xl mx-auto">
          <Breadcrumbs items={[{ label: "Termos de Uso" }]} />
          <h1 className="text-3xl font-display font-bold text-foreground mt-4 mb-6">Termos de Uso</h1>
          <p className="text-xs text-muted-foreground mb-6">Última atualização: 17 de fevereiro de 2026</p>

          <div className="space-y-6 text-secondary-foreground leading-relaxed text-sm">
            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">1. Aceitação dos Termos</h2>
              <p>Ao acessar e utilizar o site Drink Quest ("Site"), você concorda com estes Termos de Uso. Se não concordar com qualquer parte destes termos, não utilize o Site. O uso continuado após alterações constitui aceitação das modificações.</p>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">2. Descrição do Serviço</h2>
              <p>A Drink Quest é uma plataforma online que oferece receitas de drinks e coquetéis, artigos educacionais sobre coquetelaria, dicas de bartenders profissionais e conteúdo relacionado ao universo de bebidas. O conteúdo é disponibilizado gratuitamente e monetizado através de publicidade.</p>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">3. Restrição de Idade</h2>
              <p>O acesso ao Site é restrito a maiores de 18 anos. Ao utilizar o Site, você declara ter pelo menos 18 anos de idade. Não nos responsabilizamos pelo acesso de menores de idade ao conteúdo.</p>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">4. Propriedade Intelectual</h2>
              <p>Todo o conteúdo do Site, incluindo textos, receitas, imagens, logotipos, design, código-fonte e materiais audiovisuais são protegidos por direitos autorais e pertencem à Drink Quest ou são utilizados com autorização. É proibida a reprodução, distribuição ou uso comercial sem autorização expressa.</p>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">5. Uso Permitido</h2>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Acessar o conteúdo para uso pessoal e não comercial</li>
                <li>Compartilhar links do Site em redes sociais</li>
                <li>Reproduzir receitas para consumo pessoal</li>
                <li>Utilizar o sistema de aprendizagem e XP</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">6. Uso Proibido</h2>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Copiar conteúdo para republicação em outros sites sem autorização</li>
                <li>Utilizar o conteúdo para fins comerciais sem autorização</li>
                <li>Tentar acessar áreas restritas do Site</li>
                <li>Utilizar bots, crawlers ou ferramentas automatizadas de forma abusiva</li>
                <li>Interferir no funcionamento do Site</li>
                <li>Clicar deliberadamente em anúncios de forma fraudulenta</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">7. Publicidade e Monetização</h2>
              <p>O Site exibe anúncios fornecidos pelo Google AdSense e outros parceiros de publicidade. Esses anúncios podem ser personalizados com base em seus interesses e histórico de navegação, conforme descrito em nossa Política de Privacidade e Política de Cookies.</p>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">8. Consumo Responsável</h2>
              <p>O conteúdo do Site é informativo e educacional. A Drink Quest incentiva o consumo responsável de bebidas alcoólicas. Não nos responsabilizamos pelo uso indevido das informações ou receitas disponibilizadas. Nunca dirija após consumir bebidas alcoólicas.</p>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">9. Isenção de Responsabilidade</h2>
              <p>As receitas e informações são fornecidas "como estão", sem garantias de qualquer tipo. A Drink Quest não se responsabiliza por resultados obtidos ao seguir as receitas, reações alérgicas, ou qualquer dano decorrente do uso das informações do Site.</p>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">10. Links Externos</h2>
              <p>O Site pode conter links para sites de terceiros. Não somos responsáveis pelo conteúdo, políticas de privacidade ou práticas de outros sites.</p>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">11. Alterações nos Termos</h2>
              <p>Podemos alterar estes Termos a qualquer momento. Alterações entram em vigor imediatamente após publicação no Site. É sua responsabilidade revisar os Termos periodicamente.</p>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">12. Legislação Aplicável</h2>
              <p>Estes Termos são regidos pela legislação brasileira. Qualquer disputa será submetida ao foro da comarca de São Paulo, SP, Brasil.</p>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">13. Contato</h2>
              <p>Dúvidas sobre estes Termos podem ser enviadas para: <strong>contato@drinkquest.com.br</strong></p>
            </section>
          </div>
        </div>
        
      </div>
    </>
  );
}