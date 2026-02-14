import {
  Flame,
  Trophy,
  Users,
  Heart,
  Zap,
  Target,
  Calendar,
  DollarSign,
  MapPin,
  Star,
  CheckCircle2,
  Shield,
  Dumbbell,
  Clock,
  Sunrise,
  Sunset,
  Utensils,
  Backpack,
  FileText,
  Map,
  Activity,
  Building2,
  Waves,
  Mountain,
  PartyPopper,
  Crown,
  Sparkles,
  Users2,
  Video,
  Home,
  Pill,
  AlertCircle,
  Camera,
  Phone,
  Globe,
  Briefcase,
  Car,
  Palmtree,
  HelpCircle,
  Send,
  MessageCircle,
  Award,
  TrendingUp,
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { usePageMeta } from '../hooks/usePageMeta';
import RelatedGuides from '../components/RelatedGuides';

interface TrainingLevel {
  title: string;
  icon: typeof Users;
  color: string;
  content: {
    heading: string;
    description: string;
  }[];
}

interface Gym {
  name: string;
  location: string;
  level: string;
  priceRange: string;
  highlights: string[];
  image: string;
}

export default function MuayThaiTrainingPage() {
  usePageMeta({
    title: 'Muay Thai Training in Thailand: Complete Guide for 2026',
    description:
      'Train Muay Thai at its birthplace. Authentic training from champions, 200-500 USD per month, all levels welcome. Complete guide to gyms, costs, and what to expect.',
  });

  const whyTrainReasons = [
    {
      icon: Trophy,
      title: 'Authenticity',
      description: 'Learn from champions and traditional trainers',
      details: 'Train at the source with legendary fighters and trainers who have decades of experience. Thailand produces world champions, and you can learn directly from them in authentic gym settings that have shaped the sport for generations.',
    },
    {
      icon: DollarSign,
      title: 'Cost-Effectiveness',
      description: '200-500 USD per month vs 200+ USD abroad',
      details: 'Get professional training at a fraction of Western prices. Monthly memberships range from 6,000-15,000 THB ($200-500 USD) for twice-daily training, six days per week. Compare this to $200+ per month abroad for just a few classes per week.',
    },
    {
      icon: Heart,
      title: 'Immersive Experience',
      description: 'Language, culture, fight culture',
      details: 'Experience Muay Thai as a living tradition, not just a sport. Learn the wai kru ram muay, understand the spiritual significance, train alongside Thai fighters preparing for Stadium bouts, and immerse yourself in a culture where Muay Thai is a way of life.',
    },
    {
      icon: MapPin,
      title: 'Climate & Lifestyle',
      description: 'Year-round training, beach and mountain settings',
      details: 'Train in paradise with year-round warm weather perfect for conditioning. Choose between beachside camps in Phuket or Koh Samui, mountain retreats in Chiang Mai, or urban training in Bangkok. Many gyms offer stunning settings that make training feel like a vacation.',
    },
  ];

  const trainingLevels: TrainingLevel[] = [
    {
      title: 'Complete Beginners',
      icon: Users,
      color: 'from-amber-600 to-orange-700',
      content: [
        {
          heading: 'What to Expect in Your First Week',
          description: 'Your first week will focus on fundamentals: proper stance, basic punches (jab, cross, hook, uppercut), kicks, and conditioning. Expect to be sore--Muay Thai uses muscles you didn\'t know existed. Most beginner-friendly gyms start you with pad work and shadowboxing before introducing partner drills. Training typically runs 2-3 hours per session with warm-up, technique work, pad rounds, bag work, and conditioning. Don\'t worry about fitness level; trainers adapt to your abilities and gradually increase intensity.',
        },
        {
          heading: 'Beginner-Friendly Gym Characteristics',
          description: 'Look for gyms that advertise beginner classes or have significant international student populations. Key features include: English-speaking trainers, separate beginner sessions, smaller class sizes (not pack-mentality training), modern facilities with good equipment, and a welcoming atmosphere. Avoid hardcore fight camps unless you want to be thrown in the deep end. Good beginner gyms in Thailand include Santai Muay Thai (Chiang Mai), Sumalee Boxing Gym (Phuket), and Kiatphontip (Bangkok).',
        },
        {
          heading: 'Estimated Timeline to Basic Proficiency',
          description: 'With consistent training (5-6 days per week), expect to develop solid fundamentals in 2-3 months. After 1 month, you\'ll understand basic combinations and have improved fitness significantly. At 3 months, you\'ll have good technique on pads, understand clinch basics, and could potentially take your first amateur fight if desired. At 6 months of dedicated training, you\'ll have intermediate-level skills and conditioning that puts you ahead of most casual practitioners. The key is consistency--those who train regularly progress much faster than weekend warriors.',
        },
      ],
    },
    {
      title: 'Intermediate Practitioners',
      icon: Target,
      color: 'from-red-600 to-rose-700',
      content: [
        {
          heading: 'Technique Refinement Focus',
          description: 'At intermediate level, training shifts from learning moves to perfecting them. You\'ll work on timing, precision, and power generation. Trainers become more demanding, expecting clean technique and proper form. Focus areas include: advanced combinations flowing naturally, perfecting your teep (push kick) for maximum effectiveness, developing your signature weapons, improving defense and counter-striking, and understanding ring control and fight IQ. You\'ll spend more time on small details that separate good fighters from great ones--weight distribution, hip rotation, shoulder alignment, and timing.',
        },
        {
          heading: 'Sparring and Clinch Work Expectations',
          description: 'Intermediate level means regular sparring and intensive clinch training. Sparring sessions start light (50-70% power) and focus on timing and technique rather than winning. You\'ll spar with various partners to adapt to different styles and body types. Clinch work becomes serious--expect hours of grinding, sweeping, and knee work that builds incredible core strength and fight endurance. Thai trainers excel at clinch instruction, teaching you to control opponents, create angles for knees, and defend sweeps. This is where technique meets toughness.',
        },
        {
          heading: 'Competition Preparation Options',
          description: 'Many intermediate fighters come to Thailand specifically to fight. Gyms can arrange amateur fights at local stadiums with 2-4 weeks notice. Your gym handles matchmaking, ensuring fair matchups based on experience and weight. Most first fights are 3 rounds at local venues. Your gym typically provides corner support, hand wrapping, sometimes gear rental, and transportation. Fighting in Thailand is unforgettable--the music, the ceremony, the crowd. Even one fight teaches you more than months of training. Gyms with good fight programs include Yokkao (Bangkok), Tiger Muay Thai (Phuket), and Santai (Chiang Mai).',
        },
      ],
    },
    {
      title: 'Advanced Fighters',
      icon: Flame,
      color: 'from-red-700 to-red-900',
      content: [
        {
          heading: 'Elite Camps and Champion Trainers',
          description: 'Advanced fighters should seek authentic Thai camps that train stadium fighters. These camps include Fairtex (Bangkok, Pattaya), Petchyindee (Bangkok), Sitjemam (Buriram), Yokkao (Bangkok), and Phuket Fight Club. Here you train alongside professional Thai fighters preparing for Lumpinee and Rajadamnern Stadium bouts. Sessions are intense: 6-8 rounds of pads with champion trainers who push you to your limits, extensive clinch work with aggressive Thai fighters, hard sparring with professionals, and brutal conditioning that builds championship endurance. Expect little hand-holding--these camps assume you know what you\'re doing.',
        },
        {
          heading: 'Fight Booking Services',
          description: 'Elite gyms in Thailand have direct connections to major stadiums and promotions. They can book you at venues ranging from local stadium shows to major Bangkok venues like Lumpinee and Rajadamnern. Fight purses vary: local fights pay 2,000-5,000 THB, secondary Bangkok stadiums pay 5,000-15,000 THB, and major stadiums start at 10,000+ THB for international fighters. Your gym takes a percentage but handles everything--matchmaking, medical clearance, travel, corner work, and even betting if you understand that aspect of Thai fight culture. Serious fighters can book multiple fights per month.',
        },
        {
          heading: 'Professional Training Volume',
          description: 'Professional training means 2 sessions daily, 6 days per week. Morning session (6:00-8:00 AM): Running 5-10km, shadowboxing, bag work, pad work (5-6 rounds), clinch work, and conditioning. Afternoon session (4:00-6:00 PM): More pad work (5-6 rounds), heavy bag, technical drilling, sparring, and additional conditioning. Sunday is rest day, though some fighters do light work. This volume builds elite conditioning and makes techniques second nature. Rest, nutrition, and recovery become as important as training. Thai fighters in camp maintain this schedule for years, which explains their world-class skill and toughness.',
        },
      ],
    },
  ];

  const popularGyms: Gym[] = [
    {
      name: 'Santai Muay Thai',
      location: 'Chiang Mai',
      level: 'All Levels',
      priceRange: '$350-450/month',
      highlights: ['Beginner-friendly', 'Great community', 'Mountain setting', 'English-speaking trainers'],
      image: 'https://images.pexels.com/photos/260447/pexels-photo-260447.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Tiger Muay Thai',
      location: 'Phuket',
      level: 'All Levels',
      priceRange: '$400-600/month',
      highlights: ['World-class facilities', 'MMA options', 'Beach location', 'International atmosphere'],
      image: 'https://images.pexels.com/photos/4761663/pexels-photo-4761663.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Yokkao Training Center',
      location: 'Bangkok',
      level: 'Intermediate-Advanced',
      priceRange: '$300-500/month',
      highlights: ['Champion trainers', 'Fight bookings', 'Modern facilities', 'Professional environment'],
      image: 'https://images.pexels.com/photos/4754146/pexels-photo-4754146.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Fairtex',
      location: 'Bangkok/Pattaya',
      priceRange: '$350-500/month',
      level: 'All Levels',
      highlights: ['Legendary gym', 'Stadium fighters', 'Multiple locations', 'Complete training'],
      image: 'https://images.pexels.com/photos/4761663/pexels-photo-4761663.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const costBreakdown = [
    { item: 'Training (Monthly)', cost: '$200-500', details: 'Full-time training, 2 sessions per day' },
    { item: 'Accommodation', cost: '$200-600', details: 'Shared room to private apartment' },
    { item: 'Food (Daily)', cost: '$10-25', details: 'Street food to restaurant meals' },
    { item: 'Visa (60 days)', cost: '$30-50', details: 'Can be extended' },
    { item: 'Insurance (Monthly)', cost: '$50-100', details: 'Essential for training' },
    { item: 'Equipment', cost: '$100-200', details: 'One-time: gloves, wraps, shorts, shin guards' },
  ];

  const trainingDestinations = [
    {
      city: 'Bangkok',
      icon: Building2,
      color: 'from-slate-600 to-slate-800',
      description: 'Bangkok offers the perfect blend of authentic Muay Thai training and urban convenience. Train at legendary gyms where Thai champions prepare for stadium fights, then explore world-class restaurants, shopping, and nightlife. The city has gyms for all levels, from tourist-friendly facilities to hardcore fight camps where language barriers are real and training is brutal. Accommodation ranges from budget hostels to luxury hotels, all with excellent public transport access. Bangkok\'s intensity mirrors its training--fast-paced, exciting, and never boring.',
      topGyms: ['Sor Vorapin', 'Siam Boxing Stadium', 'Petchyindee', 'Yokkao Training Center'],
      bestFor: 'Short trips, mixing training with city exploration',
      averageCost: '8,000-12,000 THB per month',
      pros: ['Most gyms per square mile', 'Best food scene', 'Easy airport access', 'Stadium fights weekly'],
      cons: ['Traffic congestion', 'Air pollution', 'Less beach access', 'Higher accommodation costs'],
    },
    {
      city: 'Phuket',
      icon: Waves,
      color: 'from-blue-600 to-cyan-700',
      description: 'Phuket has become the international hub for Muay Thai training in Thailand, offering world-class facilities in a tropical beach setting. Tiger Muay Thai and similar camps cater specifically to international students with English-speaking trainers, modern amenities, and structured programs. The island combines serious training with resort-style living--train hard twice daily, then relax on the beach or enjoy excellent restaurants and entertainment. Phuket works for everyone from honeymoon couples wanting to try a class to serious fighters preparing for competition. The international community means you\'ll train alongside people from dozens of countries.',
      topGyms: ['Tiger Muay Thai', 'Sinbi Muay Thai', 'Rawai Muay Thai', 'Sumalee Boxing Gym'],
      bestFor: 'Fitness holidays, couples, luxury seekers',
      averageCost: '10,000-15,000 THB per month',
      pros: ['Beach lifestyle', 'Modern facilities', 'International community', 'English everywhere'],
      cons: ['Most expensive destination', 'Can feel touristy', 'Less authentic experience', 'Crowded beaches'],
    },
    {
      city: 'Chiang Mai',
      icon: Mountain,
      color: 'from-green-600 to-emerald-700',
      description: 'Chiang Mai offers the most authentic Muay Thai training experience in a traditional Thai setting, at the lowest cost of major destinations. Nestled in the mountains of Northern Thailand, the city has a laid-back vibe that attracts long-term trainers and digital nomads. Gyms here maintain old-school training methods--less polish, more grit. You\'ll likely train alongside Thai fighters and experience genuine gym culture. The lower cost of living means you can train for months on a modest budget. Chiang Mai\'s cool season (November-February) offers perfect training weather, and the city\'s cafe culture and co-working spaces make it ideal for combining training with remote work.',
      topGyms: ['Hongthong Muay Thai', 'Santai Muay Thai', 'Lanna Muay Thai', 'Chiangmai Muay Thai'],
      bestFor: 'Long-term training, budget-conscious travelers, cultural immersion',
      averageCost: '6,000-10,000 THB per month',
      pros: ['Lowest costs', 'Authentic training', 'Digital nomad hub', 'Best weather Nov-Feb'],
      cons: ['No beach access', 'Fewer luxury options', 'Less English spoken', 'Burning season Mar-Apr'],
    },
    {
      city: 'Pattaya',
      icon: PartyPopper,
      color: 'from-purple-600 to-pink-700',
      description: 'Pattaya provides high-intensity Muay Thai training with easy access to beach life and legendary nightlife entertainment. Home to Fairtex and other respected camps, Pattaya attracts serious fighters who want to train hard and play hard. The city has a reputation for its adult entertainment scene, making it particularly popular with bachelor groups and solo male travelers. Training standards are professional--Fairtex trains world champions--but the atmosphere outside the gym is decidedly more party-focused than other destinations. Pattaya offers a unique combination: morning training with champion fighters, afternoon beach relaxation, and evening entertainment options that Bangkok can\'t match.',
      topGyms: ['Fairtex Pattaya', 'Venum Training Camp', 'Pattaya Kombat Group', 'Kombat Evolution'],
      bestFor: 'Serious training plus nightlife, bachelor groups',
      averageCost: '8,000-12,000 THB per month',
      pros: ['Elite training available', 'Beach location', 'Entertainment scene', 'Less expensive than Phuket'],
      cons: ['Party atmosphere', 'Can be seedy', 'Less family-friendly', 'Traffic issues'],
    },
  ];

  const destinationComparison = [
    { destination: 'Bangkok', training: 'Excellent', cost: 'Moderate', beaches: 'None', atmosphere: 'Urban', englishLevel: 'Good' },
    { destination: 'Phuket', training: 'Excellent', cost: 'High', beaches: 'Excellent', atmosphere: 'Resort', englishLevel: 'Excellent' },
    { destination: 'Chiang Mai', training: 'Very Good', cost: 'Low', beaches: 'None', atmosphere: 'Traditional', englishLevel: 'Moderate' },
    { destination: 'Pattaya', training: 'Excellent', cost: 'Moderate', beaches: 'Good', atmosphere: 'Party', englishLevel: 'Good' },
  ];

  const dailySchedule = [
    { time: '6:00 AM', activity: 'Wake up, light breakfast', icon: Sunrise, color: 'text-orange-500' },
    { time: '6:30-7:00 AM', activity: 'Morning run (5-10km)', icon: Activity, color: 'text-blue-500' },
    { time: '7:00-7:30 AM', activity: 'Shadowboxing, stretching', icon: Dumbbell, color: 'text-green-500' },
    { time: '7:30-8:00 AM', activity: 'Pad work (5-6 rounds)', icon: Target, color: 'text-red-500' },
    { time: '8:00-8:30 AM', activity: 'Bag work, clinch training', icon: Shield, color: 'text-purple-500' },
    { time: '8:30-9:00 AM', activity: 'Conditioning, core work', icon: Flame, color: 'text-orange-600' },
    { time: '9:00-9:30 AM', activity: 'Cool down, stretching', icon: Heart, color: 'text-pink-500' },
    { time: '10:00 AM', activity: 'Post-training meal', icon: Utensils, color: 'text-amber-600' },
    { time: '10:30 AM-3:30 PM', activity: 'Rest, recovery, explore, eat', icon: Clock, color: 'text-gray-500' },
    { time: '4:00-4:30 PM', activity: 'Shadowboxing, warm up', icon: Dumbbell, color: 'text-green-500' },
    { time: '4:30-5:00 PM', activity: 'Pad work (5-6 rounds)', icon: Target, color: 'text-red-500' },
    { time: '5:00-5:30 PM', activity: 'Heavy bag, technique drills', icon: Shield, color: 'text-purple-500' },
    { time: '5:30-6:00 PM', activity: 'Sparring or clinch work', icon: Users, color: 'text-blue-600' },
    { time: '6:00-6:30 PM', activity: 'Conditioning, abs', icon: Flame, color: 'text-orange-600' },
    { time: '7:00 PM', activity: 'Dinner, massage, rest', icon: Sunset, color: 'text-indigo-500' },
  ];

  const weeklySchedule = [
    { day: 'Monday', sessions: '2 sessions', focus: 'Technique, pad work', intensity: 'High' },
    { day: 'Tuesday', sessions: '2 sessions', focus: 'Clinch, sparring', intensity: 'High' },
    { day: 'Wednesday', sessions: '2 sessions', focus: 'Technique, conditioning', intensity: 'High' },
    { day: 'Thursday', sessions: '2 sessions', focus: 'Power, bag work', intensity: 'High' },
    { day: 'Friday', sessions: '2 sessions', focus: 'Sparring, drills', intensity: 'High' },
    { day: 'Saturday', sessions: '1-2 sessions', focus: 'Light technique, optional', intensity: 'Moderate' },
    { day: 'Sunday', sessions: 'Rest day', focus: 'Recovery, stretching, massage', intensity: 'Rest' },
  ];

  const preparationGuide = {
    fitness: {
      beginner: 'No prior fitness required. Start with morning sessions only for the first week. Build up gradually.',
      intermediate: 'Basic cardiovascular fitness helps. Can jump into full schedule with modifications.',
      advanced: 'Can handle full intensity from day one. Focus on technique refinement over pure conditioning.',
      mistakes: ['Training too hard too fast', 'Skipping warm-ups', 'Ignoring injuries', 'Not staying hydrated'],
    },
    packing: {
      essentials: ['Boxing gloves (10-16oz)', 'Hand wraps', 'Muay Thai shorts', 'Shin guards', 'Mouthguard'],
      gymProvides: ['Training pads', 'Heavy bags', 'Boxing ring', 'Sometimes gloves for rent'],
      thailandSpecific: ['High SPF sunscreen', 'Electrolyte supplements', 'Antimicrobial soap', 'Quick-dry clothing', 'Sandals for showers'],
    },
    visa: {
      tourist: 'Most nationalities get 60-day visa on arrival or e-visa. Can be extended once for 30 days at immigration (1,900 THB).',
      extension: 'Visit local immigration office with passport photos, TM7 form, and fee. Relatively straightforward process.',
      longTerm: 'Some gyms offer ED (Education) visas for 6-12 month training programs. Requires gym to be registered as educational institution.',
    },
    budget: {
      oneWeek: { training: '$50-150', accommodation: '$70-700', food: '$70-175', total: '$190-1,025' },
      oneMonth: { training: '$200-500', accommodation: '$200-600', food: '$300-750', total: '$700-1,850' },
      threeMonths: { training: '$600-1,500', accommodation: '$600-1,800', food: '$900-2,250', total: '$2,100-5,550' },
    },
  };

  const trainingTips = [
    {
      icon: Heart,
      title: 'Listen to Your Body',
      tip: 'Training twice daily is intense. Take rest days when needed and don\'t train through injuries.',
    },
    {
      icon: Dumbbell,
      title: 'Supplement Training',
      tip: 'Add yoga or swimming for recovery. Thai massage weekly helps with soreness and flexibility.',
    },
    {
      icon: Clock,
      title: 'Be Consistent',
      tip: 'Regular training beats intensive bursts. Show up daily, even when motivation is low.',
    },
    {
      icon: Shield,
      title: 'Get Insurance',
      tip: 'Injuries happen. Ensure your insurance covers Muay Thai training and potential hospital visits.',
    },
  ];

  const premiumPackages = [
    {
      title: 'Elite Fighter Package',
      icon: Crown,
      color: 'from-amber-500 to-yellow-600',
      price: 'Starting from 45,000 THB per week',
      description: 'Transform your skills with exclusive one-on-one training from legendary Thai champions who have fought in Lumpinee and Rajadamnern stadiums. This premium package combines authentic Muay Thai mastery with five-star luxury accommodations in central Bangkok. Your personal trainer will develop a customized program based on video analysis of your technique, identifying strengths to enhance and weaknesses to eliminate. Each morning and afternoon session focuses exclusively on you--no group classes, no distractions, just world-class instruction. Between sessions, professional Thai massage therapists work on your muscles to optimize recovery and prevent injuries. The package includes luxury hotel accommodation in premium Bangkok locations, airport limousine transfers, all training equipment, daily sports massage, personalized nutrition guidance, and video documentation of your progression. Perfect for serious martial artists, professional fighters preparing for competition, or dedicated practitioners who want to accelerate their development with undivided expert attention.',
      inclusions: [
        'Private 1-on-1 training with former champions',
        'Video analysis and personalized training plans',
        'Luxury 4-5 star hotel accommodation',
        'Daily massage and recovery treatments',
        'Airport transfers and equipment provided',
        'Nutrition consultation and meal planning',
      ],
      cta: 'Request Elite Package Details',
      ctaLink: '/contact',
    },
    {
      title: 'Group Training Experience',
      icon: Users2,
      color: 'from-red-600 to-rose-700',
      price: 'Starting from 25,000 THB per person (3-day package)',
      description: 'Perfect for bachelor parties, corporate team building, or groups of friends seeking an authentic Thai adventure with a warrior spirit. Your private group of 4-10 people trains together in exclusive sessions where camaraderie meets combat sports. Professional trainers adapt the program to your group\'s collective skill level, ensuring everyone from complete beginners to experienced practitioners can participate and progress. The experience includes team-building exercises through partner drills, optional light sparring or exhibition matches, and professional photo and video documentation to immortalize your training journey. Accommodation is arranged in guest-friendly hotels strategically located near Bangkok\'s famous nightlife districts. After morning training, explore the city together, then return for afternoon sessions before hitting the town. We coordinate post-training activities including VIP club access, private dining experiences, and guided nightlife tours. This package combines the intensity of authentic Muay Thai training with the excitement of Bangkok\'s legendary entertainment scene, creating memories that last far beyond bruises and sore muscles.',
      inclusions: [
        'Private group sessions for 4-10 people',
        'Team-building through Muay Thai drills',
        'Exhibition matches or light sparring',
        'Post-training nightlife coordination',
        'Guest-friendly hotel accommodation',
        'Group photo and video documentation',
        'Optional: VIP club access and nightlife tours',
      ],
      cta: 'Plan Your Group Training Trip',
      ctaLink: '/contact',
    },
    {
      title: 'Fitness and Wellness Bootcamp',
      icon: Sparkles,
      color: 'from-green-600 to-emerald-700',
      price: 'Starting from 35,000 THB per week',
      description: 'This holistic program combines traditional Muay Thai training with comprehensive wellness services for total mind-body transformation. Morning sessions focus on Muay Thai technique and conditioning, building strength, endurance, and martial arts skills. Afternoon programs alternate between supplementary fitness training, yoga for flexibility and mental focus, and mobility work to prevent injuries and enhance performance. A certified nutritionist creates personalized meal plans based on your goals--whether building muscle, losing weight, or optimizing athletic performance--and provides ongoing guidance throughout your stay. Three times weekly, experienced Thai massage therapists provide deep tissue and sports massage to accelerate recovery and maintain flexibility. You\'ll stay in carefully selected boutique hotels or private villas that offer peaceful environments conducive to rest and recovery. The program runs for 1 or 2 weeks, with each day structured to balance intense training with proper recovery. This package suits fitness enthusiasts, those seeking lifestyle transformation, couples wanting to train together, and anyone looking to return home stronger, leaner, and more skilled than when they arrived.',
      inclusions: [
        'Morning Muay Thai + afternoon fitness sessions',
        'Nutrition consultation and meal planning',
        'Thai massage 3 times per week',
        'Yoga and mobility training',
        'Private villa or boutique hotel accommodation',
        '1-week or 2-week programs available',
        'Progress tracking and final assessment',
      ],
      cta: 'Book Wellness Bootcamp',
      ctaLink: '/contact',
    },
  ];

  const recoveryServices = [
    {
      icon: Heart,
      title: 'Sports Massage and Thai Traditional Massage',
      description: 'Recovery is as important as training for serious Muay Thai practitioners. Thai massage isn\'t just relaxation--it\'s a 2,500-year-old healing system that prevents injuries, increases flexibility, and accelerates muscle recovery. Post-training sports massage targets the specific muscles used in Muay Thai: shoulders from punching, hips from kicking, core from clinching. Traditional Thai oil massage combines deep pressure with assisted stretching, releasing muscle knots and improving range of motion. Most training camps have massage services on-site at 300-500 THB per hour, significantly cheaper than equivalent services abroad. Serious fighters get massaged 2-3 times weekly as injury prevention.',
      link: '/accommodation',
      linkText: 'Find accommodations near massage services',
    },
    {
      icon: Shield,
      title: 'Injury Prevention and Physiotherapy',
      description: 'Thailand has excellent sports medicine facilities catering to the large Muay Thai community. Bangkok hospitals like Bumrungrad and Samitivej have sports physiotherapy departments with therapists experienced in treating martial arts injuries. If you develop shoulder issues from punching, knee pain from kicking, or back problems from clinching, these clinics provide professional treatment at reasonable costs--typically 1,500-3,000 THB per session. Many offer packages for ongoing treatment. Reputable training camps maintain relationships with specific clinics and can facilitate appointments and transportation. Don\'t train through injuries; address them promptly with professional help.',
      link: '/bangkok-destination',
      linkText: 'Explore Bangkok medical facilities',
    },
    {
      icon: Utensils,
      title: 'Nutrition Support for Fighters',
      description: 'Proper nutrition fuels training and recovery. Many fighters struggle with Thai food\'s high sugar content and need guidance for performance eating. Several services in Bangkok and Phuket offer meal prep specifically for athletes--balanced macros, appropriate portions, delivered to your accommodation. Expect 250-400 THB per meal. Alternatively, learn which restaurants near your gym serve fighter-friendly food. Most Thai gyms are surrounded by simple restaurants serving rice with grilled chicken or fish, omelet, vegetables--perfect post-training meals at 60-100 THB. Supplement with protein shakes and electrolyte drinks from 7-Eleven. Hydration is crucial in Thailand\'s heat; serious fighters drink 4-6 liters of water daily.',
      link: '/food-dining',
      linkText: 'Discover fighter-friendly restaurants',
    },
  ];

  const bangkokExperience = {
    title: 'Train Hard, Play Hard Package',
    tagline: 'The Only Place Where You Train with Legends and Party with the Best',
    description: 'Bangkok offers what no other Muay Thai destination can: the perfect fusion of authentic martial arts training with world-class nightlife and entertainment. Imagine starting your day with intense pad work under the guidance of former Lumpinee champions, then spending your evening exploring rooftop bars with panoramic city views, VIP tables at Asia\'s most exclusive nightclubs, or experiencing Bangkok\'s legendary adult entertainment scene. This isn\'t a training camp in rural Thailand where you\'re isolated with nothing to do after training. This is Bangkok--a vibrant metropolis where you can pursue serious athletic development without sacrificing social experiences. Our unique Train Hard, Play Hard package recognizes that many visitors, especially groups like bachelor parties, want authentic Muay Thai training as part of a broader Bangkok adventure. Morning sessions at elite Bangkok gyms provide real training with legitimate fighters and coaches. Afternoons offer rest and recovery. Evenings transform into explorations of Bangkok\'s famous nightlife, from sophisticated cocktail lounges to energetic nightclubs to adult entertainment venues, all coordinated through our local connections for VIP access and insider experiences that typical tourists never discover.',
    packages: [
      {
        duration: '3-Day Package',
        price: '35,000 THB',
        features: [
          'Morning training at elite Bangkok gym (3 sessions)',
          'Guest-friendly hotel accommodation near nightlife districts',
          'VIP nightclub access for 2 nights',
          'Airport transfers and daily gym transportation',
          'Optional: Gentlemen club guided experience',
          'Optional: Private female tour guide services',
          'Training equipment provided',
        ],
      },
      {
        duration: '7-Day Package',
        price: '65,000 THB',
        features: [
          'Morning training at elite Bangkok gym (7 sessions)',
          'Guest-friendly hotel accommodation near nightlife districts',
          'VIP nightclub access for 3 nights',
          'Airport transfers and daily gym transportation',
          'Optional: Gentlemen club guided experience (2 nights)',
          'Optional: Private female tour guide services',
          'Training equipment and gear provided',
          'Complimentary sports massage session',
        ],
      },
    ],
  };

  const conciergeServices = [
    {
      icon: Globe,
      category: 'Pre-Arrival Support',
      description: 'Before you land in Bangkok, our team helps you prepare for optimal training success. We provide personalized gym selection consultation based on your skill level, goals, and preferred location. Accommodation booking ensures you stay in guest-friendly hotels near gyms and nightlife. Travel insurance guidance confirms your coverage includes Muay Thai training. Visa consultation clarifies your options for different training durations. Equipment recommendations help you pack appropriately without overpacking items readily available in Thailand.',
      services: ['Gym selection consultation', 'Accommodation booking assistance', 'Travel insurance guidance', 'Visa consultation', 'Equipment and packing recommendations'],
    },
    {
      icon: Car,
      category: 'During Training Support',
      description: 'Once you arrive, logistics are handled so you can focus entirely on training and enjoying Bangkok. Airport pickup meets you on arrival and delivers you to your hotel. Daily gym transportation ensures you never navigate unfamiliar streets while exhausted from training. Equipment rental provides quality gloves, wraps, and shorts if you prefer not to bring your own. Translation services help communicate specific training requests to Thai trainers. Laundry coordination keeps your training gear clean without effort on your part.',
      services: ['Airport pickup and departure transfers', 'Daily gym transportation', 'Equipment rental (gloves, wraps, shorts)', 'Translation services with trainers', 'Laundry coordination'],
    },
    {
      icon: Camera,
      category: 'Content Creation',
      description: 'Document your transformation with professional media services. Professional training photography captures dramatic action shots during pad work, sparring, and conditioning. Video documentation creates highlight reels of your technique progression throughout the training period. Social media content packages provide Instagram and TikTok-ready material. Before and after transformation documentation visually proves your development. These services create lasting memories and impressive content to share with friends or build a personal brand.',
      services: ['Professional training photography', 'Video highlight reels', 'Social media content packages', 'Before and after transformation photos', 'Action shot portfolios'],
    },
    {
      icon: Palmtree,
      category: 'Post-Training Recreation',
      description: 'Balance intense training with curated Bangkok experiences. Day trip planning coordinates excursions to beaches, temples, floating markets, and cultural sites on your rest days. Nightlife coordination provides VIP access to Bangkok\'s best clubs, rooftop bars, and entertainment venues. Restaurant reservations secure tables at sought-after dining establishments serving authentic Thai cuisine or international options. Cultural experiences arrange cooking classes, temple tours, traditional massage courses, or Muay Thai stadium fights where you watch elite fighters compete.',
      services: ['Day trip planning and booking', 'Nightlife and VIP club coordination', 'Restaurant reservations', 'Cultural experience arrangements', 'Thai boxing stadium tickets'],
    },
  ];

  const conciergePackages = [
    {
      name: 'Essential Support',
      price: '5,000 THB',
      description: 'Basic logistics coverage',
      features: ['Airport transfers', 'Daily gym transportation', 'Equipment rental', 'Pre-arrival consultation'],
    },
    {
      name: 'Premium Support',
      price: '12,000 THB',
      description: 'Comprehensive service package',
      features: ['Everything in Essential', 'Translation services', 'Training photography (2 sessions)', 'Nightlife coordination (2 nights)', 'Day trip planning'],
    },
    {
      name: 'VIP Complete Experience',
      price: '25,000 THB',
      description: 'Full-service concierge',
      features: ['Everything in Premium', 'Professional video documentation', 'Social media content package', 'Unlimited translation support', 'Personal assistant services', 'Custom itinerary planning'],
    },
  ];

  const faqs = [
    {
      question: 'Do I need experience to train Muay Thai in Thailand?',
      answer: 'No experience is necessary. Thai gyms welcome complete beginners and provide foundational instruction starting with basic stance, footwork, and technique. Most gyms separate classes by skill level, ensuring beginners train with other newcomers rather than advanced fighters. Trainers are accustomed to teaching international students with no prior martial arts background. Many visitors begin their Muay Thai journey in Thailand specifically because authentic instruction from experienced Thai trainers provides the ideal learning environment for building proper fundamentals from day one.',
    },
    {
      question: 'How fit do I need to be before starting?',
      answer: 'You can start at any fitness level. Training intensity adjusts to your current condition, and you progress at your own pace. Complete beginners often work on technique and light pad work while building cardiovascular endurance gradually. Most people find themselves significantly fitter within two weeks of consistent training. Being moderately active beforehand helps, but many successful students arrive sedentary and transform through training. The key is showing up consistently, listening to your body, staying hydrated, and recognizing that improvement happens rapidly once you adapt to the routine.',
    },
    {
      question: 'What is the typical cost for one month of training?',
      answer: 'One month of training in Bangkok typically costs 8,000-15,000 THB for gym membership, plus 15,000-30,000 THB for accommodation, totaling approximately 23,000-45,000 THB depending on gym quality and housing choices. Budget gyms charge around 8,000 THB monthly with basic facilities, while elite gyms with champion trainers cost 12,000-15,000 THB. Accommodation ranges from basic rooms near gyms to comfortable apartments. Additional costs include food (8,000-15,000 THB monthly), sports massage (300-500 THB per session, recommended 2-3 times weekly), and equipment if not provided.',
    },
    {
      question: 'Can I train if I am only in Bangkok for a few days?',
      answer: 'Absolutely. Most Bangkok gyms offer daily drop-in rates (400-800 THB per session) perfect for short visits. Our 3-day Train Hard, Play Hard package specifically caters to brief stays, providing morning training sessions at elite gyms while leaving afternoons and evenings free for exploring Bangkok. Even a few training sessions offer authentic experience, teach fundamental techniques, and provide an intense workout. Single sessions work well for travelers wanting to try Muay Thai without committing to longer programs. Trainers accommodate short-term students by focusing on foundational skills rather than long-term development.',
    },
    {
      question: 'Is training in Thailand safe for beginners?',
      answer: 'Yes, training is very safe for beginners when you choose reputable gyms with experienced trainers. Beginners focus primarily on pad work, bag work, and conditioning rather than sparring. Sparring is always optional, never mandatory, and beginners typically avoid it entirely during short training periods. Trainers emphasize proper technique to prevent injury. The main risks are minor muscle soreness, shin bruising from kicking, and dehydration in hot weather--all easily managed with proper rest, hydration, and gradual progression. Thousands of international beginners train safely in Thailand annually, with serious injuries being extremely rare.',
    },
    {
      question: 'What is the best time of year to train?',
      answer: 'November through February offers the most comfortable weather, with cooler temperatures (25-30 degrees C) and less humidity making training more pleasant. However, training is possible year-round, and many serious students prefer March through October when fewer tourists mean more personalized attention from trainers and lower accommodation prices. Hot season (March-May) and rainy season (June-October) require extra attention to hydration and heat management, but air-conditioned gyms remain comfortable. Ultimately, the best time depends on your schedule and tolerance for heat. Bangkok gyms operate consistently regardless of season.',
    },
    {
      question: 'Can women train Muay Thai in Thailand?',
      answer: 'Yes, women are absolutely welcome and represent a growing percentage of international students. Many Bangkok gyms specifically cater to female fighters with dedicated classes, female trainers, and women-only facilities. Thai culture respects female martial artists, and gyms maintain professional, respectful environments. Women train alongside men in most gyms without issues, though some prefer women-specific programs. Female beginners receive the same quality instruction as male students. Safety, respect, and proper technique development apply equally regardless of gender. Many women find Thailand empowering for both martial arts development and personal growth.',
    },
    {
      question: 'Will I be expected to fight or spar?',
      answer: 'No, fighting and sparring are completely optional and never required. Most short-term students focus exclusively on pad work, bag training, technique drills, and conditioning without any sparring. Beginners typically avoid sparring entirely. If you want to spar, gyms can accommodate light technical sparring with appropriate protective equipment, but only when you request it. Fighting in actual competitions is reserved for serious students training for extended periods who specifically pursue that goal. The majority of international students train purely for fitness, technique development, and cultural experience without ever entering the ring competitively.',
    },
    {
      question: 'What if I get injured during training?',
      answer: 'Minor soreness and muscle fatigue are normal, but serious injuries are rare with proper technique and gradual progression. Reputable gyms carry insurance and have protocols for injuries. Bangkok has excellent medical facilities, including international hospitals with English-speaking staff. Most training-related issues are minor: muscle strains, shin bruising, or mild sprains treated with rest, ice, and over-the-counter medication. Our concierge services include medical coordination if needed. Travel insurance covering sports activities is recommended. Trainers modify workouts if you are injured or experiencing pain. Listen to your body and communicate with trainers about any discomfort.',
    },
    {
      question: 'Can I combine training with Bangkok nightlife?',
      answer: 'Yes, this is exactly what our Train Hard, Play Hard package offers. Bangkok is unique because you can train intensely in the morning with world-class fighters, then explore rooftop bars, nightclubs, and entertainment districts in the evening. Unlike rural training camps where nightlife is nonexistent, Bangkok provides the perfect balance. Morning training sessions end by noon, leaving afternoons for rest and recovery, and evenings free for social experiences. Many bachelor parties, friend groups, and solo travelers choose Bangkok specifically for this combination. Just prioritize sleep, hydration, and recovery to maintain training performance.',
    },
    {
      question: 'Do gyms provide accommodation?',
      answer: 'Some gyms include basic accommodation in training packages, typically simple rooms with beds, fans or air conditioning, and shared bathrooms. However, Bangkok gyms increasingly focus purely on training, letting students arrange independent accommodation nearby. This provides more flexibility in choosing housing that matches your comfort preferences and budget. Our concierge services handle accommodation booking near your chosen gym in guest-friendly hotels suitable for social travelers. Independent accommodation often offers better amenities, privacy, and location near nightlife compared to gym-provided housing, though gym housing is more affordable for budget-conscious students.',
    },
    {
      question: 'What is the difference between a tourist gym and a fighter gym?',
      answer: 'Fighter gyms train serious Thai fighters competing in stadiums, with intense conditioning, multiple daily sessions, and focus on competition preparation. Training is rigorous, traditional, and demands high commitment. Tourist gyms cater to international students with flexible schedules, air conditioning, English-speaking trainers, and classes designed for varying skill levels. Fighter gyms provide authentic immersion but less accommodation for casual students. Tourist gyms offer structured programs better suited to short-term visitors. Elite Bangkok gyms blend both: legitimate fighter training with accommodations for international students, providing authentic experience without the extreme demands of pure fighter camps.',
    },
  ];

  const testimonials = [
    {
      name: 'Marcus T.',
      location: 'United States',
      text: 'The Train Hard, Play Hard package was perfect for our bachelor party. Morning training with real champions, then VIP nightlife coordination. Best of both worlds.',
      rating: 5,
    },
    {
      name: 'Sarah K.',
      location: 'Australia',
      text: 'As a complete beginner, I was nervous, but the trainers were incredibly patient. Two weeks of training transformed my fitness and confidence. The concierge services made everything effortless.',
      rating: 5,
    },
    {
      name: 'James R.',
      location: 'United Kingdom',
      text: 'Trained at three different gyms during my month in Bangkok. The insider knowledge and gym selection consultation helped me find the perfect fit for my skill level.',
      rating: 5,
    },
  ];

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Things to Do', path: '/things-to-do' },
          { label: 'Muay Thai Training', path: '/muay-thai-training-thailand' },
        ]}
      />

      <div className="bg-gradient-to-b from-red-900 via-red-800 to-red-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,215,0,0.3) 35px, rgba(255,215,0,0.3) 70px)`,
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Flame className="w-8 h-8 text-amber-400" />
              <span className="text-amber-400 font-semibold tracking-wider uppercase text-sm">
                The Art of Eight Limbs
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 uppercase tracking-[3px]">
              Muay Thai Training
              <br />
              <span className="text-amber-400">in Thailand</span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-red-100 leading-relaxed mb-6">
                Train at the birthplace of Muay Thai with authentic Thai trainers and champions. Whether you're a complete beginner or professional fighter, Thailand offers world-class training, cultural immersion, and an unforgettable martial arts journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Why Train Muay Thai in Thailand
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Thailand isn't just where Muay Thai was born--it's where the art continues to thrive as a living tradition
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {whyTrainReasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white to-red-50 rounded-2xl p-8 border-2 border-red-100 hover:border-red-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-4 bg-gradient-to-br from-red-600 to-amber-600 rounded-xl shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                        <p className="text-red-600 font-semibold mb-3">{reason.description}</p>
                        <p className="text-gray-700 leading-relaxed">{reason.details}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-red-50 rounded-2xl p-8 border-2 border-amber-200">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-red-600 mb-2">200+</div>
                  <div className="text-gray-700 font-semibold">Training Camps</div>
                  <div className="text-sm text-gray-600 mt-1">Across Thailand</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-600 mb-2">$200-500</div>
                  <div className="text-gray-700 font-semibold">Monthly Training</div>
                  <div className="text-sm text-gray-600 mt-1">Twice daily, 6 days/week</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-600 mb-2">All Levels</div>
                  <div className="text-gray-700 font-semibold">Welcome</div>
                  <div className="text-sm text-gray-600 mt-1">Beginner to professional</div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Training by Experience Level
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find the right training approach for your skill level and goals
              </p>
            </div>

            <div className="space-y-12">
              {trainingLevels.map((level, levelIndex) => {
                const Icon = level.icon;
                return (
                  <div
                    key={levelIndex}
                    className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-200"
                  >
                    <div className={`bg-gradient-to-r ${level.color} text-white p-8`}>
                      <div className="flex items-center gap-4">
                        <div className="p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold mb-1">{level.title}</h3>
                          <p className="text-white/90">What to expect at this level</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-8 space-y-8">
                      {level.content.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                          <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <CheckCircle2 className="w-6 h-6 text-red-600" />
                            {section.heading}
                          </h4>
                          <p className="text-gray-700 leading-relaxed text-lg">{section.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Popular Training Camps
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Top-rated gyms frequented by international fighters and serious practitioners
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {popularGyms.map((gym, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200 hover:border-red-300 transition-all duration-300"
                >
                  <div className="relative h-64">
                    <img
                      src={gym.image}
                      alt={gym.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-red-600 to-amber-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                      {gym.priceRange}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{gym.name}</h3>
                        <div className="flex items-center gap-2 text-red-600">
                          <MapPin className="w-4 h-4" />
                          <span className="font-semibold">{gym.location}</span>
                        </div>
                      </div>
                      <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold">
                        {gym.level}
                      </div>
                    </div>
                    <div className="space-y-2 mt-4">
                      {gym.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-amber-500 flex-shrink-0" />
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Top Training Destinations
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose your ideal location for Muay Thai training in Thailand
              </p>
            </div>

            <div className="space-y-8">
              {trainingDestinations.map((destination, index) => {
                const Icon = destination.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200 hover:border-red-300 transition-all duration-300"
                  >
                    <div className={`bg-gradient-to-r ${destination.color} text-white p-8`}>
                      <div className="flex items-center gap-4 mb-2">
                        <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold">{destination.city}</h3>
                      </div>
                      <p className="text-white/90 text-lg">{destination.bestFor}</p>
                    </div>

                    <div className="p-8">
                      <p className="text-gray-700 leading-relaxed text-lg mb-6">
                        {destination.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <Star className="w-5 h-5 text-amber-500" />
                            Top Gyms
                          </h4>
                          <div className="space-y-2">
                            {destination.topGyms.map((gym, gymIndex) => (
                              <div key={gymIndex} className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                                <span className="text-gray-700">{gym}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <DollarSign className="w-5 h-5 text-green-600" />
                            Average Cost
                          </h4>
                          <p className="text-2xl font-bold text-red-600 mb-4">{destination.averageCost}</p>
                          <p className="text-sm text-gray-600">Full-time training membership</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                          <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                            Pros
                          </h4>
                          <ul className="space-y-1">
                            {destination.pros.map((pro, proIndex) => (
                              <li key={proIndex} className="text-sm text-gray-700">* {pro}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                          <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                            <Shield className="w-5 h-5 text-red-600" />
                            Cons
                          </h4>
                          <ul className="space-y-1">
                            {destination.cons.map((con, conIndex) => (
                              <li key={conIndex} className="text-sm text-gray-700">* {con}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200">
              <div className="bg-gradient-to-r from-red-900 to-red-800 text-white p-6">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Map className="w-7 h-7" />
                  Destination Comparison
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold text-gray-900">Destination</th>
                      <th className="px-6 py-4 text-left font-bold text-gray-900">Training Quality</th>
                      <th className="px-6 py-4 text-left font-bold text-gray-900">Cost Level</th>
                      <th className="px-6 py-4 text-left font-bold text-gray-900">Beach Access</th>
                      <th className="px-6 py-4 text-left font-bold text-gray-900">Atmosphere</th>
                      <th className="px-6 py-4 text-left font-bold text-gray-900">English Level</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {destinationComparison.map((dest, index) => (
                      <tr key={index} className="hover:bg-red-50 transition-colors duration-150">
                        <td className="px-6 py-4 font-bold text-gray-900">{dest.destination}</td>
                        <td className="px-6 py-4 text-gray-700">{dest.training}</td>
                        <td className="px-6 py-4 text-gray-700">{dest.cost}</td>
                        <td className="px-6 py-4 text-gray-700">{dest.beaches}</td>
                        <td className="px-6 py-4 text-gray-700">{dest.atmosphere}</td>
                        <td className="px-6 py-4 text-gray-700">{dest.englishLevel}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Location Tips</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Many serious practitioners train in multiple locations. Consider starting in <a href="/bangkok-destination" className="text-red-600 font-semibold hover:underline">Bangkok</a> for a week to experience authentic Thai fight culture, then move to <a href="/phuket-destination" className="text-red-600 font-semibold hover:underline">Phuket</a> or <a href="/chiang-mai-destination" className="text-red-600 font-semibold hover:underline">Chiang Mai</a> for extended training. Each destination offers unique advantages, and experiencing different gyms helps you understand Thai Muay Thai from multiple perspectives.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                What to Expect: Daily Training Schedule
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A typical day at a Muay Thai training camp in Thailand
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-amber-50 rounded-2xl p-8 border-2 border-red-200 mb-8">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Professional Muay Thai training in Thailand follows a traditional two-session format that has produced champions for generations. Morning sessions focus on building cardio foundation and technical skills when you're fresh. Afternoon sessions emphasize power, sparring, and applying techniques under fatigue--this is where mental toughness develops. The schedule seems intense, but Thai trainers understand pacing and recovery. Between sessions, you'll have 5-6 hours for meals, rest, exploration, or massage. Nutrition and recovery are crucial; most fighters eat substantial meals post-training and lighter meals before sessions. Proper hydration is essential in Thailand's heat--expect to drink 4-6 liters of water daily.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Rest and recovery between sessions shouldn't be underestimated. This is when your body adapts and muscles repair. Many gyms are near beaches, mountains, or cultural sites, making afternoon exploration rewarding. Thai massage becomes essential for serious trainers--traditional massage helps prevent injuries, improves flexibility, and speeds recovery. Most fighters get massaged 2-3 times weekly. Sunday is typically rest day, though some fighters do light roadwork or technique review. This schedule produces results: after one month, your conditioning will be exceptional; after three months, you'll move and think like a fighter.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200 mb-8">
              <div className="bg-gradient-to-r from-orange-600 to-red-700 text-white p-6">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Clock className="w-7 h-7" />
                  Typical Daily Schedule
                </h3>
              </div>
              <div className="p-8">
                <div className="space-y-4">
                  {dailySchedule.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200"
                      >
                        <div className="p-3 bg-white rounded-xl shadow-md">
                          <Icon className={`w-6 h-6 ${item.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-gray-900 text-lg">{item.time}</div>
                          <div className="text-gray-700">{item.activity}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200">
              <div className="bg-gradient-to-r from-red-900 to-red-800 text-white p-6">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Calendar className="w-7 h-7" />
                  Weekly Training Schedule
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold text-gray-900">Day</th>
                      <th className="px-6 py-4 text-left font-bold text-gray-900">Sessions</th>
                      <th className="px-6 py-4 text-left font-bold text-gray-900">Training Focus</th>
                      <th className="px-6 py-4 text-left font-bold text-gray-900">Intensity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {weeklySchedule.map((day, index) => (
                      <tr key={index} className="hover:bg-red-50 transition-colors duration-150">
                        <td className="px-6 py-4 font-bold text-gray-900">{day.day}</td>
                        <td className="px-6 py-4 text-gray-700">{day.sessions}</td>
                        <td className="px-6 py-4 text-gray-700">{day.focus}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${
                            day.intensity === 'High' ? 'bg-red-100 text-red-800' :
                            day.intensity === 'Moderate' ? 'bg-amber-100 text-amber-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {day.intensity}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Preparation Guide
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Everything you need to know before starting your Muay Thai training journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-red-600 to-amber-600 rounded-xl">
                    <Activity className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Fitness Requirements</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Users className="w-5 h-5 text-amber-600" />
                      Beginners
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{preparationGuide.fitness.beginner}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Target className="w-5 h-5 text-red-600" />
                      Intermediate
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{preparationGuide.fitness.intermediate}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Flame className="w-5 h-5 text-red-700" />
                      Advanced
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{preparationGuide.fitness.advanced}</p>
                  </div>

                  <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                    <h4 className="font-bold text-red-900 mb-2">Common Mistakes to Avoid</h4>
                    <ul className="space-y-1">
                      {preparationGuide.fitness.mistakes.map((mistake, index) => (
                        <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-red-600 font-bold">x</span>
                          {mistake}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-red-600 to-amber-600 rounded-xl">
                    <Backpack className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">What to Pack</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Training Essentials</h4>
                    <div className="space-y-2">
                      {preparationGuide.packing.essentials.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Gyms Typically Provide</h4>
                    <div className="space-y-2">
                      {preparationGuide.packing.gymProvides.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-amber-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                    <h4 className="font-bold text-amber-900 mb-2">Thailand-Specific Items</h4>
                    <div className="space-y-2">
                      {preparationGuide.packing.thailandSpecific.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-red-600 to-amber-600 rounded-xl">
                    <FileText className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Visa Considerations</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Tourist Visa (60 days)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{preparationGuide.visa.tourist}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Extension Options</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{preparationGuide.visa.extension}</p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <h4 className="font-bold text-blue-900 mb-2">Long-Term Training</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{preparationGuide.visa.longTerm}</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    For detailed visa information, check our <a href="/visa-guide" className="text-red-600 font-semibold hover:underline">complete visa guide</a>.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-red-600 to-amber-600 rounded-xl">
                    <DollarSign className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Budget Planning</h3>
                </div>

                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-gray-900">1 Week</h4>
                      <span className="text-xl font-bold text-red-600">{preparationGuide.budget.oneWeek.total}</span>
                    </div>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex justify-between"><span>Training</span><span>{preparationGuide.budget.oneWeek.training}</span></div>
                      <div className="flex justify-between"><span>Accommodation</span><span>{preparationGuide.budget.oneWeek.accommodation}</span></div>
                      <div className="flex justify-between"><span>Food</span><span>{preparationGuide.budget.oneWeek.food}</span></div>
                    </div>
                  </div>

                  <div className="border-b border-gray-200 pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-gray-900">1 Month</h4>
                      <span className="text-xl font-bold text-red-600">{preparationGuide.budget.oneMonth.total}</span>
                    </div>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex justify-between"><span>Training</span><span>{preparationGuide.budget.oneMonth.training}</span></div>
                      <div className="flex justify-between"><span>Accommodation</span><span>{preparationGuide.budget.oneMonth.accommodation}</span></div>
                      <div className="flex justify-between"><span>Food</span><span>{preparationGuide.budget.oneMonth.food}</span></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-gray-900">3 Months</h4>
                      <span className="text-xl font-bold text-red-600">{preparationGuide.budget.threeMonths.total}</span>
                    </div>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex justify-between"><span>Training</span><span>{preparationGuide.budget.threeMonths.training}</span></div>
                      <div className="flex justify-between"><span>Accommodation</span><span>{preparationGuide.budget.threeMonths.accommodation}</span></div>
                      <div className="flex justify-between"><span>Food</span><span>{preparationGuide.budget.threeMonths.food}</span></div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mt-4">
                    Learn more in our <a href="/budget-guide" className="text-red-600 font-semibold hover:underline">complete budget guide</a> and <a href="/accommodation" className="text-red-600 font-semibold hover:underline">accommodation options</a>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Premium Training Experiences
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Elevate your Muay Thai journey with VIP training packages that combine authentic Thai martial arts with luxury accommodations and exclusive Bangkok experiences
              </p>
            </div>

            <div className="space-y-8">
              {premiumPackages.map((pkg, index) => {
                const Icon = pkg.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200 hover:border-amber-400 transition-all duration-300"
                  >
                    <div className={`bg-gradient-to-r ${pkg.color} text-white p-8`}>
                      <div className="flex items-center gap-4 mb-3">
                        <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-3xl font-bold">{pkg.title}</h3>
                          <p className="text-white/90 text-lg mt-1">{pkg.price}</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-8">
                      <p className="text-gray-700 leading-relaxed text-lg mb-6">
                        {pkg.description}
                      </p>

                      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 mb-6">
                        <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                          Package Inclusions
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {pkg.inclusions.map((inclusion, inclIndex) => (
                            <div key={inclIndex} className="flex items-start gap-2">
                              <Star className="w-4 h-4 text-amber-500 flex-shrink-0 mt-1" />
                              <span className="text-gray-700 text-sm">{inclusion}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <a
                        href={pkg.ctaLink}
                        className="inline-block bg-gradient-to-r from-red-600 to-amber-600 text-white px-8 py-3 rounded-lg font-bold hover:from-red-700 hover:to-amber-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                      >
                        {pkg.cta}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 border-2 border-amber-200">
              <div className="flex items-start gap-4">
                <Crown className="w-10 h-10 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Custom Packages Available</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    These premium packages can be customized to match your specific goals, schedule, and preferences. Whether you need shorter or longer durations, specific training focuses, alternative accommodation options, or additional services, we can create a bespoke muay thai training in thailand experience tailored to your requirements. Contact us to discuss your ideal training package and receive a personalized quote.
                  </p>
                  <a
                    href="/contact"
                    className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200"
                  >
                    Discuss Custom Package
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Recovery and Performance Services
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Essential services to optimize your training performance and prevent injuries
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {recoveryServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200 hover:border-red-300 transition-all duration-300"
                  >
                    <div className="p-4 bg-gradient-to-br from-red-600 to-amber-600 rounded-xl w-fit mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-700 leading-relaxed text-sm mb-4">
                      {service.description}
                    </p>
                    <a
                      href={service.link}
                      className="text-red-600 font-semibold hover:underline text-sm flex items-center gap-1"
                    >
                      {service.linkText}
                      <CheckCircle2 className="w-4 h-4" />
                    </a>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-8 border-2 border-red-200">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Recovery is Part of Training</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Professional fighters understand that adaptation and growth happen during recovery, not during training. The intense twice-daily training schedule in Thailand requires proper recovery protocols. Budget for weekly massage, prioritize 7-8 hours of sleep nightly, stay religiously hydrated in Thailand's heat, and listen to your body when it signals the need for rest. Pushing through fatigue and minor injuries leads to major injuries that can end your training trip early. Smart recovery keeps you training consistently, which produces better results than sporadic intense efforts interrupted by injury downtime.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-white rounded-lg p-4 border border-red-200">
                      <div className="font-bold text-gray-900 mb-1">Weekly Massage</div>
                      <div className="text-sm text-gray-600">2-3 sessions minimum</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-red-200">
                      <div className="font-bold text-gray-900 mb-1">Sleep</div>
                      <div className="text-sm text-gray-600">7-8 hours nightly</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-red-200">
                      <div className="font-bold text-gray-900 mb-1">Hydration</div>
                      <div className="text-sm text-gray-600">4-6 liters daily</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                The Ultimate Bangkok Training Experience
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Why train in Bangkok when you can EXPERIENCE Bangkok
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-red-900 rounded-2xl overflow-hidden border-2 border-red-600 shadow-2xl">
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-amber-500 to-red-600 rounded-xl">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {bangkokExperience.title}
                    </h3>
                    <p className="text-amber-300 text-lg font-semibold">
                      {bangkokExperience.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-gray-100 leading-relaxed text-lg mb-8">
                  {bangkokExperience.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {bangkokExperience.packages.map((pkg, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-amber-400 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-2xl font-bold text-white">{pkg.duration}</h4>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-amber-400">{pkg.price}</div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {pkg.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                            <span className="text-gray-200 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-gradient-to-r from-amber-500 to-red-600 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <PartyPopper className="w-8 h-8 text-white flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">Perfect for Bachelor Parties and Group Adventures</h4>
                      <p className="text-white/90 text-sm mb-4">
                        This package is specifically designed for groups who want authentic martial arts training combined with Bangkok's world-famous nightlife and entertainment scene. Whether it's a bachelor party, corporate team-building event, or friends' adventure, we coordinate everything from training to evening experiences. Private guides, VIP access, and insider connections ensure you experience Bangkok like locals, not tourists.
                      </p>
                      <a
                        href="/contact"
                        className="inline-block bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200"
                      >
                        Plan Your Bangkok Experience
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200">
                <Building2 className="w-8 h-8 text-red-600 mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Elite Bangkok Gyms</h4>
                <p className="text-gray-600 text-sm">
                  Train at legitimate gyms with former stadium champions, not tourist traps
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200">
                <MapPin className="w-8 h-8 text-red-600 mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Prime Location</h4>
                <p className="text-gray-600 text-sm">
                  Stay near nightlife districts--5-10 minutes from the action
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200">
                <Shield className="w-8 h-8 text-red-600 mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Local Expertise</h4>
                <p className="text-gray-600 text-sm">
                  Insider connections provide VIP access and experiences tourists never find
                </p>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Logistics and Concierge Support
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Full-service support from arrival to departure--we handle the details so you focus on training
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {conciergeServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200 hover:border-amber-400 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-gradient-to-br from-red-600 to-amber-600 rounded-xl">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.category}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-3 text-sm">Services Included:</h4>
                      <div className="space-y-2">
                        {service.services.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-8 border-2 border-gray-300">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">Concierge Package Comparison</h3>
                <p className="text-gray-600">Choose the level of support that matches your needs</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {conciergePackages.map((pkg, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-xl p-6 border-2 ${
                      index === 2
                        ? 'border-amber-400 shadow-xl transform md:scale-105'
                        : 'border-gray-200 shadow-lg'
                    }`}
                  >
                    {index === 2 && (
                      <div className="bg-gradient-to-r from-amber-500 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
                        MOST POPULAR
                      </div>
                    )}
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h4>
                    <div className="text-3xl font-bold text-red-600 mb-2">{pkg.price}</div>
                    <p className="text-gray-600 text-sm mb-6">{pkg.description}</p>
                    <div className="space-y-2 mb-6">
                      {pkg.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2">
                          <Star className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <a
                      href="/contact"
                      className={`block text-center py-3 rounded-lg font-bold transition-colors duration-200 ${
                        index === 2
                          ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white hover:from-red-700 hover:to-amber-700'
                          : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                      }`}
                    >
                      Select Package
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-start gap-4">
                  <Phone className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Need Custom Concierge Services?</h4>
                    <p className="text-gray-700 mb-4">
                      These packages can be customized or purchased as individual services. Whether you need just airport transfers, only content creation, or a fully bespoke experience, we adapt to your requirements. Contact us to discuss your specific needs and receive a tailored quote.
                    </p>
                    <a
                      href="/contact"
                      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                    >
                      Request Custom Services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Cost Breakdown
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Budget for your Muay Thai training experience in Thailand
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-amber-50 rounded-2xl p-8 border-2 border-red-200">
              <div className="space-y-4">
                {costBreakdown.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex items-center justify-between"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <DollarSign className="w-6 h-6 text-red-600" />
                        <h3 className="text-xl font-bold text-gray-900">{item.item}</h3>
                      </div>
                      <p className="text-gray-600 text-sm ml-9">{item.details}</p>
                    </div>
                    <div className="text-2xl font-bold text-red-600">{item.cost}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-r from-red-600 to-amber-600 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold mb-1 text-white/80">Estimated Monthly Total</div>
                    <div className="text-4xl font-bold">$650-1,200</div>
                  </div>
                  <Calendar className="w-12 h-12 text-white/80" />
                </div>
                <p className="text-sm text-white/90 mt-4">
                  Costs vary by location and lifestyle. Budget travelers can manage on the lower end, while those seeking comfort will be toward the higher range.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Essential Training Tips
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trainingTips.map((tip, index) => {
                const Icon = tip.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200 hover:border-red-300 transition-all duration-300"
                  >
                    <div className="p-3 bg-gradient-to-br from-red-600 to-amber-600 rounded-xl w-fit mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{tip.tip}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,215,0,0.3) 35px, rgba(255,215,0,0.3) 70px)`,
              }}></div>
            </div>
            <div className="relative z-10">
              <div className="flex items-start gap-4">
                <Zap className="w-10 h-10 text-amber-400 flex-shrink-0" />
                <div>
                  <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
                  <p className="text-red-100 text-lg leading-relaxed mb-6">
                    Muay Thai training in Thailand is a transformative experience that combines authentic martial arts training, cultural immersion, and personal growth. Research gyms thoroughly, read recent reviews from international students, and don't hesitate to try different camps to find your perfect fit. Most reputable gyms offer drop-in sessions so you can test the training style, meet the trainers, and experience the atmosphere before committing to a monthly package. Respect the tradition, train hard, embrace recovery time, and immerse yourself in the warrior culture that makes Muay Thai more than just a sport.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="/bangkok-destination"
                      className="inline-block bg-white text-red-900 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-200 shadow-lg"
                    >
                      Explore Premium Training Packages
                    </a>
                    <a
                      href="/things-to-do"
                      className="inline-block bg-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-200"
                    >
                      More Activities
                    </a>
                    <a
                      href="/travel-planning"
                      className="inline-block bg-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-200"
                    >
                      Plan Your Trip
                    </a>
                    <a
                      href="/budget-guide"
                      className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-900 transition-colors duration-200"
                    >
                      Budget Guide
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about training Muay Thai in Thailand
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:border-red-400 transition-all duration-300 group"
              >
                <summary className="cursor-pointer p-6 font-bold text-gray-900 flex items-start gap-4 list-none">
                  <HelpCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5 group-hover:text-amber-500 transition-colors" />
                  <span className="flex-1">{faq.question}</span>
                  <CheckCircle2 className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-6 pb-6 pt-2 text-gray-700 leading-relaxed border-t border-gray-100">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200">
            <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Still Have Questions?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Our team has years of experience helping international students navigate Muay Thai training in Thailand. We are here to answer any questions and help you plan the perfect training experience.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors duration-200 shadow-lg"
            >
              Ask Your Question
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-red-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,215,0,0.3) 35px, rgba(255,215,0,0.3) 70px)`,
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-light text-white uppercase tracking-[2px] mb-4">
              Ready to Start Your Muay Thai Journey?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">
              Tell us about your training goals and we will create a personalized Bangkok Muay Thai experience
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Send className="w-7 h-7 text-red-600" />
                Get Your Custom Training Plan
              </h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                    placeholder="+66 123 456 789"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Training Level *</label>
                    <select
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                    >
                      <option value="">Select level</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Duration *</label>
                    <select
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                    >
                      <option value="">Select duration</option>
                      <option value="3days">3 days</option>
                      <option value="1week">1 week</option>
                      <option value="2weeks">2 weeks</option>
                      <option value="1month">1 month or longer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Interests *</label>
                  <select
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                  >
                    <option value="">Select your focus</option>
                    <option value="pure-training">Pure training focus</option>
                    <option value="training-nightlife">Training plus nightlife</option>
                    <option value="training-wellness">Training plus wellness</option>
                    <option value="group">Group experience (bachelor party, etc.)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Budget Range</label>
                  <select
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                  >
                    <option value="">Select budget</option>
                    <option value="budget">Budget (Under 30,000 THB)</option>
                    <option value="moderate">Moderate (30,000-60,000 THB)</option>
                    <option value="premium">Premium (60,000-100,000 THB)</option>
                    <option value="luxury">Luxury (100,000+ THB)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Start Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Details</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all resize-none"
                    placeholder="Tell us more about your goals, any injuries or concerns, group size, etc."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-amber-600 text-white py-4 rounded-lg font-bold text-lg hover:from-red-700 hover:to-amber-700 transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Get Your Custom Plan
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Links</h3>
                <div className="space-y-3">
                  <a
                    href="/contact"
                    className="block p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border-2 border-gray-200 hover:border-red-400 transition-all duration-300 font-semibold text-gray-900 flex items-center justify-between group"
                  >
                    <span>Contact Us</span>
                    <CheckCircle2 className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors" />
                  </a>
                  <a
                    href="/things-to-do"
                    className="block p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border-2 border-gray-200 hover:border-red-400 transition-all duration-300 font-semibold text-gray-900 flex items-center justify-between group"
                  >
                    <span>Browse All Bangkok Experiences</span>
                    <CheckCircle2 className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors" />
                  </a>
                  <a
                    href="/travel-planning"
                    className="block p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border-2 border-gray-200 hover:border-red-400 transition-all duration-300 font-semibold text-gray-900 flex items-center justify-between group"
                  >
                    <span>VIP Concierge Services</span>
                    <CheckCircle2 className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors" />
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 shadow-2xl border-2 border-amber-300">
                <Award className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Join 500+ International Fighters</h3>
                <p className="text-gray-700 mb-6">
                  Over 500 international students have transformed their fitness, technique, and confidence through our personalized Bangkok Muay Thai experiences.
                </p>
                <div className="space-y-4">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 border border-amber-200">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                        ))}
                      </div>
                      <p className="text-gray-700 text-sm mb-2 italic">"{testimonial.text}"</p>
                      <div className="text-sm">
                        <span className="font-bold text-gray-900">{testimonial.name}</span>
                        <span className="text-gray-500"> * {testimonial.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-2xl border-2 border-green-300">
                <div className="flex items-start gap-4">
                  <Shield className="w-10 h-10 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Trust & Safety</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">Licensed and insured operations</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">5+ years of experience</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">Verified gym partnerships</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">24/7 support available</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">Flexible cancellation policy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us Directly</h3>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/66123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border-2 border-green-200 hover:border-green-400 transition-all duration-300"
                  >
                    <MessageCircle className="w-6 h-6 text-green-600" />
                    <div>
                      <div className="font-bold text-gray-900">WhatsApp</div>
                      <div className="text-sm text-gray-600">Instant response</div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border-2 border-green-200 hover:border-green-400 transition-all duration-300"
                  >
                    <MessageCircle className="w-6 h-6 text-green-600" />
                    <div>
                      <div className="font-bold text-gray-900">LINE</div>
                      <div className="text-sm text-gray-600">@bangkokmuaythai</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-400 to-red-500 rounded-2xl p-8 text-center shadow-2xl">
            <TrendingUp className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-3">Limited Spots Available</h3>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Our personalized training experiences maintain small group sizes to ensure quality instruction and concierge attention. Peak season (November-February) books quickly. Secure your spot now.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/contact"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                Reserve Your Training Experience
              </a>
              <span className="text-white font-semibold">or call +66 123 456 789</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-gray-100 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RelatedGuides
            guides={[
              {
                title: 'Things to Do in Thailand',
                description: 'Explore more adventures and activities',
                link: '/things-to-do',
                image:
                  'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Budget Guide',
                description: 'Plan your Thailand budget',
                link: '/budget-guide',
                image:
                  'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Where to Stay',
                description: 'Find accommodation near training camps',
                link: '/accommodation',
                image:
                  'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
