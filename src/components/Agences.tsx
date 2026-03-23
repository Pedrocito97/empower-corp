"use client";

import AnimatedSection from "./AnimatedSection";

export default function Agences() {
  return (
    <section id="agences" style={{ paddingTop: "120px", paddingBottom: "120px", background: "#0a0a0a" }}>
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div>
            <AnimatedSection>
              <p style={{ color: "#c8a97e", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "24px" }}>
                Implantations
              </p>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.25 }}>
                Nos agences
              </h2>
              <p style={{ marginTop: "20px", color: "#999", fontSize: "15px", lineHeight: 1.85 }}>
                À travers la formation, la performance et le leadership,
                Empower Corp participe à la création et au développement
                de nouvelles agences marketing.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.15}>
            <div>
              {/* Active */}
              <p style={{ fontSize: "11px", color: "#888", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px" }}>
                Agences actuelles
              </p>
              {["Rennes", "Nantes"].map((city, i) => (
                <div
                  key={city}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "18px 0",
                    borderTop: i === 0 ? "1px solid #1a1a1a" : "none",
                    borderBottom: "1px solid #1a1a1a",
                  }}
                >
                  <span style={{ fontSize: "16px", fontWeight: 500 }}>{city}</span>
                  <span style={{ fontSize: "11px", color: "#c8a97e", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Active
                  </span>
                </div>
              ))}

              {/* Upcoming */}
              <p style={{ fontSize: "11px", color: "#888", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px", marginTop: "40px" }}>
                Futures ouvertures
              </p>
              {["Angers", "Caen", "Rouen", "Tours", "Brest"].map((city, i) => (
                <div
                  key={city}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "18px 0",
                    borderTop: i === 0 ? "1px solid #1a1a1a" : "none",
                    borderBottom: "1px solid #1a1a1a",
                  }}
                >
                  <span style={{ fontSize: "16px", fontWeight: 500, color: "#898989" }}>{city}</span>
                  <span style={{ fontSize: "11px", color: "#898989", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Bientôt
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
