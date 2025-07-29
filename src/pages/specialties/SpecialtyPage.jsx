import { useParams } from "react-router-dom";
import { specialties } from "../../data/specialties";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function SpecialtyPage() {
  const { slug } = useParams();
  const specialty = specialties.find((s) => s.slug === slug);

  if (!specialty) {
    return (
      <div className="text-center py-20 text-gray-600 text-xl">
        Especialidade não encontrada.
      </div>
    );
  }

  return (
    <>
      <Header />

      {/* Imagem + título */}
      <section className="w-full h-[300px] md:h-[450px] overflow-hidden">
        <img
          src={specialty.image}
          alt={specialty.name}
          className="w-full h-full object-cover"
        />
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-6">
          {specialty.name}
        </h1>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          {specialty.description}
        </p>
      </section>

      {/* Tratamentos */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 pb-24">
        {specialty.treatments.map((treatment, index) => (
          <div
            key={index}
            className={`py-10 px-6 md:px-10 ${
              index % 2 === 0 ? "bg-white" : "bg-[#F27E7E]/10"
            }`}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {treatment.title}
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              {treatment.description}
            </p>
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
}

export default SpecialtyPage;