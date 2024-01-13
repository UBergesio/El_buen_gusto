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

      <ContactForm />
    </div>
  )
}

export default Home;