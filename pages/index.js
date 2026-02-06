import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';
import AOS from 'aos';

export default function Home() {
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);

  useEffect(() => {
    AOS.refresh();
  }, []);

  useEffect(() => {
    if (!heroContentRef.current) return;
    const el = heroContentRef.current;
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    const t = setTimeout(() => {
      el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100);
    return () => clearTimeout(t);
  }, []);

  const stats = [
    { value: '36+', label: 'Years Experience' },
    { value: '1000+', label: 'Projects Completed' },
    { value: '500+', label: 'Clients' },
    { value: 'Pan India', label: 'Presence' },
  ];

  const featureCards = [
    { title: 'Classic Highland' },
    { title: 'S99 Project' },
    { title: 'Daxidite Felicia' },
  ];

  const newsCards = [
    { title: 'Real Project Installation', desc: 'Latest fire & safety installations across industrial and commercial sites.' },
    { title: 'BITA Expo 2026', desc: 'Join us at BITA Expo for advanced fire protection solutions and live demos.' },
    { title: 'BITA Expo 2026 – Day 1', desc: 'Day one highlights and key announcements from our exhibition stand.' },
  ];

  const industries = [
    'Residential Fire Protection',
    'Hospitality & Leisure',
    'Government Buildings & Monuments',
    'Industrial Fire Protection',
    'Oil, Gas & Power',
    'Hospitals & Critical Care',
    'Educational Institutions',
    'Public Services',
    'Theatres & Amusement Parks',
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main className="w-full">
        {/* SECTION 1 — HERO BANNER */}
        <section
          ref={heroRef}
          className="relative w-full h-[60vh] min-h-[400px] md:h-[80vh] md:min-h-[520px] overflow-hidden bg-neutral-800"
        >
          <div className="absolute inset-0 bg-cover bg-center image-zoom-hero bg-neutral-700">
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          </div>
          <div className="absolute inset-0 flex items-center z-10">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div ref={heroContentRef} className="max-w-2xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4">
                  Serving & Protecting Across India
                </h1>
                <p className="text-lg md:text-xl text-white/90 font-medium mb-8">
                  Advanced Fire & Safety Solutions
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center bg-[#c40000] hover:bg-[#a30000] text-white font-semibold px-6 py-3.5 transition-all duration-300 ease-out"
                >
                  Explore Solutions <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — ABOUT + STATS */}
        <section className="w-full bg-white py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div data-aos="fade-up">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6">
                  About Us
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
                  We are a leading fire protection company serving all over India.
                  Our mission is safety, innovation and reliable engineering.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    data-aos="fade-up"
                    data-aos-delay={i * 80}
                    className="bg-[#c40000] text-white p-6 md:p-8 transition-shadow duration-300 hover:shadow-lg"
                  >
                    <p className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</p>
                    <p className="text-sm md:text-base font-medium text-white/90">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — FEATURE SHOWCASE */}
        <section className="w-full bg-white py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center mb-12 md:mb-16">
              Serving All Over India – For A Safer World
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {featureCards.map((card, i) => (
                <div
                  key={card.title}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  className="group relative overflow-hidden bg-neutral-200 aspect-[4/3] shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-neutral-300 flex items-center justify-center text-gray-500 text-sm image-zoom">
                    Image
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold text-white drop-shadow">
                      {card.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 — KEEP UP TO DATE */}
        <section className="w-full bg-neutral-50 py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-12 md:mb-16">
              Keep Up To Date
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {newsCards.map((card, i) => (
                <article
                  key={card.title}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  className="bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-video bg-neutral-200 flex items-center justify-center text-gray-500 text-sm image-zoom overflow-hidden">
                    Image
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="text-lg font-bold text-black mb-2">{card.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
                      {card.desc}
                    </p>
                    <Link
                      href="/news"
                      className="inline-flex items-center text-[#c40000] font-semibold text-sm hover:text-[#a30000] transition-colors"
                    >
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — PRESTIGIOUS PROJECTS (NAFFCO layout: 2 top with title below image; 1 wide with overlay + Explore this project; red Explore more button) */}
        <section className="w-full bg-white py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-right text-[#c40000] text-sm font-semibold uppercase tracking-wider mb-6 lg:mb-8">
              Prestigious Projects
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
              {/* Top row: two cards — large image, title BELOW image (small font) */}
              <div data-aos="fade-up" data-aos-delay="0" className="group overflow-hidden">
                <div className="relative aspect-[16/10] lg:aspect-[16/9] bg-neutral-200 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm image-zoom">
                    Image
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <p className="mt-3 text-sm text-gray-600 font-medium uppercase tracking-wide">Project One</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="100" className="group overflow-hidden">
                <div className="relative aspect-[16/10] lg:aspect-[16/9] bg-neutral-200 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm image-zoom">
                    Image
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <p className="mt-3 text-sm text-gray-600 font-medium uppercase tracking-wide">Project Two</p>
              </div>
            </div>
            {/* Bottom: one full-width card — overlay title + description + Explore this project → */}
            <div data-aos="fade-up" data-aos-delay="200" className="group relative overflow-hidden aspect-[21/9] lg:aspect-[3/1] bg-neutral-200 mb-8">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm image-zoom">
                Image
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10 flex flex-col justify-end">
                <h3 className="text-xl lg:text-3xl font-bold text-white uppercase mb-2">Project Three</h3>
                <p className="text-white/90 text-sm lg:text-base max-w-2xl mb-4">
                  Comprehensive fire protection and life safety systems for a landmark facility. Engineered solutions delivering unmatched safety standards.
                </p>
                <Link href="/projects" className="inline-flex items-center text-white font-semibold hover:text-white/90 transition-colors w-fit">
                  Explore this project <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </div>
            </div>
            <div data-aos="fade-up" className="flex justify-start">
              <Link
                href="/projects"
                className="inline-flex items-center bg-[#c40000] hover:bg-[#a30000] text-white font-semibold px-6 py-3 transition-all duration-300"
              >
                Explore more projects <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 6 — MARKETS WE SERVE: left image + right writeup; then right image + left writeup; 9 numbered list */}
        <section className="w-full bg-neutral-50 py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Row 1: Left = image, Right = heading + paragraph + 9 numbered list */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 lg:mb-20">
              <div data-aos="fade-up" data-aos-delay="0" className="order-2 lg:order-1">
                <div className="relative aspect-[4/3] bg-neutral-200 rounded overflow-hidden group">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm image-zoom">
                    Image
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="100" className="order-1 lg:order-2">
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                  Markets We Serve
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                  Our expertise in providing fire protection solutions across Western India
                  ensures unmatched safety standards.
                </p>
                <ul className="space-y-3 md:space-y-4">
                  {industries.slice(0, 9).map((item, i) => (
                    <li
                      key={item}
                      data-aos="fade-up"
                      data-aos-delay={100 + i * 40}
                      className="flex items-center gap-3 text-black font-medium"
                    >
                      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#c40000] text-white text-sm font-bold rounded">
                        {i + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Row 2: Left = writeup, Right = image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div data-aos="fade-up" data-aos-delay="0">
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  We deliver fire safety solutions for residential, commercial, industrial, and public sector clients. Our certified systems and Pan India presence support projects from design to commissioning and maintenance.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="100">
                <div className="relative aspect-[4/3] bg-neutral-200 rounded overflow-hidden group">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm image-zoom">
                    Image
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subscribe Newsletter — NAFFCO style: two-line heading, underline inputs, checkbox, triangular Subscribe Now button */}
        <section className="w-full bg-gray-100 py-12 lg:py-16 border-t border-gray-200">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
                Subscribe to stay up to date on<br />all the latest news
              </h2>
              <form className="space-y-5 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      className="w-full py-2 border-0 border-b border-gray-800 bg-transparent focus:ring-0 focus:border-[#c40000] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full py-2 border-0 border-b border-gray-800 bg-transparent focus:ring-0 focus:border-[#c40000] outline-none"
                    />
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mt-1 w-4 h-4 text-[#c40000] border-gray-400 rounded focus:ring-[#c40000]"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-700">
                    I consent to Safe Zone contacting me with news, service information and other updates
                  </label>
                </div>
                <div className="flex justify-end sm:justify-start">
                  <button
                    type="submit"
                    className="subscribe-now-btn inline-flex items-center bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold pl-8 pr-5 py-3 transition-all duration-300 relative overflow-visible"
                    style={{ clipPath: 'polygon(12px 0, 100% 0, 100% 100%, 12px 100%, 0 50%)' }}
                  >
                    <span className="flex items-center">
                      Subscribe Now <ArrowRight className="w-5 h-5 ml-2" />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
