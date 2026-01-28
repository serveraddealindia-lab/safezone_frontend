import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { MapPin, Clock, Briefcase, ArrowRight } from 'lucide-react';

export default function CareersPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/v1/careers');
        const data = await response.json();
        setJobs(data.data || []);
        setError(null);
      } catch (err) {
        console.error('Error fetching careers:', err);
        setError('Failed to load careers. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchCareers();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Page Header */}
        <section className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6" data-aos="fade-up">Careers</h1>
            <p className="text-xl lg:text-2xl text-red-100 max-w-3xl" data-aos="fade-up" data-aos-delay="100">
              Join our team and help protect lives and property
            </p>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16" data-aos="fade-up">
              <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">Why Join Us?</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">We Offer Competitive Benefits</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Join a team that values growth, balance, and excellence</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              <div className="bg-white rounded-xl p-8 lg:p-10 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100" data-aos="fade-up" data-aos-delay="100">
                <div className="w-16 h-16 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Career Growth</h3>
                <p className="text-gray-600 leading-relaxed">Opportunities for professional development and advancement</p>
              </div>
              <div className="bg-white rounded-xl p-8 lg:p-10 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100" data-aos="fade-up" data-aos-delay="200">
                <div className="w-16 h-16 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Work-Life Balance</h3>
                <p className="text-gray-600 leading-relaxed">Flexible schedules and supportive work environment</p>
              </div>
              <div className="bg-white rounded-xl p-8 lg:p-10 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100" data-aos="fade-up" data-aos-delay="300">
                <div className="w-16 h-16 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Great Locations</h3>
                <p className="text-gray-600 leading-relaxed">Work in prime locations across the region</p>
              </div>
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16" data-aos="fade-up">
              <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">Open Positions</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Join Our Team</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">Explore exciting career opportunities in fire safety</p>
            </div>
            {loading && (
              <div className="text-center py-12">
                <p className="text-gray-600">Loading careers...</p>
              </div>
            )}
            {error && (
              <div className="text-center py-12">
                <p className="text-red-600">{error}</p>
              </div>
            )}
            {!loading && !error && (
              <>
                {jobs.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-600">No open positions at the moment. Please check back later.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {jobs.map((job, index) => (
                <div
                    key={job.id}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="bg-white rounded-xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
                  >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                        <span className="flex items-center bg-gray-50 px-4 py-2 rounded-lg text-sm font-medium">
                          <MapPin className="w-4 h-4 mr-2 text-red-600" />
                          {job.location}
                        </span>
                        <span className="flex items-center bg-gray-50 px-4 py-2 rounded-lg text-sm font-medium">
                          <Clock className="w-4 h-4 mr-2 text-red-600" />
                          {job.type}
                        </span>
                        <span className="flex items-center bg-gray-50 px-4 py-2 rounded-lg text-sm font-medium">
                          <Briefcase className="w-4 h-4 mr-2 text-red-600" />
                          {job.department}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{job.description}</p>
                    </div>
                    <button className="mt-6 lg:mt-0 lg:ml-8 inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap">
                      Apply Now <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

