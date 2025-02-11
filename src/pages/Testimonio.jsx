import CarruselTestimonio from "../components/CarruselTestimonio.jsx";
import cliente1 from "../assets/img/testimonial-1.jpg";
import cliente2 from "../assets/img/testimonial-2.jpg";
import cliente3 from "../assets/img/testimonial-3.jpg";
import cliente4 from "../assets/img/testimonial-4.jpg";
import "./testimonio.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import '@splidejs/react-splide/css';
// or other themes
//import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';



const clientes = [
  {
    id: 1,
    nombre: "Client Name",
    img: cliente1,
    testimonio:
      "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos",
    profesion: "Profession",
  },
  {
    id: 2,
    nombre: "Client Name",
    img: cliente2,
    testimonio:
      "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos",
    profesion: "Profession",
  },
  {
    id: 3,
    nombre: "Client Name",
    img: cliente3,
    testimonio:
      "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos",
    profesion: "Profession",
  },
  {
    id: 4,
    nombre: "Client Name",
    img: cliente4,
    testimonio:
      "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos",
    profesion: "Profession",
  },
];

const Testimonio = () => {
  return (
    <div className="testimonio-container" id="testimonios">
      <h2>¡Lo que dicen nuestros clientes!</h2>
      <p>
        Nos enorgullece la satisfacción de nuestros clientes. Sus testimonios
        reflejan nuestro compromiso con la calidad y el excelente servicio.
      </p>

      <Splide
        options={{
          type: "loop",
          perPage: 2, // Muestra dos testimonios a la vez
          perMove: 1, // Se mueve de uno en uno
          pagination: false, // Oculta los indicadores de paginación
          arrows: true, // Activa las flechas de navegación
          breakpoints: {
            840: { perPage: 1 }, // En móviles muestra solo 1 testimonio
          },
        }}
        aria-label="Testimonios de clientes"
      >
        {clientes.map((cliente) => (
          <SplideSlide key={cliente.id}>
            <CarruselTestimonio clientes={cliente} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Testimonio;
