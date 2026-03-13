"use client";

import { use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { curriculum } from "@/data/curriculum";
import { useProgress } from "@/hooks/useProgress";
import ProgressBar from "@/components/ProgressBar";
import Sidebar from "@/components/Sidebar";
import {
  ArrowLeft,
  CheckCircle,
  Circle,
  Clock,
  ChevronRight,
} from "lucide-react";

export default function ModulePage({
  params,
}: {
  params: Promise<{ moduleId: string }>;
}) {
  const { moduleId } = use(params);
  const router = useRouter();
  const { loaded, isCompleted, getModuleProgress, toggleLesson } = useProgress();
  const module = curriculum.find((m) => m.id === moduleId);

  if (!loaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </div>
    );
  }

  if (!module) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-2">Module Not Found</h1>
          <Link href="/" className="text-blue-400 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const progress = getModuleProgress(moduleId);
  const moduleIndex = curriculum.findIndex((m) => m.id === moduleId);
  const prevModule = moduleIndex > 0 ? curriculum[moduleIndex - 1] : null;
  const nextModule =
    moduleIndex < curriculum.length - 1 ? curriculum[moduleIndex + 1] : null;

  return (
    <div className="flex min-h-screen">
      <Sidebar isCompleted={isCompleted} getModuleProgress={getModuleProgress} />

      <div className="flex-1 lg:ml-72">
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-300">{module.title}</span>
          </div>

          {/* Module Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl">{module.icon}</span>
              <div>
                <span className="text-xs font-mono text-gray-500 block">
                  MODULE {String(moduleIndex + 1).padStart(2, "0")}
                </span>
                <h1 className="text-3xl font-bold text-white">{module.title}</h1>
              </div>
            </div>
            <p className="text-gray-400 text-lg mt-2">{module.description}</p>

            <div className="mt-4">
              <ProgressBar
                percent={progress.percent}
                size="md"
                label={`${progress.completed} of ${progress.total} lessons completed`}
              />
            </div>
          </div>

          {/* Lessons List */}
          <div className="space-y-3">
            {module.lessons.map((lesson, index) => {
              const completed = isCompleted(lesson.id);

              return (
                <div
                  key={lesson.id}
                  className={`rounded-xl border p-5 transition-all ${
                    completed
                      ? "border-emerald-500/20 bg-emerald-500/5"
                      : "border-gray-800 bg-gray-900/30 hover:border-gray-700"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Completion toggle */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLesson(lesson.id);
                      }}
                      className="mt-0.5 flex-shrink-0"
                      title={completed ? "Mark incomplete" : "Mark complete"}
                    >
                      {completed ? (
                        <CheckCircle className="w-6 h-6 text-emerald-500" />
                      ) : (
                        <Circle className="w-6 h-6 text-gray-600 hover:text-blue-400 transition-colors" />
                      )}
                    </button>

                    {/* Lesson info */}
                    <Link
                      href={`/module/${moduleId}/lesson/${lesson.id}`}
                      className="flex-1 group"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-gray-600">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3
                          className={`font-semibold group-hover:text-blue-400 transition-colors ${
                            completed ? "text-gray-400" : "text-white"
                          }`}
                        >
                          {lesson.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-500 line-clamp-2">
                        {lesson.description}
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-gray-600">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {lesson.estimatedMinutes} min
                        </span>
                        <span>{lesson.resources.length} resources</span>
                        {lesson.challenge && (
                          <span className="text-amber-500/70">Has challenge</span>
                        )}
                      </div>
                    </Link>

                    <Link
                      href={`/module/${moduleId}/lesson/${lesson.id}`}
                      className="flex-shrink-0 mt-1"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-700 hover:text-blue-400 transition-colors" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-800">
            {prevModule ? (
              <Link
                href={`/module/${prevModule.id}`}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {prevModule.title}
              </Link>
            ) : (
              <Link
                href="/"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Home
              </Link>
            )}
            {nextModule && (
              <Link
                href={`/module/${nextModule.id}`}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                {nextModule.title}
                <ChevronRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
