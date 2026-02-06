import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { contactAPI } from '../../lib/api';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);
    try {
      await contactAPI.submit(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Page Header */}
        <section className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6" data-aos="fade-up">Contact Us</h1>
            <p className="text-xl lg:text-2xl text-red-100 max-w-3xl" data-aos="fade-up" data-aos-delay="100">
              Get in touch with our team for fire safety solutions
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Info */}
              <div data-aos="fade-right">
                <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">Get in Touch</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                  We're here to help you with all your fire safety needs. Reach out to us through any of the following channels.
                </p>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start group">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-50 to-red-100 rounded-xl flex items-center justify-center mr-5 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-red-100 group-hover:to-red-200 transition-all duration-300">
                      <MapPin className="w-7 h-7 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">Address</h3>
                      <p className="text-gray-600 leading-relaxed">GF - 03, BHUMI ESTATE<br />Bs. DADA ESTATE, SARKHEJ<br />AHMEDABAD - 382 210</p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-50 to-red-100 rounded-xl flex items-center justify-center mr-5 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-red-100 group-hover:to-red-200 transition-all duration-300">
                      <Phone className="w-7 h-7 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">Phone</h3>
                      <p className="text-gray-600">+91 99749 99995</p>
                      <p className="text-gray-600">+91 81601 78244</p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-50 to-red-100 rounded-xl flex items-center justify-center mr-5 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-red-100 group-hover:to-red-200 transition-all duration-300">
                      <Mail className="w-7 h-7 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">Email</h3>
                      <p className="text-gray-600">sales@safezonefire.info</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 shadow-lg">
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">Business Hours</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Monday - Friday: <span className="font-semibold text-gray-900">8:00 AM - 6:00 PM</span></p>
                    <p>Saturday: <span className="font-semibold text-gray-900">9:00 AM - 2:00 PM</span></p>
                    <p>Sunday: <span className="font-semibold text-gray-900">Closed</span></p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div data-aos="fade-left" className="bg-white rounded-xl p-8 lg:p-10 shadow-xl border border-gray-100">
                <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">Send us a Message</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="Subject"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="Your message..."
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                      Thank you for your message! We will get back to you soon.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                      Failed to send message. Please try again later.
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

