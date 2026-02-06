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

  const isOverHero = !isScrolled;
  const headerBg = isOverHero ? 'bg-black/30 backdrop-blur-sm' : 'bg-white shadow-md';
  const textNav = isOverHero ? 'text-white' : 'text-gray-800';
  const logoText = isOverHero ? 'text-white' : 'text-gray-900';
  const logoSub = isOverHero ? 'text-white/90' : 'text-gray-600';
  const mobileIcon = isOverHero && !mobileMenuOpen ? 'text-white' : 'text-gray-900';

  const limitedNav = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* NAFFCO-style: semi-transparent overlay on hero, Search center, Products + Hamburger right */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
              <div className="w-10 h-10 lg:w-11 lg:h-11 bg-[#c40000] flex items-center justify-center">
                <span className="text-white font-bold text-lg lg:text-xl">SZ</span>
              </div>
              <div className="flex flex-col">
                <span className={`text-lg lg:text-xl font-bold leading-tight ${logoText}`}>SAFE ZONE</span>
                <span className={`text-xs font-medium uppercase tracking-wider ${logoSub}`}>Passion to Protect</span>
              </div>
            </Link>

            {/* Center: Search — rounded translucent field */}
            <div className="hidden lg:flex flex-1 justify-center px-8">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full ${isOverHero ? 'bg-white/10 border border-white/30 text-white placeholder-white/70' : 'bg-gray-100 border border-gray-200 text-gray-700'} transition-colors w-full max-w-xs`}
              >
                <Search className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">Search</span>
              </button>
            </div>

            {/* Right: Products button + Hamburger */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/products"
                className={`flex items-center px-4 py-2.5 rounded-full text-sm font-medium border transition-colors ${isOverHero ? 'border-white/50 text-white bg-white/5 hover:bg-white/10' : 'border-gray-300 text-gray-800 bg-white hover:bg-gray-50'}`}
              >
                Products
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isOverHero ? 'bg-white text-gray-900' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                aria-label="Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

            <button
              className={`lg:hidden p-2 ${mobileIcon}`}
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
                  className={`block py-3 px-2 text-gray-700 hover:text-[#c40000] hover:bg-red-50/50 ${router.pathname === item.href ? 'font-semibold text-[#c40000]' : ''}`}
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
