"use client";

import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

interface City {
  name: string;
  x: number;
  y: number;
  active: boolean;
  href?: string;
}

const cities: City[] = [
  // Agences actives
  { name: "Rennes", x: 22, y: 35, active: true },
  { name: "Nantes", x: 20, y: 44, active: true, href: "https://maps.app.goo.gl/nantes-empower" },
  // Futures ouvertures
  { name: "Brest", x: 8, y: 30, active: false },
  { name: "Caen", x: 28, y: 25, active: false },
  { name: "Rouen", x: 36, y: 23, active: false },
  { name: "Tours", x: 33, y: 47, active: false },
  { name: "Angers", x: 26, y: 47, active: false },
];

function CityMarker({ city, index }: { city: City; index: number }) {
  const dot = (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 + index * 0.08, duration: 0.4 }}
      style={{
        position: "absolute",
        left: `${city.x}%`,
        top: `${city.y}%`,
        transform: "translate(-50%, -50%)",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "6px",
      }}
    >
      {/* Pulse ring for active cities */}
      {city.active && (
        <span
          style={{
            position: "absolute",
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            border: "1px solid rgba(200, 169, 126, 0.3)",
            animation: "pulse-ring 2.5s ease-out infinite",
          }}
        />
      )}
      {/* Dot */}
      <span
        style={{
          width: city.active ? "12px" : "8px",
          height: city.active ? "12px" : "8px",
          borderRadius: "50%",
          background: city.active ? "#c8a97e" : "rgba(255,255,255,0.25)",
          border: city.active ? "2px solid rgba(200, 169, 126, 0.4)" : "1px solid rgba(255,255,255,0.15)",
          boxShadow: city.active ? "0 0 12px rgba(200, 169, 126, 0.4)" : "none",
        }}
      />
      {/* Label */}
      <span
        style={{
          fontSize: "11px",
          fontWeight: city.active ? 600 : 400,
          color: city.active ? "#eee" : "#666",
          letterSpacing: "0.04em",
          whiteSpace: "nowrap",
          textShadow: "0 1px 4px rgba(0,0,0,0.8)",
        }}
      >
        {city.name}
      </span>
    </motion.div>
  );

  if (city.href && city.active) {
    return (
      <a
        href={city.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
        title={`Voir l'agence de ${city.name} sur Google Maps`}
      >
        {dot}
      </a>
    );
  }

  return dot;
}

export default function FranceMap() {
  return (
    <section style={{ paddingTop: "100px", paddingBottom: "120px" }}>
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <AnimatedSection>
              <p style={{ color: "#c8a97e", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "20px" }}>
                Implantations
              </p>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 600, lineHeight: 1.3, marginBottom: "24px" }}>
                Notre présence en France
              </h2>
              <p style={{ color: "#999", fontSize: "15px", lineHeight: 1.85, marginBottom: "40px" }}>
                Empower Corp poursuit son développement avec des agences actives
                dans le Grand Ouest et de nouvelles ouvertures prévues prochainement.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div>
                <p style={{ fontSize: "11px", color: "#888", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px" }}>
                  Agences actuelles
                </p>
                {cities.filter(c => c.active).map((city, i) => (
                  <div
                    key={city.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "18px 0",
                      borderTop: i === 0 ? "1px solid #1a1a1a" : "none",
                      borderBottom: "1px solid #1a1a1a",
                    }}
                  >
                    <span style={{ fontSize: "16px", fontWeight: 500 }}>{city.name}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      {city.href && (
                        <a
                          href={city.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontSize: "11px", color: "#c8a97e", letterSpacing: "0.08em", textDecoration: "none", borderBottom: "1px solid rgba(200,169,126,0.3)" }}
                        >
                          VOIR SUR LA CARTE
                        </a>
                      )}
                      <span style={{ fontSize: "11px", color: "#c8a97e", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                        Active
                      </span>
                    </div>
                  </div>
                ))}

                <p style={{ fontSize: "11px", color: "#888", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px", marginTop: "40px" }}>
                  Futures ouvertures
                </p>
                {cities.filter(c => !c.active).map((city, i) => (
                  <div
                    key={city.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "18px 0",
                      borderTop: i === 0 ? "1px solid #1a1a1a" : "none",
                      borderBottom: "1px solid #1a1a1a",
                    }}
                  >
                    <span style={{ fontSize: "16px", fontWeight: 500, color: "#898989" }}>{city.name}</span>
                    <span style={{ fontSize: "11px", color: "#898989", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                      Bientôt
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Map */}
          <AnimatedSection delay={0.2}>
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "1/1.1",
                maxWidth: "500px",
                margin: "0 auto",
              }}
            >
              {/* France SVG outline */}
              <svg
                viewBox="0 0 200 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
              >
                <path
                  d="M95 8 L105 5 L115 10 L125 8 L138 15 L148 12 L155 18 L160 30 L165 35 L175 40 L180 50 L178 60 L182 70 L180 80 L175 88 L170 95 L172 105 L168 115 L170 125 L165 135 L160 142 L155 150 L148 158 L140 165 L135 175 L125 180 L118 185 L110 190 L100 195 L90 200 L80 205 L70 200 L60 195 L55 188 L50 180 L45 170 L40 160 L35 150 L30 140 L25 130 L22 120 L20 110 L18 100 L20 90 L25 82 L30 75 L28 65 L25 55 L30 48 L38 44 L42 38 L48 32 L55 28 L60 22 L68 18 L75 14 L82 10 L90 8 Z"
                  fill="rgba(200, 169, 126, 0.04)"
                  stroke="rgba(200, 169, 126, 0.15)"
                  strokeWidth="0.8"
                />
              </svg>

              {/* City markers */}
              {cities.map((city, i) => (
                <CityMarker key={city.name} city={city} index={i} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      <style>{`
        @keyframes pulse-ring {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(2.2); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
