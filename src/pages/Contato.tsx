import { Helmet } from "react-helmet-async";
import { Mail, MessageSquare } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { useState } from "react";

export default function Contato() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Helmet>
        <title>Contato - Drinks & Company | Fale Conosco</title>
        <meta name="description" content="Entre em contato com a Drinks & Company. Envie sugestões, dúvidas ou parcerias. Estamos prontos para atender você." />
        <link rel="canonical" href="https://drinkseco.lovable.app/contato" />
        <meta property="og:title" content="Contato - Drinks & Company" />
        <meta property="og:description" content="Fale conosco. Envie sugestões, dúvidas ou parcerias." />
        <meta property="og:url" content="https://drinkseco.lovable.app/contato" />
      </Helmet>
      <div className="min-h-screen pb-20">
        <div className="px-4 pt-16 max-w-2xl mx-auto">
          <Breadcrumbs items={[{ label: "Contato" }]} />
          
          <AdPlaceholder position="header" />

          <h1 className="text-3xl font-display font-bold text-foreground mt-4 mb-6">Fale Conosco</h1>

          <div className="space-y-6 text-secondary-foreground leading-relaxed">
            <p>Tem alguma dúvida, sugestão de receita ou interesse em parceria? Adoramos ouvir nossos leitores! Entre em contato conosco através dos canais abaixo ou preencha o formulário.</p>

            <div className="grid gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary">
                <Mail size={20} className="text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">E-mail</p>
                  <p className="text-sm text-muted-foreground">contato@drinkscompany.com.br</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary">
                <MessageSquare size={20} className="text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">Redes Sociais</p>
                  <p className="text-sm text-muted-foreground">@drinkscompany em todas as plataformas</p>
                </div>
              </div>
            </div>

            <AdPlaceholder position="in-content" />

            <h2 className="text-xl font-display font-semibold text-foreground mt-8">Envie sua Mensagem</h2>

            {sent ? (
              <div className="p-6 rounded-xl bg-primary/10 border border-primary/30 text-center">
                <p className="text-foreground font-medium">Mensagem enviada com sucesso!</p>
                <p className="text-sm text-muted-foreground mt-2">Responderemos em até 48 horas úteis.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Nome</label>
                  <input id="name" required type="text" className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Seu nome" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">E-mail</label>
                  <input id="email" required type="email" className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="seu@email.com" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">Assunto</label>
                  <select id="subject" className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50">
                    <option>Dúvida sobre receita</option>
                    <option>Sugestão de conteúdo</option>
                    <option>Parceria comercial</option>
                    <option>Reportar problema</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Mensagem</label>
                  <textarea id="message" required rows={5} className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" placeholder="Escreva sua mensagem..." />
                </div>
                <button type="submit" className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">Enviar Mensagem</button>
              </form>
            )}
          </div>

          <AdPlaceholder position="footer" />
        </div>
        <Footer />
      </div>
    </>
  );
}
