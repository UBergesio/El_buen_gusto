import style from "./Carrusel.module.css"

const Carrusel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className={`carousel slide ${style.tamanioCarrusel}`}
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://res.cloudinary.com/dp6ojzhsc/image/upload/v1695850045/cld-sample-3.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>Primera imagen</h3>
            <p>primera descripcion.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://res.cloudinary.com/dp6ojzhsc/image/upload/v1695850044/cld-sample-2.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>Segunda imagen</h3>
            <p>Segunda Descripcion.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://res.cloudinary.com/dp6ojzhsc/image/upload/v1695850045/cld-sample-4.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>Tercer imagen</h3>
            <p>Tercer descripcion.</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
 }
export default Carrusel;