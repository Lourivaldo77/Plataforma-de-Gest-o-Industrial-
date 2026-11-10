import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    localStorage.setItem("isAuthenticated", "true");
    navigate("/dashboard");
  }

  return (
    <div className="login-page">
      {/* LADO ESQUERDO */}
      <section className="login-banner">
        <div className="brand">

        </div>

        <div className="banner-content">
          <h1>
            Mais eficiência.
            <br />
            Mais segurança.
            <br />
            Um futuro sustentável
            <br />
            para Angola.
          </h1>

          <p>
            Tecnologia, monitorização e inteligência para uma indústria mais
            segura e eficiente.
          </p>
        </div>

        <div className="banner-footer">ANGOLA • INDÚSTRIA • INOVAÇÃO</div>
      </section>

      {/* LADO DIREITO */}
      <section className="login-area">
        <div className="login-card">
          <div className="card-header">
            <h2>Entrar na plataforma</h2>
            <p>Acesse o seu ambiente de trabalho.</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="email">Utilizador</label>

              <input
                type="email"
                id="email"
                placeholder="usuario@empresa.ao"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Palavra-passe</label>

              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Introduza a sua palavra-passe"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Ocultar" : "Mostrar"}
                </button>
              </div>
            </div>

            <div className="login-options">
              <label>
                <input type="checkbox" />
                Manter sessão ativa
              </label>

              <a href="#">Esqueceu a palavra-passe?</a>
            </div>

            <button type="submit" className="login-button">
              Entrar
            </button>
          </form>

          <div className="login-divider">
            <span>Ou entre com</span>
          </div>

          <div className="social-login">
            <button type="button">Linkedin</button>
            <button type="button">Google</button>
          </div>

          <div className="card-footer">
            <span>© 2026 ANGOLA OIL</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
