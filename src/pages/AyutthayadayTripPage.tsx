import { useState } from 'react';
import {
  MapPin,
  Clock,
  DollarSign,
  Calendar,
  Camera,
  Compass,
  Train,
  Sun,
  Bike,
  Car,
  Ship,
  Users,
  Info,
  Utensils,
  Banknote,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  Send,
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { usePageMeta } from '../hooks/usePageMeta';
import RelatedGuides from '../components/RelatedGuides';
import { supabase } from '../lib/supabase';

interface Temple {
  name: string;
  description: string;
  features: string[];
  history: string;
  photoTips: string;
  entry: string;
  timeNeeded: string;
  mustSee: string;
  image: string;
}

interface TransportOption {
  name: string;
  duration: string;
  cost: string;
  pros: string[];
  cons: string[];
  bestFor: string;
  icon: typeof Train;
  color: string;
  iconBg: string;
  iconColor: string;
}

interface FAQ {
  question: string;
  answer: string;
}

export default function AyutthayaDayTripPage() {
  usePageMeta({
    title: 'Ayutthaya Day Trip from Bangkok - Complete Guide 2026',
    description:
      'Complete guide to visiting Ayutthaya from Bangkok. Ancient temples, UNESCO World Heritage Site, transport options, costs, and itinerary planning for the perfect day trip.',
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    travelDate: '',
    groupSize: '',
    interests: '',
    message: '',
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
          message: `Ayutthaya Trip Planning
Travel Date: ${formData.travelDate}
Group Size: ${formData.groupSize}
Interests: ${formData.interests}

Additional Message:
${formData.message}`,
          page: 'Ayutthaya Day Trip',
        },
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        travelDate: '',
        groupSize: '',
        interests: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to submit your request. Please try again.');
    }
  };

  const quickFacts = [
    {
      icon: MapPin,
      label: 'Distance from Bangkok',
      value: '80 kilometers north',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      icon: Clock,
      label: 'Travel time',
      value: '1.5 hours by train or minivan',
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
    {
      icon: Calendar,
      label: 'Day trip duration',
      value: '6-8 hours total',
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
    {
      icon: Camera,
      label: 'Best for',
      value: 'History lovers, temple enthusiasts, photographers',
      color: 'text-orange-600',
      bg: 'bg-orange-50',
    },
    {
      icon: DollarSign,
      label: 'Cost',
      value: '1000-2000 baht per person including transport and entry fees',
      color: 'text-red-600',
      bg: 'bg-red-50',
    },
    {
      icon: Sun,
      label: 'Best time to visit',
      value: 'November to February (cooler weather)',
      color: 'text-yellow-600',
      bg: 'bg-yellow-50',
    },
  ];

  const temples: Temple[] = [
    {
      name: 'Wat Phra Si Sanphet',
      description:
        'Wat Phra Si Sanphet was the holiest temple in the ancient capital of Ayutthaya and served as the royal temple within the grounds of the former Royal Palace. Built in 1448 during the reign of King Borommatrailokanat, it became the model for Bangkok\'s famous Wat Phra Kaew. The temple is distinguished by its three magnificent chedis (stupas) built in classic Sri Lankan style, which house the ashes of three Ayutthaya kings. These restored stupas rise dramatically against the sky and are among the most photographed structures in Ayutthaya. During its heyday, the temple contained a 16-meter standing Buddha covered in 250 kilograms of gold, which was melted down by Burmese invaders. Today, visitors can explore the ruins and imagine the splendor of the former royal complex.',
      features: [
        'Three iconic chedis containing royal ashes',
        'Former site of massive golden Buddha',
        'Located within old Royal Palace grounds',
        'Classic example of Ayutthaya architecture',
      ],
      history:
        'Served as the royal temple from 1448 until the fall of Ayutthaya in 1767. The three chedis were built by successive kings to house the ashes of their fathers.',
      photoTips:
        'Best photographed in late afternoon when golden light hits the chedis. Wide-angle lens captures all three stupas together. Drone shots reveal the temple\'s relationship to the palace grounds.',
      entry: '50 baht (included in Ayutthaya Historical Park pass)',
      timeNeeded: '45 minutes to 1 hour',
      mustSee: 'The three restored chedis and the palace ground ruins',
      image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Wat Mahathat',
      description:
        'Wat Mahathat is perhaps the most famous temple in Ayutthaya, known worldwide for the iconic Buddha head entwined in the roots of a Bodhi tree. Built in 1374 during the reign of King Borommarachathirat I, this temple was one of the kingdom\'s most important monasteries and served as the residence of the Supreme Patriarch of Thai Buddhism. The temple complex once featured a towering central prang (Khmer-style tower) surrounded by smaller prangs and hundreds of Buddha images. During the 1767 Burmese invasion, the temple was systematically destroyed and many Buddha images were decapitated. The famous Buddha head is believed to have been left behind when looters abandoned a stolen Buddha head, which became embraced by the growing roots over centuries. The ruins showcase typical Ayutthaya architecture with remaining prangs, crumbling walls, and headless Buddha statues creating a hauntingly beautiful atmosphere.',
      features: [
        'Iconic Buddha head in tree roots',
        'Remains of once-towering central prang',
        'Extensive ruins with multiple chedis',
        'Former residence of Supreme Patriarch',
      ],
      history:
        'Founded in 1374, served as one of the most important temples in Ayutthaya. Housed sacred Buddhist relics in its central prang before being destroyed in 1767.',
      photoTips:
        'When photographing the Buddha head in tree roots, you must kneel or crouch so your head is lower than the Buddha (sign of respect). Early morning or late afternoon provides the best light and fewer crowds.',
      entry: '50 baht (included in Ayutthaya Historical Park pass)',
      timeNeeded: '1 to 1.5 hours',
      mustSee: 'Buddha head in tree roots - the most photographed spot in Ayutthaya',
      image: 'https://images.pexels.com/photos/3566187/pexels-photo-3566187.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Wat Chaiwatthanaram',
      description:
        'Wat Chaiwatthanaram is arguably the most visually stunning temple in Ayutthaya, built in 1630 by King Prasat Thong to honor his mother and commemorate his victory over Cambodia. The temple was designed in the Khmer style reminiscent of Cambodia\'s Angkor Wat, reflecting the cultural influences of the region. The complex features a magnificent central prang (35 meters tall) surrounded by four smaller prangs and eight chedis, all positioned on a rectangular platform. The temple sits majestically beside the Chao Phraya River on the west bank of the historic island city. Its symmetrical layout and dramatic silhouette make it especially photogenic during sunrise and sunset when the structures reflect in the river. The temple was restored by Thailand\'s Fine Arts Department and is now in excellent condition, allowing visitors to truly appreciate Ayutthaya\'s former grandeur.',
      features: [
        'Khmer-style architecture similar to Angkor Wat',
        'Impressive 35-meter central prang',
        'Beautiful riverside location',
        'Sunset/sunrise viewing platform',
      ],
      history:
        'Built in 1630 by King Prasat Thong as a memorial to his mother. Used by royal family for religious ceremonies. Extensively restored in 1987-1992.',
      photoTips:
        'Sunset is magical here - arrive 45 minutes before sunset for golden hour photography. The reflection in the river creates stunning compositions. The temple is lit up beautifully at night.',
      entry: '50 baht',
      timeNeeded: '1 to 1.5 hours (arrive early for sunrise or late for sunset)',
      mustSee: 'Central prang and surrounding chedis, especially at sunset',
      image: 'https://images.pexels.com/photos/3566189/pexels-photo-3566189.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Wat Ratchaburana',
      description:
        'Wat Ratchaburana was built in 1424 by King Borommarachathirat II on the cremation site of his two elder brothers who died fighting each other for succession to the throne. The temple is famous for its towering Khmer-style prang which visitors can climb to explore interior chambers containing some of Ayutthaya\'s finest surviving murals. In 1958, treasure hunters broke into the underground crypt and stole golden artifacts that had been sealed for centuries. Police recovered many items which are now displayed at the Chao Sam Phraya National Museum. The temple\'s prang is one of the few in Ayutthaya that allows visitors to climb its steep interior stairs, providing a unique perspective and understanding of ancient architectural techniques. The crypt area features murals depicting jataka tales and celestial beings, offering rare insight into 15th-century Thai art and religious beliefs.',
      features: [
        'Climbable prang with interior chambers',
        'Ancient murals in crypt area',
        'Underground treasure chamber (historical)',
        'Views from top of prang',
      ],
      history:
        'Built in 1424 as a memorial to two princes who died in succession battle. Famous for the 1958 robbery when treasures were stolen from the crypt.',
      photoTips:
        'The steep climb up the prang interior is worth it for unique photos from above. The murals inside the crypt are best photographed without flash. Wide shots capture the dramatic height of the prang.',
      entry: '50 baht (included in Ayutthaya Historical Park pass)',
      timeNeeded: '45 minutes to 1 hour',
      mustSee: 'Climb the prang and view the ancient murals in the crypt',
      image: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Wat Phu Khao Thong (Golden Mount)',
      description:
        'Wat Phu Khao Thong, meaning "Golden Mount Temple," stands magnificently outside the main island of Ayutthaya\'s historical park. This temple features a massive 80-meter tall white chedi (stupa) that can be seen from miles away, serving as a landmark visible across the entire region. Originally built by the Burmese during their occupation of Ayutthaya in 1569 to commemorate their victory, it was later reclaimed and modified by Thai kings. The chedi sits atop a square base that visitors can climb via a series of steep staircases, with rest platforms at intervals offering increasingly spectacular panoramic views. From the top, you can see the entire Ayutthaya plains, the rivers, and numerous temple ruins dotting the landscape. The climb involves 75 steps, but the 360-degree views from the upper terraces are breathtaking and provide excellent photo opportunities of the surrounding countryside.',
      features: [
        'Massive 80-meter tall white chedi',
        'Panoramic views of Ayutthaya from top',
        'Located outside main historical park',
        '75-step climb with rest platforms',
      ],
      history:
        'Built by Burmese in 1569 to mark their conquest, later modified by King Borommarachathirat III. Restored in 1956 to commemorate 2,500 years of Buddhism.',
      photoTips:
        'Climb to the top for 360-degree views of Ayutthaya plains. Late afternoon light creates beautiful shadows on the white chedi. The view looking down the steep stairs makes for dramatic compositions.',
      entry: 'Free',
      timeNeeded: '30 to 45 minutes',
      mustSee: 'Climb to the top for panoramic views of Ayutthaya',
      image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Wat Lokayasutharam (Reclining Buddha)',
      description:
        'Wat Lokayasutharam is home to one of the most impressive Buddha images in Ayutthaya - a massive 42-meter long and 8-meter tall reclining Buddha statue resting in the open air. Unlike most other temples in Ayutthaya, very little remains of the original structures except this enormous brick and stucco Buddha figure draped in bright orange cloth. The reclining Buddha represents the Buddha entering Nirvana, a key moment in Buddhist cosmology. Despite being exposed to the elements for centuries, the statue remains remarkably intact and well-maintained by local devotees who regularly clean and re-drape it. The temple grounds are peaceful and less touristy than the major temples, making it a contemplative stop. Locals come here to make merit, leaving offerings of gold leaf, incense, and flowers. The sheer scale of the Buddha is awe-inspiring when you stand at its feet and look up at the serene face.',
      features: [
        '42-meter long open-air reclining Buddha',
        'Draped in traditional orange cloth',
        'Peaceful, less crowded temple',
        'Active site for local merit-making',
      ],
      history:
        'Built during the late Ayutthaya period. The temple was destroyed in 1767, but the large reclining Buddha survived. Restored in 1954 with orange robes added.',
      photoTips:
        'Photograph from the feet looking up toward the head for dramatic scale. The orange cloth creates vibrant color contrast against blue sky. Visit mid-morning when sunlight illuminates the Buddha\'s face.',
      entry: 'Free (donation appreciated)',
      timeNeeded: '20 to 30 minutes',
      mustSee: 'The massive 42-meter reclining Buddha',
      image: 'https://images.pexels.com/photos/6062177/pexels-photo-6062177.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const transportOptions: TransportOption[] = [
    {
      name: 'Train from Bangkok',
      duration: '1.5 to 2 hours',
      cost: '15-20 baht (3rd class) or 300+ baht (1st class)',
      pros: [
        'Super cheap and authentic experience',
        'Frequent departures throughout the day',
        'Scenic route through Thai countryside',
        'Arrives at Ayutthaya center',
      ],
      cons: [
        '3rd class can be crowded and uncomfortable',
        'No air conditioning in 3rd class',
        'May have delays',
        'Need local transport once you arrive',
      ],
      bestFor: 'Budget travelers and those seeking authentic Thai experience',
      icon: Train,
      color: 'border-blue-500',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      name: 'Minivan from Bangkok',
      duration: '1 to 1.5 hours',
      cost: '60-100 baht per person',
      pros: [
        'Faster than train',
        'Air-conditioned comfort',
        'Direct to Ayutthaya',
        'Frequent departures from Victory Monument or Mo Chit',
      ],
      cons: [
        'Can feel cramped with luggage',
        'Drivers sometimes speed',
        'May wait for minivan to fill up',
        'Need local transport once you arrive',
      ],
      bestFor: 'Budget travelers wanting more comfort than train',
      icon: Car,
      color: 'border-green-500',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      name: 'Organized Tour',
      duration: 'Full day (8-10 hours including transport)',
      cost: '1,000-2,000 baht per person',
      pros: [
        'Everything arranged (transport, guide, entry fees)',
        'Knowledgeable English-speaking guide',
        'Visit main temples efficiently',
        'Often includes lunch',
      ],
      cons: [
        'More expensive',
        'Fixed schedule with less flexibility',
        'Group setting may feel rushed',
        'Less authentic experience',
      ],
      bestFor: 'First-time visitors, those who want convenience and historical context',
      icon: Users,
      color: 'border-amber-500',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600',
    },
    {
      name: 'Private Car/Taxi',
      duration: '1 to 1.5 hours each way',
      cost: '2,000-3,000 baht round trip',
      pros: [
        'Most comfortable option',
        'Flexible timing and itinerary',
        'Door-to-door service',
        'Can stop along the way',
      ],
      cons: [
        'Most expensive option',
        'Need to negotiate price upfront',
        'May need to pay for driver waiting time',
        'Still need local transport at temples',
      ],
      bestFor: 'Families, groups, those wanting maximum comfort and flexibility',
      icon: Car,
      color: 'border-red-500',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
    },
  ];

  const explorationMethods = [
    {
      name: 'Bicycle',
      cost: '50-100 baht per day',
      description:
        'Cycling is the most popular way to explore Ayutthaya. The historical park is flat and easy to navigate. Rent bikes near the train station or your hotel. Allows you to visit temples at your own pace and discover hidden ruins between major sites.',
      pros: ['Cheap and flexible', 'Great for photos', 'Eco-friendly', 'Good exercise'],
      cons: ['Hot in summer months', 'Can be tiring', 'Limited bike quality', 'No storage for belongings'],
      icon: Bike,
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
    {
      name: 'Tuk-Tuk',
      cost: '200-300 baht per hour (negotiable)',
      description:
        'Hire a tuk-tuk for a few hours or full day. Driver will take you to main temples and wait while you explore. Negotiate price and itinerary before starting. Most drivers speak basic English and know the key sites.',
      pros: ['No physical effort', 'Protection from sun', 'Driver knows locations', 'Good for limited mobility'],
      cons: ['More expensive', 'Less flexibility', 'Rushed at each stop', 'Need to negotiate price'],
      icon: Car,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
    {
      name: 'Boat Tour',
      cost: '200-500 baht per person',
      description:
        'River boat tours offer a unique perspective of Ayutthaya temples from the water. See Wat Chaiwatthanaram and other riverside temples. Usually 1-2 hour tours departing from various piers. Some tours combine boat with land visits.',
      pros: ['Unique perspective', 'Cooler than cycling', 'Relaxing experience', 'Great photos from water'],
      cons: ['Limited temple visits', 'Fixed schedule', 'Only see riverside temples', 'Weather dependent'],
      icon: Ship,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      name: 'Guided Tour',
      cost: '1,500-2,500 baht per person',
      description:
        'Join an organized tour with English-speaking guide. Transport between temples, entry fees, and lunch often included. Guide provides historical context and stories. Small group or private tours available.',
      pros: ['Expert commentary', 'Efficient route', 'Everything arranged', 'Learn history'],
      cons: ['Most expensive', 'Fixed schedule', 'Group pace', 'Less spontaneous'],
      icon: Users,
      color: 'text-red-600',
      bg: 'bg-red-50',
    },
  ];

  const itinerary = [
    { time: '7:00 AM', activity: 'Depart Bangkok by train or minivan' },
    { time: '8:30 AM', activity: 'Arrive Ayutthaya, rent bicycle or hire tuk-tuk' },
    { time: '9:00 AM', activity: 'Visit Wat Phra Si Sanphet (45 min)' },
    { time: '10:00 AM', activity: 'Visit Wat Mahathat with famous Buddha head (1 hour)' },
    { time: '11:15 AM', activity: 'Visit Wat Ratchaburana, climb the prang (45 min)' },
    { time: '12:15 PM', activity: 'Lunch break - try local boat noodles or roti sai mai (1 hour)' },
    { time: '1:15 PM', activity: 'Visit Wat Lokayasutharam reclining Buddha (30 min)' },
    { time: '2:00 PM', activity: 'Visit Wat Phu Khao Thong, climb for panoramic views (45 min)' },
    { time: '3:00 PM', activity: 'Head to Wat Chaiwatthanaram for sunset (1.5 hours)' },
    { time: '4:45 PM', activity: 'Return bicycle/tuk-tuk, head to station' },
    { time: '5:30 PM', activity: 'Depart Ayutthaya for Bangkok' },
    { time: '7:00 PM', activity: 'Arrive Bangkok' },
  ];

  const foodGuide = [
    {
      name: 'Boat Noodles (Kuay Tiew Reua)',
      description:
        'Small bowls of rich, flavorful noodle soup with beef or pork. Originally served from boats, now at street stalls. Order multiple bowls for a full meal.',
      where: 'Boat noodle stalls near Chao Phrom Market',
      price: '10-15 baht per bowl',
    },
    {
      name: 'Roti Sai Mai',
      description:
        'Ayutthaya\'s most famous dessert - colorful cotton candy-like strands wrapped in thin roti pancake. Sweet and fun to eat. Makes great photos.',
      where: 'Shops along Naresuan Road and night market',
      price: '20-40 baht per packet',
    },
    {
      name: 'Giant River Prawns',
      description:
        'Massive freshwater prawns grilled or in curry. Ayutthaya is famous for these enormous prawns from the rivers. Best restaurants specialize in them.',
      where: 'Restaurants along the riverside',
      price: '300-800 baht depending on size',
    },
    {
      name: 'Ayutthaya-style Pad Thai',
      description:
        'Local version uses wider noodles and is less sweet than Bangkok style. Often includes river prawns. Cooked over charcoal for smoky flavor.',
      where: 'Night market and local restaurants',
      price: '40-80 baht',
    },
  ];

  const tips = [
    {
      icon: Sun,
      title: 'Beat the Heat',
      tip: 'Ayutthaya gets extremely hot, especially March-May. Start early (before 9 AM), take breaks in shade, drink lots of water. Wear hat and sunscreen.',
      color: 'text-orange-600',
      bg: 'bg-orange-50',
    },
    {
      icon: Camera,
      title: 'Dress Appropriately',
      tip: 'Temples require covered shoulders and knees. Bring a sarong or long pants. Some temples rent coverings but quality varies. No shoes inside temple buildings.',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      icon: Banknote,
      title: 'Bring Cash',
      tip: 'Most places in Ayutthaya only accept cash. Bring 1,500-2,000 baht for entry fees, food, bike rental, and emergencies. ATMs available near station.',
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
    {
      icon: Clock,
      title: 'Timing Matters',
      tip: 'Visit Wat Chaiwatthanaram last for sunset (around 5-6 PM depending on season). Early morning is best for photos with fewer crowds and softer light.',
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
    {
      icon: AlertTriangle,
      title: 'Watch for Scams',
      tip: 'At train station, tuk-tuk drivers may quote inflated prices or insist certain temples are closed. Agree on price before getting in. Temples are rarely closed.',
      color: 'text-red-600',
      bg: 'bg-red-50',
    },
    {
      icon: Info,
      title: 'Historical Park Pass',
      tip: 'Buy the 220 baht combo ticket covering 6 main temples if visiting multiple sites. Individual entry is 50 baht each. Pass valid for one day.',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
  ];

  const faqs: FAQ[] = [
    {
      question: 'Is one day enough for Ayutthaya?',
      answer:
        'Yes, one day is sufficient to see the main highlights of Ayutthaya. A full day trip (6-8 hours at the site) allows you to comfortably visit 6-8 major temples including Wat Mahathat, Wat Phra Si Sanphet, Wat Chaiwatthanaram, and the reclining Buddha. Start early to beat the heat and crowds. If you want a more leisurely pace, enjoy sunset at temples, or explore the night market, consider staying overnight. History enthusiasts might prefer 2 days to fully explore all temples and museums.',
    },
    {
      question: 'What is the best way to get from Bangkok to Ayutthaya?',
      answer:
        'The best option depends on your budget and preferences. Train is cheapest (15-20 baht for 3rd class) and most authentic, taking 1.5-2 hours from Hua Lamphong Station. Minivans are faster and more comfortable (60-100 baht, 1-1.5 hours) departing from Victory Monument or Mo Chit. For maximum convenience, join an organized tour (1,000-2,000 baht) which includes transport, guide, and entry fees. Private car/taxi (2,000-3,000 baht) offers the most flexibility but is the most expensive option.',
    },
    {
      question: 'How much does it cost to visit Ayutthaya temples?',
      answer:
        'Individual temple entry ranges from free (Wat Lokayasutharam, Wat Phu Khao Thong) to 50 baht per temple. The Ayutthaya Historical Park Pass costs 220 baht and covers 6 main temples (Wat Phra Si Sanphet, Wat Mahathat, Wat Ratchaburana, and others), which is good value if visiting multiple sites. Add transport costs (15-100 baht from Bangkok), bicycle rental (50-100 baht), food (150-300 baht), and you can easily do Ayutthaya for 500-800 baht per person on a budget, or 1,500-2,500 baht with organized tour.',
    },
    {
      question: 'Can I cycle around Ayutthaya, and is it safe?',
      answer:
        'Yes, cycling is the most popular way to explore Ayutthaya and is generally safe. The historical park is relatively flat and temples are 1-3 km apart, making it ideal for cycling. Bike rentals cost 50-100 baht per day at shops near the train station and hotels. However, be aware that it gets extremely hot (35-40C) especially March-May, so start early and take breaks. Road conditions vary - main roads are fine but some paths between temples are uneven. Watch for traffic on busier roads. If you\'re not comfortable cycling, hire a tuk-tuk instead.',
    },
    {
      question: 'What should I wear when visiting Ayutthaya temples?',
      answer:
        'Temples require respectful dress: cover shoulders and knees (no tank tops, shorts, or short skirts). Long, lightweight pants or a long skirt work well. Bring a sarong or shawl to cover up if needed - some temples rent coverings but quality varies. Remove shoes before entering any temple building (bring socks if you prefer). Wear comfortable walking shoes or sandals you can easily slip on and off. Don\'t forget a hat and sunscreen for protection from the intense sun. Light, breathable fabrics in light colors help stay cool.',
    },
    {
      question: 'When is the best time to visit Ayutthaya?',
      answer:
        'The best time to visit Ayutthaya is November to February during the cool season when temperatures are more comfortable (25-30C) and there\'s less rain. March to May is extremely hot (35-40C+) making cycling and walking quite challenging - visit early morning if traveling during this period. June to October is rainy season with frequent afternoon showers, but fewer tourists and lush green scenery. Some visitors prefer the monsoon season for dramatic cloudy skies in photos. For the best experience, arrive at temples early morning (7-9 AM) before heat and tour groups, and save Wat Chaiwatthanaram for sunset.',
    },
  ];

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Destinations', path: '/destinations' },
          { label: 'Ayutthaya Day Trip', path: '/ayutthaya-day-trip' },
        ]}
      />

      <div className="bg-gradient-to-b from-amber-900 to-amber-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Compass className="w-8 h-8 text-amber-300" />
              <span className="text-amber-300 font-semibold tracking-wider uppercase text-sm">
                UNESCO World Heritage Site
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 uppercase tracking-[3px]">
              Ayutthaya Day Trip
              <br />
              <span className="text-amber-300">from Bangkok</span>
            </h1>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl md:text-2xl text-amber-100 leading-relaxed">
                Ayutthaya was Thailand's capital for 417 years before being destroyed by the Burmese in 1767. Today
                it is a UNESCO World Heritage Site just 80 kilometers from Bangkok.
              </p>
              <p className="text-lg md:text-xl text-amber-200 leading-relaxed">
                Ancient temples, giant Buddha statues, and ruins scattered across an island city make Ayutthaya one
                of Thailand's most impressive historical sites.
              </p>
              <p className="text-lg text-amber-200 leading-relaxed">
                This comprehensive guide covers the 6 must-see temples, how to get there, what to see, costs, and how to plan your perfect day trip.
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
                Quick Overview
              </h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickFacts.map((fact, index) => {
                const Icon = fact.icon;
                return (
                  <div
                    key={index}
                    className={`${fact.bg} rounded-xl p-6 border-2 border-transparent hover:border-current transition-all duration-300 ${fact.color}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-full ${fact.bg} border-2 border-current flex-shrink-0`}>
                        <Icon className={`w-6 h-6 ${fact.color}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-2">{fact.label}</h3>
                        <p className="text-gray-700 leading-relaxed">{fact.value}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <div className="mb-16">
            <img
              src="https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Ancient temples of Ayutthaya ruins"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
            <p className="text-center text-gray-600 mt-4 italic">
              The ancient ruins of Ayutthaya - Thailand's former capital
            </p>
          </div>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                6 Must-See Temples
              </h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These are the essential temples to visit on your Ayutthaya day trip. Each offers unique architecture, history, and photo opportunities.
              </p>
            </div>

            <div className="space-y-12">
              {temples.map((temple, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-amber-50 rounded-2xl overflow-hidden shadow-lg border-2 border-amber-200"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative h-80 md:h-auto">
                      <img
                        src={temple.image}
                        alt={temple.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-amber-600 text-white px-4 py-2 rounded-full font-bold">
                        #{index + 1}
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{temple.name}</h3>
                      <p className="text-gray-700 leading-relaxed mb-6">{temple.description}</p>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                            Key Features
                          </h4>
                          <ul className="space-y-1">
                            {temple.features.map((feature, idx) => (
                              <li key={idx} className="text-gray-700 pl-7">
                                - {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-amber-300">
                          <div>
                            <p className="text-sm font-bold text-gray-600">ENTRY FEE</p>
                            <p className="text-gray-900">{temple.entry}</p>
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-600">TIME NEEDED</p>
                            <p className="text-gray-900">{temple.timeNeeded}</p>
                          </div>
                        </div>

                        <div className="bg-amber-100 rounded-lg p-4 border border-amber-300">
                          <p className="text-sm font-bold text-amber-900 mb-1">MUST SEE</p>
                          <p className="text-amber-900">{temple.mustSee}</p>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <p className="text-sm font-bold text-blue-900 mb-1 flex items-center gap-2">
                            <Camera className="w-4 h-4" />
                            PHOTO TIPS
                          </p>
                          <p className="text-blue-900 text-sm">{temple.photoTips}</p>
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
                Getting There from Bangkok
              </h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Multiple transport options available, from budget-friendly trains to comfortable organized tours.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {transportOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <div
                    key={index}
                    className={`bg-white rounded-xl shadow-lg border-2 ${option.color} p-8 hover:shadow-2xl transition-all duration-300`}
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-4 ${option.iconBg} rounded-full flex-shrink-0`}>
                        <Icon className={`w-8 h-8 ${option.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{option.name}</h3>
                        <div className="space-y-1">
                          <p className="text-gray-700">
                            <span className="font-semibold">Duration:</span> {option.duration}
                          </p>
                          <p className="text-gray-700">
                            <span className="font-semibold">Cost:</span> {option.cost}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="font-bold text-green-700 mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5" />
                          Pros
                        </p>
                        <ul className="space-y-1">
                          {option.pros.map((pro, idx) => (
                            <li key={idx} className="text-gray-700 text-sm pl-7">
                              - {pro}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="font-bold text-red-700 mb-2 flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5" />
                          Cons
                        </p>
                        <ul className="space-y-1">
                          {option.cons.map((con, idx) => (
                            <li key={idx} className="text-gray-700 text-sm pl-7">
                              - {con}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-sm font-bold text-gray-600 mb-1">BEST FOR</p>
                        <p className="text-gray-900">{option.bestFor}</p>
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
                How to Explore Ayutthaya
              </h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Once you arrive in Ayutthaya, you'll need local transport to visit the temples spread across the historical park.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {explorationMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <div
                    key={index}
                    className={`${method.bg} rounded-xl p-6 border-2 border-transparent hover:border-current transition-all duration-300`}
                  >
                    <div className={`w-16 h-16 ${method.bg} border-2 border-current rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`w-8 h-8 ${method.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{method.name}</h3>
                    <p className="text-center text-gray-700 font-semibold mb-4">{method.cost}</p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">{method.description}</p>

                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-bold text-green-700 mb-1">PROS</p>
                        <ul className="space-y-1">
                          {method.pros.map((pro, idx) => (
                            <li key={idx} className="text-gray-700 text-xs">
                              - {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-red-700 mb-1">CONS</p>
                        <ul className="space-y-1">
                          {method.cons.map((con, idx) => (
                            <li key={idx} className="text-gray-700 text-xs">
                              - {con}
                            </li>
                          ))}
                        </ul>
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
                Sample Day Trip Itinerary
              </h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A well-planned itinerary to see all the major temples comfortably in one day, including sunset at Wat Chaiwatthanaram.
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 border-2 border-blue-200">
              <div className="space-y-4">
                {itinerary.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white rounded-lg border border-blue-200 hover:border-blue-400 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-blue-900 mb-1">{item.time}</p>
                      <p className="text-gray-700 leading-relaxed">{item.activity}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-amber-100 rounded-lg p-6 border-2 border-amber-300">
                <p className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  Flexibility Note
                </p>
                <p className="text-amber-900 leading-relaxed">
                  This itinerary is a suggestion and can be adjusted based on your pace, interests, and transportation method. If cycling, you may need more time between temples. If using tuk-tuk or on a tour, you can move faster. The key is ending at Wat Chaiwatthanaram for sunset.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                What to Eat in Ayutthaya
              </h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Ayutthaya is famous for several unique dishes and local specialties you won't find elsewhere in Thailand.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {foodGuide.map((food, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border-2 border-orange-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <Utensils className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{food.name}</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">{food.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-orange-600 flex-shrink-0" />
                          <p className="text-sm text-gray-700">
                            <span className="font-semibold">Where:</span> {food.where}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-orange-600 flex-shrink-0" />
                          <p className="text-sm text-gray-700">
                            <span className="font-semibold">Price:</span> {food.price}
                          </p>
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
                Essential Tips
              </h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Important things to know before visiting Ayutthaya to make your trip smooth and enjoyable.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tips.map((tip, index) => {
                const Icon = tip.icon;
                return (
                  <div
                    key={index}
                    className={`${tip.bg} rounded-xl p-6 border-2 border-transparent hover:border-current transition-all duration-300`}
                  >
                    <div className={`w-14 h-14 ${tip.bg} border-2 border-current rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`w-7 h-7 ${tip.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 text-center mb-3">{tip.title}</h3>
                    <p className="text-gray-700 leading-relaxed text-center">{tip.tip}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 md:p-8 border-2 border-blue-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
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
                Plan Your Ayutthaya Trip
              </h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Need help planning your Ayutthaya day trip? Contact us for personalized recommendations and answers to your questions.
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12 border-2 border-amber-200">
              {submitStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Thank you for your inquiry about visiting Ayutthaya. We'll get back to you within 24 hours with personalized recommendations for your trip.
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
                        className="w-full px-4 py-3 rounded-lg border-2 border-amber-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
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
                        className="w-full px-4 py-3 rounded-lg border-2 border-amber-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="travelDate" className="block text-sm font-bold text-gray-900 mb-2">
                        Travel Date
                      </label>
                      <input
                        type="text"
                        id="travelDate"
                        value={formData.travelDate}
                        onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border-2 border-amber-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                        placeholder="e.g., December 15, 2026"
                      />
                    </div>

                    <div>
                      <label htmlFor="groupSize" className="block text-sm font-bold text-gray-900 mb-2">
                        Group Size
                      </label>
                      <input
                        type="text"
                        id="groupSize"
                        value={formData.groupSize}
                        onChange={(e) => setFormData({ ...formData, groupSize: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border-2 border-amber-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                        placeholder="e.g., 2 adults, 1 child"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interests" className="block text-sm font-bold text-gray-900 mb-2">
                      Interests
                    </label>
                    <input
                      type="text"
                      id="interests"
                      value={formData.interests}
                      onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-amber-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                      placeholder="e.g., Photography, History, Architecture"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
                      Your Questions or Special Requests
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-amber-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none"
                      placeholder="Tell us about your plans, any specific questions about Ayutthaya, dietary restrictions, mobility concerns, etc."
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
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitStatus === 'loading' ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Trip Planning Request
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    We typically respond within 24 hours with personalized recommendations for your Ayutthaya trip.
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
                title: 'Bangkok',
                description: 'Complete guide to Thailand\'s vibrant capital city',
                link: '/bangkok',
                image: 'https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Thai Temples Guide',
                description: 'Everything you need to know about visiting Thai temples',
                link: '/thai-temples',
                image: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Chiang Mai',
                description: 'Northern Thailand\'s cultural and temple city',
                link: '/chiang-mai',
                image: 'https://images.pexels.com/photos/4401488/pexels-photo-4401488.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
