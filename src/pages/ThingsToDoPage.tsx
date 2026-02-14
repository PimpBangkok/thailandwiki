import { ArrowRight, Waves, Mountain, Landmark, UtensilsCrossed, PartyPopper, Heart, ShoppingBag, Sparkles, MapPin } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import RelatedGuides from '../components/RelatedGuides';
import { usePageMeta } from '../hooks/usePageMeta';

export default function ThingsToDoPage() {
  usePageMeta({
    title: 'Things to Do in Thailand 2026 - Activities & Experiences Guide | ThailandWiki',
    description: 'Discover the best activities and experiences in Thailand. From water sports to cultural tours, temples to nightlife. Find your perfect Thailand adventure.',
  });
  const relatedGuides = [
    {
      title: 'Best Islands in Thailand',
      excerpt: 'Discover Thailand\'s most beautiful islands, from party hotspots to secluded paradises. Compare Phuket, Koh Samui, Koh Phi Phi, and more.',
      image: 'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/destinations/phuket'
    },
    {
      title: 'Thailand Scuba Diving Guide',
      excerpt: 'Complete guide to diving in Thailand. Best dive sites, PADI certification, liveaboards, and underwater photography tips.',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/things-to-do'
    },
    {
      title: 'Bangkok Nightlife Guide',
      excerpt: 'Navigate Bangkok\'s legendary nightlife scene. Rooftop bars, nightclubs, live music venues, and late-night street food spots.',
      image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/bangkok'
    },
    {
      title: 'Thailand Food Tours',
      excerpt: 'Guided food tours in Bangkok, Chiang Mai, and Phuket. Learn about Thai cuisine, street food etiquette, and local favorites.',
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/food'
    }
  ];

  return (
    <>
      <section className="relative h-[60vh] min-h-[500px] bg-gray-900">
        <div className="absolute inset-0">
          <img
            loading="lazy"
            src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Things to do in Thailand"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 uppercase tracking-widest">
              Things to Do in Thailand
            </h1>
            <p className="text-xl md:text-2xl text-white font-light mb-8 tracking-wide">
              Discover Activities, Experiences & Adventures
            </p>
            <p className="text-lg text-[#d7007f] uppercase tracking-widest font-medium">
              4,200 Activity Guides
            </p>
          </div>
        </div>
      </section>

      <Breadcrumb
        items={[
          { label: 'Home', path: '/' },
          { label: 'Things to Do' }
        ]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed text-center">
              From world-class diving and island hopping to ancient temple tours and electrifying
              nightlife, Thailand offers endless ways to spend your time. Whether you're seeking
              adventure, cultural immersion, culinary experiences, or pure relaxation, our comprehensive
              guides help you discover the best activities across Thailand.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-gray-900 uppercase tracking-wide text-center">
            Activity Categories
          </h2>

          <div className="space-y-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="grid md:grid-cols-2">
                <div className="relative h-80 md:h-full overflow-hidden">
                  <img
                    loading="lazy"
                    src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1000"
                    alt="Water activities in Thailand"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-6 left-6 bg-[#d7007f] text-white p-4 rounded-full shadow-xl">
                    <Waves className="w-8 h-8" />
                  </div>
                </div>

                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 uppercase tracking-wide">
                    Water Activities
                  </h3>
                  <p className="text-sm text-[#d7007f] uppercase tracking-wider mb-6 font-medium">
                    500 guides
                  </p>
                  <p className="text-lg text-gray-700 font-light leading-relaxed mb-6">
                    Explore Thailand's incredible marine life and water sports
                  </p>

                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                      Popular Activities:
                    </h4>
                    <div className="space-y-2 text-gray-700">
                      <p className="font-light">• Scuba Diving & Snorkeling <span className="text-gray-500">(120 guides)</span></p>
                      <p className="font-light">• Beach Activities <span className="text-gray-500">(100 guides)</span></p>
                      <p className="font-light">• Boat Tours & Cruises <span className="text-gray-500">(80 guides)</span></p>
                      <p className="font-light">• Water Sports <span className="text-gray-500">(80 guides)</span></p>
                      <p className="font-light">• Island Hopping <span className="text-gray-500">(70 guides)</span></p>
                      <p className="font-light">• Sailing & Kayaking <span className="text-gray-500">(50 guides)</span></p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <p className="text-sm text-gray-600 font-light">
                      <span className="font-semibold">Top Destinations:</span> Phuket, Koh Tao, Koh Lanta, Similan Islands
                    </p>
                  </div>

                  <div>
                    <a
                      href="#water-activities"
                      className="inline-flex items-center space-x-2 bg-[#d7007f] text-white px-8 py-4 rounded-lg hover:bg-[#d7007f] transition-colors font-medium uppercase text-sm tracking-wider shadow-lg hover:shadow-xl"
                    >
                      <span>Explore Water Activities</span>
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="grid md:grid-cols-2">
                <div className="relative h-80 md:h-full overflow-hidden md:order-2">
                  <img
                    loading="lazy"
                    src="https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=1000"
                    alt="Adventure and outdoor activities"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-6 left-6 bg-[#d7007f] text-white p-4 rounded-full shadow-xl">
                    <Mountain className="w-8 h-8" />
                  </div>
                </div>

                <div className="p-8 md:p-10 flex flex-col justify-center md:order-1">
                  <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 uppercase tracking-wide">
                    Adventure & Outdoor
                  </h3>
                  <p className="text-sm text-[#d7007f] uppercase tracking-wider mb-6 font-medium">
                    400 guides
                  </p>
                  <p className="text-lg text-gray-700 font-light leading-relaxed mb-6">
                    Trekking, climbing, and adrenaline-pumping experiences
                  </p>

                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                      Popular Activities:
                    </h4>
                    <div className="space-y-2 text-gray-700">
                      <p className="font-light">• Trekking & Hiking <span className="text-gray-500">(100 guides)</span></p>
                      <p className="font-light">• Rock Climbing <span className="text-gray-500">(60 guides)</span></p>
                      <p className="font-light">• Zip Lining & Canopy Tours <span className="text-gray-500">(50 guides)</span></p>
                      <p className="font-light">• ATV & Off-Road <span className="text-gray-500">(40 guides)</span></p>
                      <p className="font-light">• Jungle Adventures <span className="text-gray-500">(40 guides)</span></p>
                      <p className="font-light">• Camping & Nature <span className="text-gray-500">(30 guides)</span></p>
                      <p className="font-light">• Caving <span className="text-gray-500">(30 guides)</span></p>
                      <p className="font-light">• White Water Rafting <span className="text-gray-500">(25 guides)</span></p>
                      <p className="font-light">• Bungee Jumping & Skydiving <span className="text-gray-500">(25 guides)</span></p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <p className="text-sm text-gray-600 font-light">
                      <span className="font-semibold">Top Destinations:</span> Chiang Mai, Krabi, Khao Sok, Pai
                    </p>
                  </div>

                  <div>
                    <a
                      href="#adventure-activities"
                      className="inline-flex items-center space-x-2 bg-[#d7007f] text-white px-8 py-4 rounded-lg hover:bg-[#d7007f] transition-colors font-medium uppercase text-sm tracking-wider shadow-lg hover:shadow-xl"
                    >
                      <span>Explore Adventures</span>
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="grid md:grid-cols-2">
                <div className="relative h-80 md:h-full overflow-hidden">
                  <img
                    loading="lazy"
                    src="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1000"
                    alt="Thai temples and cultural heritage"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-6 left-6 bg-[#d7007f] text-white p-4 rounded-full shadow-xl">
                    <Landmark className="w-8 h-8" />
                  </div>
                </div>

                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 uppercase tracking-wide">
                    Culture & Temples
                  </h3>
                  <p className="text-sm text-[#d7007f] uppercase tracking-wider mb-6 font-medium">
                    500 guides
                  </p>
                  <p className="text-lg text-gray-700 font-light leading-relaxed mb-6">
                    Discover Thailand's rich cultural heritage
                  </p>

                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                      Popular Experiences:
                    </h4>
                    <div className="space-y-2 text-gray-700">
                      <p className="font-light">• Temple Visits & Tours <span className="text-gray-500">(150 guides)</span></p>
                      <p className="font-light">• Cultural Experiences <span className="text-gray-500">(100 guides)</span></p>
                      <p className="font-light">• Festivals & Events <span className="text-gray-500">(80 guides)</span></p>
                      <p className="font-light">• Museums & Galleries <span className="text-gray-500">(70 guides)</span></p>
                      <p className="font-light">• Traditional Performances <span className="text-gray-500">(50 guides)</span></p>
                      <p className="font-light">• Historical Sites <span className="text-gray-500">(50 guides)</span></p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <p className="text-sm text-gray-600 font-light">
                      <span className="font-semibold">Top Destinations:</span> Bangkok, Chiang Mai, Ayutthaya, Sukhothai
                    </p>
                  </div>

                  <div>
                    <a
                      href="#culture-temples"
                      className="inline-flex items-center space-x-2 bg-[#d7007f] text-white px-8 py-4 rounded-lg hover:bg-[#d7007f] transition-colors font-medium uppercase text-sm tracking-wider shadow-lg hover:shadow-xl"
                    >
                      <span>Discover Culture</span>
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="grid md:grid-cols-2">
                <div className="relative h-80 md:h-full overflow-hidden md:order-2">
                  <img
                    loading="lazy"
                    src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1000"
                    alt="Thai cooking class and food experiences"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-6 left-6 bg-[#d7007f] text-white p-4 rounded-full shadow-xl">
                    <UtensilsCrossed className="w-8 h-8" />
                  </div>
                </div>

                <div className="p-8 md:p-10 flex flex-col justify-center md:order-1">
                  <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 uppercase tracking-wide">
                    Food Experiences
                  </h3>
                  <p className="text-sm text-[#d7007f] uppercase tracking-wider mb-6 font-medium">
                    350 guides
                  </p>
                  <p className="text-lg text-gray-700 font-light leading-relaxed mb-6">
                    Learn, taste, and explore Thai cuisine
                  </p>

                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                      Popular Experiences:
                    </h4>
                    <div className="space-y-2 text-gray-700">
                      <p className="font-light">• Thai Cooking Classes <span className="text-gray-500">(120 guides)</span></p>
                      <p className="font-light">• Food Tours <span className="text-gray-500">(100 guides)</span></p>
                      <p className="font-light">• Market Visits <span className="text-gray-500">(60 guides)</span></p>
                      <p className="font-light">• Street Food Adventures <span className="text-gray-500">(50 guides)</span></p>
                      <p className="font-light">• Fine Dining Experiences <span className="text-gray-500">(20 guides)</span></p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <p className="text-sm text-gray-600 font-light">
                      <span className="font-semibold">Top Destinations:</span> Bangkok, Chiang Mai, Phuket
                    </p>
                  </div>

                  <div>
                    <a
                      href="#food-experiences"
                      className="inline-flex items-center space-x-2 bg-[#d7007f] text-white px-8 py-4 rounded-lg hover:bg-[#d7007f] transition-colors font-medium uppercase text-sm tracking-wider shadow-lg hover:shadow-xl"
                    >
                      <span>Explore Food Experiences</span>
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="grid md:grid-cols-2">
                <div className="relative h-80 md:h-full overflow-hidden">
                  <img
                    loading="lazy"
                    src="https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=1000"
                    alt="Nightlife scene and rooftop bar"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-6 left-6 bg-[#d7007f] text-white p-4 rounded-full shadow-xl">
                    <PartyPopper className="w-8 h-8" />
                  </div>
                </div>

                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 uppercase tracking-wide">
                    Nightlife & Entertainment
                  </h3>
                  <p className="text-sm text-[#d7007f] uppercase tracking-wider mb-6 font-medium">
                    600 guides
                  </p>
                  <p className="text-lg text-gray-700 font-light leading-relaxed mb-6">
                    Thailand's legendary nightlife and entertainment
                  </p>

                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                      Popular Options:
                    </h4>
                    <div className="space-y-2 text-gray-700">
                      <p className="font-light">• Nightclubs & Bars <span className="text-gray-500">(200 guides)</span></p>
                      <p className="font-light">• Live Music Venues <span className="text-gray-500">(100 guides)</span></p>
                      <p className="font-light">• Beach Clubs <span className="text-gray-500">(80 guides)</span></p>
                      <p className="font-light">• Night Markets <span className="text-gray-500">(80 guides)</span></p>
                      <p className="font-light">• Rooftop Bars <span className="text-gray-500">(60 guides)</span></p>
                      <p className="font-light">• Cabaret Shows <span className="text-gray-500">(50 guides)</span></p>
                      <p className="font-light">• Jazz & Blues Clubs <span className="text-gray-500">(30 guides)</span></p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <p className="text-sm text-gray-600 font-light">
                      <span className="font-semibold">Top Destinations:</span> Bangkok, Phuket, Pattaya, Koh Samui
                    </p>
                  </div>

                  <div>
                    <a
                      href="#nightlife-entertainment"
                      className="inline-flex items-center space-x-2 bg-[#d7007f] text-white px-8 py-4 rounded-lg hover:bg-[#d7007f] transition-colors font-medium uppercase text-sm tracking-wider shadow-lg hover:shadow-xl"
                    >
                      <span>Discover Nightlife</span>
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="grid md:grid-cols-2">
                <div className="relative h-80 md:h-full overflow-hidden md:order-2">
                  <img
                    loading="lazy"
                    src="https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=1000"
                    alt="Spa, yoga, and wellness"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-6 left-6 bg-[#d7007f] text-white p-4 rounded-full shadow-xl">
                    <Heart className="w-8 h-8" />
                  </div>
                </div>

                <div className="p-8 md:p-10 flex flex-col justify-center md:order-1">
                  <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 uppercase tracking-wide">
                    Wellness & Relaxation
                  </h3>
                  <p className="text-sm text-[#d7007f] uppercase tracking-wider mb-6 font-medium">
                    300 guides
                  </p>
                  <p className="text-lg text-gray-700 font-light leading-relaxed mb-6">
                    Rejuvenate mind, body, and spirit
                  </p>

                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                      Popular Experiences:
                    </h4>
                    <div className="space-y-2 text-gray-700">
                      <p className="font-light">• Spa & Thai Massage <span className="text-gray-500">(120 guides)</span></p>
                      <p className="font-light">• Yoga Retreats <span className="text-gray-500">(70 guides)</span></p>
                      <p className="font-light">• Meditation Centers <span className="text-gray-500">(50 guides)</span></p>
                      <p className="font-light">• Wellness Resorts <span className="text-gray-500">(40 guides)</span></p>
                      <p className="font-light">• Detox Programs <span className="text-gray-500">(20 guides)</span></p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <p className="text-sm text-gray-600 font-light">
                      <span className="font-semibold">Top Destinations:</span> Koh Samui, Chiang Mai, Phuket
                    </p>
                  </div>

                  <div>
                    <a
                      href="#wellness-relaxation"
                      className="inline-flex items-center space-x-2 bg-[#d7007f] text-white px-8 py-4 rounded-lg hover:bg-[#d7007f] transition-colors font-medium uppercase text-sm tracking-wider shadow-lg hover:shadow-xl"
                    >
                      <span>Explore Wellness</span>
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="grid md:grid-cols-2">
                <div className="relative h-80 md:h-full overflow-hidden">
                  <img
                    loading="lazy"
                    src="https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=1000"
                    alt="Night market and shopping scene"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-6 left-6 bg-[#d7007f] text-white p-4 rounded-full shadow-xl">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                </div>

                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 uppercase tracking-wide">
                    Shopping
                  </h3>
                  <p className="text-sm text-[#d7007f] uppercase tracking-wider mb-6 font-medium">
                    400 guides
                  </p>
                  <p className="text-lg text-gray-700 font-light leading-relaxed mb-6">
                    From night markets to luxury malls
                  </p>

                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                      Shopping Options:
                    </h4>
                    <div className="space-y-2 text-gray-700">
                      <p className="font-light">• Night Markets <span className="text-gray-500">(100 guides)</span></p>
                      <p className="font-light">• Weekend Markets <span className="text-gray-500">(80 guides)</span></p>
                      <p className="font-light">• Shopping Malls <span className="text-gray-500">(80 guides)</span></p>
                      <p className="font-light">• Local Markets <span className="text-gray-500">(60 guides)</span></p>
                      <p className="font-light">• Handicrafts & Souvenirs <span className="text-gray-500">(50 guides)</span></p>
                      <p className="font-light">• Floating Markets <span className="text-gray-500">(30 guides)</span></p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <p className="text-sm text-gray-600 font-light">
                      <span className="font-semibold">Top Destinations:</span> Bangkok, Chiang Mai, Phuket
                    </p>
                  </div>

                  <div>
                    <a
                      href="#shopping"
                      className="inline-flex items-center space-x-2 bg-[#d7007f] text-white px-8 py-4 rounded-lg hover:bg-[#d7007f] transition-colors font-medium uppercase text-sm tracking-wider shadow-lg hover:shadow-xl"
                    >
                      <span>Shopping Guides</span>
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="grid md:grid-cols-2">
                <div className="relative h-80 md:h-full overflow-hidden md:order-2">
                  <img
                    loading="lazy"
                    src="https://images.pexels.com/photos/1118877/pexels-photo-1118877.jpeg?auto=compress&cs=tinysrgb&w=1000"
                    alt="Unique Thailand activity - hot air balloon and elephant sanctuary"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-6 left-6 bg-[#d7007f] text-white p-4 rounded-full shadow-xl">
                    <Sparkles className="w-8 h-8" />
                  </div>
                </div>

                <div className="p-8 md:p-10 flex flex-col justify-center md:order-1">
                  <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 uppercase tracking-wide">
                    Unique Experiences
                  </h3>
                  <p className="text-sm text-[#d7007f] uppercase tracking-wider mb-6 font-medium">
                    400 guides
                  </p>
                  <p className="text-lg text-gray-700 font-light leading-relaxed mb-6">
                    One-of-a-kind Thailand experiences
                  </p>

                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                      Popular Experiences:
                    </h4>
                    <div className="space-y-2 text-gray-700">
                      <p className="font-light">• Luxury Experiences <span className="text-gray-500">(70 guides)</span></p>
                      <p className="font-light">• Elephant Sanctuaries (Ethical) <span className="text-gray-500">(60 guides)</span></p>
                      <p className="font-light">• Muay Thai Training & Shows <span className="text-gray-500">(50 guides)</span></p>
                      <p className="font-light">• Group & Corporate Activities <span className="text-gray-500">(50 guides)</span></p>
                      <p className="font-light">• Photography Tours <span className="text-gray-500">(40 guides)</span></p>
                      <p className="font-light">• Volunteering Opportunities <span className="text-gray-500">(30 guides)</span></p>
                      <p className="font-light">• Tiger Kingdom <span className="text-gray-500">(30 guides)</span></p>
                      <p className="font-light">• Scenic Flights <span className="text-gray-500">(25 guides)</span></p>
                      <p className="font-light">• Farm Visits <span className="text-gray-500">(25 guides)</span></p>
                      <p className="font-light">• Hot Air Ballooning <span className="text-gray-500">(20 guides)</span></p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <p className="text-sm text-gray-600 font-light">
                      <span className="font-semibold">Top Destinations:</span> Nationwide
                    </p>
                  </div>

                  <div>
                    <a
                      href="#unique-experiences"
                      className="inline-flex items-center space-x-2 bg-[#d7007f] text-white px-8 py-4 rounded-lg hover:bg-[#d7007f] transition-colors font-medium uppercase text-sm tracking-wider shadow-lg hover:shadow-xl"
                    >
                      <span>Explore Unique Experiences</span>
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 uppercase tracking-widest">
              Find Activities by Destination
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Browse activities organized by Thailand's top destinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#d7007f] hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-[#d7007f] text-white p-3 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-light text-gray-900 uppercase tracking-wide">Bangkok</h3>
                  <p className="text-sm text-[#d7007f] font-medium">800 guides</p>
                </div>
              </div>
              <p className="text-gray-600 font-light mb-6 leading-relaxed">
                Temples, food tours, nightlife, shopping, river cruises, markets
              </p>
              <a
                href="/bangkok"
                className="inline-flex items-center space-x-2 text-[#d7007f] hover:text-[#d7007f] font-medium transition-colors"
              >
                <span>Explore Bangkok Activities</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#d7007f] hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-[#d7007f] text-white p-3 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-light text-gray-900 uppercase tracking-wide">Phuket</h3>
                  <p className="text-sm text-[#d7007f] font-medium">600 guides</p>
                </div>
              </div>
              <p className="text-gray-600 font-light mb-6 leading-relaxed">
                Beaches, island hopping, water sports, diving, nightlife, boat tours
              </p>
              <a
                href="/phuket"
                className="inline-flex items-center space-x-2 text-[#d7007f] hover:text-[#d7007f] font-medium transition-colors"
              >
                <span>Explore Phuket Activities</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#d7007f] hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-[#d7007f] text-white p-3 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-light text-gray-900 uppercase tracking-wide">Chiang Mai</h3>
                  <p className="text-sm text-[#d7007f] font-medium">450 guides</p>
                </div>
              </div>
              <p className="text-gray-600 font-light mb-6 leading-relaxed">
                Trekking, temples, cooking classes, night markets, elephant sanctuaries
              </p>
              <a
                href="#chiang-mai"
                className="inline-flex items-center space-x-2 text-[#d7007f] hover:text-[#d7007f] font-medium transition-colors"
              >
                <span>Explore Chiang Mai Activities</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#d7007f] hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-[#d7007f] text-white p-3 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-light text-gray-900 uppercase tracking-wide">Koh Samui</h3>
                  <p className="text-sm text-[#d7007f] font-medium">300 guides</p>
                </div>
              </div>
              <p className="text-gray-600 font-light mb-6 leading-relaxed">
                Beaches, water sports, wellness retreats, island tours, nightlife
              </p>
              <a
                href="#koh-samui"
                className="inline-flex items-center space-x-2 text-[#d7007f] hover:text-[#d7007f] font-medium transition-colors"
              >
                <span>Explore Koh Samui Activities</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#d7007f] hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-[#d7007f] text-white p-3 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-light text-gray-900 uppercase tracking-wide">Pattaya</h3>
                  <p className="text-sm text-[#d7007f] font-medium">250 guides</p>
                </div>
              </div>
              <p className="text-gray-600 font-light mb-6 leading-relaxed">
                Beaches, water sports, shows, nightlife, day trips
              </p>
              <a
                href="#pattaya"
                className="inline-flex items-center space-x-2 text-[#d7007f] hover:text-[#d7007f] font-medium transition-colors"
              >
                <span>Explore Pattaya Activities</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#d7007f] hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-[#d7007f] text-white p-3 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-light text-gray-900 uppercase tracking-wide">Krabi</h3>
                  <p className="text-sm text-[#d7007f] font-medium">200 guides</p>
                </div>
              </div>
              <p className="text-gray-600 font-light mb-6 leading-relaxed">
                Rock climbing, beaches, island hopping, kayaking, trekking
              </p>
              <a
                href="#krabi"
                className="inline-flex items-center space-x-2 text-[#d7007f] hover:text-[#d7007f] font-medium transition-colors"
              >
                <span>Explore Krabi Activities</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#all-destinations"
              className="inline-flex items-center space-x-2 bg-[#d7007f] text-white px-10 py-4 rounded-lg hover:bg-[#d7007f] transition-colors font-medium uppercase text-sm tracking-wider shadow-lg hover:shadow-xl"
            >
              <span>View All Destinations</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <RelatedGuides guides={relatedGuides} />

      <section className="py-16 md:py-24 bg-gradient-to-br from-pink-50 to-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto bg-white border-2 border-[#d7007f] rounded-2xl p-12 shadow-xl text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-900 uppercase tracking-wide">
              Need Help Planning Your Activities?
            </h2>
            <p className="text-lg text-gray-700 font-light leading-relaxed mb-8">
              Not sure which activities to book? Chat with our Thailand experts<br />
              for personalized recommendations!
            </p>
            <a href="/contact" className="inline-flex items-center space-x-2 bg-[#d7007f] text-white px-10 py-5 rounded-lg hover:bg-[#d7007f] transition-colors font-medium uppercase text-sm tracking-wider shadow-lg hover:shadow-xl">
              <span>Ask a Question</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
