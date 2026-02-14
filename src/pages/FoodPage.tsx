import { Utensils, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import RelatedGuides from '../components/RelatedGuides';
import { usePageMeta } from '../hooks/usePageMeta';

export default function FoodPage() {
  usePageMeta({
    title: 'Thai Food Guide 2026 - Street Food, Restaurants & Cuisine | ThailandWiki',
    description: 'Complete guide to Thai food including must-try dishes, street food locations, best restaurants, cooking classes, and authentic Thai cuisine experiences.',
  });
  const relatedGuides = [
    {
      title: 'Bangkok Street Food Guide',
      excerpt: 'Navigate Bangkok\'s best street food stalls and markets. From Chinatown to Sukhumvit, discover where locals eat.',
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/bangkok'
    },
    {
      title: 'Thai Cooking Classes',
      excerpt: 'Learn to cook authentic Thai dishes with expert chefs in Bangkok, Chiang Mai, and Phuket. From market tours to hands-on sessions.',
      image: 'https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/things-to-do'
    },
    {
      title: 'Best Restaurants in Thailand',
      excerpt: 'Michelin-starred restaurants, rooftop dining, beachfront seafood, and hidden gems across Thailand\'s dining scene.',
      image: 'https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/bangkok'
    },
    {
      title: 'Thai Food Markets Guide',
      excerpt: 'Explore floating markets, night markets, and weekend markets. Complete guide to market food culture in Thailand.',
      image: 'https://images.pexels.com/photos/2306277/pexels-photo-2306277.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/culture'
    }
  ];

  const dishes = [
    {
      name: 'Pad Thai',
      image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=1000&q=80',
      description: 'Thailand\'s most iconic stir-fried rice noodle dish with shrimp, tofu, peanuts, and tamarind sauce.'
    },
    {
      name: 'Tom Yum Goong',
      image: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=1000&q=80',
      description: 'Spicy and sour soup with shrimp, lemongrass, galangal, and kaffir lime leaves.'
    },
    {
      name: 'Green Curry',
      image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=1000&q=80',
      description: 'Vibrant green curry with coconut milk, Thai basil, and bamboo shoots.'
    },
    {
      name: 'Som Tam',
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1000&q=80',
      description: 'Spicy green papaya salad with peanuts, tomatoes, and lime dressing.'
    },
    {
      name: 'Massaman Curry',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80',
      description: 'Rich curry with Persian influences featuring peanuts, potatoes, and slow-cooked meat.'
    },
    {
      name: 'Mango Sticky Rice',
      image: 'https://images.unsplash.com/photo-1601439678777-b2b3c56fa627?auto=format&fit=crop&w=1000&q=80',
      description: 'Sweet sticky rice with fresh mango and coconut cream, Thailand\'s favorite dessert.'
    }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Food' }]} />

      <section
        className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=2400&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D2D2D]/70 via-[#2D2D2D]/50 to-[#2D2D2D]/80"></div>

        <div className="relative z-10 max-w-[1700px] mx-auto px-6 lg:px-12 text-center text-white py-32">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Utensils className="w-8 h-8 text-[#D91680]" />
            <span className="text-lg uppercase tracking-[2px] text-[#FDB515]">Cuisine</span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-8 uppercase tracking-[2px] leading-tight">
            Thai
            <br />
            <span className="text-[#D91680]">Cuisine</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            A harmonious symphony of sweet, sour, salty, and spicy flavors that has captivated the world
          </p>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mb-20">
            <h2 className="section-subheading mb-8">
              The Art of Thai Food
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed font-light mb-6">
              Thai cuisine is celebrated worldwide for its perfect balance of flavors and aromatic complexity. Each dish is a carefully orchestrated dance of sweet, sour, salty, bitter, and spicy notes, creating a culinary experience that's both exciting and deeply satisfying.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed font-light">
              From bustling street food stalls to refined royal cuisine, Thai food reflects the country's rich history, diverse regional influences, and deep connection to fresh, local ingredients. Whether it's a simple bowl of noodles or an elaborate curry, every dish tells a story of tradition, innovation, and the Thai philosophy of sanuk enjoying life.
            </p>
          </div>

          <h2 className="section-subheading mb-16">
            Essential Thai Dishes
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {dishes.map((dish, index) => (
              <div key={index} className="group">
                <div className="relative h-[350px] overflow-hidden rounded-[10px] mb-6">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/80 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-light text-[#2D2D2D] mb-4 uppercase tracking-[2px]">
                  {dish.name}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light text-lg">
                  {dish.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedGuides guides={relatedGuides} />

      <section className="py-32 bg-[#2D2D2D] text-white">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-light mb-8 uppercase tracking-[2px] leading-tight">
              Experience
              <br />
              <span className="text-[#FDB515]">Thai Culture</span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 font-light leading-relaxed text-gray-300">
              Discover the traditions and customs that shape Thai life
            </p>
            <Link to="/culture" className="btn-primary inline-flex items-center gap-3">
              Explore Culture
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
