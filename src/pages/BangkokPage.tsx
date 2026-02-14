import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import RelatedGuides from '../components/RelatedGuides';

export default function BangkokPage() {
  const attractions = [
    {
      title: 'Grand Palace',
      image: 'https://images.unsplash.com/photo-1563492065211-f9e8c4cf4a4d?auto=format&fit=crop&w=1000&q=80',
      description: 'The most iconic landmark in Bangkok, featuring stunning architecture and sacred temples.'
    },
    {
      title: 'Wat Pho',
      image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1000&q=80',
      description: 'Home to the massive reclining Buddha and traditional Thai massage school.'
    },
    {
      title: 'Wat Arun',
      image: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=1000&q=80',
      description: 'The Temple of Dawn rises majestically along the Chao Phraya River.'
    },
    {
      title: 'Chatuchak Market',
      image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1000&q=80',
      description: 'One of the world\'s largest weekend markets with over 15,000 stalls.'
    }
  ];

  const relatedGuides = [
    {
      title: 'Chiang Mai Travel Guide',
      excerpt: "Northern Thailand's cultural capital with ancient temples, mountain adventures, and authentic experiences far from the tourist crowds.",
      image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/culture'
    },
    {
      title: 'Best Time to Visit Bangkok',
      excerpt: 'Month-by-month weather guide to help you plan your Bangkok trip. Discover the best season for temples, markets, and outdoor activities.',
      image: 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/practical'
    },
    {
      title: 'Bangkok to Phuket: Travel Guide',
      excerpt: 'Complete guide to traveling between Bangkok and Phuket by plane, bus, and train. Find the best options for your budget and schedule.',
      image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/destinations/phuket'
    },
    {
      title: 'Thailand Itinerary: 2 Weeks',
      excerpt: 'Perfect 2-week Thailand itinerary covering Bangkok, ancient temples, tropical islands, and northern mountains for first-time visitors.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/things-to-do'
    }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Destinations' }, { label: 'Bangkok' }]} />

      <section
        className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=2400&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#252525]/70 via-[#252525]/50 to-[#252525]/80"></div>

        <div className="relative z-10 max-w-[1700px] mx-auto px-6 lg:px-12 text-center text-white py-32">
          <div className="flex items-center justify-center gap-3 mb-6">
            <MapPin className="w-8 h-8 text-[#2B5D8C]" />
            <span className="text-lg uppercase tracking-[2px] text-[#F4A261]">Destinations</span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-8 uppercase tracking-[2px] leading-tight">
            <span className="text-[#2B5D8C]">Bangkok</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Thailand's electric capital where ancient temples meet modern skyscrapers and street food reigns supreme
          </p>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mb-20">
            <h2 className="section-subheading mb-8">
              The City of Angels
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed font-light mb-6">
              Bangkok, officially known as Krung Thep Maha Nakhon (City of Angels), is a city of contrasts where golden spires of ancient temples pierce the skyline alongside gleaming skyscrapers. Home to over 10 million people, Thailand's capital pulses with an energy that's simultaneously chaotic and captivating.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed font-light">
              From the ornate Grand Palace to floating markets, from rooftop bars to bustling street food stalls, Bangkok offers an intoxicating blend of tradition and modernity. Whether you're exploring historic Rattanakosin Island, shopping in massive malls, or navigating the legendary traffic, Bangkok never fails to leave an impression.
            </p>
          </div>

          <h2 className="section-subheading mb-16">
            Must-Visit Attractions
          </h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {attractions.map((attraction, index) => (
              <div key={index} className="group">
                <div className="relative h-[400px] overflow-hidden rounded-[10px] mb-6">
                  <img
                    src={attraction.image}
                    alt={attraction.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#252525]/80 to-transparent"></div>
                </div>
                <h3 className="text-3xl font-light text-[#252525] mb-4 uppercase tracking-[2px]">
                  {attraction.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light text-lg">
                  {attraction.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedGuides guides={relatedGuides} />

      <section className="py-32 bg-[#252525] text-white">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-light mb-8 uppercase tracking-[2px] leading-tight">
              Explore More
              <br />
              <span className="text-[#F4A261]">Of Thailand</span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 font-light leading-relaxed text-gray-300">
              Continue your journey through Thailand's incredible destinations
            </p>
            <Link to="/culture" className="btn-primary inline-flex items-center gap-3">
              Discover Thai Culture
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
