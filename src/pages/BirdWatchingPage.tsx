import { Bird, MapPin, Calendar, Mountain, Trees, Eye, Sun, CloudRain, CheckCircle2, ArrowRight, Info, Clock, DollarSign } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import RelatedGuides from '../components/RelatedGuides';
import YouMayAlsoLike from '../components/YouMayAlsoLike';
import { usePageMeta } from '../hooks/usePageMeta';

export function BirdWatchingPage() {
  usePageMeta({
    title: 'Bird Watching in Thailand 2026: Complete Birder\'s Guide',
    description:
      '1000+ species across diverse habitats. Comprehensive guide to birding in Thailand including best locations, target species, optimal seasons, and practical tips.',
  });

  const quickNavItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'Why Thailand', href: '#why-thailand' },
    { label: 'Northern Thailand', href: '#northern-thailand' },
    { label: 'Central Thailand', href: '#central-thailand' },
    { label: 'Southern Thailand', href: '#southern-thailand' },
    { label: 'Practical Tips', href: '#practical' },
    { label: 'FAQ', href: '#faq' },
  ];

  const northernLocations = [
    {
      name: 'Doi Inthanon National Park',
      region: 'Chiang Mai',
      elevation: '400-2,565m',
      accessibility: 'Easy',
      difficulty: 'Beginner to Intermediate',
      season: 'November-March',
      expectedSpecies: '80-120 species per day',
      entryFee: '300 THB',
      rating: null,
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1200',
      habitats: ['Montane evergreen forest', 'Hill evergreen forest', 'Pine forest'],
      targetSpecies: [
        "Mrs. Hume's Pheasant (endemic, reliable at km 31)",
        'Green-tailed Sunbird (montane specialist)',
        'Chestnut-tailed Minla',
        'Yellow-bellied Flowerpecker',
        'Spot-breasted Parrotbill',
        "Hume's Treecreeper",
        'Black-throated Prinia',
        '20+ woodpecker species',
        'Ashy-throated Warbler',
        'Grey-chinned Minivet',
      ],
      strategy: [
        'Start at headquarters (400m) for lowland forest species',
        "Drive to km 31 checkpoint (1,800m) for Mrs. Hume's Pheasant at dawn",
        'Continue to summit road (2,200-2,500m) for high elevation specialists',
        'Stop at Royal Agricultural Station for sunbirds',
        'Check waterfall trails for forest species',
        '2-3 full days recommended for comprehensive coverage',
      ],
      facilities: [
        'Guides available at park entrance (800-1,200 THB per day, highly recommended)',
        'Basic accommodation inside park (bungalows 600-1,500 THB)',
        'Stay in Chiang Mai city (1.5 hours drive) for more comfort',
        'Food available at summit cafes',
      ],
    },
    {
      name: 'Doi Ang Khang',
      region: 'Chiang Mai',
      elevation: '1,400m',
      accessibility: 'Moderate',
      difficulty: 'Beginner-friendly',
      season: 'November-February',
      expectedSpecies: '60-80 species per day',
      entryFee: 'No entry fee',
      rating: null,
      image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1200',
      habitats: ['Pine forest', 'Mixed deciduous', 'Agricultural areas'],
      targetSpecies: [
        'Spot-breasted Parrotbill (reliable)',
        'White-browed Fulvetta',
        'Mountain Tailorbird',
        'Grey-headed Parrotbill',
        'Brown Bullfinch',
        'Large Hawk-Cuckoo',
        'Rufous-gorgeted Flycatcher',
      ],
      strategy: [
        'Stay at Ang Khang Royal Agricultural Station',
        'Bird pine forests along main road',
        'Check agricultural areas for open-country species',
        'Dawn and late afternoon most productive',
      ],
      facilities: [
        'Accommodation at Royal Project guesthouses (800-1,500 THB)',
        'Restaurant on-site',
      ],
    },
    {
      name: 'Doi Pha Hom Pok National Park',
      region: 'Chiang Rai/Chiang Mai',
      elevation: '300-2,285m',
      accessibility: 'Difficult',
      difficulty: 'Intermediate to Advanced',
      season: 'November-March',
      expectedSpecies: '80-100 species over 2-3 days',
      entryFee: '300 THB',
      rating: null,
      image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1200',
      habitats: ['Hill evergreen forest', 'Montane forest', 'Mixed deciduous'],
      targetSpecies: [
        'Silver Pheasant (reliable)',
        'Rufous-throated Partridge',
        'Mountain Bamboo Partridge',
        'Beautiful Nuthatch',
        'Fire-breasted Flowerpecker',
        'Grey-headed Parrotbill',
        'Sultan Tit',
      ],
      strategy: [
        'Hire local guide (essential for access and finding birds)',
        'Camp or stay in basic park accommodation',
        '2-3 days minimum for productive birding',
        'Very early morning starts crucial',
      ],
      facilities: [
        'Basic bungalows in park',
        'Limited food options (bring supplies)',
      ],
    },
  ];

  const centralLocations = [
    {
      name: 'Kaeng Krachan National Park',
      region: 'Phetchaburi',
      elevation: 'Lowland to hill forest',
      accessibility: 'Moderate',
      difficulty: 'Intermediate',
      season: 'November-April',
      expectedSpecies: '120-160 species over 3 days',
      entryFee: '300 THB',
      rating: '10/10 - One of Thailand\'s absolute best birding sites',
      image: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1200',
      habitats: ['Tropical lowland forest', 'Hill forest', 'Streams', 'Reservoir'],
      targetSpecies: [
        'Great Hornbill (common, reliable)',
        'Wreathed Hornbill',
        'Siamese Fireback (endemic, reliable near camp)',
        'Spot-bellied Eagle-Owl',
        'Green Peafowl',
        'Kalij Pheasant',
        'Coral-billed Ground-Cuckoo',
        'Blue Pitta',
        'Ratchet-tailed Treepie',
        '400+ recorded species total',
      ],
      strategy: [
        'Stay at Ban Krang Camp (basic bungalows 600-1,200 THB)',
        'Dawn birding around camp for Siamese Fireback (almost guaranteed)',
        'Drive forest roads for hornbills',
        'Night drives for owls (arrange with park rangers)',
        'Hire local guide (essential, 800-1,000 THB per day)',
        '3-4 days recommended',
      ],
      facilities: [
        'Bungalows at Ban Krang (book ahead)',
        'Basic restaurant',
        'Vehicle access to birding areas',
        '3 hours from Bangkok',
      ],
      distance: '3 hours from Bangkok',
    },
    {
      name: 'Khao Yai National Park',
      region: 'UNESCO World Heritage',
      elevation: 'Mixed elevation',
      accessibility: 'Easy',
      difficulty: 'Beginner-friendly',
      season: 'November-March',
      expectedSpecies: '80-120 species per day',
      entryFee: '400 THB',
      rating: null,
      image: 'https://images.pexels.com/photos/1670723/pexels-photo-1670723.jpeg?auto=compress&cs=tinysrgb&w=1200',
      habitats: ['Monsoon forest', 'Evergreen forest', 'Grasslands'],
      targetSpecies: [
        'Great Hornbill (very common)',
        'Oriental Pied Hornbill',
        'Silver Pheasant',
        'Siamese Fireback',
        'Green-eared Barbet',
        'Orange-breasted Trogon',
        '300+ species recorded',
      ],
      strategy: [
        'Stay inside park at lodges (1,500-3,000 THB) or nearby resorts',
        'Bird along main road early morning',
        'Check grasslands for birds of prey',
        'Salt licks attract mammals and some birds',
        'Easy DIY birding (guides available but not essential)',
      ],
      facilities: [
        'Good accommodation options',
        'Restaurants available',
        'Visitor center with information',
        'Tourist-friendly infrastructure',
      ],
      distance: '2.5 hours from Bangkok',
    },
    {
      name: 'Pak Thale',
      region: 'Phetchaburi',
      elevation: 'Coastal',
      accessibility: 'Very easy',
      difficulty: 'Beginner-friendly',
      season: 'November-March',
      expectedSpecies: '40-80 species depending on tide',
      entryFee: 'Free (public roads)',
      rating: '10/10 for shorebird specialists (Spoon-billed Sandpiper!)',
      image: 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1200',
      habitats: ['Coastal mudflats', 'Saltpans', 'Aquaculture ponds'],
      targetSpecies: [
        'Spoon-billed Sandpiper (critically endangered! 5-15 birds winter here)',
        'Nordmann\'s Greenshank (endangered)',
        'Asian Dowitcher',
        'Great Knot',
        'Broad-billed Sandpiper',
        'Chinese Egret',
        'Spot-billed Pelican',
        '100+ waterbird and shorebird species',
      ],
      strategy: [
        'Time visit with low tide (birds on mudflats, not at sea)',
        'Scan from road embankments (no entry to ponds)',
        'Scope essential (birds distant)',
        'Morning light better (sun behind you)',
        '3-4 hours sufficient',
        'Day trip from Bangkok easy',
      ],
      facilities: [
        'No facilities (bring food and water)',
        'Scope and good optics essential',
        'Car birding from roads',
      ],
      distance: '2 hours from Bangkok',
    },
    {
      name: 'Khao Ang Rue Nai Wildlife Sanctuary',
      region: 'Chachoengsao',
      elevation: 'Lowland',
      accessibility: 'Easy',
      difficulty: 'Beginner to Intermediate',
      season: 'November-April',
      expectedSpecies: '60-100 species per day',
      entryFee: '200 THB',
      rating: '9/10 for reliable endemic sightings',
      image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1200',
      habitats: ['Dry evergreen forest'],
      targetSpecies: [
        'Siamese Fireback (very reliable, multiple sightings likely)',
        'Green Peafowl (regularly seen)',
        'Grey Peacock-Pheasant',
        'Coral-billed Ground-Cuckoo',
        'Great Hornbill',
        'Bar-bellied Pitta',
        'Scaly-breasted Partridge',
      ],
      strategy: [
        'Drive slowly on forest roads at dawn',
        'Firebacks often on roads',
        'Stay nearby in Chachoengsao (1,500-2,500 THB hotels)',
        'Full day sufficient',
        'Guide helpful but not essential (birds quite visible)',
      ],
      facilities: [
        'No accommodation (day visit or stay nearby)',
        'Limited facilities',
      ],
      distance: '2 hours from Bangkok',
    },
  ];

  const southernLocations = [
    {
      name: 'Khao Sok National Park',
      region: 'Surat Thani',
      elevation: 'Lowland to mid-elevation',
      accessibility: 'Moderate',
      difficulty: 'Intermediate to Advanced',
      season: 'December-April',
      expectedSpecies: '60-90 species over 2 days',
      entryFee: '300 THB',
      rating: null,
      image: 'https://images.pexels.com/photos/1483880/pexels-photo-1483880.jpeg?auto=compress&cs=tinysrgb&w=1200',
      habitats: ['Ancient rainforest', 'Limestone cliffs', 'Cheow Lan Lake'],
      targetSpecies: [
        'Great Argus (heard more than seen)',
        'Helmeted Hornbill (rare, declining)',
        'Rufous-collared Kingfisher',
        'Large Wren-Babbler',
        'White-crowned Hornbill',
        'Banded Kingfisher',
        '300+ species recorded',
      ],
      strategy: [
        'Stay at floating bungalows on Cheow Lan Lake',
        'Early morning boat trips for kingfishers',
        'Forest trails for forest species',
        'Guide essential (dense jungle, hard to see birds)',
        '2-3 days recommended',
      ],
      facilities: [
        'Floating bungalows: 1,500-3,500 THB per night',
        'Meals included usually',
        'Boat transfers required',
      ],
      distance: null,
    },
    {
      name: 'Khao Luang National Park',
      region: 'Nakhon Si Thammarat',
      elevation: 'Montane and lowland rainforest',
      accessibility: 'Difficult',
      difficulty: 'Advanced (fitness required)',
      season: 'December-March',
      expectedSpecies: '80-120 species over 3 days',
      entryFee: 'Contact for details',
      rating: '10/10 if you see Gurney\'s Pitta!',
      image: 'https://images.pexels.com/photos/1459495/pexels-photo-1459495.jpeg?auto=compress&cs=tinysrgb&w=1200',
      habitats: ['Montane rainforest', 'Lowland rainforest'],
      targetSpecies: [
        'Gurney\'s Pitta (very rare! Southern Thailand endemic)',
        'Blue-winged Pitta',
        'Greater Green Leafbird',
        'Malaysian Blue Flycatcher',
        'Numerous sunbirds and spiderhunters',
      ],
      strategy: [
        'Hire experienced local guide (essential for Gurney\'s Pitta)',
        'Very early morning starts',
        'Steep, muddy trails (physically demanding)',
        'For serious birders only',
        '2-3 days minimum',
      ],
      facilities: [
        'Basic accommodation in nearby towns',
        'Limited facilities in park',
        'Guide booking essential in advance',
      ],
      distance: null,
    },
  ];

  const speciesGroups = [
    { name: 'Hornbills', count: '13 species', examples: 'Great Hornbill, Wreathed Hornbill, Helmeted Hornbill' },
    { name: 'Pheasants', count: '5+ species', examples: "Siamese Fireback, Mrs. Hume's Pheasant, Silver Pheasant, Green Peafowl" },
    { name: 'Pittas', count: '3 species', examples: "Gurney's Pitta (very rare), Blue-winged Pitta, Mangrove Pitta" },
    { name: 'Barbets', count: '15+ species', examples: 'Great Barbet, Blue-throated Barbet, Golden-throated Barbet' },
    { name: 'Woodpeckers', count: '20+ species', examples: 'Bamboo Woodpecker, Great Slaty Woodpecker' },
    { name: 'Kingfishers', count: '12+ species', examples: 'From tiny to large species' },
    { name: 'Shorebirds', count: 'Many species', examples: 'Including critically endangered Spoon-billed Sandpiper' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[500px] bg-gradient-to-br from-green-900 via-emerald-800 to-[#2B5D8C]">
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-40"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/349758/hummingbird-bird-birds-349758.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <div className="flex items-center mb-4">
              <Bird className="w-12 h-12 mr-4" />
              <span className="text-lg font-medium">Birding Guide</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 uppercase tracking-wider">
              Bird Watching in Thailand 2026
            </h1>
            <p className="text-xl sm:text-2xl font-light mb-8">
              1000+ species across diverse habitats — mountains to wetlands, rainforests to coasts
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Things to Do', href: '/things-to-do' },
            { label: 'Bird Watching', href: '/bird-watching-thailand' },
          ]}
        />

        <nav className="bg-white rounded-lg shadow-md p-4 mb-8 sticky top-4 z-10">
          <div className="flex flex-wrap gap-4 justify-center">
            {quickNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-[#2B5D8C] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <section id="overview" className="bg-white rounded-lg shadow-md p-8 mb-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Thailand ranks among Asia's premier bird watching destinations with over <strong>1,000 recorded species</strong> including rare endemics and migratory visitors. From montane forests harboring pheasants and laughingthrushes to coastal wetlands hosting critically endangered shorebirds, Thailand's diverse habitats support extraordinary avian diversity.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                This comprehensive guide covers the best locations for birding across Thailand, target species by region, optimal seasons for visiting, guided tour options, and practical information for independent birders. Whether you are targeting Thai endemics like Siamese Fireback and Mrs. Hume's Pheasant, seeking the critically endangered Spoon-billed Sandpiper, or simply exploring Thailand's rich birdlife, this guide provides everything you need.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <p className="text-sm text-gray-700">
                  <strong>Updated February 2026</strong> with current access information and recent sightings.
                </p>
              </div>
            </section>

            <section id="why-thailand" className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-[#2B5D8C] pb-3">
                Why Thailand for Bird Watching
              </h2>

              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Species Diversity</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">1,000+ Recorded Species</p>
                        <p className="text-sm text-gray-600">Approximately 10% of the world's birds</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">50+ Endemic Species</p>
                        <p className="text-sm text-gray-600">And near-endemic species unique to the region</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Major Flyway Location</p>
                        <p className="text-sm text-gray-600">East Asian-Australasian Flyway migratory route</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Accessible Locations</p>
                        <p className="text-sm text-gray-600">Good infrastructure and well-maintained trails</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Year-round Opportunities</p>
                        <p className="text-sm text-gray-600">Birding possible in every season</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Affordable Destination</p>
                        <p className="text-sm text-gray-600">Compared to other birding hotspots globally</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-md p-8 mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Bird className="w-7 h-7 text-green-600 mr-3" />
                  Key Species Groups
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {speciesGroups.map((group, index) => (
                    <div key={index} className="bg-white rounded-lg p-5 shadow-sm">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold text-gray-900">{group.name}</h4>
                        <span className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">
                          {group.count}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{group.examples}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div id="seasons" className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Calendar className="w-7 h-7 text-blue-600 mr-3" />
                  Best Seasons for Birding
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-center mb-2">
                      <Sun className="w-5 h-5 text-blue-600 mr-2" />
                      <h4 className="text-lg font-bold text-gray-900">November - February: Peak Season</h4>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Best overall time for birding.</strong> Migrants arrive from northern regions, cool comfortable weather for hiking, clear skies for photography.
                    </p>
                    <div className="bg-blue-50 p-3 rounded text-sm text-gray-700">
                      <strong>Tip:</strong> Book accommodations and guides in advance during this popular season.
                    </div>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-6">
                    <div className="flex items-center mb-2">
                      <Sun className="w-5 h-5 text-orange-600 mr-2" />
                      <h4 className="text-lg font-bold text-gray-900">March - May: Hot Season</h4>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">
                      Hot temperatures but excellent for resident species and late migrants. Early morning birding essential to avoid midday heat.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <div className="flex items-center mb-2">
                      <CloudRain className="w-5 h-5 text-green-600 mr-2" />
                      <h4 className="text-lg font-bold text-gray-900">June - October: Rainy Season</h4>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">
                      Fewer birders, excellent for breeding species, lush conditions. Be prepared for afternoon rain but mornings often clear.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="northern-thailand" className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-[#2B5D8C] pb-3">
                Best Locations - Northern Thailand
              </h2>

              {northernLocations.map((location, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                  <div className="relative h-64">
                    <img
                      src={location.image}
                      alt={location.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                      <span className="text-sm font-bold text-gray-900">{location.expectedSpecies}</span>
                    </div>
                    {index === 0 && (
                      <div className="absolute top-4 left-4 bg-[#2B5D8C] text-white px-3 py-1 rounded-full shadow-md">
                        <span className="text-sm font-bold">TOP SITE</span>
                      </div>
                    )}
                  </div>

                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{location.name}</h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="text-sm">{location.region}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <Mountain className="w-5 h-5 text-blue-600 mb-2" />
                        <p className="text-xs text-gray-600 mb-1">Elevation</p>
                        <p className="text-sm font-bold text-gray-900">{location.elevation}</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <Calendar className="w-5 h-5 text-green-600 mb-2" />
                        <p className="text-xs text-gray-600 mb-1">Best Season</p>
                        <p className="text-sm font-bold text-gray-900">{location.season}</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <DollarSign className="w-5 h-5 text-purple-600 mb-2" />
                        <p className="text-xs text-gray-600 mb-1">Entry Fee</p>
                        <p className="text-sm font-bold text-gray-900">{location.entryFee}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Trees className="w-5 h-5 text-green-600 mr-2" />
                        Habitats
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {location.habitats.map((habitat, i) => (
                          <span key={i} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                            {habitat}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Bird className="w-5 h-5 text-[#2B5D8C] mr-2" />
                        Target Species
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {location.targetSpecies.map((species, i) => (
                          <div key={i} className="flex items-start text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{species}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6 bg-amber-50 border-l-4 border-amber-500 p-6 rounded">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Eye className="w-5 h-5 text-amber-600 mr-2" />
                        Birding Strategy
                      </h4>
                      <ul className="space-y-2">
                        {location.strategy.map((step, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-700">
                            <ArrowRight className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Info className="w-5 h-5 text-blue-600 mr-2" />
                        Facilities
                      </h4>
                      <ul className="space-y-2">
                        {location.facilities.map((facility, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{facility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Accessibility</p>
                        <p className="text-sm font-semibold text-gray-900">{location.accessibility}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Difficulty</p>
                        <p className="text-sm font-semibold text-gray-900">{location.difficulty}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Expected Species</p>
                        <p className="text-sm font-semibold text-gray-900">{location.expectedSpecies.split(' per')[0]}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            <section id="central-thailand" className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-[#2B5D8C] pb-3">
                Central Thailand Birding Sites
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
                <p className="text-gray-700">
                  <strong>Central Thailand offers incredible birding diversity</strong> from lowland rainforest harboring hornbills and endemics to coastal wetlands hosting critically endangered shorebirds. Sites are easily accessible from Bangkok, making them perfect for shorter visits or combining multiple locations.
                </p>
              </div>

              {centralLocations.map((location, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                  <div className="relative h-64">
                    <img
                      src={location.image}
                      alt={location.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                      <span className="text-sm font-bold text-gray-900">{location.expectedSpecies}</span>
                    </div>
                    {index === 0 && (
                      <div className="absolute top-4 left-4 bg-[#2B5D8C] text-white px-3 py-1 rounded-full shadow-md">
                        <span className="text-sm font-bold">PREMIER SITE</span>
                      </div>
                    )}
                    {location.distance && (
                      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full shadow-md">
                        <span className="text-sm">{location.distance}</span>
                      </div>
                    )}
                  </div>

                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{location.name}</h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="text-sm">{location.region}</span>
                        </div>
                      </div>
                    </div>

                    {location.rating && (
                      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-lg mb-6">
                        <p className="text-sm font-bold text-amber-900">{location.rating}</p>
                      </div>
                    )}

                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <Mountain className="w-5 h-5 text-blue-600 mb-2" />
                        <p className="text-xs text-gray-600 mb-1">Elevation</p>
                        <p className="text-sm font-bold text-gray-900">{location.elevation}</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <Calendar className="w-5 h-5 text-green-600 mb-2" />
                        <p className="text-xs text-gray-600 mb-1">Best Season</p>
                        <p className="text-sm font-bold text-gray-900">{location.season}</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <DollarSign className="w-5 h-5 text-purple-600 mb-2" />
                        <p className="text-xs text-gray-600 mb-1">Entry Fee</p>
                        <p className="text-sm font-bold text-gray-900">{location.entryFee}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Trees className="w-5 h-5 text-green-600 mr-2" />
                        Habitats
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {location.habitats.map((habitat, i) => (
                          <span key={i} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                            {habitat}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Bird className="w-5 h-5 text-[#2B5D8C] mr-2" />
                        Target Species
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {location.targetSpecies.map((species, i) => (
                          <div key={i} className="flex items-start text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{species}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6 bg-amber-50 border-l-4 border-amber-500 p-6 rounded">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Eye className="w-5 h-5 text-amber-600 mr-2" />
                        Birding Strategy
                      </h4>
                      <ul className="space-y-2">
                        {location.strategy.map((step, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-700">
                            <ArrowRight className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Info className="w-5 h-5 text-blue-600 mr-2" />
                        Facilities
                      </h4>
                      <ul className="space-y-2">
                        {location.facilities.map((facility, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{facility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Accessibility</p>
                        <p className="text-sm font-semibold text-gray-900">{location.accessibility}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Difficulty</p>
                        <p className="text-sm font-semibold text-gray-900">{location.difficulty}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Expected Species</p>
                        <p className="text-sm font-semibold text-gray-900">{location.expectedSpecies.split(' per')[0].split(' over')[0].split(' depending')[0]}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            <section id="southern-thailand" className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-[#2B5D8C] pb-3">
                Southern Thailand Birding
              </h2>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mb-8">
                <p className="text-gray-700">
                  <strong>Southern Thailand's ancient rainforests</strong> harbor some of the region's rarest and most sought-after species. These challenging sites reward adventurous birders with specialties found nowhere else, including the critically endangered Gurney's Pitta.
                </p>
              </div>

              {southernLocations.map((location, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                  <div className="relative h-64">
                    <img
                      src={location.image}
                      alt={location.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                      <span className="text-sm font-bold text-gray-900">{location.expectedSpecies}</span>
                    </div>
                    {index === 1 && (
                      <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full shadow-md">
                        <span className="text-sm font-bold">GURNEY'S PITTA</span>
                      </div>
                    )}
                  </div>

                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{location.name}</h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="text-sm">{location.region}</span>
                        </div>
                      </div>
                    </div>

                    {location.rating && (
                      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-lg mb-6">
                        <p className="text-sm font-bold text-amber-900">{location.rating}</p>
                      </div>
                    )}

                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <Mountain className="w-5 h-5 text-blue-600 mb-2" />
                        <p className="text-xs text-gray-600 mb-1">Elevation</p>
                        <p className="text-sm font-bold text-gray-900">{location.elevation}</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <Calendar className="w-5 h-5 text-green-600 mb-2" />
                        <p className="text-xs text-gray-600 mb-1">Best Season</p>
                        <p className="text-sm font-bold text-gray-900">{location.season}</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <DollarSign className="w-5 h-5 text-purple-600 mb-2" />
                        <p className="text-xs text-gray-600 mb-1">Entry Fee</p>
                        <p className="text-sm font-bold text-gray-900">{location.entryFee}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Trees className="w-5 h-5 text-green-600 mr-2" />
                        Habitats
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {location.habitats.map((habitat, i) => (
                          <span key={i} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                            {habitat}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Bird className="w-5 h-5 text-[#2B5D8C] mr-2" />
                        Target Species
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {location.targetSpecies.map((species, i) => (
                          <div key={i} className="flex items-start text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{species}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6 bg-amber-50 border-l-4 border-amber-500 p-6 rounded">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Eye className="w-5 h-5 text-amber-600 mr-2" />
                        Birding Strategy
                      </h4>
                      <ul className="space-y-2">
                        {location.strategy.map((step, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-700">
                            <ArrowRight className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Info className="w-5 h-5 text-blue-600 mr-2" />
                        Facilities
                      </h4>
                      <ul className="space-y-2">
                        {location.facilities.map((facility, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{facility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Accessibility</p>
                        <p className="text-sm font-semibold text-gray-900">{location.accessibility}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Difficulty</p>
                        <p className="text-sm font-semibold text-gray-900">{location.difficulty}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Expected Species</p>
                        <p className="text-sm font-semibold text-gray-900">{location.expectedSpecies.split(' per')[0].split(' over')[0].split(' depending')[0]}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            <section id="practical" className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-[#2B5D8C] pb-3">
                Practical Birding Information
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mr-2" />
                    Essential Equipment
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start text-sm">
                      <ArrowRight className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Binoculars:</strong> 8x42 or 10x42 recommended</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <ArrowRight className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Field Guide:</strong> Robson's Birds of Thailand or Birds of South-East Asia</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <ArrowRight className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Apps:</strong> eBird and Xeno-canto for bird calls</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <ArrowRight className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Camera:</strong> Telephoto lens (optional)</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <ArrowRight className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Spotting Scope:</strong> Essential for wetlands and distant birds</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Clock className="w-6 h-6 text-[#2B5D8C] mr-2" />
                    Best Times to Bird
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start text-sm">
                      <Sun className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Dawn (5:30-9:00 AM):</strong> Most active time - essential!</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <Sun className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Late Afternoon (3:00-6:00 PM):</strong> Second peak activity</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <Sun className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Midday:</strong> Slower but some species still active</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CloudRain className="w-4 h-4 text-gray-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Night:</strong> Owls, nightjars, frogmouths (specialized)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Guided vs Independent</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Guided Tours</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>Day tours: 2,000-4,000 THB</li>
                        <li>Multi-day: $150-250 USD per day</li>
                        <li>Private guide: 1,500-2,500 THB/day</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Best for Independent</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>Khao Yai, Pak Thale, Doi Inthanon</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Guide Essential</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>Kaeng Krachan, Khao Sok, Khao Luang</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What to Wear</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start text-sm">
                      <ArrowRight className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Colors:</strong> Neutral tones (greens, browns, khaki)</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <ArrowRight className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Coverage:</strong> Long sleeves and pants</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <ArrowRight className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Footwear:</strong> Good hiking boots (trails can be muddy)</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <ArrowRight className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Protection:</strong> Hat, sunscreen, insect repellent (DEET 30%+)</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <ArrowRight className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Rain Gear:</strong> Jacket even in dry season</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Birding Etiquette</h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Keep distance from birds, especially nesting species</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Do not use playback excessively (stresses birds)</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Stay on trails to protect habitat</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Submit sightings to eBird for conservation data</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Hire local guides to support conservation efforts</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="faq" className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-light text-[#252525] mb-6 uppercase tracking-[2px] border-b-2 border-[#2B5D8C] pb-3">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">What is the best single site for birding in Thailand?</h3>
                  <p className="text-gray-700 text-sm">
                    Kaeng Krachan National Park offers the most diversity and reliable endemic sightings including Siamese Fireback, hornbills, and forest specialists. If you have limited time, this should be your top choice.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Can I see the Spoon-billed Sandpiper?</h3>
                  <p className="text-gray-700 text-sm">
                    Yes! Pak Thale is one of the most reliable sites globally. Visit November-March at low tide. Success rate is approximately 50-70% with good effort and timing.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Do I need a guide?</h3>
                  <p className="text-gray-700 text-sm">
                    Not essential at accessible sites like Khao Yai, Doi Inthanon roads, or Pak Thale. Highly recommended for Kaeng Krachan, Khao Sok, and southern forests. Essential for Khao Luang and finding rare species like Gurney's Pitta.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">How many species can I see in 2 weeks?</h3>
                  <p className="text-gray-700 text-sm">
                    With good planning: 300-400 species. Focus on diverse regions: north (Doi Inthanon, Kaeng Krachan), central (Khao Yai, Pak Thale), and south (Khao Sok). Visit during November-February for maximum diversity with winter migrants.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Is bird photography easy in Thailand?</h3>
                  <p className="text-gray-700 text-sm">
                    Moderate difficulty. Some species like hornbills, firebacks at Kaeng Krachan, and waterbirds at Pak Thale are photogenic and approachable. Forest skulkers are very challenging. Bring a long lens (400mm+ recommended) for best results.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">When is the best time to visit?</h3>
                  <p className="text-gray-700 text-sm">
                    <strong>Peak season (November-February):</strong> Winter migrants add 100+ species, comfortable weather, dry conditions. This is optimal for maximum species diversity. <strong>Hot season (March-May):</strong> Breeding plumage, fewer tourists but exhausting heat. <strong>Rainy season (June-October):</strong> Birds more vocal, fewer crowds, lower prices but afternoon rains and muddy trails.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Clock className="w-5 h-5 text-[#2B5D8C] mr-2" />
                Quick Facts
              </h3>
              <div className="space-y-4 text-sm">
                <div className="pb-3 border-b border-gray-200">
                  <p className="text-gray-600 mb-1">Total Species</p>
                  <p className="font-bold text-gray-900">1,000+</p>
                </div>
                <div className="pb-3 border-b border-gray-200">
                  <p className="text-gray-600 mb-1">Endemic Species</p>
                  <p className="font-bold text-gray-900">50+</p>
                </div>
                <div className="pb-3 border-b border-gray-200">
                  <p className="text-gray-600 mb-1">Best Season</p>
                  <p className="font-bold text-gray-900">November - February</p>
                </div>
                <div className="pb-3 border-b border-gray-200">
                  <p className="text-gray-600 mb-1">Park Entry Fees</p>
                  <p className="font-bold text-gray-900">300 THB typical</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Guide Cost</p>
                  <p className="font-bold text-gray-900">800-1,200 THB/day</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg shadow-md p-6 border-2 border-amber-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Info className="w-5 h-5 text-amber-600 mr-2" />
                Essential Gear
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Binoculars (8x42 or 10x42)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Field guide (Birds of Thailand)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Camera with telephoto lens</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Sun protection and insect repellent</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Water bottle and snacks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Comfortable hiking shoes</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        <RelatedGuides />
        <YouMayAlsoLike />
      </div>
    </div>
  );
}
