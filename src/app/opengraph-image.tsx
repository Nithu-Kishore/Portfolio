import { ImageResponse } from "next/og";

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
        <div style={{ fontSize: 64, fontWeight: 500, letterSpacing: "-0.035em" }}>
          Nithu S Kishore
        </div>
        <div style={{ marginTop: 20, fontSize: 32, color: "#a3a3a0" }}>Product designer</div>
        <div style={{ marginTop: 28, fontSize: 24, color: "#a3a3a0", maxWidth: 820 }}>
          I design for people who are too busy to think, starting with doctors.
        </div>
      </div>
    ),
    { ...size }
  );
}
