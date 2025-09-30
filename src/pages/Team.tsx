import Section from "../components/layout/Section";
import TeamSection from "../components/Team/TeamSection";
import TeamGrid from "../components/Team/TeamGrid";
import { ORG_TEAM } from "../data/team";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Team() {
  return (
    <div className="bg-white">
      <Header />
      <Section className="py-10">
        <TeamSection
          title="Our Organization Team"
          subtitle="Meet the people making the conference happen."
        >
          <TeamGrid members={ORG_TEAM} />
        </TeamSection>
      </Section>
      <Footer />
    </div>
  );
}