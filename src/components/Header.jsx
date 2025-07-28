import { useState } from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FiChevronDown, FiChevronRight, FiMenu, FiX } from "react-icons/fi";
import { MdOutlineHealthAndSafety, MdOutlineFace, MdOutlineScience, MdOutlineMedicalServices } from "react-icons/md";
import Logo from "../assets/images/logo-black.png";

const navLinks = [
  { title: "Diferenciais", href: "#diferenciais", icon: <MdOutlineHealthAndSafety className="text-[#F27E7E]" /> },
  { title: "Estrutura", href: "#estrutura", icon: <MdOutlineScience className="text-[#F27E7E]" /> },
  { title: "Quem Somos", href: "#quem-somos", icon: <MdOutlineFace className="text-[#F27E7E]" /> },
];

const dropdownLinks = {
  Dermatologia: [
    { title: "Estética Facial", href: "/dermatologia/" },
    { title: "Dermatologia Clínica", href: "/dermatologia/" },
    { title: "Dermatologia Cirúrgica", href: "/dermatologia/" },
    { title: "Toxina Botulínica", href: "/dermatologia/" },
    { title: "Bioestimuladores", href: "/dermatologia/" },
    { title: "Skinbooster", href: "/dermatologia/" },
    { title: "Microagulhamento", href: "/dermatologia/" },
    { title: "Peeling Químico", href: "/dermatologia/" },
    { title: "Intradermoterapia", href: "/dermatologia/" },
    { title: "LED Terapia", href: "/dermatologia/" },
    { title: "Fios PDO", href: "/dermatologia/" },
    { title: "Preenchimento Facial", href: "/dermatologia/" },
    { title: "Preenchimento Glúteo", href: "/dermatologia/" },
    { title: "Laser Solon", href: "/dermatologia/" },
    { title: "Ultrassom Atria", href: "/dermatologia/" },
  ],
  Tricologia: [
    { title: "MMP (microinfusão de medicamentos)", href: "/tricologia/" },
    { title: "PRP (plasma rico em plaquetas)", href: "/tricologia/" },
    { title: "Mesoterapia", href: "/tricologia/" },
    { title: "LED capilar (Capellux)", href: "/tricologia/" },
    { title: "Biópsia do couro cabeludo", href: "/tricologia/" },
    { title: "Tratamento clínico para alopecia e inflamações do couro cabeludo", href: "/tricologia/" },
  ],
  "Medicina Clínica e Hormonal": [
    { title: "SOP", href: "/medicina/" },
    { title: "Pós-menopausa e climatério", href: "/medicina/" },
    { title: "Obesidade, emagrecimento e resistência insulínica", href: "/medicina/" },
    { title: "Performance esportiva", href: "/medicina/" },
    { title: "Lipedema", href: "/medicina/" },
    { title: "Reposição hormonal", href: "/medicina/" },
    { title: "Tratamento clínico e hormonal Tireodiano", href: "/medicina/" },
    { title: "Aplicações subcutâneas como Ozempic e Mounjaro", href: "/medicina/" },
    { title: "Reposição de Vitamina D e complexo B injetável", href: "/medicina/" },
    { title: "Implanon", href: "/medicina/" },
  ],
};

function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDropdown = (title) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      {/* Top row */}
      <div className="flex items-center justify-between px-4 py-2 md:px-6 md:justify-between md:gap-4">
        <img src={Logo} alt="Clínica Health" className="w-28 md:w-36" />

        <div className="flex items-center justify-center flex-1 gap-4 md:hidden">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D99197]">
            <FaInstagram size={18} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D99197]">
            <FaFacebookF size={18} />
          </a>
          <a href="https://wa.me/5599999999999" target="_blank" rel="noopener noreferrer" className="hover:text-[#D99197]">
            <FaWhatsapp size={18} />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="text-[#262626] md:hidden hover:text-[#F27E7E] transition"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Desktop social icons */}
        <div className="hidden md:flex items-center gap-4 text-[#262626]">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D99197] transition">
            <FaInstagram size={20} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D99197] transition">
            <FaFacebookF size={20} />
          </a>
          <a href="https://wa.me/5599999999999" target="_blank" rel="noopener noreferrer" className="hover:text-[#D99197] transition">
            <FaWhatsapp size={20} />
          </a>
        </div>
      </div>

      {/* Desktop navigation */}
      <nav className="hidden md:flex justify-center gap-8 py-3 border-t border-[#F2F2F2] bg-white text-sm font-medium text-[#262626]">
        {navLinks.map((link) => (
          <a key={link.title} href={link.href} className="hover:text-[#D99197] transition flex items-center gap-1">
            {link.icon} {link.title}
          </a>
        ))}

        {Object.keys(dropdownLinks).map((title) => (
          <div key={title} className="relative">
            <button
              onClick={() => handleDropdown(title)}
              className="flex items-center gap-1 hover:text-[#D99197] transition"
            >
              <MdOutlineMedicalServices className="text-[#F27E7E]" />
              {title}
              {openDropdown === title ? <FiChevronDown /> : <FiChevronRight />}
            </button>
            {openDropdown === title && (
              <div className="absolute left-0 top-full mt-2 bg-white shadow-md border rounded-md w-56 py-2 z-50 animate-fade-in">
                {dropdownLinks[title].map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="block px-4 py-2 text-sm hover:bg-[#F2F2F2] transition"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 py-4 border-t border-[#F2F2F2] bg-white space-y-3">
          {navLinks.map((link) => (
            <div key={link.title} className="flex items-center gap-2">
              {link.icon}
              <a href={link.href} className="text-sm font-medium text-[#262626] hover:text-[#F27E7E]">
                {link.title}
              </a>
            </div>
          ))}

          {Object.keys(dropdownLinks).map((title) => (
            <div key={title}>
              <button
                onClick={() => handleDropdown(title)}
                className="flex items-center justify-between w-full text-sm font-medium text-[#262626] hover:text-[#F27E7E] mt-2"
              >
                <span className="flex items-center gap-2">
                  <MdOutlineMedicalServices className="text-[#F27E7E]" />
                  {title}
                </span>
                {openDropdown === title ? <FiChevronDown /> : <FiChevronRight />}
              </button>
              {openDropdown === title && (
                <div className="mt-1 ml-4 space-y-1">
                  {dropdownLinks[title].map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="block text-sm text-[#262626] hover:text-[#F27E7E]"
                    >
                      - {item.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
