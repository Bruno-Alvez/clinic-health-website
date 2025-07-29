import { motion } from "framer-motion";
import doctor1 from "../assets/images/dr-lara.jpeg";
import doctor2 from "../assets/images/dr-rafael.png";

function ProfessionalsSection() {
  const professionals = [
    {
      name: "Dra. Lara Feres",
      specialty: "Dermatologia Avançada",
      description:
        "Especialista em tratamentos dermatológicos de alta performance, com atuação focada em rejuvenescimento, laser e tecnologias de ponta.",
      image: doctor1,
      link: "/medicos/lara-feres",
    },
    {
      name: "Dr. Rafael Carrasco",
      specialty: "Medicina Clínica e Hormonal",
      description:
        "Com vasta experiência em saúde preventiva e equilíbrio hormonal, oferece cuidados personalizados com foco em longevidade e qualidade de vida.",
      image: doctor2,
      link: "/medicos/rafael-carrasco",
    },
  ];

  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-800"
        >
          Conheça nossos <span className="text-[#F27E7E]">Profissionais</span>
        </motion.h2>
        <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
          Uma equipe altamente qualificada, comprometida com a excelência e o cuidado humanizado.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {professionals.map((prof, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-[#F27E7E]/10 rounded-2xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10"
          >
            <img
              src={prof.image}
              alt={prof.name}
              className="w-40 h-40 object-cover object-top md:object-center rounded-full border-4 border-[#F27E7E] shadow-md"
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-800">{prof.name}</h3>
              <p className="text-[#F27E7E] font-medium text-sm mt-1">
                {prof.specialty}
              </p>
              <p className="text-gray-700 mt-3 text-base leading-relaxed">
                {prof.description}
              </p>
              <a
                href={prof.link}
                className="inline-block mt-5 px-5 py-2 bg-[#F27E7E] text-white font-medium rounded-full hover:bg-[#e06c6c] transition"
              >
                Ver Perfil
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ProfessionalsSection;