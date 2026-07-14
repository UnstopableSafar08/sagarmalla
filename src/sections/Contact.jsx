import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Mail, MapPin } from 'lucide-react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { personalInfo } from '../data/portfolio';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (formData.name.trim().length < 6) {
      errors.name = 'Name must be at least 6 characters (including spaces)';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    const words = formData.message.trim().split(/\s+/).filter(w => w.length > 0);
    if (words.length < 3) {
      errors.message = 'Message must contain at least a few words';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSending(true);
    setStatus({ type: '', message: '' });

    try {
      await emailjs.send(
        'service_3t9s9gv',
        'template_c9n9cbk',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'admin@sagarmalla.info.np',
          cc_email: 'sagarmalla08@gmail.com',
          reply_to: formData.email,
        },
        'MsDBFaV9yi7dfrHKm'
      );

      setStatus({
        type: 'success',
        message: 'Email(Message) sent successfully! I\'ll get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
      setFormErrors({});
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email directly.'
      });
    } finally {
      setIsSending(false);
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Let's Talk</h3>
            <p className="text-gray-400 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 text-gray-400">
                <div className="w-12 h-12 rounded-xl bg-glass flex items-center justify-center">
                  <Mail size={20} className="text-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <a href={`mailto:${personalInfo.officialemail}`} className="hover:text-primary transition-colors">
                    {personalInfo.officialemail}
                  </a>
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <div className="w-12 h-12 rounded-xl bg-glass flex items-center justify-center">
                  <MapPin size={20} className="text-primary" />
                </div>
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <motion.a
                href={personalInfo.socialLinks[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                whileHover={{ scale: 1.1 }}
              >
                <FaLinkedin size={20} />
              </motion.a>
              <motion.a
                href={personalInfo.socialLinks[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                whileHover={{ scale: 1.1 }}
              >
                <FaGithub size={20} />
              </motion.a>
              <motion.a
                href={personalInfo.socialLinks[2].url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                whileHover={{ scale: 1.1 }}
              >
                <FaTwitter size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass-card p-8 space-y-6"
          >
            <div>
              <label className="block text-sm text-gray-400 mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (formErrors.name) setFormErrors({ ...formErrors, name: '' });
                }}
                className={`w-full px-4 py-3 bg-glass border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-colors ${
                  formErrors.name ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-primary'
                }`}
                placeholder="Your name (min 6 characters)"
              />
              {formErrors.name && (
                <p className="text-red-400 text-xs mt-1.5">{formErrors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Your Email ID</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (formErrors.email) setFormErrors({ ...formErrors, email: '' });
                }}
                className={`w-full px-4 py-3 bg-glass border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-colors ${
                  formErrors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-primary'
                }`}
                placeholder="your.email@example.com"
              />
              {formErrors.email && (
                <p className="text-red-400 text-xs mt-1.5">{formErrors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (formErrors.message) setFormErrors({ ...formErrors, message: '' });
                }}
                className={`w-full px-4 py-3 bg-glass border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-colors min-h-[150px] resize-none ${
                  formErrors.message ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-primary'
                }`}
                placeholder="Your message... (at least a few words)"
              />
              {formErrors.message && (
                <p className="text-red-400 text-xs mt-1.5">{formErrors.message}</p>
              )}
            </div>

            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`px-4 py-3 rounded-xl text-sm ${
                  status.type === 'success'
                    ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                    : 'bg-red-500/20 border border-red-500/30 text-red-400'
                }`}
              >
                {status.message}
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isSending}
              className="glow-button w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={!isSending ? { scale: 1.02 } : {}}
              whileTap={!isSending ? { scale: 0.98 } : {}}
            >
              {isSending ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Email(Message)
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
