export default function LogoBar() {
  const logos = [
    "Deloitte",
    "KPMG",
    "EY",
    "PwC",
    "McKinsey",
    "Bain",
  ];

  return (
    <section className="bg-background py-12 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted mb-8 uppercase tracking-wider">
          Confiado por equipos financieros en toda LATAM
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((name) => (
            <div
              key={name}
              className="text-lg font-bold text-muted/40 select-none"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
