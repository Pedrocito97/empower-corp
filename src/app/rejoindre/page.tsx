import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import RejoindreContent from "@/components/RejoindreContent";

export const metadata: Metadata = {
  title: "Nous rejoindre",
  description:
    "Développez vos compétences, rejoignez une organisation ambitieuse et construisez votre avenir professionnel avec Empower Corp.",
};

export default function RejoindrePage() {
  return (
    <>
      <PageHeader
        label="Nous rejoindre"
        title="Construisez votre avenir professionnel avec nous."
        description="Vous souhaitez développer vos compétences, rejoindre une organisation ambitieuse et évoluer dans un environnement stimulant ?"
      />
      <RejoindreContent />
    </>
  );
}
