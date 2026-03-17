"use client";

import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

export default function Histoire() {
  return (
    <section id="histoire" style={{ paddingTop: "140px", paddingBottom: "140px" }}>
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <AnimatedSection>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  position: "relative",
                  aspectRatio: "3/4",
                  maxWidth: "420px",
                }}
              >
                <Image
                  src="/images/tristan-winner.jpg"
                  alt="Tristan Escutary, fondateur d'Empower Corp"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              {/* Caption below image */}
              <div style={{ marginTop: "20px" }}>
                <p style={{ fontSize: "16px", fontWeight: 600 }}>Tristan Escutary</p>
                <p style={{ fontSize: "13px", color: "#888", marginTop: "2px" }}>
                  Fondateur &amp; CEO, Empower Corp
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Text */}
          <div>
            <AnimatedSection>
              <p style={{ color: "#c8a97e", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "24px" }}>
                Notre histoire
              </p>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                Depuis 2019
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <p style={{ color: "#aaa", fontSize: "16px", lineHeight: 1.85 }}>
                  Créée en 2019 par Tristan Escutary, Empower Corp est une entreprise
                  de marketing direct spécialisée dans la vente, la formation et le
                  coaching d&apos;équipes commerciales.
                </p>
                <p style={{ color: "#aaa", fontSize: "16px", lineHeight: 1.85 }}>
                  Depuis sa création, l&apos;entreprise a réalisé plus de 50 000
                  acquisitions clients grâce à la vente directe, et s&apos;inscrit
                  dans un réseau international d&apos;organisations présent dans
                  plusieurs pays d&apos;Europe.
                </p>
              </div>
            </AnimatedSection>

            {/* Timeline mini */}
            <AnimatedSection delay={0.2}>
              <div style={{ marginTop: "48px", display: "flex", flexDirection: "column", gap: "0" }}>
                {[
                  { year: "2019", event: "Création d'Empower Corp à Rennes" },
                  { year: "2021", event: "Ouverture de l'agence de Nantes" },
                  { year: "2024", event: "50 000 acquisitions atteintes" },
                  { year: "2026", event: "Expansion vers Angers, Tours et Rouen" },
                ].map((item, i) => (
                  <div
                    key={item.year}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "20px",
                      padding: "16px 0",
                      borderTop: i === 0 ? "1px solid #1a1a1a" : "none",
                      borderBottom: "1px solid #1a1a1a",
                    }}
                  >
                    <span style={{ fontSize: "13px", fontWeight: 600, color: "#c8a97e", minWidth: "44px", fontFamily: "var(--font-mono), monospace" }}>
                      {item.year}
                    </span>
                    <span style={{ fontSize: "14px", color: "#999" }}>{item.event}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
