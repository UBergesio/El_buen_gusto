import Carrusel from "../Carrusel/Carrusel";
import Nosotros from "../Nosotros/Nosotros";
import Servicios from "../Servicios/Servicios";
import Valores from "../Valores/Valores";
import WhatsappButton from "../WhatsappButton/WhatsappButton"

const Home = () => {
  return (
    <div>
      <Carrusel />
      <Nosotros />
      <Servicios />
      <Valores />
      <WhatsappButton/>
    </div>
  );
};

export default Home;
