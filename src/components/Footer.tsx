import { Facebook, Twitter, Instagram, Youtube, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-b from-slate-800 to-slate-900 text-white">
      <div className="bg-[#D91680] py-12 sm:py-14 md:py-16">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Mail className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light uppercase tracking-wide">
                Get Thailand Travel Tips Delivered to Your Inbox
              </h3>
            </div>
            <p className="text-pink-50 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg font-light px-4">
              Join 50,000+ travelers receiving weekly guides, insider tips, and exclusive deals.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-4 px-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 px-4 py-3 sm:px-6 sm:py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 sm:px-8 sm:py-4 bg-slate-900 hover:bg-[#D91680] text-white rounded-full font-light uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 min-h-[44px] text-sm sm:text-base"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            <p className="text-pink-100 text-xs sm:text-sm font-light px-4">
              No spam, unsubscribe anytime. Privacy protected.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12 pt-12 sm:pt-14 md:pt-16 pb-8 sm:pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-14 md:mb-16">
          <div className="lg:col-span-1 sm:col-span-2">
            <h3 className="text-xl sm:text-2xl font-light mb-2 sm:mb-3 uppercase tracking-[2px] text-[#D91680]">
              ThailandWiki
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 font-light uppercase tracking-wider">
              Your Complete Guide to Thailand
            </p>
            <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm font-light">
              ThailandWiki is your comprehensive resource for travel information about Thailand.
              We provide detailed guides, insider tips, and expert recommendations to help you
              plan the perfect Thailand adventure.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href="#" className="w-11 h-11 sm:w-10 sm:h-10 bg-white/5 hover:bg-[#D91680] rounded-full flex items-center justify-center transition-all duration-300" aria-label="Facebook">
                <Facebook className="w-5 h-5 sm:w-4 sm:h-4" />
              </a>
              <a href="#" className="w-11 h-11 sm:w-10 sm:h-10 bg-white/5 hover:bg-[#D91680] rounded-full flex items-center justify-center transition-all duration-300" aria-label="Instagram">
                <Instagram className="w-5 h-5 sm:w-4 sm:h-4" />
              </a>
              <a href="#" className="w-11 h-11 sm:w-10 sm:h-10 bg-white/5 hover:bg-[#D91680] rounded-full flex items-center justify-center transition-all duration-300" aria-label="Twitter">
                <Twitter className="w-5 h-5 sm:w-4 sm:h-4" />
              </a>
              <a href="#" className="w-11 h-11 sm:w-10 sm:h-10 bg-white/5 hover:bg-[#D91680] rounded-full flex items-center justify-center transition-all duration-300" aria-label="Pinterest">
                <svg className="w-5 h-5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="w-11 h-11 sm:w-10 sm:h-10 bg-white/5 hover:bg-[#D91680] rounded-full flex items-center justify-center transition-all duration-300" aria-label="YouTube">
                <Youtube className="w-5 h-5 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold mb-4 sm:mb-6 text-[#D91680] uppercase tracking-wider">
              Top Destinations
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-sm font-light">
              <li><Link to="/destinations/bangkok" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Bangkok</Link></li>
              <li><Link to="/destinations/phuket" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Phuket</Link></li>
              <li><Link to="/destinations/koh-samui" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Koh Samui</Link></li>
              <li><Link to="/destinations" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Pattaya</Link></li>
              <li><Link to="/destinations/chiang-mai" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Chiang Mai</Link></li>
              <li><Link to="/destinations" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Krabi</Link></li>
              <li><Link to="/destinations" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Hua Hin</Link></li>
              <li><Link to="/destinations" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Ayutthaya</Link></li>
              <li><Link to="/destinations" className="text-[#D91680] hover:text-[#FDB515] transition-colors inline-flex items-center gap-1 py-1">
                View All Destinations <ArrowRight className="w-3 h-3" />
              </Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold mb-4 sm:mb-6 text-[#D91680] uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-sm font-light">
              <li><Link to="/things-to-do" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Things to Do</Link></li>
              <li><Link to="/accommodation" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Where to Stay</Link></li>
              <li><Link to="/food-dining" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Food & Dining</Link></li>
              <li><Link to="/things-to-do" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Nightlife</Link></li>
              <li><Link to="/culture" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Culture & Temples</Link></li>
              <li><Link to="/destinations" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Island Hopping</Link></li>
              <li><Link to="/things-to-do" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Adventure Activities</Link></li>
              <li><Link to="/itineraries" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Travel Itineraries</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold mb-4 sm:mb-6 text-[#D91680] uppercase tracking-wider">
              Plan Your Trip
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-sm font-light">
              <li><Link to="/travel-planning" className="text-gray-400 hover:text-white transition-colors inline-block py-1">First Time in Thailand</Link></li>
              <li><Link to="/visa-guide" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Visa Requirements</Link></li>
              <li><Link to="/budget-guide" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Budget Guide</Link></li>
              <li><Link to="/best-time-to-visit" className="text-gray-400 hover:text-white transition-colors inline-block py-1">When to Visit</Link></li>
              <li><Link to="/travel-planning" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Transportation</Link></li>
              <li><Link to="/travel-planning" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Safety Tips</Link></li>
              <li><Link to="/travel-planning" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Travel Insurance</Link></li>
              <li><Link to="/travel-planning" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Packing Guide</Link></li>
              <li><Link to="/travel-planning" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Thailand FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold mb-4 sm:mb-6 text-[#D91680] uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-sm font-light">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors inline-block py-1">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Contact Us</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Advertise With Us</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Privacy Policy</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Terms of Service</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Cookie Policy</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors inline-block py-1">Sitemap</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <div className="text-xs sm:text-sm text-gray-400 font-light text-center sm:text-left">
            © 2026 ThailandWiki. All rights reserved.
          </div>
          <div className="text-xs text-gray-600 font-light">
            <Link to="/about" className="hover:text-gray-400 transition-colors inline-block py-1">Services</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
