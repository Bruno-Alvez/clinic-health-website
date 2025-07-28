import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../assets/images/logo-black.png"; // substitua pelo caminho correto do seu logo

function Footer() {
  return (
    <footer className="bg-[#F27E7E]/50 text-white border-t border-b border-black pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
        {/* Logo */}
        <div className="md:col-span-1">
          <img
            src={logo}
            alt="Clínica Health"
            className="w-40 h-auto object-contain"
          />
        </div>

        {/* Links - Endereço */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">Endereço</h3>
          <ul className="space-y-2 text-sm text-white">
            <li><a href="#" className="hover:text-black">Rua Maria Caetana - 148</a></li>
            <li><a href="#" className="hover:text-black">Boicucanga</a></li>
            <li><a href="#" className="hover:text-black">São Sebastião - SP</a></li>
          </ul>
        </div>

        {/* Links - Especialidades */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">Especialidades</h3>
          <ul className="space-y-2 text-sm text-white">
            <li><a href="#" className="hover:text-black">Dermatologia</a></li>
            <li><a href="#" className="hover:text-black">Tricologia</a></li>
            <li><a href="#" className="hover:text-black">Medicina Clínica e Hormonal</a></li>
          </ul>
        </div>

        {/* Links - Profissionais */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">Profissionais</h3>
          <ul className="space-y-2 text-sm text-white">
            <li><a href="#" className="hover:text-black">Dr. Rafael Carrasco</a></li>
            <li><a href="#" className="hover:text-black">Dra. Lara Feres</a></li>
          </ul>
        </div>

        {/* Redes sociais + botão */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-4 text-black text-xl">
            <a href="#" className="hover:text-white transition"><FaTwitter /></a>
            <a href="#" className="hover:text-white transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-white transition"><FaInstagram /></a>
          </div>
          <a
            href="#"
            className="mt-4 inline-block bg-white text-black hover:bg-gray-800 hover:text-white px-6 py-2 rounded-full font-medium transition"
          >
            Contato
          </a>
        </div>
      </div>

      {/* Linha final */}
      <div className="mt-12 text-center text-sm text-black font-medium">
        © 2025 Clínica Health | Created by Alves Developer. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;