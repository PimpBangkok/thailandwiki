import { Link } from 'react-router-dom';
import { Calendar, Check, FileText, Plane, AlertCircle, Clock, DollarSign, MapPin } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import YouMayAlsoLike from '../components/YouMayAlsoLike';
import { usePageMeta } from '../hooks/usePageMeta';

export default function VisaGuidePage() {
  usePageMeta({
    title: 'Thailand Visa Guide 2026 - Requirements & Information | ThailandWiki',
    description: 'Complete Thailand visa guide covering visa-free entry, tourist visas, extensions, requirements, and application process for all nationalities.',
  });
  return (
    <div className="min-h-screen bg-white">
      <div
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/5878553/pexels-photo-5878553.jpeg?auto=compress&cs=tinysrgb&w=1600)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-light mb-6 uppercase tracking-wider">
              Thailand Visa Guide 2026
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-4">
              Complete Requirements & How to Apply
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
          { label: 'Visa Guide' }
        ]}
      />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-12 rounded-r-lg">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2 mt-0">Quick Answer</h3>
                  <p className="text-blue-800 mb-0">
                    Most tourists from USA, UK, EU, Canada, Australia, and 60+ countries get <strong>30 days visa-free</strong> automatically on arrival. No advance application needed!
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-12">
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 uppercase tracking-wide m-0">
                  Visa Exemption
                </h2>
                <span className="text-lg text-gray-500 font-light">(30-Day Free Entry)</span>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                  Who Gets It?
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-0">
                  Most tourists from 60+ countries get automatic 30-day visa exemption on arrival. This is the easiest and most common way to visit Thailand!
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 uppercase tracking-wide flex items-center gap-2">
                  <MapPin className="w-6 h-6" />
                  Eligible Countries
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Americas</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>United States</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>Canada</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>Mexico</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>Brazil</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>Argentina</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Europe</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>All EU Countries</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>United Kingdom</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>Norway</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>Switzerland</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>Iceland</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Asia-Pacific</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>Australia</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>New Zealand</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>Japan</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>South Korea</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>Singapore</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Middle East</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>Israel</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>UAE</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>Kuwait</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>Bahrain</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>Qatar</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="text-sm text-gray-600 italic mt-4">
                  + Many more countries. Check with Thai embassy if your country is not listed.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 uppercase tracking-wide flex items-center gap-2">
                  <FileText className="w-6 h-6" />
                  Requirements
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Valid Passport</p>
                      <p className="text-gray-600 text-sm">Must be valid for at least 6 months from entry date</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Proof of Onward Travel</p>
                      <p className="text-gray-600 text-sm">Return or onward flight ticket within 30 days</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">No Application Needed</p>
                      <p className="text-gray-600 text-sm">Visa exemption is granted automatically upon arrival</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-pink-50 border-l-4 border-[#d7007f] p-6 rounded-r-lg mb-8">
                <h3 className="text-xl font-semibold text-[#d7007f] mb-3 mt-0">Extensions</h3>
                <p className="text-[#d7007f] mb-2">
                  <strong>Can extend once for 30 more days</strong> at any immigration office in Thailand.
                </p>
                <div className="flex items-center gap-4 text-sm text-[#d7007f] mt-3">
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    <span>Cost: 1,900 THB (~$55 USD)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>Processing: Same day</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-12">
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 uppercase tracking-wide m-0">
                  Tourist Visa
                </h2>
                <span className="text-lg text-gray-500 font-light">(60-Day)</span>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                  Who Needs It?
                </h3>
                <ul className="space-y-2 text-gray-700 text-lg mb-0">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#d7007f] flex-shrink-0 mt-1" />
                    <span>Travelers planning to stay longer than 30 days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#d7007f] flex-shrink-0 mt-1" />
                    <span>Multiple-entry trips to Thailand</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#d7007f] flex-shrink-0 mt-1" />
                    <span>Citizens from countries without visa exemption</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 uppercase tracking-wide flex items-center gap-2">
                  <Plane className="w-6 h-6" />
                  How to Apply
                </h3>
                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-pink-100 text-[#d7007f] rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Choose Application Method</h4>
                        <p className="text-gray-700 mb-3">
                          Apply at Thai embassy/consulate in your home country OR use the e-visa online system (available for most countries).
                        </p>
                        <div className="bg-gray-50 p-3 rounded text-sm text-gray-600">
                          <strong>Recommended:</strong> E-visa is faster and more convenient. Check if available for your country at <a href="https://www.thaievisa.go.th" target="_blank" rel="noopener noreferrer" className="text-[#d7007f] hover:underline">thaievisa.go.th</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-pink-100 text-[#d7007f] rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Prepare Documents</h4>
                        <p className="text-gray-700 mb-3">
                          Gather all required documents (see checklist below). Make sure everything is clear and legible.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-pink-100 text-[#d7007f] rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Submit Application</h4>
                        <p className="text-gray-700 mb-3">
                          Submit online (e-visa) or in-person at embassy. Pay the visa fee.
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>Processing: 3-10 business days</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            <span>Cost: $30-40 USD (varies by country)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-pink-100 text-[#d7007f] rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Receive Visa</h4>
                        <p className="text-gray-700">
                          E-visa: Download and print your approved visa. Embassy: Collect passport with visa sticker. You're ready to travel!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 uppercase tracking-wide flex items-center gap-2">
                  <FileText className="w-6 h-6" />
                  Required Documents Checklist
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Passport Copy</p>
                      <p className="text-gray-600 text-sm">Bio page, valid for 6+ months with at least 2 blank pages</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Passport Photo</p>
                      <p className="text-gray-600 text-sm">Recent photo (4x6cm, white background)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Flight Booking</p>
                      <p className="text-gray-600 text-sm">Confirmed round-trip or onward flight reservation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Hotel Booking</p>
                      <p className="text-gray-600 text-sm">Confirmed accommodation for first few nights (or full stay)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Bank Statement</p>
                      <p className="text-gray-600 text-sm">Proof of sufficient funds (typically $1,000+ or equivalent)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Visa Application Form</p>
                      <p className="text-gray-600 text-sm">Complete online or download from embassy website</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-pink-50 border-l-4 border-[#d7007f] p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-[#d7007f] mb-3 mt-0">Extensions</h3>
                <p className="text-[#d7007f] mb-0">
                  <strong>Can extend for 30 more days</strong> (total 90 days) at any immigration office in Thailand.
                </p>
                <div className="flex items-center gap-4 text-sm text-[#d7007f] mt-3">
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    <span>Cost: 1,900 THB (~$55 USD)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>Processing: Same day</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-12">
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 uppercase tracking-wide m-0">
                  Important Notes
                </h2>
              </div>

              <div className="space-y-4">
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-2 mt-0">Visa Rules Change</h3>
                  <p className="text-yellow-800 mb-0">
                    Thai visa regulations can change with little notice. Always verify current requirements with the Royal Thai Embassy or Consulate in your country before travel.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2 mt-0">Immigration Checks</h3>
                  <p className="text-blue-800 mb-0">
                    Officers may ask to see proof of onward travel, accommodation, and funds. Have digital or printed copies ready to show if requested.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-red-900 mb-2 mt-0">Visa Runs</h3>
                  <p className="text-red-800 mb-0">
                    Multiple back-to-back visa exemptions may be questioned by immigration. If planning extended stay, consider proper tourist visa or long-term visa options.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2 mt-0">Work & Business</h3>
                  <p className="text-purple-800 mb-0">
                    Tourist visas and visa exemptions do NOT allow you to work in Thailand. Separate work permits and business visas required for employment.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-12">
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 uppercase tracking-wide m-0">
                  Special Visa Types
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#d7007f] transition-all">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Visa on Arrival</h3>
                  <div className="space-y-2 text-gray-700 mb-4">
                    <p className="font-semibold text-[#d7007f]">15 Days</p>
                    <p className="text-sm">For specific countries (mostly Asian/African nations)</p>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600 border-t border-gray-200 pt-4">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span>Apply at airport on arrival</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <span>Fee: $25 USD</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-orange-600" />
                      <span>No extension possible</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-blue-50 border-2 border-pink-200 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Multiple Entry Tourist Visa</h3>
                  <div className="space-y-2 text-gray-700 mb-4">
                    <p className="font-semibold text-[#d7007f]">Valid 6 Months</p>
                    <p className="text-sm">Perfect for frequent travelers</p>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600 border-t border-pink-200 pt-4">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span>Each entry: 60 days</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span>Extendable to 90 days</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <span>Cost: ~$200 USD</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#d7007f] transition-all">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">60-Day Visa Exemption</h3>
                  <div className="space-y-2 text-gray-700 mb-4">
                    <p className="font-semibold text-[#d7007f]">Updated 2024</p>
                    <p className="text-sm">Select nationalities now eligible</p>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600 border-t border-gray-200 pt-4">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span>Automatic on arrival</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span>No advance application</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-blue-600" />
                      <span>Check latest eligibility</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-blue-800 mb-0">
                  <strong>Note:</strong> Visa policies are constantly updated. The 60-day visa exemption is a recent change for certain countries. Always verify your nationality's current status with Thai immigration authorities.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-12">
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 uppercase tracking-wide m-0">
                  Visa Extensions
                </h2>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-pink-50 rounded-xl p-8 mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">At Immigration Office</h3>
                <p className="text-gray-700 text-lg mb-6">
                  Most tourist visas and visa exemptions can be extended for an additional 30 days at any immigration office in Thailand.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-[#d7007f]" />
                      Locations
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#d7007f] font-bold">-</span>
                        <span><strong>Bangkok:</strong> Chaeng Wattana Government Complex</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#d7007f] font-bold">-</span>
                        <span><strong>Phuket:</strong> Phuket Immigration Office</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#d7007f] font-bold">-</span>
                        <span><strong>Chiang Mai:</strong> Promenada Resort Mall</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#d7007f] font-bold">-</span>
                        <span>Provincial immigration offices nationwide</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-[#d7007f]" />
                      Requirements
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Passport with valid visa/stamp</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Passport photo (4x6cm)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>TM7 form (available at office)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>1,900 THB cash</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-pink-200">
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-8 h-8 text-[#d7007f] flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">Cost</p>
                      <p className="font-semibold text-gray-900">1,900 THB</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-8 h-8 text-[#d7007f] flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">Processing</p>
                      <p className="font-semibold text-gray-900">Same Day</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-8 h-8 text-[#d7007f] flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">Extension</p>
                      <p className="font-semibold text-gray-900">+30 Days</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2 mt-0">Dress Code Required</h3>
                <p className="text-yellow-800 mb-0">
                  Immigration offices enforce a dress code: <strong>No shorts, no sleeveless shirts, shoulders must be covered.</strong> Bring appropriate clothing or risk being turned away.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-12">
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 uppercase tracking-wide m-0">
                  Long-Term Visas
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#d7007f] transition-all">
                  <div className="bg-gradient-to-r from-pink-500 to-blue-500 p-6 text-white">
                    <h3 className="text-2xl font-semibold mb-2">Long-Term Resident (LTR) Visa</h3>
                    <p className="text-pink-50">For wealthy individuals, highly skilled professionals, and digital nomads</p>
                  </div>
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Validity</h4>
                        <p className="text-gray-700 mb-4">Up to <strong className="text-[#d7007f]">10 years</strong> with multiple entries</p>

                        <h4 className="font-semibold text-gray-900 mb-3">Who Qualifies?</h4>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Wealthy Global Citizens ($1M+ assets)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Wealthy Pensioners (passive income $80k+)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Work-from-Thailand Professionals</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Highly-Skilled Professionals</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                        <ul className="space-y-2 text-gray-700 text-sm mb-4">
                          <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-[#d7007f] flex-shrink-0" />
                            <span>10-year visa validity</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-[#d7007f] flex-shrink-0" />
                            <span>Fast-track immigration lanes</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-[#d7007f] flex-shrink-0" />
                            <span>Work permit exemption for some</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-[#d7007f] flex-shrink-0" />
                            <span>Tax benefits available</span>
                          </li>
                        </ul>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-600">
                            <strong>Application Fee:</strong> 50,000 THB (~$1,400 USD)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#d7007f] transition-all">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 text-white">
                    <h3 className="text-2xl font-semibold mb-2">Education (ED) Visa</h3>
                    <p className="text-blue-50">For language students and cultural learners</p>
                  </div>
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Overview</h4>
                        <p className="text-gray-700 mb-4">
                          Study Thai language, culture, Muay Thai, or cooking at approved schools.
                        </p>

                        <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Enrollment in approved school</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Proof of funds</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Regular class attendance</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>90-day check-ins</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Details</h4>
                        <div className="space-y-3">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-600 mb-1">Validity</p>
                            <p className="font-semibold text-gray-900">90 days, renewable</p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-600 mb-1">Max Duration</p>
                            <p className="font-semibold text-gray-900">Up to 1 year per course</p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-600 mb-1">Work Permission</p>
                            <p className="font-semibold text-gray-900">Not allowed</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-12">
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 uppercase tracking-wide m-0">
                  Common Questions
                </h2>
              </div>

              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I do visa runs?</h3>
                  <p className="text-gray-700 mb-3">
                    Yes, but with limitations. You can exit and re-enter Thailand to get a new visa exemption stamp, but:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span>Land border crossings limited to <strong>2 times per calendar year</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span>Frequent visa runs may raise questions from immigration officers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Air entries have no official limit but are subject to officer discretion</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What are the overstay penalties?</h3>
                  <p className="text-gray-700 mb-3">
                    Overstaying your visa is taken seriously in Thailand:
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mb-3">
                    <ul className="space-y-2 text-red-900">
                      <li className="flex items-start gap-2">
                        <span className="font-bold">-</span>
                        <span><strong>500 THB per day</strong> overstay fine (maximum 20,000 THB)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold">-</span>
                        <span><strong>1 year ban:</strong> Overstay more than 90 days</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold">-</span>
                        <span><strong>3 year ban:</strong> Overstay 1-3 years</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold">-</span>
                        <span><strong>5 year ban:</strong> Overstay 3-5 years</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold">-</span>
                        <span><strong>10 year ban:</strong> Overstay more than 5 years</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    Pro tip: Set calendar reminders well before your visa expires to avoid accidental overstays.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I work on a tourist visa?</h3>
                  <p className="text-gray-700 mb-3">
                    <strong className="text-red-600">No.</strong> Tourist visas and visa exemptions do NOT permit any form of work in Thailand, including:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">X</span>
                      <span>Employment with Thai or foreign companies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">X</span>
                      <span>Remote work for employers (even outside Thailand)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">X</span>
                      <span>Freelancing or consulting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">X</span>
                      <span>Teaching or volunteering</span>
                    </li>
                  </ul>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mt-3">
                    <p className="text-blue-900 text-sm mb-0">
                      <strong>For legal work:</strong> You need a proper work visa (Non-B) and work permit. Consider the LTR visa for digital nomads and remote workers.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">How early can I apply for a visa extension?</h3>
                  <p className="text-gray-700 mb-0">
                    You can apply for an extension when you have <strong>30 days or less</strong> remaining on your current visa. Most people apply 7-14 days before expiry to avoid last-minute stress. Immigration offices can be busy, so allow extra time.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Do I need travel insurance?</h3>
                  <p className="text-gray-700 mb-3">
                    While not always mandatory for tourist visas, travel insurance is <strong>highly recommended</strong> and may be required for:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Some long-term visa types (like LTR visa)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Covering medical expenses (Thailand's healthcare can be expensive)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Peace of mind during your travels</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-12">
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 uppercase tracking-wide m-0">
                  Useful Resources
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <a
                  href="https://www.thaievisa.go.th"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-[#d7007f] transition-all group"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#d7007f] transition-colors">
                    Thailand E-Visa Portal
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Official e-visa application system for online visa applications
                  </p>
                </a>

                <a
                  href="https://www.mfa.go.th"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-[#d7007f] transition-all group"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#d7007f] transition-colors">
                    Ministry of Foreign Affairs
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Official Thai government visa information and embassy contacts
                  </p>
                </a>

                <Link
                  to="/practical"
                  className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-[#d7007f] transition-all group"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#d7007f] transition-colors">
                    Practical Travel Guide
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Complete guide to traveling in Thailand: money, transport, and more
                  </p>
                </Link>

                <Link
                  to="/travel-planning"
                  className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-[#d7007f] transition-all group"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#d7007f] transition-colors">
                    Trip Planning Guide
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Start planning your Thailand adventure with our comprehensive tools
                  </p>
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-[#d7007f] text-white rounded-2xl p-12 text-center mt-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-light mb-4 uppercase tracking-wide">
                  Visa Questions?
                </h3>
                <p className="text-xl text-gray-300 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
                  Chat with our Thailand experts for personalized visa advice based on your nationality and travel plans!
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
                  <span>Ask Now</span>
                  <span className="text-[#d7007f]">&gt;</span>
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
