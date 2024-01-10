import Carrusel from "../Carrusel/Carrusel";
import ContactForm from "../ContactForm/ContactForm";
import Nosotros from "../Nosotros/Nosotros";
import Servicios from "../Servicios/Servicios";

const Home = () => {
  return (
    <div>
      <Carrusel />
      <Nosotros />
      <Servicios/>
      <ContactForm />
    </div>
  )
}

export default Home;