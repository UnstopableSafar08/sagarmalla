import { motion } from 'framer-motion';
import { personalInfo, interests } from '../data/portfolio';
import { MapPin, Mail, Heart, Sparkles, Award } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa';

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  globe: FaGlobe,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="sticky top-24">
              <div className="glass-card p-8 text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative inline-block mb-6"
                >
                  <div className="w-36 h-36 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1 shadow-xl shadow-primary/20">
                    <div className="w-full h-full rounded-full bg-dark flex items-center justify-center overflow-hidden">
                    <img src="/sagarmalla.gif" alt={personalInfo.name} className="w-full h-full object-cover" />
                  </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center border-4 border-dark">
                    <Sparkles size={16} className="text-dark" />
                  </div>
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-1">{personalInfo.name}</h3>
                <p className="text-primary font-medium mb-6">{personalInfo.title}</p>

                <div className="flex justify-center gap-3 mb-6">
                  {personalInfo.socialLinks.map((link, index) => {
                    const Icon = socialIcons[link.icon] || FaGlobe;
                    return (
                      <motion.a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-dark/50 flex items-center justify-center border border-white/10 hover:border-primary hover:bg-primary/20 transition-all"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon size={18} className="text-gray-400 hover:text-primary" />
                      </motion.a>
                    );
                  })}
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3 text-gray-400">
                    <MapPin size={16} className="text-accent" />
                    <span className="text-sm text-left">{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Mail size={16} className="text-accent" />
                    <a href={`mailto:${personalInfo.officialemail}`} className="hover:text-primary transition-colors text-sm text-left">
                      {personalInfo.officialemail}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Mail size={16} className="text-accent" />
                    <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors text-sm text-left">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-8 space-y-6"
          >
            {/* Who I Am */}
            <motion.div variants={itemVariants} className="glass-card p-6">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Sparkles size={18} className="text-primary" />
                </span>
                Who I Am
              </h4>
              <p className="text-gray-400 leading-relaxed whitespace-pre-line">
                {personalInfo.bio}
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div variants={itemVariants} className="grid sm:grid-cols-3 gap-4">
              <div className="glass-card p-5 text-center">
                <div className="text-3xl font-bold gradient-text mb-1">4+</div>
                <p className="text-gray-500 text-sm">Years Experience</p>
              </div>
              {/* <div className="glass-card p-5 text-center">
                <div className="text-3xl font-bold gradient-text mb-1">2</div>
                <p className="text-gray-500 text-sm">Companies</p>
              </div> */}
              <div className="glass-card p-5 text-center">
                <div className="text-3xl font-bold gradient-text mb-1">5</div>
                <p className="text-gray-500 text-sm">Certifications</p>
              </div>
            </motion.div>

            {/* Beyond Work */}
            <motion.div variants={itemVariants} className="glass-card p-6">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                  <Heart size={18} className="text-red-400" />
                </span>
                Beyond Work
              </h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 text-sm bg-dark/50 rounded-xl border border-white/10 text-gray-300 hover:border-accent/50 hover:bg-accent/10 transition-all cursor-default"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div variants={itemVariants} className="glass-card p-6">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                  <Award size={18} className="text-yellow-400" />
                </span>
                Recognition
              </h4>
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-yellow-500/10 to-transparent rounded-xl border border-yellow-500/20">
                <span className="text-4xl">🏆</span>
                <div>
                  <h5 className="font-semibold text-white">Employee of the Month</h5>
                  <p className="text-gray-400 text-sm">4-time recipient — recognized for consistent performance and teamwork</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;