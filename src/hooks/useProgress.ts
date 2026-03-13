"use client";

import { useState, useEffect, useCallback } from "react";
import { curriculum } from "@/data/curriculum";

export interface LessonProgress {
  completed: boolean;
  completedAt?: string;
  notes?: string;
}

export interface ProgressData {
  lessons: Record<string, LessonProgress>;
  startedAt: string;
  lastActiveAt: string;
}

const STORAGE_KEY = "golearn-progress";

function getDefaultProgress(): ProgressData {
  return {
    lessons: {},
    startedAt: new Date().toISOString(),
    lastActiveAt: new Date().toISOString(),
  };
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressData>(getDefaultProgress());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setProgress(JSON.parse(stored));
      } catch {
        setProgress(getDefaultProgress());
      }
    }
    setLoaded(true);
  }, []);

  const save = useCallback((data: ProgressData) => {
    const updated = { ...data, lastActiveAt: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setProgress(updated);
  }, []);

  const toggleLesson = useCallback(
    (lessonId: string) => {
      const lessons = { ...progress.lessons };
      if (lessons[lessonId]?.completed) {
        delete lessons[lessonId];
      } else {
        lessons[lessonId] = {
          completed: true,
          completedAt: new Date().toISOString(),
        };
      }
      save({ ...progress, lessons });
    },
    [progress, save]
  );

  const isCompleted = useCallback(
    (lessonId: string) => !!progress.lessons[lessonId]?.completed,
    [progress]
  );

  const getModuleProgress = useCallback(
    (moduleId: string) => {
      const mod = curriculum.find((m) => m.id === moduleId);
      if (!mod) return { completed: 0, total: 0, percent: 0 };
      const total = mod.lessons.length;
      const completed = mod.lessons.filter(
        (l) => progress.lessons[l.id]?.completed
      ).length;
      return { completed, total, percent: total > 0 ? Math.round((completed / total) * 100) : 0 };
    },
    [progress]
  );

  const getOverallProgress = useCallback(() => {
    const totalLessons = curriculum.reduce((sum, m) => sum + m.lessons.length, 0);
    const completedLessons = Object.values(progress.lessons).filter(
      (l) => l.completed
    ).length;
    return {
      completed: completedLessons,
      total: totalLessons,
      percent: totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0,
    };
  }, [progress]);

  const saveNote = useCallback(
    (lessonId: string, note: string) => {
      const lessons = { ...progress.lessons };
      lessons[lessonId] = {
        ...lessons[lessonId],
        completed: lessons[lessonId]?.completed ?? false,
        notes: note,
      };
      save({ ...progress, lessons });
    },
    [progress, save]
  );

  const getNote = useCallback(
    (lessonId: string) => progress.lessons[lessonId]?.notes ?? "",
    [progress]
  );

  const resetProgress = useCallback(() => {
    const fresh = getDefaultProgress();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
    setProgress(fresh);
  }, []);

  return {
    progress,
    loaded,
    toggleLesson,
    isCompleted,
    getModuleProgress,
    getOverallProgress,
    saveNote,
    getNote,
    resetProgress,
  };
}
