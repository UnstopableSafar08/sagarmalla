import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';
import { Briefcase, Calendar, CheckCircle, ArrowRight } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 md:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
          data-aos="fade-right"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="glass-card p-8 hover:border-primary/50 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
                      <Briefcase size={28} className="text-dark" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{job.company}</h3>
                      <p className="text-primary font-medium">{job.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-glass border border-white/10">
                    <Calendar size={16} className="text-accent" />
                    <span className="text-sm text-gray-400">{job.period}</span>
                  </div>
                </div>

                {/* Achievements */}
                <ul className="space-y-4">
                  {job.description.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-400"
                    >
                      <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
