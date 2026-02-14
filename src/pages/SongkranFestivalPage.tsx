import { usePageMeta } from '../hooks/usePageMeta';
import { Calendar, MapPin, DollarSign, Users, Clock, AlertCircle, Droplets, Music, Camera, Heart, Check, X, ThumbsUp, Star, Info, Sparkles, TrendingUp, HelpCircle } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import TableOfContents from '../components/TableOfContents';
import RelatedGuides from '../components/RelatedGuides';

export default function SongkranFestivalPage() {
  usePageMeta({
    title: 'Songkran Festival 2026 - Complete Guide, Costs & Safety Tips',
    description: 'Everything you need for Songkran Festival Thailand 2026. Best cities, booking strategy, costs, safety tips, and insider advice. Updated Feb 2026.',
    keywords: 'songkran festival thailand, songkran 2026, thai water festival, songkran bangkok, songkran chiang mai, songkran safety tips, songkran costs',
  });

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Events', path: '/events-calendar-thailand' },
    { label: 'Songkran Festival' },
  ];

  const tocItems = [
    { id: 'quick-facts', label: 'Quick Facts' },
    { id: 'what-is-songkran', label: 'What is Songkran?' },
    { id: 'when', label: 'When is Songkran?' },
    { id: 'where', label: 'Where to Celebrate' },
    { id: 'bangkok', label: 'Bangkok Songkran' },
    { id: 'chiang-mai', label: 'Chiang Mai Songkran' },
    { id: 'phuket', label: 'Phuket Songkran' },
    { id: 'booking', label: 'Accommodation Booking' },
    { id: 'costs', label: 'Costs Breakdown' },
    { id: 'what-to-bring', label: 'What to Bring' },
    { id: 'safety', label: 'Safety Tips' },
    { id: 'survival', label: 'Survival Guide' },
    { id: 'pros-cons', label: 'Pros & Cons' },
    { id: 'faq', label: 'FAQ' },
    { id: 'related-guides', label: 'Related Guides' },
  ];

  const relatedGuides = [
    {
      title: 'Thailand Events Calendar',
      description: 'All festivals and events throughout the year',
      link: '/events-calendar-thailand',
    },
    {
      title: 'Bangkok Travel Guide',
      description: 'Complete guide to visiting Bangkok',
      link: '/bangkok-guide',
    },
    {
      title: 'Chiang Mai Travel Guide',
      description: 'Explore northern Thailand\'s cultural capital',
      link: '/destinations/chiang-mai',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2049411/pexels-photo-2049411.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6 uppercase tracking-[3px]">
            Songkran Festival Thailand 2026
          </h1>
          <p className="text-2xl sm:text-3xl text-white/90 mb-4 font-light">
            Complete Guide to Thailand's Epic Water Festival
          </p>
          <p className="text-xl text-white/80 mb-8">
            Dates, Best Cities, Safety Tips & Everything You Need
          </p>
          <div className="bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm">
            Updated February 2026
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={breadcrumbItems} />

        <div className="grid lg:grid-cols-4 gap-12 mt-12">
          <div className="lg:col-span-3 space-y-12">
            <section className="bg-white rounded-lg shadow-md p-8">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>Songkran Festival</strong> is Thailand's most famous celebration - a three-day water festival marking the Thai New Year every April 13-15. What starts as a traditional Buddhist ritual of pouring water for blessings has evolved into the world's biggest water fight, with millions of people taking to the streets armed with water guns, buckets, and hoses. This complete guide covers everything you need to know about experiencing Songkran in Thailand.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border-l-4 border-blue-600 my-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <Info className="w-6 h-6 text-blue-600 mr-2" />
                    Bottom Line
                  </h3>
                  <p className="text-gray-700">
                    Songkran (April 13-15) is Thailand's wildest festival. Bangkok has the biggest celebrations, Chiang Mai the most traditional, and Phuket the best beach parties. Book accommodation 3-6 months ahead (prices double). It's chaotic, wet, and unforgettable.
                  </p>
                </div>

                <p className="text-gray-700">
                  <a href="/events-calendar-thailand" className="text-blue-600 hover:text-blue-700 font-semibold underline">
                    See all Thailand festivals and events at our Thailand Events Calendar
                  </a>
                </p>
              </div>
            </section>

            <section id="quick-facts">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-blue-600 pb-3">
                Quick Facts
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                  <Calendar className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Dates</h3>
                  <p className="text-gray-700 text-sm">April 13-15 annually (some cities extend to April 16-20)</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-cyan-600">
                  <Droplets className="w-8 h-8 text-cyan-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">What</h3>
                  <p className="text-gray-700 text-sm">Thai New Year water festival (Buddhist tradition + massive water fight)</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600">
                  <MapPin className="w-8 h-8 text-green-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Where</h3>
                  <p className="text-gray-700 text-sm">Nationwide (best in Bangkok, Chiang Mai, Phuket)</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-600">
                  <Users className="w-8 h-8 text-red-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Crowd Level</h3>
                  <p className="text-gray-700 text-sm">Extreme (millions participate)</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-600">
                  <DollarSign className="w-8 h-8 text-amber-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Budget</h3>
                  <p className="text-gray-700 text-sm">$$ (accommodation doubles in price)</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600">
                  <Heart className="w-8 h-8 text-purple-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Best For</h3>
                  <p className="text-gray-700 text-sm">Adventure seekers, party lovers, culture enthusiasts</p>
                </div>
              </div>
            </section>

            <section id="what-is-songkran">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-blue-600 pb-3">
                What is Songkran?
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">History & Significance</h3>

                <p className="text-gray-700 mb-6">
                  Songkran means "astrological passage" in Sanskrit - marking the sun's transition into the zodiac sign of Aries and the start of the Thai solar calendar year.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                      <Sparkles className="w-5 h-5 text-blue-600 mr-2" />
                      Traditional Meaning
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'Water symbolizes purification and washing away bad luck',
                        'Families visit temples to make merit',
                        'Pour water on Buddha statues respectfully',
                        'Pour scented water on elders\' hands for blessings',
                        'Clean homes thoroughly (spring cleaning)',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700">
                          <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                      <Droplets className="w-5 h-5 text-orange-600 mr-2" />
                      Modern Reality
                    </h4>
                    <p className="text-gray-700 text-sm mb-4">
                      What was once a gentle sprinkling has become the world's largest water fight. Entire cities shut down for 3 days as millions of people drench each other from dawn to dusk.
                    </p>
                    <div className="bg-orange-100 rounded-lg p-3">
                      <p className="text-xs text-gray-700 font-semibold">
                        Expect to be completely soaked within seconds of stepping outside during Songkran!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="when">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-blue-600 pb-3">
                When is Songkran?
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg p-6 mb-8">
                  <h3 className="text-2xl font-bold mb-2">2026 Dates</h3>
                  <div className="space-y-2">
                    <p className="text-lg">
                      <strong>Official:</strong> April 13-15, 2026 (Monday-Wednesday)
                    </p>
                    <p className="text-blue-100">
                      <strong>Extended:</strong> Many cities celebrate longer
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">City-Specific Dates</h3>

                <div className="space-y-6">
                  <div className="border-l-4 border-blue-600 pl-6 bg-blue-50 rounded-r-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">Bangkok: April 13-15 (main days)</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Silom Road: April 13-15</li>
                      <li>• Khao San Road: April 13-16 (extended)</li>
                      <li>• RCA nightlife area: April 13-16</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-600 pl-6 bg-green-50 rounded-r-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">Chiang Mai: April 13-16 (4 days!)</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Most intense celebrations in Thailand</li>
                      <li>• Moat area party central</li>
                      <li>• Old City becomes water war zone</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-cyan-600 pl-6 bg-cyan-50 rounded-r-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">Phuket: April 12-13 (starts early)</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Patong Beach: April 12-15</li>
                      <li>• Phuket Town: April 13 (traditional focus)</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-6 bg-purple-50 rounded-r-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">Pattaya: April 18-20 (LATER - avoid main crowds!)</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Same intensity, fewer tourists</li>
                      <li>• Beach + water = double fun</li>
                      <li>• Good alternative if Bangkok too crazy</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-amber-600 pl-6 bg-amber-50 rounded-r-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">Ayutthaya: April 13-15</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Historical temples + water fights</li>
                      <li>• Beautiful backdrop</li>
                      <li>• Less intense than Bangkok</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="where">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-blue-600 pb-3">
                Where to Celebrate Songkran
              </h2>

              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-bold">City</th>
                        <th className="px-6 py-4 text-left font-bold">Vibe</th>
                        <th className="px-6 py-4 text-left font-bold">Intensity</th>
                        <th className="px-6 py-4 text-left font-bold">Best For</th>
                        <th className="px-6 py-4 text-left font-bold">Pros</th>
                        <th className="px-6 py-4 text-left font-bold">Cons</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-4 font-bold text-gray-900">Bangkok</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Massive chaos</td>
                        <td className="px-6 py-4">
                          <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                            Extreme
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">First-timers</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Biggest, most famous</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Overwhelming</td>
                      </tr>
                      <tr className="hover:bg-green-50 transition-colors">
                        <td className="px-6 py-4 font-bold text-gray-900">Chiang Mai</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Traditional + wild</td>
                        <td className="px-6 py-4">
                          <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                            Very High
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">Culture + party</td>
                        <td className="px-6 py-4 text-sm text-gray-700">4 days, moat parties</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Very crowded</td>
                      </tr>
                      <tr className="hover:bg-cyan-50 transition-colors">
                        <td className="px-6 py-4 font-bold text-gray-900">Phuket</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Beach party</td>
                        <td className="px-6 py-4">
                          <span className="inline-block bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                            High
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">Beach lovers</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Ocean + water guns</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Touristy</td>
                      </tr>
                      <tr className="hover:bg-purple-50 transition-colors">
                        <td className="px-6 py-4 font-bold text-gray-900">Pattaya</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Late party</td>
                        <td className="px-6 py-4">
                          <span className="inline-block bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                            High
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">Avoid Bangkok crowds</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Apr 18-20, beach</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Seedy reputation</td>
                      </tr>
                      <tr className="hover:bg-amber-50 transition-colors">
                        <td className="px-6 py-4 font-bold text-gray-900">Ayutthaya</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Cultural</td>
                        <td className="px-6 py-4">
                          <span className="inline-block bg-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                            Medium
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">Culture focus</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Beautiful temples</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Gets very hot</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="bangkok" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-blue-600 pb-3">
                Bangkok Songkran
              </h2>

              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">1. Silom Road</h3>
                    <p className="text-blue-100">Most Famous</p>
                  </div>
                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Details:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li><strong>What:</strong> Main financial district becomes water battlefield</li>
                          <li><strong>When:</strong> April 13-15, peak 11 AM-6 PM</li>
                          <li><strong>Crowd:</strong> 100,000+ people daily</li>
                          <li><strong>Intensity:</strong> Extreme (non-stop water)</li>
                          <li><strong>Vibe:</strong> Party atmosphere, EDM music, beer</li>
                          <li><strong>Best For:</strong> Maximum chaos experience</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Tips:</h4>
                        <div className="space-y-3">
                          <div className="bg-green-50 rounded-lg p-3">
                            <p className="text-sm text-gray-700 flex items-start">
                              <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Start early (11 AM) for good spot</span>
                            </p>
                          </div>
                          <div className="bg-green-50 rounded-lg p-3">
                            <p className="text-sm text-gray-700 flex items-start">
                              <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Bring waterproof bag for phone</span>
                            </p>
                          </div>
                          <div className="bg-green-50 rounded-lg p-3">
                            <p className="text-sm text-gray-700 flex items-start">
                              <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Expect to be SOAKED within seconds</span>
                            </p>
                          </div>
                          <div className="bg-green-50 rounded-lg p-3">
                            <p className="text-sm text-gray-700 flex items-start">
                              <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Police presence high (safe but chaotic)</span>
                            </p>
                          </div>
                          <div className="bg-red-50 rounded-lg p-3">
                            <p className="text-sm text-gray-700 flex items-start">
                              <X className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Very crowded (hard to move)</span>
                            </p>
                          </div>
                          <div className="bg-red-50 rounded-lg p-3">
                            <p className="text-sm text-gray-700 flex items-start">
                              <X className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Gets unbearably hot by 3 PM</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">2. Khao San Road</h3>
                    <p className="text-orange-100">Backpacker Central</p>
                  </div>
                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Details:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li><strong>What:</strong> Famous backpacker street</li>
                          <li><strong>When:</strong> April 13-16 (extends one extra day)</li>
                          <li><strong>Crowd:</strong> Younger, international crowd</li>
                          <li><strong>Intensity:</strong> Very high</li>
                          <li><strong>Vibe:</strong> Party, loud music, buckets of water + alcohol</li>
                          <li><strong>Best For:</strong> Backpackers, party seekers</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Tips:</h4>
                        <div className="space-y-3">
                          <div className="bg-green-50 rounded-lg p-3">
                            <p className="text-sm text-gray-700 flex items-start">
                              <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Social atmosphere (easy to meet people)</span>
                            </p>
                          </div>
                          <div className="bg-green-50 rounded-lg p-3">
                            <p className="text-sm text-gray-700 flex items-start">
                              <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Bars stay open (drink between water fights)</span>
                            </p>
                          </div>
                          <div className="bg-green-50 rounded-lg p-3">
                            <p className="text-sm text-gray-700 flex items-start">
                              <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Cheaper than Silom area</span>
                            </p>
                          </div>
                          <div className="bg-red-50 rounded-lg p-3">
                            <p className="text-sm text-gray-700 flex items-start">
                              <X className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Can get rowdy (drunk tourists)</span>
                            </p>
                          </div>
                          <div className="bg-red-50 rounded-lg p-3">
                            <p className="text-sm text-gray-700 flex items-start">
                              <X className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Pickpockets active</span>
                            </p>
                          </div>
                          <div className="bg-red-50 rounded-lg p-3">
                            <p className="text-sm text-gray-700 flex items-start">
                              <X className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Quality control on alcohol buckets (be careful)</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">3. RCA (Royal City Avenue)</h3>
                    <p className="text-purple-100">Nightlife</p>
                  </div>
                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Details:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li><strong>What:</strong> Nightclub district</li>
                          <li><strong>When:</strong> April 13-16, peaks 3 PM-midnight</li>
                          <li><strong>Crowd:</strong> Thai locals + expats</li>
                          <li><strong>Intensity:</strong> High</li>
                          <li><strong>Vibe:</strong> Club music, foam parties</li>
                          <li><strong>Best For:</strong> Night owls, clubbers</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="chiang-mai" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-blue-600 pb-3">
                Chiang Mai Songkran
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg p-6 mb-8">
                  <h3 className="text-2xl font-bold mb-3 flex items-center">
                    <Star className="w-8 h-8 mr-3" />
                    Why Chiang Mai is Different
                  </h3>
                  <p className="text-green-100 text-lg">
                    Longest Celebration: 4 full days (April 13-16)
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Moat Water Fights</h3>
                <p className="text-gray-700 mb-6">
                  The ancient moat surrounding Old City becomes the ultimate water fight arena.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-4">Best Spots:</h4>
                    <ul className="space-y-2">
                      {[
                        { name: 'Tha Phae Gate', desc: 'Epicenter, most intense' },
                        { name: 'Moat Road', desc: 'Entire 5km loop is war zone' },
                        { name: 'Night Bazaar area', desc: 'Day + night celebrations' },
                      ].map((spot, index) => (
                        <li key={index} className="text-sm text-gray-700">
                          <strong>{spot.name}:</strong> {spot.desc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-4">Traditional Elements:</h4>
                    <ul className="space-y-2">
                      {[
                        'Morning temple visits',
                        'Buddhist ceremonies',
                        'Parade of Buddha images',
                        'Traditional Lanna performances',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700">
                          <Check className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-6 mb-8">
                  <h4 className="font-bold text-gray-900 mb-4">Chiang Mai Schedule:</h4>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { time: 'Morning (7-10 AM)', activity: 'Temple visits' },
                      { time: 'Midday (10 AM-2 PM)', activity: 'Water fights start' },
                      { time: 'Afternoon (2-6 PM)', activity: 'Peak intensity' },
                      { time: 'Evening (6-8 PM)', activity: 'Cool down, dinner' },
                      { time: 'Night (8 PM-2 AM)', activity: 'Parties continue' },
                    ].map((slot, index) => (
                      <div key={index} className="bg-white rounded-lg p-3">
                        <p className="font-bold text-gray-900 text-sm mb-1">{slot.time}</p>
                        <p className="text-xs text-gray-600">{slot.activity}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                      <ThumbsUp className="w-5 h-5 text-green-600 mr-2" />
                      Why Choose Chiang Mai:
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'Longer celebration (4 days vs 3)',
                        'More traditional culture mixed with party',
                        'Moat creates natural party zone',
                        'Smaller city (easier to navigate)',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700">
                          <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                      Consider:
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'Most crowded Songkran in Thailand',
                        'Accommodation hardest to find',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700">
                          <X className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="phuket" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-blue-600 pb-3">
                Phuket Songkran
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg p-6 mb-8">
                  <h3 className="text-2xl font-bold mb-2">Beach Water Festival</h3>
                  <p className="text-cyan-100">Phuket combines traditional Songkran with beach party atmosphere</p>
                </div>

                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">1. Patong Beach</h3>
                      <span className="bg-cyan-600 text-white text-sm font-bold px-4 py-2 rounded-full">Main Party</span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Details:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li><strong>When:</strong> April 12-15 (starts one day early!)</li>
                          <li><strong>What:</strong> Beach Road becomes water battlefield</li>
                          <li><strong>Crowd:</strong> Very high (tourists + locals)</li>
                          <li><strong>Vibe:</strong> Beach party + water guns</li>
                          <li><strong>Best For:</strong> Beach lovers, party atmosphere</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Tips:</h4>
                        <div className="space-y-3">
                          <div className="bg-green-50 rounded-lg p-3">
                            <p className="text-sm text-gray-700 flex items-start">
                              <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Ocean nearby (cool down anytime)</span>
                            </p>
                          </div>
                          <div className="bg-green-50 rounded-lg p-3">
                            <p className="text-sm text-gray-700 flex items-start">
                              <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Beach clubs host foam parties</span>
                            </p>
                          </div>
                          <div className="bg-green-50 rounded-lg p-3">
                            <p className="text-sm text-gray-700 flex items-start">
                              <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>More relaxed than Bangkok (can escape to beach)</span>
                            </p>
                          </div>
                          <div className="bg-red-50 rounded-lg p-3">
                            <p className="text-sm text-gray-700 flex items-start">
                              <X className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Very touristy</span>
                            </p>
                          </div>
                          <div className="bg-red-50 rounded-lg p-3">
                            <p className="text-sm text-gray-700 flex items-start">
                              <X className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>Hotels most expensive in Thailand</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">2. Phuket Town</h3>
                      <span className="bg-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full">Traditional Focus</span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Details:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li><strong>When:</strong> April 13 (main day)</li>
                          <li><strong>What:</strong> Old town streets, traditional ceremonies</li>
                          <li><strong>Crowd:</strong> Medium (more locals)</li>
                          <li><strong>Vibe:</strong> Cultural, family-friendly</li>
                          <li><strong>Best For:</strong> Traditional experience</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="booking" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-blue-600 pb-3">
                Accommodation Booking Strategy
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">When to Book</h3>

                <div className="space-y-6 mb-8">
                  <div className="border-l-4 border-green-600 pl-6 bg-green-50 rounded-r-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">3-6 MONTHS AHEAD (November-January)</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Prices normal</li>
                      <li>• Full selection available</li>
                      <li>• Best locations still open</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-yellow-600 pl-6 bg-yellow-50 rounded-r-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">2-3 MONTHS AHEAD (February-March)</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Prices starting to rise (30-50% increase)</li>
                      <li>• Good options still available</li>
                      <li>• Book NOW if planning</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-orange-600 pl-6 bg-orange-50 rounded-r-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">1 MONTH AHEAD (March)</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Prices DOUBLED or more</li>
                      <li>• Limited availability</li>
                      <li>• Budget options sold out</li>
                      <li>• Only expensive hotels left</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-red-600 pl-6 bg-red-50 rounded-r-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">LAST MINUTE (April)</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Expect 2-3x normal prices</li>
                      <li>• Very limited options</li>
                      <li>• May need to stay far from action</li>
                      <li>• <strong>NOT RECOMMENDED</strong></li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Price Increases by City</h3>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full bg-white border border-gray-200">
                    <thead className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-bold">City</th>
                        <th className="px-6 py-4 text-left font-bold">Normal Price</th>
                        <th className="px-6 py-4 text-left font-bold">Songkran Price</th>
                        <th className="px-6 py-4 text-left font-bold">Increase</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-blue-50">
                        <td className="px-6 py-4 font-bold text-gray-900">Bangkok (Silom)</td>
                        <td className="px-6 py-4 text-gray-700">$30-50</td>
                        <td className="px-6 py-4 text-gray-700">$80-150</td>
                        <td className="px-6 py-4"><span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold">2-3x</span></td>
                      </tr>
                      <tr className="hover:bg-green-50">
                        <td className="px-6 py-4 font-bold text-gray-900">Chiang Mai (Old City)</td>
                        <td className="px-6 py-4 text-gray-700">$25-40</td>
                        <td className="px-6 py-4 text-gray-700">$70-120</td>
                        <td className="px-6 py-4"><span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold">3x</span></td>
                      </tr>
                      <tr className="hover:bg-cyan-50">
                        <td className="px-6 py-4 font-bold text-gray-900">Phuket (Patong)</td>
                        <td className="px-6 py-4 text-gray-700">$40-60</td>
                        <td className="px-6 py-4 text-gray-700">$120-200</td>
                        <td className="px-6 py-4"><span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold">3x</span></td>
                      </tr>
                      <tr className="hover:bg-purple-50">
                        <td className="px-6 py-4 font-bold text-gray-900">Pattaya</td>
                        <td className="px-6 py-4 text-gray-700">$25-35</td>
                        <td className="px-6 py-4 text-gray-700">$60-90</td>
                        <td className="px-6 py-4"><span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold">2-3x</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Booking Tips</h3>
                  <ul className="space-y-3">
                    {[
                      'Book refundable rates if possible (plans may change)',
                      'Stay NEAR action (you\'ll be wet, don\'t want long commute)',
                      'Check if hotel allows wet guests in lobby (some don\'t!)',
                      'Higher floors better (noise from street parties)',
                      'Consider arriving April 12 or 16 (avoid peak travel)',
                    ].map((tip, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section id="costs" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-blue-600 pb-3">
                Costs Breakdown
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">Budget Songkran</h3>
                    <p className="text-3xl font-bold">$200-400</p>
                    <p className="text-sm text-green-100">total per person</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex justify-between">
                        <span>Accommodation (3 nights)</span>
                        <strong>$150-250</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Food</span>
                        <strong>$30-50</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Water guns/supplies</span>
                        <strong>$10-20</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Transport</span>
                        <strong>$10-20</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Activities</span>
                        <strong>$0</strong>
                      </li>
                      <li className="pt-3 border-t border-gray-200 flex justify-between font-bold text-base">
                        <span>Total</span>
                        <span>$200-340</span>
                      </li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-4">Street party is free!</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">Mid-Range</h3>
                    <p className="text-3xl font-bold">$500-800</p>
                    <p className="text-sm text-blue-100">total per person</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex justify-between">
                        <span>Accommodation</span>
                        <strong>$250-400</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Food</span>
                        <strong>$75-120</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Water guns/supplies</span>
                        <strong>$20-30</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Transport</span>
                        <strong>$30-50</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Activities</span>
                        <strong>$50-100</strong>
                      </li>
                      <li className="pt-3 border-t border-gray-200 flex justify-between font-bold text-base">
                        <span>Total</span>
                        <span>$425-700</span>
                      </li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-4">Mix of restaurants & organized tours</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">Luxury</h3>
                    <p className="text-3xl font-bold">$1,500-3,000+</p>
                    <p className="text-sm text-purple-100">total per person</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex justify-between">
                        <span>Accommodation</span>
                        <strong>$600-1,200</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Food</span>
                        <strong>$200-400</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Water guns/supplies</span>
                        <strong>$50</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Transport</span>
                        <strong>$100-200</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Activities</span>
                        <strong>$300-500</strong>
                      </li>
                      <li className="pt-3 border-t border-gray-200 flex justify-between font-bold text-base">
                        <span>Total</span>
                        <span>$1,250-2,350+</span>
                      </li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-4">VIP parties & private events</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="what-to-bring" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-blue-600 pb-3">
                What to Bring
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Check className="w-6 h-6 text-green-600 mr-2" />
                      Essential Items
                    </h3>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Waterproof Protection:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          {[
                            'Waterproof phone case (CRITICAL - $10-15)',
                            'Waterproof bag/pouch for valuables',
                            'Ziplock bags (backup protection)',
                            'Leave expensive items at hotel',
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Clothing:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          {[
                            'Quick-dry clothes (you\'ll be soaked all day)',
                            'Swimsuit under clothes',
                            'Sandals/water shoes (avoid flip-flops - easy to lose)',
                            'Sunglasses with strap (or cheap ones)',
                            'Hat (sun protection)',
                            'Change of dry clothes in waterproof bag',
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Sun Protection:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          {[
                            'Waterproof sunscreen SPF 50+ (reapply constantly)',
                            'Aloe vera gel (for inevitable sunburn)',
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Water Fight Gear:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          {[
                            'Water gun (buy in Thailand $5-30)',
                            'Small backpack water gun (hands-free)',
                            'Bucket (locals use these - very effective)',
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Droplets className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <X className="w-6 h-6 text-red-600 mr-2" />
                      What NOT to Bring
                    </h3>

                    <ul className="space-y-3 text-sm text-gray-700">
                      {[
                        'Expensive camera (unless fully waterproof)',
                        'Leather shoes/bag (will be ruined)',
                        'White clothes (will become see-through when wet)',
                        'Contact lenses (water + street water = eye problems)',
                        'Anything you can\'t afford to lose/damage',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start bg-white rounded-lg p-3">
                          <X className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="safety" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-red-600 pb-3">
                Safety Tips & Warnings
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-600 mb-8">
                  <h3 className="text-xl font-bold text-red-900 mb-3 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2" />
                    Important Safety Information
                  </h3>
                  <p className="text-red-800">
                    Traffic deaths spike during Songkran due to drunk driving. Take precautions seriously.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Traffic Dangers</h3>
                    <ul className="space-y-3">
                      {[
                        'Traffic DEATHS spike during Songkran (drunk driving)',
                        'Avoid motorbikes (wet roads + drunk drivers = accidents)',
                        'Don\'t drive yourself (seriously, don\'t)',
                        'Use Grab/Bolt or walk',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700 bg-red-50 rounded-lg p-3">
                          <AlertCircle className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Protect Valuables</h3>
                    <ul className="space-y-3">
                      {[
                        'Pickpockets active (distraction = opportunity)',
                        'Don\'t bring expensive phone to street',
                        'Waterproof case still get stolen',
                        'Keep minimal cash only',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700 bg-orange-50 rounded-lg p-3">
                          <AlertCircle className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Health & Safety</h3>
                    <ul className="space-y-3">
                      {[
                        'Street water often dirty (tap water + buckets)',
                        'Keep mouth closed when splashed',
                        'Avoid getting water in eyes',
                        'Some people add ice = can hurt',
                        'Aggressive water blasting can injure',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700 bg-yellow-50 rounded-lg p-3">
                          <AlertCircle className="w-4 h-4 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Respect Boundaries</h3>
                    <ul className="space-y-3">
                      {[
                        'Monks, elderly, babies = OFF LIMITS (don\'t splash)',
                        'People in business attire = usually off limits',
                        'Some people not participating (respect that)',
                        'Temples are safe zones (no water inside)',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700 bg-green-50 rounded-lg p-3">
                          <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="survival" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-blue-600 pb-3">
                Songkran Survival Guide
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Hour-by-Hour Strategy</h3>

                <div className="space-y-4 mb-8">
                  {[
                    { time: '8-10 AM', title: 'Start Day', items: ['Eat big breakfast', 'Apply sunscreen (waterproof)', 'Prepare gear', 'Check weather'] },
                    { time: '10 AM-12 PM', title: 'Enter Battle Zone', items: ['Crowd building', 'Energy high', 'Good time for photos', 'Not too hot yet'] },
                    { time: '12-2 PM', title: 'PEAK HEAT', items: ['Hottest time of day (35-40C / 95-105F)', 'Find shade periodically', 'Hydrate constantly', 'Take breaks'] },
                    { time: '2-4 PM', title: 'Second Wind', items: ['Crowds still intense', 'Slightly cooler', 'Most fun hours'] },
                    { time: '4-6 PM', title: 'Wind Down', items: ['Parties continue but mellowing', 'Good time to head back', 'Shower, change'] },
                    { time: '6 PM+', title: 'Evening', items: ['Dinner (you\'ll be exhausted and hungry)', 'Some street parties continue', 'Clubs/bars with Songkran events', 'Or rest for next day'] },
                  ].map((slot, index) => (
                    <div key={index} className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 border-l-4 border-cyan-600">
                      <h4 className="font-bold text-gray-900 mb-2">
                        <span className="text-cyan-600">{slot.time}:</span> {slot.title}
                      </h4>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {slot.items.map((item, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start">
                            <span className="mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-l-4 border-green-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Survival Tips</h3>
                  <ul className="space-y-3">
                    {[
                      'Start hydrated (drink water before going out)',
                      'Bring water bottle (refill at 7-Eleven)',
                      'Take breaks in air-conditioned malls/cafes',
                      'Eat lunch (you\'ll forget to eat, then crash)',
                      'Reapply sunscreen every 2 hours',
                      'Have exit strategy (know how to get home)',
                    ].map((tip, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section id="pros-cons" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-blue-600 pb-3">
                Pros & Cons (Honest Assessment)
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center">
                    <ThumbsUp className="w-8 h-8 mr-3" />
                    Pros
                  </h3>
                  <ul className="space-y-4">
                    {[
                      'Unique cultural experience (nowhere else like it)',
                      'Incredibly fun (inner child unleashed)',
                      'Everyone\'s friendly (shared experience)',
                      'Free entertainment (street party costs nothing)',
                      'Great way to cool down (Thailand very hot in April)',
                      'Photos/memories for life',
                      'Can participate as much or little as you want',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start text-gray-700 bg-green-50 rounded-lg p-3">
                        <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-red-700 mb-6 flex items-center">
                    <X className="w-8 h-8 mr-3" />
                    Cons
                  </h3>
                  <ul className="space-y-4">
                    {[
                      'Extremely crowded (millions of people)',
                      'Accommodation expensive (2-3x normal)',
                      'Can be chaotic (overwhelming for some)',
                      'Traffic dangerous (drunk driving deaths)',
                      'Everything shuts down (hard to do other activities)',
                      'Very hot (40C+ before water cools you)',
                      'Pickpockets active',
                      'Street water often dirty',
                      'Hard to escape once you\'re in it',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start text-gray-700 bg-red-50 rounded-lg p-3">
                        <X className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Is It Worth It?</h3>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
                    <h4 className="font-bold text-green-900 mb-4 text-lg">YES, if you:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {[
                        'Want unique Thailand experience',
                        'Don\'t mind crowds and chaos',
                        'Are okay getting completely soaked',
                        'Can book accommodation in advance',
                        'Want to party and have fun',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-600">
                    <h4 className="font-bold text-red-900 mb-4 text-lg">NO, if you:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {[
                        'Hate crowds',
                        'Want peaceful Thailand trip',
                        'Traveling with very young kids',
                        'Prefer cultural tourism over party',
                        'Can\'t book accommodation ahead (too expensive last minute)',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <X className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="faq" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-blue-600 pb-3">
                Frequently Asked Questions
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8 space-y-6">
                {[
                  {
                    q: 'Is Songkran safe?',
                    a: 'Generally yes in major cities with police presence. Main danger is traffic (drunk driving). Avoid motorbikes, don\'t drive yourself. Pickpockets active but violent crime rare.',
                  },
                  {
                    q: 'Can I avoid getting wet?',
                    a: 'Not really if you go outside in main areas. Some "safe zones" (temples, hospitals, government buildings) but streets are water war zones. If you don\'t want wet, stay in hotel or visit different time.',
                  },
                  {
                    q: 'What if I don\'t want to participate?',
                    a: 'Wear regular clothes (not swimwear), walk purposefully, avoid main party zones. Some people respect this, but you might still get splashed. Taxis and malls are safe zones.',
                  },
                  {
                    q: 'Is it family-friendly?',
                    a: 'Depends on family. Younger kids (under 5) might be overwhelmed. Ages 8-15 often love it. Some family-friendly zones exist with less intensity. Phuket Town more family-oriented than Patong.',
                  },
                  {
                    q: 'Can I bring my phone?',
                    a: 'Only in waterproof case, and even then risky. Consider cheap phone for the day, leave expensive one at hotel. Many travelers\' phones get damaged despite protection.',
                  },
                  {
                    q: 'Do hotels let wet guests in?',
                    a: 'Most do (it\'s Songkran!), but lobby floors will be wet. Some luxury hotels have towel stations. Check hotel policy before booking.',
                  },
                  {
                    q: 'How should I carry money?',
                    a: 'Waterproof pouch on body, or leave at hotel. Bring minimal cash only. Many places accept QR code payment (PromptPay) so phone in waterproof case useful.',
                  },
                  {
                    q: 'Which city is best for first-timers?',
                    a: 'Bangkok (Silom area) - most famous, easy to access, can escape if overwhelmed. Chiang Mai more intense/longer, Phuket more touristy, Pattaya later dates (avoid main crowds).',
                  },
                  {
                    q: 'How many days should I attend?',
                    a: '1-2 days enough for most people. Three days exhausting. Consider: Day 1 full participation, Day 2 lighter, Day 3 rest/recovery or explore quieter areas.',
                  },
                  {
                    q: 'What happens at night?',
                    a: 'Water fights wind down by 6-7 PM. Clubs and bars host foam parties, DJ events, concerts. Bangkok and Phuket have best nightlife during Songkran.',
                  },
                ].map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 text-white rounded-lg shadow-2xl p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready for Songkran 2026?</h2>
              <p className="text-xl text-white/90 mb-4">
                Start planning your Thailand water festival adventure now
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8 max-w-2xl mx-auto">
                <p className="text-white/80 text-sm">
                  Book accommodation 3-6 months ahead to get the best rates and locations. Don't wait - hotels sell out fast and prices double closer to the festival dates!
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/events-calendar-thailand"
                  className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
                >
                  View All Thailand Events
                </a>
                <a
                  href="/contact"
                  className="inline-block bg-blue-700 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors border-2 border-white text-lg"
                >
                  Get Travel Help
                </a>
              </div>
            </section>

            <section id="related-guides" className="mt-12">
              <RelatedGuides guides={relatedGuides} />
            </section>

            <section className="mt-12 bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 text-blue-600 mr-3" />
                More Thailand Festival Guides
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a
                  href="/events-calendar-thailand"
                  className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 border-l-4 border-blue-600 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-gray-900 mb-1">Thailand Events Calendar</h4>
                  <p className="text-sm text-gray-600">All festivals throughout the year</p>
                </a>
                <a
                  href="/bangkok-guide"
                  className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 border-l-4 border-blue-600 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-gray-900 mb-1">Bangkok Travel Guide</h4>
                  <p className="text-sm text-gray-600">Complete guide to Thailand's capital</p>
                </a>
                <a
                  href="/destinations/chiang-mai"
                  className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-600 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-gray-900 mb-1">Chiang Mai Guide</h4>
                  <p className="text-sm text-gray-600">Explore Northern Thailand</p>
                </a>
                <a
                  href="/destinations/phuket"
                  className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 border-l-4 border-cyan-600 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-gray-900 mb-1">Phuket Guide</h4>
                  <p className="text-sm text-gray-600">Thailand's largest island paradise</p>
                </a>
              </div>
            </section>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <TableOfContents items={tocItems} />

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">2026 Dates</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-600 pl-3">
                    <p className="font-semibold text-gray-900">Official</p>
                    <p className="text-sm text-gray-600">April 13-15, 2026</p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-3">
                    <p className="font-semibold text-gray-900">Chiang Mai</p>
                    <p className="text-sm text-gray-600">April 13-16 (4 days)</p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-3">
                    <p className="font-semibold text-gray-900">Pattaya</p>
                    <p className="text-sm text-gray-600">April 18-20 (later)</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Tips</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Book accommodation 3-6 months ahead</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Waterproof EVERYTHING</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Expect to be soaked 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Prices double during festival</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Wear quick-dry clothes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Best Cities</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-600 pl-3">
                    <p className="font-semibold text-gray-900">Bangkok</p>
                    <p className="text-sm text-gray-600">Biggest, most famous</p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-3">
                    <p className="font-semibold text-gray-900">Chiang Mai</p>
                    <p className="text-sm text-gray-600">4 days, traditional + wild</p>
                  </div>
                  <div className="border-l-4 border-cyan-600 pl-3">
                    <p className="font-semibold text-gray-900">Phuket</p>
                    <p className="text-sm text-gray-600">Beach party vibes</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
