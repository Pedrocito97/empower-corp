import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import HistoireContent from "@/components/HistoireContent";

export const metadata: Metadata = {
  title: "Notre histoire",
  description:
    "Créée en 2019 par Tristan Escutary, Empower Corp est une entreprise de marketing direct présente dans plusieurs pays d'Europe.",
};

export default function HistoirePage() {
  return (
    <>
      <PageHeader
        label="Notre histoire"
        title="Depuis 2019, nous développons des leaders sur le terrain."
      />
      <HistoireContent />
    </>
  );
}
