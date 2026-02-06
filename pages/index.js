import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';
import AOS from 'aos';
import KeepUpToDate from '../components/KeepUpToDate';
import PrestigiousProjects from '../components/PrestigiousProjects';
import MarketsWeServe from '../components/MarketsWeServe';
import Newsletter from '../components/Newsletter';
import ServingAllOverIndia from '../components/ServingAllOverIndia';

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
          <div className="absolute inset-0 bg-cover bg-center image-zoom-hero" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&q=80)'}}>
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
        <section className="w-full bg-white py-12 md:py-16 lg:py-20">
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

        <ServingAllOverIndia />

        <div className="-mt-8">
          <KeepUpToDate />
        </div>

        <div className="-mt-8">
          <PrestigiousProjects />
        </div>

        <div className="-mt-8">
          <MarketsWeServe />
        </div>

        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}
