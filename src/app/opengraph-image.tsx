import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(251,68,53,1) 54%, rgba(245,245,245,1) 54%, rgba(255,255,255,1) 100%)",
          color: "#111111",
          fontFamily: "sans-serif",
          padding: "64px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            border: "1px solid rgba(255,255,255,0.24)",
            borderRadius: "28px",
            overflow: "hidden",
            background: "rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              width: "58%",
              padding: "56px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              color: "white",
            }}
          >
            <div style={{ fontSize: 26, letterSpacing: 4 }}>GEN-5 WIRES & CABLES</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05 }}>
                Reliable Wires for a Safer Tomorrow
              </div>
              <div style={{ fontSize: 28, opacity: 0.92 }}>
                Fire-resistant quality. Industrial durability. Trusted performance.
              </div>
            </div>
          </div>
          <div
            style={{
              width: "42%",
              padding: "48px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "18px",
              background:
                "radial-gradient(circle at top, rgba(251,68,53,0.16), transparent 40%), #ffffff",
            }}
          >
            {["ISO Certified", "Fire Resistant", "Multi-Strand Flexible", "Trusted Dealer Network"].map(
              (item) => (
                <div
                  key={item}
                  style={{
                    borderRadius: "999px",
                    border: "1px solid rgba(17,17,17,0.1)",
                    padding: "16px 20px",
                    fontSize: 28,
                    fontWeight: 700,
                    color: "#101010",
                    background: "rgba(255,255,255,0.85)",
                  }}
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
