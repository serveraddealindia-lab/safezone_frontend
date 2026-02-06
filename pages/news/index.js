import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

export default function NewsPage() {
  const news = [
    {
      id: 1,
      title: 'New Fire Safety Regulations 2024',
      excerpt: 'Stay updated with the latest fire safety regulations and compliance requirements for commercial buildings.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop',
      date: 'March 15, 2024',
      category: 'Regulations'
    },
    {
      id: 2,
      title: 'Innovations in Fire Detection Technology',
      excerpt: 'Discover the latest advancements in fire detection and alarm systems that are revolutionizing safety.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
      date: 'March 10, 2024',
      category: 'Technology'
    },
    {
      id: 3,
      title: 'Emergency Response Best Practices',
      excerpt: 'Learn essential emergency response procedures and safety protocols for your organization.',
      image: 'https://images.unsplash.com/photo-1581092918056-0d45945d7a4a?w=600&h=400&fit=crop',
      date: 'March 5, 2024',
      category: 'Safety'
    },
    {
      id: 4,
      title: 'Fire Safety Training Program Launch',
      excerpt: 'New comprehensive fire safety training program now available for businesses and organizations.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop',
      date: 'February 28, 2024',
      category: 'Training'
    },
    {
      id: 5,
      title: 'Smart Fire Safety Systems Integration',
      excerpt: 'How IoT and smart technology are enhancing fire safety system monitoring and response.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop',
      date: 'February 20, 2024',
      category: 'Technology'
    },
    {
      id: 6,
      title: 'Annual Fire Safety Compliance Checklist',
      excerpt: 'Complete checklist to ensure your facility meets all fire safety compliance requirements.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
      date: 'February 15, 2024',
      category: 'Compliance'
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Page Header */}
        <section className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6" data-aos="fade-up">News & Updates</h1>
            <p className="text-xl lg:text-2xl text-red-100 max-w-3xl" data-aos="fade-up" data-aos-delay="100">
              Stay informed with the latest fire safety news and industry updates
            </p>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {news.map((item, index) => (
                <article
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 group"
                >
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    <img
                      src={item.image || 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop'}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute top-6 left-6">
                      <span className="bg-red-600 text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wide shadow-lg">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center text-xs text-gray-500 mb-4 font-medium">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.date}
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">{item.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-2">{item.excerpt}</p>
                    <Link
                      href={`/news/${item.id}`}
                      className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold text-sm group/link"
                    >
                      Read More 
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

