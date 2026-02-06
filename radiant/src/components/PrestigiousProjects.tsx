import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import cityscape from "@/assets/cityscape.jpg";

const projects = [
  {
    id: 1,
    title: "PROJECT ONE",
    subtitle: "Metro Hospital Complex",
    description: "Comprehensive fire protection and life safety systems for a landmark healthcare facility.",
    image: project1,
    featured: true,
  },
  {
    id: 2,
    title: "PROJECT TWO",
    subtitle: "Grand Resort & Spa",
    description: "Advanced fire detection and suppression systems for luxury hospitality.",
    image: project2,
    featured: false,
  },
  {
    id: 3,
    title: "PROJECT THREE",
    subtitle: "Industrial Refinery",
    description: "Cutting-edge fire protection for oil and gas refineries with enhanced safety standards.",
    image: project3,
    featured: true,
  },
];

const PrestigiousProjects = () => {
  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-right mb-8"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Prestigious Projects
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Column - Two Projects */}
          <div className="space-y-6">
            {projects.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="project-card aspect-[16/9]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <span className="text-xs font-semibold text-primary-foreground/80 uppercase tracking-wider">
                    {project.title}
                  </span>
                  <h3 className="text-xl font-bold text-primary-foreground mt-1">
                    {project.subtitle}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Featured Project with Red Banner */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary text-primary-foreground p-8 mb-6"
            >
              <h3 className="text-2xl font-bold mb-4">Prestigious Projects</h3>
              <p className="text-primary-foreground/90 mb-6">
                Our portfolio spans across India's most prestigious developments,
                from world-class healthcare facilities to luxury resorts and
                critical industrial infrastructure.
              </p>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-primary-foreground font-semibold group"
              >
                View All Projects
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="project-card flex-1 min-h-[300px]"
            >
              <img
                src={cityscape}
                alt="Urban Projects"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <span className="text-xs font-semibold text-primary-foreground/80 uppercase tracking-wider">
                  Urban Development
                </span>
                <h3 className="text-xl font-bold text-primary-foreground mt-1">
                  Metropolitan Excellence
                </h3>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Third Large Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6"
        >
          <div className="project-card aspect-[21/9]">
            <img
              src={project3}
              alt={projects[2].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
              <span className="text-xs font-semibold text-primary-foreground/80 uppercase tracking-wider">
                {projects[2].title}
              </span>
              <h3 className="text-2xl font-bold text-primary-foreground mt-1 mb-2">
                {projects[2].subtitle}
              </h3>
              <p className="text-primary-foreground/80 max-w-xl">
                {projects[2].description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary-foreground font-semibold mt-4 group"
              >
                Explore this project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <a href="#projects" className="btn-primary inline-flex items-center gap-2">
            Explore more projects
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PrestigiousProjects;
