import { ArrowRight, Calculator, MousePointer, Smartphone, Copy } from 'lucide-react';

export function HowToUseSection() {
  const steps = [
    {
      step: "1",
      title: "Select Category",
      description: "Choose from 12 professional conversion categories",
      icon: <Calculator className="w-8 h-8 text-primary" />,
      details: "Pick from Length, Weight, Temperature, Volume, Area, Time, Energy, Power, Pressure, Speed, Digital Storage, and more."
    },
    {
      step: "2", 
      title: "Enter Your Value",
      description: "Type any number with full precision support",
      icon: <MousePointer className="w-8 h-8 text-accent" />,
      details: "Supports decimals, scientific notation, and values from microscopic to astronomical scales."
    },
    {
      step: "3",
      title: "Choose Units",
      description: "Select source and target units from dropdowns",
      icon: <ArrowRight className="w-8 h-8 text-success" />,
      details: "Instantly swap units with our one-click swap feature for bidirectional conversions."
    },
    {
      step: "4",
      title: "Get Instant Results",
      description: "See accurate conversions in real-time",
      icon: <Copy className="w-8 h-8 text-warning" />,
      details: "Results update as you type with professional-grade accuracy. Click to copy results instantly."
    }
  ];

  return (
    <section id="how-to-use" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-6">
            How to Use Our Professional Converter
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master professional unit conversions in 4 simple steps. 
            Designed for speed, accuracy, and daily professional use.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={step.step} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.step}
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {step.description}
              </p>
              <p className="text-sm text-muted-foreground/80 leading-relaxed">
                {step.details}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Usage Tips */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 mb-16">
          <div className="flex items-center gap-4 mb-6">
            <Smartphone className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">
              Mobile & Daily Use Tips
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">📱 Mobile Optimized</h4>
              <p className="text-sm text-muted-foreground">
                Large touch targets, fast loading, and offline capability for conversions anywhere.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">⚡ Instant Results</h4>
              <p className="text-sm text-muted-foreground">
                No waiting - conversions happen as you type with professional accuracy.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">📋 Quick Copy</h4>
              <p className="text-sm text-muted-foreground">
                Tap any result to copy to clipboard for use in other apps and documents.
              </p>
            </div>
          </div>
        </div>

        {/* AdSense Optimized CTA */}
        <div className="text-center bg-card rounded-3xl p-8 border border-border/50">
          <h3 className="text-2xl font-bold gradient-text mb-4">
            Ready for Professional Conversions?
          </h3>
          <p className="text-muted-foreground mb-6">
            Join thousands of professionals who trust our converter for accurate, 
            instant conversions across all measurement categories.
          </p>
          <a 
            href="#converter" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold hover:scale-105 transition-transform duration-200"
          >
            Start Converting Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}