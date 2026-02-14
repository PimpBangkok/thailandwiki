import { useState } from 'react';
import { Mail, Send, Loader2, CheckCircle } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { supabase } from '../lib/supabase';
import { usePageMeta } from '../hooks/usePageMeta';

export default function ContactPage() {
  usePageMeta({
    title: 'Contact ThailandWiki - Get in Touch',
    description: 'Contact ThailandWiki for questions, suggestions, partnerships, or travel advice. We\'re here to help plan your perfect Thailand adventure.',
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject,
          message: formData.message.trim(),
          status: 'new'
        }]);

      if (error) throw error;

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Error submitting form:', error);
      }
      setErrors({ submit: 'Failed to submit form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <>
      <Breadcrumb items={[{ label: 'Contact' }]} />

      <section className="bg-[#252525] py-32">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-8">
            <Mail className="w-12 h-12 text-[#d7007f]" />
            <span className="text-lg uppercase tracking-[2px] text-[#f7a600]">Get in Touch</span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-8 uppercase tracking-[2px]">
            Contact
            <br />
            <span className="text-[#d7007f]">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed">
            Questions, suggestions, or partnership inquiries? We'd love to hear from you
          </p>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            {submitSuccess && (
              <div className="mb-8 p-6 bg-green-50 border-2 border-green-500 rounded-[10px] flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-normal text-green-900 mb-2 uppercase tracking-[2px]">
                    Message Sent
                  </h3>
                  <p className="text-green-800 font-light">
                    Thank you for contacting Thailand Insider. We'll respond within 24-48 hours.
                  </p>
                </div>
              </div>
            )}

            {errors.submit && (
              <div className="mb-8 p-6 bg-red-50 border-2 border-red-500 rounded-[10px]">
                <p className="text-red-800 font-light">
                  {errors.submit}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-normal text-[#252525] mb-3 uppercase tracking-[2px]"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 border-2 rounded-[10px] focus:ring-2 focus:ring-[#d7007f] focus:border-[#d7007f] outline-none transition-all font-light text-lg ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600 font-light">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-normal text-[#252525] mb-3 uppercase tracking-[2px]"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 border-2 rounded-[10px] focus:ring-2 focus:ring-[#d7007f] focus:border-[#d7007f] outline-none transition-all font-light text-lg ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600 font-light">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-normal text-[#252525] mb-3 uppercase tracking-[2px]"
                >
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 border-2 rounded-[10px] focus:ring-2 focus:ring-[#d7007f] focus:border-[#d7007f] outline-none transition-all font-light text-lg ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="content">Content Contribution</option>
                  <option value="technical">Technical Issue</option>
                  <option value="other">Other</option>
                </select>
                {errors.subject && (
                  <p className="mt-2 text-sm text-red-600 font-light">{errors.subject}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-normal text-[#252525] mb-3 uppercase tracking-[2px]"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-6 py-4 border-2 rounded-[10px] focus:ring-2 focus:ring-[#d7007f] focus:border-[#d7007f] outline-none transition-all font-light text-lg resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-600 font-light">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary inline-flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
