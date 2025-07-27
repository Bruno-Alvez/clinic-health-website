import AboutSection from "../components/AboutSection";
import DiferenciaisSection from "../components/ClinicDifferentials";
import DividerDesign from "../components/DividerDesign";
import Header from "../components/Header";
import Hero from "../components/Hero"
import PaymentBenefits from "../components/PaymentBenefits";
import PopularTreatmentsSection from "../components/PopularTreatmentsSection";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <DividerDesign />
      <PopularTreatmentsSection />
      <PaymentBenefits />
      <AboutSection />
      <DiferenciaisSection />
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to Clínica Health</h1>
      </section>
    </>
  );
}

export default Home;