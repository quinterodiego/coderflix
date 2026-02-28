"use client";

const steps = [
  "Diagnóstico",
  "Arquitectura",
  "Implementación",
  "Optimización",
  "Escalamiento"
];

const ACCENT = "#059669";
const BG = "#171717";
const MUTED = "#a3a3a3";

export function CoderflixGrowthSystemDiagram() {
  return (
    <div className="mx-auto w-full max-w-2xl" aria-hidden>
      <svg
        viewBox="0 0 600 180"
        className="h-auto w-full"
        fill="none"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={ACCENT} stopOpacity="0.3" />
            <stop offset="50%" stopColor={ACCENT} stopOpacity="0.9" />
            <stop offset="100%" stopColor={ACCENT} stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path
          d="M 60 140 Q 150 120, 240 100 T 420 60 T 540 40"
          stroke="url(#lineGrad)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        {steps.map((label, i) => {
          const x = 60 + i * 120;
          const y = 140 - i * 22;
          return (
            <g key={label}>
              <circle
                cx={x}
                cy={y}
                r="14"
                fill={BG}
                stroke={ACCENT}
                strokeWidth="2"
              />
              <text
                x={x}
                y={y + 32}
                textAnchor="middle"
                fill={MUTED}
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: "10px",
                  fontWeight: 500
                }}
              >
                {label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
