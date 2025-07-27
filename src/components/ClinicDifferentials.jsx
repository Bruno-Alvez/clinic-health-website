import { motion } from "framer-motion";
import img1 from "../assets/images/solon.png";
import img2 from "../assets/images/doctor1.png";
import img3 from "../assets/images/atria.jpeg";
import img4 from "../assets/images/doctor2.png";

function DiferenciaisSection() {
  const items = [
    {
      title: "Tecnologia de Precisão",
      subtitle: "Aparelho Solon",
      description:
        "Tratamentos com altíssima performance e segurança, utilizando uma das tecnologias mais modernas da estética médica.",
      image: img1,
    },
    {
      title: "Tratamentos Personalizados",
      subtitle: "Solução Atria",
      description:
        "Protocolos sob medida com foco em resultados reais e duradouros, aliados à experiência de nossos especialistas.",
      image: img2,
    },
    {
      title: "Excelência Médica",
      subtitle: "Equipe Especializada",
      description:
        "Profissionais altamente capacitados e atualizados com as inovações mais recentes da medicina clínica e estética.",
      image: img3,
    },
    {
      title: "Excelência Médica",
      subtitle: "Equipe Especializada",
      description:
        "Profissionais altamente capacitados e atualizados com as inovações mais recentes da medicina clínica e estética.",
      image: img4,
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
        >
          Nossos <span className="text-[#F27E7E]">Diferenciais</span>
          <p className="mt-4 font-normal text-gray-600 text-lg max-w-3xl mx-auto">
          A Clínica Health oferece tecnologias e metodologias de última geração, as melhores disponíveis no mercado atual.
          </p>
        </motion.h2>

        <div className="flex flex-col space-y-20">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } ${
                index === 1 || index === 3
                  ? "bg-[#F27E7E]/40 p-6 md:p-10 rounded-2xl"
                  : ""
              }`}
            >
              <div className="w-full md:w-1/2 h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl cursor-pointer group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="w-full md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <h4
                  className={`text-xl mb-4 font-medium ${
                    index === 1 || index === 3
                      ? "text-white"
                      : "text-[#F27E7E]"
                  }`}
                >
                  {item.subtitle}
                </h4>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DiferenciaisSection;
