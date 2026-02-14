import { Waves, MapPin, Anchor, Calendar, DollarSign, Fish, AlertCircle, Camera, Compass, Ship, CheckCircle2, X, ArrowRight, Clock, Users, Heart } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import RelatedGuides from '../components/RelatedGuides';
import YouMayAlsoLike from '../components/YouMayAlsoLike';
import { usePageMeta } from '../hooks/usePageMeta';

export function DivingSnorkelingPage() {
  usePageMeta({
    title: 'Diving & Snorkeling in Thailand - Complete 2026 Guide',
    description:
      'Complete guide to diving and snorkeling in Thailand. Best dive sites, PADI courses, costs, and top destinations including Koh Tao, Similan Islands, and more.',
  });

  const quickNavItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'Best Diving Destinations', href: '#diving-destinations' },
    { label: 'Best Snorkeling Spots', href: '#snorkeling' },
    { label: 'PADI Certification', href: '#padi' },
    { label: 'Marine Life', href: '#marine-life' },
    { label: 'When to Go', href: '#when-to-go' },
    { label: 'Safety', href: '#safety' },
    { label: 'Costs', href: '#costs' },
    { label: 'Diving vs Snorkeling', href: '#diving-vs-snorkeling' },
  ];

  const divingDestinations = [
    {
      name: 'Koh Tao',
      location: 'Gulf of Thailand',
      bestFor: 'Learning to dive, affordable PADI courses',
      image: 'https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=1200',
      season: 'Year-round (best Feb-Oct)',
      visibility: '10-30 meters',
      difficulty: 'Beginner to Intermediate',
      highlights: [
        'Cheapest PADI Open Water in the world ($250-350)',
        '25+ dive sites around small island',
        'Gentle currents, perfect for beginners',
        'Turtles, reef sharks, barracuda',
        'Open Water: $300-350 (3-4 days)',
        'Advanced: $250-300 (2 days)',
      ],
      diveSites: [
        { name: 'Chumphon Pinnacle', feature: 'Whale sharks (seasonal)' },
        { name: 'Sail Rock', feature: 'Best dive site in Gulf' },
        { name: 'Shark Bay', feature: 'Blacktip reef sharks' },
        { name: 'Japanese Gardens', feature: 'Colorful corals' },
      ],
    },
    {
      name: 'Similan Islands',
      location: 'Andaman Sea',
      bestFor: 'Advanced divers, liveaboards',
      image: 'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1200',
      season: 'November-April only (closed May-Oct)',
      visibility: '30-40 meters',
      difficulty: 'Intermediate to Advanced',
      highlights: [
        "Thailand's premier dive destination",
        'World-class underwater visibility',
        'Diverse marine life (manta rays, whale sharks)',
        'Dramatic underwater landscapes',
        'Day trip: $100-150',
        'Liveaboard: $400-800 (3-4 days)',
      ],
      diveSites: [
        { name: 'Richelieu Rock', feature: 'Best in Thailand - manta rays, whale sharks' },
        { name: 'Elephant Head Rock', feature: 'Swim-throughs, caves' },
        { name: 'Christmas Point', feature: 'Dramatic topography' },
      ],
    },
    {
      name: 'Koh Phi Phi',
      location: 'Andaman Sea',
      bestFor: 'Combining diving with island experience',
      image: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=1200',
      season: 'November-April best',
      visibility: '15-25 meters',
      difficulty: 'Beginner to Intermediate',
      highlights: [
        'Fun dives and courses available',
        'Leopard sharks, bamboo sharks',
        'Accessible dive sites',
        'Party atmosphere topside',
        'Day trips from nearby islands',
      ],
      diveSites: [
        { name: 'Shark Point', feature: 'Leopard sharks' },
        { name: 'King Cruiser Wreck', feature: '30m wreck dive' },
        { name: 'Bida Nok & Bida Nai', feature: 'Colorful reefs' },
      ],
    },
    {
      name: 'Phuket',
      location: 'Andaman Sea',
      bestFor: 'Day trips, variety of sites',
      image: 'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1200',
      season: 'November-April best',
      visibility: '15-30 meters',
      difficulty: 'All levels',
      highlights: [
        'Gateway to Similan Islands',
        'Many dive shops and schools',
        'Local dive sites + day trips',
        'Wreck dives available',
        'PADI courses: $350-450',
      ],
      diveSites: [
        { name: 'Shark Point', feature: 'Leopard sharks, soft corals' },
        { name: 'Racha Yai', feature: 'Clear water, easy diving' },
        { name: 'Racha Noi', feature: 'Manta rays (seasonal)' },
      ],
    },
  ];

  const snorkelingSpots = [
    {
      name: 'Koh Lipe',
      region: 'Southern Andaman Sea',
      description: 'Crystal-clear water with colorful reefs right off the beach',
      bestBeaches: ['Sunrise Beach', 'Sunset Beach', 'Sanom Beach'],
      marineLife: 'Tropical fish, corals, occasional turtles',
      access: 'Snorkel from beach or boat trips',
      nickname: '"Maldives of Thailand"',
    },
    {
      name: 'Koh Tao',
      region: 'Gulf of Thailand',
      description: 'Easy beach access to great snorkeling spots',
      bestBeaches: ['Shark Bay', 'Mango Bay', 'Japanese Gardens'],
      marineLife: 'Blacktip sharks, colorful fish, corals',
      access: 'Walk from shore or kayak',
      nickname: 'Snorkel with blacktip reef sharks',
    },
    {
      name: 'Koh Phi Phi',
      region: 'Andaman Sea',
      description: 'Stunning locations but can be crowded',
      bestBeaches: ['Maya Bay', 'Bamboo Island', 'Monkey Beach'],
      marineLife: 'Diverse tropical fish, corals',
      access: 'Boat tours (half-day or full-day)',
      nickname: 'Most popular boat tour destination',
    },
    {
      name: 'Similan Islands',
      region: 'Andaman Sea (National Park)',
      description: 'Best snorkeling in Thailand with pristine reefs',
      bestBeaches: ['Islands 4, 8, and 9'],
      marineLife: 'Rich coral gardens, tropical fish, turtles',
      access: 'Day trip from Khao Lak ($100-150)',
      nickname: 'Pristine national park waters',
    },
    {
      name: 'Koh Rok',
      region: 'Near Koh Lanta',
      description: 'Incredible visibility and pristine national park',
      bestBeaches: ['East and West bays'],
      marineLife: 'Vibrant corals, schools of fish',
      access: 'Day trip from Koh Lanta',
      nickname: 'Hidden gem with amazing clarity',
    },
  ];

  const certificationLevels = [
    {
      level: 'Open Water (Entry Level)',
      duration: '3-4 days',
      cost: '$300-550',
      costBreakdown: {
        'Koh Tao': '$300-400',
        'Koh Lanta': '$350-450',
        'Phuket': '$400-500',
        'Koh Samui': '$450-550',
      },
      certification: 'Dive to 18 meters worldwide',
      description: 'Entry-level certification with worldwide recognition.',
      requirements: 'Age 10+, basic swimming ability',
      includes: 'Theory, pool training, 4 ocean dives, equipment, certification card',
      whatYouLearn: 'Equipment setup, breathing techniques, ear equalizing, buoyancy control, emergency procedures',
    },
    {
      level: 'Advanced Open Water',
      duration: '2 days',
      cost: '$250-350',
      costBreakdown: null,
      certification: 'Dive to 30 meters',
      description: 'Expands skills and depth limit to 30 meters.',
      requirements: 'Open Water certification',
      includes: '5 dives (deep, navigation, 3 electives)',
      whatYouLearn: 'Deep diving, underwater navigation, specialty skills',
    },
    {
      level: 'Rescue Diver',
      duration: '3-4 days',
      cost: '$300-400',
      costBreakdown: null,
      certification: 'Rescue & emergency management',
      description: 'Learn rescue techniques and emergency management.',
      requirements: 'Advanced certification, CPR/First Aid',
      includes: 'Rescue techniques, emergency management, first aid',
      whatYouLearn: 'Problem recognition, rescue procedures, emergency response',
    },
    {
      level: 'Divemaster (Professional)',
      duration: '4-8 weeks',
      cost: '$900-1,500',
      costBreakdown: null,
      certification: 'Work as dive professional',
      description: 'Professional level - assist instructors and lead dives.',
      requirements: 'Rescue Diver + 40 logged dives',
      includes: 'Internship, theory, dive skills, teaching techniques',
      whatYouLearn: 'Leadership skills, dive theory, assisting instructors, leading dives',
    },
  ];

  const certificationLocations = [
    {
      name: 'Koh Tao',
      subtitle: 'Best for Budget',
      cost: '$300-400',
      pros: [
        'Cheapest courses',
        '50+ dive schools',
        'Social atmosphere',
        'Multiple dive sites',
      ],
      bestFor: 'Solo travelers, budget travelers',
      recommendedSchools: 'Ban\'s Diving Resort, Crystal Dive',
    },
    {
      name: 'Koh Lanta',
      subtitle: 'Best for Relaxed Experience',
      cost: '$350-450',
      pros: [
        'Less crowded',
        'Smaller class sizes',
        'Beautiful dive sites',
        'Peaceful atmosphere',
      ],
      bestFor: 'Couples, older travelers',
      recommendedSchools: 'Scubafish, Go Dive Lanta',
    },
    {
      name: 'Phuket',
      subtitle: 'Best for Premium',
      cost: '$400-600',
      pros: [
        'Professional operations',
        'Access to Similan Islands',
        'Modern facilities',
        'Multiple languages',
      ],
      bestFor: 'Higher budget, premium experience',
      recommendedSchools: 'Sea Bees, Dive Asia',
    },
    {
      name: 'Koh Samui',
      subtitle: 'Good All-Rounder',
      cost: '$450-550',
      pros: [
        'Good dive sites',
        'Sail Rock nearby',
        'Less crowded than Koh Tao',
        'Good facilities',
      ],
      bestFor: 'Families, combined holidays',
      recommendedSchools: 'Easy Divers, Samui International Diving',
    },
  ];

  const globalPriceComparison = [
    { country: 'Thailand (Koh Tao)', price: '$300-400', highlight: true },
    { country: 'Thailand (Phuket)', price: '$400-500', highlight: false },
    { country: 'Egypt (Red Sea)', price: '$350-450', highlight: false },
    { country: 'Indonesia (Bali)', price: '$350-500', highlight: false },
    { country: 'Australia', price: '$600-800', highlight: false },
    { country: 'Caribbean', price: '$500-750', highlight: false },
    { country: 'USA', price: '$500-700', highlight: false },
    { country: 'Europe', price: '$600-900', highlight: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-blue-50 to-white">
      <div
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      >
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-5xl sm:text-6xl font-light tracking-[3px] mb-4 uppercase">
            Diving & Snorkeling in Thailand
          </h1>
          <p className="text-xl sm:text-2xl font-light mb-4">Complete Guide to Thailand's Underwater Paradise</p>
          <p className="text-sm opacity-90">Updated February 2026</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumb
          items={[
            { label: 'Travel Planning', path: '/travel-planning' },
            { label: 'Diving & Snorkeling Guide' },
          ]}
        />

        <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-8">
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">On This Page</h3>
              <nav className="space-y-2">
                {quickNavItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block text-sm text-gray-600 hover:text-[#d7007f] transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <main className="lg:col-span-9 space-y-16">
            <section id="overview">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Thailand is one of the world's best diving and snorkeling destinations, with crystal-clear waters,
                  vibrant coral reefs, diverse marine life, and affordable PADI certification courses. From
                  beginner-friendly snorkeling to advanced dive sites, Thailand's underwater world is spectacular.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-lg text-center">
                  <Waves className="w-10 h-10 text-cyan-700 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-cyan-900">50+</div>
                  <div className="text-sm text-gray-700">Dive Sites</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center">
                  <Fish className="w-10 h-10 text-blue-700 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-blue-900">1000+</div>
                  <div className="text-sm text-gray-700">Marine Species</div>
                </div>
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg text-center">
                  <DollarSign className="w-10 h-10 text-[#d7007f] mx-auto mb-3" />
                  <div className="text-2xl font-bold text-[#d7007f]">$300</div>
                  <div className="text-sm text-gray-700">PADI Open Water</div>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-lg text-center">
                  <Calendar className="w-10 h-10 text-emerald-700 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-emerald-900">Year-Round</div>
                  <div className="text-sm text-gray-700">Diving Available</div>
                </div>
              </div>
            </section>

            <section id="diving-destinations">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-[#d7007f] pb-3">
                Best Diving Destinations
              </h2>

              <div className="space-y-8">
                {divingDestinations.map((destination, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-2/5">
                        <img
                          src={destination.image}
                          alt={destination.name}
                          className="w-full h-64 md:h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="md:w-3/5 p-6">
                        <div className="mb-4">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-2xl font-semibold text-gray-900">{destination.name}</h3>
                              <span className="text-sm text-gray-500">{destination.location}</span>
                            </div>
                            <span className="bg-cyan-100 text-cyan-800 text-xs font-semibold px-3 py-1 rounded-full">
                              {destination.difficulty}
                            </span>
                          </div>
                          <p className="text-gray-700 font-medium">{destination.bestFor}</p>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                          <div>
                            <span className="font-semibold text-gray-900 block">Season</span>
                            <span className="text-gray-600">{destination.season}</span>
                          </div>
                          <div>
                            <span className="font-semibold text-gray-900 block">Visibility</span>
                            <span className="text-gray-600">{destination.visibility}</span>
                          </div>
                          <div>
                            <span className="font-semibold text-gray-900 block">Location</span>
                            <span className="text-gray-600">{destination.location}</span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Why It's Great:</h4>
                          <ul className="grid sm:grid-cols-2 gap-2">
                            {destination.highlights.map((highlight, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-start">
                                <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Popular Dive Sites:</h4>
                          <div className="space-y-2">
                            {destination.diveSites.map((site, idx) => (
                              <div key={idx} className="text-sm">
                                <span className="font-semibold text-blue-900">{site.name}</span>
                                <span className="text-gray-700"> - {site.feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="snorkeling">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-[#d7007f] pb-3">
                Best Snorkeling Spots
              </h2>

              <p className="text-gray-700 mb-8 text-lg">
                You don't need to dive deep to experience Thailand's incredible marine life. These snorkeling spots
                offer easy access to colorful reefs and tropical fish.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {snorkelingSpots.map((spot, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{spot.name}</h3>
                        <span className="text-sm text-gray-500">{spot.region}</span>
                      </div>
                      <MapPin className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                    </div>

                    <p className="text-gray-700 text-sm mb-4">{spot.description}</p>

                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-semibold text-gray-900">Best Spots:</span>
                        <div className="text-gray-600 mt-1">{spot.bestBeaches.join(', ')}</div>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Marine Life:</span>
                        <div className="text-gray-600 mt-1">{spot.marineLife}</div>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Access:</span>
                        <div className="text-gray-600 mt-1">{spot.access}</div>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm text-cyan-700 font-medium italic">{spot.nickname}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="padi">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-[#d7007f] pb-3">
                PADI Certification in Thailand
              </h2>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-lg mb-8 border-l-4 border-cyan-600">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 text-cyan-700" />
                  Why Get Certified in Thailand?
                </h3>
                <p className="text-gray-700 mb-4">
                  Thailand offers the world's best value for scuba certification with high-quality instruction and perfect diving conditions.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>
                      <strong>Cheapest PADI courses globally</strong> - Save 30-50% compared to Western countries
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>
                      <strong>High-quality English-speaking instructors</strong> - Multiple languages available
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>
                      <strong>Warm water year-round</strong> - Perfect learning conditions (28-30 degrees Celsius, no wetsuit needed)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>
                      <strong>Beautiful dive sites</strong> - Access to world-class diving right after certification
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mb-8 bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Price Comparison: Open Water Certification</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    {globalPriceComparison.slice(0, 4).map((item, index) => (
                      <div
                        key={index}
                        className={`flex justify-between pb-2 border-b ${
                          item.highlight ? 'border-cyan-400' : 'border-gray-200'
                        }`}
                      >
                        <span className={item.highlight ? 'font-semibold text-cyan-700' : 'text-gray-700'}>
                          {item.country}
                        </span>
                        <span className={item.highlight ? 'font-bold text-cyan-700' : 'font-semibold text-gray-900'}>
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {globalPriceComparison.slice(4).map((item, index) => (
                      <div key={index} className="flex justify-between pb-2 border-b border-gray-200">
                        <span className="text-gray-700">{item.country}</span>
                        <span className="font-semibold text-gray-900">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-cyan-700 font-medium mt-4 italic">
                  Save 30-50% by getting certified in Thailand!
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-6 mt-12">PADI Course Options</h3>

              <div className="space-y-6">
                {certificationLevels.map((cert, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900">{cert.level}</h3>
                        <p className="text-sm text-gray-600 mt-1">{cert.description}</p>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-sm text-gray-500">Duration</div>
                        <div className="text-lg font-semibold text-cyan-700">{cert.duration}</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-4">
                      <div className="space-y-3 text-sm">
                        <div>
                          <span className="font-semibold text-gray-900 block mb-1">Cost</span>
                          <span className="text-gray-700">{cert.cost}</span>
                          {cert.costBreakdown && (
                            <div className="mt-2 space-y-1 text-xs text-gray-600">
                              {Object.entries(cert.costBreakdown).map(([location, price]) => (
                                <div key={location} className="flex justify-between">
                                  <span>{location}:</span>
                                  <span className="font-medium">{price}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900 block mb-1">Requirements</span>
                          <span className="text-gray-700">{cert.requirements}</span>
                        </div>
                      </div>
                      <div className="space-y-3 text-sm">
                        <div>
                          <span className="font-semibold text-gray-900 block mb-1">Certification</span>
                          <span className="text-gray-700">{cert.certification}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900 block mb-1">Includes</span>
                          <span className="text-gray-700">{cert.includes}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900 block mb-1">What You Learn</span>
                          <span className="text-gray-700">{cert.whatYouLearn}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Best Places to Get Certified</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {certificationLocations.map((location, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6">
                      <div className="mb-4">
                        <h4 className="text-xl font-semibold text-gray-900">{location.name}</h4>
                        <p className="text-cyan-700 font-medium text-sm">{location.subtitle}</p>
                        <p className="text-lg font-bold text-gray-900 mt-2">{location.cost}</p>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-700 mb-4">
                        {location.pros.map((pro, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 border-t border-gray-200 space-y-2 text-sm">
                        <div>
                          <span className="font-semibold text-gray-900">Best for:</span>
                          <span className="text-gray-700 ml-2">{location.bestFor}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">Recommended schools:</span>
                          <span className="text-gray-700 ml-2">{location.recommendedSchools}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Certification Timeline (Open Water)</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-start">
                    <span className="font-bold text-blue-700 mr-3 min-w-[60px]">Day 1:</span>
                    <span>Theory (4 hours) + Pool training</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-bold text-blue-700 mr-3 min-w-[60px]">Day 2:</span>
                    <span>More pool training + First 2 ocean dives</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-bold text-blue-700 mr-3 min-w-[60px]">Day 3:</span>
                    <span>Final 2 ocean dives + Exam</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-bold text-blue-700 mr-3 min-w-[60px]">Day 4:</span>
                    <span>Receive temporary certification (plastic card mailed in 4-6 weeks)</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Choosing a Dive School</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>Check reviews on TripAdvisor and Google</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>Ensure small class sizes (4-6 students max per instructor)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>Ask about equipment quality and maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>Verify PADI 5-star certification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>Visit the shop before booking to meet instructors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>Ask about instructor-to-student ratios</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>Check if accommodation packages are available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>Don't just choose the cheapest - safety and quality matter most</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="marine-life" className="mt-16">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-[#d7007f] pb-3">
                Marine Life in Thailand
              </h2>

              <p className="text-gray-700 mb-8 text-lg">
                Thailand's waters are home to an incredible diversity of marine species, from tiny nudibranchs to
                majestic whale sharks. Here's what you can expect to see on your underwater adventures.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Common Marine Life</h3>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/2765872/pexels-photo-2765872.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Tropical reef fish"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg flex items-center">
                      <Fish className="w-5 h-5 mr-2 text-blue-600" />
                      Tropical Fish
                    </h4>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Seen on every dive</strong>
                    </p>
                    <p className="text-sm text-gray-600">
                      Angelfish, Butterflyfish, Parrotfish, Clownfish (Nemo), Triggerfish, Groupers, Snappers
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3046629/pexels-photo-3046629.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Sea turtle swimming"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg flex items-center">
                      <Anchor className="w-5 h-5 mr-2 text-green-600" />
                      Sea Turtles
                    </h4>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Very common</strong>
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      Green sea turtles and Hawksbill turtles
                    </p>
                    <p className="text-xs text-green-700 font-medium">
                      Best spots: Similan Islands, Richelieu Rock
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3046638/pexels-photo-3046638.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Marine life underwater"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">Other Marine Life</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Moray eels</li>
                      <li>Octopus & Cuttlefish</li>
                      <li>Colorful nudibranchs</li>
                      <li>Stingrays & Eagle rays</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-6 mt-12">Special Marine Life</h3>

              <div className="space-y-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-md overflow-hidden">
                  <div className="md:flex">
                    <img
                      src="https://images.pexels.com/photos/2404370/pexels-photo-2404370.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Whale shark"
                      className="w-full md:w-1/3 h-64 object-cover"
                    />
                    <div className="p-6 flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">
                        Whale Sharks (The Holy Grail)
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="mb-2">
                            <span className="font-semibold text-gray-900">When:</span> February-April
                          </p>
                          <p className="mb-2">
                            <span className="font-semibold text-gray-900">Where:</span> Richelieu Rock, Similan Islands
                          </p>
                          <p className="mb-2">
                            <span className="font-semibold text-gray-900">Probability:</span>{' '}
                            <span className="text-cyan-700 font-bold">30-50% during peak season</span>
                          </p>
                        </div>
                        <div>
                          <p className="mb-2">
                            <span className="font-semibold text-gray-900">Size:</span> 4-12 meters long
                          </p>
                          <p className="text-gray-700">
                            Safe to dive with - these gentle giants are filter feeders and completely harmless.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Manta Rays</h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-semibold text-gray-900">When:</span> February-April
                      </p>
                      <p>
                        <span className="font-semibold text-gray-900">Where:</span> Koh Bon, Koh Tachai
                      </p>
                      <p>
                        <span className="font-semibold text-gray-900">Probability:</span>{' '}
                        <span className="text-blue-700 font-bold">20-40%</span>
                      </p>
                      <p>
                        <span className="font-semibold text-gray-900">Wingspan:</span> 3-5 meters
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Leopard Sharks</h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-semibold text-gray-900">When:</span> Year-round
                      </p>
                      <p>
                        <span className="font-semibold text-gray-900">Where:</span> Phi Phi Islands, Koh Lanta
                      </p>
                      <p>
                        <span className="font-semibold text-gray-900">Probability:</span>{' '}
                        <span className="text-green-700 font-bold">70%+</span>
                      </p>
                      <p className="text-gray-700">Docile sharks often resting on sandy bottoms</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Blacktip Reef Sharks</h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-semibold text-gray-900">When:</span> Year-round
                      </p>
                      <p>
                        <span className="font-semibold text-gray-900">Where:</span> Koh Tao, Similans
                      </p>
                      <p>
                        <span className="font-semibold text-gray-900">Probability:</span>{' '}
                        <span className="text-cyan-700 font-bold">40-60%</span>
                      </p>
                      <p className="text-gray-700">Shy and harmless to divers</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Seahorses</h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-semibold text-gray-900">Size:</span> Tiny (5-15cm)
                      </p>
                      <p>
                        <span className="font-semibold text-gray-900">Probability:</span>{' '}
                        <span className="text-amber-700 font-bold">20-30% if guide knows spots</span>
                      </p>
                      <p className="text-gray-700">Hard to spot without an experienced guide</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Macro Life (For Underwater Photographers)</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Nudibranchs</h4>
                    <p>
                      Hundreds of species of colorful sea slugs in incredible patterns and colors. Look closely on
                      coral and rocks.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Seahorses & Pipefish</h4>
                    <p>
                      Tiny pygmy seahorses on gorgonian fans, plus larger seahorses and ornate pipefish hiding in
                      coral.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Cuttlefish & Octopus</h4>
                    <p>Master camouflage artists. Watch them change colors and textures instantly to blend in.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 text-red-700" />
                  Marine Life to Avoid
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Jellyfish</h4>
                    <p className="mb-2">
                      <strong>Season:</strong> March-May (peak season)
                      <br />
                      <strong>Types:</strong> Box jellyfish (rare but dangerous), moon jellyfish (common, mild sting)
                    </p>
                    <p className="text-xs italic">Wear a wetsuit for protection during jellyfish season</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Lionfish</h4>
                    <p className="mb-2">
                      Beautiful but venomous spines. Common on reefs, usually docile but painful if touched.
                    </p>
                    <p className="text-xs italic">Look but don't touch - keep safe distance</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Stonefish</h4>
                    <p className="mb-2">
                      Masters of camouflage with extremely venomous spines. Rare but dangerous if stepped on.
                    </p>
                    <p className="text-xs italic">Watch where you put your hands and feet</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Sea Urchins</h4>
                    <p className="mb-2">
                      Long spines that break off easily. Common on rocks and coral, painful but not dangerous.
                    </p>
                    <p className="text-xs italic">Maintain good buoyancy to avoid contact</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="when-to-go" className="mt-16">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-[#d7007f] pb-3">
                Best Time for Diving
              </h2>

              <p className="text-gray-700 mb-8 text-lg">
                Thailand's two coasts have opposite seasons, meaning there's always great diving somewhere in Thailand year-round!
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Andaman Sea (West Coast)</h3>

              <div className="bg-gradient-to-br from-pink-50 to-cyan-50 rounded-lg shadow-md p-6 mb-6">
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Locations:</strong> Phuket, Krabi, Similan Islands, Koh Lanta, Koh Lipe
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-[#d7007f] mb-3">Best Season: November - April</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#d7007f] rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Calm seas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#d7007f] rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Excellent visibility (20-30+ meters)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#d7007f] rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Warm water (28-30 degrees Celsius)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#d7007f] rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Whale shark season (Feb-Apr)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#d7007f] rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>All dive sites accessible</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Monsoon Season: May - October</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Rough seas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Poor visibility (5-15 meters)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Similan Islands CLOSED (May-October)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Some sites near Phuket still diveable</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#d7007f] text-white p-4 rounded-lg text-sm font-semibold">
                  When to go: November - April only
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-6 mt-10">Gulf of Thailand (East Coast)</h3>

              <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-lg shadow-md p-6 mb-8">
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Locations:</strong> Koh Tao, Koh Samui, Koh Phangan
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">Best Season: February - October</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Calm seas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Good visibility (10-25 meters)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Year-round diving possible</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Rough Season: November - January</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Strong winds</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Choppy seas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Still diveable (not closed)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-700 text-white p-4 rounded-lg text-sm font-semibold">
                  When to go: Feb-Oct best, Nov-Jan okay
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Best Months Overall</h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-md p-5 border-2 border-green-400">
                  <h4 className="text-lg font-bold text-green-900 mb-2">February - March</h4>
                  <p className="text-sm font-semibold text-green-700 mb-3">PERFECT</p>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li>Both coasts diveable</li>
                    <li>Whale shark season</li>
                    <li>Excellent visibility</li>
                    <li>Peak season (book ahead)</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-pink-50 rounded-lg shadow-md p-5 border-2 border-green-300">
                  <h4 className="text-lg font-bold text-green-900 mb-2">April</h4>
                  <p className="text-sm font-semibold text-green-700 mb-3">EXCELLENT</p>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li>Still great both coasts</li>
                    <li>Whale sharks still around</li>
                    <li>Good visibility</li>
                    <li>Hot season begins</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg shadow-md p-5 border-2 border-yellow-300">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">November - January</h4>
                  <p className="text-sm font-semibold text-amber-700 mb-3">MIXED</p>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li>Andaman excellent</li>
                    <li>Gulf rough but okay</li>
                    <li>Similan season starts</li>
                    <li>Choose west coast</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-md p-5 border-2 border-blue-300">
                  <h4 className="text-lg font-bold text-blue-900 mb-2">May - October</h4>
                  <p className="text-sm font-semibold text-blue-700 mb-3">GULF ONLY</p>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li>Andaman closed/rough</li>
                    <li>Gulf excellent</li>
                    <li>Koh Tao best choice</li>
                    <li>Low season prices</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Seasonal Diving Calendar</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="text-left py-3 px-2 font-semibold text-gray-900">Month</th>
                        <th className="text-center py-3 px-2 font-semibold text-gray-900">Andaman Sea</th>
                        <th className="text-center py-3 px-2 font-semibold text-gray-900">Gulf of Thailand</th>
                        <th className="text-left py-3 px-2 font-semibold text-gray-900">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-2 font-medium">January</td>
                        <td className="text-center py-3 px-2">
                          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                            Excellent
                          </span>
                        </td>
                        <td className="text-center py-3 px-2">
                          <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">
                            Okay
                          </span>
                        </td>
                        <td className="py-3 px-2 text-gray-700">Similan peak season</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-green-50">
                        <td className="py-3 px-2 font-medium">February</td>
                        <td className="text-center py-3 px-2">
                          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                            Excellent
                          </span>
                        </td>
                        <td className="text-center py-3 px-2">
                          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                            Excellent
                          </span>
                        </td>
                        <td className="py-3 px-2 text-green-800 font-semibold">Perfect month - both coasts great</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-green-50">
                        <td className="py-3 px-2 font-medium">March</td>
                        <td className="text-center py-3 px-2">
                          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                            Excellent
                          </span>
                        </td>
                        <td className="text-center py-3 px-2">
                          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                            Excellent
                          </span>
                        </td>
                        <td className="py-3 px-2 text-green-800 font-semibold">Whale shark season peaks</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-2 font-medium">April</td>
                        <td className="text-center py-3 px-2">
                          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                            Good
                          </span>
                        </td>
                        <td className="text-center py-3 px-2">
                          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                            Excellent
                          </span>
                        </td>
                        <td className="py-3 px-2 text-gray-700">Still whale sharks, hot weather</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-2 font-medium">May</td>
                        <td className="text-center py-3 px-2">
                          <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold">
                            Closed
                          </span>
                        </td>
                        <td className="text-center py-3 px-2">
                          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                            Good
                          </span>
                        </td>
                        <td className="py-3 px-2 text-gray-700">Similan closed, go to Gulf</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-2 font-medium">June - Sept</td>
                        <td className="text-center py-3 px-2">
                          <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold">
                            Monsoon
                          </span>
                        </td>
                        <td className="text-center py-3 px-2">
                          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                            Good
                          </span>
                        </td>
                        <td className="py-3 px-2 text-gray-700">Koh Tao best option</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-2 font-medium">October</td>
                        <td className="text-center py-3 px-2">
                          <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">
                            Okay
                          </span>
                        </td>
                        <td className="text-center py-3 px-2">
                          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                            Good
                          </span>
                        </td>
                        <td className="py-3 px-2 text-gray-700">Transition month</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-2 font-medium">November</td>
                        <td className="text-center py-3 px-2">
                          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                            Excellent
                          </span>
                        </td>
                        <td className="text-center py-3 px-2">
                          <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">
                            Okay
                          </span>
                        </td>
                        <td className="py-3 px-2 text-gray-700">Similan opens mid-month</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-2 font-medium">December</td>
                        <td className="text-center py-3 px-2">
                          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                            Excellent
                          </span>
                        </td>
                        <td className="text-center py-3 px-2">
                          <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">
                            Okay
                          </span>
                        </td>
                        <td className="py-3 px-2 text-gray-700">Peak tourist season begins</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg border-l-4 border-orange-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Recommendation</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Thailand offers year-round diving opportunities. When one coast has rough weather, the other is typically calm and clear!
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">November - April</p>
                    <p className="text-gray-700">Dive the Andaman Sea (Phuket, Similan, Krabi, Koh Lanta)</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">May - October</p>
                    <p className="text-gray-700">Dive the Gulf (Koh Tao, Koh Samui, Koh Phangan)</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="safety">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-[#d7007f] pb-3">
                Diving Safety
              </h2>

              <p className="text-gray-700 mb-8 text-lg">
                Safety is the most important aspect of diving. Follow these guidelines to ensure a safe and enjoyable underwater experience.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Before Diving</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2 text-blue-600" />
                    Choose Reputable Operators
                  </h4>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Check reviews on Google, TripAdvisor, ScubaBoard</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Look for PADI 5-Star certification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Ask about instructor experience and qualifications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Check equipment condition before committing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Avoid suspiciously cheap operators</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-lg shadow-md p-6 border-l-4 border-red-500">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2 text-red-700" />
                    Red Flags to Watch For
                  </h4>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span><strong>Too many students per instructor</strong> (max 4 for Open Water)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span><strong>Rushing through courses</strong> or skipping theory</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span><strong>Old or poorly maintained equipment</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span><strong>No proper safety briefings</strong> before dives</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span><strong>Pressure to dive beyond your comfort level</strong></span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-md p-6 mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Get Dive Insurance</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-700 mb-3">
                      <strong>DAN (Divers Alert Network) Coverage:</strong> $35-100 per year
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span>Covers decompression chamber treatment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span>Medical evacuation coverage</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span>24/7 emergency hotline</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 p-4 rounded border border-amber-200">
                    <p className="text-sm text-gray-900 font-semibold mb-2">Important:</p>
                    <p className="text-sm text-gray-700 mb-3">Regular travel insurance does NOT cover diving accidents</p>
                    <p className="text-xs text-gray-600 font-semibold">Nearest Hyperbaric Chambers:</p>
                    <ul className="text-xs text-gray-600 mt-1">
                      <li>Bangkok Hospital Phuket</li>
                      <li>Hyperbaric Services Thailand (Koh Samui)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-6 mt-12">During Diving</h3>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Dive Limits</h4>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex justify-between pb-2 border-b border-gray-200">
                      <span>Open Water</span>
                      <span className="font-semibold">Max 18m</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-gray-200">
                      <span>Advanced</span>
                      <span className="font-semibold">Max 30m</span>
                    </div>
                    <p className="pt-2 text-red-700 font-semibold">Never exceed your certification depth</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Ascend Safely</h4>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span><strong>Maximum rate:</strong> 9 meters per minute</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span><strong>Safety stop:</strong> 3 minutes at 5 meters</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Prevents decompression sickness</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Equipment Check (BWRAF)</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span><strong>B</strong>CD - Inflates and deflates properly</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span><strong>W</strong>eights - Secure and correct amount</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span><strong>R</strong>eleases - Quick-release mechanisms work</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span><strong>A</strong>ir - Tank full (200 bar), regulator breathes smoothly</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span><strong>F</strong>inal check - Mask, fins, computer working</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-amber-50 rounded-lg shadow-md p-6 border-l-4 border-amber-500">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2 text-amber-700" />
                    Never Dive With a Hangover
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>Wait 24 hours after heavy drinking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>Dehydration increases decompression sickness risk</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>Impaired judgment underwater is dangerous</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>Alcohol affects your body's nitrogen absorption</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Equalize Often</h4>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span><strong>Start at the surface</strong> before descending</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span><strong>Every meter going down</strong> - don't wait for pain</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span><strong>Never force it</strong> - ascend if it doesn't work</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Use gentle techniques like swallowing or yawning</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-pink-50 rounded-lg shadow-md p-6 mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Marine Life Safety - Look But Don't Touch</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-3">Dangerous Marine Life</p>
                    <ul className="space-y-2 text-xs text-gray-700">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                        <span><strong>Coral:</strong> Damages reef (decades to regrow) and cuts cause infections</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                        <span><strong>Sea urchins:</strong> Painful spines, difficult to remove completely</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                        <span><strong>Lionfish:</strong> Venomous spines cause extreme pain</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                        <span><strong>Fire coral:</strong> Not actually coral, causes burning rash</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                        <span><strong>Jellyfish:</strong> Tentacles sting even when dead (March-May peak)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                        <span><strong>Moray eels:</strong> Bite if threatened (live in coral holes)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                        <span><strong>Blue-ringed octopus:</strong> Deadly venomous (rare but present)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                        <span><strong>Cone snails:</strong> Venomous, can be fatal</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="text-sm font-semibold text-gray-900 mb-3">Protection Tips</p>
                    <ul className="space-y-2 text-xs text-gray-700">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                        <span>Wear a wetsuit for protection</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                        <span>Watch where you put hands and feet</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                        <span>Keep safe distance from all marine life</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                        <span>Perfect your buoyancy to avoid accidental contact</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                        <span>Use reef-safe sunscreen only</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                        <span><strong>Rule:</strong> Look but don't touch ANYTHING</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-6 mt-12">After Diving</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 rounded-lg shadow-md p-6 border-l-4 border-red-500">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2 text-red-700" />
                    No Flying After Diving
                  </h4>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="bg-white p-3 rounded">
                      <p className="font-semibold text-gray-900 mb-1">Minimum wait: 12 hours</p>
                      <p className="text-xs text-gray-600">After a single no-decompression dive</p>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <p className="font-semibold text-gray-900 mb-1">Recommended: 18-24 hours</p>
                      <p className="text-xs text-gray-600">After multiple dives or multiple days of diving</p>
                    </div>
                    <div className="bg-red-100 p-3 rounded">
                      <p className="font-bold text-red-900 text-sm">Don't dive the day before departure!</p>
                      <p className="text-xs text-red-800 mt-1">Plan your last dive accordingly to avoid decompression sickness at altitude</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Stay Hydrated</h4>
                  <ul className="space-y-3 text-sm text-gray-700 mb-4">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Drink water before diving (500ml minimum)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Drink water between dives</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Drink water after diving</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Avoid alcohol same day (wait until evening after last dive)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Dehydration significantly increases decompression sickness risk</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Diving dehydrates you (dry air in tank)</span>
                    </li>
                  </ul>
                  <div className="bg-blue-50 p-3 rounded text-xs text-gray-700">
                    <p className="font-semibold">Tip: Bring a water bottle on the boat and drink regularly between dives</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg shadow-md p-6 mb-8 border-2 border-amber-300">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <AlertCircle className="w-6 h-6 mr-2 text-amber-700" />
                  Monitor for Decompression Sickness Symptoms
                </h4>
                <p className="text-sm text-gray-700 mb-4">
                  Symptoms can appear up to 24 hours after diving. Be vigilant and seek immediate medical attention if you experience:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>Joint pain (especially shoulders, elbows, knees)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>Extreme fatigue</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>Dizziness or vertigo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>Numbness or tingling</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>Difficulty breathing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>Rash or itchy skin</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>Confusion</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded border-2 border-red-300">
                  <p className="font-bold text-red-900 mb-2">If ANY symptoms appear:</p>
                  <ol className="space-y-2 text-sm text-gray-800">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">1.</span>
                      <span>Call DAN Emergency Hotline: +1-919-684-9111 (24/7, English)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">2.</span>
                      <span>Call local emergency: 1669 (Thailand ambulance)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">3.</span>
                      <span>Lie down, drink water, breathe 100% oxygen if available</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">4.</span>
                      <span>Get to hyperbaric chamber immediately</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">5.</span>
                      <span className="font-bold text-red-700">DO NOT fly (makes it worse)</span>
                    </li>
                  </ol>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-lg shadow-lg p-6 mb-8">
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <AlertCircle className="w-6 h-6 mr-2" />
                  Emergency Contact Numbers
                </h4>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-white/10 p-4 rounded">
                    <p className="text-sm font-semibold mb-1">Tourist Police</p>
                    <p className="text-2xl font-bold">1155</p>
                    <p className="text-xs mt-1">English-speaking, 24/7</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded">
                    <p className="text-sm font-semibold mb-1">Ambulance</p>
                    <p className="text-2xl font-bold">1669</p>
                    <p className="text-xs mt-1">Emergency medical services</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded">
                    <p className="text-sm font-semibold mb-1">DAN Emergency</p>
                    <p className="text-lg font-bold">+1-919-684-9111</p>
                    <p className="text-xs mt-1">24/7 diving emergencies</p>
                  </div>
                </div>
                <p className="text-xs bg-white/10 p-3 rounded">
                  <strong>In case of diving emergency:</strong> Call DAN immediately, get pure oxygen if available, and get to nearest hyperbaric chamber. Do not attempt to fly or drive to high altitude.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-red-600" />
                  Hyperbaric Chambers in Thailand
                </h4>
                <p className="text-sm text-gray-700 mb-4">
                  Save these numbers before diving. Treatment costs $1000+ per hour without insurance.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="font-bold text-gray-900 mb-2">Phuket</p>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div>
                        <p className="font-semibold">Bangkok Hospital Phuket</p>
                        <p className="text-xs">+66-76-254-425</p>
                      </div>
                      <div>
                        <p className="font-semibold">Vachira Phuket Hospital</p>
                        <p className="text-xs">+66-76-361-234</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-bold text-gray-900 mb-2">Koh Samui</p>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div>
                        <p className="font-semibold">Hyperbaric Services Thailand</p>
                        <p className="text-xs">+66-77-413-405</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="font-bold text-gray-900 mb-2">Bangkok</p>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div>
                        <p className="font-semibold">Samitivej Hospital</p>
                        <p className="text-xs">+66-2-022-2222</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="font-bold text-gray-900 mb-2">Pattaya</p>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div>
                        <p className="font-semibold">Bangkok Hospital Pattaya</p>
                        <p className="text-xs">+66-38-259-999</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-lg shadow-lg p-8">
                <h4 className="text-2xl font-bold mb-6 flex items-center">
                  <CheckCircle2 className="w-7 h-7 mr-3" />
                  Safety Checklist for Every Dive
                </h4>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/10 p-5 rounded-lg">
                    <p className="font-bold text-lg mb-3">Before Diving</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Well-rested (no hangover)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Hydrated (drank water)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Equipment checked (BWRAF)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Buddy established and briefed</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Dive plan agreed (depth, time)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Entry and exit points identified</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Emergency procedures reviewed</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Hand signals confirmed</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/10 p-5 rounded-lg">
                    <p className="font-bold text-lg mb-3">During Dive</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Descended slowly with equalization</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Checked air every 5 minutes</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Stayed with buddy (arm's length)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Maintained proper buoyancy</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Did not touch anything</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Watched depth and time limits</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Did safety stop (3-5 min at 5m)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Ascended slowly (9m/min max)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/10 p-5 rounded-lg">
                    <p className="font-bold text-lg mb-3">After Dive</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Logged dive in logbook</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Drank water</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Rested before next dive (1 hour min)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Checked for symptoms</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>No alcohol until evening</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Equipment rinsed in fresh water</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-400/20 p-4 rounded-lg mt-6 border-2 border-yellow-300">
                  <p className="font-bold text-yellow-100 text-center text-sm">
                    Print this checklist or save it on your phone. Your safety is worth the extra minute of preparation!
                  </p>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg shadow-md p-6 mt-8 border-l-4 border-green-500">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Environmental Protection</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Never stand on or break coral</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Don't feed fish or marine animals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Take only photos, leave only bubbles</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Don't collect shells or marine life</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Avoid touching or harassing wildlife</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Report environmental damage to authorities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="costs" className="mt-16">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-[#d7007f] pb-3">
                Diving Costs in Thailand
              </h2>

              <p className="text-gray-700 mb-8 text-lg">
                Thailand offers some of the world's most affordable diving. Here's a complete breakdown of costs to help you budget your underwater adventure.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Fun Dives (For Certified Divers)</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Anchor className="w-5 h-5 mr-2 text-blue-600" />
                    Local Dives
                  </h4>
                  <div className="space-y-3 text-sm mb-4">
                    <div className="flex justify-between pb-2 border-b border-gray-200">
                      <span className="text-gray-700">Single dive</span>
                      <span className="font-semibold text-gray-900">$30-40</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-gray-200">
                      <span className="text-gray-700">2-dive trip</span>
                      <span className="font-semibold text-gray-900">$60-80</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-gray-200">
                      <span className="text-gray-700">3-dive trip</span>
                      <span className="font-semibold text-gray-900">$90-120</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Equipment rental</span>
                      <span className="font-semibold text-gray-900">+$15-30/day</span>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded text-xs text-gray-700">
                    <p className="mb-1"><strong>Duration:</strong> Half day (4-5 hours)</p>
                    <p><strong>Includes:</strong> Boat, guide, tanks, weights</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Ship className="w-5 h-5 mr-2 text-[#d7007f]" />
                    Day Trips
                  </h4>
                  <div className="space-y-3 text-sm mb-4">
                    <div className="flex justify-between pb-2 border-b border-gray-200">
                      <span className="text-gray-700">Full day (2-3 dives)</span>
                      <span className="font-semibold text-gray-900">$80-150</span>
                    </div>
                    <div className="pt-2">
                      <p className="text-gray-700 mb-2 font-semibold">Popular routes:</p>
                      <ul className="space-y-1 text-gray-600">
                        <li>Koh Tao to Sail Rock: $120-150</li>
                        <li>Phuket to Racha Islands: $80-120</li>
                        <li>Koh Samui to Sail Rock: $120-150</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-pink-50 p-3 rounded text-xs text-gray-700">
                    <p className="mb-1"><strong>Duration:</strong> 8-10 hours</p>
                    <p><strong>Includes:</strong> Boat, guide, tanks, lunch</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-lg p-6 mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Ship className="w-6 h-6 mr-2 text-blue-700" />
                  Liveaboards (Best Diving Experience)
                </h4>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Similan Islands</h5>
                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-700">2 days/1 night</span>
                        <span className="font-semibold text-gray-900">$200-350</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">3 days/2 nights</span>
                        <span className="font-semibold text-gray-900">$350-550</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">4 days/3 nights</span>
                        <span className="font-semibold text-gray-900">$500-800</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Luxury options</span>
                        <span className="font-semibold text-gray-900">$800-1,500+</span>
                      </div>
                    </div>
                    <div className="bg-blue-100 p-3 rounded text-xs text-gray-700 mb-2">
                      <p className="mb-1"><strong>Includes:</strong> Accommodation, all meals, 6-11 dives, tanks, guide, park fees</p>
                      <p><strong>Equipment rental:</strong> +$100-150 total</p>
                    </div>
                    <p className="text-xs text-blue-900 font-semibold">Season: November-April only</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Richelieu Rock (Best for Whale Sharks)</h5>
                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-700">4 days/3 nights</span>
                        <span className="font-semibold text-gray-900">$600-1,000</span>
                      </div>
                    </div>
                    <div className="bg-cyan-700 text-white p-4 rounded">
                      <p className="text-sm font-semibold mb-1">Best time: February-April</p>
                      <p className="text-xs">Peak whale shark season with 30-50% encounter rate</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-6 mt-12">Equipment Rental</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Per Day Rates</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between pb-2 border-b border-gray-200">
                      <span className="text-gray-700">BCD (vest)</span>
                      <span className="font-semibold text-gray-900">$8-12</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-gray-200">
                      <span className="text-gray-700">Regulator</span>
                      <span className="font-semibold text-gray-900">$8-12</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-gray-200">
                      <span className="text-gray-700">Wetsuit</span>
                      <span className="font-semibold text-gray-900">$5-8</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-gray-200">
                      <span className="text-gray-700">Fins + Mask + Snorkel</span>
                      <span className="font-semibold text-gray-900">$5-10</span>
                    </div>
                    <div className="flex justify-between font-semibold text-base">
                      <span className="text-gray-900">Full set</span>
                      <span className="text-blue-700">$20-30/day</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-md p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Pro Tips</h4>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span><strong>Multi-day discounts:</strong> 10-20% off for 5+ days</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span><strong>Buy your own:</strong> Mask and fins ($100-200 total)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span><strong>Rent:</strong> BCD and regulator (heavy and expensive to buy)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>Your own gear = better fit and comfort</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-6 mt-12">Snorkeling Costs</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Day Trips</h4>
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex justify-between pb-2 border-b border-gray-200">
                      <span className="text-gray-700">Basic island tour</span>
                      <span className="font-semibold text-gray-900">$30-60</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-gray-200">
                      <span className="text-gray-700">Premium tours</span>
                      <span className="font-semibold text-gray-900">$80-120</span>
                    </div>
                    <div className="pt-2">
                      <p className="text-gray-700 mb-2 font-semibold">Popular trips:</p>
                      <ul className="space-y-1 text-gray-600">
                        <li>Phuket to Phi Phi Islands: $50-80</li>
                        <li>Krabi 4 Islands: $30-50</li>
                        <li>Koh Tao to Nangyuan: $25-40</li>
                        <li>Koh Lipe islands: $30-60</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-cyan-50 p-3 rounded text-xs text-gray-700">
                    <p><strong>Includes:</strong> Boat, guide, lunch, gear, multiple stops</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg shadow-md p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Equipment & Free Options</h4>
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex justify-between pb-2 border-b border-gray-200">
                      <span className="text-gray-700">Mask + snorkel + fins</span>
                      <span className="font-semibold text-gray-900">$5-10/day</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-gray-200">
                      <span className="text-gray-700">Life jacket</span>
                      <span className="font-semibold text-gray-900">$3-5/day</span>
                    </div>
                  </div>
                  <div className="bg-green-100 p-3 rounded">
                    <p className="font-semibold text-gray-900 text-sm mb-2">Free Shore Snorkeling:</p>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>Koh Tao: Tanote Bay, Sai Nuan Beach</li>
                      <li>Koh Lipe: Sunrise Beach, Sunset Beach</li>
                      <li>Koh Lanta: Klong Dao Beach</li>
                    </ul>
                    <p className="text-xs text-gray-600 mt-2 italic">Just rent gear and swim from beach!</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-6 mt-12">Cost Comparison (4-Day Diving Vacation)</h3>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-green-500">
                  <div className="bg-green-50 p-4">
                    <h4 className="text-xl font-bold text-gray-900">Koh Tao Budget</h4>
                    <p className="text-sm text-gray-600">Best for backpackers</p>
                  </div>
                  <div className="p-5">
                    <div className="space-y-3 text-sm mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Open Water course</span>
                        <span className="font-semibold text-gray-900">$350</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">4 fun dives</span>
                        <span className="font-semibold text-gray-900">$120</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Accommodation (4 nights)</span>
                        <span className="font-semibold text-gray-900">$200</span>
                      </div>
                      <div className="flex justify-between border-b pb-3">
                        <span className="text-gray-700">Food</span>
                        <span className="font-semibold text-gray-900">$80</span>
                      </div>
                      <div className="flex justify-between pt-2">
                        <span className="text-lg font-bold text-gray-900">Total</span>
                        <span className="text-2xl font-bold text-green-600">$750</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-blue-500">
                  <div className="bg-blue-50 p-4">
                    <h4 className="text-xl font-bold text-gray-900">Phuket Mid-Range</h4>
                    <p className="text-sm text-gray-600">Comfortable experience</p>
                  </div>
                  <div className="p-5">
                    <div className="space-y-3 text-sm mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Open Water course</span>
                        <span className="font-semibold text-gray-900">$500</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">4 fun dives</span>
                        <span className="font-semibold text-gray-900">$150</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Accommodation (4 nights)</span>
                        <span className="font-semibold text-gray-900">$400</span>
                      </div>
                      <div className="flex justify-between border-b pb-3">
                        <span className="text-gray-700">Food</span>
                        <span className="font-semibold text-gray-900">$150</span>
                      </div>
                      <div className="flex justify-between pt-2">
                        <span className="text-lg font-bold text-gray-900">Total</span>
                        <span className="text-2xl font-bold text-blue-600">$1,200</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-cyan-500">
                  <div className="bg-cyan-50 p-4">
                    <h4 className="text-xl font-bold text-gray-900">Similan Liveaboard</h4>
                    <p className="text-sm text-gray-600">Ultimate diving trip</p>
                  </div>
                  <div className="p-5">
                    <div className="space-y-3 text-sm mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-700">4D/3N liveaboard</span>
                        <span className="font-semibold text-gray-900">$600</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Equipment rental</span>
                        <span className="font-semibold text-gray-900">$120</span>
                      </div>
                      <div className="flex justify-between border-b pb-3">
                        <span className="text-gray-700">Transfer from Phuket</span>
                        <span className="font-semibold text-gray-900">$50</span>
                      </div>
                      <div className="flex justify-between pt-2">
                        <span className="text-lg font-bold text-gray-900">Total</span>
                        <span className="text-2xl font-bold text-cyan-600">$770</span>
                      </div>
                    </div>
                    <div className="bg-cyan-100 p-3 rounded text-xs text-gray-700">
                      <p className="font-semibold mb-1">Includes accommodation, food, and 10+ dives!</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-lg border-l-4 border-amber-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Budget Tips</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span><strong>Book packages:</strong> Many dive shops offer certification + accommodation + dives packages at 10-15% discount</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span><strong>Low season savings:</strong> May-October prices can be 20-30% cheaper in the Gulf</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span><strong>Book early:</strong> Liveaboards fill up 2-3 months in advance during peak season (Feb-Apr)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span><strong>Bring your own:</strong> Owning mask, fins, and wetsuit saves $10-15 per dive</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span><strong>Multi-dive discounts:</strong> Buy 10-dive packages for 15-20% off individual dive prices</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="diving-vs-snorkeling" className="mt-16">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-[#d7007f] pb-3">
                Diving vs Snorkeling: Which to Choose?
              </h2>

              <p className="text-gray-700 mb-10 text-lg">
                Not sure whether to dive or snorkel? This guide will help you decide based on your time, budget, experience level, and what you want to see.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-lg p-8 border-t-4 border-blue-600">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-600 rounded-full p-3 mr-4">
                      <Anchor className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Choose Diving If You:</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Want to see more marine life</p>
                        <p className="text-sm text-gray-600">Deeper water means bigger creatures - sharks, rays, turtles, whale sharks. Access dive sites unreachable by snorkeling. See 3-5x more species diversity. Experience the underwater world fully, not just from the surface.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Have time to invest</p>
                        <p className="text-sm text-gray-600">Open Water certification takes 3-4 days minimum (cannot rush). Theory, pool practice, and open water dives all required. Worth it if you plan to dive in future. Lifelong skill and certification that never expires.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Are serious about underwater exploration</p>
                        <p className="text-sm text-gray-600">Want it as lifelong hobby. Interested in advanced certifications (wreck, deep, nitrox). Passionate about marine life and underwater photography.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Want depth and duration</p>
                        <p className="text-sm text-gray-600">Stay underwater 45-60 minutes per dive. Reach depths up to 18-30 meters (depending on certification). Explore caves, swim-throughs, and wrecks. Time to really observe and photograph marine life.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Plan to dive in other countries</p>
                        <p className="text-sm text-gray-600">PADI certification recognized worldwide. Use it in Maldives, Egypt, Indonesia, Caribbean, etc. Makes future beach vacations more exciting. One-time investment, lifetime benefit.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-green-50 rounded-lg shadow-lg p-8 border-t-4 border-[#d7007f]">
                  <div className="flex items-center mb-6">
                    <div className="bg-[#d7007f] rounded-full p-3 mr-4">
                      <Waves className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Choose Snorkeling If You:</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#d7007f] mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Have limited time</p>
                        <p className="text-sm text-gray-600">Can snorkel same day - just show up, get gear, and go. 2-hour boat trip versus 3-4 day diving course. Perfect for short Thailand visits.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#d7007f] mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Are budget-conscious</p>
                        <p className="text-sm text-gray-600">Snorkeling day trip: $30-60. Diving certification: $300-400 PLUS fun dives $80-120 each. Huge price difference. Snorkeling equipment cheap to buy or rent.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#d7007f] mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Want casual experience</p>
                        <p className="text-sm text-gray-600">No certification or skills required. Can surface anytime you want. Less gear (just mask, snorkel, fins). No pressure (literally and figuratively). Kids and elderly can snorkel - diving has age minimums.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#d7007f] mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Are nervous about diving</p>
                        <p className="text-sm text-gray-600">Claustrophobia concerns (breathing underwater feels strange). Ear equalization issues. Fear of deep water. Anxiety about equipment failure. Snorkeling lets you test comfort in water first.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#d7007f] mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Are traveling with non-divers</p>
                        <p className="text-sm text-gray-600">Everyone can snorkel together (no certification needed). Families with young children. Mixed ability groups. Partners where one does not want to dive.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Fish className="w-7 h-7 text-cyan-600 mr-3" />
                  What You Will See
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="bg-pink-50 p-4 rounded-lg mb-4">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Snorkeling (0-3 meters depth)</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-[#d7007f] rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span>Colorful reef fish (parrotfish, angelfish, butterflyfish)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-[#d7007f] rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span>Small tropical fish in schools</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-[#d7007f] rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span>Coral formations from above</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-[#d7007f] rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span>Occasional sea turtle (if lucky)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-[#d7007f] rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span>Shallow water marine life</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-[#d7007f] rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span>Clearer water (more sunlight)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Diving (5-30 meters depth)</h4>
                      <p className="text-xs text-gray-600">Everything from snorkeling PLUS:</p>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Reef sharks</strong> (blacktip, whitetip)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Leopard sharks</strong></span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Large rays</strong> (eagle rays, manta rays)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span><strong>More sea turtles</strong> (they dive deep)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Barracuda schools</strong></span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Large tuna and jacks</strong></span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Moray eels</strong> in coral holes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Octopus and cuttlefish</strong></span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Whale sharks</strong> (seasonal, specific sites)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Manta rays</strong> (specific sites)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Wreck exploration</strong></span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Caves and swim-throughs</strong></span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Deeper coral formations</strong></span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Larger marine life</strong> that stays in deeper water</span>
                      </li>
                    </ul>
                    <div className="bg-blue-100 p-3 rounded mt-4 text-center">
                      <p className="text-sm font-bold text-blue-900">Bottom line: Diving sees 3-5 times more marine life diversity and larger species</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg shadow-lg p-8 mb-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Compass className="w-7 h-7 text-purple-600 mr-3" />
                  Quick Decision Guide
                </h3>

                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-5 shadow-md border-l-4 border-blue-500">
                    <div className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">If you want to see whale sharks:</p>
                        <p className="text-sm text-gray-700 mt-1">Choose <strong className="text-blue-600">DIVING</strong> at Richelieu Rock, February-April</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-5 shadow-md border-l-4 border-amber-500">
                    <div className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">If you only have 2 days:</p>
                        <p className="text-sm text-gray-700 mt-1">Choose <strong className="text-[#d7007f]">SNORKELING</strong>, not enough time for certification</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-5 shadow-md border-l-4 border-green-500">
                    <div className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">If on tight budget:</p>
                        <p className="text-sm text-gray-700 mt-1">Choose <strong className="text-[#d7007f]">SNORKELING</strong>, costs $30-60 versus $300+ for diving</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-5 shadow-md border-l-4 border-blue-500">
                    <div className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">If you want lifelong hobby:</p>
                        <p className="text-sm text-gray-700 mt-1">Choose <strong className="text-blue-600">DIVING</strong>, worldwide certification opens endless possibilities</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-5 shadow-md border-l-4 border-[#d7007f]">
                    <div className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-[#d7007f] mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">If scared of deep water:</p>
                        <p className="text-sm text-gray-700 mt-1">Choose <strong className="text-[#d7007f]">SNORKELING</strong>, stay near surface with easy exit</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-5 shadow-md border-l-4 border-purple-500">
                    <div className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">If you have a week and want best experience:</p>
                        <p className="text-sm text-gray-700 mt-1">Choose <strong className="text-blue-600">DIVING</strong>, 4 days certification plus 3 days fun dives</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-5 shadow-md border-l-4 border-pink-500">
                    <div className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-pink-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">If family trip with mixed interest:</p>
                        <p className="text-sm text-gray-700 mt-1">Choose <strong className="text-[#d7007f]">SNORKELING</strong>, everyone participates together</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Decision Flowchart</h3>
                <div className="max-w-3xl mx-auto">
                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                      <p className="font-bold text-lg">How much time do you have?</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                        <p className="font-semibold mb-2 text-center">Less than 3 days</p>
                        <div className="flex justify-center">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                        <div className="bg-[#d7007f] rounded p-3 mt-2 text-center">
                          <p className="font-bold">SNORKELING</p>
                        </div>
                      </div>

                      <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                        <p className="font-semibold mb-2 text-center">3+ days available</p>
                        <div className="flex justify-center">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                        <p className="text-sm mt-2 text-center">Check budget...</p>
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                      <p className="font-bold text-lg">What's your budget?</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                        <p className="font-semibold mb-2 text-center">Under $100</p>
                        <div className="flex justify-center">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                        <div className="bg-[#d7007f] rounded p-3 mt-2 text-center">
                          <p className="font-bold">SNORKELING</p>
                        </div>
                      </div>

                      <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                        <p className="font-semibold mb-2 text-center">$300+</p>
                        <div className="flex justify-center">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                        <p className="text-sm mt-2 text-center">Check goals...</p>
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                      <p className="font-bold text-lg">What do you want to see?</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                        <p className="font-semibold mb-2 text-center">Casual reef viewing</p>
                        <div className="flex justify-center">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                        <div className="bg-[#d7007f] rounded p-3 mt-2 text-center">
                          <p className="font-bold">SNORKELING</p>
                        </div>
                      </div>

                      <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                        <p className="font-semibold mb-2 text-center">Sharks, rays, wrecks</p>
                        <div className="flex justify-center">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                        <div className="bg-blue-500 rounded p-3 mt-2 text-center">
                          <p className="font-bold">DIVING</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 mt-12 mb-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <DollarSign className="w-7 h-7 text-green-600 mr-3" />
                  Cost Breakdown Comparison
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-pink-50 to-green-50 rounded-lg p-6 border-2 border-pink-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Snorkeling Total Costs</h4>
                    <div className="space-y-3 text-sm text-gray-700 mb-4">
                      <div className="flex justify-between pb-2 border-b border-pink-200">
                        <span>Day trip to islands</span>
                        <span className="font-semibold">$30-60</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-pink-200">
                        <span>Equipment rental</span>
                        <span className="font-semibold">Usually included (or $10)</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-pink-200">
                        <span>Photos/video (optional)</span>
                        <span className="font-semibold">$20-40</span>
                      </div>
                    </div>
                    <div className="bg-[#d7007f] text-white p-4 rounded-lg text-center">
                      <p className="text-sm mb-1">TOTAL COST</p>
                      <p className="text-3xl font-bold">$30-100</p>
                      <p className="text-xs mt-1">for full day trip</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border-2 border-blue-300">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Diving Total Costs</h4>
                    <div className="space-y-3 text-sm text-gray-700 mb-4">
                      <div className="flex justify-between pb-2 border-b border-blue-200">
                        <span>Open Water certification</span>
                        <span className="font-semibold">$300-400 (3-4 days)</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-blue-200">
                        <span>Fun dives after cert</span>
                        <span className="font-semibold">$80-120 for 2 dives</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-blue-200">
                        <span>Equipment rental</span>
                        <span className="font-semibold">$30-50 per day</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-blue-200">
                        <span>Dive computer rental</span>
                        <span className="font-semibold">$10 per day</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-blue-200">
                        <span>Photos/video (optional)</span>
                        <span className="font-semibold">$30-60</span>
                      </div>
                    </div>
                    <div className="bg-blue-600 text-white p-4 rounded-lg text-center">
                      <p className="text-sm mb-1">TOTAL COST</p>
                      <p className="text-3xl font-bold">$400-800</p>
                      <p className="text-xs mt-1">for cert + several fun dives</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-lg shadow-xl p-8 mb-12">
                <h3 className="text-2xl font-bold mb-6 text-center">Our Honest Recommendations</h3>

                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                    <h4 className="text-xl font-bold mb-3 flex items-center">
                      <Clock className="w-6 h-6 mr-2" />
                      First Time in Thailand, 7-10 Days
                    </h4>
                    <p className="text-sm leading-relaxed">
                      <strong>Get Open Water certified in Koh Tao</strong> (best value globally). Spend 3-4 days getting certified, then do fun dives for 2-3 more days. You will see incredible marine life and have certification for life. This is the perfect amount of time to invest in learning.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                    <h4 className="text-xl font-bold mb-3 flex items-center">
                      <Calendar className="w-6 h-6 mr-2" />
                      Short Trip (3-5 Days)
                    </h4>
                    <p className="text-sm leading-relaxed">
                      <strong>Snorkel at best spots</strong> (Similan Islands, Phi Phi Islands, Koh Tao). Save diving certification for future longer trip. You will still see beautiful marine life and have time to explore other attractions.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                    <h4 className="text-xl font-bold mb-3 flex items-center">
                      <AlertCircle className="w-6 h-6 mr-2" />
                      Uncertain About Diving
                    </h4>
                    <p className="text-sm leading-relaxed">
                      <strong>Do Discover Scuba Diving</strong> (1-day intro) first. Costs $80-120, lets you try diving with instructor in shallow water. If you love it, upgrade to full certification. If not, stick with snorkeling. No commitment required.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                    <h4 className="text-xl font-bold mb-3 flex items-center">
                      <Users className="w-6 h-6 mr-2" />
                      Traveling With Kids
                    </h4>
                    <p className="text-sm leading-relaxed">
                      <strong>Snorkel together as family.</strong> Kids love it, everyone can participate, and it is much more affordable. Children must be 10+ for most diving courses, but can snorkel at any age (with supervision).
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                    <h4 className="text-xl font-bold mb-3 flex items-center">
                      <Fish className="w-6 h-6 mr-2" />
                      Serious Marine Life Enthusiast
                    </h4>
                    <p className="text-sm leading-relaxed">
                      <strong>Get diving certified.</strong> Snorkeling will feel limited after seeing what is possible with diving. Access to best marine life is underwater. Whale sharks, manta rays, and reef sharks are mainly diving experiences.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-100 p-8 rounded-lg text-center mt-12">
              <Camera className="w-12 h-12 text-cyan-700 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Ready to Explore Thailand's Underwater World?</h3>
              <p className="text-gray-700 mb-6">
                Questions about diving or snorkeling in Thailand? Our travel experts are here to help!
              </p>
              <button className="bg-[#d7007f] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#b0005f] transition-colors">
                Ask Now
              </button>
            </div>

            <RelatedGuides
              guides={[
                {
                  title: 'Koh Tao Diving Guide',
                  excerpt: 'Complete guide to Koh Tao - the diving capital of Thailand with affordable PADI courses, best dive sites, and diving tips.',
                  image: 'https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=600',
                  path: '/destinations/koh-tao',
                },
                {
                  title: 'Similan Islands Diving',
                  excerpt: 'Thailand\'s premier diving destination with pristine reefs, manta rays, and whale sharks. Liveaboard and day trip guide.',
                  image: 'https://images.pexels.com/photos/2765872/pexels-photo-2765872.jpeg?auto=compress&cs=tinysrgb&w=600',
                  path: '/destinations/similan-islands',
                },
                {
                  title: 'Phuket Destination Guide',
                  excerpt: 'Explore Phuket\'s beaches, nightlife, and day trips to nearby islands. Complete travel planning guide.',
                  image: 'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=600',
                  path: '/destinations/phuket',
                },
                {
                  title: 'Best Beaches in Thailand',
                  excerpt: 'Discover Thailand\'s most stunning beaches from hidden coves to famous shores across the Andaman and Gulf coasts.',
                  image: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=600',
                  path: '/best-beaches',
                },
              ]}
            />

            <YouMayAlsoLike
              articles={[
                { title: 'Koh Phi Phi Destination Guide', path: '/destinations/koh-phi-phi' },
                { title: 'Krabi Destination Guide', path: '/destinations/krabi' },
                { title: 'Best Time to Visit Thailand', path: '/best-time-to-visit' },
                { title: 'Things to Do in Thailand', path: '/things-to-do' },
                { title: 'Thailand Visa Guide', path: '/visa-guide' },
                { title: 'Sample Itineraries', path: '/itineraries' },
              ]}
            />
          </main>
        </div>
      </div>
    </div>
  );
}
