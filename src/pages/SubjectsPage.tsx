import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { subjects } from '@/data/subjects';
import { useProgress } from '@/hooks/useProgress';
import { ChevronRight, ArrowLeft, Check } from 'lucide-react';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } };

export default function SubjectsPage() {
  const navigate = useNavigate();
  const { subjectId } = useParams();
  const { progress } = useProgress();

  if (subjectId) {
    const subject = subjects.find(s => s.id === subjectId);
    if (!subject) return <div className="p-4">Subject not found</div>;

    return (
      <div className="min-h-screen pb-20 px-4 pt-6 max-w-lg mx-auto">
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
          <motion.div variants={item} className="flex items-center gap-3">
            <button onClick={() => navigate('/subjects')} className="p-2 rounded-xl bg-secondary">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div>
              <h1 className="text-xl font-display font-bold">{subject.icon} {subject.name}</h1>
              <p className="text-xs text-muted-foreground">{subject.fullName}</p>
            </div>
          </motion.div>

          {subject.chapters.map((chapter, i) => {
            const chapterLessons = chapter.lessons;
            const completed = chapterLessons.filter(l => progress.completedLessons.includes(l.id)).length;
            const allDone = completed === chapterLessons.length;

            return (
              <motion.div key={chapter.id} variants={item} className="glass rounded-2xl overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold flex items-center gap-2">
                      <span className="text-muted-foreground text-xs">{i + 1}.</span>
                      {chapter.name}
                      {allDone && <Check className="w-4 h-4 text-success" />}
                    </h3>
                    <span className="text-xs text-muted-foreground">{completed}/{chapterLessons.length}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-1 mb-3">
                    <div className={`h-full rounded-full bg-${subject.colorClass}`} style={{ width: `${chapterLessons.length > 0 ? (completed / chapterLessons.length) * 100 : 0}%` }} />
                  </div>
                  <div className="space-y-1">
                    {chapterLessons.map(lesson => {
                      const done = progress.completedLessons.includes(lesson.id);
                      return (
                        <button
                          key={lesson.id}
                          onClick={() => navigate(`/lesson/${subject.id}/${chapter.id}/${lesson.id}`)}
                          className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-secondary/50 transition-colors text-left"
                        >
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${done ? 'bg-success text-success-foreground' : 'bg-muted text-muted-foreground'}`}>
                            {done ? <Check className="w-3 h-3" /> : '•'}
                          </div>
                          <span className="flex-1 text-sm">{lesson.title}</span>
                          <ChevronRight className="w-4 h-4 text-muted-foreground" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20 px-4 pt-6 max-w-lg mx-auto">
      <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
        <motion.div variants={item}>
          <h1 className="text-2xl font-display font-bold">Subjects</h1>
          <p className="text-sm text-muted-foreground">Choose a subject to start learning</p>
        </motion.div>

        {subjects.map(subject => {
          const allLessons = subject.chapters.flatMap(c => c.lessons);
          const completed = allLessons.filter(l => progress.completedLessons.includes(l.id)).length;
          const pct = allLessons.length > 0 ? Math.round((completed / allLessons.length) * 100) : 0;

          return (
            <motion.button
              key={subject.id}
              variants={item}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => navigate(`/subjects/${subject.id}`)}
              className="w-full glass-hover rounded-2xl p-5 text-left"
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl">{subject.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold">{subject.name}</h3>
                  <p className="text-xs text-muted-foreground">{subject.fullName}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex-1 bg-muted rounded-full h-1.5">
                      <div className={`h-full rounded-full bg-${subject.colorClass}`} style={{ width: `${pct}%` }} />
                    </div>
                    <span className="text-xs text-muted-foreground">{pct}%</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </div>
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
}
