interface ConversionFormula {
  category: string;
  formulas: {
    title: string;
    formula: string;
    example: string;
    explanation: string;
  }[];
}

const conversionFormulas: ConversionFormula[] = [
  {
    category: "Length",
    formulas: [
      {
        title: "Metric Conversions",
        formula: "1 meter = 100 centimeters = 1,000 millimeters",
        example: "5 meters = 5 × 100 = 500 centimeters",
        explanation: "The metric system uses powers of 10, making conversions simple multiplication or division."
      },
      {
        title: "Imperial to Metric",
        formula: "1 inch = 2.54 cm, 1 foot = 30.48 cm, 1 yard = 0.9144 m",
        example: "12 inches = 12 × 2.54 = 30.48 cm",
        explanation: "These are exact conversion factors defined by international standards."
      }
    ]
  },
  {
    category: "Weight",
    formulas: [
      {
        title: "Metric Weight",
        formula: "1 kilogram = 1,000 grams = 1,000,000 milligrams",
        example: "2.5 kg = 2.5 × 1,000 = 2,500 grams",
        explanation: "Weight in the metric system follows the same decimal pattern as length."
      },
      {
        title: "Imperial Weight",
        formula: "1 pound = 16 ounces = 453.592 grams",
        example: "5 pounds = 5 × 453.592 = 2,267.96 grams",
        explanation: "Imperial weight units have historical origins and use different multiplication factors."
      }
    ]
  },
  {
    category: "Temperature",
    formulas: [
      {
        title: "Celsius to Fahrenheit",
        formula: "°F = (°C × 9/5) + 32",
        example: "20°C = (20 × 9/5) + 32 = 68°F",
        explanation: "This formula accounts for both the different scale sizes and the offset between freezing points."
      },
      {
        title: "Celsius to Kelvin",
        formula: "K = °C + 273.15",
        example: "25°C = 25 + 273.15 = 298.15 K",
        explanation: "Kelvin uses the same scale as Celsius but starts at absolute zero (-273.15°C)."
      }
    ]
  },
  {
    category: "Volume",
    formulas: [
      {
        title: "Metric Volume",
        formula: "1 liter = 1,000 milliliters = 0.001 cubic meters",
        example: "3 liters = 3 × 1,000 = 3,000 ml",
        explanation: "One liter is defined as the volume of one cubic decimeter (10cm × 10cm × 10cm)."
      },
      {
        title: "US Liquid Measures",
        formula: "1 gallon = 4 quarts = 8 pints = 16 cups = 3.78541 liters",
        example: "2 gallons = 2 × 3.78541 = 7.57082 liters",
        explanation: "US liquid measures are based on the old English wine gallon system."
      }
    ]
  }
];

export function EducationalSection() {
  return (
    <section className="mt-20 mb-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Understanding Unit Conversions
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Learn the math behind the conversions. Understanding these formulas helps you verify results and convert units even without a calculator.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {conversionFormulas.map((category, index) => (
          <div key={category.category} className="formula-card">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              {category.category} Conversions
            </h3>
            
            <div className="space-y-6">
              {category.formulas.map((formula, formulaIndex) => (
                <div key={formulaIndex} className="space-y-3">
                  <h4 className="text-lg font-semibold text-primary">
                    {formula.title}
                  </h4>
                  
                  <div className="bg-secondary/50 p-4 rounded-xl">
                    <code className="text-sm font-mono text-foreground">
                      {formula.formula}
                    </code>
                  </div>
                  
                  <div className="bg-accent/10 p-4 rounded-xl border border-accent/20">
                    <p className="text-sm font-semibold text-accent mb-2">Example:</p>
                    <p className="text-sm text-accent-foreground/80">{formula.example}</p>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {formula.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="formula-card max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            💡 Pro Tips for Unit Conversion
          </h3>
          <div className="grid gap-4 md:grid-cols-3 text-left">
            <div className="space-y-2">
              <h4 className="font-semibold text-primary">Check Your Work</h4>
              <p className="text-sm text-muted-foreground">
                Always verify if your result makes sense. A larger unit should give a smaller number.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-primary">Remember Key Facts</h4>
              <p className="text-sm text-muted-foreground">
                Water freezes at 0°C/32°F, body temperature is ~37°C/98.6°F.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-primary">Use Estimation</h4>
              <p className="text-sm text-muted-foreground">
                1 meter ≈ 3 feet, 1 kg ≈ 2.2 pounds, 1 liter ≈ 1 quart.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}