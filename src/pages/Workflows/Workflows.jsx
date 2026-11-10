import { useNavigate } from "react-router-dom";

const workflowCards = [
  {
    name: "Inspeção de equipamentos",
    owner: "Manutenção" ,
    status: "Em execução",
    progress: 72,
    lastUpdate: "há 12 min",
  },
  {
    name: "Resposta a incidentes",
    owner: "Segurança",
    status: "Pendente",
    progress: 46,
    lastUpdate: "há 38 min",
  },
  {
    name: "Aprovação de relatórios",
    owner: "Operações",
    status: "Concluído",
    progress: 100,
    lastUpdate: "há 2h",
  },
];

function Workflows() {
  const navigate = useNavigate();

  return (
    <>
      <div className="page-heading">
        <div>
          <span className="eyebrow">AUTOMAÇÃO</span>
          <h1>Workflows</h1>
          <p>Orquestração de processos e fluxos operacionais da plataforma.</p>
        </div>

        <button className="primary-button" onClick={() => navigate("/workflows/editor")}>
          + Novo workflow
        </button>
      </div>

      <section className="metric-grid">
        <article className="metric-card">
          <div className="metric-top">
            <span>Fluxos activos</span>
            <span className="metric-icon">⚙️</span>
          </div>
          <strong>32</strong>
          <small>+5 em relação ao mês passado</small>
        </article>

        <article className="metric-card">
          <div className="metric-top">
            <span>Taxa de sucesso</span>
            <span className="metric-icon">✅</span>
          </div>
          <strong>98.4%</strong>
          <small>Desempenho operacional estável</small>
        </article>

        <article className="metric-card">
          <div className="metric-top">
            <span>Alertas automáticos</span>
            <span className="metric-icon">⚠️</span>
          </div>
          <strong>07</strong>
          <small>2 requerem atenção imediata</small>
        </article>

        <article className="metric-card">
          <div className="metric-top">
            <span>Tempo médio</span>
            <span className="metric-icon">⏱️</span>
          </div>
          <strong>14m</strong>
          <small>Concluídos por etapa</small>
        </article>
      </section>

      <section className="workflow-grid">
        {workflowCards.map((workflow) => (
          <article className="workflow-card" key={workflow.name}>
            <div className="workflow-header">
              <div>
                <span className="workflow-tag">{workflow.owner}</span>
                <h3>{workflow.name}</h3>
              </div>
              <span className={`status-pill ${workflow.status === "Concluído" ? "done" : workflow.status === "Pendente" ? "warning" : "active"}`}>
                {workflow.status}
              </span>
            </div>

            <div className="progress-block">
              <div className="progress-meta">
                <span>Progresso</span>
                <strong>{workflow.progress}%</strong>
              </div>
              <div className="progress-bar">
                <span style={{ width: `${workflow.progress}%` }} />
              </div>
            </div>

            <div className="workflow-footer">
              <small>Última atualização: {workflow.lastUpdate}</small>
              <button className="secondary-button small-button" type="button">
                Detalhes
              </button>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export default Workflows;
