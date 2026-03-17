"use client";

import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

export default function Activite() {
  return (
    <section id="activite" style={{ paddingTop: "140px", paddingBottom: "140px" }}>
      <div className="container-main">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <AnimatedSection>
            <p style={{ color: "#c8a97e", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "24px" }}>
              Ce que nous faisons
            </p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
              Développement commercial &amp; marketing direct
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p style={{ color: "#999", fontSize: "16px", lineHeight: 1.85, paddingTop: "8px" }}>
              Empower Corp est spécialisée dans la vente en face-à-face, à
              travers deux canaux principaux : l&apos;événementiel et le
              résidentiel. Nous formons des consultants commerciaux qui
              accompagnent la croissance de nos partenaires directement sur le
              terrain. Les personnes les plus performantes évoluent vers le
              coaching, le management et le développement de nouvelles agences.
            </p>
          </AnimatedSection>
        </div>

        {/* Image band */}
        <AnimatedSection delay={0.2}>
          <div
            style={{
              marginTop: "80px",
              borderRadius: "12px",
              overflow: "hidden",
              position: "relative",
              aspectRatio: "21/9",
            }}
          >
            <Image
              src="/images/team-stairs.jpg"
              alt="Équipe Empower en déplacement"
              fill
              sizes="(max-width: 1140px) 100vw, 1140px"
              style={{ objectFit: "cover", objectPosition: "center 35%" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(5,5,5,0.7) 0%, rgba(5,5,5,0.1) 50%, rgba(5,5,5,0.7) 100%)" }} />

            {/* Overlay stats */}
            <div
              style={{
                position: "absolute",
                bottom: "0",
                left: "0",
                right: "0",
                padding: "32px 40px",
                display: "flex",
                justifyContent: "space-between",
                background: "linear-gradient(to top, rgba(5,5,5,0.85), transparent)",
              }}
            >
              {[
                { title: "Vente directe", desc: "Face-à-face, événementiel, résidentiel" },
                { title: "Formation terrain", desc: "Coaching quotidien et montée en compétences" },
                { title: "Croissance", desc: "50 000+ acquisitions pour nos partenaires" },
              ].map((item, i) => (
                <div key={i} className={i > 0 ? "hidden md:block" : ""}>
                  <p style={{ fontSize: "15px", fontWeight: 600, marginBottom: "4px" }}>{item.title}</p>
                  <p style={{ fontSize: "13px", color: "#888" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Mission statement */}
        <AnimatedSection delay={0.3}>
          <blockquote
            style={{
              marginTop: "80px",
              paddingLeft: "28px",
              borderLeft: "2px solid #c8a97e",
              maxWidth: "600px",
            }}
          >
            <p style={{ fontSize: "20px", fontWeight: 400, lineHeight: 1.6, color: "#ccc", fontStyle: "italic" }}>
              &laquo; Créer de la croissance, développer des leaders et bâtir
              des organisations performantes. &raquo;
            </p>
            <p style={{ marginTop: "12px", fontSize: "13px", color: "#888" }}>
              — Mission Empower Corp
            </p>
          </blockquote>
        </AnimatedSection>
      </div>
    </section>
  );
}
