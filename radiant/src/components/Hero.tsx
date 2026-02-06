import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-secondary overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&q=80"
          alt="Safe Zone Headquarters"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-6"
          >
            Serving & Protecting{" "}
            <span className="text-primary">Across India</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-secondary-foreground/80 mb-8 max-w-2xl"
          >
            Advanced Fire & Safety Solutions for residential, commercial, and
            industrial sectors. Trusted by thousands across the nation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#services" className="btn-primary group">
              Explore Solutions
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="px-6 py-3 border-2 border-secondary-foreground/30 text-secondary-foreground font-semibold transition-all duration-300 hover:bg-secondary-foreground hover:text-secondary inline-flex items-center gap-2"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>

      {/* Stats Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute bottom-8 right-8 hidden lg:block"
      >
        <div className="bg-primary text-primary-foreground px-8 py-6 shadow-lg">
          <div className="text-4xl font-bold">36+</div>
          <div className="text-sm opacity-90">Years Experience</div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
