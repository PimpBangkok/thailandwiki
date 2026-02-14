import { ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { usePageMeta } from '../hooks/usePageMeta';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  usePageMeta({
    title: 'ThailandWiki - Complete Thailand Travel Guide 2026 | 24,000+ Articles',
    description: 'Your complete guide to Thailand with 24,000+ articles covering destinations, travel tips, culture, food, and practical information. Plan your perfect Thailand trip.',
  });

  const popularSearches = [
    { text: 'Bangkok Guide', link: '/destinations/bangkok' },
    { text: 'Phuket Beaches', link: '/destinations/phuket' },
    { text: 'Thailand Visa', link: '/visa-guide' },
    { text: 'Best Islands', link: '/destinations' },
    { text: 'Street Food', link: '/food-dining' }
  ];

  return (
    <>
      <section
        className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=2400&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#252525]/70 via-[#252525]/50 to-[#252525]/80"></div>

        <div className="relative z-10 max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12 text-center text-white py-16 sm:py-24 lg:py-32">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light mb-4 sm:mb-6 uppercase tracking-[2px] leading-tight">
            Discover Everything
            <br />
            <span className="text-[#2B5D8C]">About Thailand</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto font-light leading-relaxed text-gray-300 px-4">
            24,000+ Articles - Destinations - Activities - Culture - Travel Tips
          </p>

          <div className="max-w-3xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search Thailand destinations, activities, hotels..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-4 sm:py-5 pl-12 sm:pl-16 pr-4 sm:pr-6 rounded-full bg-white text-[#252525] placeholder-gray-400 text-base sm:text-lg font-light focus:outline-none focus:ring-2 focus:ring-[#2B5D8C] shadow-2xl"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-4 sm:mt-6 px-2">
              <span className="text-xs sm:text-sm text-gray-400 font-light">Popular:</span>
              {popularSearches.map((search, index) => (
                <Link
                  key={index}
                  to={search.link}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm text-white hover:bg-[#2B5D8C] hover:text-white transition-all duration-300 font-light tracking-wide min-h-[44px] sm:min-h-0 flex items-center"
                >
                  {search.text}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto mt-12 sm:mt-20">
            {[
              { number: '50+', label: 'Cities' },
              { number: '200+', label: 'Islands' },
              { number: '24K+', label: 'Articles' },
              { number: '100%', label: 'Authentic' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-[10px] p-4 sm:p-6 md:p-8 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-2 sm:mb-3 text-[#F4A261]">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-xs sm:text-sm uppercase tracking-[1px] sm:tracking-[2px] font-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="section-heading text-center mb-12 sm:mb-16 lg:mb-20">
            Explore Thailand
          </h2>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {[
              {
                title: 'Destinations',
                image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1000&q=80',
                description: 'From the electric energy of Bangkok to tranquil island paradises, discover Thailand\'s most iconic locations and hidden treasures.',
                link: '/destinations'
              },
              {
                title: 'Cuisine',
                image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=1000&q=80',
                description: 'Embark on a culinary journey through Thailand\'s diverse flavors, from bustling street food stalls to refined royal dishes.',
                link: '/food'
              },
              {
                title: 'Culture',
                image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1000&q=80',
                description: 'Immerse yourself in ancient traditions, sacred temples, and the warm hospitality that defines the Thai way of life.',
                link: '/culture'
              }
            ].map((pillar, index) => (
              <Link
                key={index}
                to={pillar.link}
                className="group cursor-pointer"
              >
                <div className="relative h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-[10px] mb-4 sm:mb-6">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#252525]/60 to-transparent"></div>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#252525] mb-3 sm:mb-4 uppercase tracking-[2px] group-hover:text-[#2B5D8C] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 font-light text-base sm:text-lg">
                  {pillar.description}
                </p>
                <span className="inline-flex items-center gap-2 text-[#2B5D8C] uppercase tracking-[2px] text-sm font-normal group-hover:gap-4 transition-all">
                  Explore More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="section-heading text-center mb-12 sm:mb-16 lg:mb-20">
            Explore Top Destinations
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                name: 'Bangkok',
                guides: '3,847 guides',
                description: "Thailand's vibrant capital",
                image: 'https://images.pexels.com/photos/732895/pexels-photo-732895.jpeg?auto=compress&cs=tinysrgb&w=800',
                link: '/destinations/bangkok'
              },
              {
                name: 'Phuket',
                guides: '2,634 guides',
                description: 'Island paradise beaches',
                image: 'https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=800',
                link: '/destinations/phuket'
              },
              {
                name: 'Pattaya',
                guides: '1,289 guides',
                description: 'Coastal entertainment hub',
                image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
                link: '/destinations'
              },
              {
                name: 'Koh Samui',
                guides: '1,456 guides',
                description: 'Tropical island getaway',
                image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800',
                link: '/destinations/koh-samui'
              },
              {
                name: 'Chiang Mai',
                guides: '1,823 guides',
                description: 'Cultural northern gem',
                image: 'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800',
                link: '/destinations/chiang-mai'
              },
              {
                name: 'Krabi',
                guides: '1,034 guides',
                description: 'Stunning limestone cliffs',
                image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800',
                link: '/destinations'
              },
              {
                name: 'Hua Hin',
                guides: '892 guides',
                description: 'Royal beach resort',
                image: 'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&w=800',
                link: '/destinations'
              },
              {
                name: 'Ayutthaya',
                guides: '389 guides',
                description: 'Ancient capital ruins',
                image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=800',
                link: '/destinations'
              }
            ].map((destination, index) => (
              <Link
                key={index}
                to={destination.link}
                className="group cursor-pointer"
              >
                <div className="relative h-[280px] sm:h-[300px] md:h-[320px] overflow-hidden rounded-[10px] bg-white shadow-sm hover:shadow-xl transition-all duration-500">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#252525]/90 via-[#252525]/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6">
                    <h3 className="text-2xl sm:text-2xl md:text-3xl font-light text-white mb-1.5 sm:mb-2 uppercase tracking-[1px]">
                      {destination.name}
                    </h3>
                    <p className="text-[#F4A261] text-xs sm:text-sm font-light mb-1 tracking-wide">
                      {destination.guides}
                    </p>
                    <p className="text-gray-300 text-xs sm:text-sm font-light">
                      {destination.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/destinations"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#252525] text-white rounded-full hover:bg-[#2B5D8C] transition-all duration-300 uppercase tracking-[2px] text-sm font-light"
            >
              View All Destinations
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="section-heading text-center mb-12 sm:mb-16 lg:mb-20">
            Featured Experiences
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                title: 'Best Islands & Beaches',
                description: "Discover Thailand's stunning coastlines and crystal-clear waters",
                buttonText: 'Explore Islands',
                image: 'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=1200',
                link: '/destinations'
              },
              {
                title: 'Temples & Culture',
                description: 'Ancient wonders, sacred sites, and rich traditions',
                buttonText: 'Discover Culture',
                image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1200',
                link: '/culture'
              },
              {
                title: 'Food & Dining',
                description: 'From street food stalls to Michelin-starred restaurants',
                buttonText: 'Explore Food',
                image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1200',
                link: '/food-dining'
              },
              {
                title: 'Adventure & Activities',
                description: 'Diving, trekking, zip-lining, and unforgettable experiences',
                buttonText: 'Find Adventures',
                image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1200',
                link: '/things-to-do'
              }
            ].map((experience, index) => (
              <Link
                key={index}
                to={experience.link}
                className="group cursor-pointer"
              >
                <div className="relative h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden rounded-[10px] shadow-lg hover:shadow-2xl transition-all duration-500">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#252525]/95 via-[#252525]/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-3 sm:mb-4 uppercase tracking-[1px] leading-tight">
                      {experience.title}
                    </h3>
                    <p className="text-gray-200 text-base sm:text-lg md:text-xl font-light mb-4 sm:mb-6 leading-relaxed">
                      {experience.description}
                    </p>
                    <span className="inline-flex items-center gap-2 sm:gap-3 px-5 py-2.5 sm:px-6 sm:py-3 bg-white text-[#252525] rounded-full hover:bg-[#2B5D8C] hover:text-white transition-all duration-300 uppercase tracking-[2px] text-xs sm:text-sm font-light min-h-[44px]">
                      {experience.buttonText}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 bg-[#f8f9fa]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-8 sm:mb-10 md:mb-12 uppercase tracking-[1px] text-[#252525]">
                Popular Travel Guides
              </h2>
              <ul className="space-y-4 sm:space-y-5 mb-8 sm:mb-10 md:mb-12">
                {[
                  { text: 'Complete Bangkok Travel Guide 2026', link: '/destinations/bangkok' },
                  { text: 'Best Time to Visit Thailand (Month-by-Month Weather)', link: '/best-time-to-visit' },
                  { text: 'Thailand Visa Requirements & How to Apply', link: '/visa-guide' },
                  { text: 'Island Hopping Guide: The Best Thai Islands', link: '/destinations' },
                  { text: 'Budget Travel Thailand: Complete Cost Breakdown', link: '/budget-guide' },
                  { text: 'Thai Culture & Etiquette: What You Need to Know', link: '/culture' },
                  { text: 'Best Beaches in Thailand (North to South)', link: '/destinations' },
                  { text: 'Bangkok Street Food Guide: Where & What to Eat', link: '/food-dining' }
                ].map((guide, index) => (
                  <li key={index}>
                    <Link
                      to={guide.link}
                      className="flex items-start gap-3 sm:gap-4 group hover:translate-x-2 transition-transform duration-300 min-h-[44px] py-1"
                    >
                      <span className="text-xl sm:text-2xl mt-0.5 sm:mt-1 flex-shrink-0">-</span>
                      <span className="text-base sm:text-lg md:text-xl font-light text-[#252525] group-hover:text-[#2B5D8C] transition-colors duration-300 leading-relaxed">
                        {guide.text}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to="/travel-planning"
                className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-[#252525] text-white rounded-full hover:bg-[#2B5D8C] transition-all duration-300 uppercase tracking-[2px] text-xs sm:text-sm font-light min-h-[44px]"
              >
                Browse All Guides
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-8 sm:mb-10 md:mb-12 uppercase tracking-[1px] text-[#252525]">
                Plan Your Perfect Trip
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {[
                  {
                    icon: '>',
                    title: 'Getting There',
                    description: 'Flights, visas, entry requirements',
                    link: '/travel-planning'
                  },
                  {
                    icon: '*',
                    title: 'Where to Stay',
                    description: 'Hotels, resorts, villas, hostels',
                    link: '/accommodation'
                  },
                  {
                    icon: '+',
                    title: 'What to Eat',
                    description: 'Thai cuisine & restaurant guides',
                    link: '/food-dining'
                  },
                  {
                    icon: '*',
                    title: 'Things to Do',
                    description: 'Activities, tours, experiences',
                    link: '/things-to-do'
                  },
                  {
                    icon: '#',
                    title: 'When to Visit',
                    description: 'Best times & weather guide',
                    link: '/best-time-to-visit'
                  },
                  {
                    icon: '$',
                    title: 'Budget Guide',
                    description: 'Costs, tips & money-saving advice',
                    link: '/budget-guide'
                  }
                ].map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="group p-5 sm:p-6 bg-white rounded-[10px] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer min-h-[140px] sm:min-h-[160px] flex flex-col"
                  >
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{item.icon}</div>
                    <h3 className="text-lg sm:text-xl font-light text-[#252525] mb-1.5 sm:mb-2 uppercase tracking-[1px]">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-3 sm:mb-4 text-[#252525] uppercase tracking-[1px] px-4">
            Need Help Planning Your Thailand Trip?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light mb-6 sm:mb-8 leading-relaxed px-4">
            Ask our Thailand travel experts anything you need!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-[#252525] text-white rounded-full hover:bg-[#2B5D8C] transition-all duration-300 uppercase tracking-[2px] text-xs sm:text-sm font-light shadow-lg hover:shadow-xl min-h-[44px]"
          >
            Start Chat
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 bg-[#252525] text-white">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 sm:mb-8 uppercase tracking-[2px] leading-tight">
              Your Journey
              <br />
              <span className="text-[#F4A261]">Starts Here</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 font-light leading-relaxed text-gray-300 px-4">
              Whether you're planning your first visit or returning to rediscover the Kingdom, ThailandWiki provides the insights and inspiration you need.
            </p>
            <Link to="/travel-planning" className="btn-primary inline-flex items-center gap-3">
              Plan Your Trip
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
