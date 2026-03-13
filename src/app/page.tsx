"use client";

import { curriculum } from "@/data/curriculum";
import { useProgress } from "@/hooks/useProgress";
import ModuleCard from "@/components/ModuleCard";
import ProgressBar from "@/components/ProgressBar";
import { BookOpen, Trophy, Clock, RotateCcw, Flame, Github, Star, GitFork, Heart } from "lucide-react";

export default function Home() {
  const { loaded, getModuleProgress, getOverallProgress, resetProgress, progress } =
    useProgress();

  if (!loaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </div>
    );
  }

  const overall = getOverallProgress();
  const totalMinutes = curriculum.reduce(
    (sum, m) => sum + m.lessons.reduce((s, l) => s + l.estimatedMinutes, 0),
    0
  );
  const totalHours = Math.round(totalMinutes / 60);
  const completedLessons = overall.completed;

  // Calculate streak (days with activity)
  const daysSinceStart = Math.floor(
    (Date.now() - new Date(progress.startedAt).getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="border-b border-gray-800 bg-gray-950">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xl">
              🐹
            </div>
            <h1 className="text-3xl font-bold text-white">GoLearn</h1>
          </div>
          <p className="text-gray-400 text-lg mt-2 max-w-2xl">
            Master Go from zero to production. Interactive lessons, hands-on challenges,
            and real-world projects — all with progress tracking.
          </p>

          {/* GitHub Links */}
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <a
              href="https://github.com/janithBimsaraUlukkulama/learn-golang-with-me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 transition-all text-sm"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
            <a
              href="https://github.com/janithBimsaraUlukkulama/learn-golang-with-me/stargazers"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-300 hover:text-amber-400 hover:border-amber-500/40 transition-all text-sm"
            >
              <Star className="w-4 h-4" />
              Star
            </a>
            <a
              href="https://github.com/janithBimsaraUlukkulama/learn-golang-with-me/fork"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-300 hover:text-blue-400 hover:border-blue-500/40 transition-all text-sm"
            >
              <GitFork className="w-4 h-4" />
              Fork
            </a>
            <a
              href="https://github.com/sponsors/janithBimsaraUlukkulama"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-400 hover:text-pink-300 hover:border-pink-500/40 transition-all text-sm"
            >
              <Heart className="w-4 h-4" />
              Sponsor
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                <BookOpen className="w-4 h-4" />
                Lessons
              </div>
              <div className="text-2xl font-bold text-white">
                {completedLessons}
                <span className="text-gray-600 text-lg">/{overall.total}</span>
              </div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                <Trophy className="w-4 h-4" />
                Progress
              </div>
              <div className="text-2xl font-bold text-white">{overall.percent}%</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                <Clock className="w-4 h-4" />
                Total Time
              </div>
              <div className="text-2xl font-bold text-white">~{totalHours}h</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                <Flame className="w-4 h-4" />
                Days Active
              </div>
              <div className="text-2xl font-bold text-white">
                {daysSinceStart > 0 ? daysSinceStart : 1}
              </div>
            </div>
          </div>

          {/* Overall Progress */}
          <div className="mt-6">
            <ProgressBar
              percent={overall.percent}
              size="lg"
              label={`${overall.completed} of ${overall.total} lessons completed`}
            />
          </div>
        </div>
      </header>

      {/* Module List */}
      <main className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Learning Path</h2>
          {overall.completed > 0 && (
            <button
              onClick={() => {
                if (confirm("Reset all progress? This cannot be undone.")) {
                  resetProgress();
                }
              }}
              className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-red-400 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              Reset Progress
            </button>
          )}
        </div>

        <div className="grid gap-4">
          {curriculum.map((module, index) => (
            <ModuleCard
              key={module.id}
              module={module}
              index={index}
              progress={getModuleProgress(module.id)}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-600 pb-8 space-y-2">
          <p>
            Built with Next.js. Progress is saved locally in your browser.
          </p>
          <p>
            Open source on{" "}
            <a
              href="https://github.com/janithBimsaraUlukkulama/learn-golang-with-me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors underline underline-offset-2"
            >
              GitHub
            </a>
            {" "} — contributions welcome!
          </p>
        </div>
      </main>
    </div>
  );
}
