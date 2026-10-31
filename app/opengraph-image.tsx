import { ImageResponse } from "next/og";

export const alt = "Elina Hair & Beauty · Kervansaray AVM, Palandöken / Erzurum";
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
          background: "#f7f3ee",
          color: "#22201d",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 48,
            right: 56,
            display: "flex",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#3f4a3a",
            border: "2px solid #56634f",
            padding: "6px 16px",
          }}
        >
          Demo
        </div>
        <div style={{ display: "flex", width: 96, height: 6, background: "#56634f" }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 108, lineHeight: 1.05, fontWeight: 700, letterSpacing: -2 }}>
            Elina Hair & Beauty
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 38, color: "#56634f" }}>
            Kervansaray AVM · Palandöken / Erzurum
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#33302c" }}>
          Saç · Lazer · Hydrafacial · Kirpik · Tırnak
        </div>
      </div>
    ),
    { ...size },
  );
}
