import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function SobreNos() {
  return (
    <>
      <Helmet>
        <title>Sobre Nós - Nihon Food | Receitas de Comida Japonesa</title>
        <meta name="description" content="Conheça a Nihon Food: somos apaixonados pela culinária japonesa e compartilhamos receitas autênticas, técnicas profissionais e guias completos sobre a gastronomia do Japão." />
        <link rel="canonical" href="https://japanfood.lovable.app/sobre" />
        <meta property="og:title" content="Sobre Nós - Nihon Food" />
        <meta property="og:description" content="Conheça a Nihon Food: receitas autênticas japonesas, técnicas profissionais e guias completos." />
        <meta property="og:url" content="https://japanfood.lovable.app/sobre" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen pb-20">
        <div className="px-4 pt-16 max-w-2xl mx-auto">
          <Breadcrumbs items={[{ label: "Sobre Nós" }]} />

          <h1 className="text-3xl font-display font-bold text-foreground mt-4 mb-6">Sobre a Nihon Food</h1>

          <section className="space-y-4 text-secondary-foreground leading-relaxed">
            <h2 className="text-xl font-display font-semibold text-foreground">Nossa Missão</h2>
            <p>A Nihon Food nasceu da paixão pela culinária japonesa. Nosso objetivo é democratizar o conhecimento sobre a gastronomia do Japão, oferecendo receitas autênticas, técnicas profissionais e conteúdo educacional de qualidade para entusiastas e profissionais.</p>
            
            <h2 className="text-xl font-display font-semibold text-foreground mt-8">O Que Oferecemos</h2>
            <p>Nossa plataforma reúne centenas de receitas japonesas cuidadosamente selecionadas e testadas, desde clássicos como sushi e ramen até pratos regionais e técnicas avançadas. Cada receita inclui ingredientes detalhados, modo de preparo passo a passo, dicas de apresentação e sugestões de harmonização.</p>

            <h2 className="text-xl font-display font-semibold text-foreground mt-8">Conteúdo Educacional</h2>
            <p>Além das receitas, oferecemos artigos aprofundados sobre ingredientes japoneses, técnicas culinárias, história da gastronomia japonesa e dicas de chefs experientes. Nosso sistema gamificado de aprendizagem com XP e conquistas torna o estudo da culinária japonesa envolvente e divertido.</p>

            <h2 className="text-xl font-display font-semibold text-foreground mt-8">Nossa Equipe</h2>
            <p>Somos uma equipe de chefs, especialistas em gastronomia japonesa e entusiastas da culinária dedicados a criar o melhor conteúdo sobre comida japonesa em língua portuguesa. Trabalhamos com profissionais do setor para garantir que todas as receitas e técnicas sejam precisas e autênticas.</p>

            <h2 className="text-xl font-display font-semibold text-foreground mt-8">Compromisso com a Qualidade</h2>
            <p>Todo o conteúdo publicado na Nihon Food passa por revisão editorial rigorosa. Nossas receitas são testadas múltiplas vezes antes de serem publicadas, garantindo que você obtenha resultados excelentes ao reproduzi-las em casa.</p>

            <h2 className="text-xl font-display font-semibold text-foreground mt-8">Autenticidade</h2>
            <p>A Nihon Food valoriza a autenticidade da culinária japonesa. Respeitamos as tradições e técnicas centenárias, ao mesmo tempo que abraçamos a evolução natural da gastronomia. Nosso conteúdo é destinado a todos que apreciam a riqueza da cultura alimentar japonesa.</p>
          </section>
        </div>
      </div>
    </>
  );
}
