import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const footerColumns = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Story', href: '/about#story' },
        { name: 'Leadership', href: '/about#leadership' },
        { name: 'Careers', href: '/careers' },
      ]
    },
    {
      title: 'Products',
      links: [
        { name: 'Fire Extinguishers', href: '/products?category=extinguishers' },
        { name: 'Fire Alarms', href: '/products?category=alarms' },
        { name: 'Sprinkler Systems', href: '/products?category=sprinklers' },
        { name: 'Emergency Lighting', href: '/products?category=lighting' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Installation', href: '/services#installation' },
        { name: 'Maintenance', href: '/services#maintenance' },
        { name: 'Inspection', href: '/services#inspection' },
        { name: 'Training', href: '/services#training' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'News & Updates', href: '/news' },
        { name: 'Downloads', href: '/downloads' },
        { name: 'Support', href: '/support' },
        { name: 'Contact Us', href: '/contact' },
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 bg-[#c40000] flex items-center justify-center shadow-lg group-hover:opacity-90 transition-opacity">
                <span className="text-white font-bold text-xl">SZ</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl">Safe Zone</span>
                <span className="text-xs text-gray-400">Protecting Lives & Property</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Leading provider of fire safety solutions. GF - 03, BHUMI ESTATE, Bs. DADA ESTATE, SARKHEJ, AHMEDABAD - 382 210
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-11 h-11 bg-gray-800 hover:bg-[#c40000] rounded-lg flex items-center justify-center transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 bg-gray-800 hover:bg-[#c40000] rounded-lg flex items-center justify-center transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 bg-gray-800 hover:bg-[#c40000] rounded-lg flex items-center justify-center transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 bg-gray-800 hover:bg-[#c40000] rounded-lg flex items-center justify-center transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-white font-bold text-lg mb-6">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-[#c40000] transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Offices + Contact */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
            <div>
              <p className="font-bold text-white mb-4 text-lg">Offices:</p>
              <div className="flex flex-wrap gap-6">
                <span className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-5 h-5 text-[#c40000] flex-shrink-0" />
                  Ahmedabad
                </span>
                <span className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-5 h-5 text-[#c40000] flex-shrink-0" />
                  Rajkot
                </span>
                <span className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-5 h-5 text-[#c40000] flex-shrink-0" />
                  Mumbai
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#c40000]/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#c40000]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Phone</p>
                  <p className="text-gray-300 font-medium">+91 99749 99995 | +91 81601 78244</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#c40000]/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#c40000]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Email</p>
                  <p className="text-gray-300 font-medium">sales@safezonefire.info</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 pb-6">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Safe Zone. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-[#c40000] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#c40000] transition-colors">Terms of Service</Link>
              <Link href="/sitemap" className="hover:text-[#c40000] transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
