import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ParcoursContent from "@/components/ParcoursContent";

export const metadata: Metadata = {
  title: "Parcours & évolution",
  description:
    "Découvrez les cinq étapes d'évolution au sein d'Empower Corp : de la fondation à l'entrepreneuriat.",
};

export default function ParcoursPage() {
  return (
    <>
      <PageHeader
        label="Parcours"
        title="Cinq étapes d'évolution, de la fondation à l'entrepreneuriat."
        description="L'évolution repose sur la performance commerciale et les compétences de leadership. Des formations quotidiennes accompagnent chaque étape."
      />
      <ParcoursContent />
    </>
  );
}
