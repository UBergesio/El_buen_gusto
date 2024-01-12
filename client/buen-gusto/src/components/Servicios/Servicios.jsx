import style from "./Servicios.module.css"

const Servicios = () => {
  return (
      <div
        className={`container-fluid text-center  ${style.container}`}
        id="servicios"
      >
        <h2 className={style.h2}>Servicios</h2>
        <div className="row align-items-start">
          <div className="col-lg col-12 p-4">
            <h1 className={style.h1}>Bodas</h1>
            <p className={style.p}>
              Servicio de Catering para Bodas En el día más especial de tu vida,
              permítenos elevar la experiencia culinaria y hacer que tu boda sea
              aún más inolvidable con nuestro servicio de catering exclusivo
              para bodas. En "El Buen Gusto", entendemos que cada boda es única,
              y nos comprometemos a ofrecerte un servicio personalizado que
              refleje tu estilo y creé recuerdos que perdurarán toda la vida.
            </p>
          </div>
          <div class="vr bg-light p-0"></div>
          <div className="col-lg col-12 p-4">
            <h1 className={style.h1}>Eventos Corporativos</h1>
            <p className={style.p}>
              Servicio de Catering para Eventos Corporativos En "El Buen Gusto",
              entendemos la importancia de impresionar en eventos corporativos.
              Nuestro servicio de catering para eventos corporativos está
              diseñado para elevar tu ocasión de negocios a través de
              experiencias gastronómicas excepcionales. Ya sea una conferencia,
              una presentación de productos o una reunión ejecutiva, nuestro
              equipo se esfuerza por ofrecer una fusión de sabores deliciosa y
              presentación elegante.
            </p>
          </div>
          <div class="vr bg-light p-0"></div>
          <div className="col-lg col-12 p-4">
            <h1 className={style.h1}>Eventos Sociales</h1>
            <p className={style.p}>
              Servicio de Catering para Eventos Sociales En "El Buen Gusto",
              entendemos que los eventos sociales requieren un enfoque especial
              y personalizado. Nuestro servicio de catering para eventos
              sociales está diseñado para hacer de cada ocasión un festín
              memorable. Desde celebraciones familiares hasta reuniones entre
              amigos, nos esforzamos por crear experiencias gastronómicas que se
              adapten a la alegría y diversión de tus eventos sociales.
            </p>
          </div>
        </div>
      </div>
  );
}
export default Servicios