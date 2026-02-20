import { Helmet } from "react-helmet-async";
import { MessageCircle } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Contato() {
  const whatsappNumber = "5527995055993";
  const whatsappMessage = encodeURIComponent("Olá! Vim pelo Drink Quest e gostaria de tirar uma dúvida.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      <Helmet>
        <title>Contato - Drink Quest | Fale Conosco</title>
        <meta name="description" content="Entre em contato com a Drink Quest pelo WhatsApp. Tire suas dúvidas rapidamente." />
        <link rel="canonical" href="https://drinkseco.lovable.app/contato" />
        <meta property="og:title" content="Contato - Drink Quest" />
        <meta property="og:description" content="Fale conosco pelo WhatsApp. Tire suas dúvidas rapidamente." />
        <meta property="og:url" content="https://drinkseco.lovable.app/contato" />
      </Helmet>
      <div className="min-h-screen pb-20">
        <div className="px-4 pt-16 max-w-2xl mx-auto">
          <Breadcrumbs items={[{ label: "Contato" }]} />

          <h1 className="text-3xl font-display font-bold text-foreground mt-4 mb-6">Fale Conosco</h1>

          <div className="space-y-6 text-secondary-foreground leading-relaxed">
            <p>Tem alguma dúvida, sugestão de receita ou interesse em parceria? Fale diretamente com a gente pelo WhatsApp! Respondemos o mais rápido possível.</p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[hsl(142,70%,45%)] text-white font-semibold text-base hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={22} />
              Falar pelo WhatsApp
            </a>

            <p className="text-sm text-muted-foreground text-center">Nosso número: (27) 99505-5993</p>
          </div>
        </div>
        
      </div>
    </>
  );
}
