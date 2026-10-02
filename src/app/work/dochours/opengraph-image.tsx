import { ImageResponse } from "next/og";
import { dochours } from "@/content/dochours";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#111111",
          color: "#ededea",
          fontFamily: "Geist, system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: "0.06em", textTransform: "uppercase", color: "#8a8a86" }}>
          {dochours.hero.label}
        </div>
        <div style={{ marginTop: 24, fontSize: 52, fontWeight: 500, letterSpacing: "-0.035em", maxWidth: 980 }}>
          {dochours.hero.title}
        </div>
        <div style={{ marginTop: 28, fontSize: 24, color: "#a3a3a0" }}>Nithu S Kishore</div>
      </div>
    ),
    { ...size }
  );
}
