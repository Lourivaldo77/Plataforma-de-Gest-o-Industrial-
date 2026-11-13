import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "../../assets/animations/website-building.json";

function OSINT() {
  const animationRef = useRef(null);

  useEffect(() => {
    if (!animationRef.current) return;

    const animation = lottie.loadAnimation({
      container: animationRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData,
    });

    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <section className="page-content">
      <div className="page-heading">
        <div>
          <span className="eyebrow">INTELIGÊNCIA</span>
          <h1>Inteligência OSINT</h1>
          <p>Recolha e análise de informação de fontes abertas.</p>
        </div>
      </div>

      <div
        style={{
          minHeight: "65vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "30px 20px",
        }}
      >
        <div
          ref={animationRef}
          style={{
            width: "min(100%, 420px)",
            height: "420px",
          }}
        />

        <h2>Estamos a preparar esta área</h2>

        <p style={{ maxWidth: "500px", opacity: 0.7 }}>
          O módulo de Inteligência OSINT está em desenvolvimento. Em breve,
          poderás acompanhar informações, notícias e indicadores estratégicos do
          mercado petrolífero.
        </p>

        <span
          style={{
            marginTop: "20px",
            padding: "8px 18px",
            borderRadius: "20px",
            background: "rgba(255, 180, 0, 0.12)",
            color: "#d99b27",
            fontSize: "12px",
            fontWeight: 600,
          }}
        >
          EM DESENVOLVIMENTO
        </span>
      </div>
    </section>
  );
}

export default OSINT;
