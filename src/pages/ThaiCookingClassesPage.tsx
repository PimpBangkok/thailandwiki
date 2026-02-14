import { useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import RelatedGuides from '../components/RelatedGuides';
import { usePageMeta } from '../hooks/usePageMeta';
import {
  ChefHat,
  Clock,
  Users,
  ShoppingBasket,
  Award,
  Heart,
  Globe,
  Star,
  Utensils,
  BookOpen,
  Calendar,
  DollarSign,
  MapPin,
  CheckCircle2,
  Flame,
  Leaf,
  Fish,
  Coffee,
  Sparkles,
  Search,
  Building2,
  Home,
  Laptop,
  Languages,
  CreditCard,
  TrendingDown,
  TrendingUp,
  BadgeCheck,
  Crown,
  Gem,
  Camera,
  Wine,
  Trophy,
  Gift,
  Package,
  Shirt,
  AlertCircle,
  Info,
  HelpCircle,
  Mail,
  Phone,
  Send,
  MessageSquare,
  Quote,
  ExternalLink,
  Instagram,
} from 'lucide-react';

export default function ThaiCookingClassesPage() {
  usePageMeta({
    title: 'Thai Cooking Classes in Thailand: Learn Authentic Thai Cuisine from Master Chefs | Complete Guide 2026',
    description: 'Discover the best Thai cooking classes in Thailand. Learn authentic pad thai, green curry, and more from expert chefs in Bangkok, Chiang Mai, and Phuket. Half-day to multi-day courses available.',
    keywords: 'thai cooking classes, cooking class bangkok, chiang mai cooking class, learn thai cooking, thai food classes, authentic thai cuisine, cooking course thailand',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const classTypes = [
    {
      name: 'Half-Day Classes',
      icon: Clock,
      duration: '3-4 hours',
      dishes: '3-5 recipes',
      includes: ['Market tour', 'Cooking session', 'Recipe booklet'],
      bestFor: 'Travelers with limited time',
      priceRange: '$30-60 USD',
      color: 'from-green-500 to-emerald-600',
      description: 'Half-day cooking classes are the most popular choice among international travelers, offering the perfect balance of cultural immersion and time efficiency. These compact sessions typically begin with an early morning visit to a local Thai market, where your chef guide introduces you to exotic ingredients like galangal, kaffir lime leaves, and Thai basil. You will learn to identify quality produce, understand ingredient substitutions for cooking at home, and discover the essential building blocks of Thai cuisine. After the market tour, you move to the cooking school kitchen where you prepare three to five iconic dishes such as pad thai, green curry, tom yum soup, or mango sticky rice. Classes maintain small group sizes of 6-12 students, ensuring personalized attention from instructors. The hands-on format means you cook your own dishes at individual cooking stations rather than watching demonstrations, and you enjoy the fruits of your labor for lunch. Most schools provide detailed recipe cards and shopping lists so you can recreate these dishes anywhere in the world.',
    },
    {
      name: 'Full-Day Classes',
      icon: Calendar,
      duration: '6-8 hours',
      dishes: '6-8 recipes',
      includes: ['Extended market tour', 'Multiple sessions', 'Full meal', 'Certificate'],
      bestFor: 'Serious food enthusiasts',
      priceRange: '$70-120 USD',
      color: 'from-red-500 to-rose-600',
      description: 'Full-day immersive cooking experiences cater to dedicated food lovers who want comprehensive instruction in Thai culinary arts. These extended classes typically run from 9 AM to 4 PM, beginning with a thorough exploration of Thai markets where you learn not just ingredient identification but also cultural context, cooking philosophy, and regional variations. The cooking portion divides into two or three sessions covering different meal categories: appetizers and soups, main courses and curries, and desserts. You will master six to eight dishes ranging from complex curry pastes made from scratch to delicate spring rolls, fragrant jasmine rice, and traditional sweets. Full-day classes often include instruction in fundamental techniques like proper knife skills, wok handling, balancing the four flavors of Thai cuisine (sweet, sour, salty, spicy), and presentation aesthetics. Many schools offer vegetarian menus and can accommodate dietary restrictions with advance notice. The experience concludes with a certificate of completion and comprehensive recipe book. These classes frequently attract aspiring home cooks, food bloggers, and travelers specifically planning their trip around culinary experiences.',
    },
    {
      name: 'Private Classes',
      icon: Users,
      duration: 'Flexible (2-8 hours)',
      dishes: 'Customized menu',
      includes: ['One-on-one instruction', 'Custom recipes', 'Flexible schedule', 'Dietary accommodations'],
      bestFor: 'Couples, families, special occasions',
      priceRange: '$80-200 USD per person',
      color: 'from-amber-500 to-orange-600',
      description: 'Private cooking classes offer ultimate flexibility and personalization for couples celebrating special occasions, families traveling together, or individuals with specific dietary requirements or learning objectives. Unlike group classes with set menus, private instruction allows you to select exactly which dishes you want to master, whether that is perfecting restaurant-quality pad thai, learning to make curry pastes from scratch, or focusing entirely on vegetarian or vegan Thai cuisine. The chef instructor adapts teaching pace and detail level to your experience, spending extra time on techniques that interest you most. Private classes can be scheduled at times convenient for your itinerary, including early morning, evening, or even multi-day intensive formats. Many cooking schools offer private classes in beautiful settings like traditional Thai houses or gardens, and some provide in-villa instruction at your accommodation. This format proves especially valuable for guests with food allergies, religious dietary restrictions, or children who benefit from focused attention. Private classes frequently include photography time for social media, detailed technique explanations, and the option to explore advanced topics like Thai dessert artistry or regional specialties.',
    },
    {
      name: 'Multi-Day Courses',
      icon: BookOpen,
      duration: '2-7 days',
      dishes: '15-30+ recipes',
      includes: ['Professional instruction', 'Certificate program', 'Advanced techniques', 'Career guidance'],
      bestFor: 'Aspiring chefs, career development',
      priceRange: '$200-1,000 USD',
      color: 'from-emerald-500 to-[#2B5D8C]',
      description: 'Multi-day professional courses transform passionate home cooks into confident Thai cuisine specialists through structured curriculum covering regional variations, advanced techniques, and restaurant-level execution. These intensive programs typically span three to seven days, with each day focusing on specific aspects of Thai cooking: day one covers fundamental ingredients and basic dishes, day two explores Northern Thai cuisine from Chiang Mai, day three delves into Southern coastal flavors, day four teaches Royal Thai cuisine and presentation, and subsequent days cover specialized topics like Thai desserts, street food, or restaurant menu development. Students work with professional-grade equipment, learn bulk preparation techniques, and understand food costing and menu planning. Many programs conclude with a practical exam where students prepare a multi-course Thai meal for evaluation. Graduates receive official certificates recognized by culinary institutions, valuable for career changers, food entrepreneurs planning Thai restaurants, or cooking instructors. Some schools offer advanced courses specifically designed for professional chefs wanting to add Thai specialties to their repertoire. Multi-day courses often include accommodation packages, cultural excursions, and networking opportunities with Thai culinary professionals.',
    },
  ];

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Things to Do', path: '/things-to-do' },
          { label: 'Thai Cooking Classes', path: '/thai-cooking-classes-thailand' },
        ]}
      />

      <div className="bg-gradient-to-br from-green-700 via-emerald-600 to-green-800 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <ChefHat className="w-8 h-8 text-amber-300" />
              <span className="text-amber-300 font-semibold tracking-wider uppercase text-sm">
                Culinary Experiences
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
              Thai Cooking Classes in Thailand
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-red-500 mx-auto mb-8"></div>
            <p className="text-xl sm:text-2xl text-green-50 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover the secrets of Thai cuisine in hands-on cooking classes taught by expert chefs. From Bangkok to Chiang Mai, learn to recreate authentic pad thai, green curry, and more in your own kitchen. Master the art of balancing sweet, sour, salty, and spicy flavors while immersing yourself in Thailand's rich culinary heritage.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-green-100 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-300 fill-amber-300" />
                <span>Expert Instructors</span>
              </div>
              <div className="flex items-center gap-2">
                <ShoppingBasket className="w-5 h-5 text-amber-300" />
                <span>Market Tours Included</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-300" />
                <span>Certificate Options</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-amber-300 fill-amber-300" />
                <span>All Skill Levels</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="h-96 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Thai cooking class with students learning from chef"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-light text-[#252525] mb-12 text-center">
              Why Take a Cooking Class in Thailand?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-amber-500 mx-auto mb-12"></div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Thailand's cooking classes offer far more than recipe instruction - they provide authentic immersion into one of the world's most celebrated culinary traditions. Learning from Thai chefs means understanding traditional techniques passed down through generations, from the precise method of pounding curry pastes in granite mortars to the art of balancing Thailand's signature flavor profile. Unlike Western cooking schools teaching Thai cuisine, classes in Thailand use ingredients at peak freshness and authenticity. You will work with produce picked that morning from local farms, herbs that release their full aromatic potential in Thailand's tropical climate, and specialty ingredients rarely available elsewhere.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The cultural immersion extends beyond the kitchen. Most classes begin with guided market tours where you navigate the sensory overload of Thai fresh markets: vendors selling twenty varieties of chilies, exotic fruits you have never encountered, and aromatic herbs bundled fresh from farms. Your instructor explains not just what ingredients are but how they function in Thai cooking philosophy, the cultural significance of certain dishes, and regional variations across Thailand's diverse culinary landscape. This context transforms cooking from mechanical recipe-following into cultural understanding.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                The hands-on format ensures you develop actual skills rather than passive knowledge. You will personally prepare every dish at your own cooking station, receiving immediate feedback and technique corrections from experienced instructors. This active learning means you leave confident in recreating restaurant-quality Thai dishes anywhere in the world, armed with detailed recipe cards, ingredient substitution guides, and muscle memory from hands-on practice. The social dimension adds another layer of value: cooking alongside fellow travelers from around the world creates natural conversation and often lasting friendships. At prices ranging from just 30 to 120 USD including market tours, ingredients, meals, and instruction, Thai cooking classes deliver exceptional value compared to equivalent experiences in Western countries, making them accessible adventures for budget travelers and luxury tourists alike.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                  <Utensils className="w-10 h-10 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Authentic Techniques</h3>
                  <p className="text-gray-700 text-sm">Learn traditional methods from Thai master chefs using time-honored techniques</p>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-200">
                  <Leaf className="w-10 h-10 text-amber-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Fresh Ingredients</h3>
                  <p className="text-gray-700 text-sm">Work with market-fresh produce and authentic Thai ingredients at peak quality</p>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-6 border-2 border-red-200">
                  <Globe className="w-10 h-10 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Cultural Immersion</h3>
                  <p className="text-gray-700 text-sm">Understand Thai food culture, history, and the philosophy behind the cuisine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-light text-[#252525] mb-4">
              Types of Thai Cooking Classes
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-amber-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect cooking experience for your schedule, skill level, and culinary goals
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {classTypes.map((classType, index) => {
              const Icon = classType.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200 hover:border-green-400 transition-all duration-300 hover:shadow-2xl group"
                >
                  <div className={`bg-gradient-to-r ${classType.color} p-8 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-8 -translate-y-8">
                      <div className="absolute inset-0 bg-white opacity-10 rounded-full"></div>
                    </div>
                    <div className="relative z-10">
                      <Icon className="w-12 h-12 text-white mb-4" />
                      <h3 className="text-3xl font-bold text-white mb-2">{classType.name}</h3>
                      <div className="flex items-center gap-2 text-white/90">
                        <Clock className="w-5 h-5" />
                        <span className="font-semibold">{classType.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-sm text-gray-600 mb-1">Typical Dishes</div>
                        <div className="font-bold text-gray-900">{classType.dishes}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-sm text-gray-600 mb-1">Price Range</div>
                        <div className="font-bold text-green-600">{classType.priceRange}</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="text-sm font-semibold text-gray-700 mb-3">Includes:</div>
                      <div className="grid grid-cols-2 gap-2">
                        {classType.includes.map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6 p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg border border-amber-200">
                      <div className="text-sm font-semibold text-gray-700 mb-1">Best For:</div>
                      <div className="text-gray-900 font-medium">{classType.bestFor}</div>
                    </div>

                    <p className="text-gray-700 leading-relaxed text-sm mb-6">
                      {classType.description}
                    </p>

                    <a
                      href="/contact"
                      className="block w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-bold text-center hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg"
                    >
                      Book This Experience
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-300">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <Sparkles className="w-12 h-12 text-green-600 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Not Sure Which Class to Choose?</h3>
                <p className="text-gray-700 mb-6">
                  Our culinary concierge service helps you select the perfect cooking experience based on your interests, schedule, dietary preferences, and skill level. We have partnerships with the best cooking schools in Bangkok, Chiang Mai, Phuket, and beyond.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors duration-200 shadow-lg"
                >
                  Get Personalized Recommendations
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-light text-[#252525] mb-4">
              Best Cities for Thai Cooking Classes
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-amber-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each destination offers unique culinary experiences, regional specialties, and authentic cooking schools
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200 hover:shadow-2xl transition-all duration-300">
              <div className="h-56 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Bangkok cooking class"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-8 h-8 text-red-600" />
                  <h3 className="text-3xl font-bold text-gray-900">Bangkok</h3>
                </div>
                <div className="mb-4 p-3 bg-gradient-to-br from-red-50 to-rose-50 rounded-lg border border-red-200">
                  <div className="text-sm font-semibold text-gray-700">Average Cost</div>
                  <div className="text-2xl font-bold text-red-600">1,000-3,000 THB</div>
                  <div className="text-xs text-gray-600">($30-90 USD) per person</div>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm mb-6">
                  Bangkok reigns as Thailand's cooking class capital offering unparalleled variety with hundreds of schools catering to every budget and skill level. The city's urban convenience means classes are easily accessible via BTS Skytrain, with concentrations in Silom, Sukhumvit, and Sathorn neighborhoods. Top-rated schools include Baipai Thai Cooking School, known for its traditional Thai house setting and comprehensive market tours; Bangkok Thai Cooking Academy, offering professional-level instruction in modern facilities; Chef LeeZ Thai Cooking Class, praised for intimate group sizes and personalized attention; and Sompong Thai Cooking School, specializing in Royal Thai cuisine and elaborate presentation techniques. Bangkok's unique advantage lies in accessing the largest variety of regional cuisines under one roof-schools teach dishes from all corners of Thailand, from Northern khao soi to Southern massaman curry. Market tours typically visit iconic locations like Khlong Toei Market, Southeast Asia's largest fresh market, or the pristine Or Tor Kor Market, renowned for premium ingredients. Class variety spans from traditional home-style cooking in authentic Thai kitchens to professional chef courses in state-of-the-art culinary facilities. The city accommodates all learning styles with options for large group classes, intimate private sessions, or specialized vegetarian and vegan programs.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">Top Schools</div>
                      <div className="text-gray-600 text-xs">Baipai, Bangkok Thai Cooking Academy, Chef LeeZ, Sompong</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Utensils className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">Specialty</div>
                      <div className="text-gray-600 text-xs">All regional cuisines, Royal Thai dishes, street food</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <ShoppingBasket className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">Markets</div>
                      <div className="text-gray-600 text-xs">Khlong Toei, Or Tor Kor, Chinatown markets</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">Unique Advantage</div>
                      <div className="text-gray-600 text-xs">Largest variety of regional cuisines, easy BTS access</div>
                    </div>
                  </div>
                </div>
                <a
                  href="/bangkok-destination"
                  className="block w-full bg-gradient-to-r from-red-600 to-rose-600 text-white py-3 rounded-lg font-bold text-center hover:from-red-700 hover:to-rose-700 transition-all duration-300"
                >
                  Explore Bangkok Classes
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200 hover:shadow-2xl transition-all duration-300">
              <div className="h-56 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5469173/pexels-photo-5469173.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Chiang Mai cooking class in countryside"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-8 h-8 text-green-600" />
                  <h3 className="text-3xl font-bold text-gray-900">Chiang Mai</h3>
                </div>
                <div className="mb-4 p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <div className="text-sm font-semibold text-gray-700">Average Cost</div>
                  <div className="text-2xl font-bold text-green-600">800-2,500 THB</div>
                  <div className="text-xs text-gray-600">($25-75 USD) per person</div>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm mb-6">
                  Chiang Mai offers Thailand's most authentic farm-to-table cooking experiences, set against the stunning backdrop of Northern Thailand's mountains and rice terraces. The city specializes in traditional Northern Thai cuisine, locally known as Lanna food, which differs significantly from Central Thai dishes with its emphasis on herbs, fermented ingredients, and sticky rice accompaniments. Standout schools include Thai Farm Cooking School, where classes begin with harvesting ingredients directly from organic gardens before cooking in an open-air traditional kitchen; Mama Noi Thai Cookery School, beloved for its warm family atmosphere and generations-old recipes; Asia Scenic Thai Cooking School, offering countryside locations with breathtaking mountain views; and Zabb E Lee Thai Cooking School, known for small class sizes and deep dives into Northern food culture. Market tours explore Warorot Market, Chiang Mai's largest and most authentic market where locals shop, or intimate village markets where farmers sell produce directly. The setting proves magical-many schools operate in traditional teak houses or open-air pavilions surrounded by herb gardens, with some offering mountain or rice paddy views. Cultural bonuses include learning about Lanna food traditions, understanding the historical influence of Burmese and Chinese cuisines on Northern Thai cooking, and discovering ingredients rarely used in other regions like sawtooth coriander and northern Thai chilies.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">Top Schools</div>
                      <div className="text-gray-600 text-xs">Thai Farm Cooking, Mama Noi, Asia Scenic, Zabb E Lee</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Coffee className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">Specialty</div>
                      <div className="text-gray-600 text-xs">Khao Soi, Northern curries, sticky rice dishes, Sai Oua</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Leaf className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">Setting</div>
                      <div className="text-gray-600 text-xs">Beautiful countryside, organic farms, mountain views</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">Unique Advantage</div>
                      <div className="text-gray-600 text-xs">Farm-to-table with organic ingredients, Lanna culture</div>
                    </div>
                  </div>
                </div>
                <a
                  href="/destinations/chiang-mai"
                  className="block w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-bold text-center hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
                >
                  Explore Chiang Mai Classes
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200 hover:shadow-2xl transition-all duration-300">
              <div className="h-56 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Phuket beachside cooking class"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-8 h-8 text-blue-600" />
                  <h3 className="text-3xl font-bold text-gray-900">Phuket</h3>
                </div>
                <div className="mb-4 p-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                  <div className="text-sm font-semibold text-gray-700">Average Cost</div>
                  <div className="text-2xl font-bold text-blue-600">1,500-3,500 THB</div>
                  <div className="text-xs text-gray-600">($45-105 USD) per person</div>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm mb-6">
                  Phuket combines Thailand's famous beach paradise atmosphere with exceptional Southern Thai cooking instruction, creating a unique culinary vacation experience. The island's cooking schools often occupy stunning beachside or hillside locations, with some luxury resorts offering classes in professional-grade facilities with ocean views. Premier schools include Phuket Thai Cooking Academy, featuring modern cooking stations and comprehensive courses covering multiple regional styles; Blue Elephant Cooking School, an upscale option in a beautifully restored Sino-Portuguese mansion teaching Royal Thai cuisine; Pum's Cooking School, celebrated for authentic Southern recipes and warm hospitality; and Mom Tri's Kitchen, an exclusive option within a boutique resort emphasizing organic ingredients and presentation. Phuket's coastal location provides unique access to incredibly fresh seafood and Southern Thai specialties that differ dramatically from Central and Northern cuisines. Market tours visit bustling fresh seafood markets where you select live fish, prawns, and crabs for your dishes, plus local markets featuring Southern ingredients like turmeric, roasted curry pastes, and pungent shrimp paste. The setting combines vacation luxury with culinary education-imagine cooking classes in resort-style facilities with sea breezes, then enjoying your creations while overlooking the Andaman Sea. Many schools perfectly integrate into beach vacation itineraries, offering morning classes that leave afternoons free for beaches and water activities.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">Top Schools</div>
                      <div className="text-gray-600 text-xs">Phuket Thai Cooking Academy, Blue Elephant, Pum's, Mom Tri's</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Fish className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">Specialty</div>
                      <div className="text-gray-600 text-xs">Massaman curry, seafood dishes, Southern-style curries</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Heart className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">Setting</div>
                      <div className="text-gray-600 text-xs">Resort-style schools, beachside locations, ocean views</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">Unique Advantage</div>
                      <div className="text-gray-600 text-xs">Fresh seafood specialties, combine with beach vacation</div>
                    </div>
                  </div>
                </div>
                <a
                  href="/destinations/phuket"
                  className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-bold text-center hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Explore Phuket Classes
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Comparison Guide</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-4 px-4 font-bold text-gray-900">City</th>
                    <th className="text-left py-4 px-4 font-bold text-gray-900">Best For</th>
                    <th className="text-left py-4 px-4 font-bold text-gray-900">Signature Dishes</th>
                    <th className="text-left py-4 px-4 font-bold text-gray-900">Price Range</th>
                    <th className="text-left py-4 px-4 font-bold text-gray-900">Setting</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-red-50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-red-600" />
                        <span className="font-bold text-gray-900">Bangkok</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-700">Variety seekers, urban convenience</td>
                    <td className="py-4 px-4 text-sm text-gray-700">Pad Thai, Tom Yum, Green Curry, Royal Thai</td>
                    <td className="py-4 px-4">
                      <span className="font-bold text-red-600">$30-90</span>
                      <div className="text-xs text-gray-600">1,000-3,000THB </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-700">Urban schools, traditional Thai houses</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-green-50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-green-600" />
                        <span className="font-bold text-gray-900">Chiang Mai</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-700">Authentic experience, nature lovers</td>
                    <td className="py-4 px-4 text-sm text-gray-700">Khao Soi, Sai Oua, Northern Curries</td>
                    <td className="py-4 px-4">
                      <span className="font-bold text-green-600">$25-75</span>
                      <div className="text-xs text-gray-600">800-2,500THB </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-700">Countryside farms, mountain views</td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-blue-600" />
                        <span className="font-bold text-gray-900">Phuket</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-700">Beach vacationers, seafood enthusiasts</td>
                    <td className="py-4 px-4 text-sm text-gray-700">Massaman Curry, Seafood dishes, Southern curries</td>
                    <td className="py-4 px-4">
                      <span className="font-bold text-blue-600">$45-105</span>
                      <div className="text-xs text-gray-600">1,500-3,500THB </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-700">Resort-style, beachside locations</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-light text-[#252525] mb-4">
              What to Expect in a Thai Cooking Class
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your journey from market to table, step by step
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-10 h-10 text-amber-600" />
                <h3 className="text-2xl font-bold text-gray-900">Typical Class Structure</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Most Thai cooking classes follow a well-structured format designed to maximize learning while ensuring an enjoyable, stress-free experience. Your culinary adventure typically begins with convenient hotel pickup or meeting at the cooking school, usually around 9:00-9:30 AM for morning classes or 3:00-3:30 PM for afternoon sessions. The first stop takes you to a vibrant local Thai market for 30-60 minutes of guided exploration, where you discover exotic ingredients like galangal, lemongrass, Thai basil varieties, and aromatic curry pastes while tasting samples of fresh tropical fruits and local snacks. Upon returning to the cooking school, your instructor provides a comprehensive introduction covering Thai cuisine fundamentals, regional cooking differences, essential techniques, and flavor balancing principles that define Thai cooking. Next comes hands-on prep work where you learn traditional methods like grinding curry pastes with mortar and pestle, chopping vegetables with precision, and preparing your individual cooking station. The heart of the experience involves step-by-step cooking instruction for each dish, with your chef demonstrating techniques before you replicate them at your own station. Between cooking sessions, you enjoy your freshly prepared creations family-style alongside fellow students, savoring each dish while discussing flavors and techniques. Before departing, you receive a printed recipe booklet with detailed instructions and ingredient lists for recreating dishes at home, and many schools present completion certificates as memorable keepsakes. Half-day classes typically run 3-4 hours, while full-day immersive experiences span 6-8 hours with expanded menus and more advanced techniques.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg border border-amber-200">
                  <ShoppingBasket className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-gray-900 mb-1">9:00 AM - Market Tour</div>
                    <div className="text-sm text-gray-700">Explore local ingredients, taste tropical fruits and snacks</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <BookOpen className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-gray-900 mb-1">10:00 AM - Introduction</div>
                    <div className="text-sm text-gray-700">Learn Thai cuisine fundamentals and cooking techniques</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                  <ChefHat className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-gray-900 mb-1">10:30 AM - Cooking Session</div>
                    <div className="text-sm text-gray-700">Hands-on preparation of 3-5 authentic Thai dishes</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg border border-rose-200">
                  <Utensils className="w-6 h-6 text-rose-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-gray-900 mb-1">12:30 PM - Enjoy Your Meal</div>
                    <div className="text-sm text-gray-700">Savor your creations family-style with fellow students</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-10 h-10 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">What's Included</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Thai cooking classes deliver exceptional value with comprehensive packages that include everything needed for your culinary journey. Every class provides all ingredients and professional-grade cooking equipment, eliminating any need to bring supplies. The guided market tour with an expert English-speaking guide helps you understand ingredient selection and local food culture. You receive a detailed recipe booklet with measurements, ingredient lists, and step-by-step instructions for every dish prepared, making it easy to recreate Thai flavors back home. Most schools gift you an apron to keep as a souvenir of your experience, often emblazoned with the school's logo. Throughout the session, complimentary drinking water, Thai tea, and sometimes fresh coconut water keep you refreshed. Professional photographers or staff members capture photos of your cooking experience, dishes, and group, sharing digital copies post-class for your memories and social media. Many schools sweeten the package with additional perks like printed cookbooks featuring extended recipe collections, online recipe access through member portals, small gifts such as spice packets or cooking utensils, and convenient hotel pickup and drop-off service within designated areas. These all-inclusive packages ensure you can focus entirely on learning and enjoyment without worrying about logistics or hidden costs.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-900">All Ingredients</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-900">Equipment</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-900">Market Tour</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-900">Recipe Booklet</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-900">Apron Souvenir</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-900">Drinking Water</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-900">Experience Photos</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-900">Certificate</span>
                </div>
              </div>
              <div className="mt-6 p-5 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border-2 border-amber-300">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-gray-900 mb-2">Premium Add-Ons</div>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Hotel pickup & drop-off service</li>
                      <li>Extended cookbook with 50+ recipes</li>
                      <li>Online recipe access & video tutorials</li>
                      <li>Spice packets & cooking utensils gift set</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-light text-[#252525] mb-4">
              Popular Dishes You Will Learn
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master Thailand's most beloved recipes, from street food classics to royal cuisine
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Essential Thai Dishes</h3>
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12 text-center">
              Nearly every cooking class in Thailand covers these essential dishes that represent the core of Thai culinary tradition. These recipes teach fundamental techniques like balancing sweet, sour, salty, and spicy flavors; working with aromatic herbs and pastes; achieving perfect wok heat for stir-frying; and understanding coconut milk's role in curries and desserts. Mastering these classics provides a solid foundation for exploring more advanced Thai recipes and creates a versatile home cooking repertoire that impresses guests and satisfies cravings for authentic Thai flavors long after your trip ends. Most classes allow you to choose dishes from a menu, ensuring you learn recipes that match your taste preferences and dietary requirements, with vegetarian and vegan options readily available at virtually all cooking schools.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Pad Thai"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Flame className="w-5 h-5 text-red-600" />
                    <h4 className="text-xl font-bold text-gray-900">Pad Thai</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Thailand's most famous noodle dish with stir-fried rice noodles, tamarind sauce, egg, peanuts, and bean sprouts
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/8688500/pexels-photo-8688500.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Tom Yum Goong"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Fish className="w-5 h-5 text-orange-600" />
                    <h4 className="text-xl font-bold text-gray-900">Tom Yum Goong</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Iconic spicy and sour shrimp soup with lemongrass, galangal, kaffir lime leaves, and Thai chilies
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Green Curry"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Leaf className="w-5 h-5 text-green-600" />
                    <h4 className="text-xl font-bold text-gray-900">Green Curry</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Aromatic coconut-based curry with fresh green chilies, Thai basil, bamboo shoots, and your choice of protein
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/4871119/pexels-photo-4871119.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Massaman Curry"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Coffee className="w-5 h-5 text-amber-600" />
                    <h4 className="text-xl font-bold text-gray-900">Massaman Curry</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Rich Muslim-influenced curry with potatoes, peanuts, and warming spices like cinnamon and cardamom
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Pad Krapow"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Leaf className="w-5 h-5 text-green-700" />
                    <h4 className="text-xl font-bold text-gray-900">Pad Krapow</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Holy basil stir-fry with minced meat, chilies, and garlic, typically served with rice and fried egg
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1631581/pexels-photo-1631581.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Som Tam"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-green-600" />
                    <h4 className="text-xl font-bold text-gray-900">Som Tam</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Fresh and spicy green papaya salad pounded with mortar and pestle, featuring lime, fish sauce, and peanuts
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Spring Rolls"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Utensils className="w-5 h-5 text-amber-600" />
                    <h4 className="text-xl font-bold text-gray-900">Spring Rolls</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Learn both fresh and fried varieties filled with vegetables, herbs, and protein with sweet chili dipping sauce
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/5622885/pexels-photo-5622885.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Mango Sticky Rice"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="w-5 h-5 text-rose-600" />
                    <h4 className="text-xl font-bold text-gray-900">Mango Sticky Rice</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Thailand's beloved dessert with sweet coconut sticky rice, ripe mango slices, and toasted sesame seeds
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Thai Fried Rice"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Flame className="w-5 h-5 text-orange-600" />
                    <h4 className="text-xl font-bold text-gray-900">Thai Fried Rice</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Fragrant jasmine rice stir-fried with eggs, vegetables, and protein, seasoned with soy sauce and fish sauce
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/4871120/pexels-photo-4871120.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Panang Curry"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Coffee className="w-5 h-5 text-red-600" />
                    <h4 className="text-xl font-bold text-gray-900">Panang Curry</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Thick, rich red curry with peanuts, kaffir lime leaves, and a perfectly balanced sweet-savory flavor profile
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-300 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <Award className="w-10 h-10 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Advanced Dishes in Longer Courses</h3>
                <p className="text-gray-700 mb-4">
                  Full-day and multi-day courses dive deeper into Thai culinary traditions with more complex recipes and specialized regional dishes
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="font-bold text-gray-900 mb-1">Boat Noodles (Kuay Teow Ruea)</div>
                <div className="text-sm text-gray-600">Intense pork or beef noodle soup with herbs and spices</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="font-bold text-gray-900 mb-1">Northern Thai Sausage (Sai Oua)</div>
                <div className="text-sm text-gray-600">Herb-packed fermented pork sausage from Chiang Mai</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="font-bold text-gray-900 mb-1">Thai Fish Cakes (Tod Mun Pla)</div>
                <div className="text-sm text-gray-600">Fragrant fried fish cakes with red curry paste and kaffir lime</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="font-bold text-gray-900 mb-1">Tom Kha Gai</div>
                <div className="text-sm text-gray-600">Creamy coconut chicken soup with galangal and lemongrass</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="font-bold text-gray-900 mb-1">Curry Pastes from Scratch</div>
                <div className="text-sm text-gray-600">Learn to make authentic red, green, and yellow curry pastes</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="font-bold text-gray-900 mb-1">Steamed Fish in Banana Leaf</div>
                <div className="text-sm text-gray-600">Delicate fish steamed with herbs in traditional banana leaf packets</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-300">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <Leaf className="w-12 h-12 text-green-600 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Vegetarian & Vegan Options</h3>
                <p className="text-gray-700 mb-4">
                  Nearly all Thai cooking schools offer comprehensive vegetarian and vegan menus featuring plant-based versions of classic dishes. Tofu, tempeh, and vegetables substitute for meat and seafood, while coconut aminos or light soy sauce replaces fish sauce. You'll learn plant-based versions of curries, stir-fries, soups, and salads that maintain authentic Thai flavors without compromising on taste. Many schools specialize in vegetarian Thai cuisine, and some even grow organic vegetables in their own gardens specifically for plant-based cooking classes.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-900 shadow-sm">Vegan Green Curry</span>
                  <span className="bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-900 shadow-sm">Tofu Pad Thai</span>
                  <span className="bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-900 shadow-sm">Vegetarian Spring Rolls</span>
                  <span className="bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-900 shadow-sm">Mushroom Larb</span>
                  <span className="bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-900 shadow-sm">Vegan Tom Yum</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-light text-[#252525] mb-4">
              How to Choose the Right Cooking Class
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your perfect culinary experience with our comprehensive selection guide
            </p>
          </div>

          <div className="mb-16">
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12 text-center text-lg">
              With hundreds of Thai cooking schools across the country, selecting the ideal class requires considering multiple factors that align with your preferences, schedule, budget, and learning goals. The perfect cooking class for a solo traveler seeking cultural immersion differs dramatically from what suits a family vacation or a serious foodie wanting advanced techniques. Understanding these selection criteria helps you book confidently and ensures your cooking class becomes a highlight of your Thailand adventure rather than a disappointment.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-10 h-10 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Class Size</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Class size dramatically affects your learning experience, instructor attention, and social atmosphere. Smaller groups offer personalized guidance and easier question-asking, while larger classes provide livelier energy and potential friendships with fellow travelers.
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                    <div className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4-8</div>
                      Small Groups
                    </div>
                    <p className="text-sm text-gray-700">Maximum personal attention from chef instructors, intimate setting perfect for asking questions, easier to accommodate special requests, higher price point but premium experience</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <div className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">10-15</div>
                      Medium Groups
                    </div>
                    <p className="text-sm text-gray-700">Balanced social atmosphere with good instructor interaction, most popular format, opportunities to meet other travelers, competitive pricing with quality instruction</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg border border-amber-200">
                    <div className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">20+</div>
                      Large Groups
                    </div>
                    <p className="text-sm text-gray-700">Budget-friendly option with energetic atmosphere, less individual attention, faster pace, best for confident cooks or those prioritizing experience over technique mastery</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg border border-rose-200">
                    <div className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-rose-600" />
                      Private Classes
                    </div>
                    <p className="text-sm text-gray-700">One-on-one or small family groups, completely customized menu and pace, perfect for couples, families with children, or serious food enthusiasts, premium pricing</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <ChefHat className="w-10 h-10 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Teaching Style</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Different schools employ varying teaching methodologies, from demonstration-based classes to fully hands-on experiences where each student prepares complete dishes independently. Your preferred learning style should guide your choice.
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="font-bold text-gray-900 mb-2">Demonstration Style</div>
                    <p className="text-sm text-gray-700">Chef demonstrates technique, students observe then replicate. Good for visual learners, less intimidating for cooking novices, structured and organized approach</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="font-bold text-gray-900 mb-2">Full Hands-On</div>
                    <p className="text-sm text-gray-700">Everyone cooks their own complete dishes at individual stations. Maximum skill development, most immersive experience, better memory retention, requires focus and engagement</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="font-bold text-gray-900 mb-2">Team Cooking</div>
                    <p className="text-sm text-gray-700">Work in pairs or small groups to prepare dishes together. Social and collaborative, great for families or friend groups, shared responsibility reduces pressure</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="font-bold text-gray-900 mb-2">Professional Intensive</div>
                    <p className="text-sm text-gray-700">Technique-focused instruction for serious students, advanced knife skills, professional presentation, deeper understanding of Thai culinary theory and principles</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-10 h-10 text-amber-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Location & Setting</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  The physical environment and location significantly impact your experience, from authentic traditional Thai houses to modern professional kitchens, rural farm settings to luxury resort facilities.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg border border-amber-200">
                    <Home className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-gray-900 mb-1">Traditional Thai House</div>
                      <div className="text-sm text-gray-700">Authentic atmosphere with wooden architecture, open-air kitchens, cultural immersion, charming photo opportunities</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                    <Building2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-gray-900 mb-1">Modern Cooking School</div>
                      <div className="text-sm text-gray-700">Professional-grade equipment, air-conditioned comfort, state-of-the-art facilities, ideal for technique focus</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <Leaf className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-gray-900 mb-1">Farm or Countryside</div>
                      <div className="text-sm text-gray-700">Organic gardens with fresh-picked ingredients, peaceful rural scenery, farm-to-table experience, nature connection</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg border border-rose-200">
                    <Star className="w-6 h-6 text-rose-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-gray-900 mb-1">Resort or Hotel</div>
                      <div className="text-sm text-gray-700">Luxury amenities, convenient access, no transportation needed, often combined with spa or beach activities</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <Utensils className="w-10 h-10 text-red-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Dietary Accommodations</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Most reputable cooking schools accommodate various dietary requirements and preferences. Always verify options when booking to ensure your needs are met without compromising the learning experience.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">Vegetarian & Vegan Options</div>
                      <div className="text-xs text-gray-600">Plant-based versions of all classic dishes available</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">Gluten-Free Modifications</div>
                      <div className="text-xs text-gray-600">Rice noodles and gluten-free soy sauce substitutions</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">Halal Cooking Classes</div>
                      <div className="text-xs text-gray-600">Muslim-friendly ingredients and preparation methods</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">Allergy-Friendly Options</div>
                      <div className="text-xs text-gray-600">Nut-free, shellfish-free, and other allergy accommodations</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-300">
              <div className="flex items-start gap-4">
                <Languages className="w-10 h-10 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Language Considerations</h3>
                  <p className="text-gray-700 mb-4">
                    English instruction is standard at tourist-oriented cooking schools throughout Thailand, with instructors typically possessing excellent communication skills developed through years of teaching international students. However, quality varies, so reviewing recent feedback about instructor clarity is worthwhile. Some premium schools offer instruction in additional languages including German, French, Japanese, Mandarin Chinese, and Spanish, usually at higher price points or with advance booking requirements. If English is not your first language, look for schools with strong visual teaching methods and demonstration components that supplement verbal instruction.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-900 shadow-sm">English (Standard)</span>
                    <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-900 shadow-sm">German</span>
                    <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-900 shadow-sm">French</span>
                    <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-900 shadow-sm">Japanese</span>
                    <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-900 shadow-sm">Mandarin</span>
                    <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-900 shadow-sm">Spanish</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-light text-[#252525] mb-4">
              Booking Your Cooking Class
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Secure your spot with confidence using our comprehensive booking guide
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <Laptop className="w-10 h-10 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Where to Book</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Multiple booking platforms serve Thai cooking classes, each with distinct advantages regarding pricing, selection, user experience, and customer protection. Understanding these differences helps you secure the best deal while ensuring reliable service. Booking directly through cooking school websites often yields the lowest prices as schools avoid platform commission fees, plus you can communicate specific requests directly. However, aggregator platforms provide convenient comparison shopping, verified reviews from thousands of travelers, secure payment processing, and customer service support if issues arise. The ideal booking method depends on whether you prioritize absolute lowest cost or prefer the convenience and security of established booking platforms with robust customer protection policies.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-gray-900">Direct from School Websites</div>
                    <BadgeCheck className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-sm text-gray-700 mb-2">Often best prices, direct communication, customization options</p>
                  <div className="text-xs text-green-700 font-semibold">Best for: Budget-conscious travelers</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-gray-900">Cookly.me</div>
                    <Star className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-sm text-gray-700 mb-2">Largest selection of Thai cooking classes, verified reviews, easy comparison</p>
                  <div className="text-xs text-blue-700 font-semibold">Best for: Comprehensive options</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg border border-amber-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-gray-900">Viator & GetYourGuide</div>
                    <Globe className="w-5 h-5 text-amber-600" />
                  </div>
                  <p className="text-sm text-gray-700 mb-2">Package deals with other activities, strong customer protection, multi-language support</p>
                  <div className="text-xs text-amber-700 font-semibold">Best for: Package travelers</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg border border-rose-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-gray-900">Klook</div>
                    <MapPin className="w-5 h-5 text-rose-600" />
                  </div>
                  <p className="text-sm text-gray-700 mb-2">Asia-focused platform, competitive pricing, frequent promotional discounts</p>
                  <div className="text-xs text-rose-700 font-semibold">Best for: Asia specialists</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg border border-gray-300">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-gray-900">Hotel Concierge</div>
                    <Building2 className="w-5 h-5 text-gray-600" />
                  </div>
                  <p className="text-sm text-gray-700 mb-2">Maximum convenience, no research needed, may include markup</p>
                  <div className="text-xs text-gray-700 font-semibold">Best for: Convenience seekers</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">Essential Booking Tips</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Smart booking practices ensure smooth experiences and help avoid common pitfalls that can diminish your cooking class enjoyment. Follow these proven strategies from experienced travelers to maximize value and minimize stress.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <Calendar className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Book 3-7 Days in Advance</div>
                    <div className="text-sm text-gray-700">Popular schools fill quickly, especially during peak season (November-February). Morning classes book faster than afternoon sessions.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                  <Users className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Confirm Class Size</div>
                    <div className="text-sm text-gray-700">Ask about maximum group size when booking. Schools sometimes advertise "small groups" but allow 15-20 students.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <BadgeCheck className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Check Cancellation Policy</div>
                    <div className="text-sm text-gray-700">Most schools offer free cancellation 24-48 hours before class. Understand refund terms before paying.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-rose-50 rounded-lg border border-rose-200">
                  <MapPin className="w-6 h-6 text-rose-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Confirm Pickup Details</div>
                    <div className="text-sm text-gray-700">Verify pickup location, time, and what happens if running late. Get school's direct contact number.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <Utensils className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Verify Dietary Needs</div>
                    <div className="text-sm text-gray-700">Communicate vegetarian, vegan, allergy, or religious requirements clearly during booking, not day-of.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-cyan-50 rounded-lg border border-cyan-200">
                  <Star className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Read Recent Reviews</div>
                    <div className="text-sm text-gray-700">Check multiple platforms for reviews from last 3-6 months. Look for consistent feedback patterns.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 border-2 border-gray-200 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="w-10 h-10 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-900">Price Ranges & Value Guide</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-8 max-w-4xl">
              Thai cooking class prices vary significantly based on location, class size, duration, included amenities, and school reputation. Understanding typical price ranges for different quality tiers helps you budget appropriately and identify potential red flags. Unusually low prices often indicate large group sizes, abbreviated market tours, or limited hands-on cooking time. Conversely, premium pricing should correlate with tangible benefits like small groups, extended instruction, superior ingredients, or unique settings.
            </p>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-200">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingDown className="w-6 h-6 text-green-600" />
                  <h4 className="font-bold text-gray-900">Budget</h4>
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">$30-50</div>
                <div className="text-sm text-gray-600 mb-3">THB 1,000-1,650</div>
                <div className="text-sm text-gray-700">Basic half-day classes, larger groups (15-20), abbreviated market tours, standard recipes</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-200">
                <div className="flex items-center gap-2 mb-3">
                  <BadgeCheck className="w-6 h-6 text-blue-600" />
                  <h4 className="font-bold text-gray-900">Mid-Range</h4>
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">$50-80</div>
                <div className="text-sm text-gray-600 mb-3">THB 1,650-2,650</div>
                <div className="text-sm text-gray-700">Full market tour, medium groups (10-15), comprehensive instruction, recipe booklet, photos</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-amber-200">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-6 h-6 text-amber-600" />
                  <h4 className="font-bold text-gray-900">Premium</h4>
                </div>
                <div className="text-3xl font-bold text-amber-600 mb-2">$80-150</div>
                <div className="text-sm text-gray-600 mb-3">THB 2,650-4,950</div>
                <div className="text-sm text-gray-700">Small groups (6-10), full-day option, organic ingredients, scenic locations, hotel transfers</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-rose-200">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-6 h-6 text-rose-600" />
                  <h4 className="font-bold text-gray-900">Luxury</h4>
                </div>
                <div className="text-3xl font-bold text-rose-600 mb-2">$150-300</div>
                <div className="text-sm text-gray-600 mb-3">THB 4,950-9,900</div>
                <div className="text-sm text-gray-700">Private instruction, customized menu, celebrity chefs, luxury venues, premium ingredients</div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-300">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-6 h-6 text-green-600" />
                  <h4 className="font-bold text-gray-900">Best Value</h4>
                </div>
                <p className="text-sm text-gray-700 mb-2">Half-day classes in Chiang Mai offer the best quality-to-price ratio, typically $40-60 for excellent instruction and small-medium groups.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-300">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <h4 className="font-bold text-gray-900">Most Convenient</h4>
                </div>
                <p className="text-sm text-gray-700 mb-2">Bangkok classes near BTS stations eliminate transportation hassles, allowing easy integration into busy sightseeing schedules.</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-300">
                <div className="flex items-center gap-2 mb-3">
                  <Heart className="w-6 h-6 text-amber-600" />
                  <h4 className="font-bold text-gray-900">Most Scenic</h4>
                </div>
                <p className="text-sm text-gray-700 mb-2">Countryside classes near Chiang Mai provide stunning mountain views and organic farm experiences worth the higher price tag.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-300">
            <div className="flex items-start gap-4">
              <Sparkles className="w-10 h-10 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Pro Booking Strategy</h3>
                <p className="text-gray-700 mb-4">
                  Experienced travelers recommend booking your cooking class early in your Thailand trip, ideally within the first 2-3 days. This strategic timing allows you to learn about Thai ingredients, flavors, and dishes, enhancing your appreciation and enjoyment of restaurant meals throughout the rest of your journey. You'll recognize ingredients in markets, understand menu descriptions better, and feel more confident ordering authentic street food. Additionally, early booking secures spots at popular schools that might fill up during your later travel dates, and you'll have the cooking class as a social icebreaker if traveling solo, potentially meeting friends for the rest of your trip.
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-amber-50 via-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Crown className="w-12 h-12 text-amber-600" />
              <h2 className="text-4xl sm:text-5xl font-light text-[#252525]">
                VIP Cooking Experiences
              </h2>
              <Crown className="w-12 h-12 text-amber-600" />
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elevate your culinary journey with exclusive luxury cooking experiences
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12 text-center text-lg">
            For discerning travelers seeking extraordinary culinary experiences beyond standard group classes, Thailand offers an impressive selection of premium and luxury cooking programs. These exclusive offerings provide personalized instruction from celebrity chefs, access to rare premium ingredients, stunning venues in historic buildings or countryside estates, and meticulous attention to every detail. Whether celebrating a special occasion, pursuing serious culinary education, or simply preferring intimate learning environments, VIP cooking experiences deliver unforgettable memories and advanced skill development that justify their premium pricing.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-amber-200">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Private chef instruction"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Gem className="w-8 h-8 text-amber-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Private Chef Instruction</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The ultimate personalized cooking experience with complete flexibility and customization. Private chef instruction caters exclusively to you, your partner, or your small group, with menus designed around your preferences, dietary needs, and skill level. Unlike group classes following fixed schedules and standardized menus, private instruction adapts to your pace, focuses on techniques you want to master, and can take place at your hotel, villa, or the chef's private kitchen.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div className="text-sm text-gray-700">One-on-one or small group (2-6 people) private classes with undivided attention</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div className="text-sm text-gray-700">Fully customized menu based on your preferences, skill level, and dietary requirements</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div className="text-sm text-gray-700">Flexible scheduling and duration from 2 hours to full-day immersions</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div className="text-sm text-gray-700">Can arrange at your hotel suite, private villa, or chef's exclusive kitchen</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div className="text-sm text-gray-700">Premium ingredients including imported specialty items and wine pairings</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div className="text-sm text-gray-700">Professional photography session documenting your culinary creation</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border-2 border-amber-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Starting From</div>
                      <div className="text-3xl font-bold text-amber-600">THB 8,000</div>
                      <div className="text-sm text-gray-600">($230 USD) per person</div>
                    </div>
                    <Trophy className="w-12 h-12 text-amber-600" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-blue-200">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Blue Elephant Cooking School"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Blue Elephant Cooking School</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Bangkok's most prestigious cooking school operates from a stunning 1903 colonial mansion, offering premium instruction that matches its Michelin-level restaurant reputation. Blue Elephant represents the pinnacle of refined Thai cuisine education, attracting serious food enthusiasts and culinary professionals seeking advanced techniques and sophisticated presentations. The school's instructors bring decades of experience from top restaurants worldwide, teaching authentic royal Thai cuisine alongside contemporary interpretations.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div className="text-sm text-gray-700">Historic colonial building with elegant classical Thai architecture and gardens</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div className="text-sm text-gray-700">Michelin-level chef instructors with international restaurant experience</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div className="text-sm text-gray-700">Premium ingredient selection including rare herbs and specialty imports</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div className="text-sm text-gray-700">Full-day comprehensive program with official certificate of completion</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div className="text-sm text-gray-700">Elegant multi-course dining experience in their renowned restaurant</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border-2 border-blue-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Price Range</div>
                      <div className="text-3xl font-bold text-blue-600">THB 3,500-4,500</div>
                      <div className="text-sm text-gray-600">($100-130 USD) per person</div>
                    </div>
                    <Award className="w-12 h-12 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-green-200">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2888267/pexels-photo-2888267.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Farm to table cooking"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Leaf className="w-8 h-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Farm-to-Table Experiences</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Connect with Thailand's agricultural heritage through immersive farm-to-table cooking experiences that begin in organic gardens and rice paddies. These programs, concentrated around Chiang Mai's fertile valleys, offer profound understanding of ingredient origins, sustainable farming practices, and the relationship between Thai cuisine and its agricultural foundations. You'll pick fresh herbs and vegetables, learn about traditional farming techniques, and cook with ingredients harvested moments before preparation.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div className="text-sm text-gray-700">Visit working organic farms and personally pick fresh ingredients from gardens</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div className="text-sm text-gray-700">Learn about Thai agricultural practices, rice cultivation, and herb gardens</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div className="text-sm text-gray-700">Cook in traditional outdoor kitchens with wood-fired stoves and clay pots</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div className="text-sm text-gray-700">Beautiful countryside settings with mountain views near Chiang Mai valleys</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div className="text-sm text-gray-700">Optional overnight homestay experiences with farming families</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border-2 border-green-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Price Range</div>
                      <div className="text-3xl font-bold text-green-600">THB 2,500-5,000</div>
                      <div className="text-sm text-gray-600">($70-145 USD) per person</div>
                    </div>
                    <Leaf className="w-12 h-12 text-green-600" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-rose-200">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Celebrity chef cooking class"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Camera className="w-8 h-8 text-rose-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Celebrity Chef Classes</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Learn from Thailand's culinary celebrities, television personalities, and award-winning cookbook authors in exclusive small-group sessions. These internationally recognized chefs bring professional techniques, modern interpretations of classic dishes, and advanced plating presentations that transform home cooking into restaurant-quality artistry. Classes emphasize both traditional authenticity and contemporary innovation, providing insights into the evolution of Thai cuisine on the global stage.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-rose-600 flex-shrink-0 mt-1" />
                    <div className="text-sm text-gray-700">Instruction from TV personalities, Michelin chefs, and published cookbook authors</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-rose-600 flex-shrink-0 mt-1" />
                    <div className="text-sm text-gray-700">Advanced culinary techniques and professional restaurant plating presentations</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-rose-600 flex-shrink-0 mt-1" />
                    <div className="text-sm text-gray-700">Small exclusive groups limited to 4-8 students for maximum interaction</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-rose-600 flex-shrink-0 mt-1" />
                    <div className="text-sm text-gray-700">State-of-the-art professional kitchen settings with commercial equipment</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-rose-600 flex-shrink-0 mt-1" />
                    <div className="text-sm text-gray-700">Often includes autographed cookbooks, certificates, and photo opportunities</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-4 border-2 border-rose-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Price Range</div>
                      <div className="text-3xl font-bold text-rose-600">THB 5,000-10,000</div>
                      <div className="text-sm text-gray-600">($145-290 USD) per person</div>
                    </div>
                    <Sparkles className="w-12 h-12 text-rose-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 border-2 border-amber-400">
            <div className="flex items-start gap-4">
              <Wine className="w-10 h-10 text-amber-700 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Worth the Premium Investment?</h3>
                <p className="text-gray-700 leading-relaxed">
                  VIP cooking experiences command premium prices but deliver corresponding value for travelers seeking exceptional quality, personalization, and memorable experiences. These classes suit special occasions like honeymoons and milestone celebrations, serious food enthusiasts pursuing advanced culinary education, travelers preferring intimate settings over group environments, and anyone willing to invest in unforgettable once-in-a-lifetime experiences. While standard group classes provide excellent value and authentic experiences, premium options offer exclusivity, flexibility, superior ingredients, and masterful instruction that create lasting memories beyond basic skill development. Consider your priorities, budget, and what aspects of the cooking experience matter most to you when deciding between standard and VIP options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-light text-[#252525] mb-4">
              Combining Cooking Classes with Other Experiences
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maximize your Thailand adventure with curated experience packages
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12 text-center text-lg">
            Smart travelers enhance their Thai cooking classes by combining them with complementary activities that create comprehensive cultural experiences. Package deals often provide better value than booking activities separately, plus the convenience of coordinated scheduling and transportation. Whether you're a food-obsessed traveler wanting total culinary immersion, a wellness seeker balancing cooking with yoga and massage, or a group celebrating special occasions, these thoughtfully designed combinations optimize your time and create cohesive memorable experiences that address multiple interests in a single well-planned day or multi-day itinerary.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl shadow-xl p-8 border-2 border-orange-300">
              <div className="flex items-center gap-3 mb-6">
                <Utensils className="w-10 h-10 text-orange-600" />
                <h3 className="text-2xl font-bold text-gray-900">Culinary Bangkok Tour</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                The ultimate food lover's day combines hands-on cooking instruction with guided street food exploration and traditional market immersion. Start with dawn visits to wholesale markets where Bangkok's restaurants source ingredients, followed by a comprehensive cooking class, then venture into evening street food neighborhoods with expert guides explaining regional specialties, ingredients, and eating etiquette. This intensive full-day culinary journey provides complete perspective on Thai food culture from farm to market to kitchen to street stall.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <Clock className="w-5 h-5 text-orange-600" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Duration</div>
                    <div className="text-sm text-gray-600">Full day (8-10 hours)</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <Users className="w-5 h-5 text-orange-600" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Perfect For</div>
                    <div className="text-sm text-gray-600">Food-obsessed travelers and culinary enthusiasts</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <DollarSign className="w-5 h-5 text-orange-600" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Price Range</div>
                    <div className="text-sm text-gray-600">$100-150 USD per person</div>
                  </div>
                </div>
              </div>
              <a
                href="/food"
                className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                Explore Thai Food Guide
                <ChefHat className="w-5 h-5" />
              </a>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-xl p-8 border-2 border-green-300">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-10 h-10 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">Wellness Retreat Package</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Balance culinary learning with holistic wellness through programs combining cooking classes, traditional Thai massage, and yoga sessions. These carefully paced experiences appeal to health-conscious travelers wanting to understand Thai cuisine's nutritional philosophy while relaxing body and mind. Morning yoga prepares you for focused cooking instruction, followed by enjoying the meal you prepared, then afternoon Thai massage completes the rejuvenating day. Multi-day retreats in countryside settings offer deeper immersion.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <Clock className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Duration</div>
                    <div className="text-sm text-gray-600">Half-day to multi-day programs</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <Users className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Perfect For</div>
                    <div className="text-sm text-gray-600">Health-conscious and wellness-focused travelers</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Price Range</div>
                    <div className="text-sm text-gray-600">$120-200 USD per day</div>
                  </div>
                </div>
              </div>
              <a
                href="/things-to-do"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                More Wellness Activities
                <Leaf className="w-5 h-5" />
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-xl p-8 border-2 border-blue-300">
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="w-10 h-10 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Group Celebration Special</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Transform celebrations like bachelor parties, corporate team building, or friend reunions into memorable competitive cooking experiences. Private cooking competitions pit teams against each other creating specific dishes within time limits, judged by professional chefs on taste, presentation, and technique. The friendly competition format encourages teamwork, creates entertaining moments, and produces hilarious photos. Post-class celebrations can extend into Bangkok's vibrant nightlife with coordinated transportation.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Duration</div>
                    <div className="text-sm text-gray-600">Half-day cooking plus evening activities</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <Users className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Perfect For</div>
                    <div className="text-sm text-gray-600">Groups of 6-12 people celebrating together</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <DollarSign className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Price Range</div>
                    <div className="text-sm text-gray-600">$80-120 USD per person</div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-100 rounded-lg p-4 border border-blue-300">
                <div className="text-sm text-gray-700">
                  <span className="font-semibold text-gray-900">Package Includes:</span> Private cooking class with competition format, team cooking stations, professional judging, prizes for winning team, photos and videos, optional post-class nightlife coordination
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl shadow-xl p-8 border-2 border-rose-300">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-10 h-10 text-rose-600" />
                <h3 className="text-2xl font-bold text-gray-900">Romantic Couples Experience</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Celebrate romance with intimate couples cooking classes designed specifically for twosomes on honeymoons, anniversaries, or special getaways. These private two-person sessions create romantic atmospheres with candle-lit settings, champagne toasts, and menus featuring aphrodisiac ingredients and elegant presentations. Many packages extend the romance with sunset dinner cruises along Bangkok's Chao Phraya River or Chiang Mai's countryside dining, creating comprehensive romantic experiences that become treasured memories.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <Clock className="w-5 h-5 text-rose-600" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Duration</div>
                    <div className="text-sm text-gray-600">Half-day class plus evening cruise/dinner</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <Users className="w-5 h-5 text-rose-600" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Perfect For</div>
                    <div className="text-sm text-gray-600">Honeymoons, anniversaries, romantic celebrations</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <DollarSign className="w-5 h-5 text-rose-600" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Price Range</div>
                    <div className="text-sm text-gray-600">$200-300 USD per couple</div>
                  </div>
                </div>
              </div>
              <div className="bg-rose-100 rounded-lg p-4 border border-rose-300">
                <div className="text-sm text-gray-700">
                  <span className="font-semibold text-gray-900">Romantic Touches:</span> Private two-person instruction, champagne or wine pairing, intimate candlelit setting, professional photography session, optional river cruise or scenic dinner, special occasion decorations
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 border-2 border-gray-300">
            <div className="flex items-start gap-4 mb-6">
              <Package className="w-10 h-10 text-gray-700 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Creating Your Custom Package</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Beyond pre-designed packages, many cooking schools and travel agencies create fully customized multi-experience itineraries tailored to your specific interests, schedule, and budget. Popular combinations include cooking classes with temple tours exploring Buddhist food traditions, island-hopping adventures with seafood cooking lessons at beach destinations, trekking expeditions followed by Northern Thai culinary instruction, and multi-day food tours visiting different regions to learn regional specialties. Contact schools or booking platforms with your ideal combination, and they'll design comprehensive experiences that seamlessly integrate cooking education with your other Thailand interests.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="w-5 h-5 text-blue-600" />
                      <div className="font-bold text-gray-900 text-sm">Cultural Combination</div>
                    </div>
                    <div className="text-xs text-gray-600">Cooking class + temple tours + traditional arts & crafts workshops</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Fish className="w-5 h-5 text-green-600" />
                      <div className="font-bold text-gray-900 text-sm">Island Adventure</div>
                    </div>
                    <div className="text-xs text-gray-600">Beach cooking lessons + snorkeling + island hopping + seafood dinners</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Leaf className="w-5 h-5 text-amber-600" />
                      <div className="font-bold text-gray-900 text-sm">Nature & Food</div>
                    </div>
                    <div className="text-xs text-gray-600">Mountain trekking + countryside cooking + homestay experiences</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-light text-[#252525] mb-4">
              Practical Information
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know before your first Thai cooking class
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-200">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">What to Bring</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Pack light for your cooking class experience. Thai cooking schools provide all essential equipment and ingredients, so you only need a few personal items to ensure comfort and capture memories. Most importantly, bring your appetite and enthusiasm for learning about Thailand's incredible culinary traditions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shirt className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Comfortable Clothes</div>
                    <div className="text-sm text-gray-600">Wear clothes you don't mind getting dirty or stained. Kitchens get hot, so choose breathable fabrics. Closed-toe shoes are required for safety.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Camera className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Camera or Smartphone</div>
                    <div className="text-sm text-gray-600">Capture your culinary creations, the cooking process, and class memories. Most schools encourage photography.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Utensils className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Healthy Appetite</div>
                    <div className="text-sm text-gray-600">You'll cook and eat multiple dishes. Come hungry to fully enjoy your creations and fellow students' food.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Notebook (Optional)</div>
                    <div className="text-sm text-gray-600">While schools provide recipe books, bring a notebook for extra tips, techniques, and personal observations.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShoppingBasket className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Small Bag</div>
                    <div className="text-sm text-gray-600">Carry your complimentary apron, recipe book, and any spices or ingredients provided to take home.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Sunscreen & Hat</div>
                    <div className="text-sm text-gray-600">For classes including outdoor market tours under Thailand's intense sun. Hand sanitizer is also helpful.</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-200 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Gift className="w-10 h-10 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Schools Provide</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Cooking schools supply everything needed for the class itself, ensuring you have professional-quality tools and fresh ingredients without carrying anything bulky or expensive.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    <div className="text-gray-700 font-medium">Aprons and Chef Hats</div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    <div className="text-gray-700 font-medium">All Ingredients & Cooking Equipment</div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    <div className="text-gray-700 font-medium">Recipe Books & Instruction Materials</div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    <div className="text-gray-700 font-medium">Drinking Water & Refreshments</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-amber-200">
                <div className="flex items-center gap-3 mb-6">
                  <Info className="w-10 h-10 text-amber-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Tips & Etiquette</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <div className="text-sm text-gray-700">
                      <span className="font-semibold text-gray-900">Arrive Early:</span> Come 10-15 minutes before class starts for check-in, bathroom breaks, and settling in without rushing.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <div className="text-sm text-gray-700">
                      <span className="font-semibold text-gray-900">Tipping:</span> Not required in Thailand but appreciated for exceptional service. 100-200 THB per person is generous if you loved your instructor.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <div className="text-sm text-gray-700">
                      <span className="font-semibold text-gray-900">Ask Questions:</span> Chefs love engaged, curious students. Don't hesitate to ask about techniques, ingredients, or Thai food culture.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <div className="text-sm text-gray-700">
                      <span className="font-semibold text-gray-900">Safety First:</span> Respect food handling safety rules, hot surfaces, and sharp knives. Follow instructor guidelines carefully.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Leaf className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <div className="text-sm text-gray-700">
                      <span className="font-semibold text-gray-900">Dietary Needs:</span> Notify instructors of allergies or restrictions before cooking begins, not during class when ingredients are already prepared.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-light text-[#252525] mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about Thai cooking classes answered
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 shadow-lg border border-blue-200">
              <div className="flex items-start gap-4 mb-4">
                <HelpCircle className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Do I need cooking experience to take a class?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Absolutely not. Thai cooking classes welcome complete beginners with no prior cooking experience. Instructors teach fundamental techniques from scratch, demonstrating each step clearly before students attempt it themselves. The learning environment is supportive, patient, and designed for people who've never held a chef's knife. Many students report that Thai cooking classes are less intimidating than cooking at home because expert guidance prevents common mistakes and builds confidence through successful dish completion.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 shadow-lg border border-green-200">
              <div className="flex items-start gap-4 mb-4">
                <Users className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Are cooking classes suitable for children?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Many cooking schools welcome families with children aged 8 and above who can safely handle basic cooking tasks under supervision. Some schools offer special family-friendly classes with simplified recipes, extra safety measures, and activities to keep younger participants engaged. Children under 8 typically struggle with the duration and attention requirements, though private family classes can sometimes accommodate very young children. Always confirm age policies and child-appropriate modifications when booking to ensure an enjoyable experience for the entire family.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 shadow-lg border border-purple-200">
              <div className="flex items-start gap-4 mb-4">
                <Leaf className="w-8 h-8 text-purple-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Can I get vegetarian or vegan options?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes, virtually all cooking schools offer vegetarian and vegan menu modifications. Thai cuisine naturally features many plant-based dishes, making vegetarian adaptations straightforward by substituting tofu or mushrooms for meat and using vegetable-based seasonings instead of fish sauce or shrimp paste. Inform the school about dietary requirements during booking, not on class day, to ensure they prepare appropriate ingredients. Many schools now offer dedicated vegetarian or vegan cooking classes focusing exclusively on plant-based Thai cuisine, reflecting growing global demand.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-8 shadow-lg border border-orange-200">
              <div className="flex items-start gap-4 mb-4">
                <Flame className="w-8 h-8 text-orange-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">How spicy is Thai food in classes?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Cooking classes allow you to control spice levels according to your preference and tolerance. Instructors explain how much chili to add for mild, medium, or authentic Thai spiciness, letting each student customize their dishes. Most classes prepare medium-spicy versions suitable for international palates rather than the intense heat Thais prefer. If you're sensitive to spice, simply reduce or eliminate chilies from your dishes. The goal is learning techniques and flavor balance, not enduring uncomfortable heat levels beyond your enjoyment.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-red-50 rounded-xl p-8 shadow-lg border border-rose-200">
              <div className="flex items-start gap-4 mb-4">
                <Utensils className="w-8 h-8 text-rose-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Will I get to keep the food I cook?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes, absolutely. The meal you prepare becomes your lunch or dinner, shared with classmates in a communal dining experience that's integral to Thai food culture. Most classes involve cooking 3-5 dishes, creating a substantial feast. You'll typically eat some immediately and can sometimes take leftovers, though food safety considerations in Thailand's heat mean most schools encourage consuming everything fresh. The cooking-then-eating progression helps you understand how dishes should taste when properly prepared, providing reference points for recreating recipes at home.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-cyan-50 rounded-xl p-8 shadow-lg border border-pink-200">
              <div className="flex items-start gap-4 mb-4">
                <MapPin className="w-8 h-8 text-[#2B5D8C] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Do classes include hotel pickup?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Many cooking schools offer complimentary hotel pickup and drop-off for accommodations within central areas of Bangkok, Chiang Mai, or Phuket. The service typically covers hotels in tourist zones, with pickup times coordinated during booking confirmation. Schools outside main tourist areas may charge extra for distant hotels or require guests to meet at central locations. Private and premium classes more consistently include door-to-door transportation as part of their higher pricing. Always confirm transportation details when booking to avoid confusion on class day.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-8 shadow-lg border border-yellow-200">
              <div className="flex items-start gap-4 mb-4">
                <AlertCircle className="w-8 h-8 text-yellow-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What if I have food allergies?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Reputable cooking schools accommodate common food allergies and dietary restrictions with advance notice. Inform schools about allergies during booking, specifying severity and cross-contamination concerns. Severe allergies to peanuts, shellfish, or soy present challenges given their prevalence in Thai cooking, requiring careful ingredient substitutions and separate cooking surfaces. Most schools handle gluten-free, dairy-free, and nut allergies successfully. For severe or multiple allergies, consider private classes where the entire kitchen can be controlled for your safety rather than group settings with potential cross-contamination.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8 shadow-lg border border-indigo-200">
              <div className="flex items-start gap-4 mb-4">
                <Camera className="w-8 h-8 text-indigo-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Can I take photos during class?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes, photography is encouraged at virtually all cooking schools. Instructors understand students want to document their experience and culinary creations for social media and personal memories. Many schools employ professional photographers who capture class moments, providing photos afterward. Flash photography during demonstrations might be discouraged to avoid distracting other students, and videography policies vary. Some premium classes include professional photo services documenting your cooking process and finished dishes. Always ask permission before photographing other students or posting their images publicly.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-8 shadow-lg border border-pink-200">
              <div className="flex items-start gap-4 mb-4">
                <Calendar className="w-8 h-8 text-pink-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">How far in advance should I book?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Popular cooking schools fill quickly during high season, so booking 1-2 weeks ahead ensures your preferred date and time. Peak season runs November through March, when advance booking becomes essential for top schools. During low season and shoulder months, you might find same-day or next-day availability, though advance booking guarantees choice and allows time for special requests. Private classes and weekend slots require more advance notice. Booking early also provides better hotel pickup arrangements and dietary accommodation preparation time.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-8 shadow-lg border border-emerald-200">
              <div className="flex items-start gap-4 mb-4">
                <Award className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Do I get a certificate at the end?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Most cooking schools provide certificates of completion at the end of your class, perfect for framing or adding to your culinary credentials collection. These certificates typically include your name, date, school name, and dishes mastered. While not formal professional culinary certifications, they make wonderful mementos of your Thailand experience. Premium and multi-day courses often feature more elaborate certificates on quality paper with school seals. Some schools also provide digital certificates via email, easily shared on social media or professional networking platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-8 shadow-lg border border-violet-200">
              <div className="flex items-start gap-4 mb-4">
                <Languages className="w-8 h-8 text-violet-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Are classes taught in English?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes, virtually all cooking schools catering to tourists conduct classes entirely in English. Instructors typically speak fluent English with clear pronunciation, having taught hundreds of international students. Some schools offer classes in additional languages like French, German, Spanish, Chinese, or Japanese based on instructor availability and advance requests. Recipe books are provided in English with ingredient names, measurements, and detailed instructions. The combination of visual demonstration and English verbal instruction ensures understanding regardless of your English proficiency level.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 shadow-lg border border-amber-200">
              <div className="flex items-start gap-4 mb-4">
                <Clock className="w-8 h-8 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What is the best time of day for a class?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Morning classes starting around 9-10 AM are most popular, finishing with lunch around 1-2 PM, leaving afternoons free for other activities. Morning sessions benefit from cooler temperatures, fresh market visits, and post-class energy for sightseeing. Afternoon classes suit night owls and those wanting relaxed mornings, typically running 2-6 PM and concluding with dinner. Evening classes exist but are rarer. Consider your energy levels, Thailand's heat, and how cooking class timing fits your overall itinerary. Morning classes sell out fastest due to popularity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-orange-50 via-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-light text-[#252525] mb-4">
              Book Your Thai Cooking Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your culinary adventure in Thailand?
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-2xl p-8 border-2 border-orange-200">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-10 h-10 text-orange-600" />
                <h3 className="text-2xl font-bold text-gray-900">Plan Your Culinary Adventure</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Tell us about your cooking class preferences and we'll help you find the perfect experience in Thailand. Whether you're looking for a hands-on market tour and cooking session in Bangkok, an intimate farm-to-table experience in Chiang Mai, or a beachside seafood cooking class in Phuket, we'll match you with the ideal program.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Your Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Preferred City</label>
                    <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors">
                      <option>Bangkok</option>
                      <option>Chiang Mai</option>
                      <option>Phuket</option>
                      <option>Koh Samui</option>
                      <option>Krabi</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Class Type</label>
                    <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors">
                      <option>Half-Day Class</option>
                      <option>Full-Day Class</option>
                      <option>Multi-Day Course</option>
                      <option>Private Instruction</option>
                      <option>VIP Experience</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Group Size</label>
                    <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors">
                      <option>Solo Traveler</option>
                      <option>Couple (2 people)</option>
                      <option>Small Group (3-5 people)</option>
                      <option>Large Group (6+ people)</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Dietary Requirements</label>
                    <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors">
                      <option>No Restrictions</option>
                      <option>Vegetarian</option>
                      <option>Vegan</option>
                      <option>Halal</option>
                      <option>Gluten-Free</option>
                      <option>Food Allergies</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Preferred Dates</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors"
                      placeholder="e.g., March 15-20, 2026"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Special Requests or Questions</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors"
                    placeholder="Tell us about any special requirements, questions, or preferences..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold py-4 px-8 rounded-lg hover:from-orange-700 hover:to-red-700 transition-all flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-xl"
                >
                  <Send className="w-6 h-6" />
                  Send Inquiry
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <ExternalLink className="w-6 h-6 text-blue-600" />
                  Quick Links
                </h3>
                <div className="space-y-3">
                  <a
                    href="/food"
                    className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                  >
                    <Utensils className="w-5 h-5 text-blue-600" />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 text-sm group-hover:text-blue-600">Thai Food Guide</div>
                      <div className="text-xs text-gray-600">Discover Thai cuisine</div>
                    </div>
                  </a>
                  <a
                    href="/bangkok-destination"
                    className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                  >
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 text-sm group-hover:text-blue-600">Bangkok Guide</div>
                      <div className="text-xs text-gray-600">Explore Bangkok</div>
                    </div>
                  </a>
                  <a
                    href="/chiang-mai-destination"
                    className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                  >
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 text-sm group-hover:text-blue-600">Chiang Mai Guide</div>
                      <div className="text-xs text-gray-600">Northern Thailand</div>
                    </div>
                  </a>
                  <a
                    href="/things-to-do"
                    className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                  >
                    <Sparkles className="w-5 h-5 text-blue-600" />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 text-sm group-hover:text-blue-600">Things to Do</div>
                      <div className="text-xs text-gray-600">Activities & experiences</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-xl p-6 border-2 border-green-300">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-900">Social Proof</h3>
                </div>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      S
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Sarah M.</div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 italic">
                    "Best experience of our Bangkok trip! The market tour was fascinating and our instructor made everything so easy to understand."
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      J
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">James T.</div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 italic">
                    "I've cooked pad thai at home several times since taking this class. The techniques I learned made all the difference!"
                  </p>
                </div>
                <div className="mt-4 text-center">
                  <div className="text-3xl font-bold text-green-600">1,000+</div>
                  <div className="text-sm text-gray-600">Happy Cooking Students</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-gray-200 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Featured Cooking Schools Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-4 px-4 font-bold text-gray-900">School Name</th>
                    <th className="text-left py-4 px-4 font-bold text-gray-900">Location</th>
                    <th className="text-left py-4 px-4 font-bold text-gray-900">Specialty</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-900">Rating</th>
                    <th className="text-right py-4 px-4 font-bold text-gray-900">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-4 font-semibold text-gray-900">Baipai Thai Cooking School</td>
                    <td className="py-4 px-4 text-gray-700">Bangkok</td>
                    <td className="py-4 px-4 text-gray-700">Traditional Thai</td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">4.9</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right font-semibold text-gray-900">THB 1,500</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-4 font-semibold text-gray-900">Thai Farm Cooking School</td>
                    <td className="py-4 px-4 text-gray-700">Chiang Mai</td>
                    <td className="py-4 px-4 text-gray-700">Farm-to-Table</td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">5.0</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right font-semibold text-gray-900">THB 1,200</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-4 font-semibold text-gray-900">Blue Elephant</td>
                    <td className="py-4 px-4 text-gray-700">Bangkok</td>
                    <td className="py-4 px-4 text-gray-700">Luxury/Royal Thai</td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">4.8</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right font-semibold text-gray-900">THB 3,500-4,500</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-4 font-semibold text-gray-900">Phuket Thai Cookery School</td>
                    <td className="py-4 px-4 text-gray-700">Phuket</td>
                    <td className="py-4 px-4 text-gray-700">Southern Thai</td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">4.7</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right font-semibold text-gray-900">THB 1,800</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-4 font-semibold text-gray-900">Zabb E Lee</td>
                    <td className="py-4 px-4 text-gray-700">Chiang Mai</td>
                    <td className="py-4 px-4 text-gray-700">Northeastern Thai</td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">4.9</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right font-semibold text-gray-900">THB 1,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-4 font-semibold text-gray-900">Amita Thai Cooking Class</td>
                    <td className="py-4 px-4 text-gray-700">Bangkok</td>
                    <td className="py-4 px-4 text-gray-700">Home-Style Thai</td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">5.0</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right font-semibold text-gray-900">THB 1,100</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-8 border-2 border-orange-300 text-center">
            <ChefHat className="w-16 h-16 text-orange-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Start Your Culinary Journey Today</h3>
            <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto mb-6">
              Thai cooking classes offer more than just recipes. They provide cultural immersion, hands-on learning, and delicious memories you'll treasure forever. Whether you choose a bustling Bangkok market tour, a serene Chiang Mai farm experience, or a beachside Phuket class, you'll gain skills, confidence, and appreciation for one of the world's greatest cuisines.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-orange-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </a>
              <a
                href="/things-to-do"
                className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors shadow-lg border-2 border-orange-600"
              >
                <Sparkles className="w-5 h-5" />
                Explore More Activities
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-gray-100 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RelatedGuides
            guides={[
              {
                title: 'Things to Do in Thailand',
                description: 'Explore more cultural experiences and activities',
                link: '/things-to-do',
                image:
                  'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Thai Food Guide',
                description: 'Discover Thailand\'s incredible cuisine',
                link: '/food',
                image:
                  'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Bangkok Destination Guide',
                description: 'Plan your Bangkok culinary adventure',
                link: '/bangkok-destination',
                image:
                  'https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
