import { motion } from 'framer-motion';
import { useProgress } from '@/hooks/useProgress';
import { ACHIEVEMENTS } from '@/types/learning';
import { Lock } from 'lucide-react';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } };

export default function AchievementsPage() {
  const { progress } = useProgress();

  return (
    <div className="min-h-screen pb-20 px-4 pt-6 max-w-lg mx-auto">
      <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
        <motion.div variants={item}>
          <h1 className="text-2xl font-display font-bold">Achievements</h1>
          <p className="text-sm text-muted-foreground">{progress.achievements.length}/{ACHIEVEMENTS.length} unlocked</p>
        </motion.div>

        <motion.div variants={item} className="grid grid-cols-1 gap-3">
          {ACHIEVEMENTS.map(a => {
            const unlocked = progress.achievements.includes(a.id);
            return (
              <motion.div
                key={a.id}
                variants={item}
                className={`glass rounded-2xl p-4 flex items-center gap-4 ${unlocked ? 'border border-xp/30' : 'opacity-50'}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${unlocked ? 'bg-xp/20' : 'bg-muted'}`}>
                  {unlocked ? a.icon : <Lock className="w-5 h-5 text-muted-foreground" />}
                </div>
                <div>
                  <h3 className="text-sm font-semibold">{a.title}</h3>
                  <p className="text-xs text-muted-foreground">{a.description}</p>
                </div>
                {unlocked && (
                  <div className="ml-auto text-xs text-xp font-semibold">✓</div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}
