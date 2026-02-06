import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building, Users, Award, MapPin } from "lucide-react";

const stats = [
  { value: 36, suffix: "+", label: "Years Experience", icon: Award },
  { value: 1000, suffix: "+", label: "Projects Completed", icon: Building },
  { value: 500, suffix: "+", label: "Clients", icon: Users },
  { value: 28, suffix: "", label: "States Covered", icon: MapPin },
];

const CountUp = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end, isInView]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading mb-6">About Us</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We are a leading fire protection company serving all over India.
              Our mission is safety, innovation, and reliable engineering. With
              over three decades of experience, we've protected thousands of
              lives and properties.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our high-quality products are crafted to safeguard lives,
              environment, and property across key industries, including
              residential and commercial facilities, oil and gas refineries,
              airports and aviation, healthcare, education, government,
              hospitality, and leisure.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="stat-card text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 opacity-80" />
                <div className="text-3xl md:text-4xl font-bold mb-1">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
