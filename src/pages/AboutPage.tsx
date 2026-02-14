import { useState, FormEvent } from 'react';
import {
  MapPin,
  Book,
  Users,
  Shield,
  CheckCircle2,
  Mail,
  Send,
  AlertCircle,
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { usePageMeta } from '../hooks/usePageMeta';
import { supabase } from '../lib/supabase';

export default function AboutPage() {
  usePageMeta({
    title: 'About ThailandWiki - Your Complete Thailand Travel Guide',
    description:
      'Learn about ThailandWiki, your comprehensive Thailand travel guide. Honest reviews, detailed guides, and practical advice for planning the perfect trip to Thailand.',
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const { error } = await supabase.from('contact_submissions').insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please try again or email us directly at info@thailandwiki.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Breadcrumb items={[{ label: 'About', path: '/about' }]} />

      <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6 uppercase tracking-[3px]">
              About ThailandWiki
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              ThailandWiki is your comprehensive guide to traveling in Thailand. We provide honest, detailed
              information to help you plan the perfect trip.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Book className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] uppercase tracking-[2px]">Our Mission</h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                We believe travel planning should be easy and informed. Thailand is an incredible destination, but
                finding reliable information can be overwhelming.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                ThailandWiki cuts through the noise. We provide honest reviews, detailed guides, and practical advice
                based on real experience.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed font-semibold">
                No fluff. No sponsored content disguised as advice. Just useful information to help you make smart
                travel decisions.
              </p>
            </div>
          </section>

          <div className="mb-16">
            <img
              src="https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Beautiful Thailand landscape"
              className="w-full h-96 object-cover rounded-xl shadow-2xl"
            />
          </div>

          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] uppercase tracking-[2px]">
                What We Cover
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Destination Guides</h3>
                  <p className="text-gray-700">Bangkok, Phuket, Koh Samui, Chiang Mai, and more</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Practical Guides</h3>
                  <p className="text-gray-700">Visas, transportation, money, and safety</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Activity Guides</h3>
                  <p className="text-gray-700">Diving, island hopping, temples, and nightlife</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Honest Reviews</h3>
                  <p className="text-gray-700">Hotel and accommodation reviews</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-red-50 to-rose-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Food Guides</h3>
                  <p className="text-gray-700">Restaurant recommendations and food guides</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Cultural Insights</h3>
                  <p className="text-gray-700">Etiquette tips and cultural guidance</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-pink-50 to-cyan-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-[#D91680] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Budget Planning</h3>
                  <p className="text-gray-700">Cost breakdowns and budget guides</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] uppercase tracking-[2px]">
                Our Approach
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white border-l-4 border-blue-600 p-6 shadow-md rounded-r-lg">
                <h3 className="font-bold text-gray-900 text-xl mb-3">Detailed and Comprehensive</h3>
                <p className="text-gray-700 leading-relaxed">
                  We cover topics thoroughly so you have all the information you need.
                </p>
              </div>

              <div className="bg-white border-l-4 border-green-600 p-6 shadow-md rounded-r-lg">
                <h3 className="font-bold text-gray-900 text-xl mb-3">Honest and Unbiased</h3>
                <p className="text-gray-700 leading-relaxed">
                  We tell you the good and the bad. If something is overrated, we say so.
                </p>
              </div>

              <div className="bg-white border-l-4 border-orange-600 p-6 shadow-md rounded-r-lg">
                <h3 className="font-bold text-gray-900 text-xl mb-3">Practical and Useful</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every guide includes actionable information, costs, and logistics.
                </p>
              </div>

              <div className="bg-white border-l-4 border-purple-600 p-6 shadow-md rounded-r-lg">
                <h3 className="font-bold text-gray-900 text-xl mb-3">Updated Regularly</h3>
                <p className="text-gray-700 leading-relaxed">
                  Thailand changes. We keep our guides current.
                </p>
              </div>

              <div className="bg-white border-l-4 border-red-600 p-6 shadow-md rounded-r-lg">
                <h3 className="font-bold text-gray-900 text-xl mb-3">Written for Real Travelers</h3>
                <p className="text-gray-700 leading-relaxed">
                  Whether you are backpacking or staying in luxury hotels, our guides help you.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#D91680] rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] uppercase tracking-[2px]">
                Why Trust Us
              </h2>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-cyan-100 rounded-xl p-8 md:p-12 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#D91680] flex-shrink-0 mt-1" />
                  <p className="text-gray-800 text-lg leading-relaxed">
                    Our team has <strong>lived in and traveled throughout Thailand extensively</strong>. We have
                    personally visited the destinations, hotels, and restaurants we recommend.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#D91680] flex-shrink-0 mt-1" />
                  <p className="text-gray-800 text-lg leading-relaxed">
                    We <strong>do not accept payment for reviews or recommendations</strong>. Our content is unbiased.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#D91680] flex-shrink-0 mt-1" />
                  <p className="text-gray-800 text-lg leading-relaxed">
                    We <strong>research thoroughly, fact-check rigorously, and update content regularly</strong>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#D91680] rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] uppercase tracking-[2px]">Contact Us</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Have questions? Spot an error? Want to suggest a guide?
                </p>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-6 h-6 text-[#D91680]" />
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">Email</p>
                      <a
                        href="mailto:info@thailandwiki.com"
                        className="text-lg text-[#D91680] hover:text-[#b0005f] font-semibold"
                      >
                        info@thailandwiki.com
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">We read every message and respond within 24-48 hours.</p>
                </div>
              </div>

              <div>
                <img
                  src="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Thailand travel team"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-800 font-semibold">Message sent successfully!</p>
                    <p className="text-sm text-green-700 mt-1">We'll get back to you within 24-48 hours.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-800 font-semibold">Failed to send message</p>
                    <p className="text-sm text-red-700 mt-1">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D91680] focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D91680] focus:border-transparent outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D91680] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#D91680] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#b0005f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
