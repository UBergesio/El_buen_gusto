import style from "./ContactForm.module.css";
import styles from "../Styles/Styles.module.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY

      )
      .then(
        (result) => {
          alert(result.text);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className={`container-fluid ${style.container}`} id="contacto">
      <div className={`row row-eq-height ${style.color}`}>
        <div className="col-lg-7 col-md-12">
          <h2 className={styles.subTitulosBlanco}>¿Querés contactarnos?</h2>
          <form ref={form} onSubmit={sendEmail} className="row g-1">
            <div className="col-12">
              <label class="visually-hidden" for="name">
                Nombre y Apellido
              </label>
              <input
                type="text"
                className={`form-control shadow-none ${style.inputborder}`}
                id="name"
                placeholder="Nombre y Apellido*"
                name="from_name"
                required
              />
            </div>

            <div className="col-md-6">
              <input
                type="text"
                className={`form-control shadow-none ${style.inputborder}`}
                id="last-name"
                placeholder="Teléfono*"
                name="phone"
                required
              />
            </div>

            <div className="col-md-6">
              <input
                type="email"
                className={`form-control shadow-none ${style.inputborder}`}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email*"
                name="from_email"
                required
              />
            </div>

            <div className="col-md-6">
              <select
                className={`form-control shadow-none ${style.inputborder}`}
                id="tiposervicio"
                name="tipo_servicio"
              >
                <option className={style.option} value="No seleccionó">
                  Tipo de Servicio
                </option>
                <option className={style.option} value="Boda">
                  Bodas
                </option>
                <option className={style.option} value="Evento Corporativo">
                  Evento Corporativo
                </option>
                <option className={style.option} value="Evento social">
                  Evento social
                </option>
                <option className={style.option} value="Otros">
                  Otros
                </option>
              </select>
            </div>

            <div className="col-md-6">
              <input
                type="text"
                className={`form-control shadow-none ${style.inputborder}`}
                id="lugar"
                placeholder="Lugar"
                name="place"
              />
            </div>

            <div className="input-group md-3">
              <label
                class="input-group-text bg-transparent text-light"
                for="fecha"
              >
                Fecha aproximada del evento
              </label>
              <input
                type="date"
                className={`form-control shadow-none ${style.inputborder}`}
                id="fecha"
                name="date"
              />
            </div>

            <div className="col-12">
              <textarea
                className={`form-control shadow-none ${style.inputborder}`}
                id="mensaje"
                placeholder="Mensaje"
                name="message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className={`btn btn-danger ${style.customButton}`}
            >
              Contactar
            </button>
          </form>
        </div>

        <div className="col-lg-4 col-md-12 md-mt-3">
          <img
            className={style.logo}
            src="https://res.cloudinary.com/dp6ojzhsc/image/upload/v1704724552/FB_IMG_1704724008401-fotor-bg-remover-20240108113434_s330vw.png"
            alt="Logo"
          />
          <p className={style.titulo}>
            <b>El Buen Gusto</b>
          </p>
          <ul className="list-unstyled mt-4">
            <li className="mb-4">
              <a
                class="link-light link-underline-opacity-0"
                href="https://api.whatsapp.com/send?phone=%2B543472469088&data=ARDeORGMFxq9qHT2M1auNbRMXEcW3R9u4CuSDtOrqCpVNpigjqy_q8ouDbnMm3e5ITFhUdmwaSb4hzUxR5aVC1elPxlOwtMKsnxEmBYMBou-BKg0wTvCi3OMhBgCpCNKmygtCcHGDuooQ68vhZgr9AyZdw&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR0dfA1CWPaJMdhvnPB73W1JfVP3NhbSjBqxtpPbc2zGkfpNMisHmzkNXqQ"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 23.9999L1.687 17.837C0.645998 16.033 0.0989998 13.988 0.0999998 11.891C0.103 5.33499 5.43799 0 11.993 0C15.174 0.000999998 18.16 1.24 20.406 3.48799C22.6509 5.73599 23.8869 8.72398 23.8859 11.902C23.8829 18.459 18.548 23.7939 11.993 23.7939C10.003 23.7929 8.04198 23.2939 6.30499 22.346L0 23.9999ZM6.59698 20.193C8.27298 21.188 9.87298 21.784 11.989 21.785C17.437 21.785 21.875 17.351 21.878 11.9C21.88 6.43799 17.463 2.01 11.997 2.008C6.54498 2.008 2.11 6.44199 2.108 11.892C2.107 14.117 2.75899 15.783 3.85399 17.526L2.85499 21.174L6.59698 20.193ZM17.984 14.729C17.91 14.605 17.712 14.531 17.414 14.382C17.117 14.233 15.656 13.514 15.383 13.415C15.111 13.316 14.913 13.266 14.714 13.564C14.516 13.861 13.946 14.531 13.773 14.729C13.6 14.927 13.426 14.952 13.129 14.803C12.832 14.654 11.874 14.341 10.739 13.328C9.85598 12.54 9.25898 11.567 9.08598 11.269C8.91298 10.972 9.06798 10.811 9.21598 10.663C9.34998 10.53 9.51298 10.316 9.66198 10.142C9.81298 9.96998 9.86198 9.84598 9.96198 9.64698C10.061 9.44898 10.012 9.27498 9.93698 9.12598C9.86198 8.97798 9.26798 7.51498 9.02098 6.91998C8.77898 6.34099 8.53398 6.41899 8.35198 6.40999L7.78198 6.39999C7.58398 6.39999 7.26198 6.47399 6.98998 6.77198C6.71798 7.06998 5.94999 7.78798 5.94999 9.25098C5.94999 10.714 7.01498 12.127 7.16298 12.325C7.31198 12.523 9.25798 15.525 12.239 16.812C12.948 17.118 13.502 17.301 13.933 17.438C14.645 17.664 15.293 17.632 15.805 17.556C16.376 17.471 17.563 16.837 17.811 16.143C18.059 15.448 18.059 14.853 17.984 14.729Z"
                    fill="white"
                  />
                </svg>{" "}
                3472 469088
              </a>
            </li>
            <li className="mb-4">
              <a
                class="link-light link-underline-opacity-0"
                href="https://instagram.com/catering_elbuengusto"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_17_27)">
                    <path
                      d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8688 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8063 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8063 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z"
                      fill="white"
                    />
                    <path
                      d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z"
                      fill="white"
                    />
                    <path
                      d="M19.8469 5.5922C19.8469 6.38908 19.2 7.03127 18.4078 7.03127C17.6109 7.03127 16.9688 6.38439 16.9688 5.5922C16.9688 4.79533 17.6156 4.15314 18.4078 4.15314C19.2 4.15314 19.8469 4.80001 19.8469 5.5922Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_17_27">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>{" "}
                catering_elbuengusto
              </a>
            </li>
            <li className="mb-4">
              <a
                class="link-light link-underline-opacity-0"
                href="https://www.facebook.com/profile.php?id=100063906111468"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_17_24)">
                    <path
                      d="M24 12C24 5.37264 18.6274 0 12 0C5.37264 0 0 5.37264 0 12C0 17.6275 3.87456 22.3498 9.10128 23.6467V15.6672H6.62688V12H9.10128V10.4198C9.10128 6.33552 10.9498 4.4424 14.9597 4.4424C15.72 4.4424 17.0318 4.59168 17.5685 4.74048V8.06448C17.2853 8.03472 16.7933 8.01984 16.1822 8.01984C14.2147 8.01984 13.4544 8.76528 13.4544 10.703V12H17.3741L16.7006 15.6672H13.4544V23.9122C19.3963 23.1946 24.0005 18.1354 24.0005 12H24Z"
                      fill="white"
                    />
                    <path
                      d="M16.7002 15.6672L17.3736 12H13.4539V10.703C13.4539 8.76528 14.2142 8.01984 16.1818 8.01984C16.7928 8.01984 17.2848 8.03472 17.568 8.06448V4.74048C17.0314 4.5912 15.7195 4.4424 14.9592 4.4424C10.9493 4.4424 9.1008 6.33552 9.1008 10.4198V12H6.6264V15.6672H9.1008V23.6467C10.0291 23.8771 11.0002 24 11.9995 24C12.4915 24 12.9768 23.9698 13.4534 23.9122V15.6672H16.6997H16.7002Z"
                      fill="none"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_17_24">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>{" "}
                El Buen Gusto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
