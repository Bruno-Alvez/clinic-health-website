import { useState } from "react";
import { useParams } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import doctors from "../../data/doctors";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function DoctorProfile() {
  const { slug } = useParams();
  const doctor = doctors.find((doc) => doc.slug === slug);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!doctor) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center text-center p-6">
          <h1 className="text-2xl font-semibold text-gray-700">Médico não encontrado.</h1>
        </main>
        <Footer />
      </div>
    );
  }

  const images = doctor.photos || [doctor.photo];
  
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-[#FAFAFA] py-12 px-6 md:px-20">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="w-full rounded-lg overflow-hidden shadow-lg relative">
              <img
                src={images[currentImageIndex]}
                alt={`${doctor.name} - Foto ${currentImageIndex + 1}`}
                className="w-full h-auto object-cover transition duration-300 hover:scale-105"
              />
              
              {/* Setas de navegação */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition duration-200 hover:scale-110"
                  >
                    <FiChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition duration-200 hover:scale-110"
                  >
                    <FiChevronRight size={24} />
                  </button>
                </>
              )}

              {/* Indicadores de pontos */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-3 h-3 rounded-full transition duration-200 ${
                        index === currentImageIndex 
                          ? 'bg-[#F27E7E]' 
                          : 'bg-white/60 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#262626] mb-2">{doctor.name}</h2>
              <p className="text-[#F27E7E] font-medium mb-2">{doctor.crm}</p>
              <p className="text-gray-600 leading-relaxed text-lg">{doctor.description}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default DoctorProfile;