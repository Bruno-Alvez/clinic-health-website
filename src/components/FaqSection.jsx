import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqList = [
  {
    question: "Quais tipos de tratamentos estéticos a clínica oferece?",
    answer:
      "Oferecemos uma gama completa de tratamentos, como rejuvenescimento facial, laser, peelings, protocolos hormonais e soluções personalizadas.",
  },
  {
    question: "Os atendimentos são realizados com horário marcado?",
    answer:
      "Sim. Nossos atendimentos são exclusivamente com horário agendado para garantir conforto, pontualidade e total atenção ao paciente.",
  },
  {
    question: "A clínica atende por convênios médicos?",
    answer:
      "Não. Nossos atendimentos são particulares, com foco em oferecer uma experiência exclusiva, personalizada e de alto padrão.",
  },
  {
    question: "Qual a formação dos profissionais da clínica?",
    answer:
      "Todos os profissionais possuem formação médica especializada, com constante atualização em congressos e centros de excelência no Brasil e no exterior.",
  },
];

function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-800"
        >
          Dúvidas <span className="text-[#F27E7E]">Frequentes</span>
        </motion.h2>
        <p className="mt-4 text-gray-600 text-lg font-normal">
          Encontre aqui as respostas para as principais perguntas dos nossos pacientes.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqList.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none hover:bg-[#F27E7E]/10 transition"
            >
              <span className="text-lg font-medium text-gray-800">
                {item.question}
              </span>
              {activeIndex === index ? (
                <FaChevronUp className="text-[#F27E7E]" />
              ) : (
                <FaChevronDown className="text-[#F27E7E]" />
              )}
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6 text-gray-600 text-base leading-relaxed"
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FaqSection;