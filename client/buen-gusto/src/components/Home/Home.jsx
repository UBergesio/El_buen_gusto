import Carrusel from "../Carrusel/Carrusel";
import Nosotros from "../Nosotros/Nosotros";
import Servicios from "../Servicios/Servicios";
import Valores from "../Valores/Valores";
import ContactForm from "../ContactForm/ContactForm"
import WhatsappButton from "../WhatsappButton/WhatsappButton"

const Home = () => {
  return (
    <div>
      <Carrusel />
      <Nosotros />
      <Servicios />
      <Valores />
      <WhatsappButton/>
      <ContactForm />
    </div>
  );
};

export default Home;
