import React from "react";
import style from "../../Styles/Styles.module.css";
import classNames from "classnames";
import { useMediaQuery } from "@react-hook/media-query";



const Corporativos = () => {
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
        <div className={`col-md-6 ${style.parrafos}`}>
          <h1 className={subTituloServicio}>Eventos Corporativos</h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
          tempore, possimus molestias dolorum quod tempora, fugit ducimus odio
          excepturi delectus vitae pariatur? Cupiditate harum animi doloribus ea
          voluptatem et delectus!
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
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
                nostrum a consequatur eveniet? Amet ducimus veritatis itaque!
                Sint doloremque molestias deserunt quae aut, vitae impedit,
                consequatur ut aspernatur accusamus dolorem?Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quibusdam harum rem
                dolorem! Explicabo cumque iure nulla aperiam culpa nisi odit
                quas assumenda. Incidunt harum illum unde aspernatur, sint magni
                omnis.
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
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
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
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
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
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corporativos;
