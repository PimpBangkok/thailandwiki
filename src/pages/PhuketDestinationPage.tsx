import { ArrowRight, Waves, Ship, Activity, Music, Landmark, PartyPopper, Palmtree, TreePalm, Gem, MapPin, Home, Fish, Flame, Globe, ShoppingBag, Wine, ChefHat, Calendar, Users, Heart, Moon, Anchor, Plane, Car, DollarSign, Info, MessageCircle } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import RelatedGuides from '../components/RelatedGuides';
import { usePageMeta } from '../hooks/usePageMeta';

export default function PhuketDestinationPage() {
  usePageMeta({
    title: 'Phuket Travel Guide 2026 - Complete Island Paradise Guide | ThailandWiki',
    description: 'Ultimate Phuket guide with 2,634 articles on beaches, island hopping, diving, nightlife, hotels, and activities. Discover Thailand\'s largest and most popular island.',
  });
  const relatedGuides = [
    {
      title: 'Bangkok Ultimate Guide',
      excerpt: 'Complete guide to Thailand\'s capital. Temples, street food, markets, nightlife, and navigating the city like a local.',
      image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/bangkok'
    },
    {
      title: 'Phi Phi Islands Day Trip',
      excerpt: 'Everything you need to know about visiting Phi Phi from Phuket. Tours, schedules, what to bring, and island hopping tips.',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/things-to-do'
    },
    {
      title: 'Best Time to Visit Phuket',
      excerpt: 'Month-by-month weather guide for Phuket. High season, rainy season, and the best time for beaches and diving.',
      image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/practical'
    },
    {
      title: 'Phuket Diving & Snorkeling',
      excerpt: 'Best dive sites around Phuket, PADI courses, liveaboards, and snorkeling spots for beginners and experts.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/things-to-do'
    }
  ];

  return (
    <>
      <div className="relative h-[70vh] min-h-[500px] bg-gradient-to-b from-[#D91680] to-[#D91680]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=1920')"
          }}
        />
        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="text-center max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-light mb-6 uppercase tracking-wider">
              Phuket Travel Guide
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-8 tracking-wide">
              Thailand's Largest Island Paradise
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm uppercase tracking-wider font-light">
              <span>2,634 Articles</span>
              <span>-</span>
              <span>Updated February 2026</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Destinations', href: '/destinations' },
              { label: 'Southern Thailand', href: '/destinations/southern-thailand' },
              { label: 'Phuket', href: '/destinations/phuket' }
            ]}
          />
        </div>
      </div>

      <div className="sticky top-16 bg-white border-b border-gray-200 shadow-sm z-40">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <nav className="flex overflow-x-auto scrollbar-hide">
            <a href="#overview" className="px-4 py-4 text-sm font-medium text-gray-700 hover:text-[#D91680] hover:border-b-2 hover:border-[#D91680] whitespace-nowrap uppercase tracking-wide transition-colors">
              Overview
            </a>
            <a href="#beaches" className="px-4 py-4 text-sm font-medium text-gray-700 hover:text-[#D91680] hover:border-b-2 hover:border-[#D91680] whitespace-nowrap uppercase tracking-wide transition-colors">
              Beaches
            </a>
            <a href="#things-to-do" className="px-4 py-4 text-sm font-medium text-gray-700 hover:text-[#D91680] hover:border-b-2 hover:border-[#D91680] whitespace-nowrap uppercase tracking-wide transition-colors">
              Things to Do
            </a>
            <a href="#where-to-stay" className="px-4 py-4 text-sm font-medium text-gray-700 hover:text-[#D91680] hover:border-b-2 hover:border-[#D91680] whitespace-nowrap uppercase tracking-wide transition-colors">
              Where to Stay
            </a>
            <a href="#food" className="px-4 py-4 text-sm font-medium text-gray-700 hover:text-[#D91680] hover:border-b-2 hover:border-[#D91680] whitespace-nowrap uppercase tracking-wide transition-colors">
              Food & Dining
            </a>
            <a href="#island-hopping" className="px-4 py-4 text-sm font-medium text-gray-700 hover:text-[#D91680] hover:border-b-2 hover:border-[#D91680] whitespace-nowrap uppercase tracking-wide transition-colors">
              Island Hopping
            </a>
            <a href="#itineraries" className="px-4 py-4 text-sm font-medium text-gray-700 hover:text-[#D91680] hover:border-b-2 hover:border-[#D91680] whitespace-nowrap uppercase tracking-wide transition-colors">
              Itineraries
            </a>
            <a href="#practical" className="px-4 py-4 text-sm font-medium text-gray-700 hover:text-[#D91680] hover:border-b-2 hover:border-[#D91680] whitespace-nowrap uppercase tracking-wide transition-colors">
              Practical Info
            </a>
          </nav>
        </div>
      </div>

      <section id="overview" className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light mb-12 text-gray-900 uppercase tracking-wide text-center">
              Phuket at a Glance
            </h2>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-gray-700 font-light leading-relaxed text-lg mb-6">
                Phuket is Thailand's largest island and most popular beach destination, offering
                stunning beaches, crystal-clear waters, vibrant nightlife, and easy access to
                nearby islands. From the lively party scene of Patong to the tranquil beaches
                of the south, Phuket has something for every type of traveler.
              </p>
            </div>

            <div className="bg-pink-50 border-l-4 border-[#D91680] p-8 rounded-r-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 uppercase tracking-wide mb-6">
                Quick Facts
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-900 font-semibold mb-2">Best For:</p>
                  <p className="text-gray-700 font-light">
                    Beach lovers, water sports, island hopping, nightlife, families
                  </p>
                </div>

                <div>
                  <p className="text-gray-900 font-semibold mb-2">Best Time:</p>
                  <p className="text-gray-700 font-light">
                    November-March (dry season), avoid May-October (rainy)
                  </p>
                </div>

                <div>
                  <p className="text-gray-900 font-semibold mb-2">Recommended Stay:</p>
                  <p className="text-gray-700 font-light">
                    Minimum 4 days, ideal 7-10 days
                  </p>
                </div>

                <div>
                  <p className="text-gray-900 font-semibold mb-2">Daily Budget:</p>
                  <p className="text-gray-700 font-light">
                    $40-200+ depending on beach area
                  </p>
                </div>

                <div>
                  <p className="text-gray-900 font-semibold mb-2">Getting There:</p>
                  <p className="text-gray-700 font-light">
                    Phuket International Airport (HKT)
                  </p>
                </div>

                <div>
                  <p className="text-gray-900 font-semibold mb-2">Main Areas:</p>
                  <p className="text-gray-700 font-light">
                    Patong (party), Kata/Karon (family), Kamala (quiet), Bang Tao (luxury)
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a href="#beaches" className="inline-flex items-center space-x-2 bg-[#D91680] text-white px-8 py-4 rounded-lg hover:bg-[#D91680] transition-colors font-medium uppercase text-sm tracking-wider shadow-lg hover:shadow-xl">
                <span>Explore Phuket's Beaches</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="beaches" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900 uppercase tracking-wide text-center">
            Beaches & Beach Areas
          </h2>
          <p className="text-center text-gray-500 uppercase tracking-wider text-sm mb-16">150 Beach Guides</p>

          <div className="max-w-4xl mx-auto space-y-6 mb-12">
            <div className="bg-white border-l-4 border-[#D91680] p-6 rounded-r-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                    Patong Beach
                  </h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">30 articles</p>
                  <p className="text-gray-700 font-light leading-relaxed">
                    Busiest beach, nightlife hub, water sports
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-[#D91680] p-6 rounded-r-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                    Kata Beach
                  </h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">20 articles</p>
                  <p className="text-gray-700 font-light leading-relaxed">
                    Family-friendly, great swimming, surfing
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-[#D91680] p-6 rounded-r-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                    Karon Beach
                  </h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">20 articles</p>
                  <p className="text-gray-700 font-light leading-relaxed">
                    Long stretch, less crowded, good value
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-[#D91680] p-6 rounded-r-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                    Kamala Beach
                  </h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">15 articles</p>
                  <p className="text-gray-700 font-light leading-relaxed">
                    Quiet, upscale, authentic feel
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-[#D91680] p-6 rounded-r-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                    Surin Beach
                  </h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">15 articles</p>
                  <p className="text-gray-700 font-light leading-relaxed">
                    Upscale, beach clubs, trendy
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-[#D91680] p-6 rounded-r-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                    Nai Harn Beach
                  </h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">15 articles</p>
                  <p className="text-gray-700 font-light leading-relaxed">
                    Beautiful, locals' favorite, scenic
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-[#D91680] p-6 rounded-r-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                    Bang Tao Beach
                  </h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">15 articles</p>
                  <p className="text-gray-700 font-light leading-relaxed">
                    Luxury resorts, Laguna complex
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-[#D91680] p-6 rounded-r-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                    Freedom Beach
                  </h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">10 articles</p>
                  <p className="text-gray-700 font-light leading-relaxed">
                    Pristine, boat access, secluded
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-[#D91680] p-6 rounded-r-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                    Paradise Beach
                  </h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">10 articles</p>
                  <p className="text-gray-700 font-light leading-relaxed">
                    Beach club scene, day pass
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="#all-beaches" className="inline-flex items-center space-x-2 bg-[#D91680] text-white px-8 py-4 rounded-lg hover:bg-[#D91680] transition-colors font-medium uppercase text-sm tracking-wider shadow-lg hover:shadow-xl">
              <span>Explore All Phuket Beaches</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section id="things-to-do" className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-gray-900 uppercase tracking-wide text-center">
            Top Things to Do in Phuket
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-56 overflow-hidden">
                <img
                  loading="lazy"
                  src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Phuket beaches"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-[#D91680] text-white p-3 rounded-full shadow-lg">
                  <Waves className="w-6 h-6" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                  Beaches
                </h3>
                <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">150 guides</p>
                <ul className="space-y-2 mb-6">
                  <li className="text-gray-700 font-light flex items-start">
                    <span className="text-[#D91680] mr-2">-</span>
                    Patong Beach (busy, nightlife)
                  </li>
                  <li className="text-gray-700 font-light flex items-start">
                    <span className="text-[#D91680] mr-2">-</span>
                    Kata Beach (swimming, surfing)
                  </li>
                  <li className="text-gray-700 font-light flex items-start">
                    <span className="text-[#D91680] mr-2">-</span>
                    Nai Harn Beach (scenic, locals)
                  </li>
                  <li className="text-gray-700 font-light flex items-start">
                    <span className="text-[#D91680] mr-2">-</span>
                    Freedom Beach (pristine)
                  </li>
                  <li className="text-gray-700 font-light flex items-start">
                    <span className="text-[#D91680] mr-2">-</span>
                    Surin Beach (upscale)
                  </li>
                  <li className="text-gray-700 font-light flex items-start">
                    <span className="text-[#D91680] mr-2">-</span>
                    Karon Beach (family-friendly)
                  </li>
                </ul>
                <a href="#beaches" className="inline-flex items-center text-[#D91680] hover:text-[#D91680] font-medium uppercase text-sm tracking-wider group">
                  <span>Explore all Phuket beaches</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-56 overflow-hidden">
                <img
                  loading="lazy"
                  src="https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Phi Phi Islands"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-[#D91680] text-white p-3 rounded-full shadow-lg">
                  <Ship className="w-6 h-6" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                  Island Hopping
                </h3>
                <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">150 guides</p>
                <ul className="space-y-2 mb-6">
                  <li className="text-gray-700 font-light flex items-start">
                    <span className="text-[#D91680] mr-2">-</span>
                    Phi Phi Islands Day Trip
                  </li>
                  <li className="text-gray-700 font-light flex items-start">
                    <span className="text-[#D91680] mr-2">-</span>
                    James Bond Island Tour
                  </li>
                  <li className="text-gray-700 font-light flex items-start">
                    <span className="text-[#D91680] mr-2">-</span>
                    Similan Islands Diving
                  </li>
                  <li className="text-gray-700 font-light flex items-start">
                    <span className="text-[#D91680] mr-2">-</span>
                    Coral Island Snorkeling
                  </li>
                  <li className="text-gray-700 font-light flex items-start">
                    <span className="text-[#D91680] mr-2">-</span>
                    Racha Islands
                  </li>
                  <li className="text-gray-700 font-light flex items-start">
                    <span className="text-[#D91680] mr-2">-</span>
                    Private boat charters
                  </li>
                </ul>
                <a href="#island-hopping" className="inline-flex items-center text-[#D91680] hover:text-[#D91680] font-medium uppercase text-sm tracking-wider group">
                  <span>Browse island tours</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-56 overflow-hidden">
                <img
                  loading="lazy"
                  src="https://images.pexels.com/photos/1076884/pexels-photo-1076884.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Diving and water activities"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-[#D91680] text-white p-3 rounded-full shadow-lg">
                  <Activity className="w-6 h-6" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                  Water Activities
                </h3>
                <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">100 guides</p>
                <ul className="space-y-2 mb-6">
                  <li className="text-gray-700 font-light flex items-start">
                    <span className="text-[#D91680] mr-2">-</span>
                    Scuba Diving & Snorkeling
                  </li>
                  <li className="text-gray-700 font-light flex items-start">
                    <span className="text-[#D91680] mr-2">-</span>
                    Sea Kayaking
                  </li>
                  <li className="text-gray-700 font-light flex items-start">
                    <span className="text-[#D91680] mr-2">-</span>
                    Jet Skiing & Parasailing
                  </li>
                  <li className="text-gray-700 font-light flex items-start">
                    <span className="text-[#D91680] mr-2">-</span>
                    Stand-Up Paddleboarding
                  </li>
                  <li className="text-gray-700 font-light flex items-start">
                    <span className="text-[#D91680] mr-2">-</span>
                    Wakeboarding
                  </li>
                  <li className="text-gray-700 font-light flex items-start">
                    <span className="text-[#D91680] mr-2">-</span>
                    Sailing
                  </li>
                </ul>
                <a href="#water-activities" className="inline-flex items-center text-[#D91680] hover:text-[#D91680] font-medium uppercase text-sm tracking-wider group">
                  <span>Water activities guide</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-56 overflow-hidden">
                <img
                  loading="lazy"
                  src="https://images.pexels.com/photos/2306203/pexels-photo-2306203.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Bangla Road nightlife"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-[#D91680] text-white p-3 rounded-full shadow-lg">
                  <Music className="w-6 h-6" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                  Nightlife
                </h3>
                <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">100 guides</p>
                <ul className="space-y-2 mb-6">
                  <li className="text-gray-700 font-light flex items-start">
                    <span className="text-[#D91680] mr-2">-</span>
                    Bangla Road Scene
                  </li>
                  <li className="text-gray-700 font-light flex items-start">
                    <span className="text-[#D91680] mr-2">-</span>
                    Beach Clubs
                  </li>
                  <li className="text-gray-700 font-light flex items-start">
                    <span className="text-[#D91680] mr-2">-</span>
                    Illuzion Nightclub
                  </li>
                  <li className="text-gray-700 font-light flex items-start">
                    <span className="text-[#D91680] mr-2">-</span>
                    Simon Cabaret Show
                  </li>
                  <li className="text-gray-700 font-light flex items-start">
                    <span className="text-[#D91680] mr-2">-</span>
                    Rooftop Bars
                  </li>
                  <li className="text-gray-700 font-light flex items-start">
                    <span className="text-[#D91680] mr-2">-</span>
                    Live music venues
                  </li>
                </ul>
                <a href="#nightlife" className="inline-flex items-center text-[#D91680] hover:text-[#D91680] font-medium uppercase text-sm tracking-wider group">
                  <span>Nightlife guides</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-56 overflow-hidden">
                <img
                  loading="lazy"
                  src="https://images.pexels.com/photos/3566187/pexels-photo-3566187.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Big Buddha Phuket"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-[#D91680] text-white p-3 rounded-full shadow-lg">
                  <Landmark className="w-6 h-6" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                  Attractions
                </h3>
                <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">100 guides</p>
                <ul className="space-y-2 mb-6">
                  <li className="text-gray-700 font-light flex items-start">
                    <span className="text-[#D91680] mr-2">-</span>
                    Big Buddha
                  </li>
                  <li className="text-gray-700 font-light flex items-start">
                    <span className="text-[#D91680] mr-2">-</span>
                    Old Phuket Town
                  </li>
                  <li className="text-gray-700 font-light flex items-start">
                    <span className="text-[#D91680] mr-2">-</span>
                    Promthep Cape Viewpoint
                  </li>
                  <li className="text-gray-700 font-light flex items-start">
                    <span className="text-[#D91680] mr-2">-</span>
                    Wat Chalong Temple
                  </li>
                  <li className="text-gray-700 font-light flex items-start">
                    <span className="text-[#D91680] mr-2">-</span>
                    Phuket Elephant Sanctuary
                  </li>
                  <li className="text-gray-700 font-light flex items-start">
                    <span className="text-[#D91680] mr-2">-</span>
                    Cultural shows
                  </li>
                </ul>
                <a href="#attractions" className="inline-flex items-center text-[#D91680] hover:text-[#D91680] font-medium uppercase text-sm tracking-wider group">
                  <span>Attractions guide</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="where-to-stay" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900 uppercase tracking-wide text-center">
            Best Places to Stay in Phuket
          </h2>
          <p className="text-center text-gray-500 uppercase tracking-wider text-sm mb-16">450 guides</p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#D91680] hover:shadow-lg transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-[#D91680] text-white p-3 rounded-full">
                    <PartyPopper className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 uppercase tracking-wide">
                      Patong Beach
                    </h3>
                    <p className="text-sm text-gray-500 uppercase tracking-wider">120 guides</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-1">Best for:</p>
                  <p className="text-gray-700 font-light">Nightlife, shopping, restaurants, beach access, first-timers</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-1">Vibe:</p>
                  <p className="text-gray-700 font-light">Busy, touristy, lots of activities, 24/7 energy</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-1">Price Range:</p>
                  <p className="text-[#D91680] font-semibold text-lg">$15-300/night</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-1">Highlights:</p>
                  <p className="text-gray-700 font-light">Bangla Road nightlife, shopping, food variety</p>
                </div>
              </div>

              <a href="#patong-hotels" className="inline-flex items-center text-[#D91680] hover:text-[#D91680] font-medium uppercase text-sm tracking-wider group">
                <span>Browse Patong Hotels</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#D91680] hover:shadow-lg transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-[#D91680] text-white p-3 rounded-full">
                    <Waves className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 uppercase tracking-wide">
                      Kata & Karon
                    </h3>
                    <p className="text-sm text-gray-500 uppercase tracking-wider">90 guides</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-1">Best for:</p>
                  <p className="text-gray-700 font-light">Families, swimming, surfing, less crowded</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-1">Vibe:</p>
                  <p className="text-gray-700 font-light">Relaxed, beach-focused, good value, family-friendly</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-1">Price Range:</p>
                  <p className="text-[#D91680] font-semibold text-lg">$20-200/night</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-1">Highlights:</p>
                  <p className="text-gray-700 font-light">Great swimming beaches, surf season, family resorts</p>
                </div>
              </div>

              <a href="#kata-hotels" className="inline-flex items-center text-[#D91680] hover:text-[#D91680] font-medium uppercase text-sm tracking-wider group">
                <span>Browse Kata Hotels</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#D91680] hover:shadow-lg transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-[#D91680] text-white p-3 rounded-full">
                    <Palmtree className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 uppercase tracking-wide">
                      Kamala Beach
                    </h3>
                    <p className="text-sm text-gray-500 uppercase tracking-wider">60 guides</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-1">Best for:</p>
                  <p className="text-gray-700 font-light">Quiet beach time, families, romance, relaxation</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-1">Vibe:</p>
                  <p className="text-gray-700 font-light">Peaceful, upscale, less development, authentic</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-1">Price Range:</p>
                  <p className="text-[#D91680] font-semibold text-lg">$30-250/night</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-1">Highlights:</p>
                  <p className="text-gray-700 font-light">Quieter alternative to Patong, local feel</p>
                </div>
              </div>

              <a href="#kamala-hotels" className="inline-flex items-center text-[#D91680] hover:text-[#D91680] font-medium uppercase text-sm tracking-wider group">
                <span>Browse Kamala Hotels</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#D91680] hover:shadow-lg transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-[#D91680] text-white p-3 rounded-full">
                    <Gem className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 uppercase tracking-wide">
                      Bang Tao & Laguna
                    </h3>
                    <p className="text-sm text-gray-500 uppercase tracking-wider">60 guides</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-1">Best for:</p>
                  <p className="text-gray-700 font-light">Luxury resorts, golf, spa retreats, long stays</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-1">Vibe:</p>
                  <p className="text-gray-700 font-light">High-end, spacious, serene, sophisticated</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-1">Price Range:</p>
                  <p className="text-[#D91680] font-semibold text-lg">$100-800/night</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-1">Highlights:</p>
                  <p className="text-gray-700 font-light">Laguna complex, beach clubs, golf courses</p>
                </div>
              </div>

              <a href="#bangtao-hotels" className="inline-flex items-center text-[#D91680] hover:text-[#D91680] font-medium uppercase text-sm tracking-wider group">
                <span>Browse Bang Tao Hotels</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#D91680] hover:shadow-lg transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-[#D91680] text-white p-3 rounded-full">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 uppercase tracking-wide">
                      South Phuket - Rawai & Nai Harn
                    </h3>
                    <p className="text-sm text-gray-500 uppercase tracking-wider">60 guides</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-1">Best for:</p>
                  <p className="text-gray-700 font-light">Long-term stays, local vibe, diving access, peace</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-1">Vibe:</p>
                  <p className="text-gray-700 font-light">Authentic, expat favorite, less touristy</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-1">Price Range:</p>
                  <p className="text-[#D91680] font-semibold text-lg">$25-150/night</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-1">Highlights:</p>
                  <p className="text-gray-700 font-light">Local restaurants, diving, peaceful</p>
                </div>
              </div>

              <a href="#south-phuket" className="inline-flex items-center text-[#D91680] hover:text-[#D91680] font-medium uppercase text-sm tracking-wider group">
                <span>Browse South Phuket</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#D91680] hover:shadow-lg transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-[#D91680] text-white p-3 rounded-full">
                    <Home className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 uppercase tracking-wide">
                      Villas & Vacation Rentals
                    </h3>
                    <p className="text-sm text-gray-500 uppercase tracking-wider">100 guides</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <p className="text-gray-700 font-light leading-relaxed">
                  For groups or families, private villas with pools offer space, privacy,
                  and often better value than multiple hotel rooms.
                </p>
                <div>
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-1">Best for:</p>
                  <p className="text-gray-700 font-light">Groups, families, special occasions</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-1">Price Range:</p>
                  <p className="text-[#D91680] font-semibold text-lg">$150-1,000+/night</p>
                </div>
              </div>

              <a href="#phuket-villas" className="inline-flex items-center text-[#D91680] hover:text-[#D91680] font-medium uppercase text-sm tracking-wider group">
                <span>Browse Phuket Villas</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="text-center">
            <a href="#all-accommodation" className="inline-flex items-center space-x-2 bg-[#D91680] text-white px-8 py-4 rounded-lg hover:bg-[#D91680] transition-colors font-medium uppercase text-sm tracking-wider shadow-lg hover:shadow-xl">
              <span>View All Phuket Accommodation</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section id="food" className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900 uppercase tracking-wide text-center">
            Food & Dining in Phuket
          </h2>
          <p className="text-center text-gray-500 uppercase tracking-wider text-sm mb-16">350 Restaurant & Food Guides</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#D91680] hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-[#D91680] text-white p-3 rounded-full">
                  <Fish className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide">
                    Seafood Restaurants
                  </h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">80 guides</p>
                </div>
              </div>
              <p className="text-gray-700 font-light leading-relaxed">
                Fresh seafood from local waters, beachfront dining, market seafood grills
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#D91680] hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-[#D91680] text-white p-3 rounded-full">
                  <Flame className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide">
                    Thai Restaurants
                  </h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">80 guides</p>
                </div>
              </div>
              <p className="text-gray-700 font-light leading-relaxed">
                Authentic Southern Thai cuisine, local favorites, modern Thai
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#D91680] hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-[#D91680] text-white p-3 rounded-full">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide">
                    International Dining
                  </h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">60 guides</p>
                </div>
              </div>
              <p className="text-gray-700 font-light leading-relaxed">
                Italian, French, Japanese, Indian, Western comfort food
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#D91680] hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-[#D91680] text-white p-3 rounded-full">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide">
                    Street Food & Local Markets
                  </h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">60 guides</p>
                </div>
              </div>
              <p className="text-gray-700 font-light leading-relaxed">
                Night markets, local food stalls, authentic cheap eats
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#D91680] hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-[#D91680] text-white p-3 rounded-full">
                  <Wine className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide">
                    Fine Dining & Rooftop
                  </h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">40 guides</p>
                </div>
              </div>
              <p className="text-gray-700 font-light leading-relaxed">
                Michelin-level dining, sunset restaurants, special occasions
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#D91680] hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-[#D91680] text-white p-3 rounded-full">
                  <ChefHat className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide">
                    Cooking Classes
                  </h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">30 guides</p>
                </div>
              </div>
              <p className="text-gray-700 font-light leading-relaxed">
                Thai cooking schools, market tours, hands-on experiences
              </p>
            </div>
          </div>

          <div className="text-center">
            <a href="#all-food-guides" className="inline-flex items-center space-x-2 bg-[#D91680] text-white px-8 py-4 rounded-lg hover:bg-[#D91680] transition-colors font-medium uppercase text-sm tracking-wider shadow-lg hover:shadow-xl">
              <span>Explore All Phuket Food Guides</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section id="itineraries" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900 uppercase tracking-wide text-center">
            Itineraries & Trip Planning
          </h2>
          <p className="text-center text-gray-500 uppercase tracking-wider text-sm mb-16">250 Phuket Itineraries</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#D91680] hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-[#D91680] text-white p-3 rounded-full">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide">
                  3-Day Phuket Itinerary
                </h3>
              </div>
              <p className="text-gray-700 font-light leading-relaxed mb-6">
                Perfect first-time itinerary hitting best beaches and attractions
              </p>
              <a href="#3-day-itinerary" className="inline-flex items-center text-[#D91680] hover:text-[#D91680] font-medium uppercase text-sm tracking-wider group">
                <span>Read Full Itinerary</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#D91680] hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-[#D91680] text-white p-3 rounded-full">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide">
                  5-Day Phuket Itinerary
                </h3>
              </div>
              <p className="text-gray-700 font-light leading-relaxed mb-6">
                Complete island experience with island hopping day trips
              </p>
              <a href="#5-day-itinerary" className="inline-flex items-center text-[#D91680] hover:text-[#D91680] font-medium uppercase text-sm tracking-wider group">
                <span>Read Full Itinerary</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#D91680] hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-[#D91680] text-white p-3 rounded-full">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide">
                  7-Day Phuket & Islands
                </h3>
              </div>
              <p className="text-gray-700 font-light leading-relaxed mb-6">
                Comprehensive exploration including Phi Phi Islands
              </p>
              <a href="#7-day-itinerary" className="inline-flex items-center text-[#D91680] hover:text-[#D91680] font-medium uppercase text-sm tracking-wider group">
                <span>Read Full Itinerary</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#D91680] hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-[#D91680] text-white p-3 rounded-full">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide">
                  Weekend in Phuket
                </h3>
              </div>
              <p className="text-gray-700 font-light leading-relaxed mb-6">
                Make the most of a quick 2-3 day visit
              </p>
              <a href="#weekend-itinerary" className="inline-flex items-center text-[#D91680] hover:text-[#D91680] font-medium uppercase text-sm tracking-wider group">
                <span>Read Full Itinerary</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#D91680] hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-[#D91680] text-white p-3 rounded-full">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide">
                  Phuket with Kids
                </h3>
              </div>
              <p className="text-gray-700 font-light leading-relaxed mb-6">
                Family-friendly beaches, activities, and restaurants
              </p>
              <a href="#family-itinerary" className="inline-flex items-center text-[#D91680] hover:text-[#D91680] font-medium uppercase text-sm tracking-wider group">
                <span>Read Full Itinerary</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#D91680] hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-[#D91680] text-white p-3 rounded-full">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide">
                  Phuket on a Budget
                </h3>
              </div>
              <p className="text-gray-700 font-light leading-relaxed mb-6">
                Beach paradise on a backpacker budget
              </p>
              <a href="#budget-itinerary" className="inline-flex items-center text-[#D91680] hover:text-[#D91680] font-medium uppercase text-sm tracking-wider group">
                <span>Read Full Itinerary</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#D91680] hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-[#D91680] text-white p-3 rounded-full">
                  <Gem className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide">
                  Luxury Phuket Experience
                </h3>
              </div>
              <p className="text-gray-700 font-light leading-relaxed mb-6">
                5-star resorts, fine dining, and exclusive experiences
              </p>
              <a href="#luxury-itinerary" className="inline-flex items-center text-[#D91680] hover:text-[#D91680] font-medium uppercase text-sm tracking-wider group">
                <span>Read Full Itinerary</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#D91680] hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-[#D91680] text-white p-3 rounded-full">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide">
                  Phuket for Couples
                </h3>
              </div>
              <p className="text-gray-700 font-light leading-relaxed mb-6">
                Romantic getaway with sunset views and intimate dining
              </p>
              <a href="#couples-itinerary" className="inline-flex items-center text-[#D91680] hover:text-[#D91680] font-medium uppercase text-sm tracking-wider group">
                <span>Read Full Itinerary</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#D91680] hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-[#D91680] text-white p-3 rounded-full">
                  <Waves className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide">
                  Phuket Water Sports Adventure
                </h3>
              </div>
              <p className="text-gray-700 font-light leading-relaxed mb-6">
                Action-packed itinerary for water sports enthusiasts
              </p>
              <a href="#watersports-itinerary" className="inline-flex items-center text-[#D91680] hover:text-[#D91680] font-medium uppercase text-sm tracking-wider group">
                <span>Read Full Itinerary</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#D91680] hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-[#D91680] text-white p-3 rounded-full">
                  <Moon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide">
                  Phuket Nightlife Guide
                </h3>
              </div>
              <p className="text-gray-700 font-light leading-relaxed mb-6">
                Experience the best of Bangla Road and beyond
              </p>
              <a href="#nightlife-guide" className="inline-flex items-center text-[#D91680] hover:text-[#D91680] font-medium uppercase text-sm tracking-wider group">
                <span>Read Full Itinerary</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#D91680] hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-[#D91680] text-white p-3 rounded-full">
                  <Anchor className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide">
                  Phuket Diving & Snorkeling
                </h3>
              </div>
              <p className="text-gray-700 font-light leading-relaxed mb-6">
                Explore underwater wonders and coral reefs
              </p>
              <a href="#diving-itinerary" className="inline-flex items-center text-[#D91680] hover:text-[#D91680] font-medium uppercase text-sm tracking-wider group">
                <span>Read Full Itinerary</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#D91680] hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-[#D91680] text-white p-3 rounded-full">
                  <Ship className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide">
                  Island Hopping from Phuket
                </h3>
              </div>
              <p className="text-gray-700 font-light leading-relaxed mb-6">
                Complete guide to all nearby islands and day trips
              </p>
              <a href="#island-hopping-guide" className="inline-flex items-center text-[#D91680] hover:text-[#D91680] font-medium uppercase text-sm tracking-wider group">
                <span>Read Full Itinerary</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="text-center">
            <a href="#all-itineraries" className="inline-flex items-center space-x-2 bg-[#D91680] text-white px-8 py-4 rounded-lg hover:bg-[#D91680] transition-colors font-medium uppercase text-sm tracking-wider shadow-lg hover:shadow-xl">
              <span>Browse All Phuket Itineraries</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section id="island-hopping" className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900 uppercase tracking-wide text-center">
            Island Hopping & Day Trips
          </h2>
          <p className="text-center text-gray-500 uppercase tracking-wider text-sm mb-16">Popular Islands from Phuket</p>

          <div className="max-w-4xl mx-auto space-y-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-[#D91680] text-white p-4 rounded-full flex-shrink-0">
                  <Ship className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                    Phi Phi Islands
                  </h3>
                  <p className="text-gray-700 font-light leading-relaxed text-lg">
                    Iconic limestone cliffs, snorkeling, Maya Bay
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-[#D91680] text-white p-4 rounded-full flex-shrink-0">
                  <Ship className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                    James Bond Island
                  </h3>
                  <p className="text-gray-700 font-light leading-relaxed text-lg">
                    Famous karst rock, Phang Nga Bay
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-[#D91680] text-white p-4 rounded-full flex-shrink-0">
                  <Ship className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                    Similan Islands
                  </h3>
                  <p className="text-gray-700 font-light leading-relaxed text-lg">
                    World-class diving, pristine beaches (Nov-Apr only)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-[#D91680] text-white p-4 rounded-full flex-shrink-0">
                  <Ship className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                    Coral Island
                  </h3>
                  <p className="text-gray-700 font-light leading-relaxed text-lg">
                    Easy day trip, water sports, snorkeling
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-[#D91680] text-white p-4 rounded-full flex-shrink-0">
                  <Ship className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                    Racha Islands
                  </h3>
                  <p className="text-gray-700 font-light leading-relaxed text-lg">
                    Crystal clear water, diving, quieter
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="#island-guide" className="inline-flex items-center space-x-2 bg-[#D91680] text-white px-8 py-4 rounded-lg hover:bg-[#D91680] transition-colors font-medium uppercase text-sm tracking-wider shadow-lg hover:shadow-xl">
              <span>Complete Island Hopping Guide</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section id="practical" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-gray-900 uppercase tracking-wide text-center">
            Practical Information
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#D91680] hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-[#D91680] text-white p-3 rounded-full flex-shrink-0">
                  <Plane className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                    Getting to Phuket
                  </h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    Phuket International Airport (HKT), direct flights from Asia/Europe/Australia
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#D91680] hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-[#D91680] text-white p-3 rounded-full flex-shrink-0">
                  <Car className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                    Getting Around
                  </h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    Rental cars, taxis, songthaews (shared taxis), Grab app, motorbike rentals
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#D91680] hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-[#D91680] text-white p-3 rounded-full flex-shrink-0">
                  <Calendar className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                    Best Time to Visit
                  </h3>
                  <div className="space-y-2">
                    <p className="text-gray-700 font-light leading-relaxed">
                      <span className="font-semibold">Nov-Mar:</span> Dry season, perfect weather
                    </p>
                    <p className="text-gray-700 font-light leading-relaxed">
                      <span className="font-semibold">Apr-May:</span> Hot season, fewer crowds
                    </p>
                    <p className="text-gray-700 font-light leading-relaxed">
                      <span className="font-semibold">Jun-Oct:</span> Rainy season, best deals
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#D91680] hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-[#D91680] text-white p-3 rounded-full flex-shrink-0">
                  <DollarSign className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                    Budget & Costs
                  </h3>
                  <div className="space-y-2">
                    <p className="text-gray-700 font-light leading-relaxed">
                      <span className="font-semibold">Budget:</span> $40-60/day
                    </p>
                    <p className="text-gray-700 font-light leading-relaxed">
                      <span className="font-semibold">Mid-range:</span> $80-150/day
                    </p>
                    <p className="text-gray-700 font-light leading-relaxed">
                      <span className="font-semibold">Luxury:</span> $200+/day
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#D91680] hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-[#D91680] text-white p-3 rounded-full flex-shrink-0">
                  <Info className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                    Safety & Health
                  </h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    Beach safety, sun protection, hospitals, travel insurance
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#D91680] hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-[#D91680] text-white p-3 rounded-full flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                    Day Trips from Phuket
                  </h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    Phi Phi Islands, James Bond Island, Khao Sok, Krabi, Phang Nga Bay
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="#practical-guide" className="inline-flex items-center space-x-2 bg-[#D91680] text-white px-8 py-4 rounded-lg hover:bg-[#D91680] transition-colors font-medium uppercase text-sm tracking-wider shadow-lg hover:shadow-xl">
              <span>Complete Practical Info</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <RelatedGuides guides={relatedGuides} />

      <section className="py-16 md:py-24 bg-gradient-to-br from-pink-50 to-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto bg-white border-2 border-[#D91680] rounded-2xl p-12 shadow-xl text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-[#D91680] text-white p-4 rounded-full">
                <MessageCircle className="w-10 h-10" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-900 uppercase tracking-wide">
              Planning Your Phuket Trip?
            </h2>
            <p className="text-lg text-gray-700 font-light leading-relaxed mb-8">
              Questions about beaches, hotels, or activities?<br />
              Chat with our Phuket travel experts!
            </p>
            <a href="/contact" className="inline-flex items-center space-x-2 bg-[#D91680] text-white px-10 py-5 rounded-lg hover:bg-[#D91680] transition-colors font-medium uppercase text-sm tracking-wider shadow-lg hover:shadow-xl">
              <span>Ask a Question</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
