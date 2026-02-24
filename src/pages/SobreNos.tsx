import { Helmet } from "react-helmet-async";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function SobreNos() {
  return (
    <>
      <Helmet>
        <title>Sobre Nós - Mexi Food XP | Receitas de Comida Mexicana</title>
        <meta name="description" content="Conheça o Mexi Food XP: somos apaixonados pela culinária mexicana e compartilhamos receitas autênticas, técnicas profissionais e guias completos sobre a gastronomia do México." />
        <link rel="canonical" href="https://receitasmexicanas.lovable.app/sobre" />
        <meta property="og:title" content="Sobre Nós - Mexi Food XP" />
        <meta property="og:description" content="Receitas autênticas mexicanas, técnicas profissionais e guias completos." />
        <meta property="og:url" content="https://receitasmexicanas.lovable.app/sobre" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen pb-20">
        <div className="px-4 pt-16 max-w-2xl mx-auto">
          <Breadcrumbs items={[{ label: "Sobre Nós" }]} />

          <h1 className="text-3xl font-display font-bold text-foreground mt-4 mb-6">Sobre o Mexi Food XP</h1>

          <section className="space-y-4 text-secondary-foreground leading-relaxed">
            <h2 className="text-xl font-display font-semibold text-foreground">Nossa Missão</h2>
            <p>O Mexi Food XP nasceu da paixão pela culinária mexicana. Nosso objetivo é democratizar o conhecimento sobre a gastronomia do México, oferecendo receitas autênticas, técnicas profissionais e conteúdo educacional de qualidade para entusiastas e profissionais.</p>
            
            <h2 className="text-xl font-display font-semibold text-foreground mt-8">O Que Oferecemos</h2>
            <p>Nossa plataforma reúne centenas de receitas mexicanas cuidadosamente selecionadas e testadas, desde clássicos como tacos al pastor e mole poblano até pratos regionais de Oaxaca, Yucatán e Jalisco. Cada receita inclui ingredientes detalhados, modo de preparo passo a passo e dicas do chef.</p>

            <h2 className="text-xl font-display font-semibold text-foreground mt-8">Conteúdo Educacional</h2>
            <p>Além das receitas, oferecemos artigos aprofundados sobre ingredientes mexicanos, técnicas culinárias, história da gastronomia mexicana e dicas de chefs. Nosso sistema gamificado de aprendizagem com XP e conquistas torna o estudo da culinária mexicana envolvente e divertido.</p>

            <h2 className="text-xl font-display font-semibold text-foreground mt-8">Nossa Equipe</h2>
            <p>Somos uma equipe de chefs, especialistas em gastronomia mexicana e entusiastas da culinária dedicados a criar o melhor conteúdo sobre comida mexicana em língua portuguesa.</p>

            <h2 className="text-xl font-display font-semibold text-foreground mt-8">Autenticidade</h2>
            <p>O Mexi Food XP valoriza a autenticidade da culinária mexicana, reconhecida pela UNESCO como Patrimônio Cultural Imaterial da Humanidade. Respeitamos as tradições e técnicas centenárias, celebrando a riqueza da cultura alimentar do México.</p>
          </section>
        </div>
      </div>
    </>
  );
}