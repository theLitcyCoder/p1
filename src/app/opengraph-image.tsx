import { ImageResponse } from "next/og";

export const alt = "Djenic Photography — Stories worth remembering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", background: "#f5f2ed", color: "#242521", padding: "88px", border: "20px solid #e9e3da" }}>
        <div style={{ fontSize: 24, letterSpacing: "0.35em", fontFamily: "sans-serif" }}>DJENIC</div>
        <div style={{ fontSize: 13, letterSpacing: "0.5em", marginTop: 14, fontFamily: "sans-serif" }}>PHOTOGRAPHY</div>
        <div style={{ fontSize: 78, lineHeight: 1.04, letterSpacing: "-0.04em", marginTop: 66, fontFamily: "Georgia, serif" }}>Stories worth</div>
        <div style={{ fontSize: 78, lineHeight: 1.04, letterSpacing: "-0.04em", fontStyle: "italic", fontFamily: "Georgia, serif" }}>remembering.</div>
        <div style={{ fontSize: 15, letterSpacing: "0.16em", marginTop: 36, fontFamily: "sans-serif" }}>PHOTOGRAPHY WITH FEELING</div>
      </div>
    ),
    { ...size }
  );
}
