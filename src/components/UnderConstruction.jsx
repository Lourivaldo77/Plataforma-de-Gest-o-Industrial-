import Lottie from "lottie-react";
import animation from "../assets/animations/under-construction.json";

export default function UnderConstruction() {
  return (
    <div className="under-construction">
      <div className="under-construction__animation">
        <Lottie animationData={animation} loop autoplay />
      </div>

      <h1>Página em construção</h1>

      <p>
        Estamos a desenvolver esta funcionalidade para proporcionar uma melhor
        experiência.
      </p>

      <span className="under-construction__badge">EM DESENVOLVIMENTO</span>
    </div>
  );
}
