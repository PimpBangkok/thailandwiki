import {
  Wifi,
  DollarSign,
  Palmtree,
  Plane,
  Building,
  Coffee,
  Heart,
  MapPin,
  CreditCard,
  Banknote,
  FileText,
  TrendingDown,
  CheckCircle,
  AlertTriangle,
  Users,
  Briefcase,
  Home,
  Phone,
  Globe,
  Shield,
  Calculator,
  ArrowRight,
  Zap,
  Mountain,
  Waves,
  Calendar,
  Clock,
  Award,
  Sparkles,
  Network,
  Laptop,
  Languages,
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { usePageMeta } from '../hooks/usePageMeta';
import RelatedGuides from '../components/RelatedGuides';
import { useState } from 'react';

interface VisaOption {
  name: string;
  duration: string;
  cost: string;
  requirements: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
  icon: any;
  color: string;
}

interface City {
  name: string;
  monthlyBudget: string;
  internet: string;
  coworking: string;
  community: string;
  lifestyle: string;
  icon: any;
  color: string;
  pros: string[];
  cons: string[];
}

export default function DigitalNomadThailandPage() {
  usePageMeta({
    title: 'Digital Nomad Guide to Thailand 2024 - Visas, Costs & Best Cities',
    description:
      'Complete guide for digital nomads in Thailand. Fast internet, low cost, visa options up to 5 years. Find your perfect base.',
  });

  const [selectedVisa, setSelectedVisa] = useState<string>('DTV');
  const [selectedCity, setSelectedCity] = useState<string>('Chiang Mai');

  const visaOptions: VisaOption[] = [
    {
      name: 'Tourist Visa',
      duration: '60 days (extendable to 90)',
      cost: '$40-50',
      requirements: ['Valid passport', 'Proof of onward travel', 'Sufficient funds'],
      pros: ['Easy to get', 'Quick process', 'Multiple entries available', 'Flexible'],
      cons: ['Visa runs needed', 'Limited duration', 'Uncertain long-term', 'Border hassles'],
      bestFor: 'Testing Thailand, short stays, frequent travelers',
      icon: Plane,
      color: 'blue',
    },
    {
      name: 'ED Visa',
      duration: '1 year (renewable)',
      cost: '$1000-1500/year',
      requirements: ['Enroll in Thai language school', 'Weekly classes (4-8 hours)', 'School documentation'],
      pros: ['1 year stay', 'Can open bank account', 'Multiple entries', 'Learn Thai'],
      cons: ['Must attend classes', 'School dependent', 'Inspection visits', 'Ongoing cost'],
      bestFor: 'Learning Thai, 1-year stays, bank account needed',
      icon: Languages,
      color: 'orange',
    },
    {
      name: 'DTV',
      duration: '5 years, multiple entry',
      cost: '$300 one-time',
      requirements: [
        'Remote work contract',
        'Bank statement ($15k+)',
        'Employment letter',
        'Digital nomad or freelancer',
      ],
      pros: [
        'Best value',
        '5 years validity',
        '180 days per entry',
        'Multiple entries',
        'One-time fee',
        'Bank account possible',
      ],
      cons: ['New visa (2024)', 'Approval process', 'Must leave every 180 days', 'Bank statement required'],
      bestFor: 'Remote workers, digital nomads, long-term stays',
      icon: Laptop,
      color: 'green',
    },
    {
      name: 'Elite Visa',
      duration: '5-20 years',
      cost: '$15,000-60,000',
      requirements: ['Clean criminal record', 'Valid passport', 'Payment'],
      pros: [
        'No requirements',
        'Longest duration',
        'VIP services',
        'Easy bank account',
        'Airport fast track',
        'Concierge service',
      ],
      cons: ['Very expensive', 'Upfront payment', 'No refund', 'Overkill for most'],
      bestFor: 'Wealthy nomads, retirement age, long-term certainty',
      icon: Award,
      color: 'purple',
    },
  ];

  const cities: City[] = [
    {
      name: 'Bangkok',
      monthlyBudget: '$1200-2000',
      internet: 'Excellent (500-1000 Mbps)',
      coworking: '$100-200/month',
      community: 'Large and diverse',
      lifestyle: 'Urban, busy, entertainment hub',
      icon: Building,
      color: 'blue',
      pros: [
        'Best infrastructure',
        'Most job opportunities',
        'Excellent healthcare',
        'International flights',
        'Best coworking spaces',
        'Diverse expat community',
      ],
      cons: ['Most expensive', 'Polluted', 'Very busy', 'Traffic congestion', 'Hot and humid', 'Less personal'],
    },
    {
      name: 'Chiang Mai',
      monthlyBudget: '$800-1200',
      internet: 'Excellent (100-500 Mbps)',
      coworking: '$50-100/month',
      community: 'Nomad capital',
      lifestyle: 'Relaxed, cultural, nature',
      icon: Mountain,
      color: 'green',
      pros: [
        'Cheapest major city',
        'Best nomad community',
        'Great coworking',
        'Culture and nature',
        'Comfortable size',
        'Cooler weather',
      ],
      cons: [
        'Burning season (Mar-Apr)',
        'Fewer jobs',
        'Need motorbike',
        'Smaller city',
        'Farther from beaches',
        'Less nightlife',
      ],
    },
    {
      name: 'Phuket',
      monthlyBudget: '$1200-1800',
      internet: 'Good (100-300 Mbps)',
      coworking: '$80-150/month',
      community: 'Growing nomad scene',
      lifestyle: 'Beach, tourist, party',
      icon: Waves,
      color: 'cyan',
      pros: [
        'Beautiful beaches',
        'Good infrastructure',
        'International airport',
        'Water sports',
        'Nightlife',
        'Island hopping',
      ],
      cons: [
        'Tourist prices',
        'Very touristy',
        'Traffic issues',
        'Rainy season',
        'Less authentic',
        'Expensive dining',
      ],
    },
    {
      name: 'Koh Samui',
      monthlyBudget: '$1200-1600',
      internet: 'Good (100-200 Mbps)',
      coworking: '$70-120/month',
      community: 'Small but active',
      lifestyle: 'Island paradise, relaxed',
      icon: Palmtree,
      color: 'emerald',
      pros: ['Island life', 'Beautiful scenery', 'Laid back', 'Good infrastructure', 'Less touristy', 'Great food'],
      cons: [
        'Expensive',
        'Limited flights',
        'Smaller community',
        'Island fever',
        'Limited options',
        'Rainy season',
      ],
    },
    {
      name: 'Pattaya',
      monthlyBudget: '$800-1200',
      internet: 'Good (100-300 Mbps)',
      coworking: '$60-100/month',
      community: 'Small nomad scene',
      lifestyle: 'Beach, nightlife, expat hub',
      icon: Waves,
      color: 'orange',
      pros: ['Affordable', 'Near Bangkok', 'Beach access', 'Good infrastructure', 'Expat friendly', 'Close to airport'],
      cons: [
        'Party reputation',
        'Less culture',
        'Tourist focused',
        'Limited nomad scene',
        'Polluted beach',
        'Less authentic',
      ],
    },
  ];

  const selectedVisaData = visaOptions.find((v) => v.name === selectedVisa);
  const selectedCityData = cities.find((c) => c.name === selectedCity);

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Practical Info', path: '/practical' },
          { label: 'Digital Nomad Guide', path: '/digital-nomad-thailand' },
        ]}
      />

      <div className="bg-gradient-to-b from-blue-900 to-blue-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Laptop className="w-8 h-8 text-blue-300" />
              <span className="text-blue-300 font-semibold tracking-wider uppercase text-sm">
                Digital Nomad Guide
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 uppercase tracking-[3px]">
              Work Remotely
              <br />
              <span className="text-blue-300">in Thailand</span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-4">
                Thailand is perfect for digital nomads. Fast internet, low cost, amazing food.
              </p>
              <p className="text-lg text-blue-200">Visa options from 60 days to 5 years.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Visa Options
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From short-term tourist visas to 5-year digital nomad visas
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {visaOptions.map((visa) => {
                const Icon = visa.icon;
                const isSelected = selectedVisa === visa.name;
                return (
                  <div
                    key={visa.name}
                    onClick={() => setSelectedVisa(visa.name)}
                    className={`bg-white rounded-2xl p-6 border-2 shadow-lg cursor-pointer transition-all duration-300 ${
                      isSelected
                        ? `border-${visa.color}-500 shadow-xl scale-105`
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-xl'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 bg-${visa.color}-100 rounded-xl`}>
                        <Icon className={`w-6 h-6 text-${visa.color}-600`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900">{visa.name}</h3>
                        {visa.name === 'DTV' && (
                          <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded mt-1">
                            NEW 2024 - BEST OPTION
                          </span>
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
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600 flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            Duration
                          </span>
                          <span className="font-bold text-gray-900">{visa.duration}</span>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600 flex items-center gap-2">
                            <DollarSign className="w-4 h-4" />
                            Cost
                          </span>
                          <span className="font-bold text-gray-900">{visa.cost}</span>
                        </div>
                      </div>
                    </div>

                    <div className={`bg-${visa.color}-50 rounded-lg p-3`}>
                      <p className={`text-sm font-semibold text-${visa.color}-900`}>Best for: {visa.bestFor}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {selectedVisaData && (
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <FileText className="w-10 h-10 text-blue-300 flex-shrink-0" />
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{selectedVisaData.name} Details</h3>
                    <p className="text-blue-200 text-lg">{selectedVisaData.bestFor}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-blue-200 text-sm mb-1">Duration</p>
                    <p className="text-xl font-bold">{selectedVisaData.duration}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-blue-200 text-sm mb-1">Cost</p>
                    <p className="text-xl font-bold">{selectedVisaData.cost}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-blue-200 text-sm mb-1">Type</p>
                    <p className="text-xl font-bold">
                      {selectedVisaData.name === 'Elite Visa'
                        ? 'Premium'
                        : selectedVisaData.name === 'DTV'
                          ? 'Work Visa'
                          : 'Standard'}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-xl mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Requirements
                    </h4>
                    <ul className="space-y-2">
                      {selectedVisaData.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-blue-100">
                          <ArrowRight className="w-4 h-4 text-blue-300 flex-shrink-0 mt-1" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-xl mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        Pros
                      </h4>
                      <ul className="space-y-2">
                        {selectedVisaData.pros.map((pro, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-blue-100">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-xl mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-yellow-400" />
                        Cons
                      </h4>
                      <ul className="space-y-2">
                        {selectedVisaData.cons.map((con, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-blue-100">
                            <AlertTriangle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-1" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
              <div className="flex items-start gap-4">
                <Sparkles className="w-10 h-10 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">2024 Update: DTV is the Game-Changer</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    The new <strong>Destination Thailand Visa (DTV)</strong> launched in 2024 is the best option for
                    digital nomads. For just $300, you get <strong>5 years validity</strong> with{' '}
                    <strong>180 days per entry</strong> and unlimited entries. This is cheaper than doing visa runs and
                    provides long-term certainty.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    If you're a remote worker or freelancer with proof of income and $15k+ in the bank, the DTV is your
                    best option by far.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Best Cities for Nomads
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Compare Thailand's top digital nomad destinations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {cities.map((city) => {
                const Icon = city.icon;
                const isSelected = selectedCity === city.name;
                return (
                  <div
                    key={city.name}
                    onClick={() => setSelectedCity(city.name)}
                    className={`bg-white rounded-2xl p-6 border-2 shadow-lg cursor-pointer transition-all duration-300 ${
                      isSelected
                        ? `border-${city.color}-500 shadow-xl scale-105`
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-xl'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 bg-${city.color}-100 rounded-xl`}>
                        <Icon className={`w-6 h-6 text-${city.color}-600`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{city.name}</h3>
                        {city.name === 'Chiang Mai' && (
                          <span className="text-xs text-green-600 font-bold">NOMAD CAPITAL</span>
                        )}
                        {isSelected && (
                          <div className="flex items-center gap-1 text-sm text-blue-600 font-semibold">
                            <CheckCircle className="w-4 h-4" />
                            Selected
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Monthly Budget</span>
                          <span className="font-bold text-gray-900">{city.monthlyBudget}</span>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Internet</span>
                          <span className="font-bold text-gray-900">{city.internet}</span>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Coworking</span>
                          <span className="font-bold text-gray-900">{city.coworking}</span>
                        </div>
                      </div>
                    </div>

                    <div className={`bg-${city.color}-50 rounded-lg p-3`}>
                      <p className={`text-sm font-semibold text-${city.color}-900 mb-1`}>{city.lifestyle}</p>
                      <p className="text-xs text-gray-600">Community: {city.community}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {selectedCityData && (
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="w-10 h-10 text-blue-300 flex-shrink-0" />
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{selectedCityData.name}</h3>
                    <p className="text-gray-300 text-lg">{selectedCityData.lifestyle}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-gray-300 text-sm mb-1">Monthly Budget</p>
                    <p className="text-xl font-bold">{selectedCityData.monthlyBudget}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-gray-300 text-sm mb-1">Internet</p>
                    <p className="text-xl font-bold">{selectedCityData.internet.split(' ')[0]}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-gray-300 text-sm mb-1">Coworking</p>
                    <p className="text-xl font-bold">{selectedCityData.coworking}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-gray-300 text-sm mb-1">Community</p>
                    <p className="text-xl font-bold">{selectedCityData.community.split(' ')[0]}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-xl mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Advantages
                    </h4>
                    <ul className="space-y-2">
                      {selectedCityData.pros.map((pro, idx) => (
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
                      {selectedCityData.cons.map((con, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-200">
                          <AlertTriangle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-1" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Internet & Coworking
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Thailand has excellent internet infrastructure for remote work
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-6 text-white">
                <Wifi className="w-10 h-10 text-blue-300 mb-4" />
                <h3 className="text-xl font-bold mb-2">Home Internet</h3>
                <p className="text-3xl font-bold text-blue-300 mb-2">100-1000 Mbps</p>
                <p className="text-blue-100 text-sm mb-3">Fiber widely available</p>
                <p className="text-lg font-semibold">$20-40/month</p>
              </div>

              <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-xl p-6 text-white">
                <Phone className="w-10 h-10 text-green-300 mb-4" />
                <h3 className="text-xl font-bold mb-2">Mobile Internet</h3>
                <p className="text-3xl font-bold text-green-300 mb-2">Unlimited 4G/5G</p>
                <p className="text-green-100 text-sm mb-3">Works everywhere</p>
                <p className="text-lg font-semibold">$10-25/month</p>
              </div>

              <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-xl p-6 text-white">
                <Briefcase className="w-10 h-10 text-purple-300 mb-4" />
                <h3 className="text-xl font-bold mb-2">Coworking</h3>
                <p className="text-3xl font-bold text-purple-300 mb-2">$50-200</p>
                <p className="text-purple-100 text-sm mb-3">All major cities</p>
                <p className="text-lg font-semibold">per month</p>
              </div>

              <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-xl p-6 text-white">
                <Coffee className="w-10 h-10 text-orange-300 mb-4" />
                <h3 className="text-xl font-bold mb-2">Cafe Working</h3>
                <p className="text-3xl font-bold text-orange-300 mb-2">$2-4</p>
                <p className="text-orange-100 text-sm mb-3">Excellent wifi</p>
                <p className="text-lg font-semibold">per drink</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Network className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Internet Reliability</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Very reliable:</strong> Fiber internet widely available in cities
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Fast speeds:</strong> 100-1000 Mbps common in urban areas
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Good uptime:</strong> Power outages rare in major cities
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Mobile backup:</strong> 4G/5G works as excellent backup
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Easy setup:</strong> Usually installed within 2-3 days
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="w-8 h-8 text-purple-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Coworking Options</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Bangkok:</strong> 100+ spaces, $100-200/month, world-class facilities
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Chiang Mai:</strong> 20+ spaces, $50-100/month, best community
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Phuket:</strong> 10+ spaces, $80-150/month, beach locations
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Cafes:</strong> Thousands of work-friendly cafes nationwide
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Day passes:</strong> Most spaces offer flexible day rates
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Banking & Money
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Managing finances as a digital nomad in Thailand
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Opening Bank Account</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <div className="bg-yellow-50 rounded-lg p-4 border-2 border-yellow-200">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-yellow-900 mb-1">Difficult Without Long-Term Visa</p>
                        <p className="text-sm text-yellow-800">
                          Tourist visa holders face challenges. Requires work permit or long-term visa (ED, DTV, Elite).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">Recommended Banks:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Bangkok Bank:</strong> Most foreigner-friendly
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Kasikorn Bank:</strong> Good English service
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>SCB:</strong> Modern mobile banking
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-sm text-green-800">
                      <strong>Tip:</strong> Get DTV, ED, or Elite visa first to make banking much easier.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <CreditCard className="w-8 h-8 text-purple-600" />
                  <h3 className="text-2xl font-bold text-gray-900">ATMs & Cards</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-bold mb-2">ATM Withdrawals:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>220 baht fee</strong> per withdrawal (around $6-7)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                        <span>Withdraw max amount to minimize fees</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Use Wise card to save on exchange rates</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">Credit Cards:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Accepted in malls, hotels, restaurants</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span>Not accepted in small shops, street food</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                        <span>Cash still king in Thailand</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-6 text-white">
                <Banknote className="w-10 h-10 text-blue-300 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Money Transfer</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-blue-200 mb-2">Best Option:</p>
                    <p className="text-2xl font-bold">Wise (formerly TransferWise)</p>
                  </div>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>$5-20 fee per transfer</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Real exchange rates (no markup)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Fast transfers (1-2 days)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Wise debit card available</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-xl p-6 text-white">
                <DollarSign className="w-10 h-10 text-green-300 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Money Tips</h3>
                <ul className="space-y-3 text-green-100">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-green-300 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Always carry cash:</strong> Many places don't accept cards
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-green-300 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Notify your bank:</strong> Prevent card blocks from foreign use
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-green-300 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Use mobile banking:</strong> Thai banks have great apps
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-green-300 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Keep small bills:</strong> For street food, taxis, tips
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Healthcare
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Excellent quality at affordable prices
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-lg">
                <Heart className="w-10 h-10 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Quality</h3>
                <p className="text-gray-700">
                  Excellent healthcare. Bangkok hospitals are world-class with English-speaking staff.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-lg">
                <TrendingDown className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cost</h3>
                <p className="text-gray-700">
                  50-70% cheaper than Western countries. Doctor visit: $20-50. Procedures very affordable.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-lg">
                <Shield className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Insurance</h3>
                <p className="text-gray-700">
                  Highly recommended. $500-3000/year depending on coverage and age. SafetyWing popular with nomads.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-lg">
                <Globe className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pharmacies</h3>
                <p className="text-gray-700">
                  Everywhere. Most medicines available without prescription. Pharmacists speak some English.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border-2 border-red-200">
              <div className="flex items-start gap-4">
                <Heart className="w-10 h-10 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Healthcare Highlights</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Top hospitals:</strong> Bumrungrad, Bangkok Hospital, Samitivej
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Medical tourism:</strong> Thailand is a top destination
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>English service:</strong> All major hospitals have interpreters
                        </span>
                      </li>
                    </ul>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Dental care:</strong> Excellent quality, very affordable
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Quick service:</strong> Often same-day appointments
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Modern facilities:</strong> Latest medical technology
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
                Taxes
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding tax implications for digital nomads
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-2xl p-8 text-white">
                <Calculator className="w-10 h-10 text-green-300 mb-4" />
                <h3 className="text-3xl font-bold mb-4">Under 180 Days</h3>
                <div className="bg-white/10 rounded-lg p-4 mb-4">
                  <p className="text-green-100 text-lg">
                    <strong>Not a tax resident</strong>
                  </p>
                  <p className="text-3xl font-bold mt-2">No Thai Tax</p>
                </div>
                <ul className="space-y-3 text-green-100">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Stay less than 180 days per calendar year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>No Thai tax obligations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Simple visa runs keep you under limit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>Still responsible for home country taxes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-2xl p-8 text-white">
                <FileText className="w-10 h-10 text-orange-300 mb-4" />
                <h3 className="text-3xl font-bold mb-4">Over 180 Days</h3>
                <div className="bg-white/10 rounded-lg p-4 mb-4">
                  <p className="text-orange-100 text-lg">
                    <strong>Tax resident</strong>
                  </p>
                  <p className="text-3xl font-bold mt-2">Complex</p>
                </div>
                <ul className="space-y-3 text-orange-100">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>Income brought into Thailand may be taxed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>Remote work income is complex area</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-orange-300 flex-shrink-0 mt-0.5" />
                    <span>DTV holders: unclear policy, evolving</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-orange-300 flex-shrink-0 mt-0.5" />
                    <span>Consult tax advisor for your situation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-yellow-50 rounded-2xl p-8 border-2 border-yellow-200">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-10 h-10 text-yellow-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Important Tax Note</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Thai tax law for digital nomads is <strong>complex and evolving</strong>. The new DTV visa (2024)
                    has unclear tax implications. Many nomads stay under 180 days to avoid tax residency.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Recommendation:</strong> Consult with a Thai tax advisor familiar with digital nomad cases,
                    especially if planning to stay over 180 days. Keep records of all income and transfers.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex items-start gap-4">
              <Sparkles className="w-10 h-10 text-blue-300 flex-shrink-0" />
              <div>
                <h3 className="text-3xl font-bold mb-4">The Bottom Line</h3>
                <p className="text-xl text-blue-100 leading-relaxed mb-6">
                  Thailand is one of the world's best countries for digital nomads. With the new DTV visa, excellent
                  internet, low cost of living, amazing food, and a strong community, it offers everything a remote
                  worker needs to thrive.
                </p>
                <p className="text-lg text-blue-200 leading-relaxed">
                  Whether you choose Bangkok's urban energy, Chiang Mai's affordability and community, or Phuket's beach
                  lifestyle, Thailand has a perfect base for your remote work journey. Start with the DTV visa, pick
                  your city, and enjoy one of the best digital nomad experiences in the world.
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
                title: 'Chiang Mai Cost of Living',
                description: 'Detailed nomad budget guide',
                link: '/chiang-mai-cost-of-living',
                image:
                  'https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Bangkok Cost of Living',
                description: 'Living costs in the capital',
                link: '/bangkok-cost-of-living',
                image:
                  'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Visa Guide',
                description: 'All Thailand visa options',
                link: '/visa-guide',
                image:
                  'https://images.pexels.com/photos/3585000/pexels-photo-3585000.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
