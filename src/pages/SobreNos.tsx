import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";


export default function SobreNos() {
  return (
    <>
      <Helmet>
        <title>Sobre Nós - Drinks & Company | Receitas de Drinks e Coquetéis</title>
        <meta name="description" content="Conheça a Drinks & Company: somos apaixonados por coquetelaria e compartilhamos receitas profissionais, dicas de bartenders e guias completos sobre o universo dos drinks." />
        <link rel="canonical" href="https://drinkseco.lovable.app/sobre" />
        <meta property="og:title" content="Sobre Nós - Drinks & Company" />
        <meta property="og:description" content="Conheça a Drinks & Company: receitas profissionais, dicas de bartenders e guias completos." />
        <meta property="og:url" content="https://drinkseco.lovable.app/sobre" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen pb-20">
        <div className="px-4 pt-16 max-w-2xl mx-auto">
          <Breadcrumbs items={[{ label: "Sobre Nós" }]} />
          
          

          <h1 className="text-3xl font-display font-bold text-foreground mt-4 mb-6">Sobre a Drinks & Company</h1>

          <section className="space-y-4 text-secondary-foreground leading-relaxed">
            <h2 className="text-xl font-display font-semibold text-foreground">Nossa Missão</h2>
            <p>A Drinks & Company nasceu da paixão pela arte da coquetelaria. Nosso objetivo é democratizar o conhecimento sobre drinks e coquetéis, oferecendo receitas autênticas, técnicas profissionais e conteúdo educacional de qualidade para entusiastas e profissionais do setor.</p>
            
            <h2 className="text-xl font-display font-semibold text-foreground mt-8">O Que Oferecemos</h2>
            <p>Nossa plataforma reúne centenas de receitas de drinks cuidadosamente selecionadas e testadas, desde clássicos atemporais como o Old Fashioned e o Negroni até criações contemporâneas. Cada receita inclui ingredientes detalhados, modo de preparo passo a passo, dicas de apresentação e sugestões de harmonização.</p>

            <h2 className="text-xl font-display font-semibold text-foreground mt-8">Conteúdo Educacional</h2>
            <p>Além das receitas, oferecemos artigos aprofundados sobre destilados, técnicas de mixologia, história dos coquetéis e dicas profissionais de bartenders experientes. Nosso sistema gamificado de aprendizagem com XP e conquistas torna o estudo da coquetelaria envolvente e divertido.</p>

            

            <h2 className="text-xl font-display font-semibold text-foreground mt-8">Nossa Equipe</h2>
            <p>Somos uma equipe de bartenders, sommeliers e entusiastas da gastronomia dedicados a criar o melhor conteúdo sobre coquetelaria em língua portuguesa. Trabalhamos com profissionais do setor para garantir que todas as receitas e técnicas sejam precisas e atualizadas.</p>

            <h2 className="text-xl font-display font-semibold text-foreground mt-8">Compromisso com a Qualidade</h2>
            <p>Todo o conteúdo publicado na Drinks & Company passa por revisão editorial rigorosa. Nossas receitas são testadas múltiplas vezes antes de serem publicadas, garantindo que você obtenha resultados excelentes ao reproduzi-las em casa.</p>

            <h2 className="text-xl font-display font-semibold text-foreground mt-8">Consumo Responsável</h2>
            <p>A Drinks & Company incentiva o consumo responsável de bebidas alcoólicas. Nosso conteúdo é destinado exclusivamente a maiores de 18 anos. Beba com moderação e nunca dirija após consumir bebidas alcoólicas.</p>
          </section>

          
        </div>
        <Footer />
      </div>
    </>
  );
}
