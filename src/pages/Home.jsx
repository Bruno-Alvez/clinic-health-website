import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header />
      {/* conteúdo da Home virá aqui depois */}
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to Clínica Health</h1>
      </section>
    </>
  );
}

export default Home;