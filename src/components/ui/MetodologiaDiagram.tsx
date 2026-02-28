"use client";

const steps = [
  "Diagnóstico",
  "Diseño",
  "Implementación",
  "Optimización"
];

const ACCENT = "#059669";
const MUTED = "#6b7280";

export function MetodologiaDiagram() {
  return (
    <div className="mx-auto w-full max-w-2xl" aria-hidden>
      <svg viewBox="0 0 500 100" className="h-auto w-full" fill="none">
        <defs>
          <linearGradient id="metLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={ACCENT} stopOpacity="0.4" />
            <stop offset="100%" stopColor={ACCENT} stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <path
          d="M 50 50 L 183 50 L 317 50 L 450 50"
          stroke="url(#metLineGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {steps.map((label, i) => {
          const x = 50 + i * 133.33;
          const y = 50;
          return (
            <g key={label}>
              <circle
                cx={x}
                cy={y}
                r="12"
                fill="white"
                stroke={ACCENT}
                strokeWidth="2"
              />
              <text
                x={x}
                y={y + 28}
                textAnchor="middle"
                fill={MUTED}
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: "9px",
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
