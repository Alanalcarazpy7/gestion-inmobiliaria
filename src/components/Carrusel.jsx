import { useEffect } from "react";
import carussel1 from "../assets/img/carousel-1.jpg";
import carussel2 from "../assets/img/carousel-2.jpg";
import "./Carrusel.css";
import carrusel from "./carrusel.js";

const Carrusel = () => {
  useEffect(() => {
    carrusel();
  }, []);
  return (
    <div className="slider">
      <div className="slider-slides">
        <div className="slider-slide active">
          <img src={carussel1} alt="" />
        </div>
        <div className="slider-slide">
          <img src={carussel2} alt="" />
        </div>
      </div>
      <div className="slider-btns">
        <a href="#" className="prev">
          &laquo;
        </a>
        <a href="#" className="next">
          &raquo;
        </a>
      </div>
    </div>
  );
};

export default Carrusel;
