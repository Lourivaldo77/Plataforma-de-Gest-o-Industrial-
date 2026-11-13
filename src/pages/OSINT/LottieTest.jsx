import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState } from "react";

export default function LottieTest() {
  const [error, setError] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#0b1220",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {error ? (
        <p style={{ color: "white" }}>Não foi possível carregar a animação.</p>
      ) : (
        <div style={{ width: 450, height: 450 }}>
          <DotLottieReact
            src="/animations/Website Building.json"
            loop
            autoplay
            onError={() => setError(true)}
          />
        </div>
      )}
    </div>
  );
}
