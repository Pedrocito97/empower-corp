"use client";

import AnimatedSection from "./AnimatedSection";

export default function Partenaires() {
  return (
    <section
      id="partenaires"
      style={{ paddingTop: "120px", paddingBottom: "120px", background: "#0a0a0a" }}
    >
      <div className="container-main">
        <AnimatedSection>
          <p style={{ color: "#c8a97e", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "24px" }}>
            Nos partenaires
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <AnimatedSection delay={0.1}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.25 }}>
              Nous accompagnons entreprises, organisations et ONG dans leur
              acquisition de nouveaux clients.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div>
              <p style={{ color: "#999", fontSize: "15px", lineHeight: 1.85 }}>
                À travers la vente directe, nos équipes représentent ces organisations
                afin de présenter leurs services, sensibiliser le public et développer
                leur base de clients ou de donateurs.
              </p>

              <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  { num: "50 000+", text: "acquisitions réalisées depuis la création" },
                  { num: "2", text: "canaux principaux : événementiel et résidentiel" },
                ].map((item) => (
                  <div key={item.num} style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
                    <span style={{ fontSize: "28px", fontWeight: 600, color: "#c8a97e", minWidth: "100px" }}>
                      {item.num}
                    </span>
                    <span style={{ fontSize: "14px", color: "#888", lineHeight: 1.5 }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
