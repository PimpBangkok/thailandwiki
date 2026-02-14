import { Link } from 'react-router-dom';
import { Calendar, DollarSign, Home, Utensils, Car, Activity, ShoppingBag, Lightbulb, TrendingDown, Check, AlertCircle, MapPin } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import YouMayAlsoLike from '../components/YouMayAlsoLike';
import { usePageMeta } from '../hooks/usePageMeta';

export default function BudgetGuidePage() {
  usePageMeta({
    title: 'Thailand Budget Guide 2026 - Travel Costs & Money Saving Tips | ThailandWiki',
    description: 'Plan your Thailand budget with our comprehensive cost guide. Daily expenses, accommodation costs, food prices, and money-saving tips for every budget.',
  });
  return (
    <div className="min-h-screen bg-white">
      <div
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/15798912/pexels-photo-15798912.jpeg?auto=compress&cs=tinysrgb&w=1600)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-light mb-6 uppercase tracking-wider">
              Thailand Budget Guide 2026
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-4">
              Complete Cost Breakdown & Money-Saving Tips
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
              <Calendar className="w-4 h-4" />
              <span>Updated February 2026</span>
            </div>
          </div>
        </div>
      </div>

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Practical Info', href: '/practical' },
          { label: 'Budget Guide' }
        ]}
      />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-pink-50 to-blue-50 border-l-4 border-[#2B5D8C] p-8 mb-12 rounded-r-lg">
              <p className="text-gray-800 text-xl leading-relaxed mb-0">
                Thailand is one of the <strong>best-value destinations in the world</strong>. Whether you're backpacking on <strong>$30/day</strong> or enjoying luxury for <strong>$200+</strong>, this guide breaks down all costs so you can budget accurately for your trip.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-pink-100 p-3 rounded-lg">
                  <DollarSign className="w-8 h-8 text-[#2B5D8C]" />
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 uppercase tracking-wide m-0">
                  Daily Budget Breakdown
                </h2>
              </div>

              <div className="space-y-12">
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-8 text-white">
                    <div className="flex items-center gap-4">
                      <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                        <ShoppingBag className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-semibold mb-2">Budget Traveler</h3>
                        <p className="text-2xl font-light text-orange-50">$30-50 per day</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-white rounded-xl p-6 border border-orange-200">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-orange-100 p-3 rounded-lg">
                            <Home className="w-6 h-6 text-orange-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Accommodation</h4>
                            <p className="text-orange-600 font-semibold">$8-15/night</p>
                          </div>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>Hostel dorm beds: $8-12</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>Basic guesthouses: $12-18</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>Budget hotels: $15-25</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-xl p-6 border border-orange-200">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-orange-100 p-3 rounded-lg">
                            <Utensils className="w-6 h-6 text-orange-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Food</h4>
                            <p className="text-orange-600 font-semibold">$10-15/day</p>
                          </div>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>Street food: $1-3 per meal</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>Local restaurants: $3-5 per meal</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>Water & snacks: $2-3</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-xl p-6 border border-orange-200">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-orange-100 p-3 rounded-lg">
                            <Car className="w-6 h-6 text-orange-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Transportation</h4>
                            <p className="text-orange-600 font-semibold">$3-8/day</p>
                          </div>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>Local buses/songthaews: $0.50-1</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>BTS/MRT in Bangkok: $1-2</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>Tuk-tuks/taxis: $3-5</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-xl p-6 border border-orange-200">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-orange-100 p-3 rounded-lg">
                            <Activity className="w-6 h-6 text-orange-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Activities</h4>
                            <p className="text-orange-600 font-semibold">$5-10/day</p>
                          </div>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>Free temples & beaches</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>Budget tours: $10-20</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>Markets & walking: Free</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-orange-100 rounded-xl p-6 text-center">
                      <p className="text-lg font-semibold text-orange-900">
                        <span className="text-3xl font-bold">$30-50</span> per day
                      </p>
                      <p className="text-sm text-orange-700 mt-2">Perfect for backpackers and budget-conscious travelers</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-blue-50 border-2 border-pink-200 rounded-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-pink-500 to-blue-500 p-8 text-white">
                    <div className="flex items-center gap-4">
                      <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                        <MapPin className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-semibold mb-2">Mid-Range Traveler</h3>
                        <p className="text-2xl font-light text-pink-50">$80-150 per day</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-white rounded-xl p-6 border border-pink-200">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-pink-100 p-3 rounded-lg">
                            <Home className="w-6 h-6 text-[#2B5D8C]" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Accommodation</h4>
                            <p className="text-[#2B5D8C] font-semibold">$30-60/night</p>
                          </div>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>3-star hotels: $30-50</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>Nice guesthouses: $25-40</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>Boutique hotels: $50-80</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-xl p-6 border border-pink-200">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-pink-100 p-3 rounded-lg">
                            <Utensils className="w-6 h-6 text-[#2B5D8C]" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Food</h4>
                            <p className="text-[#2B5D8C] font-semibold">$25-40/day</p>
                          </div>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>Restaurant meals: $8-15</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>Air-con restaurants: $10-20</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>Occasional nice dinner: $20-30</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-xl p-6 border border-pink-200">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-pink-100 p-3 rounded-lg">
                            <Car className="w-6 h-6 text-[#2B5D8C]" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Transportation</h4>
                            <p className="text-[#2B5D8C] font-semibold">$10-20/day</p>
                          </div>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>Taxis/Grab: $5-15</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>Occasional long-distance: varies</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>Airport transfers: $10-15</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-xl p-6 border border-pink-200">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-pink-100 p-3 rounded-lg">
                            <Activity className="w-6 h-6 text-[#2B5D8C]" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Activities</h4>
                            <p className="text-[#2B5D8C] font-semibold">$20-40/day</p>
                          </div>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>Paid attractions: $10-20</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>Tours & experiences: $30-60</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>Massages: $10-15</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-pink-100 rounded-xl p-6 text-center">
                      <p className="text-lg font-semibold text-[#2B5D8C]">
                        <span className="text-3xl font-bold">$80-150</span> per day
                      </p>
                      <p className="text-sm text-[#2B5D8C] mt-2">Most popular choice for comfortable travel with good value</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
                    <div className="flex items-center gap-4">
                      <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                        <Activity className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-semibold mb-2">Luxury Traveler</h3>
                        <p className="text-2xl font-light text-purple-50">$200-500+ per day</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-white rounded-xl p-6 border border-purple-200">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-purple-100 p-3 rounded-lg">
                            <Home className="w-6 h-6 text-purple-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Accommodation</h4>
                            <p className="text-purple-600 font-semibold">$100-400+/night</p>
                          </div>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>5-star hotels: $150-300</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>Luxury resorts: $200-500+</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>Private villas: $300-1000+</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-xl p-6 border border-purple-200">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-purple-100 p-3 rounded-lg">
                            <Utensils className="w-6 h-6 text-purple-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Food</h4>
                            <p className="text-purple-600 font-semibold">$60-150+/day</p>
                          </div>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>Fine dining: $50-100 per meal</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>Michelin restaurants: $100-200+</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>Hotel dining & bars: $30-80</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-xl p-6 border border-purple-200">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-purple-100 p-3 rounded-lg">
                            <Car className="w-6 h-6 text-purple-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Transportation</h4>
                            <p className="text-purple-600 font-semibold">$30-100+/day</p>
                          </div>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>Private drivers: $50-100/day</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>Luxury car rentals: $80-200/day</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>Private transfers: $30-80</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-xl p-6 border border-purple-200">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-purple-100 p-3 rounded-lg">
                            <Activity className="w-6 h-6 text-purple-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Activities</h4>
                            <p className="text-purple-600 font-semibold">$50-200+/day</p>
                          </div>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>Private tours: $100-300</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>Spa treatments: $50-200</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>VIP experiences: $200-500+</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-purple-100 rounded-xl p-6 text-center">
                      <p className="text-lg font-semibold text-purple-900">
                        <span className="text-3xl font-bold">$200-500+</span> per day
                      </p>
                      <p className="text-sm text-purple-700 mt-2">Premium experiences with world-class service and amenities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-12 mt-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-pink-100 p-3 rounded-lg">
                  <DollarSign className="w-8 h-8 text-[#2B5D8C]" />
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 uppercase tracking-wide m-0">
                  Specific Costs
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Utensils className="w-6 h-6 text-[#2B5D8C]" />
                    Food & Drink
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span>Street food meal</span>
                      <span className="font-semibold text-[#2B5D8C]">$1-3</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span>Local restaurant meal</span>
                      <span className="font-semibold text-[#2B5D8C]">$3-5</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span>Mid-range restaurant</span>
                      <span className="font-semibold text-[#2B5D8C]">$8-15</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span>Fine dining</span>
                      <span className="font-semibold text-[#2B5D8C]">$30-100+</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span>Beer (local bar)</span>
                      <span className="font-semibold text-[#2B5D8C]">$2-3</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span>Coffee (local shop)</span>
                      <span className="font-semibold text-[#2B5D8C]">$1-2</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Water bottle (7-Eleven)</span>
                      <span className="font-semibold text-[#2B5D8C]">$0.30-0.50</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Car className="w-6 h-6 text-[#2B5D8C]" />
                    Transportation
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span>BTS/MRT (Bangkok)</span>
                      <span className="font-semibold text-[#2B5D8C]">$0.50-1.50</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span>Taxi (per km)</span>
                      <span className="font-semibold text-[#2B5D8C]">$0.30-0.50</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span>Grab/Bolt ride (short)</span>
                      <span className="font-semibold text-[#2B5D8C]">$3-8</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span>Tuk-tuk (negotiated)</span>
                      <span className="font-semibold text-[#2B5D8C]">$3-10</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span>Motorbike rental (day)</span>
                      <span className="font-semibold text-[#2B5D8C]">$5-10</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span>Car rental (day)</span>
                      <span className="font-semibold text-[#2B5D8C]">$30-80</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Airport rail link (Bangkok)</span>
                      <span className="font-semibold text-[#2B5D8C]">$1.50</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Activity className="w-6 h-6 text-[#2B5D8C]" />
                    Activities & Attractions
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span>Temple entry (most)</span>
                      <span className="font-semibold text-[#2B5D8C]">Free</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span>Grand Palace</span>
                      <span className="font-semibold text-[#2B5D8C]">$15</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span>National park entry</span>
                      <span className="font-semibold text-[#2B5D8C]">$6-10</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span>Thai massage (1 hour)</span>
                      <span className="font-semibold text-[#2B5D8C]">$8-15</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span>Cooking class</span>
                      <span className="font-semibold text-[#2B5D8C]">$30-50</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span>Island day tour</span>
                      <span className="font-semibold text-[#2B5D8C]">$30-80</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Scuba diving (2 dives)</span>
                      <span className="font-semibold text-[#2B5D8C]">$60-100</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <ShoppingBag className="w-6 h-6 text-[#2B5D8C]" />
                    Shopping & Miscellaneous
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span>SIM card (tourist)</span>
                      <span className="font-semibold text-[#2B5D8C]">$10-20</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span>Laundry (per kg)</span>
                      <span className="font-semibold text-[#2B5D8C]">$1-2</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span>Sunscreen (local brand)</span>
                      <span className="font-semibold text-[#2B5D8C]">$3-8</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span>T-shirt (market)</span>
                      <span className="font-semibold text-[#2B5D8C]">$3-8</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span>Haircut</span>
                      <span className="font-semibold text-[#2B5D8C]">$5-15</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span>Gym day pass</span>
                      <span className="font-semibold text-[#2B5D8C]">$5-15</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Movie ticket</span>
                      <span className="font-semibold text-[#2B5D8C]">$5-8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-12 mt-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-pink-100 p-3 rounded-lg">
                  <Lightbulb className="w-8 h-8 text-[#2B5D8C]" />
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 uppercase tracking-wide m-0">
                  Money-Saving Tips
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-pink-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Eat Like a Local</h3>
                      <p className="text-gray-700 text-sm mb-0">
                        Street food and local markets offer authentic Thai cuisine at a fraction of restaurant prices. A full meal costs $1-3 and is often better than tourist restaurants.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-pink-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Use Public Transport</h3>
                      <p className="text-gray-700 text-sm mb-0">
                        Bangkok's BTS and MRT are clean, fast, and cheap ($0.50-1.50). Download the Grab app for fair-priced rides elsewhere. Avoid tuk-tuks in tourist areas.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-pink-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Book in Advance</h3>
                      <p className="text-gray-700 text-sm mb-0">
                        Accommodation, flights, and tours are significantly cheaper when booked ahead. Last-minute bookings during peak season can cost 2-3x more.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-pink-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Travel Off-Peak</h3>
                      <p className="text-gray-700 text-sm mb-0">
                        Visit during shoulder season (May-June, September-October). Hotels are 30-50% cheaper, attractions less crowded, and you'll get better deals everywhere.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-pink-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Withdraw Wisely</h3>
                      <p className="text-gray-700 text-sm mb-0">
                        ATMs charge 220 THB ($6) per withdrawal. Take out larger amounts less frequently. Use cards with no foreign transaction fees to save 3-5%.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-pink-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Shop at 7-Eleven & Markets</h3>
                      <p className="text-gray-700 text-sm mb-0">
                        7-Elevens are everywhere with fair prices for water, snacks, and toiletries. Local markets beat hotel shops by 50-70%. Negotiate at night markets.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-pink-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Attractions First</h3>
                      <p className="text-gray-700 text-sm mb-0">
                        Most temples, beaches, parks, and markets are free. Spend your first days exploring these before paying for attractions. Many are Thailand's best experiences.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-pink-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Learn Basic Thai</h3>
                      <p className="text-gray-700 text-sm mb-0">
                        Knowing simple phrases helps you get local prices instead of tourist prices. "Mai phaeng" (not expensive) and numbers are essential for bargaining.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mt-8">
                <div className="flex items-start gap-3">
                  <TrendingDown className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-900 mb-2 mt-0">Budget Reality Check</h3>
                    <p className="text-yellow-800 mb-0">
                      Most travelers find their actual spending falls between budget and mid-range ($50-100/day). Budget for mid-range and you'll have flexibility for splurges and emergencies without financial stress.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-12 mt-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-pink-100 p-3 rounded-lg">
                  <MapPin className="w-8 h-8 text-[#2B5D8C]" />
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 uppercase tracking-wide m-0">
                  Regional Price Differences
                </h2>
              </div>

              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Bangkok</h3>
                      <p className="text-sm text-gray-600">Capital city, tourist hub</p>
                    </div>
                    <div className="bg-orange-100 text-orange-700 px-4 py-2 rounded-lg font-semibold">
                      Mid-High
                    </div>
                  </div>
                  <p className="text-gray-700">
                    More expensive than other regions. Accommodation 20-30% higher. Great public transport saves money. Restaurants and attractions pricier in tourist zones.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Chiang Mai</h3>
                      <p className="text-sm text-gray-600">Northern city, digital nomad haven</p>
                    </div>
                    <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-semibold">
                      Budget
                    </div>
                  </div>
                  <p className="text-gray-700">
                    One of Thailand's cheapest regions. Long-term accommodation very affordable. Excellent value for food and services. Popular with budget travelers and remote workers.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Phuket & Koh Samui</h3>
                      <p className="text-sm text-gray-600">Popular islands</p>
                    </div>
                    <div className="bg-red-100 text-red-700 px-4 py-2 rounded-lg font-semibold">
                      Expensive
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Most expensive areas in Thailand. Tourist prices standard. Accommodation 30-50% higher than elsewhere. Limited public transport increases costs. Better value in low season.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Krabi & Smaller Islands</h3>
                      <p className="text-sm text-gray-600">Less developed areas</p>
                    </div>
                    <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-semibold">
                      Budget-Mid
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Better value than Phuket/Samui. More authentic experiences. Budget and mid-range options plentiful. Food and activities reasonably priced outside main tourist spots.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Isaan & Rural Areas</h3>
                      <p className="text-sm text-gray-600">Northeast & countryside</p>
                    </div>
                    <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-semibold">
                      Very Budget
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Thailand's cheapest region. Few tourists means local prices everywhere. Incredible value for authentic experiences. Limited English and tourist infrastructure but extremely affordable.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-12 mt-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-pink-100 p-3 rounded-lg">
                  <Calendar className="w-8 h-8 text-[#2B5D8C]" />
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 uppercase tracking-wide m-0">
                  Sample Trip Costs
                </h2>
              </div>

              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Get a realistic picture of what your entire Thailand trip might cost based on different travel styles and durations.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-300 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <ShoppingBag className="w-10 h-10 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">Budget Travel</h3>
                      <p className="text-orange-600 font-medium">$30-50 per day</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-4 border border-orange-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-900">1 Week in Thailand</span>
                        <span className="text-2xl font-bold text-orange-600">$250-400</span>
                      </div>
                      <p className="text-sm text-gray-600">Perfect for backpackers exploring multiple cities</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-orange-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-900">2 Weeks in Thailand</span>
                        <span className="text-2xl font-bold text-orange-600">$500-800</span>
                      </div>
                      <p className="text-sm text-gray-600">Comprehensive budget tour of Thailand</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-orange-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-900">1 Month in Thailand</span>
                        <span className="text-2xl font-bold text-orange-600">$1,000-1,600</span>
                      </div>
                      <p className="text-sm text-gray-600">Long-term travel with better accommodation deals</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-blue-50 border-2 border-pink-200 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-pink-100 p-3 rounded-lg">
                      <MapPin className="w-10 h-10 text-[#2B5D8C]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">Mid-Range Travel</h3>
                      <p className="text-[#2B5D8C] font-medium">$80-150 per day</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-4 border border-pink-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-900">1 Week in Thailand</span>
                        <span className="text-2xl font-bold text-[#2B5D8C]">$600-1,000</span>
                      </div>
                      <p className="text-sm text-gray-600">Comfortable hotels and varied experiences</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-pink-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-900">2 Weeks in Thailand</span>
                        <span className="text-2xl font-bold text-[#2B5D8C]">$1,200-2,200</span>
                      </div>
                      <p className="text-sm text-gray-600">Most popular choice for complete Thailand experience</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-pink-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-900">1 Month in Thailand</span>
                        <span className="text-2xl font-bold text-[#2B5D8C]">$2,500-4,000</span>
                      </div>
                      <p className="text-sm text-gray-600">Extended stay with comfort and flexibility</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-2xl p-8 md:col-span-2">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <Activity className="w-10 h-10 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">Luxury Travel</h3>
                      <p className="text-purple-600 font-medium">$200-500+ per day</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-xl p-4 border border-purple-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-900">1 Week</span>
                        <span className="text-2xl font-bold text-purple-600">$1,500-3,500</span>
                      </div>
                      <p className="text-sm text-gray-600">5-star hotels and premium experiences</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-purple-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-900">2 Weeks</span>
                        <span className="text-2xl font-bold text-purple-600">$3,000-7,000</span>
                      </div>
                      <p className="text-sm text-gray-600">Luxury resorts and private tours</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-purple-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-900">1 Month</span>
                        <span className="text-2xl font-bold text-purple-600">$6,000-15,000+</span>
                      </div>
                      <p className="text-sm text-gray-600">Ultimate luxury Thailand experience</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">Don't Forget Flight Costs!</h4>
                    <p className="text-blue-800 mb-0">
                      These estimates are for <strong>in-country expenses only</strong>. International flights to Thailand typically range from <strong>$400-1,500</strong> depending on your origin, season, and how far in advance you book.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-12 mt-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-pink-100 p-3 rounded-lg">
                  <DollarSign className="w-8 h-8 text-[#2B5D8C]" />
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 uppercase tracking-wide m-0">
                  Money & Payment Tips
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-pink-100 p-3 rounded-lg">
                      <DollarSign className="w-8 h-8 text-[#2B5D8C]" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 m-0">ATMs</h3>
                  </div>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="mb-0"><strong>220 THB ($6) fee per withdrawal</strong> at most Thai ATMs</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="mb-0">Use cards with high withdrawal limits to minimize fees</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="mb-0">Withdraw larger amounts less frequently</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="mb-0">Always decline currency conversion and accept charges in THB</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-pink-100 p-3 rounded-lg">
                      <DollarSign className="w-8 h-8 text-[#2B5D8C]" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 m-0">Currency Exchange</h3>
                  </div>
                  <div className="space-y-3 text-gray-700">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <p className="text-sm font-semibold text-green-800 mb-1">BEST RATES</p>
                      <p className="mb-0 text-green-900">Banks (Bangkok Bank, Siam Commercial)</p>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                      <p className="text-sm font-semibold text-yellow-800 mb-1">GOOD RATES</p>
                      <p className="mb-0 text-yellow-900">Street exchange booths (Superrich, Vasu)</p>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <p className="text-sm font-semibold text-red-800 mb-1">AVOID</p>
                      <p className="mb-0 text-red-900">Hotels and airports (worst rates, up to 10% loss)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-pink-100 p-3 rounded-lg">
                      <DollarSign className="w-8 h-8 text-[#2B5D8C]" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 m-0">Credit Cards</h3>
                  </div>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="mb-0"><strong>Widely accepted</strong> in cities, malls, and hotels</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="mb-0">Visa and Mastercard most common</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <p className="mb-0">3% foreign transaction fee on most cards (get no-fee travel cards)</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <p className="mb-0">Small shops, markets, and street vendors = cash only</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-pink-100 p-3 rounded-lg">
                      <DollarSign className="w-8 h-8 text-[#2B5D8C]" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 m-0">Cash Usage</h3>
                  </div>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="mb-0"><strong>Cash is still king</strong> for small purchases</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="mb-0">Always carry 1,000-2,000 THB ($30-60) in small bills</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="mb-0">Street food, tuk-tuks, markets require cash</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="mb-0">20 and 100 THB notes most useful for daily spending</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-blue-50 border border-pink-200 rounded-xl p-8 mt-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Lightbulb className="w-6 h-6 text-[#2B5D8C]" />
                  Best Cards for Thailand Travel
                </h4>
                <div className="grid md:grid-cols-3 gap-4 text-gray-700">
                  <div>
                    <p className="font-semibold text-[#2B5D8C] mb-1">No Foreign Transaction Fees</p>
                    <p className="text-sm mb-0">Saves 3% on every purchase</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#2B5D8C] mb-1">ATM Fee Reimbursement</p>
                    <p className="text-sm mb-0">Some banks refund Thai ATM fees</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#2B5D8C] mb-1">Travel Rewards</p>
                    <p className="text-sm mb-0">Earn points/miles on Thailand spending</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 via-[#2B5D8C] to-blue-900 text-white rounded-2xl p-12 text-center mt-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-white bg-opacity-10 p-6 rounded-full">
                    <AlertCircle className="w-16 h-16 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-light mb-4 uppercase tracking-wide">
                  Need Help Planning Your Budget?
                </h3>
                <p className="text-xl text-gray-300 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
                  Chat with our experts for personalized budget advice based on your travel style!
                </p>
                <button
                  onClick={() => {
                    const chatWidget = document.querySelector('[data-chat-button]');
                    if (chatWidget) {
                      (chatWidget as HTMLElement).click();
                    }
                  }}
                  className="inline-flex items-center gap-2 bg-white text-gray-900 px-10 py-5 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 uppercase tracking-wider shadow-xl"
                >
                  <span>Get Budget Tips</span>
                  <span className="text-[#2B5D8C]">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <YouMayAlsoLike />
    </div>
  );
}
