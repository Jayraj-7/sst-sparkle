export type SubjectId = 'history' | 'geography' | 'civics' | 'economics';

export interface Subject {
  id: SubjectId;
  name: string;
  fullName: string;
  icon: string;
  colorClass: string;
  chapters: Chapter[];
}

export interface Chapter {
  id: string;
  subjectId: SubjectId;
  name: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  chapterId: string;
  title: string;
  concept: string;
  explanation: string;
  visualization: string;
  interactionPrompt: string;
  question: QuizQuestion;
}

export interface QuizQuestion {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  type: 'mcq' | 'fill' | 'match';
}

export interface UserProgress {
  xp: number;
  level: number;
  streak: number;
  lastActiveDate: string;
  completedLessons: string[];
  completedChapters: string[];
  quizScores: Record<string, number>;
  achievements: string[];
  weeklyXp: number[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  condition: (progress: UserProgress) => boolean;
}

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'first_lesson', title: 'First Step', description: 'Complete your first lesson', icon: '🚀', condition: (p) => p.completedLessons.length >= 1 },
  { id: 'streak_3', title: 'On Fire', description: '3 day streak', icon: '🔥', condition: (p) => p.streak >= 3 },
  { id: 'streak_7', title: 'Unstoppable', description: '7 day streak', icon: '⚡', condition: (p) => p.streak >= 7 },
  { id: 'xp_100', title: 'Century', description: 'Earn 100 XP', icon: '💯', condition: (p) => p.xp >= 100 },
  { id: 'xp_500', title: 'Scholar', description: 'Earn 500 XP', icon: '🎓', condition: (p) => p.xp >= 500 },
  { id: 'perfect_quiz', title: 'Perfect Score', description: 'Get 100% on a quiz', icon: '⭐', condition: (p) => Object.values(p.quizScores).some(s => s === 100) },
  { id: 'chapter_master', title: 'Chapter Master', description: 'Complete a full chapter', icon: '👑', condition: (p) => p.completedChapters.length >= 1 },
  { id: 'all_subjects', title: 'Renaissance Mind', description: 'Complete lessons in all 4 subjects', icon: '🧠', condition: () => false },
  { id: 'level_5', title: 'Rising Star', description: 'Reach Level 5', icon: '🌟', condition: (p) => p.level >= 5 },
  { id: 'ten_lessons', title: 'Dedicated', description: 'Complete 10 lessons', icon: '📚', condition: (p) => p.completedLessons.length >= 10 },
];

export const DEFAULT_PROGRESS: UserProgress = {
  xp: 0,
  level: 1,
  streak: 0,
  lastActiveDate: '',
  completedLessons: [],
  completedChapters: [],
  quizScores: {},
  achievements: [],
  weeklyXp: [0, 0, 0, 0, 0, 0, 0],
};
