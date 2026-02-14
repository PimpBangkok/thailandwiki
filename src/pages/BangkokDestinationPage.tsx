import { useState, useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import RelatedGuides from '../components/RelatedGuides';
import { usePageMeta } from '../hooks/usePageMeta';

export default function BangkokDestinationPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isSticky, setIsSticky] = useState(false);

  usePageMeta({
    title: 'Bangkok Travel Guide 2026 - Complete Guide to Thailand\'s Capital | ThailandWiki',
    description: 'Comprehensive Bangkok travel guide with 3,847 articles covering attractions, hotels, food, nightlife, transportation, and insider tips for exploring Thailand\'s vibrant capital.',
  });

  const relatedGuides = [
    {
      title: 'Phuket Complete Travel Guide',
      excerpt: 'Thailand\'s largest island paradise. Discover the best beaches, island hopping tours, nightlife, and where to stay in Phuket.',
      image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/destinations/phuket'
    },
    {
      title: 'Best Street Food in Bangkok',
      excerpt: 'Navigate Bangkok\'s incredible street food scene. From Yaowarat to local markets, discover authentic Thai flavors.',
      image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/food'
    },
    {
      title: 'Bangkok to Ayutthaya Day Trip',
      excerpt: 'Visit the ancient capital of Siam. Complete guide to exploring Ayutthaya\'s stunning temple ruins from Bangkok.',
      image: 'https://images.pexels.com/photos/164025/pexels-photo-164025.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/things-to-do'
    },
    {
      title: 'Where to Stay in Bangkok',
      excerpt: 'Best neighborhoods and hotels for every budget. Compare Sukhumvit, Silom, Riverside, and Old Town areas.',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/accommodation'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'things-to-do', label: 'Things to Do' },
    { id: 'where-to-stay', label: 'Where to Stay' },
    { id: 'food-dining', label: 'Food & Dining' },
    { id: 'nightlife', label: 'Nightlife' },
    { id: 'transportation', label: 'Transportation' },
    { id: 'neighborhoods', label: 'Neighborhoods' },
    { id: 'itineraries', label: 'Itineraries' },
    { id: 'practical-info', label: 'Practical Info' }
  ];

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Destinations', path: '#' },
          { label: 'Central Thailand', path: '#' },
          { label: 'Bangkok' }
        ]}
      />

      <section
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg?auto=compress&cs=tinysrgb&w=2400)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 uppercase tracking-wide">
            Bangkok Travel Guide
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-8 text-gray-100">
            Thailand's Vibrant Capital City
          </p>
          <p className="text-sm md:text-base text-gray-300 uppercase tracking-wider">
            3,847 Articles • Updated February 2026
          </p>
        </div>
      </section>

      <div
        className={`bg-white border-b border-gray-200 transition-all duration-300 z-40 ${
          isSticky ? 'fixed top-0 left-0 right-0 shadow-md' : 'relative'
        }`}
      >
        <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
          <nav className="flex overflow-x-auto hide-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap px-6 py-4 text-sm font-medium uppercase tracking-wider transition-colors border-b-2 ${
                  activeTab === tab.id
                    ? 'text-[#d7007f] border-[#d7007f]'
                    : 'text-gray-600 border-transparent hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {isSticky && <div className="h-[57px]"></div>}

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-gray-900 uppercase tracking-wide">
            Bangkok at a Glance
          </h2>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl leading-relaxed text-gray-700 font-light mb-6">
              Bangkok is Thailand's bustling capital and most visited city, where ancient temples
              stand beside gleaming skyscrapers, where street food vendors serve world-class cuisine,
              and where the chaos somehow creates an irresistible energy. Home to over 10 million
              people, Bangkok is often travelers' first stop in Thailand—and many find themselves
              extending their stay, captivated by the city's endless discoveries.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-cyan-50 border-l-4 border-[#d7007f] p-8 md:p-10 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-8 text-gray-900 uppercase tracking-wide">
              Quick Facts
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <dt className="text-sm font-semibold text-[#d7007f] uppercase tracking-wider mb-2">
                  Best For
                </dt>
                <dd className="text-gray-800 font-light">
                  First-time visitors, food lovers, culture enthusiasts, nightlife
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="text-sm font-semibold text-[#d7007f] uppercase tracking-wider mb-2">
                  Best Time to Visit
                </dt>
                <dd className="text-gray-800 font-light">
                  November-February (cool & dry), avoid March-May (very hot)
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="text-sm font-semibold text-[#d7007f] uppercase tracking-wider mb-2">
                  Recommended Stay
                </dt>
                <dd className="text-gray-800 font-light">
                  Minimum 3 days, ideal 5-7 days
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="text-sm font-semibold text-[#d7007f] uppercase tracking-wider mb-2">
                  Daily Budget
                </dt>
                <dd className="text-gray-800 font-light">
                  $30-150+ depending on travel style
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="text-sm font-semibold text-[#d7007f] uppercase tracking-wider mb-2">
                  Getting There
                </dt>
                <dd className="text-gray-800 font-light">
                  Suvarnabhumi (BKK) & Don Mueang (DMK) airports
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="text-sm font-semibold text-[#d7007f] uppercase tracking-wider mb-2">
                  Getting Around
                </dt>
                <dd className="text-gray-800 font-light">
                  BTS Skytrain, MRT Metro, taxis, tuk-tuks
                </dd>
              </div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#d7007f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900 uppercase tracking-wide">
                Where to Stay
              </h4>
              <p className="text-gray-600 font-light leading-relaxed">
                From luxury hotels to budget hostels, Bangkok offers accommodation for every budget.
                Popular areas include Sukhumvit, Silom, and Khao San Road.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900 uppercase tracking-wide">
                When to Go
              </h4>
              <p className="text-gray-600 font-light leading-relaxed">
                The cool season (November to February) offers the most pleasant weather.
                Hot season peaks in April-May, and rainy season runs June-October.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pink-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900 uppercase tracking-wide">
                Budget Tips
              </h4>
              <p className="text-gray-600 font-light leading-relaxed">
                Street food is incredible and affordable. Use public transport, visit free temples,
                and shop at local markets to stretch your baht further.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-gray-900 uppercase tracking-wide text-center">
            Essential Bangkok Experiences
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: 'url(https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=800)'
              }}></div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 uppercase tracking-wide">
                  Temple Hopping
                </h3>
                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  Visit the Grand Palace, Wat Pho's reclining Buddha, and Wat Arun's stunning spires.
                  Don't miss Wat Saket (Golden Mount) for panoramic city views.
                </p>
                <a href="#" className="text-[#d7007f] font-medium hover:text-[#d7007f] uppercase text-sm tracking-wider">
                  Explore Bangkok Temples →
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: 'url(https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800)'
              }}></div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 uppercase tracking-wide">
                  Street Food Paradise
                </h3>
                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  From pad thai to boat noodles, Bangkok's street food scene is legendary.
                  Head to Chinatown's Yaowarat Road for the ultimate food adventure.
                </p>
                <a href="#" className="text-[#d7007f] font-medium hover:text-[#d7007f] uppercase text-sm tracking-wider">
                  Best Street Food Spots →
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: 'url(https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg?auto=compress&cs=tinysrgb&w=800)'
              }}></div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 uppercase tracking-wide">
                  Rooftop Bars
                </h3>
                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  Watch the sunset from Sky Bar, Vertigo, or Octave. Bangkok's rooftop scene
                  offers spectacular views and sophisticated cocktails.
                </p>
                <a href="#" className="text-[#d7007f] font-medium hover:text-[#d7007f] uppercase text-sm tracking-wider">
                  Top Rooftop Venues →
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: 'url(https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800)'
              }}></div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 uppercase tracking-wide">
                  Market Adventures
                </h3>
                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  Explore Chatuchak Weekend Market, floating markets, or the train market at Maeklong.
                  Each offers unique shopping experiences.
                </p>
                <a href="#" className="text-[#d7007f] font-medium hover:text-[#d7007f] uppercase text-sm tracking-wider">
                  Guide to Bangkok Markets →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900 uppercase tracking-wide text-center">
            Top Things to Do in Bangkok
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg font-light">
            Explore Bangkok's best attractions, experiences, and hidden gems
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-56 bg-cover bg-center relative" style={{
                backgroundImage: 'url(https://images.pexels.com/photos/6469103/pexels-photo-6469103.jpeg?auto=compress&cs=tinysrgb&w=800)'
              }}>
                <div className="absolute top-4 left-4 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-2xl shadow-lg font-bold text-white">
                  T
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 uppercase tracking-wide">
                  Temples & Culture
                </h3>
                <p className="text-sm text-gray-500 mb-4 font-medium">200 guides</p>
                <ul className="space-y-2 mb-6 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#d7007f] mr-2">•</span>
                    <span className="font-light">Grand Palace & Wat Phra Kaew</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d7007f] mr-2">•</span>
                    <span className="font-light">Wat Pho (Reclining Buddha)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d7007f] mr-2">•</span>
                    <span className="font-light">Wat Arun (Temple of Dawn)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d7007f] mr-2">•</span>
                    <span className="font-light">Wat Saket (Golden Mount)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d7007f] mr-2">•</span>
                    <span className="font-light">Jim Thompson House</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d7007f] mr-2">•</span>
                    <span className="font-light">Vimanmek Mansion</span>
                  </li>
                </ul>
                <a href="#" className="text-[#d7007f] font-medium hover:text-[#d7007f] uppercase text-sm tracking-wider inline-flex items-center">
                  Browse all temple guides →
                </a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-56 bg-cover bg-center relative" style={{
                backgroundImage: 'url(https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800)'
              }}>
                <div className="absolute top-4 left-4 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-2xl shadow-lg font-bold text-white">
                  F
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 uppercase tracking-wide">
                  Food & Markets
                </h3>
                <p className="text-sm text-gray-500 mb-4 font-medium">250 guides</p>
                <ul className="space-y-2 mb-6 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span className="font-light">Chinatown Street Food Tour</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span className="font-light">Chatuchak Weekend Market</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span className="font-light">Floating Markets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span className="font-light">Michelin Street Food</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span className="font-light">Rooftop Restaurants</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span className="font-light">Thai Cooking Classes</span>
                  </li>
                </ul>
                <a href="#" className="text-orange-700 font-medium hover:text-orange-900 uppercase text-sm tracking-wider inline-flex items-center">
                  Browse all food guides →
                </a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-56 bg-cover bg-center relative" style={{
                backgroundImage: 'url(https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg?auto=compress&cs=tinysrgb&w=800)'
              }}>
                <div className="absolute top-4 left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-2xl shadow-lg font-bold text-white">
                  M
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 uppercase tracking-wide">
                  Modern Bangkok
                </h3>
                <p className="text-sm text-gray-500 mb-4 font-medium">150 guides</p>
                <ul className="space-y-2 mb-6 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="font-light">Rooftop Bars & Sky Lounges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="font-light">Luxury Shopping Malls</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="font-light">Contemporary Art Galleries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="font-light">IconSiam & Asiatique</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="font-light">Thonglor & Ekkamai Scene</span>
                  </li>
                </ul>
                <a href="#" className="text-blue-700 font-medium hover:text-blue-900 uppercase text-sm tracking-wider inline-flex items-center">
                  Explore modern Bangkok →
                </a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-56 bg-cover bg-center relative" style={{
                backgroundImage: 'url(https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&w=800)'
              }}>
                <div className="absolute top-4 left-4 w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center text-2xl shadow-lg font-bold text-white">
                  N
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 uppercase tracking-wide">
                  Nightlife
                </h3>
                <p className="text-sm text-gray-500 mb-4 font-medium">150 guides</p>
                <ul className="space-y-2 mb-6 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-violet-600 mr-2">•</span>
                    <span className="font-light">Khao San Road Scene</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-violet-600 mr-2">•</span>
                    <span className="font-light">Sukhumvit Nightlife</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-violet-600 mr-2">•</span>
                    <span className="font-light">RCA & Thonglor Clubs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-violet-600 mr-2">•</span>
                    <span className="font-light">Live Music Venues</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-violet-600 mr-2">•</span>
                    <span className="font-light">Night Markets</span>
                  </li>
                </ul>
                <a href="#" className="text-violet-700 font-medium hover:text-violet-900 uppercase text-sm tracking-wider inline-flex items-center">
                  Browse nightlife guides →
                </a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-56 bg-cover bg-center relative" style={{
                backgroundImage: 'url(https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800)'
              }}>
                <div className="absolute top-4 left-4 w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-2xl shadow-lg font-bold text-white">
                  R
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 uppercase tracking-wide">
                  River & Canals
                </h3>
                <p className="text-sm text-gray-500 mb-4 font-medium">50 guides</p>
                <ul className="space-y-2 mb-6 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span className="font-light">Chao Phraya River Cruises</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span className="font-light">Canal Tours (Khlong)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span className="font-light">River Taxis & Ferries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span className="font-light">Riverside Dining</span>
                  </li>
                </ul>
                <a href="#" className="text-cyan-700 font-medium hover:text-cyan-900 uppercase text-sm tracking-wider inline-flex items-center">
                  Explore river activities →
                </a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-56 bg-cover bg-center relative" style={{
                backgroundImage: 'url(https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=800)'
              }}>
                <div className="absolute top-4 left-4 w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center text-2xl shadow-lg font-bold text-white">
                  S
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 uppercase tracking-wide">
                  Shopping
                </h3>
                <p className="text-sm text-gray-500 mb-4 font-medium">200 guides</p>
                <ul className="space-y-2 mb-6 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-rose-600 mr-2">•</span>
                    <span className="font-light">Siam Paragon & CentralWorld</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-600 mr-2">•</span>
                    <span className="font-light">MBK Center</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-600 mr-2">•</span>
                    <span className="font-light">Pratunam Market</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-600 mr-2">•</span>
                    <span className="font-light">Chatuchak Weekend Market</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-600 mr-2">•</span>
                    <span className="font-light">Terminal 21</span>
                  </li>
                </ul>
                <a href="#" className="text-rose-700 font-medium hover:text-rose-900 uppercase text-sm tracking-wider inline-flex items-center">
                  Shopping guides →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900 uppercase tracking-wide text-center">
            Best Places to Stay in Bangkok
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg font-light">
            600 guides
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-3xl shadow-md mr-4 flex-shrink-0 font-bold text-white">
                  S
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 uppercase tracking-wide mb-1">
                    Sukhumvit
                  </h3>
                  <p className="text-sm text-gray-500 font-medium">200 guides</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Best for:
                  </p>
                  <p className="text-gray-700 font-light">
                    Shopping, nightlife, restaurants, BTS access
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Popular with:
                  </p>
                  <p className="text-gray-700 font-light">
                    First-time visitors, couples, solo travelers
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Price Range:
                  </p>
                  <p className="text-2xl font-bold text-[#d7007f]">
                    $25-300<span className="text-base font-light text-gray-600">/night</span>
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Highlights:
                  </p>
                  <p className="text-gray-700 font-light">
                    Central location, excellent transport, dining scene
                  </p>
                </div>
              </div>

              <a href="#" className="inline-flex items-center text-[#d7007f] font-medium hover:text-[#d7007f] uppercase text-sm tracking-wider">
                Browse Sukhumvit Hotels →
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="w-14 h-14 bg-amber-600 rounded-full flex items-center justify-center text-3xl shadow-md mr-4 flex-shrink-0 font-bold text-white">
                  R
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 uppercase tracking-wide mb-1">
                    Riverside
                  </h3>
                  <p className="text-sm text-gray-500 font-medium">150 guides</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Best for:
                  </p>
                  <p className="text-gray-700 font-light">
                    Luxury hotels, river views, romantic getaways
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Popular with:
                  </p>
                  <p className="text-gray-700 font-light">
                    Couples, luxury travelers, honeymoons
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Price Range:
                  </p>
                  <p className="text-2xl font-bold text-[#d7007f]">
                    $100-500<span className="text-base font-light text-gray-600">/night</span>
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Highlights:
                  </p>
                  <p className="text-gray-700 font-light">
                    Iconic hotels, peaceful, river cruises
                  </p>
                </div>
              </div>

              <a href="#" className="inline-flex items-center text-[#d7007f] font-medium hover:text-[#d7007f] uppercase text-sm tracking-wider">
                Browse Riverside Hotels →
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center text-3xl shadow-md mr-4 flex-shrink-0 font-bold text-white">
                  K
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 uppercase tracking-wide mb-1">
                    Khao San Road
                  </h3>
                  <p className="text-sm text-gray-500 font-medium">100 guides</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Best for:
                  </p>
                  <p className="text-gray-700 font-light">
                    Budget travelers, backpackers, party scene
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Popular with:
                  </p>
                  <p className="text-gray-700 font-light">
                    Young travelers, solo backpackers
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Price Range:
                  </p>
                  <p className="text-2xl font-bold text-[#d7007f]">
                    $8-40<span className="text-base font-light text-gray-600">/night</span>
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Highlights:
                  </p>
                  <p className="text-gray-700 font-light">
                    Social atmosphere, cheap food, nightlife
                  </p>
                </div>
              </div>

              <a href="#" className="inline-flex items-center text-[#d7007f] font-medium hover:text-[#d7007f] uppercase text-sm tracking-wider">
                Browse Khao San Hotels →
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="w-14 h-14 bg-rose-600 rounded-full flex items-center justify-center text-3xl shadow-md mr-4 flex-shrink-0 font-bold text-white">
                  S
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 uppercase tracking-wide mb-1">
                    Siam & Silom
                  </h3>
                  <p className="text-sm text-gray-500 font-medium">150 guides</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Best for:
                  </p>
                  <p className="text-gray-700 font-light">
                    Shopping, central location, business travelers
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Popular with:
                  </p>
                  <p className="text-gray-700 font-light">
                    Shoppers, business travelers
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Price Range:
                  </p>
                  <p className="text-2xl font-bold text-[#d7007f]">
                    $40-250<span className="text-base font-light text-gray-600">/night</span>
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Highlights:
                  </p>
                  <p className="text-gray-700 font-light">
                    Shopping malls, BTS access, diverse dining
                  </p>
                </div>
              </div>

              <a href="#" className="inline-flex items-center text-[#d7007f] font-medium hover:text-[#d7007f] uppercase text-sm tracking-wider">
                Browse Siam Hotels →
              </a>
            </div>
          </div>

          <div className="text-center">
            <a href="#" className="inline-block bg-[#d7007f] text-white px-8 py-4 rounded-lg hover:bg-[#d7007f] transition-colors font-medium uppercase text-sm tracking-wider shadow-lg hover:shadow-xl">
              View All Bangkok Accommodation →
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900 uppercase tracking-wide text-center">
            Food & Dining in Bangkok
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg font-light">
            500 Restaurant & Food Guides
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-2xl shadow-md mr-4 flex-shrink-0 font-bold text-white">
                  R
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 uppercase tracking-wide">
                    Best Restaurants
                  </h3>
                  <p className="text-sm text-gray-500 font-medium">100 guides</p>
                </div>
              </div>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span className="font-light">Michelin Star Restaurants</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span className="font-light">Best Thai Restaurants</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span className="font-light">International Fine Dining</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span className="font-light">Budget-Friendly Eats</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span className="font-light">Hidden Gems</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-2xl shadow-md mr-4 flex-shrink-0 font-bold text-white">
                  S
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 uppercase tracking-wide">
                    Street Food
                  </h3>
                  <p className="text-sm text-gray-500 font-medium">150 guides</p>
                </div>
              </div>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span className="font-light">Chinatown Food Guide</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span className="font-light">Best Street Food by Area</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span className="font-light">Night Market Food</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span className="font-light">Famous Street Food Stalls</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span className="font-light">Street Food Safety Tips</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-2xl shadow-md mr-4 flex-shrink-0 font-bold text-white">
                  E
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 uppercase tracking-wide">
                    Food Experiences
                  </h3>
                  <p className="text-sm text-gray-500 font-medium">100 guides</p>
                </div>
              </div>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span className="font-light">Thai Cooking Classes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span className="font-light">Food Tours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span className="font-light">Market Tours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span className="font-light">Farm-to-Table Experiences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span className="font-light">Dining Cruises</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#d7007f] rounded-full flex items-center justify-center text-2xl shadow-md mr-4 flex-shrink-0 font-bold text-white">
                  C
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 uppercase tracking-wide">
                    By Cuisine
                  </h3>
                  <p className="text-sm text-gray-500 font-medium">150 guides</p>
                </div>
              </div>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#d7007f] mr-2">•</span>
                  <span className="font-light">Thai Restaurants</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d7007f] mr-2">•</span>
                  <span className="font-light">Chinese & Asian</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d7007f] mr-2">•</span>
                  <span className="font-light">Western & European</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d7007f] mr-2">•</span>
                  <span className="font-light">Middle Eastern</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d7007f] mr-2">•</span>
                  <span className="font-light">Vegetarian & Vegan</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a href="#" className="inline-block bg-[#d7007f] text-white px-8 py-4 rounded-lg hover:bg-[#d7007f] transition-colors font-medium uppercase text-sm tracking-wider shadow-lg hover:shadow-xl">
              Explore All Bangkok Food Guides →
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900 uppercase tracking-wide text-center">
            Itineraries & Trip Planning
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg font-light">
            300 Bangkok Itineraries
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#d7007f] rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold text-white text-lg">
                  3D
                </div>
                <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide">
                  3-Day Bangkok
                </h3>
              </div>
              <p className="text-gray-700 font-light mb-6">
                Perfect first-time itinerary hitting all major highlights
              </p>
              <a href="#" className="inline-flex items-center text-[#d7007f] font-medium hover:text-[#d7007f] uppercase text-sm tracking-wider">
                Read Full Itinerary →
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#d7007f] rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold text-white text-lg">
                  5D
                </div>
                <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide">
                  5-Day Bangkok
                </h3>
              </div>
              <p className="text-gray-700 font-light mb-6">
                Complete experience with day trips and hidden gems
              </p>
              <a href="#" className="inline-flex items-center text-[#d7007f] font-medium hover:text-[#d7007f] uppercase text-sm tracking-wider">
                Read Full Itinerary →
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#d7007f] rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold text-white text-lg">
                  2D
                </div>
                <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide">
                  Weekend (48 Hours)
                </h3>
              </div>
              <p className="text-gray-700 font-light mb-6">
                Make the most of a short visit
              </p>
              <a href="#" className="inline-flex items-center text-[#d7007f] font-medium hover:text-[#d7007f] uppercase text-sm tracking-wider">
                Read Full Itinerary →
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold text-white text-lg">
                  K
                </div>
                <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide">
                  Bangkok with Kids
                </h3>
              </div>
              <p className="text-gray-700 font-light mb-6">
                Family-friendly attractions and activities
              </p>
              <a href="#" className="inline-flex items-center text-[#d7007f] font-medium hover:text-[#d7007f] uppercase text-sm tracking-wider">
                Read Full Itinerary →
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold text-white text-lg">
                  B
                </div>
                <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide">
                  Bangkok on a Budget
                </h3>
              </div>
              <p className="text-gray-700 font-light mb-6">
                Backpacker's guide to budget travel
              </p>
              <a href="#" className="inline-flex items-center text-[#d7007f] font-medium hover:text-[#d7007f] uppercase text-sm tracking-wider">
                Read Full Itinerary →
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold text-white text-lg">
                  L
                </div>
                <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide">
                  Luxury Bangkok
                </h3>
              </div>
              <p className="text-gray-700 font-light mb-6">
                High-end experiences and five-star hotels
              </p>
              <a href="#" className="inline-flex items-center text-[#d7007f] font-medium hover:text-[#d7007f] uppercase text-sm tracking-wider">
                Read Full Itinerary →
              </a>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 uppercase tracking-wide mb-6 text-center">
              Special Interest Itineraries
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="#" className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors group">
                <span className="text-[#d7007f] mr-3 font-bold">•</span>
                <span className="font-light text-gray-700 group-hover:text-[#d7007f]">Bangkok for Food Lovers</span>
              </a>
              <a href="#" className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors group">
                <span className="text-[#d7007f] mr-3 font-bold">•</span>
                <span className="font-light text-gray-700 group-hover:text-[#d7007f]">Bangkok Temple Trail</span>
              </a>
              <a href="#" className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors group">
                <span className="text-[#d7007f] mr-3 font-bold">•</span>
                <span className="font-light text-gray-700 group-hover:text-[#d7007f]">Bangkok Nightlife Guide</span>
              </a>
              <a href="#" className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors group">
                <span className="text-[#d7007f] mr-3 font-bold">•</span>
                <span className="font-light text-gray-700 group-hover:text-[#d7007f]">Bangkok Shopping Marathon</span>
              </a>
              <a href="#" className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors group">
                <span className="text-[#d7007f] mr-3 font-bold">•</span>
                <span className="font-light text-gray-700 group-hover:text-[#d7007f]">Bangkok Off the Beaten Path</span>
              </a>
              <a href="#" className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors group">
                <span className="text-[#d7007f] mr-3 font-bold">•</span>
                <span className="font-light text-gray-700 group-hover:text-[#d7007f]">Bangkok Photography Tour</span>
              </a>
            </div>
          </div>

          <div className="text-center">
            <a href="#" className="inline-block bg-[#d7007f] text-white px-8 py-4 rounded-lg hover:bg-[#d7007f] transition-colors font-medium uppercase text-sm tracking-wider shadow-lg hover:shadow-xl">
              Browse All Bangkok Itineraries →
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900 uppercase tracking-wide text-center">
            Neighborhoods
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg font-light">
            997 Neighborhood Guides
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="flex items-start p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide mb-2">
                  Sukhumvit
                </h3>
                <p className="text-sm text-[#d7007f] font-medium mb-2">200 articles</p>
                <p className="text-gray-700 font-light">
                  Modern, expat-friendly, excellent dining
                </p>
              </div>
            </div>

            <div className="flex items-start p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide mb-2">
                  Silom
                </h3>
                <p className="text-sm text-[#d7007f] font-medium mb-2">150 articles</p>
                <p className="text-gray-700 font-light">
                  Business district, nightlife, street food
                </p>
              </div>
            </div>

            <div className="flex items-start p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide mb-2">
                  Riverside
                </h3>
                <p className="text-sm text-[#d7007f] font-medium mb-2">150 articles</p>
                <p className="text-gray-700 font-light">
                  Historic, luxury hotels, peaceful
                </p>
              </div>
            </div>

            <div className="flex items-start p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide mb-2">
                  Khao San
                </h3>
                <p className="text-sm text-[#d7007f] font-medium mb-2">100 articles</p>
                <p className="text-gray-700 font-light">
                  Backpacker central, party scene
                </p>
              </div>
            </div>

            <div className="flex items-start p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide mb-2">
                  Siam
                </h3>
                <p className="text-sm text-[#d7007f] font-medium mb-2">150 articles</p>
                <p className="text-gray-700 font-light">
                  Shopping hub, central location
                </p>
              </div>
            </div>

            <div className="flex items-start p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide mb-2">
                  Thonglor
                </h3>
                <p className="text-sm text-[#d7007f] font-medium mb-2">100 articles</p>
                <p className="text-gray-700 font-light">
                  Hip, trendy, upscale dining
                </p>
              </div>
            </div>

            <div className="flex items-start p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide mb-2">
                  Chinatown
                </h3>
                <p className="text-sm text-[#d7007f] font-medium mb-2">80 articles</p>
                <p className="text-gray-700 font-light">
                  Historic, street food paradise
                </p>
              </div>
            </div>

            <div className="flex items-start p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide mb-2">
                  Rattanakosin
                </h3>
                <p className="text-sm text-[#d7007f] font-medium mb-2">67 articles</p>
                <p className="text-gray-700 font-light">
                  Old city, temples, culture
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="#" className="inline-block bg-[#d7007f] text-white px-8 py-4 rounded-lg hover:bg-[#d7007f] transition-colors font-medium uppercase text-sm tracking-wider shadow-lg hover:shadow-xl">
              Explore All Neighborhoods →
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-gray-900 uppercase tracking-wide text-center">
            Getting Around Bangkok
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold text-white text-xl">
                  A
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 uppercase tracking-wide">
                  From the Airport
                </h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#d7007f] mr-2 font-bold">•</span>
                  <div>
                    <span className="font-semibold">Airport Rail Link</span>
                    <span className="font-light"> - $1.50, 30 min</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d7007f] mr-2 font-bold">•</span>
                  <div>
                    <span className="font-semibold">Metered Taxi</span>
                    <span className="font-light"> - $10-15, 45-90 min</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d7007f] mr-2 font-bold">•</span>
                  <div>
                    <span className="font-semibold">Airport Limousine</span>
                    <span className="font-light"> - $25-40</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d7007f] mr-2 font-bold">•</span>
                  <div>
                    <span className="font-semibold">Grab/Bolt rideshare</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold text-white text-xl">
                  M
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 uppercase tracking-wide">
                  BTS Skytrain & MRT
                </h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#d7007f] mr-2 font-bold">•</span>
                  <span className="font-light">Most convenient for tourists</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d7007f] mr-2 font-bold">•</span>
                  <span className="font-light">Rabbit Card for multiple trips</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d7007f] mr-2 font-bold">•</span>
                  <span className="font-light">Runs 6am-midnight</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d7007f] mr-2 font-bold">•</span>
                  <span className="font-light">$0.50-1.50 per trip</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold text-white text-xl">
                  T
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 uppercase tracking-wide">
                  Taxis & Rideshare
                </h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#d7007f] mr-2 font-bold">•</span>
                  <span className="font-light">Always use meter</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d7007f] mr-2 font-bold">•</span>
                  <span className="font-light">Grab/Bolt apps reliable</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d7007f] mr-2 font-bold">•</span>
                  <span className="font-light">Starting fare ~$1.20</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold text-white text-xl">
                  M
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 uppercase tracking-wide">
                  Motorcycle Taxis
                </h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#d7007f] mr-2 font-bold">•</span>
                  <span className="font-light">Orange vests</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d7007f] mr-2 font-bold">•</span>
                  <span className="font-light">Short distances only</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d7007f] mr-2 font-bold">•</span>
                  <span className="font-light">Negotiate price first</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d7007f] mr-2 font-bold">•</span>
                  <span className="font-light">$0.50-2 per ride</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold text-white text-xl">
                  R
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 uppercase tracking-wide">
                  River Transport
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#d7007f] mr-2 font-bold">•</span>
                    <span className="font-light">Chao Phraya Express Boats</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d7007f] mr-2 font-bold">•</span>
                    <span className="font-light">Scenic & practical</span>
                  </li>
                </ul>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#d7007f] mr-2 font-bold">•</span>
                    <span className="font-light">$0.40-1 per trip</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d7007f] mr-2 font-bold">•</span>
                    <span className="font-light">Avoids traffic</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="#" className="inline-flex items-center text-[#d7007f] font-medium hover:text-[#d7007f] uppercase text-sm tracking-wider">
              Complete Transportation Guide →
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-gray-900 uppercase tracking-wide text-center">
            Practical Information
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <a href="#" className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-white text-xl">
                $
              </div>
              <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide group-hover:text-[#d7007f]">
                Budget & Costs
              </h3>
            </a>

            <a href="#" className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-white text-xl">
                W
              </div>
              <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide group-hover:text-[#d7007f]">
                Staying Connected
              </h3>
            </a>

            <a href="#" className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-white text-xl">
                H
              </div>
              <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide group-hover:text-[#d7007f]">
                Safety & Health
              </h3>
            </a>

            <a href="#" className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-white text-xl">
                L
              </div>
              <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide group-hover:text-[#d7007f]">
                Language
              </h3>
            </a>

            <a href="#" className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-white text-xl">
                W
              </div>
              <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide group-hover:text-[#d7007f]">
                Weather & When to Visit
              </h3>
            </a>
          </div>

          <div className="text-center">
            <a href="#" className="inline-flex items-center text-[#d7007f] font-medium hover:text-[#d7007f] uppercase text-sm tracking-wider">
              Browse All Practical Info →
            </a>
          </div>
        </div>
      </section>

      <RelatedGuides guides={relatedGuides} />

      <section className="py-16 md:py-24 bg-pink-50">
        <div className="max-w-[800px] mx-auto px-6 lg:px-12">
          <div className="bg-white border-2 border-pink-200 rounded-lg p-12 text-center shadow-lg">
            <div className="w-16 h-16 bg-[#d7007f] rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-white text-3xl">
              ?
            </div>
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-900 uppercase tracking-wide">
              Planning Your Bangkok Trip?
            </h2>
            <p className="text-gray-700 font-light text-lg mb-8 leading-relaxed">
              Have questions about Bangkok? Our Thailand experts are here to help with personalized advice!
            </p>
            <a href="/contact" className="inline-block bg-[#d7007f] text-white px-10 py-4 rounded-lg hover:bg-[#d7007f] transition-colors font-medium uppercase text-sm tracking-wider shadow-lg hover:shadow-xl">
              Ask a Question →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
