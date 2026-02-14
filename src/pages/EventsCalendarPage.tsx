import { usePageMeta } from '../hooks/usePageMeta';
import { Calendar, MapPin, Users, Sparkles, AlertCircle, Check, X, Clock, PartyPopper, Star, Info, Lightbulb } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import TableOfContents from '../components/TableOfContents';

export default function EventsCalendarPage() {
  usePageMeta({
    title: 'Thailand Events Calendar 2026 - Festivals & Public Holidays',
    description: 'Complete Thailand events calendar 2026. Songkran, Loy Krathong, Full Moon Party dates. What\'s happening now, festival guides, booking tips. Updated monthly.',
    keywords: 'thailand events calendar, thailand festivals 2026, events in thailand, thai festivals calendar, thailand public holidays',
  });

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Events Calendar' },
  ];

  const tocItems = [
    { id: 'whats-happening', label: 'What\'s Happening Now' },
    { id: 'upcoming', label: 'Upcoming Major Events' },
    { id: 'major-festivals', label: 'Major Festivals' },
    { id: 'by-month', label: 'Events by Month' },
    { id: 'by-destination', label: 'Events by Destination' },
    { id: 'festival-types', label: 'Festival Types' },
    { id: 'public-holidays', label: 'Public Holidays 2026' },
    { id: 'planning', label: 'How to Plan' },
    { id: 'faq', label: 'FAQ' },
  ];

  const majorFestivals = [
    {
      name: 'Songkran Water Festival',
      dates: 'April 13-15',
      location: 'Nationwide (best in Bangkok, Chiang Mai, Phuket)',
      description: 'Thai New Year water festival - world\'s biggest water fight',
      link: '/songkran-festival-thailand',
      color: 'from-blue-600 to-cyan-600',
      crowd: 'EXTREME (millions participate)',
      budget: '$$',
      searches: '22,200/month',
      pros: ['Most famous Thai festival', 'Wild, fun, unforgettable', 'Once-in-lifetime experience'],
      cons: ['Extremely crowded', 'Everything shuts down', 'Can be overwhelming'],
    },
    {
      name: 'Loy Krathong Lantern Festival',
      dates: 'November 15',
      location: 'Nationwide (best in Bangkok, Chiang Mai, Sukhothai)',
      description: 'Floating water lanterns, thousands of lights on rivers',
      link: '/loy-krathong-festival-thailand',
      color: 'from-purple-600 to-pink-600',
      crowd: 'High (but manageable)',
      budget: '$',
      searches: '18,100/month',
      pros: ['Most beautiful Thai festival', 'Romantic, photogenic', 'Peaceful atmosphere'],
      cons: [],
      note: 'In Chiang Mai: Combines with Yi Peng (sky lanterns) for spectacular double festival!',
    },
    {
      name: 'Full Moon Party',
      dates: 'Monthly!',
      location: 'Haad Rin Beach, Koh Phangan',
      description: 'Legendary beach party (10,000-30,000 people)',
      link: '/full-moon-party-koh-phangan',
      color: 'from-orange-600 to-red-600',
      crowd: 'EXTREME',
      budget: '$$',
      searches: '49,500/month (HIGHEST!)',
      pros: ['Legendary backpacker experience', 'Wild party atmosphere', 'Bucket list item'],
      cons: ['Very dangerous (drugs, theft, drowning)', 'Extremely crowded and loud', 'Can be overwhelming'],
      monthlyDates: ['Feb 13', 'Mar 14', 'Apr 13', 'May 12', 'Jun 11', 'Jul 10', 'Aug 9', 'Sep 7', 'Oct 7', 'Nov 5', 'Dec 4', 'Jan 3 (2027)'],
    },
    {
      name: 'Yi Peng Sky Lanterns',
      dates: 'November 15',
      location: 'Chiang Mai (unique to Northern Thailand)',
      description: 'Thousands of glowing lanterns released into sky',
      link: '/yi-peng-lantern-festival-chiang-mai',
      color: 'from-amber-600 to-yellow-600',
      crowd: 'Very high',
      budget: 'FREE (public) or $$$ (official $100-250)',
      searches: '12,100/month',
      pros: ['Most magical sight in Thailand', 'World-famous (Instagram favorite)', 'Can participate for free!'],
      cons: [],
      note: 'Same night as Loy Krathong',
    },
  ];

  const monthlyEvents = [
    {
      month: 'JANUARY',
      events: [
        { name: 'New Year\'s Day', date: 'Jan 1', type: 'PUBLIC HOLIDAY', description: 'Celebrations nationwide, Bangkok countdown at Central World, island beach parties' },
        { name: 'Children\'s Day', date: '2nd Saturday', type: 'Special Day', description: 'Free entry to zoos, museums, events for kids nationwide' },
      ],
    },
    {
      month: 'FEBRUARY',
      highlight: true,
      events: [
        { name: 'Chinese New Year', date: 'Feb 9-11', type: 'Major Event', description: 'Dragon dances, fireworks, street food in Chinatown areas' },
        { name: 'Chiang Mai Flower Festival', date: 'Feb 1-7', type: 'Festival', description: 'Flower parade, exhibitions, beauty pageants' },
        { name: 'Makha Bucha Day', date: 'Feb 12', type: 'PUBLIC HOLIDAY', description: 'Buddhist holiday, candle processions, alcohol ban' },
        { name: 'Valentine\'s Day Events', date: 'Feb 14', type: 'Special Day', description: 'Special dinners, rooftop parties, romantic packages' },
      ],
    },
    {
      month: 'MARCH',
      events: [
        { name: 'Pattaya Music Festival', date: 'Mid-March', type: 'Festival', description: 'Multi-day beach music festival, free entry' },
        { name: 'Women\'s Day', date: 'Mar 8', type: 'Special Day', description: 'Spa deals, restaurant discounts' },
      ],
    },
    {
      month: 'APRIL',
      highlight: true,
      events: [
        { name: 'SONGKRAN FESTIVAL', date: 'Apr 13-15', type: 'MAJOR EVENT', description: 'Thai New Year - epic water fights nationwide! Book 3-6 months ahead' },
        { name: 'Pattaya Songkran', date: 'Apr 18-20', type: 'Festival', description: 'Later dates - avoid Bangkok crowds' },
        { name: 'Chakri Memorial Day', date: 'Apr 6', type: 'PUBLIC HOLIDAY', description: 'Commemorates founding of Chakri Dynasty' },
      ],
    },
    {
      month: 'MAY',
      events: [
        { name: 'Labour Day', date: 'May 1', type: 'PUBLIC HOLIDAY' },
        { name: 'Coronation Day', date: 'May 4', type: 'PUBLIC HOLIDAY' },
        { name: 'Royal Ploughing Ceremony', date: 'Early May', type: 'Royal Event', description: 'Ancient Brahmin ceremony predicting harvest' },
        { name: 'Rocket Festival (Bun Bang Fai)', date: 'May', type: 'Festival', description: 'Isaan region - rockets to encourage rain' },
      ],
    },
    {
      month: 'JUNE',
      events: [
        { name: 'Visakha Bucha Day', date: 'Full moon', type: 'PUBLIC HOLIDAY', description: 'Buddha\'s birth, enlightenment, death. Alcohol ban' },
        { name: 'Phi Ta Khon Ghost Festival', date: 'Jun/Jul', type: 'Festival', description: 'Unique ghost festival in Dan Sai' },
      ],
    },
    {
      month: 'JULY',
      events: [
        { name: 'Asahna Bucha Day', date: 'Full moon', type: 'PUBLIC HOLIDAY', description: 'Buddha\'s first sermon. Alcohol ban' },
        { name: 'Buddhist Lent begins (Khao Phansa)', date: 'Day after Asahna', type: 'Buddhist Holiday', description: 'Monks retreat for 3 months' },
      ],
    },
    {
      month: 'AUGUST',
      events: [
        { name: 'Queen Sirikit\'s Birthday', date: 'Aug 12', type: 'PUBLIC HOLIDAY', description: 'Mother\'s Day in Thailand' },
      ],
    },
    {
      month: 'SEPTEMBER',
      events: [
        { name: 'Vegetarian Festival preparations', date: 'Late Sept', type: 'Festival Setup', description: 'Phuket prepares for October festival' },
      ],
    },
    {
      month: 'OCTOBER',
      highlight: true,
      events: [
        { name: 'VEGETARIAN FESTIVAL PHUKET', date: 'Early Oct', type: 'MAJOR EVENT', description: 'Unique to Phuket - extreme rituals, vegetarian food' },
        { name: 'Ok Phansa', date: 'Full moon', type: 'PUBLIC HOLIDAY', description: 'End of Buddhist Lent' },
        { name: 'Chulalongkorn Day', date: 'Oct 23', type: 'PUBLIC HOLIDAY', description: 'Commemorates King Rama V' },
      ],
    },
    {
      month: 'NOVEMBER',
      highlight: true,
      events: [
        { name: 'LOY KRATHONG FESTIVAL', date: 'Nov 15', type: 'MAJOR EVENT', description: 'Beautiful lantern festival - floating lights on water' },
        { name: 'YI PENG LANTERN FESTIVAL', date: 'Nov 15', type: 'MAJOR EVENT', description: 'Chiang Mai only - sky lanterns' },
        { name: 'Surin Elephant Round-Up', date: 'November', type: 'Festival', description: 'Elephant show and festival in Surin' },
      ],
    },
    {
      month: 'DECEMBER',
      events: [
        { name: 'King Bhumibol Memorial Day', date: 'Dec 5', type: 'PUBLIC HOLIDAY', description: 'Father\'s Day - commemorates beloved King Rama IX' },
        { name: 'Constitution Day', date: 'Dec 10', type: 'PUBLIC HOLIDAY', description: 'Celebrates Thailand\'s constitution' },
        { name: 'New Year\'s Eve', date: 'Dec 31', type: 'Major Celebration', description: 'Massive celebrations nationwide, especially Bangkok' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1666306/pexels-photo-1666306.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6 uppercase tracking-[3px]">
            Thailand Events Calendar 2026
          </h1>
          <p className="text-2xl sm:text-3xl text-white/90 mb-4 font-light">
            Complete Guide to Festivals, Holidays & Events in Thailand
          </p>
          <p className="text-xl text-white/80 mb-8">
            Monthly Calendar, Major Festivals & What's Happening Now
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
                  Thailand's <strong>events calendar</strong> is packed year-round with festivals, celebrations, and parties - from the world-famous Songkran water festival and magical Loy Krathong lanterns to monthly Full Moon Parties and Buddhist holidays. This complete <strong>Thailand events calendar 2026</strong> covers everything happening throughout the year, helping you plan your trip around the festivals that interest you most. Whether you want wild water fights, peaceful lantern releases, or legendary beach parties, we've got you covered.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <Info className="w-6 h-6 text-blue-600 mr-2" />
                    Bottom Line
                  </h3>
                  <p className="text-gray-700">
                    Thailand has major festivals almost every month. Best: Songkran (April), Loy Krathong (November), Full Moon Party (monthly). Plan 2-3 months ahead for festival dates (accommodation expensive). Use this calendar to find what's happening when you visit.
                  </p>
                </div>
              </div>
            </section>

            <section id="whats-happening">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-blue-600 pb-3">
                What's Happening Now
              </h2>

              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-lg shadow-2xl p-8 mb-8">
                <h3 className="text-3xl font-bold mb-6 flex items-center">
                  <PartyPopper className="w-10 h-10 mr-3" />
                  FEBRUARY 2026 (Current Month)
                </h3>

                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h4 className="text-2xl font-bold mb-3">Chinese New Year Celebrations (Feb 9-11)</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm mb-3">
                      <div><strong>Location:</strong> Bangkok Chinatown, Phuket, Hat Yai</div>
                      <div><strong>Crowd:</strong> High in Chinese areas</div>
                      <div><strong>Cost:</strong> Free (street celebrations)</div>
                      <div><strong>Best For:</strong> Foodies, culture lovers</div>
                    </div>
                    <p className="text-white/90">Dragon dances, fireworks, street food, temple visits</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h4 className="text-2xl font-bold mb-3">Chiang Mai Flower Festival (Feb 1-7)</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm mb-3">
                      <div><strong>Location:</strong> Chiang Mai</div>
                      <div><strong>Crowd:</strong> Medium</div>
                      <div><strong>Cost:</strong> Free to watch, 100 baht for park</div>
                      <div><strong>Best For:</strong> Families, photographers</div>
                    </div>
                    <p className="text-white/90">Flower parade, exhibitions, beauty pageants</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h4 className="text-2xl font-bold mb-3">Makha Bucha Day (Feb 12) - PUBLIC HOLIDAY</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm mb-3">
                      <div><strong>Location:</strong> Nationwide (temples)</div>
                      <div><strong>Crowd:</strong> Medium</div>
                      <div><strong>Cost:</strong> Free</div>
                      <div><strong>Note:</strong> Alcohol sales banned</div>
                    </div>
                    <p className="text-white/90">Buddhist holiday, candle processions at temples, government offices closed</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h4 className="text-2xl font-bold mb-3">Valentine's Day Events (Feb 14)</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm mb-3">
                      <div><strong>Location:</strong> Bangkok, islands, major cities</div>
                      <div><strong>Crowd:</strong> High at romantic spots</div>
                      <div><strong>Best For:</strong> Couples</div>
                    </div>
                    <p className="text-white/90">Special dinners, rooftop parties, romantic packages</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="upcoming">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-blue-600 pb-3">
                Upcoming Major Events
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-xl p-6 border-l-4 border-green-600">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">MARCH 2026</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-900">Pattaya Music Festival (Mid-March)</h4>
                      <p className="text-sm text-gray-700">Multi-day beach music festival, Thai and international artists. FREE entry. Best for music lovers and party seekers.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Women's Day (March 8)</h4>
                      <p className="text-sm text-gray-700">Various events, spa deals, restaurant discounts</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-lg shadow-2xl p-8">
                  <div className="flex items-center mb-4">
                    <AlertCircle className="w-10 h-10 mr-3" />
                    <h3 className="text-3xl font-bold">APRIL 2026 - SONGKRAN!</h3>
                  </div>
                  <p className="text-2xl mb-4">Songkran Festival (April 13-15) - MAJOR EVENT</p>
                  <p className="text-white/90 mb-4">Thailand's biggest festival - epic water fights nationwide</p>
                  <p className="font-bold mb-4">Book 3-6 months ahead!</p>
                  <a
                    href="/songkran-festival-thailand"
                    className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Complete Songkran Festival Guide
                  </a>
                </div>
              </div>
            </section>

            <section id="major-festivals">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-blue-600 pb-3">
                Major Festivals (Complete Guides)
              </h2>

              <p className="text-gray-700 mb-8">Top 4 festivals you can't miss:</p>

              <div className="space-y-8">
                {majorFestivals.map((festival, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className={`bg-gradient-to-r ${festival.color} text-white p-6`}>
                      <h3 className="text-3xl font-bold mb-4">{index + 1}. {festival.name}</h3>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div><strong>When:</strong> {festival.dates}</div>
                        <div><strong>Where:</strong> {festival.location}</div>
                        <div><strong>Crowd:</strong> {festival.crowd}</div>
                        <div><strong>Budget:</strong> {festival.budget}</div>
                        <div><strong>Search Volume:</strong> {festival.searches}</div>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-gray-700 mb-6">{festival.description}</p>

                      {festival.monthlyDates && (
                        <div className="bg-orange-50 rounded-lg p-4 mb-6">
                          <h4 className="font-bold text-gray-900 mb-3">2026 Full Moon Party Dates:</h4>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-700">
                            {festival.monthlyDates.map((date, i) => (
                              <div key={i} className="bg-white rounded px-3 py-1">{date}</div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-green-50 rounded-lg p-4">
                          <h4 className="font-bold text-green-900 mb-3">Why Attend:</h4>
                          <ul className="space-y-2">
                            {festival.pros.map((pro, i) => (
                              <li key={i} className="flex items-start text-sm text-gray-700">
                                <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {festival.cons.length > 0 && (
                          <div className="bg-red-50 rounded-lg p-4">
                            <h4 className="font-bold text-red-900 mb-3">Why Skip:</h4>
                            <ul className="space-y-2">
                              {festival.cons.map((con, i) => (
                                <li key={i} className="flex items-start text-sm text-gray-700">
                                  <X className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                                  <span>{con}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {festival.note && (
                        <div className="bg-blue-50 rounded-lg p-4 mb-6 border-l-4 border-blue-600">
                          <p className="text-sm text-gray-700">{festival.note}</p>
                        </div>
                      )}

                      <a
                        href={festival.link}
                        className={`inline-block bg-gradient-to-r ${festival.color} text-white font-bold px-8 py-4 rounded-lg hover:shadow-lg transition-shadow`}
                      >
                        Read Complete {festival.name} Guide
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="by-month" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-blue-600 pb-3">
                Events by Month (Full Year)
              </h2>

              <div className="space-y-6">
                {monthlyEvents.map((monthData, index) => (
                  <div
                    key={index}
                    className={`rounded-lg shadow-xl overflow-hidden ${
                      monthData.highlight ? 'border-4 border-blue-600' : 'bg-white'
                    }`}
                  >
                    <div className={`p-6 ${monthData.highlight ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white' : 'bg-gray-100'}`}>
                      <h3 className={`text-2xl font-bold ${monthData.highlight ? 'text-white' : 'text-gray-900'}`}>
                        {monthData.month}
                        {monthData.highlight && <span className="ml-3 text-sm bg-white/20 px-3 py-1 rounded-full">Major Events</span>}
                      </h3>
                    </div>
                    <div className="p-6 bg-white">
                      <div className="space-y-4">
                        {monthData.events.map((event, i) => (
                          <div key={i} className="border-l-4 border-blue-600 pl-4 py-2">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <h4 className="font-bold text-gray-900">{event.name}</h4>
                              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{event.date}</span>
                              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">{event.type}</span>
                            </div>
                            {event.description && (
                              <p className="text-sm text-gray-600">{event.description}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="by-destination" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-blue-600 pb-3">
                Events by Destination
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                    Bangkok
                  </h3>
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2">Year-Round:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Rooftop bar events</li>
                      <li>• Night markets (Rot Fai, Chatuchak Weekend)</li>
                      <li>• Concert venues (regular shows)</li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2">Major Festivals:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Songkran (April) - Silom Road, Khao San Road</li>
                      <li>• Loy Krathong (November) - Chao Phraya River</li>
                      <li>• Chinese New Year (February) - Chinatown</li>
                      <li>• New Year's Eve (December) - Central World</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <MapPin className="w-6 h-6 text-green-600 mr-2" />
                    Chiang Mai
                  </h3>
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2">Year-Round:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Sunday Walking Street (every Sunday)</li>
                      <li>• Night Bazaar (daily)</li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2">Major Festivals:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Chiang Mai Flower Festival (February)</li>
                      <li>• Songkran (April 13-16 - 4 DAYS!)</li>
                      <li>• Yi Peng + Loy Krathong (November) - BEST IN THAILAND</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <MapPin className="w-6 h-6 text-cyan-600 mr-2" />
                    Phuket
                  </h3>
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2">Year-Round:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Beach clubs (Patong, Bang Tao)</li>
                      <li>• Night markets</li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2">Major Festivals:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Songkran (April 12-15)</li>
                      <li>• Vegetarian Festival (October) - Unique to Phuket</li>
                      <li>• Loy Krathong (November)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <MapPin className="w-6 h-6 text-orange-600 mr-2" />
                    Koh Phangan
                  </h3>
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2">Monthly:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Full Moon Party (every full moon!)</li>
                      <li>• Half Moon Party (2 weeks after full moon)</li>
                      <li>• Black Moon Party (week before full moon)</li>
                    </ul>
                  </div>
                  <a
                    href="/full-moon-party-koh-phangan"
                    className="inline-block bg-orange-600 text-white font-semibold px-4 py-2 rounded hover:bg-orange-700 transition-colors text-sm"
                  >
                    Koh Phangan Party Guide
                  </a>
                </div>
              </div>
            </section>

            <section id="festival-types" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-blue-600 pb-3">
                Festival Types
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Sparkles className="w-6 h-6 text-purple-600 mr-2" />
                    Cultural Festivals
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Songkran (Thai New Year)</li>
                    <li>• Loy Krathong (Lantern festival)</li>
                    <li>• Flower Festival (Chiang Mai)</li>
                    <li>• Vegetarian Festival (Phuket)</li>
                    <li>• Phi Ta Khon (Ghost festival)</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Star className="w-6 h-6 text-amber-600 mr-2" />
                    Buddhist Holidays
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">(PUBLIC HOLIDAYS)</p>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>• Makha Bucha Day (February)</li>
                    <li>• Visakha Bucha Day (May/June)</li>
                    <li>• Asahna Bucha Day (July)</li>
                    <li>• Ok Phansa (October)</li>
                  </ul>
                  <div className="bg-yellow-50 rounded p-3">
                    <p className="text-xs text-gray-700">
                      <strong>What Happens:</strong> Temples hold ceremonies, alcohol sales banned, government offices closed, candle processions at night
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Clock className="w-6 h-6 text-blue-600 mr-2" />
                    Royal Celebrations
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">(PUBLIC HOLIDAYS)</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• King's Birthday (July 28)</li>
                    <li>• Queen's Birthday (August 12)</li>
                    <li>• Chulalongkorn Day (October 23)</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <PartyPopper className="w-6 h-6 text-red-600 mr-2" />
                    Party Events
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Full Moon Party (monthly)</li>
                    <li>• Half Moon Party (monthly)</li>
                    <li>• Pattaya Music Festival (March)</li>
                    <li>• New Year's Eve (December)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="public-holidays" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-blue-600 pb-3">
                Public Holidays 2026
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What Closes:</h3>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">CLOSED:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <X className="w-5 h-5 text-red-600 mr-2" />
                        Government Offices
                      </li>
                      <li className="flex items-center">
                        <X className="w-5 h-5 text-red-600 mr-2" />
                        Banks
                      </li>
                      <li className="flex items-center">
                        <X className="w-5 h-5 text-red-600 mr-2" />
                        Schools
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">OPEN:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <Check className="w-5 h-5 text-green-600 mr-2" />
                        Shopping Malls (most)
                      </li>
                      <li className="flex items-center">
                        <Check className="w-5 h-5 text-green-600 mr-2" />
                        Restaurants (most)
                      </li>
                      <li className="flex items-center">
                        <Check className="w-5 h-5 text-green-600 mr-2" />
                        Tourist Sites (most)
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-600">
                  <h4 className="font-bold text-gray-900 mb-2">Alcohol Ban Days:</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    No alcohol sales in stores, bars, restaurants (midnight to midnight):
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Makha Bucha Day (Feb 12)</li>
                    <li>• Visakha Bucha Day</li>
                    <li>• Asahna Bucha Day</li>
                    <li>• Buddhist Lent start</li>
                    <li>• Election days</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border-l-4 border-blue-600">
                <h3 className="text-xl font-bold text-gray-900 mb-4">2026 Public Holidays:</h3>
                <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                  <div>• Jan 1: New Year's Day</div>
                  <div>• Feb 12: Makha Bucha Day</div>
                  <div>• Apr 6: Chakri Memorial Day</div>
                  <div>• Apr 13-15: Songkran Festival</div>
                  <div>• May 1: Labour Day</div>
                  <div>• May 4: Coronation Day</div>
                  <div>• May/Jun: Visakha Bucha Day (TBD - lunar)</div>
                  <div>• Jul/Aug: Asahna Bucha Day (TBD - lunar)</div>
                  <div>• Jul/Aug: Buddhist Lent (TBD - lunar)</div>
                  <div>• Aug 12: Queen's Birthday (Mother's Day)</div>
                  <div>• Oct: Ok Phansa (TBD - lunar)</div>
                  <div>• Oct 13: King Bhumibol Memorial Day</div>
                  <div>• Oct 23: Chulalongkorn Day</div>
                  <div>• Dec 5: King's Birthday (Father's Day)</div>
                  <div>• Dec 10: Constitution Day</div>
                  <div>• Dec 31: New Year's Eve</div>
                </div>
                <p className="mt-4 text-sm font-bold text-gray-900">Total: 15-18 public holidays (some dates vary by lunar calendar)</p>
              </div>
            </section>

            <section id="planning" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-blue-600 pb-3">
                How to Plan Around Festivals
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Ahead:</h3>

                <div className="space-y-4 mb-8">
                  <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-600">
                    <h4 className="font-bold text-gray-900 mb-2">3-6 MONTHS AHEAD:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Songkran (April)</li>
                      <li>• Loy Krathong / Yi Peng (November)</li>
                      <li>• New Year's Eve (December)</li>
                      <li>• Chinese New Year (February)</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-600">
                    <h4 className="font-bold text-gray-900 mb-2">1-2 MONTHS AHEAD:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Full Moon Party (monthly)</li>
                      <li>• Vegetarian Festival (October)</li>
                      <li>• Other smaller festivals</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-lg p-4 mb-8">
                  <p className="font-bold text-gray-900 mb-2">Why:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Accommodation prices 2-3x normal during major festivals</li>
                    <li>• Sells out completely</li>
                    <li>• Best locations gone first</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">What to Expect:</h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-bold text-green-900 mb-3">PROS of visiting during festivals:</h4>
                    <ul className="space-y-2">
                      {[
                        'Unique cultural experiences',
                        'Amazing photos/memories',
                        'Festive atmosphere',
                        'Special events and activities',
                      ].map((pro, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-700">
                          <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-50 rounded-lg p-6">
                    <h4 className="font-bold text-red-900 mb-3">CONS of visiting during festivals:</h4>
                    <ul className="space-y-2">
                      {[
                        'Much more expensive (accommodation, food)',
                        'Very crowded',
                        'Hard to do other activities',
                        'Transportation more difficult',
                        'Some things closed (public holidays)',
                      ].map((con, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-700">
                          <X className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="faq" className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-blue-600 pb-3">
                Frequently Asked Questions
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8 space-y-6">
                {[
                  {
                    q: 'What\'s the best festival in Thailand?',
                    a: 'Depends on your style! Songkran = wild water fights (April). Loy Krathong = beautiful lanterns (November). Full Moon Party = legendary beach party (monthly). All worth experiencing!',
                  },
                  {
                    q: 'When should I book accommodation for festivals?',
                    a: '2-3 months ahead minimum for major festivals (Songkran, Loy Krathong). Prices double and sell out. Full Moon Party: 1-2 months ahead.',
                  },
                  {
                    q: 'Do festivals happen rain or shine?',
                    a: 'Yes. Songkran is April (hot, dry). Loy Krathong is November (cool, dry). Full Moon Party happens monthly (may be rainy season June-October).',
                  },
                  {
                    q: 'Are festivals family-friendly?',
                    a: 'Songkran: Yes (but chaotic). Loy Krathong: Very yes. Full Moon Party: NO (adults only). Most cultural festivals: Yes.',
                  },
                  {
                    q: 'What happens on public holidays?',
                    a: 'Banks and government offices closed. Malls, restaurants, tourist sites mostly open. Some Buddhist holidays = alcohol ban.',
                  },
                  {
                    q: 'Can I drink alcohol during Buddhist holidays?',
                    a: 'No alcohol sales on certain Buddhist holidays (Makha Bucha, Visakha Bucha, etc.). Ban = midnight to midnight. Hotels sometimes serve to guests.',
                  },
                  {
                    q: 'What if I want to avoid festivals?',
                    a: 'Check this calendar! May-October generally quieter (except Full Moon Party). Avoid April (Songkran), November (Loy Krathong), December (New Year).',
                  },
                  {
                    q: 'Are festivals expensive?',
                    a: 'Events themselves often free. But accommodation 2-3x normal price during major festivals. Budget accordingly.',
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Start Planning Your Festival Experience</h2>
              <p className="text-xl text-white/90 mb-8">
                Book 2-3 months ahead for major festivals!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/songkran-festival-thailand"
                  className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Songkran Festival Guide
                </a>
                <a
                  href="/loy-krathong-festival-thailand"
                  className="inline-block bg-blue-700 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors border-2 border-white"
                >
                  Loy Krathong Guide
                </a>
              </div>
            </section>

            <section className="mt-12 bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Lightbulb className="w-6 h-6 text-blue-600 mr-3" />
                Related Guides
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a
                  href="/songkran-festival-thailand"
                  className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 border-l-4 border-blue-600 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-gray-900 mb-1">Songkran Festival Complete Guide</h4>
                  <p className="text-sm text-gray-600">Thai New Year water festival - April 13-15</p>
                </a>
                <a
                  href="/loy-krathong-festival-thailand"
                  className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border-l-4 border-purple-600 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-gray-900 mb-1">Loy Krathong Festival Complete Guide</h4>
                  <p className="text-sm text-gray-600">Floating lantern festival - November</p>
                </a>
                <a
                  href="/full-moon-party-koh-phangan"
                  className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4 border-l-4 border-orange-600 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-gray-900 mb-1">Full Moon Party Complete Guide</h4>
                  <p className="text-sm text-gray-600">Monthly beach party - Safety critical!</p>
                </a>
                <a
                  href="/yi-peng-lantern-festival-chiang-mai"
                  className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg p-4 border-l-4 border-amber-600 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-gray-900 mb-1">Yi Peng Lantern Festival Guide</h4>
                  <p className="text-sm text-gray-600">Sky lanterns in Chiang Mai - November</p>
                </a>
                <a
                  href="/destinations/bangkok"
                  className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-600 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-gray-900 mb-1">Bangkok Travel Guide</h4>
                  <p className="text-sm text-gray-600">Explore Thailand's vibrant capital</p>
                </a>
                <a
                  href="/destinations/chiang-mai"
                  className="bg-gradient-to-r from-pink-50 to-cyan-50 rounded-lg p-4 border-l-4 border-[#d7007f] hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-gray-900 mb-1">Chiang Mai Travel Guide</h4>
                  <p className="text-sm text-gray-600">Northern Thailand's cultural heart</p>
                </a>
              </div>
            </section>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <TableOfContents items={tocItems} />

              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Monthly Update</h3>
                <p className="text-sm text-white/90 mb-4">
                  This page is updated monthly with current events and upcoming festivals.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded p-3 text-xs">
                  <p><strong>Last Updated:</strong> February 14, 2026</p>
                  <p><strong>Next Update:</strong> March 1, 2026</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Top 3 Festivals</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-600 pl-3">
                    <p className="font-semibold text-gray-900">Songkran</p>
                    <p className="text-sm text-gray-600">April 13-15</p>
                    <p className="text-xs text-blue-600">Water festival</p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-3">
                    <p className="font-semibold text-gray-900">Loy Krathong</p>
                    <p className="text-sm text-gray-600">November 15</p>
                    <p className="text-xs text-purple-600">Lantern festival</p>
                  </div>
                  <div className="border-l-4 border-orange-600 pl-3">
                    <p className="font-semibold text-gray-900">Full Moon Party</p>
                    <p className="text-sm text-gray-600">Monthly</p>
                    <p className="text-xs text-orange-600">Beach party</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-600 to-yellow-600 text-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Booking Reminder</h3>
                <p className="text-sm text-white/90">
                  Book 2-3 months ahead for major festivals. Prices double and accommodation sells out!
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
