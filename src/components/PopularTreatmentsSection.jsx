import React from "react";
import { FaVial, FaSyringe, FaMicroscope, FaMagic, FaLeaf } from "react-icons/fa";

const treatments = [
  {
    title: "Toxina Botulínica (Botox)",
    icon: <FaLeaf className="text-4xl text-[#F27E7E]" />,
  },
  {
    title: "Bioestimuladores de Colágeno",
    icon: <FaMagic className="text-4xl text-[#F27E7E]" />,
  },
  {
    title: "Monjaro e Ozempic",
    icon: <FaSyringe className="text-4xl text-[#F27E7E]" />,
  },
  {
    title: "Reposição Hormonal",
    icon: <FaVial className="text-4xl text-[#F27E7E]" />,
  },
  {
    title: "Laser e Ultrassom Microfocado",
    icon: <FaMicroscope className="text-4xl text-[#F27E7E]" />,
  },
];

function PopularTreatmentsSection() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Tratamentos <span className="text-[#F27E7E]">mais procurados</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Conheça os procedimentos mais buscados pelos nossos pacientes. Cuidado personalizado com tecnologia de ponta.
        </p>

        <div id="quem-somos"  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {treatments.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-md p-6 flex flex-col items-center justify-between hover:shadow-lg transition-all"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-[#F27E7E] mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              <a href="https://wa.me/5512997320935?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20realizar%20agendamento%21" className="mt-auto border border-gray-400 text-gray-700 text-sm px-4 py-2 rounded-full hover:bg-[#F27E7E] hover:text-white hover:border-[#F27E7E] transition">
                Agendar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularTreatmentsSection;
