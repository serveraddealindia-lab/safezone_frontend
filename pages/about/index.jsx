'use client';
import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import styles from '../../styles/about.module.css';
import SiteLayout from '../../components/SiteLayout';

// ── Animated Counter ──────────────────────────────────────────────
function CountUp({ end, suffix = '', duration = 2500 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
            else setCount(end);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ── Scroll Reveal Hook ────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealed);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    const elements = document.querySelectorAll(`.${styles.reveal}`);
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ── Timeline Data ────────────────────────────────────────────────
const timeline = [
  { year: '1991', title: 'Foundation', desc: 'Established in Dubai, UAE as a small fire fighting equipment company with a vision to protect lives.' },
  { year: '1998', title: 'Manufacturing Begins', desc: 'Launched our own manufacturing facility, becoming a full-fledged manufacturer of firefighting equipment.' },
  { year: '2005', title: 'Global Expansion', desc: 'Expanded operations across the Middle East, Africa and Asia with dedicated offices in 20+ countries.' },
  { year: '2012', title: 'Fire Trucks Division', desc: 'Launched our state-of-the-art fire trucks & vehicles manufacturing unit, now exporting worldwide.' },
  { year: '2018', title: 'Aviation Division', desc: 'Established NAFFCO Aviation, specializing in ARFF vehicles and airport safety solutions globally.' },
  { year: '2024', title: 'Global Leader', desc: 'Recognized as the world\'s largest single-source provider of fire fighting solutions with 15,000+ employees.' },
];

// ── Values Data ───────────────────────────────────────────────────
const values = [
  { icon: '🔥', title: 'Passion to Protect', desc: 'Every product, every solution, every service — driven by an unwavering commitment to saving lives.' },
  { icon: '⚙️', title: 'Innovation', desc: 'Continuously advancing our technology to deliver the most reliable, cutting-edge fire safety solutions.' },
  { icon: '🌍', title: 'Global Reach', desc: 'Operating in 100+ countries with localized expertise and a worldwide network of certified partners.' },
  { icon: '✅', title: 'Quality Assurance', desc: 'All products certified by UL, FM, BSI, LPCB and other internationally recognized bodies.' },
  { icon: '🤝', title: 'Integrity', desc: 'Building long-term relationships through transparency, reliability and honest business practices.' },
  { icon: '🏆', title: 'Excellence', desc: 'Setting industry benchmarks in design, manufacturing and deployment of fire safety systems.' },
];

// ── Leadership Data ───────────────────────────────────────────────
const leadership = [
  { name: 'Khalid Al Rostamani', title: 'Chairman', img: 'https://placehold.co/300x360/1a1a2e/ffffff?text=Chairman' },
  { name: 'Mohammed Al Hajri', title: 'Chief Executive Officer', img: 'https://placehold.co/300x360/c8102e/ffffff?text=CEO' },
  { name: 'Abdulla Al Fahim', title: 'Chief Operating Officer', img: 'https://placehold.co/300x360/1a1a2e/ffffff?text=COO' },
  { name: 'Sarah Al Marzouqi', title: 'Chief Financial Officer', img: 'https://placehold.co/300x360/c8102e/ffffff?text=CFO' },
];

// ── Certifications ────────────────────────────────────────────────
const certs = ['UL Listed', 'FM Approved', 'BSI Kitemark', 'LPCB Certified', 'NFPA Compliant', 'ISO 9001', 'CE Marked', 'UAE Approved'];

// ── Main Component ────────────────────────────────────────────────
export default function AboutUs() {
  useScrollReveal();
  const [activeTab, setActiveTab] = useState('vision');

  return (
   <SiteLayout>
      <Head>
        <title>About Us | Your Company</title>
        <meta name="description" content="Learn about our passion to protect — world-leading fire safety solutions since 1991." />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>

        {/* ── HERO ───────────────────────────────────────────────── */}
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <img
              src="https://placehold.co/1920x700/0a0a0a/333333?text=About+Us+Hero"
              alt="About Us Hero"
              className={styles.heroBgImg}
            />
            <div className={styles.heroOverlay} />
          </div>
          <div className={styles.heroContent}>
            <nav className={styles.breadcrumb}>
              <a href="/">Home</a>
              <span>/</span>
              <span>About Us</span>
            </nav>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleRed}>Passion</span> to Protect
            </h1>
            <p className={styles.heroSub}>
              World-leading fire safety solutions trusted by governments, airports,<br />
              hospitals and industries across 100+ countries.
            </p>
          </div>
          {/* Animated scroll indicator */}
          <div className={styles.scrollIndicator}>
            <div className={styles.scrollDot} />
          </div>
        </section>

        {/* ── STATS BAR ───────────────────────────────────────────── */}
        <section className={styles.statsBar}>
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              {[
                { num: 30, suffix: '+', label: 'Years of Excellence' },
                { num: 100, suffix: '+', label: 'Countries Served' },
                { num: 15000, suffix: '+', label: 'Team Members' },
                { num: 50000, suffix: '+', label: 'Projects Completed' },
              ].map((s, i) => (
                <div key={i} className={styles.statItem}>
                  <div className={styles.statNum}>
                    <CountUp end={s.num} suffix={s.suffix} />
                  </div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTRO / ABOUT COMPANY ───────────────────────────────── */}
        <section className={styles.introSection}>
          <div className={styles.container}>
            <div className={styles.introGrid}>
              <div className={`${styles.introText} ${styles.reveal}`}>
                <span className={styles.sectionTag}>WHO WE ARE</span>
                <h2 className={styles.sectionTitle}>
                  A Global Leader in<br />
                  <span className={styles.red}>Fire Safety Solutions</span>
                </h2>
                <p>
                  Founded in 1991 in Dubai, UAE, our company has grown from a regional supplier into the world&rsquo;s
                  single largest source of fire fighting products, systems, and services. With a presence in over
                  100 countries, we protect lives, assets, and environments at the highest standards.
                </p>
                <p>
                  Our comprehensive portfolio spans fire fighting equipment, fire trucks &amp; vehicles, fire protection
                  systems, smoke management, safety &amp; rescue, training, and maintenance — all designed,
                  manufactured, and delivered with uncompromising quality.
                </p>
                <a href="/products" className={styles.btnRed}>
                  Explore Our Products
                  <span className={styles.btnArrow}>→</span>
                </a>
              </div>
              <div className={`${styles.introMedia} ${styles.reveal}`} style={{ '--delay': '0.2s' }}>
                <div className={styles.imgStack}>
                  <img
                    src="https://placehold.co/580x420/1a1a2e/ffffff?text=Fire+Safety+Operations"
                    alt="Operations"
                    className={styles.imgMain}
                  />
                  <div className={styles.imgBadge}>
                    <span className={styles.imgBadgeNum}>#1</span>
                    <span className={styles.imgBadgeText}>Global Fire Safety Provider</span>
                  </div>
                  <img
                    src="https://placehold.co/200x200/c8102e/ffffff?text=Excellence"
                    alt="Excellence"
                    className={styles.imgSecondary}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── VISION / MISSION / VALUES TABS ──────────────────────── */}
        <section className={styles.tabSection}>
          <div className={styles.container}>
            <div className={styles.tabHeader}>
              {['vision', 'mission', 'values'].map((tab) => (
                <button
                  key={tab}
                  className={`${styles.tabBtn} ${activeTab === tab ? styles.tabBtnActive : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className={styles.tabContent}>
              {activeTab === 'vision' && (
                <div className={`${styles.tabPanel} ${styles.tabPanelActive}`}>
                  <div className={styles.tabPanelInner}>
                    <img src="https://placehold.co/520x360/0a0a0a/c8102e?text=Our+Vision" alt="Vision" className={styles.tabImg} />
                    <div className={styles.tabText}>
                      <h3>Our Vision</h3>
                      <p>
                        To be the world&rsquo;s most trusted fire safety company — innovating relentlessly, serving humbly,
                        and protecting every corner of our planet with solutions that make a real difference.
                      </p>
                      <p>
                        We envision a world where no life is lost to fire, where every building, vehicle, and
                        industrial site is equipped with certified, reliable protection systems designed for the
                        challenges of the future.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'mission' && (
                <div className={`${styles.tabPanel} ${styles.tabPanelActive}`}>
                  <div className={styles.tabPanelInner}>
                    <img src="https://placehold.co/520x360/0a0a0a/c8102e?text=Our+Mission" alt="Mission" className={styles.tabImg} />
                    <div className={styles.tabText}>
                      <h3>Our Mission</h3>
                      <p>
                        To design, manufacture, and deliver the most advanced fire safety products and solutions
                        available globally — combining engineering excellence with unmatched customer service and
                        comprehensive after-sales support.
                      </p>
                      <p>
                        We are committed to protecting people, property, and the environment through industry-leading
                        innovation, rigorous quality standards, and a passionate global team dedicated to saving lives.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'values' && (
                <div className={`${styles.tabPanel} ${styles.tabPanelActive}`}>
                  <div className={styles.valuesGrid}>
                    {values.map((v, i) => (
                      <div key={i} className={styles.valueCard}>
                        <span className={styles.valueIcon}>{v.icon}</span>
                        <h4>{v.title}</h4>
                        <p>{v.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── TIMELINE ──────────────────────────────────────────────── */}
        <section className={styles.timelineSection}>
          <div className={styles.container}>
            <div className={`${styles.sectionHeader} ${styles.reveal}`}>
              <span className={styles.sectionTag}>OUR JOURNEY</span>
              <h2 className={styles.sectionTitle}>
                Three Decades of <span className={styles.red}>Growth & Innovation</span>
              </h2>
            </div>
            <div className={styles.timeline}>
              <div className={styles.timelineLine} />
              {timeline.map((item, i) => (
                <div key={i} className={`${styles.timelineItem} ${i % 2 === 0 ? styles.timelineLeft : styles.timelineRight} ${styles.reveal}`} style={{ '--delay': `${i * 0.15}s` }}>
                  <div className={styles.timelineCard}>
                    <div className={styles.timelineYear}>{item.year}</div>
                    <h4 className={styles.timelineTitle}>{item.title}</h4>
                    <p className={styles.timelineDesc}>{item.desc}</p>
                  </div>
                  <div className={styles.timelineDot} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GLOBAL PRESENCE ────────────────────────────────────────── */}
        <section className={styles.globalSection}>
          <div className={styles.globalBg}>
            <img src="https://placehold.co/1920x600/050510/111133?text=World+Map" alt="Global Presence" className={styles.globalMap} />
            <div className={styles.globalOverlay} />
          </div>
          <div className={styles.container}>
            <div className={`${styles.globalContent} ${styles.reveal}`}>
              <span className={styles.sectionTagLight}>GLOBAL PRESENCE</span>
              <h2 className={styles.sectionTitleLight}>
                Operating in <span className={styles.red}>100+ Countries</span>
              </h2>
              <p className={styles.globalDesc}>
                From the Americas to Asia-Pacific, our worldwide network of offices, distributors
                and certified partners ensures rapid, localized response wherever our clients need us.
              </p>
              <div className={styles.regionGrid}>
                {['Middle East', 'Africa', 'Europe', 'Asia Pacific', 'Americas', 'South Asia'].map((r, i) => (
                  <div key={i} className={styles.regionTag}>{r}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── LEADERSHIP ────────────────────────────────────────────── */}
        <section className={styles.leadershipSection}>
          <div className={styles.container}>
            <div className={`${styles.sectionHeader} ${styles.reveal}`}>
              <span className={styles.sectionTag}>LEADERSHIP</span>
              <h2 className={styles.sectionTitle}>
                Guided by <span className={styles.red}>Visionary Leaders</span>
              </h2>
            </div>
            <div className={styles.leaderGrid}>
              {leadership.map((person, i) => (
                <div key={i} className={`${styles.leaderCard} ${styles.reveal}`} style={{ '--delay': `${i * 0.12}s` }}>
                  <div className={styles.leaderImgWrap}>
                    <img src={person.img} alt={person.name} className={styles.leaderImg} />
                    <div className={styles.leaderOverlay} />
                  </div>
                  <div className={styles.leaderInfo}>
                    <h4>{person.name}</h4>
                    <span>{person.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CERTIFICATIONS ────────────────────────────────────────── */}
        <section className={styles.certSection}>
          <div className={styles.container}>
            <div className={`${styles.sectionHeader} ${styles.reveal}`}>
              <span className={styles.sectionTag}>CERTIFICATIONS</span>
              <h2 className={styles.sectionTitle}>
                Internationally <span className={styles.red}>Certified & Approved</span>
              </h2>
              <p className={styles.sectionDesc}>
                All products meet the strictest global safety standards, independently verified by
                the world&rsquo;s most respected certification bodies.
              </p>
            </div>
            <div className={styles.certGrid}>
              {certs.map((c, i) => (
                <div key={i} className={`${styles.certCard} ${styles.reveal}`} style={{ '--delay': `${i * 0.08}s` }}>
                  <div className={styles.certIcon}>✓</div>
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaBg}>
            <img src="https://placehold.co/1920x500/0d0d0d/1a1a1a?text=CTA+Background" alt="" className={styles.ctaBgImg} />
            <div className={styles.ctaOverlay} />
          </div>
          <div className={styles.container}>
            <div className={`${styles.ctaContent} ${styles.reveal}`}>
              <h2>Ready to Work With Us?</h2>
              <p>Talk to our experts about customized fire safety solutions for your project.</p>
              <div className={styles.ctaBtns}>
                <a href="/contact" className={styles.btnRed}>Contact Us</a>
                <a href="/products" className={styles.btnOutline}>Our Products</a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </SiteLayout>
  );
}
