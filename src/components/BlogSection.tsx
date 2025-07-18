interface BlogPost {
  title: string;
  content: string;
  category: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "How to Use This Unit Converter Like a Pro",
    category: "Guide",
    readTime: "3 min read",
    content: `
      <h3>Getting Started</h3>
      <p>Using our unit converter is incredibly simple:</p>
      <ol>
        <li><strong>Choose your category</strong> - Click on any of the 9 categories (Length, Weight, Temperature, etc.)</li>
        <li><strong>Enter your value</strong> - Type the number you want to convert in the top input field</li>
        <li><strong>Select units</strong> - Use the dropdown menus to choose your "from" and "to" units</li>
        <li><strong>Get instant results</strong> - The conversion happens automatically as you type!</li>
      </ol>
      
      <h3>Pro Tips</h3>
      <ul>
        <li>Use the swap button (↕️) to quickly reverse your conversion</li>
        <li>The tool works with decimals, scientific notation, and even very large numbers</li>
        <li>All conversions are bidirectional - you can edit either field</li>
        <li>Bookmark specific categories for quick access to your most-used conversions</li>
      </ul>
      
      <h3>Mobile Usage</h3>
      <p>Our converter is fully optimized for mobile devices. The interface adapts to your screen size, making it easy to convert units on the go. The large input fields and buttons are designed for touch interaction.</p>
    `
  },
  {
    title: "Understanding Unit Conversion Accuracy",
    category: "Technical",
    readTime: "5 min read",
    content: `
      <h3>Precision You Can Trust</h3>
      <p>Our unit converter uses high-precision mathematical constants and algorithms to ensure accuracy across all conversions. Here's what makes our tool reliable:</p>
      
      <h3>International Standards</h3>
      <ul>
        <li><strong>SI Base Units</strong> - All metric conversions use official SI (International System of Units) definitions</li>
        <li><strong>NIST Constants</strong> - Physical constants are sourced from the National Institute of Standards and Technology</li>
        <li><strong>ISO Standards</strong> - Imperial and US customary units follow ISO 31 standards</li>
      </ul>
      
      <h3>Precision Levels</h3>
      <p>Different types of conversions have different precision requirements:</p>
      <ul>
        <li><strong>Length & Volume</strong> - Up to 15 significant digits for scientific applications</li>
        <li><strong>Temperature</strong> - Precise to 0.001 degrees for all scales</li>
        <li><strong>Weight & Mass</strong> - Accurate to the microgram level when needed</li>
        <li><strong>Energy & Power</strong> - Suitable for engineering calculations</li>
      </ul>
      
      <h3>Error Handling</h3>
      <p>Our system automatically handles edge cases like very large numbers, very small numbers, and infinity cases. Scientific notation is used when appropriate to maintain readability.</p>
    `
  },
  {
    title: "The Complete Guide to Unit Categories",
    category: "Reference",
    readTime: "8 min read",
    content: `
      <h3>Length Conversions</h3>
      <p>From nanometers to light years, our length converter handles measurements across 20+ orders of magnitude. Perfect for everything from microscopy to astronomy.</p>
      <p><strong>Common uses:</strong> Construction, engineering, scientific research, travel planning</p>
      
      <h3>Weight & Mass</h3>
      <p>Includes metric, imperial, troy weight systems, and specialized units like carats for gemstones. Essential for cooking, shipping, precious metals, and scientific work.</p>
      <p><strong>Special features:</strong> Supports atomic mass units for chemistry and physics applications</p>
      
      <h3>Temperature</h3>
      <p>Convert between all major temperature scales including Celsius, Fahrenheit, Kelvin, Rankine, and Réaumur. Accurate for both everyday and scientific applications.</p>
      <p><strong>Applications:</strong> Weather, cooking, industrial processes, scientific research</p>
      
      <h3>Volume Conversions</h3>
      <p>Comprehensive volume converter supporting metric, US customary, and Imperial systems. From milliliters to cubic kilometers.</p>
      <p><strong>Includes:</strong> Cooking measurements, fluid ounces, barrels, and cubic measurements</p>
      
      <h3>Area Measurements</h3>
      <p>Square measurements from square millimeters to square miles and beyond. Includes specialized units like acres, hectares, and perches.</p>
      <p><strong>Perfect for:</strong> Real estate, agriculture, land surveying, interior design</p>
      
      <h3>Time Conversions</h3>
      <p>From nanoseconds to millennia, including astronomical time units like sidereal days and lunar months.</p>
      <p><strong>Applications:</strong> Computing, physics, project planning, historical research</p>
      
      <h3>Energy Units</h3>
      <p>Convert between joules, calories, BTUs, kilowatt-hours, and electron volts. Essential for physics, engineering, and energy efficiency calculations.</p>
      
      <h3>Power Measurements</h3>
      <p>From watts to horsepower, covering mechanical, electrical, and metric horsepower variants.</p>
      
      <h3>Pressure Conversions</h3>
      <p>Comprehensive pressure unit support including pascals, bars, atmospheres, PSI, and mercury measurements. Critical for weather, engineering, and scientific applications.</p>
    `
  },
  {
    title: "Why Choose Our Unit Converter?",
    category: "Features",
    readTime: "4 min read",
    content: `
      <h3>Unmatched Coverage</h3>
      <p>With over 150+ units across 9 categories, we offer the most comprehensive unit conversion available online. From everyday cooking measurements to specialized scientific units, we've got you covered.</p>
      
      <h3>Real-Time Conversion</h3>
      <p>Unlike other converters that require clicking "convert" buttons, our tool provides instant results as you type. This real-time feedback makes it perfect for quick calculations and comparisons.</p>
      
      <h3>Professional Design</h3>
      <p>Our modern, clean interface focuses on usability without sacrificing functionality. The design scales perfectly from mobile phones to desktop screens.</p>
      
      <h3>Educational Value</h3>
      <p>Beyond just converting numbers, we provide the mathematical formulas and explanations behind each conversion. Learn while you convert!</p>
      
      <h3>No Ads, No Tracking</h3>
      <p>Pure functionality without distractions. No advertisements, no user tracking, no data collection. Just fast, accurate conversions when you need them.</p>
      
      <h3>Offline Capable</h3>
      <p>Once loaded, our converter works offline. Perfect for field work, travel, or areas with limited internet connectivity.</p>
      
      <h3>Copy & Share Results</h3>
      <p>Easy to copy conversion results for use in documents, emails, or sharing with colleagues. The clean format makes results presentation-ready.</p>
      
      <h3>Keyboard Shortcuts</h3>
      <p>Power users can navigate quickly using keyboard shortcuts. Tab between fields, use arrow keys for unit selection, and Enter to swap units.</p>
    `
  }
];

export function BlogSection() {
  return (
    <section className="mt-20 mb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold gradient-text mb-6">
          Learn More About Unit Conversion
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Master the art of unit conversion with our comprehensive guides, tips, and technical insights.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {blogPosts.map((post, index) => (
          <article key={index} className="blog-card">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary">
                {post.category}
              </span>
              <span className="text-sm text-muted-foreground">
                {post.readTime}
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {post.title}
            </h3>
            
            <div 
              className="prose prose-sm max-w-none text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        ))}
      </div>
    </section>
  );
}