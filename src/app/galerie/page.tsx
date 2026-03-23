import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import GalerieContent from "@/components/GalerieContent";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Découvrez en images la vie d'équipe et les événements chez Empower Corp.",
};

export default function GaleriePage() {
  return (
    <>
      <PageHeader
        label="Galerie"
        title="En images."
        description="Les moments forts qui rythment la vie d'Empower Corp : séminaires, événements, team building et célébrations."
      />
      <GalerieContent />
    </>
  );
}
