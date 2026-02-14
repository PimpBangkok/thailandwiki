import {
  Heart,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  MapPin,
  DollarSign,
  Clock,
  Users,
  Star,
  Camera,
  Home,
  Leaf,
  Shield,
  Activity,
  ThumbsUp,
  ThumbsDown,
  ExternalLink,
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { usePageMeta } from '../hooks/usePageMeta';
import RelatedGuides from '../components/RelatedGuides';

export default function ElephantSanctuariesPage() {
  usePageMeta({
    title: 'Ethical Elephant Sanctuaries in Thailand 2026 - No Riding Guide',
    description:
      'Visit elephants ethically in Thailand. Comprehensive guide to verified sanctuaries with no riding, no tricks. Learn why elephant welfare matters and where to go.',
  });

  const comparisonData = [
    {
      practice: 'Riding',
      ethical: 'Never allowed',
      unethical: 'Main attraction',
      ethicalIcon: CheckCircle2,
      unethicalIcon: XCircle,
    },
    {
      practice: 'Shows/Tricks',
      ethical: 'No performances',
      unethical: 'Painting, dancing, playing instruments',
      ethicalIcon: CheckCircle2,
      unethicalIcon: XCircle,
    },
    {
      practice: 'Training Methods',
      ethical: 'Positive reinforcement only',
      unethical: 'Bullhooks, fear, pain',
      ethicalIcon: CheckCircle2,
      unethicalIcon: XCircle,
    },
    {
      practice: 'Living Space',
      ethical: 'Large natural areas',
      unethical: 'Concrete pens, chains',
      ethicalIcon: CheckCircle2,
      unethicalIcon: XCircle,
    },
    {
      practice: 'Interaction',
      ethical: 'Observation, feeding, walking alongside',
      unethical: 'Forced interaction on demand',
      ethicalIcon: CheckCircle2,
      unethicalIcon: XCircle,
    },
    {
      practice: 'Group Size',
      ethical: '10-15 people maximum',
      unethical: 'Unlimited visitors',
      ethicalIcon: CheckCircle2,
      unethicalIcon: XCircle,
    },
  ];

  const redFlags = [
    'Still offering riding (even "bareback riding")',
    'Elephant shows or tricks',
    'Breeding babies for tourism',
    'Chains visible on elephants',
    'Bullhooks in use',
    'Too many elephants (overcrowded)',
    'Very cheap prices (under 1000 THB)',
    'No rest time for elephants (multiple sessions daily)',
    'Elephants performing unnatural behaviors',
    'Poor living conditions or small spaces',
  ];

  const ethicalPractices = [
    'NO riding under any circumstances',
    'NO shows, tricks, or performances',
    'NO breeding programs',
    'NO chains (except for medical treatment)',
    'NO bullhooks or weapons',
    'Elephants free to roam large natural areas',
    'Proper veterinary care',
    'Retired elephants from logging/tourism',
    'Educational focus on conservation',
    'Small visitor groups (10-15 people max)',
    'Limited interaction (observation-focused)',
  ];

  const ethicalActivities = [
    'Feed elephants fruits and vegetables',
    'Walk alongside elephants in forest',
    'Bathe elephants in river (if elephants willing)',
    'Observe natural behaviors',
    'Learn about elephant conservation',
    'Take photos from respectful distance',
  ];

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Things to Do', path: '/things-to-do' },
          { label: 'Elephant Sanctuaries', path: '/elephant-sanctuaries-thailand' },
        ]}
      />

      <div className="bg-gradient-to-b from-green-900 to-green-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-8 h-8 text-green-300" />
              <span className="text-green-300 font-semibold tracking-wider uppercase text-sm">
                Updated February 2026
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 uppercase tracking-[3px]">
              Ethical Elephant
              <br />
              <span className="text-green-300">Sanctuaries in Thailand</span>
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-green-100 leading-relaxed mb-4">
                Visit elephants ethically - no riding, no tricks, just observation and care
              </p>
              <p className="text-lg text-green-200 leading-relaxed">
                Thailand's elephant tourism industry has a dark history of abuse through riding, shows, and harsh
                training methods. However, ethical sanctuaries now offer meaningful experiences where you can feed,
                bathe, and walk alongside elephants in their natural habitat without exploitation. This comprehensive
                guide covers verified ethical sanctuaries across Thailand, how to identify fake sanctuaries, what to
                expect during your visit, and why elephant welfare matters.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-20">
            <div className="bg-red-50 border-4 border-red-200 rounded-2xl p-8 md:p-12">
              <div className="flex items-start gap-4 mb-8">
                <div className="p-4 bg-red-100 rounded-full">
                  <AlertTriangle className="w-10 h-10 text-red-600" />
                </div>
                <div>
                  <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                    Why You Should NOT Ride Elephants
                  </h2>
                  <div className="w-24 h-1 bg-red-600"></div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-xl p-6 md:p-8 border-2 border-red-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <XCircle className="w-7 h-7 text-red-600" />
                    The Truth About Elephant Riding
                  </h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p className="font-semibold text-gray-900">
                      Elephants' spines cannot support human weight. Their backs are not designed for riding.
                    </p>
                    <div>
                      <p className="font-bold text-gray-900 mb-2">
                        The training process called "phajaan" (crushing) involves:
                      </p>
                      <ul className="space-y-2 ml-6">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">-</span>
                          <span>Separating baby elephants from their mothers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">-</span>
                          <span>Confining in small cages for days</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">-</span>
                          <span>Beating and starving until their spirit is broken</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">-</span>
                          <span>Teaching through fear and pain</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-2">Physical damage from riding:</p>
                      <ul className="space-y-2 ml-6">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">-</span>
                          <span>Permanent spinal injuries</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">-</span>
                          <span>Skin wounds from heavy saddles</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">-</span>
                          <span>Foot problems from standing on concrete</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">-</span>
                          <span>Severe stress and psychological trauma</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 md:p-8 border-2 border-red-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <XCircle className="w-7 h-7 text-red-600" />
                    Elephant Shows Are Equally Harmful
                  </h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Elephants painting, playing instruments, or dancing are NOT natural behaviors. These are trained
                      through abuse.
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">-</span>
                        <span>
                          <strong>Bullhooks (ankus)</strong> - sharp metal hooks used to control elephants through pain
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">-</span>
                        <span>Chains on legs when not performing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">-</span>
                        <span>Unnatural behaviors cause severe stress</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">-</span>
                        <span>Living conditions: concrete pens with no socialization</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-100 to-orange-50 rounded-xl p-6 md:p-8 border-2 border-red-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Reality</h3>
                  <p className="text-gray-800 leading-relaxed text-lg">
                    Wild elephants would never let humans ride them. Any elephant that allows riding has been brutally
                    broken. Elephant tourism generates <strong>$580 million yearly</strong> in Thailand, creating
                    financial incentive to continue abuse.{' '}
                    <strong className="text-green-700">Ethical sanctuaries prove there is another way.</strong>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                What Makes a Sanctuary Truly Ethical?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Not all sanctuaries are created equal. Learn the difference between genuine ethical sanctuaries and
                those still exploiting elephants.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border-2 border-green-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-100 rounded-full">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Verified Ethical Practices</h3>
                </div>
                <ul className="space-y-3">
                  {ethicalPractices.map((practice, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{practice}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Heart className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">What You Can Do</h3>
                </div>
                <ul className="space-y-3">
                  {ethicalActivities.map((activity, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-100 rounded-full">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Red Flags - Fake Sanctuaries</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {redFlags.map((flag, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4 border-2 border-red-200">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{flag}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 px-6 py-4">
                <h3 className="text-2xl font-bold text-white text-center">Ethical vs Unethical Practices</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-6 py-4 text-left font-bold text-gray-900">Practice</th>
                      <th className="px-6 py-4 text-center font-bold text-green-700">Ethical Sanctuary</th>
                      <th className="px-6 py-4 text-center font-bold text-red-700">Unethical Facility</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => {
                      const EthicalIcon = row.ethicalIcon;
                      const UnethicalIcon = row.unethicalIcon;
                      return (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-6 py-4 font-semibold text-gray-900">{row.practice}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center justify-center gap-2">
                              <EthicalIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                              <span className="text-gray-700">{row.ethical}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center justify-center gap-2">
                              <UnethicalIcon className="w-5 h-5 text-red-600 flex-shrink-0" />
                              <span className="text-gray-700">{row.unethical}</span>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Top Verified Ethical Sanctuaries
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These sanctuaries have been verified for ethical practices and provide genuine elephant welfare.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 md:p-12 border-4 border-green-300 shadow-2xl">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">
                        GOLD STANDARD
                      </span>
                      <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                        MOST FAMOUS
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Elephant Nature Park</h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-5 h-5" />
                      <span>Chiang Mai - 60km north of city</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-6 h-6 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 mb-6 border-2 border-green-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-green-600" />
                    What Makes It Special
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">First ethical sanctuary in Thailand</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Founded 1995 by Lek Chailert (elephant rights pioneer)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">250-acre natural park</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Over 80 rescued elephants</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">NO riding, NO shows, NO chains EVER</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Elephants rescued from logging, tourism, street begging</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">River for bathing, forest for roaming</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Veterinary hospital on-site</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Activity className="w-6 h-6 text-blue-600" />
                      What You Can Do
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">-</span>
                        <span>Day visit: Feed, walk with, bathe elephants</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">-</span>
                        <span>Overnight volunteer program (1-7 days)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">-</span>
                        <span>Observe elephants in natural habitat</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">-</span>
                        <span>Learn about rescue stories</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">-</span>
                        <span>Support rehabilitation efforts</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-amber-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <DollarSign className="w-6 h-6 text-amber-600" />
                      Cost
                    </h4>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold">-</span>
                        <span>
                          <strong>Day visit:</strong> 2500-3000 THB per person
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold">-</span>
                        <span>
                          <strong>Overnight volunteer:</strong> 6500-8500 THB (includes accommodation, meals)
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold">-</span>
                        <span>
                          <strong>Transportation:</strong> From Chiang Mai included
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-xl p-6 border-2 border-purple-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Users className="w-6 h-6 text-purple-600" />
                      Best For
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">-</span>
                        <span>First-time ethical elephant experience</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">-</span>
                        <span>Those wanting established, trusted sanctuary</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">-</span>
                        <span>Families with older children (minimum age 12 for some programs)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">-</span>
                        <span>Photography enthusiasts</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-cyan-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Clock className="w-6 h-6 text-cyan-600" />
                      How to Book
                    </h4>
                    <div className="space-y-3 text-gray-700">
                      <p className="flex items-start gap-2">
                        <span className="text-cyan-600 mt-1">-</span>
                        <span>
                          Book directly through{' '}
                          <a
                            href="https://www.elephantnaturepark.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-600 hover:underline font-semibold inline-flex items-center gap-1"
                          >
                            elephantnaturepark.org
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-cyan-600 mt-1">-</span>
                        <span>Book 3-4 weeks in advance</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-cyan-600 mt-1">-</span>
                        <span>Often fully booked during high season</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-cyan-600 mt-1">-</span>
                        <span>No walk-ins accepted</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-100 rounded-xl p-6 border-2 border-green-300">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <ThumbsUp className="w-6 h-6 text-green-600" />
                      Pros
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">+</span>
                        <span>Most established and trusted</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">+</span>
                        <span>Large property, spacious for elephants</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">+</span>
                        <span>Educational focus</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">+</span>
                        <span>Professional operation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">+</span>
                        <span>Beautiful setting</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-amber-100 rounded-xl p-6 border-2 border-amber-300">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <ThumbsDown className="w-6 h-6 text-amber-600" />
                      Cons
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">-</span>
                        <span>Expensive (but worth it)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">-</span>
                        <span>Very popular (can feel crowded with 10-15 people per group)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">-</span>
                        <span>Books up far in advance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">-</span>
                        <span>Strict rules (for elephant welfare - this is good!)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-8 h-8 fill-amber-300 text-amber-300" />
                    ))}
                  </div>
                  <p className="text-2xl font-bold text-white">Our Rating: 10/10</p>
                  <p className="text-lg text-green-100 mt-2">The gold standard for ethical elephant tourism</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="space-y-12">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 border-2 border-blue-200 shadow-xl">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
                        MULTIPLE LOCATIONS
                      </span>
                      <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                        BEST VALUE
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Elephant Jungle Sanctuary</h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-5 h-5" />
                      <span>Chiang Mai, Phuket, Pattaya, Koh Samui</span>
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
                  <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">What Makes It Special</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Multiple locations across Thailand</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Smaller groups (6-8 people)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>More hands-on than Elephant Nature Park</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Karen hill tribe staff (traditional keepers)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>20-30 rescued elephants across locations</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-green-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">What You Can Do</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">-</span>
                        <span>Feed elephants sugar cane and bananas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">-</span>
                        <span>Mud spa with elephants (cover them in mud)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">-</span>
                        <span>River bath with elephants</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">-</span>
                        <span>Walk through jungle with elephants</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">-</span>
                        <span>Learn about Karen culture</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white rounded-xl p-6 border-2 border-amber-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-amber-600" />
                      Cost
                    </h4>
                    <div className="space-y-2 text-gray-700">
                      <p>Half-day: 1500-2000 THB</p>
                      <p>Full-day: 2500-3000 THB</p>
                      <p className="text-sm text-gray-600">Pickup + lunch included</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-purple-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Users className="w-5 h-5 text-purple-600" />
                      Best For
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>- More interaction</li>
                      <li>- Budget-conscious</li>
                      <li>- Families (age 4+)</li>
                      <li>- Half-day option</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-cyan-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-cyan-600" />
                      Booking
                    </h4>
                    <p className="text-sm text-gray-700 mb-2">elephantjunglesanctuary.com</p>
                    <p className="text-sm text-gray-600">Book 1-2 weeks ahead</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                    <p className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <ThumbsUp className="w-5 h-5 text-green-600" />
                      Pros
                    </p>
                    <p className="text-sm text-gray-700">
                      Affordable, multiple locations, half-day option, smaller groups, fun mud spa experience
                    </p>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-200">
                    <p className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <ThumbsDown className="w-5 h-5 text-amber-600" />
                      Cons
                    </p>
                    <p className="text-sm text-gray-700">
                      Smaller property, less educational, mud spa not natural behavior (but harmless)
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-4 text-center mt-6">
                  <p className="text-xl font-bold text-white">Our Rating: 9/10</p>
                  <p className="text-blue-100">Best balance of ethics, fun, and value</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-cyan-200 shadow-xl">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-cyan-100 text-cyan-800 text-xs font-bold px-3 py-1 rounded-full">
                        KOH SAMUI ONLY
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Samui Elephant Haven</h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-5 h-5" />
                      <span>Koh Samui Island</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-6 h-6 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-xl p-6 border-2 border-cyan-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">What Makes It Special</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>Only truly ethical sanctuary on Koh Samui</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>Small operation (6-8 elephants)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>Very intimate experience</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>Beautiful jungle setting</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">What You Can Do</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">-</span>
                        <span>Walk with elephants in natural habitat</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">-</span>
                        <span>Feed fresh fruits and vegetables</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">-</span>
                        <span>Observe bathing in natural pond</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">-</span>
                        <span>Learn each elephant's rescue story</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white rounded-xl p-6 border-2 border-amber-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-amber-600" />
                      Cost
                    </h4>
                    <div className="space-y-2 text-gray-700">
                      <p>Half-day: 2000-2500 THB</p>
                      <p>Full-day: 3500-4000 THB</p>
                      <p className="text-sm text-gray-600">Pickup included</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-purple-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Users className="w-5 h-5 text-purple-600" />
                      Best For
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>- Samui visitors</li>
                      <li>- Intimate groups</li>
                      <li>- Quality over quantity</li>
                      <li>- Personal attention</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-cyan-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-cyan-600" />
                      Booking
                    </h4>
                    <p className="text-sm text-gray-700 mb-2">samuielephanthaven.com</p>
                    <p className="text-sm text-gray-600">Book 1-2 weeks ahead</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl p-4 text-center">
                  <p className="text-xl font-bold text-white">Our Rating: 9/10</p>
                  <p className="text-cyan-100">Best option for Samui visitors</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200 shadow-xl">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full">
                        PHUKET ONLY
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Phuket Elephant Sanctuary</h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-5 h-5" />
                      <span>Phuket Island (Northeast area)</span>
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
                    <h4 className="text-xl font-bold text-gray-900 mb-4">What Makes It Special</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span>First ethical sanctuary in Phuket (2016)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span>30-acre forested area</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span>8-10 rescued elephants</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span>Strong educational focus</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-red-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">What You Can Do</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">-</span>
                        <span>Walk with elephants in jungle</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">-</span>
                        <span>Feed at feeding stations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">-</span>
                        <span>Observe elephants bathing in mud</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">-</span>
                        <span>Educational tour about welfare</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white rounded-xl p-6 border-2 border-amber-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-amber-600" />
                      Cost
                    </h4>
                    <div className="space-y-2 text-gray-700">
                      <p>Half-day: 2800 THB</p>
                      <p className="text-sm text-gray-600">Morning or afternoon</p>
                      <p className="text-sm text-gray-600">Pickup included</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-purple-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Users className="w-5 h-5 text-purple-600" />
                      Best For
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>- Phuket visitors</li>
                      <li>- Observation focus</li>
                      <li>- Educational priority</li>
                      <li>- Half-day only</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-orange-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-orange-600" />
                      Booking
                    </h4>
                    <p className="text-sm text-gray-700 mb-2">phuketelephantsanctuary.org</p>
                    <p className="text-sm text-gray-600">Book 1-2 weeks ahead</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-4 text-center">
                  <p className="text-xl font-bold text-white">Our Rating: 8.5/10</p>
                  <p className="text-orange-100">Best Phuket option but pricey for duration</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 md:p-12 border-2 border-emerald-200 shadow-xl">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
                        MOST AUTHENTIC
                      </span>
                      <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">
                        ADVENTUROUS
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Following Giants</h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-5 h-5" />
                      <span>Kanchanaburi (2.5 hours from Bangkok)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-6 h-6 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <div className="bg-emerald-100 rounded-xl p-6 mb-6 border-2 border-emerald-300">
                  <p className="text-gray-800 leading-relaxed">
                    <strong>Most natural experience available.</strong> Walk alongside elephants in jungle ALL DAY as
                    they forage naturally. True observation-based with Karen mahout guides. Physically demanding but
                    incredibly rewarding.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-xl p-6 border-2 border-emerald-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">What Makes It Special</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>Walk alongside elephants 6-7 hours</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>Elephants truly free to roam</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>Karen mahout-led experience</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>No bathing tourists (elephants bathe themselves)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-green-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">What You Can Do</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">-</span>
                        <span>Walk behind elephants through forest</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">-</span>
                        <span>Observe natural foraging behavior</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">-</span>
                        <span>Watch elephants choose their path</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">-</span>
                        <span>Learn from Karen mahouts</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white rounded-xl p-6 border-2 border-amber-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-amber-600" />
                      Cost
                    </h4>
                    <div className="space-y-2 text-gray-700">
                      <p>Full-day: 2500-3000 THB</p>
                      <p className="text-sm text-gray-600">Transportation extra</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-purple-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Users className="w-5 h-5 text-purple-600" />
                      Best For
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>- Adventurous travelers</li>
                      <li>- Most authentic</li>
                      <li>- Physically fit</li>
                      <li>- Nature enthusiasts</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-emerald-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-emerald-600" />
                      Booking
                    </h4>
                    <p className="text-sm text-gray-700 mb-2">followinggiants.com</p>
                    <p className="text-sm text-gray-600">Book 2-3 weeks ahead</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl p-4 text-center">
                  <p className="text-xl font-bold text-white">Our Rating: 9.5/10</p>
                  <p className="text-emerald-100">Most authentic but requires fitness</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                How to Choose the Right Sanctuary
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Use this guide to find the perfect ethical sanctuary based on your location, budget, and preferences.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <MapPin className="w-7 h-7 text-blue-600" />
                  Choose Based on Location
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border-2 border-blue-100">
                    <p className="font-bold text-gray-900 mb-2">Chiang Mai</p>
                    <p className="text-gray-700">Elephant Nature Park or Elephant Jungle Sanctuary</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-2 border-blue-100">
                    <p className="font-bold text-gray-900 mb-2">Phuket</p>
                    <p className="text-gray-700">Phuket Elephant Sanctuary</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-2 border-blue-100">
                    <p className="font-bold text-gray-900 mb-2">Koh Samui</p>
                    <p className="text-gray-700">Samui Elephant Haven</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-2 border-blue-100">
                    <p className="font-bold text-gray-900 mb-2">Near Bangkok</p>
                    <p className="text-gray-700">Following Giants (Kanchanaburi)</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-2 border-blue-100">
                    <p className="font-bold text-gray-900 mb-2">Pattaya</p>
                    <p className="text-gray-700">Elephant Jungle Sanctuary Pattaya</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <DollarSign className="w-7 h-7 text-green-600" />
                  Choose Based on Budget
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border-2 border-green-100">
                    <p className="font-bold text-gray-900 mb-2">Best Value (1500-2500 THB)</p>
                    <p className="text-gray-700">Elephant Jungle Sanctuary - affordable with great experience</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-2 border-green-100">
                    <p className="font-bold text-gray-900 mb-2">Mid-Range (2500-3000 THB)</p>
                    <p className="text-gray-700">Following Giants, Elephant Nature Park day visit</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-2 border-green-100">
                    <p className="font-bold text-gray-900 mb-2">Premium (2800-4000 THB)</p>
                    <p className="text-gray-700">Phuket Sanctuary, Samui Elephant Haven</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Heart className="w-7 h-7 text-purple-600" />
                  Choose Based on Experience
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border-2 border-purple-100">
                    <p className="font-bold text-gray-900 mb-2">Most Established</p>
                    <p className="text-gray-700">Elephant Nature Park - the gold standard</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-2 border-purple-100">
                    <p className="font-bold text-gray-900 mb-2">Most Interaction</p>
                    <p className="text-gray-700">Elephant Jungle Sanctuary - mud spa, feeding, bathing</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-2 border-purple-100">
                    <p className="font-bold text-gray-900 mb-2">Most Authentic</p>
                    <p className="text-gray-700">Following Giants - walk through jungle all day</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-2 border-purple-100">
                    <p className="font-bold text-gray-900 mb-2">Most Intimate</p>
                    <p className="text-gray-700">Samui Elephant Haven - small groups, personal</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-2 border-purple-100">
                    <p className="font-bold text-gray-900 mb-2">Most Educational</p>
                    <p className="text-gray-700">Phuket Elephant Sanctuary - strong conservation focus</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Clock className="w-7 h-7 text-amber-600" />
                  Choose Based on Time
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border-2 border-amber-100">
                    <p className="font-bold text-gray-900 mb-2">Half-Day (3-4 hours)</p>
                    <p className="text-gray-700">Elephant Jungle Sanctuary, Phuket Elephant Sanctuary</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-2 border-amber-100">
                    <p className="font-bold text-gray-900 mb-2">Full-Day (6-8 hours)</p>
                    <p className="text-gray-700">Elephant Nature Park, Following Giants, Elephant Jungle full-day</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-2 border-amber-100">
                    <p className="font-bold text-gray-900 mb-2">Multi-Day (1-7 days)</p>
                    <p className="text-gray-700">Elephant Nature Park volunteer program</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                What to Expect During Your Visit
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Here's a typical schedule for a full-day visit to an ethical elephant sanctuary.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 border-2 border-blue-200">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Typical Full-Day Schedule</h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-24 text-right">
                      <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                        8:00 AM
                      </span>
                    </div>
                    <div className="flex-grow bg-white rounded-xl p-6 border-2 border-blue-200">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Hotel Pickup</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">-</span>
                          <span>Van collects you from your hotel</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">-</span>
                          <span>30-60 minute scenic drive to sanctuary</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">-</span>
                          <span>Meet other visitors (usually 8-12 people)</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-24 text-right">
                      <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                        9:00 AM
                      </span>
                    </div>
                    <div className="flex-grow bg-white rounded-xl p-6 border-2 border-green-200">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Arrival and Introduction</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">-</span>
                          <span>Change into sanctuary clothes (provided)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">-</span>
                          <span>Safety briefing and rules</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">-</span>
                          <span>Learn about elephants and sanctuary mission</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">-</span>
                          <span>Meet your group's elephants</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-24 text-right">
                      <span className="inline-block bg-amber-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                        9:30 AM
                      </span>
                    </div>
                    <div className="flex-grow bg-white rounded-xl p-6 border-2 border-amber-200">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Feeding Time</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 mt-1">-</span>
                          <span>Prepare elephant food (chop fruits, gather vegetation)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 mt-1">-</span>
                          <span>Hand-feed elephants bananas, sugar cane, pumpkins</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 mt-1">-</span>
                          <span>Learn about elephant diet (200+ kg food daily!)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 mt-1">-</span>
                          <span>Take photos with elephants</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-24 text-right">
                      <span className="inline-block bg-emerald-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                        10:30 AM
                      </span>
                    </div>
                    <div className="flex-grow bg-white rounded-xl p-6 border-2 border-emerald-200">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Walking with Elephants</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 mt-1">-</span>
                          <span>Walk alongside elephants through forest or fields</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 mt-1">-</span>
                          <span>Observe natural behaviors (foraging, playing, socializing)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 mt-1">-</span>
                          <span>Elephants set the pace (you follow them)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 mt-1">-</span>
                          <span>Learn about each elephant's rescue story</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-24 text-right">
                      <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                        12:00 PM
                      </span>
                    </div>
                    <div className="flex-grow bg-white rounded-xl p-6 border-2 border-purple-200">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Lunch Break</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600 mt-1">-</span>
                          <span>Traditional Thai meal provided</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600 mt-1">-</span>
                          <span>Vegetarian options available</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600 mt-1">-</span>
                          <span>Break time (elephants rest too)</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-24 text-right">
                      <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                        1:00 PM
                      </span>
                    </div>
                    <div className="flex-grow bg-white rounded-xl p-6 border-2 border-orange-200">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Mud Spa (if offered)</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-orange-600 mt-1">-</span>
                          <span>Cover elephants in mud (protects skin from sun)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-600 mt-1">-</span>
                          <span>Fun, playful activity</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-600 mt-1">-</span>
                          <span>Elephants enjoy mud baths</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-24 text-right">
                      <span className="inline-block bg-cyan-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                        2:00 PM
                      </span>
                    </div>
                    <div className="flex-grow bg-white rounded-xl p-6 border-2 border-cyan-200">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">River Bath</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-600 mt-1">-</span>
                          <span>Walk elephants to river or pond</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-600 mt-1">-</span>
                          <span>Splash water on elephants</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-600 mt-1">-</span>
                          <span>Elephants play in water</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-600 mt-1">-</span>
                          <span>Great photo opportunities</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-24 text-right">
                      <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                        3:00 PM
                      </span>
                    </div>
                    <div className="flex-grow bg-white rounded-xl p-6 border-2 border-red-200">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Final Feeding and Goodbyes</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">-</span>
                          <span>Last chance to feed elephants</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">-</span>
                          <span>Take final photos</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">-</span>
                          <span>Thank you ceremony</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-24 text-right">
                      <span className="inline-block bg-gray-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                        3:30 PM
                      </span>
                    </div>
                    <div className="flex-grow bg-white rounded-xl p-6 border-2 border-gray-200">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Return to Hotel</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-gray-600 mt-1">-</span>
                          <span>Shower and change (you will be muddy!)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-600 mt-1">-</span>
                          <span>Certificate of participation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-600 mt-1">-</span>
                          <span>Arrive back at hotel 4:30-5:00 PM</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-white rounded-2xl p-8 border-2 border-green-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Camera className="w-7 h-7 text-green-600" />
                    What to Bring
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Change of clothes (you WILL get dirty)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Waterproof phone case for river bath photos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Sunscreen and hat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Insect repellent</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Closed-toe shoes (old shoes you don't mind ruining)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Towel (sometimes provided)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Camera with extra battery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Reusable water bottle</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-8 border-2 border-blue-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Home className="w-7 h-7 text-blue-600" />
                    What to Wear
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Comfortable clothes you don't mind ruining</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Shorts or pants you can get wet and muddy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>T-shirt or tank top (bring extra)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Sandals or old sneakers that can get muddy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Sanctuaries usually provide clothing (but bring backup)</span>
                    </li>
                  </ul>
                  <div className="mt-6 bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                    <p className="text-sm text-gray-700">
                      <strong>Pro Tip:</strong> Wear clothes and shoes you're prepared to throw away. Elephant mud is
                      hard to wash out!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Booking Tips and Practical Info
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Clock className="w-7 h-7 text-blue-600" />
                  How Far in Advance to Book
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border-2 border-blue-100">
                    <p className="font-bold text-gray-900 mb-2">Elephant Nature Park</p>
                    <p className="text-gray-700">3-4 weeks (very popular, books up fast)</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-2 border-blue-100">
                    <p className="font-bold text-gray-900 mb-2">Elephant Jungle Sanctuary</p>
                    <p className="text-gray-700">1-2 weeks recommended</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-2 border-blue-100">
                    <p className="font-bold text-gray-900 mb-2">Other Sanctuaries</p>
                    <p className="text-gray-700">1-2 weeks in advance</p>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-4 border-2 border-blue-300">
                    <p className="font-bold text-gray-900 mb-2">High Season (Nov-Feb)</p>
                    <p className="text-gray-700">Book earlier, demand is highest</p>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-4 border-2 border-blue-300">
                    <p className="font-bold text-gray-900 mb-2">Low Season (May-Oct)</p>
                    <p className="text-gray-700">Sometimes available 2-3 days before</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <ExternalLink className="w-7 h-7 text-green-600" />
                  Where to Book
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border-2 border-green-200">
                    <p className="font-bold text-green-700 mb-2">BEST: Direct through sanctuary website</p>
                    <p className="text-gray-700 text-sm">Supports them directly, no commission</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-2 border-green-100">
                    <p className="font-bold text-gray-900 mb-2">GetYourGuide, Viator, Klook</p>
                    <p className="text-gray-700 text-sm">Convenience, verified reviews</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-2 border-green-100">
                    <p className="font-bold text-gray-900 mb-2">Hotel Concierge</p>
                    <p className="text-gray-700 text-sm">Sometimes commission markup</p>
                  </div>
                  <div className="bg-red-100 rounded-lg p-4 border-2 border-red-300">
                    <p className="font-bold text-red-700 mb-2">AVOID: Street Touts</p>
                    <p className="text-gray-700 text-sm">May take you to unethical places</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <DollarSign className="w-7 h-7 text-amber-600" />
                  Pricing Transparency
                </h3>
                <div className="space-y-4 text-gray-700">
                  <div className="bg-white rounded-lg p-4 border-2 border-amber-100">
                    <p className="font-bold text-gray-900 mb-2">Ethical sanctuaries cost: 1500-4000 THB</p>
                    <p className="text-sm">Fair pricing for genuine elephant care</p>
                  </div>
                  <div className="bg-red-100 rounded-lg p-4 border-2 border-red-300">
                    <p className="font-bold text-red-700 mb-2">Under 1000 THB = NOT ethical</p>
                    <p className="text-gray-700 text-sm">Proper elephant care is expensive</p>
                  </div>
                  <div className="bg-amber-100 rounded-lg p-4 border-2 border-amber-300">
                    <p className="text-sm leading-relaxed">
                      Higher prices = better elephant care, smaller groups, rescued elephants. Your money funds elephant
                      food, vet care, and sanctuary operations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Users className="w-7 h-7 text-purple-600" />
                  Who Can Visit
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border-2 border-purple-100">
                    <p className="font-bold text-gray-900 mb-2">Minimum Age</p>
                    <p className="text-gray-700 text-sm">Usually 4-12 years (varies by sanctuary)</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-2 border-purple-100">
                    <p className="font-bold text-gray-900 mb-2">Maximum Age</p>
                    <p className="text-gray-700 text-sm">None (but consider physical demands)</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-2 border-purple-100">
                    <p className="font-bold text-gray-900 mb-2">Pregnant Women</p>
                    <p className="text-gray-700 text-sm">Check with sanctuary (some restrict)</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-2 border-purple-100">
                    <p className="font-bold text-gray-900 mb-2">People with Disabilities</p>
                    <p className="text-gray-700 text-sm">Most accommodating, contact in advance</p>
                  </div>
                  <div className="bg-purple-100 rounded-lg p-4 border-2 border-purple-300">
                    <p className="font-bold text-gray-900 mb-2">Cancellation Policies</p>
                    <p className="text-gray-700 text-sm">
                      Most allow free cancellation 24-48 hours before. Weather cancellations usually mean full refund
                      or reschedule.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="bg-red-50 rounded-2xl p-8 md:p-12 border-4 border-red-300">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <AlertTriangle className="w-12 h-12 text-red-600" />
                  <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px]">
                    How to Spot Fake Sanctuaries
                  </h2>
                </div>
                <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  Some places call themselves sanctuaries but still exploit elephants. Here's how to identify them.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border-2 border-red-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-red-100 rounded-full">
                      <XCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Red Flag 1</h3>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Offering ANY Riding</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>- "Bareback riding" is still riding (harmful)</li>
                    <li>- "Short rides" are still rides</li>
                    <li>- "Traditional mahout style" is still abusive</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border-2 border-red-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-red-100 rounded-full">
                      <XCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Red Flag 2</h3>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Multiple Sessions Daily</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>- Ethical sanctuaries: 1-2 groups per day</li>
                    <li>- Elephants need rest</li>
                    <li>- 4-5 groups daily = overworked elephants</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border-2 border-red-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-red-100 rounded-full">
                      <XCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Red Flag 3</h3>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Too Many Elephants, Small Space</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>- Ethical ratio: Lots of land per elephant</li>
                    <li>- Overcrowded = welfare issues</li>
                    <li>- Elephants need room to roam</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border-2 border-red-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-red-100 rounded-full">
                      <XCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Red Flag 4</h3>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Breeding Programs</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>- Elephants should not breed for tourism</li>
                    <li>- Baby elephants attract visitors</li>
                    <li>- Creates cycle of exploitation</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border-2 border-red-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-red-100 rounded-full">
                      <XCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Red Flag 5</h3>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Suspiciously Cheap Prices</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>- Under 1000 THB = corners being cut</li>
                    <li>- Proper elephant care is expensive</li>
                    <li>- Low prices mean poor conditions</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border-2 border-red-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-red-100 rounded-full">
                      <XCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Red Flag 6</h3>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Aggressive Marketing</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>- Touts on street offering "sanctuary" tours</li>
                    <li>- Real sanctuaries book through website</li>
                    <li>- High-pressure sales tactics</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border-2 border-blue-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Shield className="w-7 h-7 text-blue-600" />
                  How to Verify a Sanctuary
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Check TripAdvisor reviews (look for mentions of riding, chains, bullhooks)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Read Google reviews carefully</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Check sanctuary website for clear no-riding policy</span>
                    </li>
                  </ul>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Look for rescue stories and educational content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Ask direct questions: "Do elephants wear chains?" "Are bullhooks used?"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Trust your instincts - if something feels off, it probably is</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto"></div>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white rounded-xl p-8 border-2 border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Is it okay to touch elephants at sanctuaries?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, at ethical sanctuaries light touch while feeding or bathing is okay. The key difference is that
                  elephants can move away if uncomfortable. Ethical sanctuaries respect elephant choice. Avoid climbing
                  on elephants or grabbing their trunks.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Do elephants enjoy being bathed by tourists?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  It depends on the individual elephant. Some elephants enjoy water play with humans, while others
                  prefer bathing alone. Ethical sanctuaries let elephants choose - if an elephant walks away from the
                  water, visitors should not follow. This is a sign of respecting elephant autonomy.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">How much does an elephant eat per day?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Elephants eat 200-300 kg of food daily! This includes grass, bamboo, fruits, and vegetables. Feeding
                  elephants is incredibly expensive, which is why ethical sanctuaries have higher costs. Your visit fee
                  directly supports feeding these gentle giants.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Can I visit a sanctuary with young children?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Most sanctuaries allow children 4+ years old. Check the minimum age requirement when booking. Elephant
                  Jungle Sanctuary is particularly family-friendly. Always supervise children closely around elephants
                  and teach them to be gentle and respectful.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Are elephant sanctuaries safe?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, very safe. Elephants at ethical sanctuaries are calm and accustomed to visitors. Staff provide
                  thorough safety briefings. Key rules: do not approach elephants from behind, avoid sudden movements or
                  loud noises, and always follow staff instructions. Incidents are extremely rare.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Why are ethical sanctuaries so expensive?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Costs include elephant food ($50-100 per elephant daily), veterinary care, large amounts of land,
                  qualified staff, transportation, and liability insurance. Ethical sanctuaries also keep group sizes
                  small, limiting revenue. Your fee directly supports elephant welfare - it's an investment in genuine
                  conservation, not entertainment.
                </p>
              </div>
            </div>
          </section>

          <div className="bg-gradient-to-br from-green-900 to-blue-900 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex items-start gap-4">
              <Heart className="w-10 h-10 text-green-300 flex-shrink-0" />
              <div>
                <h3 className="text-3xl font-bold mb-4">Choose Ethical Elephant Tourism</h3>
                <p className="text-green-100 text-lg leading-relaxed mb-6">
                  Every visitor who chooses an ethical sanctuary over a riding camp sends a powerful message that animal
                  welfare matters more than entertainment. By supporting genuine sanctuaries, you help fund elephant
                  rescue, rehabilitation, and conservation efforts while showing the tourism industry that ethical
                  practices are profitable.
                </p>
                <div className="bg-green-800 rounded-xl p-6 border-2 border-green-600">
                  <p className="text-xl font-bold mb-2">Remember:</p>
                  <p className="text-green-100 leading-relaxed">
                    If elephants are being ridden, performing tricks, or don't have space to roam freely, it's NOT
                    ethical - no matter what the facility calls itself. Real sanctuaries prioritize elephant welfare
                    over visitor entertainment.
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
                title: 'Things to Do in Thailand',
                description: 'Complete guide to activities and experiences across Thailand',
                link: '/things-to-do',
                image:
                  'https://images.pexels.com/photos/1456408/pexels-photo-1456408.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Chiang Mai Guide',
                description: 'Explore northern Thailand and its cultural attractions',
                link: '/chiang-mai',
                image:
                  'https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Thai Culture Guide',
                description: 'Understanding Thai customs, etiquette, and traditions',
                link: '/culture',
                image:
                  'https://images.pexels.com/photos/16096815/pexels-photo-16096815.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
