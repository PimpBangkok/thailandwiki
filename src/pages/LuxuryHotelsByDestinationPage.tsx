import { MapPin, Star, Award, Hotel, Heart, Sparkles, TrendingUp, Globe } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import Breadcrumb from '../components/Breadcrumb';
import TableOfContents from '../components/TableOfContents';
import RelatedGuides from '../components/RelatedGuides';
import YouMayAlsoLike from '../components/YouMayAlsoLike';

export default function LuxuryHotelsByDestinationPage() {
  usePageMeta({
    title: 'Luxury Hotels by Destination Thailand 2026 | Bangkok, Phuket, Samui Guide',
    description: 'Find the perfect luxury hotel for your Thai destination. Expert guides to Bangkok riverside elegance, Phuket beach resorts, Koh Samui island luxury, and Chiang Mai cultural properties.',
    keywords: 'luxury hotels bangkok, luxury hotels phuket, best hotels koh samui, luxury hotels chiang mai, luxury resorts krabi',
  });

  const bangkokRiverside = [
    {
      name: 'The Peninsula Bangkok',
      category: 'Best Overall',
      price: '$350-500/night',
      location: 'Riverside',
      image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
      whyHere: 'Riverside setting, classic elegance, world-class service',
      bestRoom: 'Grand Balcony Suite with river view',
      features: ['Riverside infinity pool', 'Mei Jiang restaurant', 'Peninsula Green Bentley fleet'],
      bookIf: 'You want old-world elegance and tranquil riverside setting',
      rating: 9.5,
    },
    {
      name: 'Mandarin Oriental Bangkok',
      category: 'Historic Icon',
      price: '$300-550/night',
      location: 'Riverside',
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
      whyHere: 'Historic property (since 1876), legendary service, award-winning restaurants',
      bestRoom: 'Authors Wing for character, River Wing for views',
      features: ['Two Michelin stars (Le Normandie)', 'Riverside spa', 'Cooking school'],
      bookIf: 'You value history, tradition, and impeccable service',
      rating: 10,
    },
    {
      name: 'Four Seasons Bangkok at Chao Phraya River',
      category: 'Modern Riverside',
      price: '$400-600/night',
      location: 'Riverside',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      whyHere: 'Newest riverside luxury (2020), largest rooms, excellent families',
      bestRoom: 'Premier River View (72sqm)',
      features: ['Multiple pools', 'BKK Social Club rooftop', 'Yu Ting Yuan Cantonese'],
      bookIf: 'You want modern luxury with space',
      rating: 9,
    },
  ];

  const bangkokCBD = [
    {
      name: 'The St. Regis Bangkok',
      category: 'Butler Luxury',
      price: '$250-400/night',
      location: 'Rajadamri Road (BTS Rajadamri)',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      whyHere: 'Butler service every room, prime shopping location, elegant urban luxury',
      bestRoom: 'Grand Deluxe (56sqm)',
      features: ['Rooftop Viu bar', 'Signature St. Regis butler service', 'Afternoon tea with harp'],
      bookIf: 'You want central location and butler service',
      rating: 9,
    },
    {
      name: 'Park Hyatt Bangkok',
      category: 'Contemporary Design',
      price: '$300-450/night',
      location: 'Central Embassy mall (connected directly)',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      whyHere: 'Ultra-modern design, connected to luxury mall, central location',
      bestRoom: 'Park King Room (45sqm)',
      features: ['Infinity pool on 30th floor', 'Penthouse Bar + Grill', 'Spa'],
      bookIf: 'You love modern design and shopping convenience',
      rating: 8.5,
    },
  ];

  const phuketWestCoast = [
    {
      name: 'Amanpuri',
      beach: 'Pansea Beach',
      category: 'Ultimate Luxury',
      price: '$1,000-2,500/night',
      image: 'https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=800',
      whyHere: "Thailand's original ultra-luxury resort, completely private, exclusive",
      bestRoom: 'Ocean Pavilion (115sqm), or Villa with Pool ($2,000+)',
      features: ['Private cove', '70-acre coconut plantation', 'Aman brand excellence'],
      bookIf: 'Money no object, you want ultimate exclusivity',
      rating: 10,
    },
    {
      name: 'The Surin Phuket',
      beach: 'Pansea Beach',
      category: 'Beach Chic',
      price: '$400-800/night',
      image: 'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&w=800',
      whyHere: 'Same beautiful Pansea Beach as Amanpuri, more accessible pricing',
      bestRoom: 'Beachfront Cottage',
      features: ['Beach clubs', 'Italian Taste restaurant', 'Laid-back luxury'],
      bookIf: 'You want beautiful beach without Amanpuri price tag',
      rating: 9,
    },
    {
      name: 'Trisara',
      beach: 'Northwest Coast',
      category: 'Private Pool Villas',
      price: '$600-1,500/night',
      image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800',
      whyHere: 'All-pool-villa resort, every unit 225sqm+, private beach, excellent for families',
      bestRoom: 'Ocean View Pool Suite (350sqm with 15m pool)',
      features: ['PRU farm-to-table restaurant (Michelin Plate)', 'Jara Spa', 'Kids welcome'],
      bookIf: 'You want spacious pool villa and family-friendly luxury',
      rating: 9.5,
    },
  ];

  const phuketEastCoast = [
    {
      name: 'Sri Panwa',
      beach: 'Cape Panwa',
      category: 'Dramatic Views',
      price: '$350-1,200/night',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      whyHere: 'Most dramatic ocean views in Phuket, Baba Nest rooftop bar (legendary)',
      bestRoom: 'Two Bedroom Ocean Pool Villa minimum (350sqm)',
      features: ['Baba Nest sunset bar', 'Multi-level infinity pools', 'Contemporary design'],
      bookIf: 'You prioritize views and Instagram-worthy property over beach access',
      rating: 8.5,
      note: 'Cape Panwa = views but no proper beach (rocky). Choose if scenery > swimming.',
    },
  ];

  const samuiResorts = [
    {
      name: 'Six Senses Samui',
      coast: 'North Coast',
      category: 'Wellness Luxury',
      price: '$550-1,400/night',
      image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
      whyHere: 'Holistic spa programs, organic dining, sustainable luxury',
      bestRoom: 'Ocean Pool Villa (275sqm)',
      features: ['Wellness retreats', 'Organic farm', 'Outdoor cinema', 'Every villa has infinity pool'],
      bookIf: 'You want wellness focus and eco-luxury',
      rating: 9,
    },
    {
      name: 'Conrad Koh Samui',
      coast: 'Southwest Coast',
      category: 'Romantic Sunset',
      price: '$400-900/night',
      image: 'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800',
      whyHere: 'Sunset views from infinity pool, adults-focused, intimate (81 villas only)',
      bestRoom: 'Sunset Ocean View Pool Villa',
      features: ['Azure Bar (best sunset on Samui)', 'All ocean-view pool villas', 'Intimate setting'],
      bookIf: 'You want romantic sunset setting for honeymoon or couples',
      rating: 8.5,
    },
    {
      name: 'Four Seasons Koh Samui',
      coast: 'Southeast Coast',
      category: 'Family Luxury',
      price: '$600-1,500/night',
      image: 'https://images.pexels.com/photos/1680247/pexels-photo-1680247.jpeg?auto=compress&cs=tinysrgb&w=800',
      whyHere: 'Best luxury family resort Samui, excellent kids club, private pools every villa',
      bestRoom: 'Two-Bedroom Villa ($1,000-1,500/night) for families',
      features: ['Kids for All Seasons club', 'Multiple pools', 'Beach access', 'Water sports'],
      bookIf: 'Traveling with family and want Four Seasons standards',
      rating: 9.5,
    },
  ];

  const chiangMaiHotels = [
    {
      name: 'Four Seasons Chiang Mai',
      category: 'Rice Paddy Luxury',
      price: '$400-1,200/night',
      location: 'Mae Rim valley (20 min north of Old City)',
      image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800',
      whyHere: 'Surrounded by working rice paddies, traditional Lanna architecture, magical setting',
      bestRoom: 'Residence with Pool ($700+)',
      features: ['Rice planting experiences', 'Water buffalo', 'Mountain views', 'Cultural immersion'],
      bookIf: 'You want luxury + authentic cultural experience',
      rating: 9.5,
    },
    {
      name: 'Dhara Dhevi Chiang Mai',
      category: 'Cultural Palace',
      price: '$300-800/night',
      location: 'Just outside Old City',
      image: 'https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&w=800',
      whyHere: 'Recreated ancient Lanna kingdom, sprawling property, award-winning spa',
      bestRoom: 'Residence Villa with Pool ($600+)',
      features: ['Multiple themed areas', 'Dheva Spa', 'Cooking school', 'Cultural architecture'],
      bookIf: 'You want to feel like staying in ancient palace',
      rating: 8.5,
    },
  ];

  const destinationSelector = [
    {
      priority: 'Urban luxury + rooftop bars + Michelin dining',
      destination: 'Bangkok',
      hotels: 'Peninsula, Mandarin Oriental, St. Regis',
      color: 'amber',
    },
    {
      priority: 'Beach + private pools + Andaman Sea',
      destination: 'Phuket',
      hotels: 'Amanpuri, Trisara, The Surin',
      color: 'cyan',
    },
    {
      priority: 'Romantic island escape + sunset',
      destination: 'Koh Samui',
      hotels: 'Conrad, Six Senses',
      color: 'emerald',
    },
    {
      priority: 'Cultural immersion + rice paddies',
      destination: 'Chiang Mai',
      hotels: 'Four Seasons, Dhara Dhevi',
      color: 'green',
    },
    {
      priority: 'Ultimate exclusivity',
      destination: 'Amanpuri Phuket or Rayavadee Krabi',
      hotels: 'Boat access, private coves',
      color: 'purple',
    },
    {
      priority: 'Best value luxury',
      destination: 'Sri Panwa, Conrad Samui, Dhara Dhevi',
      hotels: '$300-400/night range',
      color: 'blue',
    },
    {
      priority: 'Family-friendly',
      destination: 'Four Seasons Samui, Trisara Phuket',
      hotels: 'Kids clubs, family villas',
      color: 'pink',
    },
    {
      priority: 'Wellness retreat',
      destination: 'Six Senses Samui',
      hotels: 'Holistic programs, organic dining',
      color: 'pink',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: 'Where to Stay', path: '/accommodation' },
            { label: 'Luxury Hotels by Destination' },
          ]}
        />

        <div className="relative h-[400px] -mx-4 sm:-mx-6 lg:-mx-8 mb-12">
          <img
            src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Thailand luxury hotels"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-center mb-4 uppercase tracking-[3px]">
              Luxury Hotels by Destination
            </h1>
            <p className="text-xl sm:text-2xl text-center max-w-3xl font-light">
              Expert guide to Thailand's best luxury hotels organized by location
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          <div className="space-y-16">
            <section>
              <div className="bg-white rounded-lg shadow-md p-8 mb-12">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  This destination-specific guide helps you choose the perfect luxury hotel based on where you are traveling in Thailand. Each destination has unique characteristics and hotel offerings.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">Bangkok</p>
                    <p className="text-gray-700">Urban luxury with rooftop bars and Michelin dining</p>
                  </div>
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">Phuket</p>
                    <p className="text-gray-700">Beach resorts with private pools and Andaman Sea access</p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">Koh Samui</p>
                    <p className="text-gray-700">Intimate island luxury with sunset views</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">Chiang Mai</p>
                    <p className="text-gray-700">Cultural immersion with rice paddy views</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="bangkok-hotels">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-amber-600 pb-3">
                Luxury Hotels Bangkok
              </h2>

              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <MapPin className="w-6 h-6 text-amber-600 mr-3" />
                  Riverside Luxury
                </h3>
                <p className="text-gray-600 mb-6 italic">Best for: Views, tranquility, classic elegance</p>

                <div className="space-y-6">
                  {bangkokRiverside.map((hotel, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden">
                      <div className="md:flex">
                        <div className="md:w-1/3 relative h-64 md:h-auto">
                          <img
                            src={hotel.image}
                            alt={hotel.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full font-bold text-sm flex items-center">
                            <Star className="w-4 h-4 mr-1 fill-current" />
                            {hotel.rating}/10
                          </div>
                        </div>
                        <div className="md:w-2/3 p-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="text-2xl font-bold text-gray-900">{hotel.name}</h4>
                              <p className="text-lg text-amber-600 font-semibold">{hotel.category}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-xl font-bold text-gray-900">{hotel.price}</p>
                            </div>
                          </div>

                          <div className="space-y-3 text-sm">
                            <div className="flex items-start">
                              <span className="font-semibold text-gray-900 w-24 flex-shrink-0">Why Here:</span>
                              <span className="text-gray-700">{hotel.whyHere}</span>
                            </div>
                            <div className="flex items-start">
                              <span className="font-semibold text-gray-900 w-24 flex-shrink-0">Best Room:</span>
                              <span className="text-gray-700">{hotel.bestRoom}</span>
                            </div>
                            <div className="flex items-start">
                              <span className="font-semibold text-gray-900 w-24 flex-shrink-0">Features:</span>
                              <span className="text-gray-700">{hotel.features.join(', ')}</span>
                            </div>
                            <div className="flex items-start bg-amber-50 p-3 rounded-lg mt-3">
                              <span className="font-semibold text-gray-900 w-24 flex-shrink-0">Book If:</span>
                              <span className="text-gray-700">{hotel.bookIf}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 mt-6">
                  <h4 className="font-bold text-gray-900 mb-3">Riverside Hotels Comparison:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Most elegant:</strong> Peninsula</li>
                    <li>• <strong>Most historic:</strong> Mandarin Oriental</li>
                    <li>• <strong>Most modern/spacious:</strong> Four Seasons</li>
                    <li>• <strong>Best food:</strong> Tie between Peninsula and Mandarin Oriental</li>
                    <li>• <strong>Best for families:</strong> Four Seasons</li>
                  </ul>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Hotel className="w-6 h-6 text-amber-600 mr-3" />
                  Central Business District
                </h3>
                <p className="text-gray-600 mb-6 italic">Best for: Shopping, business, convenience</p>

                <div className="space-y-6">
                  {bangkokCBD.map((hotel, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden">
                      <div className="md:flex">
                        <div className="md:w-1/3 relative h-64 md:h-auto">
                          <img
                            src={hotel.image}
                            alt={hotel.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full font-bold text-sm flex items-center">
                            <Star className="w-4 h-4 mr-1 fill-current" />
                            {hotel.rating}/10
                          </div>
                        </div>
                        <div className="md:w-2/3 p-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="text-2xl font-bold text-gray-900">{hotel.name}</h4>
                              <p className="text-lg text-amber-600 font-semibold">{hotel.category}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-xl font-bold text-gray-900">{hotel.price}</p>
                            </div>
                          </div>

                          <div className="space-y-3 text-sm">
                            <div className="flex items-start">
                              <span className="font-semibold text-gray-900 w-24 flex-shrink-0">Location:</span>
                              <span className="text-gray-700">{hotel.location}</span>
                            </div>
                            <div className="flex items-start">
                              <span className="font-semibold text-gray-900 w-24 flex-shrink-0">Why Here:</span>
                              <span className="text-gray-700">{hotel.whyHere}</span>
                            </div>
                            <div className="flex items-start">
                              <span className="font-semibold text-gray-900 w-24 flex-shrink-0">Best Room:</span>
                              <span className="text-gray-700">{hotel.bestRoom}</span>
                            </div>
                            <div className="flex items-start">
                              <span className="font-semibold text-gray-900 w-24 flex-shrink-0">Features:</span>
                              <span className="text-gray-700">{hotel.features.join(', ')}</span>
                            </div>
                            <div className="flex items-start bg-amber-50 p-3 rounded-lg mt-3">
                              <span className="font-semibold text-gray-900 w-24 flex-shrink-0">Book If:</span>
                              <span className="text-gray-700">{hotel.bookIf}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 mt-6">
                  <h4 className="font-bold text-gray-900 mb-3">CBD Hotels Comparison:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Most central:</strong> St. Regis (better walking access)</li>
                    <li>• <strong>Most modern:</strong> Park Hyatt</li>
                    <li>• <strong>Best for shopping:</strong> Park Hyatt (mall connection)</li>
                    <li>• <strong>Best service:</strong> St. Regis (butler)</li>
                    <li>• <strong>Better value:</strong> St. Regis usually cheaper</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="phuket-hotels">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-cyan-600 pb-3">
                Luxury Hotels Phuket
              </h2>

              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <MapPin className="w-6 h-6 text-cyan-600 mr-3" />
                  West Coast Beaches
                </h3>
                <p className="text-gray-600 mb-6 italic">Best for: Sunsets, main tourist area</p>

                <div className="space-y-6">
                  {phuketWestCoast.map((hotel, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden">
                      <div className="md:flex">
                        <div className="md:w-1/3 relative h-64 md:h-auto">
                          <img
                            src={hotel.image}
                            alt={hotel.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 right-4 bg-cyan-600 text-white px-3 py-1 rounded-full font-bold text-sm flex items-center">
                            <Star className="w-4 h-4 mr-1 fill-current" />
                            {hotel.rating}/10
                          </div>
                          <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            {hotel.beach}
                          </div>
                        </div>
                        <div className="md:w-2/3 p-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="text-2xl font-bold text-gray-900">{hotel.name}</h4>
                              <p className="text-lg text-cyan-600 font-semibold">{hotel.category}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-xl font-bold text-gray-900">{hotel.price}</p>
                            </div>
                          </div>

                          <div className="space-y-3 text-sm">
                            <div className="flex items-start">
                              <span className="font-semibold text-gray-900 w-24 flex-shrink-0">Why Here:</span>
                              <span className="text-gray-700">{hotel.whyHere}</span>
                            </div>
                            <div className="flex items-start">
                              <span className="font-semibold text-gray-900 w-24 flex-shrink-0">Best Room:</span>
                              <span className="text-gray-700">{hotel.bestRoom}</span>
                            </div>
                            <div className="flex items-start">
                              <span className="font-semibold text-gray-900 w-24 flex-shrink-0">Features:</span>
                              <span className="text-gray-700">{hotel.features.join(', ')}</span>
                            </div>
                            <div className="flex items-start bg-cyan-50 p-3 rounded-lg mt-3">
                              <span className="font-semibold text-gray-900 w-24 flex-shrink-0">Book If:</span>
                              <span className="text-gray-700">{hotel.bookIf}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-6 mt-6">
                  <h4 className="font-bold text-gray-900 mb-3">Pansea Beach Area Comparison:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Most exclusive:</strong> Amanpuri (by far)</li>
                    <li>• <strong>Best value:</strong> The Surin</li>
                    <li>• <strong>Best for families:</strong> Trisara (elsewhere, but nearby)</li>
                    <li>• <strong>Most private pools:</strong> Trisara (every room)</li>
                    <li>• <strong>Most space:</strong> Trisara (villas 225sqm+)</li>
                  </ul>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <MapPin className="w-6 h-6 text-cyan-600 mr-3" />
                  Cape Panwa / East Coast
                </h3>
                <p className="text-gray-600 mb-6 italic">Best for: Views, seclusion</p>

                <div className="space-y-6">
                  {phuketEastCoast.map((hotel, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden">
                      <div className="md:flex">
                        <div className="md:w-1/3 relative h-64 md:h-auto">
                          <img
                            src={hotel.image}
                            alt={hotel.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 right-4 bg-cyan-600 text-white px-3 py-1 rounded-full font-bold text-sm flex items-center">
                            <Star className="w-4 h-4 mr-1 fill-current" />
                            {hotel.rating}/10
                          </div>
                        </div>
                        <div className="md:w-2/3 p-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="text-2xl font-bold text-gray-900">{hotel.name}</h4>
                              <p className="text-lg text-cyan-600 font-semibold">{hotel.category}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-xl font-bold text-gray-900">{hotel.price}</p>
                            </div>
                          </div>

                          <div className="space-y-3 text-sm">
                            <div className="flex items-start">
                              <span className="font-semibold text-gray-900 w-24 flex-shrink-0">Why Here:</span>
                              <span className="text-gray-700">{hotel.whyHere}</span>
                            </div>
                            <div className="flex items-start">
                              <span className="font-semibold text-gray-900 w-24 flex-shrink-0">Best Room:</span>
                              <span className="text-gray-700">{hotel.bestRoom}</span>
                            </div>
                            <div className="flex items-start">
                              <span className="font-semibold text-gray-900 w-24 flex-shrink-0">Features:</span>
                              <span className="text-gray-700">{hotel.features.join(', ')}</span>
                            </div>
                            <div className="flex items-start bg-cyan-50 p-3 rounded-lg mt-3">
                              <span className="font-semibold text-gray-900 w-24 flex-shrink-0">Book If:</span>
                              <span className="text-gray-700">{hotel.bookIf}</span>
                            </div>
                          </div>

                          {hotel.note && (
                            <div className="bg-amber-50 border-l-4 border-amber-600 p-3 mt-4 rounded">
                              <p className="text-sm text-gray-700"><strong>Note:</strong> {hotel.note}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="samui-hotels">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-emerald-600 pb-3">
                Luxury Hotels Koh Samui
              </h2>

              <p className="text-gray-600 mb-6 italic">Organized by coast for sunset views, beach access, and seclusion</p>

              <div className="space-y-6">
                {samuiResorts.map((hotel, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3 relative h-64 md:h-auto">
                        <img
                          src={hotel.image}
                          alt={hotel.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full font-bold text-sm flex items-center">
                          <Star className="w-4 h-4 mr-1 fill-current" />
                          {hotel.rating}/10
                        </div>
                        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {hotel.coast}
                        </div>
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="text-2xl font-bold text-gray-900">{hotel.name}</h4>
                            <p className="text-lg text-emerald-600 font-semibold">{hotel.category}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-gray-900">{hotel.price}</p>
                          </div>
                        </div>

                        <div className="space-y-3 text-sm">
                          <div className="flex items-start">
                            <span className="font-semibold text-gray-900 w-24 flex-shrink-0">Why Here:</span>
                            <span className="text-gray-700">{hotel.whyHere}</span>
                          </div>
                          <div className="flex items-start">
                            <span className="font-semibold text-gray-900 w-24 flex-shrink-0">Best Room:</span>
                            <span className="text-gray-700">{hotel.bestRoom}</span>
                          </div>
                          <div className="flex items-start">
                            <span className="font-semibold text-gray-900 w-24 flex-shrink-0">Features:</span>
                            <span className="text-gray-700">{hotel.features.join(', ')}</span>
                          </div>
                          <div className="flex items-start bg-emerald-50 p-3 rounded-lg mt-3">
                            <span className="font-semibold text-gray-900 w-24 flex-shrink-0">Book If:</span>
                            <span className="text-gray-700">{hotel.bookIf}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-pink-50 rounded-lg p-6 mt-6">
                <h4 className="font-bold text-gray-900 mb-3">Koh Samui Hotels Comparison:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Best for wellness:</strong> Six Senses</li>
                  <li>• <strong>Best for romance:</strong> Conrad</li>
                  <li>• <strong>Best for families:</strong> Four Seasons</li>
                  <li>• <strong>Best views:</strong> Conrad (sunset)</li>
                  <li>• <strong>Best value:</strong> Conrad (usually cheapest of three)</li>
                </ul>
              </div>
            </section>

            <section id="chiang-mai-hotels">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-green-600 pb-3">
                Luxury Hotels Chiang Mai
              </h2>

              <div className="space-y-6">
                {chiangMaiHotels.map((hotel, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3 relative h-64 md:h-auto">
                        <img
                          src={hotel.image}
                          alt={hotel.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full font-bold text-sm flex items-center">
                          <Star className="w-4 h-4 mr-1 fill-current" />
                          {hotel.rating}/10
                        </div>
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="text-2xl font-bold text-gray-900">{hotel.name}</h4>
                            <p className="text-lg text-green-600 font-semibold">{hotel.category}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-gray-900">{hotel.price}</p>
                          </div>
                        </div>

                        <div className="space-y-3 text-sm">
                          <div className="flex items-start">
                            <span className="font-semibold text-gray-900 w-24 flex-shrink-0">Location:</span>
                            <span className="text-gray-700">{hotel.location}</span>
                          </div>
                          <div className="flex items-start">
                            <span className="font-semibold text-gray-900 w-24 flex-shrink-0">Why Here:</span>
                            <span className="text-gray-700">{hotel.whyHere}</span>
                          </div>
                          <div className="flex items-start">
                            <span className="font-semibold text-gray-900 w-24 flex-shrink-0">Best Room:</span>
                            <span className="text-gray-700">{hotel.bestRoom}</span>
                          </div>
                          <div className="flex items-start">
                            <span className="font-semibold text-gray-900 w-24 flex-shrink-0">Features:</span>
                            <span className="text-gray-700">{hotel.features.join(', ')}</span>
                          </div>
                          <div className="flex items-start bg-green-50 p-3 rounded-lg mt-3">
                            <span className="font-semibold text-gray-900 w-24 flex-shrink-0">Book If:</span>
                            <span className="text-gray-700">{hotel.bookIf}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 mt-6">
                <h4 className="font-bold text-gray-900 mb-3">Chiang Mai Hotels Comparison:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>More exclusive/expensive:</strong> Four Seasons</li>
                  <li>• <strong>More accessible:</strong> Dhara Dhevi (location and price)</li>
                  <li>• <strong>Best for culture:</strong> Tie (both excellent)</li>
                  <li>• <strong>Best spa:</strong> Dhara Dhevi (Dheva Spa award-winning)</li>
                  <li>• <strong>Best for families:</strong> Four Seasons (rice activities)</li>
                </ul>
              </div>
            </section>

            <section id="destination-selector">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-[#2B5D8C] pb-3">
                Quick Destination Selector
              </h2>

              <p className="text-lg text-gray-700 mb-8">
                Choose your destination based on what matters most to you:
              </p>

              <div className="grid gap-4">
                {destinationSelector.map((item, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-r from-${item.color}-50 to-${item.color}-100 rounded-lg p-6 border-l-4 border-${item.color}-600`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900 flex items-center">
                        <Heart className={`w-5 h-5 text-${item.color}-600 mr-2 flex-shrink-0`} />
                        {item.priority}
                      </h3>
                    </div>
                    <div className="ml-7">
                      <p className="text-sm text-gray-700 mb-1">
                        <strong>Go to:</strong> {item.destination}
                      </p>
                      <p className="text-sm text-gray-600">{item.hotels}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Award className="w-5 h-5 text-[#2B5D8C] mr-2" />
                Quick Navigation
              </h3>
              <nav className="space-y-2 text-sm">
                <a href="#bangkok-hotels" className="block text-gray-700 hover:text-[#2B5D8C] transition-colors">
                  → Bangkok Hotels
                </a>
                <a href="#phuket-hotels" className="block text-gray-700 hover:text-[#2B5D8C] transition-colors">
                  → Phuket Hotels
                </a>
                <a href="#samui-hotels" className="block text-gray-700 hover:text-[#2B5D8C] transition-colors">
                  → Koh Samui Hotels
                </a>
                <a href="#chiang-mai-hotels" className="block text-gray-700 hover:text-[#2B5D8C] transition-colors">
                  → Chiang Mai Hotels
                </a>
                <a href="#destination-selector" className="block text-gray-700 hover:text-[#2B5D8C] transition-colors">
                  → Destination Selector
                </a>
              </nav>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Sparkles className="w-5 h-5 text-[#2B5D8C] mr-2" />
                By Experience
              </h3>
              <div className="space-y-3 text-sm">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-3 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-1">Urban Luxury</p>
                  <p className="text-gray-600">Bangkok Hotels</p>
                </div>
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-3 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-1">Beach Resorts</p>
                  <p className="text-gray-600">Phuket & Samui</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-1">Cultural</p>
                  <p className="text-gray-600">Chiang Mai</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-1">Adventure</p>
                  <p className="text-gray-600">Krabi & Islands</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#2B5D8C] to-pink-700 text-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">Planning Tip</h3>
              <p className="text-sm text-white/90">
                Most itineraries combine 2-3 destinations: Start with Bangkok (2 nights), then beach resort (4-5 nights), optional Chiang Mai (2-3 nights) for culture.
              </p>
            </div>
          </aside>
        </div>

        <RelatedGuides
          links={[
            { title: 'Complete Luxury Hotels Guide', path: '/luxury-hotels-thailand' },
            { title: 'Where to Stay in Bangkok', path: '/where-to-stay-bangkok' },
            { title: 'Best Budget Hotels', path: '/best-budget-hotels' },
          ]}
        />

        <YouMayAlsoLike
          links={[
            { title: 'Phuket Destination Guide', path: '/phuket' },
            { title: 'Koh Samui Destination Guide', path: '/koh-samui' },
            { title: 'Chiang Mai Destination Guide', path: '/chiang-mai' },
          ]}
        />
      </div>
    </div>
  );
}
