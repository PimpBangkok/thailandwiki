import { Church, Shirt, Camera, Info, AlertTriangle, CheckCircle2, X, User, FootprintsIcon } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import RelatedGuides from '../components/RelatedGuides';
import YouMayAlsoLike from '../components/YouMayAlsoLike';
import { usePageMeta } from '../hooks/usePageMeta';

export function ThaiTemplesPage() {
  usePageMeta({
    title: 'Thai Temples Guide - Etiquette, Dress Code & Top Temples 2026',
    description:
      'Complete guide to visiting Thai temples. Learn proper etiquette, dress code, what to wear, photography rules, and cultural insights for respectful temple visits.',
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Breadcrumb
        items={[
          { label: 'Home', path: '/' },
          { label: 'Culture', path: '/culture' },
          { label: 'Thai Temples Guide', path: '/thai-temples' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-600 rounded-full mb-6">
            <Church className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[3px]">
            Thai Temples Guide
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 mb-4 leading-relaxed">
              Thailand has over 40,000 Buddhist temples. From Bangkok's Grand Palace to northern mountain temples,
              these sacred spaces blend spirituality, art, and Thai culture.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              This guide covers temple etiquette, what to wear, top temples to visit, and cultural insights to help
              you experience these beautiful spaces respectfully.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <img
            src="https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Beautiful Thai temple with golden architecture"
            className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
          />
        </div>

        <div className="max-w-5xl mx-auto">
          <section id="etiquette" className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-8 uppercase tracking-[2px] border-b-2 border-orange-500 pb-3">
              Temple Etiquette and Dress Code
            </h2>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg shadow-lg p-8 mb-12">
              <div className="flex items-center mb-6">
                <Shirt className="w-8 h-8 text-orange-600 mr-4" />
                <h3 className="text-2xl font-semibold text-gray-900">What to Wear</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="bg-orange-100 p-4 rounded-lg mb-4">
                    <p className="font-bold text-orange-900 text-lg">Essential Rules</p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Covered shoulders required</p>
                        <p className="text-sm text-gray-600">No tank tops, no sleeveless shirts</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Covered knees required</p>
                        <p className="text-sm text-gray-600">No shorts, no short skirts, mini dresses</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Remove shoes before entering</p>
                        <p className="text-sm text-gray-600">Look for shoe racks at entrances</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <img
                    src="https://images.pexels.com/photos/3551227/pexels-photo-3551227.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="People dressed appropriately at Thai temple"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-green-500">
                  <div className="flex items-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mr-2" />
                    <h4 className="text-lg font-bold text-gray-900">What Works</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>Long pants or long skirts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>T-shirts or shirts with sleeves</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>Lightweight clothing in light colors (cooler in heat)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>Sandals easy to remove</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-red-500">
                  <div className="flex items-center mb-4">
                    <X className="w-6 h-6 text-red-600 mr-2" />
                    <h4 className="text-lg font-bold text-gray-900">What Does Not Work</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>Tank tops or sleeveless shirts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>Shorts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>Tight or revealing clothing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>Shoes inside temple buildings</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-100 p-4 rounded-lg mt-6 text-center">
                <p className="text-sm text-gray-800">
                  <Info className="w-5 h-5 inline mr-2 text-amber-700" />
                  <strong>Good news:</strong> Many major temples provide sarongs or shawls for free if you are not dressed appropriately.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <div className="flex items-center mb-6">
                <User className="w-8 h-8 text-orange-600 mr-4" />
                <h3 className="text-2xl font-semibold text-gray-900">Basic Temple Etiquette</h3>
              </div>

              <div className="mb-8">
                <img
                  src="https://images.pexels.com/photos/3551224/pexels-photo-3551224.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="People removing shoes before entering temple"
                  className="w-full h-80 object-cover rounded-lg shadow-md mb-6"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-orange-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Remove shoes before entering</p>
                      <p className="text-sm text-gray-600 mt-1">Remove shoes before entering any temple building</p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-orange-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Dress modestly</p>
                      <p className="text-sm text-gray-600 mt-1">Shoulders and knees covered at all times</p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-orange-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Speak quietly</p>
                      <p className="text-sm text-gray-600 mt-1">Keep your voice low inside temple grounds</p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-orange-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Step over thresholds</p>
                      <p className="text-sm text-gray-600 mt-1">Do not step on door thresholds when entering buildings</p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-orange-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Silent mode</p>
                      <p className="text-sm text-gray-600 mt-1">Turn off phone or put on silent mode</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-red-50 rounded-lg">
                    <X className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Do not point feet at Buddha</p>
                      <p className="text-sm text-gray-600 mt-1">Feet are lowest part of body, considered disrespectful. Sit with legs folded to side or tucked under</p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-red-50 rounded-lg">
                    <X className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Do not touch Buddha images</p>
                      <p className="text-sm text-gray-600 mt-1">Do not touch Buddha images or monk statues</p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-red-50 rounded-lg">
                    <X className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Do not climb on statues</p>
                      <p className="text-sm text-gray-600 mt-1">Do not climb on Buddha statues for photos</p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                    <Info className="w-5 h-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Women and monks</p>
                      <p className="text-sm text-gray-600 mt-1">Women cannot touch monks or hand items directly to monks. Place items on table or cloth</p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                    <Info className="w-5 h-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Photographing monks</p>
                      <p className="text-sm text-gray-600 mt-1">Ask before taking photos of monks. Most are okay but some prefer privacy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-lg p-8 mb-12">
              <div className="flex items-center mb-6">
                <Camera className="w-8 h-8 text-blue-600 mr-4" />
                <h3 className="text-2xl font-semibold text-gray-900">Photography Rules</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <img
                    src="https://images.pexels.com/photos/2467287/pexels-photo-2467287.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Buddhist monk at temple"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Photos allowed in most temples</p>
                      <p className="text-sm text-gray-600">But not all - check for signs</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <X className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">No flash photography</p>
                      <p className="text-sm text-gray-600">Never use flash on Buddha images</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <X className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Restricted sacred areas</p>
                      <p className="text-sm text-gray-600">Cannot take photos in certain areas. Look for signs or ask</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <X className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">No selfie sticks</p>
                      <p className="text-sm text-gray-600">Often not allowed inside buildings</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <X className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">No disrespectful poses</p>
                      <p className="text-sm text-gray-600">Do not pose disrespectfully with Buddha images</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Info className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Ask monks first</p>
                      <p className="text-sm text-gray-600">Ask before photographing monks</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-2xl shadow-2xl p-8 lg:p-12">
              <h3 className="text-3xl font-bold mb-8 text-center">Temple Etiquette Quick Reference</h3>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Shirt className="w-10 h-10" />
                  </div>
                  <h4 className="font-bold text-xl mb-3">Dress Code</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 mr-2" /> Cover shoulders
                    </li>
                    <li className="flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 mr-2" /> Cover knees
                    </li>
                    <li className="flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 mr-2" /> Remove shoes
                    </li>
                    <li className="flex items-center justify-center">
                      <X className="w-4 h-4 mr-2" /> No tight clothing
                    </li>
                  </ul>
                </div>

                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <FootprintsIcon className="w-10 h-10" />
                  </div>
                  <h4 className="font-bold text-xl mb-3">Behavior</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 mr-2" /> Speak quietly
                    </li>
                    <li className="flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 mr-2" /> Step over thresholds
                    </li>
                    <li className="flex items-center justify-center">
                      <X className="w-4 h-4 mr-2" /> No pointing feet
                    </li>
                    <li className="flex items-center justify-center">
                      <X className="w-4 h-4 mr-2" /> No touching Buddha
                    </li>
                  </ul>
                </div>

                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Camera className="w-10 h-10" />
                  </div>
                  <h4 className="font-bold text-xl mb-3">Photography</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 mr-2" /> Ask permission
                    </li>
                    <li className="flex items-center justify-center">
                      <X className="w-4 h-4 mr-2" /> No flash
                    </li>
                    <li className="flex items-center justify-center">
                      <X className="w-4 h-4 mr-2" /> No selfie sticks
                    </li>
                    <li className="flex items-center justify-center">
                      <X className="w-4 h-4 mr-2" /> No disrespectful poses
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-gradient-to-br from-orange-50 to-amber-100 p-8 rounded-lg text-center mt-12">
            <Church className="w-12 h-12 text-orange-700 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Ready to Experience Thai Temple Culture?</h3>
            <p className="text-gray-700 mb-6">
              Questions about visiting temples or Thai culture? Our travel experts are here to help!
            </p>
            <button className="bg-[#D91680] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#b0005f] transition-colors">
              Ask Now
            </button>
          </div>

          <RelatedGuides
            guides={[
              {
                title: 'Thai Culture & Customs',
                excerpt: 'Essential guide to Thai culture, etiquette, customs, and social norms for respectful travel.',
                image: 'https://images.pexels.com/photos/3551256/pexels-photo-3551256.jpeg?auto=compress&cs=tinysrgb&w=600',
                path: '/culture',
              },
              {
                title: 'Bangkok Destination Guide',
                excerpt: 'Complete guide to Bangkok with top attractions, temples, food, nightlife, and practical tips.',
                image: 'https://images.pexels.com/photos/2182061/pexels-photo-2182061.jpeg?auto=compress&cs=tinysrgb&w=600',
                path: '/destinations/bangkok',
              },
              {
                title: 'Chiang Mai Destination Guide',
                excerpt: 'Explore Chiang Mai\'s temples, night markets, elephant sanctuaries, and mountain adventures.',
                image: 'https://images.pexels.com/photos/2227785/pexels-photo-2227785.jpeg?auto=compress&cs=tinysrgb&w=600',
                path: '/destinations/chiang-mai',
              },
              {
                title: 'Best Time to Visit Thailand',
                excerpt: 'Month-by-month guide to Thailand\'s weather, seasons, and when to visit each region.',
                image: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=600',
                path: '/best-time-to-visit',
              },
            ]}
          />

          <YouMayAlsoLike
            articles={[
              {
                title: 'Thai Food Guide',
                path: '/food-dining',
              },
              {
                title: 'Getting Around Thailand',
                path: '/practical/getting-around',
              },
              {
                title: 'Thailand Visa Guide',
                path: '/visa-guide',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
