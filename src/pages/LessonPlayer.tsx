import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { subjects } from '@/data/subjects';
import { useProgress } from '@/hooks/useProgress';
import { Confetti } from '@/components/Confetti';
import { ArrowLeft, ChevronRight, Lightbulb, CheckCircle2, XCircle, Sparkles } from 'lucide-react';

export default function LessonPlayer() {
  const { subjectId, chapterId, lessonId } = useParams();
  const navigate = useNavigate();
  const { completeLesson, progress } = useProgress();
  
  const [step, setStep] = useState<'concept' | 'interact' | 'question' | 'result'>('concept');
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const subject = subjects.find(s => s.id === subjectId);
  const chapter = subject?.chapters.find(c => c.id === chapterId);
  const lesson = chapter?.lessons.find(l => l.id === lessonId);

  if (!subject || !chapter || !lesson) {
    return <div className="p-4 text-center">Lesson not found</div>;
  }

  const isCorrect = selectedOption === lesson.question.correctIndex;

  // Find next lesson
  const allLessons = subject.chapters.flatMap(c => c.lessons);
  const currentIdx = allLessons.findIndex(l => l.id === lessonId);
  const nextLesson = currentIdx < allLessons.length - 1 ? allLessons[currentIdx + 1] : null;
  const nextChapter = nextLesson ? subject.chapters.find(c => c.lessons.some(l => l.id === nextLesson.id)) : null;

  const handleAnswer = (index: number) => {
    setSelectedOption(index);
    setStep('result');
    if (index === lesson.question.correctIndex) {
      setShowConfetti(true);
      completeLesson(lesson.id);
      // Check if chapter is complete
      const chapterLessons = chapter.lessons;
      const allDone = chapterLessons.every(l => l.id === lesson.id || progress.completedLessons.includes(l.id));
      if (allDone) {
        // chapter complete handled by progress hook
      }
    }
  };

  const goToNext = () => {
    if (nextLesson && nextChapter) {
      navigate(`/lesson/${subject.id}/${nextChapter.id}/${nextLesson.id}`);
      setStep('concept');
      setSelectedOption(null);
      setShowConfetti(false);
    } else {
      navigate(`/subjects/${subject.id}`);
    }
  };

  return (
    <div className="min-h-screen pb-20 px-4 pt-6 max-w-lg mx-auto">
      <Confetti show={showConfetti} />
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button onClick={() => navigate(`/subjects/${subject.id}`)} className="p-2 rounded-xl bg-secondary">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div className="flex-1 min-w-0">
          <h2 className="text-sm font-semibold truncate">{lesson.title}</h2>
          <p className="text-xs text-muted-foreground">{chapter.name}</p>
        </div>
        <div className="text-lg">{subject.icon}</div>
      </div>

      {/* Progress steps */}
      <div className="flex gap-1 mb-6">
        {['concept', 'interact', 'question', 'result'].map((s, i) => (
          <div key={s} className={`flex-1 h-1 rounded-full ${
            ['concept', 'interact', 'question', 'result'].indexOf(step) >= i ? 'bg-primary' : 'bg-muted'
          }`} />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 'concept' && (
          <motion.div
            key="concept"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="space-y-4"
          >
            <div className="glass rounded-2xl p-5">
              <div className="flex items-center gap-2 text-primary mb-3">
                <Lightbulb className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Concept</span>
              </div>
              <h3 className="text-lg font-display font-bold mb-3">{lesson.title}</h3>
              <p className="text-sm text-secondary-foreground leading-relaxed">{lesson.concept}</p>
            </div>
            <div className="glass rounded-2xl p-5">
              <p className="text-sm text-muted-foreground leading-relaxed">{lesson.explanation}</p>
            </div>
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => setStep('interact')}
              className="w-full bg-primary text-primary-foreground rounded-2xl p-4 font-semibold flex items-center justify-center gap-2"
            >
              Continue <ChevronRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        )}

        {step === 'interact' && (
          <motion.div
            key="interact"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="space-y-4"
          >
            <div className="glass rounded-2xl p-5 text-center">
              <div className="flex items-center justify-center gap-2 text-accent mb-4">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Interactive</span>
              </div>
              <div className="w-32 h-32 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-5xl"
                >
                  {subject.icon}
                </motion.div>
              </div>
              <p className="text-sm text-muted-foreground">{lesson.interactionPrompt}</p>
            </div>
            
            {/* Visual concept card */}
            <motion.div 
              className="glass rounded-2xl p-5"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-primary/10 rounded-xl p-3 text-center">
                  <div className="text-2xl mb-1">📖</div>
                  <p className="text-xs text-muted-foreground">Key Idea</p>
                </div>
                <div className="bg-accent/10 rounded-xl p-3 text-center">
                  <div className="text-2xl mb-1">🔍</div>
                  <p className="text-xs text-muted-foreground">Explore</p>
                </div>
              </div>
            </motion.div>

            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => setStep('question')}
              className="w-full bg-primary text-primary-foreground rounded-2xl p-4 font-semibold flex items-center justify-center gap-2"
            >
              Test Your Understanding <ChevronRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        )}

        {step === 'question' && (
          <motion.div
            key="question"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="space-y-4"
          >
            <div className="glass rounded-2xl p-5">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Question</span>
              <h3 className="text-base font-semibold mt-2">{lesson.question.text}</h3>
            </div>
            <div className="space-y-2">
              {lesson.question.options.map((option, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(i)}
                  className="w-full glass-hover rounded-xl p-4 text-left text-sm flex items-center gap-3"
                >
                  <span className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center text-xs font-semibold">
                    {String.fromCharCode(65 + i)}
                  </span>
                  {option}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 'result' && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-4"
          >
            <motion.div
              className={`rounded-2xl p-6 text-center ${isCorrect ? 'bg-success/10 border border-success/30' : 'bg-destructive/10 border border-destructive/30'}`}
              animate={isCorrect ? { scale: [1, 1.02, 1] } : {}}
              transition={{ duration: 0.5 }}
            >
              {isCorrect ? (
                <>
                  <CheckCircle2 className="w-12 h-12 text-success mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-success">Correct! 🎉</h3>
                  <p className="text-sm text-muted-foreground mt-1">+20 XP earned</p>
                </>
              ) : (
                <>
                  <XCircle className="w-12 h-12 text-destructive mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-destructive">Not quite</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Correct answer: {lesson.question.options[lesson.question.correctIndex]}
                  </p>
                </>
              )}
            </motion.div>

            <div className="glass rounded-2xl p-5">
              <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Explanation</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{lesson.question.explanation}</p>
            </div>

            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={goToNext}
              className="w-full bg-primary text-primary-foreground rounded-2xl p-4 font-semibold flex items-center justify-center gap-2"
            >
              {nextLesson ? 'Next Lesson' : 'Back to Chapter'} <ChevronRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
