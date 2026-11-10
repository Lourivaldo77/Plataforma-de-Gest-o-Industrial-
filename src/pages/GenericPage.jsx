const moduleContent = {
  Equipamentos: {
    stats: [
      { label: "Ativos em operação", value: "184", hint: "Unidades monitorizadas" },
      { label: "Disponibilidade", value: "98.4%", hint: "Últimas 24h" },
      { label: "Manutenções pendentes", value: "13", hint: "Planeadas esta semana" },
    ],
    rows: [
      { id: "EQ-104", description: "Compressor principal A1", date: "03/11/2026", status: "Activo", tone: "success" },
      { id: "EQ-219", description: "Bomba de refrigeração B2", date: "02/11/2026", status: "Em revisão", tone: "warning" },
      { id: "EQ-331", description: "Linha de produção L-07", date: "01/11/2026", status: "Standby", tone: "neutral" },
    ],
  },
  Manutenção: {
    stats: [
      { label: "Ordens abertas", value: "26", hint: "Ações em curso" },
      { label: "Execução semanal", value: "87%", hint: "Meta atingida" },
      { label: "Tempo médio", value: "4.2h", hint: "Por intervenção" },
    ],
    rows: [
      { id: "MT-042", description: "Troca de correias de transmissão", date: "04/11/2026", status: "Programada", tone: "warning" },
      { id: "MT-081", description: "Calibração de sensores", date: "04/11/2026", status: "Concluída", tone: "success" },
      { id: "MT-109", description: "Inspeção de válvulas", date: "03/11/2026", status: "Pendente", tone: "neutral" },
    ],
  },
  "Cibersegurança": {
    stats: [
      { label: "Eventos monitorizados", value: "1.482", hint: "Últimas 24h" },
      { label: "Incidentes críticos", value: "03", hint: "Ações prioritárias" },
      { label: "Patchs concluídos", value: "96%", hint: "Vulnerabilidades" },
    ],
    rows: [
      { id: "CS-018", description: "Bloqueio de IP suspeita", date: "03/11/2026", status: "Mitigado", tone: "success" },
      { id: "CS-043", description: "Atualização de endpoint", date: "02/11/2026", status: "Em progresso", tone: "warning" },
      { id: "CS-057", description: "Análise de firewall", date: "01/11/2026", status: "Aguardando", tone: "neutral" },
    ],
  },
  Incidentes: {
    stats: [
      { label: "Alertas ativos", value: "09", hint: "Com risco operacional" },
      { label: "Tempo de resposta", value: "18m", hint: "Média do turno" },
      { label: "Resolvidos", value: "76%", hint: "No mês" },
    ],
    rows: [
      { id: "IC-230", description: "Interrupção curta em linha 2", date: "04/11/2026", status: "Em análise", tone: "warning" },
      { id: "IC-187", description: "Falha de comunicação SCADA", date: "04/11/2026", status: "Resolvido", tone: "success" },
      { id: "IC-142", description: "Alerta de temperatura", date: "03/11/2026", status: "Aberto", tone: "neutral" },
    ],
  },
  OSINT: {
    stats: [
      { label: "Fontes monitoradas", value: "64", hint: "Feeds ativos" },
      { label: "Sinais relevantes", value: "17", hint: "Últimas 48h" },
      { label: "Cobertura", value: "92%", hint: "Região analisada" },
    ],
    rows: [
      { id: "OS-011", description: "Monitoramento de ameaças digitais", date: "04/11/2026", status: "Em alerta", tone: "warning" },
      { id: "OS-022", description: "Comparação de indicadores públicos", date: "03/11/2026", status: "Validado", tone: "success" },
      { id: "OS-034", description: "Fluxos de mídia concorrente", date: "02/11/2026", status: "Arquivado", tone: "neutral" },
    ],
  },
  Workflows: {
    stats: [
      { label: "Fluxos ativos", value: "42", hint: "Automatizações em uso" },
      { label: "Execuções hoje", value: "318", hint: "Processos disparados" },
      { label: "Sucesso", value: "99.1%", hint: "Semanas anteriores" },
    ],
    rows: [
      { id: "WF-002", description: "Aprovação de manutenção crítica", date: "04/11/2026", status: "Em execução", tone: "warning" },
      { id: "WF-067", description: "Relatório de incidentes", date: "04/11/2026", status: "Concluído", tone: "success" },
      { id: "WF-119", description: "Validação de segurança", date: "03/11/2026", status: "Pendente", tone: "neutral" },
    ],
  },
  Execuções: {
    stats: [
      { label: "Operações hoje", value: "144", hint: "Ordenadas por turno" },
      { label: "Conclusão", value: "91%", hint: "No turno atual" },
      { label: "Intervenções urgentes", value: "06", hint: "Prioridade máxima" },
    ],
    rows: [
      { id: "EX-011", description: "Procedimento de arranque", date: "04/11/2026", status: "Concluído", tone: "success" },
      { id: "EX-049", description: "Troca de reagente em linha 3", date: "04/11/2026", status: "Em curso", tone: "warning" },
      { id: "EX-086", description: "Inspeção de rotina", date: "03/11/2026", status: "Planeado", tone: "neutral" },
    ],
  },
  Relatórios: {
    stats: [
      { label: "Relatórios emitidos", value: "128", hint: "Últimos 30 dias" },
      { label: "Templates ativos", value: "26", hint: "Customizados" },
      { label: "Exportações", value: "94%", hint: "Entregues no prazo" },
    ],
    rows: [
      { id: "RP-300", description: "Resumo operacional diário", date: "04/11/2026", status: "Publicado", tone: "success" },
      { id: "RP-245", description: "Análise de disponibilidade", date: "03/11/2026", status: "Em revisão", tone: "warning" },
      { id: "RP-180", description: "Relatório de segurança", date: "02/11/2026", status: "Arquivado", tone: "neutral" },
    ],
  },
  Utilizadores: {
    stats: [
      { label: "Utilizadores ativos", value: "138", hint: "No sistema" },
      { label: "Perfis definidos", value: "09", hint: "Por função" },
      { label: "Acessos aprovados", value: "97%", hint: "Últimos 7 dias" },
    ],
    rows: [
      { id: "USR-014", description: "Reset de senha do turno A", date: "04/11/2026", status: "Aprovado", tone: "success" },
      { id: "USR-039", description: "Pedido de acesso de operador", date: "04/11/2026", status: "Pendente", tone: "warning" },
      { id: "USR-065", description: "Revogação de perfil", date: "03/11/2026", status: "Concluído", tone: "neutral" },
    ],
  },
  Auditoria: {
    stats: [
      { label: "Eventos registados", value: "2.418", hint: "Últimas 24h" },
      { label: "Acessos críticos", value: "14", hint: "Requerem revisão" },
      { label: "Integridade", value: "99.7%", hint: "Controle de alterações" },
    ],
    rows: [
      { id: "AUD-014", description: "Alteração de configuração de rede", date: "04/11/2026", status: "Auditado", tone: "success" },
      { id: "AUD-091", description: "Login de utilizador externo", date: "04/11/2026", status: "Em revisão", tone: "warning" },
      { id: "AUD-133", description: "Atualização de permissões", date: "03/11/2026", status: "Concluído", tone: "neutral" },
    ],
  },
  Definições: {
    stats: [
      { label: "Parâmetros ativos", value: "86", hint: "Configurações globais" },
      { label: "Políticas em vigor", value: "12", hint: "Regras operacionais" },
      { label: "Ajustes pendentes", value: "04", hint: "Requerem aprovação" },
    ],
    rows: [
      { id: "CFG-003", description: "Ajuste de limites de produção", date: "04/11/2026", status: "Ativo", tone: "success" },
      { id: "CFG-024", description: "Configuração de alertas", date: "04/11/2026", status: "Pendente", tone: "warning" },
      { id: "CFG-041", description: "Proteções de acesso", date: "03/11/2026", status: "Padrão", tone: "neutral" },
    ],
  },
};

const defaultContent = {
  stats: [
    { label: "Registos totais", value: "128", hint: "Dados demonstrativos" },
    { label: "Activos", value: "96", hint: "Dados demonstrativos" },
    { label: "Pendentes", value: "12", hint: "Dados demonstrativos" },
  ],
  rows: [
    { id: "REG-001", description: "Registo demonstrativo 01", date: "03/11/2026", status: "Activo", tone: "success" },
    { id: "REG-002", description: "Registo demonstrativo 02", date: "02/11/2026", status: "Pendente", tone: "warning" },
    { id: "REG-003", description: "Registo demonstrativo 03", date: "01/11/2026", status: "Arquivado", tone: "neutral" },
  ],
};

function GenericPage({ title, subtitle }) {
  const currentContent = moduleContent[title] || defaultContent;

  return (
    <>
      <div className="page-heading">
        <div><span className="eyebrow">MÓDULO DA PLATAFORMA</span><h1>{title}</h1><p>{subtitle}</p></div>
        <button className="primary-button" onClick={() => alert("Esta função será implementada numa próxima etapa.")}>＋ Novo registo</button>
      </div>

      <div className="generic-stats">
        {currentContent.stats.map((stat) => (
          <article key={stat.label} className="metric-card">
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
            <small>{stat.hint}</small>
          </article>
        ))}
      </div>

      <section className="panel table-panel generic-table">
        <div className="panel-heading"><div><h3>Lista de registos</h3><p>Exemplo de apresentação dos dados deste módulo.</p></div><button className="secondary-button">⌕ Filtrar</button></div>
        <div className="table-wrap">
          <table>
            <thead><tr><th>IDENTIFICADOR</th><th>DESCRIÇÃO</th><th>DATA</th><th>ESTADO</th></tr></thead>
            <tbody>
              {currentContent.rows.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.description}</td>
                  <td>{row.date}</td>
                  <td><span className={`badge ${row.tone}`}>{row.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <p className="demo-disclaimer">Os dados apresentados são fictícios e servem apenas para demonstrar o design.</p>
    </>
  );
}

export default GenericPage;
