import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import GoToTop from './components/GoToTop';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen cursor-none">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999] bg-dark flex flex-col items-center justify-center gap-8"
          >
            {/* Skeleton loader */}
            <div className="w-64 space-y-4">
              <div className="h-6 w-32 bg-glass rounded-lg animate-pulse" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-glass rounded animate-pulse" />
                <div className="h-4 w-4/5 bg-glass rounded animate-pulse" />
                <div className="h-4 w-3/5 bg-glass rounded animate-pulse" />
              </div>
              <div className="flex gap-2 mt-4">
                <div className="h-10 w-24 bg-glass rounded-xl animate-pulse" />
                <div className="h-10 w-24 bg-glass rounded-xl animate-pulse" />
              </div>
            </div>
            <div className="w-48 h-1 bg-glass rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, ease: 'linear' }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CustomCursor />
      <ScrollProgress />
      <GoToTop />
      <ParticleBackground />

      <nav className="fixed top-0 left-0 right-0 z-40 px-4 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card px-6 py-3 flex items-center justify-between">
            <a href="#" className="text-xl font-bold gradient-text">SM</a>

            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="md:hidden glass-card mt-2 p-4"
              >
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
