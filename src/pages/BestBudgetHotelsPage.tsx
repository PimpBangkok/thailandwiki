import {
  DollarSign,
  MapPin,
  Star,
  CheckCircle,
  AlertTriangle,
  Hotel,
  Users,
  Wifi,
  Coffee,
  Wine,
  Music,
  Heart,
  Bed,
  Shield,
  TrendingUp,
  PartyPopper,
  Home,
  Building2,
  Navigation,
  Sparkles,
  Waves,
  Umbrella,
  Palmtree,
  Calendar,
  Info,
  ListChecks,
  BarChart3,
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { usePageMeta } from '../hooks/usePageMeta';
import RelatedGuides from '../components/RelatedGuides';
import { useState } from 'react';

interface BudgetHotel {
  name: string;
  location: string;
  neighborhood: string;
  priceRange: string;
  avgPrice: number;
  type: string;
  pros: string[];
  cons: string[];
  bestFor: string;
  amenities: string[];
  rating: number;
  city: string;
}

export default function BestBudgetHotelsPage() {
  usePageMeta({
    title: 'Best Budget Hotels in Thailand 2024 - Clean, Safe & Affordable',
    description:
      'Top budget hotels in Bangkok, Chiang Mai & Phuket. $20-50/night. Clean, safe, well-reviewed. Perfect for backpackers and budget travelers.',
  });

  const [selectedCity, setSelectedCity] = useState<string>('Bangkok');

  const hotels: BudgetHotel[] = [
    {
      name: 'Lub d Bangkok Silom',
      location: 'Silom, near BTS',
      neighborhood: 'Silom',
      priceRange: '$15-35',
      avgPrice: 25,
      type: 'Hostel with private rooms',
      pros: ['Social atmosphere', 'Rooftop bar', 'Very clean', 'Central location', 'Near BTS', 'Great staff'],
      cons: ['Can be noisy', 'Shared facilities in dorms', 'Busy area', 'Limited privacy in dorms'],
      bestFor: 'Solo travelers, backpackers, social scene',
      amenities: ['Free WiFi', 'Rooftop bar', 'Common area', 'Lockers', 'Laundry'],
      rating: 4.5,
      city: 'Bangkok',
    },
    {
      name: 'Oneday Hostel',
      location: 'Sukhumvit Soi 26',
      neighborhood: 'Sukhumvit',
      priceRange: '$20-40',
      avgPrice: 30,
      type: 'Boutique hostel',
      pros: ['Stylish design', 'Quiet location', 'Good breakfast', 'Small pool', 'Modern rooms', 'Comfortable beds'],
      cons: ['10 minute walk to BTS', 'Small pool', 'Can book up quickly', 'Limited common space'],
      bestFor: 'Budget travelers wanting style',
      amenities: ['Free WiFi', 'Pool', 'Breakfast', 'Modern design', 'Air conditioning'],
      rating: 4.6,
      city: 'Bangkok',
    },
    {
      name: 'Once Again Hostel',
      location: 'Ari',
      neighborhood: 'Ari',
      priceRange: '$12-30',
      avgPrice: 20,
      type: 'Small hostel',
      pros: ['Local neighborhood', 'Very cheap', 'Friendly staff', 'Authentic area', 'Good local food', 'Peaceful'],
      cons: ['Basic facilities', 'Far from tourist sites', 'Small common area', 'Limited English'],
      bestFor: 'Long-term budget travelers',
      amenities: ['Free WiFi', 'Kitchen', 'Common area', 'Bike rental'],
      rating: 4.3,
      city: 'Bangkok',
    },
    {
      name: 'Stamps Backpackers',
      location: 'Old City',
      neighborhood: 'Old City',
      priceRange: '$10-25',
      avgPrice: 18,
      type: 'Hostel',
      pros: [
        'Best social hostel',
        'Organized tours',
        'Central location',
        'Great atmosphere',
        'Easy to meet people',
        'Near temples',
      ],
      cons: ['Party atmosphere', 'Can be loud', 'Basic rooms', 'Busy'],
      bestFor: 'Young travelers, meeting people',
      amenities: ['Free WiFi', 'Bar', 'Tours', 'Common area', 'Lockers'],
      rating: 4.4,
      city: 'Chiang Mai',
    },
    {
      name: 'Bodega Party Hostel',
      location: 'Near Nimman',
      neighborhood: 'Nimman',
      priceRange: '$8-20',
      avgPrice: 14,
      type: 'Party hostel',
      pros: ['Very cheap', 'Social', 'Organized events', 'Free beer hour', 'Young crowd', 'Near Nimman'],
      cons: ['Loud', 'Basic rooms', 'Party focus', 'Not for light sleepers'],
      bestFor: 'Party travelers under 30',
      amenities: ['Free WiFi', 'Bar', 'Pool table', 'Events', 'Common area'],
      rating: 4.2,
      city: 'Chiang Mai',
    },
    {
      name: 'Wiang Inn Hotel',
      location: 'Night Bazaar',
      neighborhood: 'Night Bazaar',
      priceRange: '$25-40',
      avgPrice: 32,
      type: 'Budget hotel',
      pros: ['Private rooms', 'Pool', 'Quiet', 'Good value', 'Near night market', 'Older travelers welcome'],
      cons: ['Dated decor', 'Basic amenities', 'Older building', 'Limited food options'],
      bestFor: 'Couples, older travelers wanting privacy',
      amenities: ['Pool', 'WiFi', 'Air conditioning', 'Private bathroom', 'TV'],
      rating: 4.1,
      city: 'Chiang Mai',
    },
    {
      name: 'Two Chic Hotel Phuket',
      location: 'Patong Beach',
      neighborhood: 'Patong',
      priceRange: '$30-50',
      avgPrice: 40,
      type: 'Budget hotel',
      pros: ['Modern', 'Clean', 'Close to beach', 'Rooftop pool', 'Good location', 'Stylish design'],
      cons: ['Small rooms', 'Basic breakfast', 'Can be noisy', 'Limited facilities'],
      bestFor: 'Beach access on budget',
      amenities: ['Rooftop pool', 'WiFi', 'Air conditioning', 'Modern design', 'Near beach'],
      rating: 4.5,
      city: 'Phuket',
    },
    {
      name: 'Lub d Phuket Patong',
      location: 'Patong',
      neighborhood: 'Patong',
      priceRange: '$20-40',
      avgPrice: 30,
      type: 'Hostel chain',
      pros: ['Social', 'Clean', 'Near beach', 'Rooftop bar', 'Good atmosphere', 'Reliable chain'],
      cons: ['Busy area', 'Can be noisy', 'Party vibe', 'Shared facilities'],
      bestFor: 'Solo travelers, social scene',
      amenities: ['Rooftop bar', 'WiFi', 'Common area', 'Lockers', 'Tours'],
      rating: 4.4,
      city: 'Phuket',
    },
    {
      name: 'The Phulin Resort',
      location: 'Kata Beach',
      neighborhood: 'Kata',
      priceRange: '$25-45',
      avgPrice: 35,
      type: 'Small resort',
      pros: ['Pool', 'Quiet', 'Family-run', 'Near Kata Beach', 'Peaceful', 'Good value'],
      cons: ['Basic rooms', 'Older property', 'Limited amenities', 'Dated decor'],
      bestFor: 'Couples, peace and quiet',
      amenities: ['Pool', 'WiFi', 'Air conditioning', 'Near beach', 'Quiet location'],
      rating: 4.2,
      city: 'Phuket',
    },
    {
      name: 'Chaweng Buri Resort',
      location: 'Chaweng Beach',
      neighborhood: 'Chaweng',
      priceRange: '$30-50',
      avgPrice: 40,
      type: 'Beach resort',
      pros: ['Beach access', 'Pool', 'Restaurant', 'Good location', 'Beach front', 'Staff friendly'],
      cons: ['Dated rooms', 'Basic facilities', 'Needs renovation', 'Old furniture'],
      bestFor: 'Beach lovers on budget',
      amenities: ['Beach access', 'Pool', 'Restaurant', 'WiFi', 'Air conditioning'],
      rating: 4.0,
      city: 'Koh Samui',
    },
    {
      name: 'Ark Bar Beach Resort',
      location: 'Chaweng Beach',
      neighborhood: 'Chaweng',
      priceRange: '$35-60',
      avgPrice: 48,
      type: 'Party resort',
      pros: ['Beach front', 'Pool', 'Party scene', 'Central location', 'Social atmosphere', 'Beach bar'],
      cons: ['Very loud', 'Party atmosphere 24/7', 'No sleep', 'Not for quiet seekers'],
      bestFor: 'Young party travelers',
      amenities: ['Beach bar', 'Pool', 'WiFi', 'Restaurant', 'Events'],
      rating: 4.3,
      city: 'Koh Samui',
    },
    {
      name: 'Lazy Days Samui Beach Resort',
      location: 'Lamai Beach',
      neighborhood: 'Lamai',
      priceRange: '$25-45',
      avgPrice: 35,
      type: 'Small resort',
      pros: ['Beach access', 'Pool', 'Quiet', 'Good value', 'Peaceful', 'Family-friendly'],
      cons: ['Older property', 'Basic rooms', 'Limited facilities', 'Dated'],
      bestFor: 'Budget beach stay, peace',
      amenities: ['Beach access', 'Pool', 'WiFi', 'Air conditioning', 'Quiet'],
      rating: 4.1,
      city: 'Koh Samui',
    },
    {
      name: 'Slumber Party Hostel',
      location: 'Haad Rin',
      neighborhood: 'Haad Rin',
      priceRange: '$10-25',
      avgPrice: 18,
      type: 'Hostel',
      pros: ['Near Full Moon Party', 'Social', 'Very cheap', 'Beach location', 'Party base', 'Young crowd'],
      cons: ['Very basic', 'Party area', 'Loud', 'No frills'],
      bestFor: 'Full Moon Party travelers',
      amenities: ['WiFi', 'Common area', 'Beach nearby', 'Lockers'],
      rating: 3.9,
      city: 'Koh Phangan',
    },
    {
      name: 'Phangan Bamboo Bungalows',
      location: 'Haad Rin',
      neighborhood: 'Haad Rin',
      priceRange: '$15-30',
      avgPrice: 22,
      type: 'Bungalows',
      pros: ['Beach location', 'Authentic', 'Cheap', 'Nature setting', 'Peaceful', 'Basic charm'],
      cons: ['Very basic', 'Fan only no AC', 'Rustic', 'Limited facilities'],
      bestFor: 'Backpackers, nature lovers',
      amenities: ['Beach location', 'Fan', 'Basic amenities', 'Outdoor shower'],
      rating: 4.0,
      city: 'Koh Phangan',
    },
    {
      name: 'Ao Nang Backpackers',
      location: 'Ao Nang Beach',
      neighborhood: 'Ao Nang',
      priceRange: '$12-25',
      avgPrice: 18,
      type: 'Hostel',
      pros: ['Social', 'Near beach', 'Good location', 'Cheap', 'Island hopping base', 'Tours available'],
      cons: ['Basic', 'Can be noisy', 'Small rooms', 'Shared facilities'],
      bestFor: 'Backpackers, island hopping base',
      amenities: ['WiFi', 'Common area', 'Tours', 'Near beach', 'Lockers'],
      rating: 4.2,
      city: 'Krabi',
    },
    {
      name: 'Krabi La Playa Resort',
      location: 'Ao Nang',
      neighborhood: 'Ao Nang',
      priceRange: '$30-50',
      avgPrice: 40,
      type: 'Small hotel',
      pros: ['Pool', 'Clean', 'Walk to beach', 'Good value', 'Quiet', 'Modern'],
      cons: ['Basic rooms', 'Limited facilities', 'No restaurant', 'Small pool'],
      bestFor: 'Couples on budget',
      amenities: ['Pool', 'WiFi', 'Air conditioning', 'Near beach', 'Clean'],
      rating: 4.3,
      city: 'Krabi',
    },
  ];

  const cityHotels = hotels.filter((h) => h.city === selectedCity);

  const calculateCityAvg = (city: string) => {
    const cityHotels = hotels.filter((h) => h.city === city);
    return cityHotels.length > 0
      ? Math.round(cityHotels.reduce((sum, h) => sum + h.avgPrice, 0) / cityHotels.length)
      : 0;
  };

  const avgPriceByCity = {
    Bangkok: calculateCityAvg('Bangkok'),
    'Chiang Mai': calculateCityAvg('Chiang Mai'),
    Phuket: calculateCityAvg('Phuket'),
    'Koh Samui': calculateCityAvg('Koh Samui'),
    'Koh Phangan': calculateCityAvg('Koh Phangan'),
    Krabi: calculateCityAvg('Krabi'),
  };

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Accommodation', path: '/accommodation' },
          { label: 'Best Budget Hotels', path: '/best-budget-hotels' },
        ]}
      />

      <div className="bg-gradient-to-b from-green-900 to-emerald-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <DollarSign className="w-8 h-8 text-green-300" />
              <span className="text-green-300 font-semibold tracking-wider uppercase text-sm">Budget Friendly</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 uppercase tracking-[3px]">
              Best Budget
              <br />
              <span className="text-green-300">Hotels in Thailand</span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-green-100 leading-relaxed mb-4">
                Great budget hotels across Thailand. Clean, safe, and affordable.
              </p>
              <p className="text-lg text-green-200">$20-50 per night</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Price Comparison
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Average nightly rates by city</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200 text-center">
                <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Bangkok</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">${avgPriceByCity.Bangkok}</div>
                <p className="text-gray-600">per night average</p>
                <p className="text-sm text-gray-500 mt-2">Range: $12-40</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border-2 border-orange-200 text-center">
                <Building2 className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Chiang Mai</h3>
                <div className="text-4xl font-bold text-orange-600 mb-2">${avgPriceByCity['Chiang Mai']}</div>
                <p className="text-gray-600">per night average</p>
                <p className="text-sm text-gray-500 mt-2">Range: $8-40</p>
                <span className="inline-block mt-2 px-3 py-1 bg-green-600 text-white rounded-full text-xs font-bold">
                  CHEAPEST
                </span>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-8 border-2 border-cyan-200 text-center">
                <Building2 className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Phuket</h3>
                <div className="text-4xl font-bold text-cyan-600 mb-2">${avgPriceByCity.Phuket}</div>
                <p className="text-gray-600">per night average</p>
                <p className="text-sm text-gray-500 mt-2">Range: $20-50</p>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Budget Hotels by City
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            </div>

            <div className="flex justify-center gap-4 mb-12 flex-wrap">
              {['Bangkok', 'Chiang Mai', 'Phuket', 'Koh Samui', 'Koh Phangan', 'Krabi'].map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCity === city
                      ? 'bg-green-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>

            <div className="space-y-8">
              {cityHotels.map((hotel, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gradient-to-br from-green-100 to-emerald-100 p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-3">
                        <Hotel className="w-8 h-8 text-green-600" />
                        <span className="px-3 py-1 bg-green-600 text-white rounded-full text-xs font-bold">
                          {hotel.type}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
                      <div className="flex items-center gap-2 text-gray-700 mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>{hotel.location}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(hotel.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="text-sm text-gray-600 ml-1">{hotel.rating}</span>
                      </div>
                      <div className="text-4xl font-bold text-green-600 mb-2">{hotel.priceRange}</div>
                      <p className="text-gray-600">per night</p>
                    </div>

                    <div className="md:w-2/3 p-8">
                      <div className="mb-6">
                        <h4 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-2">
                          <Sparkles className="w-5 h-5 text-green-600" />
                          Amenities
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {hotel.amenities.map((amenity, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                            >
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            Advantages
                          </h4>
                          <ul className="space-y-2">
                            {hotel.pros.map((pro, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-yellow-600" />
                            Disadvantages
                          </h4>
                          <ul className="space-y-2">
                            {hotel.cons.map((con, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                                <AlertTriangle className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                          <Users className="w-5 h-5 text-green-600" />
                          Best For:
                        </h4>
                        <p className="text-gray-700">{hotel.bestFor}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Bangkok Budget Hotels
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Best budget accommodation in Bangkok - from hostels to boutique hotels
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-blue-600 rounded-xl">
                    <Hotel className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">Lub d Bangkok Silom</h3>
                        <p className="text-blue-900 font-semibold">Hostel with private rooms</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-blue-600">$15-35</div>
                        <p className="text-sm text-gray-600">per night</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-gray-700 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Silom, near BTS</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span>4.5/5</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Why Stay Here
                    </h4>
                    <p className="text-sm text-gray-700">
                      Social atmosphere with rooftop bar. Very clean and modern. Central location near BTS. Great for
                      meeting other travelers. Good value for money.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      What to Know
                    </h4>
                    <p className="text-sm text-gray-700">
                      Can be noisy with social atmosphere. Shared facilities in dorms. Busy Silom area. Limited privacy
                      if you book a dorm bed.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong className="text-blue-900">Best For:</strong> Solo travelers, backpackers, social scene
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 border-2 border-indigo-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-indigo-600 rounded-xl">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">Oneday Hostel</h3>
                        <p className="text-indigo-900 font-semibold">Boutique hostel</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-indigo-600">$20-40</div>
                        <p className="text-sm text-gray-600">per night</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-gray-700 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Sukhumvit Soi 26</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span>4.6/5</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Why Stay Here
                    </h4>
                    <p className="text-sm text-gray-700">
                      Stylish design on a budget. Quiet residential location. Good breakfast included. Small pool.
                      Modern comfortable rooms. Highly rated.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      What to Know
                    </h4>
                    <p className="text-sm text-gray-700">
                      10 minute walk to BTS. Pool is small. Books up quickly, reserve ahead. Limited common space for
                      socializing.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong className="text-indigo-900">Best For:</strong> Budget travelers wanting style and comfort
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 border-2 border-pink-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-[#D91680] rounded-xl">
                    <Bed className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">Once Again Hostel</h3>
                        <p className="text-[#D91680] font-semibold">Small hostel</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-[#D91680]">$12-30</div>
                        <p className="text-sm text-gray-600">per night</p>
                        <span className="inline-block mt-1 px-2 py-1 bg-green-600 text-white rounded text-xs font-bold">
                          CHEAPEST
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-gray-700 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Ari</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span>4.3/5</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Why Stay Here
                    </h4>
                    <p className="text-sm text-gray-700">
                      Very cheap rates. Local Ari neighborhood. Friendly staff. Authentic Thai experience. Good local
                      food nearby. Peaceful atmosphere.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      What to Know
                    </h4>
                    <p className="text-sm text-gray-700">
                      Basic facilities only. Far from main tourist sites. Small common area. Limited English spoken.
                      Very no-frills experience.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong className="text-[#D91680]">Best For:</strong> Long-term budget travelers, local experience
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Chiang Mai Budget Hotels
              </h2>
              <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Cheapest accommodation in Thailand - hostels from $8/night
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border-2 border-orange-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-orange-600 rounded-xl">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">Stamps Backpackers</h3>
                        <p className="text-orange-900 font-semibold">Hostel</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-orange-600">$10-25</div>
                        <p className="text-sm text-gray-600">per night</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-gray-700 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Old City</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span>4.4/5</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Why Stay Here
                    </h4>
                    <p className="text-sm text-gray-700">
                      Best social hostel in Chiang Mai. Organized tours daily. Central Old City location. Great
                      atmosphere. Easy to meet people. Near temples.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      What to Know
                    </h4>
                    <p className="text-sm text-gray-700">
                      Party atmosphere at night. Can be loud. Basic rooms. Gets very busy. Not for quiet seekers or
                      light sleepers.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong className="text-orange-900">Best For:</strong> Young travelers, meeting people, social
                    atmosphere
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border-2 border-red-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-red-600 rounded-xl">
                    <PartyPopper className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">Bodega Party Hostel</h3>
                        <p className="text-red-900 font-semibold">Party hostel</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-red-600">$8-20</div>
                        <p className="text-sm text-gray-600">per night</p>
                        <span className="inline-block mt-1 px-2 py-1 bg-green-600 text-white rounded text-xs font-bold">
                          CHEAPEST
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-gray-700 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Near Nimman</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span>4.2/5</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Why Stay Here
                    </h4>
                    <p className="text-sm text-gray-700">
                      Very cheap. Social and fun. Organized events. Free beer hour. Young international crowd. Near
                      Nimman area.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      What to Know
                    </h4>
                    <p className="text-sm text-gray-700">
                      Loud party hostel. Basic rooms. Party-focused atmosphere. Not for light sleepers. Under 30 crowd
                      mostly.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong className="text-red-900">Best For:</strong> Party travelers under 30, social scene
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-gray-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-gray-700 rounded-xl">
                    <Hotel className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">Wiang Inn Hotel</h3>
                        <p className="text-gray-700 font-semibold">Budget hotel</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-gray-700">$25-40</div>
                        <p className="text-sm text-gray-600">per night</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-gray-700 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Night Bazaar</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span>4.1/5</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Why Stay Here
                    </h4>
                    <p className="text-sm text-gray-700">
                      Private rooms with bathroom. Pool. Quiet atmosphere. Good value. Near night market. Older
                      travelers welcome.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      What to Know
                    </h4>
                    <p className="text-sm text-gray-700">
                      Dated decor. Basic amenities. Older building. Limited food options. No social atmosphere. Needs
                      renovation.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong className="text-gray-900">Best For:</strong> Couples, older travelers wanting privacy
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Phuket Budget Hotels
              </h2>
              <div className="w-24 h-1 bg-cyan-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Beach accommodation on a budget - near Patong and Kata
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-8 border-2 border-cyan-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-cyan-600 rounded-xl">
                    <Hotel className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">Two Chic Hotel Phuket</h3>
                        <p className="text-cyan-900 font-semibold">Budget hotel</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-cyan-600">$30-50</div>
                        <p className="text-sm text-gray-600">per night</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-gray-700 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Patong Beach</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span>4.5/5</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Why Stay Here
                    </h4>
                    <p className="text-sm text-gray-700">
                      Modern design. Very clean. Close to beach. Rooftop pool. Good Patong location. Stylish on a
                      budget.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      What to Know
                    </h4>
                    <p className="text-sm text-gray-700">
                      Small rooms. Basic breakfast. Can be noisy (Patong area). Limited facilities. No gym or spa.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong className="text-cyan-900">Best For:</strong> Beach access on budget, modern accommodation
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-blue-600 rounded-xl">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">Lub d Phuket Patong</h3>
                        <p className="text-blue-900 font-semibold">Hostel chain</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-blue-600">$20-40</div>
                        <p className="text-sm text-gray-600">per night</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-gray-700 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Patong</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span>4.4/5</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Why Stay Here
                    </h4>
                    <p className="text-sm text-gray-700">
                      Social atmosphere. Clean hostel. Near beach. Rooftop bar. Good vibes. Reliable Lub d chain.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      What to Know
                    </h4>
                    <p className="text-sm text-gray-700">
                      Busy Patong area. Can be noisy. Party vibe at night. Shared facilities in dorms. Limited privacy.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong className="text-blue-900">Best For:</strong> Solo travelers, social scene, beach access
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-green-600 rounded-xl">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">The Phulin Resort</h3>
                        <p className="text-green-900 font-semibold">Small resort</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-green-600">$25-45</div>
                        <p className="text-sm text-gray-600">per night</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-gray-700 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Kata Beach</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span>4.2/5</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Why Stay Here
                    </h4>
                    <p className="text-sm text-gray-700">
                      Pool. Quiet location. Family-run. Near beautiful Kata Beach. Peaceful atmosphere. Good value.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      What to Know
                    </h4>
                    <p className="text-sm text-gray-700">
                      Basic rooms. Older property. Limited amenities. Dated decor. No luxury facilities. Needs updates.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong className="text-green-900">Best For:</strong> Couples, peace and quiet, Kata Beach
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Koh Samui Budget Hotels
              </h2>
              <div className="w-24 h-1 bg-[#D91680] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Island paradise on a budget - beach resorts from $25/night
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 border-2 border-pink-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-[#D91680] rounded-xl">
                    <Waves className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">Chaweng Buri Resort</h3>
                        <p className="text-[#D91680] font-semibold">Beach resort</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-[#D91680]">$30-50</div>
                        <p className="text-sm text-gray-600">per night</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-gray-700 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Chaweng Beach</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span>4.0/5</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Why Stay Here
                    </h4>
                    <p className="text-sm text-gray-700">
                      Direct beach access. Pool and restaurant. Good location on Chaweng. Beach front rooms. Friendly
                      staff. Budget beach resort.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      What to Know
                    </h4>
                    <p className="text-sm text-gray-700">
                      Dated rooms and decor. Basic facilities. Property needs renovation. Old furniture. No luxury
                      amenities.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong className="text-[#D91680]">Best For:</strong> Beach lovers on budget, Chaweng location
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 border-2 border-pink-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-pink-600 rounded-xl">
                    <Music className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">Ark Bar Beach Resort</h3>
                        <p className="text-pink-900 font-semibold">Party resort</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-pink-600">$35-60</div>
                        <p className="text-sm text-gray-600">per night</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-gray-700 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Chaweng Beach</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span>4.3/5</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Why Stay Here
                    </h4>
                    <p className="text-sm text-gray-700">
                      Beach front location. Pool and beach bar. Famous party scene. Central Chaweng. Social atmosphere.
                      Daily events and music.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      What to Know
                    </h4>
                    <p className="text-sm text-gray-700">
                      VERY loud 24/7. Party atmosphere all night. No sleep possible. Beach bar music all day. Not for
                      quiet seekers.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong className="text-pink-900">Best For:</strong> Young party travelers, social beach scene
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl p-8 border-2 border-sky-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-sky-600 rounded-xl">
                    <Umbrella className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">Lazy Days Samui Beach Resort</h3>
                        <p className="text-sky-900 font-semibold">Small resort</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-sky-600">$25-45</div>
                        <p className="text-sm text-gray-600">per night</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-gray-700 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Lamai Beach</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span>4.1/5</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Why Stay Here
                    </h4>
                    <p className="text-sm text-gray-700">
                      Beach access. Pool. Quiet Lamai location. Good value. Peaceful atmosphere. Family-friendly. Away
                      from party scene.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      What to Know
                    </h4>
                    <p className="text-sm text-gray-700">
                      Older property. Basic rooms and amenities. Limited facilities. Dated decor. Needs updates. No
                      luxury features.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong className="text-sky-900">Best For:</strong> Budget beach stay, peace and quiet
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Koh Phangan Budget Hotels
              </h2>
              <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Full Moon Party headquarters - ultra-budget accommodation
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 border-2 border-yellow-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-yellow-600 rounded-xl">
                    <PartyPopper className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">Slumber Party Hostel</h3>
                        <p className="text-yellow-900 font-semibold">Hostel</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-yellow-600">$10-25</div>
                        <p className="text-sm text-gray-600">per night</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-gray-700 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Haad Rin</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span>3.9/5</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Why Stay Here
                    </h4>
                    <p className="text-sm text-gray-700">
                      Near Full Moon Party. Social hostel atmosphere. Very cheap. Beach location. Party base. Young
                      international crowd.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      What to Know
                    </h4>
                    <p className="text-sm text-gray-700">
                      Very basic facilities. Party area always loud. No frills. Basic beds and rooms. Minimal amenities.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong className="text-yellow-900">Best For:</strong> Full Moon Party travelers, ultra-budget
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-lime-50 to-lime-100 rounded-2xl p-8 border-2 border-lime-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-lime-600 rounded-xl">
                    <Palmtree className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">Phangan Bamboo Bungalows</h3>
                        <p className="text-lime-900 font-semibold">Bungalows</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-lime-600">$15-30</div>
                        <p className="text-sm text-gray-600">per night</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-gray-700 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Haad Rin</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span>4.0/5</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Why Stay Here
                    </h4>
                    <p className="text-sm text-gray-700">
                      Beach location. Authentic bamboo bungalows. Cheap. Nature setting. Peaceful. Basic island charm.
                      Local experience.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      What to Know
                    </h4>
                    <p className="text-sm text-gray-700">
                      Very basic. Fan only, no AC. Rustic bamboo construction. Limited facilities. Outdoor shower. Very
                      simple.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong className="text-lime-900">Best For:</strong> Backpackers, nature lovers, authentic
                    experience
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Krabi Budget Hotels
              </h2>
              <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Island hopping base - affordable Ao Nang accommodation
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 border-2 border-emerald-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-emerald-600 rounded-xl">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">Ao Nang Backpackers</h3>
                        <p className="text-emerald-900 font-semibold">Hostel</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-emerald-600">$12-25</div>
                        <p className="text-sm text-gray-600">per night</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-gray-700 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Ao Nang Beach</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span>4.2/5</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Why Stay Here
                    </h4>
                    <p className="text-sm text-gray-700">
                      Social hostel. Near beach and Ao Nang. Good location. Cheap rates. Perfect island hopping base.
                      Tours available.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      What to Know
                    </h4>
                    <p className="text-sm text-gray-700">
                      Basic facilities. Can be noisy. Small rooms. Shared bathrooms in dorms. No frills hostel
                      experience.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong className="text-emerald-900">Best For:</strong> Backpackers, island hopping base
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border-2 border-slate-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-slate-600 rounded-xl">
                    <Hotel className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">Krabi La Playa Resort</h3>
                        <p className="text-slate-900 font-semibold">Small hotel</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-slate-600">$30-50</div>
                        <p className="text-sm text-gray-600">per night</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-gray-700 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Ao Nang</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span>4.3/5</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Why Stay Here
                    </h4>
                    <p className="text-sm text-gray-700">
                      Pool. Very clean. Walk to beach. Good value. Quiet location. Modern for budget. Private rooms.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      What to Know
                    </h4>
                    <p className="text-sm text-gray-700">
                      Basic rooms. Limited facilities. No restaurant on site. Small pool. Basic breakfast only.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong className="text-slate-900">Best For:</strong> Couples on budget, privacy
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Seasonal Pricing Guide
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                When to book for the best budget hotel deals
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border-2 border-red-200">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-8 h-8 text-red-600" />
                  <h3 className="text-2xl font-bold text-gray-900">High Season</h3>
                </div>
                <div className="mb-4">
                  <p className="text-red-900 font-bold text-lg">November - March</p>
                  <p className="text-gray-700 mb-4">Peak tourist season, best weather</p>
                </div>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <p className="font-bold text-gray-900 mb-2">Pricing:</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Prices at peak rates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Book 2-3 months ahead</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Best hotels sell out quickly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Christmas/New Year premium +50%</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center bg-red-600 text-white rounded-lg p-3 font-bold">
                  Expect to pay full price
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-8 h-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Low Season</h3>
                </div>
                <div className="mb-4">
                  <p className="text-green-900 font-bold text-lg">May - October</p>
                  <p className="text-gray-700 mb-4">Rainy season, fewer tourists</p>
                </div>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <p className="font-bold text-gray-900 mb-2">Pricing:</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <DollarSign className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>40-50% cheaper than high season</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <DollarSign className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Walk-in deals available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <DollarSign className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Easy to negotiate prices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <DollarSign className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Long-stay discounts 20-30%</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center bg-green-600 text-white rounded-lg p-3 font-bold">
                  BEST TIME TO SAVE MONEY
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Shoulder Season</h3>
              </div>
              <div className="mb-4">
                <p className="text-blue-900 font-bold text-lg">April & November</p>
                <p className="text-gray-700 mb-4">Transition periods, mixed weather</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4">
                  <p className="font-bold text-gray-900 mb-2">April:</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span>Very hot (35-40 degrees C)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>20-30% cheaper</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Songkran festival</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-bold text-gray-900 mb-2">November:</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Weather improving</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Early birds get deals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Loy Krathong festival</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                What to Expect: Budget Hotels
              </h2>
              <div className="w-24 h-1 bg-gray-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Realistic expectations for $20-50/night accommodation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 shadow-lg">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Info className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Price Range</h3>
                      <p className="text-gray-700">$20-50 per night</p>
                      <p className="text-sm text-gray-600 mt-1">Dorms $8-15, Private rooms $20-50</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 shadow-lg">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <Bed className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Room Size</h3>
                      <p className="text-gray-700">15-25 square meters</p>
                      <p className="text-sm text-gray-600 mt-1">Basic but functional space</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 shadow-lg">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-3 bg-pink-100 rounded-lg">
                      <Sparkles className="w-6 h-6 text-[#D91680]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Amenities</h3>
                      <p className="text-gray-700 mb-2">Usually Included:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>- AC and hot water</li>
                        <li>- WiFi (may be slow)</li>
                        <li>- Clean sheets and towels</li>
                        <li>- Private bathroom (in rooms)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 shadow-lg">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <Coffee className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Breakfast</h3>
                      <p className="text-gray-700">Basic or not included</p>
                      <p className="text-sm text-gray-600 mt-1">Toast, eggs, coffee if included</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 shadow-lg">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-3 bg-cyan-100 rounded-lg">
                      <Waves className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Pool</h3>
                      <p className="text-gray-700">Hit or miss</p>
                      <p className="text-sm text-gray-600 mt-1">Small pools in some hotels, none in hostels</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 shadow-lg">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-3 bg-yellow-100 rounded-lg">
                      <MapPin className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                      <p className="text-gray-700">May not be most central</p>
                      <p className="text-sm text-gray-600 mt-1">Often 10-15 min walk to main areas</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 shadow-lg">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <Sparkles className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Cleanliness</h3>
                      <p className="text-gray-700">Usually acceptable</p>
                      <p className="text-sm text-gray-600 mt-1">Read recent reviews to confirm</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 shadow-lg">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <Building2 className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Property Condition</h3>
                      <p className="text-gray-700">Functional but dated</p>
                      <p className="text-sm text-gray-600 mt-1">Older furniture, basic decor, works fine</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Budget Hotel Comparison
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">All destinations at a glance</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl border-2 border-gray-200 shadow-lg overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                    <th className="px-6 py-4 text-left font-bold">Destination</th>
                    <th className="px-6 py-4 text-left font-bold">Average Price</th>
                    <th className="px-6 py-4 text-left font-bold">Price Range</th>
                    <th className="px-6 py-4 text-left font-bold">Best For</th>
                    <th className="px-6 py-4 text-left font-bold">Value Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-blue-600" />
                        <span className="font-semibold text-gray-900">Bangkok</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">${avgPriceByCity.Bangkok}/night</td>
                    <td className="px-6 py-4 text-gray-700">$12-40</td>
                    <td className="px-6 py-4 text-gray-700">City exploration</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-1">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Palmtree className="w-5 h-5 text-orange-600" />
                        <span className="font-semibold text-gray-900">Chiang Mai</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">${avgPriceByCity['Chiang Mai']}/night</td>
                    <td className="px-6 py-4 text-gray-700">$8-40</td>
                    <td className="px-6 py-4 text-gray-700">Culture, nature</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        ))}
                        <span className="ml-2 text-xs bg-green-600 text-white px-2 py-1 rounded font-bold">BEST</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-cyan-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Waves className="w-5 h-5 text-cyan-600" />
                        <span className="font-semibold text-gray-900">Phuket</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">${avgPriceByCity.Phuket}/night</td>
                    <td className="px-6 py-4 text-gray-700">$20-50</td>
                    <td className="px-6 py-4 text-gray-700">Beach, nightlife</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-1">
                        {[...Array(3)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-pink-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Palmtree className="w-5 h-5 text-[#D91680]" />
                        <span className="font-semibold text-gray-900">Koh Samui</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">${avgPriceByCity['Koh Samui']}/night</td>
                    <td className="px-6 py-4 text-gray-700">$25-60</td>
                    <td className="px-6 py-4 text-gray-700">Island paradise</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-1">
                        {[...Array(3)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-yellow-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <PartyPopper className="w-5 h-5 text-yellow-600" />
                        <span className="font-semibold text-gray-900">Koh Phangan</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">${avgPriceByCity['Koh Phangan']}/night</td>
                    <td className="px-6 py-4 text-gray-700">$10-30</td>
                    <td className="px-6 py-4 text-gray-700">Full Moon Party</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-1">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-emerald-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Waves className="w-5 h-5 text-emerald-600" />
                        <span className="font-semibold text-gray-900">Krabi</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">${avgPriceByCity.Krabi}/night</td>
                    <td className="px-6 py-4 text-gray-700">$12-50</td>
                    <td className="px-6 py-4 text-gray-700">Island hopping</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-1">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-blue-600" />
                Quick Summary
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white rounded-lg p-4">
                  <p className="font-bold text-green-600 mb-1">CHEAPEST</p>
                  <p className="text-gray-900">Chiang Mai ($21 avg)</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-bold text-blue-600 mb-1">BEST VALUE</p>
                  <p className="text-gray-900">Chiang Mai & Koh Phangan</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-bold text-orange-600 mb-1">MOST EXPENSIVE</p>
                  <p className="text-gray-900">Koh Samui ($41 avg)</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Budget Hotel Tips
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 shadow-lg">
                <div className="flex items-start gap-3 mb-4">
                  <ListChecks className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Before Booking</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Read recent reviews:</strong> Check last 3 months on Google and TripAdvisor
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Book direct:</strong> Hotel websites often cheaper than booking sites
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Check location:</strong> Near BTS in Bangkok saves transport money
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Verify amenities:</strong> Confirm AC, hot water, WiFi included
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 shadow-lg">
                <div className="flex items-start gap-3 mb-4">
                  <DollarSign className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Saving Money</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Low season travel:</strong> May-October prices drop 30-50%
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Negotiate walk-ins:</strong> Can get discounts, especially low season
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Ask about long-stay:</strong> Weekly/monthly rates 10-20% cheaper
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Avoid tourist streets:</strong> One block back often 30% cheaper
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-gradient-to-br from-green-900 to-emerald-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex items-start gap-4">
              <Shield className="w-10 h-10 text-green-300 flex-shrink-0" />
              <div>
                <h3 className="text-3xl font-bold mb-4">Budget Hotel Booking Tips</h3>
                <ul className="space-y-3 text-green-100">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Read recent reviews:</strong> Check last 3 months, quality changes quickly
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Book direct:</strong> Hotels often cheaper on their website than booking sites
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Check what's included:</strong> Breakfast, WiFi, towels not always free
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Location over amenities:</strong> Central location saves money on transport
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Private rooms vs dorms:</strong> Private rooms worth $10-15 extra for sleep quality
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Ask about discounts:</strong> Longer stays often get 10-20% off
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Avoid tourist areas:</strong> One street back often 30% cheaper
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Low season deals:</strong> May-October prices drop 40-50%
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
                title: 'Budget Guide',
                description: 'Complete Thailand budget guide',
                link: '/budget-guide',
                image:
                  'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Where to Stay in Bangkok',
                description: 'Best Bangkok neighborhoods',
                link: '/where-to-stay-bangkok',
                image:
                  'https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Where to Stay in Phuket',
                description: 'Best Phuket beaches',
                link: '/where-to-stay-phuket',
                image:
                  'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
