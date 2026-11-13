import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const DEMO_CREDENTIALS = {
  email: "admin@empresa.ao",
  password: "admin123",
};

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(event) {
    const { id, value } = event.target;

    setFormData((current) => ({ ...current, [id]: value }));

    if (error) {
      setError("");
    }
  }

  function handleLogin(event) {
    event.preventDefault();

    const normalizedEmail = formData.email.trim().toLowerCase();

    if (
      normalizedEmail !== DEMO_CREDENTIALS.email ||
      formData.password !== DEMO_CREDENTIALS.password
    ) {
      setError("Credenciais inválidas. Use admin@empresa.ao / admin123.");
      return;
    }

    const session = {
      email: normalizedEmail,
      name: "Administrador",
      role: "admin",
      isAuthenticated: true,
      lastLogin: new Date().toISOString(),
    };

    localStorage.setItem("authSession", JSON.stringify(session));
    navigate("/dashboard");
  }

  return (
    <div className="login-page">
      <section className="login-banner">
        <div className="brand" />

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
                value={formData.email}
                onChange={handleChange}
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
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Introduza a sua palavra-passe"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((current) => !current)}
                >
                  {showPassword ? "Ocultar" : "Mostrar"}
                </button>
              </div>
            </div>

            {error ? (
              <p className="login-error" role="alert">
                {error}
              </p>
            ) : null}

            <div className="login-options">
              <label>
                <input type="checkbox" />
                Manter sessão ativa
              </label>

              <a href="#">Esqueceu a palavra-passe?</a>
            </div>

            <p className="demo-credentials">
              Demo: {DEMO_CREDENTIALS.email} / {DEMO_CREDENTIALS.password}
            </p>

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
