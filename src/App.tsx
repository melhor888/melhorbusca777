import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import RecipeDetail from "./pages/RecipeDetail";
import SearchPage from "./pages/SearchPage";
import Tips from "./pages/Tips";
import TipDetail from "./pages/TipDetail";
import Favorites from "./pages/Favorites";
import Dicas from "./pages/Dicas";
import ArticleDetail from "./pages/ArticleDetail";
import SobreNos from "./pages/SobreNos";
import Contato from "./pages/Contato";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosDeUso from "./pages/TermosDeUso";
import PoliticaCookies from "./pages/PoliticaCookies";
import AvisoLegal from "./pages/AvisoLegal";
import SitemapPage from "./pages/SitemapPage";
import BottomNav from "./components/BottomNav";
import CookieConsent from "./components/CookieConsent";
import { WebsiteSchema, OrganizationSchema } from "./components/SchemaOrg";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import InstallPrompt from "./components/InstallPrompt";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <WebsiteSchema />
        <OrganizationSchema />
        <BrowserRouter>
          <div className="max-w-lg mx-auto relative">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/recipe/:id" element={<RecipeDetail />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/tips" element={<Tips />} />
              <Route path="/tip/:id" element={<TipDetail />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/dicas" element={<Dicas />} />
              <Route path="/artigo/:id" element={<ArticleDetail />} />
              <Route path="/sobre" element={<SobreNos />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/privacidade" element={<PoliticaPrivacidade />} />
              <Route path="/termos" element={<TermosDeUso />} />
              <Route path="/cookies" element={<PoliticaCookies />} />
              <Route path="/aviso-legal" element={<AvisoLegal />} />
              <Route path="/sitemap" element={<SitemapPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <BottomNav />
          </div>
          <Footer />
          <CookieConsent />
          <InstallPrompt />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
