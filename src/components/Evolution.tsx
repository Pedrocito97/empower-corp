"use client";

import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    title: "Fondation",
    desc: "Connaissance du produit, création du lien avec les consommateurs, bases de la vente directe.",
  },
  {
    title: "Performance",
    desc: "Maîtrise des objections, constance dans les résultats, gestion du territoire et du temps.",
  },
  {
    title: "Leader",
    desc: "Coaching et développement des autres, construction d'équipes, prise de responsabilités.",
  },
  {
    title: "Développement",
    desc: "Coaching avancé, développement d'une équipe commerciale, initiation à la gestion d'une organisation.",
  },
  {
    title: "Entrepreneuriat",
    desc: "Gestion d'entreprise, développement d'une nouvelle organisation, ouverture d'une agence marketing.",
  },
];

export default function Evolution() {
  return (
    <section id="evolution" style={{ paddingTop: "140px", paddingBottom: "140px" }}>
      <div className="container-main">
        <AnimatedSection>
          <p style={{ color: "#c8a97e", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "24px" }}>
            Parcours
          </p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2, maxWidth: "500px" }}>
            Cinq étapes d&apos;évolution au sein d&apos;Empower Corp
          </h2>
          <p style={{ marginTop: "20px", color: "#888", fontSize: "15px", maxWidth: "480px", lineHeight: 1.7 }}>
            L&apos;évolution repose sur la performance commerciale et les compétences de leadership.
          </p>
        </AnimatedSection>

        <div style={{ marginTop: "64px" }}>
          {steps.map((step, i) => (
            <AnimatedSection key={step.title} delay={i * 0.06}>
              <div
                style={{ padding: "32px 0", borderBottom: "1px solid #151515" }}
                className="grid grid-cols-[48px_1fr] md:grid-cols-[60px_200px_1fr] gap-x-6 gap-y-2 items-start"
              >
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#c8a97e",
                    fontFamily: "var(--font-mono), monospace",
                    paddingTop: "2px",
                  }}
                >
                  0{i + 1}
                </span>
                <h3 style={{ fontSize: "20px", fontWeight: 600, lineHeight: 1.3 }}>
                  {step.title}
                </h3>
                <p
                  className="col-start-2 col-end-[-1] md:col-start-3"
                  style={{ fontSize: "14px", color: "#888", lineHeight: 1.7 }}
                >
                  {step.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
