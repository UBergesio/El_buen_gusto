import style from "./Nosotros.module.css";
import { useMediaQuery } from "@react-hook/media-query";

const Nosotros = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className={` text-center bg-black ${style.container}`}>
      {isDesktop ? (
        <div className="row">
          {/*         <h1>
          <b>Nosotros</b>
        </h1> */}
          <h3 className={style.subTitulo}>
            Mas de 20 años agasajando.{" "}
            <img
              className={style.logo}
              src="https://res.cloudinary.com/dp6ojzhsc/image/upload/v1704724552/FB_IMG_1704724008401-fotor-bg-remover-20240108113434_s330vw.png"
              alt="Logo"
            />
          </h3>

          <div className="col">
            <h4 className={style.titulo}>
              Desde <span className={style.buenGusto}>"El buen Gusto"</span>{" "}
              sabemos que cada evento es <b>unico y especial.</b>
            </h4>
            <br />
            <p className={style.texto}>
              Nuestro catering no se limita a un lugar fijo, llegamos a donde
              nos necesites.
              <br />
              <br />
              Realizamos <b>eventos de todo tipo</b>; ya sea bodas, cumpleaños,
              conferencias empresariales o reuniones, nuestro equipo tiene la
              experencia para brindarte un servicio de alta calidad en cualquier
              ocasion.
              <br />
              <br /> Estamos preparados para ofrecerte diferentes{" "}
              <b>opciones gastronomicas</b>; trabajamos para crear un menu que
              refleje tus gustos y preferencias.
              <br />
              <br />
              <b>Trabajamos juntos</b> para garantizar que tu evento sea un
              exito desde el primer hasta el ultimo detalle.
            </p>
          </div>
          <div className="col">
            <img
              src="https://res.cloudinary.com/dp6ojzhsc/image/upload/v1695850005/sample.jpg"
              alt="una imagen"
              className="img-thumbnail"
            />
          </div>
        </div>
      ) : (
        <div className="row row-cols-1">
          {/*         <h1>
          <b>Nosotros</b>
        </h1> */}
          <h3 className={style.subTitulo}>Mas de 20 años agasajando. </h3>
          <img
            className={style.logo}
            src="https://res.cloudinary.com/dp6ojzhsc/image/upload/v1704724552/FB_IMG_1704724008401-fotor-bg-remover-20240108113434_s330vw.png"
            alt="Logo"
          />
          <div className="col">
            <h4 className={style.titulo}>
              Desde <span className={style.buenGusto}>"El buen Gusto"</span>{" "}
              sabemos que cada evento es <b>unico y especial.</b>
            </h4>
            <br />
            <p className={style.texto}>
              Nuestro catering no se limita a un lugar fijo, llegamos a donde
              nos necesites.
              <br />
              Realizamos <b>eventos de todo tipo</b>; ya sea bodas, cumpleaños,
              conferencias empresariales o reuniones, nuestro equipo tiene la
              experencia para brindarte un servicio de alta calidad en cualquier
              ocasion.
              <br /> Estamos preparados para ofrecerte diferentes{" "}
              <b>opciones gastronomicas</b>; trabajamos para crear un menu que
              refleje tus gustos y preferencias.
              <br />
              <b>Trabajamos juntos</b> para garantizar que tu evento sea un
              exito desde el primer hasta el ultimo detalle.
            </p>
          </div>
          <div className="col">
            <img
              src="https://res.cloudinary.com/dp6ojzhsc/image/upload/v1695850005/sample.jpg"
              alt="una imagen"
              className="img-thumbnail"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Nosotros;
