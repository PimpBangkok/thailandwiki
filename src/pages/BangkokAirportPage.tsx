import { useState } from 'react';
import {
  Plane,
  MapPin,
  Clock,
  Users,
  Wifi,
  DollarSign,
  ShoppingBag,
  Coffee,
  Bed,
  Package,
  Train,
  Car,
  Smartphone,
  CreditCard,
  Shield,
  Info,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Utensils,
  Bus,
  Star,
  HelpCircle,
  Send,
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { usePageMeta } from '../hooks/usePageMeta';
import RelatedGuides from '../components/RelatedGuides';
import { supabase } from '../lib/supabase';

interface TransportOption {
  name: string;
  price: string;
  duration: string;
  frequency: string;
  pros: string[];
  cons: string[];
  bestFor: string;
  icon: 'train' | 'car' | 'bus';
}

interface FAQ {
  question: string;
  answer: string;
}

export default function BangkokAirportPage() {
  usePageMeta({
    title: 'Bangkok Airport Guide 2026: Everything You Need to Know | BKK & DMK',
    description:
      'Complete Bangkok airport guide 2026. Learn how to get from BKK and DMK to the city, where to buy SIM cards, and insider airport tips.',
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    flightDetails: '',
    hotelDestination: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');

  const bkkTransportOptions: TransportOption[] = [
    {
      name: 'Airport Rail Link',
      price: '45 THB',
      duration: '30 minutes',
      frequency: '6 AM - Midnight',
      icon: 'train',
      pros: ['Cheapest option', 'No traffic', 'Connects to BTS at Phaya Thai', 'Air conditioned'],
      cons: ['Limited luggage space during peak', 'Last train midnight', 'Must transfer to reach most hotels'],
      bestFor: 'Budget travelers, Central Bangkok',
    },
    {
      name: 'Official Airport Taxi',
      price: '350-500 THB',
      duration: '30-60 minutes',
      frequency: 'Always available',
      icon: 'car',
      pros: ['Door-to-door service', 'Good for luggage', 'Available 24/7', 'Official counter on Level 1'],
      cons: ['Traffic dependent', '50 THB surcharge + tolls', 'Always insist on meter'],
      bestFor: 'Convenience, non-BTS areas, luggage',
    },
    {
      name: 'Grab / Bolt',
      price: '350-650 THB',
      duration: '45-90 minutes',
      frequency: 'On-demand',
      icon: 'car',
      pros: ['Fixed price upfront', 'Cashless payment', 'Track your ride', 'No language barrier'],
      cons: ['Pickup from Level 4', 'Traffic dependent', 'Need Thai SIM or WiFi'],
      bestFor: 'Knowing price upfront, avoiding scams',
    },
    {
      name: 'Airport Bus',
      price: '50-150 THB',
      duration: '60-90 minutes',
      frequency: 'Multiple routes',
      icon: 'bus',
      pros: ['Very cheap', 'Multiple routes', 'Direct to various areas'],
      cons: ['Slowest option', 'Can be crowded', 'Not ideal for heavy luggage'],
      bestFor: 'Extreme budget, backpackers',
    },
    {
      name: 'Private Transfer',
      price: '800-1500 THB',
      duration: '30-60 minutes',
      frequency: 'Pre-booked',
      icon: 'car',
      pros: ['Driver meets you with sign', 'Door-to-door', 'Professional service', 'Help with luggage'],
      cons: ['Most expensive', 'Must book advance', 'Traffic dependent'],
      bestFor: 'Families, groups, late arrivals, peace of mind',
    },
  ];

  const dmkTransportOptions: TransportOption[] = [
    {
      name: 'Train (via shuttle)',
      price: '20-30 THB',
      duration: '60 minutes',
      frequency: '4 AM - 10 PM',
      icon: 'train',
      pros: ['Cheapest option', 'Free shuttle to station', 'No traffic', 'Local experience'],
      cons: ['Takes longer', 'Limited hours', 'Must carry luggage', 'Not direct'],
      bestFor: 'Budget travelers, no rush',
    },
    {
      name: 'Official Taxi',
      price: '250-400 THB',
      duration: '40-60 minutes',
      frequency: 'Always available',
      icon: 'car',
      pros: ['Door-to-door', 'Available 24/7', 'Good for luggage', 'Meter + 50 THB surcharge'],
      cons: ['Traffic dependent', 'Meter scams possible', 'Tolls extra'],
      bestFor: 'Convenience, groups',
    },
    {
      name: 'Airport Bus A1/A2',
      price: '30 THB',
      duration: '45-60 minutes',
      frequency: '7 AM - 11 PM',
      icon: 'bus',
      pros: ['Very cheap', 'A1 to BTS Mo Chit', 'A2 to Victory Monument', 'Frequent service'],
      cons: ['Can be crowded', 'Limited hours', 'Standing room only sometimes'],
      bestFor: 'Budget travelers, going to Mo Chit/Victory Monument',
    },
    {
      name: 'Grab / Bolt',
      price: '350-550 THB',
      duration: '40-60 minutes',
      frequency: 'On-demand',
      icon: 'car',
      pros: ['Fixed price', 'Cashless', 'Easy pickup from Departures', 'Track ride'],
      cons: ['Traffic dependent', 'Surge pricing possible', 'Need internet'],
      bestFor: 'Convenience, avoiding taxi hassle',
    },
  ];

  const faqs: FAQ[] = [
    {
      question: 'Which airport should I fly into, BKK or DMK?',
      answer:
        'BKK (Suvarnabhumi) is the main international hub with better facilities and transport links, ideal for first-time visitors. DMK (Don Mueang) serves budget airlines like AirAsia and is older but functional. Choose based on your airline, with BKK being more convenient overall for international travelers.',
    },
    {
      question: 'Can I transfer between BKK and DMK airports?',
      answer:
        'Yes, but it takes 1-2 hours by taxi (500-700 THB) or public bus (cheaper but slower). The airports are 50km apart. If you have a connecting flight, allow at least 4-5 hours. Some airlines offer free shuttle buses between airports.',
    },
    {
      question: 'How early should I arrive for my flight?',
      answer:
        'For international flights, arrive 3 hours before departure, especially during peak morning hours (6-11 AM). For domestic flights, 2 hours is sufficient. BKK is large with distant gates, so factor in walking time of 20-30 minutes to reach your gate.',
    },
    {
      question: 'Is Bangkok airport safe at night?',
      answer:
        'Both BKK and DMK are very safe 24/7 with security, police presence, and well-lit areas. Many travelers sleep in the airports during layovers without issues. Keep valuables secure and use designated rest areas. Airport taxi queues are safer than street taxis at night.',
    },
    {
      question: 'Can I sleep in Bangkok airport?',
      answer:
        'Yes, both airports have free rest areas with reclining seats. BKK has more comfortable sleeping spots on Level 3 and 4. For better sleep, consider transit hotels (2000-5000 THB) or hourly rate lounges. Many travelers successfully overnight at both airports during layovers.',
    },
    {
      question: 'Do I need a visa to enter Thailand from the airport?',
      answer:
        'It depends on your nationality. Many countries get 30-60 day visa exemption on arrival. Check your specific country requirements before flying. Visa on arrival is available for some nationalities at a separate counter. Transit passengers staying airside do not need a visa.',
    },
  ];

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');

    try {
      const { error } = await supabase.from('contact_submissions').insert([
        {
          name: formData.name,
          email: formData.email,
          message: `Flight: ${formData.flightDetails}\nDestination: ${formData.hotelDestination}`,
          subject: 'Airport Transfer Request',
        },
      ]);

      if (error) throw error;

      setFormStatus('success');
      setFormMessage('Request submitted successfully! We will contact you soon.');
      setFormData({ name: '', email: '', flightDetails: '', hotelDestination: '' });
      setTimeout(() => {
        setFormStatus('idle');
        setFormMessage('');
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
      setFormMessage('Failed to submit. Please try again or email us directly.');
    }
  };

  const facilities = [
    {
      name: 'Currency Exchange',
      location: 'Arrival hall & throughout airport',
      hours: '24 hours',
      notes: 'Superrich booth in basement (Level B) has best rates',
    },
    {
      name: 'ATMs',
      location: 'All levels',
      hours: '24 hours',
      notes: 'Most Thai banks available. 220 baht foreign card fee',
    },
    {
      name: 'SIM Card Shops',
      location: 'After customs, arrivals hall',
      hours: '24 hours',
      notes: 'AIS, TrueMove, DTAC. Tourist packages 299-599 baht',
    },
    {
      name: 'Tourist Information',
      location: 'Arrivals hall',
      hours: '24 hours',
      notes: 'Free maps, advice, hotel booking assistance',
    },
    {
      name: 'Free WiFi',
      location: 'Throughout airport',
      hours: '24 hours',
      notes: 'No registration needed. Strong signal',
    },
    {
      name: 'Food Court',
      location: 'Level 4 (Domestic)',
      hours: '6:00 AM - 10:00 PM',
      notes: 'Cheapest food option. Thai & international',
    },
    {
      name: 'Restaurants & Cafes',
      location: 'All levels',
      hours: 'Varies',
      notes: 'Mix of chains and local. Higher prices',
    },
    {
      name: 'Lounges',
      location: 'Airside (after security)',
      hours: 'Varies',
      notes: 'Priority Pass accepted. Day pass 1200-2000 baht',
    },
    {
      name: 'Hotels (Inside Airport)',
      location: 'Level 3 (landside) & airside',
      hours: '24 hours check-in',
      notes: 'Novotel, transit hotels. 2000-5000+ baht/night',
    },
    {
      name: 'Rest Areas',
      location: 'Level 3 & 4',
      hours: '24 hours',
      notes: 'Free seating areas, some with recliners',
    },
    {
      name: 'Left Luggage',
      location: 'Level 2 & 4',
      hours: '24 hours',
      notes: '100-200 baht per item per day',
    },
    {
      name: 'Showers',
      location: 'In lounges & transit hotels',
      hours: 'Varies',
      notes: 'Lounge access or pay-per-use 200-500 baht',
    },
    {
      name: 'Pharmacy',
      location: 'Multiple locations',
      hours: '24 hours (some locations)',
      notes: 'Over-the-counter medications available',
    },
    {
      name: 'Convenience Stores',
      location: 'All levels',
      hours: '24 hours (most)',
      notes: '7-Eleven, other shops for snacks, drinks',
    },
  ];

  const arrivalSteps = [
    {
      step: 1,
      title: 'Exit Aircraft',
      icon: Plane,
      description: 'Follow signs to Immigration',
      time: '5 min',
    },
    {
      step: 2,
      title: 'Immigration',
      icon: Shield,
      description: 'Passport control and visa check',
      time: '30-60 min',
    },
    {
      step: 3,
      title: 'Baggage Claim',
      icon: Package,
      description: 'Collect checked luggage',
      time: '15-30 min',
    },
    {
      step: 4,
      title: 'Customs',
      icon: CheckCircle,
      description: 'Green channel if nothing to declare',
      time: '5 min',
    },
    {
      step: 5,
      title: 'Arrivals Hall',
      icon: MapPin,
      description: 'SIM cards, money exchange, transport',
      time: '10-20 min',
    },
  ];

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Travel Planning', path: '/travel-planning' },
          { label: 'Bangkok Airport Guide', path: '/bangkok-airport' },
        ]}
      />

      <div className="bg-gradient-to-b from-blue-900 to-blue-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Plane className="w-8 h-8 text-blue-300" />
              <span className="text-blue-300 font-semibold tracking-wider uppercase text-sm">
                Complete Airport Guide 2026
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 uppercase tracking-[3px]">
              Bangkok Airport Guide
              <br />
              <span className="text-blue-300">Everything You Need to Know</span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Complete guide to BKK and DMK airports — arrival, transport, SIM cards, and insider tips
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-20">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                Bangkok has two international airports: Suvarnabhumi (BKK) serving major carriers and Don Mueang (DMK)
                for budget airlines. Whether you're arriving for the first time or connecting through Bangkok, this
                guide covers everything from immigration and baggage to getting into the city, buying SIM cards, and
                avoiding common pitfalls. Updated February 2026 with current prices and procedures.
              </p>
            </div>
          </section>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Suvarnabhumi Airport (BKK)
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
              <p className="text-lg text-gray-600 mt-4">Main international hub, 30km east of Bangkok</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border-2 border-blue-200 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-blue-600 rounded-xl">
                    <Plane className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Airport Code</h3>
                </div>
                <p className="text-3xl font-bold text-blue-600">BKK</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 border-2 border-green-200 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-green-600 rounded-xl">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Location</h3>
                </div>
                <p className="text-gray-700 font-semibold">30km east of Bangkok</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 border-2 border-orange-200 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-orange-600 rounded-xl">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Operation</h3>
                </div>
                <p className="text-gray-700 font-semibold">24/7 Service</p>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border-2 border-slate-200 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-slate-600 rounded-xl">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Passengers</h3>
                </div>
                <p className="text-gray-700 font-semibold">60+ million yearly</p>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
              <div className="flex items-start gap-3">
                <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">About Suvarnabhumi Airport</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Suvarnabhumi (pronounced "su-wan-na-poom") is Bangkok's main international airport and one of the
                    busiest in Southeast Asia. The name means "Golden Land" in Sanskrit. Modern, efficient, and handles
                    60+ million passengers yearly. Terminal layout: Arrivals Level 2, Departures Level 4. Immigration
                    process typically 30-90 minutes depending on time. Baggage claim is efficient. The airport operates
                    24/7 and serves as a major hub for Thai Airways and other Asian carriers.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Arriving at BKK
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                What to expect when you land at Bangkok Suvarnabhumi Airport
              </p>
            </div>

            <div className="mb-12">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
                {arrivalSteps.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="flex flex-col items-center">
                        <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex flex-col items-center justify-center shadow-lg">
                          <Icon className="w-6 h-6 mb-1" />
                          <span className="text-xs font-bold">{item.time}</span>
                        </div>
                        <div className="mt-3 text-center">
                          <p className="font-bold text-gray-900">{item.title}</p>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </div>
                      {index < arrivalSteps.length - 1 && (
                        <ArrowRight className="w-6 h-6 text-gray-400 hidden md:block flex-shrink-0" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-red-100 rounded-xl">
                    <Shield className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Immigration</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Wait Time</p>
                      <p className="text-gray-700">30-60 minutes during peak hours (morning arrivals)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Fast Track</p>
                      <p className="text-gray-700">Available for business class passengers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Visa on Arrival</p>
                      <p className="text-gray-700">Available for eligible countries at separate counter</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <Package className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Baggage & Customs</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Baggage Claim</p>
                      <p className="text-gray-700">Efficient system, usually 15-30 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Green Channel</p>
                      <p className="text-gray-700">Nothing to declare - walk straight through</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Red Channel</p>
                      <p className="text-gray-700">Use if declaring goods or carrying restricted items</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border-2 border-blue-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Smartphone className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">SIM Cards</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Available immediately after customs in the arrivals hall. Multiple providers with tourist packages.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Providers:</strong> AIS, TrueMove, DTAC
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Tourist SIM:</strong> 299-599 baht for 7-30 days
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Data:</strong> Unlimited data packages available
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 border-2 border-green-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-8 h-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Money Exchange</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Multiple currency exchange options available throughout the airport.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Airport rates are okay but not the best</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Best Rate:</strong> Superrich booth in basement (Level B)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CreditCard className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>ATMs:</strong> Available throughout (220 baht fee)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Getting from BKK to Bangkok City
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Compare all transportation options from Suvarnabhumi Airport
              </p>
            </div>

            <div className="mb-8 overflow-x-auto rounded-2xl shadow-xl border-2 border-gray-200">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Transport</th>
                    <th className="px-6 py-4 text-left font-semibold">Price</th>
                    <th className="px-6 py-4 text-left font-semibold">Duration</th>
                    <th className="px-6 py-4 text-left font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {bkkTransportOptions.map((option, index) => (
                    <tr key={index} className="hover:bg-blue-50 transition-colors duration-150">
                      <td className="px-6 py-4 font-bold text-gray-900">{option.name}</td>
                      <td className="px-6 py-4 text-gray-700">{option.price}</td>
                      <td className="px-6 py-4 text-gray-700">{option.duration}</td>
                      <td className="px-6 py-4">
                        <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {option.bestFor}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bkkTransportOptions.map((option, index) => {
                const Icon = option.icon === 'train' ? Train : option.icon === 'bus' ? Bus : Car;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{option.name}</h3>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-blue-600">{option.price}</span>
                        </div>
                        <span className="text-sm text-gray-600">{option.duration}</span>
                      </div>
                      <div className="p-3 bg-blue-100 rounded-xl">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {option.bestFor}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-gray-900 mb-2 text-sm">Pros:</p>
                        <ul className="space-y-1">
                          {option.pros.map((pro, proIndex) => (
                            <li key={proIndex} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-gray-900 mb-2 text-sm">Cons:</p>
                        <ul className="space-y-1">
                          {option.cons.map((con, conIndex) => (
                            <li key={conIndex} className="flex items-start gap-2 text-sm">
                              <AlertCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                SIM Cards and Money at BKK
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border-2 border-blue-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Smartphone className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">SIM Cards</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  SIM card counters available in arrivals hall immediately after customs. Three main providers (AIS,
                  TrueMove, dtac) offer tourist packages ranging from 299-599 THB for 8-30 days with data. Get your SIM
                  before leaving the airport for maximum convenience. All counters are open 24/7 and staff speak
                  English. They'll install and activate the SIM for you.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Tourist SIM packages: 299-599 THB</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Validity: 8-30 days with unlimited data</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Open 24/7 in arrivals area</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border-2 border-green-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-8 h-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Money Exchange</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Money exchange counters available throughout the airport, but rates are not the best. ATMs are
                  everywhere but charge 220 THB foreign card fee per transaction. Best strategy: exchange just enough
                  for taxi (1000-2000 THB) at the airport, then use ATMs in the city for better rates or visit
                  Superrich exchange for the best rates.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Airport rates okay but not best</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">ATMs charge 220 THB per transaction</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Credit cards widely accepted at airport</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Don Mueang Airport (DMK)
              </h2>
              <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
              <p className="text-lg text-gray-600 mt-4">Secondary airport, 24km north of Bangkok</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 border-2 border-orange-200 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-orange-600 rounded-xl">
                    <Plane className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Airport Code</h3>
                </div>
                <p className="text-3xl font-bold text-orange-600">DMK</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 border-2 border-orange-200 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-orange-600 rounded-xl">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Location</h3>
                </div>
                <p className="text-gray-700 font-semibold">24km north</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 border-2 border-orange-200 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-orange-600 rounded-xl">
                    <Plane className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Airlines</h3>
                </div>
                <p className="text-gray-700 font-semibold">Budget carriers</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 border-2 border-orange-200 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-orange-600 rounded-xl">
                    <Wifi className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">WiFi</h3>
                </div>
                <p className="text-gray-700 font-semibold">Free throughout</p>
              </div>
            </div>

            <div className="bg-orange-50 rounded-2xl p-6 border-2 border-orange-200 mb-12">
              <div className="flex items-start gap-3">
                <Info className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">About Don Mueang Airport</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Don Mueang is Bangkok's secondary airport, 24km north of the city. It primarily serves budget
                    airlines including AirAsia, Nok Air, and Lion Air. While older than BKK, the facility is functional
                    and easier to navigate due to its smaller size. Basic facilities include restaurants, convenience
                    stores, and money exchange. Free WiFi is available throughout both terminals.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-3xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Getting from DMK to Bangkok
              </h3>
              <div className="w-20 h-1 bg-orange-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dmkTransportOptions.map((option, index) => {
                const Icon = option.icon === 'train' ? Train : option.icon === 'bus' ? Bus : Car;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{option.name}</h3>
                        <div className="text-2xl font-bold text-orange-600 mb-1">{option.price}</div>
                        <span className="text-sm text-gray-600">{option.duration}</span>
                      </div>
                      <div className="p-3 bg-orange-100 rounded-xl">
                        <Icon className="w-6 h-6 text-orange-600" />
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                        {option.bestFor}
                      </span>
                    </div>

                    <div className="space-y-2">
                      {option.pros.slice(0, 2).map((pro, proIndex) => (
                        <div key={proIndex} className="flex items-start gap-2 text-xs">
                          <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{pro}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Airport Facilities
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Complete directory of services and amenities at BKK Airport
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 border-2 border-gray-200 hover:border-blue-300 transition-colors duration-200 shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                      {facility.name.includes('WiFi') && <Wifi className="w-5 h-5 text-blue-600" />}
                      {facility.name.includes('Currency') && <DollarSign className="w-5 h-5 text-blue-600" />}
                      {facility.name.includes('ATM') && <CreditCard className="w-5 h-5 text-blue-600" />}
                      {facility.name.includes('SIM') && <Smartphone className="w-5 h-5 text-blue-600" />}
                      {facility.name.includes('Food') && <Utensils className="w-5 h-5 text-blue-600" />}
                      {facility.name.includes('Restaurant') && <Coffee className="w-5 h-5 text-blue-600" />}
                      {facility.name.includes('Lounge') && <Coffee className="w-5 h-5 text-blue-600" />}
                      {facility.name.includes('Hotel') && <Bed className="w-5 h-5 text-blue-600" />}
                      {facility.name.includes('Rest') && <Bed className="w-5 h-5 text-blue-600" />}
                      {facility.name.includes('Luggage') && <Package className="w-5 h-5 text-blue-600" />}
                      {facility.name.includes('Store') && <ShoppingBag className="w-5 h-5 text-blue-600" />}
                      {!facility.name.includes('WiFi') &&
                        !facility.name.includes('Currency') &&
                        !facility.name.includes('ATM') &&
                        !facility.name.includes('SIM') &&
                        !facility.name.includes('Food') &&
                        !facility.name.includes('Restaurant') &&
                        !facility.name.includes('Lounge') &&
                        !facility.name.includes('Hotel') &&
                        !facility.name.includes('Rest') &&
                        !facility.name.includes('Luggage') &&
                        !facility.name.includes('Store') && <Info className="w-5 h-5 text-blue-600" />}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{facility.name}</h3>
                      <div className="space-y-1 text-sm">
                        <p className="text-gray-700">
                          <span className="font-semibold">Location:</span> {facility.location}
                        </p>
                        <p className="text-gray-700">
                          <span className="font-semibold">Hours:</span> {facility.hours}
                        </p>
                        <p className="text-gray-600 italic">{facility.notes}</p>
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
                Airport Tips and Hacks
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">Timing</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Arrive 3 hours early for international departures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Check visa requirements before flying</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">Apps & Tech</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Download Grab app before arrival</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Free WiFi throughout both airports</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">Money Tips</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Exchange max 1000-2000 THB at airport</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Keep small bills for buses and taxis</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">Immigration</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Have hotel address ready for immigration card</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Fill out arrival card on plane to save time</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Bed className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">Layovers</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Sleeping areas available for overnight stays</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Transit hotel at BKK for hourly rates</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Package className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">Luggage</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Left luggage: 100-200 THB per bag per day</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Available 24/7 at both airports</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Layovers in Bangkok
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border-2 border-orange-200 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-8 h-8 text-orange-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Short Layover (4-6 hours)</h3>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Too risky to leave the airport. Make the most of your time inside.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <ShoppingBag className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Shop duty-free stores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Coffee className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Use airport lounges for comfort</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Bed className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Book transit hotel for sleep</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Utensils className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Try authentic Thai food at restaurants</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border-2 border-blue-200 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Long Layover (8+ hours)</h3>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Time to explore Bangkok if you're visa-exempt. Plan carefully and leave buffer time.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Train className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Airport Rail Link to city: 1 hour each way</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Quick temple visit or Thai massage possible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Leave minimum 4 hours buffer for return</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Package className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Store luggage: 100-200 THB per bag</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-xl flex-shrink-0">
                      <HelpCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Need Airport Transfer Help?
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Let us help you plan your airport transfer and Bangkok travel
              </p>
            </div>

            <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-xl">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="flightDetails" className="block text-sm font-semibold text-gray-900 mb-2">
                    Flight Details
                  </label>
                  <input
                    type="text"
                    id="flightDetails"
                    required
                    value={formData.flightDetails}
                    onChange={(e) => setFormData({ ...formData, flightDetails: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                    placeholder="Flight number and arrival time"
                  />
                </div>

                <div>
                  <label htmlFor="hotelDestination" className="block text-sm font-semibold text-gray-900 mb-2">
                    Hotel Destination
                  </label>
                  <input
                    type="text"
                    id="hotelDestination"
                    required
                    value={formData.hotelDestination}
                    onChange={(e) => setFormData({ ...formData, hotelDestination: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                    placeholder="Hotel name and address"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {formStatus === 'loading' ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Request
                    </>
                  )}
                </button>

                {formMessage && (
                  <div
                    className={`p-4 rounded-xl ${
                      formStatus === 'success'
                        ? 'bg-green-50 border-2 border-green-200 text-green-800'
                        : 'bg-red-50 border-2 border-red-200 text-red-800'
                    }`}
                  >
                    <p className="font-semibold">{formMessage}</p>
                  </div>
                )}
              </form>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Departing from BKK
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                What to know when leaving Bangkok from Suvarnabhumi Airport
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border-2 border-blue-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">Check-in</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Opens 3 hours before departure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Smartphone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Online check-in available for most airlines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Still visit counter to drop bags if checked luggage</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 border-2 border-green-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-900">Security</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Clock className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Usually quick, 10-20 minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Remove laptops and liquids from bags</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Efficient process compared to many airports</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 border-2 border-purple-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <ShoppingBag className="w-8 h-8 text-purple-600" />
                  <h3 className="text-xl font-bold text-gray-900">Duty Free</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Located after security screening</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShoppingBag className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Good selection of products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <DollarSign className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Prices competitive with other airports</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 border-2 border-orange-200 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Plane className="w-8 h-8 text-orange-600" />
                <h3 className="text-2xl font-bold text-gray-900">Boarding</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Important Notes:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Gates can be far from security checkpoint</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Allow 20-30 minutes to walk to gate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Info className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Moving walkways available in long corridors</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Arrival Times:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Plane className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>International:</strong> 3 hours before departure
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Plane className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Domestic:</strong> 2 hours before departure
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Peak Times:</strong> Add extra time (6-11am)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex items-start gap-4">
              <Info className="w-10 h-10 text-blue-300 flex-shrink-0" />
              <div>
                <h3 className="text-3xl font-bold mb-4">Pro Tips for BKK Airport</h3>
                <div className="grid md:grid-cols-2 gap-6 text-blue-100 text-lg leading-relaxed">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-300 flex-shrink-0 mt-1" />
                      <span>Download offline maps before arrival in case of internet issues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-300 flex-shrink-0 mt-1" />
                      <span>Get a SIM card before leaving airport for easier navigation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-300 flex-shrink-0 mt-1" />
                      <span>Exchange just enough money at airport, better rates in city</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-300 flex-shrink-0 mt-1" />
                      <span>Save energy by using moving walkways in long corridors</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-300 flex-shrink-0 mt-1" />
                      <span>Free WiFi throughout airport, no registration needed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-300 flex-shrink-0 mt-1" />
                      <span>Food court on Level 4 offers cheaper meals than restaurants</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-300 flex-shrink-0 mt-1" />
                      <span>Book lounge access in advance for better rates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-300 flex-shrink-0 mt-1" />
                      <span>Check gate location early - some are 20+ minute walk</span>
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
                title: 'Bangkok City Guide',
                description: 'Complete guide to exploring Bangkok',
                link: '/destinations/bangkok',
                image:
                  'https://images.pexels.com/photos/3581369/pexels-photo-3581369.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Where to Stay in Bangkok',
                description: 'Best areas and neighborhoods',
                link: '/where-to-stay-bangkok',
                image:
                  'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Thailand Visa Guide',
                description: 'Visa requirements and application',
                link: '/visa-guide',
                image:
                  'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
