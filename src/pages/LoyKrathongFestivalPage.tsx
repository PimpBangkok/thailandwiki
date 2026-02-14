import { usePageMeta } from '../hooks/usePageMeta';
import { Calendar, MapPin, DollarSign, Users, Heart, Camera, Sparkles, Star, Info, Check, X, ThumbsUp, Lightbulb, TrendingUp, AlertCircle, Leaf } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import TableOfContents from '../components/TableOfContents';
import RelatedGuides from '../components/RelatedGuides';

export default function LoyKrathongFestivalPage() {
  usePageMeta({
    title: 'Loy Krathong 2026 - Complete Guide, Best Cities & Photo Tips',
    description: 'Experience Loy Krathong lantern festival Thailand 2026. Best cities, how to participate, booking tips, and photo guide. November 15, 2026.',
    keywords: 'loy krathong festival thailand, loy krathong 2026, thailand lantern festival, yi peng chiang mai, loy krathong vs yi peng, loy krathong photography tips',
  });

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Events', path: '/events-calendar-thailand' },
    { label: 'Loy Krathong Festival' },
  ];

  const tocItems = [
    { id: 'quick-facts', label: 'Quick Facts' },
    { id: 'what-is-loy-krathong', label: 'What is Loy Krathong?' },
    { id: 'when', label: 'When is Loy Krathong?' },
    { id: 'loy-krathong-vs-yi-peng', label: 'Loy Krathong vs Yi Peng' },
    { id: 'where', label: 'Where to Celebrate' },
    { id: 'chiang-mai', label: 'Chiang Mai' },
    { id: 'bangkok', label: 'Bangkok' },
    { id: 'sukhothai', label: 'Sukhothai' },
    { id: 'ayutthaya', label: 'Ayutthaya' },
    { id: 'how-to-participate', label: 'How to Participate' },
    { id: 'booking', label: 'Accommodation Booking' },
    { id: 'costs', label: 'Costs Breakdown' },
    { id: 'photo-locations', label: 'Best Photo Locations' },
    { id: 'environmental', label: 'Environmental Concerns' },
    { id: 'safety', label: 'Safety Tips' },
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
      title: 'Songkran Festival',
      description: 'Thailand\'s epic water festival in April',
      link: '/songkran-festival-thailand',
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
          backgroundImage: 'url(https://images.pexels.com/photos/1666315/pexels-photo-1666315.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6 uppercase tracking-[3px]">
            Loy Krathong Festival Thailand 2026
          </h1>
          <p className="text-2xl sm:text-3xl text-white/90 mb-4 font-light">
            Complete Guide to Thailand's Beautiful Lantern Festival
          </p>
          <p className="text-xl text-white/80 mb-8">
            Dates, Best Cities, How to Participate & Everything You Need
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
                  <strong>Loy Krathong</strong> is Thailand's most magical festival - a night when millions of lotus-shaped floats (krathongs) drift down rivers carrying candles, incense, and wishes, while thousands of glowing lanterns rise into the sky. Held on the full moon of the 12th lunar month (usually November), this beautiful Buddhist tradition transforms Thailand's waterways into rivers of light. This complete guide covers everything you need to know about experiencing Loy Krathong in Thailand.
                </p>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border-l-4 border-purple-600 my-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <Info className="w-6 h-6 text-purple-600 mr-2" />
                    Bottom Line
                  </h3>
                  <p className="text-gray-700">
                    Loy Krathong (November 15, 2026) is Thailand's most photogenic festival. Bangkok and Chiang Mai offer the biggest celebrations, while Sukhothai provides the most traditional experience. In Chiang Mai, it coincides with Yi Peng sky lantern festival for a spectacular combination. Book accommodation 2-3 months ahead.
                  </p>
                </div>

                <p className="text-gray-700">
                  <a href="/events-calendar-thailand" className="text-purple-600 hover:text-purple-700 font-semibold underline">
                    See all Thailand festivals and events at our Thailand Events Calendar
                  </a>
                </p>
              </div>
            </section>

            <section id="quick-facts">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-purple-600 pb-3">
                Quick Facts
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600">
                  <Calendar className="w-8 h-8 text-purple-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Date</h3>
                  <p className="text-gray-700 text-sm">November 15, 2026 (Friday) - Full moon of 12th lunar month</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-pink-600">
                  <Sparkles className="w-8 h-8 text-pink-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">What</h3>
                  <p className="text-gray-700 text-sm">Floating lantern festival (water + sky lanterns)</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                  <MapPin className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Where</h3>
                  <p className="text-gray-700 text-sm">Nationwide (best in Chiang Mai, Bangkok, Sukhothai, Ayutthaya)</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-600">
                  <Users className="w-8 h-8 text-orange-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Crowd Level</h3>
                  <p className="text-gray-700 text-sm">High (but less intense than Songkran)</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600">
                  <DollarSign className="w-8 h-8 text-green-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Budget</h3>
                  <p className="text-gray-700 text-sm">$ (more affordable than Songkran)</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-600">
                  <Heart className="w-8 h-8 text-red-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Best For</h3>
                  <p className="text-gray-700 text-sm">Romantic couples, photographers, culture lovers</p>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg p-6 border-l-4 border-amber-600">
                <p className="text-gray-700 font-semibold flex items-center">
                  <Lightbulb className="w-5 h-5 text-amber-600 mr-2" />
                  <strong>Note:</strong> In Chiang Mai, coincides with Yi Peng (sky lanterns)
                </p>
              </div>
            </section>

            <section id="what-is-loy-krathong">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-purple-600 pb-3">
                What is Loy Krathong?
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">History & Meaning</h3>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-4 text-lg">Etymology</h4>
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-gray-900"><strong>"Loy"</strong> = Float</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-gray-900"><strong>"Krathong"</strong> = Lotus-shaped container made from banana leaves</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-4 text-lg">Traditional Meaning</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {[
                        'Thank the water goddess (Phra Mae Khongkha)',
                        'Apologize for using/polluting water throughout the year',
                        'Float away bad luck and negative energy',
                        'Make wishes for the coming year',
                        'Couples floating krathongs together = good fortune',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 mb-8">
                  <h4 className="font-bold text-gray-900 mb-4">What You Float</h4>
                  <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                    {[
                      'Banana leaf krathong (lotus-shaped boat)',
                      'Decorated with flowers, incense, candles',
                      'Often include hair, nail clippings (symbolically sending away bad luck)',
                      'Coin offering (traditionally a small coin)',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Sparkles className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border-l-4 border-amber-600">
                  <h4 className="font-bold text-gray-900 mb-3">Modern Celebration</h4>
                  <p className="text-gray-700">
                    What was once a quiet, reflective ceremony has become Thailand's most Instagram-worthy festival. Millions participate, creating stunning rivers of flickering lights.
                  </p>
                </div>
              </div>
            </section>

            <section id="when">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-purple-600 pb-3">
                When is Loy Krathong?
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">2026-2028 Dates</h3>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-lg p-6">
                    <h4 className="text-3xl font-bold mb-2">2026</h4>
                    <p className="text-xl">November 15</p>
                    <p className="text-sm text-purple-100 mt-2">Sunday</p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-lg p-6">
                    <h4 className="text-3xl font-bold mb-2">2027</h4>
                    <p className="text-xl">November 5</p>
                    <p className="text-sm text-blue-100 mt-2">Friday</p>
                  </div>

                  <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-lg p-6">
                    <h4 className="text-3xl font-bold mb-2">2028</h4>
                    <p className="text-xl">November 23</p>
                    <p className="text-sm text-green-100 mt-2">Thursday</p>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-lg p-4 mb-8 border-l-4 border-amber-600">
                  <p className="text-gray-700 text-sm">
                    <strong>Note:</strong> Date changes yearly (lunar calendar - 12th full moon)
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Festival Duration</h3>

                <div className="space-y-4">
                  <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-600">
                    <h4 className="font-bold text-gray-900 mb-2">Main Night</h4>
                    <p className="text-gray-700 text-sm">Full moon night (most spectacular)</p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
                    <h4 className="font-bold text-gray-900 mb-2">Extended</h4>
                    <p className="text-gray-700 text-sm">Some cities celebrate 2-3 days around full moon</p>
                  </div>

                  <div className="bg-pink-50 rounded-lg p-4 border-l-4 border-pink-600">
                    <h4 className="font-bold text-gray-900 mb-2">Peak Time</h4>
                    <p className="text-gray-700 text-sm">6 PM - 10 PM (sunset to late evening)</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="loy-krathong-vs-yi-peng">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-purple-600 pb-3">
                Loy Krathong vs Yi Peng (Important!)
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Confusion Explained</h3>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border-2 border-blue-300">
                    <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                      <Sparkles className="w-6 h-6 mr-2" />
                      LOY KRATHONG
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Water lanterns (floating on rivers/lakes)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Celebrated nationwide across Thailand</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>November full moon</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-300">
                    <h4 className="text-xl font-bold text-purple-900 mb-4 flex items-center">
                      <Star className="w-6 h-6 mr-2" />
                      YI PENG
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Sky lanterns (released into air)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Unique to Chiang Mai (Northern Thailand)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Same dates as Loy Krathong</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">In Chiang Mai: You get BOTH festivals simultaneously!</h3>
                  <ul className="space-y-2 text-amber-100 text-left max-w-2xl mx-auto">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Float krathongs on rivers (Loy Krathong)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Release sky lanterns (Yi Peng)</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                      <span><strong>Most spectacular celebration in Thailand</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="where">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-purple-600 pb-3">
                Where to Celebrate Loy Krathong
              </h2>

              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-bold">City</th>
                        <th className="px-6 py-4 text-left font-bold">Vibe</th>
                        <th className="px-6 py-4 text-left font-bold">Best For</th>
                        <th className="px-6 py-4 text-left font-bold">Crowd Level</th>
                        <th className="px-6 py-4 text-left font-bold">Pros</th>
                        <th className="px-6 py-4 text-left font-bold">Cons</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-purple-50 transition-colors">
                        <td className="px-6 py-4 font-bold text-gray-900">Chiang Mai</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Magical (sky + water)</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Couples, photos</td>
                        <td className="px-6 py-4">
                          <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                            Very High
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">Both festivals</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Very crowded</td>
                      </tr>
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-4 font-bold text-gray-900">Bangkok</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Grand celebration</td>
                        <td className="px-6 py-4 text-sm text-gray-700">First-timers</td>
                        <td className="px-6 py-4">
                          <span className="inline-block bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                            High
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">Accessible, big</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Less traditional</td>
                      </tr>
                      <tr className="hover:bg-green-50 transition-colors">
                        <td className="px-6 py-4 font-bold text-gray-900">Sukhothai</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Most traditional</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Culture lovers</td>
                        <td className="px-6 py-4">
                          <span className="inline-block bg-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                            Medium
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">Historical beauty</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Remote location</td>
                      </tr>
                      <tr className="hover:bg-amber-50 transition-colors">
                        <td className="px-6 py-4 font-bold text-gray-900">Ayutthaya</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Historical setting</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Day trip option</td>
                        <td className="px-6 py-4">
                          <span className="inline-block bg-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                            Medium
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">Temple backdrop</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Hot, crowded</td>
                      </tr>
                      <tr className="hover:bg-cyan-50 transition-colors">
                        <td className="px-6 py-4 font-bold text-gray-900">Tak</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Unique style</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Adventurous</td>
                        <td className="px-6 py-4">
                          <span className="inline-block bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                            Low
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">Different tradition</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Very remote</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="chiang-mai" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-purple-600 pb-3">
                Chiang Mai Loy Krathong & Yi Peng
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-6 mb-8">
                  <h3 className="text-2xl font-bold mb-3 flex items-center">
                    <Star className="w-8 h-8 mr-3" />
                    Why Chiang Mai is Special
                  </h3>
                  <div className="space-y-2 text-purple-100">
                    <p className="text-lg"><strong>Double Festival:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• Loy Krathong (water lanterns on rivers)</li>
                      <li>• Yi Peng (sky lanterns released into air)</li>
                      <li>• Both happen simultaneously</li>
                      <li>• Most photographed festival in Thailand</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Best Locations in Chiang Mai</h3>

                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-8 border-l-4 border-blue-600">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-2xl font-bold text-gray-900">1. Ping River</h4>
                      <span className="bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full">Main Area</span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h5 className="font-bold text-gray-900 mb-3">Details:</h5>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li><strong>What:</strong> Main river through city</li>
                          <li><strong>When:</strong> Nov 14-16, peak Nov 15 (full moon)</li>
                          <li><strong>Crowd:</strong> Very high (thousands)</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 mb-3">What Happens:</h5>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Float krathongs on river</li>
                          <li>• Release sky lanterns from riverbanks</li>
                          <li>• Traditional processions</li>
                          <li>• Beauty contests & live performances</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 mb-4">
                      <h5 className="font-bold text-gray-900 mb-2">Best Spots on Ping River:</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Nawarat Bridge area (most popular)</li>
                        <li>• Tha Phae area</li>
                        <li>• Riverside hotels/restaurants (book early)</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4">
                      <h5 className="font-bold text-gray-900 mb-3">Tips:</h5>
                      <ul className="space-y-2">
                        {[
                          'Arrive by 5 PM for good viewing spot',
                          'Bring camera with good low-light capability',
                          'Waterfront restaurants offer best views (book ahead)',
                          'River gets very crowded 6-8 PM',
                        ].map((tip, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-700">
                            <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-8 border-l-4 border-amber-600">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-2xl font-bold text-gray-900">2. Mae Jo University</h4>
                      <span className="bg-amber-600 text-white text-sm font-bold px-4 py-2 rounded-full">Mass Sky Lantern Release</span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h5 className="font-bold text-gray-900 mb-3">Details:</h5>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li><strong>What:</strong> Massive organized sky lantern release</li>
                          <li><strong>When:</strong> Usually 1-2 days before main Loy Krathong</li>
                          <li><strong>Crowd:</strong> 10,000+ people</li>
                          <li><strong>Cost:</strong> Organized event requires ticket ($80-150)</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 mb-3">What Happens:</h5>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Thousands release lanterns simultaneously</li>
                          <li>• Creates incredible photo opportunity</li>
                          <li>• Organized, structured</li>
                          <li>• Safety monitored</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-600">
                      <h5 className="font-bold text-red-900 mb-3">Important:</h5>
                      <ul className="space-y-2 text-sm text-red-800">
                        <li>• This is Yi Peng, not Loy Krathong (sky lanterns only)</li>
                        <li>• Tickets sell out months in advance</li>
                        <li>• Several operators run events (book reputable one)</li>
                        <li>• Check exact date (varies year to year)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 border-l-4 border-purple-600">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">3. Old City Temples</h4>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-bold text-gray-900 mb-3">Details:</h5>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li><strong>Where:</strong> Temples throughout Old City</li>
                          <li><strong>What:</strong> Traditional ceremonies, krathong floating</li>
                          <li><strong>Crowd:</strong> Medium to high</li>
                          <li><strong>Cost:</strong> Free (donations appreciated)</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 mb-3">Best Temples:</h5>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Wat Phan Tao (beautiful pond setting)</li>
                          <li>• Wat Chedi Luang</li>
                          <li>• Wat Phra Singh</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-6 border-l-4 border-cyan-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Chiang Mai Schedule</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { date: 'November 14', title: 'Day Before', desc: 'Preparations, early celebrations, Mae Jo event (if this year)' },
                      { date: 'November 15', title: 'Main Night', desc: '6 PM: Float krathongs, release lanterns. 7-8 PM: Peak time' },
                      { date: 'November 16', title: 'Day After', desc: 'Extended celebrations, cleanup begins' },
                    ].map((day, index) => (
                      <div key={index} className="bg-white rounded-lg p-4">
                        <p className="font-bold text-gray-900 mb-1">{day.date}</p>
                        <p className="text-sm font-semibold text-blue-600 mb-2">{day.title}</p>
                        <p className="text-xs text-gray-600">{day.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section id="bangkok" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-purple-600 pb-3">
                Bangkok Loy Krathong
              </h2>

              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Best Locations in Bangkok</h3>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border-l-4 border-blue-600">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">1. Chao Phraya River (Most Popular)</h4>

                      <div className="mb-4">
                        <h5 className="font-bold text-gray-900 mb-2">Best Spots:</h5>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• <strong>Asiatique:</strong> Organized event, fireworks</li>
                          <li>• <strong>Loy Nava Dinner Cruise:</strong> Romantic option</li>
                          <li>• <strong>Rama VIII Park</strong></li>
                          <li>• <strong>River City shopping complex</strong></li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-lg p-4 mb-4">
                        <h5 className="font-bold text-gray-900 mb-2">What to Expect:</h5>
                        <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-700">
                          <div>• Thousands floating krathongs</div>
                          <div>• Riverfront parties</div>
                          <div>• Fireworks displays</div>
                          <div>• Cultural performances</div>
                          <div>• Food vendors</div>
                        </div>
                      </div>

                      <div className="bg-amber-50 rounded-lg p-4">
                        <h5 className="font-bold text-gray-900 mb-2">Asiatique Highlight:</h5>
                        <p className="text-sm text-gray-700 mb-2">Large organized event with:</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Parade and cultural show</li>
                          <li>• Beauty pageant & fireworks</li>
                          <li>• Food stalls</li>
                          <li>• Free entry but very crowded</li>
                        </ul>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border-l-4 border-green-600">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">2. Benjakitti Park</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li><strong>Where:</strong> Near Asok BTS</li>
                          <li><strong>What:</strong> Lake floating (not river)</li>
                          <li><strong>Crowd:</strong> High but manageable</li>
                          <li><strong>Why:</strong> Accessible, less chaotic than river</li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border-l-4 border-purple-600">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">3. Lumpini Park</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li><strong>Where:</strong> City center park</li>
                          <li><strong>What:</strong> Lake krathong floating</li>
                          <li><strong>Crowd:</strong> Very high (popular with locals + tourists)</li>
                          <li><strong>Why:</strong> Central location, beautiful setting</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg shadow-xl p-8">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <Heart className="w-8 h-8 mr-3" />
                    Dinner Cruises (Recommended for Romance)
                  </h3>

                  <p className="text-red-100 mb-6">Several companies offer Loy Krathong dinner cruises:</p>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    {[
                      { name: 'Loy Nava Cruise', price: '$60-100' },
                      { name: 'Chao Phraya Princess', price: '$50-80' },
                      { name: 'White Orchid River Cruise', price: '$45-70' },
                    ].map((cruise, index) => (
                      <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                        <p className="font-bold mb-1">{cruise.name}</p>
                        <p className="text-sm text-red-100">{cruise.price}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-4">
                    <h4 className="font-bold mb-2">What's Included:</h4>
                    <ul className="space-y-1 text-sm text-red-100">
                      <li>• Buffet dinner</li>
                      <li>• Float krathong from boat</li>
                      <li>• See thousands of lights on river</li>
                      <li>• Avoid crowds</li>
                      <li>• Romantic setting</li>
                    </ul>
                  </div>

                  <p className="text-sm text-red-100">
                    <strong>Book:</strong> 1-2 months ahead (these sell out)
                  </p>
                </div>
              </div>
            </section>

            <section id="sukhothai" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-purple-600 pb-3">
                Sukhothai Loy Krathong
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg p-6 mb-8">
                  <h3 className="text-2xl font-bold mb-3 flex items-center">
                    <Sparkles className="w-8 h-8 mr-3" />
                    Most Traditional Celebration
                  </h3>
                  <p className="text-amber-100 text-lg">
                    Believed to be birthplace of Loy Krathong
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Sukhothai</h3>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-4">What Makes It Special:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {[
                        'Believed to be birthplace of Loy Krathong',
                        'Historical park setting (ancient temples)',
                        'Most traditional, cultural experience',
                        'Light and sound shows',
                        'Less touristy than Chiang Mai/Bangkok',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-4">What Happens:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>5-day festival</strong> (Nov 11-15, 2026)</li>
                      <li>• Evening light and sound shows</li>
                      <li>• Historical reenactments</li>
                      <li>• Krathong floating in temple moats</li>
                      <li>• Lantern decorations throughout park</li>
                      <li>• Cultural performances</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 mb-8 border-l-4 border-green-600">
                  <h4 className="font-bold text-gray-900 mb-3">Sukhothai Historical Park</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Ancient capital of Thailand (13th century)</li>
                    <li>• UNESCO World Heritage site</li>
                    <li>• Temple ruins lit up beautifully</li>
                    <li>• Magical setting for festival</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-amber-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-4">Logistics</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Sukhothai is 5 hours from Bangkok</li>
                      <li>• Or 6 hours from Chiang Mai</li>
                      <li>• Most visitors fly to Phitsanulok (1 hour away), then taxi</li>
                      <li>• Book accommodation in Old Sukhothai or nearby</li>
                      <li>• Can be day trip from Phitsanulok but overnight recommended</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-4">Costs</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Park entry: 100 baht</li>
                      <li>• Accommodation: $30-80/night (book ahead)</li>
                      <li>• Less crowded than Chiang Mai/Bangkok</li>
                      <li>• More authentic experience</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="ayutthaya" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-purple-600 pb-3">
                Ayutthaya Loy Krathong
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg p-6 mb-8">
                  <h3 className="text-2xl font-bold mb-3">Historical Temple Setting</h3>
                  <p className="text-amber-100">Ancient capital ruins beautifully lit at night</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-4">Why Ayutthaya:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {[
                        'Ancient capital ruins (14th-18th century)',
                        'UNESCO World Heritage site',
                        'Temples beautifully lit at night',
                        'Easy day trip from Bangkok (1.5 hours)',
                        'Less crowded than Bangkok',
                        'Spectacular photo opportunities',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-4">What Happens:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Float krathongs in temple moats</li>
                      <li>• Temple illuminations</li>
                      <li>• Cultural performances</li>
                      <li>• Historical reenactments</li>
                      <li>• Light and sound shows</li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-3">Best Spots:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Wat Mahathat (iconic Buddha head in tree)</li>
                      <li>• Wat Chaiwatthanaram (riverside temple)</li>
                      <li>• Along Chao Phraya River</li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-3">Logistics:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Train (90 min, $5) or minivan (1.5 hours, $10)</li>
                      <li>• Overnight better for evening events</li>
                      <li>• Accommodation: $20-60/night</li>
                      <li>• Much cheaper than Bangkok/Chiang Mai</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="how-to-participate" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-purple-600 pb-3">
                How to Participate in Loy Krathong
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Step-by-Step Guide</h3>

                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-8 border-l-4 border-blue-600">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">STEP 1: Get a Krathong</h4>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-lg p-6">
                        <h5 className="font-bold text-green-700 mb-3">Option A: Buy Pre-Made (Easiest)</h5>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Sold everywhere on festival day</li>
                          <li>• Cost: 20-100 baht ($0.50-3)</li>
                          <li>• Simple to elaborate designs</li>
                          <li>• Already decorated</li>
                        </ul>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <p className="font-bold text-xs text-gray-900 mb-2">Where to Buy:</p>
                          <p className="text-xs text-gray-600">Street vendors, markets, temple entrances, hotel lobbies</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-6">
                        <h5 className="font-bold text-purple-700 mb-3">Option B: Make Your Own (Traditional)</h5>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Hotels/temples offer workshops</li>
                          <li>• Takes 30-60 minutes</li>
                          <li>• Usually free with materials</li>
                          <li>• More meaningful experience</li>
                        </ul>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <p className="font-bold text-xs text-gray-900 mb-2">Materials:</p>
                          <p className="text-xs text-gray-600">Banana trunk/leaves, flowers, incense, candle, pins</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 border-l-4 border-purple-600">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">STEP 2: Prepare Your Krathong</h4>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-bold text-gray-900 mb-3">Add Personal Items:</h5>
                        <ul className="space-y-2 text-sm text-gray-700">
                          {[
                            'Hair strand or nail clipping (symbolizes letting go)',
                            'Small coin (offering, traditionally 1-5 baht)',
                            'Make a wish in your mind',
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-bold text-gray-900 mb-3">Do NOT Add:</h5>
                        <ul className="space-y-2 text-sm text-gray-700">
                          {[
                            'Paper money (wasteful, pollutes)',
                            'Plastic items',
                            'Non-biodegradable materials',
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

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 border-l-4 border-green-600">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">STEP 3: Go to Water</h4>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-bold text-gray-900 mb-3">Best Times:</h5>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• <strong>6-7 PM:</strong> Sunset (most beautiful)</li>
                          <li>• <strong>7-8 PM:</strong> Peak crowds (most festive)</li>
                          <li>• <strong>8-9 PM:</strong> Still busy but less crowded</li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-bold text-gray-900 mb-3">Location:</h5>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Rivers, lakes, canals</li>
                          <li>• Temple moats</li>
                          <li>• Anywhere with flowing water</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-8 border-l-4 border-amber-600">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">STEP 4: Float Your Krathong</h4>

                    <div className="mb-6">
                      <h5 className="font-bold text-gray-900 mb-3">Traditional Way:</h5>
                      <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
                        <li>Light the candle and incense</li>
                        <li>Make a wish or prayer</li>
                        <li>Place krathong on water gently</li>
                        <li>Watch it float away</li>
                        <li>If flame stays lit until out of sight = good luck!</li>
                      </ol>
                    </div>

                    <div className="bg-white rounded-lg p-4 mb-4">
                      <h5 className="font-bold text-gray-900 mb-3">Superstition:</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• If krathong floats straight = wish will come true</li>
                        <li>• If it circles back = bad luck (or bad design!)</li>
                        <li>• Couples floating together = lasting relationship</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4">
                      <h5 className="font-bold text-gray-900 mb-3 flex items-center">
                        <Camera className="w-5 h-5 text-blue-600 mr-2" />
                        Photos:
                      </h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Use long exposure for dreamy photos</li>
                        <li>• Bring tripod or stabilizer</li>
                        <li>• Phone cameras struggle (bring real camera if possible)</li>
                        <li>• Waterproof phone case (crowded, risk of dropping)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-lg p-8 border-l-4 border-pink-600">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">STEP 5: Enjoy the Atmosphere</h4>
                    <p className="text-gray-700 mb-4">After floating krathong:</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Walk along river watching others</li>
                      <li>• Buy street food</li>
                      <li>• Watch cultural performances</li>
                      <li>• Release sky lanterns (if in Chiang Mai)</li>
                      <li>• Enjoy the magical atmosphere</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="booking" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-purple-600 pb-3">
                Accommodation Booking Strategy
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">When to Book</h3>

                <div className="space-y-6 mb-8">
                  <div className="border-l-4 border-green-600 pl-6 bg-green-50 rounded-r-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">2-3 MONTHS AHEAD (September-October)</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Best time to book</li>
                      <li>• Prices still reasonable</li>
                      <li>• Full selection available</li>
                      <li>• Can choose exact location you want</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-yellow-600 pl-6 bg-yellow-50 rounded-r-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">1 MONTH AHEAD (October)</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Prices rising (30-50% increase)</li>
                      <li>• Still okay options</li>
                      <li>• Book NOW if haven't already</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-red-600 pl-6 bg-red-50 rounded-r-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">LAST MINUTE (November)</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Expect 2x prices or more</li>
                      <li>• Limited availability</li>
                      <li>• May need to stay far from celebrations</li>
                      <li>• <strong>NOT IDEAL</strong></li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Price Increases</h3>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full bg-white border border-gray-200">
                    <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-bold">City</th>
                        <th className="px-6 py-4 text-left font-bold">Normal Price</th>
                        <th className="px-6 py-4 text-left font-bold">Loy Krathong Price</th>
                        <th className="px-6 py-4 text-left font-bold">Increase</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-purple-50">
                        <td className="px-6 py-4 font-bold text-gray-900">Chiang Mai (Old City)</td>
                        <td className="px-6 py-4 text-gray-700">$25-40</td>
                        <td className="px-6 py-4 text-gray-700">$60-100</td>
                        <td className="px-6 py-4"><span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold">2-3x</span></td>
                      </tr>
                      <tr className="hover:bg-blue-50">
                        <td className="px-6 py-4 font-bold text-gray-900">Bangkok (Riverside)</td>
                        <td className="px-6 py-4 text-gray-700">$35-60</td>
                        <td className="px-6 py-4 text-gray-700">$80-150</td>
                        <td className="px-6 py-4"><span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold">2x</span></td>
                      </tr>
                      <tr className="hover:bg-green-50">
                        <td className="px-6 py-4 font-bold text-gray-900">Sukhothai</td>
                        <td className="px-6 py-4 text-gray-700">$20-40</td>
                        <td className="px-6 py-4 text-gray-700">$40-80</td>
                        <td className="px-6 py-4"><span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-bold">2x</span></td>
                      </tr>
                      <tr className="hover:bg-amber-50">
                        <td className="px-6 py-4 font-bold text-gray-900">Ayutthaya</td>
                        <td className="px-6 py-4 text-gray-700">$20-35</td>
                        <td className="px-6 py-4 text-gray-700">$35-60</td>
                        <td className="px-6 py-4"><span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold">1.5-2x</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-600">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> Loy Krathong less expensive than Songkran, but still expect significant price increases.
                  </p>
                </div>
              </div>
            </section>

            <section id="costs" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-purple-600 pb-3">
                Costs Breakdown
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">Budget</h3>
                    <p className="text-3xl font-bold">$150-250</p>
                    <p className="text-sm text-green-100">total per person</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex justify-between">
                        <span>Accommodation (1-2 nights)</span>
                        <strong>$50-100</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Food</span>
                        <strong>$20-40</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Krathong</span>
                        <strong>$1-3</strong>
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
                        <span>$81-163</span>
                      </li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-4">Festival is free!</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">Mid-Range</h3>
                    <p className="text-3xl font-bold">$300-500</p>
                    <p className="text-sm text-blue-100">total per person</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex justify-between">
                        <span>Accommodation</span>
                        <strong>$120-200</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Food</span>
                        <strong>$50-80</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Krathong</span>
                        <strong>$3-5</strong>
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
                        <span>$253-435</span>
                      </li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-4">Dinner cruise & organized events</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">Luxury</h3>
                    <p className="text-3xl font-bold">$800-1,500+</p>
                    <p className="text-sm text-purple-100">total per person</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex justify-between">
                        <span>Accommodation</span>
                        <strong>$300-600</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Food</span>
                        <strong>$150-250</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Krathong</span>
                        <strong>$10+</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Transport</span>
                        <strong>$100-200</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Activities</span>
                        <strong>$200-400</strong>
                      </li>
                      <li className="pt-3 border-t border-gray-200 flex justify-between font-bold text-base">
                        <span>Total</span>
                        <span>$760-1,460+</span>
                      </li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-4">VIP cruise & Mae Jo tickets</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="photo-locations" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-purple-600 pb-3">
                Best Photo Locations
              </h2>

              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Camera className="w-8 h-8 text-purple-600 mr-3" />
                    Chiang Mai
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-3">Top Locations:</h4>
                      <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
                        <li><strong>Nawarat Bridge</strong> - River view with hundreds of krathongs</li>
                        <li><strong>Mae Jo University</strong> - Mass sky lantern release (if attending)</li>
                        <li><strong>Wat Phan Tao</strong> - Temple pond with krathongs</li>
                        <li><strong>Riverside restaurants</strong> - Elevated view of Ping River</li>
                      </ol>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-3">Photo Tips:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        {[
                          'Arrive before sunset for blue hour shots',
                          'Long exposure (2-5 seconds) for light trails',
                          'Tripod essential',
                          'ISO 800-3200 depending on light',
                          'Wide angle lens for mass scenes',
                        ].map((tip, index) => (
                          <li key={index} className="flex items-start">
                            <Camera className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-lg shadow-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Bangkok</h3>
                    <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
                      <li>Asiatique - Fireworks + krathongs + crowds</li>
                      <li>Rama VIII Bridge - Bridge + river + lights</li>
                      <li>Loy Nava Cruise - From water perspective</li>
                      <li>Lumpini Park - Lake reflections</li>
                    </ol>
                  </div>

                  <div className="bg-white rounded-lg shadow-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Sukhothai</h3>
                    <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
                      <li>Wat Mahathat - Temple ruins + illuminations</li>
                      <li>Royal Palace area - Light shows</li>
                      <li>Historical Park ponds - Peaceful krathong floating</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>

            <section id="environmental" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-green-600 pb-3">
                Environmental Concerns
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-600 mb-8">
                  <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center">
                    <Leaf className="w-6 h-6 mr-2" />
                    Honest Discussion
                  </h3>
                  <p className="text-amber-800">
                    While beautiful, Loy Krathong has environmental impacts that are important to understand.
                  </p>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">The Problem</h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-red-50 rounded-lg p-6">
                        <h4 className="font-bold text-gray-900 mb-3">Traditional vs Modern:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start">
                            <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span><strong>Traditional:</strong> 100% biodegradable (banana leaves, flowers)</span>
                          </li>
                          <li className="flex items-start">
                            <X className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span><strong>Modern:</strong> Often contain styrofoam, plastic decorations</span>
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Millions of krathongs = massive cleanup operation</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-orange-50 rounded-lg p-6">
                        <h4 className="font-bold text-gray-900 mb-3">Impact:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          {[
                            'Rivers/lakes covered in debris next day',
                            'Fish eat non-biodegradable materials',
                            'Water pollution',
                            'Cleanup takes days',
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <AlertCircle className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">What's Being Done</h3>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-blue-50 rounded-lg p-6">
                        <h4 className="font-bold text-gray-900 mb-3">Government Efforts:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Encouraging biodegradable materials only</li>
                          <li>• Massive cleanup operations next day</li>
                          <li>• Education campaigns</li>
                          <li>• Some areas now ban styrofoam krathongs</li>
                        </ul>
                      </div>

                      <div className="bg-green-50 rounded-lg p-6">
                        <h4 className="font-bold text-gray-900 mb-3">Eco-Friendly Options:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Bread-based krathongs (fish can eat!)</li>
                          <li>• 100% natural materials only</li>
                          <li>• Some cities offer "virtual krathongs" (digital)</li>
                          <li>• Temples collect and reuse materials</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-l-4 border-green-600">
                      <h4 className="font-bold text-gray-900 mb-3">What You Can Do:</h4>
                      <ul className="space-y-3">
                        {[
                          'Choose biodegradable krathong (banana leaves, no plastic)',
                          'Bread-based krathongs best option',
                          'Avoid styrofoam and plastic decorations',
                          'Consider making your own with natural materials',
                          'Single krathong per couple/family (not one each)',
                        ].map((item, index) => (
                          <li key={index} className="flex items-start text-gray-700">
                            <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-600">
                    <h4 className="font-bold text-gray-900 mb-3">Honest Reality:</h4>
                    <p className="text-gray-700 mb-4">
                      Festival is still environmentally problematic despite improvements. If this concerns you, consider:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Making eco-friendly krathong</li>
                      <li>• Participating but being conscious</li>
                      <li>• Enjoying atmosphere without floating (still magical)</li>
                      <li>• Donating to cleanup efforts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="safety" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-red-600 pb-3">
                Safety Tips
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Crowds</h3>
                    <ul className="space-y-3">
                      {[
                        'Pickpockets active (keep valuables secure)',
                        'Very crowded at popular spots',
                        'Stay aware of surroundings',
                        'Keep group together',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700 bg-orange-50 rounded-lg p-3">
                          <AlertCircle className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Fire</h3>
                    <ul className="space-y-3">
                      {[
                        'Hot wax from candles can burn',
                        'Sky lanterns can cause fires if land on buildings',
                        'Be careful with open flames in crowds',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700 bg-red-50 rounded-lg p-3">
                          <AlertCircle className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Water</h3>
                    <ul className="space-y-3">
                      {[
                        'Don\'t lean too far over (people fall in every year)',
                        'Watch children carefully near water',
                        'Riverbanks can be slippery',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700 bg-blue-50 rounded-lg p-3">
                          <AlertCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Sky Lanterns</h3>
                    <ul className="space-y-3">
                      {[
                        'Check wind direction before releasing',
                        'Don\'t release near airports (flight hazards)',
                        'Wait for lantern to fully inflate before releasing',
                        'Not allowed in all areas (check local rules)',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700 bg-yellow-50 rounded-lg p-3">
                          <AlertCircle className="w-4 h-4 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-l-4 border-green-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What to Bring</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Essential:</h4>
                      <ul className="space-y-2">
                        {[
                          'Camera with good low-light capability',
                          'Tripod (for photos)',
                          'Phone in waterproof case',
                          'Cash (many vendors cash-only)',
                          'Light jacket (November can be cool)',
                          'Comfortable shoes (lots of walking)',
                        ].map((item, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-700">
                            <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Optional:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Flashlight (crowded areas dark)</li>
                        <li>• Portable battery pack</li>
                        <li>• Wet wipes</li>
                        <li>• Small bag for purchases</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="pros-cons" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-purple-600 pb-3">
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
                      'Most beautiful festival in Thailand',
                      'Magical atmosphere (rivers of light)',
                      'Less chaotic than Songkran',
                      'Great for couples (romantic)',
                      'Excellent photo opportunities',
                      'Can participate or just watch',
                      'Cultural experience',
                      'Cool weather (November nice)',
                      'In Chiang Mai: Get TWO festivals',
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
                      'Accommodation expensive during festival',
                      'Very crowded at popular spots',
                      'Environmental impact concerning',
                      'Sky lanterns can be dangerous',
                      'Hard to get good photos (crowded, dark)',
                      'One-night event (unlike Songkran\'s 3 days)',
                      'Dates change yearly (lunar calendar)',
                      'Chiang Mai extremely crowded (Mae Jo area)',
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

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
                    <h4 className="font-bold text-green-900 mb-4 text-lg">YES, if you:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {[
                        'Love beautiful, photogenic experiences',
                        'Want romantic Thailand experience',
                        'Enjoy cultural festivals',
                        'Are okay with crowds',
                        'Want Instagram-worthy content',
                        'Can book ahead',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
                    <h4 className="font-bold text-yellow-900 mb-4 text-lg">MAYBE if you:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {[
                        'Don\'t like crowds (consider smaller cities)',
                        'On tight budget (accommodation expensive)',
                        'Concerned about environment (use eco-friendly krathong)',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <AlertCircle className="w-4 h-4 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-600">
                    <h4 className="font-bold text-red-900 mb-4 text-lg">NO if you:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {[
                        'Hate crowds completely',
                        'Prefer active festivals (this is peaceful)',
                        'Can\'t handle one-night-only events',
                        'Want wild party (wrong festival)',
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
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-purple-600 pb-3">
                Frequently Asked Questions
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8 space-y-6">
                {[
                  {
                    q: 'When exactly is Loy Krathong 2026?',
                    a: 'November 15, 2026 (full moon of 12th lunar month). Check yearly as date changes.',
                  },
                  {
                    q: 'What\'s the difference between Loy Krathong and Yi Peng?',
                    a: 'Loy Krathong = floating water lanterns (nationwide). Yi Peng = sky lanterns (Chiang Mai only). In Chiang Mai, both happen same night!',
                  },
                  {
                    q: 'Do I need tickets for Loy Krathong?',
                    a: 'No, festival is free. Just show up at any river/lake. Only Mae Jo mass lantern release requires tickets ($80-150).',
                  },
                  {
                    q: 'Can I bring kids?',
                    a: 'Yes! Family-friendly festival. Supervise near water. Kids love floating krathongs. Chiang Mai most exciting for kids (sky lanterns too).',
                  },
                  {
                    q: 'Where\'s the best place for first-timers?',
                    a: 'Bangkok (easy, accessible, big celebrations) or Chiang Mai (magical with Yi Peng, but very crowded).',
                  },
                  {
                    q: 'How long does the festival last?',
                    a: 'Main night only (November 15). Some cities celebrate 2-3 days but main event is full moon night. Peak time 6-9 PM.',
                  },
                  {
                    q: 'Are sky lanterns allowed everywhere?',
                    a: 'No. Only in Chiang Mai (Yi Peng tradition). Illegal/not done in Bangkok, Sukhothai, most of Thailand.',
                  },
                  {
                    q: 'Is it better than Songkran?',
                    a: 'Different! Loy Krathong = peaceful, beautiful, romantic. Songkran = wild, chaotic, water fights. Both worth experiencing.',
                  },
                  {
                    q: 'Can I swim in the river during Loy Krathong?',
                    a: 'Not recommended. Crowded, dark, covered in floating krathongs. Wait until next day if you want to swim.',
                  },
                  {
                    q: 'What happens to all the krathongs after?',
                    a: 'Massive cleanup operation next day. Government collects them. Modern problem = pollution. Use biodegradable krathongs to help.',
                  },
                ].map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white rounded-lg shadow-2xl p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready for Loy Krathong 2026?</h2>
              <p className="text-xl text-white/90 mb-4">
                Experience Thailand's most magical festival on November 15, 2026
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8 max-w-2xl mx-auto">
                <p className="text-white/80 text-sm">
                  Book accommodation 2-3 months ahead for best prices. Choose eco-friendly krathongs to help protect Thailand's waterways.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/events-calendar-thailand"
                  className="inline-block bg-white text-purple-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
                >
                  View All Thailand Events
                </a>
                <a
                  href="/contact"
                  className="inline-block bg-purple-700 text-white font-bold px-8 py-4 rounded-lg hover:bg-purple-800 transition-colors border-2 border-white text-lg"
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
                <TrendingUp className="w-6 h-6 text-purple-600 mr-3" />
                More Thailand Festival Guides
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a
                  href="/events-calendar-thailand"
                  className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border-l-4 border-purple-600 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-gray-900 mb-1">Thailand Events Calendar</h4>
                  <p className="text-sm text-gray-600">All festivals throughout the year</p>
                </a>
                <a
                  href="/songkran-festival-thailand"
                  className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 border-l-4 border-blue-600 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-gray-900 mb-1">Songkran Festival</h4>
                  <p className="text-sm text-gray-600">Thailand's water festival in April</p>
                </a>
                <a
                  href="/bangkok-guide"
                  className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-600 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-gray-900 mb-1">Bangkok Guide</h4>
                  <p className="text-sm text-gray-600">Complete guide to Thailand's capital</p>
                </a>
                <a
                  href="/destinations/chiang-mai"
                  className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-4 border-l-4 border-amber-600 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-gray-900 mb-1">Chiang Mai Guide</h4>
                  <p className="text-sm text-gray-600">Explore Northern Thailand</p>
                </a>
              </div>
            </section>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <TableOfContents items={tocItems} />

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">2026 Date</h3>
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold mb-1">Nov 15</p>
                  <p className="text-sm text-purple-100">Sunday</p>
                  <p className="text-xs text-purple-200 mt-2">Full Moon Night</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Tips</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Book accommodation 2-3 months ahead</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Chiang Mai = Both water + sky lanterns</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Peak time: 6-10 PM</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Bring camera with low-light capability</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>More affordable than Songkran</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Best Cities</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-purple-600 pl-3">
                    <p className="font-semibold text-gray-900">Chiang Mai</p>
                    <p className="text-sm text-gray-600">Water + sky lanterns</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-3">
                    <p className="font-semibold text-gray-900">Bangkok</p>
                    <p className="text-sm text-gray-600">Grand celebration</p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-3">
                    <p className="font-semibold text-gray-900">Sukhothai</p>
                    <p className="text-sm text-gray-600">Most traditional</p>
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
