export function EnhancedHeader() {
  return (
    <section className="text-center mb-16 bounce-in">
      <div className="mb-8">
        <h1 className="hero-title mb-6">
          Unit Converter
        </h1>
        <p className="text-2xl sm:text-3xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed mb-8">
          The most comprehensive and beautiful unit converter on the web. Convert between hundreds of units across 9 different categories with precision and style.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 text-lg font-semibold">
          <div className="flex items-center gap-2 text-primary">
            <span className="text-2xl">⚡</span>
            <span>Instant Results</span>
          </div>
          <div className="flex items-center gap-2 text-accent">
            <span className="text-2xl">🎯</span>
            <span>High Precision</span>
          </div>
          <div className="flex items-center gap-2 text-success">
            <span className="text-2xl">📱</span>
            <span>Mobile Optimized</span>
          </div>
        </div>
      </div>
    </section>
  );
}