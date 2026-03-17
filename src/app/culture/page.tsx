import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CultureContent from "@/components/CultureContent";

export const metadata: Metadata = {
  title: "Culture & événements",
  description:
    "Séminaires, rencontres européennes et vie d'équipe au quotidien chez Empower Corp.",
};

export default function CulturePage() {
  return (
    <>
      <PageHeader
        label="Culture"
        title="Plus qu'une entreprise, une organisation."
        description="Séminaires, événements, rencontres avec d'autres équipes du réseau en Europe — ces moments permettent d'échanger, d'apprendre et de célébrer les performances collectives."
      />
      <CultureContent />
    </>
  );
}
