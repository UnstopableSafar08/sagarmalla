import { motion } from 'framer-motion';
import { projects } from '../data/portfolio';
import { FaGithub } from 'react-icons/fa';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
          data-aos="fade-down"
          data-aos-delay="0"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          <p className="text-gray-400 text-lg mt-4 max-w-2xl">
            Side projects and tools I've built to solve real problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative glass-card rounded-2xl overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                index % 3 === 0 ? 'from-blue-500 to-purple-500' :
                index % 3 === 1 ? 'from-purple-500 to-pink-500' :
                'from-cyan-500 to-blue-500'
              } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Content */}
              <div className="relative p-6">
                {/* Title Row */}
                <div className="flex items-start justify-between mb-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xl font-bold text-white group-hover:text-white/90 transition-colors flex-1"
                  >
                    <span className="group-hover:underline underline-offset-4 decoration-2 decoration-primary/50">
                      {project.title}
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-primary flex-shrink-0"
                    />
                  </a>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm mb-5 leading-relaxed group-hover:text-gray-400 transition-colors">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      className="px-2.5 py-1 text-xs font-medium bg-dark/60 rounded-md border border-white/5 text-gray-400 group-hover:text-gray-300 group-hover:border-white/10 transition-all"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Links Row */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary/80 hover:text-primary transition-colors"
                  >
                    <span className="group-hover/link:underline underline-offset-4">Live Demo</span>
                    <ExternalLink size={12} />
                  </a>
                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      <FaGithub size={14} />
                      <span>Source</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;