import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Shield, Zap, Award, Users, Wrench, FileCheck, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      name: 'Installation',
      icon: Shield,
      description: 'Professional installation of fire safety systems by certified technicians.',
      details: [
        'System design and planning',
        'Professional installation',
        'Code compliance',
        'Quality assurance testing'
      ]
    },
    {
      name: 'Maintenance',
      icon: Zap,
      description: 'Regular maintenance to ensure your fire safety systems are always operational.',
      details: [
        'Scheduled inspections',
        'Preventive maintenance',
        'System testing',
        'Performance optimization'
      ]
    },
    {
      name: 'Inspection',
      icon: Award,
      description: 'Comprehensive safety inspections and testing to meet regulatory requirements.',
      details: [
        'Annual inspections',
        'Compliance verification',
        'Detailed reports',
        'Remediation recommendations'
      ]
    },
    {
      name: 'Training',
      icon: Users,
      description: 'Fire safety training programs for your team to ensure proper emergency response.',
      details: [
        'Fire safety awareness',
        'Emergency procedures',
        'Equipment operation',
        'Evacuation drills'
      ]
    },
    {
      name: 'Repair & Service',
      icon: Wrench,
      description: 'Quick and reliable repair services to restore your fire safety systems.',
      details: [
        '24/7 emergency service',
        'Rapid response',
        'Expert diagnostics',
        'Genuine parts replacement'
      ]
    },
    {
      name: 'Compliance',
      icon: FileCheck,
      description: 'Ensure your facility meets all fire safety codes and regulations.',
      details: [
        'Code compliance review',
        'Documentation support',
        'Permit assistance',
        'Regulatory updates'
      ]
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
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6" data-aos="fade-up">Our Services</h1>
            <p className="text-xl lg:text-2xl text-red-100 max-w-3xl" data-aos="fade-up" data-aos-delay="100">
              Comprehensive fire safety services from installation to maintenance
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.name}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="bg-white rounded-xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 group"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-red-100 group-hover:to-red-200 transition-all duration-300">
                      <Icon className="w-10 h-10 text-red-600" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">{service.name}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <span className="text-red-600 mr-3 font-bold">✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-red-600 to-red-700 text-white">
          <div className="container mx-auto px-4 lg:px-6 text-center">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6" data-aos="fade-up">
              Need Fire Safety Services?
            </h2>
            <p className="text-xl lg:text-2xl text-red-100 mb-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Contact us today for a free consultation and let our experts help protect your property
            </p>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-white hover:bg-gray-100 text-red-600 px-10 py-4 rounded-lg text-lg font-bold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

