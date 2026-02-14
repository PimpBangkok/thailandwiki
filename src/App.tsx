import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const ChatWidget = lazy(() => import('./components/ChatWidget').then(module => ({ default: module.ChatWidget })));
import HomePage from './pages/HomePage';
import BangkokPage from './pages/BangkokPage';
import BangkokDestinationPage from './pages/BangkokDestinationPage';
import PhuketDestinationPage from './pages/PhuketDestinationPage';
import ChiangMaiDestinationPage from './pages/ChiangMaiDestinationPage';
import KohSamuiDestinationPage from './pages/KohSamuiDestinationPage';
import KrabiDestinationPage from './pages/KrabiDestinationPage';
import KohPhiPhiDestinationPage from './pages/KohPhiPhiDestinationPage';
import DestinationsPage from './pages/DestinationsPage';
import ThingsToDoPage from './pages/ThingsToDoPage';
import { AccommodationPage } from './pages/AccommodationPage';
import FoodPage from './pages/FoodPage';
import FoodDiningPage from './pages/FoodDiningPage';
import CulturePage from './pages/CulturePage';
import PracticalPage from './pages/PracticalPage';
import TravelPlanningPage from './pages/TravelPlanningPage';
import ItinerariesPage from './pages/ItinerariesPage';
import VisaGuidePage from './pages/VisaGuidePage';
import BudgetGuidePage from './pages/BudgetGuidePage';
import BestTimeToVisitPage from './pages/BestTimeToVisitPage';
import { DivingSnorkelingPage } from './pages/DivingSnorkelingPage';
import { ThaiTemplesPage } from './pages/ThaiTemplesPage';
import AyutthayaDayTripPage from './pages/AyutthayadayTripPage';
import SafetyScamsPage from './pages/SafetyScamsPage';
import TravelFAQPage from './pages/TravelFAQPage';
import BestBeachesPage from './pages/BestBeachesPage';
import BangkokAirportPage from './pages/BangkokAirportPage';
import CostOfLivingPage from './pages/CostOfLivingPage';
import BangkokCostOfLivingPage from './pages/BangkokCostOfLivingPage';
import ChiangMaiCostOfLivingPage from './pages/ChiangMaiCostOfLivingPage';
import DigitalNomadThailandPage from './pages/DigitalNomadThailandPage';
import WhereToStayBangkokPage from './pages/WhereToStayBangkokPage';
import WhereToStayPhuketPage from './pages/WhereToStayPhuketPage';
import BestBudgetHotelsPage from './pages/BestBudgetHotelsPage';
import MuayThaiTrainingPage from './pages/MuayThaiTrainingPage';
import ThaiCookingClassesPage from './pages/ThaiCookingClassesPage';
import ElephantSanctuariesPage from './pages/ElephantSanctuariesPage';
import MonkChatMeditationPage from './pages/MonkChatMeditationPage';
import { BirdWatchingPage } from './pages/BirdWatchingPage';
import { YachtCharterPage } from './pages/YachtCharterPage';
import { LuxuryHotelsThailandPage } from './pages/LuxuryHotelsThailandPage';
import LuxuryHotelsByDestinationPage from './pages/LuxuryHotelsByDestinationPage';
import PhuketYachtCharterPage from './pages/PhuketYachtCharterPage';
import KohSamuiYachtCharterPage from './pages/KohSamuiYachtCharterPage';
import EventsCalendarPage from './pages/EventsCalendarPage';
import SongkranFestivalPage from './pages/SongkranFestivalPage';
import LoyKrathongFestivalPage from './pages/LoyKrathongFestivalPage';
import YiPengFestivalPage from './pages/YiPengFestivalPage';
import FullMoonPartyPage from './pages/FullMoonPartyPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SearchResultsPage from './pages/SearchResultsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#f7f8f9]">
      <Header />
      <main className="page-transition">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bangkok" element={<BangkokPage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/destinations/bangkok" element={<BangkokDestinationPage />} />
          <Route path="/destinations/phuket" element={<PhuketDestinationPage />} />
          <Route path="/destinations/chiang-mai" element={<ChiangMaiDestinationPage />} />
          <Route path="/destinations/koh-samui" element={<KohSamuiDestinationPage />} />
          <Route path="/destinations/krabi" element={<KrabiDestinationPage />} />
          <Route path="/destinations/koh-phi-phi" element={<KohPhiPhiDestinationPage />} />
          <Route path="/things-to-do" element={<ThingsToDoPage />} />
          <Route path="/accommodation" element={<AccommodationPage />} />
          <Route path="/food" element={<FoodPage />} />
          <Route path="/food-dining" element={<FoodDiningPage />} />
          <Route path="/culture" element={<CulturePage />} />
          <Route path="/practical" element={<PracticalPage />} />
          <Route path="/travel-planning" element={<TravelPlanningPage />} />
          <Route path="/itineraries" element={<ItinerariesPage />} />
          <Route path="/visa-guide" element={<VisaGuidePage />} />
          <Route path="/budget-guide" element={<BudgetGuidePage />} />
          <Route path="/best-time-to-visit" element={<BestTimeToVisitPage />} />
          <Route path="/diving-snorkeling-guide" element={<DivingSnorkelingPage />} />
          <Route path="/thai-temples" element={<ThaiTemplesPage />} />
          <Route path="/ayutthaya-day-trip" element={<AyutthayaDayTripPage />} />
          <Route path="/safety-scams" element={<SafetyScamsPage />} />
          <Route path="/travel-faq" element={<TravelFAQPage />} />
          <Route path="/best-beaches" element={<BestBeachesPage />} />
          <Route path="/bangkok-airport" element={<BangkokAirportPage />} />
          <Route path="/cost-of-living" element={<CostOfLivingPage />} />
          <Route path="/bangkok-cost-of-living" element={<BangkokCostOfLivingPage />} />
          <Route path="/chiang-mai-cost-of-living" element={<ChiangMaiCostOfLivingPage />} />
          <Route path="/digital-nomad-thailand" element={<DigitalNomadThailandPage />} />
          <Route path="/where-to-stay-bangkok" element={<WhereToStayBangkokPage />} />
          <Route path="/where-to-stay-phuket" element={<WhereToStayPhuketPage />} />
          <Route path="/best-budget-hotels" element={<BestBudgetHotelsPage />} />
          <Route path="/muay-thai-training-thailand" element={<MuayThaiTrainingPage />} />
          <Route path="/thai-cooking-classes-thailand" element={<ThaiCookingClassesPage />} />
          <Route path="/elephant-sanctuaries-thailand" element={<ElephantSanctuariesPage />} />
          <Route path="/monk-chat-meditation-thailand" element={<MonkChatMeditationPage />} />
          <Route path="/bird-watching-thailand" element={<BirdWatchingPage />} />
          <Route path="/yacht-charter-thailand" element={<YachtCharterPage />} />
          <Route path="/phuket-yacht-charter" element={<PhuketYachtCharterPage />} />
          <Route path="/koh-samui-yacht-charter" element={<KohSamuiYachtCharterPage />} />
          <Route path="/luxury-hotels-thailand" element={<LuxuryHotelsThailandPage />} />
          <Route path="/luxury-hotels-by-destination-thailand" element={<LuxuryHotelsByDestinationPage />} />
          <Route path="/events-calendar-thailand" element={<EventsCalendarPage />} />
          <Route path="/songkran-festival-thailand" element={<SongkranFestivalPage />} />
          <Route path="/loy-krathong-festival-thailand" element={<LoyKrathongFestivalPage />} />
          <Route path="/yi-peng-lantern-festival-chiang-mai" element={<YiPengFestivalPage />} />
          <Route path="/full-moon-party-koh-phangan" element={<FullMoonPartyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <Suspense fallback={null}>
        <ChatWidget />
      </Suspense>
    </div>
  );
}

export default App;
