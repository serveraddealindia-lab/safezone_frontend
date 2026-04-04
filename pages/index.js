import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AOS from 'aos';
import SiteLayout from '../components/SiteLayout';
import KeepUpToDate from '../components/KeepUpToDate';
import PrestigiousProjects from '../components/PrestigiousProjects';
import MarketsWeServe from '../components/MarketsWeServe';
import Newsletter from '../components/Newsletter';
import ServingAllOverIndia from '../components/ServingAllOverIndia';

export default function Home() {
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);
  const [videoOk, setVideoOk] = useState(true);
  const heroVideoRef = useRef(null);
  const [heroVideoIndex, setHeroVideoIndex] = useState(0);

  const heroVideos = useMemo(() => ['/videos/banner-video.mp4', '/videos/banner-video-one.mp4'], []);

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

  const categories = useMemo(
    () => [
      {
        title: 'Fire Protection Systems',
        image:
          'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&h=600&fit=crop&q=80',
        href: '/services',
      },
      {
        title: 'Industrial Safety',
        image:
          'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&h=600&fit=crop&q=80',
        href: '/services',
      },
      {
        title: 'Commercial Solutions',
        image:
          'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&h=600&fit=crop&q=80',
        href: '/services',
      },
      {
        title: 'Emergency Response',
        image:
          'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=900&h=600&fit=crop&q=80',
        href: '/contact',
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-white font-sans text-black">
      {/* MOBILE (redesign only) */}
      <div className="md:hidden">
        <SiteLayout mainClassName="pt-0">
        <main className="w-full">
          {/* 2) HERO SECTION */}
          <section
            ref={heroRef}
            className="relative w-full overflow-hidden bg-neutral-900"
            style={{ height: '100vh' }}
          >
            {/* Video banner (local) with fallback */}
            {videoOk ? (
              <video
                ref={heroVideoRef}
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                playsInline
                preload="auto"
                onError={() => setVideoOk(false)}
                onEnded={() => setHeroVideoIndex((i) => (i + 1) % heroVideos.length)}
                poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&q=80"
              >
                <source
                  src={heroVideos[heroVideoIndex]}
                  type="video/mp4"
                />
              </video>
            ) : (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&q=80)',
                }}
              />
            )}
            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-10 flex h-full items-center justify-center text-center">
              <div className="w-full px-4">
                <div ref={heroContentRef} className="mx-auto max-w-[22rem] text-white">
                  <div className="mb-3 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[12px] font-semibold tracking-wide ring-1 ring-white/15">
                    Safe Zone Fire Safety Platform
                  </div>
                  <h1 className="text-[34px] leading-[1.05] font-extrabold tracking-tight">
                    Serving &amp; Protecting Across India
                  </h1>
                  <p className="mt-4 text-[15px] leading-relaxed text-white/90">
                    Advanced Fire &amp; Safety Solutions
                  </p>
                  <div className="mt-7">
                    <Link
                      href="/services"
                      className="inline-flex w-full items-center justify-center gap-2 px-5 py-4 text-[15px] font-bold text-white active:scale-[0.99] transition"
                      style={{ background: 'var(--sz-brand)' }}
                    >
                      Explore Solutions <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3) INTRO SECTION – NAFFCO-style About with image */}
          <section className="bg-white py-[60px]">
            <div className="mx-auto w-full max-w-[1100px] px-4">
              <div className="space-y-8" data-aos="fade-up">
                <div className="w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1600&h=900&fit=crop&q=80"
                    alt="Safe Zone facility"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="max-w-[34rem]">
                  <h2 className="text-[22px] font-extrabold tracking-tight text-gray-900 mb-3">
                    About SAFE ZONE
                  </h2>
                  <p className="text-[15px] leading-relaxed text-gray-600">
                    Headquartered in India, Safe Zone provides advanced fire protection, detection and
                    emergency response solutions for critical environments. We combine engineering
                    expertise with on-ground experience to protect lives, assets and operations across
                    residential, commercial and industrial sectors.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 4) CATEGORY GRID (keeps your “solutions” content; replace titles/images anytime) */}
          <section className="bg-white py-[50px]">
            <div className="mx-auto w-full max-w-[1100px] px-4">
              <div className="mb-6" data-aos="fade-up">
                <div className="text-[12px] font-extrabold uppercase tracking-[0.22em] text-[#D32F2F]">
                  Categories
                </div>
                <h3 className="mt-2 text-[22px] font-extrabold tracking-tight text-gray-900">
                  Explore solutions by need
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {categories.map((cat, i) => (
                  <Link
                    key={cat.title}
                    href={cat.href}
                    data-aos="fade-up"
                    data-aos-delay={i * 60}
                    className="group overflow-hidden rounded-[10px] bg-white shadow-md ring-1 ring-black/5 active:scale-[0.99] transition"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent opacity-80" />
                    </div>
                    <div className="p-3.5">
                      <div className="text-[14px] font-extrabold text-gray-900 leading-snug">
                        {cat.title}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Restored sections (your original homepage content) */}
          <ServingAllOverIndia />
          <KeepUpToDate />
          <PrestigiousProjects />
          <MarketsWeServe />
          <Newsletter />

          {/* 5) CTA SECTION */}
          <section className="bg-white py-[50px]">
            <div className="mx-auto w-full max-w-[1100px] px-4">
              <div className="rounded-[10px] bg-gray-900 px-5 py-8 text-white shadow-lg" data-aos="fade-up">
                <div className="text-[26px] font-extrabold leading-tight tracking-tight">
                  Stay Safe.
                  <br />
                  Get Alerts.
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-white/85">
                  Set up notifications and response steps so your team always knows what to do next.
                </p>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center rounded-[10px] bg-[#D32F2F] px-5 py-4 text-[15px] font-bold text-white active:scale-[0.99] transition"
                  >
                    Get alerts
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        </SiteLayout>
      </div>

      {/* DESKTOP/TABLET (keep your existing homepage as-is) */}
      <div className="hidden md:block">
        <SiteLayout mainClassName="w-full">
          {/* Keep desktop section order (we’ll harmonize styles via tokens) */}
          <section className="relative w-full h-[60vh] min-h-[400px] md:h-[80vh] md:min-h-[520px] overflow-hidden bg-neutral-800">
            {videoOk ? (
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                playsInline
                preload="auto"
                onError={() => setVideoOk(false)}
                onEnded={() => setHeroVideoIndex((i) => (i + 1) % heroVideos.length)}
                key={`desktop-${heroVideoIndex}`}
              >
                <source src={heroVideos[heroVideoIndex]} type="video/mp4" />
              </video>
            ) : (
              <div
                className="absolute inset-0 bg-cover bg-center image-zoom-hero"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&q=80)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
              </div>
            )}
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex items-center z-10">
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4">
                    Serving &amp; Protecting Across India
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 font-medium mb-8">
                    Advanced Fire &amp; Safety Solutions
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

          <ServingAllOverIndia />
          <KeepUpToDate />
          <PrestigiousProjects />
          <MarketsWeServe />
          <Newsletter />
        </SiteLayout>
      </div>
    </div>
  );
}
