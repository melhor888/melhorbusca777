import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RecipeDetail from "./pages/RecipeDetail";
import SearchPage from "./pages/SearchPage";
import Tips from "./pages/Tips";
import TipDetail from "./pages/TipDetail";
import Favorites from "./pages/Favorites";
import Dicas from "./pages/Dicas";
import ArticleDetail from "./pages/ArticleDetail";
import BottomNav from "./components/BottomNav";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
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
            <Route path="*" element={<NotFound />} />
          </Routes>
          <BottomNav />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
