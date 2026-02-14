import { usePageMeta } from '../hooks/usePageMeta';
import Breadcrumb from '../components/Breadcrumb';
import RelatedGuides from '../components/RelatedGuides';
import {
  Star,
  MapPin,
  Clock,
  Users,
  Heart,
  CheckCircle2,
  XCircle,
  Info,
  Calendar,
  Globe,
  BookOpen,
  Home,
  DollarSign,
  Camera,
} from 'lucide-react';

export default function MonkChatMeditationPage() {
  usePageMeta(
    'Monk Chat and Meditation in Thailand 2026 - Complete Guide',
    'Connect with Buddhist monks through Monk Chat programs, meditation retreats, and temple stays. Free cultural exchange experiences in Chiang Mai, Bangkok and beyond.',
    'monk chat thailand, monk chat chiang mai, meditation retreat thailand, temple stay thailand, buddhist meditation thailand, wat suan dok monk chat, thai monks, buddhist temple thailand'
  );

  return (
    <>
      <div className="relative h-[500px] bg-gradient-to-br from-amber-900 to-orange-900 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/2404843/pexels-photo-2404843.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        ></div>
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light uppercase tracking-[3px] mb-6 drop-shadow-lg">
            Monk Chat and Meditation in Thailand
          </h1>
          <p className="text-xl sm:text-2xl font-light mb-8 drop-shadow-md">
            Connect with Buddhist monks, learn meditation, and experience temple life
          </p>
          <div className="flex items-center justify-center gap-4 text-sm sm:text-base flex-wrap">
            <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full">
              Free Cultural Exchange
            </span>
            <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full">
              All Backgrounds Welcome
            </span>
            <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full">
              Updated February 2026
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Culture', href: '/culture' },
              { label: 'Monk Chat and Meditation' },
            ]}
          />

          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-xl text-gray-700 leading-relaxed">
              Thailand offers unique opportunities to engage with Buddhist monks through "Monk Chat" programs,
              meditation retreats, temple stays, and dharma talks. These experiences provide deep cultural insight,
              spiritual growth, and authentic connection with Thai Buddhism. Whether you are curious about Buddhist
              philosophy, seeking meditation instruction, or wanting to understand Thai culture, monk chat programs
              welcome visitors of all backgrounds and religions.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              This comprehensive guide covers where to find monk chat sessions across Thailand, what to expect, how to
              participate respectfully, meditation retreat options, and temple stay experiences. Most programs are
              completely free (donation-based), making them accessible to all travelers. Updated February 2026.
            </p>
          </div>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                What is Monk Chat?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto"></div>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12 border-2 border-amber-200 mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">The Concept</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Monk Chat is an informal conversation program between Buddhist monks and visitors designed to create
                  meaningful cultural exchange and mutual learning.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 border-2 border-amber-200">
                    <div className="flex items-center gap-3 mb-3">
                      <BookOpen className="w-6 h-6 text-amber-600" />
                      <h4 className="font-bold text-gray-900">English Practice</h4>
                    </div>
                    <p className="text-gray-700 text-sm">Help monks practice English conversation skills</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-amber-200">
                    <div className="flex items-center gap-3 mb-3">
                      <Heart className="w-6 h-6 text-amber-600" />
                      <h4 className="font-bold text-gray-900">Share Teachings</h4>
                    </div>
                    <p className="text-gray-700 text-sm">Learn Buddhist philosophy and practices</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-amber-200">
                    <div className="flex items-center gap-3 mb-3">
                      <Globe className="w-6 h-6 text-amber-600" />
                      <h4 className="font-bold text-gray-900">Cultural Exchange</h4>
                    </div>
                    <p className="text-gray-700 text-sm">Promote cross-cultural understanding</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-amber-200">
                    <div className="flex items-center gap-3 mb-3">
                      <Info className="w-6 h-6 text-amber-600" />
                      <h4 className="font-bold text-gray-900">Answer Questions</h4>
                    </div>
                    <p className="text-gray-700 text-sm">Ask about Thai culture and monk life</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-amber-200">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="w-6 h-6 text-amber-600" />
                      <h4 className="font-bold text-gray-900">Connections</h4>
                    </div>
                    <p className="text-gray-700 text-sm">Create meaningful human connections</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-amber-200">
                    <div className="flex items-center gap-3 mb-3">
                      <DollarSign className="w-6 h-6 text-amber-600" />
                      <h4 className="font-bold text-gray-900">100% Free</h4>
                    </div>
                    <p className="text-gray-700 text-sm">Donation-based, never required</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8 border-2 border-orange-200 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">What Happens</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Sit with monk(s) in temple pavilion or courtyard</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Casual conversation format (not formal lecture)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Ask questions about Buddhism, meditation, Thai culture, monk life
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Monks share teachings and personal experiences</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Learn basic meditation techniques (sometimes)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Receive blessings if desired (optional)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Duration: 30 minutes to 2 hours (flexible)</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <DollarSign className="w-7 h-7 text-green-600" />
                      Cost
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <p className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Completely FREE</strong> (100% volunteer basis)
                        </span>
                      </p>
                      <p className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Donations appreciated but never required</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Money supports temple maintenance and monk education</span>
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <Users className="w-7 h-7 text-blue-600" />
                      Who Can Attend
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <p className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Anyone of any religion, nationality, age, background</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>No prior knowledge of Buddhism needed</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Open mind and respectful attitude expected</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Proper clothing required:</strong> shoulders and knees covered
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 mt-8 text-white">
                <h3 className="text-2xl font-bold mb-4">What Makes It Special</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Direct access to monks (rare in many cultures)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Learn authentic Buddhism (not tourist version)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Practice mindfulness and meditation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Understand Thai culture deeply</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Completely free cultural exchange</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Where to Find Monk Chat
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Chiang Mai is the monk chat capital of Thailand, with the most established and welcoming programs.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Chiang Mai - Most Popular City for Monk Chat
              </h3>

              <div className="space-y-8">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12 border-2 border-amber-200 shadow-xl">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">
                          MOST ESTABLISHED
                        </span>
                        <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                          BEST PROGRAM
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Wat Suan Dok</h3>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-5 h-5" />
                        <span>West of Old City on Suthep Road</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-6 h-6 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white rounded-xl p-6 border-2 border-amber-200">
                      <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-amber-600" />
                        Schedule
                      </h4>
                      <p className="text-gray-700 font-semibold mb-2">Monday, Wednesday, Friday</p>
                      <p className="text-gray-700">5:00 - 7:00 PM</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 border-2 border-amber-200">
                      <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5 text-amber-600" />
                        Participants
                      </h4>
                      <p className="text-gray-700">10-30 monks attend</p>
                      <p className="text-gray-700">20-50 visitors typical</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 border-2 border-amber-200">
                      <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <Home className="w-5 h-5 text-amber-600" />
                        Format
                      </h4>
                      <p className="text-gray-700">Outdoor pavilion</p>
                      <p className="text-gray-700">Casual atmosphere</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-orange-200 mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">What to Expect</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span>Arrive at 5:00 PM, find a seat in the pavilion</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span>Monks arrive and sit with small groups</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span>Rotate conversations every 20-30 minutes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span>Very casual, friendly atmosphere</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span>Popular with both monks and visitors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span>No registration required (just show up)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                      <p className="font-bold text-gray-900 mb-2">Best For</p>
                      <p className="text-gray-700 text-sm">
                        First-timers, most established program with many monks and welcoming atmosphere
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                      <p className="font-bold text-gray-900 mb-2">How to Get There</p>
                      <p className="text-gray-700 text-sm">Songthaew from Old City (20 THB, 15 minutes)</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl p-4 text-center">
                    <p className="text-xl font-bold text-white">Our Rating: 10/10</p>
                    <p className="text-amber-100">Best monk chat program in Thailand</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 border-2 border-blue-200 shadow-xl">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
                          CENTRAL OLD CITY
                        </span>
                        <span className="bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full">
                          INTIMATE
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Wat Chedi Luang</h3>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-5 h-5" />
                        <span>Center of Chiang Mai Old City</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4].map((star) => (
                        <Star key={star} className="w-6 h-6 fill-amber-400 text-amber-400" />
                      ))}
                      <Star className="w-6 h-6 fill-amber-400 text-amber-400" style={{ clipPath: 'inset(0 50% 0 0)' }} />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
                      <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-blue-600" />
                        Schedule
                      </h4>
                      <p className="text-gray-700 font-semibold mb-2">Daily</p>
                      <p className="text-gray-700">9:00 AM - 6:00 PM</p>
                      <p className="text-sm text-gray-600">(flexible walk-in)</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
                      <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-600" />
                        Participants
                      </h4>
                      <p className="text-gray-700">2-5 monks available</p>
                      <p className="text-gray-700">Fewer visitors</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
                      <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <Home className="w-5 h-5 text-blue-600" />
                        Format
                      </h4>
                      <p className="text-gray-700">Intimate groups</p>
                      <p className="text-gray-700">One-on-one possible</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-cyan-200 mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">What to Expect</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600 mt-1">•</span>
                        <span>Walk into temple complex</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600 mt-1">•</span>
                        <span>Find monk chat pavilion (ask staff for directions)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600 mt-1">•</span>
                        <span>Sit with available monk</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600 mt-1">•</span>
                        <span>One-on-one or small group conversation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600 mt-1">•</span>
                        <span>More personal than Wat Suan Dok</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600 mt-1">•</span>
                        <span>Combine with temple tour (beautiful golden chedi)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-4 text-center">
                    <p className="text-xl font-bold text-white">Our Rating: 9/10</p>
                    <p className="text-blue-100">More intimate than Suan Dok</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 border-2 border-green-200 shadow-xl">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                          FOREST TEMPLE
                        </span>
                        <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
                          MEDITATION FOCUS
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Wat Umong</h3>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-5 h-5" />
                        <span>West of Chiang Mai, Forest Setting</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4].map((star) => (
                        <Star key={star} className="w-6 h-6 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-green-200 mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">What to Expect</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span>Less structured than other programs (ask at temple office)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span>Beautiful forest temple with ancient tunnels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span>Monks available for conversation informally</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span>Focus on meditation instruction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span>Very peaceful atmosphere</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-200 mb-6">
                    <p className="text-sm text-gray-700">
                      <strong>Note:</strong> Not guaranteed monk chat availability, but the temple itself is worth
                      visiting for its unique architecture and serene forest setting.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-4 text-center">
                    <p className="text-xl font-bold text-white">Our Rating: 8/10</p>
                    <p className="text-green-100">Beautiful setting, less reliable schedule</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 border-2 border-purple-200 shadow-xl">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full">
                          MAJOR TEMPLE
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Wat Phra Singh</h3>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-5 h-5" />
                        <span>Old City Center (Walking Street)</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3].map((star) => (
                        <Star key={star} className="w-6 h-6 fill-amber-400 text-amber-400" />
                      ))}
                      <Star className="w-6 h-6 fill-amber-400 text-amber-400" style={{ clipPath: 'inset(0 50% 0 0)' }} />
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-purple-200 mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">What to Expect</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span>Less formal program than Suan Dok</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span>Ask at information desk for monk chat availability</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span>Sometimes available, sometimes not</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span>More formal temple atmosphere</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span>Good for combining with temple tour</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-4 text-center">
                    <p className="text-xl font-bold text-white">Our Rating: 7/10</p>
                    <p className="text-purple-100">Secondary option if others unavailable</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Monk Chat in Bangkok
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Bangkok has fewer monk chat programs but excellent meditation-focused opportunities.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200 shadow-xl">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full">
                        MEDITATION CENTER
                      </span>
                      <span className="bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full">
                        SERIOUS PRACTICE
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      Wat Mahathat (Section 5)
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-5 h-5" />
                      <span>Near Grand Palace, Sanam Luang</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="w-6 h-6 fill-amber-400 text-amber-400" />
                    ))}
                    <Star className="w-6 h-6 fill-amber-400 text-amber-400" style={{ clipPath: 'inset(0 50% 0 0)' }} />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-xl p-6 border-2 border-orange-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-orange-600" />
                      Schedule
                    </h4>
                    <p className="text-gray-700 font-semibold mb-2">Daily</p>
                    <p className="text-gray-700">7:00 AM - 10:00 PM</p>
                    <p className="text-sm text-gray-600">(meditation instruction)</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-orange-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-orange-600" />
                      Focus
                    </h4>
                    <p className="text-gray-700">Vipassana meditation</p>
                    <p className="text-gray-700">English instruction</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border-2 border-red-200 mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">What to Expect</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>More structured than Chiang Mai monk chats</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Focus on meditation instruction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Can do drop-in meditation class</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Or enroll in multi-day course</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>English instruction available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Less casual chat, more formal teaching</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Multi-day meditation retreats available</span>
                    </li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                    <p className="font-bold text-gray-900 mb-2">Best For</p>
                    <p className="text-gray-700 text-sm">
                      Serious meditation practice, not just conversation. Perfect for those wanting structured Buddhist
                      meditation training.
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                    <p className="font-bold text-gray-900 mb-2">Cost</p>
                    <p className="text-gray-700 text-sm">Donation-based. All instruction and courses are free.</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-4 text-center">
                  <p className="text-xl font-bold text-white">Our Rating: 9/10</p>
                  <p className="text-orange-100">Best for meditation, less casual chat</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-sm">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Wat Benchamabophit</h3>
                    <p className="text-gray-600">Marble Temple, Dusit District</p>
                    <div className="flex items-center gap-1 mt-2">
                      {[1, 2, 3].map((star) => (
                        <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="font-bold text-gray-900 mb-2">Schedule</p>
                      <p className="text-gray-700 text-sm">Informal, mornings best (8:00-11:00 AM)</p>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-2">What to Expect</p>
                      <p className="text-gray-700 text-sm">
                        No formal monk chat program. Approach monks respectfully and ask if they have time to talk. Some
                        monks happy to chat, others busy. Beautiful marble temple worth visiting anyway.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                      <p className="text-sm text-gray-700">
                        <strong>Rating: 6/10</strong> - No formal program, hit or miss
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-sm">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Wat Pho</h3>
                    <p className="text-gray-600">Temple of Reclining Buddha, Near Grand Palace</p>
                    <div className="flex items-center gap-1 mt-2">
                      {[1, 2].map((star) => (
                        <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                      <Star className="w-5 h-5 fill-amber-400 text-amber-400" style={{ clipPath: 'inset(0 50% 0 0)' }} />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="font-bold text-gray-900 mb-2">Schedule</p>
                      <p className="text-gray-700 text-sm">No formal monk chat, occasional dharma talks (check schedule)</p>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-2">What to Expect</p>
                      <p className="text-gray-700 text-sm">
                        Tourist-heavy temple with less intimate atmosphere. Occasional dharma talks in English. Can
                        sometimes chat with monks informally. Better to visit for the giant reclining Buddha.
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-2">Cost</p>
                      <p className="text-gray-700 text-sm">200 THB temple entry fee</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                      <p className="text-sm text-gray-700">
                        <strong>Rating: 5/10</strong> - Tourist temple, limited monk chat
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Monk Chat in Other Cities
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                While Chiang Mai and Bangkok have the most established programs, other cities offer informal monk chat
                opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <MapPin className="w-7 h-7 text-blue-600" />
                  Sukhothai
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p className="font-semibold">Wat Traphang Thong</p>
                  <p className="text-sm">Ask at temple for informal monk conversations</p>
                  <p className="text-sm">Less structured than Chiang Mai programs</p>
                  <p className="text-sm">Combine with historical park visit</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <MapPin className="w-7 h-7 text-green-600" />
                  Ayutthaya
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p className="text-sm">Various temples, inquire at visitor center</p>
                  <p className="text-sm">No formal programs but monks often willing to chat</p>
                  <p className="text-sm">
                    <strong>Best time:</strong> Morning hours (9:00-11:00 AM)
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <MapPin className="w-7 h-7 text-purple-600" />
                  Chiang Rai
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p className="font-semibold">Wat Rong Khun (White Temple)</p>
                  <p className="text-sm">Educational talks available about temple and Buddhism</p>
                  <p className="text-sm">Ask at information desk</p>
                  <p className="text-sm">More focused on temple architecture than monk chat</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border-2 border-orange-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <MapPin className="w-7 h-7 text-orange-600" />
                  Pai
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p className="font-semibold">Wat Phra That Mae Yen</p>
                  <p className="text-sm">Small community, informal chats possible</p>
                  <p className="text-sm">Walk up to hilltop temple</p>
                  <p className="text-sm">Monks sometimes available in afternoon</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                What to Ask Monks
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Approach conversations with genuine curiosity and respect. Here are helpful guidelines for meaningful
                exchanges.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <CheckCircle2 className="w-7 h-7 text-green-600" />
                    Good Questions
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>"Why did you become a monk?" (personal story)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>"What is daily life like as a monk?" (routine, schedule)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>"Can you explain karma, nirvana, or mindfulness?"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>"What are the main Buddhist teachings?"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>"How do I start meditating?"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>"What is the purpose of temples and offerings?"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>"How can Buddhism help with stress and anxiety?"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>"What are important Thai Buddhist traditions?"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>"What do monks eat?" (vegetarian practices)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>"Can you teach me basic meditation?"</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <XCircle className="w-7 h-7 text-red-600" />
                    Avoid Asking
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Personal questions about life before becoming monk (intrusive)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Romantic or sexual topics (inappropriate)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Asking monks to predict future or tell fortunes (not their role)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Criticism of Buddhism or Thailand (disrespectful)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Overly philosophical debates (be humble learner)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Questions about money or donations (awkward)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Conversation Tips</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Ask open-ended questions (not yes/no)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Listen actively and respectfully</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Do not interrupt or argue</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Show genuine curiosity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Take notes if helpful (shows interest)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Thank monks for their time</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 border-2 border-amber-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Cultural Note</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Monks are happy to answer questions but approach with humility and genuine interest. This is
                    education and cultural exchange, not entertainment. The quality of your conversation depends on your
                    attitude - come with an open heart and respectful curiosity, and you'll have a meaningful experience.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Meditation Courses and Retreats
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From introductory day courses to intensive multi-week retreats, Thailand offers meditation programs for
                all experience levels.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Introductory Courses (1-3 Days)</h3>

              <div className="space-y-8">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12 border-2 border-amber-200 shadow-xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Wat Suan Dok (Chiang Mai)</h4>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white rounded-xl p-6 border-2 border-amber-200">
                      <p className="font-bold text-gray-900 mb-2">Format</p>
                      <p className="text-gray-700 text-sm">Weekend meditation retreats (Friday-Sunday)</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 border-2 border-amber-200">
                      <p className="font-bold text-gray-900 mb-2">Focus</p>
                      <p className="text-gray-700 text-sm">Vipassana instruction with English-speaking monks</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 border-2 border-orange-200 mb-4">
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span>Free, donation-based</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span>Good for beginners</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span>Accommodation not included (stay in Chiang Mai)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span>Book through temple website</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 border-2 border-blue-200 shadow-xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Wat Mahathat Section 5 (Bangkok)</h4>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
                      <p className="font-bold text-gray-900 mb-2">Schedule</p>
                      <p className="text-gray-700 text-sm">Daily drop-in classes: 7:00 AM, 1:00 PM, 6:00 PM</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
                      <p className="font-bold text-gray-900 mb-2">Courses</p>
                      <p className="text-gray-700 text-sm">3-7 day intensive courses available</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 border-2 border-cyan-200 mb-4">
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>English instruction available</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>Vipassana focus</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>Donation-based</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>City location (easy access, stay in Bangkok)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>Structured, beginner-friendly</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 border-2 border-green-200 shadow-xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">House of Dhamma (Chiang Mai)</h4>
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white rounded-xl p-6 border-2 border-green-200">
                      <p className="font-bold text-gray-900 mb-2">Courses</p>
                      <p className="text-gray-700 text-sm">3-day intro or 10-day intensive Vipassana</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 border-2 border-green-200">
                      <p className="font-bold text-gray-900 mb-2">Cost</p>
                      <p className="text-gray-700 text-sm">Free (donation after completion)</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 border-2 border-green-200">
                      <p className="font-bold text-gray-900 mb-2">Format</p>
                      <p className="text-gray-700 text-sm">Silent retreat format</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 border-2 border-emerald-200 mb-4">
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>Basic accommodation provided</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>Vegetarian meals included</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>Pre-registration required</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>Serious practice environment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>Website: dhamma.org</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-100 rounded-xl p-6 border-2 border-green-300">
                    <p className="font-bold text-gray-900 mb-3">Typical Format:</p>
                    <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                      <p>• 4:00 AM wake-up</p>
                      <p>• Sitting and walking meditation</p>
                      <p>• Dharma talks in evening</p>
                      <p>• Noble silence (no talking)</p>
                      <p>• No phones, reading, distractions</p>
                      <p>• Simple vegetarian food</p>
                      <p>• Basic dormitory accommodation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Longer Retreats (7-30+ Days)</h3>

              <div className="space-y-8">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 border-2 border-purple-200 shadow-xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Wat Pah Nanachat (Ubon Ratchathani)</h4>
                  <div className="bg-purple-100 rounded-xl p-6 border-2 border-purple-300 mb-6">
                    <p className="font-bold text-gray-900 mb-2">Forest Monastery Tradition</p>
                    <p className="text-gray-700 text-sm">
                      Weeks to months duration, live as temporary monk, very challenging but transformative
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 border-2 border-purple-200">
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span>Strict meditation practice</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span>English-speaking Western monks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span>Free, donation-based</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span>Requires serious commitment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span>Apply in advance</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200 shadow-xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Suan Mokkh (Surat Thani)</h4>
                  <div className="bg-orange-100 rounded-xl p-6 border-2 border-orange-300 mb-6">
                    <p className="font-bold text-gray-900 mb-2">Famous 10-Day Silent Retreats</p>
                    <p className="text-gray-700 text-sm">
                      Held monthly (1st-10th of each month), books up months in advance
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white rounded-xl p-6 border-2 border-orange-200">
                      <p className="font-bold text-gray-900 mb-3">Routine</p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• 4:00 AM wake-up</li>
                        <li>• Cold shower baths</li>
                        <li>• Floor sleeping (thin mat)</li>
                        <li>• Two simple vegetarian meals</li>
                        <li>• 8-10 hours meditation daily</li>
                        <li>• Complete silence</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-xl p-6 border-2 border-orange-200">
                      <p className="font-bold text-gray-900 mb-3">Details</p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Cost: 2000 THB for 10 days</li>
                        <li>• Includes food and basic accommodation</li>
                        <li>• Pre-registration required</li>
                        <li>• Very challenging</li>
                        <li>• Highly regarded</li>
                        <li>• Not for beginners</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4 border-2 border-red-200">
                    <p className="text-sm text-gray-700">
                      <strong>Important:</strong> This retreat is challenging and requires meditation experience. Not
                      recommended for complete beginners.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Wat Suan Mokkh Bangkok</h4>
                  <p className="text-gray-700 mb-4">
                    Weekend meditation retreats, less intense than Surat Thani location. English-friendly, donation-based,
                    convenient city location.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Temple Stays (Overnight Experiences)
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experience monastic life firsthand by staying overnight at a temple. A unique cultural and spiritual
                immersion.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12 border-2 border-amber-200 mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Typical Schedule</h3>

                <div className="space-y-4">
                  {[
                    { time: '4:00 AM', activity: 'Wake-up bell' },
                    { time: '5:00 AM', activity: 'Morning alms round (optional for guests to observe or participate)' },
                    { time: '6:00 AM', activity: 'Breakfast (simple rice porridge)' },
                    { time: '8:00 AM', activity: 'Morning chanting and meditation' },
                    {
                      time: '11:00 AM',
                      activity: 'Lunch (last meal of day for monks; guests may eat dinner)',
                    },
                    { time: '1:00 PM', activity: 'Dharma talk or free time for personal meditation' },
                    { time: '5:00 PM', activity: 'Evening chanting' },
                    { time: '9:00 PM', activity: 'Lights out' },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-28">
                        <span className="inline-block bg-amber-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                          {item.time}
                        </span>
                      </div>
                      <div className="flex-grow bg-white rounded-lg p-4 border-2 border-amber-200">
                        <p className="text-gray-700">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Accommodation</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Home className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Very basic: Simple room or dormitory</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Home className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Thin mat on floor (no bed)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Home className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Shared bathrooms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Home className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>No air conditioning (fans only)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Home className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>No luxury amenities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Home className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Clean but spartan</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Rules</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Modest white clothing (sometimes provided)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>No shoes inside buildings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Silence during certain hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>No alcohol, smoking, or meat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Follow temple schedule</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Respect all monks and temple property</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Women: Cannot touch monks or enter certain areas</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <DollarSign className="w-7 h-7 text-purple-600" />
                    Cost
                  </h3>
                  <div className="space-y-4 text-gray-700">
                    <p>Usually free or small donation (200-500 THB suggested)</p>
                    <p>Covers food and basic accommodation</p>
                    <p className="font-semibold">This is cultural/spiritual experience, not a hotel</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border-2 border-orange-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Users className="w-7 h-7 text-orange-600" />
                    Who It's For
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Those seeking deep cultural immersion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Spiritual seekers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>People wanting to understand monastic life</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Those comfortable with basic living conditions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Early risers!</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Where to Arrange Temple Stays</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Wat Suan Dok (Chiang Mai)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Wat Mahathat (Bangkok)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Contact temples directly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Book 1-2 weeks in advance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Not all temples offer this (ask specifically)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Etiquette and Cultural Guidelines
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Respecting Thai Buddhist customs ensures meaningful interactions and shows appreciation for this cultural
                privilege.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Dress Code (Critical)</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Cover shoulders (no tank tops, sleeveless shirts)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Cover knees (long pants or skirt, no shorts)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Remove shoes before entering any building</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Avoid revealing or tight clothing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Bright colors okay (white preferred for meditation retreats)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Bring light scarf to cover shoulders if needed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Socks okay for walking on temple grounds</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Behavior with Monks</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Wai greeting (hands together, slight bow) when meeting monk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Sit lower than monks (they sit on elevated platform usually)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Never touch monks (especially important for women)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Women: Keep distance, never hand items directly (place on table)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Do not point feet at monks or Buddha images</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Speak quietly and respectfully</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Stand when monk enters or leaves</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Let monks go through doors first</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Temple Etiquette</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Remove shoes before entering buildings (leave outside)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Do not climb on Buddha statues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>No pointing at Buddha images</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Speak quietly inside temples</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Turn off phone or silence it</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Ask before taking photos of monks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Do not photograph during chanting or meditation</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Asking Questions & Donations</h3>
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <p className="font-bold mb-2">When Asking Questions:</p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 mt-1">•</span>
                          <span>Wait for appropriate moment (not during chanting)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 mt-1">•</span>
                          <span>Raise hand or wait for pause</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 mt-1">•</span>
                          <span>Be respectful even if answers differ from your beliefs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 mt-1">•</span>
                          <span>Avoid argumentative tone</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 mt-1">•</span>
                          <span>Say "thank you" (khop khun kha/krap)</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold mb-2">About Donations:</p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 mt-1">•</span>
                          <span>Never required but appreciated</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 mt-1">•</span>
                          <span>20-100 THB appropriate for monk chat</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 mt-1">•</span>
                          <span>Place in donation box (not hand directly to monk)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 mt-1">•</span>
                          <span>Can offer food or supplies (ask what is needed)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Practical Information
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Everything you need to know before attending your first monk chat or meditation session.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Clock className="w-6 h-6 text-blue-600" />
                    Best Time to Visit
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Monk chat sessions: Late afternoon (5-7 PM) most common</li>
                    <li>• Morning chanting: 6-7 AM</li>
                    <li>• Meditation sessions: Early morning or evening</li>
                    <li>• Avoid Buddhist holidays (temples very busy)</li>
                    <li>• Cool season (Nov-Feb) most comfortable</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    What to Bring
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Modest clothing (long pants, covered shoulders)</li>
                    <li>• Light scarf or shawl for shoulders</li>
                    <li>• Socks (some temples require)</li>
                    <li>• Small notebook for taking notes</li>
                    <li>• Water bottle</li>
                    <li>• Small donation (20-100 THB)</li>
                    <li>• Open mind and respectful attitude</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Globe className="w-6 h-6 text-purple-600" />
                    Language
                  </h3>
                  <div className="space-y-3 text-gray-700 text-sm">
                    <p>Monk chat programs specifically for English practice (monks speak English)</p>
                    <p className="font-semibold">Basic Thai phrases helpful:</p>
                    <ul className="space-y-1">
                      <li>• Sawasdee krap/ka = Hello</li>
                      <li>• Khop khun krap/ka = Thank you</li>
                      <li>• Mai pen rai = No problem</li>
                    </ul>
                    <p>Speak slowly and clearly (monks practicing English). Avoid slang or idioms.</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border-2 border-orange-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Camera className="w-6 h-6 text-orange-600" />
                    Photography
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Always ask before photographing monks</li>
                    <li>• No photos during meditation or chanting</li>
                    <li>• Respectful photos okay during casual conversation</li>
                    <li>• Do not use flash inside temples</li>
                    <li>• Social media okay (but be respectful)</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border-2 border-red-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Clock className="w-6 h-6 text-red-600" />
                    Time Commitment
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Monk chat: 30 min - 2 hours (your choice)</li>
                    <li>• Meditation class: 1-2 hours</li>
                    <li>• Temple stay: Overnight to several days</li>
                    <li>• Retreat: 3 days to several weeks</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Benefits of Monk Chat
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Why thousands of travelers participate in monk chat programs each year.
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border-2 border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cultural Understanding</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Learn authentic Thai Buddhism (not tourist version)</li>
                  <li>• Understand monk life and daily routines</li>
                  <li>• Insight into Thai culture and values</li>
                  <li>• See religion's role in Thai society</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border-2 border-green-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Growth</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Learn meditation basics</li>
                  <li>• Gain perspective on life and happiness</li>
                  <li>• Practice mindfulness techniques</li>
                  <li>• Stress relief through meditation</li>
                  <li>• Discussions about suffering, impermanence, compassion</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border-2 border-purple-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Language Exchange</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Help monks practice English (meaningful contribution)</li>
                  <li>• Learn Thai words and phrases</li>
                  <li>• Cultural exchange benefits both parties</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-8 border-2 border-orange-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Travel Experience</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Free cultural activity (budget-friendly)</li>
                  <li>• Unique experience not available in most countries</li>
                  <li>• Memorable interactions with local people</li>
                  <li>• Stories to share back home</li>
                  <li>• Photos and meaningful encounters</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-8 border-2 border-red-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Spiritual Exploration</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Explore Buddhism regardless of your religion</li>
                  <li>• No pressure to convert or commit</li>
                  <li>• Safe space to ask questions</li>
                  <li>• Learn from practitioners, not just books</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Common Misconceptions
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Clearing up common myths about monk chat and meditation programs.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-6">
              {[
                {
                  myth: 'You must be Buddhist to attend monk chat',
                  reality:
                    'Anyone of any religion welcome. Monks happy to talk with people of all faiths. This is education, not conversion.',
                },
                {
                  myth: 'You cannot ask difficult questions',
                  reality:
                    'Monks welcome thoughtful questions, even challenging ones. Approach respectfully and they will engage honestly.',
                },
                {
                  myth: 'Women cannot participate',
                  reality:
                    'Women absolutely welcome at monk chat! Just maintain respectful distance and follow etiquette (no touching).',
                },
                {
                  myth: 'Monk chat is only in Chiang Mai',
                  reality:
                    'Available across Thailand, though Chiang Mai has most established programs. Bangkok, Sukhothai, and other cities have options.',
                },
                {
                  myth: 'You must donate money',
                  reality:
                    'Donations never required. Programs are completely free. Donate only if you want and can afford.',
                },
                {
                  myth: 'Meditation is religious practice only',
                  reality:
                    'Meditation taught as practical stress-relief tool. Non-religious benefits widely recognized (mindfulness, focus, calm).',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-red-50 to-green-50 rounded-2xl p-8 border-2 border-gray-200"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-start gap-3 mb-2">
                        <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-bold text-red-900 uppercase text-sm mb-1">Myth</p>
                          <p className="text-gray-900">{item.myth}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-bold text-green-900 uppercase text-sm mb-1">Reality</p>
                          <p className="text-gray-700">{item.reality}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-6"></div>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  q: 'Do I need to book monk chat in advance?',
                  a: 'No booking needed for most programs. Just show up at scheduled time. Wat Suan Dok Chiang Mai: Mon/Wed/Fri 5-7 PM.',
                },
                {
                  q: 'Can I go alone or should I bring friends?',
                  a: 'Either is fine! Solo travelers welcome. Going alone might mean more one-on-one conversation with monks.',
                },
                {
                  q: 'What if I do not understand Buddhism?',
                  a: 'Perfect! Monk chat designed for people learning about Buddhism. No prior knowledge needed. Monks explain concepts clearly.',
                },
                {
                  q: 'Can I ask about meditation for my anxiety?',
                  a: 'Yes! Monks teach meditation as practical tool for mental health. Very appropriate question.',
                },
                {
                  q: 'How long should I stay?',
                  a: 'Your choice. 30 minutes to 2 hours typical. Come and go as you please. No obligation to stay entire session.',
                },
                {
                  q: 'Will monks try to convert me?',
                  a: 'No. Buddhism does not proselytize. Monks share teachings but never pressure anyone to convert. Respectful cultural exchange only.',
                },
                {
                  q: 'Can I take photos with monks?',
                  a: 'Ask first. Most monks happy to take photos during casual monk chat. Do not photograph during meditation or chanting.',
                },
                {
                  q: 'What if I am LGBT?',
                  a: 'All welcome. Buddhism generally accepting. Monks will treat you with same respect as any visitor.',
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-amber-300 transition-colors"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                    <span className="text-amber-600 flex-shrink-0">Q:</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-gray-700 ml-8">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="bg-gradient-to-br from-amber-900 to-orange-900 rounded-2xl p-8 md:p-12 text-white mb-12">
            <div className="flex items-start gap-4">
              <Heart className="w-10 h-10 text-amber-300 flex-shrink-0" />
              <div>
                <h3 className="text-3xl font-bold mb-4">A Unique Cultural Exchange</h3>
                <p className="text-amber-100 text-lg leading-relaxed mb-6">
                  Monk chat programs offer rare, authentic opportunities to connect with Buddhist monks, learn about Thai
                  culture, and explore Buddhist philosophy in a welcoming, non-judgmental environment. These free
                  programs represent the heart of Thai generosity and cultural openness, welcoming visitors from all
                  backgrounds to share in meaningful conversation and cultural understanding.
                </p>
                <div className="bg-amber-800 rounded-xl p-6 border-2 border-amber-600">
                  <p className="text-xl font-bold mb-2">Remember:</p>
                  <p className="text-amber-100 leading-relaxed">
                    Dress modestly (shoulders and knees covered), remove shoes before entering temple buildings, speak
                    softly and respectfully, and approach with an open mind and genuine curiosity. These simple gestures
                    of respect ensure meaningful exchanges for everyone.
                  </p>
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
                title: 'Thai Culture Guide',
                description: 'Understanding Thai customs, etiquette, and traditions',
                link: '/culture',
                image:
                  'https://images.pexels.com/photos/16096815/pexels-photo-16096815.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Thai Temples Guide',
                description: 'Visit Thailand\'s most beautiful and sacred temples',
                link: '/thai-temples',
                image:
                  'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Chiang Mai Guide',
                description: 'Explore northern Thailand and its cultural attractions',
                link: '/chiang-mai',
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
