import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Index from "./pages/Index";
import CategoryPage from "./pages/CategoryPage";
import RecipeDetail from "./pages/RecipeDetail";
import SearchPage from "./pages/SearchPage";
import Tips from "./pages/Tips";
import TipDetail from "./pages/TipDetail";
import Favorites from "./pages/Favorites";
import Dicas from "./pages/Dicas";
import ArticleDetail from "./pages/ArticleDetail";
import Blog from "./pages/Blog";
import BlogPostPage from "./pages/BlogPost";
import SobreNos from "./pages/SobreNos";
import Contato from "./pages/Contato";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosDeUso from "./pages/TermosDeUso";
import PoliticaCookies from "./pages/PoliticaCookies";
import AvisoLegal from "./pages/AvisoLegal";
import SitemapPage from "./pages/SitemapPage";
import ShoppingList from "./pages/ShoppingList";
import Quiz from "./pages/Quiz";
import Dashboard from "./pages/Dashboard";
import Achievements from "./pages/Achievements";
import Ingredients from "./pages/Ingredients";
import Collections from "./pages/Collections";
import Vip from "./pages/Vip";
import VipCategoryPage from "./pages/VipCategoryPage";
import VipRecipeDetail from "./pages/VipRecipeDetail";
import QueroSerVip from "./pages/QueroSerVip";
import VipTools from "./pages/VipTools";
import VipModelos from "./pages/VipModelos";
import BottomNav from "./components/BottomNav";
import DesktopSidebar from "./components/DesktopSidebar";
import CookieConsent from "./components/CookieConsent";
import { WebsiteSchema, OrganizationSchema } from "./components/SchemaOrg";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import InstallPrompt from "./components/InstallPrompt";
import { ScrollToTop } from "./components/ScrollToTop";
import { XPProvider } from "./hooks/useXP";
import LanguageWrapper from "./components/LanguageWrapper";
import HreflangTags from "./components/HreflangTags";

const queryClient = new QueryClient();

function AppRoutes() {
  return (
    <>
      <Route index element={<Index />} />
      <Route path="categoria/:slug" element={<CategoryPage />} />
      <Route path="recipe/:id" element={<RecipeDetail />} />
      <Route path="search" element={<SearchPage />} />
      <Route path="tips" element={<Tips />} />
      <Route path="tip/:id" element={<TipDetail />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="dicas" element={<Dicas />} />
      <Route path="artigo/:id" element={<ArticleDetail />} />
      <Route path="sobre" element={<SobreNos />} />
      <Route path="contato" element={<Contato />} />
      <Route path="privacidade" element={<PoliticaPrivacidade />} />
      <Route path="termos" element={<TermosDeUso />} />
      <Route path="cookies" element={<PoliticaCookies />} />
      <Route path="aviso-legal" element={<AvisoLegal />} />
      <Route path="sitemap" element={<SitemapPage />} />
      <Route path="lista-compras" element={<ShoppingList />} />
      <Route path="quiz" element={<Quiz />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="conquistas" element={<Achievements />} />
      <Route path="ingredientes" element={<Ingredients />} />
      <Route path="colecoes" element={<Collections />} />
      <Route path="vip" element={<Vip />} />
      <Route path="vip/categoria/:slug" element={<VipCategoryPage />} />
      <Route path="vip/recipe/:id" element={<VipRecipeDetail />} />
      <Route path="queroservip" element={<QueroSerVip />} />
      <Route path="vip/ferramentas" element={<VipTools />} />
      <Route path="vip/modelos" element={<VipModelos />} />
      <Route path="vip/:slug" element={<VipCategoryPage />} />
    </>
  );
}

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <WebsiteSchema />
        <OrganizationSchema />
        <XPProvider>
          <BrowserRouter>
            <ScrollToTop />
            <HreflangTags />
            <DesktopSidebar />
            <div className="max-w-lg mx-auto lg:max-w-none lg:ml-60 relative">
              <Routes>
                {/* Default language (pt-BR) — no prefix */}
                <Route path="/" element={<LanguageWrapper><Index /></LanguageWrapper>} />
                <Route path="/categoria/:slug" element={<LanguageWrapper><CategoryPage /></LanguageWrapper>} />
                <Route path="/recipe/:id" element={<LanguageWrapper><RecipeDetail /></LanguageWrapper>} />
                <Route path="/search" element={<LanguageWrapper><SearchPage /></LanguageWrapper>} />
                <Route path="/tips" element={<LanguageWrapper><Tips /></LanguageWrapper>} />
                <Route path="/tip/:id" element={<LanguageWrapper><TipDetail /></LanguageWrapper>} />
                <Route path="/favorites" element={<LanguageWrapper><Favorites /></LanguageWrapper>} />
                <Route path="/dicas" element={<LanguageWrapper><Dicas /></LanguageWrapper>} />
                <Route path="/artigo/:id" element={<LanguageWrapper><ArticleDetail /></LanguageWrapper>} />
                <Route path="/blog" element={<LanguageWrapper><Blog /></LanguageWrapper>} />
                <Route path="/blog/:slug" element={<LanguageWrapper><BlogPostPage /></LanguageWrapper>} />
                <Route path="/sobre" element={<LanguageWrapper><SobreNos /></LanguageWrapper>} />
                <Route path="/contato" element={<LanguageWrapper><Contato /></LanguageWrapper>} />
                <Route path="/privacidade" element={<LanguageWrapper><PoliticaPrivacidade /></LanguageWrapper>} />
                <Route path="/termos" element={<LanguageWrapper><TermosDeUso /></LanguageWrapper>} />
                <Route path="/cookies" element={<LanguageWrapper><PoliticaCookies /></LanguageWrapper>} />
                <Route path="/aviso-legal" element={<LanguageWrapper><AvisoLegal /></LanguageWrapper>} />
                <Route path="/sitemap" element={<LanguageWrapper><SitemapPage /></LanguageWrapper>} />
                <Route path="/lista-compras" element={<LanguageWrapper><ShoppingList /></LanguageWrapper>} />
                <Route path="/quiz" element={<LanguageWrapper><Quiz /></LanguageWrapper>} />
                <Route path="/dashboard" element={<LanguageWrapper><Dashboard /></LanguageWrapper>} />
                <Route path="/conquistas" element={<LanguageWrapper><Achievements /></LanguageWrapper>} />
                <Route path="/ingredientes" element={<LanguageWrapper><Ingredients /></LanguageWrapper>} />
                <Route path="/colecoes" element={<LanguageWrapper><Collections /></LanguageWrapper>} />
                <Route path="/vip" element={<LanguageWrapper><Vip /></LanguageWrapper>} />
                <Route path="/vip/categoria/:slug" element={<LanguageWrapper><VipCategoryPage /></LanguageWrapper>} />
                <Route path="/vip/recipe/:id" element={<LanguageWrapper><VipRecipeDetail /></LanguageWrapper>} />
                <Route path="/queroservip" element={<LanguageWrapper><QueroSerVip /></LanguageWrapper>} />
                <Route path="/vip/ferramentas" element={<LanguageWrapper><VipTools /></LanguageWrapper>} />
                <Route path="/vip/modelos" element={<LanguageWrapper><VipModelos /></LanguageWrapper>} />
                <Route path="/vip/:slug" element={<LanguageWrapper><VipCategoryPage /></LanguageWrapper>} />

                {/* Language-prefixed routes (/en/*, /es/*) */}
                <Route path="/:lang" element={<LanguageWrapper><Index /></LanguageWrapper>} />
                <Route path="/:lang/categoria/:slug" element={<LanguageWrapper><CategoryPage /></LanguageWrapper>} />
                <Route path="/:lang/recipe/:id" element={<LanguageWrapper><RecipeDetail /></LanguageWrapper>} />
                <Route path="/:lang/search" element={<LanguageWrapper><SearchPage /></LanguageWrapper>} />
                <Route path="/:lang/tips" element={<LanguageWrapper><Tips /></LanguageWrapper>} />
                <Route path="/:lang/tip/:id" element={<LanguageWrapper><TipDetail /></LanguageWrapper>} />
                <Route path="/:lang/favorites" element={<LanguageWrapper><Favorites /></LanguageWrapper>} />
                <Route path="/:lang/dicas" element={<LanguageWrapper><Dicas /></LanguageWrapper>} />
                <Route path="/:lang/artigo/:id" element={<LanguageWrapper><ArticleDetail /></LanguageWrapper>} />
                <Route path="/:lang/blog" element={<LanguageWrapper><Blog /></LanguageWrapper>} />
                <Route path="/:lang/blog/:slug" element={<LanguageWrapper><BlogPostPage /></LanguageWrapper>} />
                <Route path="/:lang/sobre" element={<LanguageWrapper><SobreNos /></LanguageWrapper>} />
                <Route path="/:lang/contato" element={<LanguageWrapper><Contato /></LanguageWrapper>} />
                <Route path="/:lang/privacidade" element={<LanguageWrapper><PoliticaPrivacidade /></LanguageWrapper>} />
                <Route path="/:lang/termos" element={<LanguageWrapper><TermosDeUso /></LanguageWrapper>} />
                <Route path="/:lang/cookies" element={<LanguageWrapper><PoliticaCookies /></LanguageWrapper>} />
                <Route path="/:lang/aviso-legal" element={<LanguageWrapper><AvisoLegal /></LanguageWrapper>} />
                <Route path="/:lang/sitemap" element={<LanguageWrapper><SitemapPage /></LanguageWrapper>} />
                <Route path="/:lang/lista-compras" element={<LanguageWrapper><ShoppingList /></LanguageWrapper>} />
                <Route path="/:lang/quiz" element={<LanguageWrapper><Quiz /></LanguageWrapper>} />
                <Route path="/:lang/dashboard" element={<LanguageWrapper><Dashboard /></LanguageWrapper>} />
                <Route path="/:lang/conquistas" element={<LanguageWrapper><Achievements /></LanguageWrapper>} />
                <Route path="/:lang/ingredientes" element={<LanguageWrapper><Ingredients /></LanguageWrapper>} />
                <Route path="/:lang/colecoes" element={<LanguageWrapper><Collections /></LanguageWrapper>} />
                <Route path="/:lang/vip" element={<LanguageWrapper><Vip /></LanguageWrapper>} />
                <Route path="/:lang/vip/categoria/:slug" element={<LanguageWrapper><VipCategoryPage /></LanguageWrapper>} />
                <Route path="/:lang/vip/recipe/:id" element={<LanguageWrapper><VipRecipeDetail /></LanguageWrapper>} />
                <Route path="/:lang/queroservip" element={<LanguageWrapper><QueroSerVip /></LanguageWrapper>} />
                <Route path="/:lang/vip/ferramentas" element={<LanguageWrapper><VipTools /></LanguageWrapper>} />
                <Route path="/:lang/vip/modelos" element={<LanguageWrapper><VipModelos /></LanguageWrapper>} />
                <Route path="/:lang/vip/:slug" element={<LanguageWrapper><VipCategoryPage /></LanguageWrapper>} />

                <Route path="*" element={<NotFound />} />
              </Routes>
              <BottomNav />
              <Footer />
            </div>
            <CookieConsent />
            <InstallPrompt />
          </BrowserRouter>
        </XPProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
