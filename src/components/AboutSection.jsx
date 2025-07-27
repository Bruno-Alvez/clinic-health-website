import { useState } from "react";
import { motion } from "framer-motion";
import ethicsIcon from "../assets/images/book.png";
import professionalismIcon from "../assets/images/expertise.png";
import humanizationIcon from "../assets/images/core-value.png";
import responsibilityIcon from "../assets/images/puzzle.png";
import empathyIcon from "../assets/images/engagement.png";
import transparencyIcon from "../assets/images/trade.png";
import structureImg1 from "../assets/images/clinic1.jpeg";
import structureImg2 from "../assets/images/clinic2.jpeg";
import structureImg4 from "../assets/images/clinic4.jpeg";
import structureImg5 from "../assets/images/clinic5.jpeg";
import structureImg8 from "../assets/images/clinic8.jpg";
import structureImg9 from "../assets/images/clinic9.jpg";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";


const values = [
  { src: ethicsIcon, alt: "Ética", label: "Ética" },
  { src: professionalismIcon, alt: "Profissionalismo", label: "Profissionalismo" },
  { src: humanizationIcon, alt: "Cuidado Humanizado", label: "Cuidado Humanizado" },
  { src: responsibilityIcon, alt: "Responsabilidade", label: "Responsabilidade" },
  { src: empathyIcon, alt: "Empatia", label: "Empatia" },
  { src: transparencyIcon, alt: "Transparência", label: "Transparência" },
];

const structureImages = [
  structureImg1,
  structureImg2,
  structureImg4,
  structureImg5,
  structureImg8,
  structureImg9,
];

const AboutSection = () => {
  const [current, setCurrent] = useState(0);
  const [modalImg, setModalImg] = useState(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % structureImages.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + structureImages.length) % structureImages.length);
  };

  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-16 bg-white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Conheça um pouco <span className="text-[#F27E7E]">sobre nós</span>
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          A Clínica Health é um centro de saúde de alto padrão focado no cuidado integral e personalizado. Com profissionais renomados, estrutura moderna e um ambiente acolhedor, buscamos oferecer a melhor experiência em bem-estar, prevenção e tratamentos clínicos e estéticos. Nossa missão é transformar a relação entre pacientes e a saúde.
        </p>
      </div>

      <div className="text-center max-w-4xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-6">
          <span className="text-[#F27E7E]">Compromisso com o que realmente importa</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-16 h-16 mb-3"
              />
              <p className="font-medium text-[#F27E7E] text-sm text-center">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="text-center max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">
          <span className="text-[#F27E7E]">Conheça um pouco da nossa estrutura</span>
        </h3>
        <div className="relative">
          <div className="flex items-center justify-center gap-6 mb-6">
            <button
              className="p-2 bg-[#F27E7E] text-white rounded-full hover:bg-[#e16e6e] transition"
              onClick={prevSlide}
            >
              <FaChevronLeft />
            </button>

            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-4xl"
            >
              <div className="w-full h-[460px] overflow-hidden rounded-xl shadow-lg">
                <img
                  src={structureImages[current]}
                  alt={`Estrutura ${current + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover cursor-zoom-in"
                  onClick={() => setModalImg(structureImages[current])}
                />
              </div>
            </motion.div>

            <button
              className="p-2 bg-[#F27E7E] text-white rounded-full hover:bg-[#e16e6e] transition"
              onClick={nextSlide}
            >
              <FaChevronRight />
            </button>
          </div>

          {modalImg && (
            <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
              <div className="absoult top-4 z-50">
                <button
                  className="text-pink-500 hover:text-white bg-white rounded-full p-2 shadow"
                  onClick={() => setModalImg(null)}
                >
                  <FaTimes size={20} />
                </button>
                <img
                  src={modalImg}
                  alt="Imagem ampliada"
                  className="w-auto max-w-[95vw] max-h-[90vh] rounded-lg object-contain shadow-2x1"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


