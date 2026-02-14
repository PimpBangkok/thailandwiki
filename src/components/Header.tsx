import { Menu, X, ChevronDown, Search, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SearchModal } from './SearchModal';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const handleMouseEnter = (menu: string) => {
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const toggleMobileDropdown = (menu: string) => {
    setMobileOpenDropdown(mobileOpenDropdown === menu ? null : menu);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div>
              <h1 className="text-2xl lg:text-3xl font-light text-[#2B5D8C] group-hover:text-[#2B5D8C] transition-colors uppercase tracking-[2px]">
                ThailandWiki
              </h1>
              <p className="text-xs text-gray-500 font-light tracking-wide mt-0.5">
                Your Complete Guide to Thailand
              </p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('destinations')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-[#2B5D8C] transition-colors uppercase tracking-[1.5px] text-sm font-light"
                aria-expanded={openDropdown === 'destinations'}
                aria-haspopup="true"
              >
                Destinations
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </button>
              {openDropdown === 'destinations' && (
                <div className="absolute top-full left-0 mt-2 w-[600px] bg-white shadow-xl rounded-lg p-6 animate-fade-in">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wider">Central Thailand</h3>
                      <ul className="space-y-2">
                        <li><Link to="/destinations/bangkok" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">• Bangkok</Link></li>
                        <li><Link to="/destinations" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">• Ayutthaya</Link></li>
                        <li><Link to="/destinations" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">• Kanchanaburi</Link></li>
                      </ul>
                      <h3 className="font-semibold text-gray-900 mb-3 mt-6 text-sm uppercase tracking-wider">Northern Thailand</h3>
                      <ul className="space-y-2">
                        <li><Link to="/destinations/chiang-mai" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">• Chiang Mai</Link></li>
                        <li><Link to="/destinations" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">• Chiang Rai</Link></li>
                        <li><Link to="/destinations" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">• Pai</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wider">Southern Thailand</h3>
                      <ul className="space-y-2">
                        <li><Link to="/destinations/phuket" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">• Phuket</Link></li>
                        <li><Link to="/destinations/koh-samui" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">• Koh Samui</Link></li>
                        <li><Link to="/destinations/krabi" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">• Krabi</Link></li>
                        <li><Link to="/destinations" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">• Pattaya</Link></li>
                        <li><Link to="/destinations" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">• Koh Phangan</Link></li>
                        <li><Link to="/destinations" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">• Koh Tao</Link></li>
                      </ul>
                      <h3 className="font-semibold text-gray-900 mb-3 mt-6 text-sm uppercase tracking-wider">Eastern Thailand</h3>
                      <ul className="space-y-2">
                        <li><Link to="/destinations" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">• Ko Chang</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="border-t mt-6 pt-4">
                    <Link to="/destinations" className="text-[#2B5D8C] hover:text-[#2B5D8C] text-sm font-medium inline-flex items-center gap-2">
                      View All Destinations →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('things-to-do')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-[#2B5D8C] transition-colors uppercase tracking-[1.5px] text-sm font-light"
                aria-expanded={openDropdown === 'things-to-do'}
                aria-haspopup="true"
              >
                Things to Do
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </button>
              {openDropdown === 'things-to-do' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg p-6 animate-fade-in">
                  <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">All Activities</h3>
                  <ul className="space-y-2">
                    <li><Link to="/things-to-do" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">Water Activities</Link></li>
                    <li><Link to="/things-to-do" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">Adventure & Outdoor</Link></li>
                    <li><Link to="/culture" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">Temples & Culture</Link></li>
                    <li><Link to="/food-dining" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">Food Experiences</Link></li>
                    <li><Link to="/things-to-do" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">Nightlife & Entertainment</Link></li>
                    <li><Link to="/things-to-do" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">Wellness & Spa</Link></li>
                    <li><Link to="/things-to-do" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">Shopping</Link></li>
                    <li><Link to="/things-to-do" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">Unique Experiences</Link></li>
                  </ul>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('where-to-stay')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-[#2B5D8C] transition-colors uppercase tracking-[1.5px] text-sm font-light"
                aria-expanded={openDropdown === 'where-to-stay'}
                aria-haspopup="true"
              >
                Where to Stay
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </button>
              {openDropdown === 'where-to-stay' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg p-6 animate-fade-in">
                  <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">All Accommodation</h3>
                  <ul className="space-y-2">
                    <li><Link to="/accommodation" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">Hotels</Link></li>
                    <li><Link to="/accommodation" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">Beach Resorts</Link></li>
                    <li><Link to="/accommodation" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">Villas & Vacation Rentals</Link></li>
                    <li><Link to="/accommodation" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">Hostels & Budget</Link></li>
                    <li><Link to="/accommodation" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">Unique Stays</Link></li>
                  </ul>
                  <div className="border-t mt-4 pt-4">
                    <Link to="/destinations" className="text-[#2B5D8C] hover:text-[#2B5D8C] text-sm font-medium inline-flex items-center gap-2">
                      By Destination →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('food')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-[#2B5D8C] transition-colors uppercase tracking-[1.5px] text-sm font-light"
                aria-expanded={openDropdown === 'food'}
                aria-haspopup="true"
              >
                Food & Dining
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </button>
              {openDropdown === 'food' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg p-6 animate-fade-in">
                  <ul className="space-y-2">
                    <li><Link to="/food-dining" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">Thai Cuisine Guide</Link></li>
                    <li><Link to="/food-dining" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">Best Restaurants</Link></li>
                    <li><Link to="/food-dining" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">Street Food Guide</Link></li>
                    <li><Link to="/food-dining" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">Michelin Star Dining</Link></li>
                    <li><Link to="/food-dining" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">Cooking Classes</Link></li>
                    <li><Link to="/food-dining" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">Food Tours</Link></li>
                    <li><Link to="/food-dining" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">Regional Specialties</Link></li>
                  </ul>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('plan')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-[#2B5D8C] transition-colors uppercase tracking-[1.5px] text-sm font-light"
                aria-expanded={openDropdown === 'plan'}
                aria-haspopup="true"
              >
                Plan Your Trip
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </button>
              {openDropdown === 'plan' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg p-6 animate-fade-in">
                  <ul className="space-y-2">
                    <li><Link to="/travel-planning" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">First Time in Thailand</Link></li>
                    <li><Link to="/itineraries" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">Itineraries</Link></li>
                    <li><Link to="/visa-guide" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">Visa & Entry Requirements</Link></li>
                    <li><Link to="/budget-guide" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">Budget & Costs</Link></li>
                    <li><Link to="/travel-planning" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">Transportation Guide</Link></li>
                    <li><Link to="/best-time-to-visit" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">When to Visit</Link></li>
                    <li><Link to="/travel-planning" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">Safety & Health</Link></li>
                    <li><Link to="/travel-planning" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">Travel Insurance</Link></li>
                    <li><Link to="/travel-planning" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">Packing Guide</Link></li>
                    <li><Link to="/travel-planning" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">Thailand FAQ</Link></li>
                  </ul>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('culture')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-[#2B5D8C] transition-colors uppercase tracking-[1.5px] text-sm font-light"
                aria-expanded={openDropdown === 'culture'}
                aria-haspopup="true"
              >
                Culture
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </button>
              {openDropdown === 'culture' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg p-6 animate-fade-in">
                  <ul className="space-y-2">
                    <li><Link to="/culture" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">Thai Culture & Customs</Link></li>
                    <li><Link to="/culture" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">Temples & Buddhism</Link></li>
                    <li><Link to="/culture" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">Festivals & Events</Link></li>
                    <li><Link to="/culture" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">Language & Phrases</Link></li>
                    <li><Link to="/culture" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">Etiquette Guide</Link></li>
                    <li><Link to="/culture" className="text-gray-600 hover:text-[#2B5D8C] text-sm block py-1">History</Link></li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4 ml-8">
            <button
              onClick={() => setSearchModalOpen(true)}
              className="group relative p-2 text-gray-700 hover:text-[#2B5D8C] transition-colors"
              aria-label="Search site"
            >
              <Search className="w-5 h-5" />
              <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Search (Cmd+K)
              </div>
            </button>
            <Link to="/contact" className="p-2 text-gray-700 hover:text-[#2B5D8C] transition-colors" aria-label="Contact us">
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>

          <button
            className="lg:hidden p-3 text-gray-700 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-200 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-2">
              <div>
                <button
                  onClick={() => toggleMobileDropdown('destinations')}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-[#2B5D8C] py-3 uppercase tracking-[2px] text-sm font-light"
                  aria-expanded={mobileOpenDropdown === 'destinations'}
                  aria-haspopup="true"
                >
                  Destinations
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileOpenDropdown === 'destinations' ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                {mobileOpenDropdown === 'destinations' && (
                  <div className="pl-4 py-2 space-y-1">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Central Thailand</p>
                    <Link to="/destinations/bangkok" className="block text-sm text-gray-600 py-2 min-h-[44px] flex items-center" onClick={() => setMobileMenuOpen(false)}>• Bangkok</Link>
                    <Link to="/destinations" className="block text-sm text-gray-600 py-2 min-h-[44px] flex items-center" onClick={() => setMobileMenuOpen(false)}>• Ayutthaya</Link>
                    <Link to="/destinations" className="block text-sm text-gray-600 py-2 min-h-[44px] flex items-center" onClick={() => setMobileMenuOpen(false)}>• Kanchanaburi</Link>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 mt-3">Southern Thailand</p>
                    <Link to="/destinations/phuket" className="block text-sm text-gray-600 py-2 min-h-[44px] flex items-center" onClick={() => setMobileMenuOpen(false)}>• Phuket</Link>
                    <Link to="/destinations/koh-samui" className="block text-sm text-gray-600 py-2 min-h-[44px] flex items-center" onClick={() => setMobileMenuOpen(false)}>• Koh Samui</Link>
                    <Link to="/destinations/krabi" className="block text-sm text-gray-600 py-2 min-h-[44px] flex items-center" onClick={() => setMobileMenuOpen(false)}>• Krabi</Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleMobileDropdown('things-to-do')}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-[#2B5D8C] py-3 uppercase tracking-[2px] text-sm font-light"
                  aria-expanded={mobileOpenDropdown === 'things-to-do'}
                  aria-haspopup="true"
                >
                  Things to Do
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileOpenDropdown === 'things-to-do' ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                {mobileOpenDropdown === 'things-to-do' && (
                  <div className="pl-4 py-2 space-y-1">
                    <Link to="/things-to-do" className="block text-sm text-gray-600 py-2 min-h-[44px] flex items-center" onClick={() => setMobileMenuOpen(false)}>Water Activities</Link>
                    <Link to="/things-to-do" className="block text-sm text-gray-600 py-2 min-h-[44px] flex items-center" onClick={() => setMobileMenuOpen(false)}>Adventure & Outdoor</Link>
                    <Link to="/food-dining" className="block text-sm text-gray-600 py-2 min-h-[44px] flex items-center" onClick={() => setMobileMenuOpen(false)}>Food Experiences</Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleMobileDropdown('where-to-stay')}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-[#2B5D8C] py-3 uppercase tracking-[2px] text-sm font-light"
                  aria-expanded={mobileOpenDropdown === 'where-to-stay'}
                  aria-haspopup="true"
                >
                  Where to Stay
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileOpenDropdown === 'where-to-stay' ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                {mobileOpenDropdown === 'where-to-stay' && (
                  <div className="pl-4 py-2 space-y-1">
                    <Link to="/accommodation" className="block text-sm text-gray-600 py-2 min-h-[44px] flex items-center" onClick={() => setMobileMenuOpen(false)}>Hotels</Link>
                    <Link to="/accommodation" className="block text-sm text-gray-600 py-2 min-h-[44px] flex items-center" onClick={() => setMobileMenuOpen(false)}>Beach Resorts</Link>
                    <Link to="/accommodation" className="block text-sm text-gray-600 py-2 min-h-[44px] flex items-center" onClick={() => setMobileMenuOpen(false)}>Hostels & Budget</Link>
                  </div>
                )}
              </div>

              <Link to="/food-dining" className="text-gray-700 hover:text-[#2B5D8C] py-3 uppercase tracking-[2px] text-sm font-light" onClick={() => setMobileMenuOpen(false)}>
                Food & Dining
              </Link>
              <Link to="/travel-planning" className="text-gray-700 hover:text-[#2B5D8C] py-3 uppercase tracking-[2px] text-sm font-light" onClick={() => setMobileMenuOpen(false)}>
                Plan Your Trip
              </Link>
              <Link to="/culture" className="text-gray-700 hover:text-[#2B5D8C] py-3 uppercase tracking-[2px] text-sm font-light" onClick={() => setMobileMenuOpen(false)}>
                Culture
              </Link>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200 mt-2">
                <button
                  onClick={() => {
                    setSearchModalOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 text-gray-700 hover:text-[#2B5D8C] text-sm py-2 min-h-[44px]"
                >
                  <Search className="w-5 h-5" />
                  Search
                </button>
                <Link to="/contact" className="flex items-center gap-2 text-gray-700 hover:text-[#2B5D8C] text-sm py-2 min-h-[44px]" onClick={() => setMobileMenuOpen(false)}>
                  <MessageCircle className="w-5 h-5" />
                  Chat
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />
    </nav>
  );
}
