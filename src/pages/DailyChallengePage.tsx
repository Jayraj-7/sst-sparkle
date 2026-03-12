import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { subjects } from '@/data/subjects';
import { useProgress } from '@/hooks/useProgress';
import { Confetti } from '@/components/Confetti';
import { ArrowLeft, Zap, CheckCircle2, XCircle, ChevronRight, Clock, Trophy } from 'lucide-react';

function getDailySeed() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}

function seededShuffle<T>(arr: T[], seed: string): T[] {
  const copy = [...arr];
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash + seed.charCodeAt(i)) | 0;
  }
  for (let i = copy.length - 1; i > 0; i--) {
    hash = ((hash << 5) - hash + i) | 0;
    const j = Math.abs(hash) % (i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function DailyChallengePage() {
  const navigate = useNavigate();
  const { addXp, progress } = useProgress();
  const seed = getDailySeed();
  const storageKey = `daily_challenge_${seed}`;

  const alreadyCompleted = !!localStorage.getItem(storageKey);

  const questions = useMemo(() => {
    const all = subjects.flatMap(s =>
      s.chapters.flatMap(c => c.lessons.map(l => ({ ...l.question, subjectIcon: s.icon, subjectName: s.name })))
    );
    return seededShuffle(all, seed).slice(0, 5);
  }, [seed]);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [finished, setFinished] = useState(alreadyCompleted);
  const [savedScore] = useState(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : null;
  });

  const currentQ = questions[currentIdx];
  const isCorrect = selected !== null && selected === currentQ?.correctIndex;

  const handleAnswer = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
  };

  const handleNext = () => {
    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);
    setSelected(null);

    if (currentIdx < 4) {
      setCurrentIdx(currentIdx + 1);
    } else {
      // Calculate score
      const correct = newAnswers.filter((a, i) => a === questions[i].correctIndex).length;
      const bonusXp = correct * 15 + (correct === 5 ? 25 : 0);
      addXp(bonusXp);
      localStorage.setItem(storageKey, JSON.stringify({ correct, total: 5, xp: bonusXp }));
      if (correct >= 3) setShowConfetti(true);
      setFinished(true);
    }
  };

  if (finished) {
    const result = savedScore || (() => {
      const correct = answers.filter((a, i) => a === questions[i].correctIndex).length;
      return { correct, total: 5, xp: correct * 15 + (correct === 5 ? 25 : 0) };
    })();

    return (
      <div className="min-h-screen pb-20 px-4 pt-6 max-w-lg mx-auto">
        <Confetti show={showConfetti} />
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => navigate('/')} className="p-2 rounded-xl bg-secondary">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <h2 className="text-lg font-display font-bold">Daily Challenge</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-5"
        >
          <div className="glass rounded-2xl p-6 text-center">
            <Trophy className="w-14 h-14 text-xp mx-auto mb-3" />
            <h3 className="text-2xl font-display font-bold mb-1">
              {result.correct}/5 Correct
            </h3>
            <p className="text-sm text-muted-foreground">
              {alreadyCompleted ? 'You already completed today\'s challenge!' : `+${result.xp} XP earned`}
            </p>
            {result.correct === 5 && (
              <p className="text-xs text-xp font-semibold mt-2">🎉 Perfect score bonus: +25 XP!</p>
            )}
          </div>

          <div className="glass rounded-2xl p-4 space-y-3">
            <h4 className="text-sm font-semibold text-muted-foreground">Performance</h4>
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-muted rounded-full h-2">
                <motion.div
                  className="h-full rounded-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${(result.correct / 5) * 100}%` }}
                  transition={{ duration: 0.8 }}
                />
              </div>
              <span className="text-sm font-semibold">{Math.round((result.correct / 5) * 100)}%</span>
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/')}
            className="w-full bg-primary text-primary-foreground rounded-2xl p-4 font-semibold flex items-center justify-center gap-2"
          >
            Back to Dashboard <ChevronRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20 px-4 pt-6 max-w-lg mx-auto">
      <Confetti show={showConfetti} />

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button onClick={() => navigate('/')} className="p-2 rounded-xl bg-secondary">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div className="flex-1">
          <h2 className="text-lg font-display font-bold">Daily Challenge</h2>
          <p className="text-xs text-muted-foreground">5 questions • Bonus XP</p>
        </div>
        <div className="flex items-center gap-1 bg-accent/20 px-3 py-1.5 rounded-full">
          <Zap className="w-4 h-4 text-accent" />
          <span className="text-xs font-semibold text-accent">+15 XP each</span>
        </div>
      </div>

      {/* Progress dots */}
      <div className="flex gap-2 mb-6">
        {[0, 1, 2, 3, 4].map(i => (
          <div
            key={i}
            className={`flex-1 h-1.5 rounded-full transition-colors ${
              i < currentIdx ? 'bg-primary' : i === currentIdx ? 'bg-accent' : 'bg-muted'
            }`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          className="space-y-4"
        >
          {/* Question card */}
          <div className="glass rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">{currentQ.subjectIcon}</span>
              <span className="text-xs text-muted-foreground">{currentQ.subjectName}</span>
              <span className="ml-auto text-xs font-semibold text-primary">Q{currentIdx + 1}/5</span>
            </div>
            <h3 className="text-base font-semibold">{currentQ.text}</h3>
          </div>

          {/* Options */}
          <div className="space-y-2">
            {currentQ.options.map((option, i) => {
              let variant = 'glass-hover';
              if (selected !== null) {
                if (i === currentQ.correctIndex) variant = 'border border-success/50 bg-success/10';
                else if (i === selected) variant = 'border border-destructive/50 bg-destructive/10';
                else variant = 'glass opacity-50';
              }
              return (
                <motion.button
                  key={i}
                  whileTap={selected === null ? { scale: 0.98 } : {}}
                  onClick={() => handleAnswer(i)}
                  disabled={selected !== null}
                  className={`w-full rounded-xl p-4 text-left text-sm flex items-center gap-3 transition-all ${variant}`}
                >
                  <span className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center text-xs font-semibold shrink-0">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="flex-1">{option}</span>
                  {selected !== null && i === currentQ.correctIndex && (
                    <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                  )}
                  {selected !== null && i === selected && i !== currentQ.correctIndex && (
                    <XCircle className="w-5 h-5 text-destructive shrink-0" />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Explanation after answering */}
          {selected !== null && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-3"
            >
              <div className="glass rounded-2xl p-4">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Explanation</p>
                <p className="text-sm text-muted-foreground">{currentQ.explanation}</p>
              </div>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={handleNext}
                className="w-full bg-primary text-primary-foreground rounded-2xl p-4 font-semibold flex items-center justify-center gap-2"
              >
                {currentIdx < 4 ? 'Next Question' : 'See Results'} <ChevronRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
