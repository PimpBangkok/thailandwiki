import { Ship, Anchor, Users, Calendar, CheckCircle2, DollarSign, Waves, Wind, Zap, Star, MapPin, Clock, Navigation, AlertCircle, Gift, FileText, Sun, Cloud, CloudRain, Shirt, Camera, Lightbulb, Heart, Briefcase, HelpCircle } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import RelatedGuides from '../components/RelatedGuides';
import YouMayAlsoLike from '../components/YouMayAlsoLike';
import { usePageMeta } from '../hooks/usePageMeta';

export function YachtCharterPage() {
  usePageMeta({
    title: 'Luxury Yacht Charters in Thailand 2026: Phuket, Phi Phi & Islands',
    description:
      'Complete guide to yacht charters in Thailand. Motor yachts, catamarans, traditional junks from $400/day. Explore Phuket, Phi Phi, Phang Nga Bay with pricing and itineraries.',
  });

  const yachtTypes = [
    {
      name: 'Motor Yachts',
      icon: Zap,
      badge: 'Most Popular',
      size: '40-120 feet',
      speed: '12-25 knots',
      capacity: '8-12 guests (day), 4-10 overnight',
      bestFor: 'Covering distance, island hopping, luxury amenities',
      image: 'https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=1200',
      advantages: [
        'Fast (more destinations per day)',
        'Spacious interior',
        'Stable in waves',
        'Air conditioning throughout',
        'Luxury finishes',
      ],
      disadvantages: [
        'Higher fuel costs (built into price)',
        'Less eco-friendly than sailing',
        'Engine noise (though modern yachts quiet)',
      ],
      prices: [
        { type: 'Day charter 50-60ft', price: '$800-1,500' },
        { type: 'Day charter 70-80ft', price: '$1,800-3,500' },
        { type: 'Overnight 60-70ft', price: '$3,000-6,000 per night' },
        { type: 'Superyacht 100ft+', price: '$10,000-50,000+ per night' },
      ],
    },
    {
      name: 'Sailing Catamarans',
      icon: Wind,
      badge: 'Eco-Friendly',
      size: '38-60 feet',
      speed: '6-10 knots under sail, 8-12 under motor',
      capacity: '8-10 guests day, 4-8 overnight',
      bestFor: 'Relaxed sailing, stability, eco-conscious travelers',
      image: 'https://images.pexels.com/photos/1532542/pexels-photo-1532542.jpeg?auto=compress&cs=tinysrgb&w=1200',
      advantages: [
        'Very stable (two hulls, less seasickness)',
        'Spacious deck and interior',
        'Silent when sailing (no engine)',
        'Shallow draft (access shallow bays)',
        'Eco-friendly',
        'Good for families (stable platform)',
      ],
      disadvantages: [
        'Slower than motor yachts',
        'Wind-dependent for sailing',
        'Less luxurious than high-end motor yachts',
      ],
      prices: [
        { type: 'Day charter 40-45ft', price: '$700-1,200' },
        { type: 'Day charter 50-60ft', price: '$1,200-2,200' },
        { type: 'Overnight 45-50ft', price: '$2,500-4,500 per night' },
      ],
    },
    {
      name: 'Traditional Thai Junks',
      icon: Ship,
      badge: 'Unique Experience',
      size: '60-90 feet',
      speed: 'Moderate',
      capacity: '8-12 guests day, 6-10 overnight',
      bestFor: 'Phang Nga Bay, cultural experience, photography',
      image: 'https://images.pexels.com/photos/753619/pexels-photo-753619.jpeg?auto=compress&cs=tinysrgb&w=1200',
      advantages: [
        'Stunning aesthetic (red sails, teak wood)',
        'Photogenic (Instagram-worthy)',
        'Spacious decks',
        'Cultural experience',
        'Comfortable cabins despite traditional exterior',
      ],
      disadvantages: [
        'Slower than modern yachts',
        'Less advanced water toys',
        'Limited availability',
      ],
      prices: [
        { type: 'Day charter', price: '$1,000-1,800' },
        { type: 'Overnight', price: '$3,500-6,000 per night' },
      ],
    },
    {
      name: 'Speedboats',
      icon: Waves,
      badge: 'Budget Option',
      size: '30-38 feet',
      speed: '20-30 knots',
      capacity: '8-12 guests day only',
      bestFor: 'Quick day trips, budget-conscious, short distances',
      image: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=1200',
      advantages: [
        'Most affordable option',
        'Very fast',
        'Access shallow areas',
        'Good for short trips',
      ],
      disadvantages: [
        'No cabins (day charter only)',
        'Basic amenities',
        'Rougher ride in waves',
        'Less comfortable for full day',
      ],
      prices: [
        { type: 'Day charter', price: '$400-900' },
      ],
    },
    {
      name: 'Superyachts',
      icon: Star,
      badge: 'Ultra-Luxury',
      size: '100-200+ feet',
      speed: 'Variable',
      capacity: '10-20+ guests',
      bestFor: 'Corporate events, special celebrations, ultimate luxury',
      image: 'https://images.pexels.com/photos/2245436/pexels-photo-2245436.jpeg?auto=compress&cs=tinysrgb&w=1200',
      advantages: [
        'Multiple decks',
        'Jacuzzi on deck',
        'Cinema room',
        'Gym facilities',
        'Helicopter pad (mega yachts)',
        'Professional crew of 10+',
      ],
      disadvantages: [
        'Very expensive',
        'Advanced booking required',
        'Limited availability',
      ],
      prices: [
        { type: 'Per night', price: '$15,000-100,000+' },
      ],
    },
  ];

  const benefits = [
    {
      title: 'Exclusive Access',
      icon: Anchor,
      items: [
        'Visit uninhabited islands closed to day-trippers',
        'Anchor in secluded bays away from crowds',
        'Flexible itinerary (change plans based on weather or preferences)',
        'Skip crowded ferries and longtail boats',
        'Beach your yacht on pristine sand',
        'Dive and snorkel at best sites without crowds',
      ],
    },
    {
      title: 'Luxury & Comfort',
      icon: Star,
      items: [
        'Spacious cabins with ensuite bathrooms',
        'Professional crew (captain, chef, steward/ess)',
        'Gourmet meals prepared onboard',
        'Water toys (jet skis, kayaks, SUPs, snorkel gear)',
        'Air conditioning and modern amenities',
        'Entertainment systems',
      ],
    },
    {
      title: 'Value for Groups',
      icon: Users,
      items: [
        'Cost per person reasonable for 6-12 people',
        'More affordable than multiple hotel rooms for large groups',
        'All meals included (vs expensive island restaurants)',
        'Transportation included',
        'Activities included (vs paying per person)',
      ],
    },
    {
      title: 'Freedom & Privacy',
      icon: Ship,
      items: [
        'Your own private floating villa',
        'No fixed meal times or schedules',
        'Swim whenever you want',
        'Privacy for families or couples',
        'Professional crew but still intimate',
        'Celebrate special occasions uniquely',
      ],
    },
  ];

  const destinations = [
    {
      name: 'Phuket',
      badge: 'Primary Charter Base',
      description: 'Largest charter fleet in Thailand with access to all major Andaman Sea destinations',
      image: 'https://images.pexels.com/photos/3566187/pexels-photo-3566187.jpeg?auto=compress&cs=tinysrgb&w=1200',
      whyChoose: [
        'Largest charter fleet in Thailand (100+ yachts available)',
        'Best infrastructure (marinas, provisioning, crew services)',
        'Access to best Andaman Sea destinations',
        'Year-round charters (though November-April peak)',
        'Easy flights from Bangkok and international destinations',
        'Full-service yacht brokers and agencies',
      ],
      reachable: [
        'Phi Phi Islands (2 hours by motor yacht)',
        'Phang Nga Bay and James Bond Island (1 hour)',
        'Similan Islands (4-5 hours or overnight position)',
        'Racha Islands (1 hour - great snorkeling and diving)',
        'Coral Island (30 minutes)',
        'Krabi and Railay Beach (2 hours)',
      ],
      marinas: [
        'Royal Phuket Marina: Luxury marina, high-end yachts, great restaurants',
        'Ao Po Grand Marina: Northeast Phuket, close to Phang Nga Bay',
        'Yacht Haven Marina: East coast, protected anchorage',
        'Chalong Bay: South Phuket, most yacht operators',
      ],
    },
    {
      name: 'Phang Nga Bay',
      badge: 'Day Trip from Phuket',
      description: 'Dramatic limestone karsts, sea caves, and protected waters perfect for all weather conditions',
      image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1200',
      highlights: [
        'Dramatic limestone karsts rising from emerald water',
        'James Bond Island (Khao Phing Kan) - iconic location',
        'Sea caves and lagoons (hong) - kayak exploration',
        'Fishing villages on stilts',
        'Calm, protected waters (ideal for all weather)',
      ],
      itinerary: {
        title: 'Full Day (8 hours)',
        schedule: [
          'Depart Phuket 9:00 AM',
          'Cruise to James Bond Island (1 hour)',
          'Kayak through sea caves and hongs',
          'Visit Panyi fishing village (lunch)',
          'Explore hidden lagoons',
          'Swimming and relaxation',
          'Return 5:00 PM',
        ],
      },
      cost: '$1,000-2,000 for day charter',
      tips: [
        'Very popular (expect other boats at James Bond Island)',
        'Best early morning or late afternoon to avoid crowds',
        'Calm waters (good for families and first-time boaters)',
        'Great photography opportunities',
      ],
    },
    {
      name: 'Phi Phi Islands',
      badge: 'Overnight Recommended',
      description: 'Stunning cliffs, Maya Bay, and pristine beaches made famous by The Beach movie',
      image: 'https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=1200',
      highlights: [
        'Maya Bay (The Beach movie location - reopened with limits)',
        'Phi Phi Leh (uninhabited, stunning cliffs)',
        'Phi Phi Don (main island with restaurants and nightlife)',
        'Viking Cave (swallow nests, dramatic cliffs)',
        'Bamboo Island (pristine beach)',
        'Mosquito Island (excellent snorkeling)',
      ],
      itinerary: {
        title: 'Full Day from Phuket (8-10 hours)',
        schedule: [
          'Depart 8:00 AM (2 hour cruise)',
          'Morning snorkel at Mosquito Island',
          'Lunch anchor off Phi Phi Don',
          'Afternoon at Maya Bay (early entry best)',
          'Cruise around Phi Phi Leh cliffs',
          'Return to Phuket 6:00 PM',
        ],
      },
      overnight: {
        title: '2-Day Overnight Charter',
        days: [
          'Day 1: Phuket to Phi Phi, explore Phi Phi Leh, anchor overnight',
          'Day 2: Maya Bay at sunrise (magical!), Bamboo Island, return to Phuket',
        ],
      },
      cost: 'Day charter: $1,500-3,000 | Overnight: $4,000-7,000',
      tips: [
        'Maya Bay limited to 300 visitors daily (advance booking recommended)',
        'Can be choppy between Phuket and Phi Phi (November-April calmer)',
        'Overnight anchorage available (peaceful night at sea)',
        'Charter overnight to enjoy empty beaches at dawn',
      ],
    },
    {
      name: 'Similan Islands',
      badge: 'Multi-Day Required',
      description: 'Nine pristine islands offering Thailand\'s premier diving and snorkeling experiences',
      image: 'https://images.pexels.com/photos/3601426/pexels-photo-3601426.jpeg?auto=compress&cs=tinysrgb&w=1200',
      highlights: [
        'Nine pristine islands (Thailand\'s premier diving destination)',
        'Crystal clear water (30+ meter visibility)',
        'World-class snorkeling and diving',
        'Uninhabited islands (pure nature)',
        'White sand beaches and granite boulders',
        'Marine life: Turtles, reef sharks, manta rays (seasonal)',
      ],
      itinerary: {
        title: '3-Day / 2-Night Charter',
        schedule: [
          'Day 1: Phuket to Similans (4-5 hours), snorkel Island 4 and 5, anchor overnight',
          'Day 2: Dive/snorkel Islands 7-9, sail rock viewpoint, explore beaches, anchor overnight',
          'Day 3: Morning snorkel, cruise back to Phuket',
        ],
      },
      extended: '4-Day / 3-Night: Extend north to Surin Islands (Richelieu Rock - best diving in Thailand)',
      cost: '$8,000-15,000 for 3D/2N charter',
      tips: [
        'National Park: Open October 15 - May 15 only (closed monsoon season)',
        'Park entry fee: 500 THB per person (not included in charter price)',
        '80km from Phuket (4-5 hour cruise, overnight positioning recommended)',
        'Limited amenities (no shops, restaurants - yacht is your base)',
        'Worth it for pristine nature and diving/snorkeling',
      ],
    },
    {
      name: 'Koh Samui & Gulf of Thailand',
      badge: 'Calmer Waters',
      description: 'Access to Ang Thong Marine Park with more stable weather year-round',
      image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1200',
      whyChoose: [
        'Access to Ang Thong National Marine Park',
        'Calmer Gulf of Thailand waters (vs Andaman Sea)',
        'Less developed islands',
        'Year-round charters (more stable weather than Phuket)',
        'Good for families and those prone to seasickness',
      ],
      reachable: [
        'Ang Thong Marine Park (2 hours) - 42 island archipelago',
        'Koh Tao (3 hours) - diving destination',
        'Koh Phangan (1 hour) - beaches and parties',
      ],
      itinerary: {
        title: 'Full Day to Ang Thong',
        schedule: [
          'Depart 9:00 AM',
          'Cruise to Emerald Lagoon (kayaking)',
          'Snorkel pristine reefs',
          'Lunch on yacht',
          'Beach time on secluded island',
          'Viewpoint hike (optional)',
          'Return 5:00 PM',
        ],
      },
      cost: '$800-1,800 for day charter',
      tips: [
        'Smaller charter fleet than Phuket (fewer yacht options)',
        'Calmer water (better for families with young kids)',
        'Less dramatic scenery than Andaman (but still beautiful)',
        'More affordable than Phuket charters (15-20% cheaper)',
      ],
    },
  ];

  const pricingCategories = [
    {
      title: 'Day Charters (8-10 Hours)',
      options: [
        {
          name: 'Speedboat',
          size: '30-38ft',
          price: '$400-900',
          capacity: '8-12 people',
          inclusions: ['Captain included', 'Fuel included', 'Snorkel gear included', 'Usually lunch NOT included'],
          bestFor: 'Budget day trips',
        },
        {
          name: 'Small Motor Yacht',
          size: '45-55ft',
          price: '$1,000-1,800',
          capacity: '6-8 people',
          inclusions: ['Captain and deckhand', 'Fuel included', 'Water toys (kayaks, SUPs, snorkel gear)', 'Lunch included', 'Beer, wine, soft drinks'],
          bestFor: 'Comfortable day charter',
        },
        {
          name: 'Mid-Size Motor Yacht',
          size: '60-75ft',
          price: '$1,800-3,500',
          capacity: '8-12 people',
          inclusions: ['Full crew (captain, deckhand, chef, steward)', 'Gourmet meals', 'Premium alcohol', 'More water toys', 'Air-conditioned interior'],
          bestFor: 'Luxury day experience',
        },
        {
          name: 'Large Motor Yacht',
          size: '80-100ft',
          price: '$4,000-8,000',
          capacity: '10-15 people',
          inclusions: ['Full professional crew (4-6 staff)', 'Jet skis, diving compressor', 'Open bar premium brands', 'Multi-course gourmet meals'],
          bestFor: 'Corporate events, special occasions',
        },
      ],
    },
    {
      title: 'Overnight Charters (Per Night)',
      options: [
        {
          name: 'Sailing Catamaran',
          size: '45-50ft',
          price: '$2,500-4,500',
          capacity: '6-8 guests',
          inclusions: ['Captain and chef/steward', '3 meals per day', 'Beer and wine', 'Water toys', '3-4 cabins'],
          bestFor: 'Relaxed sailing, families, eco-conscious',
        },
        {
          name: 'Motor Yacht',
          size: '60-70ft',
          price: '$4,000-7,000',
          capacity: '6-10 guests',
          inclusions: ['Full crew (4 staff)', 'All meals and beverages', 'Water toys', '3-4 cabins'],
          bestFor: 'Comfort and speed',
        },
        {
          name: 'Luxury Motor Yacht',
          size: '80-100ft',
          price: '$8,000-15,000',
          capacity: '8-12 guests',
          inclusions: ['Professional crew (4-6 staff)', 'Premium provisioning', 'Extensive water toys', '4-5 cabins'],
          bestFor: 'Ultimate luxury',
        },
        {
          name: 'Superyacht',
          size: '100ft+',
          price: '$15,000-100,000+',
          capacity: '10-20+ guests',
          inclusions: ['Full crew (8-15 staff)', 'Everything imaginable', 'Custom itineraries', '5-8 cabins'],
          bestFor: 'Ultra luxury, corporate, celebrity',
        },
      ],
    },
  ];

  const standardInclusions = [
    'Yacht and all its equipment',
    'Professional crew (varies by yacht size)',
    'Fuel for standard itinerary',
    'Meals (chef-prepared)',
    'Soft drinks, water',
    'Beer and house wine (usually)',
    'Snorkel equipment',
    'Kayaks and SUPs',
    'Fishing equipment (basic)',
    'Bed linens and towels',
  ];

  const notIncluded = [
    'National park entry fees (Similan: 500 THB per person)',
    'Premium alcohol (can be pre-stocked for fee)',
    'Diving equipment and air fills (can arrange)',
    'Crew gratuity (10-15% customary)',
    'Marina fees (if docking at marinas)',
    'Transfers to/from yacht (can arrange)',
  ];

  const additionalCosts = [
    {
      item: 'Crew Gratuity',
      cost: '10-15% of charter fee',
      note: 'Not mandatory but strongly expected for good service. Cash preferred.',
    },
    {
      item: 'National Park Fees',
      cost: 'Similan: 500 THB, Ang Thong: 300 THB per person',
      note: 'Required for national park visits',
    },
    {
      item: 'Premium Spirits',
      cost: '$50-300',
      note: 'Champagne and top-shelf alcohol',
    },
    {
      item: 'Scuba Diving',
      cost: '$100-150 per person per dive',
      note: 'With instructor and equipment',
    },
    {
      item: 'Jet Ski Rental',
      cost: '$150-300 per day',
      note: 'If not included with yacht',
    },
    {
      item: 'Professional Photographer',
      cost: '$500-1,500 per day',
      note: 'For special occasions',
    },
  ];

  const sampleItineraries = [
    {
      title: 'Budget-Friendly: Phang Nga Bay Day Trip',
      badge: 'Best Value',
      yacht: '50ft motor yacht',
      duration: '8 hours',
      guests: '8 people',
      totalCost: '$1,200',
      perPerson: '$150',
      image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800',
      schedule: [
        '9:00 AM: Depart Phuket',
        '10:00 AM: Arrive James Bond Island, photos',
        '11:00 AM: Kayak through sea caves',
        '12:30 PM: Lunch at Panyi floating village',
        '2:00 PM: Explore hidden lagoons',
        '3:30 PM: Swimming stop at secluded beach',
        '5:00 PM: Return to Phuket',
      ],
      included: ['Yacht, crew, fuel, lunch, drinks, kayaks'],
      notIncluded: ['Gratuity ($120-180 suggested)'],
    },
    {
      title: 'Mid-Range: Phi Phi Islands Overnight',
      badge: 'Most Popular',
      yacht: '65ft motor yacht',
      duration: '2 days / 1 night',
      guests: '8 people',
      totalCost: '$5,500',
      perPerson: '$687',
      image: 'https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=800',
      schedule: [
        'Day 1: 8:00 AM - Depart Phuket',
        '10:00 AM: Arrive Phi Phi, snorkel Mosquito Island',
        '12:00 PM: Lunch onboard',
        '2:00 PM: Explore Phi Phi Leh and Viking Cave',
        '4:00 PM: Maya Bay visit',
        '6:00 PM: Anchor in secluded bay, sunset drinks',
        '7:00 PM: Dinner onboard, stargazing',
        'Day 2: 7:00 AM - Maya Bay at sunrise',
        '9:00 AM: Breakfast onboard',
        '10:00 AM: Bamboo Island beach time',
        '12:00 PM: Lunch while cruising back',
        '2:00 PM: Arrive Phuket',
      ],
      included: ['Yacht, crew, fuel, all meals, drinks, toys'],
      notIncluded: ['Gratuity ($550-825)', 'Park fees ($100 for 8 people)'],
    },
    {
      title: 'Luxury: 3-Day Similan Islands Expedition',
      badge: 'Ultimate Experience',
      yacht: '75ft luxury motor yacht with jet skis',
      duration: '3 days / 2 nights',
      guests: '8 people',
      totalCost: '$12,000',
      perPerson: '$1,500',
      image: 'https://images.pexels.com/photos/3601426/pexels-photo-3601426.jpeg?auto=compress&cs=tinysrgb&w=800',
      schedule: [
        'Day 1: 8:00 AM - Depart Phuket',
        '12:30 PM: Arrive Similans, lunch onboard',
        '2:00 PM: Snorkel Island 4 (pristine coral)',
        '4:00 PM: Beach time Island 5',
        '7:00 PM: Gourmet dinner under stars',
        'Evening: Night swimming, bioluminescence',
        'Day 2: All-day diving and snorkeling Islands 7-9',
        'Sail Rock viewpoint hike, jet ski time',
        'Day 3: 6:00 AM - Sunrise snorkel (best visibility)',
        '9:00 AM: Begin cruise back to Phuket',
        '2:00 PM: Arrive Phuket',
      ],
      included: ['Luxury yacht, 5-star crew (4 staff)', 'All gourmet meals, premium alcohol', 'Jet skis, diving equipment, water toys'],
      notIncluded: ['Gratuity ($1,200-1,800)', 'Park fees ($4,000 for 8 people x 3 days)'],
    },
  ];

  const bookingSteps = [
    {
      step: 1,
      title: 'Choose Your Dates and Destination',
      details: [
        'High season (Nov-Apr): Book 2-4 months advance',
        'Low season (May-Oct): Book 1-2 months advance',
        'Peak weeks (Christmas, New Year): Book 6+ months ahead',
      ],
    },
    {
      step: 2,
      title: 'Determine Budget and Group Size',
      details: [
        'Count total guests (day vs overnight capacity)',
        'Set realistic budget (see pricing section)',
        'Consider whether day charter sufficient or overnight better',
      ],
    },
    {
      step: 3,
      title: 'Contact Yacht Brokers or Direct Operators',
      details: [
        'Phuket: Asia Yacht Charters, Phuket Yacht Charter, Sunbird Sailing',
        'Koh Samui: Samui Boat Charter, Blue Stars Samui',
      ],
    },
    {
      step: 4,
      title: 'Review Options and Get Quotes',
      details: [
        'Ask what is included (meals, drinks, fuel, toys)',
        'Ask what is NOT included (park fees, gratuity)',
        'Check crew experience and yacht condition',
        'Review cancellation policy',
        'Request photos/videos of actual yacht',
      ],
    },
    {
      step: 5,
      title: 'Review Contract and Terms',
      details: [
        'Confirm exact yacht (not "similar yacht")',
        'Total price breakdown',
        'Payment schedule (usually 50% deposit)',
        'Cancellation and weather policies',
        'Insurance coverage',
      ],
    },
    {
      step: 6,
      title: 'Pay Deposit',
      details: [
        'Credit card (3-5% fee) or bank transfer',
        'Deposit typically 50% of total',
        'Get confirmation email with yacht details',
      ],
    },
    {
      step: 7,
      title: 'Pre-Charter Planning',
      details: [
        '2-3 weeks before: Finalize guest list, discuss menu',
        '1 week before: Pay balance, confirm pickup',
        'Day before: Confirm weather, pack appropriately',
      ],
    },
  ];

  const seasons = [
    {
      name: 'High Season',
      months: 'November - April',
      icon: Sun,
      weather: 'Sunny, dry, calm seas, 25-32°C',
      visibility: 'Best (20-40m visibility)',
      color: 'green',
      advantages: [
        'Perfect weather (95% chance sunshine)',
        'Calm seas (safe and comfortable)',
        'Best diving/snorkeling conditions',
        'All destinations accessible',
        'Similan Islands open (Oct 15 - May 15 only)',
      ],
      disadvantages: [
        'Most expensive (peak pricing)',
        'Busy (other boats at popular sites)',
        'Book far in advance (yachts fill up)',
        'Accommodations onshore more expensive',
      ],
      bestMonths: 'December - February (coolest) or November (less crowded)',
    },
    {
      name: 'Shoulder Season',
      months: 'May and October',
      icon: Cloud,
      weather: 'Mix of sun and rain, 28-33°C',
      visibility: 'Good (15-30m)',
      color: 'amber',
      advantages: [
        '20-30% cheaper than high season',
        'Much less crowded',
        'Still good weather (60-70% sunshine)',
        'Flexible last-minute booking possible',
      ],
      disadvantages: [
        'Similan Islands closed (May 16 - Oct 14)',
        'Occasional rain squalls',
        'Some rough sea days',
      ],
      bestMonths: 'Good for budget-conscious travelers willing to risk occasional rain',
    },
    {
      name: 'Low Season / Monsoon',
      months: 'June - September',
      icon: CloudRain,
      weather: 'Rainy, windy, rough seas, 27-31°C',
      visibility: 'Reduced (10-20m, murky)',
      color: 'gray',
      advantages: [
        'Cheapest rates (40-50% discount)',
        'Empty islands and beaches',
        'Lush, green scenery',
      ],
      disadvantages: [
        'Frequent rain and storms',
        'Rough seas (seasickness likely)',
        'Many operators suspend operations',
        'Limited yacht availability',
        'Some destinations unsafe/inaccessible',
        'Poor visibility for snorkeling',
      ],
      bestMonths: 'Only for flexible dates who can wait for weather windows',
    },
  ];

  const whatToBring = {
    clothing: {
      essential: [
        'Swimsuits (bring 2-3, one always wet)',
        'Lightweight beach cover-up or sarong',
        'Shorts and t-shirts',
        'Sun hat or cap',
        'Sunglasses (polarized recommended)',
        'Light rain jacket',
        'Flip-flops or sandals',
      ],
      evening: [
        'Light long pants and long-sleeve shirt',
        'Comfortable casual dinner attire',
        'Light sweater or hoodie (AC in cabins)',
      ],
      doNotBring: [
        'Hard-sole shoes (damage teak decks)',
        'Excessive luggage (soft bags only)',
        'Red wine (can stain yacht)',
        'Spray sunscreen (slippery on decks)',
      ],
    },
    gear: {
      recommended: [
        'Reef-safe sunscreen (regular sunscreen kills coral)',
        'Underwater camera or GoPro',
        'Waterproof phone case',
        'Snorkel mask if you have your own',
        'Motion sickness medication if prone',
        'Power bank (keep devices charged)',
      ],
      optional: [
        'Kindle or book',
        'Playing cards or games',
        'Portable speaker',
        'Binoculars (wildlife spotting)',
      ],
    },
    documents: [
      'Passport or ID',
      'Booking confirmation',
      'Travel insurance papers',
      'Credit card for any extras',
      'Cash for gratuities (US$ or Thai baht)',
    ],
  };

  const insiderTips = {
    booking: [
      'Book directly with operators (10-15% cheaper than through hotels)',
      'Avoid low-price touts on beach (scams or unsafe boats)',
      'Read reviews on TripAdvisor and Google (recent reviews)',
      'Ask to see actual yacht photos, not stock images',
      'Confirm exact yacht (not "similar" yacht)',
      'Check yacht age (newer than 10 years preferred)',
      'Verify crew credentials (captain should have yacht master certificate)',
    ],
    itinerary: [
      'Discuss with captain day before (they know weather and conditions)',
      'Be flexible (weather can change plans)',
      'Allow slack time (rushing reduces enjoyment)',
      'Prioritize 2-3 must-see spots, rest flexible',
      'Early starts better (avoid crowds, better light, calmer seas)',
      'Sunset cruises romantic but rushed for full day itineraries',
    ],
    onboard: [
      'Remove shoes before boarding (yacht etiquette)',
      'Apply sunscreen before boarding (slippery if applied on deck)',
      'Stay hydrated (drink water throughout day)',
      'Limit alcohol in hot sun (dehydration and seasickness risk)',
      'Listen to crew safety briefings (important)',
      'Ask crew for anything (they are there to help)',
      'Be respectful of yacht (it is someone\'s expensive vessel)',
    ],
    seasickness: [
      'Take medication 1 hour before boarding (Dramamine, ginger)',
      'Stay hydrated',
      'Stay on deck (fresh air helps)',
      'Focus on horizon (avoid reading or screens if feeling ill)',
      'Ginger candies or tea help',
      'Choose catamaran if very prone (most stable)',
      'Middle of boat most stable (avoid bow and stern)',
    ],
    tipping: [
      'Standard: 10% of charter fee for acceptable service',
      'Good service: 15% of charter fee',
      'Exceptional service: 20% of charter fee',
      'Cash preferred (US dollars or Thai baht)',
      'Give to captain who distributes among crew',
      'Tip at end of charter',
    ],
  };

  const familyFriendly = {
    bestYachts: [
      'Catamarans: Most stable, spacious, shallow swim platform',
      'Motor Yachts 60ft+: Multiple cabins, air conditioning, comfortable',
      'Traditional Junks: Spacious decks, safe railings, unique experience',
    ],
    destinations: [
      'Phang Nga Bay: Calm water, kayaking, interesting caves',
      'Coral Island: Easy snorkeling, shallow beach',
      'Racha Islands: Protected bays, good snorkeling',
      'Ang Thong Marine Park: Calm gulf waters, family-friendly',
    ],
    activities: [
      'Kayaking (simple and fun)',
      'Stand-up paddleboarding',
      'Swimming from yacht',
      'Snorkeling (if comfortable in water)',
      'Feeding fish',
      'Spotting dolphins',
      'Steering yacht with captain (supervised)',
      'Fishing',
    ],
    safety: [
      'Life jackets mandatory (crew provides)',
      'Supervise children on deck always',
      'Designate adult to watch younger kids in water',
      'Swim noodles and floaties available usually',
      'Brief kids on safety rules before departure',
    ],
    ageConsiderations: [
      'Infants: Challenging (sun, no shade for naps, schedule disruption)',
      'Toddlers 2-4: Possible but require constant supervision',
      'Kids 5-10: Great age (enjoy activities, still excited by experience)',
      'Teens: Love it (water sports, freedom, Instagram photos)',
    ],
  };

  const corporateEvents = {
    perfectFor: [
      'Team building events',
      'Client entertainment',
      'Corporate retreats',
      'Incentive rewards',
      'Networking events',
      'Product launches',
    ],
    services: [
      'AV equipment rental (projector, screen, microphone)',
      'Photographer/videographer',
      'Catering upgrades',
      'Branding (company logos on towels, napkins, banners)',
      'Entertainment (DJ, live music)',
    ],
    privateEvents: [
      'Weddings and vow renewals ($5,000-20,000)',
      'Proposals ($1,500-4,000)',
      'Birthdays and anniversaries',
      'Bachelor/bachelorette parties',
      'Graduation celebrations',
    ],
  };

  const faqs = [
    {
      question: 'Do I need sailing experience to charter a yacht?',
      answer: 'No! All yachts come with professional crew. Crewed charters mean the captain and crew handle everything. You just relax and enjoy. Bareboat charters (you sail yourself) are available but require sailing certification and experience.',
    },
    {
      question: 'Can we change the itinerary during the charter?',
      answer: 'Yes, very flexible! Weather, preferences, and spontaneous decisions are all fine. Captain will advise what is safe and feasible. Part of the charter luxury is flexibility.',
    },
    {
      question: 'What if the weather is bad?',
      answer: 'Captain makes final decision on safety. If too dangerous to sail, charter is typically rescheduled or refunded. If marginally rough but safe, captain may suggest alternative destinations or routes. In high season, bad weather extremely rare.',
    },
    {
      question: 'Is seasickness common?',
      answer: 'On calm days (high season in Andaman): Rare, maybe 5-10% of people feel slightly queasy. On moderately rough days: 30-40% may feel unwell. Prevention: Medication, stay hydrated, catamaran (most stable), avoid low season.',
    },
    {
      question: 'Can we bring our own food and drinks?',
      answer: 'Usually NO on full-service charters (meals included, insurance issues). Speedboat day charters may allow it. Always ask first. You can request specific foods or drinks to be stocked.',
    },
    {
      question: 'Are kids allowed? What age?',
      answer: 'Yes! No age minimum. Infants possible but challenging. 5+ years old ideal age. Life jackets provided. Supervision required. Some yachts charge per person including kids, others free for young children.',
    },
    {
      question: 'Can we scuba dive from the yacht?',
      answer: 'Yes, if you are certified divers. Notify in advance. Diving equipment and air fills extra cost ($50-80 per person per dive). Dive instructor can be arranged. Most charters include snorkeling gear but not scuba gear.',
    },
    {
      question: 'Is it safe?',
      answer: 'Very safe with licensed operators. All yachts have safety equipment (life jackets, life rafts, first aid, radio). Crew trained in safety procedures. Choose licensed operators with insurance. Check reviews. Avoid unlicensed beach touts.',
    },
    {
      question: 'How many people can we bring?',
      answer: 'Day charters: Usually 10-12 guests maximum (sometimes up to 20 on large yachts). Overnight: Cabin count determines (typically 4-10 guests comfortably). Overcrowding makes experience less enjoyable - do not exceed limits.',
    },
    {
      question: 'Can we fish from the yacht?',
      answer: 'Yes! Most yachts have basic fishing gear. If serious fishing is priority, book fishing charter specifically (different equipment). Crew can help with fishing. Any catch can be cooked onboard by chef.',
    },
    {
      question: 'Do we tip the crew?',
      answer: 'Yes, expected. 10-15% of charter fee is standard. Give cash to captain at end. They distribute among crew. Optional but strongly recommended for good service.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[500px] bg-gradient-to-br from-blue-900 via-cyan-800 to-[#2B5D8C]">
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-40"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1582485/pexels-photo-1582485.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-4 tracking-tight">
              Luxury Yacht Charters in Thailand 2026
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-6">
              Explore Phuket, Phi Phi, Phang Nga Bay, and Andaman Islands aboard private luxury yachts
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg">
                <div className="flex items-center">
                  <Ship className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">From $400/day</span>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg">
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">All yacht types</span>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg">
                <div className="flex items-center">
                  <Anchor className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">Private charters</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb />

        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            <section id="overview">
              <div className="bg-white rounded-lg shadow-md p-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Thailand's Andaman Sea offers world-class yacht charter experiences with crystal waters, dramatic limestone karsts, secluded beaches, and vibrant marine life. From day charters exploring Phi Phi Islands to week-long adventures through the Similan and Surin archipelagos, luxury yacht rentals provide the ultimate way to experience Thailand's islands in privacy and comfort.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This comprehensive guide covers yacht charter options in Phuket, Koh Samui, Phang Nga Bay, and surrounding regions, including motor yachts, sailing catamarans, traditional Thai junks, and superyachts. Whether planning a romantic getaway, family vacation, corporate event, or diving expedition, we detail pricing, itineraries, what is included, booking process, best seasons, and insider tips.
                </p>
              </div>
            </section>

            <section id="why-charter">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-[#2B5D8C] pb-3">
                Why Charter a Yacht in Thailand
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <benefit.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {benefit.items.map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section id="yacht-types">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-[#2B5D8C] pb-3">
                Types of Yachts Available
              </h2>

              <div className="space-y-8">
                {yachtTypes.map((yacht, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative h-64">
                      <img
                        src={yacht.image}
                        alt={yacht.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-[#2B5D8C] text-white px-3 py-1 rounded-full shadow-md">
                        <span className="text-sm font-bold">{yacht.badge}</span>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 p-3 rounded-lg mr-4">
                          <yacht.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{yacht.name}</h3>
                          <p className="text-sm text-gray-600">{yacht.bestFor}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="text-xs text-gray-600 mb-1">Size</p>
                          <p className="text-sm font-bold text-gray-900">{yacht.size}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 mb-1">Speed</p>
                          <p className="text-sm font-bold text-gray-900">{yacht.speed}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 mb-1">Capacity</p>
                          <p className="text-sm font-bold text-gray-900">{yacht.capacity}</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                            <CheckCircle2 className="w-5 h-5 text-green-600 mr-2" />
                            Advantages
                          </h4>
                          <ul className="space-y-2">
                            {yacht.advantages.map((adv, i) => (
                              <li key={i} className="text-sm text-gray-700 pl-7">
                                {adv}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                            <span className="w-5 h-5 mr-2 text-amber-600">⚠</span>
                            Disadvantages
                          </h4>
                          <ul className="space-y-2">
                            {yacht.disadvantages.map((dis, i) => (
                              <li key={i} className="text-sm text-gray-700 pl-7">
                                {dis}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                          <DollarSign className="w-5 h-5 text-blue-600 mr-2" />
                          Price Range
                        </h4>
                        <div className="space-y-2">
                          {yacht.prices.map((price, i) => (
                            <div key={i} className="flex justify-between items-center text-sm">
                              <span className="text-gray-700">{price.type}</span>
                              <span className="font-bold text-gray-900">{price.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="destinations">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-[#2B5D8C] pb-3">
                Top Yacht Charter Destinations
              </h2>

              <div className="space-y-8">
                {destinations.map((destination, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative h-64">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-[#2B5D8C] text-white px-3 py-1 rounded-full shadow-md">
                        <span className="text-sm font-bold">{destination.badge}</span>
                      </div>
                      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold">{destination.name}</h3>
                      </div>
                    </div>

                    <div className="p-8">
                      <p className="text-gray-700 mb-6">{destination.description}</p>

                      {destination.whyChoose && (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                            <Star className="w-5 h-5 text-amber-600 mr-2" />
                            Why Choose {destination.name}
                          </h4>
                          <ul className="space-y-2">
                            {destination.whyChoose.map((reason, i) => (
                              <li key={i} className="flex items-start text-sm text-gray-700">
                                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>{reason}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {destination.highlights && (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                            <Anchor className="w-5 h-5 text-blue-600 mr-2" />
                            Highlights
                          </h4>
                          <ul className="space-y-2">
                            {destination.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-start text-sm text-gray-700">
                                <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {destination.reachable && (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                            <Navigation className="w-5 h-5 text-[#2B5D8C] mr-2" />
                            From {destination.name} You Can Reach
                          </h4>
                          <div className="grid md:grid-cols-2 gap-2">
                            {destination.reachable.map((place, i) => (
                              <div key={i} className="flex items-start text-sm text-gray-700">
                                <MapPin className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                                <span>{place}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {destination.marinas && (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                            <Anchor className="w-5 h-5 text-cyan-600 mr-2" />
                            Best Marinas in {destination.name}
                          </h4>
                          <ul className="space-y-2">
                            {destination.marinas.map((marina, i) => (
                              <li key={i} className="flex items-start text-sm text-gray-700">
                                <CheckCircle2 className="w-4 h-4 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>{marina}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {destination.itinerary && (
                        <div className="mb-6 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                            <Clock className="w-5 h-5 text-blue-600 mr-2" />
                            {destination.itinerary.title}
                          </h4>
                          <ul className="space-y-2">
                            {destination.itinerary.schedule.map((item, i) => (
                              <li key={i} className="flex items-start text-sm text-gray-700">
                                <span className="text-blue-600 font-bold mr-2">{i + 1}.</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {destination.overnight && (
                        <div className="mb-6 bg-amber-50 border-l-4 border-amber-500 p-6 rounded">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">
                            {destination.overnight.title}
                          </h4>
                          <ul className="space-y-2">
                            {destination.overnight.days.map((day, i) => (
                              <li key={i} className="text-sm text-gray-700">
                                {day}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {destination.extended && (
                        <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded">
                          <p className="text-sm text-gray-700">{destination.extended}</p>
                        </div>
                      )}

                      {destination.tips && destination.tips.length > 0 && (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">What to Know</h4>
                          <ul className="space-y-2">
                            {destination.tips.map((tip, i) => (
                              <li key={i} className="flex items-start text-sm text-gray-700">
                                <span className="text-amber-600 mr-2">•</span>
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {destination.cost && (
                        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 rounded-lg">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Typical Cost:</span>
                            <span className="text-lg font-bold">{destination.cost}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="pricing">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-[#2B5D8C] pb-3">
                Pricing & What's Included
              </h2>

              {pricingCategories.map((category, catIndex) => (
                <div key={catIndex} className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.options.map((option, optIndex) => (
                      <div key={optIndex} className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-600">
                        <div className="mb-4">
                          <h4 className="text-xl font-bold text-gray-900">{option.name}</h4>
                          <p className="text-sm text-gray-600">{option.size}</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg mb-4">
                          <div className="text-3xl font-bold text-blue-600">{option.price}</div>
                          <div className="text-sm text-gray-600">{option.capacity}</div>
                        </div>
                        <div className="mb-4">
                          <p className="text-sm font-semibold text-gray-700 mb-2">Inclusions:</p>
                          <ul className="space-y-1">
                            {option.inclusions.map((inclusion, i) => (
                              <li key={i} className="flex items-start text-xs text-gray-700">
                                <CheckCircle2 className="w-3 h-3 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>{inclusion}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="border-t pt-3">
                          <p className="text-xs text-gray-600">
                            <span className="font-semibold">Best for:</span> {option.bestFor}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-green-50 border-l-4 border-green-600 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2" />
                    Standard Inclusions
                  </h4>
                  <ul className="space-y-2">
                    {standardInclusions.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-600 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-5 h-5 text-amber-600 mr-2" />
                    Usually NOT Included
                  </h4>
                  <ul className="space-y-2">
                    {notIncluded.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <span className="text-amber-600 mr-2">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <DollarSign className="w-6 h-6 text-blue-600 mr-2" />
                  Additional Costs to Consider
                </h3>
                <div className="space-y-4">
                  {additionalCosts.map((cost, i) => (
                    <div key={i} className="flex items-start pb-4 border-b border-gray-200 last:border-0">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{cost.item}</h4>
                        <p className="text-sm text-gray-600 mt-1">{cost.note}</p>
                      </div>
                      <div className="text-right ml-4">
                        <p className="font-bold text-gray-900">{cost.cost}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="itineraries">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-[#2B5D8C] pb-3">
                Sample Itineraries & Costs
              </h2>

              <div className="space-y-8">
                {sampleItineraries.map((itinerary, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative h-48">
                      <img
                        src={itinerary.image}
                        alt={itinerary.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-[#2B5D8C] to-pink-600 text-white px-4 py-2 rounded-full shadow-md">
                        <span className="text-sm font-bold">{itinerary.badge}</span>
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{itinerary.title}</h3>

                      <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="text-xs text-gray-600 mb-1">Yacht Type</p>
                          <p className="text-sm font-bold text-gray-900">{itinerary.yacht}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 mb-1">Duration</p>
                          <p className="text-sm font-bold text-gray-900">{itinerary.duration}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 mb-1">Guests</p>
                          <p className="text-sm font-bold text-gray-900">{itinerary.guests}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                          <Clock className="w-5 h-5 text-blue-600 mr-2" />
                          Itinerary
                        </h4>
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                          <ul className="space-y-2">
                            {itinerary.schedule.map((item, i) => (
                              <li key={i} className="text-sm text-gray-700">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                          <h5 className="font-semibold text-gray-900 mb-2 text-sm">Included:</h5>
                          {itinerary.included.map((item, i) => (
                            <p key={i} className="text-xs text-gray-700">{item}</p>
                          ))}
                        </div>
                        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                          <h5 className="font-semibold text-gray-900 mb-2 text-sm">Not Included:</h5>
                          {itinerary.notIncluded.map((item, i) => (
                            <p key={i} className="text-xs text-gray-700">{item}</p>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm opacity-90">Total Cost</p>
                            <p className="text-3xl font-bold">{itinerary.totalCost}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm opacity-90">Per Person</p>
                            <p className="text-3xl font-bold">{itinerary.perPerson}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-br from-cyan-600 to-blue-700 text-white rounded-lg shadow-xl p-8">
                <div className="flex items-start">
                  <Gift className="w-12 h-12 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Planning Your Charter?</h3>
                    <p className="text-blue-100 mb-4">
                      These sample itineraries provide a starting point for your yacht charter adventure. Most operators offer custom itineraries based on your preferences, group size, and interests. Contact yacht charter companies in Phuket or Koh Samui 2-3 months in advance for best availability, especially during peak season (November-April).
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Best Time to Book</h4>
                        <p className="text-sm text-blue-100">2-3 months in advance for high season, 1 month for low season</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Payment Terms</h4>
                        <p className="text-sm text-blue-100">Typically 50% deposit, balance 30 days before charter</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="booking">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-[#2B5D8C] pb-3">
                How to Book a Yacht Charter
              </h2>

              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <div className="space-y-8">
                  {bookingSteps.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                        <ul className="space-y-2">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start text-sm text-gray-700">
                              <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <FileText className="w-5 h-5 text-blue-600 mr-2" />
                  Important Questions to Ask
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Exactly what is included in the price?</li>
                    <li>• What is NOT included?</li>
                    <li>• Crew experience and qualifications?</li>
                    <li>• Yacht age and condition?</li>
                  </ul>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Cancellation policy details?</li>
                    <li>• Weather cancellation policy?</li>
                    <li>• Can we see photos of actual yacht?</li>
                    <li>• References or reviews available?</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="seasons">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-[#2B5D8C] pb-3">
                Best Times to Charter
              </h2>

              <div className="space-y-6">
                {seasons.map((season, index) => {
                  const IconComponent = season.icon;
                  const borderColor = season.color === 'green' ? 'border-green-600' : season.color === 'amber' ? 'border-amber-600' : 'border-gray-600';
                  const bgColor = season.color === 'green' ? 'bg-green-50' : season.color === 'amber' ? 'bg-amber-50' : 'bg-gray-50';
                  const iconColor = season.color === 'green' ? 'text-green-600' : season.color === 'amber' ? 'text-amber-600' : 'text-gray-600';

                  return (
                    <div key={index} className={`${bgColor} border-l-4 ${borderColor} rounded-lg p-6`}>
                      <div className="flex items-start mb-4">
                        <IconComponent className={`w-8 h-8 ${iconColor} mr-3 flex-shrink-0`} />
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900">{season.name}</h3>
                          <p className="text-lg text-gray-700 font-medium">{season.months}</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm font-semibold text-gray-700 mb-1">Weather:</p>
                          <p className="text-sm text-gray-600">{season.weather}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-700 mb-1">Visibility:</p>
                          <p className="text-sm text-gray-600">{season.visibility}</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mb-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">Advantages:</h4>
                          <ul className="space-y-1">
                            {season.advantages.map((adv, i) => (
                              <li key={i} className="flex items-start text-sm text-gray-700">
                                <span className="text-green-600 mr-2">+</span>
                                <span>{adv}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">Disadvantages:</h4>
                          <ul className="space-y-1">
                            {season.disadvantages.map((dis, i) => (
                              <li key={i} className="flex items-start text-sm text-gray-700">
                                <span className="text-red-600 mr-2">-</span>
                                <span>{dis}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="bg-white/50 p-3 rounded">
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">Best Choice:</span> {season.bestMonths}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 bg-gradient-to-br from-[#2B5D8C] to-cyan-600 text-white rounded-lg shadow-xl p-6">
                <h3 className="text-xl font-bold mb-3">Gulf of Thailand / Koh Samui</h3>
                <p className="text-blue-100 mb-2">Different weather pattern from Andaman Sea:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur p-3 rounded">
                    <p className="font-bold">Best: January - August</p>
                    <p className="text-sm text-blue-100">Opposite of Andaman Sea</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur p-3 rounded">
                    <p className="font-bold">Worst: October - December</p>
                    <p className="text-sm text-blue-100">Rainy and rough</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="packing">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-[#2B5D8C] pb-3">
                What to Bring and Wear
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Shirt className="w-6 h-6 text-blue-600 mr-2" />
                    Clothing Essentials
                  </h3>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm">Essential Items:</h4>
                    <ul className="space-y-2">
                      {whatToBring.clothing.essential.map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm">Evening (Overnight Charters):</h4>
                    <ul className="space-y-2">
                      {whatToBring.clothing.evening.map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">DO NOT BRING:</h4>
                    <ul className="space-y-1">
                      {whatToBring.clothing.doNotBring.map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-700">
                          <AlertCircle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Camera className="w-6 h-6 text-[#2B5D8C] mr-2" />
                    Gear & Accessories
                  </h3>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm">Highly Recommended:</h4>
                    <ul className="space-y-2">
                      {whatToBring.gear.recommended.map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-700">
                          <Star className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm">Optional:</h4>
                    <ul className="space-y-2">
                      {whatToBring.gear.optional.map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Documents & Essentials:</h4>
                    <ul className="space-y-1">
                      {whatToBring.documents.map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-700">
                          <FileText className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-amber-50 border-l-4 border-amber-600 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <AlertCircle className="w-5 h-5 text-amber-600 mr-2" />
                  Important Reminders
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="font-semibold mb-1">Reef-Safe Sunscreen</p>
                    <p className="text-xs">Regular sunscreen kills coral reefs. Use mineral-based or reef-safe brands.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Motion Sickness</p>
                    <p className="text-xs">Take medication 1 hour before departure if prone to seasickness.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Soft Bags Only</p>
                    <p className="text-xs">Limited storage space on yachts. Avoid hard suitcases.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="insider-tips">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-[#2B5D8C] pb-3">
                Insider Tips for Best Experience
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Lightbulb className="w-6 h-6 text-amber-600 mr-2" />
                    Booking Tips
                  </h3>
                  <ul className="space-y-2">
                    {insiderTips.booking.map((tip, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <Star className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                    Itinerary Tips
                  </h3>
                  <ul className="space-y-2">
                    {insiderTips.itinerary.map((tip, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Ship className="w-6 h-6 text-cyan-600 mr-2" />
                    Onboard Tips
                  </h3>
                  <ul className="space-y-2">
                    {insiderTips.onboard.map((tip, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Waves className="w-6 h-6 text-[#2B5D8C] mr-2" />
                    Seasickness Prevention
                  </h3>
                  <ul className="space-y-2">
                    {insiderTips.seasickness.map((tip, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-[#2B5D8C] mr-2 mt-0.5 flex-shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-br from-amber-600 to-orange-600 text-white rounded-lg shadow-xl p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <DollarSign className="w-6 h-6 mr-2" />
                  Tipping Etiquette
                </h3>
                <ul className="space-y-2">
                  {insiderTips.tipping.map((tip, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section id="family">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-[#2B5D8C] pb-3">
                Family-Friendly Yacht Charters
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Heart className="w-6 h-6 text-pink-600 mr-2" />
                    Best Yachts for Families
                  </h3>
                  <ul className="space-y-3">
                    {familyFriendly.bestYachts.map((yacht, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{yacht}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                    Kid-Friendly Destinations
                  </h3>
                  <ul className="space-y-3">
                    {familyFriendly.destinations.map((dest, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{dest}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Zap className="w-6 h-6 text-purple-600 mr-2" />
                    Activities Kids Love
                  </h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {familyFriendly.activities.map((activity, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <Star className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-6 h-6 text-red-600 mr-2" />
                    Safety with Children
                  </h3>
                  <ul className="space-y-2">
                    {familyFriendly.safety.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Age Considerations</h3>
                <div className="space-y-2">
                  {familyFriendly.ageConsiderations.map((age, i) => (
                    <p key={i} className="text-sm text-gray-700">
                      <span className="font-semibold">{age.split(':')[0]}:</span> {age.split(':')[1]}
                    </p>
                  ))}
                </div>
              </div>
            </section>

            <section id="corporate">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-[#2B5D8C] pb-3">
                Corporate & Event Charters
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Briefcase className="w-6 h-6 text-gray-700 mr-2" />
                    Perfect For Corporate Events
                  </h3>
                  <ul className="space-y-2">
                    {corporateEvents.perfectFor.map((event, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{event}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 p-3 bg-gray-50 rounded">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Pricing:</span> $3,000-15,000 depending on yacht size and services
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Gift className="w-6 h-6 text-[#2B5D8C] mr-2" />
                    Special Services Available
                  </h3>
                  <ul className="space-y-2">
                    {corporateEvents.services.map((service, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <Star className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg shadow-md p-8 border-l-4 border-pink-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Heart className="w-6 h-6 text-pink-600 mr-2" />
                  Private Events & Celebrations
                </h3>
                <p className="text-gray-700 mb-4">Create unforgettable memories with private yacht charters for special occasions.</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {corporateEvents.privateEvents.map((event, i) => (
                    <div key={i} className="bg-white/60 backdrop-blur p-4 rounded-lg">
                      <p className="text-sm font-semibold text-gray-900">{event}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-white/80 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Wedding Charters</h4>
                  <p className="text-sm text-gray-700">Ceremony on deck with officiant, small weddings 10-30 guests, sunset ceremonies, photography, decorations, multi-course dinner, and overnight honeymoon charter option available.</p>
                </div>
              </div>
            </section>

            <section id="faq">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-[#2B5D8C] pb-3">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                      <HelpCircle className="w-5 h-5 text-[#2B5D8C] mr-2 mt-0.5 flex-shrink-0" />
                      <span>{faq.question}</span>
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed ml-7">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-br from-blue-600 to-cyan-700 text-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-3">Ready to Book Your Dream Yacht Charter?</h3>
                <p className="text-blue-100 mb-4">
                  Contact reputable yacht charter operators in Phuket or Koh Samui to start planning your unforgettable adventure. Remember to book 2-4 months in advance for high season (November-April) to ensure the best yacht selection and availability.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                    <h4 className="font-bold mb-1">Best Season</h4>
                    <p className="text-sm text-blue-100">November - April</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                    <h4 className="font-bold mb-1">Book In Advance</h4>
                    <p className="text-sm text-blue-100">2-4 months for high season</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                    <h4 className="font-bold mb-1">Average Tip</h4>
                    <p className="text-sm text-blue-100">10-15% of charter fee</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Calendar className="w-5 h-5 text-[#2B5D8C] mr-2" />
                Quick Reference
              </h3>
              <div className="space-y-4 text-sm">
                <div className="pb-3 border-b border-gray-200">
                  <p className="text-gray-600 mb-1">Budget Option</p>
                  <p className="font-bold text-gray-900">$400-900/day</p>
                  <p className="text-xs text-gray-500">Speedboats</p>
                </div>
                <div className="pb-3 border-b border-gray-200">
                  <p className="text-gray-600 mb-1">Mid-Range</p>
                  <p className="font-bold text-gray-900">$1,200-3,500/day</p>
                  <p className="text-xs text-gray-500">Catamarans & Motor Yachts</p>
                </div>
                <div className="pb-3 border-b border-gray-200">
                  <p className="text-gray-600 mb-1">Luxury</p>
                  <p className="font-bold text-gray-900">$3,000-10,000/night</p>
                  <p className="text-xs text-gray-500">Premium Yachts</p>
                </div>
                <div className="pb-3 border-b border-gray-200">
                  <p className="text-gray-600 mb-1">Ultra-Luxury</p>
                  <p className="font-bold text-gray-900">$15,000+/night</p>
                  <p className="text-xs text-gray-500">Superyachts</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Best Season</p>
                  <p className="font-bold text-gray-900">November - April</p>
                  <p className="text-xs text-gray-500">Calm seas, clear weather</p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <RelatedGuides
          guides={[
            { title: 'Best Beaches in Thailand', href: '/best-beaches' },
            { title: 'Phuket Destination Guide', href: '/destinations/phuket' },
            { title: 'Diving & Snorkeling', href: '/diving-snorkeling' },
          ]}
        />

        <YouMayAlsoLike
          suggestions={[
            { title: 'Koh Phi Phi Guide', href: '/destinations/koh-phi-phi', category: 'Destinations' },
            { title: 'Krabi Travel Guide', href: '/destinations/krabi', category: 'Destinations' },
            { title: 'Best Time to Visit Thailand', href: '/best-time-to-visit', category: 'Planning' },
          ]}
        />
      </div>
    </div>
  );
}
