import { Link } from 'react-router-dom';
import { MapPin, Calendar, DollarSign, Anchor, Compass, Camera, Users, Waves, AlertCircle, MessageCircle } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import RelatedGuides from '../components/RelatedGuides';
import YouMayAlsoLike from '../components/YouMayAlsoLike';
import { usePageMeta } from '../hooks/usePageMeta';

export default function KohPhiPhiDestinationPage() {
  usePageMeta(
    'Koh Phi Phi Travel Guide 2026 - Beaches, Maya Bay & Things to Do | ThailandWiki',
    'Complete Koh Phi Phi travel guide: Maya Bay, best beaches, where to stay, party scene, diving, and practical tips for Thailand\'s most beautiful island.'
  );

  const quickNavItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'Beaches & Bays', href: '#beaches' },
    { label: 'Things to Do', href: '#things-to-do' },
    { label: 'Getting There', href: '#getting-there' },
    { label: 'How Long to Stay', href: '#how-long' },
    { label: 'Where to Stay', href: '#accommodation' },
    { label: 'Nightlife', href: '#nightlife' },
    { label: 'Practical Info', href: '#practical' },
  ];

  const beaches = [
    {
      name: 'Maya Bay',
      location: 'Koh Phi Phi Leh',
      image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80',
      description: 'The famous beach from "The Beach" movie, surrounded by towering limestone cliffs',
      features: ['Stunning natural beauty', 'Limited daily visitors', 'No swimming allowed', 'Tour access only'],
      bestFor: 'Photography, sightseeing, bucket list experience',
      access: 'Boat tour only (closed 2018-2022, reopened with restrictions)',
      isHighlight: true,
    },
    {
      name: 'Long Beach',
      location: 'Koh Phi Phi Don',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200&q=80',
      description: 'The best swimming beach on the main island with soft sand and clear water',
      features: ['Best for swimming', 'Quieter atmosphere', 'Beach resorts', 'Sunset views'],
      bestFor: 'Relaxation, swimming, avoiding crowds',
      access: '15-min boat from Tonsai or 30-min jungle trail',
      isHighlight: false,
    },
    {
      name: 'Loh Dalum Bay',
      location: 'Koh Phi Phi Don',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
      description: 'The party beach with beach bars, fire shows, and bioluminescent plankton',
      features: ['Beach parties', 'Fire shows nightly', 'Bioluminescent plankton', 'Beach bars'],
      bestFor: 'Nightlife, parties, social atmosphere',
      access: 'Short walk from Tonsai village',
      isHighlight: false,
    },
    {
      name: 'Monkey Beach',
      location: 'Koh Phi Phi Don',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
      description: 'Small beach inhabited by wild monkeys, popular stop on boat tours',
      features: ['Wild monkeys', 'Small beach', 'Snorkeling spot', 'Photo opportunity'],
      bestFor: 'Wildlife viewing, boat tour stop',
      access: 'Boat tour or kayak from Tonsai',
      isHighlight: false,
    },
    {
      name: 'Bamboo Island',
      location: 'Near Phi Phi',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200&q=80',
      description: 'Pristine small island with white sand beach and excellent snorkeling',
      features: ['Crystal clear water', 'Excellent snorkeling', 'White sand beach', 'No development'],
      bestFor: 'Snorkeling, pristine beach, day trips',
      access: 'Included in most boat tours',
      isHighlight: false,
    },
  ];

  const activities = [
    {
      icon: Camera,
      title: 'Viewpoint Hike',
      description: 'Iconic Phi Phi viewpoint with panoramic views of both bays',
      price: 'Small entrance fee (20-30 THB)',
      details: [
        '186 meters high - 20-30 min hike',
        'Panoramic views of Tonsai and Loh Dalum',
        'Best at sunrise (6 AM) or sunset (6 PM)',
        'Steep stairs - bring water and good shoes',
        'Worth every step for the photos!',
      ],
    },
    {
      icon: Waves,
      title: 'Snorkeling & Diving',
      description: 'World-class underwater experiences with sharks and vibrant reefs',
      price: 'Snorkeling from 800 THB, Diving from 3,000 THB',
      details: [
        'Shark Point (bamboo & leopard sharks)',
        'Hin Daeng & Hin Muang (advanced dive sites)',
        'Bida Nok and Bida Nai (colorful reefs)',
        'Half-day and full-day snorkeling tours',
        'PADI certification courses available',
      ],
    },
    {
      icon: Anchor,
      title: 'Boat Tours',
      description: 'Island hopping around Phi Phi archipelago',
      price: 'From 1,200 THB per person',
      details: [
        '6-island tour (most popular)',
        'Maya Bay early morning tours',
        'Sunset cruise with dinner',
        'Private longtail boat rental (2,000-3,000 THB)',
        'Full-day vs half-day options',
      ],
    },
    {
      icon: Users,
      title: 'Nightlife & Parties',
      description: 'Famous beach parties, fire shows, and reggae bars',
      price: 'Free entry, drinks 150-300 THB',
      details: [
        'Fire shows nightly on Loh Dalum',
        'Beach bars with DJs and dancing',
        'Reggae bars in Tonsai village',
        'Bioluminescent plankton swimming',
        'Party until dawn atmosphere',
      ],
    },
  ];

  const accommodationAreas = [
    {
      name: 'Tonsai Village',
      subtitle: 'Main Area',
      description: 'The heart of Phi Phi with hotels, hostels, restaurants, and nightlife all within walking distance',
      bestFor: 'First-timers, party scene, convenience',
      priceRange: '$20-200/night',
      highlights: [
        'Walking distance to everything',
        'Widest range of accommodation (hostels to hotels)',
        'Restaurants, shops, and nightlife',
        'Can be noisy at night',
        'Most convenient for boat tours',
      ],
      icon: MapPin,
    },
    {
      name: 'Long Beach',
      subtitle: 'Quieter Option',
      description: 'More relaxed beach area away from the main village party scene',
      bestFor: 'Relaxation, families, couples, avoiding crowds',
      priceRange: '$30-150/night',
      highlights: [
        'Peaceful atmosphere',
        'Best swimming beach on the island',
        'Beach resorts and bungalows',
        'Need boat taxi (100 THB) or 30-min hike to village',
        'Limited restaurants',
      ],
      icon: Compass,
    },
    {
      name: 'Laem Tong Beach',
      subtitle: 'Secluded Luxury',
      description: 'Upscale area in the north with high-end resorts and pristine beaches',
      bestFor: 'Luxury seekers, honeymoons, escaping crowds',
      priceRange: '$100-400/night',
      highlights: [
        'Luxury resorts only',
        'Very quiet and peaceful',
        'Beautiful private beaches',
        'Far from main action and nightlife',
        'Resort restaurants (limited outside options)',
      ],
      icon: Camera,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="relative h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=2000&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D2D2D]/70 via-[#2D2D2D]/50 to-[#2D2D2D]/80"></div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4 sm:px-6 lg:px-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-4 text-center uppercase tracking-[2px]">
            Koh Phi Phi Travel Guide
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-6 text-center font-light text-gray-200">
            Thailand's Most Beautiful Island
          </p>
          <div className="flex items-center space-x-4 text-sm sm:text-base text-gray-300">
            <span>678 Articles</span>
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
            { label: 'Koh Phi Phi', path: '/destinations/koh-phi-phi' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-sm p-4 mb-8 sticky top-20 z-40">
          <div className="flex flex-wrap gap-3 justify-center">
            {quickNavItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="px-4 py-2 text-sm text-gray-700 hover:text-[#D91680] hover:bg-pink-50 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            <section id="overview">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-[#D91680] pb-3">
                Koh Phi Phi at a Glance
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
                <p>
                  Koh Phi Phi is Thailand's most iconic island paradise, famous for Maya Bay (from "The Beach" movie),
                  dramatic limestone cliffs, crystal-clear waters, and vibrant nightlife. Despite the 2004 tsunami and
                  mass tourism, Phi Phi remains stunning with no cars, beautiful beaches, and incredible snorkeling.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-[#D91680] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Best For</h3>
                      <p className="text-sm text-gray-700">Beach lovers, party-goers, snorkelers, photographers</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-6 h-6 text-orange-700 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Best Time</h3>
                      <p className="text-sm text-gray-700">November-April (peak), May-October (rainy but cheaper)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Anchor className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Recommended Stay</h3>
                      <p className="text-sm text-gray-700">2-3 days (day trip possible from Phuket/Krabi)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <DollarSign className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Daily Budget</h3>
                      <p className="text-sm text-gray-700">$50-250+ (island prices higher than mainland)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Anchor className="w-6 h-6 text-purple-700 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Getting There</h3>
                      <p className="text-sm text-gray-700">Ferry from Phuket (2 hrs) or Krabi (1.5 hrs)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-6 h-6 text-pink-700 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Important Note</h3>
                      <p className="text-sm text-gray-700">No cars or vehicles - walking only!</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="beaches">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-[#D91680] pb-3">
                Beaches & Bays
              </h2>

              <p className="text-gray-700 mb-8 text-lg">
                From the world-famous Maya Bay to hidden coves and pristine beaches, Koh Phi Phi offers some of
                Thailand's most spectacular coastal scenery.
              </p>

              <div className="space-y-8">
                {beaches.map((beach, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    {beach.isHighlight && (
                      <div className="bg-gradient-to-r from-[#D91680] to-[#ff1493] text-white px-4 py-2 text-sm font-semibold">
                        Must-See Highlight
                      </div>
                    )}
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
                        <div className="mb-2">
                          <h3 className="text-2xl font-semibold text-gray-900">{beach.name}</h3>
                          <span className="text-sm text-gray-500">{beach.location}</span>
                        </div>
                        <p className="text-gray-700 mb-4">{beach.description}</p>

                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                          <ul className="grid grid-cols-2 gap-2">
                            {beach.features.map((feature, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-center">
                                <span className="w-1.5 h-1.5 bg-[#D91680] rounded-full mr-2"></span>
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

              <div className="mt-8 bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg border-l-4 border-yellow-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 text-yellow-700" />
                  Maya Bay Important Info
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>Closed 2018-2022 for environmental recovery, now reopened with restrictions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>Limited to 300 visitors per hour, advance booking recommended</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>Swimming not allowed - viewing only from designated areas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>Early morning tours (6-7 AM) offer best experience with fewer crowds</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="things-to-do">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-[#D91680] pb-3">
                Things to Do in Koh Phi Phi
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {activities.map((activity, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="bg-pink-100 p-3 rounded-lg flex-shrink-0">
                        <activity.icon className="w-6 h-6 text-[#D91680]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{activity.title}</h3>
                        <p className="text-gray-700 mb-3">{activity.description}</p>

                        <ul className="space-y-1 mb-3">
                          {activity.details.map((detail, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <span className="w-1.5 h-1.5 bg-[#D91680] rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>

                        <p className="text-sm font-semibold text-[#D91680]">{activity.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="getting-there">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-[#D91680] pb-3">
                Getting to Koh Phi Phi
              </h2>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg mb-8 border-l-4 border-blue-600">
                <div className="flex items-start space-x-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
                  <p className="text-lg font-semibold text-gray-900">
                    No airport on Koh Phi Phi - ferry access only!
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-pink-100 to-[#D91680] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Anchor className="w-8 h-8 text-[#D91680]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">From Phuket</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p className="font-semibold text-[#D91680]">Ferry: 2 hours</p>
                    <p>Price: $15-25 (450-750 THB)</p>
                    <p>Multiple daily departures</p>
                    <p className="text-xs text-gray-500 mt-3">Most popular route for international arrivals</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Anchor className="w-8 h-8 text-orange-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">From Krabi</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p className="font-semibold text-orange-700">Ferry: 1.5 hours</p>
                    <p>Price: $12-20 (350-600 THB)</p>
                    <p>Frequent departures</p>
                    <p className="text-xs text-gray-500 mt-3">Closest mainland departure point</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Anchor className="w-8 h-8 text-purple-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">From Koh Lanta</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p className="font-semibold text-purple-700">Ferry: 1 hour</p>
                    <p>Price: $10-15 (300-450 THB)</p>
                    <p>Seasonal service (Nov-Apr)</p>
                    <p className="text-xs text-gray-500 mt-3">Great for island hopping</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Booking Tips</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>Book ferries online in advance during peak season (Dec-Feb)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>Morning ferries (8:30-10:30 AM) are less crowded</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>Ferries can be cancelled in rough weather (May-October)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>Pack light luggage - you'll carry it from the pier</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="how-long">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-[#D91680] pb-3">
                How Long to Stay in Koh Phi Phi
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-blue-600 mb-2">1 Day</div>
                    <p className="text-sm text-gray-600 uppercase tracking-wide">Day Trip</p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Verdict:</span> Possible but very rushed
                    </p>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-2">What You Can Do:</p>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li className="flex items-start">
                          <span className="mr-2">-</span>
                          <span>Quick Maya Bay visit</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">-</span>
                          <span>Snorkeling stop</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">-</span>
                          <span>Beach time</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-2">What You'll Miss:</p>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li className="flex items-start">
                          <span className="mr-2">x</span>
                          <span>Nightlife and parties</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">x</span>
                          <span>Viewpoint sunrise/sunset</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">x</span>
                          <span>Relaxed exploration</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg shadow-lg border-t-4 border-[#D91680] transform md:scale-105">
                  <div className="text-center mb-4">
                    <div className="inline-block bg-[#D91680] text-white px-3 py-1 rounded-full text-xs font-semibold mb-2">
                      RECOMMENDED
                    </div>
                    <div className="text-3xl font-bold text-[#D91680] mb-2">2-3 Days</div>
                    <p className="text-sm text-gray-700 uppercase tracking-wide">Perfect Stay</p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Verdict:</span> Ideal for full experience
                    </p>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-2">What You Can Do:</p>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="mr-2">+</span>
                          <span>Maya Bay & boat tours</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">+</span>
                          <span>Viewpoint hike</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">+</span>
                          <span>Beach parties & nightlife</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">+</span>
                          <span>Diving & snorkeling</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">+</span>
                          <span>Relaxation time</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-gray-400">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-gray-600 mb-2">4+ Days</div>
                    <p className="text-sm text-gray-600 uppercase tracking-wide">Extended Stay</p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Verdict:</span> Can feel small/repetitive
                    </p>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-2">Consider If:</p>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li className="flex items-start">
                          <span className="mr-2">-</span>
                          <span>Getting dive certified</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">-</span>
                          <span>Meeting other travelers</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">-</span>
                          <span>Total relaxation mode</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded text-xs text-gray-700 mt-4">
                      <span className="font-semibold">Tip:</span> After 3-4 days, consider moving to Krabi or Phuket for variety
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="accommodation">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-[#D91680] pb-3">
                Where to Stay in Koh Phi Phi
              </h2>

              <p className="text-gray-700 mb-8 text-lg">
                Phi Phi has limited accommodation compared to other destinations. No cars means walking everywhere.
                Book ahead during peak season (December-February) as hotels fill up quickly.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {accommodationAreas.map((area, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
                    <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 border-b border-pink-200">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="bg-[#D91680] p-2 rounded-lg">
                          <area.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{area.name}</h3>
                          <span className="text-sm text-[#D91680] font-medium">{area.subtitle}</span>
                        </div>
                      </div>
                      <span className="text-[#D91680] font-semibold text-sm">{area.priceRange}</span>
                    </div>

                    <div className="p-6">
                      <p className="text-gray-700 mb-4 text-sm">{area.description}</p>

                      <ul className="space-y-2">
                        {area.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="w-1.5 h-1.5 bg-[#D91680] rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <p className="text-sm text-gray-700 border-t border-gray-200 pt-4 mt-4">
                        <span className="font-semibold text-gray-900">Best For:</span> {area.bestFor}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="nightlife">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-[#D91680] pb-3">
                Nightlife & Party Scene
              </h2>

              <p className="text-gray-700 mb-6 text-lg">
                Koh Phi Phi is famous for its wild party scene, with beach parties, fire shows, and bars open until dawn.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Beach Parties</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">Loh Dalum:</span>
                      <span>Main party beach with multiple bars</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">Fire Shows:</span>
                      <span>Nightly performances around 10 PM</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">Swimming:</span>
                      <span>Bioluminescent plankton at night</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Bars</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">Slinky Bar:</span>
                      <span>Tonsai's famous party hub</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">Ibiza Pool Bar:</span>
                      <span>Pool tables and reggae music</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">Carlito's:</span>
                      <span>Live music and cocktails</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 text-red-700" />
                  Safety Tips
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>Watch your drinks and belongings during beach parties</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>Be careful swimming at night - strong currents can be dangerous</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>Avoid participating in fire shows if you've been drinking</span>
                  </li>
                </ul>
              </div>
            </section>


            <section id="practical">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-[#D91680] pb-3">
                Practical Information
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Getting There</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-[#D91680]">From Phuket:</span>
                      <p className="text-gray-700">Ferry 2 hours (400-600 THB)</p>
                    </div>
                    <div>
                      <span className="font-semibold text-orange-700">From Krabi:</span>
                      <p className="text-gray-700">Ferry 1.5 hours (350-500 THB)</p>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-700">Multiple Departures:</span>
                      <p className="text-gray-700">Usually 8:30 AM, 10:30 AM, 1:30 PM, 3:30 PM</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Important Tips</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2">-</span>
                      <span>No cars or roads - everything is walking distance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">-</span>
                      <span>Bring cash - limited ATMs with high fees</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">-</span>
                      <span>Book accommodation in advance during peak season</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">-</span>
                      <span>Pack light - you'll carry your luggage from pier</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Best Time to Visit</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-[#D91680]">Nov-Feb (Peak):</span>
                      <p className="text-gray-700">Perfect weather, very busy, highest prices</p>
                    </div>
                    <div>
                      <span className="font-semibold text-orange-700">Mar-Apr (Hot):</span>
                      <p className="text-gray-700">Very hot, fewer crowds, good deals</p>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-700">May-Oct (Rainy):</span>
                      <p className="text-gray-700">Cheapest, some closures, rough seas</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Budget Guide</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-green-700">Budget ($50-80/day):</span>
                      <p className="text-gray-700">Hostel, street food, group tours</p>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-700">Mid-Range ($100-180/day):</span>
                      <p className="text-gray-700">Hotel, restaurants, activities</p>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-700">Luxury ($250+/day):</span>
                      <p className="text-gray-700">Beachfront resort, fine dining, private tours</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              <div className="bg-gradient-to-br from-[#D91680] to-[#D91680] text-white p-6 rounded-lg shadow-xl">
                <h3 className="text-xl font-semibold mb-4">Quick Guide</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold">Islands:</span>
                    <p>Phi Phi Don (main), Phi Phi Leh (Maya Bay)</p>
                  </div>
                  <div>
                    <span className="font-semibold">Currency:</span>
                    <p>Thai Baht (THB)</p>
                  </div>
                  <div>
                    <span className="font-semibold">Language:</span>
                    <p>Thai (English widely spoken)</p>
                  </div>
                  <div>
                    <span className="font-semibold">Transport:</span>
                    <p>Walking only - no vehicles!</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Must-Do Experiences</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#D91680] rounded-full mr-2"></span>
                    Maya Bay visit
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#D91680] rounded-full mr-2"></span>
                    Viewpoint sunrise/sunset
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#D91680] rounded-full mr-2"></span>
                    Beach party at Loh Dalum
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#D91680] rounded-full mr-2"></span>
                    Snorkeling at Bamboo Island
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#D91680] rounded-full mr-2"></span>
                    Fire show experience
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#D91680] rounded-full mr-2"></span>
                    Diving at Shark Point
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Insider Tip</h3>
                <p className="text-sm text-gray-700">
                  Book Maya Bay tours for 6-7 AM departure to avoid the crowds. You'll have the bay almost to
                  yourself for 30-45 minutes before the tour boats arrive!
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Getting Around</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div>
                    <span className="font-semibold">Main Area:</span>
                    <p>Walk everywhere in 10-15 min</p>
                  </div>
                  <div>
                    <span className="font-semibold">Long Beach:</span>
                    <p>Boat taxi (100 THB) or hike</p>
                  </div>
                  <div>
                    <span className="font-semibold">Boat Tours:</span>
                    <p>Book from Tonsai pier</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-[#D91680] to-[#ff1493] rounded-2xl p-8 md:p-12 text-white shadow-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-light mb-4 uppercase tracking-[2px]">
              Planning Your Phi Phi Trip?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Chat with our Thailand travel experts for personalized recommendations on tours, accommodation,
              and the best way to experience Koh Phi Phi!
            </p>
            <button
              onClick={() => {
                const chatWidget = document.querySelector('[data-chat-widget]');
                if (chatWidget) {
                  (chatWidget as HTMLElement).click();
                }
              }}
              className="inline-flex items-center px-8 py-4 bg-white text-[#D91680] rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Ask Our Experts Now
            </button>
            <p className="mt-4 text-sm text-white/75">
              Get answers about Maya Bay tours, best beaches, nightlife, and more
            </p>
          </div>
        </div>

        <div className="mt-16">
          <RelatedGuides
            guides={[
              {
                title: 'Phuket to Koh Phi Phi Ferry Guide',
                description: 'Schedule, prices, and booking tips',
                link: '/travel-planning',
                image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
              },
              {
                title: 'Krabi to Koh Phi Phi: How to Get There',
                description: 'Ferry times and transportation options',
                link: '/travel-planning',
                image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=600&q=80',
              },
              {
                title: 'Maya Bay: Complete Visitor Guide',
                description: 'New rules, best times, and what to expect',
                link: '/things-to-do',
                image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=600&q=80',
              },
              {
                title: 'Best Diving in Koh Phi Phi',
                description: 'Top dive sites, courses, and operators',
                link: '/things-to-do',
                image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=600&q=80',
              },
            ]}
          />
        </div>

        <div className="mt-16">
          <YouMayAlsoLike
            articles={[
              {
                title: 'Krabi Travel Guide',
                excerpt: 'Limestone cliffs and island paradise',
                image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=600&q=80',
                link: '/destinations/krabi',
                category: 'Destinations',
              },
              {
                title: 'Phuket Travel Guide',
                excerpt: 'Thailand\'s largest island destination',
                image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80',
                link: '/destinations/phuket',
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
