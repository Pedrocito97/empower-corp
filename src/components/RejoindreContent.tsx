"use client";

import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

export default function RejoindreContent() {
  return (
    <>
      {/* CTA section */}
      <section style={{ paddingBottom: "120px", position: "relative", overflow: "hidden" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <p style={{ color: "#999", fontSize: "16px", lineHeight: 1.85, marginBottom: "32px" }}>
                  Empower Corp recrute des personnes motivées qui souhaitent développer
                  leurs compétences commerciales, évoluer rapidement et participer à la
                  croissance d&apos;une organisation ambitieuse.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px" }}>
                  {[
                    "Formation complète dès le premier jour",
                    "Rémunération à la performance, versée chaque semaine",
                    "Possibilités d'évolution vers le management",
                    "Environnement dynamique et stimulant",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{ color: "#c8a97e", fontSize: "14px" }}>—</span>
                      <span style={{ fontSize: "15px", color: "#bbb" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="mailto:contact@empowercorp.fr"
                  style={{
                    display: "inline-block",
                    padding: "14px 32px",
                    background: "#c8a97e",
                    color: "#050505",
                    fontWeight: 600,
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "background 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#ddc5a3")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#c8a97e")}
                >
                  Postuler maintenant
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden", aspectRatio: "4/5" }}>
                <Image
                  src="/images/team-group.jpg"
                  alt="Équipe Empower Corp"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Agences */}
      <section style={{ paddingTop: "120px", paddingBottom: "120px" }}>
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
                {["Angers", "Tours", "Rouen"].map((city, i) => (
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
    </>
  );
}
