import { ArrowRight, UtensilsCrossed, Store, ChefHat, Star, MapPin, Clock, Utensils, Coffee, Leaf, Cake, Award, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import Sidebar from '../components/Sidebar';
import YouMayAlsoLike from '../components/YouMayAlsoLike';

export default function FoodDiningPage() {
  const sections = [
    { id: 'must-try-dishes', label: 'Must-Try Thai Dishes' },
    { id: 'street-food', label: 'Street Food' },
    { id: 'best-restaurants', label: 'Best Restaurants' },
    { id: 'food-experiences', label: 'Food Experiences' },
    { id: 'cuisine-type', label: 'By Cuisine Type' },
    { id: 'collections', label: 'Collections' }
  ];

  const mustTryDishes = [
    {
      name: 'Pad Thai',
      description: 'Iconic stir-fried noodles',
      image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=800&q=80',
      guides: '45'
    },
    {
      name: 'Tom Yum Goong',
      description: 'Spicy shrimp soup',
      image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&w=800&q=80',
      guides: '38'
    },
    {
      name: 'Green Curry',
      description: 'Creamy coconut curry',
      image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80',
      guides: '42'
    },
    {
      name: 'Som Tam',
      description: 'Spicy papaya salad',
      image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=800&q=80',
      guides: '35'
    },
    {
      name: 'Massaman Curry',
      description: 'Rich Muslim-influenced curry',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80',
      guides: '28'
    },
    {
      name: 'Pad Krapow',
      description: 'Basil stir-fry',
      image: 'https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?auto=format&fit=crop&w=800&q=80',
      guides: '31'
    },
    {
      name: 'Mango Sticky Rice',
      description: 'Classic dessert',
      image: 'https://images.unsplash.com/photo-1601887370915-f5ec2b52a0c2?auto=format&fit=crop&w=800&q=80',
      guides: '25'
    }
  ];

  const streetFoodByCity = [
    {
      city: 'Bangkok',
      guides: '150',
      description: 'Capital of street food heaven',
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=80'
    },
    {
      city: 'Chiang Mai',
      guides: '80',
      description: 'Northern Thai specialties',
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80'
    },
    {
      city: 'Phuket',
      guides: '60',
      description: 'Southern flavors by the sea',
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const streetFoodByType = [
    { label: 'Night Market Food Guides', guides: '45', icon: Clock },
    { label: 'Famous Street Food Stalls', guides: '67', icon: Store },
    { label: 'Street Food Safety Tips', guides: '12', icon: ChefHat },
    { label: 'What to Order Guide', guides: '23', icon: UtensilsCrossed }
  ];

  const restaurantsByCategory = [
    { label: 'Michelin Star Restaurants', guides: '50', icon: Star },
    { label: 'Best Thai Restaurants', guides: '200', icon: UtensilsCrossed },
    { label: 'Rooftop Restaurants', guides: '80', icon: MapPin },
    { label: 'Beachfront Dining', guides: '100', icon: Coffee },
    { label: 'Budget-Friendly Eats', guides: '170', icon: Store }
  ];

  const restaurantsByCity = [
    {
      city: 'Bangkok',
      guides: '250',
      description: 'From street stalls to Michelin stars',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
    },
    {
      city: 'Phuket',
      guides: '150',
      description: 'Beachfront dining and seafood',
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80'
    },
    {
      city: 'Chiang Mai',
      guides: '100',
      description: 'Northern specialties and cafes',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const foodExperiences = [
    {
      title: 'Thai Cooking Classes',
      guides: '150',
      description: 'Learn to cook authentic Thai dishes',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
      icon: ChefHat
    },
    {
      title: 'Food Tours',
      guides: '100',
      description: 'Guided culinary adventures',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
      icon: MapPin
    },
    {
      title: 'Market Tours',
      guides: '60',
      description: 'Explore fresh markets with locals',
      image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=800&q=80',
      icon: Store
    },
    {
      title: 'Farm-to-Table Experiences',
      guides: '40',
      description: 'Connect with local farmers',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80',
      icon: Leaf
    }
  ];

  const cuisineTypes = [
    { label: 'Regional Thai Cuisine', sublabel: 'Isaan, Southern, Northern', icon: MapPin },
    { label: 'Vegetarian & Vegan Thai Food', sublabel: 'Plant-based options', icon: Leaf },
    { label: 'International Dining in Thailand', sublabel: 'Global flavors', icon: Utensils },
    { label: 'Thai Desserts & Sweets', sublabel: 'Sweet treats', icon: Cake },
    { label: 'Thai Drinks & Beverages', sublabel: 'From tea to cocktails', icon: Coffee }
  ];

  const collections = [
    { title: 'Top 50 Thai Restaurants', icon: Award, color: 'bg-amber-500' },
    { title: 'Best Street Food Cities', icon: Store, color: 'bg-[#d7007f]' },
    { title: 'Michelin Guide Thailand', icon: Star, color: 'bg-rose-600' },
    { title: 'Best Cooking Schools', icon: ChefHat, color: 'bg-blue-600' }
  ];

  const youMayAlsoLike = [
    { title: 'Bangkok Food Tour Guide', path: '/things-to-do' },
    { title: 'Best Night Markets', path: '/things-to-do' },
    { title: 'Thai Cooking Classes', path: '/things-to-do' },
    { title: 'Vegetarian Thai Food Guide', path: '/food-dining' },
    { title: 'Thai Fruit Guide', path: '/food-dining' },
    { title: 'Where to Eat in Chiang Mai', path: '/destinations/chiang-mai' }
  ];

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Home', path: '/' },
          { label: 'Food & Dining' }
        ]}
      />

      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1578237493287-564896263034?auto=format&fit=crop&w=2000&q=80"
            alt="Thai food spread"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#252525]/70 via-[#252525]/60 to-[#252525]/80"></div>
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full mb-8">
            <UtensilsCrossed className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-[2px]">Food & Dining Guide</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 uppercase tracking-[3px] leading-tight">
            Thai Food
            <br />
            <span className="text-[#f7a600]">& Dining Guide</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed max-w-3xl mx-auto">
            From Street Food to Michelin Stars
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-lg">
            <div className="flex items-center gap-2">
              <Store className="w-5 h-5 text-[#f7a600]" />
              <span>2,500+ Restaurant Guides</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/50"></div>
            <div className="flex items-center gap-2">
              <ChefHat className="w-5 h-5 text-[#f7a600]" />
              <span>300+ Recipes</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            <div>
              <div className="prose prose-lg max-w-none mb-16">
                <p className="text-xl leading-relaxed text-gray-700 font-light">
                  Thai cuisine is world-famous for its perfect balance of sweet, sour, salty, and
                  spicy. Whether you're looking for street food stalls or Michelin-starred
                  restaurants, our guides help you discover Thailand's incredible food scene.
                </p>
              </div>

              <div id="must-try-dishes" className="mb-20 scroll-mt-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-[#f7a600]/10 flex items-center justify-center flex-shrink-0">
                    <UtensilsCrossed className="w-6 h-6 text-[#f7a600]" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[2px] text-[#252525]">
                      Must-Try Thai Dishes
                    </h2>
                    <p className="text-gray-600 mt-1">150 guides to essential Thai foods</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 md:p-12 mb-12">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Essential Thai Foods</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mustTryDishes.map((dish, index) => (
                      <Link
                        key={index}
                        to="/food-dining"
                        className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={dish.image}
                            alt={dish.name}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#252525]/80 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <h4 className="text-white font-semibold text-lg mb-1">{dish.name}</h4>
                            <p className="text-white/90 text-sm">{dish.description}</p>
                          </div>
                          <div className="absolute top-3 right-3">
                            <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-900">
                              {dish.guides} guides
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    to="/food-dining"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#f7a600] text-white hover:bg-[#d7007f] transition-colors rounded-lg font-semibold shadow-lg hover:shadow-xl uppercase tracking-[1.5px]"
                  >
                    Complete Thai Food Guide
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div className="border-b border-gray-200 mb-16"></div>

              <div id="street-food" className="mb-20 scroll-mt-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-[#d7007f]/10 flex items-center justify-center flex-shrink-0">
                    <Store className="w-6 h-6 text-[#d7007f]" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[2px] text-[#252525]">
                      Street Food
                    </h2>
                    <p className="text-gray-600 mt-1">400 guides to Thailand's world-class street food</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-cyan-50 rounded-2xl p-8 md:p-12 mb-12">
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Thailand's street food is world-class and incredibly cheap. From bustling night
                    markets to roadside stalls, discover the best places to eat like a local.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Street Food by City</h3>
                  <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {streetFoodByCity.map((city, index) => (
                      <Link
                        key={index}
                        to="/food-dining"
                        className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all"
                      >
                        <div className="relative h-56 overflow-hidden">
                          <img
                            src={city.image}
                            alt={`${city.city} street food`}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#252525]/90 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <h4 className="text-white font-bold text-xl mb-2">{city.city}</h4>
                            <p className="text-white/90 text-sm mb-3">{city.description}</p>
                            <div className="flex items-center gap-2 text-[#f7a600]">
                              <span className="text-sm font-semibold">{city.guides} guides</span>
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">By Type</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {streetFoodByType.map((type, index) => {
                      const IconComponent = type.icon;
                      return (
                        <Link
                          key={index}
                          to="/food-dining"
                          className="group flex items-center gap-4 p-5 bg-white rounded-lg hover:bg-pink-50 transition-all border border-gray-100 hover:border-pink-200"
                        >
                          <div className="w-12 h-12 rounded-full bg-[#d7007f]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#d7007f]/20 transition-colors">
                            <IconComponent className="w-6 h-6 text-[#d7007f]" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 group-hover:text-[#d7007f] transition-colors">
                              {type.label}
                            </h4>
                            <p className="text-sm text-gray-600">{type.guides} guides</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#d7007f] group-hover:translate-x-1 transition-all" />
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    to="/food-dining"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#d7007f] text-white hover:bg-[#d7007f] transition-colors rounded-lg font-semibold shadow-lg hover:shadow-xl uppercase tracking-[1.5px]"
                  >
                    Explore Street Food
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div className="border-b border-gray-200 mb-16"></div>

              <div id="best-restaurants" className="mb-20 scroll-mt-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-rose-600/10 flex items-center justify-center flex-shrink-0">
                    <Utensils className="w-6 h-6 text-rose-700" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[2px] text-[#252525]">
                      Best Restaurants
                    </h2>
                    <p className="text-gray-600 mt-1">600 guides to Thailand's finest dining</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 md:p-12 mb-12">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">By Category</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-12">
                    {restaurantsByCategory.map((category, index) => {
                      const IconComponent = category.icon;
                      return (
                        <Link
                          key={index}
                          to="/food-dining"
                          className="group flex items-center gap-4 p-5 bg-white rounded-lg hover:bg-rose-50 transition-all border border-gray-100 hover:border-rose-200"
                        >
                          <div className="w-12 h-12 rounded-full bg-rose-600/10 flex items-center justify-center flex-shrink-0 group-hover:bg-rose-600/20 transition-colors">
                            <IconComponent className="w-6 h-6 text-rose-700" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 group-hover:text-rose-700 transition-colors">
                              {category.label}
                            </h4>
                            <p className="text-sm text-gray-600">{category.guides} guides</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-rose-700 group-hover:translate-x-1 transition-all" />
                        </Link>
                      );
                    })}
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">By City</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {restaurantsByCity.map((city, index) => (
                      <Link
                        key={index}
                        to="/food-dining"
                        className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all"
                      >
                        <div className="relative h-56 overflow-hidden">
                          <img
                            src={city.image}
                            alt={`${city.city} restaurants`}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#252525]/90 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <h4 className="text-white font-bold text-xl mb-2">{city.city}</h4>
                            <p className="text-white/90 text-sm mb-3">{city.description}</p>
                            <div className="flex items-center gap-2 text-[#f7a600]">
                              <span className="text-sm font-semibold">{city.guides} guides</span>
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    to="/food-dining"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-rose-700 text-white hover:bg-rose-800 transition-colors rounded-lg font-semibold shadow-lg hover:shadow-xl uppercase tracking-[1.5px]"
                  >
                    Browse All Restaurants
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div className="border-b border-gray-200 mb-16"></div>

              <div id="food-experiences" className="mb-20 scroll-mt-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                    <ChefHat className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[2px] text-[#252525]">
                      Food Experiences
                    </h2>
                    <p className="text-gray-600 mt-1">350 guides to culinary experiences</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 mb-12">
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Get hands-on with Thai cuisine through cooking classes, food tours, and unique
                    culinary experiences that will deepen your appreciation for Thai food culture.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Popular Experiences</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {foodExperiences.map((experience, index) => (
                      <Link
                        key={index}
                        to="/food-dining"
                        className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={experience.image}
                            alt={experience.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#252525]/90 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <h4 className="text-white font-bold text-lg mb-2">{experience.title}</h4>
                            <p className="text-white/90 text-sm mb-3">{experience.description}</p>
                            <div className="flex items-center gap-2 text-blue-400">
                              <span className="text-sm font-semibold">{experience.guides} guides</span>
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    to="/food-dining"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-blue-700 text-white hover:bg-blue-800 transition-colors rounded-lg font-semibold shadow-lg hover:shadow-xl uppercase tracking-[1.5px]"
                  >
                    Explore Food Experiences
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div className="border-b border-gray-200 mb-16"></div>

              <div id="cuisine-type" className="mb-20 scroll-mt-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-green-600/10 flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[2px] text-[#252525]">
                      By Cuisine Type
                    </h2>
                    <p className="text-gray-600 mt-1">Explore different styles and specialties</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {cuisineTypes.map((cuisine, index) => {
                    const IconComponent = cuisine.icon;
                    return (
                      <Link
                        key={index}
                        to="/food-dining"
                        className="group flex items-center gap-4 p-6 bg-white rounded-lg hover:bg-green-50 transition-all border border-gray-200 hover:border-green-300 shadow-sm hover:shadow-md"
                      >
                        <div className="w-14 h-14 rounded-full bg-green-600/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-600/20 transition-colors">
                          <IconComponent className="w-7 h-7 text-green-700" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg text-gray-900 group-hover:text-green-700 transition-colors mb-1">
                            {cuisine.label}
                          </h4>
                          <p className="text-sm text-gray-600">{cuisine.sublabel}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-700 group-hover:translate-x-1 transition-all" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="border-b border-gray-200 mb-16"></div>

              <div id="collections" className="mb-20 scroll-mt-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[2px] text-[#252525]">
                      Collections
                    </h2>
                    <p className="text-gray-600 mt-1">Curated lists of the best food experiences</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {collections.map((collection, index) => {
                    const IconComponent = collection.icon;
                    return (
                      <Link
                        key={index}
                        to="/food-dining"
                        className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 overflow-hidden hover:shadow-2xl transition-all"
                      >
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all"></div>
                        <div className="relative">
                          <div className={`w-14 h-14 rounded-lg ${collection.color} flex items-center justify-center mb-4`}>
                            <IconComponent className="w-7 h-7 text-white" />
                          </div>
                          <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#f7a600] transition-colors">
                            {collection.title}
                          </h4>
                          <div className="flex items-center gap-2 text-gray-400 group-hover:text-white transition-colors">
                            <span className="text-sm">View Collection</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <Sidebar sections={sections} />
            </div>
          </div>
        </div>
      </section>

      <YouMayAlsoLike articles={youMayAlsoLike} />

      <div className="block lg:hidden bg-gray-50 py-12">
        <div className="max-w-[1400px] mx-auto px-6 space-y-6">
          <Sidebar sections={sections} />
        </div>
      </div>

      <section className="py-32 bg-gradient-to-br from-[#252525] via-[#2a2a2a] to-[#1f1f1f] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#f7a600] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d7007f] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-[#f7a600]/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-8 border border-[#f7a600]/20">
              <MessageCircle className="w-10 h-10 text-[#f7a600]" />
            </div>
            <h2 className="text-5xl md:text-6xl font-light mb-8 uppercase tracking-[2px] leading-tight">
              Questions About
              <br />
              <span className="text-[#f7a600]">Thai Food?</span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 font-light leading-relaxed text-gray-300">
              Our food experts are here to help you discover the best dining experiences in Thailand
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#f7a600] text-white hover:bg-[#d7007f] transition-all rounded-lg font-semibold shadow-2xl hover:shadow-[#f7a600]/20 hover:scale-105 uppercase tracking-[1.5px]"
            >
              <MessageCircle className="w-6 h-6" />
              Ask Our Experts
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
