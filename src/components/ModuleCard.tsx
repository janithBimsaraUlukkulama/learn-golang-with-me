"use client";

import Link from "next/link";
import { Module } from "@/data/curriculum";
import ProgressBar from "./ProgressBar";
import { CheckCircle, ChevronRight, Clock } from "lucide-react";

interface ModuleCardProps {
  module: Module;
  index: number;
  progress: { completed: number; total: number; percent: number };
}

export default function ModuleCard({ module, index, progress }: ModuleCardProps) {
  const isComplete = progress.percent === 100;
  const totalMinutes = module.lessons.reduce((sum, l) => sum + l.estimatedMinutes, 0);

  return (
    <Link href={`/module/${module.id}`}>
      <div
        className={`group relative rounded-xl border p-6 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10 ${
          isComplete
            ? "border-emerald-500/30 bg-emerald-500/5"
            : "border-gray-800 bg-gray-900/50 hover:border-gray-700"
        }`}
      >
        <div className="flex items-start gap-4">
          <div className="text-3xl flex-shrink-0">{module.icon}</div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono text-gray-500">
                MODULE {String(index + 1).padStart(2, "0")}
              </span>
              {isComplete && (
                <CheckCircle className="w-4 h-4 text-emerald-500" />
              )}
            </div>
            <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
              {module.title}
            </h3>
            <p className="text-sm text-gray-400 mt-1 line-clamp-2">
              {module.description}
            </p>

            <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
              <span>{module.lessons.length} lessons</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {totalMinutes} min
              </span>
              <span>
                {progress.completed}/{progress.total} done
              </span>
            </div>

            <div className="mt-3">
              <ProgressBar percent={progress.percent} size="sm" showLabel={false} />
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-blue-400 transition-colors flex-shrink-0 mt-1" />
        </div>
      </div>
    </Link>
  );
}
