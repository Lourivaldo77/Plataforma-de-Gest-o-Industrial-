function Dashboard() {
  const metrics = [
    { label: "Equipamentos registados", value: "248", note: "+12 este mês", icon: "⚙" },
    { label: "Manutenções pendentes", value: "18", note: "5 com prioridade alta", icon: "🔧" },
    { label: "Alertas de segurança", value: "07", note: "2 requerem atenção", icon: "◈" },
    { label: "Workflows activos", value: "32", note: "98,4% de sucesso", icon: "⌘" },
  ];

  const performanceData = [
    { label: "Jan", value: 45 },
    { label: "Fev", value: 62 },
    { label: "Mar", value: 58 },
    { label: "Abr", value: 74 },
    { label: "Mai", value: 68 },
    { label: "Jun", value: 82 },
  ];

  const healthStatus = [
    { name: "Sistema OT", value: "98%", state: "normal" },
    { name: "Rede industrial", value: "91%", state: "normal" },
    { name: "Segurança endpoint", value: "76%", state: "warning" },
    { name: "Backup crítico", value: "88%", state: "normal" },
  ];

  return (
    <>
      <div className="page-heading">
        <div>
          <span className="eyebrow">VISÃO GERAL</span>
          <h1>Dashboard</h1>
          <p>Resumo do estado das operações industriais.</p>
        </div>
        <button className="secondary-button">⌑ Últimos 30 dias</button>
      </div>

      <div className="welcome-strip">
        <div>
          <span>TERÇA-FEIRA, 03 DE NOVEMBRO DE 2026</span>
          <h2>Bem-vindo ao centro de operações</h2>
          <p>Acompanhe os principais indicadores da plataforma num só lugar.</p>
        </div>
        <div className="welcome-symbol">AO</div>
      </div>

      <section className="metric-grid">
        {metrics.map((metric) => (
          <article className="metric-card" key={metric.label}>
            <div className="metric-top">
              <span>{metric.label}</span>
              <span className="metric-icon">{metric.icon}</span>
            </div>
            <strong>{metric.value}</strong>
            <small>{metric.note}</small>
          </article>
        ))}
      </section>

      <section className="dashboard-grid">
        <article className="panel">
          <div className="panel-heading">
            <div>
              <h3>Estado operacional</h3>
              <p>Distribuição ilustrativa dos equipamentos</p>
            </div>
            <span className="panel-menu">•••</span>
          </div>

          <div className="operation-summary">
            <div className="donut">
              <div>
                <strong>248</strong>
                <small>Total</small>
              </div>
            </div>

            <div className="legend">
              <div>
                <i className="legend-blue" />
                <span>Operacionais</span>
                <strong>196</strong>
              </div>
              <div>
                <i className="legend-yellow" />
                <span>Em manutenção</span>
                <strong>34</strong>
              </div>
              <div>
                <i className="legend-red" />
                <span>Indisponíveis</span>
                <strong>18</strong>
              </div>
            </div>
          </div>
        </article>

        <article className="panel">
          <div className="panel-heading">
            <div>
              <h3>Alertas recentes</h3>
              <p>Últimas ocorrências registadas</p>
            </div>
            <span className="panel-menu">•••</span>
          </div>

          <div className="alert-list">
            <div className="alert-item">
              <span className="alert-mark red-mark">!</span>
              <div>
                <strong>Alerta de segurança</strong>
                <small>Actividade invulgar detectada · 10:42</small>
              </div>
            </div>
            <div className="alert-item">
              <span className="alert-mark yellow-mark">!</span>
              <div>
                <strong>Manutenção próxima</strong>
                <small>Bomba industrial BP-024 · 09:18</small>
              </div>
            </div>
            <div className="alert-item">
              <span className="alert-mark blue-mark">i</span>
              <div>
                <strong>Workflow concluído</strong>
                <small>Verificação diária · 08:05</small>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="dashboard-grid lower-grid">
        <article className="panel chart-panel">
          <div className="panel-heading">
            <div>
              <h3>Performance mensal</h3>
              <p>Indicadores de produção e estabilidade</p>
            </div>
            <button className="text-button">Ver detalhe →</button>
          </div>

          <div className="trend-chart" aria-label="Performance mensal">
            {performanceData.map((item) => (
              <div key={item.label} className="bar-group">
                <span className="chart-bar" style={{ height: `${item.value}%` }} />
                <small>{item.label}</small>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="panel-heading">
            <div>
              <h3>Saúde do sistema</h3>
              <p>Estado dos serviços críticos</p>
            </div>
            <span className="panel-menu">•••</span>
          </div>

          <div className="system-health-list">
            {healthStatus.map((item) => (
              <div key={item.name} className="health-item">
                <div>
                  <strong>{item.name}</strong>
                  <small>{item.value}</small>
                </div>
                <span className={`status-pill ${item.state}`}>
                  {item.state === "warning" ? "Atenção" : "Normal"}
                </span>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="panel table-panel">
        <div className="panel-heading">
          <div>
            <h3>Actividade recente</h3>
            <p>Movimentos registados na plataforma</p>
          </div>
          <button className="text-button">Ver todos →</button>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>ACTIVIDADE</th>
                <th>RESPONSÁVEL</th>
                <th>DATA</th>
                <th>ESTADO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Inspecção de equipamento EQ-104</td>
                <td>Equipa de manutenção</td>
                <td>03/11/2026 10:30</td>
                <td><span className="badge success">Concluído</span></td>
              </tr>
              <tr>
                <td>Revisão de alerta SOC-028</td>
                <td>Analista de segurança</td>
                <td>03/11/2026 09:45</td>
                <td><span className="badge warning">Em análise</span></td>
              </tr>
              <tr>
                <td>Execução do workflow WF-012</td>
                <td>Sistema automático</td>
                <td>03/11/2026 08:05</td>
                <td><span className="badge success">Concluído</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
