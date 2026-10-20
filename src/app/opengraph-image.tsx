import { ImageResponse } from "next/og";

// Imagen de vista previa al compartir el link (WhatsApp, LinkedIn, etc.).
// Next la sirve como og:image automáticamente.
// Edge: el runtime de Node de @vercel/og falla al buildear en Windows con
// rutas que tienen espacios.
export const runtime = "edge";
export const alt = "Diego Quintero | Soluciones tecnológicas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "rgb(26 24 20)",
          color: "rgb(245 241 234)"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "rgb(168 160 148)"
          }}
        >
          <div style={{ width: 48, height: 2, background: "rgb(168 160 148)" }} />
          Sitios web · Automatizaciones · Sistemas a medida
        </div>

        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.1, maxWidth: 950 }}>
          Tecnología para que tu negocio funcione mejor.
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700 }}>Diego Quintero</div>
          <div
            style={{
              display: "flex",
              padding: "14px 32px",
              borderRadius: 999,
              background: "rgb(47 79 62)",
              color: "rgb(250 248 245)",
              fontSize: 26
            }}
          >
            diegoquintero.com.ar
          </div>
        </div>
      </div>
    ),
    size
  );
}
