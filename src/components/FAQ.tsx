"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Comment fonctionne la rémunération ?",
    a: "La rémunération est basée sur la performance. Les ventes sont rémunérées chaque semaine, en fonction des résultats réalisés sur le terrain.",
  },
  {
    q: "Quel type de contrat est proposé ?",
    a: "L'activité s'exerce sous contrat VDI (Vendeur à Domicile Indépendant) — un statut indépendant avec couverture sociale.",
  },
  {
    q: "Y a-t-il des possibilités d'évolution ?",
    a: "Oui. Les plus performants peuvent évoluer vers le coaching, le développement d'équipe et la création de nouvelles agences.",
  },
  {
    q: "Comment se passent les événements et les voyages organisés par l'entreprise ?",
    a: "Les voyages tels que les séminaires et les formations à l'étranger sont pris en charge par l'entreprise, basés sur différents KPIs.",
  },
  {
    q: "Quel profil recherchez-vous ?",
    a: "Des personnes dynamiques, coachables et déterminées.",
  },
];

function FAQItem({ q, a, isLast }: { q: string; a: string; isLast: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        borderBottom: isLast ? "none" : "1px solid #151515",
        cursor: "pointer",
        padding: "28px 0",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "24px" }}>
        <h3 style={{ fontSize: "16px", fontWeight: 500, color: open ? "#eee" : "#bbb", transition: "color 0.3s", lineHeight: 1.5 }}>
          {q}
        </h3>
        <span style={{ fontSize: "18px", color: "#c8a97e", flexShrink: 0, transition: "transform 0.3s", transform: open ? "rotate(45deg)" : "rotate(0deg)" }}>
          +
        </span>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: "hidden" }}
          >
            <p style={{ paddingTop: "16px", color: "#888", lineHeight: 1.75, fontSize: "15px", maxWidth: "600px" }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" style={{ paddingTop: "140px", paddingBottom: "140px" }}>
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-16 items-start">
          <AnimatedSection>
            <div className="md:sticky md:top-28">
              <p style={{ color: "#c8a97e", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "24px" }}>
                FAQ
              </p>
              <h2 style={{ fontSize: "28px", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.3 }}>
                Questions fréquentes
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div style={{ borderTop: "1px solid #151515" }}>
              {faqs.map((faq, i) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} isLast={i === faqs.length - 1} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
