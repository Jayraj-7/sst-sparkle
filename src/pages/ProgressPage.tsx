import { motion } from 'framer-motion';
import { useProgress } from '@/hooks/useProgress';
import { subjects } from '@/data/subjects';
import { ProgressRing } from '@/components/ProgressRing';
import { TrendingUp, BookOpen, Target, Flame } from 'lucide-react';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } };

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function ProgressPage() {
  const { progress } = useProgress();
  const totalLessons = subjects.flatMap(s => s.chapters.flatMap(c => c.lessons)).length;
  const pct = totalLessons > 0 ? Math.round((progress.completedLessons.length / totalLessons) * 100) : 0;
  const quizScores = Object.values(progress.quizScores);
  const avgScore = quizScores.length > 0 ? Math.round(quizScores.reduce((a, b) => a + b, 0) / quizScores.length) : 0;
  const maxWeeklyXp = Math.max(...progress.weeklyXp, 1);

  return (
    <div className="min-h-screen pb-20 px-4 pt-6 max-w-lg mx-auto">
      <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
        <motion.div variants={item}>
          <h1 className="text-2xl font-display font-bold">Progress</h1>
          <p className="text-sm text-muted-foreground">Your learning analytics</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div variants={item} className="grid grid-cols-2 gap-3">
          {[
            { icon: TrendingUp, label: 'Level', value: progress.level, color: 'text-primary' },
            { icon: Flame, label: 'Streak', value: `${progress.streak} days`, color: 'text-streak' },
            { icon: BookOpen, label: 'Lessons', value: progress.completedLessons.length, color: 'text-geography' },
            { icon: Target, label: 'Avg Quiz', value: `${avgScore}%`, color: 'text-accent' },
          ].map(s => (
            <div key={s.label} className="glass rounded-2xl p-4 flex items-center gap-3">
              <s.icon className={`w-5 h-5 ${s.color}`} />
              <div>
                <div className="text-lg font-bold font-display">{s.value}</div>
                <div className="text-[10px] text-muted-foreground">{s.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Overall Progress */}
        <motion.div variants={item} className="glass rounded-2xl p-5 flex items-center gap-5">
          <ProgressRing progress={pct} size={80} strokeWidth={6}>
            <span className="text-lg font-bold font-display">{pct}%</span>
          </ProgressRing>
          <div>
            <h3 className="font-semibold text-sm">Overall Progress</h3>
            <p className="text-xs text-muted-foreground">{progress.completedLessons.length} of {totalLessons} lessons</p>
          </div>
        </motion.div>

        {/* Weekly Chart */}
        <motion.div variants={item} className="glass rounded-2xl p-5">
          <h3 className="text-sm font-semibold mb-3">This Week's XP</h3>
          <div className="flex items-end justify-between gap-2 h-24">
            {progress.weeklyXp.map((xp, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-[9px] text-muted-foreground">{xp}</span>
                <motion.div
                  className="w-full rounded-t-md bg-primary"
                  style={{ minHeight: 4 }}
                  initial={{ height: 4 }}
                  animate={{ height: Math.max(4, (xp / maxWeeklyXp) * 64) }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                />
                <span className={`text-[9px] ${i === new Date().getDay() ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
                  {DAYS[i]}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Per Subject */}
        <motion.div variants={item} className="space-y-2">
          <h3 className="text-sm font-semibold text-muted-foreground">By Subject</h3>
          {subjects.map(s => {
            const all = s.chapters.flatMap(c => c.lessons);
            const done = all.filter(l => progress.completedLessons.includes(l.id)).length;
            const p = all.length > 0 ? Math.round((done / all.length) * 100) : 0;
            return (
              <div key={s.id} className="glass rounded-xl p-3 flex items-center gap-3">
                <span className="text-lg">{s.icon}</span>
                <div className="flex-1">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-muted-foreground">{p}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-1.5">
                    <motion.div
                      className={`h-full rounded-full bg-${s.colorClass}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${p}%` }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}
