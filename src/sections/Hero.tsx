import Container from "../components/common/Container";
import HeroContent from "../components/hero/HeroContent";
import HeroImage from "../components/hero/HeroImage";
import AuroraBackground from "../components/common/AuroraBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-36 lg:pt-40">
      <AuroraBackground />

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>
    </section>
  );
}