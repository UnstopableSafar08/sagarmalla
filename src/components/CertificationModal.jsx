import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const CertificationModal = ({ isOpen, onClose, certification }) => {
  if (!certification) return null;

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
            <div className="glass-card p-8 max-w-md w-full pointer-events-auto relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-glass flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <X size={18} className="text-gray-400" />
              </button>

              <div className="text-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {certification.title}
                </h3>
                <p className="text-primary mb-4">{certification.issuer}</p>
                {certification.description && (
                  <p className="text-gray-400 text-sm">
                    {certification.description}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CertificationModal;
