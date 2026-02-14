import {
  Waves,
  Sun,
  Palmtree,
  Users,
  PartyPopper,
  Fish,
  Heart,
  Camera,
  MapPin,
  Calendar,
  AlertCircle,
  Check,
  X,
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { usePageMeta } from '../hooks/usePageMeta';
import RelatedGuides from '../components/RelatedGuides';

interface Beach {
  name: string;
  location: string;
  description: string;
  bestFor: string;
  season: string;
  image: string;
}

interface BeachCategory {
  category: string;
  icon: typeof Users;
  color: string;
  beaches: string[];
}

export default function BestBeachesPage() {
  usePageMeta({
    title: 'Best Beaches in Thailand 2024 - Top Islands & Beach Guide',
    description:
      'Discover the best beaches in Thailand across 1400+ islands. From party beaches to quiet paradise, find your perfect beach destination.',
  });

  const topBeaches: Beach[] = [
    {
      name: 'Railay Beach',
      location: 'Krabi',
      description:
        'Dramatic limestone cliffs tower over crystal-clear turquoise water. Accessible only by longtail boat, this secluded paradise offers world-class rock climbing and stunning scenery.',
      bestFor: 'Rock climbing, scenery, adventure',
      season: 'November - April',
      image: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      name: 'Maya Bay',
      location: 'Koh Phi Phi',
      description:
        'Made famous by the movie "The Beach," this stunning bay is surrounded by towering cliffs. Note: Temporarily closed for ecosystem restoration. Check current status before visiting.',
      bestFor: 'Photography, swimming, snorkeling',
      season: 'November - March',
      image: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      name: 'Phra Nang Beach',
      location: 'Krabi',
      description:
        'Often rated as one of the most beautiful beaches in the world, featuring a famous cave shrine, crystal-clear water, and dramatic limestone cliffs creating a breathtaking backdrop.',
      bestFor: 'Photography, swimming, cave exploring',
      season: 'November - April',
      image: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      name: 'Sunrise Beach',
      location: 'Koh Lipe',
      description:
        'Pristine white sand beach with excellent snorkeling and vibrant coral reefs just offshore. Watch stunning sunrises and enjoy a more relaxed, less developed island atmosphere.',
      bestFor: 'Snorkeling, relaxation, sunrises',
      season: 'November - April',
      image: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      name: 'Chaweng Beach',
      location: 'Koh Samui',
      description:
        'The longest and most developed beach on Koh Samui, offering everything from luxury resorts to budget bungalows. Vibrant nightlife, excellent dining, and water sports galore.',
      bestFor: 'Nightlife, dining, activities, shopping',
      season: 'February - August',
      image: 'https://images.pexels.com/photos/1007066/pexels-photo-1007066.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      name: 'Kata Beach',
      location: 'Phuket',
      description:
        'Family-friendly beach with clean sand, gentle waves (most of the year), and good surf during monsoon season. Less crowded than Patong, with a nice selection of restaurants and shops.',
      bestFor: 'Families, surfing, swimming',
      season: 'November - April',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  const beachCategories: BeachCategory[] = [
    {
      category: 'Best for Families',
      icon: Users,
      color: 'text-blue-600',
      beaches: ['Kata Beach (Phuket)', 'Chaweng Beach (Koh Samui)', 'Klong Dao Beach (Koh Lanta)'],
    },
    {
      category: 'Best for Partying',
      icon: PartyPopper,
      color: 'text-purple-600',
      beaches: ['Patong Beach (Phuket)', 'Haad Rin (Koh Phangan)', 'Chaweng Beach (Koh Samui)'],
    },
    {
      category: 'Best for Snorkeling',
      icon: Fish,
      color: 'text-cyan-600',
      beaches: ['Koh Tao', 'Koh Lipe', 'Similan Islands'],
    },
    {
      category: 'Best for Peace & Quiet',
      icon: Heart,
      color: 'text-green-600',
      beaches: ['Koh Kood', 'Koh Mak', 'Koh Lanta (southern beaches)'],
    },
    {
      category: 'Most Beautiful',
      icon: Camera,
      color: 'text-orange-600',
      beaches: ['Railay Beach (Krabi)', 'Maya Bay (Phi Phi)', 'Phra Nang Beach (Krabi)'],
    },
  ];

  const beachComparison = [
    {
      beach: 'Railay Beach',
      location: 'Krabi',
      development: 'Medium',
      crowds: 'Moderate',
      access: 'Boat only',
      activities: 'Rock climbing, kayaking',
      bestFor: 'Adventure',
    },
    {
      beach: 'Phra Nang Beach',
      location: 'Krabi',
      development: 'Low',
      crowds: 'High (day trips)',
      access: 'Boat only',
      activities: 'Swimming, cave exploring',
      bestFor: 'Scenery',
    },
    {
      beach: 'Patong Beach',
      location: 'Phuket',
      development: 'Very High',
      crowds: 'Very High',
      access: 'Road access',
      activities: 'Nightlife, water sports',
      bestFor: 'Nightlife',
    },
    {
      beach: 'Kata Beach',
      location: 'Phuket',
      development: 'High',
      crowds: 'Moderate',
      access: 'Road access',
      activities: 'Surfing, swimming',
      bestFor: 'Families',
    },
    {
      beach: 'Chaweng Beach',
      location: 'Koh Samui',
      development: 'Very High',
      crowds: 'High',
      access: 'Road access',
      activities: 'Water sports, dining',
      bestFor: 'Activities',
    },
    {
      beach: 'Sunrise Beach',
      location: 'Koh Lipe',
      development: 'Medium',
      crowds: 'Moderate',
      access: 'Ferry + walk',
      activities: 'Snorkeling, relaxation',
      bestFor: 'Snorkeling',
    },
    {
      beach: 'Koh Tao Beaches',
      location: 'Koh Tao',
      development: 'Medium',
      crowds: 'Moderate',
      access: 'Ferry',
      activities: 'Diving, snorkeling',
      bestFor: 'Diving',
    },
    {
      beach: 'Koh Kood Beaches',
      location: 'Koh Kood',
      development: 'Low',
      crowds: 'Low',
      access: 'Ferry/speedboat',
      activities: 'Relaxation, nature',
      bestFor: 'Solitude',
    },
  ];

  const seasonalGuide = [
    {
      region: 'Andaman Coast (West)',
      locations: 'Phuket, Krabi, Phi Phi, Koh Lanta',
      bestSeason: 'November - April',
      goodMonths: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
      avoidSeason: 'May - October (monsoon, rough seas)',
      avoidMonths: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      color: 'bg-blue-500',
    },
    {
      region: 'Gulf Coast (East)',
      locations: 'Koh Samui, Koh Phangan, Koh Tao',
      bestSeason: 'February - August',
      goodMonths: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      avoidSeason: 'November - January (rough seas)',
      avoidMonths: ['Nov', 'Dec', 'Jan'],
      color: 'bg-green-500',
    },
    {
      region: 'Southern Islands',
      locations: 'Koh Lipe, Similan Islands',
      bestSeason: 'November - April',
      goodMonths: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
      avoidSeason: 'May - October (some islands closed)',
      avoidMonths: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      color: 'bg-orange-500',
    },
  ];

  const allMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const photoGallery = [
    {
      region: 'Krabi & Phi Phi',
      beaches: [
        {
          name: 'Railay Beach',
          image:
            'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
        {
          name: 'Phra Nang Beach',
          image:
            'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
        {
          name: 'Maya Bay',
          image:
            'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
      ],
    },
    {
      region: 'Phuket',
      beaches: [
        {
          name: 'Patong Beach',
          image:
            'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
        {
          name: 'Kata Beach',
          image:
            'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
        {
          name: 'Karon Beach',
          image:
            'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
      ],
    },
    {
      region: 'Gulf Islands',
      beaches: [
        {
          name: 'Chaweng Beach',
          image:
            'https://images.pexels.com/photos/1007066/pexels-photo-1007066.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
        {
          name: 'Koh Tao',
          image:
            'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
        {
          name: 'Koh Phangan',
          image:
            'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
      ],
    },
  ];

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Destinations', path: '/destinations' },
          { label: 'Best Beaches', path: '/best-beaches' },
        ]}
      />

      <div className="bg-gradient-to-b from-cyan-900 to-cyan-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Waves className="w-8 h-8 text-cyan-300" />
              <span className="text-cyan-300 font-semibold tracking-wider uppercase text-sm">
                Paradise Awaits
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 uppercase tracking-[3px]">
              Best Beaches
              <br />
              <span className="text-cyan-300">in Thailand</span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-cyan-100 leading-relaxed">
                Thailand has over 1,400 islands and thousands of beaches. Find the perfect beach for your trip.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Top Beach Destinations
              </h2>
              <div className="w-24 h-1 bg-cyan-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topBeaches.map((beach, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-gray-100"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={beach.image}
                      alt={beach.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                      <div className="flex items-center gap-2">
                        <Sun className="w-4 h-4 text-orange-500" />
                        <span className="text-sm font-semibold text-gray-900">{beach.season}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-bold text-gray-900">{beach.name}</h3>
                      <MapPin className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                    </div>
                    <p className="text-cyan-600 font-semibold mb-3">{beach.location}</p>
                    <p className="text-gray-700 leading-relaxed mb-4">{beach.description}</p>
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600 mb-1">Best for:</p>
                      <p className="text-gray-900 font-semibold">{beach.bestFor}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Beaches by Type
              </h2>
              <div className="w-24 h-1 bg-cyan-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find the perfect beach based on what you're looking for
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {beachCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-200 hover:border-cyan-400 transition-colors duration-300 shadow-md"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-white rounded-xl shadow-md">
                        <Icon className={`w-6 h-6 ${category.color}`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                    </div>
                    <ul className="space-y-2">
                      {category.beaches.map((beach, beachIndex) => (
                        <li key={beachIndex} className="flex items-start gap-2">
                          <Palmtree className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{beach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Beach Comparison
              </h2>
              <div className="w-24 h-1 bg-cyan-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Compare different beaches to find your ideal destination
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl shadow-xl border-2 border-gray-200">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-cyan-900 to-cyan-800 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Beach</th>
                    <th className="px-6 py-4 text-left font-semibold">Location</th>
                    <th className="px-6 py-4 text-left font-semibold">Development</th>
                    <th className="px-6 py-4 text-left font-semibold">Crowds</th>
                    <th className="px-6 py-4 text-left font-semibold">Access</th>
                    <th className="px-6 py-4 text-left font-semibold">Activities</th>
                    <th className="px-6 py-4 text-left font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {beachComparison.map((beach, index) => (
                    <tr key={index} className="hover:bg-cyan-50 transition-colors duration-150">
                      <td className="px-6 py-4 font-bold text-gray-900">{beach.beach}</td>
                      <td className="px-6 py-4 text-gray-700">{beach.location}</td>
                      <td className="px-6 py-4 text-gray-700">{beach.development}</td>
                      <td className="px-6 py-4 text-gray-700">{beach.crowds}</td>
                      <td className="px-6 py-4 text-gray-700">{beach.access}</td>
                      <td className="px-6 py-4 text-gray-700">{beach.activities}</td>
                      <td className="px-6 py-4">
                        <span className="inline-block bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {beach.bestFor}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                When to Visit
              </h2>
              <div className="w-24 h-1 bg-cyan-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Thailand's beach seasons vary by coast. Plan accordingly for the best weather.
              </p>
            </div>

            <div className="space-y-8">
              {seasonalGuide.map((region, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200">
                  <div className={`${region.color} text-white p-6`}>
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="w-6 h-6" />
                      <h3 className="text-2xl font-bold">{region.region}</h3>
                    </div>
                    <p className="text-white/90 text-lg">{region.locations}</p>
                  </div>
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-8 mb-6">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Check className="w-5 h-5 text-green-600" />
                          <h4 className="font-bold text-gray-900">Best Season</h4>
                        </div>
                        <p className="text-gray-700 mb-4">{region.bestSeason}</p>
                        <div className="flex flex-wrap gap-2">
                          {region.goodMonths.map((month, monthIndex) => (
                            <span
                              key={monthIndex}
                              className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold"
                            >
                              {month}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <X className="w-5 h-5 text-red-600" />
                          <h4 className="font-bold text-gray-900">Avoid Season</h4>
                        </div>
                        <p className="text-gray-700 mb-4">{region.avoidSeason}</p>
                        <div className="flex flex-wrap gap-2">
                          {region.avoidMonths.map((month, monthIndex) => (
                            <span
                              key={monthIndex}
                              className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold"
                            >
                              {month}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1">Weather Note</h5>
                          <p className="text-gray-700 text-sm">
                            Even during monsoon season, you can still have good weather. Monsoon means daily rain
                            showers (usually in afternoon), not constant rain. Some travelers prefer this time for
                            fewer crowds and lower prices.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border-2 border-cyan-200">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-8 h-8 text-cyan-600" />
                <h3 className="text-2xl font-bold text-gray-900">Seasonal Calendar</h3>
              </div>
              <div className="overflow-x-auto">
                <div className="inline-flex gap-2 min-w-full">
                  {allMonths.map((month, index) => (
                    <div key={index} className="flex-1 min-w-[80px]">
                      <div className="bg-white rounded-lg p-3 shadow-md text-center">
                        <div className="font-bold text-gray-900 mb-2">{month}</div>
                        <div className="space-y-1">
                          {seasonalGuide.map((region, regionIndex) => {
                            const isGood = region.goodMonths.includes(month);
                            return (
                              <div
                                key={regionIndex}
                                className={`h-2 rounded ${
                                  isGood ? region.color : 'bg-gray-300'
                                }`}
                                title={`${region.region}: ${isGood ? 'Good' : 'Avoid'}`}
                              ></div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mt-6 justify-center">
                {seasonalGuide.map((region, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded ${region.color}`}></div>
                    <span className="text-sm font-semibold text-gray-700">{region.region}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Beach Gallery
              </h2>
              <div className="w-24 h-1 bg-cyan-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore Thailand's stunning beaches by region
              </p>
            </div>

            {photoGallery.map((region, regionIndex) => (
              <div key={regionIndex} className="mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-cyan-600" />
                  {region.region}
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {region.beaches.map((beach, beachIndex) => (
                    <div
                      key={beachIndex}
                      className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={beach.image}
                          alt={beach.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h4 className="text-2xl font-bold text-white">{beach.name}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <div className="bg-gradient-to-br from-cyan-900 to-cyan-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex items-start gap-4">
              <Waves className="w-10 h-10 text-cyan-300 flex-shrink-0" />
              <div>
                <h3 className="text-3xl font-bold mb-4">Planning Your Beach Trip?</h3>
                <p className="text-cyan-100 text-lg leading-relaxed mb-6">
                  Remember to check current conditions before you go, especially for islands that may be closed
                  seasonally. Book accommodations in advance during high season (November-February). Consider island
                  hopping to experience different beaches and vibes.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/itineraries"
                    className="inline-block bg-white text-cyan-900 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors duration-200"
                  >
                    View Itineraries
                  </a>
                  <a
                    href="/accommodation"
                    className="inline-block bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors duration-200"
                  >
                    Find Accommodation
                  </a>
                  <a
                    href="/best-time-to-visit"
                    className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-900 transition-colors duration-200"
                  >
                    Best Time to Visit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-b from-gray-100 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RelatedGuides
            guides={[
              {
                title: 'Diving & Snorkeling',
                description: 'Explore underwater paradise',
                link: '/diving-snorkeling-guide',
                image:
                  'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Island Itineraries',
                description: 'Plan your perfect island adventure',
                link: '/itineraries',
                image:
                  'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Best Time to Visit',
                description: 'Find the perfect travel season',
                link: '/best-time-to-visit',
                image:
                  'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
