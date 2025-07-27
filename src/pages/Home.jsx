import DividerDesign from "../components/DividerDesign";
import Header from "../components/Header";
import Hero from "../components/Hero"

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <DividerDesign />
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to Clínica Health</h1>
      </section>
    </>
  );
}

export default Home;