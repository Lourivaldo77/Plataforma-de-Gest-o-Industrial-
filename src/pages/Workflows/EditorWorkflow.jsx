const workflowSteps = [
  { name: "Receção do evento", type: "input" },
  { name: "Validação", type: "process" },
  { name: "Cronograma", type: "process" },
  { name: "Execução", type: "action" },
  { name: "Relatório", type: "output" },
];

function EditorWorkflow() {
  return (
    <>
      <div className="page-heading">
        <div>
          <span className="eyebrow">EDITOR</span>
          <h1>Workflow Builder</h1>
          <p>Crie e ajuste fluxos de automação para a operação industrial.</p>
        </div>

        <div className="editor-actions">
          <button type="button" className="secondary-button">
            Cancelar
          </button>
          <button type="button" className="primary-button">
            Guardar fluxo
          </button>
        </div>
      </div>

      <section className="workflow-editor-shell">
        <aside className="workflow-sidebar">
          <h3>Componentes</h3>
          <button type="button" className="tool-item">Trigger</button>
          <button type="button" className="tool-item">Condição</button>
          <button type="button" className="tool-item">Ação</button>
          <button type="button" className="tool-item">Notificação</button>
        </aside>

        <div className="workflow-canvas">
          <div className="workflow-topbar">
            <span>Fluxo principal</span>
            <span className="status-pill active">Ativo</span>
          </div>

          <div className="node-row">
            {workflowSteps.map((step, index) => (
              <div key={step.name} className={`flow-node ${step.type}`}>
                <span className="node-index">{index + 1}</span>
                <strong>{step.name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default EditorWorkflow;
