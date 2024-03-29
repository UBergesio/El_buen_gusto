import React ,{ useEffect }from "react";
import style from "../../Styles/Styles.module.css";
/* import sstyle from "../Servicios.module.css";
 */import classNames from "classnames";
import { useMediaQuery } from "@react-hook/media-query";

const Bodas = () => {
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

/*   const reels = classNames({
    [style.youTubeCel]: !isDesktop,
    [style.youTube]: isDesktop,
  });

  const imagenesGrande = classNames({
    ["img-fluid rounded-start"]: !isDesktop,
    [style.imgService]: isDesktop
  })

  const textoGrande = classNames({
    ["card-title"] : !isDesktop,
    [style.parrafoGrande] : isDesktop
  }) */

  return (
    <div
      className={`container-fluid p-5 ${containerServicios}`}
      data-bs-theme="dark"
    >
      <div className="row">
        <div className={`col-md-6 mb-3 ${style.parrafos}`}>
          <h1 className={subTituloServicio}>Bodas</h1>
          Tu felicidad es nuestra prioridad, y nos esforzamos por hacer que cada
          momento sea mágico y memorable. <br />
          <br /> Trabajamos incansablemente para ofrecerte soluciones en todos
          los aspectos de tu celebración. Contamos con un equipo de
          profesionales excepcionales.
        </div>
        <div className="col-md-6">
          {/* <iframe
            className={reels}
            src="https://www.youtube.com/embed/F08TiRnPGjU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe> */}
          <span className={style.parrafos}>*Espero video*</span>
        </div>
       {/*  <div class="container text-center">
          <div class="row row-cols-2">
            <div class="col">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                class="bi bi-check2-circle"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
              </svg>
              <p className={style.parrafos}>Recepción</p>
            </div>
            <div class="col">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                class="bi bi-check2-circle"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
              </svg>
              <p className={style.parrafos}>Menú Principal</p>
            </div>

            <div class="col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                class="bi bi-check2-circle"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
              </svg>
              <p className={style.parrafos}>Mesa Dulce</p>
            </div>
            <div class="col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                class="bi bi-check2-circle"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
              </svg>
              <p className={style.parrafos}>Barras de Tragos</p>
            </div>
            <div class="col">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                class="bi bi-check2-circle"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
              </svg>
              <p className={style.parrafos}>Menú de Madrugada</p>
            </div>
            <div class="col">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                class="bi bi-check2-circle"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
              </svg>
              <p className={style.parrafos}>Opcionales como Desayuno</p>
            </div>
          </div>
        </div> */}
      </div>
      <hr></hr>
{/*       <div className="card mb-5">
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src="https://res.cloudinary.com/dtfp8liuv/image/upload/v1708023535/El%20buen%20gusto/O1-1O_Casamiento_alfoponze_fbrusss_Recepci%C3%B3n_mesas_islas_Colita_de_cuadrid_mechada_con_papas_cubo_y_espinaca_a_la_crema_Brownie_con_helado_Un_placer_agasajarlos_en_su_noche_ElBuenGusto_q75qp0.jpg"
              className={imagenesGrande}
              alt="..."
            ></img>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className={textoGrande}>Casamientos Elegantes </h5>
              <p className="card-text" >
                Para esta alternativa, que evoca un estilo sofisticado,
                presentamos una selección de exquisitos menús gourmet que
                abarcan los clásicos pasos culinarios: entrada, plato principal
                y postre. También ofrecemos opciones más creativas, con menús
                personalizados de varios tiempos, diseñados en colaboración con
                los anfitriones y nuestro chef.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* PARA VER SI ES EN CEL QUE SE ACOMODEN LAS CARDS DE ARRIBA A ABAJO */}
      {/* <div className="card mb-5">
        {isDesktop ? (
          <div className="row g-0">
            <div className="col-md-6">
              <div className="card-body">
                <h5 className={textoGrande}>Celebraciones Relajadas </h5>
                <p className="card-text" >
                  Para esta elección, los menús temáticos de múltiples pasos son
                  ideales para fiestas diseñadas en entornos informales, como
                  salas de estar o mesas altas, o para eventos más desenfadados
                  pero igualmente abundantes, con opciones como tablas, tapas
                  gourmet y cazuelas, entre otros platos. También se puede optar
                  por un formato de "estaciones", donde islas temáticas de
                  asado, sushi, pastas, pizzas, entre otras, pueden ser elegidas
                  por los anfitriones para definir el menú principal.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="https://res.cloudinary.com/dtfp8liuv/image/upload/v1708354534/El%20buen%20gusto/Volvieron_las_fiestas_volvi%C3%B3_ElBuenGusto_El_finde_nos_encontramos_agasajando_a_un_total_de_400_per...socolos_correspondientes_15_a%C3%B1os_-_Villa_Mar%C3%ADa_las_moras_vm_50_a%C3%B1os_-_Leones_Sociedad_Italiana_Casamiento_-_Vill_2_ncnbys.jpg"
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
                  src="https://res.cloudinary.com/dtfp8liuv/image/upload/v1708354534/El%20buen%20gusto/Volvieron_las_fiestas_volvi%C3%B3_ElBuenGusto_El_finde_nos_encontramos_agasajando_a_un_total_de_400_per...socolos_correspondientes_15_a%C3%B1os_-_Villa_Mar%C3%ADa_las_moras_vm_50_a%C3%B1os_-_Leones_Sociedad_Italiana_Casamiento_-_Vill_2_ncnbys.jpg"
                  className="img-fluid rounded-start"
                  alt="..."
                ></img>
              </div>
              <div className="card-body">
                <h5 className="card-title">Celebraciones Relajadas </h5>
                <p className="card-text">
                  Para esta elección, los menús temáticos de múltiples pasos son
                  ideales para fiestas diseñadas en entornos informales, como
                  salas de estar o mesas altas, o para eventos más desenfadados
                  pero igualmente abundantes, con opciones como tablas, tapas
                  gourmet y cazuelas, entre otros platos. También se puede optar
                  por un formato de "estaciones", donde islas temáticas de
                  asado, sushi, pastas, pizzas, entre otras, pueden ser elegidas
                  por los anfitriones para definir el menú principal.
                </p>
              </div>
            </div>
          </div>
        )}
      </div> */}
{/*       <div className="card">
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src="https://res.cloudinary.com/dtfp8liuv/image/upload/v1708354534/El%20buen%20gusto/Este_S%C3%A1bado_nos_encontramos_en_la_ciudad_de_Villa_Maria_festejando_un_cumple_a%C3%B1os_de_15_Almuerzo_LaIsolina_ElBuenGusto_u3okgy.jpg"
              className={imagenesGrande}
              alt="..."
            ></img>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className={textoGrande}> Bodas Rústicas </h5>
              <p className="card-text" >
                Si tu visión de la celebración perfecta involucra un ambiente al
                aire libre, en medio de la naturaleza, entonces esta opción es la
                indicada para ti. En las bodas rústicas, las alternativas más
                populares incluyen el asado a la llama o a la parrilla, o bien
                un estilo más informal de asado. Esta última opción implica
                servir el asado en pan, como sándwiches, brochetas y bocadillos,
                con el cocinero cortando la carne en vivo durante el evento.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Bodas;
