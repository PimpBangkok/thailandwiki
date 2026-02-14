import {
  MapPin,
  Building,
  DollarSign,
  Star,
  Train,
  Coffee,
  ShoppingBag,
  Waves,
  Music,
  Utensils,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Briefcase,
  Palmtree,
  Users,
  Hotel,
  Zap,
  Navigation,
  Calendar,
  TrendingUp,
  Heart,
  Award,
  Home,
  Clock,
  Map,
  Shield,
  Sparkles,
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { usePageMeta } from '../hooks/usePageMeta';
import RelatedGuides from '../components/RelatedGuides';
import { useState } from 'react';

interface Neighborhood {
  name: string;
  location: string;
  goodFor: string[];
  transport: string;
  budgetRange: string;
  midRange: string;
  luxuryRange: string;
  topHotels: Hotel[];
  pros: string[];
  cons: string[];
  icon: any;
  color: string;
  vibe: string;
  bestFor: string;
}

interface Hotel {
  name: string;
  rating: string;
  priceRange: string;
  category: string;
}

export default function WhereToStayBangkokPage() {
  usePageMeta({
    title: 'Where to Stay in Bangkok - Best Neighborhoods & Hotels Guide 2024',
    description:
      'Complete guide to Bangkok neighborhoods. From Sukhumvit nightlife to Riverside luxury. Find the perfect area for your stay.',
  });

  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>('Sukhumvit');

  const neighborhoods: Neighborhood[] = [
    {
      name: 'Sukhumvit',
      location: 'BTS Asok to Thong Lo stations',
      goodFor: ['First-time visitors', 'Nightlife lovers', 'Food enthusiasts', 'Shopping'],
      transport: 'BTS Skytrain - Excellent access',
      budgetRange: '$40-80',
      midRange: '$80-150',
      luxuryRange: '$150-300+',
      topHotels: [
        { name: 'Grande Centre Point Sukhumvit', rating: '4-star', priceRange: '$100-150', category: 'Mid-Range' },
        { name: 'Mode Sathorn', rating: '4-star', priceRange: '$80-120', category: 'Mid-Range' },
        { name: 'Sheraton Grande Sukhumvit', rating: '5-star', priceRange: '$200-300', category: 'Luxury' },
      ],
      pros: [
        'Excellent BTS access',
        'Countless restaurants',
        'Great nightlife',
        'Shopping everywhere',
        'Safe and walkable',
        'International crowd',
      ],
      cons: [
        'Very busy',
        'Traffic congestion',
        'Can be loud',
        'Tourist prices',
        'Less authentic',
        'Crowded sidewalks',
      ],
      icon: Building,
      color: 'blue',
      vibe: 'Modern, busy, international',
      bestFor: 'First-time visitors who want convenience',
    },
    {
      name: 'Silom & Sathorn',
      location: 'BTS Sala Daeng, MRT Silom',
      goodFor: ['Business travelers', 'Foodies', 'Park lovers', 'Night market fans'],
      transport: 'BTS & MRT - Great connections',
      budgetRange: '$35-70',
      midRange: '$70-150',
      luxuryRange: '$150-250',
      topHotels: [
        { name: 'Lub d Silom', rating: 'Hostel', priceRange: '$15-30', category: 'Budget' },
        { name: 'Mode Sathorn', rating: '4-star', priceRange: '$80-120', category: 'Mid-Range' },
        { name: 'SO Sofitel Bangkok', rating: '5-star', priceRange: '$200-350', category: 'Luxury' },
      ],
      pros: [
        'Great street food',
        'Lumpini Park nearby',
        'Business district',
        'Good transport',
        'Night markets',
        'Less touristy',
      ],
      cons: [
        'Limited nightlife',
        'Office area vibe',
        'Quiet on weekends',
        'Fewer attractions',
        'Business-focused',
        'Less character',
      ],
      icon: Briefcase,
      color: 'purple',
      vibe: 'Professional, food-focused, local',
      bestFor: 'Business travelers and food lovers',
    },
    {
      name: 'Riverside',
      location: 'Along Chao Phraya River',
      goodFor: ['Luxury seekers', 'Temple visitors', 'Romantic stays', 'River views'],
      transport: 'River ferry & taxis',
      budgetRange: 'Limited',
      midRange: '$80-150',
      luxuryRange: '$200-500+',
      topHotels: [
        { name: 'Riva Surya', rating: '4-star', priceRange: '$100-180', category: 'Mid-Range' },
        { name: 'Mandarin Oriental', rating: '5-star', priceRange: '$400-800', category: 'Luxury' },
        { name: 'Shangri-La Bangkok', rating: '5-star', priceRange: '$300-600', category: 'Luxury' },
      ],
      pros: [
        'Beautiful river views',
        'Peaceful atmosphere',
        'Temples nearby',
        'Luxury hotels',
        'River ferry access',
        'Romantic setting',
      ],
      cons: [
        'Expensive',
        'Far from BTS',
        'Need taxis',
        'Limited dining',
        'Fewer budget options',
        'Less convenient',
      ],
      icon: Waves,
      color: 'cyan',
      vibe: 'Luxury, peaceful, cultural',
      bestFor: 'Luxury travelers wanting river views',
    },
    {
      name: 'Khao San Road',
      location: 'Old City, near Grand Palace',
      goodFor: ['Backpackers', 'Budget travelers', 'Party lovers', 'Social atmosphere'],
      transport: 'Limited - Taxi & bus mainly',
      budgetRange: '$10-30',
      midRange: '$30-60',
      luxuryRange: 'N/A',
      topHotels: [
        { name: 'Various Hostels', rating: 'Hostel', priceRange: '$5-15/bed', category: 'Budget' },
        { name: 'Budget Hotels', rating: 'Basic', priceRange: '$20-40', category: 'Budget' },
        { name: 'Wild Orchid Villa', rating: '3-star', priceRange: '$40-60', category: 'Mid-Range' },
      ],
      pros: [
        'Cheapest area',
        'Social atmosphere',
        'Street food paradise',
        'Near Grand Palace',
        'Backpacker community',
        'Easy to meet people',
      ],
      cons: [
        'Very loud',
        'Extremely touristy',
        'Far from BTS',
        'Party central',
        'Less safe at night',
        'Chaotic',
      ],
      icon: Music,
      color: 'orange',
      vibe: 'Backpacker hub, party central, chaotic',
      bestFor: 'Budget backpackers and party lovers',
    },
    {
      name: 'Siam',
      location: 'Siam BTS Station area',
      goodFor: ['Shoppers', 'First-time visitors', 'Transit hub', 'Central location'],
      transport: 'BTS Siam - Main interchange',
      budgetRange: '$50-80',
      midRange: '$80-150',
      luxuryRange: '$150-300',
      topHotels: [
        { name: 'Novotel Bangkok Platinum', rating: '4-star', priceRange: '$80-120', category: 'Mid-Range' },
        { name: 'Siam Kempinski', rating: '5-star', priceRange: '$250-400', category: 'Luxury' },
        { name: 'Pathumwan Princess', rating: '4-star', priceRange: '$90-140', category: 'Mid-Range' },
      ],
      pros: [
        'Shopping paradise',
        'BTS interchange',
        'Central location',
        'Connected to malls',
        'Easy transport',
        'Family-friendly',
      ],
      cons: [
        'Very crowded',
        'Mall-focused',
        'Less authentic',
        'Expensive dining',
        'Tourist prices',
        'Less nightlife',
      ],
      icon: ShoppingBag,
      color: 'green',
      vibe: 'Shopping hub, modern, family-friendly',
      bestFor: 'Shoppers and those wanting central location',
    },
  ];

  const selectedNeighborhoodData = neighborhoods.find((n) => n.name === selectedNeighborhood);

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Accommodation', path: '/accommodation' },
          { label: 'Where to Stay in Bangkok', path: '/where-to-stay-bangkok' },
        ]}
      />

      <div className="bg-gradient-to-b from-blue-900 to-blue-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-8 h-8 text-blue-300" />
              <span className="text-blue-300 font-semibold tracking-wider uppercase text-sm">
                Neighborhood Guide
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 uppercase tracking-[3px]">
              Where to Stay
              <br />
              <span className="text-blue-300">in Bangkok</span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-4">
                Choose the right Bangkok neighborhood for your stay.
              </p>
              <p className="text-lg text-blue-200">From Sukhumvit nightlife to Riverside temples.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Best Neighborhoods
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Compare Bangkok's top areas to find your perfect base
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {neighborhoods.map((neighborhood) => {
                const Icon = neighborhood.icon;
                const isSelected = selectedNeighborhood === neighborhood.name;
                return (
                  <div
                    key={neighborhood.name}
                    onClick={() => setSelectedNeighborhood(neighborhood.name)}
                    className={`bg-white rounded-2xl p-6 border-2 shadow-lg cursor-pointer transition-all duration-300 ${
                      isSelected
                        ? `border-${neighborhood.color}-500 shadow-xl scale-105`
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-xl'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 bg-${neighborhood.color}-100 rounded-xl`}>
                        <Icon className={`w-6 h-6 text-${neighborhood.color}-600`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900">{neighborhood.name}</h3>
                        {neighborhood.name === 'Sukhumvit' && (
                          <span className="text-xs text-green-600 font-bold">MOST POPULAR</span>
                        )}
                        {isSelected && (
                          <div className="flex items-center gap-1 text-sm text-blue-600 font-semibold">
                            <CheckCircle className="w-4 h-4" />
                            Selected
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Train className="w-4 h-4 text-gray-600" />
                          <span className="text-sm font-semibold text-gray-900">Transport</span>
                        </div>
                        <p className="text-sm text-gray-600">{neighborhood.transport}</p>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <DollarSign className="w-4 h-4 text-gray-600" />
                          <span className="text-sm font-semibold text-gray-900">Price Range</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Budget: {neighborhood.budgetRange}
                          <br />
                          Luxury: {neighborhood.luxuryRange}
                        </p>
                      </div>
                    </div>

                    <div className={`bg-${neighborhood.color}-50 rounded-lg p-3`}>
                      <p className={`text-sm font-semibold text-${neighborhood.color}-900 mb-1`}>
                        {neighborhood.vibe}
                      </p>
                      <p className="text-xs text-gray-600">{neighborhood.bestFor}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {selectedNeighborhoodData && (
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="w-10 h-10 text-blue-300 flex-shrink-0" />
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{selectedNeighborhoodData.name}</h3>
                    <p className="text-gray-300 text-lg mb-2">{selectedNeighborhoodData.vibe}</p>
                    <p className="text-blue-300">{selectedNeighborhoodData.location}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-gray-300 text-sm mb-1">Budget</p>
                    <p className="text-xl font-bold">{selectedNeighborhoodData.budgetRange}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-gray-300 text-sm mb-1">Mid-Range</p>
                    <p className="text-xl font-bold">{selectedNeighborhoodData.midRange}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-gray-300 text-sm mb-1">Luxury</p>
                    <p className="text-xl font-bold">{selectedNeighborhoodData.luxuryRange}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-gray-300 text-sm mb-1">Transport</p>
                    <p className="text-lg font-bold">{selectedNeighborhoodData.transport.split('-')[0].trim()}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-xl mb-3 flex items-center gap-2">
                    <Hotel className="w-5 h-5 text-blue-300" />
                    Top Hotels
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    {selectedNeighborhoodData.topHotels.map((hotel, idx) => (
                      <div key={idx} className="bg-white/10 rounded-lg p-4">
                        <h5 className="font-bold text-white mb-2">{hotel.name}</h5>
                        <div className="flex items-center gap-2 mb-1">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="text-sm text-gray-300">{hotel.rating}</span>
                        </div>
                        <p className="text-blue-300 font-semibold">{hotel.priceRange}</p>
                        <span className="text-xs text-gray-400">{hotel.category}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-xl mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Advantages
                    </h4>
                    <ul className="space-y-2">
                      {selectedNeighborhoodData.pros.map((pro, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-200">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-xl mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-400" />
                      Disadvantages
                    </h4>
                    <ul className="space-y-2">
                      {selectedNeighborhoodData.cons.map((con, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-200">
                          <AlertTriangle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-1" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-white/10 rounded-lg p-4">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-300" />
                    Best For:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedNeighborhoodData.goodFor.map((item, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Detailed Neighborhood Guides
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            </div>

            <div className="space-y-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-blue-600 rounded-xl">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Sukhumvit</h3>
                    <p className="text-lg text-gray-700 mb-2">BTS Asok to Thong Lo stations</p>
                    <p className="text-blue-900 font-semibold">Best for: First-time visitors</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      Budget: $40-80
                    </h4>
                    <p className="text-sm text-gray-600">Hostels and budget hotels available</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Hotel className="w-5 h-5 text-blue-600" />
                      Mid-Range: $80-150
                    </h4>
                    <p className="text-sm text-gray-600">4-star hotels, excellent value</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Award className="w-5 h-5 text-purple-600" />
                      Luxury: $150-300+
                    </h4>
                    <p className="text-sm text-gray-600">5-star international chains</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4">Top Hotels in Sukhumvit:</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900">Grande Centre Point Sukhumvit</h5>
                        <p className="text-sm text-gray-600">4-star • $100-150 • Near BTS Asok</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900">Mode Sathorn</h5>
                        <p className="text-sm text-gray-600">4-star • $80-120 • Modern design hotel</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900">Sheraton Grande Sukhumvit</h5>
                        <p className="text-sm text-gray-600">5-star • $200-300 • Luxury with BTS access</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border-2 border-purple-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-purple-600 rounded-xl">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Silom & Sathorn</h3>
                    <p className="text-lg text-gray-700 mb-2">BTS Sala Daeng, MRT Silom</p>
                    <p className="text-purple-900 font-semibold">Best for: Business travelers, food lovers</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      Budget: $35-70
                    </h4>
                    <p className="text-sm text-gray-600">Great hostel options</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Hotel className="w-5 h-5 text-blue-600" />
                      Mid-Range: $70-150
                    </h4>
                    <p className="text-sm text-gray-600">Business hotels</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Award className="w-5 h-5 text-purple-600" />
                      Luxury: $150-250
                    </h4>
                    <p className="text-sm text-gray-600">Boutique luxury</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4">Top Hotels in Silom:</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900">Lub d Silom</h5>
                        <p className="text-sm text-gray-600">Hostel • $15-30 • Social atmosphere, rooftop bar</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900">Mode Sathorn</h5>
                        <p className="text-sm text-gray-600">4-star • $80-120 • Modern, great value</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900">SO Sofitel Bangkok</h5>
                        <p className="text-sm text-gray-600">5-star • $200-350 • Luxury design hotel</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-8 border-2 border-cyan-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-cyan-600 rounded-xl">
                    <Waves className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Riverside</h3>
                    <p className="text-lg text-gray-700 mb-2">Along Chao Phraya River</p>
                    <p className="text-cyan-900 font-semibold">Best for: Luxury experience, river views</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-gray-400" />
                      Budget: Limited
                    </h4>
                    <p className="text-sm text-gray-600">Few budget options</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Hotel className="w-5 h-5 text-blue-600" />
                      Mid-Range: $80-150
                    </h4>
                    <p className="text-sm text-gray-600">Some 4-star options</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Award className="w-5 h-5 text-purple-600" />
                      Luxury: $200-500+
                    </h4>
                    <p className="text-sm text-gray-600">World-class hotels</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4">Top Hotels on Riverside:</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900">Riva Surya</h5>
                        <p className="text-sm text-gray-600">4-star • $100-180 • Boutique riverside hotel</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900">Mandarin Oriental</h5>
                        <p className="text-sm text-gray-600">5-star • $400-800 • Legendary luxury</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900">Shangri-La Bangkok</h5>
                        <p className="text-sm text-gray-600">5-star • $300-600 • Riverside elegance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border-2 border-orange-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-orange-600 rounded-xl">
                    <Music className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Khao San Road</h3>
                    <p className="text-lg text-gray-700 mb-2">Old City, near Grand Palace</p>
                    <p className="text-orange-900 font-semibold">Best for: Backpackers, budget travelers</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      Budget: $10-30
                    </h4>
                    <p className="text-sm text-gray-600">Cheapest in Bangkok</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Hotel className="w-5 h-5 text-blue-600" />
                      Mid-Range: $30-60
                    </h4>
                    <p className="text-sm text-gray-600">Basic hotels</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-gray-400" />
                      Luxury: N/A
                    </h4>
                    <p className="text-sm text-gray-600">Not applicable</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4">Accommodation in Khao San:</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Home className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900">Hostels</h5>
                        <p className="text-sm text-gray-600">Dorm beds • $5-15 • Social atmosphere, party vibes</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Home className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900">Budget Hotels</h5>
                        <p className="text-sm text-gray-600">Private rooms • $20-40 • Basic but functional</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Home className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900">Wild Orchid Villa</h5>
                        <p className="text-sm text-gray-600">3-star • $40-60 • Best option in the area</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-green-600 rounded-xl">
                    <ShoppingBag className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Siam</h3>
                    <p className="text-lg text-gray-700 mb-2">Siam BTS Station area</p>
                    <p className="text-green-900 font-semibold">Best for: Shoppers, central location</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      Budget: $50-80
                    </h4>
                    <p className="text-sm text-gray-600">Limited budget options</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Hotel className="w-5 h-5 text-blue-600" />
                      Mid-Range: $80-150
                    </h4>
                    <p className="text-sm text-gray-600">Great mall-connected hotels</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Award className="w-5 h-5 text-purple-600" />
                      Luxury: $150-300
                    </h4>
                    <p className="text-sm text-gray-600">5-star shopping access</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4">Top Hotels in Siam:</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900">Novotel Bangkok Platinum</h5>
                        <p className="text-sm text-gray-600">4-star • $80-120 • Connected to shopping mall</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900">Siam Kempinski</h5>
                        <p className="text-sm text-gray-600">5-star • $250-400 • Luxury shopping location</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900">Pathumwan Princess</h5>
                        <p className="text-sm text-gray-600">4-star • $90-140 • Directly above MBK Mall</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Choose Your Neighborhood
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Quick guide to picking the perfect area</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border-2 border-blue-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Navigation className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">First Time in Bangkok</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong>Sukhumvit</strong> is your best bet. Easy, safe, well-connected by BTS. Everything you need
                  within walking distance.
                </p>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-sm text-blue-900 font-semibold">Recommended: Near BTS Nana or Asok</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-purple-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="w-8 h-8 text-purple-600" />
                  <h3 className="text-xl font-bold text-gray-900">Business Trip</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong>Silom/Sathorn</strong> is perfect. Central business district, great transport, near Lumpini
                  Park for morning jogs.
                </p>
                <div className="bg-purple-50 rounded-lg p-3">
                  <p className="text-sm text-purple-900 font-semibold">Recommended: Near BTS Sala Daeng</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-cyan-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-8 h-8 text-cyan-600" />
                  <h3 className="text-xl font-bold text-gray-900">Luxury Experience</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong>Riverside</strong> offers unmatched luxury. World-class hotels, river views, temples, and
                  unforgettable sunsets.
                </p>
                <div className="bg-cyan-50 rounded-lg p-3">
                  <p className="text-sm text-cyan-900 font-semibold">Recommended: Mandarin Oriental or Shangri-La</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-orange-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-8 h-8 text-orange-600" />
                  <h3 className="text-xl font-bold text-gray-900">Budget Travel</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong>Khao San Road</strong> is cheapest. Backpacker hub, social scene, street food. Near Grand
                  Palace.
                </p>
                <div className="bg-orange-50 rounded-lg p-3">
                  <p className="text-sm text-orange-900 font-semibold">Recommended: Hostels on Khao San</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-green-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <ShoppingBag className="w-8 h-8 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-900">Shopping</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong>Siam</strong> puts you in the heart of Bangkok's shopping district. MBK, Siam Paragon, Central
                  World all nearby.
                </p>
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-sm text-green-900 font-semibold">Recommended: Hotels connected to malls</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-red-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Utensils className="w-8 h-8 text-red-600" />
                  <h3 className="text-xl font-bold text-gray-900">Food Lovers</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong>Silom</strong> has incredible street food. Night markets, local eateries, authentic Thai
                  cuisine at every corner.
                </p>
                <div className="bg-red-50 rounded-lg p-3">
                  <p className="text-sm text-red-900 font-semibold">Recommended: Near Convent Road</p>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex items-start gap-4">
              <Sparkles className="w-10 h-10 text-blue-300 flex-shrink-0" />
              <div>
                <h3 className="text-3xl font-bold mb-4">Pro Tips for Booking</h3>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Book near BTS/MRT:</strong> Transport access is crucial in Bangkok traffic
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Check reviews:</strong> Pay attention to noise complaints and cleanliness
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Consider location first:</strong> A great hotel in a bad location beats the opposite
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Book in advance:</strong> Best hotels fill up quickly, especially in high season
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Look for breakfast included:</strong> Many hotels offer excellent breakfast buffets
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-b from-gray-100 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RelatedGuides
            guides={[
              {
                title: 'Bangkok Destination Guide',
                description: 'Complete guide to Bangkok',
                link: '/destinations/bangkok',
                image:
                  'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Budget Guide',
                description: 'Plan your Thailand budget',
                link: '/budget-guide',
                image:
                  'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Bangkok Cost of Living',
                description: 'Living costs in Bangkok',
                link: '/bangkok-cost-of-living',
                image:
                  'https://images.pexels.com/photos/259948/pexels-photo-259948.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
