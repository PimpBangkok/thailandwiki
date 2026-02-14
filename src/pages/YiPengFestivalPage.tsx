import { usePageMeta } from '../hooks/usePageMeta';
import { Calendar, MapPin, DollarSign, Users, Camera, Sparkles, Star, Info, Check, X, AlertCircle, Flame, Leaf, ThumbsUp, Lightbulb } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import TableOfContents from '../components/TableOfContents';
import RelatedGuides from '../components/RelatedGuides';

export default function YiPengFestivalPage() {
  usePageMeta({
    title: 'Yi Peng Festival 2026 - Complete Guide & Free vs Paid Options',
    description: 'Complete Yi Peng lantern festival guide. Nov 15, 2026. Free public releases vs paid Mae Jo event. Chiang Mai, Thailand. Photos, tips, booking.',
    keywords: 'yi peng festival, yi peng lantern festival, chiang mai lantern festival, yi peng 2026, sky lanterns thailand',
  });

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Events', path: '/events-calendar-thailand' },
    { label: 'Yi Peng Festival' },
  ];

  const tocItems = [
    { id: 'quick-facts', label: 'Quick Facts' },
    { id: 'what-is-yi-peng', label: 'What is Yi Peng?' },
    { id: 'yi-peng-vs-loy-krathong', label: 'Yi Peng vs Loy Krathong' },
    { id: 'two-ways', label: 'Two Ways to Experience' },
    { id: 'how-to-participate', label: 'How to Participate' },
    { id: 'photography', label: 'Photography Tips' },
    { id: 'mae-jo', label: 'Official Mae Jo Event' },
    { id: 'booking', label: 'Accommodation Booking' },
    { id: 'costs', label: 'Costs Breakdown' },
    { id: 'safety', label: 'Safety & Environment' },
    { id: 'pros-cons', label: 'Pros & Cons' },
    { id: 'faq', label: 'FAQ' },
  ];

  const relatedGuides = [
    {
      title: 'Loy Krathong Festival',
      description: 'Water lantern festival - happens same night!',
      link: '/loy-krathong-festival-thailand',
    },
    {
      title: 'Chiang Mai Travel Guide',
      description: 'Complete guide to Northern Thailand',
      link: '/destinations/chiang-mai',
    },
    {
      title: 'Thailand Events Calendar',
      description: 'All festivals throughout the year',
      link: '/events-calendar-thailand',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6 uppercase tracking-[3px]">
            Yi Peng Lantern Festival Chiang Mai 2026
          </h1>
          <p className="text-2xl sm:text-3xl text-white/90 mb-4 font-light">
            Complete Guide to Thailand's Magical Sky Lantern Festival
          </p>
          <p className="text-xl text-white/80 mb-8">
            Official Event vs Free Releases, Tickets & Everything You Need
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
                  <strong>Yi Peng</strong> (also spelled Yee Peng) is Chiang Mai's magical sky lantern festival where thousands of glowing lanterns are released into the night sky, creating one of the world's most breathtaking sights. Held during the same full moon as Loy Krathong (November), Yi Peng is unique to Northern Thailand and has become one of Thailand's most photographed events. This complete guide covers everything you need to know - from the expensive official organized events to the free public releases where you can participate without paying.
                </p>

                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-6 border-l-4 border-orange-600 my-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <Info className="w-6 h-6 text-orange-600 mr-2" />
                    Bottom Line
                  </h3>
                  <p className="text-gray-700">
                    Yi Peng happens November 15, 2026 (coincides with Loy Krathong). Two main options: (1) Official Mae Jo event ($100-250, organized mass release, tickets required), or (2) Free public releases at temples and riverside (spontaneous, free, less structured). Both spectacular. Book Chiang Mai accommodation 2-3 months ahead.
                  </p>
                </div>

                <p className="text-gray-700">
                  <a href="/events-calendar-thailand" className="text-orange-600 hover:text-orange-700 font-semibold underline">
                    See all Thailand festivals at our Thailand Events Calendar
                  </a>
                  . Also see our{' '}
                  <a href="/loy-krathong-festival-thailand" className="text-orange-600 hover:text-orange-700 font-semibold underline">
                    Loy Krathong Festival Guide
                  </a>{' '}
                  (happens simultaneously).
                </p>
              </div>
            </section>

            <section id="quick-facts">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-orange-600 pb-3">
                Quick Facts
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-600">
                  <Calendar className="w-8 h-8 text-orange-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Date</h3>
                  <p className="text-gray-700 text-sm">November 15, 2026 (full moon, 12th lunar month)</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-600">
                  <MapPin className="w-8 h-8 text-amber-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Where</h3>
                  <p className="text-gray-700 text-sm">Chiang Mai, Northern Thailand (ONLY here!)</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-600">
                  <Sparkles className="w-8 h-8 text-yellow-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">What</h3>
                  <p className="text-gray-700 text-sm">Mass sky lantern releases</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600">
                  <DollarSign className="w-8 h-8 text-green-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Cost</h3>
                  <p className="text-gray-700 text-sm">FREE (public) or $100-250 (official events)</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-600">
                  <Users className="w-8 h-8 text-red-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Crowd</h3>
                  <p className="text-gray-700 text-sm">Huge (tens of thousands participate)</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                  <Camera className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Best For</h3>
                  <p className="text-gray-700 text-sm">Photographers, couples, bucket list seekers</p>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border-l-4 border-amber-600">
                <p className="text-gray-700 font-semibold flex items-center">
                  <Lightbulb className="w-5 h-5 text-amber-600 mr-2" />
                  <strong>Note:</strong> Happens same time as Loy Krathong (water lanterns)
                </p>
              </div>
            </section>

            <section id="what-is-yi-peng">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-orange-600 pb-3">
                What is Yi Peng?
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">History & Meaning</h3>

                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-6 mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Yi Peng = "Second Month" in Lanna language</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Ancient Northern Thai (Lanna) tradition</li>
                    <li>• Celebrated since 13th century</li>
                    <li>• Honors Buddha</li>
                    <li>• Symbolizes letting go of misfortunes</li>
                    <li>• Lanterns carry wishes to the sky</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-4">Traditional Belief:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {[
                        'Floating lantern carries away bad luck',
                        'Light represents enlightenment',
                        'Release at full moon for maximum blessing',
                        'Make wish as lantern rises',
                        'Lantern reaching sky = wish granted',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <Star className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-4">Modern Phenomenon:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {[
                        'Mass organized releases (21st century)',
                        'Became world-famous through photos/videos',
                        '"Tangled" movie inspiration (rumored)',
                        'Now major tourist attraction',
                        'One of world\'s most Instagrammed events',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <Camera className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="yi-peng-vs-loy-krathong">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-orange-600 pb-3">
                Yi Peng vs Loy Krathong (Critical Distinction!)
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Often Confused</h3>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-6 border-2 border-orange-300">
                    <h4 className="text-xl font-bold text-orange-900 mb-4 flex items-center">
                      <Flame className="w-6 h-6 mr-2" />
                      YI PENG
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Sky lanterns (floating into air)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Unique to Chiang Mai / Northern Thailand</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Lanna tradition</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>November full moon</span>
                      </li>
                    </ul>
                  </div>

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
                        <span>Central Thai tradition</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Same November full moon</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">IN CHIANG MAI: Both happen simultaneously!</h3>
                  <ul className="space-y-2 text-amber-100 text-left max-w-2xl mx-auto">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                      <span>You can do both on same night</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Float krathongs on Ping River (Loy Krathong)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Release sky lanterns (Yi Peng)</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                      <span><strong>Double festival experience</strong></span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <a
                      href="/loy-krathong-festival-thailand"
                      className="inline-block bg-white text-orange-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      See Complete Loy Krathong Guide
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section id="two-ways" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-orange-600 pb-3">
                Two Ways to Experience Yi Peng
              </h2>

              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6">
                    <h3 className="text-2xl font-bold mb-2 flex items-center">
                      <DollarSign className="w-8 h-8 mr-3" />
                      OPTION 1: Official Organized Events (PAID)
                    </h3>
                    <p className="text-red-100">Large organized mass lantern release</p>
                  </div>

                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Details:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li><strong>Where:</strong> Usually Mae Jo University grounds</li>
                          <li><strong>When:</strong> Usually 1-2 days before official full moon</li>
                          <li><strong>Cost:</strong> $100-250 per person</li>
                          <li><strong>Crowd:</strong> 10,000-20,000 people</li>
                          <li><strong>Tickets:</strong> Required (buy months in advance)</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">What You Get:</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Designated seating area</li>
                          <li>• Monks chanting ceremony</li>
                          <li>• Cultural performances</li>
                          <li>• Organized countdown</li>
                          <li>• Everyone releases at same time</li>
                          <li>• SPECTACULAR photo opportunity</li>
                          <li>• Safety controlled</li>
                          <li>• Transport often included</li>
                        </ul>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="font-bold text-green-900 mb-3">Advantages:</h4>
                        <ul className="space-y-2">
                          {[
                            'Coordinated mass release (thousands at once)',
                            'Most photogenic (all release together)',
                            'Organized, structured',
                            'Safety monitored',
                            'Best for photography',
                            'Cultural ceremonies included',
                          ].map((item, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-700">
                              <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-red-50 rounded-lg p-4">
                        <h4 className="font-bold text-red-900 mb-3">Disadvantages:</h4>
                        <ul className="space-y-2">
                          {[
                            'Expensive ($100-250 ticket)',
                            'Tickets sell out months ahead',
                            'Feels commercial',
                            'Crowded seating',
                            'Specific time (can\'t choose when)',
                            'Multiple operators (quality varies)',
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
                </div>

                <div className="bg-white rounded-lg shadow-xl overflow-hidden border-4 border-green-600">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6">
                    <h3 className="text-2xl font-bold mb-2 flex items-center">
                      <ThumbsUp className="w-8 h-8 mr-3" />
                      OPTION 2: Free Public Releases (RECOMMENDED!)
                    </h3>
                    <p className="text-green-100">Spontaneous releases at temples, riverside, and throughout city</p>
                  </div>

                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Details:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li><strong>Where:</strong> Everywhere in Chiang Mai</li>
                          <li><strong>When:</strong> Full moon night + surrounding nights</li>
                          <li><strong>Cost:</strong> FREE (just buy lantern $2-5)</li>
                          <li><strong>Crowd:</strong> Dispersed throughout city</li>
                          <li><strong>Tickets:</strong> None needed</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">What You Get:</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Release whenever you want</li>
                          <li>• Choose your own location</li>
                          <li>• Buy lantern from vendors ($2-5)</li>
                          <li>• More authentic, spontaneous</li>
                          <li>• Less crowded (spread out)</li>
                          <li>• Mix with locals</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Best Free Locations:</h4>
                      <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
                        <li><strong>Ping River banks</strong> (Mae Ping River)</li>
                        <li><strong>Nawarat Bridge area</strong> (river + city view)</li>
                        <li><strong>Tha Phae Gate</strong> (Old City)</li>
                        <li><strong>Temples</strong> (Wat Phan Tao, Wat Chedi Luang)</li>
                        <li><strong>Three Kings Monument</strong></li>
                        <li><strong>Anywhere with open sky!</strong></li>
                      </ol>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="font-bold text-green-900 mb-3">Advantages:</h4>
                        <ul className="space-y-2">
                          {[
                            'FREE (except lantern cost)',
                            'Flexible timing',
                            'Choose your location',
                            'More spontaneous, authentic',
                            'Can release multiple times',
                            'Mix with locals',
                            'Less commercial feel',
                            'No tickets needed',
                          ].map((item, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-700">
                              <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-yellow-50 rounded-lg p-4">
                        <h4 className="font-bold text-yellow-900 mb-3">Disadvantages:</h4>
                        <ul className="space-y-2">
                          {[
                            'Less coordinated (not all at once)',
                            'Fewer lanterns simultaneously',
                            'No organized ceremonies',
                            'Need to find your own spot',
                            'Can be chaotic',
                          ].map((item, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-700">
                              <AlertCircle className="w-4 h-4 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg shadow-xl p-8">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <Star className="w-8 h-8 mr-3" />
                    Our Recommendation
                  </h3>
                  <p className="text-xl text-green-100 mb-6">
                    Skip the expensive organized event - do free public releases instead.
                  </p>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h4 className="font-bold text-white mb-3">Why:</h4>
                    <ul className="grid md:grid-cols-2 gap-3 text-sm text-green-100">
                      {[
                        'Free public releases just as magical',
                        'More authentic experience',
                        'Mix with locals',
                        'Can release multiple lanterns',
                        'Flexibility to move around',
                        'Still see thousands of lanterns in sky',
                        'Save $100-250',
                        'Less commercial, more meaningful',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <h4 className="font-bold text-white mb-2">When to Splurge on Official:</h4>
                    <ul className="space-y-1 text-sm text-green-100">
                      <li>• If you're serious photographer (coordinated release = best shots)</li>
                      <li>• Want guaranteed mass release at once</li>
                      <li>• Okay with commercial experience</li>
                      <li>• Budget not a concern</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="how-to-participate" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-orange-600 pb-3">
                How to Participate (Free Releases)
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Step-by-Step Guide</h3>

                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-8 border-l-4 border-orange-600">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">STEP 1: Buy Your Lantern</h4>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h5 className="font-bold text-gray-900 mb-3">Where to Buy:</h5>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Street vendors (everywhere on festival night)</li>
                          <li>• Temples</li>
                          <li>• Markets</li>
                          <li>• Shops near Ping River</li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-bold text-gray-900 mb-3">Cost & Types:</h5>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• <strong>Simple:</strong> 50-80 baht ($2-3)</li>
                          <li>• <strong>Decorated:</strong> 100-150 baht ($4-5)</li>
                          <li>• Standard size (2-3 feet diameter)</li>
                          <li>• Colors vary (white, orange, colored)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-8 border-l-4 border-blue-600">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">STEP 2: Find Your Spot</h4>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-white rounded-lg p-4">
                        <h5 className="font-bold text-blue-700 mb-2">Ping River</h5>
                        <p className="text-xs text-gray-600 mb-2">Best views, reflections in water, most popular</p>
                        <p className="text-xs text-gray-500">Can get crowded</p>
                      </div>

                      <div className="bg-white rounded-lg p-4">
                        <h5 className="font-bold text-green-700 mb-2">Open Fields</h5>
                        <p className="text-xs text-gray-600 mb-2">Easier to launch, more space, less crowded</p>
                        <p className="text-xs text-gray-500">Look for locals gathering</p>
                      </div>

                      <div className="bg-white rounded-lg p-4">
                        <h5 className="font-bold text-purple-700 mb-2">Temples</h5>
                        <p className="text-xs text-gray-600 mb-2">Traditional setting, ceremonies, beautiful backdrop</p>
                        <p className="text-xs text-gray-500">Respectful atmosphere</p>
                      </div>
                    </div>

                    <div className="mt-6 bg-red-50 rounded-lg p-4 border-l-4 border-red-600">
                      <h5 className="font-bold text-red-900 mb-2">Important:</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Need OPEN SKY (no trees, power lines overhead)</li>
                        <li>• Avoid airport areas (flight hazards)</li>
                        <li>• Be aware of wind direction</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 border-l-4 border-purple-600">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">STEP 3: Wait for Dark</h4>
                    <div className="bg-white rounded-lg p-4">
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• <strong>7-9 PM:</strong> Optimal (dark enough, not too late)</li>
                        <li>• <strong>Peak: 8-8:30 PM</strong> (most people releasing)</li>
                        <li>• Can release anytime after dark</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 border-l-4 border-green-600">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">STEP 4: Launch Your Lantern</h4>

                    <div className="bg-white rounded-lg p-6 mb-6">
                      <h5 className="font-bold text-gray-900 mb-3">How to Release:</h5>
                      <ol className="space-y-3 text-sm text-gray-700 list-decimal list-inside">
                        <li>Unfold lantern (paper shell)</li>
                        <li>Light fuel cell at bottom (waxy square)</li>
                        <li>Wait for hot air to fill (2-5 minutes)</li>
                        <li>Hold gently while filling</li>
                        <li>Make your wish</li>
                        <li>Release when full (lantern pulls upward)</li>
                        <li>Watch it rise into sky</li>
                      </ol>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-green-50 rounded-lg p-4">
                        <h5 className="font-bold text-green-900 mb-3">Tips:</h5>
                        <ul className="space-y-2">
                          {[
                            'Takes 2-5 minutes to fill with hot air',
                            'Be patient (don\'t release too early)',
                            'Two people easier for large lanterns',
                            'Wind can make it tricky',
                            'Don\'t let go until pulling strongly upward',
                            'Watch for power lines',
                          ].map((item, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-700">
                              <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-red-50 rounded-lg p-4">
                        <h5 className="font-bold text-red-900 mb-3">Safety:</h5>
                        <ul className="space-y-2">
                          {[
                            'Keep away from face (hot wax)',
                            'Don\'t release near trees, buildings',
                            'If lantern has holes, don\'t use',
                            'Supervise children closely',
                          ].map((item, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-700">
                              <AlertCircle className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="photography" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-orange-600 pb-3">
                Photography Tips
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Camera className="w-8 h-8 text-orange-600 mr-3" />
                  Getting the Perfect Shot
                </h3>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-4">Camera Settings:</h4>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li>• <strong>Mode:</strong> Manual</li>
                      <li>• <strong>ISO:</strong> 800-3200 (depending on ambient light)</li>
                      <li>• <strong>Aperture:</strong> f/2.8-f/5.6 (wide open for more light)</li>
                      <li>• <strong>Shutter Speed:</strong> 1-5 seconds (longer = more lanterns)</li>
                      <li>• <strong>Tripod:</strong> ESSENTIAL</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-4">Composition:</h4>
                    <ul className="space-y-3 text-sm text-gray-700">
                      {[
                        'Include foreground (temple, people, water)',
                        'Multiple lanterns in frame',
                        'Capture moment of release (emotion)',
                        'Reflections in Ping River (beautiful)',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <Camera className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-lg p-6 mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Timing:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Arrive before sunset (scout location)</li>
                    <li>• Blue hour (just after sunset) = beautiful</li>
                    <li>• Peak release 8-8:30 PM</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-4">Best Photo Spots:</h4>
                  <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
                    <li><strong>Nawarat Bridge</strong> - River + lanterns + city</li>
                    <li><strong>Wat Phan Tao</strong> - Temple + pond + lanterns</li>
                    <li><strong>Three Kings Monument</strong> - Statue + lanterns</li>
                    <li><strong>Ping River banks</strong> - Reflections</li>
                  </ol>
                </div>

                <div className="mt-6 bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
                  <h4 className="font-bold text-gray-900 mb-2">Phone Photography:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Use night mode</li>
                    <li>• Stabilize (lean against something)</li>
                    <li>• Take many shots (many will be blurry)</li>
                    <li>• Expect limits (real camera better here)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="mae-jo" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-orange-600 pb-3">
                Official Mae Jo Event (If You Want to Go)
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The Organized Mass Release</h3>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-4">Event Details:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><strong>Location:</strong> Varies (usually Mae Jo University area)</li>
                      <li><strong>Date:</strong> Check specific year (often day before full moon)</li>
                      <li><strong>Cost:</strong> $100-250 depending on operator</li>
                      <li><strong>Capacity:</strong> 10,000-20,000 people</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-4">What's Included:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Transport from Chiang Mai</li>
                      <li>• Designated seating</li>
                      <li>• Monk chanting ceremony</li>
                      <li>• Cultural performances</li>
                      <li>• Lantern included</li>
                      <li>• Food/drinks</li>
                      <li>• Organized countdown release</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-lg p-6 mb-6 border-l-4 border-amber-600">
                  <h4 className="font-bold text-gray-900 mb-3">Multiple Operators:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Yeepeng Lanna International</li>
                    <li>• CAD (Dhammakaya Foundation event)</li>
                    <li>• Other private organizers</li>
                    <li>• Quality and experience vary</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Booking:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Tickets sell out 2-4 months in advance</li>
                    <li>• Buy from reputable source (scams exist)</li>
                    <li>• $100-150 = standard ticket</li>
                    <li>• $200-250 = VIP seating</li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-600">
                  <h4 className="font-bold text-red-900 mb-3">Reality Check:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Still crowded (10,000+ people)</li>
                    <li>• Specific schedule (can't be flexible)</li>
                    <li>• Feels very commercial</li>
                    <li>• Beautiful but expensive</li>
                  </ul>
                </div>

                <div className="mt-6 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Is It Worth It?</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>For photographers seeking the perfect shot:</strong> Maybe</li>
                    <li>• <strong>For experience itself:</strong> No (free releases equally magical)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="booking" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-orange-600 pb-3">
                Accommodation Booking
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">When to Book</h3>

                <div className="space-y-6 mb-8">
                  <div className="border-l-4 border-green-600 pl-6 bg-green-50 rounded-r-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">2-3 MONTHS AHEAD (Sept-Oct)</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Essential</li>
                      <li>• Prices still reasonable</li>
                      <li>• Full selection</li>
                      <li>• Best locations available</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-yellow-600 pl-6 bg-yellow-50 rounded-r-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">1 MONTH AHEAD</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Prices rising 50-100%</li>
                      <li>• Limited availability</li>
                      <li>• Book NOW if you haven't</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-red-600 pl-6 bg-red-50 rounded-r-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">LAST MINUTE</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Often sold out completely</li>
                      <li>• If available: 2-3x prices</li>
                      <li>• May need to stay far from center</li>
                      <li>• <strong>NOT RECOMMENDED</strong></li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Price Increases</h3>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full bg-white border border-gray-200">
                    <thead className="bg-gradient-to-r from-orange-600 to-amber-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-bold">Accommodation</th>
                        <th className="px-6 py-4 text-left font-bold">Normal</th>
                        <th className="px-6 py-4 text-left font-bold">Yi Peng Price</th>
                        <th className="px-6 py-4 text-left font-bold">Increase</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-orange-50">
                        <td className="px-6 py-4 font-bold text-gray-900">Budget hostel</td>
                        <td className="px-6 py-4 text-gray-700">$8-12</td>
                        <td className="px-6 py-4 text-gray-700">$25-40</td>
                        <td className="px-6 py-4"><span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold">2-3x</span></td>
                      </tr>
                      <tr className="hover:bg-amber-50">
                        <td className="px-6 py-4 font-bold text-gray-900">Mid-range hotel</td>
                        <td className="px-6 py-4 text-gray-700">$25-40</td>
                        <td className="px-6 py-4 text-gray-700">$70-120</td>
                        <td className="px-6 py-4"><span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold">2-3x</span></td>
                      </tr>
                      <tr className="hover:bg-yellow-50">
                        <td className="px-6 py-4 font-bold text-gray-900">Boutique hotel</td>
                        <td className="px-6 py-4 text-gray-700">$50-80</td>
                        <td className="px-6 py-4 text-gray-700">$120-200</td>
                        <td className="px-6 py-4"><span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold">2-3x</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Where to Stay:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Old City</strong> - Walking distance to everything</li>
                    <li>• <strong>Ping River area</strong> - Near water lantern floating</li>
                    <li>• <strong>Nimman</strong> - Hip area, short distance</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="costs" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-orange-600 pb-3">
                Costs Breakdown
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">Budget</h3>
                    <p className="text-3xl font-bold">$100-200</p>
                    <p className="text-sm text-green-100">total</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex justify-between">
                        <span>Accommodation</span>
                        <strong>$40-80</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Food</span>
                        <strong>$20-40</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Lanterns</span>
                        <strong>$5-15</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Transport</span>
                        <strong>$10-20</strong>
                      </li>
                      <li className="pt-3 border-t border-gray-200 flex justify-between font-bold text-base">
                        <span>Total</span>
                        <span>$75-155</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">Mid-Range</h3>
                    <p className="text-3xl font-bold">$250-400</p>
                    <p className="text-sm text-blue-100">total</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex justify-between">
                        <span>Accommodation</span>
                        <strong>$120-180</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Food</span>
                        <strong>$50-80</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Lanterns</span>
                        <strong>$10-20</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Activities</span>
                        <strong>$30-60</strong>
                      </li>
                      <li className="pt-3 border-t border-gray-200 flex justify-between font-bold text-base">
                        <span>Total</span>
                        <span>$210-340</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">Luxury</h3>
                    <p className="text-3xl font-bold">$600-1,000+</p>
                    <p className="text-sm text-purple-100">total</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex justify-between">
                        <span>Accommodation</span>
                        <strong>$250-400</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Fine dining</span>
                        <strong>$100-200</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Mae Jo tickets</span>
                        <strong>$100-250</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Activities</span>
                        <strong>$100-150</strong>
                      </li>
                      <li className="pt-3 border-t border-gray-200 flex justify-between font-bold text-base">
                        <span>Total</span>
                        <span>$550-1,000</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="safety" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-red-600 pb-3">
                Safety & Environmental Concerns
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-600">
                    <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                      <Flame className="w-6 h-6 mr-2" />
                      Fire Safety
                    </h3>

                    <div className="mb-4">
                      <h4 className="font-bold text-gray-900 mb-2">Risks:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        {[
                          'Lanterns land on buildings = fire hazard',
                          '10-20 small fires reported yearly',
                          'Hot wax can burn',
                          'Lanterns landing on people/cars',
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <AlertCircle className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Precautions:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        {[
                          'Check wind direction (away from buildings)',
                          'Don\'t release near trees, structures',
                          'Ensure lantern fully inflated before release',
                          'Watch where it lands (if possible)',
                          'Fire department on standby',
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Flight Safety</h3>

                    <div className="bg-white rounded-lg p-4 mb-4">
                      <h4 className="font-bold text-gray-900 mb-2">Airports Closed:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Chiang Mai Airport closed Yi Peng night</li>
                        <li>• Usually 7 PM-1 AM</li>
                        <li>• All flights cancelled/rescheduled</li>
                        <li>• Lanterns = flight hazard</li>
                        <li>• Plan travel accordingly</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-l-4 border-green-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Leaf className="w-6 h-6 text-green-600 mr-2" />
                    Environmental Impact
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-bold text-red-900 mb-3">The Problem:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        {[
                          'Thousands of lanterns = litter',
                          'Wire frames don\'t biodegrade',
                          'Land in forests, farms, rivers',
                          'Animals can ingest/get tangled',
                          'Fire risk in dry areas',
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <X className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-green-900 mb-3">What's Being Done:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Some cities banned sky lanterns</li>
                        <li>• Eco-friendly biodegradable versions (rare)</li>
                        <li>• Cleanup crews deployed</li>
                        <li>• Government considering restrictions</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-600">
                    <h4 className="font-bold text-gray-900 mb-2">Ethical Choice:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Participate but be aware of impact</li>
                      <li>• Follow locals' lead</li>
                      <li>• Choose biodegradable if possible</li>
                      <li>• Consider releasing just one (not multiple)</li>
                      <li>• Some travelers skip it due to concerns</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="pros-cons" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-orange-600 pb-3">
                Pros & Cons
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center">
                    <ThumbsUp className="w-8 h-8 mr-3" />
                    Pros
                  </h3>
                  <ul className="space-y-4">
                    {[
                      'Most magical sight you\'ll see',
                      'Unique to Chiang Mai',
                      'FREE (public releases)',
                      'Can participate easily',
                      'Amazing photos/memories',
                      'Combines with Loy Krathong (double festival)',
                      'Cool November weather (perfect)',
                      'Bucket list experience',
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
                      'Accommodation expensive + sells out',
                      'Very crowded',
                      'Environmental impact',
                      'Airport closed (travel disruption)',
                      'Can be chaotic',
                      'Official events overpriced',
                      'One-night-only event',
                      'Fire/safety risks',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start text-gray-700 bg-red-50 rounded-lg p-3">
                        <X className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg shadow-xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Is It Worth It?</h3>
                <p className="text-3xl font-bold mb-4">Absolutely YES</p>
                <p className="text-xl text-green-100 mb-2">One of Thailand's most magical experiences</p>
                <p className="text-lg text-green-200">Even better: It's FREE (public releases)!</p>
              </div>
            </section>

            <section id="faq" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-orange-600 pb-3">
                Frequently Asked Questions
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8 space-y-6">
                {[
                  {
                    q: 'Do I need tickets for Yi Peng?',
                    a: 'No! Public releases are FREE. Only organized Mae Jo events need tickets ($100-250). We recommend free public releases instead.',
                  },
                  {
                    q: 'When exactly is Yi Peng 2026?',
                    a: 'November 15, 2026 (full moon). Some releases Nov 14-16 as well.',
                  },
                  {
                    q: 'Where can I release lanterns for free?',
                    a: 'Anywhere in Chiang Mai with open sky - Ping River, temples, fields. Buy lantern from vendors ($2-5).',
                  },
                  {
                    q: 'Is Mae Jo event worth $150?',
                    a: 'Only if you\'re serious photographer. Free public releases equally magical and authentic. Save your money.',
                  },
                  {
                    q: 'Can kids participate?',
                    a: 'Yes, but supervise closely (fire/hot wax). Many families participate.',
                  },
                  {
                    q: 'How many lanterns should I release?',
                    a: 'One is fine. Some do 2-3. Consider environment (more = more litter).',
                  },
                  {
                    q: 'What\'s difference between Yi Peng and Loy Krathong?',
                    a: 'Yi Peng = sky lanterns (unique to Chiang Mai). Loy Krathong = water lanterns (nationwide). In Chiang Mai, both happen same night!',
                  },
                  {
                    q: 'Is it dangerous?',
                    a: 'Minor risks (fire, hot wax). Follow safety precautions. Don\'t release near buildings/trees. Otherwise safe.',
                  },
                  {
                    q: 'What if it rains?',
                    a: 'Lanterns won\'t fly well if raining. November usually dry. Check forecast. Event happens rain or shine.',
                  },
                  {
                    q: 'Better than Loy Krathong?',
                    a: 'Different! Yi Peng = dramatic, photogenic. Loy Krathong = peaceful, reflective. Do both in Chiang Mai!',
                  },
                ].map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 text-white rounded-lg shadow-2xl p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready for Yi Peng 2026?</h2>
              <p className="text-xl text-white/90 mb-4">
                Experience thousands of sky lanterns on November 15, 2026
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8 max-w-2xl mx-auto">
                <p className="text-white/80 text-sm">
                  FREE public releases are just as magical as the expensive organized events. Book accommodation 2-3 months ahead - it sells out fast!
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/events-calendar-thailand"
                  className="inline-block bg-white text-orange-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
                >
                  View All Thailand Events
                </a>
                <a
                  href="/loy-krathong-festival-thailand"
                  className="inline-block bg-orange-700 text-white font-bold px-8 py-4 rounded-lg hover:bg-orange-800 transition-colors border-2 border-white text-lg"
                >
                  See Loy Krathong Guide
                </a>
              </div>
            </section>

            <RelatedGuides guides={relatedGuides} />
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <TableOfContents items={tocItems} />

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">2026 Date</h3>
                <div className="bg-gradient-to-br from-orange-600 to-amber-600 text-white rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold mb-1">Nov 15</p>
                  <p className="text-sm text-orange-100">Sunday</p>
                  <p className="text-xs text-orange-200 mt-2">Full Moon Night</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Our Recommendation</h3>
                <p className="text-sm mb-4">FREE public releases are just as magical!</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Skip $100-250 official event</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Release at Ping River or temples</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Buy lantern $2-5</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>More authentic experience</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Comparison</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-600 pl-3">
                    <p className="font-semibold text-gray-900">Free Public</p>
                    <p className="text-sm text-gray-600">$2-5 per lantern</p>
                    <p className="text-xs text-green-600">Recommended!</p>
                  </div>
                  <div className="border-l-4 border-red-600 pl-3">
                    <p className="font-semibold text-gray-900">Official Mae Jo</p>
                    <p className="text-sm text-gray-600">$100-250 ticket</p>
                    <p className="text-xs text-red-600">Photographers only</p>
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
