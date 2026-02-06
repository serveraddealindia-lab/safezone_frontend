import { motion } from "framer-motion";
import { ArrowRight, Shield, Building, Users, Zap } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Fire Protection Systems",
    description: "Complete fire suppression and detection solutions for all environments"
  },
  {
    icon: Building,
    title: "Industrial Safety",
    description: "Specialized fire safety for manufacturing, oil & gas, and heavy industries"
  },
  {
    icon: Users,
    title: "Commercial Solutions",
    description: "Tailored fire protection for offices, malls, hotels, and public spaces"
  },
  {
    icon: Zap,
    title: "Emergency Response",
    description: "24/7 emergency services and rapid response teams across India"
  }
];

const ServingAllOverIndia = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Serving All Over India – For A Safer World
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive fire protection solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-[#c40000] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="/services"
            className="inline-flex items-center gap-3 bg-[#c40000] hover:bg-[#a30000] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg group"
          >
            Explore Our Solutions
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServingAllOverIndia;