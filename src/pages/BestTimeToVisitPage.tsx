import { Link } from 'react-router-dom';
import { Calendar, Cloud, Sun, CloudRain, Thermometer, Users, DollarSign, TrendingUp, TrendingDown, Minus, Sparkles, Droplets, Wind } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import YouMayAlsoLike from '../components/YouMayAlsoLike';
import { usePageMeta } from '../hooks/usePageMeta';

interface MonthCardProps {
  month: string;
  weather: string;
  temperature: string;
  crowds: 'Low' | 'Moderate' | 'High' | 'VERY HIGH';
  prices: 'Budget' | 'Moderate' | 'High' | 'PEAK';
  bestFor: string[];
  highlights?: string[];
  notes?: string;
  icon: 'sun' | 'hot' | 'rain';
}

function MonthCard({ month, weather, temperature, crowds, prices, bestFor, highlights, notes, icon }: MonthCardProps) {
  const crowdColors = {
    'Low': 'bg-green-100 text-green-700 border-green-200',
    'Moderate': 'bg-yellow-100 text-yellow-700 border-yellow-200',
    'High': 'bg-orange-100 text-orange-700 border-orange-200',
    'VERY HIGH': 'bg-red-100 text-red-700 border-red-200'
  };

  const priceColors = {
    'Budget': 'bg-green-100 text-green-700 border-green-200',
    'Moderate': 'bg-yellow-100 text-yellow-700 border-yellow-200',
    'High': 'bg-orange-100 text-orange-700 border-orange-200',
    'PEAK': 'bg-red-100 text-red-700 border-red-200'
  };

  const weatherIcons = {
    'sun': <Sun className="w-12 h-12 text-yellow-500" />,
    'hot': <Thermometer className="w-12 h-12 text-red-500" />,
    'rain': <CloudRain className="w-12 h-12 text-blue-500" />
  };

  return (
    <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-3xl font-semibold text-gray-900">{month}</h3>
        <div className="bg-gradient-to-br from-pink-50 to-blue-50 p-3 rounded-xl">
          {weatherIcons[icon]}
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-3">
          <Cloud className="w-5 h-5 text-gray-500" />
          <div>
            <p className="text-sm text-gray-600 mb-0">Weather</p>
            <p className="font-semibold text-gray-900 mb-0">{weather}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Thermometer className="w-5 h-5 text-gray-500" />
          <div>
            <p className="text-sm text-gray-600 mb-0">Temperature</p>
            <p className="font-semibold text-gray-900 mb-0">{temperature}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Users className="w-5 h-5 text-gray-500" />
          <div className="flex-1 flex items-center gap-2">
            <p className="text-sm text-gray-600 mb-0">Crowds:</p>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${crowdColors[crowds]}`}>
              {crowds}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <DollarSign className="w-5 h-5 text-gray-500" />
          <div className="flex-1 flex items-center gap-2">
            <p className="text-sm text-gray-600 mb-0">Prices:</p>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${priceColors[prices]}`}>
              {prices}
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <p className="text-sm font-semibold text-[#d7007f] mb-2">BEST FOR:</p>
        <ul className="space-y-1 mb-4">
          {bestFor.map((item, idx) => (
            <li key={idx} className="text-gray-700 text-sm flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-[#d7007f] flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {highlights && highlights.length > 0 && (
          <div className="bg-pink-50 border border-pink-200 rounded-lg p-3 mb-3">
            {highlights.map((highlight, idx) => (
              <p key={idx} className="text-sm text-[#d7007f] mb-0 font-medium">
                {highlight}
              </p>
            ))}
          </div>
        )}

        {notes && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <p className="text-sm text-yellow-900 mb-0">{notes}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function BestTimeToVisitPage() {
  usePageMeta({
    title: 'Best Time to Visit Thailand 2026 - Weather & Seasonal Guide | ThailandWiki',
    description: 'Find the best time to visit Thailand with month-by-month weather guides, seasonal highlights, festival calendar, and regional climate information.',
  });

  return (
    <div className="min-h-screen bg-white">
      <div
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=1600)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-light mb-6 uppercase tracking-wider">
              Best Time to Visit Thailand
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-4">
              Month-by-Month Weather Guide
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
          { label: 'Best Time to Visit' }
        ]}
      />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-pink-50 to-blue-50 border-l-4 border-[#d7007f] p-8 mb-12 rounded-r-lg">
              <p className="text-gray-800 text-xl leading-relaxed mb-4">
                Thailand has <strong>three main seasons</strong>: cool (Nov-Feb), hot (Mar-May), and rainy (Jun-Oct). The "best" time depends on your priorities: <strong>weather, crowds, or budget</strong>.
              </p>
              <p className="text-gray-800 text-xl leading-relaxed mb-0">
                This guide breaks down each month so you can plan perfectly for your trip.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="bg-gradient-to-br from-blue-50 to-pink-50 border-2 border-blue-200 rounded-xl p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cool Season</h3>
                <p className="text-blue-600 font-semibold mb-2">November - February</p>
                <p className="text-gray-700 text-sm mb-0">Best weather, peak prices</p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Hot Season</h3>
                <p className="text-red-600 font-semibold mb-2">March - May</p>
                <p className="text-gray-700 text-sm mb-0">Very hot, fewer crowds</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-gray-50 border-2 border-gray-300 rounded-xl p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rainy Season</h3>
                <p className="text-gray-600 font-semibold mb-2">June - October</p>
                <p className="text-gray-700 text-sm mb-0">Occasional rain, best prices</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-12">
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 uppercase tracking-wide m-0">
                  Peak Season (Nov-Feb)
                </h2>
              </div>

              <div className="bg-gradient-to-r from-blue-100 to-pink-100 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                <p className="text-blue-900 font-semibold text-lg mb-1">Best Weather: Cool & Dry</p>
                <p className="text-blue-800 mb-0">Perfect conditions for all activities. Expect larger crowds and higher prices, especially around holidays.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <MonthCard
                  month="November"
                  weather="Perfect (Cool & Dry)"
                  temperature="25-32°C / 77-90°F"
                  crowds="Moderate"
                  prices="Moderate"
                  bestFor={[
                    'Everything - festivals, beaches, trekking',
                    'Outdoor activities in comfortable weather',
                    'Starting your trip before peak crowds'
                  ]}
                  highlights={['Loy Krathong - Beautiful lantern festival']}
                  icon="sun"
                />

                <MonthCard
                  month="December"
                  weather="Excellent (Cool & Dry)"
                  temperature="24-31°C / 75-88°F"
                  crowds="VERY HIGH"
                  prices="PEAK"
                  bestFor={[
                    'Christmas and New Year holidays',
                    'Beach destinations',
                    'Island hopping'
                  ]}
                  notes="Book accommodation and flights early! Prices spike around holidays."
                  icon="sun"
                />

                <MonthCard
                  month="January"
                  weather="Perfect (Cool & Dry)"
                  temperature="25-32°C / 77-90°F"
                  crowds="High"
                  prices="PEAK"
                  bestFor={[
                    'Everything - best weather of the year',
                    'Northern Thailand (coolest temperatures)',
                    'Beach relaxation'
                  ]}
                  highlights={['Chinese New Year (late Jan/early Feb)']}
                  icon="sun"
                />

                <MonthCard
                  month="February"
                  weather="Great (Warm & Dry)"
                  temperature="26-33°C / 79-91°F"
                  crowds="Moderate"
                  prices="High"
                  bestFor={[
                    'Beaches and islands',
                    'Outdoor activities before heat arrives',
                    'End of peak season deals'
                  ]}
                  notes="Temperatures starting to rise but still very comfortable."
                  icon="sun"
                />
              </div>
            </div>

            <div className="border-t border-gray-200 pt-12">
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 uppercase tracking-wide m-0">
                  Hot Season (Mar-May)
                </h2>
              </div>

              <div className="bg-gradient-to-r from-red-100 to-orange-100 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
                <p className="text-red-900 font-semibold text-lg mb-1">Weather: HOT & DRY</p>
                <p className="text-red-800 mb-0">High temperatures across Thailand. Best for beach activities and water sports. Fewer tourists mean better deals.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <MonthCard
                  month="March"
                  weather="Very Hot (Dry)"
                  temperature="28-35°C / 82-95°F"
                  crowds="Moderate"
                  prices="Moderate"
                  bestFor={[
                    'Northern mountains (slightly cooler)',
                    'Beach destinations',
                    'Water activities'
                  ]}
                  notes="WARNING: Burning season in North Thailand (air quality issues in Chiang Mai area)"
                  icon="hot"
                />

                <MonthCard
                  month="April"
                  weather="HOTTEST Month"
                  temperature="30-40°C / 86-104°F"
                  crowds="High"
                  prices="Moderate"
                  bestFor={[
                    'Islands and water activities',
                    'Pool/beach relaxation',
                    'Air-conditioned attractions'
                  ]}
                  highlights={['Songkran (April 13-15) - Epic water festival for Thai New Year!']}
                  icon="hot"
                />

                <MonthCard
                  month="May"
                  weather="Hot (Rain Starting)"
                  temperature="28-35°C / 82-95°F"
                  crowds="Low"
                  prices="Moderate"
                  bestFor={[
                    'Avoiding crowds',
                    'Pre-season deals',
                    'Beach destinations (before heavy rain)'
                  ]}
                  notes="Start of rainy season - occasional afternoon showers but still plenty of sunshine."
                  icon="rain"
                />
              </div>
            </div>

            <div className="border-t border-gray-200 pt-12">
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 uppercase tracking-wide m-0">
                  Rainy Season (Jun-Oct)
                </h2>
              </div>

              <div className="bg-gradient-to-r from-blue-100 to-gray-100 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                <p className="text-blue-900 font-semibold text-lg mb-1">Weather: Wet & Humid (but not constant rain!)</p>
                <p className="text-blue-800 mb-0">Don't let "rainy season" scare you off! Usually just 1-2 hours of afternoon showers. Best prices and fewer crowds make this a great time for budget travelers.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <MonthCard
                  month="June"
                  weather="Warm (Afternoon Showers)"
                  temperature="27-33°C / 81-91°F"
                  crowds="Low"
                  prices="Budget"
                  bestFor={[
                    'Budget travelers',
                    'Avoiding crowds',
                    'Experiencing authentic local life'
                  ]}
                  notes="Rain usually limited to 1-2 hours daily. Still plenty of sunshine!"
                  icon="rain"
                />

                <MonthCard
                  month="July"
                  weather="Warm (Afternoon Showers)"
                  temperature="27-33°C / 81-91°F"
                  crowds="Low"
                  prices="Budget"
                  bestFor={[
                    'Digital nomads settling in',
                    'Long-term travelers',
                    'Budget-conscious visitors'
                  ]}
                  notes="Similar to June - short afternoon showers, great value."
                  icon="rain"
                />

                <MonthCard
                  month="August"
                  weather="Wet Season Peak"
                  temperature="27-32°C / 81-90°F"
                  crowds="Low"
                  prices="Budget"
                  bestFor={[
                    'Long-term stays',
                    'Digital nomads',
                    'Experiencing Thai culture'
                  ]}
                  notes="WARNING: Some islands/activities may close. Check before booking."
                  icon="rain"
                />

                <MonthCard
                  month="September"
                  weather="Wettest Month"
                  temperature="26-31°C / 79-88°F"
                  crowds="Low"
                  prices="Budget"
                  bestFor={[
                    'Bangkok city exploration',
                    'Budget travel',
                    'Avoiding tourists'
                  ]}
                  notes="WARNING: West coast islands get heavy rain. Consider Bangkok or east coast."
                  icon="rain"
                />

                <MonthCard
                  month="October"
                  weather="Wet (Transitioning)"
                  temperature="26-31°C / 79-88°F"
                  crowds="Low"
                  prices="Budget"
                  bestFor={[
                    'End-of-season deals',
                    'Pre-peak season travel',
                    'Cultural experiences'
                  ]}
                  notes="Rain decreasing by end of month. Good transition period."
                  icon="rain"
                />
              </div>
            </div>

            <div className="border-t border-gray-200 pt-12">
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 uppercase tracking-wide m-0">
                  Quick Reference
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gradient-to-br from-blue-50 to-pink-50 border-2 border-blue-300 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Sun className="w-8 h-8 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-0">Best Overall Weather</h3>
                  </div>
                  <p className="text-3xl font-bold text-blue-600 mb-0">December - February</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-8 h-8 text-green-600" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-0">Least Crowds</h3>
                  </div>
                  <p className="text-3xl font-bold text-green-600 mb-0">June - September</p>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-pink-50 border-2 border-emerald-300 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <DollarSign className="w-8 h-8 text-emerald-600" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-0">Best Prices</h3>
                  </div>
                  <p className="text-3xl font-bold text-emerald-600 mb-0">June - October</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-8 h-8 text-purple-600" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-0">Best Festivals</h3>
                  </div>
                  <p className="text-lg font-bold text-purple-600 mb-1">Nov (Loy Krathong)</p>
                  <p className="text-lg font-bold text-purple-600 mb-0">Apr (Songkran)</p>
                </div>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-200 p-2 rounded-lg">
                    <Wind className="w-6 h-6 text-yellow-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Avoid If Possible</h3>
                    <p className="text-gray-700 mb-1"><strong>March:</strong> Very hot + burning season in North (air quality issues)</p>
                    <p className="text-gray-700 mb-0"><strong>September:</strong> Wettest month, especially on west coast islands</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-12">
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 uppercase tracking-wide m-0">
                  Regional Differences
                </h2>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8">
                <p className="text-amber-900 font-semibold text-lg mb-0">
                  Thailand is a large country with different weather patterns in each region. Here's what you need to know:
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Bangkok & Central Thailand</h3>
                    <p className="text-gray-700 mb-0">Less affected by rainy season. Hot year-round. Best: November-February. Manageable: Year-round.</p>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Northern Thailand (Chiang Mai, Pai)</h3>
                    <p className="text-gray-700 mb-0">Cool season is gorgeous (Nov-Feb). Hot season has burning/air quality issues (Mar-Apr). Rainy: Jun-Oct.</p>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">West Coast Islands (Phuket, Krabi, Phi Phi)</h3>
                    <p className="text-gray-700 mb-0">Perfect: Nov-Apr. Rainy season: Jun-Oct (can be very wet in Sep-Oct).</p>
                  </div>
                </div>

                <div className="bg-white border-2 border-pink-200 rounded-xl p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-pink-50">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">East Coast Islands (Koh Samui, Koh Phangan, Koh Tao)</h3>
                    <div className="bg-pink-100 border border-pink-200 rounded-lg p-3 mb-2">
                      <p className="text-[#d7007f] font-semibold mb-0">WARNING: OPPOSITE PATTERN! Rainy: Oct-Dec. Best: Jan-Sep.</p>
                    </div>
                    <p className="text-gray-700 mb-0">Great alternative during west coast rainy season!</p>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Isaan (Northeast)</h3>
                    <p className="text-gray-700 mb-0">Very hot: Apr-May (can reach 40°C+). Rainy: Jun-Sep. Cool: Nov-Feb.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-12">
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 uppercase tracking-wide m-0">
                  Our Recommendations
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">First-Time Visitors</h3>
                  <p className="text-lg text-gray-700 mb-3 font-semibold">November - February</p>
                  <p className="text-gray-600 mb-0">Best weather guaranteed. Worth the higher prices for your first Thailand experience.</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Budget Travelers</h3>
                  <p className="text-lg text-gray-700 mb-3 font-semibold">June - September</p>
                  <p className="text-gray-600 mb-0">Cheapest prices, still very enjoyable. Rain usually brief. Great value!</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Beach Lovers</h3>
                  <p className="text-lg text-gray-700 mb-3 font-semibold">December - March</p>
                  <p className="text-gray-600 mb-0">Perfect beach weather. Clear skies, calm seas, ideal for island hopping.</p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-300 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Avoid Crowds</h3>
                  <p className="text-lg text-gray-700 mb-3 font-semibold">May, June, September</p>
                  <p className="text-gray-600 mb-0">Shoulder months = fewer tourists, decent weather, good prices.</p>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-cyan-50 border-2 border-pink-200 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Trekking & Nature</h3>
                  <p className="text-lg text-gray-700 mb-3 font-semibold">November - February</p>
                  <p className="text-gray-600 mb-0">Cool, clear weather perfect for hiking northern mountains and national parks.</p>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-300 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Digital Nomads</h3>
                  <p className="text-lg text-gray-700 mb-3 font-semibold">Year-Round (Jun-Oct = Cheapest)</p>
                  <p className="text-gray-600 mb-0">Any time works! Rainy season offers best value for long-term stays.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 via-[#d7007f] to-blue-900 text-white rounded-2xl p-12 text-center mt-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-light mb-4 uppercase tracking-wide">
                  Questions About When to Visit?
                </h3>
                <p className="text-xl text-gray-300 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
                  Chat with our travel experts for personalized advice on the best time for your Thailand trip!
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
                  <span>Ask Our Experts</span>
                  <span className="text-[#d7007f]">→</span>
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
