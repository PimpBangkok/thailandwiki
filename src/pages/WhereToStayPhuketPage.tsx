import {
  Waves,
  Music,
  Users,
  Heart,
  DollarSign,
  Star,
  CheckCircle,
  AlertTriangle,
  Palmtree,
  Hotel,
  Sun,
  Sparkles,
  Baby,
  Wine,
  Award,
  MapPin,
  Navigation,
  TrendingUp,
  Calendar,
  Umbrella,
  Sunset,
  PartyPopper,
  Home,
  Shield,
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { usePageMeta } from '../hooks/usePageMeta';
import RelatedGuides from '../components/RelatedGuides';
import { useState } from 'react';

interface Beach {
  name: string;
  goodFor: string[];
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
  beachLength: string;
  waterQuality: string;
}

interface Hotel {
  name: string;
  rating: string;
  priceRange: string;
  category: string;
}

export default function WhereToStayPhuketPage() {
  usePageMeta({
    title: 'Where to Stay in Phuket - Best Beaches & Hotels Guide 2024',
    description:
      'Complete guide to Phuket beaches. From Patong nightlife to Bang Tao luxury resorts. Find your perfect beach.',
  });

  const [selectedBeach, setSelectedBeach] = useState<string>('Patong Beach');

  const beaches: Beach[] = [
    {
      name: 'Patong Beach',
      goodFor: ['Nightlife', 'Parties', 'Shopping', 'Singles', 'First-timers'],
      budgetRange: '$30-60',
      midRange: '$60-150',
      luxuryRange: '$150-300+',
      beachLength: '3.5 km',
      waterQuality: 'Good',
      topHotels: [
        { name: 'Patong Bay Hill Resort', rating: '3-star', priceRange: '$40-80', category: 'Budget' },
        { name: 'Millennium Resort Patong', rating: '4-star', priceRange: '$80-140', category: 'Mid-Range' },
        { name: 'Amari Phuket', rating: '5-star', priceRange: '$200-350', category: 'Luxury' },
      ],
      pros: [
        'Everything walkable',
        'Best nightlife in Phuket',
        'Most restaurants',
        'Easy transport',
        'Shopping paradise',
        'Never boring',
      ],
      cons: [
        'Very crowded',
        'Extremely touristy',
        'Expensive',
        'Loud at night',
        'Beach gets packed',
        'Less authentic',
      ],
      icon: PartyPopper,
      color: 'red',
      vibe: 'Party central, busy, international',
      bestFor: 'Party lovers and first-time visitors wanting action',
    },
    {
      name: 'Kata Beach',
      goodFor: ['Families', 'Couples', 'Surfing', 'Balance'],
      budgetRange: '$40-70',
      midRange: '$70-150',
      luxuryRange: '$150-250',
      beachLength: '1.5 km',
      waterQuality: 'Excellent',
      topHotels: [
        { name: 'Kata Beach Resort', rating: '3-star', priceRange: '$50-90', category: 'Budget' },
        { name: "Mom Tri's Villa Royale", rating: '4-star', priceRange: '$150-300', category: 'Luxury' },
        { name: 'Kata Rocks', rating: '5-star', priceRange: '$500-1500', category: 'Ultra Luxury' },
      ],
      pros: [
        'Clean beautiful beach',
        'Good surf waves',
        'Family-friendly',
        'Great restaurants',
        'Less crazy than Patong',
        'Good vibes',
      ],
      cons: [
        'Still touristy',
        'Busy in high season',
        'Limited nightlife',
        'Steep hills',
        'Can be expensive',
        'Crowded main beach',
      ],
      icon: Users,
      color: 'blue',
      vibe: 'Family-friendly, relaxed, surfy',
      bestFor: 'Families and couples wanting balance',
    },
    {
      name: 'Karon Beach',
      goodFor: ['Families', 'Long beach walks', 'Quieter stay', 'Swimming'],
      budgetRange: '$35-65',
      midRange: '$65-130',
      luxuryRange: '$130-200',
      beachLength: '4 km',
      waterQuality: 'Very Good',
      topHotels: [
        { name: 'Karon Sea Sands Resort', rating: '3-star', priceRange: '$50-85', category: 'Budget' },
        { name: 'Centara Grand Beach Resort', rating: '5-star', priceRange: '$150-280', category: 'Luxury' },
        { name: 'Hilton Phuket Arcadia', rating: '5-star', priceRange: '$180-320', category: 'Luxury' },
      ],
      pros: [
        'Long beautiful beach',
        'Less crowded than Patong',
        'Good for swimming',
        'Family-friendly',
        'Some restaurants',
        'Cheaper than Patong',
      ],
      cons: [
        'Spread out',
        'Need transport',
        'Limited nightlife',
        'Less dining options',
        'Can feel quiet',
        'Hill to beach',
      ],
      icon: Umbrella,
      color: 'cyan',
      vibe: 'Peaceful, family-oriented, spacious',
      bestFor: 'Families wanting space without isolation',
    },
    {
      name: 'Kamala Beach',
      goodFor: ['Families', 'Quiet stay', 'Local vibe', 'Relaxation'],
      budgetRange: '$50-90',
      midRange: '$90-180',
      luxuryRange: '$200-400',
      beachLength: '2 km',
      waterQuality: 'Excellent',
      topHotels: [
        { name: 'Kamala Beach Resort', rating: '3-star', priceRange: '$60-100', category: 'Mid-Range' },
        { name: 'Hyatt Regency Phuket', rating: '5-star', priceRange: '$180-350', category: 'Luxury' },
        { name: 'Sunprime Kamala Beach', rating: '4-star', priceRange: '$100-180', category: 'Mid-Range' },
      ],
      pros: [
        'Less touristy',
        'Good local restaurants',
        'Peaceful atmosphere',
        'Nice beach',
        'Family-friendly',
        'Authentic feel',
      ],
      cons: [
        'Limited nightlife',
        'Need transport for shopping',
        'Fewer hotel options',
        'Less convenient',
        'Can feel isolated',
        'Limited activities',
      ],
      icon: Palmtree,
      color: 'green',
      vibe: 'Quiet, local, family-friendly',
      bestFor: 'Families and couples seeking peace',
    },
    {
      name: 'Bang Tao Beach',
      goodFor: ['Luxury', 'Families', 'Peace', 'Resorts', 'Upscale'],
      budgetRange: 'Limited',
      midRange: '$100-200',
      luxuryRange: '$250-1000+',
      beachLength: '6 km',
      waterQuality: 'Excellent',
      topHotels: [
        { name: 'Angsana Laguna', rating: '4-star', priceRange: '$120-200', category: 'Mid-Range' },
        { name: 'Dusit Thani Laguna', rating: '5-star', priceRange: '$200-450', category: 'Luxury' },
        { name: 'Banyan Tree Phuket', rating: '5-star', priceRange: '$300-800', category: 'Ultra Luxury' },
      ],
      pros: [
        'Beautiful long beach',
        'Best luxury resorts',
        'Peaceful atmosphere',
        'Great for families',
        'High-end dining',
        'Resort facilities',
      ],
      cons: [
        'Very expensive',
        'Need transport',
        'Spread out',
        'Limited budget options',
        'Less local feel',
        'Far from action',
      ],
      icon: Award,
      color: 'purple',
      vibe: 'Luxury, peaceful, resort-focused',
      bestFor: 'Luxury seekers and families wanting upscale resorts',
    },
    {
      name: 'Nai Harn Beach',
      goodFor: ['Couples', 'Peace', 'Beautiful scenery', 'Swimming'],
      budgetRange: '$60-100',
      midRange: '$100-180',
      luxuryRange: '$180-250',
      beachLength: '1 km',
      waterQuality: 'Pristine',
      topHotels: [
        { name: 'Nai Harn Beach Resort', rating: '3-star', priceRange: '$70-120', category: 'Mid-Range' },
        { name: 'The Nai Harn', rating: '5-star', priceRange: '$200-400', category: 'Luxury' },
        { name: 'All Seasons Naiharn', rating: '4-star', priceRange: '$90-150', category: 'Mid-Range' },
      ],
      pros: [
        'Beautiful bay',
        'Peaceful atmosphere',
        'Clean water',
        'Less touristy',
        'Romantic setting',
        'Good restaurants',
      ],
      cons: [
        'Far from everything',
        'Need transport',
        'Limited hotels',
        'Few nightlife options',
        'Can feel remote',
        'Fewer activities',
      ],
      icon: Heart,
      color: 'pink',
      vibe: 'Romantic, peaceful, scenic',
      bestFor: 'Couples wanting romance and tranquility',
    },
  ];

  const selectedBeachData = beaches.find((b) => b.name === selectedBeach);

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Accommodation', path: '/accommodation' },
          { label: 'Where to Stay in Phuket', path: '/where-to-stay-phuket' },
        ]}
      />

      <div className="bg-gradient-to-b from-cyan-900 to-blue-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Waves className="w-8 h-8 text-cyan-300" />
              <span className="text-cyan-300 font-semibold tracking-wider uppercase text-sm">Beach Guide</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 uppercase tracking-[3px]">
              Where to Stay
              <br />
              <span className="text-cyan-300">in Phuket</span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-cyan-100 leading-relaxed mb-4">
                Phuket has many beaches. Choose based on your travel style.
              </p>
              <p className="text-lg text-cyan-200">From party beaches to quiet hideaways.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Best Beaches
              </h2>
              <div className="w-24 h-1 bg-cyan-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Compare Phuket's top beaches to find your perfect spot
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {beaches.map((beach) => {
                const Icon = beach.icon;
                const isSelected = selectedBeach === beach.name;
                return (
                  <div
                    key={beach.name}
                    onClick={() => setSelectedBeach(beach.name)}
                    className={`bg-white rounded-2xl p-6 border-2 shadow-lg cursor-pointer transition-all duration-300 ${
                      isSelected
                        ? `border-${beach.color}-500 shadow-xl scale-105`
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-xl'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 bg-${beach.color}-100 rounded-xl`}>
                        <Icon className={`w-6 h-6 text-${beach.color}-600`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900">{beach.name}</h3>
                        {beach.name === 'Patong Beach' && (
                          <span className="text-xs text-red-600 font-bold">MOST POPULAR</span>
                        )}
                        {beach.name === 'Kata Beach' && (
                          <span className="text-xs text-blue-600 font-bold">BEST FOR FAMILIES</span>
                        )}
                        {isSelected && (
                          <div className="flex items-center gap-1 text-sm text-cyan-600 font-semibold">
                            <CheckCircle className="w-4 h-4" />
                            Selected
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Waves className="w-4 h-4 text-gray-600" />
                          <span className="text-sm font-semibold text-gray-900">Beach Length</span>
                        </div>
                        <p className="text-sm text-gray-600">{beach.beachLength}</p>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <DollarSign className="w-4 h-4 text-gray-600" />
                          <span className="text-sm font-semibold text-gray-900">Price Range</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Budget: {beach.budgetRange}
                          <br />
                          Luxury: {beach.luxuryRange}
                        </p>
                      </div>
                    </div>

                    <div className={`bg-${beach.color}-50 rounded-lg p-3`}>
                      <p className={`text-sm font-semibold text-${beach.color}-900 mb-1`}>{beach.vibe}</p>
                      <p className="text-xs text-gray-600">{beach.bestFor}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {selectedBeachData && (
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <Waves className="w-10 h-10 text-cyan-300 flex-shrink-0" />
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{selectedBeachData.name}</h3>
                    <p className="text-gray-300 text-lg mb-2">{selectedBeachData.vibe}</p>
                    <div className="flex items-center gap-4 text-cyan-300">
                      <span>Length: {selectedBeachData.beachLength}</span>
                      <span>-</span>
                      <span>Water: {selectedBeachData.waterQuality}</span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-gray-300 text-sm mb-1">Budget</p>
                    <p className="text-xl font-bold">{selectedBeachData.budgetRange}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-gray-300 text-sm mb-1">Mid-Range</p>
                    <p className="text-xl font-bold">{selectedBeachData.midRange}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-gray-300 text-sm mb-1">Luxury</p>
                    <p className="text-xl font-bold">{selectedBeachData.luxuryRange}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-gray-300 text-sm mb-1">Water Quality</p>
                    <p className="text-lg font-bold">{selectedBeachData.waterQuality}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-xl mb-3 flex items-center gap-2">
                    <Hotel className="w-5 h-5 text-cyan-300" />
                    Top Hotels
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    {selectedBeachData.topHotels.map((hotel, idx) => (
                      <div key={idx} className="bg-white/10 rounded-lg p-4">
                        <h5 className="font-bold text-white mb-2">{hotel.name}</h5>
                        <div className="flex items-center gap-2 mb-1">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="text-sm text-gray-300">{hotel.rating}</span>
                        </div>
                        <p className="text-cyan-300 font-semibold">{hotel.priceRange}</p>
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
                      {selectedBeachData.pros.map((pro, idx) => (
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
                      {selectedBeachData.cons.map((con, idx) => (
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
                    <Users className="w-5 h-5 text-cyan-300" />
                    Best For:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedBeachData.goodFor.map((item, idx) => (
                      <span key={idx} className="px-3 py-1 bg-cyan-600 text-white rounded-full text-sm font-semibold">
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
                Detailed Beach Guides
              </h2>
              <div className="w-24 h-1 bg-cyan-600 mx-auto mb-6"></div>
            </div>

            <div className="space-y-12">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border-2 border-red-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-red-600 rounded-xl">
                    <PartyPopper className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Patong Beach</h3>
                    <p className="text-lg text-gray-700 mb-2">3.5 km beach • Most popular</p>
                    <p className="text-red-900 font-semibold">Best for: Nightlife, parties, first-time visitors</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      Budget: $30-60
                    </h4>
                    <p className="text-sm text-gray-600">Hostels and budget hotels</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Hotel className="w-5 h-5 text-blue-600" />
                      Mid-Range: $60-150
                    </h4>
                    <p className="text-sm text-gray-600">Good value beachfront</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Award className="w-5 h-5 text-purple-600" />
                      Luxury: $150-300+
                    </h4>
                    <p className="text-sm text-gray-600">5-star resorts</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow mb-6">
                  <h4 className="font-bold text-xl text-gray-900 mb-4">Top Hotels in Patong:</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900">Patong Bay Hill Resort</h5>
                        <p className="text-sm text-gray-600">3-star • $40-80 • Hill view, pool</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900">Millennium Resort Patong</h5>
                        <p className="text-sm text-gray-600">4-star • $80-140 • Beachfront location</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900">Amari Phuket</h5>
                        <p className="text-sm text-gray-600">5-star • $200-350 • Luxury beachfront resort</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Why Choose Patong
                    </h4>
                    <p className="text-sm text-gray-600">
                      Everything within walking distance. Best nightlife in Phuket with Bangla Road. Hundreds of
                      restaurants. Easy transport connections.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      What to Know
                    </h4>
                    <p className="text-sm text-gray-600">
                      Very crowded and touristy. Expensive compared to other beaches. Can be very loud, especially near
                      Bangla Road. Beach gets packed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-blue-600 rounded-xl">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Kata Beach</h3>
                    <p className="text-lg text-gray-700 mb-2">1.5 km beach • Family favorite</p>
                    <p className="text-blue-900 font-semibold">Best for: Families, couples, surfing</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      Budget: $40-70
                    </h4>
                    <p className="text-sm text-gray-600">Good budget options</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Hotel className="w-5 h-5 text-blue-600" />
                      Mid-Range: $70-150
                    </h4>
                    <p className="text-sm text-gray-600">Family resorts</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Award className="w-5 h-5 text-purple-600" />
                      Luxury: $150-250
                    </h4>
                    <p className="text-sm text-gray-600">Boutique luxury</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow mb-6">
                  <h4 className="font-bold text-xl text-gray-900 mb-4">Top Hotels in Kata:</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900">Kata Beach Resort</h5>
                        <p className="text-sm text-gray-600">3-star • $50-90 • Near beach, pool, family-friendly</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900">Mom Tri's Villa Royale</h5>
                        <p className="text-sm text-gray-600">4-star • $150-300 • Boutique luxury, ocean views</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900">Kata Rocks</h5>
                        <p className="text-sm text-gray-600">5-star • $500-1500 • Ultra luxury villas</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Why Choose Kata
                    </h4>
                    <p className="text-sm text-gray-600">
                      Clean beautiful beach. Good surf waves in monsoon season. Great restaurants. Less crazy than
                      Patong but still has amenities. Family-friendly atmosphere.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      What to Know
                    </h4>
                    <p className="text-sm text-gray-600">
                      Still quite touristy. Can be very busy in high season. Limited nightlife. Steep hills to navigate.
                      Main beach area gets crowded.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border-2 border-purple-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-purple-600 rounded-xl">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Bang Tao Beach</h3>
                    <p className="text-lg text-gray-700 mb-2">6 km beach • Luxury paradise</p>
                    <p className="text-purple-900 font-semibold">Best for: Luxury seekers, upscale resorts</p>
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
                      Mid-Range: $100-200
                    </h4>
                    <p className="text-sm text-gray-600">4-star resorts</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Award className="w-5 h-5 text-purple-600" />
                      Luxury: $250-1000+
                    </h4>
                    <p className="text-sm text-gray-600">World-class resorts</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow mb-6">
                  <h4 className="font-bold text-xl text-gray-900 mb-4">Top Hotels in Bang Tao:</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900">Angsana Laguna</h5>
                        <p className="text-sm text-gray-600">4-star • $120-200 • Family resort, lagoon pools</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900">Dusit Thani Laguna</h5>
                        <p className="text-sm text-gray-600">5-star • $200-450 • Beachfront luxury</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900">Banyan Tree Phuket</h5>
                        <p className="text-sm text-gray-600">5-star • $300-800 • Ultra luxury, private villas</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Why Choose Bang Tao
                    </h4>
                    <p className="text-sm text-gray-600">
                      Beautiful 6km beach. Best luxury resorts in Phuket. Peaceful atmosphere. Great for families.
                      Excellent resort facilities. High-end dining options.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      What to Know
                    </h4>
                    <p className="text-sm text-gray-600">
                      Very expensive area. Need transport to get around. Spread out. Limited budget options. Less local
                      feel. Far from main action.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-green-600 rounded-xl">
                    <Palmtree className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Kamala Beach</h3>
                    <p className="text-lg text-gray-700 mb-2">2 km beach • Local vibe</p>
                    <p className="text-green-900 font-semibold">Best for: Families, quiet stay, local feel</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      Budget: $50-90
                    </h4>
                    <p className="text-sm text-gray-600">Limited budget options</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Hotel className="w-5 h-5 text-blue-600" />
                      Mid-Range: $90-180
                    </h4>
                    <p className="text-sm text-gray-600">Beach resorts</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Award className="w-5 h-5 text-purple-600" />
                      Luxury: $200-400
                    </h4>
                    <p className="text-sm text-gray-600">Upscale hotels</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow mb-6">
                  <h4 className="font-bold text-xl text-gray-900 mb-4">Top Hotels in Kamala:</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900">Kamala Beach Resort</h5>
                        <p className="text-sm text-gray-600">3-star • $60-100 • Beachfront, good value</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900">Sunprime Kamala Beach</h5>
                        <p className="text-sm text-gray-600">4-star • $100-180 • Adults only, modern</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900">Hyatt Regency Phuket</h5>
                        <p className="text-sm text-gray-600">5-star • $180-350 • Luxury resort, spa</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Why Choose Kamala
                    </h4>
                    <p className="text-sm text-gray-600">
                      Less touristy than Patong. Good local restaurants. Peaceful family atmosphere. Nice beach.
                      Authentic Thai feel. Good value.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      What to Know
                    </h4>
                    <p className="text-sm text-gray-600">
                      Limited nightlife options. Need transport for shopping. Fewer hotel choices. Less convenient than
                      Patong. Can feel isolated. Limited activities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 border-2 border-pink-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-pink-600 rounded-xl">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Nai Harn Beach</h3>
                    <p className="text-lg text-gray-700 mb-2">1 km beach • Hidden gem</p>
                    <p className="text-pink-900 font-semibold">Best for: Couples, peace, beautiful scenery</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      Budget: $60-100
                    </h4>
                    <p className="text-sm text-gray-600">Some options</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Hotel className="w-5 h-5 text-blue-600" />
                      Mid-Range: $100-180
                    </h4>
                    <p className="text-sm text-gray-600">Good selection</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Award className="w-5 h-5 text-purple-600" />
                      Luxury: $180-250
                    </h4>
                    <p className="text-sm text-gray-600">Boutique luxury</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow mb-6">
                  <h4 className="font-bold text-xl text-gray-900 mb-4">Top Hotels in Nai Harn:</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900">Nai Harn Beach Resort</h5>
                        <p className="text-sm text-gray-600">3-star • $70-120 • Beach access, pool</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900">All Seasons Naiharn</h5>
                        <p className="text-sm text-gray-600">4-star • $90-150 • Hill views, modern</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900">The Nai Harn</h5>
                        <p className="text-sm text-gray-600">5-star • $200-400 • Luxury resort, bay views</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Why Choose Nai Harn
                    </h4>
                    <p className="text-sm text-gray-600">
                      Beautiful bay setting. Peaceful atmosphere. Pristine water. Less touristy. Romantic location. Good
                      restaurants. More authentic.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      What to Know
                    </h4>
                    <p className="text-sm text-gray-600">
                      Far from main areas. Need transport for most things. Limited hotel selection. Few nightlife
                      options. Can feel very remote. Fewer activities available.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-8 border-2 border-cyan-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-cyan-600 rounded-xl">
                    <Umbrella className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Karon Beach</h3>
                    <p className="text-lg text-gray-700 mb-2">4 km beach • Long and spacious</p>
                    <p className="text-cyan-900 font-semibold">Best for: Families, beach walks, swimming</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      Budget: $35-65
                    </h4>
                    <p className="text-sm text-gray-600">Good budget options</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Hotel className="w-5 h-5 text-blue-600" />
                      Mid-Range: $65-130
                    </h4>
                    <p className="text-sm text-gray-600">Family resorts</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Award className="w-5 h-5 text-purple-600" />
                      Luxury: $130-200
                    </h4>
                    <p className="text-sm text-gray-600">5-star hotels</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow mb-6">
                  <h4 className="font-bold text-xl text-gray-900 mb-4">Top Hotels in Karon:</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900">Karon Sea Sands Resort</h5>
                        <p className="text-sm text-gray-600">3-star • $50-85 • Pool, near beach</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900">Centara Grand Beach Resort</h5>
                        <p className="text-sm text-gray-600">5-star • $150-280 • Beachfront, water park</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900">Hilton Phuket Arcadia</h5>
                        <p className="text-sm text-gray-600">5-star • $180-320 • Luxury resort, multiple pools</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Why Choose Karon
                    </h4>
                    <p className="text-sm text-gray-600">
                      Long beautiful beach with space. Less crowded than Patong. Good for swimming. Family-friendly
                      atmosphere. Cheaper rates. Some good restaurants.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      What to Know
                    </h4>
                    <p className="text-sm text-gray-600">
                      Very spread out. Need transport between areas. Limited nightlife. Fewer dining options than Patong.
                      Can feel quiet. Hill between road and beach.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Choose Your Beach
              </h2>
              <div className="w-24 h-1 bg-cyan-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Quick guide to picking the perfect beach</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border-2 border-red-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Navigation className="w-8 h-8 text-red-600" />
                  <h3 className="text-xl font-bold text-gray-900">First Time</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong>Patong</strong> is most convenient. Everything nearby, easy to navigate, best transport
                  connections. Perfect introduction to Phuket.
                </p>
                <div className="bg-red-50 rounded-lg p-3">
                  <p className="text-sm text-red-900 font-semibold">Best location: Central Patong</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-blue-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">Families</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong>Kata or Kamala</strong> are perfect. Safe beaches, clean water, family resorts, good
                  restaurants. Less party atmosphere.
                </p>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-sm text-blue-900 font-semibold">Best location: Kata Beach</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-pink-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-8 h-8 text-pink-600" />
                  <h3 className="text-xl font-bold text-gray-900">Couples</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong>Nai Harn or Kamala</strong> offer romance. Beautiful scenery, peaceful beaches, intimate
                  restaurants, stunning sunsets.
                </p>
                <div className="bg-pink-50 rounded-lg p-3">
                  <p className="text-sm text-pink-900 font-semibold">Best location: Nai Harn Bay</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-orange-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <PartyPopper className="w-8 h-8 text-orange-600" />
                  <h3 className="text-xl font-bold text-gray-900">Party</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong>Patong</strong> is the only option. Bangla Road nightlife, beach clubs, bars until dawn. Party
                  central.
                </p>
                <div className="bg-orange-50 rounded-lg p-3">
                  <p className="text-sm text-orange-900 font-semibold">Best location: Near Bangla Road</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-purple-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                  <h3 className="text-xl font-bold text-gray-900">Luxury</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong>Bang Tao</strong> has best resorts. World-class hotels, private villas, spa treatments,
                  gourmet dining. Ultimate luxury.
                </p>
                <div className="bg-purple-50 rounded-lg p-3">
                  <p className="text-sm text-purple-900 font-semibold">Best location: Laguna Phuket</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-green-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-8 h-8 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-900">Budget</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong>Karon</strong> offers good value. Cheaper than Patong but still has amenities. Long beach,
                  budget hotels available.
                </p>
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-sm text-green-900 font-semibold">Best location: Karon Center</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Seasonal Considerations
              </h2>
              <div className="w-24 h-1 bg-cyan-600 mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border-2 border-yellow-200">
                <div className="flex items-center gap-3 mb-4">
                  <Sun className="w-10 h-10 text-orange-600" />
                  <h3 className="text-2xl font-bold text-gray-900">High Season (Nov-Apr)</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Perfect weather, calm seas, ideal for swimming</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>All beaches accessible and beautiful</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                    <span>Higher prices, need to book in advance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                    <span>Beaches very crowded, especially Patong and Kata</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <Waves className="w-10 h-10 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Low Season (May-Oct)</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Cheaper prices, better hotel deals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Less crowded beaches, more peaceful</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                    <span>Rain showers, rough seas, red flag warnings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                    <span>Some beach clubs and restaurants may close</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <div className="bg-gradient-to-br from-cyan-900 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex items-start gap-4">
              <Sparkles className="w-10 h-10 text-cyan-300 flex-shrink-0" />
              <div>
                <h3 className="text-3xl font-bold mb-4">Pro Tips for Booking</h3>
                <ul className="space-y-3 text-cyan-100">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Location over luxury:</strong> A 3-star hotel on the beach beats a 5-star inland
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Book beachfront:</strong> Phuket hills are steep, walking is challenging
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Read recent reviews:</strong> Hotels change quality, check last 3 months
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Consider transport:</strong> Taxis are expensive, central location saves money
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Avoid single beach:</strong> Stay somewhere with access to multiple beaches
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Book breakfast included:</strong> Many hotels offer excellent buffet breakfasts
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
                title: 'Phuket Destination Guide',
                description: 'Complete guide to Phuket',
                link: '/destinations/phuket',
                image:
                  'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Best Beaches in Thailand',
                description: 'Top beaches across Thailand',
                link: '/best-beaches',
                image:
                  'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Budget Guide',
                description: 'Plan your Thailand budget',
                link: '/budget-guide',
                image:
                  'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
