import { Anchor, Ship, Users, Clock, DollarSign, Check, X, AlertCircle, Sparkles, TrendingUp, Heart, Sailboat, Crown, MapPin, Info, Calendar, Sun, CloudRain, HelpCircle, FileText, Star, Building2 } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import Breadcrumb from '../components/Breadcrumb';
import RelatedGuides from '../components/RelatedGuides';
import YouMayAlsoLike from '../components/YouMayAlsoLike';

export default function PhuketYachtCharterPage() {
  usePageMeta({
    title: 'Phuket Yacht Charter Guide 2026 - Prices, Routes & Booking Tips',
    description: 'Complete guide to Phuket yacht charters. Compare prices from $50-$10,000+, best routes (Phi Phi, Phang Nga), and booking tips. Updated 2026.',
    keywords: 'phuket yacht charter, yacht rental phuket, private boat phuket, phuket boat tours, phi phi islands charter, phang nga bay yacht',
  });

  const charterOptions = [
    {
      name: 'Shared Day Tours',
      category: 'Budget Option',
      cost: '$50-120 per person',
      duration: 'Full day (8-10 hours)',
      capacity: '10-30 people',
      color: 'blue',
      icon: Users,
      description: 'Group tour on catamaran or speedboat with fixed itinerary',
      includes: ['Lunch, drinks, snorkeling gear', 'Everything included', 'Most affordable'],
      routes: ['Phi Phi Islands + Maya Bay', 'Phang Nga Bay + James Bond Island', 'Coral Island + Racha Island'],
      booking: 'GetYourGuide, Viator, Klook',
      pros: [
        'Affordable',
        'Social atmosphere',
        'Everything included',
        'No planning required',
      ],
      cons: [
        'Crowded',
        'Fixed schedule (rushed)',
        'Limited privacy',
        'Cannot customize route',
      ],
      assessment: 'Good value but expect tourist crowds. Not really "yachting" - more like group boat tour. Fine for seeing islands cheaply.',
      bestFor: 'Budget travelers, solo travelers, meeting people',
    },
    {
      name: 'Semi-Private Catamaran',
      category: 'Mid-Range',
      cost: '$150-300 per person',
      duration: 'Full day or sunset cruise',
      capacity: '4-8 people max',
      color: 'cyan',
      icon: Ship,
      description: 'Small group sailing catamaran with some flexibility',
      includes: ['Lunch, drinks, snorkeling', 'Sailing experience', 'Better service'],
      routes: ['Phang Nga Bay (sailing)', 'Racha Islands (snorkeling focus)', 'Sunset cruise (evening)'],
      booking: 'Or charter whole boat $1,200-2,000',
      pros: [
        'Small group (more intimate)',
        'Sailing experience (not just motor)',
        'Less rushed',
        'Better service/attention',
      ],
      cons: [
        'Still sharing with strangers',
        'Limited route flexibility',
        'More expensive than shared',
      ],
      assessment: null,
      bestFor: 'Couples, small groups, better experience',
    },
    {
      name: 'Private Speedboat Charter',
      category: 'Popular Choice',
      cost: '$600-1,500 per day',
      duration: 'Full day or half-day',
      capacity: '6-12 people',
      color: 'emerald',
      icon: Anchor,
      description: 'Private boat for your group with fully customizable itinerary',
      includes: ['Boat + fuel', 'Captain + crew (2 people)', 'Snorkeling gear', 'Soft drinks, water', 'Hotel pickup (usually)'],
      routes: ['Phi Phi Islands (full-day)', 'Phang Nga Bay + James Bond Island', 'Racha + Coral Islands (half-day)', 'Custom multi-island tours'],
      booking: 'Entire boat for your group',
      whatsExtra: ['Lunch (bring your own or pay for restaurant stops)', 'Alcohol (BYO or buy on board)', 'National park fees (300-400 baht per person)'],
      pros: [
        'Privacy (your group only)',
        'Flexible schedule (spend more time where you want)',
        'Fast (covers multiple spots)',
        'Good for families/groups',
        'Reasonable cost split among group',
      ],
      cons: [
        'Can be rough if seas choppy',
        'Loud (speedboat engine)',
        'Less luxury than sailing yacht',
      ],
      assessment: 'Best Value: If you have 6-10 people, this is the best bang for buck.',
      bestFor: 'Families, friend groups, flexible itinerary',
    },
    {
      name: 'Private Sailing Yacht',
      category: 'Luxury Experience',
      cost: '$1,500-5,000 per day',
      duration: 'Full-day, overnight, or multi-day',
      capacity: '4-12 people',
      color: 'purple',
      icon: Sailboat,
      description: 'Private sailing yacht with professional crew for a luxury, peaceful experience',
      includes: ['Yacht + crew (captain + chef/steward)', 'All meals (chef prepares on board)', 'Drinks (varies by package)', 'Snorkeling gear, kayaks, SUP boards', 'Linens, towels'],
      routes: ['Phang Nga Bay (calm waters, perfect for sailing)', 'Phi Phi Islands (multi-day recommended)', 'Phuket to Krabi (2-3 days)'],
      booking: 'Entire yacht for your group',
      yachtTypes: ['Monohull (classic sailboat, faster)', 'Catamaran (more stable, more space, two hulls)'],
      pros: [
        'True luxury experience',
        'Peaceful (wind-powered)',
        'Spacious, comfortable',
        'Chef-prepared meals',
        'Perfect for romantic getaways',
        'Overnight option (sleep on board)',
      ],
      cons: [
        'Expensive',
        'Slower (takes longer to get places)',
        'Weather-dependent (wind needed)',
      ],
      assessment: null,
      bestFor: 'Honeymooners, luxury travelers, those wanting peaceful elegance over speed',
    },
    {
      name: 'Luxury Motor Yacht',
      category: 'High-End',
      cost: '$3,000-10,000+ per day',
      duration: 'Day charter or multi-day',
      capacity: '8-20+ people',
      color: 'amber',
      icon: Crown,
      description: 'Large motor yacht (50-80+ feet) with multiple cabins, luxury amenities, and professional crew',
      includes: ['Everything (full-service)', 'Crew (3-6 people: captain, chef, stewards)', 'Gourmet meals and premium drinks', 'All water toys', '5-star hotel-level service'],
      routes: ['Luxury day trips', 'Overnight charters (Similan Islands, Phi Phi)', 'Multi-day cruises', 'Weddings, proposals, anniversaries', 'Corporate events'],
      booking: 'Contact charter companies directly',
      features: ['Multiple decks', 'Luxury cabins (for overnight)', 'Professional chef (fine dining)', 'Water toys (jet skis, SeaBobs, inflatables)', 'Air conditioning', 'Entertainment systems'],
      pros: [
        'Ultimate luxury',
        'Full-service (everything handled)',
        'Impressive (special occasions)',
        'Stable (large boat, less motion)',
        'Air-conditioned comfort',
      ],
      cons: [
        'Very expensive',
        'Minimum spend often required',
        'May feel too formal for some',
      ],
      assessment: null,
      bestFor: 'Special occasions, corporate events, ultra-luxury',
    },
    {
      name: 'Superyacht Charter',
      category: 'Ultra-Luxury',
      cost: '$10,000-50,000+ per day',
      duration: 'Multi-day typically',
      capacity: '10-30 guests',
      color: 'rose',
      icon: Crown,
      description: 'Yachts 80+ feet with multiple luxury cabins, full crew (5-12 people), and every imaginable amenity',
      includes: ['Everything imaginable', 'Full crew (5-12 people)', 'Michelin-level chef', 'All water toys and equipment', 'Concierge service'],
      routes: ['Bespoke multi-day itineraries', 'Private events', 'Island hopping expeditions'],
      booking: 'Through luxury yacht brokers',
      features: ['Jacuzzis on deck', 'Multiple entertainment areas', 'Jet skis, diving equipment', 'Fine dining (Michelin-level chef)', 'Luxury cabins (hotel suite quality)', 'Water sports equipment'],
      pros: [
        'Ultimate experience',
        'No expense spared',
        'Complete privacy',
        'World-class service',
      ],
      cons: [
        'Extremely expensive',
        'Requires significant planning',
        'May require multi-day minimum',
      ],
      assessment: null,
      bestFor: 'Ultra-high-net-worth, once-in-lifetime events',
    },
  ];

  const routes = [
    {
      name: 'Phang Nga Bay',
      badge: 'Most Popular',
      distance: '40 km northeast of Phuket',
      duration: 'Full-day (8-10 hours)',
      bestFor: 'Sailing, day charters, photography',
      image: 'https://images.pexels.com/photos/1660995/pexels-photo-1660995.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: [
        'James Bond Island (Khao Phing Kan) - iconic limestone rock',
        'Koh Panyee - Muslim fishing village on stilts',
        'Limestone caves - kayak through caves (amazing)',
        'Hidden lagoons - secret beaches inside caves',
      ],
      bestYachtType: 'Sailing yacht or catamaran (calm waters perfect for sailing)',
      costs: {
        sharedTour: '$80-120/person',
        privateSpeedboat: '$800-1,200',
        privateSailing: '$1,500-3,000',
      },
      whyGreat: [
        'Stunning scenery (dramatic limestone karsts)',
        'Calm waters (protected bay)',
        'Less touristy than Phi Phi',
        'Perfect for sailing',
        'Photography paradise',
      ],
      whenToGo: 'Year-round (protected from monsoon)',
      insiderTip: 'Start early (8 AM) to avoid tour boat crowds at James Bond Island. Ask captain to show you hidden lagoons tourists miss.',
    },
    {
      name: 'Phi Phi Islands',
      badge: 'World Famous',
      distance: '48 km east of Phuket',
      duration: 'Full-day (too far for half-day)',
      bestFor: 'Snorkeling, beach time, iconic scenery',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: [
        'Maya Bay (The Beach movie location) - now reopened with limits',
        'Pileh Lagoon - stunning turquoise lagoon',
        'Monkey Beach - wild monkeys (fun but chaotic)',
        'Snorkeling spots - excellent coral and fish',
        'Viking Cave - impressive cliff cave',
      ],
      bestYachtType: 'Speedboat (faster = more time there) OR overnight sailing',
      costs: {
        sharedSpeedboat: '$50-100/person',
        privateSpeedboat: '$1,000-1,500',
        privateYachtOvernight: '$3,000-8,000',
      },
      whyGreat: [
        'World-famous scenery',
        'Excellent snorkeling',
        'Beautiful beaches',
        'Instagram-worthy',
      ],
      downsides: [
        'VERY touristy (hundreds of day-trippers)',
        'Crowded (especially Maya Bay)',
        'Far from Phuket (2 hours by speedboat)',
      ],
      whenToGo: 'November-April (best weather)',
      insiderTip: 'If doing day trip, choose speedboat (not slow catamaran - you\'ll waste half day traveling). OR better: do 2-day/1-night yacht charter so you can enjoy Phi Phi after day-trippers leave.',
    },
    {
      name: 'Racha Islands',
      badge: 'Best for Half-Day',
      distance: '20-35 km south of Phuket',
      duration: 'Half-day or full-day',
      bestFor: 'Snorkeling, swimming, half-day trips',
      image: 'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: [
        'Racha Yai - beautiful beaches, clear water, good swimming',
        'Racha Noi - better for diving, fewer tourists',
        'Snorkeling - excellent visibility',
        'Beach time - white sand beaches',
      ],
      bestYachtType: 'Speedboat (close enough) or catamaran',
      costs: {
        sharedTour: '$60-100/person',
        privateSpeedboatHalfDay: '$600-900',
        privateSpeedboatFullDay: '$900-1,200',
      },
      whyGreat: [
        'Close to Phuket (30-45 minutes)',
        'Less crowded than Phi Phi',
        'Excellent snorkeling',
        'Good for half-day trips',
      ],
      whenToGo: 'November-April (best visibility)',
      insiderTip: 'Perfect for afternoon charter (leave 1 PM, back by 6 PM), or add to other islands for full-day trip.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: 'Destinations', path: '/destinations' },
            { label: 'Phuket', path: '/destinations/phuket' },
            { label: 'Phuket Yacht Charter' },
          ]}
        />

        <div className="relative h-[500px] -mx-4 sm:-mx-6 lg:-mx-8 mb-12">
          <img
            src="https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Luxury yacht charter in Phuket with Phi Phi Islands"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-center mb-4 uppercase tracking-[3px]">
              Phuket Yacht Charter Guide 2026
            </h1>
            <p className="text-xl sm:text-2xl text-center max-w-3xl font-light mb-2">
              Day Trips, Private Charters & Everything You Need to Know
            </p>
            <p className="text-lg text-center text-white/90">
              From Budget Catamarans to Superyachts
            </p>
            <p className="text-sm text-white/80 mt-4">Updated February 2026</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          <div className="space-y-12">
            <section>
              <div className="bg-white rounded-lg shadow-md p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Chartering a yacht in <strong>Phuket</strong> offers access to some of Thailand's most stunning islands and bays - from the dramatic limestone karsts of <strong>Phang Nga Bay</strong> to the crystal waters of <strong>Phi Phi Islands</strong>. This guide covers ALL <strong>yacht charter options in Phuket</strong>, from budget-friendly shared day trips ($50/person) to private luxury superyachts ($10,000+/day). We'll give you honest pricing, route recommendations, and insider tips for booking the perfect yacht experience.
                </p>

                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-6 border-l-4 border-cyan-600 mb-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                    <TrendingUp className="w-5 h-5 text-cyan-600 mr-2" />
                    Bottom Line:
                  </h3>
                  <p className="text-gray-700">
                    Yacht charters in Phuket range from affordable shared tours to ultra-luxury private charters. Best routes: Phang Nga Bay (full-day), Phi Phi Islands (full-day), Racha Islands (half-day).
                  </p>
                </div>

                <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-600">
                  <p className="text-sm text-gray-700">
                    <strong>Planning yacht charters elsewhere in Thailand?</strong> See our complete{' '}
                    <a href="/yacht-charter-thailand" className="text-cyan-600 hover:text-cyan-700 underline font-semibold">
                      Thailand Yacht Charter Guide
                    </a>{' '}
                    for Koh Samui, Krabi, and more destinations.
                  </p>
                </div>
              </div>
            </section>

            <section id="charter-options">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-cyan-600 pb-3">
                Yacht Charter Options in Phuket
              </h2>

              <div className="space-y-8">
                {charterOptions.map((option, index) => {
                  const IconComponent = option.icon;
                  return (
                    <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden border-t-4 border-cyan-600">
                      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-4">
                            <div className="bg-white/20 p-3 rounded-lg">
                              <IconComponent className="w-8 h-8" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold mb-1">{option.name}</h3>
                              <p className="text-cyan-100 text-lg">{option.category}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="grid md:grid-cols-3 gap-4 mb-6">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-center text-gray-600 mb-2">
                              <DollarSign className="w-5 h-5 mr-2 text-cyan-600" />
                              <span className="text-sm font-semibold">Cost</span>
                            </div>
                            <p className="text-lg font-bold text-gray-900">{option.cost}</p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-center text-gray-600 mb-2">
                              <Clock className="w-5 h-5 mr-2 text-cyan-600" />
                              <span className="text-sm font-semibold">Duration</span>
                            </div>
                            <p className="text-lg font-bold text-gray-900">{option.duration}</p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-center text-gray-600 mb-2">
                              <Users className="w-5 h-5 mr-2 text-cyan-600" />
                              <span className="text-sm font-semibold">Capacity</span>
                            </div>
                            <p className="text-lg font-bold text-gray-900">{option.capacity}</p>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-bold text-gray-900 mb-2">What It Is:</h4>
                          <p className="text-gray-700">{option.description}</p>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-bold text-gray-900 mb-2">What's Included:</h4>
                          <ul className="space-y-2">
                            {option.includes.map((item, i) => (
                              <li key={i} className="flex items-start text-gray-700">
                                <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {option.yachtTypes && (
                          <div className="mb-6">
                            <h4 className="font-bold text-gray-900 mb-2">Yacht Types:</h4>
                            <ul className="space-y-2">
                              {option.yachtTypes.map((type, i) => (
                                <li key={i} className="flex items-start text-gray-700">
                                  <Ship className="w-5 h-5 text-cyan-600 mr-2 flex-shrink-0 mt-0.5" />
                                  <span>{type}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {option.features && (
                          <div className="mb-6">
                            <h4 className="font-bold text-gray-900 mb-2">Features:</h4>
                            <ul className="space-y-2">
                              {option.features.map((feature, i) => (
                                <li key={i} className="flex items-start text-gray-700">
                                  <Sparkles className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {option.whatsExtra && (
                          <div className="mb-6">
                            <h4 className="font-bold text-gray-900 mb-2">What's Extra:</h4>
                            <ul className="space-y-2">
                              {option.whatsExtra.map((item, i) => (
                                <li key={i} className="flex items-start text-gray-700">
                                  <AlertCircle className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="mb-6">
                          <h4 className="font-bold text-gray-900 mb-2">Popular Routes:</h4>
                          <ul className="space-y-2">
                            {option.routes.map((route, i) => (
                              <li key={i} className="flex items-start text-gray-700">
                                <Anchor className="w-5 h-5 text-cyan-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span>{route}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-bold text-gray-900 mb-2">Best For:</h4>
                          <p className="text-gray-700 italic">{option.bestFor}</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                          <div className="bg-green-50 rounded-lg p-4">
                            <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                              <Check className="w-5 h-5 text-green-600 mr-2" />
                              Pros:
                            </h4>
                            <ul className="space-y-2">
                              {option.pros.map((pro, i) => (
                                <li key={i} className="text-sm text-gray-700 flex items-start">
                                  <span className="text-green-600 mr-2">+</span>
                                  <span>{pro}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-red-50 rounded-lg p-4">
                            <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                              <X className="w-5 h-5 text-red-600 mr-2" />
                              Cons:
                            </h4>
                            <ul className="space-y-2">
                              {option.cons.map((con, i) => (
                                <li key={i} className="text-sm text-gray-700 flex items-start">
                                  <span className="text-red-600 mr-2">-</span>
                                  <span>{con}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {option.assessment && (
                          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-4 border-l-4 border-amber-600">
                            <h4 className="font-bold text-gray-900 mb-2">Honest Assessment:</h4>
                            <p className="text-gray-700">{option.assessment}</p>
                          </div>
                        )}

                        <div className="mt-6 bg-gray-50 rounded-lg p-4">
                          <p className="text-sm text-gray-700">
                            <strong>Booking:</strong> {option.booking}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section id="best-routes">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-cyan-600 pb-3">
                Best Yacht Routes from Phuket
              </h2>

              <div className="space-y-8">
                {routes.map((route, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="relative h-64">
                      <img
                        src={route.image}
                        alt={`${route.name} yacht charter route`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-3xl font-bold">{route.name}</h3>
                          <span className="bg-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                            {route.badge}
                          </span>
                        </div>
                        <div className="flex items-center text-white/90 space-x-4 text-sm">
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {route.distance}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {route.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                            <Sparkles className="w-5 h-5 text-cyan-600 mr-2" />
                            Highlights:
                          </h4>
                          <ul className="space-y-2">
                            {route.highlights.map((highlight, i) => (
                              <li key={i} className="text-sm text-gray-700 flex items-start">
                                <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                            <Ship className="w-5 h-5 text-cyan-600 mr-2" />
                            Best Yacht Type:
                          </h4>
                          <p className="text-sm text-gray-700 mb-4">{route.bestYachtType}</p>

                          <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                            <DollarSign className="w-5 h-5 text-cyan-600 mr-2" />
                            Costs:
                          </h4>
                          <div className="space-y-2">
                            {Object.entries(route.costs).map(([key, value]) => (
                              <div key={key} className="flex justify-between text-sm bg-gray-50 p-2 rounded">
                                <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                                <span className="font-semibold text-gray-900">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 rounded-lg p-4 mb-4">
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                          <Check className="w-5 h-5 text-green-600 mr-2" />
                          Why It's Great:
                        </h4>
                        <ul className="space-y-1">
                          {route.whyGreat.map((reason, i) => (
                            <li key={i} className="text-sm text-gray-700 flex items-start">
                              <span className="text-green-600 mr-2">+</span>
                              <span>{reason}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {route.downsides && (
                        <div className="bg-red-50 rounded-lg p-4 mb-4">
                          <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                            <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                            Downsides:
                          </h4>
                          <ul className="space-y-1">
                            {route.downsides.map((downside, i) => (
                              <li key={i} className="text-sm text-gray-700 flex items-start">
                                <span className="text-red-600 mr-2">-</span>
                                <span>{downside}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 rounded-lg p-4">
                          <h4 className="font-bold text-gray-900 mb-2 text-sm flex items-center">
                            <Clock className="w-4 h-4 text-blue-600 mr-2" />
                            When to Go:
                          </h4>
                          <p className="text-sm text-gray-700">{route.whenToGo}</p>
                        </div>

                        <div className="bg-amber-50 rounded-lg p-4">
                          <h4 className="font-bold text-gray-900 mb-2 text-sm flex items-center">
                            <Info className="w-4 h-4 text-amber-600 mr-2" />
                            Insider Tip:
                          </h4>
                          <p className="text-sm text-gray-700">{route.insiderTip}</p>
                        </div>
                      </div>

                      <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">
                          <strong>Best For:</strong> {route.bestFor}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="cost-breakdown">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-cyan-600 pb-3">
                Phuket Yacht Charter Costs
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <p className="text-gray-700 mb-8">
                  Understanding yacht charter costs helps you budget and find the best value. Prices vary by boat type, season, duration, and included services.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border-l-4 border-blue-600">
                    <h3 className="font-bold text-gray-900 mb-4 text-lg">Budget (Shared Tours)</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Half-day:</span>
                        <span className="font-bold text-gray-900">$40-80/person</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Full-day:</span>
                        <span className="font-bold text-gray-900">$80-150/person</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-blue-200">
                      <p className="text-xs text-gray-600"><strong>Includes:</strong> Lunch, drinks, snorkeling gear, guide</p>
                      <p className="text-xs text-gray-600 mt-1"><strong>Group size:</strong> 15-30 people</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-50 to-pink-50 rounded-lg p-6 border-l-4 border-cyan-600">
                    <h3 className="font-bold text-gray-900 mb-4 text-lg">Mid-Range (Semi-Private)</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Full-day:</span>
                        <span className="font-bold text-gray-900">$150-300/person</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-cyan-200">
                      <p className="text-xs text-gray-600"><strong>Group size:</strong> 6-8 people max</p>
                      <p className="text-xs text-gray-600 mt-1"><strong>Service:</strong> Better attention, less crowded</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-lg p-6 border-l-4 border-emerald-600">
                    <h3 className="font-bold text-gray-900 mb-4 text-lg">Private Speedboat</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Half-day (4h):</span>
                        <span className="font-bold text-gray-900">$600-900</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Full-day (8h):</span>
                        <span className="font-bold text-gray-900">$1,000-1,500</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-emerald-200">
                      <p className="text-xs text-gray-600"><strong>Capacity:</strong> 6-12 people (whole boat)</p>
                      <p className="text-xs text-gray-600 mt-1"><strong>Per person:</strong> $100-125 if full</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border-l-4 border-purple-600">
                    <h3 className="font-bold text-gray-900 mb-4 text-lg">Private Sailing Yacht</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Day charter:</span>
                        <span className="font-bold text-gray-900">$1,500-3,500</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Overnight (2d):</span>
                        <span className="font-bold text-gray-900">$3,000-7,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Multi-day/day:</span>
                        <span className="font-bold text-gray-900">$2,500-5,000</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-purple-200">
                      <p className="text-xs text-gray-600"><strong>Includes:</strong> Crew, meals, drinks</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6 border-l-4 border-amber-600">
                    <h3 className="font-bold text-gray-900 mb-4 text-lg">Luxury Motor Yacht</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Day charter:</span>
                        <span className="font-bold text-gray-900">$3,000-10,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Week charter:</span>
                        <span className="font-bold text-gray-900">$30,000-100,000+</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-amber-200">
                      <p className="text-xs text-gray-600"><strong>Includes:</strong> Full crew, gourmet meals, water toys</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-rose-50 to-red-50 rounded-lg p-6 border-l-4 border-rose-600">
                    <h3 className="font-bold text-gray-900 mb-4 text-lg">Superyacht</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Starting from:</span>
                        <span className="font-bold text-gray-900">$10,000+/day</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-rose-200">
                      <p className="text-xs text-gray-600"><strong>Experience:</strong> Ultimate luxury, full-service</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="best-time" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-cyan-600 pb-3">
                When to Charter a Yacht in Phuket
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold">High Season</h3>
                      <Sun className="w-8 h-8" />
                    </div>
                    <p className="text-lg text-green-100">November - April</p>
                    <span className="inline-block bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full mt-2">
                      BEST
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-900 mb-2">Weather:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start">
                          <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Calm seas</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Clear skies</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Perfect sailing conditions</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 mb-4">
                      <h4 className="font-bold text-gray-900 mb-2 text-sm">Pros:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">+</span>
                          <span>Best weather</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">+</span>
                          <span>All routes accessible</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">+</span>
                          <span>Smooth sailing</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2 text-sm">Cons:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-red-600 mr-2">-</span>
                          <span>More expensive</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-600 mr-2">-</span>
                          <span>Crowded anchorages</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-600 mr-2">-</span>
                          <span>Book 2-3 months ahead</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold">Shoulder Season</h3>
                      <Sun className="w-8 h-8 opacity-70" />
                    </div>
                    <p className="text-lg text-orange-100">May, October</p>
                    <span className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mt-2">
                      GOOD VALUE
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-900 mb-2">Weather:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start">
                          <AlertCircle className="w-4 h-4 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Transitional (some rain possible)</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Seas usually manageable</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 mb-4">
                      <h4 className="font-bold text-gray-900 mb-2 text-sm">Pros:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">+</span>
                          <span>20-30% cheaper</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">+</span>
                          <span>Fewer boats</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">+</span>
                          <span>Still good weather most days</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2 text-sm">Cons:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-red-600 mr-2">-</span>
                          <span>Some rain risk</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-600 mr-2">-</span>
                          <span>Occasional rough seas</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-gray-600 to-slate-600 text-white p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold">Low Season</h3>
                      <CloudRain className="w-8 h-8" />
                    </div>
                    <p className="text-lg text-gray-200">June - September</p>
                    <span className="inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full mt-2">
                      CAUTION
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-900 mb-2">Weather:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start">
                          <X className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Monsoon season</span>
                        </li>
                        <li className="flex items-start">
                          <X className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Rough seas (west coast)</span>
                        </li>
                        <li className="flex items-start">
                          <X className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Rain common</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 mb-4">
                      <h4 className="font-bold text-gray-900 mb-2 text-sm">Pros:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">+</span>
                          <span>Cheapest rates (30-50% off)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">+</span>
                          <span>Very few tourists</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2 text-sm">Cons:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-red-600 mr-2">-</span>
                          <span>Rough seas (seasickness likely)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-600 mr-2">-</span>
                          <span>Some routes cancelled</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-600 mr-2">-</span>
                          <span>Phi Phi often inaccessible</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-3 mt-4">
                      <p className="text-xs text-gray-700">
                        <strong>Recommendation:</strong> Avoid unless okay with cancellation risk. Phang Nga Bay sometimes accessible (protected).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="charter-companies" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-cyan-600 pb-3">
                Top Yacht Charter Companies in Phuket
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-xl p-8 border-l-4 border-cyan-600">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Building2 className="w-6 h-6 text-cyan-600 mr-3" />
                        <h3 className="text-2xl font-bold text-gray-900">Boat Lagoon Yachting</h3>
                      </div>
                      <div className="flex items-center mb-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-5 h-5 text-amber-500 fill-amber-500" />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">5/5 stars</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600 font-semibold mb-1">Fleet:</p>
                      <p className="text-gray-900">50+ yachts (catamarans, motor yachts, sailboats)</p>
                    </div>
                    <div>
                      <p className="text-gray-600 font-semibold mb-1">Price Range:</p>
                      <p className="text-gray-900">$1,500-$10,000+/day</p>
                    </div>
                    <div>
                      <p className="text-gray-600 font-semibold mb-1">Best For:</p>
                      <p className="text-gray-900">Luxury charters, professional service</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-8 border-l-4 border-blue-600">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Building2 className="w-6 h-6 text-blue-600 mr-3" />
                        <h3 className="text-2xl font-bold text-gray-900">Asia Yacht Charter</h3>
                      </div>
                      <div className="flex items-center mb-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-5 h-5 text-amber-500 fill-amber-500" />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">5/5 stars</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600 font-semibold mb-1">Fleet:</p>
                      <p className="text-gray-900">30+ yachts</p>
                    </div>
                    <div>
                      <p className="text-gray-600 font-semibold mb-1">Price Range:</p>
                      <p className="text-gray-900">$2,000-$15,000+/day</p>
                    </div>
                    <div>
                      <p className="text-gray-600 font-semibold mb-1">Best For:</p>
                      <p className="text-gray-900">Superyacht charters, multi-day trips</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-8 border-l-4 border-emerald-600">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Building2 className="w-6 h-6 text-emerald-600 mr-3" />
                        <h3 className="text-2xl font-bold text-gray-900">Blue Voyage Thailand</h3>
                      </div>
                      <div className="flex items-center mb-3">
                        {[1, 2, 3, 4].map((star) => (
                          <Star key={star} className="w-5 h-5 text-amber-500 fill-amber-500" />
                        ))}
                        <Star className="w-5 h-5 text-amber-500 fill-amber-500 opacity-50" />
                        <span className="ml-2 text-sm text-gray-600">4.5/5 stars</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600 font-semibold mb-1">Fleet:</p>
                      <p className="text-gray-900">Mixed (speedboats to yachts)</p>
                    </div>
                    <div>
                      <p className="text-gray-600 font-semibold mb-1">Price Range:</p>
                      <p className="text-gray-900">$800-$5,000/day</p>
                    </div>
                    <div>
                      <p className="text-gray-600 font-semibold mb-1">Best For:</p>
                      <p className="text-gray-900">Private speedboat + mid-range yachts</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="how-to-book" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-cyan-600 pb-3">
                How to Book a Yacht in Phuket
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Calendar className="w-6 h-6 text-cyan-600 mr-3" />
                    Option 1: Book Online (Advance)
                  </h3>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Platforms:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>GetYourGuide, Viator (shared tours, some private)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>ClickAndBoat (peer-to-peer yacht rental)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Direct with companies (Boat Lagoon, Asia Yacht)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4 mb-4">
                    <h4 className="font-bold text-gray-900 mb-2 text-sm">Pros:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>+ See reviews</li>
                      <li>+ Compare prices</li>
                      <li>+ Secure payment</li>
                      <li>+ Book ahead</li>
                    </ul>
                  </div>

                  <div className="bg-cyan-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <strong>Best For:</strong> Popular dates, luxury yachts, high season
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <MapPin className="w-6 h-6 text-emerald-600 mr-3" />
                    Option 2: Book in Phuket (Walk-Up)
                  </h3>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Where:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Patong Beach (many operators)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Chalong Bay (main marina)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Hotel concierge</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4 mb-4">
                    <h4 className="font-bold text-gray-900 mb-2 text-sm">Pros:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>+ Negotiate price</li>
                      <li>+ See boat before booking</li>
                      <li>+ Same-day bookings possible</li>
                    </ul>
                  </div>

                  <div className="bg-emerald-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <strong>Best For:</strong> Spontaneous trips, low season, budget travelers
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="checklist" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-cyan-600 pb-3">
                Yacht Charter Checklist
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <FileText className="w-6 h-6 text-cyan-600 mr-3" />
                    Before Booking
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Check weather forecast (especially monsoon season)',
                      'Decide: shared tour vs private charter',
                      'Determine: speedboat (fast) vs sailing (peaceful)',
                      'Pick route: Phi Phi (iconic), Phang Nga (peaceful), Racha (close)',
                      'Read reviews (boat condition, crew professionalism)',
                      'Clarify what\'s included (meals, drinks, park fees)',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Anchor className="w-6 h-6 text-cyan-600 mr-3" />
                    What to Bring
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Essentials:</h4>
                      <ul className="space-y-2">
                        {[
                          'Swimsuit (wear under clothes)',
                          'Sunscreen (reef-safe SPF 50+)',
                          'Sunglasses + hat',
                          'Waterproof case for phone',
                          'Light jacket (sun protection)',
                          'Motion sickness pills',
                          'Cash (park fees, gratuity)',
                        ].map((item, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-700">
                            <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm flex items-center">
                        <X className="w-4 h-4 text-red-600 mr-2" />
                        What NOT to Bring:
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>- Too much stuff (space limited)</li>
                        <li>- Valuable jewelry</li>
                        <li>- Drone (restricted in national parks)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="faq" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-cyan-600 pb-3">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                {[
                  {
                    question: 'Can I bring my own food/drinks?',
                    answer: 'Yes on most private speedboat charters (except luxury yachts with chef). Confirm when booking.',
                  },
                  {
                    question: 'Is it safe?',
                    answer: 'Generally yes with reputable companies. Check life jackets, first aid, insurance. Avoid sketchy beach operators.',
                  },
                  {
                    question: 'What if weather is bad?',
                    answer: 'Captain decides if safe. Reputable companies reschedule or refund. Check cancellation policy when booking.',
                  },
                  {
                    question: 'Can we swim/snorkel?',
                    answer: 'Yes, most routes include snorkel stops. Gear usually provided.',
                  },
                  {
                    question: 'What about kids?',
                    answer: 'Most charters kid-friendly. Bring life jackets for young kids. Catamarans best (stable, space).',
                  },
                  {
                    question: 'Tip amount?',
                    answer: '10-15% typical if service good. Cash preferred.',
                  },
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-cyan-600">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-start">
                      <HelpCircle className="w-5 h-5 text-cyan-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{faq.question}</span>
                    </h3>
                    <p className="text-gray-700 ml-7">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 text-white rounded-lg shadow-2xl p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Charter a Yacht in Phuket?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Compare prices and book online for the best rates and widest selection
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/yacht-charter-thailand"
                  className="inline-block bg-white text-cyan-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
                >
                  Browse All Thailand Yacht Charters
                </a>
                <a
                  href="/contact"
                  className="inline-block bg-cyan-700 text-white font-bold px-8 py-4 rounded-lg hover:bg-cyan-800 transition-colors border-2 border-white text-lg"
                >
                  Get Custom Quote
                </a>
              </div>
            </section>

            <section className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Sparkles className="w-6 h-6 mr-3" />
                Continue Reading: Luxury Yacht Options & Best Routes
              </h3>
              <p className="text-white/90 mb-6">
                Discover luxury catamaran charters, superyachts, multi-day liveaboards, and detailed route guides for Phi Phi Islands, Phang Nga Bay, and more.
              </p>
              <a
                href="/yacht-charter-thailand"
                className="inline-block bg-white text-cyan-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                View Complete Thailand Yacht Charter Guide
              </a>
            </section>

            <section id="related-destinations" className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Heart className="w-6 h-6 text-cyan-600 mr-3" />
                Related Phuket Guides
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a
                  href="/destinations/phuket"
                  className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 border-l-4 border-cyan-600 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-gray-900 mb-1">Phuket Travel Guide</h4>
                  <p className="text-sm text-gray-600">Complete guide to visiting Phuket</p>
                </a>
                <a
                  href="/destinations/koh-phi-phi"
                  className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 border-l-4 border-cyan-600 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-gray-900 mb-1">Phi Phi Islands Guide</h4>
                  <p className="text-sm text-gray-600">Everything about Phi Phi Islands</p>
                </a>
                <a
                  href="/yacht-charter-thailand"
                  className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 border-l-4 border-cyan-600 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-gray-900 mb-1">Thailand Yacht Charter Guide</h4>
                  <p className="text-sm text-gray-600">Charter options across Thailand</p>
                </a>
                <a
                  href="/best-beaches"
                  className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 border-l-4 border-cyan-600 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-gray-900 mb-1">Best Beaches in Thailand</h4>
                  <p className="text-sm text-gray-600">Top beach destinations</p>
                </a>
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Ship className="w-5 h-5 text-cyan-600 mr-2" />
                Quick Navigation
              </h3>
              <nav className="space-y-2 text-sm">
                <a href="#charter-options" className="block text-gray-700 hover:text-cyan-600 transition-colors">
                  → Charter Options
                </a>
                <a href="#best-routes" className="block text-gray-700 hover:text-cyan-600 transition-colors">
                  → Best Routes
                </a>
                <a href="#cost-breakdown" className="block text-gray-700 hover:text-cyan-600 transition-colors">
                  → Cost Breakdown
                </a>
                <a href="#best-time" className="block text-gray-700 hover:text-cyan-600 transition-colors">
                  → When to Go
                </a>
                <a href="#charter-companies" className="block text-gray-700 hover:text-cyan-600 transition-colors">
                  → Charter Companies
                </a>
                <a href="#how-to-book" className="block text-gray-700 hover:text-cyan-600 transition-colors">
                  → How to Book
                </a>
                <a href="#checklist" className="block text-gray-700 hover:text-cyan-600 transition-colors">
                  → Checklist
                </a>
                <a href="#faq" className="block text-gray-700 hover:text-cyan-600 transition-colors">
                  → FAQs
                </a>
                <a href="#related-destinations" className="block text-gray-700 hover:text-cyan-600 transition-colors">
                  → Related Guides
                </a>
              </nav>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <DollarSign className="w-5 h-5 text-cyan-600 mr-2" />
                Quick Price Guide
              </h3>
              <div className="space-y-3 text-sm">
                <div className="bg-white p-3 rounded-lg">
                  <p className="font-semibold text-gray-900">Shared Tour</p>
                  <p className="text-cyan-600 font-bold">$50-120 /person</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="font-semibold text-gray-900">Semi-Private</p>
                  <p className="text-cyan-600 font-bold">$150-300 /person</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="font-semibold text-gray-900">Private Speedboat</p>
                  <p className="text-cyan-600 font-bold">$600-1,500 /day</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="font-semibold text-gray-900">Sailing Yacht</p>
                  <p className="text-cyan-600 font-bold">$1,500-5,000 /day</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="font-semibold text-gray-900">Luxury Motor Yacht</p>
                  <p className="text-cyan-600 font-bold">$3,000-10,000+ /day</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">Best Value Tip</h3>
              <p className="text-sm text-white/90">
                Private speedboat charters offer the best value for groups of 6-10 people. Split the cost and enjoy complete flexibility with your itinerary.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Routes</h3>
              <div className="space-y-3 text-sm">
                <div className="border-l-4 border-cyan-600 pl-3">
                  <p className="font-semibold text-gray-900">Phi Phi Islands</p>
                  <p className="text-gray-600">Full day, world-class snorkeling</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-3">
                  <p className="font-semibold text-gray-900">Phang Nga Bay</p>
                  <p className="text-gray-600">James Bond Island, limestone karsts</p>
                </div>
                <div className="border-l-4 border-emerald-600 pl-3">
                  <p className="font-semibold text-gray-900">Racha Islands</p>
                  <p className="text-gray-600">Half day, clear waters</p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <RelatedGuides
          links={[
            { title: 'Complete Thailand Yacht Charter Guide', path: '/yacht-charter-thailand' },
            { title: 'Phuket Destination Guide', path: '/destinations/phuket' },
            { title: 'Phi Phi Islands Guide', path: '/destinations/koh-phi-phi' },
          ]}
        />

        <YouMayAlsoLike
          links={[
            { title: 'Diving & Snorkeling in Thailand', path: '/diving-snorkeling-guide' },
            { title: 'Best Beaches in Thailand', path: '/best-beaches' },
            { title: 'Luxury Hotels in Phuket', path: '/luxury-hotels-by-destination-thailand#phuket-hotels' },
          ]}
        />
      </div>
    </div>
  );
}
