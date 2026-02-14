import { MapPin, ArrowRight, Map, Palmtree, Building2, Ship, Mountain, Landmark, Trees, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import Sidebar from '../components/Sidebar';
import YouMayAlsoLike from '../components/YouMayAlsoLike';
import { usePageMeta } from '../hooks/usePageMeta';

export default function DestinationsPage() {
  usePageMeta({
    title: 'Thailand Destinations Guide 2026 - All Regions & Cities | ThailandWiki',
    description: 'Explore 50+ Thailand destinations including Bangkok, Phuket, Chiang Mai, islands, and hidden gems. Complete guides with 15,000+ articles for every region.',
  });
  const sections = [
    { id: 'central-thailand', label: 'Central Thailand' },
    { id: 'southern-thailand', label: 'Southern Islands & Beaches' },
    { id: 'northern-thailand', label: 'Northern Thailand' },
    { id: 'northeastern-thailand', label: 'Northeastern Thailand' },
    { id: 'eastern-thailand', label: 'Eastern Thailand' },
    { id: 'by-type', label: 'Browse by Type' },
    { id: 'collections', label: 'Popular Collections' }
  ];

  const destinationTypes = [
    { icon: Palmtree, label: 'Beach Destinations', count: '45' },
    { icon: Building2, label: 'Cities', count: '12' },
    { icon: Ship, label: 'Islands', count: '38' },
    { icon: Mountain, label: 'Mountains', count: '22' },
    { icon: Landmark, label: 'Historical Sites', count: '34' },
    { icon: Trees, label: 'Nature & Parks', count: '28' }
  ];

  const popularCollections = [
    {
      title: 'Top 10 Destinations in Thailand',
      description: 'Must-visit places ranked by travelers',
      guides: '2,847',
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Best Islands for First-Timers',
      description: 'Easy-to-reach tropical paradises',
      guides: '1,245',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Most Underrated Destinations',
      description: 'Hidden gems off the beaten path',
      guides: '678',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Best for Families',
      description: 'Kid-friendly destinations & activities',
      guides: '934',
      image: 'https://images.unsplash.com/photo-1537956965359-7573183d1f57?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Best for Solo Travelers',
      description: 'Safe, social, and exciting spots',
      guides: '1,123',
      image: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Best for Couples',
      description: 'Romantic getaways and experiences',
      guides: '1,456',
      image: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Budget-Friendly Destinations',
      description: 'Amazing places that won\'t break the bank',
      guides: '845',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Luxury Destinations',
      description: 'Premium experiences and resorts',
      guides: '1,089',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Digital Nomad Hotspots',
      description: 'Great WiFi, coworking, and community',
      guides: '567',
      image: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const youMayAlsoLike = [
    { title: 'Bangkok 3-Day Itinerary', path: '/itineraries' },
    { title: 'Best Islands in Thailand', path: '/destinations' },
    { title: 'Thailand Travel Planning Guide', path: '/travel-planning' },
    { title: 'Best Time to Visit Each Region', path: '/best-time-to-visit' },
    { title: 'Beach vs Mountain Destinations', path: '/things-to-do' },
    { title: 'Hidden Gems in Thailand', path: '/destinations' }
  ];

  const regions = [
    {
      id: 'central-thailand',
      name: 'Central Thailand',
      guides: '8,500',
      image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1400&q=80',
      description: 'Thailand\'s heart with the capital city, ancient capitals, and floating markets.',
      destinations: [
        { name: 'Bangkok', guides: '3,847', description: 'Vibrant capital city' },
        { name: 'Ayutthaya', guides: '389', description: 'Ancient capital ruins' },
        { name: 'Kanchanaburi', guides: '267', description: 'River Kwai, history' },
        { name: 'Hua Hin', guides: '892', description: 'Royal beach resort' },
        { name: 'Pattaya', guides: '1,289', description: 'Coastal entertainment' },
        { name: 'Sukhothai', guides: '445', description: 'Historic park' }
      ]
    },
    {
      id: 'southern-thailand',
      name: 'Southern Thailand - Islands & Beaches',
      guides: '9,200',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1400&q=80',
      description: 'World-famous beaches, tropical islands, and diving paradise.',
      destinations: [
        { name: 'Phuket', guides: '2,634', description: 'Largest island, beaches' },
        { name: 'Koh Samui', guides: '1,456', description: 'Luxury island resort' },
        { name: 'Krabi', guides: '1,034', description: 'Limestone cliffs, beaches' },
        { name: 'Koh Phi Phi', guides: '678', description: 'Iconic island beauty' },
        { name: 'Koh Lanta', guides: '445', description: 'Laid-back island' },
        { name: 'Koh Tao', guides: '523', description: 'Diving paradise' },
        { name: 'Khao Lak', guides: '289', description: 'Quiet beaches' }
      ]
    },
    {
      id: 'northern-thailand',
      name: 'Northern Thailand',
      guides: '5,800',
      image: 'https://images.unsplash.com/photo-1563492065211-f9e8c4cf4a4d?auto=format&fit=crop&w=1400&q=80',
      description: 'Mountain temples, hill tribes, and natural beauty in the cooler highlands.',
      destinations: [
        { name: 'Chiang Mai', guides: '2,845', description: 'Cultural capital' },
        { name: 'Chiang Rai', guides: '934', description: 'Golden Triangle, temples' },
        { name: 'Pai', guides: '567', description: 'Hippie mountain town' },
        { name: 'Mae Hong Son', guides: '334', description: 'Remote mountain loop' },
        { name: 'Lampang', guides: '223', description: 'Temple town' }
      ]
    },
    {
      id: 'northeastern-thailand',
      name: 'Northeastern Thailand (Isaan)',
      guides: '2,400',
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1400&q=80',
      description: 'Authentic Thai culture, Khmer ruins, and fiery cuisine in the rural heartland.',
      destinations: [
        { name: 'Nong Khai', guides: '445', description: 'Mekong River views' },
        { name: 'Udon Thani', guides: '356', description: 'Gateway to Isaan' },
        { name: 'Khon Kaen', guides: '312', description: 'University city' },
        { name: 'Nakhon Ratchasima', guides: '534', description: 'Khmer ruins' },
        { name: 'Ubon Ratchathani', guides: '289', description: 'Candle festival' }
      ]
    },
    {
      id: 'eastern-thailand',
      name: 'Eastern Thailand',
      guides: '1,900',
      image: 'https://images.unsplash.com/photo-1537956965359-7573183d1f57?auto=format&fit=crop&w=1400&q=80',
      description: 'Beach towns, tropical fruit orchards, and lesser-known coastal gems.',
      destinations: [
        { name: 'Koh Chang', guides: '678', description: 'Jungle island' },
        { name: 'Koh Samet', guides: '445', description: 'Weekend getaway' },
        { name: 'Rayong', guides: '267', description: 'Fruit capital' },
        { name: 'Trat', guides: '223', description: 'Border town, islands' },
        { name: 'Chanthaburi', guides: '178', description: 'Gem trading' }
      ]
    }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Destinations' }]} />

      <section
        className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=2400&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#252525]/80 via-[#252525]/60 to-[#252525]/90"></div>

        <div className="relative z-10 max-w-[1700px] mx-auto px-6 lg:px-12 text-center text-white py-32">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Map className="w-8 h-8 text-[#F4A261]" />
            <span className="text-lg uppercase tracking-[2px] text-[#F4A261]">Directory</span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-8 uppercase tracking-[2px] leading-tight">
            Thailand
            <br />
            <span className="text-[#2B5D8C]">Destinations</span>
          </h1>
          <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto font-light leading-relaxed">
            Explore Cities, Islands, Beaches & Hidden Gems
          </p>
          <div className="flex items-center justify-center gap-6 text-lg font-light">
            <span className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#F4A261]" />
              50+ Destinations
            </span>
            <span className="text-gray-400">|</span>
            <span>15,000+ Guides</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            <div>
              <div className="max-w-4xl mb-20">
                <p className="text-xl text-gray-700 leading-relaxed font-light mb-6">
                  From bustling Bangkok to pristine islands, ancient cities to mountain villages, Thailand offers incredible diversity. Browse our complete directory of destinations organized by region to plan your perfect trip.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed font-light">
                  Each destination includes comprehensive guides covering attractions, accommodation, transportation, food, and insider tips from experienced travelers.
                </p>
              </div>

              <div className="space-y-16">
                {regions.map((region, index) => (
                  <div key={index} id={region.id} className="scroll-mt-24">
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                      <div className="order-2 md:order-1">
                        <div className="flex items-baseline gap-3 mb-4">
                          <h2 className="text-4xl font-light text-[#252525] uppercase tracking-[2px]">
                            {region.name}
                          </h2>
                        </div>
                        <div className="flex items-center gap-2 mb-6">
                          <span className="inline-block px-3 py-1 bg-pink-100 text-[#2B5D8C] rounded-full text-sm font-medium">
                            {region.guides} guides
                          </span>
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">
                          {region.description}
                        </p>

                        <div className="space-y-3 mb-8">
                          <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
                            Major Destinations
                          </h3>
                          {region.destinations.map((dest, idx) => (
                            <div key={idx} className="flex items-start justify-between p-4 bg-gray-50 rounded-lg hover:bg-pink-50 transition-colors group border border-gray-100">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-1">
                                  <span className="font-semibold text-gray-900 group-hover:text-[#2B5D8C] transition-colors">
                                    {dest.name}
                                  </span>
                                  <span className="text-sm text-gray-500">
                                    ({dest.guides} guides)
                                  </span>
                                </div>
                                <p className="text-sm text-gray-600">
                                  {dest.description}
                                </p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#2B5D8C] group-hover:translate-x-1 transition-all flex-shrink-0 ml-4 mt-1" />
                            </div>
                          ))}
                        </div>

                        <Link
                          to={`/destinations/${region.id}`}
                          className="inline-flex items-center gap-2 text-[#2B5D8C] hover:text-[#2B5D8C] font-medium transition-colors"
                        >
                          Explore {region.name}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>

                      <div className="order-1 md:order-2">
                        <div className="relative h-[400px] overflow-hidden rounded-lg shadow-lg">
                          <img
                            src={region.image}
                            alt={region.name}
                            loading="lazy"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#252525]/60 to-transparent"></div>
                          <div className="absolute bottom-6 left-6 right-6">
                            <div className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg">
                              <span className="text-2xl font-bold text-[#252525]">
                                {region.guides}
                              </span>
                              <span className="text-gray-600 ml-2">guides</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {index < regions.length - 1 && (
                      <div className="mt-16 border-b border-gray-200"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block">
              <Sidebar sections={sections} />
            </div>
          </div>
        </div>
      </section>

      <section id="by-type" className="py-20 bg-gradient-to-b from-white to-gray-50 scroll-mt-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 uppercase tracking-[2px] text-[#252525]">
              Browse by
              <br />
              <span className="text-[#2B5D8C]">Destination Type</span>
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Find destinations based on your travel style and interests
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {destinationTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <Link
                  key={index}
                  to="/destinations"
                  className="group flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-pink-200"
                >
                  <div className="w-14 h-14 rounded-full bg-pink-50 flex items-center justify-center mb-4 group-hover:bg-pink-100 transition-colors">
                    <IconComponent className="w-7 h-7 text-[#2B5D8C]" />
                  </div>
                  <span className="text-sm font-semibold text-gray-900 text-center mb-2 group-hover:text-[#2B5D8C] transition-colors">
                    {type.label}
                  </span>
                  <span className="text-xs text-gray-500">
                    {type.count} destinations
                  </span>
                </Link>
              );
            })}
          </div>

          <div id="collections" className="text-center mb-20 scroll-mt-24">
            <h2 className="text-4xl md:text-5xl font-light mb-6 uppercase tracking-[2px] text-[#252525]">
              Popular
              <br />
              <span className="text-[#2B5D8C]">Collections</span>
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Curated destination guides for every type of traveler
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {popularCollections.map((collection, index) => (
              <Link
                key={index}
                to="/destinations"
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#252525]/80 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-900">
                      {collection.guides} guides
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#2B5D8C] transition-colors">
                    {collection.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {collection.description}
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-[#2B5D8C] group-hover:text-[#2B5D8C] transition-colors font-medium">
                    View Collection
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 text-[#2B5D8C] hover:text-[#2B5D8C] font-semibold text-lg"
            >
              View All Collections
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#2B5D8C] to-[#2B5D8C] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-light mb-2 uppercase tracking-[2px]">
                  Need help choosing where to go?
                </h3>
                <p className="text-lg text-pink-100 font-light">
                  Chat with our Thailand experts for personalized recommendations
                </p>
              </div>
            </div>
            <Link
              to="/contact"
              className="flex-shrink-0 px-8 py-4 bg-white text-[#2B5D8C] hover:bg-[#F4A261] hover:text-white transition-all rounded-lg font-semibold shadow-lg hover:shadow-xl inline-flex items-center gap-2 uppercase tracking-[1.5px]"
            >
              Ask Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <YouMayAlsoLike articles={youMayAlsoLike} />

      <div className="block lg:hidden bg-gray-50 py-12">
        <div className="max-w-[1400px] mx-auto px-6 space-y-6">
          <Sidebar sections={sections} />
        </div>
      </div>

      <section className="py-32 bg-[#252525] text-white">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-light mb-8 uppercase tracking-[2px] leading-tight">
              Need Help
              <br />
              <span className="text-[#F4A261]">Planning?</span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 font-light leading-relaxed text-gray-300">
              Our travel experts can help you create the perfect Thailand itinerary
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-3">
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
