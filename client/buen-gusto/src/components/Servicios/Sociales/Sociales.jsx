import React, {useEffect} from 'react';
import style from "../../Styles/Styles.module.css";
import classNames from "classnames";
import { useMediaQuery } from "@react-hook/media-query";


const Sociales = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const containerServicios = classNames({
    [style.containerServiciosCel]: !isDesktop,
    [style.containerServicios]: isDesktop,
  });
  const subTituloServicio = classNames({
    [style.subTituloServicioCel]: !isDesktop,
    [style.subTituloServicio]: isDesktop,
  });

  const reels = classNames({
    [style.reelsCel]: !isDesktop,
    [style.reels]: isDesktop,
  });

  return (
    <div
      className={`container-fluid p-5 ${containerServicios}`}
      data-bs-theme="dark"
    >
      <div className="row">
        <div className={`col-md-6 ${style.parrafos}`}>
          <h1 className={subTituloServicio}>Eventos Sociales</h1>
          Entendemos la importancia de cada momento compartido con seres
          queridos. Nos esforzamos por hacer de cada celebración un evento
          especial y memorable. Desde cumpleaños y aniversarios hasta reuniones
          con amigos, estamos aquí para hacer realidad tus deseos. Ofrecemos una
          amplia variedad de menús adaptados a tus gustos y ocasiones, brindando
          un servicio completo de catering en cualquier ubicación. <br />
          <br /> Con nuestra experiencia y equipamiento, tu fiesta será
          inolvidable. ¡Solo tienes que disfrutar mientras nosotros nos
          encargamos del resto!
        </div>
        <div className="col-md-6">
          <video width="390" height="640" controls autoplay className={reels}>
            <source
              src="https://res.cloudinary.com/dp6ojzhsc/video/upload/v1708003717/El%20buen%20gusto/La_magia_de_los_XV_a%C3%B1os_se_encuentra_en_los_detalles_y_nuestro_catering_es_el_toque_perfecto_para_hacerl....n_vistazo_a_nuestra_experiencia_gastron%C3%B3mica_en_los_15_de_Guille_guillerminabruno___martinbruno_ok_analiaperezz___c_dpmlo6.mp4"
              type="video/mp4"
            />
            Tu navegador no admite el elemento de video.
          </video>
        </div>
      </div>
      <hr></hr>
      <div className="card  mb-5">
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src="https://res.cloudinary.com/dp6ojzhsc/image/upload/c_crop,w_1080,h_450/v1704895711/El%20buen%20gusto/FB_IMG_1704895471809_tivisp.jpg"
              className="img-fluid rounded-start"
              alt="..."
            ></img>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">Fiestas de 15</h5>
              <p className="card-text">
                Ofrecemos una selección de menús especialmente creados para este
                día único. Ya sea que celebres en un salón o en casa, contamos
                con opciones para adaptarnos a tus necesidades. Desde menús para
                adultos hasta propuestas pensadas para jóvenes, garantizamos una
                experiencia memorable para todos los invitados.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-5">
        {/* PARA VER SI ES EN CEL QUE SE ACOMODEN LAS CARDS DE ARRIBA A ABAJO */}
        {isDesktop ? (
          <div className="row g-0">
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">Menús Temáticos</h5>
                <p className="card-text">
                  Ofrecemos una variedad de opciones temáticas ideales para
                  celebraciones de cumpleaños, graduaciones y encuentros entre
                  amigos. Desde una fiesta de pizza hasta un festín de sushi,
                  pasando por platos mexicanos y una parrillada. Cada opción
                  incluye una selección de tapas frías y calientes acordes a la
                  temática, junto con deliciosos postres, y bebidas como
                  gaseosas y cerveza para complementar la experiencia.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="https://res.cloudinary.com/dp6ojzhsc/image/upload/c_crop,w_1080,h_450/v1704895711/El%20buen%20gusto/FB_IMG_1704895471809_tivisp.jpg"
                className="img-fluid rounded-start"
                alt="..."
              ></img>
            </div>
          </div>
        ) : (
          <div className="row g-0">
            <div className="col-md-6">
              <div className="col-md-6">
                <img
                  src="https://res.cloudinary.com/dp6ojzhsc/image/upload/c_crop,w_1080,h_450/v1704895711/El%20buen%20gusto/FB_IMG_1704895471809_tivisp.jpg"
                  className="img-fluid rounded-start"
                  alt="..."
                ></img>
              </div>
              <div className="card-body">
                <h5 className="card-title">Menús Temáticos</h5>
                <p className="card-text">
                  Ofrecemos una variedad de opciones temáticas ideales para
                  celebraciones de cumpleaños, graduaciones y encuentros entre
                  amigos. Desde una fiesta de pizza hasta un festín de sushi,
                  pasando por platos mexicanos y una parrillada. Cada opción
                  incluye una selección de tapas frías y calientes acordes a la
                  temática, junto con deliciosos postres, y bebidas como
                  gaseosas y cerveza para complementar la experiencia.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="card">
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src="https://res.cloudinary.com/dp6ojzhsc/image/upload/c_crop,w_1080,h_450/v1704895711/El%20buen%20gusto/FB_IMG_1704895471809_tivisp.jpg"
              className="img-fluid rounded-start"
              alt="..."
            ></img>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">Menús Informales</h5>
              <p className="card-text">
                Una
                opción de alto nivel para impresionar a tus invitados. Incluye
                una variedad de tapas gourmet frías y calientes, cazuelas
                seleccionadas de nuestra carta y postres igualmente elegidos.
                Este menú es ideal para paladares exigentes y puede
                complementarse con vinos de nuestra selección, champagne y
                coctelería exclusiva.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sociales;