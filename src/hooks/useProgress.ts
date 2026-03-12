import { useState, useEffect, useCallback } from 'react';
import { UserProgress, DEFAULT_PROGRESS, ACHIEVEMENTS } from '@/types/learning';

const STORAGE_KEY = 'sst_mastery_progress';

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return { ...DEFAULT_PROGRESS };
      }
    }
    return { ...DEFAULT_PROGRESS };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    const today = new Date().toDateString();
    if (progress.lastActiveDate && progress.lastActiveDate !== today) {
      const lastDate = new Date(progress.lastActiveDate);
      const diff = Math.floor((new Date(today).getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
      if (diff > 1) {
        setProgress(p => ({ ...p, streak: 0, lastActiveDate: today }));
      }
    }
  }, []);

  const addXp = useCallback((amount: number) => {
    setProgress(p => {
      const today = new Date().toDateString();
      const newStreak = p.lastActiveDate === today ? p.streak : p.streak + 1;
      const newXp = p.xp + amount;
      const newLevel = Math.floor(newXp / 100) + 1;
      const weeklyXp = [...p.weeklyXp];
      weeklyXp[new Date().getDay()] = (weeklyXp[new Date().getDay()] || 0) + amount;
      return { ...p, xp: newXp, level: newLevel, streak: newStreak, lastActiveDate: today, weeklyXp };
    });
  }, []);

  const completeLesson = useCallback((lessonId: string) => {
    setProgress(p => {
      if (p.completedLessons.includes(lessonId)) return p;
      return { ...p, completedLessons: [...p.completedLessons, lessonId] };
    });
    addXp(20);
  }, [addXp]);

  const completeChapter = useCallback((chapterId: string) => {
    setProgress(p => {
      if (p.completedChapters.includes(chapterId)) return p;
      return { ...p, completedChapters: [...p.completedChapters, chapterId] };
    });
    addXp(50);
  }, [addXp]);

  const recordQuizScore = useCallback((quizId: string, score: number) => {
    setProgress(p => ({ ...p, quizScores: { ...p.quizScores, [quizId]: score } }));
    addXp(Math.floor(score / 10));
  }, [addXp]);

  const checkAchievements = useCallback(() => {
    setProgress(p => {
      const newAchievements = ACHIEVEMENTS
        .filter(a => !p.achievements.includes(a.id) && a.condition(p))
        .map(a => a.id);
      if (newAchievements.length === 0) return p;
      return { ...p, achievements: [...p.achievements, ...newAchievements] };
    });
  }, []);

  useEffect(() => {
    checkAchievements();
  }, [progress.xp, progress.completedLessons.length, progress.streak, checkAchievements]);

  return { progress, addXp, completeLesson, completeChapter, recordQuizScore };
}
