import { Star, MapPin, DollarSign, Users, CheckCircle2, Sparkles, Hotel, Award, Heart, TrendingUp, Globe } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import RelatedGuides from '../components/RelatedGuides';
import YouMayAlsoLike from '../components/YouMayAlsoLike';
import { usePageMeta } from '../hooks/usePageMeta';

export function LuxuryHotelsThailandPage() {
  usePageMeta({
    title: 'Best Luxury Hotels in Thailand 2026: Bangkok, Phuket & Island Resorts',
    description: 'Complete guide to Thailand\'s best luxury hotels and 5-star resorts. From urban elegance in Bangkok to beachfront villas in Phuket. Expert reviews, pricing, and booking tips.',
  });

  const whyThailand = {
    value: {
      title: 'Exceptional Value',
      icon: DollarSign,
      points: [
        '5-star luxury at 40-60% cost of comparable properties worldwide',
        '$300-500/night gets genuine luxury (vs $800-1,200 elsewhere)',
        'Included amenities often extras elsewhere',
        'Spa treatments and fine dining much more affordable',
        'Luxury accessible to more travelers',
      ],
    },
    service: {
      title: 'World-Class Service',
      icon: Award,
      points: [
        'Thai hospitality legendary (genuine warmth)',
        'High staff-to-guest ratios',
        'English widely spoken at luxury properties',
        'Anticipatory service (staff remember preferences)',
        'Training programs among world\'s best',
      ],
    },
    locations: {
      title: 'Stunning Locations',
      icon: MapPin,
      points: [
        'Andaman Sea beaches (turquoise water, limestone cliffs)',
        'Private islands',
        'Urban sophistication (Bangkok world-class city)',
        'Mountain retreats (Chiang Mai temples and nature)',
        'Cultural richness enhances luxury experience',
      ],
    },
    diversity: {
      title: 'Diverse Options',
      icon: Hotel,
      points: [
        'Beachfront resorts',
        'Urban luxury hotels',
        'Boutique properties',
        'Private pool villas',
        'Overwater bungalows',
        'Historic converted properties',
        'Wellness-focused retreats',
        'Family-friendly luxury resorts',
      ],
    },
  };

  const bangkokHotels = [
    {
      name: 'The Peninsula Bangkok',
      subtitle: 'Old World Elegance',
      rating: 10,
      location: 'Riverside, Thonburi side (free shuttle boat across to BTS)',
      style: 'Colonial elegance meets modern luxury',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: [
        'Consistently ranked Bangkok\'s #1 luxury hotel',
        'Riverside setting (Chao Phraya River views)',
        'Three-story lobby with sweeping staircase',
        'Spacious rooms (55sqm minimum)',
        'Award-winning Mei Jiang Cantonese restaurant',
        'Spectacular riverside infinity pool',
        'World-class spa with Thai villa treatments',
        'Rolls-Royce Peninsula Green Bentley fleet',
      ],
      rooms: [
        { type: 'Deluxe Rooms', size: '55sqm', price: '$350-500/night' },
        { type: 'Grand Balcony Suites', size: '75sqm', price: '$600-800/night' },
        { type: 'Peninsula Suite', size: '330sqm', price: '$2,500+/night' },
      ],
      bestFor: [
        'Romantic getaways',
        'Those who appreciate classic luxury',
        'River views and tranquility',
        'Special occasions',
      ],
      insiderTips: [
        'Book river-view rooms (worth premium)',
        'Breakfast at The Lobby (excellent buffet)',
        'Evening cocktails at Thiptara riverside terrace',
        'Use shuttle boat to explore both sides of river',
        'Afternoon tea in The Lobby (elegant experience)',
      ],
      booking: 'Book direct for benefits (breakfast, room upgrade subject to availability, spa credit)',
    },
    {
      name: 'Mandarin Oriental Bangkok',
      subtitle: 'Historic Icon',
      rating: 10,
      location: 'Riverside, Central Bangkok',
      style: 'Historic colonial with modern wing',
      history: 'Open since 1876 (author Somerset Maugham and Joseph Conrad stayed)',
      image: 'https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: [
        'Bangkok\'s most historic luxury hotel',
        'Original Authors Wing (beautifully preserved)',
        'Exemplary service (staff remember guests from years ago)',
        'Two-Michelin-star Le Normandie restaurant',
        'Award-winning spa in separate riverside pavilion',
        'World-renowned Thai cooking school',
        'River setting with private shuttle boat',
      ],
      rooms: [
        { type: 'Garden Wing Deluxe', size: '40sqm', price: '$300-450/night', note: 'newer wing' },
        { type: 'Authors Wing Deluxe', size: '40sqm', price: '$400-550/night', note: 'historic, most character' },
        { type: 'River Wing Suites', size: '55sqm+', price: '$600-900/night', note: 'best river views' },
        { type: 'Oriental Suite', size: '255sqm', price: '$5,000+/night', note: 'absolute top luxury' },
      ],
      bestFor: [
        'History and tradition lovers',
        'Romantics (Authors Wing most atmospheric)',
        'Foodies (exceptional restaurants)',
        'Those valuing impeccable service',
      ],
      insiderTips: [
        'Stay in Authors Wing for character (or splurge on River Wing suites)',
        'Book spa treatments at riverside pavilion',
        'Take Thai cooking class (half-day or full-day)',
        'High tea at Authors Lounge (colonial elegance)',
        'Le Normandie for special occasion dinner',
      ],
      cons: [
        'Rooms smaller than newer hotels',
        'More expensive than Peninsula',
        'Some rooms dated (though charming)',
      ],
      booking: 'Book direct or luxury travel agents for best perks',
    },
    {
      name: 'Four Seasons Bangkok at Chao Phraya River',
      subtitle: 'Modern Luxury',
      rating: 9.5,
      location: 'Riverside, quieter area',
      style: 'Contemporary riverside resort in city',
      opened: 2020,
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: [
        'Newest luxury hotel on river',
        'Massive rooms (start at 60sqm)',
        'Floor-to-ceiling windows (stunning views)',
        'Multiple pools including infinity pool',
        'Excellent family facilities',
        'Yu Ting Yuan Cantonese restaurant (Michelin Plate)',
        'BKK Social Club rooftop bar (trendy, great views)',
      ],
      rooms: [
        { type: 'Deluxe River View', size: '60sqm', price: '$400-600/night' },
        { type: 'Premier River View', size: '72sqm', price: '$500-700/night' },
        { type: 'Suites', size: '120-390sqm', price: '$1,000-4,000+/night' },
      ],
      bestFor: [
        'Modern luxury lovers',
        'Families (excellent kids club and family facilities)',
        'Those wanting space (largest rooms of top hotels)',
        'Pool enthusiasts',
      ],
      insiderTips: [
        'Book higher floors (best views)',
        'Sunset drinks at BKK Social Club rooftop',
        'Yu Ting Yuan Cantonese dim sum lunch',
        'Use free shuttle boat to Icon Siam mall',
        'Spa excellent (Four Seasons standard)',
      ],
      booking: 'Four Seasons Preferred Partner benefits recommended',
    },
    {
      name: 'The St. Regis Bangkok',
      subtitle: 'Urban Elegance',
      rating: 9,
      location: 'Rajadamri Road, central business district (BTS Rajadamri)',
      style: 'Elegant urban luxury, great location',
      opened: 2011,
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: [
        'Prime location (central, walking to shopping)',
        'Signature St. Regis butler service (every room)',
        'Dramatic lobby with Dale Chihuly chandelier',
        'Excellent Italian restaurant (Jojo)',
        'Rooftop Viu bar (chic, great cocktails)',
        'Afternoon tea with live harp music',
        'Connected to high-end shopping',
      ],
      rooms: [
        { type: 'Deluxe Rooms', size: '48sqm', price: '$250-400/night' },
        { type: 'Grand Deluxe', size: '56sqm', price: '$350-500/night' },
        { type: 'Suites', size: '80-370sqm', price: '$700-5,000+/night' },
      ],
      bestFor: [
        'Business travelers (central location)',
        'Shoppers (near Gaysorn, Central Embassy, Siam Paragon)',
        'Those who love butler service',
        'Urban luxury over resort feel',
      ],
      insiderTips: [
        'Butler service exceptional (use them for everything)',
        'Afternoon tea beautiful experience',
        'Viu rooftop bar for sunset cocktails',
        'Lobby lounge for evening drinks and harp performance',
        'Walking distance to Erawan Shrine and shopping',
      ],
      booking: 'Marriott Bonvoy points excellent value here',
    },
  ];

  const phuketResorts = [
    {
      name: 'Amanpuri',
      subtitle: 'Ultimate Luxury',
      rating: 10,
      location: 'West coast, Pansea Beach (private cove, 20 min north of Patong)',
      style: 'Understated Thai luxury, private and exclusive',
      price: '$1,000-2,500+/night',
      image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: [
        'Thailand\'s original ultra-luxury resort (opened 1988)',
        'Aman brand legendary (minimalist luxury)',
        'Completely private (40 pavilions, 40 villas on 70 acres)',
        'Most exclusive beach in Phuket (guest-only)',
        'Impeccable service (staff remember everything)',
        'No kids policy in main restaurant (adults-only luxury)',
        'Private yacht available for charters',
        'Holistic wellness center',
      ],
      rooms: [
        { type: 'Pavilions', size: '115-160sqm', price: '$1,000-1,500/night', note: 'terrace and ocean view' },
        { type: 'Villas', size: '2-6 bedrooms', price: '$2,000-8,000+/night', note: 'with private pool' },
      ],
      bestFor: [
        'Honeymooners seeking privacy',
        'Ultra-high net worth travelers',
        'Those who have stayed at Amans elsewhere',
        'Complete escape and tranquility',
      ],
      insiderTips: [
        'Worth the splurge for special occasions',
        'Book direct for Aman Signature benefits',
        'Private beach experiences (sunset dinners arranged)',
        'Half-day yacht excursions to nearby islands',
        'Most guests stay 5-7 nights (not quick visit)',
      ],
      cons: [
        'Very expensive (but worth it for what you get)',
        'Isolated (intentionally - you stay within resort)',
        'Minimalist style not for everyone (no TVs in some pavilions)',
      ],
      booking: 'Book direct for Aman Signature benefits',
    },
    {
      name: 'Trisara',
      subtitle: 'Private Pool Villas',
      rating: 9.5,
      location: 'Northwest coast, secluded bay near Amanpuri',
      style: 'Contemporary Thai, all-pool-villa resort',
      price: '$600-1,500+/night',
      image: 'https://images.pexels.com/photos/261181/pexels-photo-261181.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: [
        'Every accommodation has private infinity pool',
        'Private beach (resort guests only)',
        'Spacious villas (start at 225sqm)',
        'Only 48 villas (intimate, never crowded)',
        'Three-bedroom villas ideal for families',
        'PRU restaurant (farm-to-table, Michelin Plate)',
        'Jara Spa (one of Thailand\'s best)',
      ],
      rooms: [
        { type: 'Ocean View Pool Villa', size: '225sqm', price: '$600-900/night', note: 'with 10m pool' },
        { type: 'Ocean View Pool Suite', size: '350sqm', price: '$900-1,400/night', note: 'with 15m pool' },
        { type: 'Three-Bedroom Pool Villa', size: '1,100sqm', price: '$2,500+/night', note: 'perfect for families' },
      ],
      bestFor: [
        'Families wanting luxury with privacy',
        'Couples wanting private pools',
        'Wellness travelers (excellent spa and healthy dining)',
        'Those who want seclusion without Aman price tag',
      ],
      insiderTips: [
        'Ocean View Pool Suites worth upgrade (larger pool, better views)',
        'PRU restaurant exceptional (book chef\'s table)',
        'Use villa buggy service to beach club',
        'In-villa spa treatments magical',
        'Kids club excellent (families welcome unlike some luxury resorts)',
      ],
      booking: 'Book direct or through luxury travel advisors',
    },
    {
      name: 'The Surin Phuket',
      subtitle: 'Beach Chic',
      rating: 9,
      location: 'Pansea Beach (next to Amanpuri)',
      style: 'Beach chic, laid-back luxury',
      price: '$400-800/night',
      image: 'https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: [
        'Beautiful Pansea Beach setting',
        'Cottage-style rooms (more character than typical hotel)',
        'Relaxed vibe (luxury without being stuffy)',
        'Beach clubs and lounges (social scene)',
        'Excellent Italian restaurant (Taste)',
        'More accessible than Amanpuri but similar beach',
      ],
      rooms: [
        { type: 'Deluxe Cottage', size: '45sqm', price: '$400-550/night' },
        { type: 'Beachfront Cottage', size: '50sqm', price: '$500-650/night' },
        { type: 'Ocean Suites', size: '90-180sqm', price: '$700-1,200/night' },
      ],
      bestFor: [
        'Couples wanting relaxed beach luxury',
        'Those who find Amanpuri too formal/expensive',
        'Beach lovers (one of Phuket\'s best beaches)',
        'Social travelers (beach clubs and restaurant scene)',
      ],
      insiderTips: [
        'Beachfront Cottages worth premium (direct beach access)',
        'Beach club great for lunch and sunset cocktails',
        'Taste restaurant for Italian (high quality)',
        'Walk to Amanpuri beach if you want to see it',
        'More couples-oriented than family-focused',
      ],
      booking: 'Book direct for best rates and perks',
    },
    {
      name: 'Sri Panwa',
      subtitle: 'Dramatic Views',
      rating: 8.5,
      location: 'Cape Panwa, southeast tip of Phuket',
      style: 'Contemporary luxury with panoramic views',
      price: '$350-1,200/night',
      image: 'https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: [
        'Most dramatic views in Phuket (180-degree ocean panorama)',
        'All-pool-villa resort (55-900sqm villas)',
        'Multi-level infinity pools',
        'Baba Nest rooftop bar (Instagram-famous, best sunset view)',
        'Cool contemporary design (popular with younger luxury travelers)',
        'Private cape location',
      ],
      rooms: [
        { type: 'One Bedroom Pool Villa', size: '220sqm', price: '$350-500/night' },
        { type: 'Two Bedroom Ocean Pool Villa', size: '350sqm', price: '$600-900/night' },
        { type: 'Penthouses', size: '500-900sqm', price: '$1,200-3,000+/night' },
      ],
      bestFor: [
        'Instagram and photography lovers (incredibly photogenic)',
        'Sunset cocktail enthusiasts (Baba Nest bar legendary)',
        'Couples wanting dramatic views',
        'Modern design lovers',
      ],
      insiderTips: [
        'Book minimum two-bedroom villa (much more spacious)',
        'Baba Nest bar for sunset (reserve in advance, very popular)',
        'Location remote (need taxi to other areas - 30 min to Patong)',
        'Infinity pools photo-worthy but can be windy',
        'Cape location means views but not traditional beach access',
      ],
      cons: [
        'No proper beach (rocky cape)',
        'Location far from everything (taxi-dependent)',
        'Windy at times (cape exposure)',
      ],
      booking: 'Book direct or luxury travel agents',
    },
  ];

  const kohSamuiResorts = [
    {
      name: 'Four Seasons Koh Samui',
      subtitle: 'Family Luxury',
      rating: 9.5,
      location: 'Lamai Beach, hillside setting with beach access',
      style: 'Contemporary Thai tropical luxury',
      price: '$600-1,500/night',
      image: 'https://images.pexels.com/photos/1680247/pexels-photo-1680247.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: [
        'Best luxury family resort in Samui',
        'Every villa has private infinity pool',
        'Kids for All Seasons club (excellent, complimentary)',
        'Spacious villas (start at 165sqm)',
        'Multiple pools including family pool',
        'Beach access with water sports',
        'Teen program and activities',
      ],
      rooms: [
        { type: 'One-Bedroom Villa', size: '165sqm', price: '$600-900/night', note: 'with pool' },
        { type: 'Two-Bedroom Villa', size: '265sqm', price: '$1,000-1,500/night', note: 'with pool' },
        { type: 'Oceanfront Villas', size: 'Various', price: '$1,200-2,000/night' },
      ],
      bestFor: [
        'Families with children',
        'Multi-generational vacations',
        'Those wanting private pool + beach access',
        'Four Seasons service standards',
      ],
      insiderTips: [
        'Two-bedroom villas give families space',
        'Kids club exceptional (parents get relaxation time)',
        'KOH Thai restaurant excellent (beachfront)',
        'In-villa dining romantic after kids asleep',
        'Complimentary water sports',
      ],
      booking: 'Book through Four Seasons Preferred Partner for benefits',
    },
    {
      name: 'Six Senses Samui',
      subtitle: 'Wellness Luxury',
      rating: 9,
      location: 'North coast, secluded hillside',
      style: 'Sustainable luxury, wellness-focused',
      price: '$550-1,400/night',
      image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: [
        'Holistic spa (comprehensive programs)',
        'Organic farm-to-table dining',
        'Sleep enhancement programs',
        'Yoga and meditation pavilions',
        'Sustainable practices throughout',
        'Every villa with private infinity pool overlooking ocean',
        'Cinema paradiso outdoor movie theater',
      ],
      rooms: [
        { type: 'Hideaway Pool Villa', size: '210sqm', price: '$550-800/night' },
        { type: 'Ocean Pool Villa', size: '275sqm', price: '$700-1,100/night' },
        { type: 'Three-Bedroom Villa', size: '750sqm', price: '$1,400+/night' },
      ],
      bestFor: [
        'Wellness retreats',
        'Eco-conscious luxury travelers',
        'Spa enthusiasts',
        'Those seeking transformation and reset',
      ],
      insiderTips: [
        'Book spa program in advance (wellness analysis and treatments)',
        'Organic dining exceptional (healthy and delicious)',
        'Cinema under stars romantic',
        'Sleep program if you have sleep issues (innovative)',
        'More wellness-focused than party scene',
      ],
      booking: 'Book direct for Six Senses benefits',
    },
    {
      name: 'Conrad Koh Samui',
      subtitle: 'Romantic Escape',
      rating: 8.5,
      location: 'Southwest tip, hillside villas',
      style: 'Contemporary luxury, adults-focused',
      price: '$400-900/night',
      image: 'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: [
        'Adults-only feel (not prohibited but not family-focused)',
        'All ocean-view villas with private infinity pool',
        'Romantic sunset setting (west-facing)',
        'Small (just 81 villas - intimate)',
        'Azure Bar best sunset spot on Samui',
      ],
      rooms: [
        { type: 'King One Bedroom Villa', size: '100sqm', price: '$400-600/night', note: 'with pool' },
        { type: 'Ocean View Pool Villa', size: '150sqm', price: '$500-750/night' },
        { type: 'Two Bedroom Villa', size: '240sqm', price: '$700-1,100/night' },
      ],
      bestFor: [
        'Honeymooners and couples',
        'Romantic getaways',
        'Those wanting sunset views',
        'Loyalty program members (Hilton Honors)',
      ],
      insiderTips: [
        'Sunset Pool Villas face west (best for sunset from your pool)',
        'Azure Bar sunset cocktails mandatory',
        'Location remote (need taxi to explore island)',
        'More intimate than Four Seasons or Six Senses',
      ],
      booking: 'Hilton Honors points excellent value',
    },
  ];

  const chiangMaiHotels = [
    {
      name: 'Four Seasons Chiang Mai',
      subtitle: 'Rice Paddy Luxury',
      rating: 9.5,
      location: 'Mae Rim valley, 20 minutes north of Chiang Mai Old City',
      style: 'Traditional Lanna Thai amidst rice terraces',
      price: '$400-1,200/night',
      image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: [
        'Surrounded by working rice paddies and mountains',
        'Traditional Lanna-style pavilions and suites',
        'Water buffalo roam the grounds (charming)',
        'Rice planting and harvesting experiences',
        'Luxury in rural setting',
        'Excellent spa with open-air pavilions',
        'Complimentary rice paddy activities',
      ],
      rooms: [
        { type: 'Terrace Pavilion', size: '80sqm', price: '$400-600/night', note: 'with outdoor sala' },
        { type: 'Residences', size: '120-240sqm', price: '$700-1,200/night', note: 'with private pool' },
        { type: 'Four-Bedroom Residence', size: 'Large', price: '$2,500+/night' },
      ],
      bestFor: [
        'Cultural immersion with luxury',
        'Families (kids love the animals and rice activities)',
        'Those wanting mountain and nature setting',
        'Romantic escape from city',
      ],
      insiderTips: [
        'Rice planting/harvesting experience special (seasonal)',
        'Morning buffalo ride for kids',
        'Sala Mae Nam restaurant for traditional Thai',
        'Spa treatments in outdoor rice paddy pavilions magical',
        'Use hotel transport to Old City for temples and markets',
      ],
      booking: 'Four Seasons Preferred Partner benefits recommended',
    },
    {
      name: 'Dhara Dhevi',
      subtitle: 'Cultural Palace',
      rating: 8.5,
      location: 'Just outside Old City',
      style: 'Recreated ancient Lanna kingdom (like staying in palace)',
      price: '$300-800/night',
      image: 'https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: [
        'Sprawling property recreating ancient Lanna architecture',
        'Multiple pools, restaurants, and pavilions',
        'Traditional rice fields within property',
        'Elaborate colonial-era buildings and teakwood structures',
        'Dheva Spa one of Thailand\'s best (award-winning)',
        'Cooking school on property',
      ],
      rooms: [
        { type: 'Deluxe Villas', size: '96sqm', price: '$300-450/night' },
        { type: 'Duplex Suites', size: '160sqm', price: '$400-600/night' },
        { type: 'Residence Villas', size: '200-1,000sqm', price: '$600-2,000+/night', note: 'with private pool' },
      ],
      bestFor: [
        'Those who love culture and architecture',
        'Spa enthusiasts (exceptional spa)',
        'Families (lots of space to explore)',
        'Long stays (feels like retreat)',
      ],
      insiderTips: [
        'Like staying in own village (buggy service to navigate property)',
        'Le Grand Lanna restaurant for fine dining',
        'Spa worth multiple visits (traditional treatments)',
        'Cooking classes authentic',
        'More accessible than Four Seasons for exploring Old City',
      ],
      booking: 'Book direct for best rates',
    },
  ];

  const krabiResorts = [
    {
      name: 'Rayavadee',
      subtitle: 'Limestone Cliff Luxury',
      rating: 10,
      location: 'Railay Beach peninsula (boat access only - no road)',
      style: 'Tropical luxury amidst limestone cliffs',
      price: '$600-2,000+/night',
      image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: [
        'Accessible only by boat (private, exclusive)',
        'Three beaches (Railay West, Railay East, Phranang Cave Beach)',
        'Surrounded by dramatic limestone cliffs',
        'Pavilions and villas in coconut groves',
        'Rock climbing, kayaking, snorkeling',
        'Most romantic setting in Thailand',
      ],
      rooms: [
        { type: 'Pavilion', size: '100sqm', price: '$600-900/night', note: 'with outdoor sala' },
        { type: 'Terrace Pavilion', size: '120sqm', price: '$700-1,000/night' },
        { type: 'Villa with Pool', size: '224sqm', price: '$1,200-2,000/night' },
      ],
      bestFor: [
        'Honeymooners (incredibly romantic)',
        'Adventure-luxury blend (rock climbing + 5-star)',
        'Beach lovers (three beaches to choose from)',
        'Those wanting exclusive access',
      ],
      insiderTips: [
        'Boat access romantic but plan logistics',
        'Three beaches offer variety (west for sunset, Phranang Cave Beach most beautiful)',
        'Rock climbing and kayaking complimentary',
        'Grotto restaurant in limestone cliff unique',
        'Book pavilion minimum (villas expensive)',
      ],
      cons: [
        'Expensive',
        'Boat-access means cannot easily leave resort',
        'Limited dining variety (just resort restaurants)',
      ],
      booking: 'Book direct or through luxury travel advisors',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[500px] bg-gradient-to-br from-amber-900 via-orange-800 to-yellow-900">
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-40"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
          <Sparkles className="w-16 h-16 text-amber-300 mb-4" />
          <h1 className="text-4xl sm:text-6xl font-light text-white mb-4 tracking-wide">
            Best Luxury Hotels in Thailand 2026
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl font-light">
            From urban luxury in Bangkok to beach resorts in Phuket and private island hideaways
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: 'Home', path: '/' },
            { label: 'Luxury Hotels Thailand' },
          ]}
        />

        <div className="grid lg:grid-cols-[1fr_300px] gap-8 mt-8">
          <div className="space-y-12">
            <section>
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Thailand ranks among the world's premier luxury travel destinations with extraordinary hotels and resorts offering exceptional value, impeccable service, and unforgettable experiences. From Bangkok's sophisticated urban hotels with rooftop bars and Michelin-starred restaurants to Phuket's beachfront resorts with private pools and butler service, Thailand's luxury accommodation scene rivals—and often exceeds—properties worldwide at a fraction of the cost.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  This comprehensive guide covers the absolute best luxury hotels across Thailand's major destinations including Bangkok, Phuket, Koh Samui, Chiang Mai, Krabi, and Hua Hin. We detail what makes each property special, price ranges, best times to book, insider tips, and how to maximize luxury travel value. Whether seeking a romantic escape, family vacation, wellness retreat, or celebration, Thailand's luxury hotels deliver world-class experiences.
                </p>
                <p className="text-sm text-gray-600 italic mt-4">Updated February 2026 with current pricing and newest properties.</p>
              </div>
            </section>

            <section id="why-thailand">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-[#D91680] pb-3">
                Why Thailand for Luxury Hotels
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {Object.values(whyThailand).map((category, index) => {
                  const IconComponent = category.icon;
                  return (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <IconComponent className="w-6 h-6 text-[#D91680] mr-2" />
                        {category.title}
                      </h3>
                      <ul className="space-y-2">
                        {category.points.map((point, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </section>

            <section id="bangkok-hotels">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-[#D91680] pb-3">
                Best Luxury Hotels Bangkok
              </h2>

              <div className="space-y-8">
                {bangkokHotels.map((hotel, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="relative h-64">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-amber-600 text-white px-4 py-2 rounded-full font-bold flex items-center">
                        <Star className="w-5 h-5 mr-1 fill-current" />
                        {hotel.rating}/10
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="mb-6">
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
                        <p className="text-xl text-[#D91680] font-semibold mb-3">{hotel.subtitle}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1 text-gray-400" />
                            {hotel.location}
                          </div>
                          <div className="flex items-center">
                            <Hotel className="w-4 h-4 mr-1 text-gray-400" />
                            {hotel.style}
                          </div>
                        </div>
                        {hotel.history && (
                          <p className="text-sm text-gray-600 mt-2 italic">{hotel.history}</p>
                        )}
                        {hotel.opened && (
                          <p className="text-sm text-gray-600 mt-2 italic">Opened: {hotel.opened}</p>
                        )}
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Why It's Special</h4>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {hotel.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start text-sm text-gray-700">
                              <Sparkles className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Rooms & Pricing</h4>
                        <div className="space-y-3">
                          {hotel.rooms.map((room, i) => (
                            <div key={i} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
                              <div>
                                <p className="font-semibold text-gray-900">{room.type}</p>
                                <p className="text-sm text-gray-600">
                                  {room.size} {room.note && `• ${room.note}`}
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="font-bold text-[#D91680]">{room.price}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                            <Heart className="w-5 h-5 text-pink-600 mr-2" />
                            Best For
                          </h4>
                          <ul className="space-y-1">
                            {hotel.bestFor.map((item, i) => (
                              <li key={i} className="text-sm text-gray-700 flex items-start">
                                <span className="text-pink-600 mr-2">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                            <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
                            Insider Tips
                          </h4>
                          <ul className="space-y-1">
                            {hotel.insiderTips.slice(0, 3).map((tip, i) => (
                              <li key={i} className="text-sm text-gray-700 flex items-start">
                                <span className="text-blue-600 mr-2">→</span>
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {hotel.cons && (
                        <div className="mb-6 bg-amber-50 border-l-4 border-amber-600 p-4 rounded">
                          <h4 className="text-sm font-bold text-gray-900 mb-2">Considerations:</h4>
                          <ul className="space-y-1">
                            {hotel.cons.map((con, i) => (
                              <li key={i} className="text-sm text-gray-700">• {con}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white p-4 rounded-lg">
                        <p className="text-sm font-semibold flex items-center">
                          <Globe className="w-4 h-4 mr-2" />
                          {hotel.booking}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="phuket-resorts">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-[#D91680] pb-3">
                Best Luxury Resorts Phuket
              </h2>

              <div className="space-y-8">
                {phuketResorts.map((resort, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="relative h-64">
                      <img
                        src={resort.image}
                        alt={resort.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-cyan-600 text-white px-4 py-2 rounded-full font-bold flex items-center">
                        <Star className="w-5 h-5 mr-1 fill-current" />
                        {resort.rating}/10
                      </div>
                      {resort.price && (
                        <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-full font-semibold text-sm">
                          {resort.price}
                        </div>
                      )}
                    </div>

                    <div className="p-8">
                      <div className="mb-6">
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">{resort.name}</h3>
                        <p className="text-xl text-cyan-600 font-semibold mb-3">{resort.subtitle}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1 text-gray-400" />
                            {resort.location}
                          </div>
                          <div className="flex items-center">
                            <Hotel className="w-4 h-4 mr-1 text-gray-400" />
                            {resort.style}
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Why It's Special</h4>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {resort.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start text-sm text-gray-700">
                              <Sparkles className="w-4 h-4 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Accommodations & Pricing</h4>
                        <div className="space-y-3">
                          {resort.rooms.map((room, i) => (
                            <div key={i} className="flex justify-between items-center bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-lg">
                              <div>
                                <p className="font-semibold text-gray-900">{room.type}</p>
                                <p className="text-sm text-gray-600">
                                  {room.size} {room.note && `• ${room.note}`}
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="font-bold text-cyan-700">{room.price}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                            <Heart className="w-5 h-5 text-pink-600 mr-2" />
                            Best For
                          </h4>
                          <ul className="space-y-1">
                            {resort.bestFor.map((item, i) => (
                              <li key={i} className="text-sm text-gray-700 flex items-start">
                                <span className="text-pink-600 mr-2">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                            <TrendingUp className="w-5 h-5 text-cyan-600 mr-2" />
                            Insider Tips
                          </h4>
                          <ul className="space-y-1">
                            {resort.insiderTips.slice(0, 3).map((tip, i) => (
                              <li key={i} className="text-sm text-gray-700 flex items-start">
                                <span className="text-cyan-600 mr-2">→</span>
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {resort.cons && (
                        <div className="mb-6 bg-amber-50 border-l-4 border-amber-600 p-4 rounded">
                          <h4 className="text-sm font-bold text-gray-900 mb-2">Considerations:</h4>
                          <ul className="space-y-1">
                            {resort.cons.map((con, i) => (
                              <li key={i} className="text-sm text-gray-700">• {con}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white p-4 rounded-lg">
                        <p className="text-sm font-semibold flex items-center">
                          <Globe className="w-4 h-4 mr-2" />
                          {resort.booking}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="koh-samui-resorts">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-[#D91680] pb-3">
                Best Luxury Resorts Koh Samui
              </h2>

              <div className="space-y-8">
                {kohSamuiResorts.map((resort, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="relative h-64">
                      <img
                        src={resort.image}
                        alt={resort.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-emerald-600 text-white px-4 py-2 rounded-full font-bold flex items-center">
                        <Star className="w-5 h-5 mr-1 fill-current" />
                        {resort.rating}/10
                      </div>
                      {resort.price && (
                        <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-full font-semibold text-sm">
                          {resort.price}
                        </div>
                      )}
                    </div>

                    <div className="p-8">
                      <div className="mb-6">
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">{resort.name}</h3>
                        <p className="text-xl text-emerald-600 font-semibold mb-3">{resort.subtitle}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1 text-gray-400" />
                            {resort.location}
                          </div>
                          <div className="flex items-center">
                            <Hotel className="w-4 h-4 mr-1 text-gray-400" />
                            {resort.style}
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Why It's Special</h4>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {resort.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start text-sm text-gray-700">
                              <Sparkles className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Accommodations & Pricing</h4>
                        <div className="space-y-3">
                          {resort.rooms.map((room, i) => (
                            <div key={i} className="flex justify-between items-center bg-gradient-to-r from-emerald-50 to-pink-50 p-4 rounded-lg">
                              <div>
                                <p className="font-semibold text-gray-900">{room.type}</p>
                                <p className="text-sm text-gray-600">
                                  {room.size} {room.note && `• ${room.note}`}
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="font-bold text-emerald-700">{room.price}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                            <Heart className="w-5 h-5 text-pink-600 mr-2" />
                            Best For
                          </h4>
                          <ul className="space-y-1">
                            {resort.bestFor.map((item, i) => (
                              <li key={i} className="text-sm text-gray-700 flex items-start">
                                <span className="text-pink-600 mr-2">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                            <TrendingUp className="w-5 h-5 text-emerald-600 mr-2" />
                            Insider Tips
                          </h4>
                          <ul className="space-y-1">
                            {resort.insiderTips.slice(0, 3).map((tip, i) => (
                              <li key={i} className="text-sm text-gray-700 flex items-start">
                                <span className="text-emerald-600 mr-2">→</span>
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {resort.cons && (
                        <div className="mb-6 bg-amber-50 border-l-4 border-amber-600 p-4 rounded">
                          <h4 className="text-sm font-bold text-gray-900 mb-2">Considerations:</h4>
                          <ul className="space-y-1">
                            {resort.cons.map((con, i) => (
                              <li key={i} className="text-sm text-gray-700">• {con}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="bg-gradient-to-br from-emerald-600 to-[#D91680] text-white p-4 rounded-lg">
                        <p className="text-sm font-semibold flex items-center">
                          <Globe className="w-4 h-4 mr-2" />
                          {resort.booking}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="chiang-mai-hotels">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-[#D91680] pb-3">
                Luxury Hotels Chiang Mai
              </h2>

              <div className="space-y-8">
                {chiangMaiHotels.map((hotel, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="relative h-64">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-green-700 text-white px-4 py-2 rounded-full font-bold flex items-center">
                        <Star className="w-5 h-5 mr-1 fill-current" />
                        {hotel.rating}/10
                      </div>
                      {hotel.price && (
                        <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-full font-semibold text-sm">
                          {hotel.price}
                        </div>
                      )}
                    </div>

                    <div className="p-8">
                      <div className="mb-6">
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
                        <p className="text-xl text-green-700 font-semibold mb-3">{hotel.subtitle}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1 text-gray-400" />
                            {hotel.location}
                          </div>
                          <div className="flex items-center">
                            <Hotel className="w-4 h-4 mr-1 text-gray-400" />
                            {hotel.style}
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Why It's Special</h4>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {hotel.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start text-sm text-gray-700">
                              <Sparkles className="w-4 h-4 text-green-700 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Accommodations & Pricing</h4>
                        <div className="space-y-3">
                          {hotel.rooms.map((room, i) => (
                            <div key={i} className="flex justify-between items-center bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
                              <div>
                                <p className="font-semibold text-gray-900">{room.type}</p>
                                <p className="text-sm text-gray-600">
                                  {room.size} {room.note && `• ${room.note}`}
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="font-bold text-green-800">{room.price}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                            <Heart className="w-5 h-5 text-pink-600 mr-2" />
                            Best For
                          </h4>
                          <ul className="space-y-1">
                            {hotel.bestFor.map((item, i) => (
                              <li key={i} className="text-sm text-gray-700 flex items-start">
                                <span className="text-pink-600 mr-2">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                            <TrendingUp className="w-5 h-5 text-green-700 mr-2" />
                            Insider Tips
                          </h4>
                          <ul className="space-y-1">
                            {hotel.insiderTips.slice(0, 3).map((tip, i) => (
                              <li key={i} className="text-sm text-gray-700 flex items-start">
                                <span className="text-green-700 mr-2">→</span>
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {hotel.cons && (
                        <div className="mb-6 bg-amber-50 border-l-4 border-amber-600 p-4 rounded">
                          <h4 className="text-sm font-bold text-gray-900 mb-2">Considerations:</h4>
                          <ul className="space-y-1">
                            {hotel.cons.map((con, i) => (
                              <li key={i} className="text-sm text-gray-700">• {con}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="bg-gradient-to-br from-green-700 to-emerald-700 text-white p-4 rounded-lg">
                        <p className="text-sm font-semibold flex items-center">
                          <Globe className="w-4 h-4 mr-2" />
                          {hotel.booking}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="krabi-resorts">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-[#D91680] pb-3">
                Krabi Luxury Resorts
              </h2>

              <div className="space-y-8">
                {krabiResorts.map((resort, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="relative h-64">
                      <img
                        src={resort.image}
                        alt={resort.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-orange-600 text-white px-4 py-2 rounded-full font-bold flex items-center">
                        <Star className="w-5 h-5 mr-1 fill-current" />
                        {resort.rating}/10
                      </div>
                      {resort.price && (
                        <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-full font-semibold text-sm">
                          {resort.price}
                        </div>
                      )}
                    </div>

                    <div className="p-8">
                      <div className="mb-6">
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">{resort.name}</h3>
                        <p className="text-xl text-orange-600 font-semibold mb-3">{resort.subtitle}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1 text-gray-400" />
                            {resort.location}
                          </div>
                          <div className="flex items-center">
                            <Hotel className="w-4 h-4 mr-1 text-gray-400" />
                            {resort.style}
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Why It's Special</h4>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {resort.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start text-sm text-gray-700">
                              <Sparkles className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Accommodations & Pricing</h4>
                        <div className="space-y-3">
                          {resort.rooms.map((room, i) => (
                            <div key={i} className="flex justify-between items-center bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg">
                              <div>
                                <p className="font-semibold text-gray-900">{room.type}</p>
                                <p className="text-sm text-gray-600">
                                  {room.size} {room.note && `• ${room.note}`}
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="font-bold text-orange-700">{room.price}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                            <Heart className="w-5 h-5 text-pink-600 mr-2" />
                            Best For
                          </h4>
                          <ul className="space-y-1">
                            {resort.bestFor.map((item, i) => (
                              <li key={i} className="text-sm text-gray-700 flex items-start">
                                <span className="text-pink-600 mr-2">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                            <TrendingUp className="w-5 h-5 text-orange-600 mr-2" />
                            Insider Tips
                          </h4>
                          <ul className="space-y-1">
                            {resort.insiderTips.slice(0, 3).map((tip, i) => (
                              <li key={i} className="text-sm text-gray-700 flex items-start">
                                <span className="text-orange-600 mr-2">→</span>
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {resort.cons && (
                        <div className="mb-6 bg-amber-50 border-l-4 border-amber-600 p-4 rounded">
                          <h4 className="text-sm font-bold text-gray-900 mb-2">Considerations:</h4>
                          <ul className="space-y-1">
                            {resort.cons.map((con, i) => (
                              <li key={i} className="text-sm text-gray-700">• {con}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white p-4 rounded-lg">
                        <p className="text-sm font-semibold flex items-center">
                          <Globe className="w-4 h-4 mr-2" />
                          {resort.booking}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="booking-strategies">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-[#D91680] pb-3">
                Booking Strategies & Tips
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">When to Book</h3>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">High Season (Nov-Apr)</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Book 2-4 months in advance (best rates and availability)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Christmas/New Year: 6+ months (peak pricing, sells out)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Chinese New Year: 4-6 months (February spike)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Low Season (May-Oct)</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Book 1-2 weeks in advance (better deals)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Last-minute deals common (30-50% off)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>More flexibility</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Where to Book</h3>

                <div className="space-y-4 mb-8">
                  <div className="bg-gradient-to-r from-[#D91680] to-pink-600 text-white p-6 rounded-lg">
                    <h4 className="text-lg font-bold mb-2 flex items-center">
                      <Award className="w-5 h-5 mr-2" />
                      Direct with Hotel (BEST)
                    </h4>
                    <p className="text-sm opacity-90">Often lowest rates with price match guarantee, best perks (breakfast, upgrades, credits), loyalty program benefits, flexible cancellation</p>
                  </div>

                  <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6 rounded-lg">
                    <h4 className="text-lg font-bold mb-2">Luxury Travel Agencies</h4>
                    <p className="text-sm opacity-90">Virtuoso, Four Seasons Preferred Partner - Added amenities ($100 spa credit, room upgrade, breakfast), no extra cost, personalized service</p>
                  </div>

                  <div className="bg-gradient-to-r from-gray-600 to-gray-700 text-white p-6 rounded-lg">
                    <h4 className="text-lg font-bold mb-2">Credit Card Portals</h4>
                    <p className="text-sm opacity-90">Amex Fine Hotels & Resorts (FHR), Visa Luxury Hotel Collection - Premium perks included, only for cardholders</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Get Upgrades</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700"><strong>Book direct</strong> - Better upgrade chances</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700"><strong>Join loyalty programs</strong> - Free, instant status sometimes</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700"><strong>Mention special occasions</strong> - Honeymoon, anniversary, birthday</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700"><strong>Travel off-peak</strong> - More inventory for upgrades</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700"><strong>Be nice to staff</strong> - Genuinely helps!</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700"><strong>Request early</strong> - At booking, not check-in</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="hotel-comparison">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-[#D91680] pb-3">
                Luxury Hotel Comparison
              </h2>

              <div className="grid gap-6">
                <div className="bg-white rounded-lg shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Heart className="w-6 h-6 text-pink-600 mr-3" />
                    Best for Families
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-pink-50 p-4 rounded-lg">
                      <span className="font-semibold text-gray-900">1. Four Seasons Koh Samui</span>
                      <span className="text-sm text-gray-600">Excellent kids club</span>
                    </div>
                    <div className="flex items-center justify-between bg-pink-50 p-4 rounded-lg">
                      <span className="font-semibold text-gray-900">2. Four Seasons Chiang Mai</span>
                      <span className="text-sm text-gray-600">Rice paddy activities for kids</span>
                    </div>
                    <div className="flex items-center justify-between bg-pink-50 p-4 rounded-lg">
                      <span className="font-semibold text-gray-900">3. Trisara Phuket</span>
                      <span className="text-sm text-gray-600">Spacious villas with private pools</span>
                    </div>
                    <div className="flex items-center justify-between bg-pink-50 p-4 rounded-lg">
                      <span className="font-semibold text-gray-900">4. St. Regis Bangkok</span>
                      <span className="text-sm text-gray-600">Butler helps with family needs</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Heart className="w-6 h-6 text-red-600 mr-3" />
                    Best for Romance
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-red-50 p-4 rounded-lg">
                      <span className="font-semibold text-gray-900">1. Rayavadee Krabi</span>
                      <span className="text-sm text-gray-600">Limestone cliffs, boat access</span>
                    </div>
                    <div className="flex items-center justify-between bg-red-50 p-4 rounded-lg">
                      <span className="font-semibold text-gray-900">2. Amanpuri Phuket</span>
                      <span className="text-sm text-gray-600">Ultimate privacy</span>
                    </div>
                    <div className="flex items-center justify-between bg-red-50 p-4 rounded-lg">
                      <span className="font-semibold text-gray-900">3. Conrad Koh Samui</span>
                      <span className="text-sm text-gray-600">Sunset villas, intimate</span>
                    </div>
                    <div className="flex items-center justify-between bg-red-50 p-4 rounded-lg">
                      <span className="font-semibold text-gray-900">4. Peninsula Bangkok</span>
                      <span className="text-sm text-gray-600">Colonial elegance</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <TrendingUp className="w-6 h-6 text-green-600 mr-3" />
                    Best Value Luxury
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-green-50 p-4 rounded-lg">
                      <span className="font-semibold text-gray-900">1. Sri Panwa Phuket</span>
                      <span className="text-sm text-gray-600">$350/night pool villa with views</span>
                    </div>
                    <div className="flex items-center justify-between bg-green-50 p-4 rounded-lg">
                      <span className="font-semibold text-gray-900">2. Conrad Koh Samui</span>
                      <span className="text-sm text-gray-600">$400/night ocean view pool villa</span>
                    </div>
                    <div className="flex items-center justify-between bg-green-50 p-4 rounded-lg">
                      <span className="font-semibold text-gray-900">3. St. Regis Bangkok</span>
                      <span className="text-sm text-gray-600">$250/night with butler service</span>
                    </div>
                    <div className="flex items-center justify-between bg-green-50 p-4 rounded-lg">
                      <span className="font-semibold text-gray-900">4. Dhara Dhevi Chiang Mai</span>
                      <span className="text-sm text-gray-600">$300/night palace experience</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Sparkles className="w-6 h-6 text-purple-600 mr-3" />
                    Best for Wellness
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-purple-50 p-4 rounded-lg">
                      <span className="font-semibold text-gray-900">1. Six Senses Samui</span>
                      <span className="text-sm text-gray-600">Holistic spa programs</span>
                    </div>
                    <div className="flex items-center justify-between bg-purple-50 p-4 rounded-lg">
                      <span className="font-semibold text-gray-900">2. Rayavadee Krabi</span>
                      <span className="text-sm text-gray-600">Yoga, kayaking, rock climbing</span>
                    </div>
                    <div className="flex items-center justify-between bg-purple-50 p-4 rounded-lg">
                      <span className="font-semibold text-gray-900">3. Four Seasons Chiang Mai</span>
                      <span className="text-sm text-gray-600">Rice paddy meditation</span>
                    </div>
                    <div className="flex items-center justify-between bg-purple-50 p-4 rounded-lg">
                      <span className="font-semibold text-gray-900">4. Amanpuri Phuket</span>
                      <span className="text-sm text-gray-600">Comprehensive wellness center</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="what-to-expect">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-[#D91680] pb-3">
                What to Expect at Luxury Hotels
              </h2>

              <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Standards</h3>

                <div className="mb-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Thai Hospitality</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700"><strong>Wai greeting</strong> - Traditional bow with hands together</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700"><strong>Staff remember your name</strong> - Immediately</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700"><strong>Anticipatory service</strong> - Needs met before asking</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700"><strong>Genuine warmth</strong> - Not just professional</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Common Luxuries Included</h4>
                  <div className="grid md:grid-cols-3 gap-3">
                    {[
                      'Welcome drinks and cold towels',
                      'Fruit plate and welcome amenities',
                      'Turndown service',
                      'Twice-daily housekeeping',
                      'Concierge services',
                      'Infinity pools',
                      'Premium toiletries',
                      'Plush robes and slippers',
                      'In-room espresso machines',
                      'High-thread-count linens',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start bg-blue-50 p-3 rounded">
                        <Sparkles className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#D91680] to-pink-600 text-white p-6 rounded-lg">
                  <h4 className="text-lg font-bold mb-3">Butler Service (Where Offered)</h4>
                  <p className="text-sm opacity-90 mb-3">Available at St. Regis Bangkok and ultra-luxury resorts:</p>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li>• Unpacking and packing</li>
                    <li>• Pressing clothes</li>
                    <li>• Arranging reservations and activities</li>
                    <li>• In-room dining setup</li>
                    <li>• Drawing baths</li>
                    <li>• Anything you need really!</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Typical Room Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { label: 'Size', value: '50sqm+ (larger than standard hotels)' },
                    { label: 'Outdoor Space', value: 'Private balcony or terrace' },
                    { label: 'Bathroom', value: 'Separate tub and rain shower' },
                    { label: 'Toiletries', value: 'Premium (L\'Occitane, Molton Brown, Hermès)' },
                    { label: 'Bed', value: 'King beds with luxury linens' },
                    { label: 'Coffee', value: 'Espresso machine' },
                    { label: 'Entertainment', value: 'Smart TV with streaming' },
                    { label: 'Technology', value: 'Bluetooth speakers, USB charging' },
                    { label: 'Storage', value: 'Safe large enough for laptops' },
                    { label: 'Comfort', value: 'Blackout curtains' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg">
                      <span className="font-semibold text-gray-900">{item.label}</span>
                      <span className="text-sm text-gray-600 text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="faq">
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6 uppercase tracking-[2px] border-b-2 border-[#D91680] pb-3">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {[
                  {
                    q: 'Are luxury hotels in Thailand worth the price?',
                    a: 'Absolutely. Thailand luxury hotels offer 40-60% better value than comparable properties in Europe, Maldives, or Caribbean. $400-600/night gets you what would cost $1,000-1,500 elsewhere, with better service.',
                  },
                  {
                    q: 'Should I stay in Bangkok or beach resort first?',
                    a: 'Depends on flight timing. Arrive early: Start in Bangkok (1-2 nights to adjust), then beach. Arrive evening: Head straight to beach, save Bangkok for end. Most do beach first (relax), Bangkok last (shopping and culture).',
                  },
                  {
                    q: 'How much should I tip?',
                    a: 'Luxury hotels include service charge (10% on bill). Additional tipping: 100-200 THB for exceptional service, 100 THB for room attendant (leave daily), 200 THB for spa therapist, 500-1,000 THB for butler (per stay).',
                  },
                  {
                    q: 'Can I get late checkout?',
                    a: 'Often yes at luxury hotels, especially if you ask nicely and not fully booked. Standard checkout 12pm, request 2-4pm free, sometimes 6pm for elite members. Worth asking even without status.',
                  },
                  {
                    q: 'Should I book airport transfer?',
                    a: 'Yes at luxury hotels. Usually complimentary or $50-100. Private car more comfortable than taxi after long flight. Hotels arrange meeting with nameplate, professional drivers.',
                  },
                  {
                    q: 'Can I visit hotel if not staying?',
                    a: 'Restaurants and bars usually open to non-guests. Some hotels (Amanpuri, Rayavadee) restrict pool and beach to guests only. Rooftop bars often accessible. Call ahead to confirm.',
                  },
                  {
                    q: 'Which is better: Bangkok luxury hotel or beach resort?',
                    a: 'Different experiences! Bangkok: urban sophistication, rooftop bars, shopping, culture. Beach: relaxation, private pools, beach access, water sports. Most Thailand itineraries include both.',
                  },
                  {
                    q: 'Are luxury hotels family-friendly?',
                    a: 'Most yes, some more than others. Best for families: Four Seasons (both locations), Trisara Phuket, St. Regis Bangkok. Less family-focused: Amanpuri, Conrad Samui, Rayavadee (though kids not prohibited).',
                  },
                ].map((faq, i) => (
                  <div key={i} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Award className="w-5 h-5 text-[#D91680] mr-2" />
                Quick Navigation
              </h3>
              <nav className="space-y-2 text-sm">
                <a href="#bangkok-hotels" className="block text-gray-700 hover:text-[#D91680] transition-colors">
                  → Bangkok Hotels
                </a>
                <a href="#phuket-resorts" className="block text-gray-700 hover:text-[#D91680] transition-colors">
                  → Phuket Resorts
                </a>
                <a href="#koh-samui-resorts" className="block text-gray-700 hover:text-[#D91680] transition-colors">
                  → Koh Samui Resorts
                </a>
                <a href="#chiang-mai-hotels" className="block text-gray-700 hover:text-[#D91680] transition-colors">
                  → Chiang Mai Hotels
                </a>
                <a href="#krabi-resorts" className="block text-gray-700 hover:text-[#D91680] transition-colors">
                  → Krabi Resorts
                </a>
                <a href="#booking-strategies" className="block text-gray-700 hover:text-[#D91680] transition-colors">
                  → Booking Strategies
                </a>
                <a href="#hotel-comparison" className="block text-gray-700 hover:text-[#D91680] transition-colors">
                  → Hotel Comparison
                </a>
                <a href="#what-to-expect" className="block text-gray-700 hover:text-[#D91680] transition-colors">
                  → What to Expect
                </a>
                <a href="#faq" className="block text-gray-700 hover:text-[#D91680] transition-colors">
                  → FAQ
                </a>
              </nav>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 text-[#D91680] mr-2" />
                Price Guide
              </h3>
              <div className="space-y-4 text-sm">
                <div className="pb-3 border-b border-gray-200">
                  <p className="text-gray-600 mb-1">Budget Luxury</p>
                  <p className="font-bold text-gray-900">$250-400/night</p>
                </div>
                <div className="pb-3 border-b border-gray-200">
                  <p className="text-gray-600 mb-1">Premium Luxury</p>
                  <p className="font-bold text-gray-900">$400-700/night</p>
                </div>
                <div className="pb-3 border-b border-gray-200">
                  <p className="text-gray-600 mb-1">Ultra Luxury</p>
                  <p className="font-bold text-gray-900">$700-1,500/night</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Exclusive Elite</p>
                  <p className="font-bold text-gray-900">$1,500+/night</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Sparkles className="w-5 h-5 text-[#D91680] mr-2" />
                Top Picks
              </h3>
              <div className="space-y-3 text-sm">
                <div className="bg-gradient-to-r from-pink-50 to-red-50 p-3 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-1">Best for Families</p>
                  <p className="text-gray-600">Four Seasons Koh Samui</p>
                </div>
                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-3 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-1">Best for Romance</p>
                  <p className="text-gray-600">Rayavadee Krabi</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-1">Best Value</p>
                  <p className="text-gray-600">Sri Panwa Phuket</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-1">Best for Wellness</p>
                  <p className="text-gray-600">Six Senses Samui</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#D91680] to-pink-700 text-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">Booking Pro Tip</h3>
              <p className="text-sm text-white/90 mb-3">
                Book directly with hotels for best perks: complimentary breakfast, room upgrades, spa credits, and late checkout.
              </p>
              <p className="text-xs text-white/80">
                High season: Book 2-4 months ahead • Low season: Book 1-2 weeks ahead for deals
              </p>
            </div>
          </aside>
        </div>

        <RelatedGuides
          guides={[
            { title: 'Bangkok Travel Guide', path: '/bangkok' },
            { title: 'Best Time to Visit Thailand', path: '/best-time-to-visit' },
            { title: 'Thailand Budget Guide', path: '/budget-guide' },
          ]}
        />

        <YouMayAlsoLike
          links={[
            { title: 'Phuket Destination Guide', path: '/phuket' },
            { title: 'Luxury Yacht Charters', path: '/yacht-charter-thailand' },
            { title: 'Where to Stay in Bangkok', path: '/where-to-stay-bangkok' },
          ]}
        />
      </div>
    </div>
  );
}
