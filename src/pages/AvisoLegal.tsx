import { Helmet } from "react-helmet-async";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function AvisoLegal() {
  return (
    <>
      <Helmet>
        <title>Aviso Legal (Disclaimer) - Receitas Japonesas XP</title>
        <meta name="description" content="Aviso Legal do Receitas Japonesas XP. Informações sobre responsabilidade, conteúdo e limitações do site." />
        <link rel="canonical" href="https://japanfood.lovable.app/aviso-legal" />
      </Helmet>
      <div className="min-h-screen pb-20">
        <div className="px-4 pt-16 max-w-2xl mx-auto">
          <Breadcrumbs items={[{ label: "Aviso Legal" }]} />
          <h1 className="text-3xl font-display font-bold text-foreground mt-4 mb-6">Aviso Legal (Disclaimer)</h1>

          <div className="space-y-6 text-secondary-foreground leading-relaxed text-sm">
            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">1. Natureza do Conteúdo</h2>
              <p>O conteúdo disponibilizado no Receitas Japonesas XP, incluindo receitas de comida japonesa, artigos e dicas, tem caráter exclusivamente informativo e educacional. As informações não substituem orientação profissional especializada.</p>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">2. Segurança Alimentar</h2>
              <p>O Receitas Japonesas XP recomenda atenção especial ao preparar receitas que envolvam peixe cru, fritura em alta temperatura, fermentação e uso de facas afiadas. Sempre utilize ingredientes frescos e de procedência confiável. Consulte um profissional de saúde em caso de alergias ou restrições alimentares.</p>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">3. Isenção de Responsabilidade</h2>
              <p>O Receitas Japonesas XP não se responsabiliza por:</p>
              <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
                <li>Resultados obtidos ao reproduzir as receitas</li>
                <li>Reações alérgicas ou adversas a qualquer ingrediente</li>
                <li>Acidentes durante o preparo das receitas</li>
                <li>Danos diretos ou indiretos decorrentes do uso das informações</li>
                <li>Precisão absoluta das informações nutricionais ou técnicas</li>
                <li>Conteúdo de sites externos linkados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">4. Precisão das Informações</h2>
              <p>Embora nos esforcemos para manter todas as informações precisas e atualizadas, não garantimos que o conteúdo esteja livre de erros. Receitas podem variar conforme ingredientes, marcas e métodos de preparo utilizados.</p>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">5. Publicidade</h2>
              <p>Este site exibe anúncios fornecidos pelo Google AdSense. A exibição de anúncios não constitui endosso dos produtos ou serviços anunciados. Este site não é afiliado ao Google. A monetização é feita através da plataforma Google AdSense, conforme as políticas da plataforma.</p>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">6. Propriedade Intelectual</h2>
              <p>Todas as receitas, textos, imagens e materiais são protegidos por direitos autorais. A reprodução não autorizada é proibida. Para uso comercial, solicite autorização prévia.</p>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">7. Alergias e Intolerâncias</h2>
              <p>Algumas receitas podem conter alérgenos como soja, peixe, crustáceos, trigo, ovos, leite e gergelim. Sempre verifique os ingredientes antes de preparar ou consumir qualquer receita. Se você possui alergias ou intolerâncias alimentares, consulte um médico.</p>
            </section>

            <section>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">8. Contato</h2>
              <p>Para questões legais: <strong>contato@receitasjaponesasxp.com.br</strong></p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
