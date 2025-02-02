import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ApartmentCondo from "./pages/ApartmentCondo";
import AirbnbRental from "./pages/AirbnbRental";
import MoveInOut from "./pages/MoveInOut";
import SameDayCleaning from "./pages/SameDayCleaning";
import DeepCleaning from "./pages/DeepCleaning";
import PostConstruction from "./pages/PostConstruction";
import FAQ from "./pages/FAQ";
import Pricing from "./pages/Pricing";
import BookingPage from "./pages/Booking";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/apartment-condo" element={<ApartmentCondo />} />
            <Route path="/airbnb-rental" element={<AirbnbRental />} />
            <Route path="/move-in-out" element={<MoveInOut />} />
            <Route path="/same-day-cleaning" element={<SameDayCleaning />} />
            <Route path="/deep-cleaning" element={<DeepCleaning />} />
            <Route path="/post-construction" element={<PostConstruction />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;