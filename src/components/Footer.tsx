"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #141414" }}>
      <div className="container-main" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto] gap-12 md:gap-16">
          <div>
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "17px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textDecoration: "none",
                color: "#eee",
                textTransform: "uppercase",
              }}
            >
              <Image
                src="/images/logo-empower.png"
                alt="Empower Corp"
                width={36}
                height={30}
                style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
              />
              Empower <span style={{ color: "#c8a97e" }}>Corp</span>
            </Link>
            <p style={{ marginTop: "12px", fontSize: "14px", color: "#888", lineHeight: 1.7, maxWidth: "320px" }}>
              Développement commercial, leadership et entrepreneuriat en France et en Europe.
            </p>
          </div>

          <div>
            <p style={{ fontSize: "11px", color: "#c8a97e", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px" }}>
              Navigation
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "Notre activité", href: "/#activite" },
                { label: "Histoire", href: "/#histoire" },
                { label: "Parcours", href: "/#parcours" },
                { label: "FAQ", href: "/#faq" },
                { label: "Nous rejoindre", href: "/#rejoindre" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ fontSize: "13px", color: "#898989", textDecoration: "none", transition: "color 0.3s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#ccc")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#898989")}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p style={{ fontSize: "11px", color: "#c8a97e", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px" }}>
              Suivez-nous
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a
                href="https://www.instagram.com/empower_corp/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "13px", color: "#898989", textDecoration: "none", transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ccc")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#898989")}
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@empower_corp_rennes"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "13px", color: "#898989", textDecoration: "none", transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ccc")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#898989")}
              >
                TikTok
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ marginTop: "48px", paddingTop: "24px", borderTop: "1px solid #141414", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <span style={{ fontSize: "12px", color: "#898989" }}>
            &copy; {new Date().getFullYear()} Empower Corp. Tous droits réservés.
          </span>
          <span style={{ fontSize: "12px", color: "#898989" }}>
            Rennes &middot; Nantes &middot; France
          </span>
        </div>
      </div>
    </footer>
  );
}
