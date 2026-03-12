import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { subjects } from '@/data/subjects';
import { ProgressRing } from '@/components/ProgressRing';
import { useProgress } from '@/hooks/useProgress';
import { Flame, Star, TrendingUp, BookOpen, ChevronRight, Zap, Map } from 'lucide-react';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function Dashboard() {
  const navigate = useNavigate();
  const { progress } = useProgress();
  
  const totalLessons = subjects.flatMap(s => s.chapters.flatMap(c => c.lessons)).length;
  const overallProgress = totalLessons > 0 ? Math.round((progress.completedLessons.length / totalLessons) * 100) : 0;
  const maxWeeklyXp = Math.max(...progress.weeklyXp, 1);

  // Find next recommended lesson
  const nextLesson = subjects
    .flatMap(s => s.chapters.flatMap(c => c.lessons.map(l => ({ ...l, subject: s }))))
    .find(l => !progress.completedLessons.includes(l.id));

  return (
    <div className="min-h-screen pb-20 px-4 pt-6 max-w-lg mx-auto">
      <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
        {/* Header */}
        <motion.div variants={item} className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-display font-bold">SST Mastery</h1>
            <p className="text-muted-foreground text-sm">Class 10 NCERT</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-secondary px-3 py-1.5 rounded-full">
              <Flame className="w-4 h-4 text-streak" />
              <span className="text-sm font-semibold">{progress.streak}</span>
            </div>
            <div className="flex items-center gap-1 bg-secondary px-3 py-1.5 rounded-full">
              <Star className="w-4 h-4 text-xp" />
              <span className="text-sm font-semibold">{progress.xp}</span>
            </div>
          </div>
        </motion.div>

        {/* Progress Card */}
        <motion.div variants={item} className="glass rounded-2xl p-5">
          <div className="flex items-center gap-5">
            <ProgressRing progress={overallProgress} size={90} strokeWidth={7}>
              <div className="text-center">
                <div className="text-xl font-bold font-display">{overallProgress}%</div>
                <div className="text-[10px] text-muted-foreground">Complete</div>
              </div>
            </ProgressRing>
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Level {progress.level}</span>
              </div>
              <div className="text-xs text-muted-foreground">
                {progress.completedLessons.length}/{totalLessons} lessons completed
              </div>
              <div className="w-full bg-muted rounded-full h-1.5">
                <motion.div 
                  className="h-full bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${overallProgress}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Weekly Activity */}
        <motion.div variants={item} className="glass rounded-2xl p-5">
          <h3 className="text-sm font-semibold mb-3">Weekly Activity</h3>
          <div className="flex items-end justify-between gap-1 h-16">
            {progress.weeklyXp.map((xp, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <motion.div
                  className="w-full rounded-t-md bg-primary/80"
                  style={{ minHeight: 4 }}
                  initial={{ height: 4 }}
                  animate={{ height: Math.max(4, (xp / maxWeeklyXp) * 48) }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                />
                <span className={`text-[9px] ${i === new Date().getDay() ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
                  {DAYS[i]}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recommended */}
        {nextLesson && (
          <motion.div variants={item}>
            <h3 className="text-sm font-semibold mb-2 text-muted-foreground">Continue Learning</h3>
            <button
              onClick={() => navigate(`/lesson/${nextLesson.subject.id}/${nextLesson.chapterId}/${nextLesson.id}`)}
              className="w-full glass-hover rounded-2xl p-4 flex items-center gap-3 text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-lg">
                {nextLesson.subject.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{nextLesson.title}</div>
                <div className="text-xs text-muted-foreground">{nextLesson.subject.name}</div>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </button>
          </motion.div>
        )}

        {/* Subjects Grid */}
        <motion.div variants={item}>
          <h3 className="text-sm font-semibold mb-3 text-muted-foreground">Subjects</h3>
          <div className="grid grid-cols-2 gap-3">
            {subjects.map((subject) => {
              const subjectLessons = subject.chapters.flatMap(c => c.lessons);
              const completed = subjectLessons.filter(l => progress.completedLessons.includes(l.id)).length;
              const pct = subjectLessons.length > 0 ? Math.round((completed / subjectLessons.length) * 100) : 0;
              
              return (
                <motion.button
                  key={subject.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate(`/subjects/${subject.id}`)}
                  className="glass-hover rounded-2xl p-4 text-left"
                >
                  <div className="text-2xl mb-2">{subject.icon}</div>
                  <div className="text-sm font-semibold">{subject.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{subject.chapters.length} chapters</div>
                  <div className="w-full bg-muted rounded-full h-1 mt-3">
                    <div className={`h-full rounded-full bg-${subject.colorClass}`} style={{ width: `${pct}%` }} />
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div variants={item} className="grid grid-cols-2 gap-3">
          <button
            onClick={() => navigate('/quiz')}
            className="glass-hover rounded-2xl p-4 flex items-center gap-3"
          >
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Daily Quiz</span>
          </button>
          <button
            onClick={() => navigate('/achievements')}
            className="glass-hover rounded-2xl p-4 flex items-center gap-3"
          >
            <Star className="w-5 h-5 text-xp" />
            <span className="text-sm font-medium">Achievements</span>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
