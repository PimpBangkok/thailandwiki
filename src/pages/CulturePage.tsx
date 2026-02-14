import { ArrowRight, Building2, Heart, Users, BookOpen, Info, Calendar, MapPin, Sparkles, Music, MessageCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import Sidebar from '../components/Sidebar';
import YouMayAlsoLike from '../components/YouMayAlsoLike';
import { usePageMeta } from '../hooks/usePageMeta';

export default function CulturePage() {
  usePageMeta({
    title: 'Thai Culture Guide 2026 - Customs, Etiquette & Traditions | ThailandWiki',
    description: 'Understand Thai culture, customs, etiquette, and traditions. Learn about temples, festivals, respectful behavior, and authentic cultural experiences.',
  });
  const sections = [
    { id: 'temples-buddhism', label: 'Temples & Buddhism' },
    { id: 'etiquette-customs', label: 'Thai Etiquette & Customs' },
    { id: 'festivals-events', label: 'Festivals & Events' },
    { id: 'arts-traditions', label: 'Arts & Traditions' },
    { id: 'language-communication', label: 'Language & Communication' },
    { id: 'collections', label: 'Cultural Collections' }
  ];

  const templeGuides = [
    { label: 'How to Visit Thai Temples', sublabel: 'Essential etiquette', icon: Building2, path: '/thai-temples' },
    { label: 'Most Important Temples in Thailand', sublabel: 'Must-visit sacred sites', icon: MapPin, path: '/culture' },
    { label: 'Understanding Buddhist Practices', sublabel: 'Religious customs', icon: Heart, path: '/culture' },
    { label: 'Temple Architecture Guide', sublabel: 'Design and symbolism', icon: BookOpen, path: '/culture' },
    { label: "Bangkok's Best Temples", sublabel: 'Capital city temples', icon: Building2, path: '/destinations/bangkok' },
    { label: 'Chiang Mai Temple Guide', sublabel: 'Northern temple heritage', icon: Building2, path: '/destinations/chiang-mai' },
    { label: 'Temple Festivals & Ceremonies', sublabel: 'Cultural celebrations', icon: Calendar, path: '/culture' }
  ];

  const etiquetteGuides = [
    { label: 'The Wai (Thai Greeting)', sublabel: 'Traditional greeting customs', icon: Heart },
    { label: 'Respect for Royal Family', sublabel: 'Important protocols', icon: Users },
    { label: 'Dress Code Guidelines', sublabel: 'Appropriate attire', icon: Info },
    { label: 'Dos and Don\'ts in Thailand', sublabel: 'Cultural awareness', icon: BookOpen },
    { label: 'Monk Interaction Rules', sublabel: 'Respectful conduct', icon: Building2 },
    { label: 'Body Language & Gestures', sublabel: 'Non-verbal communication', icon: Users },
    { label: 'Gift Giving Customs', sublabel: 'Cultural traditions', icon: Heart }
  ];

  const festivalGuides = [
    { label: 'Songkran (Thai New Year)', sublabel: 'April water festival', icon: Calendar },
    { label: 'Loy Krathong (Lantern Festival)', sublabel: 'November floating lanterns', icon: Sparkles },
    { label: 'Yi Peng (Lantern Festival)', sublabel: 'Chiang Mai sky lanterns', icon: Sparkles },
    { label: 'Full Moon Parties', sublabel: 'Koh Phangan celebrations', icon: Calendar },
    { label: 'Vegetarian Festival', sublabel: 'Phuket spiritual event', icon: Heart },
    { label: 'Thai New Year Celebrations', sublabel: 'Nationwide festivities', icon: Calendar },
    { label: 'Regional Festivals Calendar', sublabel: 'Year-round events', icon: BookOpen }
  ];

  const artsGuides = [
    { label: 'Thai Classical Dance', sublabel: 'Traditional performances', icon: Music },
    { label: 'Muay Thai (Thai Boxing)', sublabel: 'National martial art', icon: Users },
    { label: 'Traditional Music', sublabel: 'Instruments and styles', icon: Music },
    { label: 'Thai Handicrafts', sublabel: 'Traditional craftsmanship', icon: Sparkles },
    { label: 'Traditional Massage', sublabel: 'Ancient healing art', icon: Heart },
    { label: 'Thai Silk & Textiles', sublabel: 'Weaving traditions', icon: Sparkles }
  ];

  const languageGuides = [
    { label: 'Essential Thai Phrases', sublabel: 'Must-know expressions', icon: MessageCircle },
    { label: 'Learn Thai Basics', sublabel: 'Beginner\'s guide', icon: BookOpen },
    { label: 'Thai Alphabet Guide', sublabel: 'Reading and writing', icon: BookOpen },
    { label: 'Regional Dialects', sublabel: 'Language variations', icon: MapPin },
    { label: 'Polite Language Tips', sublabel: 'Respectful communication', icon: Heart },
    { label: 'Thai Numbers & Counting', sublabel: 'Basic numeracy', icon: Info }
  ];

  const collections = [
    { title: 'Top 10 Cultural Experiences', count: '10 guides', icon: Star },
    { title: 'Most Sacred Temples', count: '15 temples', icon: Building2 },
    { title: 'Best Cultural Shows', count: '12 shows', icon: Music },
    { title: 'Traditional Craft Villages', count: '8 locations', icon: Sparkles }
  ];

  const youMayAlsoLike = [
    { title: 'Thai Temple Etiquette', path: '/culture' },
    { title: 'Bangkok Temple Guide', path: '/destinations/bangkok' },
    { title: 'Thai Festivals & Events', path: '/culture' },
    { title: 'Thailand Safety Tips', path: '/practical' },
    { title: 'What to Pack for Thailand', path: '/travel-planning' },
    { title: 'Thai Food Culture', path: '/food' }
  ];

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Home', path: '/' },
          { label: 'Thai Culture' }
        ]}
      />

      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=2000&q=80"
            alt="Thai temple and cultural heritage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2D2D2D]/70 via-[#2D2D2D]/60 to-[#2D2D2D]/80"></div>
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full mb-8">
            <Building2 className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-[2px]">Thai Culture</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 uppercase tracking-[3px] leading-tight">
            Thai Culture
            <br />
            <span className="text-[#FDB515]">& Traditions</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed max-w-3xl mx-auto">
            Understanding Thailand's Rich Heritage
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-lg">
            <div className="flex items-center gap-2">
              <Info className="w-5 h-5 text-[#FDB515]" />
              <span>400+ Cultural Guides</span>
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
                  Thailand's culture is deeply rooted in Buddhism, monarchy, and ancient traditions.
                  Understanding Thai customs, etiquette, and cultural practices enhances your travel
                  experience and shows respect for local communities.
                </p>
              </div>

              <div id="temples-buddhism" className="mb-20 scroll-mt-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-amber-600/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[2px] text-[#2D2D2D]">
                      Temples & Buddhism
                    </h2>
                    <p className="text-gray-600 mt-1">150 guides to understanding temple culture</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 md:p-12 mb-12">
                  <div className="mb-8">
                    <img
                      src="https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=1200&q=80"
                      alt="Beautiful Thai temple architecture"
                      loading="lazy"
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Temple Guides</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {templeGuides.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={index}
                          to={item.path}
                          className="group flex items-center gap-4 p-5 bg-white rounded-lg hover:bg-amber-50 transition-all border border-gray-100 hover:border-amber-200 shadow-sm hover:shadow-md"
                        >
                          <div className="w-12 h-12 rounded-full bg-amber-600/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-600/20 transition-colors">
                            <IconComponent className="w-6 h-6 text-amber-700" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 group-hover:text-amber-700 transition-colors">
                              {item.label}
                            </h4>
                            <p className="text-sm text-gray-600">{item.sublabel}</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-amber-700 group-hover:translate-x-1 transition-all" />
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    to="/culture"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-amber-700 text-white hover:bg-amber-800 transition-colors rounded-lg font-semibold shadow-lg hover:shadow-xl uppercase tracking-[1.5px]"
                  >
                    Explore Temple Culture
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div className="border-b border-gray-200 mb-16"></div>

              <div id="etiquette-customs" className="mb-20 scroll-mt-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-rose-600/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-rose-700" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[2px] text-[#2D2D2D]">
                      Thai Etiquette & Customs
                    </h2>
                    <p className="text-gray-600 mt-1">100 guides to respectful cultural interaction</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 md:p-12 mb-12">
                  <div className="mb-8">
                    <img
                      src="https://images.unsplash.com/photo-1552550049-db097c9480d1?auto=format&fit=crop&w=1200&q=80"
                      alt="Thai wai greeting gesture"
                      loading="lazy"
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Cultural Etiquette</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {etiquetteGuides.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={index}
                          to="/culture"
                          className="group flex items-center gap-4 p-5 bg-white rounded-lg hover:bg-rose-50 transition-all border border-gray-100 hover:border-rose-200 shadow-sm hover:shadow-md"
                        >
                          <div className="w-12 h-12 rounded-full bg-rose-600/10 flex items-center justify-center flex-shrink-0 group-hover:bg-rose-600/20 transition-colors">
                            <IconComponent className="w-6 h-6 text-rose-700" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 group-hover:text-rose-700 transition-colors">
                              {item.label}
                            </h4>
                            <p className="text-sm text-gray-600">{item.sublabel}</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-rose-700 group-hover:translate-x-1 transition-all" />
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    to="/culture"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-rose-700 text-white hover:bg-rose-800 transition-colors rounded-lg font-semibold shadow-lg hover:shadow-xl uppercase tracking-[1.5px]"
                  >
                    Complete Etiquette Guide
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div className="border-b border-gray-200 mb-16"></div>

              <div id="festivals-events" className="mb-20 scroll-mt-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-orange-600/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-orange-700" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[2px] text-[#2D2D2D]">
                      Festivals & Events
                    </h2>
                    <p className="text-gray-600 mt-1">100 guides to Thai celebrations</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 md:p-12 mb-12">
                  <div className="mb-8">
                    <img
                      src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1200&q=80"
                      alt="Thai festival celebrations with lanterns"
                      loading="lazy"
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Major Festivals</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {festivalGuides.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={index}
                          to="/culture"
                          className="group flex items-center gap-4 p-5 bg-white rounded-lg hover:bg-orange-50 transition-all border border-gray-100 hover:border-orange-200 shadow-sm hover:shadow-md"
                        >
                          <div className="w-12 h-12 rounded-full bg-orange-600/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-600/20 transition-colors">
                            <IconComponent className="w-6 h-6 text-orange-700" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 group-hover:text-orange-700 transition-colors">
                              {item.label}
                            </h4>
                            <p className="text-sm text-gray-600">{item.sublabel}</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-700 group-hover:translate-x-1 transition-all" />
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    to="/culture"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-orange-700 text-white hover:bg-orange-800 transition-colors rounded-lg font-semibold shadow-lg hover:shadow-xl uppercase tracking-[1.5px]"
                  >
                    Festival Guide
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div className="border-b border-gray-200 mb-16"></div>

              <div id="arts-traditions" className="mb-20 scroll-mt-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                    <Music className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[2px] text-[#2D2D2D]">
                      Arts & Traditions
                    </h2>
                    <p className="text-gray-600 mt-1">50 guides to traditional Thai arts</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-8 md:p-12 mb-12">
                  <div className="mb-8">
                    <img
                      src="https://images.unsplash.com/photo-1551918120-9739cb430c6d?auto=format&fit=crop&w=1200&q=80"
                      alt="Traditional Thai dance performance"
                      loading="lazy"
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Traditional Arts</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {artsGuides.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={index}
                          to="/culture"
                          className="group flex items-center gap-4 p-5 bg-white rounded-lg hover:bg-blue-50 transition-all border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-md"
                        >
                          <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/20 transition-colors">
                            <IconComponent className="w-6 h-6 text-blue-700" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                              {item.label}
                            </h4>
                            <p className="text-sm text-gray-600">{item.sublabel}</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-700 group-hover:translate-x-1 transition-all" />
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    to="/culture"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-blue-700 text-white hover:bg-blue-800 transition-colors rounded-lg font-semibold shadow-lg hover:shadow-xl uppercase tracking-[1.5px]"
                  >
                    Explore Thai Arts
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div className="border-b border-gray-200 mb-16"></div>

              <div id="language-communication" className="mb-20 scroll-mt-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-green-600/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[2px] text-[#2D2D2D]">
                      Language & Communication
                    </h2>
                    <p className="text-gray-600 mt-1">Essential language guides for travelers</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 mb-12">
                  <div className="grid md:grid-cols-2 gap-4">
                    {languageGuides.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={index}
                          to="/culture"
                          className="group flex items-center gap-4 p-5 bg-white rounded-lg hover:bg-green-50 transition-all border border-gray-100 hover:border-green-200 shadow-sm hover:shadow-md"
                        >
                          <div className="w-12 h-12 rounded-full bg-green-600/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-600/20 transition-colors">
                            <IconComponent className="w-6 h-6 text-green-700" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                              {item.label}
                            </h4>
                            <p className="text-sm text-gray-600">{item.sublabel}</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-700 group-hover:translate-x-1 transition-all" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-200 mb-16"></div>

              <div id="collections" className="mb-20 scroll-mt-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-[#FDB515]/10 flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-[#FDB515]" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[2px] text-[#2D2D2D]">
                      Cultural Collections
                    </h2>
                    <p className="text-gray-600 mt-1">Curated guides for cultural immersion</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {collections.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <Link
                        key={index}
                        to="/culture"
                        className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#FDB515]/5 to-amber-100/50 p-8 hover:shadow-xl transition-all border border-amber-200/50 hover:border-amber-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 rounded-full bg-[#FDB515]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FDB515]/20 transition-colors">
                            <IconComponent className="w-7 h-7 text-[#FDB515]" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#FDB515] transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">{item.count}</p>
                            <div className="inline-flex items-center gap-2 text-[#FDB515] font-semibold text-sm">
                              Explore Collection
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
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

      <section className="py-32 bg-gradient-to-br from-[#2D2D2D] via-[#2a2a2a] to-[#1f1f1f] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#FDB515] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-[#FDB515]/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-8 border border-[#FDB515]/20">
              <MessageCircle className="w-10 h-10 text-[#FDB515]" />
            </div>
            <h2 className="text-5xl md:text-6xl font-light mb-8 uppercase tracking-[2px] leading-tight">
              Questions About
              <br />
              <span className="text-[#FDB515]">Thai Culture?</span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 font-light leading-relaxed text-gray-300">
              Ask our experts! Chat with us for personalized cultural advice and travel tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => {
                  const chatButton = document.querySelector('[data-chat-widget]') as HTMLButtonElement;
                  if (chatButton) chatButton.click();
                }}
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#FDB515] text-white hover:bg-[#D91680] transition-all rounded-lg font-semibold shadow-2xl hover:shadow-[#FDB515]/20 hover:scale-105 uppercase tracking-[1.5px]"
              >
                <MessageCircle className="w-5 h-5" />
                Chat with Experts
              </button>
              <Link
                to="/food-dining"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all rounded-lg font-semibold border border-white/20 hover:border-white/40 uppercase tracking-[1.5px]"
              >
                Thai Food Culture
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
