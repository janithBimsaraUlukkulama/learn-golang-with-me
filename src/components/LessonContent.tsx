"use client";

import { useState } from "react";
import { Lesson } from "@/data/curriculum";
import {
  CheckCircle,
  Circle,
  Clock,
  ExternalLink,
  Video,
  BookOpen,
  FileText,
  Github,
  Play,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  StickyNote,
} from "lucide-react";

interface LessonContentProps {
  lesson: Lesson;
  completed: boolean;
  note: string;
  onToggle: () => void;
  onSaveNote: (note: string) => void;
}

const resourceIcons: Record<string, React.ReactNode> = {
  video: <Video className="w-4 h-4 text-red-400" />,
  article: <BookOpen className="w-4 h-4 text-blue-400" />,
  docs: <FileText className="w-4 h-4 text-green-400" />,
  playground: <Play className="w-4 h-4 text-purple-400" />,
  github: <Github className="w-4 h-4 text-gray-400" />,
};

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-1.5 rounded bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-600"
        title="Copy code"
      >
        {copied ? (
          <Check className="w-4 h-4 text-emerald-400" />
        ) : (
          <Copy className="w-4 h-4 text-gray-300" />
        )}
      </button>
      <pre className="bg-gray-950 border border-gray-800 rounded-lg p-4 overflow-x-auto text-sm">
        <code className="text-gray-300">{code}</code>
      </pre>
    </div>
  );
}

function MarkdownContent({ content }: { content: string }) {
  // Simple markdown rendering
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeContent: string[] = [];
  let inTable = false;
  let tableRows: string[][] = [];
  let key = 0;

  const flushTable = () => {
    if (tableRows.length > 0) {
      elements.push(
        <div key={key++} className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                {tableRows[0].map((cell, i) => (
                  <th
                    key={i}
                    className="border border-gray-700 bg-gray-800/50 px-3 py-2 text-left text-gray-300 font-medium"
                  >
                    {cell.trim()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.slice(2).map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="border border-gray-800 px-3 py-2 text-gray-400"
                    >
                      {cell.trim()}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
      inTable = false;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("```")) {
      if (inCodeBlock) {
        elements.push(<CodeBlock key={key++} code={codeContent.join("\n")} />);
        codeContent = [];
        inCodeBlock = false;
      } else {
        flushTable();
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeContent.push(line);
      continue;
    }

    // Table detection
    if (line.startsWith("|")) {
      inTable = true;
      tableRows.push(
        line
          .split("|")
          .filter((c) => c.trim() !== "")
      );
      continue;
    } else if (inTable) {
      flushTable();
    }

    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="text-lg font-semibold text-white mt-6 mb-2">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="text-xl font-bold text-white mt-8 mb-3">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("- **")) {
      const match = line.match(/^- \*\*(.+?)\*\*:?\s*(.*)/);
      if (match) {
        elements.push(
          <div key={key++} className="flex gap-2 ml-4 my-1">
            <span className="text-blue-400 mt-1">•</span>
            <span>
              <strong className="text-gray-200">{match[1]}</strong>
              {match[2] && (
                <span className="text-gray-400">: {match[2]}</span>
              )}
            </span>
          </div>
        );
      }
    } else if (line.startsWith("- ")) {
      elements.push(
        <div key={key++} className="flex gap-2 ml-4 my-1">
          <span className="text-blue-400 mt-1">•</span>
          <span className="text-gray-400">{line.slice(2)}</span>
        </div>
      );
    } else if (line.startsWith("> ")) {
      elements.push(
        <blockquote
          key={key++}
          className="border-l-2 border-blue-500 pl-4 my-4 text-gray-400 italic"
        >
          {line.slice(2)}
        </blockquote>
      );
    } else if (line.match(/^\d+\.\s/)) {
      const match = line.match(/^(\d+)\.\s\*\*(.+?)\*\*\s*[—–-]\s*(.*)/);
      if (match) {
        elements.push(
          <div key={key++} className="flex gap-2 ml-4 my-1">
            <span className="text-amber-400 font-mono text-sm w-5 flex-shrink-0">
              {match[1]}.
            </span>
            <span>
              <strong className="text-gray-200">{match[2]}</strong>
              <span className="text-gray-400"> — {match[3]}</span>
            </span>
          </div>
        );
      } else {
        const numMatch = line.match(/^(\d+)\.\s(.*)/);
        if (numMatch) {
          elements.push(
            <div key={key++} className="flex gap-2 ml-4 my-1">
              <span className="text-amber-400 font-mono text-sm w-5 flex-shrink-0">
                {numMatch[1]}.
              </span>
              <span className="text-gray-400">{numMatch[2]}</span>
            </div>
          );
        }
      }
    } else if (line.trim() === "") {
      elements.push(<div key={key++} className="h-2" />);
    } else {
      // Inline code
      const parts = line.split(/(`[^`]+`)/g);
      elements.push(
        <p key={key++} className="text-gray-400 my-1">
          {parts.map((part, pi) =>
            part.startsWith("`") && part.endsWith("`") ? (
              <code
                key={pi}
                className="bg-gray-800 text-amber-300 px-1.5 py-0.5 rounded text-sm font-mono"
              >
                {part.slice(1, -1)}
              </code>
            ) : (
              <span key={pi}>{part}</span>
            )
          )}
        </p>
      );
    }
  }

  flushTable();

  return <div className="space-y-0.5">{elements}</div>;
}

export default function LessonContent({
  lesson,
  completed,
  note,
  onToggle,
  onSaveNote,
}: LessonContentProps) {
  const [showHint, setShowHint] = useState(false);
  const [showNotes, setShowNotes] = useState(!!note);
  const [noteText, setNoteText] = useState(note);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
          <Clock className="w-4 h-4" />
          <span>{lesson.estimatedMinutes} min estimated</span>
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">{lesson.title}</h1>
        <p className="text-gray-400 text-lg">{lesson.description}</p>
      </div>

      {/* Main Content */}
      <div className="prose-invert max-w-none">
        <MarkdownContent content={lesson.content} />
      </div>

      {/* Code Example */}
      {lesson.codeExample && (
        <div>
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <Play className="w-5 h-5 text-emerald-400" />
            Try It Yourself
          </h3>
          <CodeBlock code={lesson.codeExample} />
          <p className="text-xs text-gray-500 mt-2">
            Copy this code into a <code className="text-amber-300">main.go</code> file and run with{" "}
            <code className="text-amber-300">go run main.go</code>
          </p>
        </div>
      )}

      {/* Challenge */}
      {lesson.challenge && (
        <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-amber-400 mb-2 flex items-center gap-2">
            🏋️ Challenge
          </h3>
          <p className="text-gray-300">{lesson.challenge}</p>
          {lesson.challengeHint && (
            <div className="mt-4">
              <button
                onClick={() => setShowHint(!showHint)}
                className="flex items-center gap-2 text-sm text-amber-500 hover:text-amber-400 transition-colors"
              >
                <Lightbulb className="w-4 h-4" />
                {showHint ? "Hide Hint" : "Show Hint"}
                {showHint ? (
                  <ChevronUp className="w-3 h-3" />
                ) : (
                  <ChevronDown className="w-3 h-3" />
                )}
              </button>
              {showHint && (
                <p className="mt-2 text-sm text-gray-400 bg-gray-900/50 rounded-lg p-3">
                  💡 {lesson.challengeHint}
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Resources */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">
          📚 Resources & References
        </h3>
        <div className="grid gap-2">
          {lesson.resources.map((resource, i) => (
            <a
              key={i}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-gray-700 hover:bg-gray-800/50 transition-all group"
            >
              {resourceIcons[resource.type]}
              <span className="flex-1 text-gray-300 group-hover:text-white transition-colors">
                {resource.title}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-gray-800 text-gray-500 uppercase">
                {resource.type}
              </span>
              <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors" />
            </a>
          ))}
        </div>
      </div>

      {/* Notes */}
      <div>
        <button
          onClick={() => setShowNotes(!showNotes)}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-300 transition-colors"
        >
          <StickyNote className="w-4 h-4" />
          {showNotes ? "Hide Notes" : "Add Personal Notes"}
        </button>
        {showNotes && (
          <div className="mt-3">
            <textarea
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              onBlur={() => onSaveNote(noteText)}
              className="w-full h-32 bg-gray-900 border border-gray-800 rounded-lg p-3 text-gray-300 text-sm resize-y focus:outline-none focus:border-blue-500 placeholder-gray-600"
              placeholder="Write your notes here... They'll be saved automatically."
            />
          </div>
        )}
      </div>

      {/* Mark Complete */}
      <div className="border-t border-gray-800 pt-6">
        <button
          onClick={onToggle}
          className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all ${
            completed
              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20"
              : "bg-blue-500/10 text-blue-400 border border-blue-500/30 hover:bg-blue-500/20"
          }`}
        >
          {completed ? (
            <>
              <CheckCircle className="w-5 h-5" />
              Completed — Click to Unmark
            </>
          ) : (
            <>
              <Circle className="w-5 h-5" />
              Mark as Complete
            </>
          )}
        </button>
      </div>
    </div>
  );
}
