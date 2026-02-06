import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Building2, Factory, Home, Hospital, GraduationCap, Hotel } from 'lucide-react';

export default function MarketsPage() {
  const markets = [
    {
      name: 'Commercial Buildings',
      icon: Building2,
      description: 'Comprehensive fire safety solutions for office buildings, retail spaces, and commercial facilities.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
      features: ['Fire detection systems', 'Sprinkler installation', 'Emergency lighting', 'Regular maintenance']
    },
    {
      name: 'Industrial Facilities',
      icon: Factory,
      description: 'Specialized fire protection for manufacturing plants, warehouses, and industrial complexes.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
      features: ['Hazardous area protection', 'Explosion-proof systems', 'Custom solutions', '24/7 monitoring']
    },
    {
      name: 'Residential Complexes',
      icon: Home,
      description: 'Reliable fire safety systems for apartments, condominiums, and residential developments.',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop',
      features: ['Smoke detection', 'Fire alarms', 'Emergency exits', 'Resident training']
    },
    {
      name: 'Healthcare Facilities',
      icon: Hospital,
      description: 'Critical fire safety systems designed for hospitals, clinics, and medical centers.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop',
      features: ['Life safety systems', 'Code compliance', 'Minimal disruption', 'Specialized equipment']
    },
    {
      name: 'Educational Institutions',
      icon: GraduationCap,
      description: 'Safe learning environments with comprehensive fire safety for schools and universities.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
      features: ['Student safety', 'Fire drills', 'Emergency planning', 'Compliance standards']
    },
    {
      name: 'Hospitality Sector',
      icon: Hotel,
      description: 'Guest safety and property protection for hotels, resorts, and hospitality venues.',
      image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=400&fit=crop',
      features: ['Guest safety', 'Property protection', 'Emergency response', 'Staff training']
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Page Header */}
        <section className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6" data-aos="fade-up">Markets We Serve</h1>
            <p className="text-xl lg:text-2xl text-red-100 max-w-3xl" data-aos="fade-up" data-aos-delay="100">
              Tailored fire safety solutions for every industry
            </p>
          </div>
        </section>

        {/* Markets Grid */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {markets.map((market, index) => {
                const IconComponent = market.icon;
                return (
                  <div
                    key={market.name}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 group"
                  >
                    <div className="relative h-56 overflow-hidden bg-gray-100">
                      <img
                        src={market.image || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop'}
                        alt={market.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <div className="absolute top-6 left-6">
                        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                          {IconComponent && <IconComponent className="w-7 h-7 text-red-600" />}
                        </div>
                      </div>
                    </div>
                    <div className="p-6 lg:p-8">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">{market.name}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{market.description}</p>
                      <ul className="space-y-3">
                        {market.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <span className="text-red-600 mr-3 font-bold">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}