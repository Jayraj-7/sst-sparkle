import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { subjects } from '@/data/subjects';
import { useProgress } from '@/hooks/useProgress';
import { Confetti } from '@/components/Confetti';
import { QuizQuestion } from '@/types/learning';
import { CheckCircle2, XCircle, Clock, Zap, RotateCcw } from 'lucide-react';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } };

export default function QuizPage() {
  const { recordQuizScore } = useProgress();
  const [mode, setMode] = useState<'select' | 'playing' | 'results'>('select');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [timer, setTimer] = useState(0);
  const [timedMode, setTimedMode] = useState(false);

  const allQuestions = subjects.flatMap(s => s.chapters.flatMap(c => c.lessons.map(l => l.question)));

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (mode === 'playing' && timedMode) {
      interval = setInterval(() => setTimer(t => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [mode, timedMode]);

  const startQuiz = (count: number, timed: boolean) => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, count);
    setQuestions(shuffled);
    setAnswers(new Array(shuffled.length).fill(null));
    setCurrentQ(0);
    setTimer(0);
    setTimedMode(timed);
    setMode('playing');
  };

  const answer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQ] = optionIndex;
    setAnswers(newAnswers);
    
    setTimeout(() => {
      if (currentQ < questions.length - 1) {
        setCurrentQ(currentQ + 1);
      } else {
        const score = Math.round(newAnswers.filter((a, i) => a === questions[i].correctIndex).length / questions.length * 100);
        recordQuizScore(`quiz_${Date.now()}`, score);
        if (score >= 80) setShowConfetti(true);
        setMode('results');
      }
    }, 600);
  };

  const score = answers.filter((a, i) => a === questions[i]?.correctIndex).length;
  const pct = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;

  if (mode === 'select') {
    return (
      <div className="min-h-screen pb-20 px-4 pt-6 max-w-lg mx-auto">
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
          <motion.div variants={item}>
            <h1 className="text-2xl font-display font-bold">Quiz Center</h1>
            <p className="text-sm text-muted-foreground">Test your knowledge</p>
          </motion.div>

          <motion.div variants={item} className="space-y-3">
            <h3 className="text-sm font-semibold text-muted-foreground">Practice Mode</h3>
            {[5, 10, 15].map(n => (
              <button key={n} onClick={() => startQuiz(n, false)} className="w-full glass-hover rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold">{n} Questions</div>
                  <div className="text-xs text-muted-foreground">No time limit</div>
                </div>
              </button>
            ))}
          </motion.div>

          <motion.div variants={item} className="space-y-3">
            <h3 className="text-sm font-semibold text-muted-foreground">Timed Challenge</h3>
            {[5, 10].map(n => (
              <button key={n} onClick={() => startQuiz(n, true)} className="w-full glass-hover rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold">{n} Questions — Timed</div>
                  <div className="text-xs text-muted-foreground">Race against the clock</div>
                </div>
              </button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    );
  }

  if (mode === 'results') {
    return (
      <div className="min-h-screen pb-20 px-4 pt-6 max-w-lg mx-auto">
        <Confetti show={showConfetti} />
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="space-y-4">
          <div className="glass rounded-2xl p-6 text-center">
            <div className="text-5xl mb-3">{pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '📚'}</div>
            <h2 className="text-2xl font-display font-bold">{pct}%</h2>
            <p className="text-muted-foreground text-sm">{score}/{questions.length} correct</p>
            {timedMode && <p className="text-xs text-muted-foreground mt-1">Time: {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}</p>}
          </div>

          {/* Review */}
          <div className="space-y-2">
            {questions.map((q, i) => {
              const correct = answers[i] === q.correctIndex;
              return (
                <div key={q.id} className={`glass rounded-xl p-3 border ${correct ? 'border-success/30' : 'border-destructive/30'}`}>
                  <div className="flex items-start gap-2">
                    {correct ? <CheckCircle2 className="w-4 h-4 text-success mt-0.5" /> : <XCircle className="w-4 h-4 text-destructive mt-0.5" />}
                    <div>
                      <p className="text-xs">{q.text}</p>
                      {!correct && <p className="text-[10px] text-muted-foreground mt-1">Answer: {q.options[q.correctIndex]}</p>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button onClick={() => setMode('select')} className="w-full bg-primary text-primary-foreground rounded-2xl p-4 font-semibold flex items-center justify-center gap-2">
            <RotateCcw className="w-4 h-4" /> Try Again
          </button>
        </motion.div>
      </div>
    );
  }

  // Playing
  const q = questions[currentQ];
  return (
    <div className="min-h-screen pb-20 px-4 pt-6 max-w-lg mx-auto">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold">{currentQ + 1}/{questions.length}</span>
        {timedMode && (
          <span className="text-sm text-muted-foreground flex items-center gap-1">
            <Clock className="w-3 h-3" /> {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
          </span>
        )}
      </div>
      <div className="flex gap-1 mb-6">
        {questions.map((_, i) => (
          <div key={i} className={`flex-1 h-1 rounded-full ${
            i < currentQ ? (answers[i] === questions[i].correctIndex ? 'bg-success' : 'bg-destructive') :
            i === currentQ ? 'bg-primary' : 'bg-muted'
          }`} />
        ))}
      </div>

      <motion.div key={currentQ} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
        <div className="glass rounded-2xl p-5">
          <p className="text-sm font-semibold">{q.text}</p>
        </div>
        <div className="space-y-2">
          {q.options.map((opt, i) => {
            const answered = answers[currentQ] !== null;
            const isSelected = answers[currentQ] === i;
            const isCorrectOpt = i === q.correctIndex;
            let bg = '';
            if (answered && isCorrectOpt) bg = 'border-success bg-success/10';
            else if (answered && isSelected) bg = 'border-destructive bg-destructive/10';

            return (
              <motion.button
                key={i}
                whileTap={{ scale: 0.98 }}
                disabled={answered}
                onClick={() => answer(i)}
                className={`w-full glass rounded-xl p-4 text-left text-sm flex items-center gap-3 border transition-colors ${bg || 'border-transparent'}`}
              >
                <span className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center text-xs font-semibold">
                  {String.fromCharCode(65 + i)}
                </span>
                {opt}
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
