import { motion } from "framer-motion";
import { Building2, Hotel, Factory, Fuel, Hospital, GraduationCap, Landmark, Clapperboard } from "lucide-react";

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
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            <span className="relative inline-block">
              Markets We Serve
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary" />
            </span>
          </h2>
        </motion.div>
        
        {/* Section 1: Left Image, Right Text */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-1"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop"
                alt="Residential Fire Protection"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-2"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Residential Fire Protection</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Comprehensive fire safety solutions for homes, apartments, and residential complexes ensuring the safety of families and property.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  1
                </div>
                <p className="text-foreground font-medium">Fire Alarm Systems</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  2
                </div>
                <p className="text-foreground font-medium">Sprinkler Installation</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  3
                </div>
                <p className="text-foreground font-medium">Emergency Exit Planning</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Section 2: Left Text, Right Image */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Hospitality & Leisure</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Specialized fire safety solutions for hotels, resorts, restaurants, and entertainment venues to protect guests and staff.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  1
                </div>
                <p className="text-foreground font-medium">Hotel Fire Systems</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  2
                </div>
                <p className="text-foreground font-medium">Kitchen Hood Suppression</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  3
                </div>
                <p className="text-foreground font-medium">Auditorium Safety</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop"
                alt="Hospitality & Leisure"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
        
        {/* Section 3: Left Image, Right Text */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-1"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"
                alt="Government Buildings & Monuments"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-2"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Government Buildings & Monuments</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Advanced fire protection systems for public buildings, monuments, and government facilities ensuring public safety.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  1
                </div>
                <p className="text-foreground font-medium">Historic Preservation</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  2
                </div>
                <p className="text-foreground font-medium">Public Safety Standards</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  3
                </div>
                <p className="text-foreground font-medium">Security Integration</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Section 4: Left Text, Right Image */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Industrial Fire Protection</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Robust fire safety systems for factories, warehouses, and industrial facilities with explosion-proof technologies.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  1
                </div>
                <p className="text-foreground font-medium">Process Hazard Control</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  2
                </div>
                <p className="text-foreground font-medium">Explosion Prevention</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  3
                </div>
                <p className="text-foreground font-medium">Emergency Shutdown</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop"
                alt="Industrial Fire Protection"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
        
        {/* Section 5: Left Image, Right Text */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-1"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1581092160622-609604436390?w=600&h=400&fit=crop"
                alt="Oil, Gas & Power"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-2"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Oil, Gas & Power</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Specialized fire suppression systems for oil refineries, gas plants, and power generation facilities.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  1
                </div>
                <p className="text-foreground font-medium">Class B Foam Systems</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  2
                </div>
                <p className="text-foreground font-medium">Electrical Fire Suppression</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  3
                </div>
                <p className="text-foreground font-medium">Process Safety</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Section 6: Left Text, Right Image */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Hospitals & Child Care</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Sensitive fire protection systems for healthcare facilities prioritizing patient safety and continuous care.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  1
                </div>
                <p className="text-foreground font-medium">Clean Agent Systems</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  2
                </div>
                <p className="text-foreground font-medium">Patient Evacuation</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  3
                </div>
                <p className="text-foreground font-medium">ICU Protection</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop"
                alt="Hospitals & Child Care"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
        
        {/* Section 7: Left Image, Right Text */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-1"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop"
                alt="Educational Institutions"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-2"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Educational Institutions</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Fire safety solutions for schools, colleges, and universities focusing on student safety and evacuation procedures.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  1
                </div>
                <p className="text-foreground font-medium">Classroom Safety</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  2
                </div>
                <p className="text-foreground font-medium">Laboratory Protection</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  3
                </div>
                <p className="text-foreground font-medium">Dormitory Systems</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Section 8: Left Text, Right Image */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Public Services</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Fire safety for public transportation, government offices, and civic buildings ensuring citizen safety.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  1
                </div>
                <p className="text-foreground font-medium">Transportation Safety</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  2
                </div>
                <p className="text-foreground font-medium">Office Building Systems</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  3
                </div>
                <p className="text-foreground font-medium">Emergency Services</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&h=400&fit=crop"
                alt="Public Services"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
        
        {/* Section 9: Left Image, Right Text */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-1"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop"
                alt="Theatres & Amusement Parks"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-2"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Theatres & Amusement Parks</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Specialized fire protection for entertainment venues with crowd management and evacuation systems.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  1
                </div>
                <p className="text-foreground font-medium">Crowd Management</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  2
                </div>
                <p className="text-foreground font-medium">Stage Protection</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  3
                </div>
                <p className="text-foreground font-medium">Entertainment Safety</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MarketsWeServe;