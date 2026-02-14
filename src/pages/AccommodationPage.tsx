import { ArrowRight, Hotel, Home, Building2, Tent, Ship, Mountain, Waves, Backpack, Sparkles, BookOpen, FileText, MessageCircle, Star, Heart, Users, Palmtree, Award, Leaf } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import RelatedGuides from '../components/RelatedGuides';
import { usePageMeta } from '../hooks/usePageMeta';

export function AccommodationPage() {
  usePageMeta({
    title: 'Where to Stay in Thailand 2026 - Hotels, Resorts & Accommodation | ThailandWiki',
    description: 'Find the perfect accommodation in Thailand. From budget hostels to luxury resorts, hotels, vacation rentals, and unique stays across all destinations.',
  });
  const relatedGuides = [
    {
      title: 'Best Areas to Stay in Bangkok',
      excerpt: 'Compare Bangkok neighborhoods: Sukhumvit, Silom, Riverside, Old Town. Find the perfect area for your travel style and budget.',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/bangkok'
    },
    {
      title: 'Phuket Hotel Guide 2026',
      excerpt: 'Where to stay in Phuket: Beach resorts, luxury villas, budget options. Compare Patong, Kata, Karon, and quieter beaches.',
      image: 'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/destinations/phuket'
    },
    {
      title: 'Thailand Hostel Guide',
      excerpt: 'Best hostels for backpackers across Thailand. Social atmosphere, cleanliness, location, and value for budget travelers.',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/accommodation'
    },
    {
      title: 'Luxury Resorts in Thailand',
      excerpt: 'Thailand\'s most exclusive resorts and villas. Private islands, beachfront luxury, and world-class service.',
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/accommodation'
    }
  ];

  return (
    <>
      <div className="relative h-[60vh] min-h-[500px] bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 uppercase tracking-widest">
              Where to Stay in Thailand
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 font-light mb-8 tracking-wide">
              Hotels, Resorts, Villas & Unique Accommodations
            </p>
            <div className="inline-block bg-[#d7007f] text-white px-8 py-3 rounded-lg text-lg font-medium">
              3,100 Accommodation Guides
            </div>
          </div>
        </div>
      </div>

      <Breadcrumb
        items={[
          { label: 'Where to Stay' }
        ]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed text-center">
              Thailand offers accommodation for every budget and style, from $5 hostel dorms to
              $1,000/night luxury resorts. Our comprehensive guides help you find the perfect place
              to stay, whether you're backpacking through Southeast Asia or planning a luxury honeymoon.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 uppercase tracking-widest">
              Browse by Accommodation Type
            </h2>
          </div>

          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#d7007f] hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 bg-gray-200">
                  <img
                    loading="lazy"
                    src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Hotel"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 bg-[#d7007f] text-white p-3 rounded-lg shadow-lg">
                    <Hotel className="w-8 h-8" />
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-light text-gray-900 uppercase tracking-wide">Hotels</h3>
                    <span className="text-[#d7007f] font-medium text-lg">1,200 guides</span>
                  </div>
                  <p className="text-xl text-gray-700 font-light mb-6">
                    From budget to luxury, find your perfect hotel
                  </p>

                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-4">Categories</h4>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Luxury Hotels</span>
                        <span className="text-sm text-gray-500">300 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">5-star properties, exceptional service</p>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-700">Boutique Hotels</span>
                        <span className="text-sm text-gray-500">250 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">Unique, design-focused, intimate</p>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-700">Budget Hotels</span>
                        <span className="text-sm text-gray-500">250 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">Clean, comfortable, great value</p>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-700">Business Hotels</span>
                        <span className="text-sm text-gray-500">200 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">Central, facilities, WiFi</p>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-700">Airport Hotels</span>
                        <span className="text-sm text-gray-500">100 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">Convenient for early flights</p>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-700">Family Hotels</span>
                        <span className="text-sm text-gray-500">100 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">Kid-friendly, family rooms</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-2">Price Range</h4>
                    <p className="text-2xl text-gray-900 font-light">$15-500/night</p>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-4">Best Booking Platforms</h4>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="https://www.booking.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                      >
                        <span>Book on Booking.com</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href="https://www.agoda.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium text-sm"
                      >
                        <span>Book on Agoda</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#d7007f] hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 bg-gray-200">
                  <img
                    loading="lazy"
                    src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Resorts"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 bg-[#d7007f] text-white p-3 rounded-lg shadow-lg">
                    <Mountain className="w-8 h-8" />
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-light text-gray-900 uppercase tracking-wide">Resorts</h3>
                    <span className="text-[#d7007f] font-medium text-lg">800 guides</span>
                  </div>
                  <p className="text-xl text-gray-700 font-light mb-6">
                    All-inclusive paradise with pools, spas, and beaches
                  </p>

                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-4">Categories</h4>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Beach Resorts</span>
                        <span className="text-sm text-gray-500">350 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">Private beaches, water sports</p>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-700">Luxury Resorts</span>
                        <span className="text-sm text-gray-500">200 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">Ultimate luxury, butler service</p>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-700">Family Resorts</span>
                        <span className="text-sm text-gray-500">150 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">Kids clubs, family activities</p>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-700">Wellness Resorts</span>
                        <span className="text-sm text-gray-500">100 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">Yoga, spa, detox programs</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-2">Price Range</h4>
                    <p className="text-2xl text-gray-900 font-light">$50-1,000/night</p>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-4">Best Booking Platforms</h4>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="https://www.booking.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                      >
                        <span>Book on Booking.com</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href="https://www.agoda.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium text-sm"
                      >
                        <span>Book on Agoda</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#d7007f] hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 bg-gray-200">
                  <img
                    loading="lazy"
                    src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Villas"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 bg-[#d7007f] text-white p-3 rounded-lg shadow-lg">
                    <Home className="w-8 h-8" />
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-light text-gray-900 uppercase tracking-wide">Villas</h3>
                    <span className="text-[#d7007f] font-medium text-lg">450 guides</span>
                  </div>
                  <p className="text-xl text-gray-700 font-light mb-6">
                    Private pools, kitchens, perfect for families and groups
                  </p>

                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-4">Categories</h4>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Pool Villas</span>
                        <span className="text-sm text-gray-500">200 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">Private pools, outdoor living</p>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-700">Beach Villas</span>
                        <span className="text-sm text-gray-500">150 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">Beachfront, ocean views</p>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-700">Luxury Villas</span>
                        <span className="text-sm text-gray-500">100 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">Staff, chef, premium amenities</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-2">Price Range</h4>
                    <p className="text-2xl text-gray-900 font-light">$80-2,000/night</p>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-4">Best Booking Platforms</h4>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="https://www.airbnb.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-rose-600 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition-colors font-medium text-sm"
                      >
                        <span>Book on Airbnb</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href="https://www.vrbo.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium text-sm"
                      >
                        <span>Book on Vrbo</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#d7007f] hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 bg-gray-200">
                  <img
                    loading="lazy"
                    src="https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Hostels"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 bg-[#d7007f] text-white p-3 rounded-lg shadow-lg">
                    <Building2 className="w-8 h-8" />
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-light text-gray-900 uppercase tracking-wide">Hostels</h3>
                    <span className="text-[#d7007f] font-medium text-lg">350 guides</span>
                  </div>
                  <p className="text-xl text-gray-700 font-light mb-6">
                    Budget-friendly dorms and private rooms for backpackers
                  </p>

                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-4">Categories</h4>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Party Hostels</span>
                        <span className="text-sm text-gray-500">120 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">Social, bar, events</p>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-700">Boutique Hostels</span>
                        <span className="text-sm text-gray-500">100 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">Design-focused, quality</p>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-700">Pod Hostels</span>
                        <span className="text-sm text-gray-500">80 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">Privacy pods, modern</p>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-700">Beach Hostels</span>
                        <span className="text-sm text-gray-500">50 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">Beachfront, chill vibes</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-2">Price Range</h4>
                    <p className="text-2xl text-gray-900 font-light">$5-40/night</p>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-4">Best Booking Platforms</h4>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="https://www.hostelworld.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium text-sm"
                      >
                        <span>Book on Hostelworld</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href="https://www.booking.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                      >
                        <span>Book on Booking.com</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#d7007f] hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 bg-gray-200">
                  <img
                    loading="lazy"
                    src="https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Guesthouses"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 bg-[#d7007f] text-white p-3 rounded-lg shadow-lg">
                    <Home className="w-8 h-8" />
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-light text-gray-900 uppercase tracking-wide">Guesthouses</h3>
                    <span className="text-[#d7007f] font-medium text-lg">200 guides</span>
                  </div>
                  <p className="text-xl text-gray-700 font-light mb-6">
                    Family-run, local experience, authentic Thailand
                  </p>

                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-4">Categories</h4>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Traditional Guesthouses</span>
                        <span className="text-sm text-gray-500">100 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">Thai style, local hosts</p>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-700">Beach Guesthouses</span>
                        <span className="text-sm text-gray-500">60 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">Near beach, budget-friendly</p>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-700">Mountain Guesthouses</span>
                        <span className="text-sm text-gray-500">40 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">Hill tribes, nature views</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-2">Price Range</h4>
                    <p className="text-2xl text-gray-900 font-light">$10-50/night</p>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-4">Best Booking Platforms</h4>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="https://www.booking.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                      >
                        <span>Book on Booking.com</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href="https://www.agoda.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium text-sm"
                      >
                        <span>Book on Agoda</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#d7007f] hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 bg-gray-200">
                  <img
                    loading="lazy"
                    src="https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Unique Stays"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 bg-[#d7007f] text-white p-3 rounded-lg shadow-lg">
                    <Tent className="w-8 h-8" />
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-light text-gray-900 uppercase tracking-wide">Unique Stays</h3>
                    <span className="text-[#d7007f] font-medium text-lg">100 guides</span>
                  </div>
                  <p className="text-xl text-gray-700 font-light mb-6">
                    Treehouses, boats, glamping, unforgettable experiences
                  </p>

                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-4">Categories</h4>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Treehouses</span>
                        <span className="text-sm text-gray-500">30 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">Jungle views, eco-friendly</p>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-700">Floating Bungalows</span>
                        <span className="text-sm text-gray-500">25 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">On water, unique experience</p>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-700">Glamping</span>
                        <span className="text-sm text-gray-500">25 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">Luxury camping, nature</p>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-700">Temple Stays</span>
                        <span className="text-sm text-gray-500">20 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">Buddhist temples, meditation</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-2">Price Range</h4>
                    <p className="text-2xl text-gray-900 font-light">$20-300/night</p>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-4">Best Booking Platforms</h4>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="https://www.airbnb.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-rose-600 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition-colors font-medium text-sm"
                      >
                        <span>Book on Airbnb</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href="https://www.booking.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                      >
                        <span>Book on Booking.com</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#d7007f] hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 bg-gray-200">
                  <img
                    loading="lazy"
                    src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Beach Resorts"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 bg-[#d7007f] text-white p-3 rounded-lg shadow-lg">
                    <Waves className="w-8 h-8" />
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-light text-gray-900 uppercase tracking-wide">Beach Resorts</h3>
                    <span className="text-[#d7007f] font-medium text-lg">800 guides</span>
                  </div>
                  <p className="text-xl text-gray-700 font-light mb-6">
                    Beachfront paradise properties
                  </p>

                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-4">Categories</h4>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Luxury Beach Resorts</span>
                        <span className="text-sm text-gray-500">300 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">Private beaches, world-class</p>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-700">Family Beach Resorts</span>
                        <span className="text-sm text-gray-500">150 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">Kids clubs, family-friendly</p>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-700">Adult-Only Resorts</span>
                        <span className="text-sm text-gray-500">100 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">Peaceful, romantic</p>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-700">All-Inclusive Resorts</span>
                        <span className="text-sm text-gray-500">100 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">Meals included</p>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-700">Budget Beach Resorts</span>
                        <span className="text-sm text-gray-500">150 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">Beachfront on a budget</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-2">Price Range</h4>
                    <p className="text-2xl text-gray-900 font-light">$40-1,000/night</p>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-4">Best Booking Platforms</h4>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="https://luxuryescapes.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors font-medium text-sm"
                      >
                        <span>Book on Luxury Escapes</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href="https://www.booking.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                      >
                        <span>Book on Booking.com</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#d7007f] hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 bg-gray-200">
                  <img
                    loading="lazy"
                    src="https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Villas & Vacation Rentals"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 bg-[#d7007f] text-white p-3 rounded-lg shadow-lg">
                    <Home className="w-8 h-8" />
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-light text-gray-900 uppercase tracking-wide">Villas & Vacation Rentals</h3>
                    <span className="text-[#d7007f] font-medium text-lg">700 guides</span>
                  </div>
                  <p className="text-xl text-gray-700 font-light mb-6">
                    Private villas with pools, perfect for groups
                  </p>

                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-4">Categories</h4>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Luxury Villas</span>
                        <span className="text-sm text-gray-500">200 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">Private pools, staff, luxury amenities</p>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-700">Pool Villas</span>
                        <span className="text-sm text-gray-500">150 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">Private pools, modern design</p>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-700">Beachfront Villas</span>
                        <span className="text-sm text-gray-500">150 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">Beach access, ocean views</p>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-700">Group Villas</span>
                        <span className="text-sm text-gray-500">100 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">Large groups, events, celebrations</p>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-700">Family Villas</span>
                        <span className="text-sm text-gray-500">100 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">Kid-friendly, spacious</p>
                    </div>
                  </div>

                  <div className="bg-pink-50 border-l-4 border-[#d7007f] p-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-[#d7007f] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                        !
                      </div>
                      <div>
                        <p className="text-sm text-gray-800 font-medium mb-1">Planning a group vacation?</p>
                        <p className="text-sm text-gray-700 font-light">
                          Renting a villa can be more economical and fun than booking multiple hotel rooms.
                          Villas offer shared spaces, private pools, and the flexibility to create your own schedule.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-2">Price Range</h4>
                    <p className="text-2xl text-gray-900 font-light">$80-2,000/night</p>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-4">Best Booking Platforms</h4>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="https://www.vrbo.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium text-sm"
                      >
                        <span>Browse Villas on Vrbo</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href="https://www.airbnb.com/luxe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-rose-600 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition-colors font-medium text-sm"
                      >
                        <span>Browse on Airbnb Luxe</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#d7007f] hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 bg-gray-200">
                  <img
                    loading="lazy"
                    src="https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Hostels & Budget"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 bg-[#d7007f] text-white p-3 rounded-lg shadow-lg">
                    <Backpack className="w-8 h-8" />
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-light text-gray-900 uppercase tracking-wide">Hostels & Budget</h3>
                    <span className="text-[#d7007f] font-medium text-lg">300 guides</span>
                  </div>
                  <p className="text-xl text-gray-700 font-light mb-6">
                    Budget-friendly accommodation for backpackers
                  </p>

                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-4">Categories</h4>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Best Hostels</span>
                        <span className="text-sm text-gray-500">150 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">Social, clean, central locations</p>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-700">Guesthouses</span>
                        <span className="text-sm text-gray-500">100 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">Local, basic, cheap</p>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-700">Capsule Hotels</span>
                        <span className="text-sm text-gray-500">50 guides</span>
                      </div>
                      <p className="text-sm text-gray-600 font-light -mt-2">Modern, pod-style</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-2">Price Range</h4>
                    <p className="text-2xl text-gray-900 font-light">$5-30/night</p>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-4">Best Booking Platforms</h4>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="https://www.hostelworld.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium text-sm"
                      >
                        <span>Book on Hostelworld</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href="https://www.booking.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                      >
                        <span>Book on Booking.com</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#d7007f] hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 bg-gray-200">
                  <img
                    loading="lazy"
                    src="https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Unique Stays"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 bg-[#d7007f] text-white p-3 rounded-lg shadow-lg">
                    <Sparkles className="w-8 h-8" />
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-light text-gray-900 uppercase tracking-wide">Unique Stays</h3>
                    <span className="text-[#d7007f] font-medium text-lg">100 guides</span>
                  </div>
                  <p className="text-xl text-gray-700 font-light mb-6">
                    Unforgettable accommodation experiences
                  </p>

                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-4">Categories</h4>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Treehouses</span>
                        <span className="text-sm text-gray-500">25 guides</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Glamping</span>
                        <span className="text-sm text-gray-500">25 guides</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Floating Hotels</span>
                        <span className="text-sm text-gray-500">15 guides</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Boutique Inns</span>
                        <span className="text-sm text-gray-500">20 guides</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Historic Properties</span>
                        <span className="text-sm text-gray-500">15 guides</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-2">Price Range</h4>
                    <p className="text-2xl text-gray-900 font-light">$40-300/night</p>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="https://www.airbnb.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-rose-600 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition-colors font-medium text-sm"
                      >
                        <span>Explore Unique Stays</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 uppercase tracking-wider">
              Find Accommodation by Destination
            </h2>
            <p className="text-xl text-gray-700 font-light max-w-3xl mx-auto">
              Browse hotels, resorts, and villas by Thailand's top destinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200">
              <div className="relative h-48 bg-gray-200">
                <img
                  src="https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Bangkok Hotels"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-light text-gray-900">Bangkok</h3>
                  <span className="text-[#d7007f] font-medium text-sm">1,200 guides</span>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 font-medium mb-2">
                    Hotels from $15/night • 5-star luxury • Budget hostels
                  </p>
                  <p className="text-gray-700 font-light">
                    Wide variety from backpacker hostels to iconic luxury hotels
                  </p>
                </div>
                <a
                  href="/bangkok"
                  className="inline-flex items-center space-x-2 text-[#d7007f] hover:text-[#d7007f] font-medium transition-colors"
                >
                  <span>Browse Bangkok Hotels</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200">
              <div className="relative h-48 bg-gray-200">
                <img
                  src="https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Phuket Hotels"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-light text-gray-900">Phuket</h3>
                  <span className="text-[#d7007f] font-medium text-sm">800 guides</span>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 font-medium mb-2">
                    Beach resorts • Pool villas • All budgets
                  </p>
                  <p className="text-gray-700 font-light">
                    Beachfront paradise with options for every traveler
                  </p>
                </div>
                <a
                  href="/phuket"
                  className="inline-flex items-center space-x-2 text-[#d7007f] hover:text-[#d7007f] font-medium transition-colors"
                >
                  <span>Browse Phuket Hotels</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200">
              <div className="relative h-48 bg-gray-200">
                <img
                  src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Koh Samui Hotels"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-light text-gray-900">Koh Samui</h3>
                  <span className="text-[#d7007f] font-medium text-sm">400 guides</span>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 font-medium mb-2">
                    Luxury beach resorts • Boutique hotels
                  </p>
                  <p className="text-gray-700 font-light">
                    Island paradise with upscale resorts and intimate boutiques
                  </p>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center space-x-2 text-[#d7007f] hover:text-[#d7007f] font-medium transition-colors"
                >
                  <span>Browse Samui Hotels</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200">
              <div className="relative h-48 bg-gray-200">
                <img
                  src="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Chiang Mai Hotels"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-light text-gray-900">Chiang Mai</h3>
                  <span className="text-[#d7007f] font-medium text-sm">350 guides</span>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 font-medium mb-2">
                    Boutique hotels • Budget guesthouses
                  </p>
                  <p className="text-gray-700 font-light">
                    Northern charm with cultural boutiques and backpacker favorites
                  </p>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center space-x-2 text-[#d7007f] hover:text-[#d7007f] font-medium transition-colors"
                >
                  <span>Browse Chiang Mai Hotels</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200">
              <div className="relative h-48 bg-gray-200">
                <img
                  src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Pattaya Hotels"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-light text-gray-900">Pattaya</h3>
                  <span className="text-[#d7007f] font-medium text-sm">300 guides</span>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 font-medium mb-2">
                    Beachfront resorts • Budget-friendly
                  </p>
                  <p className="text-gray-700 font-light">
                    Coastal accommodation from family resorts to budget options
                  </p>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center space-x-2 text-[#d7007f] hover:text-[#d7007f] font-medium transition-colors"
                >
                  <span>Browse Pattaya Hotels</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200">
              <div className="relative h-48 bg-gray-200">
                <img
                  src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Krabi Hotels"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-light text-gray-900">Krabi</h3>
                  <span className="text-[#d7007f] font-medium text-sm">250 guides</span>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 font-medium mb-2">
                    Beach resorts • Unique stays
                  </p>
                  <p className="text-gray-700 font-light">
                    Stunning limestone scenery with beachfront and boutique options
                  </p>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center space-x-2 text-[#d7007f] hover:text-[#d7007f] font-medium transition-colors"
                >
                  <span>Browse Krabi Hotels</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center space-x-2 bg-[#d7007f] text-white px-8 py-4 rounded-lg hover:bg-[#d7007f] transition-colors font-medium text-lg shadow-lg hover:shadow-xl"
            >
              <span>View All Destinations</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 uppercase tracking-wider">
              Essential Booking Guides
            </h2>
            <p className="text-xl text-gray-700 font-light max-w-3xl mx-auto">
              Expert advice to help you find and book the perfect accommodation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <BookOpen className="w-6 h-6 text-[#d7007f]" />
                <h3 className="text-2xl font-light text-gray-900">Planning & Choosing</h3>
              </div>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="flex items-center justify-between text-gray-700 hover:text-[#d7007f] transition-colors group">
                    <span className="font-light">How to Choose Where to Stay in Thailand</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-between text-gray-700 hover:text-[#d7007f] transition-colors group">
                    <span className="font-light">Best Areas for Different Traveler Types</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-between text-gray-700 hover:text-[#d7007f] transition-colors group">
                    <span className="font-light">Budget vs Luxury: What to Expect</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-between text-gray-700 hover:text-[#d7007f] transition-colors group">
                    <span className="font-light">Seasonal Pricing Guide</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="w-6 h-6 text-[#d7007f]" />
                <h3 className="text-2xl font-light text-gray-900">Booking & Tips</h3>
              </div>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="flex items-center justify-between text-gray-700 hover:text-[#d7007f] transition-colors group">
                    <span className="font-light">Hotel Booking Tips & Tricks</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-between text-gray-700 hover:text-[#d7007f] transition-colors group">
                    <span className="font-light">Understanding Thai Star Ratings</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-between text-gray-700 hover:text-[#d7007f] transition-colors group">
                    <span className="font-light">Last-Minute Booking Tips</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-between text-gray-700 hover:text-[#d7007f] transition-colors group">
                    <span className="font-light">Villa Rental Guide (deposits, contracts, tips)</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Home className="w-6 h-6 text-[#d7007f]" />
                <h3 className="text-2xl font-light text-gray-900">Specialized Accommodation</h3>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li>
                  <a href="#" className="flex items-center justify-between text-gray-700 hover:text-[#d7007f] transition-colors group">
                    <span className="font-light">Best Hotel Chains in Thailand</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-between text-gray-700 hover:text-[#d7007f] transition-colors group">
                    <span className="font-light">Apartment Rentals for Long Stays</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#"
              className="inline-flex items-center space-x-2 text-[#d7007f] hover:text-[#d7007f] font-medium text-lg transition-colors"
            >
              <span>Browse All Accommodation Guides</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 uppercase tracking-wider">
              Curated Collections
            </h2>
            <p className="text-xl text-gray-700 font-light max-w-3xl mx-auto">
              Special hand-picked hotel lists for every type of traveler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="#" className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-[#d7007f]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-light text-gray-900 mb-2 group-hover:text-[#d7007f] transition-colors">
                    Best Luxury Hotels in Thailand
                  </h3>
                  <p className="text-sm text-gray-600 font-light mb-3">
                    Top 50 five-star properties
                  </p>
                  <div className="flex items-center text-[#d7007f] font-medium text-sm">
                    <span>Explore Collection</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>

            <a href="#" className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-[#d7007f]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-light text-gray-900 mb-2 group-hover:text-[#d7007f] transition-colors">
                    Best Boutique Hotels
                  </h3>
                  <p className="text-sm text-gray-600 font-light mb-3">
                    Top 30 unique properties
                  </p>
                  <div className="flex items-center text-[#d7007f] font-medium text-sm">
                    <span>Explore Collection</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>

            <a href="#" className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Backpack className="w-6 h-6 text-[#d7007f]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-light text-gray-900 mb-2 group-hover:text-[#d7007f] transition-colors">
                    Best Budget Hotels
                  </h3>
                  <p className="text-sm text-gray-600 font-light mb-3">
                    Top 40 value stays
                  </p>
                  <div className="flex items-center text-[#d7007f] font-medium text-sm">
                    <span>Explore Collection</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>

            <a href="#" className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-[#d7007f]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-light text-gray-900 mb-2 group-hover:text-[#d7007f] transition-colors">
                    Best Family Resorts
                  </h3>
                  <p className="text-sm text-gray-600 font-light mb-3">
                    Top 25 family-friendly properties
                  </p>
                  <div className="flex items-center text-[#d7007f] font-medium text-sm">
                    <span>Explore Collection</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>

            <a href="#" className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-[#d7007f]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-light text-gray-900 mb-2 group-hover:text-[#d7007f] transition-colors">
                    Best Honeymoon Resorts
                  </h3>
                  <p className="text-sm text-gray-600 font-light mb-3">
                    Top 20 romantic escapes
                  </p>
                  <div className="flex items-center text-[#d7007f] font-medium text-sm">
                    <span>Explore Collection</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>

            <a href="#" className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Palmtree className="w-6 h-6 text-[#d7007f]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-light text-gray-900 mb-2 group-hover:text-[#d7007f] transition-colors">
                    Best Beach Resorts
                  </h3>
                  <p className="text-sm text-gray-600 font-light mb-3">
                    Top 40 beachfront stays
                  </p>
                  <div className="flex items-center text-[#d7007f] font-medium text-sm">
                    <span>Explore Collection</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>

            <a href="#" className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Waves className="w-6 h-6 text-[#d7007f]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-light text-gray-900 mb-2 group-hover:text-[#d7007f] transition-colors">
                    Best Hotels with Infinity Pools
                  </h3>
                  <p className="text-sm text-gray-600 font-light mb-3">
                    Top 30 stunning pools
                  </p>
                  <div className="flex items-center text-[#d7007f] font-medium text-sm">
                    <span>Explore Collection</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>

            <a href="#" className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-[#d7007f]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-light text-gray-900 mb-2 group-hover:text-[#d7007f] transition-colors">
                    Best Eco-Friendly Resorts
                  </h3>
                  <p className="text-sm text-gray-600 font-light mb-3">
                    Top 20 sustainable stays
                  </p>
                  <div className="flex items-center text-[#d7007f] font-medium text-sm">
                    <span>Explore Collection</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center space-x-2 bg-[#d7007f] text-white px-8 py-4 rounded-lg hover:bg-[#d7007f] transition-colors font-medium text-lg shadow-lg hover:shadow-xl"
            >
              <span>View All Collections</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 uppercase tracking-wider">
              Search by Your Preferences
            </h2>
            <p className="text-xl text-gray-700 font-light max-w-3xl mx-auto">
              Find the perfect accommodation that matches your needs
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">By Budget</h3>
              <div className="flex flex-wrap gap-3">
                <button className="px-6 py-3 bg-white border-2 border-gray-300 rounded-full text-gray-700 hover:border-[#d7007f] hover:text-[#d7007f] transition-colors font-light">
                  Budget ($5-40)
                </button>
                <button className="px-6 py-3 bg-white border-2 border-gray-300 rounded-full text-gray-700 hover:border-[#d7007f] hover:text-[#d7007f] transition-colors font-light">
                  Mid-Range ($40-150)
                </button>
                <button className="px-6 py-3 bg-white border-2 border-gray-300 rounded-full text-gray-700 hover:border-[#d7007f] hover:text-[#d7007f] transition-colors font-light">
                  Luxury ($150-500)
                </button>
                <button className="px-6 py-3 bg-white border-2 border-gray-300 rounded-full text-gray-700 hover:border-[#d7007f] hover:text-[#d7007f] transition-colors font-light">
                  Ultra-Luxury ($500+)
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">By Type</h3>
              <div className="flex flex-wrap gap-3">
                <button className="px-6 py-3 bg-white border-2 border-gray-300 rounded-full text-gray-700 hover:border-[#d7007f] hover:text-[#d7007f] transition-colors font-light">
                  Hotel
                </button>
                <button className="px-6 py-3 bg-white border-2 border-gray-300 rounded-full text-gray-700 hover:border-[#d7007f] hover:text-[#d7007f] transition-colors font-light">
                  Resort
                </button>
                <button className="px-6 py-3 bg-white border-2 border-gray-300 rounded-full text-gray-700 hover:border-[#d7007f] hover:text-[#d7007f] transition-colors font-light">
                  Villa
                </button>
                <button className="px-6 py-3 bg-white border-2 border-gray-300 rounded-full text-gray-700 hover:border-[#d7007f] hover:text-[#d7007f] transition-colors font-light">
                  Hostel
                </button>
                <button className="px-6 py-3 bg-white border-2 border-gray-300 rounded-full text-gray-700 hover:border-[#d7007f] hover:text-[#d7007f] transition-colors font-light">
                  Unique Stay
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">By Location</h3>
              <div className="flex flex-wrap gap-3">
                <button className="px-6 py-3 bg-white border-2 border-gray-300 rounded-full text-gray-700 hover:border-[#d7007f] hover:text-[#d7007f] transition-colors font-light">
                  Beach
                </button>
                <button className="px-6 py-3 bg-white border-2 border-gray-300 rounded-full text-gray-700 hover:border-[#d7007f] hover:text-[#d7007f] transition-colors font-light">
                  City
                </button>
                <button className="px-6 py-3 bg-white border-2 border-gray-300 rounded-full text-gray-700 hover:border-[#d7007f] hover:text-[#d7007f] transition-colors font-light">
                  Mountains
                </button>
                <button className="px-6 py-3 bg-white border-2 border-gray-300 rounded-full text-gray-700 hover:border-[#d7007f] hover:text-[#d7007f] transition-colors font-light">
                  Islands
                </button>
                <button className="px-6 py-3 bg-white border-2 border-gray-300 rounded-full text-gray-700 hover:border-[#d7007f] hover:text-[#d7007f] transition-colors font-light">
                  Countryside
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">By Features</h3>
              <div className="flex flex-wrap gap-3">
                <button className="px-6 py-3 bg-white border-2 border-gray-300 rounded-full text-gray-700 hover:border-[#d7007f] hover:text-[#d7007f] transition-colors font-light">
                  Pool
                </button>
                <button className="px-6 py-3 bg-white border-2 border-gray-300 rounded-full text-gray-700 hover:border-[#d7007f] hover:text-[#d7007f] transition-colors font-light">
                  Beach Access
                </button>
                <button className="px-6 py-3 bg-white border-2 border-gray-300 rounded-full text-gray-700 hover:border-[#d7007f] hover:text-[#d7007f] transition-colors font-light">
                  Spa
                </button>
                <button className="px-6 py-3 bg-white border-2 border-gray-300 rounded-full text-gray-700 hover:border-[#d7007f] hover:text-[#d7007f] transition-colors font-light">
                  Gym
                </button>
                <button className="px-6 py-3 bg-white border-2 border-gray-300 rounded-full text-gray-700 hover:border-[#d7007f] hover:text-[#d7007f] transition-colors font-light">
                  Kids Club
                </button>
                <button className="px-6 py-3 bg-white border-2 border-gray-300 rounded-full text-gray-700 hover:border-[#d7007f] hover:text-[#d7007f] transition-colors font-light">
                  WiFi
                </button>
                <button className="px-6 py-3 bg-white border-2 border-gray-300 rounded-full text-gray-700 hover:border-[#d7007f] hover:text-[#d7007f] transition-colors font-light">
                  Restaurant
                </button>
                <button className="px-6 py-3 bg-white border-2 border-gray-300 rounded-full text-gray-700 hover:border-[#d7007f] hover:text-[#d7007f] transition-colors font-light">
                  Airport Shuttle
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedGuides guides={relatedGuides} />

      <section className="py-16 bg-gradient-to-br from-pink-50 to-blue-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center border border-gray-200">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-6">
              <MessageCircle className="w-8 h-8 text-[#d7007f]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 uppercase tracking-wider">
              Need Help Choosing Accommodation?
            </h2>
            <p className="text-xl text-gray-700 font-light mb-8 max-w-2xl mx-auto">
              Not sure where to stay? Chat with our experts for personalized hotel and resort recommendations!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-[#d7007f] text-white px-10 py-4 rounded-lg hover:bg-[#d7007f] transition-colors font-medium text-lg shadow-lg hover:shadow-xl"
            >
              <span>Ask a Question</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
