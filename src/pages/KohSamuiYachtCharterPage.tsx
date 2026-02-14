import { Anchor, Ship, Users, Clock, DollarSign, Check, X, AlertCircle, Sparkles, TrendingUp, Heart, Sailboat, Crown, MapPin, Info, Mountain, Waves, Camera, Sun, CloudRain, Calendar, HelpCircle, FileText, Star, Building2 } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import Breadcrumb from '../components/Breadcrumb';
import RelatedGuides from '../components/RelatedGuides';
import YouMayAlsoLike from '../components/YouMayAlsoLike';

export default function KohSamuiYachtCharterPage() {
  usePageMeta({
    title: 'Koh Samui Yacht Charter Guide 2026 | Ang Thong & Private Charters',
    description: 'Complete guide to Koh Samui yacht charters. Ang Thong Marine Park tours, private boats, luxury catamarans. Honest pricing from $80-$8,000+. Updated 2026.',
    keywords: 'koh samui yacht charter, samui boat charter, ang thong marine park tour, koh samui catamaran, yacht rental samui',
  });

  const charterOptions = [
    {
      name: 'Shared Catamaran Tours',
      category: 'Most Popular',
      cost: '$80-150 per person',
      duration: 'Full day (7-9 hours)',
      capacity: '15-25 people',
      icon: Users,
      description: 'Group tour on sailing catamaran with fixed itinerary to Ang Thong Marine Park',
      includes: ['Lunch, snorkeling, kayaking', 'Everything included', 'Social atmosphere'],
      routes: ['Ang Thong Marine Park (virtually all tours)', '42 islands archipelago', 'Emerald Lagoon kayak', 'Snorkeling spots', 'Beach time + viewpoint hike'],
      booking: 'GetYourGuide, Viator, Klook, hotel',
      pros: [
        'Affordable way to see Ang Thong',
        'Sailing experience',
        'Everything included',
        'Social (meet travelers)',
      ],
      cons: [
        'Crowded (20+ people)',
        'Fixed schedule (rushed at each stop)',
        'Everyone does same thing',
        'Early departure (7 AM pickup)',
      ],
      assessment: 'Best budget option for Ang Thong. Tours are well-organized but expect tourist crowds. Still beautiful - Ang Thong worth seeing despite crowds.',
      bestFor: 'Budget travelers, solo travelers, social atmosphere',
    },
    {
      name: 'Private Speedboat Charter',
      category: 'Popular Choice',
      cost: '$700-1,500 per day',
      duration: 'Full day or half-day',
      capacity: '6-10 people',
      icon: Anchor,
      description: 'Private boat for your group with customizable itinerary and flexible timing',
      includes: ['Boat + fuel', 'Captain + crew', 'Snorkeling gear', 'Soft drinks, water'],
      whatsExtra: ['Lunch (BYO or arrange)', 'Alcohol (BYO)', 'National park fees (300 baht/person for Ang Thong)'],
      routes: ['Ang Thong Marine Park (most popular)', 'Island hopping (Koh Taen, Koh Ma Dsum - Pig Island)', 'Koh Phangan (beaches + snorkeling)', 'Custom routes (your choice)'],
      booking: 'Entire boat for your group',
      pros: [
        'Privacy (your group only)',
        'Flexible schedule',
        'Fast (covers more ground)',
        'Skip crowded spots',
      ],
      cons: [
        'More expensive per person (unless full group)',
        'Need to bring own food often',
        'Can be rough if windy',
      ],
      assessment: 'Best Value: If you have 8-10 people, works out to $100-150 each - similar to shared tour but private!',
      bestFor: 'Families, groups, flexibility',
    },
    {
      name: 'Private Sailing Catamaran',
      category: 'Luxury',
      cost: '$2,000-4,000 per day',
      duration: 'Day charter, overnight, or multi-day',
      capacity: '6-12 people',
      icon: Sailboat,
      description: 'Private sailing catamaran with professional crew for a luxury, peaceful experience',
      includes: ['Catamaran + crew', 'Chef-prepared meals', 'Drinks (wine, beer usually included)', 'Snorkeling gear, kayaks, SUP boards', 'Cabins with bathrooms (for overnight)', 'Air-conditioned interior'],
      routes: ['Ang Thong overnight (sleep on board, best option!)', 'Koh Phangan + Koh Tao (multi-day)', 'Sunset sailing (evening cruises)'],
      booking: 'Entire catamaran for your group',
      pros: [
        'Luxury experience',
        'Stable (catamaran = less seasickness)',
        'Peaceful (sailing = quiet)',
        'Chef-prepared meals',
        'Overnight option (wake up in Ang Thong!)',
        'Spacious (lots of deck space)',
      ],
      cons: [
        'Expensive',
        'Slower than speedboat',
        'Need wind (sometimes motor anyway)',
      ],
      insiderTip: 'Overnight charter to Ang Thong is THE best way to experience it. You arrive afternoon (after day-trippers leave), have evening/night in empty park, wake up to sunrise. Worth the cost.',
      bestFor: 'Luxury travelers, couples, peaceful experience',
    },
    {
      name: 'Luxury Motor Yacht',
      category: 'Ultra-Luxury',
      cost: '$3,000-8,000+ per day',
      duration: 'Day charter or multi-day',
      capacity: '8-16 people',
      icon: Crown,
      description: 'Large motor yacht (50-80 feet) with multiple cabins, full crew, and high-end amenities',
      includes: ['Everything (full-service)', 'Full crew (captain, chef, stewards)', 'Gourmet meals', 'All water toys', 'Ultimate comfort'],
      features: ['Air-conditioned luxury cabins', 'Professional chef (gourmet meals)', 'Water toys (jet skis, water skis, inflatables)', 'Entertainment systems', 'Multiple decks', 'Full-service crew'],
      booking: 'Contact charter companies directly',
      pros: [
        'Ultimate comfort',
        'Full-service (everything handled)',
        'Impressive amenities',
        'Perfect for special occasions',
      ],
      cons: [
        'Very expensive',
        'Minimum spend often required',
        'May require advance booking',
      ],
      bestFor: 'Special occasions, corporate, ultra-luxury',
    },
  ];

  const angThongHighlights = [
    {
      name: 'Emerald Lagoon (Talay Nai)',
      badge: 'ICONIC',
      icon: Waves,
      description: 'Inland saltwater lake on Koh Mae Ko with stunning emerald green water',
      details: [
        'Viewpoint above (steep climb - worth it!)',
        'Cannot swim (protected)',
        'Photos from viewpoint = Instagram gold',
        'Most famous spot in Ang Thong',
      ],
    },
    {
      name: 'Wua Ta Lap Island',
      badge: 'Main Island',
      icon: Mountain,
      description: 'Park headquarters with the best panoramic viewpoint',
      details: [
        'Viewpoint hike (430 meters, 500 steps)',
        'Panoramic views of all 42 islands',
        'Best viewpoint in Ang Thong',
        'Takes 30-40 minutes to climb',
      ],
    },
    {
      name: 'Snorkeling Spots',
      badge: 'Multiple Locations',
      icon: Anchor,
      description: 'Good coral and colorful fish around multiple islands',
      details: [
        'Good coral (not world-class but nice)',
        'Colorful tropical fish',
        'Clear water',
        'Multiple spots to explore',
      ],
    },
    {
      name: 'Kayaking',
      badge: 'Included',
      icon: Sailboat,
      description: 'Paddle through caves and hidden lagoons',
      details: [
        'Through caves and hidden lagoons',
        'Most tours include kayaks',
        'Peaceful, beautiful',
        'Great for photography',
      ],
    },
    {
      name: 'Beaches',
      badge: 'Swimming',
      icon: Waves,
      description: 'White sand beaches on select islands',
      details: [
        'White sand beaches',
        'Swimming (designated areas)',
        'Relaxation time',
        'Less crowded than mainland',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: 'Destinations', path: '/destinations' },
            { label: 'Koh Samui', path: '/destinations/koh-samui' },
            { label: 'Koh Samui Yacht Charter' },
          ]}
        />

        <div className="relative h-[500px] -mx-4 sm:-mx-6 lg:-mx-8 mb-12">
          <img
            src="https://images.pexels.com/photos/1430676/pexels-photo-1430676.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Catamaran yacht charter near Ang Thong Marine Park, Koh Samui"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-center mb-4 uppercase tracking-[3px]">
              Koh Samui Yacht Charter Guide 2026
            </h1>
            <p className="text-xl sm:text-2xl text-center max-w-3xl font-light mb-2">
              Ang Thong Marine Park, Private Island Hopping & Luxury Charters
            </p>
            <p className="text-lg text-center text-white/90">
              Everything You Need to Know
            </p>
            <p className="text-sm text-white/80 mt-4">Updated February 2026</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          <div className="space-y-12">
            <section>
              <div className="bg-white rounded-lg shadow-md p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>Koh Samui</strong> is the perfect base for yacht charters in the Gulf of Thailand, offering access to the stunning <strong>Ang Thong Marine National Park</strong>, secluded islands, and pristine beaches. This guide covers all <strong>yacht charter options on Koh Samui</strong> - from budget shared tours ($80/person) to luxury private yachts ($5,000+/day). We'll give you honest pricing, the best routes, and insider tips for booking the perfect yacht experience from Samui.
                </p>

                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-6 border-l-4 border-cyan-600 mb-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                    <TrendingUp className="w-5 h-5 text-cyan-600 mr-2" />
                    Bottom Line:
                  </h3>
                  <p className="text-gray-700">
                    Samui yacht charters center around Ang Thong Marine Park (Thailand's most beautiful archipelago). Day trips popular, but multi-day charters offer the best experience. Generally more expensive than Phuket but less crowded.
                  </p>
                </div>

                <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-600">
                  <p className="text-sm text-gray-700">
                    <strong>Planning yacht charters elsewhere in Thailand?</strong> See our complete{' '}
                    <a href="/yacht-charter-thailand" className="text-cyan-600 hover:text-cyan-700 underline font-semibold">
                      Thailand Yacht Charter Guide
                    </a>{' '}
                    for Phuket, Krabi, and more destinations.
                  </p>
                </div>
              </div>
            </section>

            <section id="charter-options">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-cyan-600 pb-3">
                Yacht Charter Options in Koh Samui
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
                          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-4 border-l-4 border-amber-600 mb-4">
                            <h4 className="font-bold text-gray-900 mb-2">Honest Assessment:</h4>
                            <p className="text-gray-700">{option.assessment}</p>
                          </div>
                        )}

                        {option.insiderTip && (
                          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 border-l-4 border-cyan-600 mb-4">
                            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                              <Info className="w-5 h-5 text-cyan-600 mr-2" />
                              Insider Tip:
                            </h4>
                            <p className="text-gray-700">{option.insiderTip}</p>
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

            <section id="ang-thong">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-cyan-600 pb-3">
                Ang Thong Marine National Park
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">About Ang Thong</h3>
                    <div className="space-y-3 text-gray-700">
                      <p className="flex items-start">
                        <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>42 islands archipelago</span>
                      </p>
                      <p className="flex items-start">
                        <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Limestone cliffs, lagoons, caves</span>
                      </p>
                      <p className="flex items-start">
                        <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Protected national park</span>
                      </p>
                      <p className="flex items-start">
                        <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Thailand's most beautiful marine park</span>
                      </p>
                      <p className="flex items-start">
                        <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Inspired "The Beach" novel setting</span>
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Facts</h3>
                    <div className="space-y-4">
                      <div className="bg-cyan-50 rounded-lg p-4">
                        <p className="text-sm text-gray-600 mb-1">Distance from Samui:</p>
                        <p className="font-bold text-gray-900">30 km northwest</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <p className="text-sm text-gray-600 mb-1">Duration:</p>
                        <p className="font-bold text-gray-900">Full-day minimum (overnight best)</p>
                      </div>
                      <div className="bg-emerald-50 rounded-lg p-4">
                        <p className="text-sm text-gray-600 mb-1">Best For:</p>
                        <p className="font-bold text-gray-900">Stunning scenery, snorkeling, kayaking</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border-l-4 border-amber-600">
                  <h4 className="font-bold text-gray-900 mb-3">Ang Thong Costs:</h4>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-700">National park entrance fee:</span>
                      <span className="font-bold text-gray-900">300 baht/person</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Shared tour:</span>
                      <span className="font-bold text-gray-900">$80-150/person</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Private speedboat:</span>
                      <span className="font-bold text-gray-900">$900-1,300</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Private catamaran day:</span>
                      <span className="font-bold text-gray-900">$2,000-3,000</span>
                    </div>
                    <div className="flex justify-between sm:col-span-2">
                      <span className="text-gray-700">Private catamaran overnight:</span>
                      <span className="font-bold text-gray-900">$3,500-6,000</span>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Highlights in Ang Thong</h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {angThongHighlights.map((highlight, index) => {
                  const IconComponent = highlight.icon;
                  return (
                    <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden">
                      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-4">
                        <div className="flex items-center justify-between mb-2">
                          <IconComponent className="w-8 h-8" />
                          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-bold">
                            {highlight.badge}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold">{highlight.name}</h4>
                      </div>
                      <div className="p-4">
                        <p className="text-gray-700 mb-4 font-semibold text-sm">{highlight.description}</p>
                        <ul className="space-y-2">
                          {highlight.details.map((detail, i) => (
                            <li key={i} className="text-sm text-gray-700 flex items-start">
                              <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Sparkles className="w-6 h-6 mr-3" />
                  Why Overnight is Better
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 rounded-lg p-4">
                    <ul className="space-y-2 text-white/90">
                      <li className="flex items-start">
                        <span className="text-white mr-2">+</span>
                        <span>Day-trippers leave by 3 PM (park to yourself)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white mr-2">+</span>
                        <span>Sunset in Ang Thong (magical)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white mr-2">+</span>
                        <span>Night swimming (bioluminescence sometimes!)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <ul className="space-y-2 text-white/90">
                      <li className="flex items-start">
                        <span className="text-white mr-2">+</span>
                        <span>Sunrise (before boats arrive)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white mr-2">+</span>
                        <span>More time at each spot (not rushed)</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-amber-500 rounded-lg p-4">
                  <p className="text-white font-semibold">
                    <strong>TAT Won't Tell You:</strong> Day tours are rushed (you'll spend more time traveling than exploring). If you can afford overnight charter, DO IT - completely different experience when day-trippers are gone.
                  </p>
                </div>
              </div>
            </section>

            <section id="other-routes" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-cyan-600 pb-3">
                Other Yacht Routes from Koh Samui
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">Koh Phangan</h3>
                    <p className="text-emerald-100">Neighbor Island</p>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <p className="text-gray-600 font-semibold">Distance:</p>
                        <p className="text-gray-900">12 km north</p>
                      </div>
                      <div>
                        <p className="text-gray-600 font-semibold">Duration:</p>
                        <p className="text-gray-900">Half-day or full-day</p>
                      </div>
                      <div>
                        <p className="text-gray-600 font-semibold">Best For:</p>
                        <p className="text-gray-900">Beach hopping</p>
                      </div>
                      <div>
                        <p className="text-gray-600 font-semibold">Cost:</p>
                        <p className="text-gray-900">$600-900</p>
                      </div>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3">Highlights:</h4>
                    <ul className="space-y-2 mb-4">
                      {[
                        'Bottle Beach (beautiful, less developed)',
                        'Haad Yuan (Secret Beach) - secluded',
                        'Thong Nai Pan beaches (stunning)',
                        'Snorkeling spots (coral reefs)',
                        'Full Moon Party town (if that\'s your thing)',
                      ].map((item, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start">
                          <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-cyan-50 rounded-lg p-3 border-l-4 border-cyan-600">
                      <p className="text-sm text-gray-700">
                        <strong>Why Go:</strong> Phangan has better, less developed beaches than Samui. Great for day trip.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">Koh Tao</h3>
                    <p className="text-blue-100">The Diving Island</p>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <p className="text-gray-600 font-semibold">Distance:</p>
                        <p className="text-gray-900">48 km north</p>
                      </div>
                      <div>
                        <p className="text-gray-600 font-semibold">Duration:</p>
                        <p className="text-gray-900">Full-day or multi-day</p>
                      </div>
                      <div>
                        <p className="text-gray-600 font-semibold">Best For:</p>
                        <p className="text-gray-900">Diving, snorkeling</p>
                      </div>
                      <div>
                        <p className="text-gray-600 font-semibold">Cost:</p>
                        <p className="text-gray-900">$1,200-1,800</p>
                      </div>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3">Highlights:</h4>
                    <ul className="space-y-2 mb-4">
                      {[
                        'World-class diving/snorkeling',
                        'Beautiful beaches (Sai Nuan, Freedom Beach)',
                        'Underwater visibility excellent',
                        'Chill backpacker atmosphere',
                      ].map((item, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start">
                          <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-amber-50 rounded-lg p-3 border-l-4 border-amber-600">
                      <p className="text-sm text-gray-700">
                        <strong>Consider:</strong> Koh Tao far for day trip (2+ hours each way). Better as overnight or skip (stay on Tao itself).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">Pig Island & Coral Island</h3>
                    <p className="text-pink-100">Near Samui</p>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <p className="text-gray-600 font-semibold">Distance:</p>
                        <p className="text-gray-900">5-8 km from Samui</p>
                      </div>
                      <div>
                        <p className="text-gray-600 font-semibold">Duration:</p>
                        <p className="text-gray-900">Half-day</p>
                      </div>
                      <div>
                        <p className="text-gray-600 font-semibold">Best For:</p>
                        <p className="text-gray-900">Families, kids</p>
                      </div>
                      <div>
                        <p className="text-gray-600 font-semibold">Cost:</p>
                        <p className="text-gray-900">$400-600</p>
                      </div>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3">Highlights:</h4>
                    <ul className="space-y-2 mb-4">
                      {[
                        'Koh Ma Dsum (Pig Island) - pigs on beach (kids love it!)',
                        'Koh Taen (Coral Island) - good snorkeling',
                        'Very close to Samui (easy half-day)',
                      ].map((item, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start">
                          <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-cyan-50 rounded-lg p-3 border-l-4 border-cyan-600">
                      <p className="text-sm text-gray-700">
                        <strong>Why Go:</strong> Quick, easy, fun for families. Not as spectacular as Ang Thong but convenient.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="cost-breakdown" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-cyan-600 pb-3">
                Koh Samui Yacht Costs (Detailed)
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Price Comparison by Charter Type</h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border-l-4 border-blue-600">
                    <h4 className="font-bold text-gray-900 mb-4 text-lg">Shared Catamaran</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="text-gray-600">Ang Thong day tour:</p>
                        <p className="font-bold text-gray-900 text-lg">$80-150/person</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-blue-200">
                      <p className="text-xs text-gray-600"><strong>Includes:</strong> Lunch, drinks, snorkeling, kayaking, guide</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-lg p-6 border-l-4 border-emerald-600">
                    <h4 className="font-bold text-gray-900 mb-4 text-lg">Private Speedboat</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Half-day (4h):</span>
                        <span className="font-bold text-gray-900">$600-900</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Full-day (8h):</span>
                        <span className="font-bold text-gray-900">$900-1,500</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Ang Thong:</span>
                        <span className="font-bold text-gray-900">$1,000-1,500</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-emerald-200">
                      <p className="text-xs text-gray-600"><strong>Capacity:</strong> 6-10 people</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border-l-4 border-purple-600">
                    <h4 className="font-bold text-gray-900 mb-4 text-lg">Sailing Catamaran</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Day charter:</span>
                        <span className="font-bold text-gray-900">$2,000-3,500</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Overnight:</span>
                        <span className="font-bold text-gray-900">$3,500-6,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Multi-day/day:</span>
                        <span className="font-bold text-gray-900">$2,500-4,000</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6 border-l-4 border-amber-600">
                    <h4 className="font-bold text-gray-900 mb-4 text-lg">Luxury Motor Yacht</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Day charter:</span>
                        <span className="font-bold text-gray-900">$3,000-8,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Week charter:</span>
                        <span className="font-bold text-gray-900">$30,000-80,000+</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-6 border-l-4 border-cyan-600 mb-6">
                  <h4 className="font-bold text-gray-900 mb-4">Cost Per Person (if full group):</h4>
                  <div className="grid sm:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600 mb-1">Private speedboat (10 people):</p>
                      <p className="font-bold text-gray-900">$100-150/person</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Private catamaran (10 people):</p>
                      <p className="font-bold text-gray-900">$250-350/person</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Luxury yacht (12 people):</p>
                      <p className="font-bold text-gray-900">$350-650/person</p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-600">
                  <p className="text-sm text-gray-700">
                    <strong>Samui vs Phuket Pricing:</strong> Generally 15-20% MORE expensive than Phuket (smaller market, less competition).
                  </p>
                </div>
              </div>
            </section>

            <section id="best-time" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-cyan-600 pb-3">
                Best Time for Yacht Charter in Koh Samui
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold">High Season</h3>
                      <Sun className="w-8 h-8" />
                    </div>
                    <p className="text-lg text-green-100">December - March</p>
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
                          <span>Dry, sunny</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Calm seas</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Perfect conditions</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Best visibility</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 mb-4">
                      <h4 className="font-bold text-gray-900 mb-2 text-sm">Pros:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">+</span>
                          <span>Guaranteed good weather</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">+</span>
                          <span>All tours operate</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">+</span>
                          <span>Best snorkeling visibility</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2 text-sm">Cons:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-red-600 mr-2">-</span>
                          <span>20-30% premium pricing</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-600 mr-2">-</span>
                          <span>Crowded (book ahead)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-600 mr-2">-</span>
                          <span>Ang Thong busier</span>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-4 text-xs text-gray-600">
                      <strong>Peak:</strong> Dec-Feb (book 2-3 months ahead)
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold">Shoulder Season</h3>
                      <Sun className="w-8 h-8 opacity-70" />
                    </div>
                    <p className="text-lg text-orange-100">April-May, Oct-Nov</p>
                    <span className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mt-2">
                      GOOD VALUE
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-900 mb-2">Weather:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start">
                          <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Mostly good</span>
                        </li>
                        <li className="flex items-start">
                          <AlertCircle className="w-4 h-4 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Occasional rain (Apr-May hot)</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Usually fine for yachting</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 mb-4">
                      <h4 className="font-bold text-gray-900 mb-2 text-sm">Pros:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">+</span>
                          <span>15-25% cheaper</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">+</span>
                          <span>Fewer tourists</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">+</span>
                          <span>Still good weather</span>
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
                          <span>April-May VERY hot</span>
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
                    <span className="inline-block bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full mt-2">
                      CAUTION
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-900 mb-2">Weather:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start">
                          <AlertCircle className="w-4 h-4 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Monsoon season (BUT)</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Samui LESS affected than Phuket</span>
                        </li>
                        <li className="flex items-start">
                          <AlertCircle className="w-4 h-4 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Rain possible but often okay</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 mb-4">
                      <h4 className="font-bold text-gray-900 mb-2 text-sm">Pros:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">+</span>
                          <span>Cheapest (30-40% off)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">+</span>
                          <span>Very few tourists</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">+</span>
                          <span>Samui's monsoon milder</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2 text-sm">Cons:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-red-600 mr-2">-</span>
                          <span>Rain (usually short storms)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-600 mr-2">-</span>
                          <span>Seas can be rough</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-600 mr-2">-</span>
                          <span>Some days tours cancelled</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-cyan-50 rounded-lg p-3 mt-4">
                      <p className="text-xs text-gray-700">
                        <strong>Insider Info:</strong> Samui's monsoon is Oct-Nov (different from Phuket Jun-Sep). Check specific months.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="charter-companies" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-cyan-600 pb-3">
                Top Yacht Charter Companies in Koh Samui
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-xl p-8 border-l-4 border-cyan-600">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Building2 className="w-6 h-6 text-cyan-600 mr-3" />
                        <h3 className="text-2xl font-bold text-gray-900">Blue Stars</h3>
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
                      <p className="text-gray-600 font-semibold mb-1">Best For:</p>
                      <p className="text-gray-900">Ang Thong tours (most popular)</p>
                    </div>
                    <div>
                      <p className="text-gray-600 font-semibold mb-1">Fleet:</p>
                      <p className="text-gray-900">Catamarans, speedboats</p>
                    </div>
                    <div>
                      <p className="text-gray-600 font-semibold mb-1">Price:</p>
                      <p className="text-gray-900">$90-130/person (shared tours)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-8 border-l-4 border-blue-600">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Building2 className="w-6 h-6 text-blue-600 mr-3" />
                        <h3 className="text-2xl font-bold text-gray-900">Discovery Sailing</h3>
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
                      <p className="text-gray-600 font-semibold mb-1">Best For:</p>
                      <p className="text-gray-900">Private sailing catamaran charters</p>
                    </div>
                    <div>
                      <p className="text-gray-600 font-semibold mb-1">Fleet:</p>
                      <p className="text-gray-900">Modern sailing catamarans</p>
                    </div>
                    <div>
                      <p className="text-gray-600 font-semibold mb-1">Price:</p>
                      <p className="text-gray-900">$2,500-4,500/day</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-8 border-l-4 border-emerald-600">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Building2 className="w-6 h-6 text-emerald-600 mr-3" />
                        <h3 className="text-2xl font-bold text-gray-900">Samui Yacht Charter</h3>
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
                      <p className="text-gray-600 font-semibold mb-1">Best For:</p>
                      <p className="text-gray-900">Mix of private speedboats + yachts</p>
                    </div>
                    <div>
                      <p className="text-gray-600 font-semibold mb-1">Fleet:</p>
                      <p className="text-gray-900">Various sizes</p>
                    </div>
                    <div>
                      <p className="text-gray-600 font-semibold mb-1">Price:</p>
                      <p className="text-gray-900">$800-5,000/day depending on vessel</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="how-to-book" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-cyan-600 pb-3">
                How to Book Yacht Charter in Koh Samui
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Calendar className="w-6 h-6 text-cyan-600 mr-3" />
                    Option 1: Book Online
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">(Recommended for Shared Tours)</p>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Platforms:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>GetYourGuide, Viator (shared Ang Thong tours - best prices)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>ClickAndBoat (peer-to-peer yacht rental)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Direct with companies (private charters)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2 text-sm">Pros:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>+ Easy comparison</li>
                      <li>+ Reviews available</li>
                      <li>+ Secure payment</li>
                      <li>+ Book ahead (high season essential)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <MapPin className="w-6 h-6 text-emerald-600 mr-3" />
                    Option 2: Book Locally
                  </h3>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Where:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Chaweng Beach (many operators)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Fisherman's Village (Bophut - charter companies)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Hotel concierge (convenient but markup)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2 text-sm">Pros:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>+ Negotiate price</li>
                      <li>+ See boat before booking</li>
                      <li>+ Last-minute bookings</li>
                    </ul>
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
                      'Choose: Ang Thong (must-see) or other islands',
                      'Decide: Shared tour vs private charter (budget vs privacy)',
                      'Book ahead if high season (Dec-Mar)',
                      'Check weather forecast',
                      'Read reviews (quality varies)',
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
                  <ul className="space-y-2">
                    {[
                      'Swimsuit (wear under clothes)',
                      'Sunscreen SPF 50+ (reef-safe if possible)',
                      'Hat, sunglasses',
                      'Waterproof phone case',
                      'Light jacket (boat breeze)',
                      'Motion sickness pills (if prone)',
                      'Cash (park fees, tips)',
                      'Good shoes (if doing viewpoint hike)',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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
                    question: 'Is Ang Thong worth it?',
                    answer: 'YES. Most beautiful place in Gulf of Thailand. Even with crowds (day tour), still worth it.',
                  },
                  {
                    question: 'Day tour vs overnight to Ang Thong?',
                    answer: 'Day tour = see it (rushed). Overnight = experience it (magical). Overnight worth the extra cost if you can afford.',
                  },
                  {
                    question: 'Can we swim at Emerald Lagoon?',
                    answer: 'No, swimming prohibited (protected). But you can kayak around it and view from above.',
                  },
                  {
                    question: 'Is snorkeling good in Ang Thong?',
                    answer: 'Good, not world-class. Nice coral, colorful fish. Better on Koh Tao.',
                  },
                  {
                    question: 'Phuket or Samui for yacht charter?',
                    answer: 'Phuket: More options, cheaper, Phi Phi/Phang Nga famous. Samui: Ang Thong stunning, less crowded, calmer seas. Both worth it!',
                  },
                  {
                    question: 'Weather in low season?',
                    answer: 'Samui less affected than Phuket (different monsoon). October-November worst. Check forecast, have backup plan.',
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Charter a Yacht in Koh Samui?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Explore Ang Thong Marine Park and discover the Gulf of Thailand's hidden gems
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

            <section id="related-destinations" className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Heart className="w-6 h-6 text-cyan-600 mr-3" />
                Related Koh Samui Guides
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a
                  href="/destinations/koh-samui"
                  className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 border-l-4 border-cyan-600 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-gray-900 mb-1">Koh Samui Travel Guide</h4>
                  <p className="text-sm text-gray-600">Complete guide to visiting Koh Samui</p>
                </a>
                <a
                  href="/yacht-charter-thailand"
                  className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 border-l-4 border-cyan-600 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-gray-900 mb-1">Thailand Yacht Charter Guide</h4>
                  <p className="text-sm text-gray-600">Charter options across Thailand</p>
                </a>
                <a
                  href="/destinations/phuket"
                  className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 border-l-4 border-cyan-600 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-gray-900 mb-1">Phuket Yacht Charter</h4>
                  <p className="text-sm text-gray-600">Yacht charters from Phuket</p>
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
                <a href="#ang-thong" className="block text-gray-700 hover:text-cyan-600 transition-colors">
                  → Ang Thong Marine Park
                </a>
                <a href="#other-routes" className="block text-gray-700 hover:text-cyan-600 transition-colors">
                  → Other Routes
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
                  <p className="font-semibold text-gray-900">Shared Catamaran</p>
                  <p className="text-cyan-600 font-bold">$80-150 /person</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="font-semibold text-gray-900">Private Speedboat</p>
                  <p className="text-cyan-600 font-bold">$700-1,500 /day</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="font-semibold text-gray-900">Sailing Catamaran</p>
                  <p className="text-cyan-600 font-bold">$2,000-4,000 /day</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="font-semibold text-gray-900">Luxury Motor Yacht</p>
                  <p className="text-cyan-600 font-bold">$3,000-8,000+ /day</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">Top Recommendation</h3>
              <p className="text-sm text-white/90">
                Overnight catamaran charter to Ang Thong is the ultimate experience. Wake up to sunrise in the empty park - worth every baht!
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Main Destinations</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-cyan-600 pl-3">
                  <p className="font-semibold text-gray-900">Ang Thong Marine Park</p>
                  <p className="text-sm text-gray-600">42 islands, Emerald Lagoon</p>
                </div>
                <div className="border-l-4 border-emerald-600 pl-3">
                  <p className="font-semibold text-gray-900">Koh Phangan</p>
                  <p className="text-sm text-gray-600">Beach hopping, snorkeling</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-3">
                  <p className="font-semibold text-gray-900">Koh Tao</p>
                  <p className="text-sm text-gray-600">World-class diving</p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <RelatedGuides
          links={[
            { title: 'Complete Thailand Yacht Charter Guide', path: '/yacht-charter-thailand' },
            { title: 'Koh Samui Destination Guide', path: '/destinations/koh-samui' },
            { title: 'Phuket Yacht Charter', path: '/phuket-yacht-charter' },
          ]}
        />

        <YouMayAlsoLike
          links={[
            { title: 'Diving & Snorkeling in Thailand', path: '/diving-snorkeling-guide' },
            { title: 'Best Beaches in Thailand', path: '/best-beaches' },
            { title: 'Best Time to Visit Koh Samui', path: '/best-time-to-visit' },
          ]}
        />
      </div>
    </div>
  );
}
