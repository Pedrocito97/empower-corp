"use client";

import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

const moments = [
  { time: "Matin", title: "Préparation", desc: "Formation, jeux de rôle, pitchs de vente et thème du jour." },
  { time: "Journée", title: "Terrain", desc: "Les équipes partent par secteur — résidentiel ou événementiel." },
  { time: "En binôme", title: "Apprentissage", desc: "Activités en duo pour favoriser le partage d'expérience." },
  { time: "Soir", title: "Bilan", desc: "Échange sur les résultats et les apprentissages de la journée." },
];

export default function JourneeType() {
  return (
    <section style={{ paddingTop: "120px", paddingBottom: "120px", background: "#0a0a0a" }}>
      <div className="container-main">
        <AnimatedSection>
          <p style={{ color: "#c8a97e", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "24px" }}>
            Au quotidien
          </p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.25, maxWidth: "400px" }}>
            Une journée type chez Empower Corp
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16" style={{ marginTop: "56px" }}>
          {/* Steps */}
          <AnimatedSection delay={0.1}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {moments.map((m, i) => (
                <div
                  key={m.title}
                  style={{
                    padding: "24px 0",
                    borderBottom: "1px solid #1a1a1a",
                    borderTop: i === 0 ? "1px solid #1a1a1a" : "none",
                    display: "grid",
                    gridTemplateColumns: "80px 1fr",
                    gap: "12px",
                    alignItems: "start",
                  }}
                >
                  <span style={{ fontSize: "11px", color: "#c8a97e", textTransform: "uppercase", letterSpacing: "0.08em", paddingTop: "3px" }}>
                    {m.time}
                  </span>
                  <div>
                    <p style={{ fontSize: "16px", fontWeight: 600, marginBottom: "4px" }}>{m.title}</p>
                    <p style={{ fontSize: "14px", color: "#888", lineHeight: 1.65 }}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Photos */}
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 gap-3">
              <div style={{ borderRadius: "10px", overflow: "hidden", aspectRatio: "3/4", position: "relative" }}>
                <Image
                  src="/images/team-event-purple.jpg"
                  alt="Événement équipe"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ borderRadius: "10px", overflow: "hidden", aspectRatio: "3/4", position: "relative", marginTop: "32px" }}>
                <Image
                  src="/images/team-outdoor.jpg"
                  alt="Équipe en extérieur"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
