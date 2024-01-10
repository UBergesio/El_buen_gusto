//import style from "./Carrusel.module.css"
import emailjs from '@emailjs/browser'
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
        /*"service_q9brlnk",
        "template_pvr6j1a",
        form.current,
        "CJk9MtQU_4io8Tfib"*/
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    
  };
  return (
    <div className="container-sm m-3 p-5">
      <form ref={form} onSubmit={sendEmail}>
        <div className="input-group mb-3">
          <label class="input-group-text" for="exampleInputEmail1">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ejemplo@ejemplo.com" name="from_name" required />
        </div>
        <div className="input-group mb-3">
          <label class="input-group-text" for="exampleInputPassword1">Mensaje</label>
          <input type="text" className="form-control" name="message" placeholder="Mensaje" />
        </div>
        <button type="submit" className="btn btn-primary">Contactar</button>
      </form>
    </div>
  );
 }
export default ContactForm;