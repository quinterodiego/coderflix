/**
 * CSS crítico inline como fallback para cuando el bundle de Tailwind
 * no se sirve correctamente en producción (ej. Vercel).
 * Se inyecta en el HTML y siempre se aplica.
 */
export const CRITICAL_CSS = `
:root {
  --foreground: #050608;
  --muted: #6b7280;
  --neutral-200: #e5e7eb;
  --neutral-50: #f9fafb;
  --neutral-400: #a3a3a3;
  --accent: #0f172a;
}
* { box-sizing: border-box; }
html, body {
  margin: 0;
  padding: 0;
  background: #fff;
  color: var(--foreground);
  font-family: Inter, system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
}
.page-shell { min-height: 100vh; background: #fff; color: var(--foreground); }
.container {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 72rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
@media (min-width: 640px) {
  .container { padding-left: 1.5rem; padding-right: 1.5rem; }
}
@media (min-width: 1024px) {
  .container { padding-left: 2rem; padding-right: 2rem; }
}
.section-padding {
  padding-top: 6rem;
  padding-bottom: 6rem;
}
@media (min-width: 640px) {
  .section-padding { padding-top: 8rem; padding-bottom: 8rem; }
}
.bg-\\#f7f7f7 { background-color: #f7f7f7; }
/* Utilidades de texto */
.text-foreground { color: var(--foreground); }
.text-muted { color: var(--muted); }
.text-xs { font-size: 0.75rem; line-height: 1rem; }
.text-sm { font-size: 0.875rem; line-height: 1.25rem; }
.text-base { font-size: 1rem; line-height: 1.5rem; }
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.uppercase { text-transform: uppercase; }
.tracking-tight { letter-spacing: -0.025em; }
.leading-relaxed { line-height: 1.625; }
/* Tamaños de heading */
.text-2xl { font-size: 1.5rem; line-height: 2rem; }
.text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
.text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
.text-5xl { font-size: 3rem; line-height: 1.1; }
.text-6xl { font-size: 3.75rem; line-height: 1.1; }
.text-lg { font-size: 1.125rem; line-height: 1.75rem; }
.text-xl { font-size: 1.25rem; line-height: 1.75rem; }
@media (min-width: 640px) {
  .sm\\:text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
  .sm\\:text-5xl { font-size: 3rem; line-height: 1.1; }
  .sm\\:text-base { font-size: 1rem; line-height: 1.5rem; }
  .sm\\:text-xl { font-size: 1.25rem; line-height: 1.75rem; }
}
@media (min-width: 1024px) {
  .lg\\:text-6xl { font-size: 3.75rem; line-height: 1.1; }
  .lg\\:leading-\\[1\\.1\\] { line-height: 1.1; }
}
.max-w-xl { max-width: 36rem; }
.max-w-2xl { max-width: 42rem; }
.max-w-3xl { max-width: 48rem; }
/* Espaciado */
.gap-3 { gap: 0.75rem; }
.gap-4 { gap: 1rem; }
.gap-6 { gap: 1.5rem; }
.gap-10 { gap: 2.5rem; }
.gap-12 { gap: 3rem; }
.space-y-5 > * + * { margin-top: 1.25rem; }
.space-y-2 > * + * { margin-top: 0.5rem; }
.space-y-3 > * + * { margin-top: 0.75rem; }
.mt-1 { margin-top: 0.25rem; }
.mt-2 { margin-top: 0.5rem; }
.mt-3 { margin-top: 0.75rem; }
.mt-4 { margin-top: 1rem; }
.mt-6 { margin-top: 1.5rem; }
.mt-8 { margin-top: 2rem; }
.px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
.px-5 { padding-left: 1.25rem; padding-right: 1.25rem; }
.px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
.py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
.py-2\\.5 { padding-top: 0.625rem; padding-bottom: 0.625rem; }
.py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
.py-8 { padding-top: 2rem; padding-bottom: 2rem; }
.pt-4 { padding-top: 1rem; }
.pt-8 { padding-top: 2rem; }
.pb-20 { padding-bottom: 5rem; }
.tracking-\\[0\\.16em\\] { letter-spacing: 0.16em; }
.tracking-\\[0\\.18em\\] { letter-spacing: 0.18em; }
.tracking-\\[0\\.2em\\] { letter-spacing: 0.2em; }
/* Flex / Grid */
.flex { display: flex; }
.flex-wrap { flex-wrap: wrap; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.items-end { align-items: flex-end; }
.items-start { align-items: flex-start; }
.justify-between { justify-content: space-between; }
.justify-center { justify-content: center; }
.grid { display: grid; }
.grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
@media (min-width: 640px) {
  .sm\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .sm\\:flex-row { flex-direction: row; }
  .pb-28 { padding-bottom: 7rem; }
  .pt-16 { padding-top: 4rem; }
}
@media (min-width: 1024px) {
  .lg\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .lg\\:items-end { align-items: flex-end; }
  .lg\\:items-start { align-items: flex-start; }
  .sm\\:px-8 { padding-left: 2rem; padding-right: 2rem; }
  .sm\\:py-7 { padding-top: 1.75rem; padding-bottom: 1.75rem; }
}
/* Grids con columnas custom (clases Tailwind arbitrarias) */
@media (min-width: 1024px) {
  [class*="lg:grid-cols-[minmax(0,1.4fr)"] { grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr); }
  [class*="lg:grid-cols-[minmax(0,1.1fr)"] { grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.2fr); }
}
/* Bordes y fondos */
.border { border-width: 1px; border-color: var(--neutral-200); }
.border-b { border-bottom-width: 1px; border-color: var(--neutral-200); }
.border-t { border-top-width: 1px; border-color: var(--neutral-200); }
.bg-white { background-color: #fff; }
.bg-neutral-50 { background-color: var(--neutral-50); }
.bg-foreground { background-color: var(--foreground); }
.bg-white\\/60 { background-color: rgba(255,255,255,0.6); }
.rounded-full { border-radius: 9999px; }
/* Botones y enlaces */
a { color: inherit; text-decoration: none; }
a:hover { color: var(--foreground); }
.inline-flex { display: inline-flex; }
.rounded-full.bg-foreground { color: #fff !important; background-color: var(--foreground) !important; }
.rounded-full.bg-foreground:hover { background-color: var(--accent) !important; }
.px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
.px-8 { padding-left: 2rem; padding-right: 2rem; }
.py-4 { padding-top: 1rem; padding-bottom: 1rem; }
.pb-28 { padding-bottom: 7rem; }
.pt-16 { padding-top: 4rem; }
.pb-36 { padding-bottom: 9rem; }
.pt-24 { padding-top: 6rem; }
.mt-12 { margin-top: 3rem; }
.mt-8 { margin-top: 2rem; }
.gap-8 { gap: 2rem; }
.space-y-8 > * + * { margin-top: 2rem; }
.space-y-10 > * + * { margin-top: 2.5rem; }
@media (min-width: 640px) {
  .sm\\:pb-36 { padding-bottom: 9rem; }
  .sm\\:pt-24 { padding-top: 6rem; }
}
@media (min-width: 1024px) {
  .lg\\:pb-40 { padding-bottom: 10rem; }
  .lg\\:pt-32 { padding-top: 8rem; }
}
.shrink-0 { flex-shrink: 0; }
.mt-1\\.5 { margin-top: 0.375rem; }
.space-y-4 > * + * { margin-top: 1rem; }
.pb-8 { padding-bottom: 2rem; }
.gap-6 { gap: 1.5rem; }
.gap-10 { gap: 2.5rem; }
.sm\\:gap-10 { gap: 2.5rem; }
.sm\\:gap-16 { gap: 4rem; }
.flex-col { flex-direction: column; }
.sm\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
ol.flex.flex-col li:last-child { border-bottom-width: 0; padding-bottom: 0; }
.min-w-0 { min-width: 0; }
.flex-1 { flex: 1 1 0%; }
.tracking-\\[0\\.14em\\] { letter-spacing: 0.14em; }
.pt-8 { padding-top: 2rem; }
.inline-block { display: inline-block; }
/* Listas */
ul { list-style: none; margin: 0; padding: 0; }
/* Pequeños */
.text-\\[0\\.65rem\\] { font-size: 0.65rem; }
.text-\\[0\\.7rem\\] { font-size: 0.7rem; }
/* CTA / centrado */
.text-center { text-align: center; }
.mx-auto { margin-left: auto; margin-right: auto; }
@media (min-width: 640px) {
  .sm\\:justify-center { justify-content: center; }
}
/* List bullets */
.flex.gap-2 .rounded-full.bg-foreground { width: 0.375rem; height: 0.375rem; border-radius: 9999px; background: var(--foreground); flex-shrink: 0; margin-top: 0.25rem; }
.flex.gap-2 .rounded-full.bg-neutral-400 { width: 0.375rem; height: 0.375rem; border-radius: 9999px; background: var(--neutral-400); flex-shrink: 0; margin-top: 0.25rem; }
`;
