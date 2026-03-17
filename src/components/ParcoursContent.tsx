"use client";

import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

const steps = [
  { title: "Fondation", desc: "Connaissance du produit, création du lien avec les consommateurs, bases de la vente directe." },
  { title: "Performance", desc: "Maîtrise des objections, constance dans les résultats, gestion du territoire et du temps." },
  { title: "Leader", desc: "Coaching et développement des autres, construction d'équipes, prise de responsabilités." },
  { title: "Développement", desc: "Coaching avancé, développement d'une équipe commerciale, initiation à la gestion d'une organisation." },
  { title: "Entrepreneuriat", desc: "Gestion d'entreprise, développement d'une nouvelle organisation, ouverture d'une agence marketing." },
];

const formations = [
  "Développement des compétences commerciales",
  "Développement personnel et mindset",
  "Coaching et gestion d'équipe",
  "Bases de la gestion d'entreprise",
];

const moments = [
  { time: "Matin", title: "Préparation", desc: "Formation, jeux de rôle, pitchs de vente et thème du jour." },
  { time: "Journée", title: "Terrain", desc: "Les équipes partent par secteur — résidentiel ou événementiel." },
  { time: "En binôme", title: "Apprentissage", desc: "Activités en duo pour favoriser le partage d'expérience." },
  { time: "Soir", title: "Bilan", desc: "Échange sur les résultats et les apprentissages de la journée." },
];

export default function ParcoursContent() {
  return (
    <>
      {/* Evolution steps */}
      <section style={{ paddingBottom: "120px" }}>
        <div className="container-main">
          {steps.map((step, i) => (
            <AnimatedSection key={step.title} delay={i * 0.06}>
              <div
                className="grid grid-cols-[48px_1fr] md:grid-cols-[60px_200px_1fr] gap-x-6 gap-y-2 items-start"
                style={{ padding: "32px 0", borderBottom: "1px solid #151515" }}
              >
                <span style={{ fontSize: "13px", fontWeight: 600, color: "#c8a97e", fontFamily: "var(--font-mono), monospace", paddingTop: "2px" }}>
                  0{i + 1}
                </span>
                <h3 style={{ fontSize: "20px", fontWeight: 600, lineHeight: 1.3 }}>{step.title}</h3>
                <p className="col-start-2 col-end-[-1] md:col-start-3" style={{ fontSize: "14px", color: "#888", lineHeight: 1.7 }}>
                  {step.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Formations */}
      <section style={{ paddingTop: "100px", paddingBottom: "100px", background: "#0a0a0a" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            <AnimatedSection>
              <p style={{ color: "#c8a97e", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "20px" }}>
                Développement
              </p>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 600, lineHeight: 1.3 }}>
                Des formations chaque matin pour progresser en continu.
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div>
                <p style={{ color: "#999", fontSize: "15px", lineHeight: 1.85, marginBottom: "32px" }}>
                  Les membres assistent à des sessions quotidiennes, accessibles selon le niveau et l&apos;évolution de chacun.
                </p>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {formations.map((f, i) => (
                    <div key={f} style={{ padding: "18px 0", borderBottom: "1px solid #1a1a1a", borderTop: i === 0 ? "1px solid #1a1a1a" : "none", display: "flex", alignItems: "center", gap: "16px" }}>
                      <span style={{ fontSize: "12px", color: "#c8a97e", fontFamily: "var(--font-mono), monospace", minWidth: "24px" }}>0{i + 1}</span>
                      <span style={{ fontSize: "15px", color: "#ccc" }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Journée type */}
      <section style={{ paddingTop: "120px", paddingBottom: "120px" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <AnimatedSection>
                <p style={{ color: "#c8a97e", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "20px" }}>
                  Au quotidien
                </p>
                <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 600, lineHeight: 1.3, marginBottom: "40px" }}>
                  Une journée type chez Empower Corp
                </h2>
              </AnimatedSection>

              {moments.map((m, i) => (
                <AnimatedSection key={m.title} delay={i * 0.08}>
                  <div style={{ padding: "24px 0", borderBottom: "1px solid #1a1a1a", borderTop: i === 0 ? "1px solid #1a1a1a" : "none", display: "grid", gridTemplateColumns: "80px 1fr", gap: "12px", alignItems: "start" }}>
                    <span style={{ fontSize: "11px", color: "#c8a97e", textTransform: "uppercase", letterSpacing: "0.08em", paddingTop: "3px" }}>{m.time}</span>
                    <div>
                      <p style={{ fontSize: "16px", fontWeight: 600, marginBottom: "4px" }}>{m.title}</p>
                      <p style={{ fontSize: "14px", color: "#888", lineHeight: 1.65 }}>{m.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-3">
                <div style={{ borderRadius: "10px", overflow: "hidden", aspectRatio: "3/4", position: "relative" }}>
                  <Image src="/images/team-event-purple.jpg" alt="Événement équipe" fill sizes="(max-width: 1024px) 50vw, 25vw" style={{ objectFit: "cover" }} />
                </div>
                <div style={{ borderRadius: "10px", overflow: "hidden", aspectRatio: "3/4", position: "relative", marginTop: "32px" }}>
                  <Image src="/images/team-outdoor.jpg" alt="Équipe en extérieur" fill sizes="(max-width: 1024px) 50vw, 25vw" style={{ objectFit: "cover" }} />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
