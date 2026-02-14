import { useEffect, useRef, useState } from 'react';
import { X, Search, MapPin, Compass, Hotel, Plane, FileText, Lightbulb, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  title: string;
  description?: string;
  path: string;
  category: 'destinations' | 'guides' | 'things-to-do' | 'accommodation' | 'quick-answer';
}

interface GroupedResults {
  destinations: SearchResult[];
  guides: SearchResult[];
  'things-to-do': SearchResult[];
  accommodation: SearchResult[];
  'quick-answer': SearchResult[];
}

const popularSearches = [
  { label: 'Bangkok Guide', path: '/destinations/bangkok' },
  { label: 'Phuket Beaches', path: '/destinations/bangkok' },
  { label: 'Thailand Visa', path: '/practical' },
  { label: 'Best Time to Visit', path: '/practical' },
  { label: 'Budget Travel', path: '/practical' },
  { label: 'Best Islands', path: '/destinations' },
  { label: 'Street Food', path: '/food' },
  { label: 'Itineraries', path: '/things-to-do' },
];

const quickLinks = [
  {
    icon: MapPin,
    label: 'Top Destinations',
    description: 'Explore Bangkok, Phuket & more',
    path: '/destinations',
  },
  {
    icon: Compass,
    label: 'Things to Do',
    description: 'Activities, tours & experiences',
    path: '/things-to-do',
  },
  {
    icon: Hotel,
    label: 'Where to Stay',
    description: 'Hotels, resorts & accommodation',
    path: '/accommodation',
  },
  {
    icon: Plane,
    label: 'Plan Your Trip',
    description: 'Visa, budget & practical info',
    path: '/practical',
  },
];

const searchableContent: SearchResult[] = [
  { title: 'Bangkok', description: "Thailand's vibrant capital city", path: '/bangkok', category: 'destinations' },
  { title: 'Bangkok Chinatown', description: 'Street food paradise and cultural hub', path: '/bangkok', category: 'destinations' },
  { title: 'Phuket', description: 'Thailand\'s largest island with stunning beaches', path: '/destinations/bangkok', category: 'destinations' },
  { title: 'Koh Samui', description: 'Tropical paradise with palm-fringed beaches', path: '/destinations/bangkok', category: 'destinations' },
  { title: 'Krabi', description: 'Dramatic limestone cliffs and clear waters', path: '/destinations/bangkok', category: 'destinations' },
  { title: 'Chiang Mai', description: 'Cultural capital of Northern Thailand', path: '/destinations/bangkok', category: 'destinations' },

  { title: 'Bangkok Street Food Guide: Where & What to Eat', description: 'Complete guide to Bangkok\'s best street food', path: '/food', category: 'guides' },
  { title: 'Best Restaurants in Bangkok (2026)', description: 'Top-rated dining experiences', path: '/food', category: 'guides' },
  { title: 'Chinatown Food Tour Guide', description: 'Navigate the best food stalls in Yaowarat', path: '/food', category: 'guides' },
  { title: 'Thai Cooking Classes in Bangkok', description: 'Learn authentic Thai cuisine', path: '/food', category: 'guides' },
  { title: 'Michelin Star Street Food in Bangkok', description: 'Award-winning affordable eats', path: '/food', category: 'guides' },
  { title: 'Bangkok Night Market Food Guide', description: 'Evening food adventures', path: '/food', category: 'guides' },
  { title: 'Bangkok Hotel Guide 2026', description: 'Best hotels by area and budget', path: '/accommodation', category: 'guides' },
  { title: 'Complete Bangkok Itinerary (3-7 Days)', description: 'Perfectly planned Bangkok trips', path: '/bangkok', category: 'guides' },
  { title: 'Things to Do in Bangkok: Ultimate Guide', description: '50+ activities and attractions', path: '/bangkok', category: 'guides' },
  { title: 'Best Beaches in Thailand', description: 'Top 20 beaches ranked and reviewed', path: '/destinations/bangkok', category: 'guides' },
  { title: 'Phuket Beach Guide 2026', description: 'Every beach reviewed and rated', path: '/destinations/bangkok', category: 'guides' },
  { title: 'Koh Samui Complete Travel Guide', description: 'Everything you need to know', path: '/destinations/bangkok', category: 'guides' },
  { title: 'Thailand Visa Requirements 2026', description: 'Entry requirements and visa options', path: '/practical', category: 'guides' },
  { title: 'How to Apply for Thailand Visa', description: 'Step-by-step application guide', path: '/practical', category: 'guides' },
  { title: 'Thailand Visa on Arrival Guide', description: 'Quick visa process explained', path: '/practical', category: 'guides' },
  { title: 'Thailand Visa Extension Guide', description: 'Extend your stay legally', path: '/practical', category: 'guides' },
  { title: 'When to Visit Thailand: Month by Month', description: 'Best times for weather and events', path: '/practical', category: 'guides' },
  { title: 'Thailand Travel Budget Guide', description: 'Daily costs and money-saving tips', path: '/practical', category: 'guides' },

  { title: 'Grand Palace & Wat Phra Kaew Tour', description: 'Bangkok\'s most iconic temple', path: '/bangkok', category: 'things-to-do' },
  { title: 'Floating Market Tour', description: 'Traditional Thai markets on water', path: '/bangkok', category: 'things-to-do' },
  { title: 'Railay Beach Rock Climbing', description: 'World-class climbing in Krabi', path: '/things-to-do', category: 'things-to-do' },
  { title: 'Island Hopping Tours', description: 'Explore multiple islands in one day', path: '/things-to-do', category: 'things-to-do' },
  { title: 'Scuba Diving & Snorkeling', description: 'Discover underwater Thailand', path: '/things-to-do', category: 'things-to-do' },
  { title: 'Thai Massage & Spa Experiences', description: 'Traditional healing treatments', path: '/things-to-do', category: 'things-to-do' },
  { title: 'Muay Thai Training & Shows', description: 'Experience Thailand\'s martial art', path: '/things-to-do', category: 'things-to-do' },
  { title: 'Bangkok Rooftop Bars Tour', description: 'Sky-high cocktails with views', path: '/bangkok', category: 'things-to-do' },

  { title: 'Luxury Hotels in Bangkok', description: '5-star properties reviewed', path: '/accommodation', category: 'accommodation' },
  { title: 'Budget Hostels & Guesthouses', description: 'Clean and affordable stays', path: '/accommodation', category: 'accommodation' },
  { title: 'Beach Resorts in Phuket', description: 'Oceanfront paradise properties', path: '/accommodation', category: 'accommodation' },
  { title: 'Boutique Hotels in Chiang Mai', description: 'Unique and charming stays', path: '/accommodation', category: 'accommodation' },
  { title: 'Villa Rentals in Koh Samui', description: 'Private luxury accommodations', path: '/accommodation', category: 'accommodation' },
];

const quickAnswers: Record<string, { answer: string; category: 'quick-answer' }> = {
  'bangkok': {
    answer: "Bangkok is Thailand's vibrant capital with world-class temples, incredible street food, bustling markets, and modern shopping malls. Top areas: Old Town (temples), Chinatown (food), Sukhumvit (nightlife), and Riverside (culture).",
    category: 'quick-answer'
  },
  'bangkok food': {
    answer: "Bangkok is one of the world's best food cities. Top areas for food: Chinatown/Yaowarat (authentic street food), Sukhumvit (international variety), Old Town (traditional Thai), and night markets throughout the city. Don't miss pad thai, som tam, and mango sticky rice.",
    category: 'quick-answer'
  },
  'food': {
    answer: "Must-try Thai dishes: Pad Thai (stir-fried noodles), Tom Yum (spicy sour soup), Som Tam (papaya salad), Massaman Curry (rich Muslim-influenced curry), Green Curry, Mango Sticky Rice. Best food cities: Bangkok (variety), Chiang Mai (northern cuisine), Phuket (seafood).",
    category: 'quick-answer'
  },
  'beaches': {
    answer: "Thailand has stunning beaches across multiple regions. Best beaches: Railay Beach (Krabi - limestone cliffs), Kata Beach (Phuket - surfing), Nai Harn Beach (Phuket - swimming), Sunrise Beach (Koh Lipe - pristine), and Chaweng Beach (Koh Samui - developed).",
    category: 'quick-answer'
  },
  'phuket beaches': {
    answer: "Phuket's best beaches: Kata & Karon (great swimming), Nai Harn (local favorite), Freedom Beach (secluded), Surin Beach (upscale), and Patong Beach (nightlife & activities). West coast beaches are best for sunsets.",
    category: 'quick-answer'
  },
  'visa': {
    answer: "Most tourists get a 30-day visa exemption on arrival (60 days for many nationalities from 2024). Extendable once for 30 days at immigration offices. Tourist visa (60 days) available at Thai embassies. Always check current requirements for your nationality.",
    category: 'quick-answer'
  },
  'best time': {
    answer: "Best time to visit: November to February (cool & dry season). March-May is hot season (35-40°C). June-October is rainy season (afternoon showers, lush landscapes). Southern islands have different patterns - Koh Samui best Feb-Sept, Phuket Nov-April.",
    category: 'quick-answer'
  },
  'budget': {
    answer: "Daily budget: Budget traveler $30-50 (hostels, street food, local transport). Mid-range $75-150 (hotels, restaurants, tours). Luxury $200+ (resorts, fine dining, private tours). Bangkok and islands are pricier than northern Thailand.",
    category: 'quick-answer'
  },
};

const RECENT_SEARCHES_KEY = 'thailand-wiki-recent-searches';
const MAX_RECENT_SEARCHES = 5;

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [groupedResults, setGroupedResults] = useState<GroupedResults>({
    destinations: [],
    guides: [],
    'things-to-do': [],
    accommodation: [],
    'quick-answer': [],
  });
  const [isSearching, setIsSearching] = useState(false);
  const [quickAnswer, setQuickAnswer] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const allResults = [
    ...groupedResults.destinations,
    ...groupedResults.guides,
    ...groupedResults['things-to-do'],
    ...groupedResults.accommodation,
  ];

  const totalResultsCount = searchableContent.filter(
    (item) =>
      searchQuery.trim().length >= 2 &&
      (item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       item.description?.toLowerCase().includes(searchQuery.toLowerCase()))
  ).length;

  useEffect(() => {
    const saved = localStorage.getItem(RECENT_SEARCHES_KEY);
    if (saved) {
      try {
        setRecentSearches(JSON.parse(saved));
      } catch (e) {
        setRecentSearches([]);
      }
    }
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < allResults.length - 1 ? prev + 1 : prev));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
      } else if (e.key === 'Enter' && selectedIndex >= 0 && allResults[selectedIndex]) {
        e.preventDefault();
        handleNavigate(allResults[selectedIndex].path);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, selectedIndex, allResults]);

  useEffect(() => {
    setSelectedIndex(-1);

    if (searchQuery.trim().length >= 2) {
      setIsSearching(true);

      const searchTimeout = setTimeout(() => {
        const query = searchQuery.toLowerCase();

        const results = searchableContent.filter(
          (item) =>
            item.title.toLowerCase().includes(query) ||
            item.description?.toLowerCase().includes(query)
        );

        const grouped: GroupedResults = {
          destinations: results.filter(r => r.category === 'destinations').slice(0, 5),
          guides: results.filter(r => r.category === 'guides').slice(0, 5),
          'things-to-do': results.filter(r => r.category === 'things-to-do').slice(0, 5),
          accommodation: results.filter(r => r.category === 'accommodation').slice(0, 5),
          'quick-answer': [],
        };

        setGroupedResults(grouped);

        const answer = quickAnswers[query] ||
                      Object.entries(quickAnswers).find(([key]) =>
                        query.includes(key) || key.includes(query)
                      )?.[1];

        setQuickAnswer(answer ? answer.answer : null);
        setIsSearching(false);
      }, 300);

      return () => clearTimeout(searchTimeout);
    } else {
      setGroupedResults({
        destinations: [],
        guides: [],
        'things-to-do': [],
        accommodation: [],
        'quick-answer': [],
      });
      setQuickAnswer(null);
      setIsSearching(false);
    }
  }, [searchQuery]);

  const saveRecentSearch = (query: string) => {
    if (query.trim().length < 2) return;

    const updated = [query, ...recentSearches.filter(s => s !== query)].slice(0, MAX_RECENT_SEARCHES);
    setRecentSearches(updated);
    localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
  };

  const handleNavigate = (path: string) => {
    if (searchQuery.trim().length >= 2) {
      saveRecentSearch(searchQuery.trim());
    }
    navigate(path);
    onClose();
    setSearchQuery('');
  };

  const highlightMatch = (text: string, query: string) => {
    if (!query) return text;

    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase()
        ? <mark key={index} className="bg-yellow-200 text-gray-900">{part}</mark>
        : part
    );
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 z-[9997] flex items-start justify-center pt-4 sm:pt-12 md:pt-20 px-2 sm:px-4 animate-fade-in"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-modal-title"
    >
      <div
        ref={modalRef}
        className="bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-2xl max-h-[95vh] sm:max-h-[85vh] md:max-h-[80vh] overflow-y-auto animate-slide-up"
      >
        <div className="sticky top-0 bg-white z-10 border-b border-gray-200 rounded-t-xl sm:rounded-t-2xl">
          <div className="flex items-center justify-between p-4 sm:p-5 pb-3 sm:pb-4">
            <h2 id="search-modal-title" className="text-base sm:text-lg font-semibold text-gray-900">Search ThailandWiki</h2>
            <button
              onClick={onClose}
              className="flex items-center space-x-1.5 sm:space-x-2 text-sm text-gray-500 hover:text-gray-700 transition-colors min-h-[44px] -mr-2 px-2"
              aria-label="Close search"
            >
              <span className="text-xs hidden sm:inline">ESC</span>
              <X className="w-5 h-5 sm:w-5 sm:h-5" />
            </button>
          </div>

          <div className="px-4 sm:px-5 pb-4 sm:pb-5">
            <div className="relative">
              <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search destinations, activities, hotels..."
                aria-label="Search ThailandWiki"
                className="w-full pl-10 sm:pl-12 pr-10 sm:pr-4 py-3 sm:py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2B5D8C] focus:border-transparent text-sm sm:text-base bg-gray-50 focus:bg-white transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    inputRef.current?.focus();
                  }}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4 sm:w-4 sm:h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-5 pt-3 sm:pt-4">
          {isSearching ? (
            <div className="flex items-center justify-center py-12 animate-fade-in">
              <Loader2 className="w-8 h-8 text-[#2B5D8C] animate-spin" />
            </div>
          ) : searchQuery.trim().length >= 2 ? (
            <>
              {(groupedResults.destinations.length > 0 ||
                groupedResults.guides.length > 0 ||
                groupedResults['things-to-do'].length > 0 ||
                groupedResults.accommodation.length > 0 ||
                quickAnswer) ? (
                <div className="space-y-6 animate-fade-in">
                  {quickAnswer && (
                    <div className="bg-gradient-to-r from-pink-50 to-pink-100 border-l-4 border-[#2B5D8C] rounded-lg p-4 animate-scale-in">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-[#2B5D8C] rounded-lg flex items-center justify-center mt-0.5">
                          <Lightbulb className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-semibold text-[#2B5D8C] mb-2">Quick Answer</h3>
                          <p className="text-sm text-[#2B5D8C] leading-relaxed">{quickAnswer}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {groupedResults.destinations.length > 0 && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 px-1">
                        <MapPin className="w-4 h-4 text-[#2B5D8C]" />
                        <h3 className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                          Destinations ({groupedResults.destinations.length})
                        </h3>
                      </div>
                      <div className="space-y-2">
                        {groupedResults.destinations.map((result, index) => {
                          const globalIndex = allResults.indexOf(result);
                          const isSelected = selectedIndex === globalIndex;
                          return (
                            <button
                              key={index}
                              onClick={() => handleNavigate(result.path)}
                              className={`w-full text-left border rounded-lg p-3 transition-all group ${
                                isSelected
                                  ? 'bg-gradient-to-r from-pink-100 to-pink-200 border-[#2B5D8C]'
                                  : 'bg-white hover:bg-gradient-to-r hover:from-pink-50 hover:to-pink-100 border-gray-200 hover:border-[#2B5D8C]'
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                <MapPin className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isSelected ? 'text-[#2B5D8C]' : 'text-gray-400 group-hover:text-[#2B5D8C]'}`} />
                                <div className="flex-1 min-w-0">
                                  <h4 className={`text-sm font-medium ${isSelected ? 'text-[#2B5D8C]' : 'text-gray-900 group-hover:text-[#2B5D8C]'}`}>
                                    {highlightMatch(result.title, searchQuery)}
                                  </h4>
                                  {result.description && (
                                    <p className={`text-xs mt-0.5 ${isSelected ? 'text-[#2B5D8C]' : 'text-gray-600 group-hover:text-[#2B5D8C]'}`}>
                                      {highlightMatch(result.description, searchQuery)}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {groupedResults.guides.length > 0 && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 px-1">
                        <FileText className="w-4 h-4 text-[#2B5D8C]" />
                        <h3 className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                          Travel Guides ({groupedResults.guides.length})
                        </h3>
                      </div>
                      <div className="space-y-2">
                        {groupedResults.guides.map((result, index) => {
                          const globalIndex = allResults.indexOf(result);
                          const isSelected = selectedIndex === globalIndex;
                          return (
                            <button
                              key={index}
                              onClick={() => handleNavigate(result.path)}
                              className={`w-full text-left border rounded-lg p-3 transition-all group ${
                                isSelected
                                  ? 'bg-gradient-to-r from-pink-100 to-pink-200 border-[#2B5D8C]'
                                  : 'bg-white hover:bg-gradient-to-r hover:from-pink-50 hover:to-pink-100 border-gray-200 hover:border-[#2B5D8C]'
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                <FileText className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isSelected ? 'text-[#2B5D8C]' : 'text-gray-400 group-hover:text-[#2B5D8C]'}`} />
                                <div className="flex-1 min-w-0">
                                  <h4 className={`text-sm font-medium ${isSelected ? 'text-[#2B5D8C]' : 'text-gray-900 group-hover:text-[#2B5D8C]'}`}>
                                    {highlightMatch(result.title, searchQuery)}
                                  </h4>
                                  {result.description && (
                                    <p className={`text-xs mt-0.5 ${isSelected ? 'text-[#2B5D8C]' : 'text-gray-600 group-hover:text-[#2B5D8C]'}`}>
                                      {highlightMatch(result.description, searchQuery)}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {groupedResults['things-to-do'].length > 0 && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 px-1">
                        <Compass className="w-4 h-4 text-[#2B5D8C]" />
                        <h3 className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                          Things to Do ({groupedResults['things-to-do'].length})
                        </h3>
                      </div>
                      <div className="space-y-2">
                        {groupedResults['things-to-do'].map((result, index) => {
                          const globalIndex = allResults.indexOf(result);
                          const isSelected = selectedIndex === globalIndex;
                          return (
                            <button
                              key={index}
                              onClick={() => handleNavigate(result.path)}
                              className={`w-full text-left border rounded-lg p-3 transition-all group ${
                                isSelected
                                  ? 'bg-gradient-to-r from-pink-100 to-pink-200 border-[#2B5D8C]'
                                  : 'bg-white hover:bg-gradient-to-r hover:from-pink-50 hover:to-pink-100 border-gray-200 hover:border-[#2B5D8C]'
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                <Compass className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isSelected ? 'text-[#2B5D8C]' : 'text-gray-400 group-hover:text-[#2B5D8C]'}`} />
                                <div className="flex-1 min-w-0">
                                  <h4 className={`text-sm font-medium ${isSelected ? 'text-[#2B5D8C]' : 'text-gray-900 group-hover:text-[#2B5D8C]'}`}>
                                    {highlightMatch(result.title, searchQuery)}
                                  </h4>
                                  {result.description && (
                                    <p className={`text-xs mt-0.5 ${isSelected ? 'text-[#2B5D8C]' : 'text-gray-600 group-hover:text-[#2B5D8C]'}`}>
                                      {highlightMatch(result.description, searchQuery)}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {groupedResults.accommodation.length > 0 && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 px-1">
                        <Hotel className="w-4 h-4 text-[#2B5D8C]" />
                        <h3 className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                          Hotels & Accommodation ({groupedResults.accommodation.length})
                        </h3>
                      </div>
                      <div className="space-y-2">
                        {groupedResults.accommodation.map((result, index) => {
                          const globalIndex = allResults.indexOf(result);
                          const isSelected = selectedIndex === globalIndex;
                          return (
                            <button
                              key={index}
                              onClick={() => handleNavigate(result.path)}
                              className={`w-full text-left border rounded-lg p-3 transition-all group ${
                                isSelected
                                  ? 'bg-gradient-to-r from-pink-100 to-pink-200 border-[#2B5D8C]'
                                  : 'bg-white hover:bg-gradient-to-r hover:from-pink-50 hover:to-pink-100 border-gray-200 hover:border-[#2B5D8C]'
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                <Hotel className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isSelected ? 'text-[#2B5D8C]' : 'text-gray-400 group-hover:text-[#2B5D8C]'}`} />
                                <div className="flex-1 min-w-0">
                                  <h4 className={`text-sm font-medium ${isSelected ? 'text-[#2B5D8C]' : 'text-gray-900 group-hover:text-[#2B5D8C]'}`}>
                                    {highlightMatch(result.title, searchQuery)}
                                  </h4>
                                  {result.description && (
                                    <p className={`text-xs mt-0.5 ${isSelected ? 'text-[#2B5D8C]' : 'text-gray-600 group-hover:text-[#2B5D8C]'}`}>
                                      {highlightMatch(result.description, searchQuery)}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {totalResultsCount > allResults.length && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <button
                        onClick={() => {
                          navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
                          onClose();
                        }}
                        className="w-full py-3 px-4 bg-gradient-to-r from-[#2B5D8C] to-[#2B5D8C] hover:from-[#2B5D8C] hover:to-[#2B5D8C] text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg"
                      >
                        View all {totalResultsCount} results
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-8 animate-fade-in">
                  <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-600 font-medium mb-2">No results found</p>
                  <p className="text-sm text-gray-500 mb-4">
                    Try: <span className="font-medium text-[#2B5D8C]">bangkok</span>, <span className="font-medium text-[#2B5D8C]">beaches</span>, <span className="font-medium text-[#2B5D8C]">visa</span>, <span className="font-medium text-[#2B5D8C]">budget</span>, or <span className="font-medium text-[#2B5D8C]">food</span>
                  </p>
                </div>
              )}
            </>
          ) : (
            <>
              {recentSearches.length > 0 && (
                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 animate-fade-in">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider px-1">
                    Recent Searches
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => setSearchQuery(search)}
                        className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200 border border-pink-300 hover:border-[#2B5D8C] rounded-full text-xs sm:text-sm text-[#2B5D8C] hover:text-[#2B5D8C] transition-all font-medium shadow-sm hover:shadow min-h-[40px]"
                      >
                        <Search className="w-3 h-3 inline mr-1.5" />
                        {search}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 animate-fade-in">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider px-1">
                  Popular Searches
                </p>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleNavigate(search.path)}
                      className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-pink-50 hover:to-pink-100 border border-gray-200 hover:border-[#2B5D8C] rounded-full text-xs sm:text-sm text-gray-700 hover:text-[#2B5D8C] transition-all font-medium shadow-sm hover:shadow min-h-[40px]"
                    >
                      {search.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 sm:pt-6">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider px-1 mb-3 sm:mb-4">
                  Quick Links
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {quickLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => handleNavigate(link.path)}
                        className="flex items-start p-3 sm:p-4 bg-white hover:bg-gradient-to-br hover:from-pink-50 hover:to-pink-100 border border-gray-200 hover:border-[#2B5D8C] rounded-xl text-left transition-all group min-h-[60px]"
                      >
                        <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-pink-500 to-[#2B5D8C] group-hover:from-[#2B5D8C] group-hover:to-[#2B5D8C] rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all mr-2.5 sm:mr-3">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2B5D8C] mb-0.5">
                            {link.label}
                          </h3>
                          <p className="text-xs text-gray-600 group-hover:text-[#2B5D8C]">
                            {link.description}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>

        <div className="border-t border-gray-200 px-4 sm:px-5 py-2.5 sm:py-3 bg-gray-50 rounded-b-xl sm:rounded-b-2xl">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="hidden sm:flex items-center space-x-3">
              <span className="flex items-center">
                <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs font-mono mr-1 shadow-sm">
                  UP
                </kbd>
                <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs font-mono mr-1 shadow-sm">
                  DOWN
                </kbd>
                navigate
              </span>
              <span className="flex items-center">
                <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs font-mono mr-1 shadow-sm">
                  ENTER
                </kbd>
                select
              </span>
              <span className="flex items-center">
                <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs font-mono mr-1 shadow-sm">
                  ESC
                </kbd>
                close
              </span>
            </div>
            <span className="text-gray-400 text-xs sm:text-xs">Type to search...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
