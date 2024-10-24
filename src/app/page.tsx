import MainSection from "../components/MainSection";
import DesktopSection from "../components/DesktopSection";
import Services from "@/components/Services";
import Features from "@/components/Features";
import CarouselSection from "@/components/CarouselSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-soller-bg ">
      <MainSection />
      <DesktopSection />
      <Services />
      <Features />
      <CarouselSection/>
    </div>
  );
}
