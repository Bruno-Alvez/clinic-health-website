import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/images/logo-black.png";

function Footer() {
  return (
    <footer className="bg-[#F27E7E]/50 text-white border-t border-b border-black pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
        {/* Logo */}
        <div className="md:col-span-1 flex justify-center md:justify-start">
          <img
            src={logo}
            alt="Clínica Health"
            className="w-40 h-auto object-contain"
          />
        </div>
        
        {/* Adress */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">Endereço</h3>
          <ul className="space-y-2 text-sm text-white">
            <li className="hover:text-black">Rua Maria Aparecida de Moura Número: 281, Loja 3</li>
            <li className="hover:text-black">Praia de Boiçucanga</li>
            <li className="hover:text-black">São Sebastião - São Paulo</li>
            <li className="hover:text-black">CEP:11618074</li>
          </ul>
        </div>
        
        {/* Specialties */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">Especialidades</h3>
          <ul className="space-y-2 text-sm text-white">
            <li className="hover:text-black">Dermatologia</li>
            <li className="hover:text-black">Tricologia</li>
            <li className="hover:text-black">Medicina Clínica e Hormonal</li>
          </ul>
        </div>
        
        {/* Professionals */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">Profissionais</h3>
          <ul className="space-y-2 text-sm text-white">
            <li><a href="/medicos/rafael-carrasco" className="hover:text-black">Dr. Rafael Carrasco</a></li>
            <li><a href="/medicos/lara-feres" className="hover:text-black">Dra. Lara Feres</a></li>
          </ul>
        </div>
        
        {/* Social Icons + buttom */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-4 text-black text-xl">
            <a href="https://wa.me/5512997320935" className="hover:text-white transition"><FaWhatsapp /></a>
            <a href="https://www.facebook.com/share/19BtYDE6xu/?mibextid=wwXIfr" className="hover:text-white transition"><FaFacebookF /></a>
            <a href="https://www.instagram.com/clinica.health/" className="hover:text-white transition"><FaInstagram /></a>
          </div>
        </div>
      </div>
      
      {/* End Line */}
      <div className="mt-12 text-center text-sm text-black font-medium">
        © 2025 Clínica Health | Created by Alves Developer. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;