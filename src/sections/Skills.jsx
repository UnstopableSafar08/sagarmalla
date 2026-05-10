import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import { Code, Server, Cloud, Database, Box, Settings, Monitor, Zap, Cpu, Terminal, Layers, Shield, Network } from 'lucide-react';

const skillIcons = {
  'Container Orchestration': Box,
  'CI/CD & DevOps': Zap,
  'Infrastructure as Code': Settings,
  'Monitoring & Observability': Monitor,
  'Cloud Platforms': Cloud,
  'Virtualization': Server,
  'Operating Systems': Terminal,
  'Databases': Database,
  'Networking': Network,
  'Programming': Code,
  'Message Queue': Layers,
  'Security': Shield,
};

const skillColors = {
  'Container Orchestration': { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', icon: 'bg-blue-500' },
  'CI/CD & DevOps': { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400', icon: 'bg-purple-500' },
  'Infrastructure as Code': { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-400', icon: 'bg-orange-500' },
  'Monitoring & Observability': { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400', icon: 'bg-green-500' },
  'Cloud Platforms': { bg: 'bg-indigo-500/10', border: 'border-indigo-500/30', text: 'text-indigo-400', icon: 'bg-indigo-500' },
  'Virtualization': { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400', icon: 'bg-red-500' },
  'Operating Systems': { bg: 'bg-gray-500/10', border: 'border-gray-500/30', text: 'text-gray-400', icon: 'bg-gray-500' },
  'Databases': { bg: 'bg-teal-500/10', border: 'border-teal-500/30', text: 'text-teal-400', icon: 'bg-teal-500' },
  'Networking': { bg: 'bg-pink-500/10', border: 'border-pink-500/30', text: 'text-pink-400', icon: 'bg-pink-500' },
  'Programming': { bg: 'bg-violet-500/10', border: 'border-violet-500/30', text: 'text-violet-400', icon: 'bg-violet-500' },
  'Message Queue': { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400', icon: 'bg-cyan-500' },
  'Security': { bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', text: 'text-yellow-400', icon: 'bg-yellow-500' },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          <p className="text-gray-400 text-lg mt-4 max-w-2xl">
            Building reliable infrastructure with modern DevOps tools and practices.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skillGroup, index) => {
            const Icon = skillIcons[skillGroup.category] || Cpu;
            const colors = skillColors[skillGroup.category] || skillColors['Languages'];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className={`${colors.bg} border ${colors.border} rounded-2xl p-6 group hover:shadow-lg transition-all duration-300`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className={`${colors.icon} w-12 h-12 rounded-xl flex items-center justify-center shadow-lg`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">
                      {skillGroup.category}
                    </h4>
                    <p className="text-gray-500 text-xs mt-1">{skillGroup.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className={`px-3 py-1.5 text-sm font-medium rounded-lg border ${colors.border} ${colors.bg} ${colors.text} transition-all cursor-default hover:shadow-md`}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;