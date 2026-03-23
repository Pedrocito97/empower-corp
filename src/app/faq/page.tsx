import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Retrouvez les réponses aux questions fréquentes sur Empower Corp.",
};

export default function FAQPage() {
  return (
    <>
      <PageHeader
        label="FAQ"
        title="Questions fréquentes."
        description="Tout ce que vous devez savoir avant de nous rejoindre."
      />
      <FAQ />
    </>
  );
}
