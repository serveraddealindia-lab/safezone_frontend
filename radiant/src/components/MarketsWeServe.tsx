import { motion } from "framer-motion";
import {
  Building2,
  Hotel,
  Factory,
  Fuel,
  Hospital,
  GraduationCap,
  Landmark,
  Clapperboard,
} from "lucide-react";
import cityscape from "@/assets/cityscape.jpg";

const markets = [
  { name: "Residential Fire Protection", icon: Building2 },
  { name: "Hospitality & Leisure", icon: Hotel },
  { name: "Government Buildings & Monuments", icon: Landmark },
  { name: "Industrial Fire Protection", icon: Factory },
  { name: "Oil, Gas & Power", icon: Fuel },
  { name: "Hospitals & Child Care", icon: Hospital },
  { name: "Educational Institutions", icon: GraduationCap },
  { name: "Theatres & Amusement Parks", icon: Clapperboard },
];

const MarketsWeServe = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={cityscape}
                alt="Markets We Serve"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 max-w-xs hidden md:block">
              <p className="text-sm">
                We deliver fire safety solutions for residential, commercial,
                industrial, and public-sector clients.
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-heading mb-4">Markets We Serve</h2>
            <p className="section-subheading mb-8">
              Our expertise in providing fire protection solutions across
              various industry sectors ensures comprehensive safety standards.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {markets.map((market, index) => (
                <motion.div
                  key={market.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-3 p-3 hover:bg-muted transition-colors group"
                >
                  <div className="w-8 h-8 bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <market.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {market.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <p className="text-muted-foreground leading-relaxed">
              We deliver fire safety solutions for residential, commercial,
              industrial, and public-sector clients. Our certified systems and
              trained professionals support projects from design to
              commissioning and maintenance.
            </p>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden">
            <img
              src={cityscape}
              alt="Urban Infrastructure"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketsWeServe;
