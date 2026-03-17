import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ActiviteContent from "@/components/ActiviteContent";

export const metadata: Metadata = {
  title: "Notre activité",
  description:
    "Empower Corp est spécialisée dans le développement commercial et le marketing direct. Découvrez notre activité de vente en face-à-face.",
};

export default function ActivitePage() {
  return (
    <>
      <PageHeader
        label="Notre activité"
        title="Développement commercial & marketing direct"
        description="Nous formons des consultants commerciaux qui accompagnent la croissance de nos partenaires directement sur le terrain, à travers l'événementiel et le résidentiel."
      />
      <ActiviteContent />
    </>
  );
}
