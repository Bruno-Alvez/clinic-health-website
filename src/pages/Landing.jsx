import { useNavigate } from "react-router-dom";

function Landing() {
const navigate = useNavigate();
return (
<div className="relative z-10 w-full h-screen bg-black text-white ">
<img
src="src/assets/images/clinic-cover.jpeg"
alt="Clinic Background"
className="absolute inset-0 w-full h-full object-cover object-[30%_top] md:object-center"
/>
<div className="absolute inset-0 bg-black bg-opacity-45" />
<div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 animate-fade-in">
<img
src="src/assets/images/logo-white.png"
alt="Clínica Health"
className="w-32 md:w-40 mb-6 animate-fade-in"
/>
<h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl">
 Porque sua saúde<br /><span className="underline underline-offset-4">merece mais</span><br /> do que o cuidado normal.
</h1>
<p className="text-lg text-gray-200 mb-10 max-w-xl">
 Excelência em cuidado de saúde personalizada, estética e bem-estar.
</p>
<button
onClick={() => navigate("/home")}
className="px-6 py-3 border border-white text-white rounded-full hover:bg-[#D99197] hover:text-black transition flex items-center gap-2"
>
 ACESSE O SITE<span>➔</span>
</button>
</div>
</div>
 );
}
export default Landing;