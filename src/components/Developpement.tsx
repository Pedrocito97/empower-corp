"use client";

import AnimatedSection from "./AnimatedSection";

const formations = [
  "Développement des compétences commerciales",
  "Développement personnel et mindset",
  "Coaching et gestion d'équipe",
  "Bases de la gestion d'entreprise",
];

export default function Developpement() {
  return (
    <section style={{ paddingTop: "120px", paddingBottom: "120px", background: "#0a0a0a" }}>
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <AnimatedSection>
            <p style={{ color: "#c8a97e", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "24px" }}>
              Développement
            </p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.25 }}>
              Des formations chaque matin pour progresser en continu.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div>
              <p style={{ color: "#999", fontSize: "15px", lineHeight: 1.85, marginBottom: "32px" }}>
                Les membres de l&apos;organisation peuvent assister à des sessions
                quotidiennes portant sur différents thèmes, accessibles selon le
                niveau et l&apos;évolution de chacun.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {formations.map((f, i) => (
                  <div
                    key={f}
                    style={{
                      padding: "18px 0",
                      borderBottom: "1px solid #1a1a1a",
                      borderTop: i === 0 ? "1px solid #1a1a1a" : "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                    }}
                  >
                    <span style={{ fontSize: "12px", color: "#c8a97e", fontFamily: "var(--font-mono), monospace", minWidth: "24px" }}>
                      0{i + 1}
                    </span>
                    <span style={{ fontSize: "15px", color: "#ccc" }}>{f}</span>
                  </div>
                ))}
              </div>

              <p style={{ marginTop: "28px", fontSize: "14px", color: "#898989", lineHeight: 1.7 }}>
                En complément, les équipes participent à des séminaires et
                rencontres avec d&apos;autres équipes du réseau en Europe.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
