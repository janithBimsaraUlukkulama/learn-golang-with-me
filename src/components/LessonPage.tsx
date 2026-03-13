"use client";

import Link from "next/link";
import { curriculum } from "@/data/curriculum";
import { useProgress } from "@/hooks/useProgress";
import LessonContent from "@/components/LessonContent";
import Sidebar from "@/components/Sidebar";
import { ArrowLeft, ChevronRight } from "lucide-react";

export default function LessonPageClient({
  moduleId,
  lessonId,
}: {
  moduleId: string;
  lessonId: string;
}) {
  const {
    loaded,
    isCompleted,
    getModuleProgress,
    toggleLesson,
    saveNote,
    getNote,
  } = useProgress();

  const module = curriculum.find((m) => m.id === moduleId);
  const lesson = module?.lessons.find((l) => l.id === lessonId);

  if (!loaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </div>
    );
  }

  if (!module || !lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-2">Lesson Not Found</h1>
          <Link href="/" className="text-blue-400 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Find prev/next lesson (within same module or across modules)
  const lessonIndex = module.lessons.findIndex((l) => l.id === lessonId);
  const moduleIndex = curriculum.findIndex((m) => m.id === moduleId);

  let prevLesson: { moduleId: string; lessonId: string; title: string } | null = null;
  let nextLesson: { moduleId: string; lessonId: string; title: string } | null = null;

  if (lessonIndex > 0) {
    const prev = module.lessons[lessonIndex - 1];
    prevLesson = { moduleId, lessonId: prev.id, title: prev.title };
  } else if (moduleIndex > 0) {
    const prevMod = curriculum[moduleIndex - 1];
    const prev = prevMod.lessons[prevMod.lessons.length - 1];
    prevLesson = { moduleId: prevMod.id, lessonId: prev.id, title: prev.title };
  }

  if (lessonIndex < module.lessons.length - 1) {
    const next = module.lessons[lessonIndex + 1];
    nextLesson = { moduleId, lessonId: next.id, title: next.title };
  } else if (moduleIndex < curriculum.length - 1) {
    const nextMod = curriculum[moduleIndex + 1];
    const next = nextMod.lessons[0];
    nextLesson = { moduleId: nextMod.id, lessonId: next.id, title: next.title };
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar isCompleted={isCompleted} getModuleProgress={getModuleProgress} />

      <div className="flex-1 lg:ml-72">
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6 flex-wrap">
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link
              href={`/module/${moduleId}`}
              className="hover:text-gray-300 transition-colors"
            >
              {module.title}
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-300">{lesson.title}</span>
          </div>

          {/* Lesson Content */}
          <LessonContent
            lesson={lesson}
            completed={isCompleted(lessonId)}
            note={getNote(lessonId)}
            onToggle={() => toggleLesson(lessonId)}
            onSaveNote={(note) => saveNote(lessonId, note)}
          />

          {/* Prev/Next Navigation */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-800">
            {prevLesson ? (
              <Link
                href={`/module/${prevLesson.moduleId}/lesson/${prevLesson.lessonId}`}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors max-w-[45%]"
              >
                <ArrowLeft className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">{prevLesson.title}</span>
              </Link>
            ) : (
              <div />
            )}
            {nextLesson ? (
              <Link
                href={`/module/${nextLesson.moduleId}/lesson/${nextLesson.lessonId}`}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors max-w-[45%] text-right"
              >
                <span className="truncate">{nextLesson.title}</span>
                <ChevronRight className="w-4 h-4 flex-shrink-0" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
