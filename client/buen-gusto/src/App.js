import "./App.css";
//COMPONENTES
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ContactForm from "./components/ContactForm/ContactForm";
import WhatsappButton from "./components/WhatsappButton/WhatsappButton";

import Bodas from "./components/Servicios/Bodas/Bodas";
import Sociales from "./components/Servicios/Sociales/Sociales";
import Corporativos from "./components/Servicios/Corporativos/Corporativos";

// LIBRERIAS
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sociales" element={<Sociales />} />
        <Route path="/corporativos" element={<Corporativos />} />
        <Route path="/bodas" element={<Bodas />} />
      </Routes>
      <WhatsappButton/>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
