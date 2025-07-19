export function EnhancedHeader() {
  return (
    <section id="converter" className="text-center mb-16 pt-20 bounce-in">
      <div className="mb-8">
        <h1 className="hero-title mb-6">
          Online Unit Converter
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium mb-8">
          Professional tool for instant accurate conversions across all units.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold">
          <div className="flex items-center gap-2 text-primary px-4 py-2 rounded-full bg-primary/10">
            <span className="text-lg">⚡</span>
            <span>Instant</span>
          </div>
          <div className="flex items-center gap-2 text-accent px-4 py-2 rounded-full bg-accent/10">
            <span className="text-lg">🎯</span>
            <span>Precise</span>
          </div>
          <div className="flex items-center gap-2 text-success px-4 py-2 rounded-full bg-success/10">
            <span className="text-lg">📱</span>
            <span>Mobile</span>
          </div>
        </div>
      </div>
    </section>
  );
}