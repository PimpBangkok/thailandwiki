import { ArrowRight, Plane, Wallet, CreditCard, Map, Shield, Pill, Smartphone, Calendar, DollarSign, TrendingDown, Banknote, Info, Car, Train, Bus, Ship, MapPin, Clock, Route, Compass, Mountain, Palmtree, Building2, Backpack, AlertCircle, Globe, Wifi, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import Sidebar from '../components/Sidebar';
import YouMayAlsoLike from '../components/YouMayAlsoLike';
import { usePageMeta } from '../hooks/usePageMeta';

export default function TravelPlanningPage() {
  usePageMeta({
    title: 'Thailand Travel Planning Guide 2026 - Complete Trip Planner | ThailandWiki',
    description: 'Plan your Thailand trip with our comprehensive guide covering itineraries, booking tips, packing lists, transportation, and essential travel planning advice.',
  });
  const sections = [
    { id: 'before-you-go', label: 'Before You Go' },
    { id: 'budget-costs', label: 'Budget & Costs' },
    { id: 'getting-around', label: 'Getting Around' },
    { id: 'itineraries', label: 'Itineraries' },
    { id: 'practical-info', label: 'Practical Information' }
  ];

  const beforeYouGoItems = [
    { label: 'Thailand Visa Guide', sublabel: 'Complete requirements', icon: Plane },
    { label: 'Entry Requirements & COVID Rules', sublabel: 'Current regulations', icon: Shield },
    { label: 'Travel Insurance Recommendations', sublabel: 'Stay protected', icon: Shield },
    { label: 'What to Pack for Thailand', sublabel: 'Essential packing list', icon: Map },
    { label: 'Vaccinations & Health Preparation', sublabel: 'Medical requirements', icon: Pill },
    { label: 'Money & Currency', sublabel: 'Thai Baht guide', icon: Banknote },
    { label: 'Best Time to Visit Thailand', sublabel: 'Seasonal guide', icon: Calendar },
    { label: 'Travel Apps You Need', sublabel: 'Essential downloads', icon: Smartphone }
  ];

  const budgetGuides = [
    {
      label: 'Daily Budget Breakdown',
      sublabel: 'Budget/Mid/Luxury',
      description: 'Complete breakdown of daily costs',
      icon: Wallet
    },
    {
      label: '2-Week Thailand Trip Cost',
      sublabel: 'Full itinerary costs',
      description: 'What to expect for a two-week trip',
      icon: Calendar
    },
    {
      label: 'Thailand vs Other Countries',
      sublabel: 'Cost comparison',
      description: 'How Thailand compares globally',
      icon: TrendingDown
    },
    {
      label: 'How to Save Money in Thailand',
      sublabel: 'Money-saving tips',
      description: 'Travel on a budget',
      icon: DollarSign
    },
    {
      label: 'ATM & Money Exchange Tips',
      sublabel: 'Get the best rates',
      description: 'Avoid fees and bad rates',
      icon: Banknote
    },
    {
      label: 'Tipping in Thailand Guide',
      sublabel: 'When and how much',
      description: 'Local tipping customs',
      icon: CreditCard
    },
    {
      label: 'Credit Cards in Thailand',
      sublabel: 'Where they work',
      description: 'Card acceptance and fees',
      icon: CreditCard
    }
  ];

  const transportationGuides = [
    { label: 'Flights Within Thailand', sublabel: 'Domestic airlines', icon: Plane },
    { label: 'Train Travel in Thailand', sublabel: 'Rail network guide', icon: Train },
    { label: 'Bus Travel Guide', sublabel: 'Long-distance buses', icon: Bus },
    { label: 'Renting Cars & Motorbikes', sublabel: 'Self-drive options', icon: Car },
    { label: 'Taxis & Rideshare (Grab)', sublabel: 'Urban transportation', icon: Car },
    { label: 'Bangkok Airport Guide', sublabel: 'BKK & DMK airports', icon: Plane },
    { label: 'Island Transfers & Ferries', sublabel: 'Boat connections', icon: Ship }
  ];

  const itinerariesByDuration = [
    { label: '3-Day Thailand Itineraries', sublabel: 'Quick getaways', icon: Clock },
    { label: '1-Week Thailand Itinerary', sublabel: 'Perfect introduction', icon: Calendar },
    { label: '2-Week Thailand Itinerary', sublabel: 'Most popular duration', icon: Calendar },
    { label: '3-Week Thailand Itinerary', sublabel: 'Extended exploration', icon: Calendar },
    { label: '1-Month Thailand Route', sublabel: 'Complete experience', icon: Route }
  ];

  const itinerariesByType = [
    { label: 'First-Timer Itineraries', sublabel: 'Never been before?', icon: MapPin },
    { label: 'Beach & Islands Route', sublabel: 'Sun and sand', icon: Palmtree },
    { label: 'Culture & Temples Route', sublabel: 'Historical journey', icon: Building2 },
    { label: 'Adventure & Nature Route', sublabel: 'Jungle and mountains', icon: Mountain },
    { label: 'Backpacker Routes', sublabel: 'Budget travel paths', icon: Backpack }
  ];

  const practicalInfo = [
    { label: 'SIM Cards & Internet in Thailand', icon: Wifi },
    { label: 'Language & Communication Tips', icon: MessageCircle },
    { label: 'Thai Culture & Etiquette', icon: Globe },
    { label: 'Safety Tips for Thailand', icon: Shield },
    { label: 'Scams to Avoid', icon: AlertCircle },
    { label: 'Emergency Contacts', icon: Phone },
    { label: 'Travel Seasons & Weather', icon: Calendar }
  ];

  const youMayAlsoLike = [
    { title: 'First-Time Thailand Guide', path: '/travel-planning' },
    { title: 'Thailand Safety Tips', path: '/practical' },
    { title: 'Getting Around Thailand', path: '/practical' },
    { title: 'Where to Stay in Bangkok', path: '/accommodation' },
    { title: '2-Week Thailand Itinerary', path: '/travel-planning' },
    { title: 'Thailand Travel Checklist', path: '/travel-planning' }
  ];

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Home', path: '/' },
          { label: 'Travel Planning' }
        ]}
      />

      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2000&q=80"
            alt="Travel planning with map and passport"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#252525]/70 via-[#252525]/60 to-[#252525]/80"></div>
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full mb-8">
            <Map className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-[2px]">Travel Planning</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 uppercase tracking-[3px] leading-tight">
            Plan Your
            <br />
            <span className="text-[#F4A261]">Thailand Trip</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed max-w-3xl mx-auto">
            Everything You Need to Know Before You Go
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-lg">
            <div className="flex items-center gap-2">
              <Info className="w-5 h-5 text-[#F4A261]" />
              <span>500+ Planning Guides</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            <div>
              <div className="prose prose-lg max-w-none mb-16">
                <p className="text-xl leading-relaxed text-gray-700 font-light">
                  Planning a trip to Thailand? We've got you covered with comprehensive guides on
                  visas, budgets, itineraries, transportation, and all the practical information you
                  need for a smooth journey.
                </p>
              </div>

              <div id="before-you-go" className="mb-20 scroll-mt-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                    <Plane className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[2px] text-[#252525]">
                      Before You Go
                    </h2>
                    <p className="text-gray-600 mt-1">150 essential pre-trip guides</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 mb-12">
                  <div className="mb-8">
                    <img
                      src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80"
                      alt="Passport and travel documents"
                      loading="lazy"
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Essential Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {beforeYouGoItems.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={index}
                          to="/travel-planning"
                          className="group flex items-center gap-4 p-5 bg-white rounded-lg hover:bg-blue-50 transition-all border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-md"
                        >
                          <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/20 transition-colors">
                            <IconComponent className="w-6 h-6 text-blue-700" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                              {item.label}
                            </h4>
                            <p className="text-sm text-gray-600">{item.sublabel}</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-700 group-hover:translate-x-1 transition-all" />
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    to="/travel-planning"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-blue-700 text-white hover:bg-blue-800 transition-colors rounded-lg font-semibold shadow-lg hover:shadow-xl uppercase tracking-[1.5px]"
                  >
                    Browse Pre-Trip Guides
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div className="border-b border-gray-200 mb-16"></div>

              <div id="budget-costs" className="mb-20 scroll-mt-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-green-600/10 flex items-center justify-center flex-shrink-0">
                    <Wallet className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[2px] text-[#252525]">
                      Budget & Costs
                    </h2>
                    <p className="text-gray-600 mt-1">100 guides to planning your budget</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 mb-12">
                  <div className="mb-8">
                    <img
                      src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1200&q=80"
                      alt="Budget planning and money"
                      loading="lazy"
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>

                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Thailand is known for being affordable, but costs can vary widely depending on your
                    travel style. Our detailed budget guides help you plan accurately and avoid surprises.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Cost Guides</h3>
                  <div className="space-y-4">
                    {budgetGuides.map((guide, index) => {
                      const IconComponent = guide.icon;
                      return (
                        <Link
                          key={index}
                          to="/travel-planning"
                          className="group block p-6 bg-white rounded-lg hover:bg-green-50 transition-all border border-gray-100 hover:border-green-200 shadow-sm hover:shadow-md"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-14 h-14 rounded-full bg-green-600/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-600/20 transition-colors">
                              <IconComponent className="w-7 h-7 text-green-700" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-start justify-between gap-4 mb-2">
                                <h4 className="font-semibold text-lg text-gray-900 group-hover:text-green-700 transition-colors">
                                  {guide.label}
                                </h4>
                                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-700 group-hover:translate-x-1 transition-all flex-shrink-0" />
                              </div>
                              <p className="text-sm text-green-700 font-medium mb-1">{guide.sublabel}</p>
                              <p className="text-sm text-gray-600">{guide.description}</p>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    to="/travel-planning"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-green-700 text-white hover:bg-green-800 transition-colors rounded-lg font-semibold shadow-lg hover:shadow-xl uppercase tracking-[1.5px]"
                  >
                    Complete Budget Guide
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div className="border-b border-gray-200 mb-16"></div>

              <div id="getting-around" className="mb-20 scroll-mt-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-orange-600/10 flex items-center justify-center flex-shrink-0">
                    <Car className="w-6 h-6 text-orange-700" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[2px] text-[#252525]">
                      Getting Around
                    </h2>
                    <p className="text-gray-600 mt-1">150 transportation guides</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 md:p-12 mb-12">
                  <div className="mb-8">
                    <img
                      src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80"
                      alt="Thai tuk-tuk and transportation"
                      loading="lazy"
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Transportation Guides</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {transportationGuides.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={index}
                          to="/travel-planning"
                          className="group flex items-center gap-4 p-5 bg-white rounded-lg hover:bg-orange-50 transition-all border border-gray-100 hover:border-orange-200 shadow-sm hover:shadow-md"
                        >
                          <div className="w-12 h-12 rounded-full bg-orange-600/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-600/20 transition-colors">
                            <IconComponent className="w-6 h-6 text-orange-700" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 group-hover:text-orange-700 transition-colors">
                              {item.label}
                            </h4>
                            <p className="text-sm text-gray-600">{item.sublabel}</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-700 group-hover:translate-x-1 transition-all" />
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    to="/travel-planning"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-orange-700 text-white hover:bg-orange-800 transition-colors rounded-lg font-semibold shadow-lg hover:shadow-xl uppercase tracking-[1.5px]"
                  >
                    Transportation Guides
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div className="border-b border-gray-200 mb-16"></div>

              <div id="itineraries" className="mb-20 scroll-mt-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-red-600/10 flex items-center justify-center flex-shrink-0">
                    <Route className="w-6 h-6 text-red-700" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[2px] text-[#252525]">
                      Itineraries
                    </h2>
                    <p className="text-gray-600 mt-1">100 route planning guides</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-8 md:p-12 mb-12">
                  <div className="mb-8">
                    <img
                      src="https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?auto=format&fit=crop&w=1200&q=80"
                      alt="Travel itinerary and map planning"
                      loading="lazy"
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>

                  <div className="mb-10">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">By Duration</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {itinerariesByDuration.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                          <Link
                            key={index}
                            to="/travel-planning"
                            className="group flex items-start gap-3 p-5 bg-white rounded-lg hover:bg-red-50 transition-all border border-gray-100 hover:border-red-200 shadow-sm hover:shadow-md"
                          >
                            <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600/20 transition-colors">
                              <IconComponent className="w-5 h-5 text-red-700" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-gray-900 group-hover:text-red-700 transition-colors mb-1">
                                {item.label}
                              </h4>
                              <p className="text-sm text-gray-600">{item.sublabel}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">By Type</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {itinerariesByType.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                          <Link
                            key={index}
                            to="/travel-planning"
                            className="group flex items-start gap-3 p-5 bg-white rounded-lg hover:bg-red-50 transition-all border border-gray-100 hover:border-red-200 shadow-sm hover:shadow-md"
                          >
                            <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600/20 transition-colors">
                              <IconComponent className="w-5 h-5 text-red-700" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-gray-900 group-hover:text-red-700 transition-colors mb-1">
                                {item.label}
                              </h4>
                              <p className="text-sm text-gray-600">{item.sublabel}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    to="/travel-planning"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-red-700 text-white hover:bg-red-800 transition-colors rounded-lg font-semibold shadow-lg hover:shadow-xl uppercase tracking-[1.5px]"
                  >
                    Browse All Itineraries
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div className="border-b border-gray-200 mb-16"></div>

              <div id="practical-info" className="mb-20 scroll-mt-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-[#2B5D8C]/10 flex items-center justify-center flex-shrink-0">
                    <Info className="w-6 h-6 text-[#2B5D8C]" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[2px] text-[#252525]">
                      Practical Information
                    </h2>
                    <p className="text-gray-600 mt-1">Essential tips and resources</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {practicalInfo.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <Link
                        key={index}
                        to="/practical"
                        className="group flex items-center gap-4 p-6 bg-gradient-to-br from-pink-50 to-cyan-50 rounded-xl hover:from-pink-100 hover:to-cyan-100 transition-all border border-pink-100 hover:border-pink-200 shadow-sm hover:shadow-md"
                      >
                        <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-[#2B5D8C]" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 group-hover:text-[#2B5D8C] transition-colors">
                            {item.label}
                          </h4>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#2B5D8C] group-hover:translate-x-1 transition-all" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <Sidebar sections={sections} />
            </div>
          </div>
        </div>
      </section>

      <YouMayAlsoLike articles={youMayAlsoLike} />

      <div className="block lg:hidden bg-gray-50 py-12">
        <div className="max-w-[1400px] mx-auto px-6 space-y-6">
          <Sidebar sections={sections} />
        </div>
      </div>

      <section className="py-32 bg-gradient-to-br from-[#252525] via-[#2a2a2a] to-[#1f1f1f] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#F4A261] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-[#F4A261]/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-8 border border-[#F4A261]/20">
              <MessageCircle className="w-10 h-10 text-[#F4A261]" />
            </div>
            <h2 className="text-5xl md:text-6xl font-light mb-8 uppercase tracking-[2px] leading-tight">
              Need Help
              <br />
              <span className="text-[#F4A261]">Planning?</span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 font-light leading-relaxed text-gray-300">
              Chat with our travel experts for personalized advice and recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#F4A261] text-white hover:bg-[#2B5D8C] transition-all rounded-lg font-semibold shadow-2xl hover:shadow-[#F4A261]/20 hover:scale-105 uppercase tracking-[1.5px]"
                onClick={() => {
                  const chatButton = document.querySelector('[aria-label="Chat with us"]') as HTMLButtonElement;
                  if (chatButton) chatButton.click();
                }}
              >
                <MessageCircle className="w-5 h-5" />
                Ask an Expert
              </button>
              <Link
                to="/destinations"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all rounded-lg font-semibold border border-white/20 hover:border-white/40 uppercase tracking-[1.5px]"
              >
                Explore Destinations
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
