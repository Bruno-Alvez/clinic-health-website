import { FaWhatsapp } from "react-icons/fa";

function WhatsappButton() {
  const whatsappNumber = "5511999999999";
  const message = encodeURIComponent(
    "Olá, eu vim pelo site e gostaria de saber mais informações"
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#F27E7E] text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-3 hover:bg-black transition duration-300"
    >
      <FaWhatsapp className="text-xl" />
      <span className="hidden md:inline font-medium">Fale conosco</span>
    </a>
  );
}

export default WhatsappButton;