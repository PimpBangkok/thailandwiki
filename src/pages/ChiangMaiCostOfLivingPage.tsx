import {
  Mountain,
  Home,
  Wifi,
  Coffee,
  DollarSign,
  MapPin,
  Users,
  ThumbsUp,
  ThumbsDown,
  Briefcase,
  Heart,
  Palmtree,
  Wind,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Zap,
  Phone,
  Utensils,
  Calculator,
  TrendingDown,
  Building,
  Car,
  Sparkles,
  TreePine,
  Church,
  Globe,
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { usePageMeta } from '../hooks/usePageMeta';
import RelatedGuides from '../components/RelatedGuides';
import { useState } from 'react';

interface Neighborhood {
  name: string;
  studio: string;
  oneBedroom: string;
  description: string;
  bestFor: string;
  icon: any;
  color: string;
  highlights: string[];
}

interface CoworkingSpace {
  name: string;
  price: string;
  features: string[];
  location: string;
}

export default function ChiangMaiCostOfLivingPage() {
  usePageMeta({
    title: 'Cost of Living in Chiang Mai 2024 - Digital Nomad Paradise Guide',
    description:
      "Thailand's cheapest major city. Complete guide to living in Chiang Mai for $700-1200/month. Perfect for digital nomads.",
  });

  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>('Nimman');

  const neighborhoods: Neighborhood[] = [
    {
      name: 'Nimman',
      studio: '$300-500',
      oneBedroom: '$500-800',
      description: 'Digital nomad hub with cafes and coworking spaces',
      bestFor: 'Nomads, young expats',
      icon: Wifi,
      color: 'blue',
      highlights: ['Coworking spaces', 'Trendy cafes', 'Vibrant nightlife', 'Shopping area'],
    },
    {
      name: 'Old City',
      studio: '$250-400',
      oneBedroom: '$400-700',
      description: 'Historic center near temples, walkable everywhere',
      bestFor: 'Culture lovers, retirees',
      icon: Church,
      color: 'orange',
      highlights: ['Walking distance', 'Near temples', 'Cultural immersion', 'Sunday market'],
    },
    {
      name: 'Santitham',
      studio: '$200-350',
      oneBedroom: '$350-600',
      description: 'Local vibe with authentic Thai atmosphere',
      bestFor: 'Budget travelers, long-term',
      icon: Home,
      color: 'green',
      highlights: ['Most affordable', 'Authentic experience', 'Local markets', 'Quiet neighborhood'],
    },
    {
      name: 'Hang Dong',
      studio: '$180-300',
      oneBedroom: '$300-500',
      description: 'Suburban area with nature and space',
      bestFor: 'Families, retirees',
      icon: TreePine,
      color: 'emerald',
      highlights: ['Very quiet', 'More space', 'Near nature', 'Need motorbike'],
    },
    {
      name: 'Riverside',
      studio: '$250-400',
      oneBedroom: '$450-700',
      description: 'Between Old City and Nimman, balanced location',
      bestFor: 'All types',
      icon: Palmtree,
      color: 'pink',
      highlights: ['Central location', 'River views', 'Good restaurants', 'Convenient access'],
    },
  ];

  const coworkingSpaces: CoworkingSpace[] = [
    {
      name: 'CAMP',
      price: '$80-100/month',
      features: ['Multiple locations', 'Modern design', '24/7 access', 'Meeting rooms'],
      location: 'Nimman & Old City',
    },
    {
      name: 'Punspace',
      price: '$50-80/month',
      features: ['Most popular', 'Great community', 'Reliable wifi', 'Events'],
      location: 'Nimman & Tha Phae Gate',
    },
    {
      name: 'Alt_Space',
      price: '$60-90/month',
      features: ['Quiet atmosphere', 'Good coffee', 'Fast internet', 'Comfortable seating'],
      location: 'Nimman',
    },
    {
      name: 'Mana',
      price: '$70-100/month',
      features: ['Premium space', 'Private booths', 'Excellent facilities', 'Cafe included'],
      location: 'Nimman',
    },
  ];

  const whyChiangMai = [
    {
      title: 'Cheapest Major City',
      description: '30-40% cheaper than Bangkok',
      icon: TrendingDown,
      color: 'green',
    },
    {
      title: 'Digital Nomad Hub',
      description: 'Large expat and nomad community',
      icon: Globe,
      color: 'blue',
    },
    {
      title: 'Excellent Coworking',
      description: 'Best coworking spaces in Thailand',
      icon: Briefcase,
      color: 'purple',
    },
    {
      title: 'Fast Internet',
      description: 'Fiber available, 100-500 Mbps',
      icon: Wifi,
      color: 'cyan',
    },
    {
      title: 'Nature & Mountains',
      description: 'Temples, mountains, nature nearby',
      icon: Mountain,
      color: 'emerald',
    },
    {
      title: 'Cooler Weather',
      description: 'Pleasant Nov-Feb, less humid',
      icon: Wind,
      color: 'sky',
    },
  ];

  const pros = [
    'Most affordable major city in Thailand',
    'Strong digital nomad and expat community',
    'Excellent coworking spaces and cafes',
    'Fast, reliable internet (fiber widely available)',
    'Beautiful nature, mountains, and temples',
    'Cooler, more comfortable weather Nov-Feb',
    'More space for your money',
    'Friendly, laid-back atmosphere',
    'Great food scene with local specialties',
    'Easy to explore northern Thailand',
  ];

  const cons = [
    'Burning season (March-April) with poor air quality',
    'Fewer job opportunities than Bangkok',
    'Need motorbike for most areas',
    'Smaller city with less nightlife variety',
    'Farther from beaches and islands',
    'Hot season (April-May) can be intense',
    'Less international flight connections',
    'Some areas lack sidewalks',
  ];

  const [budgetItems, setBudgetItems] = useState({
    rent: 450,
    food: 275,
    transportation: 75,
    utilities: 55,
    internet: 25,
    coworking: 75,
    entertainment: 150,
  });

  const calculateTotal = () => {
    return Object.values(budgetItems).reduce((sum, val) => sum + val, 0);
  };

  const selectedNeighborhoodData = neighborhoods.find((n) => n.name === selectedNeighborhood);

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Destinations', path: '/destinations' },
          { label: 'Chiang Mai', path: '/destinations/chiang-mai' },
          { label: 'Cost of Living', path: '/chiang-mai-cost-of-living' },
        ]}
      />

      <div className="bg-gradient-to-b from-emerald-900 to-emerald-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Mountain className="w-8 h-8 text-emerald-300" />
              <span className="text-emerald-300 font-semibold tracking-wider uppercase text-sm">
                Chiang Mai Living
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 uppercase tracking-[3px]">
              Cost of Living
              <br />
              <span className="text-emerald-300">in Chiang Mai</span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-emerald-100 leading-relaxed mb-4">
                Thailand's cheapest major city for expats. Live comfortably for $700-1200 per month.
              </p>
              <p className="text-lg text-emerald-200">
                Popular with digital nomads seeking affordability and community.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Why Chiang Mai?
              </h2>
              <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The perfect blend of affordability, community, and quality of life
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {whyChiangMai.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`p-4 bg-${item.color}-100 rounded-xl inline-block mb-4`}>
                      <Icon className={`w-8 h-8 text-${item.color}-600`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border-2 border-yellow-200">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-10 h-10 text-yellow-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Important: Burning Season</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    <strong>March-April</strong> is burning season when farmers burn fields, causing significant air
                    pollution. AQI can reach unhealthy levels. Many expats leave during this period or stay indoors
                    with air purifiers. Consider this when planning your stay.
                  </p>
                  <p className="text-gray-600">
                    Best months: <strong>November-February</strong> (cool season with excellent air quality)
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Chiang Mai Neighborhoods
              </h2>
              <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find your perfect neighborhood in Chiang Mai
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{neighborhood.name}</h3>
                        {isSelected && (
                          <div className="flex items-center gap-1 text-sm text-emerald-600 font-semibold">
                            <CheckCircle className="w-4 h-4" />
                            Selected
                          </div>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 min-h-[48px]">{neighborhood.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                        <span className="text-sm text-gray-600">Studio</span>
                        <span className="font-bold text-gray-900">{neighborhood.studio}</span>
                      </div>
                      <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                        <span className="text-sm text-gray-600">1 Bedroom</span>
                        <span className="font-bold text-gray-900">{neighborhood.oneBedroom}</span>
                      </div>
                    </div>

                    <div className={`bg-${neighborhood.color}-50 rounded-lg p-3 mb-4`}>
                      <p className={`text-sm font-semibold text-${neighborhood.color}-900`}>
                        Best for: {neighborhood.bestFor}
                      </p>
                    </div>

                    <div className="space-y-2">
                      {neighborhood.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {selectedNeighborhoodData && (
              <div className="bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-2xl p-8 text-white">
                <div className="flex items-start gap-4">
                  <MapPin className="w-10 h-10 text-emerald-300 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-4">Selected: {selectedNeighborhoodData.name}</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-emerald-100 text-lg mb-4">{selectedNeighborhoodData.description}</p>
                        <div className="bg-white/10 rounded-lg p-4">
                          <p className="text-emerald-200 text-sm mb-2">Perfect for</p>
                          <p className="text-xl font-bold">{selectedNeighborhoodData.bestFor}</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-4">
                          <p className="text-emerald-200 text-sm mb-1">Studio Apartment</p>
                          <p className="text-2xl font-bold">{selectedNeighborhoodData.studio}</p>
                          <p className="text-sm text-emerald-200">per month</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4">
                          <p className="text-emerald-200 text-sm mb-1">One Bedroom</p>
                          <p className="text-2xl font-bold">{selectedNeighborhoodData.oneBedroom}</p>
                          <p className="text-sm text-emerald-200">per month</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Housing Costs
              </h2>
              <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Much cheaper than Bangkok with more space for your money
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Home className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Studio</h3>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-600 mb-2">$200-500</p>
                  <p className="text-gray-600">per month</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-emerald-500 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-emerald-100 rounded-xl">
                    <Home className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">One Bedroom</h3>
                    <span className="text-sm text-emerald-600 font-semibold">Most Popular</span>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-emerald-600 mb-2">$350-800</p>
                  <p className="text-gray-600">per month</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <Home className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Two Bedroom</h3>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-purple-600 mb-2">$500-1200</p>
                  <p className="text-gray-600">per month</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-200">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">What's Usually Included</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Most places include basic furniture</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Water usually included in rent</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Electricity paid separately ($20-50/month)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Internet: $20-30/month (fiber available)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
                <div className="flex items-start gap-3">
                  <TrendingDown className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Chiang Mai vs Bangkok</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>30-40% cheaper</strong> than Bangkok for similar quality
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>More space:</strong> Same budget gets you 50% more space
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Lower utilities:</strong> Cooler weather = less AC needed
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Better value:</strong> Modern condos at Bangkok's budget prices
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Digital Nomad Scene
              </h2>
              <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                One of Southeast Asia's top digital nomad destinations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {coworkingSpaces.map((space, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase className="w-5 h-5 text-purple-600" />
                    <h3 className="text-lg font-bold text-gray-900">{space.name}</h3>
                  </div>
                  <div className="text-2xl font-bold text-purple-600 mb-3">{space.price}</div>
                  <p className="text-sm text-gray-600 mb-4">{space.location}</p>
                  <div className="space-y-2">
                    {space.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-6 text-white">
                <Wifi className="w-10 h-10 text-blue-300 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Internet Speed</h3>
                <p className="text-3xl font-bold text-blue-300 mb-2">100-500 Mbps</p>
                <p className="text-blue-100">Fiber widely available. Very reliable connections throughout the city.</p>
              </div>

              <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-2xl p-6 text-white">
                <Coffee className="w-10 h-10 text-orange-300 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Cafes</h3>
                <p className="text-3xl font-bold text-orange-300 mb-2">Hundreds</p>
                <p className="text-orange-100">Work-friendly cafes everywhere. $2-4 per drink. Good wifi standard.</p>
              </div>

              <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-2xl p-6 text-white">
                <Users className="w-10 h-10 text-purple-300 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Community</h3>
                <p className="text-3xl font-bold text-purple-300 mb-2">Active</p>
                <p className="text-purple-100">
                  Regular meetups, events, and strong nomad community year-round.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 border-2 border-emerald-200">
              <div className="flex items-start gap-4">
                <Sparkles className="w-10 h-10 text-emerald-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Nomads Love Chiang Mai</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>Best value for money in Southeast Asia</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>Strong, established nomad community</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>Multiple quality coworking spaces</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>Perfect infrastructure for remote work</span>
                      </li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>Great work-life balance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>Easy to meet other remote workers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>Access to nature and culture</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>Comfortable, walkable lifestyle</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Monthly Budget Calculator
              </h2>
              <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Customize your Chiang Mai budget
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-xl">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Home className="w-5 h-5 text-blue-600" />
                        <label className="font-semibold text-gray-900">Rent</label>
                      </div>
                      <span className="text-2xl font-bold text-blue-600">${budgetItems.rent}</span>
                    </div>
                    <input
                      type="range"
                      min="180"
                      max="1200"
                      step="30"
                      value={budgetItems.rent}
                      onChange={(e) => setBudgetItems({ ...budgetItems, rent: parseInt(e.target.value) })}
                      className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>$180</span>
                      <span>$1200</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Utensils className="w-5 h-5 text-orange-600" />
                        <label className="font-semibold text-gray-900">Food</label>
                      </div>
                      <span className="text-2xl font-bold text-orange-600">${budgetItems.food}</span>
                    </div>
                    <input
                      type="range"
                      min="150"
                      max="600"
                      step="25"
                      value={budgetItems.food}
                      onChange={(e) => setBudgetItems({ ...budgetItems, food: parseInt(e.target.value) })}
                      className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>$150</span>
                      <span>$600</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Car className="w-5 h-5 text-green-600" />
                        <label className="font-semibold text-gray-900">Transportation</label>
                      </div>
                      <span className="text-2xl font-bold text-green-600">${budgetItems.transportation}</span>
                    </div>
                    <input
                      type="range"
                      min="30"
                      max="200"
                      step="10"
                      value={budgetItems.transportation}
                      onChange={(e) => setBudgetItems({ ...budgetItems, transportation: parseInt(e.target.value) })}
                      className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>$30</span>
                      <span>$200</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-yellow-600" />
                        <label className="font-semibold text-gray-900">Utilities</label>
                      </div>
                      <span className="text-2xl font-bold text-yellow-600">${budgetItems.utilities}</span>
                    </div>
                    <input
                      type="range"
                      min="30"
                      max="150"
                      step="10"
                      value={budgetItems.utilities}
                      onChange={(e) => setBudgetItems({ ...budgetItems, utilities: parseInt(e.target.value) })}
                      className="w-full h-2 bg-yellow-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>$30</span>
                      <span>$150</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Wifi className="w-5 h-5 text-purple-600" />
                        <label className="font-semibold text-gray-900">Internet</label>
                      </div>
                      <span className="text-2xl font-bold text-purple-600">${budgetItems.internet}</span>
                    </div>
                    <input
                      type="range"
                      min="15"
                      max="40"
                      step="5"
                      value={budgetItems.internet}
                      onChange={(e) => setBudgetItems({ ...budgetItems, internet: parseInt(e.target.value) })}
                      className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>$15</span>
                      <span>$40</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-indigo-600" />
                        <label className="font-semibold text-gray-900">Coworking</label>
                      </div>
                      <span className="text-2xl font-bold text-indigo-600">${budgetItems.coworking}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="150"
                      step="10"
                      value={budgetItems.coworking}
                      onChange={(e) => setBudgetItems({ ...budgetItems, coworking: parseInt(e.target.value) })}
                      className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>$0</span>
                      <span>$150</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Coffee className="w-5 h-5 text-pink-600" />
                        <label className="font-semibold text-gray-900">Entertainment</label>
                      </div>
                      <span className="text-2xl font-bold text-pink-600">${budgetItems.entertainment}</span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="500"
                      step="25"
                      value={budgetItems.entertainment}
                      onChange={(e) => setBudgetItems({ ...budgetItems, entertainment: parseInt(e.target.value) })}
                      className="w-full h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>$50</span>
                      <span>$500</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-2xl p-8 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Calculator className="w-12 h-12 text-emerald-300" />
                    <div>
                      <p className="text-emerald-200 text-sm mb-1">Your Total Monthly Budget</p>
                      <p className="text-5xl font-bold">${calculateTotal()}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-emerald-200 text-sm mb-2">Yearly Cost</p>
                    <p className="text-3xl font-bold">${(calculateTotal() * 12).toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-4 gap-4">
              <div className="bg-green-50 rounded-xl p-4 border-2 border-green-200">
                <p className="text-gray-600 text-sm mb-1">Minimal Budget</p>
                <p className="text-2xl font-bold text-green-600">$600-800</p>
                <p className="text-xs text-gray-600">Local lifestyle, basic housing</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
                <p className="text-gray-600 text-sm mb-1">Comfortable</p>
                <p className="text-2xl font-bold text-blue-600">$900-1200</p>
                <p className="text-xs text-gray-600">Good location, coworking, balanced diet</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border-2 border-purple-200">
                <p className="text-gray-600 text-sm mb-1">Premium</p>
                <p className="text-2xl font-bold text-purple-600">$1400-1800</p>
                <p className="text-xs text-gray-600">Modern condo, Western food, activities</p>
              </div>
              <div className="bg-orange-50 rounded-xl p-4 border-2 border-orange-200">
                <p className="text-gray-600 text-sm mb-1">Luxury</p>
                <p className="text-2xl font-bold text-orange-600">$2000+</p>
                <p className="text-xs text-gray-600">High-end living, frequent dining out</p>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Pros & Cons
              </h2>
              <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                What you need to know before moving to Chiang Mai
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <ThumbsUp className="w-8 h-8 text-green-300" />
                  <h3 className="text-3xl font-bold">Pros</h3>
                </div>
                <ul className="space-y-3">
                  {pros.map((pro, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span className="text-green-50">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <ThumbsDown className="w-8 h-8 text-orange-300" />
                  <h3 className="text-3xl font-bold">Cons</h3>
                </div>
                <ul className="space-y-3">
                  {cons.map((con, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-300 flex-shrink-0 mt-0.5" />
                      <span className="text-orange-50">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <div className="bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex items-start gap-4">
              <Heart className="w-10 h-10 text-emerald-300 flex-shrink-0" />
              <div>
                <h3 className="text-3xl font-bold mb-4">The Bottom Line</h3>
                <p className="text-xl text-emerald-100 leading-relaxed mb-6">
                  Chiang Mai offers incredible value for digital nomads and expats seeking a high quality of life at a
                  low cost. With excellent coworking spaces, fast internet, a strong community, and beautiful
                  surroundings, it's easy to see why it's one of Southeast Asia's most popular destinations for remote
                  workers.
                </p>
                <p className="text-lg text-emerald-200 leading-relaxed">
                  The burning season (March-April) is the main downside, but the rest of the year offers comfortable
                  weather and clean air. For those prioritizing affordability, community, and lifestyle balance, Chiang
                  Mai is hard to beat.
                </p>
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
                title: 'Chiang Mai Guide',
                description: 'Complete destination guide',
                link: '/destinations/chiang-mai',
                image:
                  'https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Bangkok Cost of Living',
                description: 'Compare with Bangkok costs',
                link: '/bangkok-cost-of-living',
                image:
                  'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Budget Guide',
                description: 'Thailand-wide budget planning',
                link: '/budget-guide',
                image:
                  'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
