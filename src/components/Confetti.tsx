import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Confetti({ show }: { show: boolean }) {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; color: string; delay: number }>>([]);

  useEffect(() => {
    if (show) {
      setParticles(
        Array.from({ length: 30 }, (_, i) => ({
          id: i,
          x: Math.random() * 100,
          color: ['#3B82F6', '#F97316', '#10B981', '#EAB308', '#8B5CF6'][Math.floor(Math.random() * 5)],
          delay: Math.random() * 0.5,
        }))
      );
      const t = setTimeout(() => setParticles([]), 2000);
      return () => clearTimeout(t);
    }
  }, [show]);

  return (
    <AnimatePresence>
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="fixed pointer-events-none z-50"
          style={{ left: `${p.x}%`, top: -10, backgroundColor: p.color, width: 8, height: 8, borderRadius: 2 }}
          initial={{ opacity: 1, y: 0, rotate: 0 }}
          animate={{ opacity: 0, y: '100vh', rotate: 720 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 + Math.random(), delay: p.delay, ease: 'easeIn' }}
        />
      ))}
    </AnimatePresence>
  );
}
