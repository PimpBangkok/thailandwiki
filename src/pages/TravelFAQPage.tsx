import { useState } from 'react';
import {
  HelpCircle,
  Globe,
  Calendar,
  DollarSign,
  Shield,
  FileText,
  Syringe,
  Wallet,
  CreditCard,
  Coins,
  MapPin,
  Train,
  Bike,
  Utensils,
  Coffee,
  Leaf,
  Users,
  Heart,
  Eye,
  MessageCircle,
  Wifi,
  Plug,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { usePageMeta } from '../hooks/usePageMeta';
import RelatedGuides from '../components/RelatedGuides';
import { supabase } from '../lib/supabase';

interface FAQ {
  question: string;
  answer: string | string[];
  links?: { text: string; url: string }[];
}

interface FAQSection {
  title: string;
  icon: typeof HelpCircle;
  color: string;
  bg: string;
  faqs: FAQ[];
}

export default function TravelFAQPage() {
  usePageMeta({
    title: 'Thailand Travel FAQ 2026 - Everything You Need to Know',
    description:
      'Complete Thailand travel FAQ 2026. Get answers to all your questions about visas, safety, costs, culture, and practical travel tips before your trip.',
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    questions: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase.from('contact_submissions').insert([
        {
          name: formData.name,
          email: formData.email,
          message: `Thailand Travel Questions:\n\n${formData.questions}`,
          page: 'Thailand Travel FAQ',
        },
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        questions: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to submit your questions. Please try again.');
    }
  };

  const faqSections: FAQSection[] = [
    {
      title: 'Before You Go - Essential Questions',
      icon: FileText,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      faqs: [
        {
          question: 'Do I need a visa to visit Thailand?',
          answer: [
            'Most tourists from 60+ countries receive visa exemption on arrival:',
            '- 30 days free for most nationalities (if arriving by air)',
            '- 15 days free if arriving by land border',
            '- Some countries get 60-day exemption (check latest rules)',
            '- Extensions possible at immigration offices',
            '- Check thailand.go.th for your specific country',
            '- Visa on arrival different from visa exemption',
            '- Longer stays require applying for tourist visa before travel',
          ],
          links: [{ text: 'Complete Thailand Visa Guide', url: '/visa-guide' }],
        },
        {
          question: 'What is the best time to visit Thailand?',
          answer: [
            'Depends on region and preferences:',
            '- Best overall: November-February (cool and dry, 24-30C)',
            '- Hot season: March-May (35-40C, very hot but low prices)',
            '- Rainy season: June-October (afternoon storms, fewer tourists, great deals)',
            '- Islands: Different from mainland (Phuket best Nov-April, Samui best Jan-Sept)',
            '- High season prices: December-January (peak)',
            '- Best value: May-June and September-October (fewer crowds, 30-50% cheaper)',
          ],
          links: [{ text: 'Best Time to Visit Thailand Guide', url: '/best-time-to-visit' }],
        },
        {
          question: 'How much money do I need per day in Thailand?',
          answer: [
            'Depends on travel style:',
            '',
            'Budget backpacker: 800-1500 THB ($25-45 USD) per day',
            '- Hostels, street food, local transport, free activities',
            '',
            'Mid-range traveler: 2500-5000 THB ($75-150 USD) per day',
            '- Nice hotels, restaurants, some tours, comfortable transport',
            '',
            'Luxury traveler: 7000-15000+ THB ($200-450+ USD) per day',
            '- 5-star hotels, fine dining, private tours, premium experiences',
            '',
            'Additional notes:',
            '- Costs vary by city (Bangkok pricier than Chiang Mai)',
            '- Islands more expensive than mainland',
            '- Alcohol significantly increases budget',
          ],
          links: [{ text: 'Thailand Budget Guide', url: '/budget-guide' }],
        },
        {
          question: 'Is Thailand safe for tourists?',
          answer: [
            'Yes, generally very safe:',
            '- Violent crime against tourists is rare',
            '- Main concerns: Petty theft, scams, traffic accidents',
            '- Healthcare is excellent (major hospitals world-class)',
            '- Natural disasters: Rare but possible (flooding, tsunami risk in coastal areas)',
            '- Political protests: Occasional in Bangkok but usually not affecting tourists',
            '- Deep South provinces (Yala, Pattani, Narathiwat): Travel warnings due to unrest',
            '- Overall: Safer than many Western countries for violent crime',
            '- Use common sense: Watch belongings, use official taxis, avoid drugs',
          ],
          links: [{ text: 'Thailand Safety Guide', url: '/safety-scams' }],
        },
        {
          question: 'Do I need travel insurance for Thailand?',
          answer: [
            'Highly recommended:',
            '- Medical costs can be high without insurance',
            '- Many hospitals require payment upfront',
            '- Good insurance: $40-80 for 2-week trip',
            '- Must cover: Medical emergencies, hospital stays, evacuation',
            '- Check if activities covered (motorbike riding, diving often excluded)',
            '- Keep insurance documents on phone',
            '- Some visa types now require insurance proof',
            '- Better safe than sorry - unexpected medical issues do happen',
          ],
        },
        {
          question: 'What vaccinations do I need for Thailand?',
          answer: [
            'No vaccinations required for entry, but recommended:',
            '- Routine vaccines: Up to date on tetanus, MMR, etc',
            '- Hepatitis A: Recommended (food/water-borne)',
            '- Hepatitis B: If planning medical procedures or at risk',
            '- Typhoid: If visiting rural areas or eating lots of street food',
            '- Japanese Encephalitis: Rural areas, rainy season, extended stays',
            '- Malaria pills: Only if visiting deep jungle/border areas (not needed for Bangkok, Phuket, Chiang Mai)',
            '- Consult travel doctor 6-8 weeks before trip',
            '- Dengue fever risk: No vaccine, use mosquito repellent',
          ],
        },
      ],
    },
    {
      title: 'Money and Costs',
      icon: DollarSign,
      color: 'text-green-600',
      bg: 'bg-green-50',
      faqs: [
        {
          question: 'What currency does Thailand use?',
          answer: [
            'Thai Baht (THB)',
            '- Currency code: THB',
            '- Symbol: THB or Baht',
            '- Exchange rate: Approximately 35 THB = 1 USD (varies)',
            '- Bills: 20, 50, 100, 500, 1000 THB',
            '- Coins: 1, 2, 5, 10 THB',
            '- Do NOT accept torn or taped bills (vendors refuse them)',
          ],
        },
        {
          question: 'Should I exchange money before arriving in Thailand?',
          answer: [
            'Not necessary:',
            '- ATMs everywhere in Thailand (better rates than exchanging at home)',
            '- Airport has ATMs immediately after customs',
            '- Exchange only small amount at airport for taxi',
            '- Better exchange rates in city at:',
            '  - Super Rich (green and orange) - best rates Bangkok',
            '  - Banks',
            '  - ATMs (usually best option)',
            '- Avoid hotel currency exchange (worst rates)',
          ],
        },
        {
          question: 'Are ATM fees high in Thailand?',
          answer: [
            'Yes, unfortunately:',
            '- 220 THB fee per ATM withdrawal',
            '- Your home bank may charge additional fee',
            '- Strategy: Withdraw larger amounts less frequently',
            '- Some banks refund foreign ATM fees (check your bank)',
            '- Credit cards accepted at malls, hotels, restaurants (not street food)',
            '- Visa and Mastercard widely accepted',
          ],
        },
        {
          question: 'Should I bring cash or rely on cards?',
          answer: [
            'Bring mix:',
            '- Cash needed for: Street food, markets, tuk-tuks, temples, some restaurants',
            '- Cards accepted at: Hotels, malls, chain restaurants, tours',
            '- Recommendation: Have 5000-10000 THB cash plus cards',
            '- Small bills useful (many vendors cannot break 1000 THB)',
            '- Keep cash secure in hotel safe',
          ],
        },
        {
          question: 'Should I tip in Thailand?',
          answer: [
            'Tipping not required but appreciated:',
            '- Restaurants: Round up bill or 20-50 THB for good service (10% at upscale)',
            '- Taxis: Round up fare (if 67 THB, give 70 THB)',
            '- Hotels: 20-50 THB per bag for porters',
            '- Massage: 50-100 THB for good massage',
            '- Tour guides: 100-200 THB per day',
            '- Street food: No tipping expected',
            '- Service charge: Some restaurants add 10% service charge (tip not needed)',
          ],
        },
        {
          question: 'Is bargaining expected in Thailand?',
          answer: [
            'Yes, in certain situations:',
            '- Markets: Yes, always bargain (start at 50-60% of asking price)',
            '- Tuk-tuks: Yes, agree price before getting in',
            '- Street vendors: Yes, but be reasonable',
            '- Malls and stores: No, fixed prices',
            '- Restaurants: No',
            '- Hotels: Sometimes (ask for better rate)',
            '- 7-Eleven, supermarkets: No',
            '- Be polite when bargaining, smile, and walk away if price too high',
          ],
        },
      ],
    },
    {
      title: 'Getting Around Thailand',
      icon: MapPin,
      color: 'text-orange-600',
      bg: 'bg-orange-50',
      faqs: [
        {
          question: 'How do I get around Bangkok?',
          answer: [
            'Multiple options:',
            '- BTS Skytrain: Fast, cheap (15-60 THB), avoids traffic, covers main areas',
            '- MRT Metro: Underground, connects to BTS',
            '- Chao Phraya Express Boat: Scenic river route (15-40 THB)',
            '- Grab/Bolt app: Like Uber, reliable, fixed prices',
            '- Taxis: Metered (start 35 THB), insist on meter, avoid traffic hours',
            '- Tuk-tuks: Negotiate price first, tourist novelty but expensive',
            '- Motorbike taxis: Fast but risky, for experienced only',
          ],
          links: [{ text: 'Bangkok Transportation Guide', url: '/bangkok' }],
        },
        {
          question: 'Should I rent a motorbike in Thailand?',
          answer: [
            'Only if experienced rider:',
            '- Traffic is chaotic and dangerous',
            '- Drive on LEFT side of road',
            '- Many accidents involving tourists',
            '- Always wear helmet (fine if caught without)',
            '- International driving permit required',
            '- Insurance often does not cover motorbike accidents',
            '- Safer in islands/Chiang Mai than Bangkok',
            '- Consider: Bicycle in safer areas, Grab for cities',
          ],
        },
        {
          question: 'Can I take trains in Thailand?',
          answer: [
            'Yes, excellent train network:',
            '- Connects major cities (Bangkok-Chiang Mai, Bangkok-Surat Thani)',
            '- Sleeper trains available (overnight to Chiang Mai)',
            '- Much cheaper than flying',
            '- Scenic routes',
            '- Book at station or online (12go.asia, official site)',
            '- Classes: 3rd class (fans), 2nd class (AC, sleepers), 1st class (private cabins)',
            '- Slower but more authentic experience',
          ],
        },
        {
          question: 'How do I travel between cities?',
          answer: [
            'Options:',
            '- Flights: Cheap (1000-3000 THB), fast, AirAsia/Nok Air budget airlines',
            '- Trains: Scenic, cheap, slower',
            '- Buses: Very cheap, overnight buses available, less comfortable',
            '- Minivans: Fast, convenient for medium distances',
            '- Private car/driver: Most expensive, most flexible',
          ],
        },
      ],
    },
    {
      title: 'Food and Dining',
      icon: Utensils,
      color: 'text-red-600',
      bg: 'bg-red-50',
      faqs: [
        {
          question: 'Is street food in Thailand safe to eat?',
          answer: [
            'Generally yes, very safe:',
            '- Thailand has excellent street food culture',
            '- Look for busy stalls (fast turnover = fresh food)',
            '- Watch food being cooked fresh',
            '- Avoid food sitting out for hours',
            '- Ice is safe (made from filtered water)',
            '- Stomach issues possible but rare if careful',
            '- Most tourists eat street food without problems',
            '- Street food is highlight of Thai cuisine',
          ],
        },
        {
          question: 'Is Thai food very spicy?',
          answer: [
            'Can be, but you control it:',
            '- Say "mai pet" (my pet) = not spicy',
            '- Or "pet nit noi" (pet nit noy) = a little spicy',
            '- Most restaurants adjust spice for foreigners',
            '- Northern food (Chiang Mai) generally less spicy',
            '- Southern food (Phuket) often spicier',
            '- You can always add chili after (on table)',
            '- Many dishes naturally not spicy (pad thai, massaman curry)',
          ],
        },
        {
          question: 'What are must-try Thai dishes?',
          answer: [
            'Essential Thai dishes:',
            '- Pad Thai: Stir-fried rice noodles with tamarind sauce',
            '- Tom Yum Goong: Spicy and sour shrimp soup',
            '- Green Curry: Coconut curry with chicken/vegetables',
            '- Massaman Curry: Rich Muslim-influenced curry with peanuts',
            '- Som Tam: Green papaya salad (spicy)',
            '- Pad Krapow: Holy basil stir-fry with rice',
            '- Mango Sticky Rice: Sweet dessert, seasonal',
            '- Thai Fried Rice: Khao Pad',
            '- Spring Rolls: Fresh or fried',
            '- Boat Noodles: Flavorful pork or beef noodle soup',
          ],
        },
        {
          question: 'Can I find vegetarian/vegan food in Thailand?',
          answer: [
            'Yes, widely available:',
            '- Say "mangsawirat" (mung-sa-wi-rat) = vegetarian',
            '- Or "jay" (jay) = vegan (no animal products)',
            '- Buddhist vegetarian restaurants common (yellow flag)',
            '- Many Thai dishes can be made vegetarian',
            '- Tofu widely used',
            '- Vegetarian festival in October (especially Phuket)',
            '- Bangkok and Chiang Mai have dedicated vegan restaurants',
            '- Just be clear when ordering (some dishes use fish sauce)',
          ],
        },
        {
          question: 'Can I drink tap water in Thailand?',
          answer: [
            'No, never drink tap water:',
            '- Always drink bottled water',
            '- Hotels provide free bottled water',
            '- 7-Eleven sells water cheaply (10-20 THB)',
            '- Ice in restaurants/cafes is safe (made from filtered water)',
            '- Brushing teeth with tap water usually okay',
            '- Avoid ice from street vendors if concerned (rare issue)',
          ],
        },
      ],
    },
    {
      title: 'Culture and Etiquette',
      icon: Heart,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      faqs: [
        {
          question: 'What should I wear in Thailand?',
          answer: [
            'Dress appropriately:',
            '- General: Light, breathable clothing (hot and humid)',
            '- Temples: Cover shoulders and knees (required)',
            '- Beaches: Swimwear only at beach (cover up in town)',
            '- Bring: Light jacket for air-conditioned places (very cold AC)',
            '- Shoes: Easy to slip on/off (remove for temples, homes)',
            '- Women: Modest clothing at temples (no tank tops, short shorts)',
            '- Men: Shirts required (no going shirtless except at beach)',
          ],
        },
        {
          question: 'What should I know about Thai temples?',
          answer: [
            'Temple etiquette:',
            '- Remove shoes before entering any building',
            '- Dress modestly (shoulders and knees covered)',
            '- No pointing feet at Buddha images',
            '- Women cannot touch monks (at all)',
            '- Speak quietly and respectfully',
            '- No climbing on Buddha statues for photos',
            '- Some temples require long pants (not just covered knees)',
            '- Free sarongs often available to borrow if underdressed',
          ],
          links: [{ text: 'Complete Thai Temples Guide', url: '/thai-temples' }],
        },
        {
          question: 'Can I touch people\'s heads in Thailand?',
          answer: [
            'No, never:',
            '- Head considered most sacred part of body',
            '- Do not pat heads, even children',
            '- Do not step over people',
            '- Do not point feet at people (feet considered lowest/dirtiest)',
            '- Sit properly in temples (not with feet pointing at Buddha)',
          ],
        },
        {
          question: 'Is public affection okay in Thailand?',
          answer: [
            'Limited affection only:',
            '- Hand-holding: Generally okay',
            '- Hugging: Acceptable',
            '- Kissing: Keep it very brief, not passionate',
            '- Intimate contact: Considered very inappropriate',
            '- Thai culture values modesty in public',
            '- More conservative than Western countries',
          ],
        },
        {
          question: 'How do I show respect in Thailand?',
          answer: [
            'Key respectful behaviors:',
            '- Wai greeting: Hands together like prayer, slight bow (return wai if given to you)',
            '- Respect for monarchy: Never criticize king or royal family (serious crime)',
            '- Smile: Thais value friendly demeanor',
            '- Remove shoes: Before entering homes, temples',
            '- Lower head: When walking past someone seated',
            '- Use right hand: For eating, giving, receiving',
            '- Stay calm: Raised voices and anger considered loss of face',
          ],
        },
      ],
    },
    {
      title: 'Practical Travel Tips',
      icon: Globe,
      color: 'text-cyan-600',
      bg: 'bg-cyan-50',
      faqs: [
        {
          question: 'Do people speak English in Thailand?',
          answer: [
            'Varies by location:',
            '- Tourist areas: English widely spoken (Bangkok, Phuket, islands, Chiang Mai)',
            '- Hotels and restaurants: Usually have English speakers',
            '- Rural areas: Limited English',
            '- Taxi drivers: Often limited English',
            '- Helpful: Learn basic Thai phrases (hello, thank you, how much)',
            '- Download: Google Translate app (works offline)',
            '- Hand gestures and numbers work universally',
          ],
        },
        {
          question: 'What about internet and WiFi?',
          answer: [
            'Excellent connectivity:',
            '- Get Thai SIM card at airport: 299-599 THB for tourist package (7-30 days)',
            '- Providers: AIS, TrueMove, dtac',
            '- Coverage excellent in cities, good in rural areas',
            '- Free WiFi: Most hotels, cafes, restaurants, malls',
            '- Data speeds fast (4G widely available, 5G in cities)',
            '- Get SIM immediately at airport (most convenient)',
          ],
        },
        {
          question: 'What plug adapter do I need?',
          answer: [
            'Type A, B, C:',
            '- Thailand uses 220V (same as Europe)',
            '- Sockets accept both flat and round pins',
            '- US devices work (same voltage as Type A)',
            '- European devices work with Type C',
            '- Universal adapter useful for multiple trips',
            '- Most hotels have multiple socket types',
            '- USB chargers widely available',
          ],
        },
        {
          question: 'What time zone is Thailand?',
          answer: [
            'GMT+7 (ICT - Indochina Time):',
            '- No daylight saving time',
            '- 12 hours ahead of US East Coast',
            '- 7 hours ahead of UK',
            '- 2 hours behind Australia East Coast',
            '- Same time zone across entire country',
          ],
        },
        {
          question: 'How many days do I need in Thailand?',
          answer: [
            'Depends on what you want to see:',
            '- Minimum: 7-10 days (Bangkok + one destination)',
            '- Ideal: 2-3 weeks (Bangkok + North + Islands)',
            '- Comprehensive: 4+ weeks (multiple regions, slower pace)',
            '',
            'Sample 2-week itinerary:',
            '- 3 days Bangkok',
            '- 3 days Chiang Mai',
            '- 2 days Pai or Chiang Rai',
            '- 5-6 days Islands (Phuket, Krabi, or Samui)',
            '- 1 day Ayutthaya (day trip from Bangkok)',
          ],
        },
      ],
    },
  ];

  const quickStats = [
    { icon: Globe, label: 'Visa', value: '30-60 days free for most countries', color: 'text-blue-600', bg: 'bg-blue-50' },
    { icon: Calendar, label: 'Best Time', value: 'November to February', color: 'text-green-600', bg: 'bg-green-50' },
    { icon: DollarSign, label: 'Daily Budget', value: '$25-150 per day', color: 'text-amber-600', bg: 'bg-amber-50' },
    { icon: Shield, label: 'Safety', value: 'Very safe for tourists', color: 'text-red-600', bg: 'bg-red-50' },
  ];

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Travel Planning', path: '/travel-planning' },
          { label: 'Thailand Travel FAQ', path: '/thailand-travel-faq' },
        ]}
      />

      <div className="bg-gradient-to-b from-blue-900 to-blue-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="w-8 h-8 text-blue-300" />
              <span className="text-blue-300 font-semibold tracking-wider uppercase text-sm">
                Updated February 2026
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 uppercase tracking-[3px]">
              Thailand Travel FAQ
              <br />
              <span className="text-blue-300">Everything You Need to Know</span>
            </h1>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Planning a trip to Thailand? You probably have lots of questions. This comprehensive FAQ answers
                everything from visa requirements and safety concerns to cultural etiquette and practical money matters.
              </p>
              <p className="text-lg text-blue-200 leading-relaxed">
                Whether this is your first visit or you are a returning traveler, find answers to the questions most
                tourists ask before and during their Thailand adventure. Updated with current information on visas,
                costs, weather, and travel tips.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className={`${stat.bg} rounded-xl p-6 border-2 border-transparent hover:border-current transition-all duration-300 ${stat.color}`}
                  >
                    <div className={`w-12 h-12 ${stat.bg} border-2 border-current rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-2 text-center">
                      {stat.label}
                    </h3>
                    <p className="text-gray-700 text-center leading-relaxed">{stat.value}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {faqSections.map((section, sectionIndex) => {
            const SectionIcon = section.icon;
            return (
              <section key={sectionIndex} className="mb-20">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className={`p-3 ${section.bg} rounded-full`}>
                      <SectionIcon className={`w-8 h-8 ${section.color}`} />
                    </div>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                    {section.title}
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
                </div>

                <div className="max-w-5xl mx-auto space-y-8">
                  {section.faqs.map((faq, faqIndex) => (
                    <div
                      key={faqIndex}
                      className={`bg-gradient-to-br from-gray-50 ${section.bg} rounded-xl p-6 md:p-8 border-2 ${section.color.replace('text-', 'border-').replace('600', '200')} hover:shadow-lg transition-all duration-300`}
                    >
                      <div className="flex items-start gap-4">
                        <HelpCircle className={`w-6 h-6 ${section.color} flex-shrink-0 mt-1`} />
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                          {typeof faq.answer === 'string' ? (
                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                          ) : (
                            <div className="space-y-2">
                              {faq.answer.map((line, lineIndex) => (
                                <p key={lineIndex} className="text-gray-700 leading-relaxed">
                                  {line}
                                </p>
                              ))}
                            </div>
                          )}
                          {faq.links && faq.links.length > 0 && (
                            <div className="mt-4 flex flex-wrap gap-3">
                              {faq.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.url}
                                  className={`inline-flex items-center gap-2 ${section.color} hover:underline font-semibold`}
                                >
                                  <ExternalLink className="w-4 h-4" />
                                  {link.text}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Have More Questions?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Can't find the answer you're looking for? Chat with our Thailand travel experts and get personalized
                answers to your specific questions.
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 border-2 border-blue-200">
              {submitStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Questions Received</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Thank you for your questions about Thailand travel. Our experts will get back to you within 24 hours
                    with detailed answers and personalized recommendations.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border-2 border-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border-2 border-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="questions" className="block text-sm font-bold text-gray-900 mb-2">
                      Your Questions *
                    </label>
                    <textarea
                      id="questions"
                      rows={6}
                      required
                      value={formData.questions}
                      onChange={(e) => setFormData({ ...formData, questions: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                      placeholder="Ask us anything about traveling to Thailand - visas, destinations, activities, budgeting, safety, etc."
                    />
                  </div>

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4">
                      <p className="text-red-800 font-semibold">{errorMessage}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitStatus === 'loading'}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitStatus === 'loading' ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Chat with Thailand Experts
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    We typically respond within 24 hours with detailed, personalized answers to your Thailand travel
                    questions.
                  </p>
                </form>
              )}
            </div>
          </section>
        </div>
      </div>

      <section className="bg-gradient-to-b from-gray-100 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RelatedGuides
            guides={[
              {
                title: 'Thailand Visa Guide',
                description: 'Everything you need to know about Thai visas and entry requirements',
                link: '/visa-guide',
                image:
                  'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Thailand Budget Guide',
                description: 'Complete breakdown of costs and how to save money in Thailand',
                link: '/budget-guide',
                image:
                  'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Best Time to Visit',
                description: 'When to visit Thailand for perfect weather and fewer crowds',
                link: '/best-time-to-visit',
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
