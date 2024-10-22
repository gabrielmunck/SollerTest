import Header from "../components/Header";
import MainSection from "../components/MainSection";
import DesktopSection from "../components/DesktopSection";
import Services from "@/components/Services";
import Features from "@/components/Features";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-soller-bg ">
      <Header />
      <MainSection />
      <DesktopSection />
      <Services />
      <Features />
    </div>
  );
}
