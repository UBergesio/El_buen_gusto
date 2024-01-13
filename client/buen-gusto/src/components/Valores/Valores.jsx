import style from "./Valores.module.css";

const Valores = () => {
    return (
        <div className={`container-fluid p-5 ${style.container}`} id="valores">
            <h1 className="text-light">Nuestra filosofía</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100 border-light bg-transparent text-light">
                    <div class="card-body">
                        <h5 class="card-title text-danger">Pasión por la Gastronomía</h5>
                        <p class="card-text">Nuestra pasión por la gastronomía impulsa cada plato que preparamos. Nos esforzamos por fusionar sabores exquisitos y presentaciones impecables para crear experiencias culinarias inolvidables.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-light bg-transparent text-light">
                    <div class="card-body">
                        <h5 class="card-title">Compromiso con la Calidad</h5>
                        <p class="card-text">Nos comprometemos a ofrecer solo lo mejor. Desde la elección de ingredientes frescos hasta la atención meticulosa a los detalles en la presentación, cada evento que atendemos refleja nuestro compromiso inquebrantable con la calidad.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-light bg-transparent text-light">
                    <div class="card-body">
                        <h5 class="card-title">Creatividad en Cada Bocado</h5>
                        <p class="card-text">En el Buen Gusto, celebramos la creatividad en la cocina. Cada menú que creamos es una obra de arte culinaria, diseñada para sorprender y deleitar a cada paladar.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-light bg-transparent text-light">
                    <div class="card-body">
                        <h5 class="card-title">Experiencia Personalizada</h5>
                        <p class="card-text">Entendemos que cada evento es único. Nos esforzamos por ofrecer una experiencia de catering personalizada, adaptada a las preferencias y necesidades específicas de cada cliente.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-light bg-transparent text-light">
                    <div class="card-body">
                        <h5 class="card-title">Sostenibilidad y Responsabilidad</h5>
                        <p class="card-text">Somos conscientes de nuestro impacto en el medio ambiente. Nos comprometemos a utilizar ingredientes sostenibles, reducir los residuos y adoptar prácticas responsables en todas nuestras operaciones.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-light bg-transparent text-light">
                    <div class="card-body">
                        <h5 class="card-title">Innovación Constante</h5>
                        <p class="card-text">La innovación impulsa nuestro enfoque. Siempre estamos buscando nuevas tendencias culinarias, presentaciones creativas y formas innovadoras de hacer que cada evento sea único y memorable.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Valores;