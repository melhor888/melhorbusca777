import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Index from "@/pages/Index";
import PropertiesPage from "@/pages/PropertiesPage";
import VehiclesPage from "@/pages/VehiclesPage";
import CompanyProfile from "@/pages/CompanyProfile";
import ProductDetail from "@/pages/ProductDetail";
import CreateListing from "@/pages/CreateListing";
import SearchPage from "@/pages/SearchPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/imoveis" element={<PropertiesPage />} />
              <Route path="/imoveis/empresa/:id" element={<CompanyProfile />} />
              <Route path="/imoveis/produto/:productId" element={<ProductDetail />} />
              <Route path="/veiculos" element={<VehiclesPage />} />
              <Route path="/veiculos/empresa/:id" element={<CompanyProfile />} />
              <Route path="/veiculos/produto/:productId" element={<ProductDetail />} />
              <Route path="/anunciar" element={<CreateListing />} />
              <Route path="/buscar" element={<SearchPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <FooterSimple />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
