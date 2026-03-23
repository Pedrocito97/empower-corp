"use client";

import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

const images = [
  { src: "/images/awards-group-gala.jpg", alt: "Équipe Empower Corp au gala" },
  { src: "/images/team-meeting-fresque.jpg", alt: "Réunion d'équipe" },
  { src: "/images/paintball.jpg", alt: "Paintball team building" },
  { src: "/images/team-neon.jpg", alt: "Soirée d'équipe" },
  { src: "/images/entrepreneur-year.jpg", alt: "Entrepreneur of the Year" },
  { src: "/images/christmas-dinner.jpg", alt: "Dîner de Noël" },
  { src: "/images/halloween-office.jpg", alt: "Halloween au bureau" },
  { src: "/images/market-selfie.jpg", alt: "Sortie d'équipe" },
  { src: "/images/awards-team.jpg", alt: "Équipe cérémonie" },
  { src: "/images/arcade-fun.jpg", alt: "Soirée arcade" },
  { src: "/images/team-restaurant.jpg", alt: "Restaurant d'équipe" },
  { src: "/images/team-dinner.jpg", alt: "Dîner d'équipe" },
  { src: "/images/coaching-office.jpg", alt: "Coaching au bureau" },
];

const events = [
  "Séminaires de formation et de reconnaissance",
  "Rencontres avec les équipes du réseau européen",
  "Activités team building (paintball, sorties, soirées)",
  "Célébrations des performances individuelles et collectives",
];

export default function CultureContent() {
  return (
    <>
      {/* Events description */}
      <section style={{ paddingBottom: "100px" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            <AnimatedSection>
              <p style={{ color: "#c8a97e", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "20px" }}>
                Événements
              </p>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 600, lineHeight: 1.3 }}>
                Des moments forts qui rythment la vie de l&apos;organisation.
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div>
                <p style={{ color: "#999", fontSize: "15px", lineHeight: 1.85, marginBottom: "32px" }}>
                  Rejoindre Empower Corp, c&apos;est intégrer une organisation dynamique
                  où l&apos;apprentissage passe par l&apos;expérience. Les événements sont
                  au cœur de la culture d&apos;entreprise.
                </p>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {events.map((e, i) => (
                    <div key={e} style={{ padding: "18px 0", borderBottom: "1px solid #1a1a1a", borderTop: i === 0 ? "1px solid #1a1a1a" : "none", display: "flex", alignItems: "center", gap: "16px" }}>
                      <span style={{ fontSize: "12px", color: "#c8a97e", fontFamily: "var(--font-mono), monospace", minWidth: "24px" }}>0{i + 1}</span>
                      <span style={{ fontSize: "15px", color: "#ccc" }}>{e}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ paddingTop: "100px", paddingBottom: "120px", background: "#0a0a0a" }}>
        <div className="container-main">
          <AnimatedSection>
            <p style={{ color: "#c8a97e", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "20px" }}>
              Galerie
            </p>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 600, lineHeight: 1.3, marginBottom: "48px" }}>
              En images
            </h2>
          </AnimatedSection>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {/* Row 1 - 3 images */}
            <AnimatedSection delay={0.1}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {images.slice(0, 3).map((img) => (
                  <div
                    key={img.src}
                    style={{ borderRadius: "10px", overflow: "hidden", position: "relative", aspectRatio: "4/3" }}
                  >
                    <Image src={img.src} alt={img.alt} fill sizes="(max-width:768px) 50vw, 33vw" style={{ objectFit: "cover" }} />
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Row 2 - 2 images wider */}
            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {images.slice(3, 5).map((img) => (
                  <div
                    key={img.src}
                    style={{ borderRadius: "10px", overflow: "hidden", position: "relative", aspectRatio: "16/9" }}
                  >
                    <Image src={img.src} alt={img.alt} fill sizes="(max-width:768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Row 3 - 4 images */}
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {images.slice(5, 9).map((img) => (
                  <div
                    key={img.src}
                    style={{ borderRadius: "10px", overflow: "hidden", position: "relative", aspectRatio: "1/1" }}
                  >
                    <Image src={img.src} alt={img.alt} fill sizes="(max-width:768px) 50vw, 25vw" style={{ objectFit: "cover" }} />
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Row 4 - 4 images */}
            <AnimatedSection delay={0.25}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {images.slice(9, 13).map((img) => (
                  <div
                    key={img.src}
                    style={{ borderRadius: "10px", overflow: "hidden", position: "relative", aspectRatio: "4/3" }}
                  >
                    <Image src={img.src} alt={img.alt} fill sizes="(max-width:768px) 100vw, 33vw" style={{ objectFit: "cover" }} />
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
