import React, {useEffect} from "react";
import style from "../../Styles/Styles.module.css";
import classNames from "classnames";
import { useMediaQuery } from "@react-hook/media-query";



const Corporativos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  
    const containerServicios = classNames({
      [style.containerServiciosCel]: !isDesktop,
      [style.containerServicios]: isDesktop,
    },
  );
  const subTituloServicio = classNames({
    [style.subTituloServicioCel]: !isDesktop,
    [style.subTituloServicio]: isDesktop
  })

  const reels = classNames({
    [style.reelsCel]: !isDesktop,
    [style.reels]: isDesktop
 })
  


  return (
    <div
      className={`container-fluid p-5 ${containerServicios}`}
      data-bs-theme="dark"
    >
      <div className="row">
        <div className={`col-md-6 mb-3 ${style.parrafos}`}>
          <h1 className={subTituloServicio}>Eventos Corporativos</h1>
          Ofrecemos soluciones integrales para eventos empresariales,
          adaptándonos a cada necesidad con propuestas de calidad en coffee
          breaks, almuerzos de trabajo, capacitaciones y más. <br /><br />Desarrollamos
          menús personalizados y estamos disponibles para resolver urgencias,
          garantizando un servicio excepcional en momentos críticos..
        </div>
        <div className="col-md-6">
          <video width="390" height="640" controls autoplay className={reels}>
            <source
              src="https://res.cloudinary.com/dp6ojzhsc/video/upload/v1708003097/El%20buen%20gusto/Evento_empresarial_de_fin_de_a%C3%B1o_para_Transener_en_las_moras_vm_Sabores_que_cautivan_y_experiencias_...mprometemos_a_que_tu_evento_salga_como_siempre_lo_so%C3%B1aste_Necesit%C3%A1s_presupuesto_Nos_adaptamos_a_tus_gustos_y_necesida_xwkg1f.mp4"
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
              <h5 className="card-title">
                Desayunos, Meriendas Y Coffee Breaks
              </h5>
              <p className="card-text">
                En el Buen Gusto, ofrecemos una amplia gama de servicios para
                desayunos, meriendas y coffee breaks, adaptados para diversas
                ocasiones empresariales, como presentaciones, congresos,
                capacitaciones y jornadas de trabajo. Nuestro enfoque se centra
                en desarrollar opciones de servicio flexibles y personalizadas,
                ajustadas a las necesidades específicas de cada evento,
                ubicación, número de invitados y público objetivo.
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
                <h5 className="card-title">Almuerzos Y Cenas de Gala </h5>
                <p className="card-text">
                  Esta alternativa es perfecta para eventos formales como
                  almuerzos o cenas de gala. Ya sea para reuniones laborales
                  privadas, cenas protocolares, eventos benéficos o fiestas de
                  fin de año, ofrecemos una selección de menús gourmet adaptados
                  a cada ocasión. Desde los clásicos pasos de entrada, plato
                  principal y postre hasta propuestas más originales diseñadas
                  en colaboración con la empresa y nuestro chef, nos adaptamos a
                  las necesidades y estilo de cada evento.
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
                <h5 className="card-title">Almuerzos Y Cenas de Gala </h5>
                <p className="card-text">
                  Esta alternativa es perfecta para eventos formales como
                  almuerzos o cenas de gala. Ya sea para reuniones laborales
                  privadas, cenas protocolares, eventos benéficos o fiestas de
                  fin de año, ofrecemos una selección de menús gourmet adaptados
                  a cada ocasión. Desde los clásicos pasos de entrada, plato
                  principal y postre hasta propuestas más originales diseñadas
                  en colaboración con la empresa y nuestro chef, nos adaptamos a
                  las necesidades y estilo de cada evento.
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
              <h5 className="card-title">Fiestas De Fin De Año</h5>
              <p className="card-text">
                La culminación del año empresarial
                es un momento crucial que requiere una planificación meticulosa.
                Ya sea para un grupo reducido o una gran multitud de hasta 3500
                personas, tenemos la experiencia necesaria para
                garantizar el éxito de tu fiesta. Ofrecemos servicios integrales
                de organización de eventos, catering y barras de tragos,
                brindándote el apoyo necesario para que puedas organizar la
                celebración de fin de año de tu empresa con total tranquilidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corporativos;
