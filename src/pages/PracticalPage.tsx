import { Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import RelatedGuides from '../components/RelatedGuides';
import Sidebar from '../components/Sidebar';
import YouMayAlsoLike from '../components/YouMayAlsoLike';
import { usePageMeta } from '../hooks/usePageMeta';

export default function PracticalPage() {
  usePageMeta({
    title: 'Thailand Practical Information 2026 - Travel Tips & Essentials | ThailandWiki',
    description: 'Essential practical information for Thailand travel including visa requirements, money, safety, health, communication, and important travel tips.',
  });
  const sections = [
    { id: 'visas-entry', label: 'Visas & Entry' },
    { id: 'currency-money', label: 'Currency & Money' },
    { id: 'transportation', label: 'Transportation' },
    { id: 'health-safety', label: 'Health & Safety' },
    { id: 'best-time', label: 'Best Time to Visit' },
    { id: 'internet-phones', label: 'Internet & Phones' }
  ];

  const youMayAlsoLike = [
    { title: 'Thailand Visa Requirements', path: '/practical' },
    { title: 'Bangkok Airport Transfer Guide', path: '/bangkok' },
    { title: 'Travel Insurance for Thailand', path: '/practical' },
    { title: 'What to Pack for Thailand', path: '/practical' },
    { title: 'Thailand Currency Exchange Tips', path: '/practical' },
    { title: 'Thailand Safety Guide', path: '/practical' }
  ];

  const relatedGuides = [
    {
      title: 'Thailand Visa Guide 2026',
      excerpt: 'Complete visa information for all nationalities. Requirements, application process, extensions, and visa-on-arrival options explained.',
      image: 'https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/practical'
    },
    {
      title: 'Thailand Travel Budget Guide',
      excerpt: 'How much does Thailand cost? Daily budgets for backpackers, mid-range, and luxury travelers with real examples.',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/practical'
    },
    {
      title: 'Thailand Packing List',
      excerpt: 'Essential items to pack for Thailand. Weather-appropriate clothing, health items, tech gear, and cultural considerations.',
      image: 'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/practical'
    },
    {
      title: 'Thailand SIM Card & Internet',
      excerpt: 'Best Thai mobile operators, tourist SIM packages, where to buy, and staying connected throughout your trip.',
      image: 'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/practical'
    }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Practical Information' }]} />

      <section className="bg-[#252525] py-32">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-8">
            <Info className="w-12 h-12 text-[#d7007f]" />
            <span className="text-lg uppercase tracking-[2px] text-[#f7a600]">Travel Information</span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-8 uppercase tracking-[2px]">
            Practical
            <br />
            <span className="text-[#d7007f]">Guide</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed">
            Everything you need to know for a smooth and successful trip to Thailand
          </p>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            <div>
              <div className="grid lg:grid-cols-2 gap-16">
                <div>
                  <h2 id="visas-entry" className="section-subheading mb-8">
                    Visas & Entry
                  </h2>
              <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
                Most nationalities receive a 30-day visa exemption on arrival by air (15 days by land). Tourist visas allow 60-day stays and can be extended. Check current requirements as policies change frequently.
              </p>
                  <p className="text-lg text-gray-700 leading-relaxed font-light">
                    Ensure your passport has at least 6 months validity. Immigration officials may ask for proof of onward travel and sufficient funds, though this is rarely enforced.
                  </p>
                </div>

                <div>
                  <h2 id="currency-money" className="section-subheading mb-8">
                    Currency & Money
                  </h2>
              <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
                Thailand uses the Thai Baht (THB). ATMs are widespread and accept international cards, though fees can be high (220 THB per withdrawal). Notify your bank before traveling.
              </p>
                  <p className="text-lg text-gray-700 leading-relaxed font-light">
                    Credit cards are accepted in major establishments, but cash is essential for markets, street food, and taxis. Exchange rates are better in Thailand than abroad.
                  </p>
                </div>

                <div>
                  <h2 id="transportation" className="section-subheading mb-8">
                    Transportation
                  </h2>
              <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
                Bangkok has excellent public transit: BTS Skytrain, MRT subway, and Chao Phraya boats. Grab is the preferred rideshare app. Traditional taxis and tuk-tuks should negotiate fares beforehand.
              </p>
                  <p className="text-lg text-gray-700 leading-relaxed font-light">
                    Domestic flights connect major cities affordably. Buses and trains offer budget travel between destinations. Renting a scooter is popular but requires an international license.
                  </p>
                </div>

                <div>
                  <h2 id="health-safety" className="section-subheading mb-8">
                    Health & Safety
                  </h2>
              <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
                Thailand is generally safe for travelers. Drink bottled water, use mosquito repellent, and apply high-SPF sunscreen. Travel insurance with medical coverage is highly recommended.
              </p>
                  <p className="text-lg text-gray-700 leading-relaxed font-light">
                    Pharmacies are abundant and affordable. Major cities have excellent international hospitals. Emergency number is 191 for police, 1669 for medical emergencies.
                  </p>
                </div>

                <div>
                  <h2 id="best-time" className="section-subheading mb-8">
                    Best Time to Visit
                  </h2>
              <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
                Cool season (November-February) offers the best weather: sunny, dry, and comfortable temperatures. This is peak season, so expect crowds and higher prices.
              </p>
                  <p className="text-lg text-gray-700 leading-relaxed font-light">
                    Hot season (March-May) brings intense heat. Rainy season (June-October) has afternoon showers but fewer tourists and better deals. Southern islands have different patterns.
                  </p>
                </div>

                <div>
                  <h2 id="internet-phones" className="section-subheading mb-8">
                    Internet & Phones
                  </h2>
              <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
                Buy a Thai SIM card at the airport for cheap data. AIS, TrueMove, and dtac offer tourist packages. WiFi is available in most hotels, cafes, and restaurants.
              </p>
                  <p className="text-lg text-gray-700 leading-relaxed font-light">
                    Download offline maps, translation apps, and Grab before arriving. WhatsApp and LINE are popular messaging apps in Thailand.
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <Sidebar sections={sections} />
            </div>
          </div>
        </div>
      </section>

      <RelatedGuides guides={relatedGuides} />

      <YouMayAlsoLike articles={youMayAlsoLike} />

      <div className="block lg:hidden bg-gray-50 py-12">
        <div className="max-w-[1400px] mx-auto px-6 space-y-6">
          <Sidebar sections={sections} />
        </div>
      </div>

      <section className="py-32 bg-[#252525] text-white">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-light mb-8 uppercase tracking-[2px] leading-tight">
              Ready to
              <br />
              <span className="text-[#f7a600]">Get Started?</span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 font-light leading-relaxed text-gray-300">
              Contact us if you have any questions about traveling to Thailand
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-3">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
