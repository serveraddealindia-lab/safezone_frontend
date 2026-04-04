import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ServingAllOverIndia = () => {
  return (
    <section className="bg-[#c40000] py-16">
      <div className="sz-container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white max-w-4xl mx-auto px-6 sm:px-10 py-10 sm:py-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500 mb-4">
            Serving all over India
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 mb-4">
            Serving All Over India – For A Safer World
          </h2>
          <p className="text-[15px] leading-relaxed text-gray-700 mb-6">
            Driven by our passion to protect, Safe Zone delivers integrated fire detection,
            suppression and emergency response systems that safeguard people, assets and
            operations across India&apos;s key industries.
          </p>
          <p className="text-[15px] leading-relaxed text-gray-700 mb-8">
            From residential and commercial developments to complex industrial facilities, our
            engineering teams design, install and maintain solutions tailored to each risk
            profile and regulatory requirement.
          </p>
          <a
            href="/services"
            className="inline-flex items-center gap-2 text-[#c40000] font-semibold text-sm"
          >
            Learn more about our reach
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServingAllOverIndia;