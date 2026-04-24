export default function Comparison() {
  const criteria = [
    { label: "Time-to-value", pnlpilot: "Minutos", chatgpt: "Variable", tools: "Semanas", templates: "Horas" },
    { label: "Parte de un P&G existente", pnlpilot: true, chatgpt: "Parcial", tools: false, templates: true },
    { label: "Mapeo contable validado", pnlpilot: true, chatgpt: false, tools: true, templates: false },
    { label: "Dashboard automático", pnlpilot: true, chatgpt: false, tools: true, templates: false },
    { label: "Escenarios de sensibilidad", pnlpilot: true, chatgpt: false, tools: true, templates: "Manual" },
    { label: "Commentary ejecutivo", pnlpilot: true, chatgpt: "Genérico", tools: false, templates: false },
    { label: "Sin setup largo", pnlpilot: true, chatgpt: true, tools: false, templates: true },
    { label: "Diseñado para advisors / SMBs", pnlpilot: true, chatgpt: false, tools: false, templates: false },
  ];

  const renderCell = (value: boolean | string) => {
    if (value === true)
      return (
        <svg className="h-5 w-5 text-primary mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      );
    if (value === false)
      return (
        <svg className="h-5 w-5 text-muted/40 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      );
    return <span className="text-xs text-muted">{value}</span>;
  };

  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            ¿Por qué LedgerPilot?
          </h2>
          <p className="mt-4 text-lg text-muted">
            Comparación honesta contra las alternativas que ya conoces.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-sm font-medium text-muted py-4 pr-4 w-[200px]"></th>
                <th className="text-center text-sm font-bold text-foreground py-4 px-4">
                  <span className="text-primary">LedgerPilot</span>
                </th>
                <th className="text-center text-sm font-medium text-muted py-4 px-4">
                  ChatGPT / Claude<br />+ Excel
                </th>
                <th className="text-center text-sm font-medium text-muted py-4 px-4">
                  Causal / Runway<br />/ Pry
                </th>
                <th className="text-center text-sm font-medium text-muted py-4 px-4">
                  Plantillas<br />de Excel
                </th>
              </tr>
            </thead>
            <tbody>
              {criteria.map((row) => (
                <tr key={row.label} className="border-b border-border/50">
                  <td className="text-sm font-medium text-foreground py-3.5 pr-4">
                    {row.label}
                  </td>
                  <td className="text-center py-3.5 px-4 bg-primary/5">
                    {renderCell(row.pnlpilot)}
                  </td>
                  <td className="text-center py-3.5 px-4">
                    {renderCell(row.chatgpt)}
                  </td>
                  <td className="text-center py-3.5 px-4">
                    {renderCell(row.tools)}
                  </td>
                  <td className="text-center py-3.5 px-4">
                    {renderCell(row.templates)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
