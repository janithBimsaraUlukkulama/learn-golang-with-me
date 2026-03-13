"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { curriculum } from "@/data/curriculum";
import { CheckCircle, Circle, Home } from "lucide-react";

interface SidebarProps {
  isCompleted: (lessonId: string) => boolean;
  getModuleProgress: (moduleId: string) => {
    completed: number;
    total: number;
    percent: number;
  };
}

export default function Sidebar({ isCompleted, getModuleProgress }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-gray-950 border-r border-gray-800 h-screen overflow-y-auto fixed left-0 top-0 hidden lg:block">
      <div className="p-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-white font-bold text-lg mb-6 hover:text-blue-400 transition-colors"
        >
          <Home className="w-5 h-5" />
          GoLearn
        </Link>

        <nav className="space-y-4">
          {curriculum.map((mod) => {
            const prog = getModuleProgress(mod.id);
            const isModActive = pathname.startsWith(`/module/${mod.id}`);

            return (
              <div key={mod.id}>
                <Link href={`/module/${mod.id}`}>
                  <div
                    className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      isModActive
                        ? "text-blue-400 bg-blue-500/10"
                        : "text-gray-400 hover:text-gray-200"
                    }`}
                  >
                    <span>{mod.icon}</span>
                    <span className="flex-1 truncate">{mod.title}</span>
                    {prog.percent === 100 && (
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                    )}
                    {prog.percent > 0 && prog.percent < 100 && (
                      <span className="text-xs text-gray-600 font-mono">
                        {prog.percent}%
                      </span>
                    )}
                  </div>
                </Link>

                {isModActive && (
                  <div className="ml-6 mt-1 space-y-0.5 border-l border-gray-800 pl-3">
                    {mod.lessons.map((lesson) => {
                      const isActive = pathname.includes(lesson.id);
                      const done = isCompleted(lesson.id);

                      return (
                        <Link
                          key={lesson.id}
                          href={`/module/${mod.id}/lesson/${lesson.id}`}
                        >
                          <div
                            className={`flex items-center gap-2 px-2 py-1 rounded text-xs transition-colors ${
                              isActive
                                ? "text-white bg-gray-800"
                                : "text-gray-500 hover:text-gray-300"
                            }`}
                          >
                            {done ? (
                              <CheckCircle className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                            ) : (
                              <Circle className="w-3 h-3 flex-shrink-0" />
                            )}
                            <span className="truncate">{lesson.title}</span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
