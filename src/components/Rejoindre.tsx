"use client";

import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

export default function Rejoindre() {
  return (
    <section id="rejoindre" style={{ paddingTop: "0", paddingBottom: "0", position: "relative", overflow: "hidden" }}>
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0 }}>
        <Image
          src="/images/awards-ceremony.jpg"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "cover", opacity: 0.2 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, #050505, rgba(5,5,5,0.7), #050505)" }} />
      </div>

      <div className="container-main" style={{ position: "relative", zIndex: 10, padding: "140px 40px" }}>
        <AnimatedSection>
          <div style={{ maxWidth: "560px" }}>
            <p style={{ color: "#c8a97e", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "24px" }}>
              Nous rejoindre
            </p>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
              Construisez votre avenir professionnel avec nous.
            </h2>
            <p style={{ marginTop: "24px", color: "#999", fontSize: "16px", lineHeight: 1.8 }}>
              Vous souhaitez développer vos compétences, rejoindre une
              organisation ambitieuse et évoluer dans un environnement stimulant ?
            </p>
            <a
              href="mailto:contact@empowercorp.fr"
              style={{
                display: "inline-block",
                marginTop: "36px",
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
      </div>
    </section>
  );
}
