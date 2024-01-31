import Carrusel from "../Carrusel/Carrusel";
import ContactForm from "../ContactForm/ContactForm";
import Nosotros from "../Nosotros/Nosotros";
import Servicios from "../Servicios/Servicios";
import Valores from "../Valores/Valores";

const Home = () => {
  return (
    <div>
      <Carrusel />
      <Nosotros />
      <Servicios />
      <Valores />
      <a
        href="https://wa.me/5211234567890?text=Me%20gustaría%20saber%20el%20precio%20del%20coche"
        class="whatsapp"
        target="_blank"
      >
        {" "}
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      <ContactForm />
    </div>
  );
};

export default Home;
