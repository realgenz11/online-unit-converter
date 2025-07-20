export function EnhancedHeader() {
  return (
    <section id="converter" className="text-center mb-16 pt-20">
      <div className="mb-8">
        <h1 className="hero-title mb-6">
          Online Unit Converter
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-medium mb-8">
          Professional tool for instant accurate conversions across 250+ units in 12 categories. 
          Convert length, weight, temperature, volume, area, time, energy, power, pressure, speed, and digital storage with precision.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold mb-8">
          <div className="flex items-center gap-2 text-primary px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-lg">⚡</span>
            <span>Instant Results</span>
          </div>
          <div className="flex items-center gap-2 text-accent px-6 py-3 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-lg">🎯</span>
            <span>100% Accurate</span>
          </div>
          <div className="flex items-center gap-2 text-success px-6 py-3 rounded-full bg-success/10 border border-success/20">
            <span className="text-lg">📱</span>
            <span>Mobile Friendly</span>
          </div>
          <div className="flex items-center gap-2 text-warning px-6 py-3 rounded-full bg-warning/10 border border-warning/20">
            <span className="text-lg">🆓</span>
            <span>Always Free</span>
          </div>
        </div>
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-bold">
            <div className="text-center">
              <div className="text-2xl font-black text-primary">250+</div>
              <div className="text-muted-foreground">Units</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-accent">12</div>
              <div className="text-muted-foreground">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-success">100%</div>
              <div className="text-muted-foreground">Accurate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-warning">0$</div>
              <div className="text-muted-foreground">Cost</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}