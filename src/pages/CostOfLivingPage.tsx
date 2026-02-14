import {
  DollarSign,
  Home,
  Utensils,
  Car,
  Zap,
  Wifi,
  Coffee,
  ShoppingBag,
  Scissors,
  MapPin,
  TrendingDown,
  Calculator,
  CheckCircle,
  Info,
  AlertCircle,
  Building,
  Plane,
  Heart,
  Bike,
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { usePageMeta } from '../hooks/usePageMeta';
import RelatedGuides from '../components/RelatedGuides';
import { useState } from 'react';

interface BudgetCategory {
  name: string;
  icon: any;
  basic: string;
  comfortable: string;
  luxury: string;
}

interface CityData {
  name: string;
  studio: string;
  oneBedroom: string;
  monthlyBudget: string;
  notes: string;
}

interface DailyCost {
  item: string;
  cost: string;
  icon: any;
}

export default function CostOfLivingPage() {
  usePageMeta({
    title: 'Cost of Living in Thailand 2024 - Monthly Budget Guide for Expats',
    description:
      'Complete cost of living guide for Thailand. Monthly budgets, city comparisons, and actual prices for expats and digital nomads.',
  });

  const [selectedBudget, setSelectedBudget] = useState<'basic' | 'comfortable' | 'luxury'>('comfortable');

  const budgetCategories: BudgetCategory[] = [
    {
      name: 'Accommodation',
      icon: Home,
      basic: '$250-400',
      comfortable: '$500-800',
      luxury: '$1200-2000+',
    },
    {
      name: 'Food',
      icon: Utensils,
      basic: '$200-300',
      comfortable: '$400-500',
      luxury: '$600-1000',
    },
    {
      name: 'Transportation',
      icon: Car,
      basic: '$50-100',
      comfortable: '$100-150',
      luxury: '$200-300',
    },
    {
      name: 'Utilities',
      icon: Zap,
      basic: '$50-80',
      comfortable: '$80-120',
      luxury: '$120-200',
    },
    {
      name: 'Internet',
      icon: Wifi,
      basic: '$20-30',
      comfortable: '$30',
      luxury: '$30',
    },
    {
      name: 'Entertainment',
      icon: Coffee,
      basic: '$100-200',
      comfortable: '$300-500',
      luxury: '$500-1000+',
    },
  ];

  const cityData: CityData[] = [
    {
      name: 'Bangkok',
      studio: '$350-600',
      oneBedroom: '$600-1200',
      monthlyBudget: '$1200-2000',
      notes: 'Most expensive. Best infrastructure and opportunities.',
    },
    {
      name: 'Chiang Mai',
      studio: '$200-350',
      oneBedroom: '$350-600',
      monthlyBudget: '$800-1200',
      notes: 'Cheapest major city. Popular with digital nomads.',
    },
    {
      name: 'Phuket',
      studio: '$400-700',
      oneBedroom: '$700-1200',
      monthlyBudget: '$1500-2500',
      notes: 'Tourist pricing. Beach lifestyle premium.',
    },
    {
      name: 'Pattaya',
      studio: '$300-500',
      oneBedroom: '$500-800',
      monthlyBudget: '$1000-1500',
      notes: 'Mid-range pricing. Beach town convenience.',
    },
    {
      name: 'Koh Samui',
      studio: '$400-600',
      oneBedroom: '$700-1000',
      monthlyBudget: '$1400-2200',
      notes: 'Island premium. Limited infrastructure.',
    },
  ];

  const dailyCosts: DailyCost[] = [
    { item: 'Street food meal', cost: '$1-2', icon: Utensils },
    { item: 'Local restaurant', cost: '$3-5', icon: Utensils },
    { item: 'Western restaurant', cost: '$8-15', icon: Utensils },
    { item: 'Coffee shop', cost: '$2-4', icon: Coffee },
    { item: 'Groceries (weekly)', cost: '$30-60', icon: ShoppingBag },
    { item: 'Gym membership', cost: '$30-60/month', icon: Heart },
    { item: 'Haircut', cost: '$3-10', icon: Scissors },
    { item: 'Laundry', cost: '$1-2 per kg', icon: ShoppingBag },
    { item: 'Local bus/train', cost: '$0.30-1', icon: Car },
    { item: 'Taxi (5km)', cost: '$3-5', icon: Car },
    { item: 'Motorbike rental (month)', cost: '$80-120', icon: Bike },
    { item: 'Movie ticket', cost: '$5-8', icon: Coffee },
  ];

  const oneTimeCosts = [
    {
      item: 'Tourist Visa',
      cost: 'Free (30-60 days)',
      notes: 'Extendable for 1900 baht',
    },
    {
      item: 'Education Visa',
      cost: '$200-500',
      notes: 'Requires language school enrollment',
    },
    {
      item: 'Elite Visa',
      cost: '$15,000-60,000',
      notes: '5-20 years validity',
    },
    {
      item: 'Work Permit',
      cost: '$100-300',
      notes: 'Requires employer sponsorship',
    },
    {
      item: 'Health Insurance',
      cost: '$500-3000/year',
      notes: 'Varies by age and coverage',
    },
    {
      item: 'Rent Deposit',
      cost: '2 months rent',
      notes: 'Refundable at end of lease',
    },
    {
      item: 'Agent Fee',
      cost: '1 month rent',
      notes: 'One-time payment',
    },
  ];

  const savingTips = [
    {
      tip: 'Eat local food instead of Western',
      savings: 'Save $300-500/month',
      icon: Utensils,
    },
    {
      tip: 'Use public transportation or motorbike',
      savings: 'Save $100-200/month',
      icon: Car,
    },
    {
      tip: 'Live outside city center',
      savings: 'Save $200-400/month',
      icon: Home,
    },
    {
      tip: 'Shop at local markets, not malls',
      savings: 'Save $100-200/month',
      icon: ShoppingBag,
    },
    {
      tip: 'Learn basic Thai for better prices',
      savings: 'Save 10-30% on many purchases',
      icon: CheckCircle,
    },
    {
      tip: 'Cook at home some meals',
      savings: 'Save $150-300/month',
      icon: Utensils,
    },
  ];

  const getTotalBudget = (type: 'basic' | 'comfortable' | 'luxury') => {
    const ranges = {
      basic: '$800-1200',
      comfortable: '$1500-2500',
      luxury: '$3000+',
    };
    return ranges[type];
  };

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Practical Info', path: '/practical-info' },
          { label: 'Cost of Living', path: '/cost-of-living' },
        ]}
      />

      <div className="bg-gradient-to-b from-green-900 to-green-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <DollarSign className="w-8 h-8 text-green-300" />
              <span className="text-green-300 font-semibold tracking-wider uppercase text-sm">
                Budget Planning
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 uppercase tracking-[3px]">
              Cost of Living
              <br />
              <span className="text-green-300">in Thailand</span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
                Thailand offers excellent value. Live comfortably for $800-1500 per month. Actual costs for expats and
                digital nomads.
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
                Monthly Budget Breakdown
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose your lifestyle and see what it costs to live in Thailand
              </p>
            </div>

            <div className="flex justify-center gap-4 mb-12">
              <button
                onClick={() => setSelectedBudget('basic')}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  selectedBudget === 'basic'
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Basic
                <div className="text-sm font-normal mt-1">$800-1200/mo</div>
              </button>
              <button
                onClick={() => setSelectedBudget('comfortable')}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  selectedBudget === 'comfortable'
                    ? 'bg-green-600 text-white shadow-lg scale-105'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Comfortable
                <div className="text-sm font-normal mt-1">$1500-2500/mo</div>
              </button>
              <button
                onClick={() => setSelectedBudget('luxury')}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  selectedBudget === 'luxury'
                    ? 'bg-orange-600 text-white shadow-lg scale-105'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Luxury
                <div className="text-sm font-normal mt-1">$3000+/mo</div>
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {budgetCategories.map((category, index) => {
                const Icon = category.icon;
                const cost = category[selectedBudget];
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-gradient-to-br from-green-100 to-green-50 rounded-xl">
                        <Icon className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
                    </div>
                    <div className="text-3xl font-bold text-green-600">{cost}</div>
                    <div className="mt-2 text-sm text-gray-600">per month</div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-2xl p-8 text-white text-center">
              <Calculator className="w-12 h-12 text-green-300 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">Total Monthly Budget</h3>
              <div className="text-5xl font-bold text-green-300 mb-4">{getTotalBudget(selectedBudget)}</div>
              <p className="text-green-100 text-lg">
                {selectedBudget === 'basic' && 'Basic lifestyle with local accommodations and mainly local food'}
                {selectedBudget === 'comfortable' &&
                  'Comfortable lifestyle with modern apartment and mix of local/Western food'}
                {selectedBudget === 'luxury' && 'Luxury lifestyle with premium condo and regular Western dining'}
              </p>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Costs by City
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Compare living costs across Thailand's major cities
              </p>
            </div>

            <div className="mb-8 overflow-x-auto rounded-2xl shadow-xl border-2 border-gray-200">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-green-900 to-green-800 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">City</th>
                    <th className="px-6 py-4 text-left font-semibold">Studio Apt</th>
                    <th className="px-6 py-4 text-left font-semibold">1 Bedroom</th>
                    <th className="px-6 py-4 text-left font-semibold">Monthly Budget</th>
                    <th className="px-6 py-4 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cityData.map((city, index) => (
                    <tr key={index} className="hover:bg-green-50 transition-colors duration-150">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-green-600" />
                          <span className="font-bold text-gray-900">{city.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">{city.studio}</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">{city.oneBedroom}</td>
                      <td className="px-6 py-4 text-green-600 font-bold">{city.monthlyBudget}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{city.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cityData.map((city, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-green-100 rounded-xl">
                      <Building className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{city.name}</h3>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Studio</span>
                      <span className="font-bold text-gray-900">{city.studio}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">1 Bedroom</span>
                      <span className="font-bold text-gray-900">{city.oneBedroom}</span>
                    </div>
                    <div className="pt-3 border-t-2 border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-900 font-semibold">Monthly Total</span>
                        <span className="font-bold text-green-600 text-xl">{city.monthlyBudget}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-700">{city.notes}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Daily Living Costs
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Actual prices for everyday items and services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dailyCosts.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-5 border-2 border-gray-200 hover:border-green-300 transition-all duration-200 shadow-md flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <Icon className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-gray-900 font-semibold">{item.item}</span>
                    </div>
                    <span className="text-green-600 font-bold text-lg">{item.cost}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
              <div className="flex items-start gap-3">
                <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Price Variations</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Prices vary significantly between tourist areas and local neighborhoods. Shopping at local markets
                    and eating at Thai restaurants (not in tourist zones) can reduce costs by 30-50%. Prices also vary
                    by city, with Bangkok and Phuket being most expensive.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                One-Time Costs
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Initial expenses when moving to Thailand
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {oneTimeCosts.map((cost, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-orange-100 rounded-xl">
                        {cost.item.includes('Visa') && <Plane className="w-6 h-6 text-orange-600" />}
                        {cost.item.includes('Insurance') && <Heart className="w-6 h-6 text-orange-600" />}
                        {cost.item.includes('Deposit') && <Home className="w-6 h-6 text-orange-600" />}
                        {cost.item.includes('Agent') && <Home className="w-6 h-6 text-orange-600" />}
                        {cost.item.includes('Permit') && <CheckCircle className="w-6 h-6 text-orange-600" />}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{cost.item}</h3>
                        <p className="text-2xl font-bold text-orange-600 mt-1">{cost.cost}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm bg-gray-50 rounded-lg p-3">{cost.notes}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-orange-50 rounded-2xl p-6 border-2 border-orange-200">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Budget for Initial Costs</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Plan for $2000-5000 in one-time costs when first moving to Thailand, not including visa fees. This
                    covers apartment deposits, agent fees, initial setup costs, and essential purchases. Having an
                    emergency fund of 3-6 months expenses is highly recommended.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-light text-[#2D2D2D] uppercase tracking-[2px] mb-4">
                Money Saving Tips
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                How to reduce your monthly expenses in Thailand
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {savingTips.map((tip, index) => {
                const Icon = tip.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 border-2 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-green-100 rounded-xl">
                        <Icon className="w-6 h-6 text-green-600" />
                      </div>
                      <TrendingDown className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.tip}</h3>
                    <div className="bg-green-50 rounded-lg p-3">
                      <p className="text-green-700 font-bold">{tip.savings}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-2xl p-8 text-white">
              <div className="flex items-start gap-4">
                <DollarSign className="w-10 h-10 text-green-300 flex-shrink-0" />
                <div>
                  <h3 className="text-3xl font-bold mb-4">Maximum Savings Potential</h3>
                  <p className="text-green-100 text-lg leading-relaxed mb-4">
                    By following all these tips, you could potentially reduce your monthly expenses by{' '}
                    <strong className="text-green-300 text-2xl">$900-1600</strong> compared to a typical Western
                    lifestyle in Thailand. This means living comfortably on as little as $800-1000/month.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-green-300 font-bold mb-1">Without Optimization</p>
                      <p className="text-3xl font-bold">$2000-2500</p>
                      <p className="text-sm text-green-200">per month</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-green-300 font-bold mb-1">With Optimization</p>
                      <p className="text-3xl font-bold">$800-1200</p>
                      <p className="text-sm text-green-200">per month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex items-start gap-4">
              <Info className="w-10 h-10 text-blue-300 flex-shrink-0" />
              <div>
                <h3 className="text-3xl font-bold mb-4">Important Considerations</h3>
                <div className="grid md:grid-cols-2 gap-6 text-blue-100 text-lg leading-relaxed">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-300 flex-shrink-0 mt-1" />
                      <span>All prices shown are in USD for easy comparison</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-300 flex-shrink-0 mt-1" />
                      <span>Exchange rates fluctuate - budget with buffer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-300 flex-shrink-0 mt-1" />
                      <span>Tourist areas are 30-100% more expensive</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-300 flex-shrink-0 mt-1" />
                      <span>Prices increase 3-5% annually on average</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-300 flex-shrink-0 mt-1" />
                      <span>Health insurance is essential and not optional</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-300 flex-shrink-0 mt-1" />
                      <span>Budget more for first 3 months while settling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-300 flex-shrink-0 mt-1" />
                      <span>Your lifestyle choices have biggest impact on costs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-300 flex-shrink-0 mt-1" />
                      <span>Learning Thai can reduce costs significantly</span>
                    </li>
                  </ul>
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
                title: 'Budget Guide',
                description: 'Plan your Thailand trip budget',
                link: '/budget-guide',
                image:
                  'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Visa Guide',
                description: 'Long-term visa options',
                link: '/visa-guide',
                image:
                  'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Accommodation',
                description: 'Finding places to stay',
                link: '/accommodation',
                image:
                  'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
