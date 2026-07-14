import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const purpleGradients = [
  '#818cf8',
  '#c084fc',
  '#a855f7',
  '#7c3aed',
  '#818cf8',
];

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);
  const ringSpringX = useSpring(cursorX, { damping: 15, stiffness: 200, mass: 0.8 });
  const ringSpringY = useSpring(cursorY, { damping: 15, stiffness: 200, mass: 0.8 });

  useEffect(() => {
    const updatePosition = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea, select')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY]);

  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot with animated purple gradient */}
      <motion.div
        ref={cursorRef}
        className="fixed w-3 h-3 rounded-full pointer-events-none z-50"
        style={{
          x: springX,
          y: springY,
          marginLeft: -6,
          marginTop: -6,
          background: 'linear-gradient(135deg, #818cf8, #c084fc, #a855f7, #7c3aed, #818cf8)',
          backgroundSize: '400% 400%',
        }}
        animate={{
          scale: isClicking ? 0.5 : isHovering ? 1.5 : 1,
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          scale: { duration: 0.15 },
          backgroundPosition: { duration: 3, repeat: Infinity, ease: 'linear' },
        }}
      />

      {/* Outer ring with animated gradient border */}
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          x: ringSpringX,
          y: ringSpringY,
          marginLeft: -24,
          marginTop: -24,
          width: 48,
          height: 48,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #818cf8, #c084fc, #a855f7, #7c3aed)',
          backgroundSize: '400% 400%',
          padding: 2,
          WebkitMask: 'radial-gradient(circle at center, transparent 21px, black 22px)',
          mask: 'radial-gradient(circle at center, transparent 21px, black 22px)',
        }}
        animate={{
          scale: isClicking ? 0.7 : isHovering ? 1.8 : 1,
          opacity: isClicking ? 0.8 : isHovering ? 0.7 : 0.4,
          rotate: 360,
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          scale: { duration: 0.2 },
          opacity: { duration: 0.2 },
          rotate: { duration: 4, repeat: Infinity, ease: 'linear' },
          backgroundPosition: { duration: 3, repeat: Infinity, ease: 'linear' },
        }}
      />

      {/* Trail particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-2 h-2 rounded-full pointer-events-none z-50"
          style={{
            x: springX,
            y: springY,
            marginLeft: -4 - (i * 6),
            marginTop: -4 - (i * 6),
            background: `linear-gradient(135deg, ${purpleGradients[i]}, ${purpleGradients[i + 1]})`,
          }}
          animate={{
            scale: 1 - i * 0.3,
            opacity: 0.4 - i * 0.15,
          }}
          transition={{
            duration: 0.3,
            delay: i * 0.05,
          }}
        />
      ))}

      {/* Click burst effect */}
      {isClicking && (
        <motion.div
          className="fixed w-16 h-16 rounded-full pointer-events-none z-50"
          style={{
            x: springX,
            y: springY,
            marginLeft: -32,
            marginTop: -32,
            border: '2px solid #c084fc',
          }}
          initial={{ scale: 0.5, opacity: 0.8 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 0.4 }}
        />
      )}
    </>
  );
};

export default CustomCursor;
