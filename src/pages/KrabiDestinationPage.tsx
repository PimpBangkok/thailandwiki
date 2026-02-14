import { Link } from 'react-router-dom';
import { MapPin, Calendar, DollarSign, Plane, Compass, Hotel, Anchor, Mountain, Waves, Car, Map, MessageCircle } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import RelatedGuides from '../components/RelatedGuides';
import YouMayAlsoLike from '../components/YouMayAlsoLike';
import { usePageMeta } from '../hooks/usePageMeta';

export default function KrabiDestinationPage() {
  usePageMeta(
    'Krabi Travel Guide 2026 - Beaches, Islands & Things to Do | ThailandWiki',
    'Complete Krabi travel guide: best beaches, islands, rock climbing, where to stay, transportation, and insider tips for your perfect Krabi adventure.'
  );

  const quickNavItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'Beaches', href: '#beaches' },
    { label: 'Things to Do', href: '#things-to-do' },
    { label: 'Where to Stay', href: '#accommodation' },
    { label: 'Islands', href: '#islands' },
    { label: 'Transportation', href: '#transportation' },
    { label: 'Itineraries', href: '#itineraries' },
    { label: 'Practical Info', href: '#practical' },
  ];

  const beaches = [
    {
      name: 'Railay Beach',
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80',
      description: 'Accessible only by boat, surrounded by dramatic limestone cliffs',
      features: ['4 beaches in one area', 'World-class rock climbing', 'Stunning scenery', 'Unique experience'],
      bestFor: 'Rock climbers, adventure seekers, Instagram-worthy views',
      access: '10-minute longtail boat from Ao Nang (150-200 THB)',
    },
    {
      name: 'Ao Nang Beach',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80',
      description: 'Main tourist beach with full facilities and vibrant atmosphere',
      features: ['Long sandy beach', 'Restaurants & bars', 'Water activities', 'Starting point for tours'],
      bestFor: 'Families, convenience, nightlife, first-timers',
      access: 'Direct road access, 20 min from Krabi Airport',
    },
    {
      name: 'Nopparat Thara Beach',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200&q=80',
      description: 'Quieter alternative next to Ao Nang with local charm',
      features: ['Pine tree shade', 'Marine national park', 'Beautiful sunset', 'Less crowded'],
      bestFor: 'Peaceful atmosphere, budget travelers, locals experience',
      access: '5 min from Ao Nang by songthaew or walk',
    },
    {
      name: 'Tonsai Beach',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
      description: 'Budget backpacker paradise with climbing community',
      features: ['Rock climbing mecca', 'Budget bungalows', 'Hippy vibe', 'Party scene'],
      bestFor: 'Budget travelers, climbers, young backpackers',
      access: 'Longtail boat from Ao Nang or hike from Railay',
    },
    {
      name: 'Phra Nang Beach',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
      description: 'Consistently rated one of the world\'s most beautiful beaches',
      features: ['Princess Cave shrine', 'Clear turquoise water', 'Limestone cliffs', 'Powder white sand'],
      bestFor: 'Photography, swimming, snorkeling, relaxation',
      access: 'Walk through Railay or boat from Ao Nang',
    },
    {
      name: 'Tubkaek Beach',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      description: 'Upscale, quiet beach with luxury resorts',
      features: ['Long stretch of sand', 'Luxury resorts', 'Sunset views', 'Peaceful'],
      bestFor: 'Luxury travelers, honeymoons, relaxation',
      access: '30 min north of Ao Nang by car',
    },
  ];

  const islands = [
    {
      name: 'Koh Phi Phi',
      distance: '45 min by speedboat',
      description: 'Famous island paradise with stunning Maya Bay and vibrant nightlife',
      highlights: 'Maya Bay, Viking Cave, snorkeling, diving',
      image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80',
      dayTrip: true,
      overnight: true,
      bestFor: 'Photography, snorkeling, party scene',
    },
    {
      name: 'Hong Islands',
      distance: '30 min by speedboat',
      description: 'Protected marine park featuring a hidden emerald lagoon',
      highlights: 'Hidden lagoon (must-see), pristine beaches, kayaking, excellent snorkeling',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
      dayTrip: true,
      overnight: false,
      bestFor: 'Nature lovers, kayaking, photography',
    },
    {
      name: '4 Islands Tour',
      distance: '30-45 min by longtail',
      description: 'Budget-friendly tour covering the most accessible islands',
      highlights: 'Phra Nang Cave Beach, Chicken Island, Tup Island & Mor Island',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80',
      dayTrip: true,
      overnight: false,
      bestFor: 'Budget travelers, first-timers, families',
    },
    {
      name: 'Koh Lanta',
      distance: '2 hours by ferry',
      description: 'Relaxed island with long beaches, less touristy than other islands',
      highlights: 'Long quiet beaches, family-friendly, local culture, multiple days recommended',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
      dayTrip: false,
      overnight: true,
      bestFor: 'Families, relaxation, longer stays',
    },
  ];

  const activities = [
    {
      icon: Mountain,
      title: 'Rock Climbing',
      description: 'World-class limestone climbing at Railay and Tonsai',
      price: 'From 1,500 THB (half-day course)',
      details: [
        '700+ climbing routes at Railay',
        'Beginner to advanced levels',
        'Climbing schools and guides available',
        'Best months: November-March',
      ],
    },
    {
      icon: Anchor,
      title: 'Island Hopping',
      description: 'Explore Phi Phi, Hong Islands, Four Islands tours',
      price: 'From 1,200 THB per person',
      details: [
        '4 Islands Tour (most popular)',
        'Hong Island tour (lagoon, snorkeling)',
        'Private longtail boat tours',
        'Full-day or half-day options',
      ],
    },
    {
      icon: Waves,
      title: 'Kayaking & Mangroves',
      description: 'Sea kayaking through mangroves and caves',
      price: 'From 800 THB (half-day)',
      details: [
        'Ao Thalane mangrove kayaking',
        'Bor Thor (emerald pool) kayaking',
        'Sunset kayaking tours',
        'Cave exploration by kayak',
      ],
    },
    {
      icon: Compass,
      title: 'Diving & Snorkeling',
      description: 'Discover coral reefs and marine life',
      price: 'Snorkeling from 600 THB, Diving from 2,500 THB',
      details: [
        'Soft and hard coral reefs',
        'Tropical fish and sea turtles',
        'Shipwreck diving sites',
        'PADI certification courses',
      ],
    },
  ];

  const accommodationAreas = [
    {
      name: 'Ao Nang',
      subtitle: 'Most Popular',
      description: 'Main beach town with most facilities, restaurants, and nightlife',
      bestFor: 'Convenience, families, tours',
      priceRange: '$20-200/night',
      highlights: [
        'Hotels, resorts, and guesthouses',
        'Walking distance to beach',
        'Restaurants and nightlife',
        'Tour booking offices',
      ],
      icon: Hotel,
    },
    {
      name: 'Railay',
      subtitle: 'Most Scenic',
      description: 'Accessible only by boat, surrounded by dramatic limestone cliffs',
      bestFor: 'Unique experience, nature, rock climbing',
      priceRange: '$30-400/night',
      highlights: [
        'Luxury resorts and budget bungalows',
        'Climbing lodges available',
        'No roads or vehicles',
        'Four stunning beaches',
      ],
      icon: Mountain,
    },
    {
      name: 'Krabi Town',
      subtitle: 'Budget Friendly',
      description: 'Local vibe with authentic Thai culture and night market',
      bestFor: 'Budget travelers, local culture',
      priceRange: '$10-50/night',
      highlights: [
        'Cheapest accommodation',
        'Weekend night market',
        'Local restaurants',
        'Authentic Thai experience',
      ],
      icon: MapPin,
    },
    {
      name: 'Klong Muang & Tubkaek',
      subtitle: 'Luxury',
      description: 'Quiet beach area with upscale resorts north of Ao Nang',
      bestFor: 'Luxury, peace and quiet, honeymoons',
      priceRange: '$80-500/night',
      highlights: [
        '5-star resorts and spas',
        'Long quiet beaches',
        'Sunset views',
        'Away from crowds',
      ],
      icon: Compass,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="relative h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=2000&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#252525]/70 via-[#252525]/50 to-[#252525]/80"></div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4 sm:px-6 lg:px-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-4 text-center uppercase tracking-[2px]">
            Krabi Travel Guide
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-6 text-center font-light text-gray-200">
            Limestone Cliffs, Pristine Beaches & Island Paradise
          </p>
          <div className="flex items-center space-x-4 text-sm sm:text-base text-gray-300">
            <span>892 Articles</span>
            <span>-</span>
            <span>Updated February 2026</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-8">
        <Breadcrumb
          items={[
            { label: 'Home', path: '/' },
            { label: 'Destinations', path: '/destinations' },
            { label: 'Southern Thailand', path: '/destinations' },
            { label: 'Krabi', path: '/destinations/krabi' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-sm p-4 mb-8 sticky top-20 z-40">
          <div className="flex flex-wrap gap-3 justify-center">
            {quickNavItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="px-4 py-2 text-sm text-gray-700 hover:text-[#d7007f] hover:bg-pink-50 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            <section id="overview">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-[#d7007f] pb-3">
                Krabi at a Glance
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
                <p>
                  Krabi is Thailand's adventure paradise, famous for dramatic limestone cliffs rising from turquoise waters,
                  pristine beaches, and world-class rock climbing. Less developed than Phuket, Krabi offers a more laid-back
                  vibe with stunning natural beauty, island hopping opportunities, and both adventure and relaxation.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-[#d7007f] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Best For</h3>
                      <p className="text-sm text-gray-700">Beach lovers, rock climbers, nature enthusiasts, families</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-6 h-6 text-orange-700 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Best Time</h3>
                      <p className="text-sm text-gray-700">November-April (dry), May-October (rainy, cheaper)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Hotel className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Recommended Stay</h3>
                      <p className="text-sm text-gray-700">Minimum 4 days, ideal 6-8 days</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <DollarSign className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Daily Budget</h3>
                      <p className="text-sm text-gray-700">$40-200+ depending on travel style</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Plane className="w-6 h-6 text-purple-700 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Getting There</h3>
                      <p className="text-sm text-gray-700">Krabi International Airport (KBV) or ferry from Phuket</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Compass className="w-6 h-6 text-pink-700 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Main Areas</h3>
                      <p className="text-sm text-gray-700">Ao Nang (beach town), Railay (cliffs), Krabi Town</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="beaches">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-[#d7007f] pb-3">
                Best Beaches in Krabi
              </h2>

              <p className="text-gray-700 mb-8 text-lg">
                Krabi boasts some of Thailand's most stunning beaches, from the famous limestone-surrounded Railay
                to quieter local favorites. Here are the top beaches you shouldn't miss.
              </p>

              <div className="space-y-8">
                {beaches.map((beach, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-2/5">
                        <img
                          src={beach.image}
                          alt={beach.name}
                          className="w-full h-64 md:h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="md:w-3/5 p-6">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">{beach.name}</h3>
                        <p className="text-gray-700 mb-4">{beach.description}</p>

                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                          <ul className="grid grid-cols-2 gap-2">
                            {beach.features.map((feature, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-center">
                                <span className="w-1.5 h-1.5 bg-[#d7007f] rounded-full mr-2"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-2 text-sm">
                          <p className="text-gray-700">
                            <span className="font-semibold text-gray-900">Best For:</span> {beach.bestFor}
                          </p>
                          <p className="text-gray-700">
                            <span className="font-semibold text-gray-900">Access:</span> {beach.access}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="things-to-do">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-[#d7007f] pb-3">
                Things to Do in Krabi
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {activities.map((activity, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="bg-pink-100 p-3 rounded-lg flex-shrink-0">
                        <activity.icon className="w-6 h-6 text-[#d7007f]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{activity.title}</h3>
                        <p className="text-gray-700 mb-3">{activity.description}</p>

                        <ul className="space-y-1 mb-3">
                          {activity.details.map((detail, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <span className="w-1.5 h-1.5 bg-[#d7007f] rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>

                        <p className="text-sm font-semibold text-[#d7007f]">{activity.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Nature & Waterfalls</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Tiger Cave Temple</h4>
                    <p className="text-sm text-gray-700 mb-1">1,237 steps to panoramic views of Krabi</p>
                    <p className="text-xs text-gray-600">Early morning recommended to avoid heat</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Emerald Pool & Blue Pool</h4>
                    <p className="text-sm text-gray-700 mb-1">Crystal clear natural pools in the jungle</p>
                    <p className="text-xs text-gray-600">Thung Teao Forest Natural Park</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Hot Springs Waterfall</h4>
                    <p className="text-sm text-gray-700 mb-1">Natural thermal waterfalls, unique experience</p>
                    <p className="text-xs text-gray-600">Can combine with Emerald Pool visit</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Krabi Night Market</h4>
                    <p className="text-sm text-gray-700 mb-1">Local food and shopping experience</p>
                    <p className="text-xs text-gray-600">Friday-Sunday evenings in Krabi Town</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="islands">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-[#d7007f] pb-3">
                Nearby Islands from Krabi
              </h2>

              <p className="text-gray-700 mb-8 text-lg">
                Krabi is the perfect base for exploring stunning nearby islands. From the famous Phi Phi Islands to hidden
                lagoons at Hong Islands, these are the must-visit island destinations.
              </p>

              <div className="space-y-8">
                {islands.map((island, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-2/5">
                        <img
                          src={island.image}
                          alt={island.name}
                          className="w-full h-64 md:h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="md:w-3/5 p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-2xl font-semibold text-gray-900">{island.name}</h3>
                          <div className="flex gap-2">
                            {island.dayTrip && (
                              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                                Day Trip
                              </span>
                            )}
                            {island.overnight && (
                              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                                Overnight
                              </span>
                            )}
                          </div>
                        </div>

                        <p className="text-gray-700 mb-4">{island.description}</p>

                        <div className="space-y-2 text-sm mb-4">
                          <p className="text-gray-700">
                            <span className="font-semibold text-gray-900">Highlights:</span> {island.highlights}
                          </p>
                          <p className="text-gray-700">
                            <span className="font-semibold text-gray-900">Travel Time:</span> {island.distance}
                          </p>
                          <p className="text-gray-700">
                            <span className="font-semibold text-gray-900">Best For:</span> {island.bestFor}
                          </p>
                        </div>

                        {island.name === 'Koh Phi Phi' && (
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <a
                              href="/destinations"
                              className="text-[#d7007f] hover:text-[#d7007f] font-medium text-sm inline-flex items-center"
                            >
                              See Koh Phi Phi Complete Guide
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Island Hopping Tips</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                    <span>Book tours the day before at your hotel or Ao Nang beach shops for best prices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                    <span>Bring sunscreen, hat, water shoes, and waterproof phone case</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                    <span>Private longtail boat charters cost 1,500-2,500 THB for 4 islands</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                    <span>Avoid tours during April-October monsoon season when seas can be rough</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="accommodation">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-[#d7007f] pb-3">
                Where to Stay in Krabi
              </h2>

              <p className="text-gray-700 mb-8 text-lg">
                Choose your base in Krabi based on your priorities - beach access, nightlife, budget, or tranquility.
                Each area offers a unique experience and atmosphere.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {accommodationAreas.map((area, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
                    <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 border-b border-pink-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="bg-[#d7007f] p-2 rounded-lg">
                            <area.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">{area.name}</h3>
                            <span className="text-sm text-[#d7007f] font-medium">{area.subtitle}</span>
                          </div>
                        </div>
                        <span className="text-[#d7007f] font-semibold text-sm">{area.priceRange}</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-gray-700 mb-4">{area.description}</p>

                      <ul className="space-y-2 mb-4">
                        {area.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="w-1.5 h-1.5 bg-[#d7007f] rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <p className="text-sm text-gray-700 border-t border-gray-200 pt-4">
                        <span className="font-semibold text-gray-900">Best For:</span> {area.bestFor}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <a
                  href="/accommodation"
                  className="inline-flex items-center px-6 py-3 bg-[#d7007f] text-white rounded-lg hover:bg-[#d7007f] transition-colors font-medium"
                >
                  <Hotel className="w-5 h-5 mr-2" />
                  Browse Krabi Hotels
                </a>
              </div>
            </section>

            <section id="transportation">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-[#d7007f] pb-3">
                Getting Around Krabi
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Plane className="w-6 h-6 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">From Airport</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="font-semibold mr-2 min-w-[80px]">Taxi:</span>
                      <span>600-800 THB to Ao Nang (30-40 min)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2 min-w-[80px]">Shuttle:</span>
                      <span>150-200 THB shared minivan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2 min-w-[80px]">Car Rental:</span>
                      <span>800-1,500 THB per day</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Car className="w-6 h-6 text-green-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Around Ao Nang</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="font-semibold mr-2 min-w-[80px]">Walking:</span>
                      <span>Beach and town easily walkable</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2 min-w-[80px]">Songthaew:</span>
                      <span>30-50 THB (local routes)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2 min-w-[80px]">Motorbike:</span>
                      <span>200-300 THB per day rental</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-pink-100 p-3 rounded-lg">
                      <Anchor className="w-6 h-6 text-[#d7007f]" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">To Railay</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="font-semibold mr-2 min-w-[80px]">Longtail:</span>
                      <span>100-150 THB from Ao Nang (10 min)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2 min-w-[80px]">Schedule:</span>
                      <span>8 AM - 6 PM daily</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2 min-w-[80px]">Note:</span>
                      <span>No roads - boat only access</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <Map className="w-6 h-6 text-orange-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Island Tours</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="font-semibold mr-2 min-w-[80px]">Booking:</span>
                      <span>Hotels or tour operators</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2 min-w-[80px]">Pickup:</span>
                      <span>Most hotels offer free pickup</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2 min-w-[80px]">Private:</span>
                      <span>Longtail charters available</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg border-l-4 border-yellow-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Transportation Tips</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>Download Grab app for reliable taxi service with fixed prices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>Longtail boats to Railay stop around 6 PM - plan your return accordingly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>Negotiate prices before getting in tuk-tuks or longtail boats</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>Renting a motorbike requires an international driving permit</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="itineraries">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-[#d7007f] pb-3">
                Suggested Itineraries
              </h2>

              <p className="text-gray-700 mb-8 text-lg">
                Here are sample itineraries to help you plan your Krabi adventure based on your available time.
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg overflow-hidden shadow-md">
                  <div className="bg-[#d7007f] text-white p-4">
                    <h3 className="text-xl font-semibold flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      3 Days in Krabi
                    </h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-[#d7007f] text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <span className="font-semibold text-[#d7007f]">Arrive in Krabi</span>
                        <p className="text-gray-700 text-sm">Settle in Ao Nang, explore beach area, watch sunset</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-[#d7007f] text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <span className="font-semibold text-[#d7007f]">4 Islands Tour or Hong Island Tour</span>
                        <p className="text-gray-700 text-sm">Full-day island hopping, snorkeling, beach time</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-[#d7007f] text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <span className="font-semibold text-[#d7007f]">Railay Beach</span>
                        <p className="text-gray-700 text-sm">Explore stunning beaches, rock climbing or relaxing</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg overflow-hidden shadow-md">
                  <div className="bg-orange-600 text-white p-4">
                    <h3 className="text-xl font-semibold flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      5 Days in Krabi
                    </h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <span className="font-semibold text-orange-900">Arrive & Ao Nang Beach</span>
                        <p className="text-gray-700 text-sm">Get settled, relax at beach, sunset views</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <span className="font-semibold text-orange-900">Railay Beach Full Day</span>
                        <p className="text-gray-700 text-sm">Explore all 4 beaches, Phra Nang Cave, rock climbing</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <span className="font-semibold text-orange-900">Island Hopping</span>
                        <p className="text-gray-700 text-sm">4 Islands Tour or Hong Island kayaking adventure</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">
                        4
                      </div>
                      <div>
                        <span className="font-semibold text-orange-900">Phi Phi Islands Day Trip</span>
                        <p className="text-gray-700 text-sm">Maya Bay, snorkeling, Viking Cave, viewpoints</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">
                        5
                      </div>
                      <div>
                        <span className="font-semibold text-orange-900">Nature Day</span>
                        <p className="text-gray-700 text-sm">Tiger Cave Temple morning, Emerald Pool & Hot Springs afternoon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <a
                  href="/itineraries"
                  className="text-[#d7007f] hover:text-[#d7007f] font-medium inline-flex items-center"
                >
                  View Complete Krabi Itineraries
                </a>
              </div>
            </section>

            <section id="practical">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-[#d7007f] pb-3">
                Practical Information
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Best Time to Visit</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-[#d7007f]">Nov-Feb (Peak):</span>
                      <p className="text-gray-700">Perfect weather, dry, busy, highest prices</p>
                    </div>
                    <div>
                      <span className="font-semibold text-orange-700">Mar-Apr (Hot):</span>
                      <p className="text-gray-700">Very hot but less crowded, good deals</p>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-700">May-Oct (Rainy):</span>
                      <p className="text-gray-700">Cheapest, short rain showers, quieter</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Budget Guide</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-green-700">Budget ($40-60/day):</span>
                      <p className="text-gray-700">Hostels, street food, public transport, free beaches</p>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-700">Mid-Range ($80-150/day):</span>
                      <p className="text-gray-700">3-star hotels, restaurants, tours, activities</p>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-700">Luxury ($200+/day):</span>
                      <p className="text-gray-700">5-star resorts, fine dining, private tours</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Important Tips</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2">-</span>
                      <span>Book Railay accommodation early (limited options)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">-</span>
                      <span>Longtail boats stop running around 6 PM</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">-</span>
                      <span>Bring cash - many places don't accept cards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">-</span>
                      <span>Rock climbing gear rental available in Railay</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Safety & Health</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2">-</span>
                      <span>Watch for jellyfish during rainy season</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">-</span>
                      <span>Wear reef-safe sunscreen near coral</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">-</span>
                      <span>Be cautious on motorbikes - roads can be tricky</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">-</span>
                      <span>Hospital in Krabi Town, clinic in Ao Nang</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              <div className="bg-gradient-to-br from-[#d7007f] to-[#d7007f] text-white p-6 rounded-lg shadow-xl">
                <h3 className="text-xl font-semibold mb-4">Quick Guide</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold">Airport Code:</span>
                    <p>KBV - Krabi International</p>
                  </div>
                  <div>
                    <span className="font-semibold">Currency:</span>
                    <p>Thai Baht (THB)</p>
                  </div>
                  <div>
                    <span className="font-semibold">Language:</span>
                    <p>Thai (English in tourist areas)</p>
                  </div>
                  <div>
                    <span className="font-semibold">Time Zone:</span>
                    <p>GMT+7</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Must-See Highlights</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#d7007f] rounded-full mr-2"></span>
                    Railay Beach
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#d7007f] rounded-full mr-2"></span>
                    Phra Nang Cave Beach
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#d7007f] rounded-full mr-2"></span>
                    Phi Phi Islands
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#d7007f] rounded-full mr-2"></span>
                    Tiger Cave Temple
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#d7007f] rounded-full mr-2"></span>
                    Hong Islands
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#d7007f] rounded-full mr-2"></span>
                    Rock Climbing
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Insider Tip</h3>
                <p className="text-sm text-gray-700">
                  Visit Railay during the week and stay overnight to experience the peaceful morning atmosphere
                  before day-trippers arrive. The sunrise views from Railay Viewpoint are spectacular!
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Getting There</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div>
                    <span className="font-semibold">From Bangkok:</span>
                    <p>1.5-hour flight (daily)</p>
                  </div>
                  <div>
                    <span className="font-semibold">From Phuket:</span>
                    <p>3-hour bus or ferry</p>
                  </div>
                  <div>
                    <span className="font-semibold">From Koh Samui:</span>
                    <p>Ferry + bus combo (5-6 hours)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-[#d7007f] to-[#ff1493] rounded-2xl p-8 md:p-12 text-white shadow-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-light mb-4 uppercase tracking-[2px]">
              Planning Your Krabi Trip?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Chat with our Thailand travel experts for personalized recommendations,
              insider tips, and help planning your perfect Krabi adventure!
            </p>
            <button
              onClick={() => {
                const chatWidget = document.querySelector('[data-chat-widget]');
                if (chatWidget) {
                  (chatWidget as HTMLElement).click();
                }
              }}
              className="inline-flex items-center px-8 py-4 bg-white text-[#d7007f] rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Ask Our Experts Now
            </button>
            <p className="mt-4 text-sm text-white/75">
              Get answers to all your Krabi questions - accommodation, tours, transportation, and more
            </p>
          </div>
        </div>

        <div className="mt-16">
          <RelatedGuides
            guides={[
              {
                title: 'Phuket to Krabi: How to Get There',
                description: 'Ferry, bus, and flight options between destinations',
                link: '/travel-planning',
                image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
              },
              {
                title: 'Best Time to Visit Krabi',
                description: 'Weather, crowds, prices by month',
                link: '/best-time-to-visit',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80',
              },
              {
                title: 'Koh Phi Phi Day Trip from Krabi',
                description: 'Complete guide to visiting Phi Phi Islands',
                link: '/destinations',
                image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=600&q=80',
              },
              {
                title: 'Where to Stay in Krabi',
                description: 'Best areas, hotels, and accommodation guide',
                link: '/accommodation',
                image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
              },
            ]}
          />
        </div>

        <div className="mt-16">
          <YouMayAlsoLike
            articles={[
              {
                title: 'Phuket vs Krabi: Which is Better?',
                excerpt: 'Compare these two popular destinations',
                image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80',
                link: '/destinations/phuket',
                category: 'Destinations',
              },
              {
                title: 'Koh Lanta Travel Guide',
                excerpt: 'Laid-back island near Krabi',
                image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=600&q=80',
                link: '/destinations',
                category: 'Destinations',
              },
              {
                title: 'Best Islands in Southern Thailand',
                excerpt: 'Complete island-hopping guide',
                image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80',
                link: '/destinations',
                category: 'Destinations',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
