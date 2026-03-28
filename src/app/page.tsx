import Hero from "@/components/Hero";
import HomePreview from "@/components/HomePreview";
import ActiviteContent from "@/components/ActiviteContent";
import HistoireContent from "@/components/HistoireContent";
import ParcoursContent from "@/components/ParcoursContent";
import RejoindreContent from "@/components/RejoindreContent";
import FAQ from "@/components/FAQ";
import SectionHeader from "@/components/SectionHeader";

export default function Home() {
  return (
    <>
      <Hero />
      <HomePreview />

      {/* Notre activité */}
      <div id="activite">
        <SectionHeader
          label="Notre activité"
          title="Développement commercial & marketing direct"
          description="Nous formons des consultants commerciaux qui accompagnent la croissance de nos partenaires directement sur le terrain, à travers l'événementiel et le résidentiel."
        />
        <ActiviteContent />
      </div>

      {/* Notre histoire */}
      <div id="histoire">
        <SectionHeader
          label="Notre histoire"
          title="Depuis 2019, nous développons des leaders sur le terrain."
        />
        <HistoireContent />
      </div>

      {/* Parcours */}
      <div id="parcours">
        <SectionHeader
          label="Parcours"
          title="Cinq étapes d'évolution, de la fondation à l'entrepreneuriat."
          description="L'évolution repose sur la performance commerciale et les compétences de leadership. Des formations quotidiennes accompagnent chaque étape."
        />
        <ParcoursContent />
      </div>

      {/* FAQ */}
      <div id="faq">
        <FAQ />
      </div>

      {/* Nous rejoindre */}
      <div id="rejoindre">
        <SectionHeader
          label="Nous rejoindre"
          title="Construisez votre avenir professionnel avec nous."
          description="Vous souhaitez développer vos compétences, rejoindre une organisation ambitieuse et évoluer dans un environnement stimulant ?"
        />
        <RejoindreContent />
      </div>
    </>
  );
}
