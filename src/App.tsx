import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Index from "@/pages/Index";
import CarsPage from "@/pages/CarsPage";
import PropertiesPage from "@/pages/PropertiesPage";
import ListingDetail from "@/pages/ListingDetail";
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
              <Route path="/carros" element={<CarsPage />} />
              <Route path="/carros/:id" element={<ListingDetail />} />
              <Route path="/imoveis" element={<PropertiesPage />} />
              <Route path="/imoveis/:id" element={<ListingDetail />} />
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
