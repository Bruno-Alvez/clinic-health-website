import React from "react";
import bg from "../assets/images/hero3.jpeg";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-center md:bg-center bg-[60%_center] text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 items-center gap-10">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Onde Ciência <br className="hidden md:block" />
            <span className="text-[#F27E7E]">encontra</span> Beleza & Saúde
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/90 max-w-xl">
            Na Clínica Health, unimos tecnologia de ponta, expertise médica e um olhar humano para transformar sua saúde e autoestima. Cada detalhe foi pensado para oferecer uma experiência <strong>única, personalizada e inesquecível.</strong>
          </p>
          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-[#F27E7E] text-black font-semibold py-3 px-6 rounded-full flex items-center gap-2 shadow-md hover:bg-white/75 transition">
              <FaCalendarAlt className="text-sm" href="https://wa.me/5512997320935?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20realizar%20agendamento%21"/> Agende sua consulta
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;