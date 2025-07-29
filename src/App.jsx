import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import SpecialtyPage from "./pages/specialties/SpecialtyPage";
import DoctorProfile from "./pages/doctors/DoctorProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/especialidades/:slug" element={<SpecialtyPage />} />
        <Route path="/medicos/:slug" element={<DoctorProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
