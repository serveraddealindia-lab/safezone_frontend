import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { gsap } from 'gsap';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { ArrowRight, Search, Menu, Factory, Users, GraduationCap, Award, Quote } from 'lucide-react';
import { bannersAPI, productsAPI } from '../lib/api';

export default function Home() {
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);
  const [banners, setBanners] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('News');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [bannersRes, productsRes] = await Promise.all([
          bannersAPI.getAll(),
          productsAPI.getAll()
        ]);
        setBanners(bannersRes.data);
        setProducts(productsRes.data.slice(0, 6));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (heroContentRef.current) {
      const tl = gsap.timeline();
      tl.from(heroContentRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }
  }, []);

  const heroSlides = banners.length > 0 
    ? banners.map(banner => ({
        title: banner.title,
        image: banner.image || 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&h=800&fit=crop'
      }))
    : [
        {
          title: 'THE WORLD\'S TALLEST MAN MADE STRUCTURE - BURJ KHALIFA PROTECTED BY FIRE SAFETY',
          image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&h=800&fit=crop'
        },
        {
          title: 'ADVANCED FIRE SAFETY SOLUTIONS FOR MODERN ARCHITECTURE',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=800&fit=crop'
        }
      ];

  const news = [
    {
      id: 1,
      title: 'Strategic Alliance: Fire Safety Platform Partners with Leading Technology Provider',
      description: 'A groundbreaking partnership that redefines safety standards and innovation in fire protection systems.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop',
      category: 'Partnership'
    },
    {
      id: 2,
      title: 'Fire Safety Platform Signs Major Deal Worth 200 Million AED',
      description: 'A significant milestone in expanding our global reach and enhancing fire safety solutions worldwide.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop',
      category: 'Business'
    },
    {
      id: 3,
      title: 'Advancing Global Safety: Next-Gen Emergency Vehicles Partnership',
      description: 'Commitment to advancing safety and innovation worldwide through strategic collaborations.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop',
      category: 'Innovation'
    }
  ];

  const projects = [
    {
      title: 'ZAYED UNIVERSITY',
      image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&h=600&fit=crop'
    },
    {
      title: 'MUSEUM OF THE FUTURE',
      image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&h=600&fit=crop'
    },
    {
      title: 'LOUVRE ABU DHABI',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop'
    }
  ];

  const markets = [
    {
      title: 'Hospitality & Leisure Fire Protection',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop'
    },
    {
      title: 'Healthcare and Education - Mobile Hospitals Fire Protection',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Banner Swiper */}
        <section ref={heroRef} className="relative h-[600px] lg:h-[700px] xl:h-[800px] overflow-hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="h-full hero-swiper"
            speed={1000}
            effect="fade"
            onSlideChange={(swiper) => {
              const activeSlide = swiper.slides[swiper.activeIndex];
              const content = activeSlide.querySelector('.hero-content');
              if (content) {
                gsap.from(content.children, {
                  y: 50,
                  opacity: 0,
                  duration: 0.8,
                  stagger: 0.15,
                  ease: 'power3.out'
                });
              }
            }}
          >
            {heroSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-full group">
                  <div 
                    className="absolute inset-0 bg-cover bg-center hero-image"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40 hero-overlay" />
                  </div>
                  <div className="relative h-full flex items-center z-10">
                    <div className="container mx-auto px-4 lg:px-6 text-white">
                      <div ref={index === 0 ? heroContentRef : null} className="hero-content max-w-4xl">
                        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black uppercase leading-tight mb-6 tracking-tight hero-title">
                          {slide.title}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* About Section */}
        <section className="bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Panel - About Text */}
            <div className="bg-white p-8 lg:p-16 flex flex-col justify-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About Fire Safety</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Headquartered in Dubai, Fire Safety Platform is a world-leading producer and supplier of top-tier firefighting equipment, 
                fire protection systems, fire alarms, security, and safety engineering systems. Our vision is to redefine safety standards 
                and protect life, environment, and property.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                With decades of experience and innovation, we continue to set new benchmarks in fire safety technology and solutions.
              </p>
            </div>

            {/* Right Panel - Years */}
            <div className="bg-red-600 p-8 lg:p-16 flex items-center justify-center">
              <div className="text-center">
                <p className="text-8xl lg:text-9xl font-black text-white">30+</p>
                <p className="text-2xl lg:text-3xl font-bold text-white mt-4">years</p>
              </div>
            </div>
          </div>

          {/* Bottom Right Section */}
          <div className="bg-white p-8 lg:p-16">
            <div className="max-w-md ml-auto">
              <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white font-black text-3xl">FS</span>
              </div>
              <p className="text-xl lg:text-2xl font-semibold text-gray-900 mb-6">
                Keeping you safe and your property secure is our business.
              </p>
              <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop" 
                  alt="Team" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </section>

        {/* Statistics & Mission Section */}
        <section className="bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left - Building Image */}
            <div className="h-[600px] lg:h-[700px] bg-gray-200 overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=700&fit=crop" 
                alt="Facility" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Right - Statistics */}
            <div className="bg-white p-8 lg:p-16 flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Factory className="w-8 h-8 text-red-600" />
                  </div>
                  <p className="text-3xl lg:text-4xl font-black text-gray-900 mb-2">11M</p>
                  <p className="text-sm lg:text-base text-gray-600 uppercase tracking-wide">ft² Facilities</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-red-600" />
                  </div>
                  <p className="text-3xl lg:text-4xl font-black text-gray-900 mb-2">20,000</p>
                  <p className="text-sm lg:text-base text-gray-600 uppercase tracking-wide">Employees</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8 text-red-600" />
                  </div>
                  <p className="text-3xl lg:text-4xl font-black text-gray-900 mb-2">3,500</p>
                  <p className="text-sm lg:text-base text-gray-600 uppercase tracking-wide">Engineers</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-red-600" />
                  </div>
                  <p className="text-3xl lg:text-4xl font-black text-gray-900 mb-2">1,000+</p>
                  <p className="text-sm lg:text-base text-gray-600 uppercase tracking-wide">Certified Products</p>
                </div>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Serving over 100 countries - Passion to Protect
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our passion to protect and save lives globally drives everything we do. Our high-quality products safeguard lives, 
                environment, and property, ensuring safety standards are met and exceeded worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="bg-red-600 py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <Quote className="w-12 h-12 text-white" />
              </div>
              <blockquote className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-8 leading-relaxed">
                "Fire Safety Platform enjoys a strong market position globally as a leading fire safety solution provider."
              </blockquote>
              <p className="text-xl lg:text-2xl text-white/90 font-semibold">
                Eng. John Smith, Chief Executive Officer - Fire Safety Platform
              </p>
            </div>
          </div>
        </section>

        {/* Keep Up To Date Section */}
        <section className="bg-black text-white">
          <div className="container mx-auto px-4 lg:px-6 py-12 lg:py-16">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 lg:mb-0">Keep up to date</h2>
              <div className="flex items-center space-x-1 mb-6 lg:mb-0">
                <button
                  onClick={() => setActiveTab('News')}
                  className={`px-6 py-3 font-semibold transition-colors ${
                    activeTab === 'News' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  News
                </button>
                <button
                  onClick={() => setActiveTab('Events')}
                  className={`px-6 py-3 font-semibold transition-colors ${
                    activeTab === 'Events' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Events
                </button>
                <button
                  onClick={() => setActiveTab('Invitations')}
                  className={`px-6 py-3 font-semibold transition-colors ${
                    activeTab === 'Invitations' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Invitations
                </button>
              </div>
              <Link href="/news" className="text-red-500 hover:text-red-400 font-semibold flex items-center">
                See All <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {news.map((item, index) => (
                <article
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-red-400 transition-colors">{item.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">{item.description}</p>
                    <Link
                      href="/news"
                      className="inline-flex items-center text-red-500 hover:text-red-400 font-semibold text-sm group/link"
                    >
                      Read More <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Prestigious Projects Section */}
        <section className="bg-red-600 text-white">
          <div className="container mx-auto px-4 lg:px-6 py-12 lg:py-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-12">Prestigious Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Left Red Box */}
              <div className="bg-red-700 p-8 lg:p-12 flex flex-col justify-between rounded-lg">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-8">
                  <span className="text-red-600 font-black text-3xl">FS</span>
                </div>
                <Link href="/projects" className="text-white hover:text-gray-200 font-semibold flex items-center text-lg">
                  Explore more projects <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>

              {/* Project Images */}
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="relative h-64 lg:h-80 rounded-lg overflow-hidden group cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 group-hover:from-black/80 group-hover:via-black/40 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                    <h3 className="text-xl lg:text-2xl font-bold text-white uppercase group-hover:text-red-400 transition-colors">{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Markets Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="mb-8">
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">TOP END-USER INDUSTRIES</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Markets</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Panel */}
              <div className="lg:col-span-1">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Our expertise in providing solutions for fire protection and life safety objectives spans across multiple industries.
                </p>
                <Link href="/markets" className="text-red-600 hover:text-red-700 font-semibold flex items-center">
                  See All <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>

              {/* Market Images */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {markets.map((market, index) => (
                  <div
                    key={index}
                    className="relative h-64 lg:h-80 rounded-lg overflow-hidden group cursor-pointer"
                  >
                    <img
                      src={market.image}
                      alt={market.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 group-hover:from-black/70 group-hover:via-black/40 transition-all duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                      <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-red-400 transition-colors">{market.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Section - Similar to NAFFCO */}
        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Products</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive fire safety solutions for every application</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {products.slice(0, 6).map((product, index) => (
                <div
                  key={product.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 group border border-gray-100"
                >
                  <div className="relative h-72 overflow-hidden bg-gray-100">
                    <img
                      src={product.image || 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop'}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 lg:p-8">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">{product.name}</h3>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-2">{product.short_desc || product.description || 'Premium fire safety solution designed for maximum protection and reliability.'}</p>
                    <Link
                      href={`/products/${product.id}`}
                      className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold text-sm group/link"
                    >
                      View Details 
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/products"
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                View All Products <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-white py-12 lg:py-16 border-t border-gray-200">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-xl lg:text-2xl font-semibold text-gray-900">
                  Subscribe to stay up to date on all the latest news
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="consent"
                      className="mt-1 mr-3 w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-700">
                      I consent to Fire Safety Platform contacting me with news, service information and other updates
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    Subscribe Now <ArrowRight className="w-5 h-5 ml-2" />
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
