import React from "react";
import { FaUserMd, FaVial, FaSyringe, FaMicroscope, FaHeartbeat } from "react-icons/fa";

const treatments = [
  {
    title: "Consultas",
    description: "a partir de R$99,99",
    icon: <FaUserMd className="text-3xl text-[#F27E7E]" />,
  },
  {
    title: "Exames",
    description: "a partir de R$99,99",
    icon: <FaMicroscope className="text-3xl text-[#F27E7E]" />,
  },
  {
    title: "Cirurgias",
    description: "a partir de 10x de R$199,00",
    icon: <FaSyringe className="text-3xl text-[#F27E7E]" />,
  },
  {
    title: "Procedimentos",
    description: "a partir de R$99,99",
    icon: <FaHeartbeat className="text-3xl text-[#F27E7E]" />,
  },
  {
    title: "Ultrassom",
    description: "a partir de R$99,99",
    icon: <FaVial className="text-3xl text-[#F27E7E]" />,
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {treatments.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-md p-6 flex flex-col items-center justify-between hover:shadow-lg transition-all"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-[#F27E7E] mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              <button className="mt-auto border border-gray-400 text-gray-700 text-sm px-4 py-2 rounded-full hover:bg-[#F27E7E] hover:text-white hover:border-[#F27E7E] transition">
                Agendar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularTreatmentsSection;
