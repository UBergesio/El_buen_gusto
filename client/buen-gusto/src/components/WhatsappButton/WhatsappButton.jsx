import style from "./WhatsappButton.module.css";

const WhatsappButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=%2B543472469088&data=ARDeORGMFxq9qHT2M1auNbRMXEcW3R9u4CuSDtOrqCpVNpigjqy_q8ouDbnMm3e5ITFhUdmwaSb4hzUxR5aVC1elPxlOwtMKsnxEmBYMBou-BKg0wTvCi3OMhBgCpCNKmygtCcHGDuooQ68vhZgr9AyZdw&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR0dfA1CWPaJMdhvnPB73W1JfVP3NhbSjBqxtpPbc2zGkfpNMisHmzkNXqQ"
      className={style.whatsapp}
      target="_blank"
    >
      {" "}
      <i className={`fa fa-whatsapp ${style.whatsappicon}`}></i>
    </a>
  );
};

export default WhatsappButton;
