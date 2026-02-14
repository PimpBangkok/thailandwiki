import { usePageMeta } from '../hooks/usePageMeta';
import { Calendar, MapPin, DollarSign, Users, Music, Clock, AlertTriangle, Flame, Sparkles, Volume2, Info, Check, X, Shield, Home, ThumbsUp, Lightbulb } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import TableOfContents from '../components/TableOfContents';
import RelatedGuides from '../components/RelatedGuides';

export default function FullMoonPartyPage() {
  usePageMeta({
    title: 'Full Moon Party 2026 - Complete Guide & Monthly Dates',
    description: 'Complete guide to Full Moon Party Koh Phangan 2026. Monthly dates, what to expect, safety warnings, costs, and booking tips. Updated Feb 2026.',
    keywords: 'full moon party, full moon party thailand, koh phangan party, full moon party dates 2026, haad rin beach',
  });

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Events', path: '/events-calendar-thailand' },
    { label: 'Full Moon Party' },
  ];

  const tocItems = [
    { id: 'quick-facts', label: 'Quick Facts' },
    { id: 'dates', label: '2026 Dates' },
    { id: 'what-is', label: 'What is Full Moon Party?' },
    { id: 'location', label: 'Location: Haad Rin Beach' },
    { id: 'how-to-get', label: 'How to Get There' },
    { id: 'what-to-expect', label: 'What to Expect' },
    { id: 'music', label: 'Music & Stages' },
    { id: 'fire-shows', label: 'Fire Shows' },
    { id: 'buckets', label: 'The Buckets' },
    { id: 'body-paint', label: 'Body Paint' },
    { id: 'accommodation', label: 'Accommodation Strategy' },
    { id: 'costs', label: 'Costs Breakdown' },
    { id: 'safety', label: 'CRITICAL Safety Warnings' },
    { id: 'what-to-bring', label: 'What to Bring' },
    { id: 'alternatives', label: 'Alternative Parties' },
    { id: 'pros-cons', label: 'Pros & Cons' },
    { id: 'faq', label: 'FAQ' },
  ];

  const relatedGuides = [
    {
      title: 'Thailand Events Calendar',
      description: 'All festivals throughout the year',
      link: '/events-calendar-thailand',
    },
    {
      title: 'Koh Samui Travel Guide',
      description: 'Explore nearby Koh Samui',
      link: '/destinations/koh-samui',
    },
    {
      title: 'Songkran Festival',
      description: 'Thailand\'s water festival in April',
      link: '/songkran-festival-thailand',
    },
  ];

  const dates2026 = [
    { date: 'February 13, 2026', day: 'Friday', season: 'Good weather', color: 'green' },
    { date: 'March 14, 2026', day: 'Saturday', season: 'Peak season', color: 'green' },
    { date: 'April 13, 2026', day: 'Monday', season: 'Songkran weekend!', color: 'orange' },
    { date: 'May 12, 2026', day: 'Tuesday', season: 'Lower season starts', color: 'yellow' },
    { date: 'June 11, 2026', day: 'Thursday', season: 'Rainy season', color: 'blue' },
    { date: 'July 10, 2026', day: 'Friday', season: 'Rainy season', color: 'blue' },
    { date: 'August 9, 2026', day: 'Sunday', season: 'Rainy season', color: 'blue' },
    { date: 'September 7, 2026', day: 'Monday', season: 'Rainy season', color: 'blue' },
    { date: 'October 7, 2026', day: 'Wednesday', season: 'Season transition', color: 'yellow' },
    { date: 'November 5, 2026', day: 'Thursday', season: 'High season starts', color: 'green' },
    { date: 'December 4, 2026', day: 'Friday', season: 'Peak season', color: 'green' },
    { date: 'January 3, 2027', day: 'Sunday', season: 'New Year crowd', color: 'orange' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6 uppercase tracking-[3px]">
            Full Moon Party Koh Phangan 2026
          </h1>
          <p className="text-2xl sm:text-3xl text-white/90 mb-4 font-light">
            Complete Guide to Thailand's Legendary Beach Party
          </p>
          <p className="text-xl text-white/80 mb-8">
            Dates, What to Expect, Safety Tips & Everything You Need
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
                  The <strong>Full Moon Party</strong> is Thailand's most legendary beach party - a monthly gathering of 10,000-30,000 people on Haad Rin Beach, Koh Phangan, to dance, drink, and party under the full moon. What started in the 1980s as a small beach gathering has evolved into Southeast Asia's most famous party, drawing travelers from around the world every month. This complete guide covers everything you need to know about experiencing the Full Moon Party safely.
                </p>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6 border-l-4 border-orange-600 my-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <Info className="w-6 h-6 text-orange-600 mr-2" />
                    Bottom Line
                  </h3>
                  <p className="text-gray-700">
                    Full Moon Party happens monthly on Haad Rin Beach, Koh Phangan (next full moon). Expect 10,000-30,000 people, loud EDM music, fire shows, and buckets of alcohol. Budget $100-200 for the night. Book accommodation 1-2 months ahead. Be extremely careful with drugs (severe penalties), theft, and swimming drunk (deaths occur). It's wild, chaotic, and legendary.
                  </p>
                </div>

                <p className="text-gray-700">
                  <a href="/events-calendar-thailand" className="text-orange-600 hover:text-orange-700 font-semibold underline">
                    See all Thailand festivals and events at our Thailand Events Calendar
                  </a>
                  .
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
                  <h3 className="font-bold text-gray-900 mb-2">When</h3>
                  <p className="text-gray-700 text-sm">Every full moon (monthly event)</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-600">
                  <MapPin className="w-8 h-8 text-red-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Where</h3>
                  <p className="text-gray-700 text-sm">Haad Rin Beach, Koh Phangan</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-600">
                  <Users className="w-8 h-8 text-yellow-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Crowd</h3>
                  <p className="text-gray-700 text-sm">10,000-30,000 people</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600">
                  <Clock className="w-8 h-8 text-purple-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Hours</h3>
                  <p className="text-gray-700 text-sm">8 PM - sunrise (6 AM+)</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                  <Music className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Music</h3>
                  <p className="text-gray-700 text-sm">EDM, techno, trance, house (LOUD!)</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600">
                  <DollarSign className="w-8 h-8 text-green-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Entry</h3>
                  <p className="text-gray-700 text-sm">Free (no ticket required)</p>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-l-4 border-green-600">
                <p className="text-gray-700">
                  <strong>Budget:</strong> $100-200 for the night (accommodation extra) • <strong>Age:</strong> 18+ (ID checked) • <strong>Best For:</strong> Party animals, backpackers, experiencing the legend
                </p>
              </div>
            </section>

            <section id="dates">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-orange-600 pb-3">
                2026 Full Moon Party Dates
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Monthly Schedule</h3>

                <div className="space-y-4">
                  {dates2026.map((item, index) => (
                    <div
                      key={index}
                      className={`rounded-lg p-4 border-l-4 ${
                        item.color === 'green'
                          ? 'bg-green-50 border-green-600'
                          : item.color === 'orange'
                          ? 'bg-orange-50 border-orange-600'
                          : item.color === 'yellow'
                          ? 'bg-yellow-50 border-yellow-600'
                          : 'bg-blue-50 border-blue-600'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <h4 className="text-lg font-bold text-gray-900">{item.date}</h4>
                          <p className="text-sm text-gray-600">{item.day}</p>
                        </div>
                        <div>
                          <span
                            className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                              item.color === 'green'
                                ? 'bg-green-100 text-green-800'
                                : item.color === 'orange'
                                ? 'bg-orange-100 text-orange-800'
                                : item.color === 'yellow'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-blue-100 text-blue-800'
                            }`}
                          >
                            {item.season}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-600">
                    <h4 className="font-bold text-gray-900 mb-2">Peak Months</h4>
                    <p className="text-sm text-gray-700">December-March (dry season, biggest crowds)</p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
                    <h4 className="font-bold text-gray-900 mb-2">Low Season</h4>
                    <p className="text-sm text-gray-700">June-September (rainy season, smaller crowds)</p>
                  </div>
                </div>

                <div className="mt-6 bg-amber-50 rounded-lg p-4 border-l-4 border-amber-600">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> If full moon falls on Buddhist holiday, party moves to different date (rare).
                  </p>
                </div>
              </div>
            </section>

            <section id="what-is">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-orange-600 pb-3">
                What is the Full Moon Party?
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">History</h3>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-4">1980s Origins:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Started as small gathering of travelers</li>
                      <li>• Celebrating full moon with music and dancing</li>
                      <li>• Grew organically through word of mouth</li>
                      <li>• Now 30,000+ people attend monthly</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-4">Today:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Southeast Asia's most famous party</li>
                      <li>• Monthly institution (40+ years)</li>
                      <li>• Legendary backpacker experience</li>
                      <li>• "Must-do" on Southeast Asia circuit</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-4">What Defines It:</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Flame className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Beach setting (Haad Rin)</span>
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Full moon night</span>
                      </li>
                      <li className="flex items-start">
                        <Volume2 className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Massive sound systems (multiple stages)</span>
                      </li>
                      <li className="flex items-start">
                        <Flame className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Fire shows, fire skipping rope, fire limbo</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• Fluorescent body paint</li>
                      <li>• Buckets of alcohol</li>
                      <li>• Chaos, freedom, excess</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="location">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-orange-600 pb-3">
                Where: Haad Rin Beach
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The Location</h3>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-4">Koh Phangan:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Island in Gulf of Thailand</li>
                      <li>• Between Koh Samui (south) and Koh Tao (north)</li>
                      <li>• 2-3 hours by ferry from mainland</li>
                      <li>• Population: 12,000</li>
                      <li>• Swells to 40,000+ during Full Moon</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-4">Haad Rin Beach:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Southeast tip of Koh Phangan</li>
                      <li>• 500-meter crescent beach</li>
                      <li>• Two beaches: Haad Rin Nok (Sunrise = party)</li>
                      <li>• Haad Rin Nai (Sunset = quieter)</li>
                      <li>• Small village with bars, restaurants, hotels</li>
                      <li>• Transforms for Full Moon</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-4">Layout:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Beach:</strong> Main dance floor</li>
                    <li>• <strong>Beach bars:</strong> Multiple stages (different music each)</li>
                    <li>• <strong>Side streets:</strong> More bars, food, shops</li>
                    <li>• <strong>Fire shows:</strong> Usually central beach area</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="how-to-get">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-orange-600 pb-3">
                How to Get to Koh Phangan
              </h2>

              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">From Bangkok</h3>

                  <div className="space-y-6">
                    <div className="border-l-4 border-green-600 pl-6 bg-green-50 rounded-r-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg">Option 1: Fly + Ferry (Fastest)</h4>
                      <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside mb-4">
                        <li>Fly Bangkok to Koh Samui (1 hour, $60-150)</li>
                        <li>Ferry Samui to Phangan (30 min, $10-15)</li>
                      </ol>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <p><strong>Total time:</strong> 3-4 hours</p>
                        <p><strong>Total cost:</strong> $70-165</p>
                      </div>
                    </div>

                    <div className="border-l-4 border-blue-600 pl-6 bg-blue-50 rounded-r-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg">Option 2: Bus + Ferry (Cheapest)</h4>
                      <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside mb-4">
                        <li>Overnight bus Bangkok to Surat Thani (10-12 hours, $15-25)</li>
                        <li>Ferry Surat Thani to Phangan (2-3 hours, $15-20)</li>
                      </ol>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <p><strong>Total time:</strong> 14-16 hours</p>
                        <p><strong>Total cost:</strong> $30-45</p>
                      </div>
                    </div>

                    <div className="border-l-4 border-purple-600 pl-6 bg-purple-50 rounded-r-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg">Option 3: Train + Ferry</h4>
                      <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside mb-4">
                        <li>Train Bangkok to Surat Thani (8-10 hours, $15-40)</li>
                        <li>Ferry to Phangan (2-3 hours, $15-20)</li>
                      </ol>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <p><strong>Total time:</strong> 12-14 hours</p>
                        <p><strong>Total cost:</strong> $30-60</p>
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-600">
                      <p className="text-sm text-gray-700">
                        <strong>Recommended:</strong> Fly if budget allows. Bus/train if on backpacker budget.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-lg shadow-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">From Koh Samui</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Multiple departures daily</li>
                      <li>• 30-45 minutes</li>
                      <li>• Cost: $10-15</li>
                      <li>• Book through hotel or at pier</li>
                    </ul>
                    <div className="mt-4 bg-amber-50 rounded-lg p-3">
                      <p className="text-xs text-gray-700">
                        <strong>Extra Ferries for Full Moon:</strong> Late-night ferries available. Return ferries start 6 AM. Book return in advance.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">From Koh Tao</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• 2 hours</li>
                      <li>• $15-20</li>
                      <li>• Multiple daily departures</li>
                      <li>• Often combined with dive trips</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="what-to-expect">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-orange-600 pb-3">
                What to Expect
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The Timeline</h3>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border-l-4 border-blue-600">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">8-10 PM: Party Starts</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Beaches filling up</li>
                      <li>• Sound checks, music starting</li>
                      <li>• Fire shows beginning</li>
                      <li>• Still manageable crowds</li>
                      <li>• Good time to explore, find your spot</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border-l-4 border-purple-600">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">10 PM-12 AM: Building</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Crowds arriving</li>
                      <li>• All stages at full volume</li>
                      <li>• Beach getting packed</li>
                      <li>• Energy building</li>
                      <li>• Fire shows in full swing</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6 border-l-4 border-orange-600">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">12 AM-3 AM: PEAK</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• <strong>Maximum crowds (15,000-30,000 people)</strong></li>
                      <li>• Impossible to move through some areas</li>
                      <li>• All stages packed</li>
                      <li>• Height of chaos</li>
                      <li>• Most intense energy</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-6 border-l-4 border-yellow-600">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">3-5 AM: Still Going</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Some people leaving</li>
                      <li>• Die-hards still partying</li>
                      <li>• Slightly less crowded</li>
                      <li>• Sunrise approaching</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-l-4 border-green-600">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">5 AM-7 AM: Sunrise Crowd</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Watching sunrise on beach</li>
                      <li>• Exhausted but still dancing</li>
                      <li>• Fire shows winding down</li>
                      <li>• Party finally ending</li>
                      <li>• Stragglers heading home</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="music">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-orange-600 pb-3">
                The Music & Stages
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Multiple Stages</h3>
                <p className="text-gray-700 mb-6">Beach has 10-15 bars, each with own sound system:</p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-600">
                    <h4 className="font-bold text-gray-900 mb-3">1. Main Stage Areas (Central Beach)</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>Music:</strong> EDM, techno, house</li>
                      <li>• <strong>Crowd:</strong> Biggest crowds</li>
                      <li>• <strong>Vibe:</strong> High energy</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-600">
                    <h4 className="font-bold text-gray-900 mb-3">2. Rock/Alternative Bars (North end)</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>Music:</strong> Rock, punk, alternative</li>
                      <li>• <strong>Crowd:</strong> Smaller, different vibe</li>
                      <li>• <strong>Vibe:</strong> Less chaotic</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
                    <h4 className="font-bold text-gray-900 mb-3">3. Hip-Hop/Reggae Bars (South end)</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>Music:</strong> Hip-hop, reggae, dancehall</li>
                      <li>• <strong>Crowd:</strong> Mixed</li>
                      <li>• <strong>Vibe:</strong> Laid-back</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
                    <h4 className="font-bold text-gray-900 mb-3">4. Chill-Out Areas (Back streets)</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>Music:</strong> Ambient, chill</li>
                      <li>• <strong>Crowd:</strong> People taking breaks</li>
                      <li>• <strong>Vibe:</strong> Relaxed</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-600">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <Volume2 className="w-6 h-6 text-red-600 mr-2" />
                    Volume: EXTREMELY LOUD
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Bring earplugs if sensitive</li>
                    <li>• Expect hearing muffled next day</li>
                    <li>• Literally cannot have conversation near speakers</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="fire-shows">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-red-600 pb-3">
                The Fire Shows
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What You'll See</h3>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-orange-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <Flame className="w-5 h-5 text-orange-600 mr-2" />
                      Fire Dancers
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Professional performers</li>
                      <li>• Spinning fire, poi, staff</li>
                      <li>• Throughout the night</li>
                      <li>• Free to watch</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                      Fire Skipping Rope
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Two people spin flaming rope</li>
                      <li>• Drunk tourists attempt to jump</li>
                      <li>• Injuries common</li>
                      <li>• Entertaining but dangerous</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <Flame className="w-5 h-5 text-yellow-600 mr-2" />
                      Fire Limbo
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Flaming bar</li>
                      <li>• People attempt to limbo under it</li>
                      <li>• Burns happen regularly</li>
                      <li>• Fun to watch, risky to try</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg p-6">
                  <h4 className="font-bold mb-3 text-xl flex items-center">
                    <AlertTriangle className="w-6 h-6 mr-2" />
                    WARNING
                  </h4>
                  <p className="mb-4">Many tourists burned every Full Moon Party</p>
                  <ul className="space-y-2 text-sm text-red-100">
                    <li>• Alcohol + fire = bad combination</li>
                    <li>• If attempting, be sober and careful</li>
                    <li>• Medical tent nearby (busy all night)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="buckets">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-orange-600 pb-3">
                The Buckets
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Iconic Full Moon Tradition</h3>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-4">What's a Bucket?</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Plastic beach bucket</li>
                      <li>• Filled with alcohol mix</li>
                      <li>• Usually: Red Bull + Thai whiskey + Coke</li>
                      <li>• Sometimes: Vodka mix, rum mix, etc.</li>
                      <li>• Cost: 200-400 baht ($6-12)</li>
                      <li>• Shared among 2-4 people</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-4">How Strong?</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>VERY strong</strong> (deceptively so)</li>
                      <li>• Easy to drink fast (sweet, cold)</li>
                      <li>• Alcohol content higher than it tastes</li>
                      <li>• One bucket = 4-6 standard drinks</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg p-6 mb-8">
                  <h4 className="font-bold mb-4 text-xl flex items-center">
                    <AlertTriangle className="w-6 h-6 mr-2" />
                    WARNING
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {[
                      'Buckets responsible for most Full Moon problems',
                      'Easy to drink too many too fast',
                      'Blackouts common',
                      'Vomiting common',
                      'Bad decisions result',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <X className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
                  <h4 className="font-bold text-gray-900 mb-3">Safer Alternatives:</h4>
                  <ul className="space-y-2">
                    {[
                      'Beer (can control intake better)',
                      'Bottled drinks (know what you\'re drinking)',
                      'One bucket slowly over several hours',
                      'Alternate with water',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-700">
                        <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section id="body-paint">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-orange-600 pb-3">
                The Body Paint
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Fluorescent Paint Everywhere</h3>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-3">What:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Fluorescent/neon body paint</li>
                      <li>• Glows under UV lights</li>
                      <li>• Free or cheap at many bars</li>
                      <li>• People cover themselves</li>
                    </ul>
                  </div>

                  <div className="bg-pink-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-3">Designs:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Peace signs, hearts, tribal</li>
                      <li>• Full body coverage</li>
                      <li>• Face paint</li>
                      <li>• Creative artwork</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-3">Tips:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Wears off eventually (days)</li>
                      <li>• Can stain light-colored clothes</li>
                      <li>• Wash off with soap and water</li>
                      <li>• Test for allergies first</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="accommodation" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-orange-600 pb-3">
                Accommodation Strategy
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">When to Book</h3>

                <div className="space-y-6 mb-8">
                  <div className="border-l-4 border-green-600 pl-6 bg-green-50 rounded-r-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">1-2 MONTHS AHEAD (IDEAL)</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Prices still reasonable</li>
                      <li>• Good selection available</li>
                      <li>• Best locations available</li>
                      <li>• Can choose exact accommodation type</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-yellow-600 pl-6 bg-yellow-50 rounded-r-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">2-4 WEEKS AHEAD</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Prices rising (50-100% increase)</li>
                      <li>• Limited beachfront options</li>
                      <li>• Still some availability</li>
                      <li>• Book NOW if you haven't</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-orange-600 pl-6 bg-orange-50 rounded-r-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">1-2 WEEKS AHEAD</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Prices 2-3x normal</li>
                      <li>• Very limited options</li>
                      <li>• May need to stay far from beach</li>
                      <li>• Possible no rooms at all</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-red-600 pl-6 bg-red-50 rounded-r-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">LAST MINUTE</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Often no accommodation available</li>
                      <li>• If available, 3-4x normal prices</li>
                      <li>• May need to sleep on beach (unsafe!)</li>
                      <li>• <strong>NOT RECOMMENDED</strong></li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Price Examples</h3>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full bg-white border border-gray-200">
                    <thead className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-bold">Accommodation Type</th>
                        <th className="px-6 py-4 text-left font-bold">Normal Price</th>
                        <th className="px-6 py-4 text-left font-bold">Full Moon Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-orange-50">
                        <td className="px-6 py-4 font-bold text-gray-900">Beach bungalow</td>
                        <td className="px-6 py-4 text-gray-700">$20-30</td>
                        <td className="px-6 py-4 text-gray-700">$80-150</td>
                      </tr>
                      <tr className="hover:bg-amber-50">
                        <td className="px-6 py-4 font-bold text-gray-900">Guesthouse (walking distance)</td>
                        <td className="px-6 py-4 text-gray-700">$15-25</td>
                        <td className="px-6 py-4 text-gray-700">$50-100</td>
                      </tr>
                      <tr className="hover:bg-yellow-50">
                        <td className="px-6 py-4 font-bold text-gray-900">Hostel dorm</td>
                        <td className="px-6 py-4 text-gray-700">$8-15</td>
                        <td className="px-6 py-4 text-gray-700">$30-60</td>
                      </tr>
                      <tr className="hover:bg-red-50">
                        <td className="px-6 py-4 font-bold text-gray-900">Mid-range hotel</td>
                        <td className="px-6 py-4 text-gray-700">$40-60</td>
                        <td className="px-6 py-4 text-gray-700">$120-200</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Where to Stay</h3>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                    <h4 className="font-bold text-gray-900 mb-3">Option 1: Haad Rin Beach</h4>
                    <p className="text-sm text-gray-600 mb-3">Most Convenient</p>
                    <ul className="space-y-2 text-sm text-gray-700 mb-4">
                      <li>• Walking distance to party</li>
                      <li>• LOUD (impossible to sleep during party)</li>
                      <li>• Most expensive</li>
                      <li>• Can go back and forth easily</li>
                    </ul>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-xs"><strong>Pros:</strong> Closest, most convenient</p>
                      <p className="text-xs"><strong>Cons:</strong> Extremely loud, expensive</p>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
                    <h4 className="font-bold text-gray-900 mb-3">Option 2: Nearby (10-15 min walk)</h4>
                    <p className="text-sm text-gray-600 mb-3">RECOMMENDED</p>
                    <ul className="space-y-2 text-sm text-gray-700 mb-4">
                      <li>• Still walkable</li>
                      <li>• Quieter (can sleep if you want)</li>
                      <li>• More affordable</li>
                      <li>• Safer (not in chaos)</li>
                    </ul>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-xs"><strong>Pros:</strong> Balance of convenience + peace</p>
                      <p className="text-xs"><strong>Cons:</strong> Walk home drunk/tired</p>
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-600">
                    <h4 className="font-bold text-gray-900 mb-3">Option 3: Other Parts of Island + Taxi</h4>
                    <p className="text-sm text-gray-600 mb-3">Budget Option</p>
                    <ul className="space-y-2 text-sm text-gray-700 mb-4">
                      <li>• Much cheaper</li>
                      <li>• Peaceful</li>
                      <li>• Need transport to/from party</li>
                      <li>• Taxi $10-15 each way</li>
                    </ul>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-xs"><strong>Pros:</strong> Affordable, quieter</p>
                      <p className="text-xs"><strong>Cons:</strong> Logistics, taxi costs</p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
                    <h4 className="font-bold text-gray-900 mb-3">Option 4: Stay on Koh Samui + Ferry</h4>
                    <p className="text-sm text-gray-600 mb-3">Alternative</p>
                    <ul className="space-y-2 text-sm text-gray-700 mb-4">
                      <li>• Accommodation easier to find</li>
                      <li>• Cheaper</li>
                      <li>• Late-night ferries available</li>
                      <li>• Safe return</li>
                    </ul>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-xs"><strong>Pros:</strong> No accommodation stress</p>
                      <p className="text-xs"><strong>Cons:</strong> Ferry logistics, cost</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-600">
                  <p className="text-sm text-gray-700">
                    <strong>Recommendation:</strong> Book Haad Rin or nearby 1-2 months ahead. Accept it will be loud. If budget tight, Samui + ferry works well.
                  </p>
                </div>
              </div>
            </section>

            <section id="costs" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-orange-600 pb-3">
                Costs Breakdown
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Full Moon Party Budget</h3>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-green-600">
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6">
                      <h4 className="text-2xl font-bold mb-2">Backpacker</h4>
                      <p className="text-3xl font-bold">$100-150</p>
                      <p className="text-sm text-green-100">total</p>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3 text-sm text-gray-700">
                        <li className="flex justify-between">
                          <span>Accommodation (1 night)</span>
                          <strong>$30-60</strong>
                        </li>
                        <li className="flex justify-between">
                          <span>Food</span>
                          <strong>$10-20</strong>
                        </li>
                        <li className="flex justify-between">
                          <span>Drinks</span>
                          <strong>$20-40</strong>
                        </li>
                        <li className="flex justify-between">
                          <span>Transport</span>
                          <strong>$0-10</strong>
                        </li>
                        <li className="flex justify-between">
                          <span>Miscellaneous</span>
                          <strong>$10-20</strong>
                        </li>
                        <li className="pt-3 border-t border-gray-200 flex justify-between font-bold text-base">
                          <span>Total</span>
                          <span>$70-150</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-blue-600">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6">
                      <h4 className="text-2xl font-bold mb-2">Mid-Range</h4>
                      <p className="text-3xl font-bold">$200-350</p>
                      <p className="text-sm text-blue-100">total</p>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3 text-sm text-gray-700">
                        <li className="flex justify-between">
                          <span>Accommodation</span>
                          <strong>$80-120</strong>
                        </li>
                        <li className="flex justify-between">
                          <span>Food</span>
                          <strong>$20-40</strong>
                        </li>
                        <li className="flex justify-between">
                          <span>Drinks</span>
                          <strong>$40-80</strong>
                        </li>
                        <li className="flex justify-between">
                          <span>Transport</span>
                          <strong>$10-30</strong>
                        </li>
                        <li className="flex justify-between">
                          <span>Activities</span>
                          <strong>$20-50</strong>
                        </li>
                        <li className="pt-3 border-t border-gray-200 flex justify-between font-bold text-base">
                          <span>Total</span>
                          <span>$170-320</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-purple-600">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
                      <h4 className="text-2xl font-bold mb-2">Comfort</h4>
                      <p className="text-3xl font-bold">$400-600+</p>
                      <p className="text-sm text-purple-100">total</p>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3 text-sm text-gray-700">
                        <li className="flex justify-between">
                          <span>Accommodation</span>
                          <strong>$150-250</strong>
                        </li>
                        <li className="flex justify-between">
                          <span>Food (restaurants)</span>
                          <strong>$50-80</strong>
                        </li>
                        <li className="flex justify-between">
                          <span>Drinks</span>
                          <strong>$60-100</strong>
                        </li>
                        <li className="flex justify-between">
                          <span>Transport (private taxi)</span>
                          <strong>$30-50</strong>
                        </li>
                        <li className="flex justify-between">
                          <span>VIP areas</span>
                          <strong>$50-100</strong>
                        </li>
                        <li className="pt-3 border-t border-gray-200 flex justify-between font-bold text-base">
                          <span>Total</span>
                          <span>$340-580</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-blue-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">What Costs Money:</h4>
                  <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                    <li>• Accommodation (biggest expense)</li>
                    <li>• Drinks ($6-12 per bucket, $3-5 per beer)</li>
                    <li>• Food ($3-8 per meal)</li>
                    <li>• Body paint (free to $3)</li>
                    <li>• Taxi ($10-15)</li>
                    <li>• Ferry if from Samui ($10-15 each way)</li>
                  </ul>
                  <p className="mt-4 text-lg font-bold text-green-700">Party itself: FREE (no entry fee!)</p>
                </div>
              </div>
            </section>

            <section id="safety" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-red-600 pb-3">
                CRITICAL Safety Warnings
              </h2>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg shadow-2xl p-8">
                  <h3 className="text-3xl font-bold mb-4 flex items-center">
                    <Shield className="w-10 h-10 mr-3" />
                    DRUGS - EXTREMELY DANGEROUS
                  </h3>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
                    <h4 className="font-bold mb-4 text-2xl">SEVERE PENALTIES IN THAILAND:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Possession = 1-10 years prison</li>
                      <li>• Dealing = 5 years to life or death penalty</li>
                      <li>• Foreign passport doesn't help</li>
                      <li>• Embassy can't get you out</li>
                      <li>• Thai prisons BRUTAL</li>
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <h4 className="font-bold mb-3">Common at Full Moon:</h4>
                      <ul className="space-y-2 text-sm">
                        {[
                          'Dealers everywhere (obvious and undercover)',
                          'Magic mushroom shakes sold openly',
                          'Ecstasy, cocaine, ketamine available',
                          'MANY undercover police',
                          'Foreigners arrested every Full Moon Party',
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <X className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <h4 className="font-bold mb-3">Police Tactics:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Undercover as dealers (entrapment legal)</li>
                        <li>• Undercover as tourists</li>
                        <li>• Random searches</li>
                        <li>• Drug tests (urine/blood)</li>
                        <li>• Target foreigners</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 bg-red-800 rounded-lg p-6">
                    <h4 className="font-bold mb-3 text-xl">If Caught:</h4>
                    <ul className="space-y-2 text-sm">
                      {[
                        'Arrested immediately',
                        'Possible beating by police',
                        'Bribe attempt (10,000-50,000 baht but still illegal record)',
                        'Court appearance',
                        'Prison time likely',
                        'Deportation + banned from Thailand',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <AlertTriangle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 bg-white text-red-600 rounded-lg p-6 text-center">
                    <p className="text-2xl font-bold">OUR ADVICE: DO NOT TOUCH DRUGS</p>
                    <p className="text-lg mt-2">Not worth it. Not joking. Not exaggerating.</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <AlertTriangle className="w-8 h-8 text-orange-600 mr-3" />
                    THEFT - EXTREMELY COMMON
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div className="bg-red-50 rounded-lg p-6">
                      <h4 className="font-bold text-gray-900 mb-3">What Gets Stolen:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        {[
                          'Phones (most common)',
                          'Wallets',
                          'Bags',
                          'Shoes (yes, really)',
                          'Hotel room items (if unlocked)',
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <X className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-yellow-50 rounded-lg p-6">
                      <h4 className="font-bold text-gray-900 mb-3">How:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Pickpockets in crowded areas</li>
                        <li>• Left unattended for "just a second"</li>
                        <li>• Too drunk to notice</li>
                        <li>• While swimming</li>
                        <li>• From hotel rooms</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600 mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Protection:</h4>
                    <ul className="space-y-2">
                      {[
                        'Waterproof bag worn on body',
                        'Bring minimal cash only',
                        'Leave valuables at accommodation',
                        'Lock accommodation (even if leaving briefly)',
                        'Backup phone if possible',
                        'Keep bag in front, zipped',
                        'Never leave anything unattended',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700">
                          <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <strong>Insurance:</strong> Travel insurance usually covers theft (with police report). File report at Phangan police station. Keep receipts for valuable items.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg shadow-2xl p-8">
                  <h3 className="text-3xl font-bold mb-4 flex items-center">
                    <AlertTriangle className="w-10 h-10 mr-3" />
                    DROWNING - DEATHS EVERY YEAR
                  </h3>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
                    <h4 className="font-bold mb-4 text-2xl">MAJOR CAUSE OF DEATH AT FULL MOON:</h4>
                    <ul className="space-y-2 text-sm">
                      {[
                        'Multiple drownings every year',
                        'Swimming while drunk = extremely dangerous',
                        'Dark water, drunk + strong swimmers drown',
                        'Currents can be strong',
                        'No lifeguards at night',
                        'Emergency response slow',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <X className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white text-blue-600 rounded-lg p-6 text-center mb-6">
                    <p className="text-2xl font-bold">DON'T SWIM DRUNK</p>
                    <p className="text-lg mt-2">Seems fun, is deadly. Not worth it.</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <h4 className="font-bold mb-3">If You Must Swim:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Sober</li>
                      <li>• With sober friends watching</li>
                      <li>• Not too deep</li>
                      <li>• Be aware of currents</li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-lg shadow-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">ASSAULT & HARASSMENT</h3>

                    <div className="bg-red-50 rounded-lg p-4 mb-4">
                      <h4 className="font-bold text-gray-900 mb-2">Reality:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        {[
                          'Sexual assault happens (especially to lone females)',
                          'Physical fights (usually between drunk males)',
                          'Harassment common',
                          'Spiked drinks possible',
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <X className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">Stay Safe:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        {[
                          'Don\'t go alone (especially women)',
                          'Stick with friends',
                          'Watch your drink at all times',
                          'Don\'t accept drinks from strangers',
                          'Leave situation if uncomfortable',
                          'Trust your instincts',
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">INJURIES & SCAMS</h3>

                    <div className="bg-yellow-50 rounded-lg p-4 mb-4">
                      <h4 className="font-bold text-gray-900 mb-2">Common Injuries:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Burns from fire shows (VERY common)</li>
                        <li>• Cuts from glass on beach</li>
                        <li>• Falls/sprains (drunk + uneven ground)</li>
                        <li>• Heatstroke</li>
                        <li>• Dehydration</li>
                      </ul>
                      <p className="text-xs mt-3">
                        <strong>Medical:</strong> First aid tent on beach. Hospital in Thongsala (20 min). Travel insurance essential.
                      </p>
                    </div>

                    <div className="bg-orange-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">Common Scams:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Jet ski scams ("you damaged it")</li>
                        <li>• Fake police (demanding bribes)</li>
                        <li>• Overcharged taxis</li>
                        <li>• Counterfeit tickets</li>
                        <li>• Spiked drinks followed by robbery</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="what-to-bring" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-orange-600 pb-3">
                What to Bring
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
                    <h3 className="text-xl font-bold text-green-900 mb-4">Essential:</h3>
                    <ul className="space-y-3">
                      {[
                        'Cash (ATMs run out during Full Moon)',
                        'Waterproof phone case (or leave phone)',
                        'Small waterproof bag for essentials',
                        'ID (passport or copy)',
                        'Flip-flops (beach + glass = need something)',
                        'Light clothes (will get sandy, sweaty)',
                        'Towel (small one)',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700">
                          <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Optional:</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Earplugs (music LOUD)</li>
                      <li>• Glow sticks/accessories</li>
                      <li>• Portable charger (if bringing phone)</li>
                      <li>• Change of clothes in waterproof bag</li>
                      <li>• Wet wipes</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-600">
                    <h3 className="text-xl font-bold text-red-900 mb-4">DON'T Bring:</h3>
                    <ul className="space-y-3">
                      {[
                        'Expensive phone (leave at hotel or risk theft)',
                        'Valuable jewelry',
                        'More cash than needed for night',
                        'Bag with valuables',
                        'White/light clothes (will get destroyed)',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700">
                          <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="alternatives" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-orange-600 pb-3">
                Alternative Parties (Less Crazy)
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-xl p-6 border-l-4 border-purple-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Half Moon Party</h3>
                  <div className="space-y-2 text-sm text-gray-700 mb-4">
                    <p><strong>When:</strong> Two weeks after Full Moon (every month)</p>
                    <p><strong>Where:</strong> Ban Tai (different part of Phangan)</p>
                    <p><strong>Size:</strong> 5,000-10,000 people (half size)</p>
                    <p><strong>Vibe:</strong> Similar but more manageable</p>
                    <p><strong>Cost:</strong> $15-20 entry</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">Why Choose:</h4>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>• Smaller (less overwhelming)</li>
                      <li>• Indoor venue (more controlled)</li>
                      <li>• Better sound system</li>
                      <li>• Slightly safer</li>
                      <li>• Still wild but less chaotic</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-6 border-l-4 border-gray-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Black Moon Party</h3>
                  <div className="space-y-2 text-sm text-gray-700 mb-4">
                    <p><strong>When:</strong> Week before Full Moon</p>
                    <p><strong>Where:</strong> Backyard Club, Haad Rin</p>
                    <p><strong>Size:</strong> 3,000-5,000 people</p>
                    <p><strong>Vibe:</strong> Dark theme, UV paint</p>
                    <p><strong>Cost:</strong> $10-15 entry</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-6 border-l-4 border-green-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Jungle Experience</h3>
                  <div className="space-y-2 text-sm text-gray-700 mb-4">
                    <p><strong>When:</strong> Weekly (usually Saturday)</p>
                    <p><strong>Where:</strong> Jungle area inland</p>
                    <p><strong>Size:</strong> 2,000-4,000 people</p>
                    <p><strong>Vibe:</strong> Psytrance, jungle setting</p>
                    <p><strong>Cost:</strong> $15-20 entry</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">Why Different:</h4>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>• Jungle location (not beach)</li>
                      <li>• Different music (psytrance)</li>
                      <li>• More hippie vibe</li>
                      <li>• Interesting alternative</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-6 border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Waterfall Party</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>When:</strong> Day before Full Moon</p>
                    <p><strong>Where:</strong> Paradise Waterfall area</p>
                    <p><strong>Size:</strong> 1,000-2,000 people</p>
                    <p><strong>Vibe:</strong> Daytime, waterfall swimming</p>
                    <p><strong>Cost:</strong> $10-15 entry</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="pros-cons" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-orange-600 pb-3">
                Pros & Cons (Brutally Honest)
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-lg shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center">
                    <ThumbsUp className="w-8 h-8 mr-3" />
                    Pros
                  </h3>
                  <ul className="space-y-4">
                    {[
                      'Legendary experience (Southeast Asia bucket list)',
                      'Unique atmosphere (nowhere else like it)',
                      'Meet travelers from around world',
                      'Impressive fire shows',
                      'Beach party under full moon (beautiful setting)',
                      'No entry fee (party itself free)',
                      'Happens monthly (easy to plan around)',
                      'Backpacker rite of passage',
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
                      'Extremely crowded (uncomfortable levels)',
                      'Very loud (hearing affected next day)',
                      'Dangerous (drugs, theft, drowning, assault)',
                      'Environmental disaster (trash everywhere)',
                      'Expensive accommodation',
                      'Gets old quickly (repetitive music)',
                      'Hangover + travel next day = miserable',
                      'Not as "legendary" as it used to be (commercialized)',
                      'Police presence stressful',
                      'Can feel unsafe, especially for solo travelers',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start text-gray-700 bg-red-50 rounded-lg p-3">
                        <X className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Is It Worth It?</h3>

                <div className="space-y-6">
                  <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
                    <h4 className="font-bold text-gray-900 mb-3">YES, if you:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Want legendary backpacker experience</li>
                      <li>• Enjoy massive party atmosphere</li>
                      <li>• Traveling with friends (safety in numbers)</li>
                      <li>• Can handle crowds and chaos</li>
                      <li>• Okay with risks (and take precautions)</li>
                      <li>• Young and adventurous</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
                    <h4 className="font-bold text-gray-900 mb-3">MAYBE, if you:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Over 30 (many find it "too much")</li>
                      <li>• Solo traveler (less safe, less fun)</li>
                      <li>• Moderate party person (might be overwhelming)</li>
                      <li>• Considering Half Moon instead (better option)</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-600">
                    <h4 className="font-bold text-gray-900 mb-3">NO, if you:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Don't like crowds</li>
                      <li>• Prefer chilled atmosphere</li>
                      <li>• Want peaceful Thailand experience</li>
                      <li>• Have anxiety in chaotic situations</li>
                      <li>• Concerned about safety</li>
                      <li>• Can't handle extremely loud music</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                    <Lightbulb className="w-6 h-6 text-blue-600 mr-2" />
                    Honest Take:
                  </h4>
                  <p className="text-gray-700">
                    Worth experiencing once for the story. You'll either love it or hate it. Many people say "once was enough." Consider Half Moon as alternative (similar vibe, half the chaos).
                  </p>
                </div>
              </div>
            </section>

            <section id="faq" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-orange-600 pb-3">
                Frequently Asked Questions
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8 space-y-6">
                {[
                  {
                    q: 'Is Full Moon Party safe?',
                    a: 'Relatively safe for major party but risks exist. Don\'t do drugs (arrests common), watch your drinks, don\'t swim drunk (drownings happen), protect valuables (theft common). Stick with friends and stay aware.',
                  },
                  {
                    q: 'What should I wear?',
                    a: 'Light, comfortable clothes you don\'t mind ruining. Will get sandy, sweaty, possibly paint-covered. Flip-flops essential (glass on beach). Many go shirtless/bikini. Don\'t wear anything valuable.',
                  },
                  {
                    q: 'How much money do I need?',
                    a: '$50-100 for the party itself (drinks, food). Plus accommodation ($30-150). Total budget $100-250 for the night.',
                  },
                  {
                    q: 'Can I go alone?',
                    a: 'Yes, many do. Easier to meet people than staying alone. But less safe - stick with people you meet, don\'t wander alone, be extra careful.',
                  },
                  {
                    q: 'Are there age limits?',
                    a: '18+ for alcohol. No upper age limit but most attendees 18-30. If over 35, might feel out of place (but some love it anyway!).',
                  },
                  {
                    q: 'What time should I arrive?',
                    a: '9-10 PM good arrival time. Early enough to explore but party already started. Peak 12-3 AM.',
                  },
                  {
                    q: 'Do I need to book accommodation far in advance?',
                    a: 'YES. 1-2 months ahead minimum. Closer to date, prices double/triple or sold out completely.',
                  },
                  {
                    q: 'Is Full Moon Party better than Half Moon Party?',
                    a: 'Full Moon = bigger, more legendary, more chaotic. Half Moon = smaller, more manageable, less overwhelming. First-timers try Full Moon. If want similar vibe but less crazy, Half Moon better.',
                  },
                  {
                    q: 'What about the morning after?',
                    a: 'Expect to be exhausted. Most people sleep till noon. Beach covered in trash (cleanup crews work all day). Many leave island next day (plan light schedule).',
                  },
                  {
                    q: 'Can I bring kids?',
                    a: 'Absolutely not. Adult party only. Drugs, alcohol, fire, crowds, late night. Not appropriate for children.',
                  },
                ].map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 text-white rounded-lg shadow-2xl p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready for Full Moon Party?</h2>
              <p className="text-xl text-white/90 mb-4">
                Thailand's most legendary beach party awaits every full moon
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8 max-w-2xl mx-auto">
                <p className="text-white/80 text-sm">
                  Book accommodation 1-2 months ahead. Stay safe: don't do drugs, watch your drinks, don't swim drunk, protect valuables. Travel insurance essential!
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
                  href="/destinations/koh-samui"
                  className="inline-block bg-orange-700 text-white font-bold px-8 py-4 rounded-lg hover:bg-orange-800 transition-colors border-2 border-white text-lg"
                >
                  Explore Koh Samui
                </a>
              </div>
            </section>

            <RelatedGuides guides={relatedGuides} />
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <TableOfContents items={tocItems} />

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Next Full Moon</h3>
                <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white rounded-lg p-4 text-center">
                  <p className="text-sm text-orange-100 mb-2">Check lunar calendar for</p>
                  <p className="text-2xl font-bold">2026 Dates</p>
                  <p className="text-xs text-orange-200 mt-2">Monthly event</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Tips</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Book accommodation 1-2 months ahead</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Budget $100-200 for the night</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Be careful with buckets (very strong)</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Don't swim drunk (deaths occur)</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Bring earplugs (LOUD music)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Best Months</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-green-600 pl-3">
                    <p className="font-semibold text-gray-900">Peak Season</p>
                    <p className="text-sm text-gray-600">December-March</p>
                    <p className="text-xs text-green-600">Biggest crowds</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-3">
                    <p className="font-semibold text-gray-900">Low Season</p>
                    <p className="text-sm text-gray-600">June-September</p>
                    <p className="text-xs text-blue-600">Smaller crowds, rain</p>
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
