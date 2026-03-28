"use client";

import AnimatedSection from "./AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ActiviteContent() {
  return (
    <>
      {/* What we do */}
      <section style={{ paddingBottom: "120px" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden", aspectRatio: "4/3" }}>
                <Image
                  src="/images/team-stairs.jpg"
                  alt="Équipe en déplacement"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div>
                <h2 style={{ fontSize: "28px", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.3, marginBottom: "24px" }}>
                  La vente directe, notre spécialité
                </h2>
                <p style={{ color: "#999", fontSize: "15px", lineHeight: 1.85, marginBottom: "32px" }}>
                  Notre spécialité est la vente en face-à-face. Les équipes représentent
                  nos organisations partenaires afin de présenter leurs services,
                  sensibiliser le public et développer leur base de clients ou de donateurs.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {[
                    "Campagnes événementielles",
                    "Campagnes résidentielles (porte-à-porte)",
                    "Présentation des services partenaires",
                    "Développement de la base clients",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <CheckCircle size={16} color="#c8a97e" style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: "14px", color: "#bbb" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section style={{ paddingTop: "100px", paddingBottom: "100px", background: "#0a0a0a" }}>
        <div className="container-main">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div>
                <p style={{ color: "#c8a97e", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "20px" }}>
                  Nos partenaires
                </p>
                <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 600, lineHeight: 1.3 }}>
                  Nous accompagnons entreprises, organisations et ONG dans leur acquisition de nouveaux clients.
                </h2>
              </div>
              <div>
                <p style={{ color: "#999", fontSize: "15px", lineHeight: 1.85 }}>
                  À travers la vente directe, nos équipes représentent ces organisations
                  pour présenter leurs services et développer leur base de soutiens.
                  Les campagnes se déroulent sur deux canaux : l&apos;événementiel et le résidentiel.
                </p>
                <div style={{ marginTop: "40px", display: "flex", justifyContent: "center" }}>
                  <div style={{ textAlign: "center" }}>
                    <p style={{ fontSize: "48px", fontWeight: 600, color: "#c8a97e" }}>50K+</p>
                    <p style={{ fontSize: "14px", color: "#888", marginTop: "4px" }}>acquisitions</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section style={{ paddingTop: "120px", paddingBottom: "120px" }}>
        <div className="container-main">
          <AnimatedSection>
            <p style={{ color: "#c8a97e", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "20px" }}>
              Notre mission
            </p>
            <blockquote style={{ paddingLeft: "28px", borderLeft: "2px solid #c8a97e", maxWidth: "600px" }}>
              <p style={{ fontSize: "24px", fontWeight: 400, lineHeight: 1.5, color: "#ccc", fontStyle: "italic" }}>
                &laquo; Créer de la croissance, développer des leaders et bâtir des organisations performantes. &raquo;
              </p>
            </blockquote>
            <p style={{ marginTop: "16px", paddingLeft: "28px", fontSize: "13px", color: "#888" }}>
              — Empower Corp
            </p>
            <p style={{ marginTop: "32px", color: "#888", fontSize: "15px", lineHeight: 1.85, maxWidth: "560px" }}>
              Les personnes les plus performantes peuvent{" "}
              <Link href="/#parcours" style={{ color: "#c8a97e", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                évoluer
              </Link>{" "}
              vers des responsabilités de coaching,
              de management et de développement de nouvelles agences.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
