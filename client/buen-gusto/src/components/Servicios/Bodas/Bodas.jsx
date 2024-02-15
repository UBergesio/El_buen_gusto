import React from "react";
import style from "../../Styles/Styles.module.css";

const Bodas = () => {

  return (
    <div className={`container-fluid p-5 ${style.container}`} data-bs-theme="dark">
      <h1 className={style.subTitulo}>Bodas</h1>
      <div className="row">
        <div className={`col-md-6 ${style.parrafos}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum tempore, possimus molestias dolorum quod tempora, fugit ducimus odio excepturi delectus vitae pariatur? Cupiditate harum animi doloribus ea voluptatem et delectus!</div>
        <div className="col-md-6">  
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/F08TiRnPGjU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <hr></hr>
      <div className="card" >
        <div className="row g-0">
          <div className="col-md-6">
          <img src="https://res.cloudinary.com/dp6ojzhsc/image/upload/c_crop,w_1080,h_450/v1704895711/El%20buen%20gusto/FB_IMG_1704895471809_tivisp.jpg" className="img-fluid rounded-start" alt="..."></img>
        </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum nostrum a consequatur eveniet? Amet ducimus veritatis itaque! Sint doloremque molestias deserunt quae aut, vitae impedit, consequatur ut aspernatur accusamus dolorem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam harum rem dolorem! Explicabo cumque iure nulla aperiam culpa nisi odit quas assumenda. Incidunt harum illum unde aspernatur, sint magni omnis.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card" >
        <div className="row g-0">
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
          <div className="col-md-6">
            <img src="https://res.cloudinary.com/dp6ojzhsc/image/upload/c_crop,w_1080,h_450/v1704895711/El%20buen%20gusto/FB_IMG_1704895471809_tivisp.jpg" className="img-fluid rounded-start" alt="..."></img>
          </div>
        </div>
      </div>
      <div className="card" >
        <div className="row g-0">
          <div className="col-md-6">
            <img src="https://res.cloudinary.com/dp6ojzhsc/image/upload/c_crop,w_1080,h_450/v1704895711/El%20buen%20gusto/FB_IMG_1704895471809_tivisp.jpg" className="img-fluid rounded-start" alt="..."></img>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bodas;
