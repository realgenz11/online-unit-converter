export function Header() {
  return (
    <header className="text-center mb-8 slide-up">
      <div className="inline-flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl">
          ⚡
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Unit Converter
        </h1>
      </div>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Fast, accurate, and beautiful unit conversions. Convert between length, weight, temperature, volume, area, and time with ease.
      </p>
    </header>
  );
}