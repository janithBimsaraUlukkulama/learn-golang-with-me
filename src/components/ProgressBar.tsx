"use client";

interface ProgressBarProps {
  percent: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  label?: string;
}

export default function ProgressBar({
  percent,
  size = "md",
  showLabel = true,
  label,
}: ProgressBarProps) {
  const heights = { sm: "h-1.5", md: "h-3", lg: "h-5" };

  const color =
    percent === 100
      ? "bg-emerald-500"
      : percent > 60
        ? "bg-blue-500"
        : percent > 30
          ? "bg-amber-500"
          : "bg-gray-400";

  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between text-xs mb-1">
          <span className="text-gray-400">{label}</span>
          <span className="text-gray-400 font-mono">{percent}%</span>
        </div>
      )}
      <div className={`w-full bg-gray-800 rounded-full ${heights[size]} overflow-hidden`}>
        <div
          className={`${heights[size]} ${color} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
