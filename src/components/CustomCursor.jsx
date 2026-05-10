import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

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
      {/* Main cursor dot */}
      <motion.div
        ref={cursorRef}
        className="fixed w-3 h-3 bg-gradient-to-br from-primary to-accent rounded-full pointer-events-none z-50"
        style={{
          x: springX,
          y: springY,
          marginLeft: -6,
          marginTop: -6,
        }}
        animate={{
          scale: isClicking ? 0.5 : isHovering ? 1.5 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Outer ring with delay */}
      <motion.div
        className="fixed w-12 h-12 border-2 border-primary rounded-full pointer-events-none z-50"
        style={{
          x: springX,
          y: springY,
          marginLeft: -24,
          marginTop: -24,
        }}
        animate={{
          scale: isClicking ? 0.7 : isHovering ? 1.8 : 1,
          opacity: isClicking ? 0.8 : isHovering ? 0.6 : 0.3,
          borderColor: isHovering ? '#c084fc' : '#818cf8',
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Trail particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-2 h-2 bg-secondary/40 rounded-full pointer-events-none z-50"
          style={{
            x: springX,
            y: springY,
            marginLeft: -4 - (i * 6),
            marginTop: -4 - (i * 6),
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
          className="fixed w-16 h-16 border border-accent rounded-full pointer-events-none z-50"
          style={{
            x: springX,
            y: springY,
            marginLeft: -32,
            marginTop: -32,
          }}
          initial={{ scale: 0.5, opacity: 0.8 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </>
  );
};

export default CustomCursor;
