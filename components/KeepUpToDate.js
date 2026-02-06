import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const tabs = ["News", "Real Projects", "Events"];

const newsData = {
  News: [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
      title: "Fire Safety Innovation Awards 2026",
      description: "Recognizing excellence in fire protection technology and safety solutions.",
      link: "#",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      title: "New Smart Fire Detection System",
      description: "Revolutionary AI-powered fire detection with predictive analytics capabilities.",
      link: "#",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1581092918056-0d45945d7a4a?w=600&h=400&fit=crop",
      title: "National Fire Safety Week",
      description: "Annual awareness campaign promoting fire safety education across communities.",
      link: "#",
    },
  ],
  "Real Projects": [
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
      title: "Metro Hospital Complex Fire System",
      description: "Comprehensive fire protection upgrade for 500-bed multi-specialty hospital.",
      link: "#",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=600&h=400&fit=crop",
      title: "Corporate Tower Sprinkler Installation",
      description: "High-rise office building fire suppression system with smart monitoring.",
      link: "#",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1581092160622-609604436390?w=600&h=400&fit=crop",
      title: "Refinery Emergency Response Upgrade",
      description: "Industrial facility safety enhancement with explosion-proof fire systems.",
      link: "#",
    },
  ],
  Events: [
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
      title: "Annual Fire Safety Conference",
      description: "Three-day industry event featuring expert panels and technology demonstrations.",
      link: "#",
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
      title: "Training Workshop Series",
      description: "Hands-on certification programs for fire safety engineers and technicians.",
      link: "#",
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
      title: "Product Launch Event",
      description: "Unveiling next-generation fire suppression systems and smart detection devices.",
      link: "#",
    },
  ],
};

const KeepUpToDate = () => {
  const [activeTab, setActiveTab] = useState("News");

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              <span className="relative inline-block">
                Keep up to date
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary" />
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-2"
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground transition-colors"
                }`}
              >
                {tab}
              </button>
            ))}
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {newsData[activeTab].map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card overflow-hidden transition-all duration-300 rounded-lg shadow-md hover:shadow-xl -translate-y-0 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <a
                    href={item.link}
                    className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default KeepUpToDate;