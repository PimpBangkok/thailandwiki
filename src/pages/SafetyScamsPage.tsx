import { useState } from 'react';
import {
  AlertTriangle,
  Car,
  Phone,
  Shield,
  ShieldAlert,
  Waves,
  Lock,
  Eye,
  AlertCircle,
  Ban,
  MapPin,
  DollarSign,
  Camera,
  CheckCircle2,
  Users,
  Heart,
  Plane,
  ShoppingBag,
  Info,
  FileText,
  HelpCircle,
  Send,
  Building2,
  Pill,
  Sun,
  Utensils,
  Scale,
  Cigarette,
  Trash2,
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { usePageMeta } from '../hooks/usePageMeta';
import RelatedGuides from '../components/RelatedGuides';
import { supabase } from '../lib/supabase';

interface Scam {
  title: string;
  howItWorks: string;
  reality: string;
  redFlags: string[];
  howToAvoid: string;
  locations: string;
  severity: 'extreme' | 'high' | 'common';
  icon: any;
}

interface FAQ {
  question: string;
  answer: string;
}

export default function SafetyScamsPage() {
  usePageMeta({
    title: 'Thailand Safety Guide 2026: Stay Safe and Avoid Common Scams',
    description:
      'Complete Thailand safety guide 2026. Learn about common scams, how to stay safe, and what to do if something goes wrong. Essential reading for Thailand travel.',
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    concerns: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');

  const scams: Scam[] = [
    {
      title: 'Gem Scam (Most Expensive)',
      icon: DollarSign,
      howItWorks:
        "Friendly local befriends you, mentions special government tax-free day for gems, takes you to shop to buy gems claiming you can resell for profit back home. They seem knowledgeable and trustworthy.",
      reality:
        'Gems are worthless or fake. Shop gives kickback to scammer. You lose hundreds or thousands of dollars. No reputable jeweler will buy them back.',
      redFlags: [
        'Strangers being too friendly near tourist sites',
        'Mentions of government schemes or tax-free days',
        'Gem deals that sound too good to be true',
        'Pressure to buy quickly before opportunity ends',
      ],
      howToAvoid:
        'Never buy gems or jewelry for resale purposes. If it sounds too good to be true, it is. Walk away immediately from anyone suggesting gem investments.',
      locations: 'Bangkok (near Grand Palace), tourist areas',
      severity: 'extreme',
    },
    {
      title: 'Tuk-Tuk Temple Closed Scam',
      icon: Car,
      howItWorks:
        'Tuk-tuk driver or friendly stranger near temple says your destination (Grand Palace, Wat Pho) is closed today for Buddhist holiday or special ceremony. They offer to take you to other temples or shopping instead.',
      reality:
        'Your destination is actually open. Driver gets commission from shops and alternative temples. You waste hours shopping instead of seeing what you wanted.',
      redFlags: [
        'Unsolicited help from strangers near temples',
        'Claims of unexpected closures',
        'Alternative suggestions involving shopping or tailors',
        'Tuk-tuk drivers being overly helpful',
      ],
      howToAvoid:
        "Walk to entrance yourself and check. Ignore helpful strangers near tourist sites. Grand Palace rarely closes. Check official hours online before going. Don't trust tuk-tuk drivers about closures.",
      locations: 'Near Grand Palace, Wat Pho, major temples in Bangkok',
      severity: 'high',
    },
    {
      title: 'Jet Ski Rental Scam (Can Cost Thousands)',
      icon: Waves,
      howItWorks:
        'You rent a jet ski at suspiciously cheap price. Upon return, operator claims you damaged it and shows scratches or dents. They demand $1000-3000 USD immediate payment and threaten to call police or become aggressive.',
      reality:
        'Damage was pre-existing or faked while you were riding. This is an organized scam. They target tourists who will pay to avoid police involvement.',
      redFlags: [
        'Aggressive or intimidating operators',
        'Suspiciously cheap rental prices',
        'No written agreement or inspection',
        'Operators who refuse to let you photograph damage',
      ],
      howToAvoid:
        'Take detailed photos and video of entire jet ski before AND after use. Better yet: do not rent jet skis in Phuket Patong Beach or Pattaya Beach at all. Go to other islands for water sports.',
      locations: 'Patong Beach Phuket, Pattaya Beach',
      severity: 'extreme',
    },
    {
      title: 'Taxi Meter Scam',
      icon: Car,
      howItWorks:
        'Taxi driver refuses to use meter, claims it is broken, or quotes a high flat rate before you get in. Some drivers run the meter but take longer routes to increase fare.',
      reality:
        'Meter fare would be 50-70% cheaper. This is illegal but common at tourist areas. Drivers know tourists are unlikely to report them.',
      redFlags: [
        "Driver says meter is broken",
        'Quotes flat rate before you enter',
        'Refuses when you insist on meter',
        'Takes unnecessarily long routes',
      ],
      howToAvoid:
        'Always insist on meter or walk away. Use Grab or Bolt app instead. Never agree to flat rate unless you know it is fair. Have destination address in Thai to show driver.',
      locations: 'Tourist areas, airports, train stations, nightlife districts',
      severity: 'high',
    },
    {
      title: 'Bar Beer Scam',
      icon: ShoppingBag,
      howItWorks:
        'Attractive people invite you to a bar or club they know. You buy expensive drinks. Bill comes to $300-1000. Large bouncers appear when you protest. You are threatened or intimidated into paying.',
      reality:
        'This is an organized scam to extract money from tourists. The bar, staff, and friendly people are all working together. Drinks have no posted prices.',
      redFlags: [
        'Strangers inviting you to specific bar or club',
        'No prices on menu or drink list',
        'Staff encouraging expensive drinks',
        'Aggressive staff when bill arrives',
      ],
      howToAvoid:
        'Never follow strangers to bars or clubs. Always check drink prices before ordering. If menu has no prices, leave immediately. Walk out if threatened and call tourist police 1155.',
      locations: 'Bangkok Patpong, Nana, Pattaya Walking Street, Phuket Bangla Road',
      severity: 'extreme',
    },
    {
      title: 'Grand Palace Dress Code Scam',
      icon: ShoppingBag,
      howItWorks:
        'Fake official-looking person outside Grand Palace claims your clothes are inappropriate for dress code. They offer to rent you proper clothes (pants, scarves) for 500-1000 THB.',
      reality:
        'While real dress code exists (shoulders and knees covered), free sarongs are available inside at entrance. These touts are scammers, not officials.',
      redFlags: [
        'People outside gate offering clothing rental',
        'Pressure to rent immediately',
        'High rental prices (real rental inside is free)',
        'No official identification',
      ],
      howToAvoid:
        'Wear appropriate clothes from hotel: shoulders and knees covered. Ignore anyone outside offering rentals. Free sarongs available at real entrance if genuinely needed.',
      locations: 'Grand Palace Bangkok entrance area',
      severity: 'common',
    },
    {
      title: 'Bird Seed & Fish Food Sellers',
      icon: AlertCircle,
      howItWorks:
        'Vendor approaches and places bird seed, fish food, or flowers in your hand saying "for free" or blessing. After you use it or hold it, they aggressively demand 100-200 THB payment.',
      reality:
        'Nothing is free. This is aggressive scam targeting tourists who feel obligated to pay once they have accepted something.',
      redFlags: [
        'Unsolicited items placed in your hands',
        "Claims it's free or a gift",
        'Follows you demanding payment',
        'Becomes aggressive if you refuse',
      ],
      howToAvoid:
        'Say "no thank you" firmly and do not accept anything placed in hands. If they persist, walk away quickly. They are pushy but will not follow far. Never pay.',
      locations: 'Temples, parks, tourist spots, near water',
      severity: 'common',
    },
    {
      title: 'Overpriced Taxis from Airport',
      icon: Plane,
      howItWorks:
        'Unlicensed taxi drivers or touts approach you at airport baggage claim or arrivals. They offer rides to city at 2-3x normal price (1000-1500 THB). They are aggressive and insist this is the only option.',
      reality:
        'Official metered taxis at taxi counter cost 350-500 THB to city center. These drivers are unlicensed and overcharge tourists who do not know better.',
      redFlags: [
        'Drivers approaching before you reach official taxi queue',
        'Very high quoted prices',
        'Claims that meter taxis are not available',
        'Pressure to decide quickly',
      ],
      howToAvoid:
        'Use official airport taxi counter only (Level 1 at BKK, similar at DMK). Alternatively use Grab app. Ignore anyone approaching you directly. Official taxis always use meter.',
      locations: 'Both Bangkok airports (BKK and DMK)',
      severity: 'high',
    },
  ];

  const faqs: FAQ[] = [
    {
      question: 'Is Thailand safe for tourists?',
      answer:
        "Yes, Thailand is generally very safe for tourists. Violent crime against tourists is rare. Thailand welcomes over 40 million visitors annually, and the vast majority have safe experiences. Main concerns are petty theft, scams, and traffic accidents - all preventable with awareness. Thai people are generally friendly and helpful. Don't let fear prevent you from visiting this amazing country.",
    },
    {
      question: 'What are the most common scams in Thailand?',
      answer:
        'The most common scams are: gem scam (most expensive), taxi meter refusal, tuk-tuk temple closed scam, jet ski damage scam, bar overcharging, Grand Palace dress code scam, and bird seed sellers. All are completely avoidable if you know what to watch for. Never buy gems for resale, always insist on taxi meters or use Grab, and ignore overly friendly strangers near tourist sites.',
    },
    {
      question: 'Should I be worried about crime in Thailand?',
      answer:
        'Petty theft like pickpocketing happens in crowded tourist areas. Keep valuables in hotel safe and be aware of surroundings. Violent crime against tourists is very rare - Thailand is statistically safer than many Western countries for violent crime. Use common sense: avoid empty streets late at night, watch your belongings, and trust your instincts.',
    },
    {
      question: 'Can I drink tap water in Thailand?',
      answer:
        'No, never drink tap water in Thailand. Always drink bottled water which is cheap and available everywhere. Hotels provide free bottles. Ice in restaurants and cafes is generally safe as it is made from filtered water. Street vendors may use tap water ice - use your judgment. Brush teeth with bottled water to be extra safe.',
    },
    {
      question: 'What should I do if I am scammed?',
      answer:
        'Call Tourist Police 1155 immediately - they speak English and specialize in helping tourists. Stay calm and do not escalate. Document everything with photos and receipts. File a police report for insurance claims. Contact your embassy for serious incidents. Report scam hotels or tours to booking platforms. Leave honest reviews to warn other travelers.',
    },
    {
      question: 'Are there areas I should avoid in Thailand?',
      answer:
        'Deep South provinces (Yala, Pattani, Narathiwat) have occasional unrest due to separatist conflict - avoid unless necessary. Everywhere else is safe for tourists. Use normal city precautions at night in any major city. Avoid empty streets and unlit areas after dark. Tourist areas are heavily policed and very safe.',
    },
  ];

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');

    try {
      const { error } = await supabase.from('contact_submissions').insert([
        {
          name: formData.name,
          email: formData.email,
          message: `Safety Concerns: ${formData.concerns}`,
          subject: 'Thailand Safety Question',
        },
      ]);

      if (error) throw error;

      setFormStatus('success');
      setFormMessage('Message sent! Our Thailand experts will respond soon.');
      setFormData({ name: '', email: '', concerns: '' });
      setTimeout(() => {
        setFormStatus('idle');
        setFormMessage('');
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
      setFormMessage('Failed to send. Please try again.');
    }
  };

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Travel Planning', path: '/travel-planning' },
          { label: 'Safety & Scams Guide', path: '/safety-scams' },
        ]}
      />

      <div className="bg-gradient-to-b from-red-900 to-red-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <ShieldAlert className="w-8 h-8 text-red-300" />
              <span className="text-red-300 font-semibold tracking-wider uppercase text-sm">
                Essential Safety Guide 2026
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 uppercase tracking-[3px]">
              Thailand Safety Guide
              <br />
              <span className="text-red-300">Stay Safe and Avoid Scams</span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-red-100 leading-relaxed">
                Complete guide to staying safe in Thailand — common scams, safety tips, and what to watch out for
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-20">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                Thailand is generally very safe for tourists, with millions visiting each year without incident.
                Violent crime against tourists is rare. However, petty theft and tourist-targeted scams do exist. This
                guide helps you recognize common scams, stay safe, and travel confidently through Thailand. Armed with
                this knowledge, you can avoid the tourist traps that catch unprepared travelers. Updated February 2026
                with latest scam tactics and safety information.
              </p>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Common Scams in Thailand
              </h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Be aware of these common scams. Knowledge is your best defense.
              </p>
            </div>

            <div className="space-y-8">
              {scams.map((scam, index) => {
                const Icon = scam.icon;
                const severityColors = {
                  extreme: 'border-red-600 bg-red-50',
                  high: 'border-orange-500 bg-orange-50',
                  common: 'border-yellow-500 bg-yellow-50',
                };
                const badgeColors = {
                  extreme: 'bg-red-600 text-white',
                  high: 'bg-orange-600 text-white',
                  common: 'bg-yellow-600 text-white',
                };

                return (
                  <div
                    key={index}
                    className={`border-l-4 ${severityColors[scam.severity]} rounded-xl p-8 shadow-lg`}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-white rounded-lg shadow-sm">
                          <Icon className="w-7 h-7 text-red-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{scam.title}</h3>
                          <span className={`text-xs font-bold px-3 py-1 rounded uppercase ${badgeColors[scam.severity]}`}>
                            {scam.severity === 'extreme' ? 'Extreme Risk' : scam.severity === 'high' ? 'High Risk' : 'Common'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                          <AlertCircle className="w-5 h-5 text-red-600" />
                          How It Works
                        </h4>
                        <p className="text-gray-700 leading-relaxed">{scam.howItWorks}</p>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                          <Eye className="w-5 h-5 text-orange-600" />
                          Reality
                        </h4>
                        <p className="text-gray-700 leading-relaxed">{scam.reality}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-yellow-600" />
                        Red Flags
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {scam.redFlags.map((flag, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Ban className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{flag}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
                        <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                          <Shield className="w-5 h-5 text-green-600" />
                          How to Avoid
                        </h4>
                        <p className="text-sm text-gray-700 leading-relaxed">{scam.howToAvoid}</p>
                      </div>

                      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                        <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-blue-600" />
                          Common Locations
                        </h4>
                        <p className="text-sm text-gray-700">{scam.locations}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                General Safety Tips
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border-2 border-blue-200 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Car className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Transportation Safety</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Use Grab or Bolt apps instead of street taxis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Always insist on taxi meter or walk away</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Wear helmet on motorbikes (rentals must provide)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Never drink and drive (strict enforcement, high fines)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Be cautious with motorbike taxis (fast, risky)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Traffic drives on LEFT side - pedestrians do NOT have right of way</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border-2 border-green-200 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Pill className="w-8 h-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Health and Medical</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Drink bottled water only, never tap water</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Ice in restaurants usually safe (filtered water)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Street food generally safe — look for busy stalls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Get travel insurance before trip</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Sunscreen essential (tropical sun very strong)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Major hospitals have English-speaking staff</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-white rounded-2xl p-8 border-2 border-cyan-200 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Waves className="w-8 h-8 text-cyan-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Beach and Water Safety</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Check for jellyfish warnings (red flags)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Strong currents at some beaches — obey warning flags</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Never swim while drunk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Be cautious with water sports operators</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Avoid jet ski rentals in Phuket and Pattaya specifically</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border-2 border-orange-200 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <ShoppingBag className="w-8 h-8 text-orange-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Nightlife Safety</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Watch your drink always, never leave unattended</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Never accept drinks from strangers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Travel in groups at night when possible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Keep valuables in hotel safe</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Know your limits with alcohol</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 border-2 border-pink-200 shadow-lg md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-8 h-8 text-pink-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Safety for Women Travelers</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Thailand generally very safe for solo women travelers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Dress modestly at temples (shoulders, knees covered)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Trust your instincts always</span>
                    </li>
                  </ul>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Avoid empty streets late at night</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Use reputable transport (Grab, official taxis)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Solo female travel very common and accepted</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Emergency Contacts
              </h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Save these numbers before you travel</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-6 shadow-xl">
                <Shield className="w-10 h-10 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Tourist Police</h3>
                <p className="text-blue-100 mb-4">English-speaking, 24/7</p>
                <div className="text-4xl font-bold">1155</div>
                <p className="text-sm text-blue-100 mt-2">YOUR FIRST CALL</p>
              </div>

              <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-2xl p-6 shadow-xl">
                <Phone className="w-10 h-10 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Ambulance</h3>
                <p className="text-red-100 mb-4">Medical emergency</p>
                <div className="text-4xl font-bold">1669</div>
              </div>

              <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-2xl p-6 shadow-xl">
                <AlertTriangle className="w-10 h-10 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Fire</h3>
                <p className="text-orange-100 mb-4">Fire emergency</p>
                <div className="text-4xl font-bold">199</div>
              </div>

              <div className="bg-gradient-to-br from-gray-700 to-gray-800 text-white rounded-2xl p-6 shadow-xl">
                <ShieldAlert className="w-10 h-10 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Police</h3>
                <p className="text-gray-300 mb-4">General police</p>
                <div className="text-4xl font-bold">191</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-blue-600" />
                  Major Hospitals
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Bangkok:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Bumrungrad International Hospital (Sukhumvit)</li>
                      <li>• Bangkok Hospital (multiple locations)</li>
                      <li>• Samitivej Hospital</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Phuket:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Bangkok Hospital Phuket</li>
                      <li>• Phuket International Hospital</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Chiang Mai:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Chiang Mai Ram Hospital</li>
                      <li>• Bangkok Hospital Chiangmai</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">All major hospitals have English-speaking staff</p>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Phone className="w-6 h-6 text-blue-600" />
                  Embassies (Bangkok)
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li>
                    <strong>US Embassy:</strong>
                    <br />
                    +66-2-205-4000
                  </li>
                  <li>
                    <strong>UK Embassy:</strong>
                    <br />
                    +66-2-305-8333
                  </li>
                  <li>
                    <strong>Australian Embassy:</strong>
                    <br />
                    +66-2-344-6300
                  </li>
                  <li>
                    <strong>Canadian Embassy:</strong>
                    <br />
                    +66-2-646-4300
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Thailand Laws to Know
              </h2>
              <div className="w-24 h-1 bg-slate-600 mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 border-2 border-red-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Ban className="w-8 h-8 text-red-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Drugs</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Zero tolerance policy. Possession results in prison time (years to life). Trafficking can result in
                  death penalty. This includes marijuana despite changing laws. Do not risk it under any circumstances.
                </p>
                <div className="bg-red-100 border-2 border-red-300 rounded-lg p-4">
                  <p className="text-red-900 font-semibold text-sm">Maximum penalty: Death</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border-2 border-orange-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Cigarette className="w-8 h-8 text-orange-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Vaping</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Technically illegal to import or sell. Enforcement is inconsistent (many people vape). Risk of fine up
                  to 30,000 THB if caught. Consider leaving vape at home to be safe.
                </p>
                <div className="bg-orange-100 border-2 border-orange-300 rounded-lg p-4">
                  <p className="text-orange-900 font-semibold text-sm">Fine: Up to 30,000 THB</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="w-8 h-8 text-slate-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Lese-Majeste (Royal Family)</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Insulting or criticizing monarchy is serious crime. Can result in years in prison. Do not discuss
                  politics or royalty negatively. Stand when royal anthem plays (movies, events). Respect all images of
                  king and royal family.
                </p>
                <div className="bg-slate-100 border-2 border-slate-300 rounded-lg p-4">
                  <p className="text-slate-900 font-semibold text-sm">Maximum: 15 years prison</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border-2 border-blue-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Cigarette className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Smoking Bans</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Banned on many beaches (Phuket, Samui, Pattaya). Banned in most indoor public places. Fines up to
                  100,000 THB strictly enforced on popular beaches. Use designated smoking areas only.
                </p>
                <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-4">
                  <p className="text-blue-900 font-semibold text-sm">Fine: Up to 100,000 THB</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border-2 border-green-200 shadow-lg md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <Trash2 className="w-8 h-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Littering</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Fines enforced in some areas, especially strict in national parks. Up to 2000 THB fine. Dispose of
                  trash properly always. Keep beaches and natural areas clean.
                </p>
                <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4">
                  <p className="text-green-900 font-semibold text-sm">Fine: Up to 2,000 THB</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                What to Do If Scammed
              </h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: 'Stay Calm',
                  desc: 'Do not escalate situation. Do not get physical or aggressive. Assess if you are in danger. Your safety is priority.',
                  icon: Shield,
                  color: 'blue',
                },
                {
                  step: 2,
                  title: 'Document Everything',
                  desc: 'Take photos and videos if safe. Get names, location details, receipts. Note time and circumstances. More evidence helps.',
                  icon: Camera,
                  color: 'green',
                },
                {
                  step: 3,
                  title: 'Call Tourist Police (1155)',
                  desc: 'English-speaking operators. Specifically trained for tourist issues. Can mediate disputes. Available 24/7. More helpful than regular police for scams.',
                  icon: Phone,
                  color: 'red',
                },
                {
                  step: 4,
                  title: 'File Police Report',
                  desc: 'Needed for insurance claims. Go to nearest police station with tourist police if possible. Get written report copy. Bring passport and documentation.',
                  icon: FileText,
                  color: 'orange',
                },
                {
                  step: 5,
                  title: 'Contact Your Embassy',
                  desc: 'For serious incidents only. They can provide guidance. Cannot get you out of legal trouble but can advise. Useful for lost passports.',
                  icon: Building2,
                  color: 'slate',
                },
                {
                  step: 6,
                  title: 'Report to Platform',
                  desc: 'Report scam hotels/tours to booking platform. Leave honest reviews to warn others. Help future travelers avoid same scam.',
                  icon: Info,
                  color: 'cyan',
                },
              ].map((item, index) => {
                const Icon = item.icon;
                const colors = {
                  blue: 'bg-blue-50 border-blue-200 text-blue-600',
                  green: 'bg-green-50 border-green-200 text-green-600',
                  red: 'bg-red-50 border-red-200 text-red-600',
                  orange: 'bg-orange-50 border-orange-200 text-orange-600',
                  slate: 'bg-slate-50 border-slate-200 text-slate-600',
                  cyan: 'bg-cyan-50 border-cyan-200 text-cyan-600',
                };

                return (
                  <div key={index} className={`${colors[item.color]} border-2 rounded-xl p-6 shadow-lg`}>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-xl text-gray-900 shadow-md">
                          {item.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                          <Icon className={`w-6 h-6 ${item.color === 'blue' ? 'text-blue-600' : item.color === 'green' ? 'text-green-600' : item.color === 'red' ? 'text-red-600' : item.color === 'orange' ? 'text-orange-600' : item.color === 'slate' ? 'text-slate-600' : 'text-cyan-600'}`} />
                          {item.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Staying Safe Checklist
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border-2 border-blue-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Plane className="w-6 h-6 text-blue-600" />
                  Before You Go
                </h3>
                <ul className="space-y-3">
                  {[
                    'Get comprehensive travel insurance',
                    'Copy passport and important docs',
                    'Share itinerary with family/friends',
                    'Download offline maps',
                    'Research common scams',
                    'Get vaccinations if needed',
                    'Register with embassy (optional)',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border-2 border-green-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-green-600" />
                  While in Thailand
                </h3>
                <ul className="space-y-3">
                  {[
                    'Keep valuables in hotel safe',
                    'Carry copy of passport, not original',
                    'Use ATMs inside banks (more secure)',
                    'Avoid large amounts of cash',
                    'Use Grab/Bolt for transport',
                    'Check prices before buying',
                    'Trust your instincts',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-xl flex-shrink-0">
                      <HelpCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Worried About Safety?
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Chat with our Thailand experts about your safety concerns
              </p>
            </div>

            <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-xl">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="concerns" className="block text-sm font-semibold text-gray-900 mb-2">
                    Your Safety Concerns
                  </label>
                  <textarea
                    id="concerns"
                    required
                    value={formData.concerns}
                    onChange={(e) => setFormData({ ...formData, concerns: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us what you're worried about..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {formStatus === 'loading' ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {formMessage && (
                  <div
                    className={`p-4 rounded-xl ${
                      formStatus === 'success'
                        ? 'bg-green-50 border-2 border-green-200 text-green-800'
                        : 'bg-red-50 border-2 border-red-200 text-red-800'
                    }`}
                  >
                    <p className="font-semibold">{formMessage}</p>
                  </div>
                )}
              </form>
            </div>
          </section>

          <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex items-start gap-4">
              <Shield className="w-10 h-10 text-green-300 flex-shrink-0" />
              <div>
                <h3 className="text-3xl font-bold mb-4">Final Reminder</h3>
                <p className="text-green-100 text-lg leading-relaxed mb-4">
                  Thailand welcomes over 40 million tourists every year, and the vast majority have safe, wonderful
                  experiences. Don't let fear of scams prevent you from enjoying this incredible country.
                </p>
                <p className="text-green-100 text-lg leading-relaxed">
                  Stay aware, trust your instincts, and don't be afraid to walk away from situations that feel wrong.
                  Most Thai people are genuinely friendly and helpful. This information is meant to empower you, not
                  scare you.
                </p>
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
                title: 'Bangkok Airport Guide',
                description: 'Complete airport and transport guide',
                link: '/bangkok-airport',
                image:
                  'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Budget Guide',
                description: 'How much money you need',
                link: '/budget-guide',
                image:
                  'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Thailand Visa Guide',
                description: 'Visa requirements and application',
                link: '/visa-guide',
                image:
                  'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
