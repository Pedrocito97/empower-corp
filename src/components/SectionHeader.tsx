"use client";

import AnimatedSection from "./AnimatedSection";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div style={{ paddingTop: "140px", paddingBottom: "80px" }}>
      <div className="container-main">
        <AnimatedSection>
          <p
            style={{
              color: "#c8a97e",
              fontSize: "12px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            {label}
          </p>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              maxWidth: "700px",
            }}
          >
            {title}
          </h2>
          {description && (
            <p
              style={{
                marginTop: "24px",
                color: "#999",
                fontSize: "17px",
                lineHeight: 1.75,
                maxWidth: "560px",
              }}
            >
              {description}
            </p>
          )}
        </AnimatedSection>
      </div>
    </div>
  );
}
