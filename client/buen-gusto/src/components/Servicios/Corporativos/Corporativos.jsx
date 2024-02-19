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
  
 const imagenesGrande = classNames({
  ["img-fluid rounded-start"]: !isDesktop,
  [style.imgService]: isDesktop
})

const textoGrande = classNames({
  ["card-title"] : !isDesktop,
  [style.parrafoGrande] : isDesktop
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
          {isDesktop?(<img
              src="https://res.cloudinary.com/dtfp8liuv/image/upload/v1708023537/El%20buen%20gusto/28753971_590748827924118_1006629377997275136_n_w4nf7m.jpg"
              className={style.imgFlota}
              alt="..."
            ></img>):("")}
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
              src="https://res.cloudinary.com/dtfp8liuv/image/upload/v1708023509/El%20buen%20gusto/Recepci%C3%B3n_mesas_islas_Algo_mejor_que_te_reciban_as%C3%AD_elbuengusto_catering_serviciodecatering_recepcion_mesarecepcion_cateringservice_cateringdeeventos_1_ysdbpn.jpg"
              className={imagenesGrande}
              alt="..."
            ></img>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">
                Desayunos, Meriendas Y Coffee Breaks
              </h5>
              <p className={textoGrande}>
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
                <p className={textoGrande}>
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
                src="https://res.cloudinary.com/dtfp8liuv/image/upload/v1708354535/El%20buen%20gusto/Volvieron_las_fiestas_volvi%C3%B3_ElBuenGusto_El_finde_nos_encontramos_agasajando_a_un_total_de_400_per...socolos_correspondientes_15_a%C3%B1os_-_Villa_Mar%C3%ADa_las_moras_vm_50_a%C3%B1os_-_Leones_Sociedad_Italiana_Casamiento_-_Vill_wbprcr.jpg"
                className={imagenesGrande}
                alt="..."
              ></img>
            </div>
          </div>
        ) : (
          <div className="row g-0">
            <div className="col-md-6">
              <div className="col-md-6">
                <img
                  src="https://res.cloudinary.com/dtfp8liuv/image/upload/v1708354535/El%20buen%20gusto/Volvieron_las_fiestas_volvi%C3%B3_ElBuenGusto_El_finde_nos_encontramos_agasajando_a_un_total_de_400_per...socolos_correspondientes_15_a%C3%B1os_-_Villa_Mar%C3%ADa_las_moras_vm_50_a%C3%B1os_-_Leones_Sociedad_Italiana_Casamiento_-_Vill_wbprcr.jpg"
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
              src="https://res.cloudinary.com/dtfp8liuv/image/upload/v1708023537/El%20buen%20gusto/El_pasado_Viernes_23_de_Febrero_nos_encontramos_en_la_localidad_de_General_Roca_realizando_los_15_a%C3%B1os_de_Luisina_Aliprandi_Gracias_por_confiar_en_nuestros_servicios_un_placer_agasajarlos._ElBuenGusto_rqp74r.jpg"
              className={imagenesGrande}
              alt="..."
            ></img>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">Fiestas De Fin De Año</h5>
              <p className={textoGrande}>
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
