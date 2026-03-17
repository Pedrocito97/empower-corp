"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export default function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <div style={{ paddingTop: "140px", paddingBottom: "80px" }}>
      <div className="container-main">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            color: "#c8a97e",
            fontSize: "12px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          {label}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            maxWidth: "700px",
          }}
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{
              marginTop: "24px",
              color: "#999",
              fontSize: "17px",
              lineHeight: 1.75,
              maxWidth: "560px",
            }}
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  );
}
