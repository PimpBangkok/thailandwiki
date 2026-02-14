import {
  Building,
  Home,
  Train,
  Utensils,
  DollarSign,
  MapPin,
  TrendingUp,
  Users,
  Coffee,
  Briefcase,
  Heart,
  ShoppingBag,
  Car,
  Zap,
  Wifi,
  Phone,
  CheckCircle,
  ArrowRight,
  Info,
  Calculator,
  GraduationCap,
  Palmtree,
  Sparkles,
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

interface HousingTier {
  name: string;
  studio: string;
  oneBedroom: string;
  features: string[];
}

interface TransportOption {
  name: string;
  cost: string;
  details: string;
  icon: any;
}

interface FoodOption {
  category: string;
  cost: string;
  description: string;
}

export default function BangkokCostOfLivingPage() {
  usePageMeta({
    title: 'Cost of Living in Bangkok 2024 - Neighborhood Guide & Monthly Budgets',
    description:
      'Complete guide to living costs in Bangkok. Neighborhood comparison, housing costs, transportation, and realistic monthly budgets.',
  });

  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>('Sukhumvit');

  const neighborhoods: Neighborhood[] = [
    {
      name: 'Sukhumvit',
      studio: '$500-800',
      oneBedroom: '$800-1500',
      description: 'Expat hub with excellent infrastructure and nightlife',
      bestFor: 'New arrivals, professionals',
      icon: Building,
      color: 'blue',
      highlights: ['Close to BTS Skytrain', 'International restaurants', 'Vibrant nightlife', 'Shopping malls'],
    },
    {
      name: 'Silom',
      studio: '$450-700',
      oneBedroom: '$700-1200',
      description: 'Business district near Lumpini Park',
      bestFor: 'Finance professionals',
      icon: Briefcase,
      color: 'green',
      highlights: ['Central business district', 'Near Lumpini Park', 'BTS and MRT access', 'Banking hub'],
    },
    {
      name: 'Ari',
      studio: '$350-550',
      oneBedroom: '$600-1000',
      description: 'Hipster neighborhood with cafes and local vibe',
      bestFor: 'Digital nomads, creatives',
      icon: Coffee,
      color: 'orange',
      highlights: ['Trendy cafes', 'Local atmosphere', 'BTS Ari station', 'Art galleries'],
    },
    {
      name: 'Thonglor',
      studio: '$600-1000',
      oneBedroom: '$1000-2000',
      description: 'Upscale area with trendy bars and restaurants',
      bestFor: 'Higher earners',
      icon: Sparkles,
      color: 'purple',
      highlights: ['Luxury condos', 'High-end dining', 'Trendy bars', 'Japanese restaurants'],
    },
    {
      name: 'Ramkhamhaeng',
      studio: '$200-350',
      oneBedroom: '$350-600',
      description: 'Budget-friendly university area',
      bestFor: 'Tight budget, students',
      icon: GraduationCap,
      color: 'gray',
      highlights: ['Most affordable', 'University area', 'Local markets', 'Authentic Thai experience'],
    },
  ];

  const housingTiers: HousingTier[] = [
    {
      name: 'Budget',
      studio: '$250-400',
      oneBedroom: '$400-700',
      features: ['Older building', 'Basic amenities', 'No gym or pool', 'Further from BTS', 'Local neighborhood'],
    },
    {
      name: 'Mid-Range',
      studio: '$400-600',
      oneBedroom: '$700-1200',
      features: ['Modern building', 'Gym and pool', 'Near BTS/MRT', 'Security', 'Furnished or semi-furnished'],
    },
    {
      name: 'Premium',
      studio: '$600-1000',
      oneBedroom: '$1200-2000',
      features: ['New construction', 'Central location', 'Full amenities', 'Concierge service', 'High-quality finishes'],
    },
  ];

  const transportation: TransportOption[] = [
    {
      name: 'BTS Skytrain',
      cost: '$1-2 per trip',
      details: 'Monthly pass: $50',
      icon: Train,
    },
    {
      name: 'MRT Subway',
      cost: '$0.50-1.50 per trip',
      details: 'Connects to BTS',
      icon: Train,
    },
    {
      name: 'Bus',
      cost: '$0.30-1 per trip',
      details: 'Most affordable option',
      icon: Car,
    },
    {
      name: 'Taxi',
      cost: '$3-10 per trip',
      details: 'Metered, air-conditioned',
      icon: Car,
    },
    {
      name: 'Grab (Ride-hailing)',
      cost: 'Similar to taxi',
      details: 'Cashless, convenient',
      icon: Car,
    },
    {
      name: 'Motorbike Rental',
      cost: '$80-120/month',
      details: 'Plus fuel at $1/liter',
      icon: Car,
    },
  ];

  const foodOptions: FoodOption[] = [
    {
      category: 'Street Food',
      cost: '$1-2',
      description: 'Pad Thai, fried rice, noodle soup',
    },
    {
      category: 'Local Restaurant',
      cost: '$2-4',
      description: 'Sit-down meal with drinks',
    },
    {
      category: 'Food Court',
      cost: '$2-3',
      description: 'Mall food courts, variety',
    },
    {
      category: 'Mid-range Restaurant',
      cost: '$8-15',
      description: 'Thai or international cuisine',
    },
    {
      category: 'Western Restaurant',
      cost: '$15-30',
      description: 'Pizza, burgers, pasta',
    },
    {
      category: 'Groceries (monthly)',
      cost: '$150-300',
      description: 'Mix of local and imported',
    },
    {
      category: 'Local Beer',
      cost: '$2-3',
      description: 'Chang, Singha, Leo',
    },
    {
      category: 'Imported Beer',
      cost: '$4-6',
      description: 'Western brands',
    },
  ];

  const [budgetItems, setBudgetItems] = useState({
    rent: 500,
    food: 300,
    transportation: 50,
    utilities: 60,
    internet: 25,
    phone: 10,
    gym: 40,
    entertainment: 200,
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
          { label: 'Bangkok', path: '/destinations/bangkok' },
          { label: 'Cost of Living', path: '/bangkok-cost-of-living' },
        ]}
      />

      <div className="bg-gradient-to-b from-blue-900 to-blue-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Building className="w-8 h-8 text-blue-300" />
              <span className="text-blue-300 font-semibold tracking-wider uppercase text-sm">Bangkok Living</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 uppercase tracking-[3px]">
              Cost of Living
              <br />
              <span className="text-blue-300">in Bangkok</span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Bangkok offers the best job opportunities and infrastructure. Live comfortably for $1000-2000 per month.
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
                Bangkok Neighborhoods
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the right neighborhood for your lifestyle and budget
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
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
                          <div className="flex items-center gap-1 text-sm text-blue-600 font-semibold">
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
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
                <div className="flex items-start gap-4">
                  <MapPin className="w-10 h-10 text-blue-300 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-4">Selected: {selectedNeighborhoodData.name}</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-blue-100 text-lg mb-4">{selectedNeighborhoodData.description}</p>
                        <div className="bg-white/10 rounded-lg p-4">
                          <p className="text-blue-200 text-sm mb-2">Perfect for</p>
                          <p className="text-xl font-bold">{selectedNeighborhoodData.bestFor}</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-4">
                          <p className="text-blue-200 text-sm mb-1">Studio Apartment</p>
                          <p className="text-2xl font-bold">{selectedNeighborhoodData.studio}</p>
                          <p className="text-sm text-blue-200">per month</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4">
                          <p className="text-blue-200 text-sm mb-1">One Bedroom</p>
                          <p className="text-2xl font-bold">{selectedNeighborhoodData.oneBedroom}</p>
                          <p className="text-sm text-blue-200">per month</p>
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
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Accommodation prices by quality tier
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {housingTiers.map((tier, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl">
                      <Home className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-1">Studio</p>
                      <p className="text-2xl font-bold text-blue-600">{tier.studio}</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-1">One Bedroom</p>
                      <p className="text-2xl font-bold text-blue-600">{tier.oneBedroom}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-yellow-50 rounded-2xl p-6 border-2 border-yellow-200">
              <div className="flex items-start gap-3">
                <Info className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">What's Usually Included</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Furniture:</strong> Most apartments are unfurnished or have basic furniture only
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Utilities:</strong> Some include water, but electricity usually paid separately
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Internet:</strong> Rarely included, typically $20-30/month extra
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Deposit:</strong> 2 months rent (refundable) plus optional 1 month agent fee
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Transportation
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Getting around Bangkok efficiently and affordably
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {transportation.map((option, index) => {
                const Icon = option.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-blue-100 rounded-xl">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{option.name}</h3>
                        <p className="text-sm text-gray-600">{option.details}</p>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">{option.cost}</div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border-2 border-green-200">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-10 h-10 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Transportation Tips</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          <strong>BTS/MRT pass:</strong> Best value if commuting daily
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          <strong>Grab:</strong> More convenient than taxis, especially during rush hour
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          <strong>Motorbike:</strong> Fast but risky in heavy traffic
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          <strong>Rush hours:</strong> 7-9 AM and 5-8 PM are heavily congested
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          <strong>Taxi tip:</strong> Insist on using the meter
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          <strong>Walk:</strong> Many areas are walkable during cooler months
                        </span>
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
                Food & Dining
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Eating options for every budget in Bangkok
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {foodOptions.map((option, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Utensils className="w-5 h-5 text-orange-600" />
                    <h3 className="text-lg font-bold text-gray-900">{option.category}</h3>
                  </div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">{option.cost}</div>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-2xl p-8 text-white">
              <div className="flex items-start gap-4">
                <Utensils className="w-10 h-10 text-orange-300 flex-shrink-0" />
                <div>
                  <h3 className="text-3xl font-bold mb-4">Monthly Food Budget Examples</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-orange-200 text-sm mb-2">Budget Eater</p>
                      <p className="text-3xl font-bold mb-2">$150-200</p>
                      <p className="text-sm text-orange-100">Mostly street food and local restaurants</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-orange-200 text-sm mb-2">Balanced Diet</p>
                      <p className="text-3xl font-bold mb-2">$300-400</p>
                      <p className="text-sm text-orange-100">Mix of local food and occasional Western meals</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-orange-200 text-sm mb-2">Western Lifestyle</p>
                      <p className="text-3xl font-bold mb-2">$600-1000</p>
                      <p className="text-sm text-orange-100">Regular Western dining and imported groceries</p>
                    </div>
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
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Customize your budget to see your total monthly costs
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-xl">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Home className="w-5 h-5 text-blue-600" />
                        <label className="font-semibold text-gray-900">Rent (Studio/1BR)</label>
                      </div>
                      <span className="text-2xl font-bold text-blue-600">${budgetItems.rent}</span>
                    </div>
                    <input
                      type="range"
                      min="200"
                      max="2000"
                      step="50"
                      value={budgetItems.rent}
                      onChange={(e) => setBudgetItems({ ...budgetItems, rent: parseInt(e.target.value) })}
                      className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>$200</span>
                      <span>$2000</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Utensils className="w-5 h-5 text-orange-600" />
                        <label className="font-semibold text-gray-900">Food & Dining</label>
                      </div>
                      <span className="text-2xl font-bold text-orange-600">${budgetItems.food}</span>
                    </div>
                    <input
                      type="range"
                      min="150"
                      max="1000"
                      step="50"
                      value={budgetItems.food}
                      onChange={(e) => setBudgetItems({ ...budgetItems, food: parseInt(e.target.value) })}
                      className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>$150</span>
                      <span>$1000</span>
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
                      max="300"
                      step="10"
                      value={budgetItems.transportation}
                      onChange={(e) => setBudgetItems({ ...budgetItems, transportation: parseInt(e.target.value) })}
                      className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>$30</span>
                      <span>$300</span>
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
                      min="40"
                      max="200"
                      step="10"
                      value={budgetItems.utilities}
                      onChange={(e) => setBudgetItems({ ...budgetItems, utilities: parseInt(e.target.value) })}
                      className="w-full h-2 bg-yellow-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>$40</span>
                      <span>$200</span>
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
                      max="50"
                      step="5"
                      value={budgetItems.internet}
                      onChange={(e) => setBudgetItems({ ...budgetItems, internet: parseInt(e.target.value) })}
                      className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>$15</span>
                      <span>$50</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Phone className="w-5 h-5 text-pink-600" />
                        <label className="font-semibold text-gray-900">Phone</label>
                      </div>
                      <span className="text-2xl font-bold text-pink-600">${budgetItems.phone}</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="30"
                      step="5"
                      value={budgetItems.phone}
                      onChange={(e) => setBudgetItems({ ...budgetItems, phone: parseInt(e.target.value) })}
                      className="w-full h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>$5</span>
                      <span>$30</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Heart className="w-5 h-5 text-red-600" />
                        <label className="font-semibold text-gray-900">Gym</label>
                      </div>
                      <span className="text-2xl font-bold text-red-600">${budgetItems.gym}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="10"
                      value={budgetItems.gym}
                      onChange={(e) => setBudgetItems({ ...budgetItems, gym: parseInt(e.target.value) })}
                      className="w-full h-2 bg-red-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>$0</span>
                      <span>$100</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Coffee className="w-5 h-5 text-indigo-600" />
                        <label className="font-semibold text-gray-900">Entertainment</label>
                      </div>
                      <span className="text-2xl font-bold text-indigo-600">${budgetItems.entertainment}</span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="1000"
                      step="50"
                      value={budgetItems.entertainment}
                      onChange={(e) => setBudgetItems({ ...budgetItems, entertainment: parseInt(e.target.value) })}
                      className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>$50</span>
                      <span>$1000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Calculator className="w-12 h-12 text-blue-300" />
                    <div>
                      <p className="text-blue-200 text-sm mb-1">Your Total Monthly Budget</p>
                      <p className="text-5xl font-bold">${calculateTotal()}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-blue-200 text-sm mb-2">Yearly Cost</p>
                    <p className="text-3xl font-bold">${(calculateTotal() * 12).toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-green-50 rounded-2xl p-6 border-2 border-green-200">
              <div className="flex items-start gap-3">
                <Info className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Typical Budget Example</h4>
                  <p className="text-gray-700 mb-4">
                    A comfortable lifestyle in Bangkok typically costs $1000-1500/month, including mid-range
                    accommodation, balanced diet (mix of local and Western food), BTS transportation, and regular
                    entertainment.
                  </p>
                  <div className="grid md:grid-cols-4 gap-4 text-sm">
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-gray-600 mb-1">Budget</p>
                      <p className="font-bold text-green-600">$800-1000</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-gray-600 mb-1">Comfortable</p>
                      <p className="font-bold text-green-600">$1200-1500</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-gray-600 mb-1">Premium</p>
                      <p className="font-bold text-green-600">$1800-2500</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-gray-600 mb-1">Luxury</p>
                      <p className="font-bold text-green-600">$3000+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex items-start gap-4">
              <DollarSign className="w-10 h-10 text-blue-300 flex-shrink-0" />
              <div>
                <h3 className="text-3xl font-bold mb-4">Why Bangkok is Worth the Cost</h3>
                <div className="grid md:grid-cols-2 gap-6 text-blue-100 text-lg leading-relaxed">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-300 flex-shrink-0 mt-1" />
                      <span>Best infrastructure and public transportation in Thailand</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-300 flex-shrink-0 mt-1" />
                      <span>Most job opportunities for expats and remote workers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-300 flex-shrink-0 mt-1" />
                      <span>World-class healthcare facilities and international hospitals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-300 flex-shrink-0 mt-1" />
                      <span>Incredible variety of international cuisine and restaurants</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-300 flex-shrink-0 mt-1" />
                      <span>Large expat community and networking opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-300 flex-shrink-0 mt-1" />
                      <span>Modern shopping malls, coworking spaces, and amenities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-300 flex-shrink-0 mt-1" />
                      <span>Vibrant nightlife and entertainment scene</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-300 flex-shrink-0 mt-1" />
                      <span>Perfect base for exploring Southeast Asia</span>
                    </li>
                  </ul>
                </div>
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
                title: 'Bangkok Guide',
                description: 'Complete Bangkok destination guide',
                link: '/destinations/bangkok',
                image:
                  'https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Thailand Cost of Living',
                description: 'Compare costs across Thailand',
                link: '/cost-of-living',
                image:
                  'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Accommodation',
                description: 'Finding places to stay',
                link: '/accommodation',
                image:
                  'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
