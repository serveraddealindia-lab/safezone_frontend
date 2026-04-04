import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, Search } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = router.pathname === '/';
  const onHero = isHome && !isScrolled;

  const headerBg = onHero
    ? 'bg-transparent'
    : isHome
      ? 'bg-black'
      : 'bg-white shadow-md';

  const ink = onHero || (isHome && isScrolled)
    ? 'text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]'
    : 'text-[var(--sz-ink)]';
  const subInk = onHero || (isHome && isScrolled)
    ? 'text-white/85'
    : 'text-[var(--sz-ink-subtle)]';
  const iconBtn = onHero
    ? 'bg-white/10 text-white ring-1 ring-white/20'
    : 'bg-white text-[var(--sz-ink)] shadow-sm ring-1 ring-black/10';

  const limitedNav = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* NAFFCO-like: transparent on hero, sticky white after scroll */}
      <header className={`fixed top-0 left-0 right-0 z-50 ${headerBg} transition-all duration-300`}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
              <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-[10px] bg-[var(--sz-brand)] flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-lg lg:text-xl">SZ</span>
              </div>
              <div className="flex flex-col">
                <span className={`text-lg lg:text-xl font-extrabold leading-tight tracking-tight ${ink}`}>SAFE ZONE</span>
                <span className={`text-xs font-semibold uppercase tracking-[0.14em] ${subInk}`}>Passion to Protect</span>
              </div>
            </Link>

            {/* Center: Search — NAFFCO-style pill */}
            <div className="hidden lg:flex flex-1 justify-center px-8">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full border transition-colors w-full max-w-xs ${
                  onHero
                    ? 'bg-white/5 border-white/40 text-white placeholder-white/80 hover:bg-white/10'
                    : 'bg-[var(--sz-surface-2)] border-[var(--sz-border)] text-[var(--sz-ink-muted)] hover:bg-white'
                }`}
              >
                <Search className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">Search</span>
              </button>
            </div>

            {/* Right: Products button + Hamburger */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/products"
                className={`flex items-center px-4 py-2.5 rounded-full text-sm font-semibold border transition-colors ${
                  onHero
                    ? 'border-white/60 text-white bg-transparent hover:bg-white/10'
                    : 'border-[var(--sz-border)] text-[var(--sz-ink)] bg-white hover:bg-[var(--sz-surface-2)]'
                }`}
              >
                Products
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 rounded-[10px] flex items-center justify-center transition-colors bg-white text-[var(--sz-ink)] shadow-sm ring-1 ring-black/10 hover:bg-[var(--sz-surface-2)]"
                aria-label="Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

            <button
              className={`lg:hidden grid h-11 w-11 place-items-center rounded-[10px] active:scale-[0.98] transition ${iconBtn}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setSearchOpen(false)}>
          <div className="absolute top-24 left-1/2 -translate-x-1/2 w-full max-w-xl bg-white shadow-xl rounded-2xl overflow-hidden mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 flex items-center gap-3">
              <Search className="w-6 h-6 text-gray-400" />
              <input type="text" placeholder="Search..." className="flex-1 py-2 border-0 focus:ring-0 outline-none" autoFocus />
            </div>
          </div>
        </div>
      )}

      {/* Off-canvas menu (Products click or mobile hamburger) */}
      <div className={`fixed inset-0 z-40 lg:block transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-full'}`}>
        <div className="absolute inset-0 bg-black/50 lg:bg-transparent" onClick={() => setMobileMenuOpen(false)} />
        <div className="absolute right-0 top-0 h-full w-72 lg:w-80 bg-white shadow-xl overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <span className="font-bold text-gray-900">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)}><X className="w-6 h-6" /></button>
            </div>
            <nav className="space-y-1">
              {limitedNav.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block py-3 px-2 rounded-[10px] text-[var(--sz-ink)] hover:text-[var(--sz-brand)] hover:bg-[var(--sz-surface-2)] ${router.pathname === item.href ? 'font-semibold text-[var(--sz-brand)]' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
