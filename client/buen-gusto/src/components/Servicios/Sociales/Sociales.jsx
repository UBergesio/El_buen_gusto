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
          {/* {isDesktop?(<img
              src="https://res.cloudinary.com/dtfp8liuv/image/upload/v1708023537/El%20buen%20gusto/28753971_590748827924118_1006629377997275136_n_w4nf7m.jpg"
              className={style.imgFlota}
              alt="..."
            ></img>):("")} */}
        
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
      {/*<div className="card  mb-5">
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src="https://res.cloudinary.com/dtfp8liuv/image/upload/v1708354534/El%20buen%20gusto/Volvieron_las_fiestas_volvi%C3%B3_ElBuenGusto_El_finde_nos_encontramos_agasajando_a_un_total_de_400_per...socolos_correspondientes_15_a%C3%B1os_-_Villa_Mar%C3%ADa_las_moras_vm_50_a%C3%B1os_-_Leones_Sociedad_Italiana_Casamiento_-_Vill_1_gldmrr.jpg"
              className={imagenesGrande}
              alt="..."
            ></img>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className={textoGrande}>Fiestas de 15</h5>
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
      <div className="card mb-5"> */}
        {/* PARA VER SI ES EN CEL QUE SE ACOMODEN LAS CARDS DE ARRIBA A ABAJO */}
{/*         {isDesktop ? (
          <div className="row g-0">
            <div className="col-md-6">
              <div className="card-body">
                <h5 className={textoGrande}>Menús Temáticos</h5>
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
                src="https://res.cloudinary.com/dtfp8liuv/image/upload/v1708354534/El%20buen%20gusto/Volvieron_las_fiestas_volvi%C3%B3_ElBuenGusto_El_finde_nos_encontramos_agasajando_a_un_total_de_400_per...socolos_correspondientes_15_a%C3%B1os_-_Villa_Mar%C3%ADa_las_moras_vm_50_a%C3%B1os_-_Leones_Sociedad_Italiana_Casamiento_-_Vill_3_dws8ub.jpg"
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
                  src="https://res.cloudinary.com/dtfp8liuv/image/upload/v1708354534/El%20buen%20gusto/Volvieron_las_fiestas_volvi%C3%B3_ElBuenGusto_El_finde_nos_encontramos_agasajando_a_un_total_de_400_per...socolos_correspondientes_15_a%C3%B1os_-_Villa_Mar%C3%ADa_las_moras_vm_50_a%C3%B1os_-_Leones_Sociedad_Italiana_Casamiento_-_Vill_3_dws8ub.jpg"
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
              src="https://res.cloudinary.com/dtfp8liuv/image/upload/v1708354535/El%20buen%20gusto/Cuidamos_cada_detalle_para_que_tu_evento_sea_%C3%BAnico_Descubr%C3%AD_la_magia_en_cada_bocado_elbuengusto_serviciodecatering_cateringparaeventos_eventossociales_eventosempresariales_xva%C3%B1os_mesarecepcion_1_pu1gkb.jpg"
              className={imagenesGrande}
              alt="..."
            ></img>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className={textoGrande}>Menús Informales</h5>
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
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Sociales;