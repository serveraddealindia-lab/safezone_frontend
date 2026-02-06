import { Facebook, Twitter, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react";

const footerLinks = {
  Company: [
    { name: "About Us", href: "#about" },
    { name: "Our Story", href: "#" },
    { name: "Leadership", href: "#" },
    { name: "Careers", href: "#" },
  ],
  Products: [
    { name: "Fire Extinguishers", href: "#" },
    { name: "Fire Alarms", href: "#" },
    { name: "Sprinkler Systems", href: "#" },
    { name: "Emergency Lighting", href: "#" },
  ],
  Services: [
    { name: "Installation", href: "#" },
    { name: "Maintenance", href: "#" },
    { name: "Inspections", href: "#" },
    { name: "Training", href: "#" },
  ],
  Resources: [
    { name: "News & Updates", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Support", href: "#" },
    { name: "Contact Us", href: "#contact" },
  ],
};

const offices = [
  { city: "Ahmedabad", flag: "🇮🇳" },
  { city: "Nagpur", flag: "🇮🇳" },
  { city: "Mumbai", flag: "🇮🇳" },
];

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo & Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">SZ</span>
              </div>
              <div>
                <span className="text-lg font-bold text-secondary-foreground">
                  Safe Zone
                </span>
                <span className="block text-xs text-secondary-foreground/70 uppercase tracking-wider">
                  Passion to Protect
                </span>
              </div>
            </div>
            <p className="text-secondary-foreground/70 text-sm mb-6 max-w-xs">
              Leading provider of fire safety solutions. SF-102, Shram Estate,
              Bhavan Estate, VA-Bhagal, Ahmedabad - 380 270
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 border border-secondary-foreground/20 flex items-center justify-center text-secondary-foreground/70 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-secondary-foreground mb-4">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-secondary-foreground/70 text-sm hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Offices */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-wrap gap-6 mb-8">
            <span className="text-secondary-foreground font-medium">Offices:</span>
            {offices.map((office) => (
              <div key={office.city} className="flex items-center gap-2 text-secondary-foreground/70 text-sm">
                <MapPin className="w-4 h-4" />
                {office.city}
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="flex flex-wrap gap-6 text-sm text-secondary-foreground/70">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +91 90712 89805 | +91 85017 78244
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                sales@safezonefire.info
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/70">
            <p>© 2026 Safe Zone. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
