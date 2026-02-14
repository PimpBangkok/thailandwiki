import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Search, MapPin, FileText, Compass, Hotel, ChevronLeft, ChevronRight, Filter, X } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';

interface SearchResult {
  title: string;
  description?: string;
  path: string;
  category: 'destinations' | 'guides' | 'things-to-do' | 'accommodation';
}

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

const RESULTS_PER_PAGE = 10;

const categoryLabels: Record<SearchResult['category'], { label: string; icon: typeof MapPin }> = {
  destinations: { label: 'Destinations', icon: MapPin },
  guides: { label: 'Travel Guides', icon: FileText },
  'things-to-do': { label: 'Things to Do', icon: Compass },
  accommodation: { label: 'Hotels & Accommodation', icon: Hotel },
};

export default function SearchResultsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(query);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<SearchResult['category'] | 'all'>('all');

  useEffect(() => {
    setSearchQuery(query);
    setCurrentPage(1);
  }, [query]);

  const filteredResults = searchableContent.filter((item) => {
    const matchesQuery =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;

    return matchesQuery && matchesCategory;
  });

  const totalPages = Math.ceil(filteredResults.length / RESULTS_PER_PAGE);
  const startIndex = (currentPage - 1) * RESULTS_PER_PAGE;
  const paginatedResults = filteredResults.slice(startIndex, startIndex + RESULTS_PER_PAGE);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery.trim() });
      setCurrentPage(1);
    }
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

  const categoryCounts = {
    all: searchableContent.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchQuery.toLowerCase())
    ).length,
    destinations: searchableContent.filter(item =>
      item.category === 'destinations' && (
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    ).length,
    guides: searchableContent.filter(item =>
      item.category === 'guides' && (
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    ).length,
    'things-to-do': searchableContent.filter(item =>
      item.category === 'things-to-do' && (
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    ).length,
    accommodation: searchableContent.filter(item =>
      item.category === 'accommodation' && (
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    ).length,
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow">
        <div className="bg-gradient-to-br from-[#D91680] to-[#D91680] text-white py-12">
          <div className="max-w-7xl mx-auto px-6">
            <Breadcrumb
              items={[
                { label: 'Home', path: '/' },
                { label: 'Search Results', path: '/search' },
              ]}
            />

            <h1 className="text-4xl font-bold mb-6">Search Results</h1>

            <form onSubmit={handleSearch} className="max-w-3xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search destinations, activities, hotels, travel tips..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-white/50 text-base text-gray-900"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setSearchParams({});
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </form>

            {query && (
              <p className="mt-4 text-pink-100">
                Found <span className="font-bold text-white">{filteredResults.length}</span> results for "{query}"
              </p>
            )}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="w-5 h-5 text-[#D91680]" />
                  <h2 className="text-lg font-bold text-gray-900">Filter by Category</h2>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setCurrentPage(1);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      selectedCategory === 'all'
                        ? 'bg-pink-100 text-[#D91680] font-semibold'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>All Results</span>
                      <span className="text-sm bg-gray-200 px-2 py-0.5 rounded-full">
                        {categoryCounts.all}
                      </span>
                    </div>
                  </button>

                  {(Object.keys(categoryLabels) as SearchResult['category'][]).map((category) => {
                    const { label, icon: Icon } = categoryLabels[category];
                    const count = categoryCounts[category];

                    return (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setCurrentPage(1);
                        }}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                          selectedCategory === category
                            ? 'bg-pink-100 text-[#D91680] font-semibold'
                            : 'hover:bg-gray-100 text-gray-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Icon className="w-4 h-4" />
                            <span>{label}</span>
                          </div>
                          <span className="text-sm bg-gray-200 px-2 py-0.5 rounded-full">
                            {count}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </aside>

            <div className="flex-1">
              {paginatedResults.length > 0 ? (
                <>
                  <div className="space-y-4 mb-8">
                    {paginatedResults.map((result, index) => {
                      const { icon: Icon } = categoryLabels[result.category];
                      return (
                        <div
                          key={index}
                          onClick={() => navigate(result.path)}
                          className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 cursor-pointer group border-2 border-transparent hover:border-[#D91680]"
                        >
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#D91680] to-[#D91680] rounded-lg flex items-center justify-center">
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="inline-block px-3 py-1 bg-pink-100 text-[#D91680] text-xs font-semibold rounded-full">
                                  {categoryLabels[result.category].label}
                                </span>
                              </div>
                              <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#D91680] mb-2">
                                {highlightMatch(result.title, searchQuery)}
                              </h3>
                              {result.description && (
                                <p className="text-gray-600 group-hover:text-[#D91680] leading-relaxed">
                                  {highlightMatch(result.description, searchQuery)}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 rounded-lg border-2 border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>

                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`px-4 py-2 rounded-lg border-2 transition-all ${
                            currentPage === page
                              ? 'bg-[#D91680] text-white border-[#D91680] font-bold'
                              : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {page}
                        </button>
                      ))}

                      <button
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 rounded-lg border-2 border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="bg-white rounded-xl shadow-md p-12 text-center">
                  <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-600 mb-6">
                    Try different keywords or adjust your filters
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="text-sm text-gray-500">Suggested searches:</span>
                    {['bangkok', 'beaches', 'visa', 'budget', 'food'].map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => {
                          setSearchQuery(suggestion);
                          setSearchParams({ q: suggestion });
                        }}
                        className="px-3 py-1 bg-pink-100 text-[#D91680] rounded-full text-sm font-medium hover:bg-pink-200 transition-all"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
