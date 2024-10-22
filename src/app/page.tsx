import Header from "../components/Header";
import MainSection from "../components/MainSection";
import DesktopSection from "../components/DesktopSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-soller-bg ">
      <Header />
      <MainSection />
      <DesktopSection />
    </div>
  );
}
