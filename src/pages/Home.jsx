import AboutSection from "../components/AboutSection";
import DiferenciaisSection from "../components/ClinicDifferentials";
import DividerDesign from "../components/DividerDesign";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero"
import PaymentBenefits from "../components/PaymentBenefits";
import PopularTreatmentsSection from "../components/PopularTreatmentsSection";
import ProfessionalsSection from "../components/ProfessionalsSection";
import WhatsappButton from "../components/WhatsappButtom";

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
      <ProfessionalsSection />
      <FaqSection />
      <Footer />
      <WhatsappButton />
    </>
  );
}

export default Home;