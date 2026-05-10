import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { education, certifications, appreciations } from '../data/portfolio';
import { GraduationCap, Award, Calendar, Trophy, X } from 'lucide-react';

const CertificationModal = ({ isOpen, onClose, item, type }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-dark/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="glass-card p-8 max-w-[40rem] w-full pointer-events-auto relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-glass flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <X size={18} className="text-gray-400" />
              </button>

              <div className="text-center">
                {item.image && (
                  <div className="mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-96 mx-auto rounded-lg object-contain"
                    />
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-primary mb-2">{item.issuer}</p>
                {item.description && (
                  <p className="text-gray-400 text-sm mt-2">
                    {item.description}
                  </p>
                )}
                <span className="inline-block mt-4 px-3 py-1 bg-glass rounded-full text-xs text-accent">
                  {type === 'certification' ? 'Certification' : 'Appreciation'}
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Education = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const openModal = (item, type) => {
    setSelectedItem(item);
    setSelectedType(type);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setSelectedType(null);
  };

  return (
    <>
      <section id="education" className="py-20 px-4 md:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
            data-aos="fade-right"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Education & <span className="gradient-text">Certifications</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.div>

          {/* Education */}
          <div className="space-y-6 mb-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-card p-6 hover:border-primary/50 transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={28} className="text-dark" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-white">{edu.institution}</h3>
                      <span className="flex items-center gap-2 text-sm text-primary">
                        <Calendar size={16} />
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-secondary mb-1">{edu.degree}</p>
                    {edu.university && (
                      <p className="text-gray-500 text-sm">{edu.university}</p>
                    )}
                    {edu.grade && (
                      <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-glass rounded-full text-sm">
                        <span className="text-accent">Grade:</span>
                        <span className="text-white">{edu.grade}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.h3
            className="text-2xl font-semibold text-white mb-6 flex items-center gap-3"
            data-aos="fade-right"
          >
            <Award className="text-accent" />
            Certifications
          </motion.h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-5 hover:border-accent/50 transition-all group cursor-pointer"
                data-aos="zoom-in-up"
                data-aos-delay={index * 100}
                onClick={() => openModal(cert, 'certification')}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                    <Award size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white group-hover:text-accent transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-gray-500 text-sm">{cert.issuer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Appreciations */}
          <motion.h3
            className="text-2xl font-semibold text-white mb-6 flex items-center gap-3"
            data-aos="fade-right"
          >
            <Trophy className="text-yellow-500" />
            Appreciations
          </motion.h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {appreciations.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-5 hover:border-yellow-500/50 transition-all group cursor-pointer"
                data-aos="zoom-in-up"
                data-aos-delay={index * 100}
                onClick={() => openModal(app, 'appreciation')}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500/30 transition-colors">
                    <Trophy size={20} className="text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white group-hover:text-yellow-400 transition-colors">
                      {app.title}
                    </h4>
                    <p className="text-gray-500 text-sm">{app.issuer}</p>
                    {app.description && (
                      <p className="text-primary text-sm mt-1">{app.description}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <CertificationModal
        isOpen={!!selectedItem}
        onClose={closeModal}
        item={selectedItem}
        type={selectedType}
      />
    </>
  );
};

export default Education;
