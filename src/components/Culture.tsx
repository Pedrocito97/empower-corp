"use client";

import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

const images = [
  { src: "/images/awards-ceremony.jpg", alt: "Cérémonie de remise de prix" },
  { src: "/images/tristan-stage.jpg", alt: "Tristan Escutary sur scène" },
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
];

export default function Culture() {
  return (
    <section id="culture" style={{ paddingTop: "140px", paddingBottom: "140px" }}>
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <AnimatedSection>
            <p style={{ color: "#c8a97e", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "24px" }}>
              Culture &amp; événements
            </p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.25 }}>
              Plus qu&apos;une entreprise, une organisation.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p style={{ color: "#999", fontSize: "15px", lineHeight: 1.85, paddingTop: "4px" }}>
              Rejoindre Empower Corp, c&apos;est intégrer une organisation dynamique
              où l&apos;apprentissage passe par l&apos;expérience. Séminaires,
              événements, rencontres avec d&apos;autres équipes du réseau en Europe
              — ces moments permettent d&apos;échanger, d&apos;apprendre et de célébrer
              les performances collectives.
            </p>
          </AnimatedSection>
        </div>

        {/* Gallery - 3 rows, varied sizes */}
        <div style={{ marginTop: "64px", display: "flex", flexDirection: "column", gap: "12px" }}>
          {/* Row 1 - 3 images */}
          <AnimatedSection delay={0.15}>
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
          <AnimatedSection delay={0.2}>
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
          <AnimatedSection delay={0.25}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {images.slice(4, 8).map((img) => (
                <div
                  key={img.src}
                  style={{ borderRadius: "10px", overflow: "hidden", position: "relative", aspectRatio: "1/1" }}
                >
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width:768px) 50vw, 25vw" style={{ objectFit: "cover" }} />
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Row 4 - 4 images smaller */}
          <AnimatedSection delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {images.slice(8, 12).map((img) => (
                <div
                  key={img.src}
                  style={{ borderRadius: "10px", overflow: "hidden", position: "relative", aspectRatio: "4/3" }}
                >
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width:768px) 50vw, 25vw" style={{ objectFit: "cover" }} />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
