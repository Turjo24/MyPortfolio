import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import FloatingIcons from "./FloatingIcons";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-28 pb-16"
    >
      {/* Floating Icons */}
      <FloatingIcons />

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[85vh]">

          <HeroLeft />

          <HeroRight />

        </div>

      </div>

      <ScrollIndicator />
    </section>
  );
}