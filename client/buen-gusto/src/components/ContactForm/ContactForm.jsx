//import style from "./Carrusel.module.css"
import emailjs from '@emailjs/browser'
import { useRef } from "react";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q9brlnk",
        "template_pvr6j1a",
        form.current,
        "CJk9MtQU_4io8Tfib"
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
    <form ref={form} onSubmit={sendEmail}>
      <div className="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su email" name="from_name" />
        <small id="emailHelp" className="form-text text-muted">Ingrese un email con el siguiente formato: ejemplo@ejemplo.com.</small>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Mensaje</label>
        <input type="text" className="form-control" name="message" placeholder="Mensaje" />
      <button type="submit" className="btn btn-primary">Contactar</button>
      </div>
    </form>
  );
 }
export default ContactForm;