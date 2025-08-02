import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaSyringe } from "react-icons/fa";
import { FiChevronDown, FiChevronRight, FiMenu, FiX } from "react-icons/fi";
import { MdOutlineHealthAndSafety, MdOutlineFace, MdOutlineScience, MdOutlineMedicalServices, MdContentCut, MdSpa, MdLocalPharmacy } from "react-icons/md";
import { GiComb } from "react-icons/gi";
import Logo from "../assets/images/logo-black.png";

const navLinks = [
 { title: "Diferenciais", href: "#diferenciais", icon: <MdOutlineHealthAndSafety className="text-[#F27E7E]" /> },
 { title: "Estrutura", href: "#estrutura", icon: <MdOutlineScience className="text-[#F27E7E]" /> },
 { title: "Quem Somos", href: "#quem-somos", icon: <MdOutlineFace className="text-[#F27E7E]" /> },
];

const dropdownLinks = {
Dermatologia: [
 { title: "Estética Facial", href: "/especialidades/dermatologia/" },
 { title: "Dermatologia Clínica", href: "/especialidades/dermatologia/" },
 { title: "Dermatologia Cirúrgica", href: "/especialidades/dermatologia/" },
 { title: "Toxina Botulínica", href: "/especialidades/dermatologia/" },
 { title: "Bioestimuladores", href: "/especialidades/dermatologia/" },
 { title: "Skinbooster", href: "/especialidades/dermatologia/" },
 { title: "Microagulhamento", href: "/especialidades/dermatologia/" },
 { title: "Peeling Químico", href: "/especialidades/dermatologia/" },
 { title: "Intradermoterapia", href: "/especialidades/dermatologia/" },
 { title: "LED Terapia", href: "/especialidades/dermatologia/" },
 { title: "Fios PDO", href: "/especialidades/dermatologia/" },
 { title: "Preenchimento Facial", href: "/especialidades/dermatologia/" },
 { title: "Preenchimento Glúteo", href: "/especialidades/dermatologia/" },
 { title: "Laser Solon", href: "/especialidades/dermatologia/" },
 { title: "Ultrassom Atria", href: "/especialidades/dermatologia/" },
 ],
Tricologia: [
 { title: "MMP (microinfusão de medicamentos)", href: "/especialidades/tricologia/" },
 { title: "PRP (plasma rico em plaquetas)", href: "/especialidades/tricologia/" },
 { title: "Mesoterapia", href: "/especialidades/tricologia/" },
 { title: "LED capilar (Capellux)", href: "/especialidades/tricologia/" },
 { title: "Biópsia do couro cabeludo", href: "/especialidades/tricologia/" },
 { title: "Tratamento clínico para alopecia e inflamações do couro cabeludo", href: "/especialidades/tricologia/" },
 ],
"Medicina Preventiva, Endocrinologia, Emagrecimento e Performance": [
 { title: "SOP (Síndrome dos Ovários Policísticos)", href: "/especialidades/medicina-clinica-hormonal/" },
 { title: "Emagrecimento, Obesidade e Resistência Insulínica", href: "/especialidades/medicina-clinica-hormonal/" },
 { title: "Climatério e Pós-Menopausa", href: "/especialidades/medicina-clinica-hormonal/" },
 { title: "Performance esportiva", href: "/especialidades/medicina-clinica-hormonal/" },
 { title: "Lipedema", href: "/especialidades/medicina-clinica-hormonal/" },
 { title: "Reposição hormonal", href: "/especialidades/medicina-clinica-hormonal/" },
 { title: "Tireoide e Equilíbrio Hormonal", href: "/especialidades/medicina-clinica-hormonal/" },
 { title: "Protocolos de Emagrecimento com Semaglutida (Ozempic®️) e a Tirzepatida (Mounjaro®️)", href: "/especialidades/medicina-clinica-hormonal/" },
 { title: "Suplementação Injetável: Vitamina D e Complexo B", href: "/especialidades/medicina-clinica-hormonal/" },
 { title: "Implanon®️", href: "/especialidades/medicina-clinica-hormonal/" },
 ],
};

const getSpecialtyIcon = (title) => {
  switch(title) {
    case "Dermatologia":
      return <MdSpa className="text-[#F27E7E]" />;
    case "Tricologia":
      return <GiComb className="text-[#F27E7E]" />;
    case "Medicina Clínica e Hormonal":
      return <FaSyringe className="text-[#F27E7E]" />;
    default:
      return <MdOutlineMedicalServices className="text-[#F27E7E]" />;
  }
};

function Header() {
const [openDropdown, setOpenDropdown] = useState(null);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const location = useLocation();

const handleDropdown = (title) => {
setOpenDropdown(openDropdown === title ? null : title);
 };

const handleNavClick = (e, href) => {
  const sectionId = href.substring(1);
  
  if (location.pathname === '/home') {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  // Se não estiver na home, deixa o link fazer seu trabalho normal
};

return (
<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
{/* Top row */}
<div className="flex items-center justify-between px-4 py-2 md:px-6">
{/* Logo */}
<a href="/home">
  <img src={Logo} alt="Clínica Health" className="w-28 md:w-36" />
</a>

{/* Mobile social icons - centralizados */}
<div className="flex items-center gap-3 md:hidden">
<a href="https://www.instagram.com/clinica.health/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D99197]">
<FaInstagram size={18} />
</a>
<a href="https://www.facebook.com/share/19BtYDE6xu/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-[#D99197]">
<FaFacebookF size={18} />
</a>
<a href="https://wa.me/5512997320935" target="_blank" rel="noopener noreferrer" className="hover:text-[#D99197]">
<FaWhatsapp size={18} />
</a>
</div>

{/* Mobile Hamburger */}
<div className="flex-shrink-0 md:hidden">
<button
className="text-[#262626] hover:text-[#F27E7E] transition"
onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
>
{mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
</button>
</div>

{/* Desktop social icons */}
<div className="hidden md:flex items-center gap-4 text-[#262626]">
<a href="https://www.instagram.com/clinica.health/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D99197] transition">
<FaInstagram size={20} />
</a>
<a href="https://www.facebook.com/share/19BtYDE6xu/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-[#D99197] transition">
<FaFacebookF size={20} />
</a>
<a href="https://wa.me/5512997320935" target="_blank" rel="noopener noreferrer" className="hover:text-[#D99197] transition">
<FaWhatsapp size={20} />
</a>
</div>
</div>

{/* Desktop navigation */}
<nav className="hidden md:flex justify-center gap-8 py-3 border-t border-[#F2F2F2] bg-white text-sm font-medium text-[#262626]">
{navLinks.map((link) => (
<a 
  key={link.title} 
  href={location.pathname === '/home' ? link.href : `/home${link.href}`}
  onClick={(e) => handleNavClick(e, link.href)}
  className="hover:text-[#D99197] transition flex items-center gap-1"
>
{link.icon} {link.title}
</a>
 ))}
{Object.keys(dropdownLinks).map((title) => (
<div key={title} className="relative">
<button
onClick={() => handleDropdown(title)}
className="flex items-center gap-1 hover:text-[#D99197] transition"
>
{getSpecialtyIcon(title)}
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
<a 
  href={location.pathname === '/home' ? link.href : `/home${link.href}`}
  onClick={(e) => handleNavClick(e, link.href)}
  className="text-sm font-medium text-[#262626] hover:text-[#F27E7E]"
>
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
{getSpecialtyIcon(title)}
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