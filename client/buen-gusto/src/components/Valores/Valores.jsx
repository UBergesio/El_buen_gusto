import style from "./Valores.module.css";
import styles from "../Styles/Styles.module.css";
import { useMediaQuery } from "@react-hook/media-query";

const Valores = () => {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    return (
        <div className={`container-fluid  ${isDesktop ? style.container : style.containerCel}`} id="valores" >
            <h1 className={styles.titulosCursivaBlanco}>Nuestra filosofía</h1>
        {isDesktop ? (
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className={`card h-100 border-light text-light ${style.card}`}>
                        <div className="card-body">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.8766 13.8C18.8766 13.8 19.7766 5.8 15.0766 3C13.579 6.77575 11.4858 10.287 8.87658 13.4C5.17658 17.8 3.97658 25.4 11.8766 29.8C12.862 28.3543 13.6995 26.8133 14.3766 25.2C14.9312 23.0355 15.2992 20.8274 15.4766 18.6C15.4766 18.6 20.7766 23.7 19.7766 29.8C19.7766 29.8 31.7766 24 23.1766 12" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <h5 className={style.subTitulos}>Pasión por la Gastronomía</h5>
                            <p className={styles.textoSolo}>Nuestra pasión por la gastronomía impulsa cada plato que preparamos. Nos esforzamos por fusionar sabores exquisitos y presentaciones impecables para crear experiencias culinarias inolvidables.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className={`card h-100 border-light text-light ${style.card}`}>
                        <div className="card-body">
                            <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 31.8H31.3" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3.69995 28.2C4.23794 25.1354 5.83336 22.3564 8.20861 20.3466C10.5839 18.3368 13.5886 17.2233 16.7 17.2C19.805 17.2072 22.8065 18.3172 25.1692 20.3319C27.532 22.3466 29.1022 25.1351 29.5999 28.2" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16.6999 17.1C18.1358 17.1 19.2999 15.9359 19.2999 14.5C19.2999 13.0641 18.1358 11.9 16.6999 11.9C15.2639 11.9 14.0999 13.0641 14.0999 14.5C14.0999 15.9359 15.2639 17.1 16.6999 17.1Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16.7 4V7.69998" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9 6.5V10.1" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M24.3999 6.5V10.1" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <h5 className={style.subTitulos}>Compromiso con la Calidad</h5>
                            <p className={styles.textoSolo}>Nos comprometemos a ofrecer solo lo mejor. Desde la elección de ingredientes frescos hasta la atención meticulosa a los detalles en la presentación, cada evento que atendemos refleja nuestro compromiso inquebrantable con la calidad.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className={`card h-100 border-light text-light ${style.card}`}>
                        <div className="card-body">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.3001 2V20.2H19.6001V8.70001C19.6001 6.92306 20.306 5.21887 21.5625 3.96237C22.819 2.70588 24.5232 2 26.3001 2Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M22.4001 20.1H26.3002V28.5C26.3002 29.0039 26.1 29.4872 25.7437 29.8435C25.3873 30.1998 24.9041 30.4 24.4001 30.4H24.3002C23.7963 30.4 23.313 30.1998 22.9567 29.8435C22.6003 29.4872 22.4001 29.0039 22.4001 28.5V20.1Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.60004 30.4C8.99004 30.4 8.40503 30.1577 7.97369 29.7263C7.54236 29.295 7.30005 28.71 7.30005 28.1L8.30005 15.6H11L12 28.1C12.0003 28.4106 11.9377 28.7181 11.8159 29.0039C11.6941 29.2897 11.5157 29.5478 11.2914 29.7628C11.0671 29.9777 10.8017 30.145 10.511 30.2545C10.2203 30.364 9.91039 30.4135 9.60004 30.4Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.1 11.1C13.9379 12.1908 13.3892 13.1871 12.554 13.9073C11.7189 14.6274 10.6528 15.0236 9.55002 15.0236C8.44722 15.0236 7.38112 14.6274 6.54596 13.9073C5.7108 13.1871 5.16216 12.1908 5 11.1H14.1Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5 2.79999V11.1" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.5 2.79999V10.9" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.1001 2.79999V11.1" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <h5 className={style.subTitulos}>Creatividad en Cada Bocado</h5>
                            <p className={styles.textoSolo}>En el Buen Gusto, celebramos la creatividad en la cocina. Cada menú que creamos es una obra de arte culinaria, diseñada para sorprender y deleitar a cada paladar.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className={`card h-100 border-light text-light ${style.card}`}>
                        <div className="card-body">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.09991 12.6412C8.65631 11.6669 8.41802 10.6116 8.3999 9.54121C8.61041 7.73958 9.47526 6.07801 10.8303 4.87212C12.1853 3.66622 13.936 3 15.7499 3C17.5638 3 19.3145 3.66622 20.6695 4.87212C22.0245 6.07801 22.8894 7.73958 23.0999 9.54121C23.071 10.6103 22.8332 11.6634 22.3999 12.6412" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.00002 21.1412C6.31394 20.8361 4.78891 19.9476 3.69197 18.6313C2.59504 17.3149 1.9961 15.6547 2.00002 13.9412C2.00002 9.94122 4.70003 7.44122 8.70003 7.44122" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M22.7 7.44122C26.8 7.44122 29.4999 9.94122 29.4999 13.9412C29.5039 15.6547 28.9049 17.3149 27.808 18.6313C26.711 19.9476 25.186 20.8361 23.4999 21.1412" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8 21.1412V28.7412H23.4V21.1412" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8 24.9412H23.4" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15.7 24.9412V20.9412" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <h5 className={style.subTitulos}>Experiencia Personalizada</h5>
                            <p className={styles.textoSolo}>Entendemos que cada evento es único. Nos esforzamos por ofrecer una experiencia de catering personalizada, adaptada a las preferencias y necesidades específicas de cada cliente.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className={`card h-100 border-light text-light ${style.card}`}>
                        <div className="card-body">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 16H29.4V18.6C29.4 21.1726 28.3781 23.6399 26.559 25.459C24.7399 27.2781 22.2726 28.3 19.7 28.3H11.7C9.12741 28.3 6.66017 27.2781 4.84106 25.459C3.02196 23.6399 2 21.1726 2 18.6V16Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2.8999 4.30002H3.29987C5.12986 4.30002 6.88489 5.02698 8.17889 6.32098C9.4729 7.61498 10.1999 9.37002 10.1999 11.2H9.79987C7.96987 11.2 6.21484 10.473 4.92084 9.17905C3.62684 7.88505 2.8999 6.13001 2.8999 4.30002Z" stroke="white" stroke-width="2.5" stroke-linejoin="round"/>
                                <path d="M13 6.20001C13.1627 5.30808 13.6311 4.50069 14.3246 3.91669C15.0181 3.33268 15.8934 3.00853 16.8 3C17.8263 3.02535 18.8037 3.44441 19.5297 4.17038C20.2556 4.89635 20.6747 5.87366 20.7 6.90002C20.6824 7.30667 20.6153 7.70964 20.5 8.10001L21.7 7.90002C22.7264 7.92538 23.7037 8.3444 24.4296 9.07037C25.1556 9.79634 25.5746 10.7737 25.6 11.8" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M20.2998 12.1C19.2389 12.1 18.2215 11.6786 17.4714 10.9284C16.7212 10.1783 16.2998 9.16087 16.2998 8.10001" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <h5 className={style.subTitulos}>Sostenibilidad y Responsabilidad</h5>
                            <p className={styles.textoSolo}>Somos conscientes de nuestro impacto en el medio ambiente. Nos comprometemos a utilizar ingredientes sostenibles, reducir los residuos y adoptar prácticas responsables en todas nuestras operaciones.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className={`card h-100 border-light text-light ${style.card}`}>
                        <div className="card-body">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.6 21.5888C27.6408 20.1282 27.3673 18.6759 26.7979 17.3301C26.2286 15.9844 25.3767 14.7767 24.3 13.7888" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5 21.5888C5 15.2888 10.1 10.6888 16.3 10.6888C17.8032 10.6844 19.2946 10.9555 20.7 11.4888" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2 25.5888H30.6" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M24.7001 12.3888L24.3 13.7888L24.1001 14.6888C23.5951 16.7735 22.522 18.6774 21.0001 20.1888L20.6001 20.4888C20.347 20.7679 20.0383 20.9909 19.6938 21.1435C19.3494 21.2961 18.9768 21.375 18.6001 21.375C18.2233 21.375 17.8507 21.2961 17.5063 21.1435C17.1618 20.9909 16.8532 20.7679 16.6001 20.4888L15.8 19.6888L15.0001 18.8888C14.734 18.6281 14.5226 18.3169 14.3783 17.9735C14.234 17.6301 14.1597 17.2613 14.1597 16.8888C14.1597 16.5163 14.234 16.1476 14.3783 15.8041C14.5226 15.4607 14.734 15.1495 15.0001 14.8888L15.4001 14.5888C16.8367 13.0734 18.675 11.9982 20.7001 11.4888H20.8L23.1001 10.8888L24.7001 12.3888Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M29.1 11.5888C28.7215 11.8803 28.2747 12.0701 27.8021 12.1401C27.3295 12.2101 26.8469 12.1581 26.4001 11.9889L24.6 12.3888L23.3 10.9889L23.7001 9.18887C23.4931 8.77296 23.4112 8.30585 23.4644 7.84433C23.5177 7.38281 23.7038 6.94668 24.0001 6.58884C25.0001 5.58884 27.0001 5.88885 28.4001 7.28885C29.8001 8.68885 30.1 10.5888 29.1 11.5888Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <h5 className={style.subTitulos}>Innovación Constante</h5>
                            <p className={styles.textoSolo}>La innovación impulsa nuestro enfoque. Siempre estamos buscando nuevas tendencias culinarias, presentaciones creativas y formas innovadoras de hacer que cada evento sea único y memorable.</p>
                        </div>
                    </div>
                </div>
            </div>
        ) : ( 
            
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="container">
                    <div class="row">
                      <div class="col">
                        <div className={`card h-100 border-light text-light ${style.card}`}>
                            <div className="card-body">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.8766 13.8C18.8766 13.8 19.7766 5.8 15.0766 3C13.579 6.77575 11.4858 10.287 8.87658 13.4C5.17658 17.8 3.97658 25.4 11.8766 29.8C12.862 28.3543 13.6995 26.8133 14.3766 25.2C14.9312 23.0355 15.2992 20.8274 15.4766 18.6C15.4766 18.6 20.7766 23.7 19.7766 29.8C19.7766 29.8 31.7766 24 23.1766 12" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <h5 className={style.subTitulos}>Pasión por la Gastronomía</h5>
                                <p className={styles.textoSolo}>Nuestra pasión por la gastronomía impulsa cada plato que preparamos. Nos esforzamos por fusionar sabores exquisitos y presentaciones impecables para crear experiencias culinarias inolvidables.</p>
                            </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="container">
                    <div class="row">
                      <div class="col">
                        <div className={`card h-100 border-light text-light ${style.card}`}>
                            <div className="card-body">
                                <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 31.8H31.3" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M3.69995 28.2C4.23794 25.1354 5.83336 22.3564 8.20861 20.3466C10.5839 18.3368 13.5886 17.2233 16.7 17.2C19.805 17.2072 22.8065 18.3172 25.1692 20.3319C27.532 22.3466 29.1022 25.1351 29.5999 28.2" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16.6999 17.1C18.1358 17.1 19.2999 15.9359 19.2999 14.5C19.2999 13.0641 18.1358 11.9 16.6999 11.9C15.2639 11.9 14.0999 13.0641 14.0999 14.5C14.0999 15.9359 15.2639 17.1 16.6999 17.1Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16.7 4V7.69998" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9 6.5V10.1" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M24.3999 6.5V10.1" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <h5 className={style.subTitulos}>Compromiso con la Calidad</h5>
                                <p className={styles.textoSolo}>Nos comprometemos a ofrecer solo lo mejor. Desde la elección de ingredientes frescos hasta la atención meticulosa a los detalles en la presentación, cada evento que atendemos refleja nuestro compromiso inquebrantable con la calidad.</p>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="container">
                    <div class="row">
                      <div class="col">
                        <div className={`card h-100 border-light text-light ${style.card}`}>
                            <div className="card-body">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.3001 2V20.2H19.6001V8.70001C19.6001 6.92306 20.306 5.21887 21.5625 3.96237C22.819 2.70588 24.5232 2 26.3001 2Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M22.4001 20.1H26.3002V28.5C26.3002 29.0039 26.1 29.4872 25.7437 29.8435C25.3873 30.1998 24.9041 30.4 24.4001 30.4H24.3002C23.7963 30.4 23.313 30.1998 22.9567 29.8435C22.6003 29.4872 22.4001 29.0039 22.4001 28.5V20.1Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9.60004 30.4C8.99004 30.4 8.40503 30.1577 7.97369 29.7263C7.54236 29.295 7.30005 28.71 7.30005 28.1L8.30005 15.6H11L12 28.1C12.0003 28.4106 11.9377 28.7181 11.8159 29.0039C11.6941 29.2897 11.5157 29.5478 11.2914 29.7628C11.0671 29.9777 10.8017 30.145 10.511 30.2545C10.2203 30.364 9.91039 30.4135 9.60004 30.4Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M14.1 11.1C13.9379 12.1908 13.3892 13.1871 12.554 13.9073C11.7189 14.6274 10.6528 15.0236 9.55002 15.0236C8.44722 15.0236 7.38112 14.6274 6.54596 13.9073C5.7108 13.1871 5.16216 12.1908 5 11.1H14.1Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M5 2.79999V11.1" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9.5 2.79999V10.9" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M14.1001 2.79999V11.1" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <h5 className={style.subTitulos}>Creatividad en Cada Bocado</h5>
                                <p className={styles.textoSolo}>En el Buen Gusto, celebramos la creatividad en la cocina. Cada menú que creamos es una obra de arte culinaria, diseñada para sorprender y deleitar a cada paladar.</p>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="container">
                    <div class="row">
                      <div class="col">
                        <div className={`card h-100 border-light text-light ${style.card}`}>
                            <div className="card-body">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.09991 12.6412C8.65631 11.6669 8.41802 10.6116 8.3999 9.54121C8.61041 7.73958 9.47526 6.07801 10.8303 4.87212C12.1853 3.66622 13.936 3 15.7499 3C17.5638 3 19.3145 3.66622 20.6695 4.87212C22.0245 6.07801 22.8894 7.73958 23.0999 9.54121C23.071 10.6103 22.8332 11.6634 22.3999 12.6412" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8.00002 21.1412C6.31394 20.8361 4.78891 19.9476 3.69197 18.6313C2.59504 17.3149 1.9961 15.6547 2.00002 13.9412C2.00002 9.94122 4.70003 7.44122 8.70003 7.44122" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M22.7 7.44122C26.8 7.44122 29.4999 9.94122 29.4999 13.9412C29.5039 15.6547 28.9049 17.3149 27.808 18.6313C26.711 19.9476 25.186 20.8361 23.4999 21.1412" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 21.1412V28.7412H23.4V21.1412" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 24.9412H23.4" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M15.7 24.9412V20.9412" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <h5 className={style.subTitulos}>Experiencia Personalizada</h5>
                                <p className={styles.textoSolo}>Entendemos que cada evento es único. Nos esforzamos por ofrecer una experiencia de catering personalizada, adaptada a las preferencias y necesidades específicas de cada cliente.</p>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="container">
                    <div class="row">
                      <div class="col">
                        <div className={`card h-100 border-light text-light ${style.card}`}>
                            <div className="card-body">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 16H29.4V18.6C29.4 21.1726 28.3781 23.6399 26.559 25.459C24.7399 27.2781 22.2726 28.3 19.7 28.3H11.7C9.12741 28.3 6.66017 27.2781 4.84106 25.459C3.02196 23.6399 2 21.1726 2 18.6V16Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M2.8999 4.30002H3.29987C5.12986 4.30002 6.88489 5.02698 8.17889 6.32098C9.4729 7.61498 10.1999 9.37002 10.1999 11.2H9.79987C7.96987 11.2 6.21484 10.473 4.92084 9.17905C3.62684 7.88505 2.8999 6.13001 2.8999 4.30002Z" stroke="white" stroke-width="2.5" stroke-linejoin="round"/>
                                    <path d="M13 6.20001C13.1627 5.30808 13.6311 4.50069 14.3246 3.91669C15.0181 3.33268 15.8934 3.00853 16.8 3C17.8263 3.02535 18.8037 3.44441 19.5297 4.17038C20.2556 4.89635 20.6747 5.87366 20.7 6.90002C20.6824 7.30667 20.6153 7.70964 20.5 8.10001L21.7 7.90002C22.7264 7.92538 23.7037 8.3444 24.4296 9.07037C25.1556 9.79634 25.5746 10.7737 25.6 11.8" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M20.2998 12.1C19.2389 12.1 18.2215 11.6786 17.4714 10.9284C16.7212 10.1783 16.2998 9.16087 16.2998 8.10001" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <h5 className={style.subTitulos}>Sostenibilidad y Responsabilidad</h5>
                                <p className={styles.textoSolo}>Somos conscientes de nuestro impacto en el medio ambiente. Nos comprometemos a utilizar ingredientes sostenibles, reducir los residuos y adoptar prácticas responsables en todas nuestras operaciones.</p>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="container">
                    <div class="row">
                      <div class="col">
                        <div className={`card h-100 border-light text-light ${style.card}`}>
                            <div className="card-body">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.6 21.5888C27.6408 20.1282 27.3673 18.6759 26.7979 17.3301C26.2286 15.9844 25.3767 14.7767 24.3 13.7888" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M5 21.5888C5 15.2888 10.1 10.6888 16.3 10.6888C17.8032 10.6844 19.2946 10.9555 20.7 11.4888" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M2 25.5888H30.6" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M24.7001 12.3888L24.3 13.7888L24.1001 14.6888C23.5951 16.7735 22.522 18.6774 21.0001 20.1888L20.6001 20.4888C20.347 20.7679 20.0383 20.9909 19.6938 21.1435C19.3494 21.2961 18.9768 21.375 18.6001 21.375C18.2233 21.375 17.8507 21.2961 17.5063 21.1435C17.1618 20.9909 16.8532 20.7679 16.6001 20.4888L15.8 19.6888L15.0001 18.8888C14.734 18.6281 14.5226 18.3169 14.3783 17.9735C14.234 17.6301 14.1597 17.2613 14.1597 16.8888C14.1597 16.5163 14.234 16.1476 14.3783 15.8041C14.5226 15.4607 14.734 15.1495 15.0001 14.8888L15.4001 14.5888C16.8367 13.0734 18.675 11.9982 20.7001 11.4888H20.8L23.1001 10.8888L24.7001 12.3888Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M29.1 11.5888C28.7215 11.8803 28.2747 12.0701 27.8021 12.1401C27.3295 12.2101 26.8469 12.1581 26.4001 11.9889L24.6 12.3888L23.3 10.9889L23.7001 9.18887C23.4931 8.77296 23.4112 8.30585 23.4644 7.84433C23.5177 7.38281 23.7038 6.94668 24.0001 6.58884C25.0001 5.58884 27.0001 5.88885 28.4001 7.28885C29.8001 8.68885 30.1 10.5888 29.1 11.5888Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <h5 className={style.subTitulos}>Innovación Constante</h5>
                                <p className={styles.textoSolo}>La innovación impulsa nuestro enfoque. Siempre estamos buscando nuevas tendencias culinarias, presentaciones creativas y formas innovadoras de hacer que cada evento sea único y memorable.</p>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Siguiente</span>
              </button>
            </div>
            
        
            )}
        </div>
        
    );
}
export default Valores;