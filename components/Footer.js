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
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <span className="text-white font-bold text-xl">FS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl">Safe Zone</span>
                <span className="text-xs text-gray-400">Protecting Lives & Property</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Leading provider of fire safety solutions. Protecting lives and property with innovative technology and expert service. GF - 03, BHUMI ESTATE, Bs. DADA ESTATE, SARKHEJ, AHMEDABAD - 382 210
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-11 h-11 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-white font-bold text-lg mb-6">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-red-500 transition-colors text-sm flex items-center group">
                      <span className="w-0 group-hover:w-2 h-0.5 bg-red-500 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-start space-x-4 group">
              <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors">
                <MapPin className="w-6 h-6 text-red-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="font-bold text-white mb-2 text-lg">Address</p>
                <p className="text-sm text-gray-400 leading-relaxed">GF - 03, BHUMI ESTATE<br />Bs. DADA ESTATE, SARKHEJ<br />AHMEDABAD - 382 210</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 group">
              <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors">
                <Phone className="w-6 h-6 text-red-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="font-bold text-white mb-2 text-lg">Phone</p>
                <p className="text-sm text-gray-400">+91 99749 99995</p>
                <p className="text-sm text-gray-400">+91 81601 78244</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 group">
              <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors">
                <Mail className="w-6 h-6 text-red-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="font-bold text-white mb-2 text-lg">Email</p>
                <p className="text-sm text-gray-400">sales@safezonefire.info</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Fire Safety Platform. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-red-500 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-red-500 transition-colors">Terms of Service</Link>
              <Link href="/sitemap" className="hover:text-red-500 transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

