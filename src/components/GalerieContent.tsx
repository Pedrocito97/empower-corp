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

export default function GalerieContent() {
  return (
    <section style={{ paddingBottom: "120px" }}>
      <div className="container-main">
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
  );
}
