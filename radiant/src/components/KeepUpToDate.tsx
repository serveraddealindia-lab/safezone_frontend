import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

const tabs = ["News", "Events", "Invitations"];

const newsData = {
  News: [
    {
      id: 1,
      image: news1,
      title: "Real Project Installation",
      description: "Latest fire & safety innovations across various sectors for a safe and secure India.",
      link: "#",
    },
    {
      id: 2,
      image: news2,
      title: "BITA Expo 2026",
      description: "Join us at BITA Expo for advanced fire protection solutions and live demonstrations.",
      link: "#",
    },
    {
      id: 3,
      image: news3,
      title: "BITA Expo 2026 – Day 1",
      description: "Day one highlights with key announcements and new product launches.",
      link: "#",
    },
  ],
  Events: [
    {
      id: 4,
      image: news2,
      title: "Annual Safety Summit 2026",
      description: "Join industry leaders at our annual summit for the latest in fire safety technology.",
      link: "#",
    },
    {
      id: 5,
      image: news3,
      title: "Training Workshop Series",
      description: "Hands-on training sessions for fire safety professionals across India.",
      link: "#",
    },
    {
      id: 6,
      image: news1,
      title: "Product Launch Event",
      description: "Unveiling next-generation fire suppression systems.",
      link: "#",
    },
  ],
  Invitations: [
    {
      id: 7,
      image: news1,
      title: "Partnership Meeting",
      description: "Exclusive invitation for potential partners and distributors.",
      link: "#",
    },
    {
      id: 8,
      image: news2,
      title: "Industry Conference 2026",
      description: "Be part of the largest fire safety conference in South Asia.",
      link: "#",
    },
    {
      id: 9,
      image: news3,
      title: "Certification Program",
      description: "Get certified in advanced fire safety management.",
      link: "#",
    },
  ],
};

const KeepUpToDate = () => {
  const [activeTab, setActiveTab] = useState("News");

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
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
                    ? "tab-active"
                    : "tab-inactive"
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
            {newsData[activeTab as keyof typeof newsData].map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="news-card group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
