import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, Search, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '/' },
    {
      name: 'Products',
      href: '/products',
      dropdown: [
        { name: 'Fire Extinguishers', href: '/products?category=extinguishers' },
        { name: 'Fire Alarms', href: '/products?category=alarms' },
        { name: 'Sprinkler Systems', href: '/products?category=sprinklers' },
        { name: 'Emergency Lighting', href: '/products?category=lighting' },
      ]
    },
    {
      name: 'Markets',
      href: '/markets',
      dropdown: [
        { name: 'Commercial', href: '/markets?type=commercial' },
        { name: 'Industrial', href: '/markets?type=industrial' },
        { name: 'Residential', href: '/markets?type=residential' },
      ]
    },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'News', href: '/news' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <span className="text-white font-black text-2xl">FS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-gray-900 leading-tight">SAFE ZONE</span>
                <span className="text-xs text-gray-600 font-medium uppercase tracking-wider">PASSION TO PROTECT</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-2">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                <Search className="w-5 h-5" />
                <span className="text-sm">Search</span>
              </button>

              {/* Products with Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('Products')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/products"
                  className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center ${
                    router.pathname === '/products' 
                      ? 'bg-red-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-red-600 hover:text-white'
                  }`}
                >
                  Products <ChevronDown className="w-4 h-4 ml-1" />
                </Link>
                
                {/* Products Dropdown */}
                {activeDropdown === 'Products' && (
                  <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 animate-in fade-in slide-in-from-top-2 duration-200">
                    {menuItems.find(item => item.name === 'Products')?.dropdown?.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-6 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors border-l-2 border-transparent hover:border-red-600"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Menu Items */}
              {menuItems.filter(item => item.name !== 'Products').map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      router.pathname === item.href 
                        ? 'text-red-600 font-semibold' 
                        : 'text-gray-700 hover:text-red-600'
                    }`}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="w-4 h-4 inline ml-1" />}
                  </Link>
                  
                  {/* Mega Dropdown */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 animate-in fade-in slide-in-from-top-2 duration-200">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-6 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors border-l-2 border-transparent hover:border-red-600"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => setSearchOpen(false)}>
          <div className="absolute top-20 left-0 right-0 bg-white shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="container mx-auto px-4 lg:px-6 py-8">
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center space-x-4">
                  <Search className="w-6 h-6 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products, services, news..."
                    className="flex-1 text-lg py-3 border-b-2 border-gray-300 focus:border-red-600 outline-none"
                    autoFocus
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
        <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-black">FS</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-gray-900">SAFE ZONE</span>
                  <span className="text-xs text-gray-600 font-medium uppercase tracking-wider">PASSION TO PROTECT</span>
                </div>
              </Link>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors ${
                      router.pathname === item.href ? 'bg-red-50 text-red-600 font-semibold' : ''
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-4 mt-2 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-red-600"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
