import { Calculator, Ruler, Weight, Thermometer, Zap, Clock, Volume2, Map, Gauge, HardDrive, ArrowRightLeft, BookOpen, ExternalLink } from 'lucide-react';

export function NewBlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Complete Guide to Length Conversions",
      excerpt: "Master all length units from millimeters to astronomical units. Learn the most common conversions used in engineering, construction, and science.",
      content: "Length conversion is one of the most fundamental unit conversions in science and engineering. From measuring tiny electronic components in micrometers to calculating distances between planets in astronomical units, understanding length conversions is essential. The metric system provides a logical base-10 structure with millimeters, centimeters, meters, and kilometers. Imperial units like inches, feet, yards, and miles are still widely used in the United States. Special units like nautical miles for marine navigation and light-years for astronomical distances serve specific purposes. Common conversions include: 1 inch = 2.54 cm, 1 foot = 30.48 cm, 1 meter = 3.28 feet, 1 mile = 1.609 km, 1 nautical mile = 1.852 km.",
      icon: Ruler,
      readTime: "5 min read",
      category: "Length & Distance"
    },
    {
      id: 2,
      title: "Weight vs Mass: Understanding the Difference",
      excerpt: "Explore the fundamental difference between weight and mass, and learn how to convert between grams, pounds, ounces, and more exotic units.",
      content: "Weight and mass are often confused but represent different physical properties. Mass is the amount of matter in an object, while weight is the force exerted by gravity on that mass. Mass remains constant regardless of location, but weight changes with gravitational strength. The metric system uses grams and kilograms for mass. Imperial units include ounces, pounds, and tons. Specialized units like carats for gemstones, grains for ammunition, and troy ounces for precious metals serve specific industries. Key conversions: 1 gram = 0.035 oz, 1 kilogram = 2.205 lbs, 1 pound = 453.6 grams, 1 ounce = 28.35 grams, 1 stone = 14 pounds = 6.35 kg.",
      icon: Weight,
      readTime: "4 min read",
      category: "Weight & Mass"
    },
    {
      id: 3,
      title: "Temperature Scales Around the World",
      excerpt: "From Celsius to Fahrenheit, Kelvin to Rankine - understand all temperature scales and their practical applications in science and daily life.",
      content: "Temperature measurement uses several scales, each with specific applications. Celsius (°C) is used worldwide for weather and daily temperatures, with water freezing at 0°C and boiling at 100°C. Fahrenheit (°F) is primarily used in the United States, with water freezing at 32°F and boiling at 212°F. Kelvin (K) is the scientific standard, starting at absolute zero (-273.15°C). Rankine (°R) is the Fahrenheit equivalent of Kelvin. Réaumur (°Ré) was historically used in Europe. Conversion formulas: °F = (°C × 9/5) + 32, K = °C + 273.15, °R = (°F + 459.67), °Ré = °C × 4/5.",
      icon: Thermometer,
      readTime: "6 min read",
      category: "Temperature"
    },
    {
      id: 4,
      title: "Volume and Capacity Conversions Made Simple",
      excerpt: "Navigate the complex world of volume measurements, from milliliters and gallons to cubic meters and specialized cooking measurements.",
      content: "Volume measurements vary significantly between metric and imperial systems. The metric system uses liters and milliliters, with 1 liter = 1000 ml. Imperial systems use gallons, quarts, pints, and fluid ounces, but US and UK measurements differ significantly. US gallon = 3.785 liters, UK gallon = 4.546 liters. Cooking measurements include cups, tablespoons, and teaspoons. Scientific measurements use cubic meters, cubic centimeters, and liters. Oil industry uses barrels (159 liters). Common conversions: 1 US gallon = 3.785 L, 1 UK gallon = 4.546 L, 1 quart = 0.946 L, 1 cup = 236.6 ml, 1 tablespoon = 14.79 ml.",
      icon: Volume2,
      readTime: "4 min read",
      category: "Volume & Capacity"
    },
    {
      id: 5,
      title: "Area Calculations for Real Estate and Land",
      excerpt: "Master area conversions from square feet to acres, hectares to square meters - essential for property, farming, and construction.",
      content: "Area measurements are crucial in real estate, agriculture, and construction. Square meters and square kilometers dominate the metric system. Imperial units include square feet, square yards, acres, and square miles. Land measurements often use specialized units: hectares (10,000 m²), acres (4,047 m²), and sections (640 acres). Real estate commonly uses square feet in the US and square meters elsewhere. Agricultural land uses acres or hectares. Key conversions: 1 acre = 4,047 m² = 43,560 ft², 1 hectare = 10,000 m² = 2.471 acres, 1 square foot = 0.0929 m², 1 square meter = 10.76 ft².",
      icon: Map,
      readTime: "5 min read",
      category: "Area & Surface"
    },
    {
      id: 6,
      title: "Time Units from Nanoseconds to Centuries",
      excerpt: "Explore time measurements across all scales, from computer processing nanoseconds to geological time scales and everyday time management.",
      content: "Time measurement spans incredible ranges from computer nanoseconds to geological epochs. Basic units include seconds, minutes, hours, days, weeks, months, and years. Scientific applications use milliseconds, microseconds, and nanoseconds. Astronomical time includes light-years (distance light travels in one year). Historical time uses decades, centuries, and millennia. Calendar systems vary globally but the Gregorian calendar dominates internationally. Leap years adjust for Earth's orbital period. Key relationships: 1 minute = 60 seconds, 1 hour = 60 minutes, 1 day = 24 hours, 1 week = 7 days, 1 year ≈ 365.25 days, 1 nanosecond = 10⁻⁹ seconds.",
      icon: Clock,
      readTime: "4 min read",
      category: "Time & Duration"
    },
    {
      id: 7,
      title: "Energy and Power in the Modern World",
      excerpt: "Understand energy units from joules to kilowatt-hours, calories to BTUs - essential for understanding electricity bills and nutrition labels.",
      content: "Energy and power measurements are everywhere in modern life. Energy is measured in joules (J), kilojoules (kJ), calories (cal), kilocalories (kcal), watt-hours (Wh), and kilowatt-hours (kWh). Power measures energy transfer rate in watts (W). Food energy uses calories or kilojoules. Electricity bills show kilowatt-hours. Heat energy uses BTUs (British Thermal Units). Scientific work uses joules exclusively. Power conversions include horsepower for engines. Key conversions: 1 kWh = 3.6 MJ, 1 calorie = 4.184 J, 1 kcal = 4,184 J, 1 BTU = 1,055 J, 1 horsepower = 746 W.",
      icon: Zap,
      readTime: "6 min read",
      category: "Energy & Power"
    },
    {
      id: 8,
      title: "Digital Storage: From Bits to Exabytes",
      excerpt: "Navigate the digital world with storage conversions from bits and bytes to terabytes and petabytes - essential for modern computing.",
      content: "Digital storage measurement uses binary and decimal systems. Binary uses powers of 2: 1 kilobyte (KB) = 1,024 bytes. Decimal uses powers of 10: 1 kilobyte = 1,000 bytes. Modern systems increasingly use decimal. Storage hierarchy: bit (smallest), byte (8 bits), kilobyte, megabyte, gigabyte, terabyte, petabyte, exabyte. RAM and CPU cache use binary measurements. Hard drives and SSDs often use decimal. Network speeds use bits per second. Key conversions: 1 byte = 8 bits, 1 KB = 1,024 bytes (binary) or 1,000 bytes (decimal), 1 MB = 1,024 KB, 1 GB = 1,024 MB, 1 TB = 1,024 GB.",
      icon: HardDrive,
      readTime: "5 min read",
      category: "Digital Storage"
    },
    {
      id: 9,
      title: "Speed and Velocity for Transportation",
      excerpt: "Master speed conversions from kilometers per hour to miles per hour, knots to meters per second - crucial for travel and transportation.",
      content: "Speed measurements vary by transportation mode and region. Automotive speeds use kilometers per hour (km/h) or miles per hour (mph). Aviation and marine navigation use knots. Scientific measurements use meters per second (m/s). Speed of light and sound provide reference points. Wind speeds often use knots or km/h. Walking speeds typically measure in km/h or mph. Running speeds may use minutes per kilometer or mile. Key conversions: 1 mph = 1.609 km/h, 1 knot = 1.852 km/h, 1 m/s = 3.6 km/h, 1 km/h = 0.278 m/s, Speed of light = 299,792,458 m/s.",
      icon: Gauge,
      readTime: "4 min read",
      category: "Speed & Velocity"
    },
    {
      id: 10,
      title: "Pressure Measurements in Science and Industry",
      excerpt: "From atmospheric pressure to industrial applications - understand pascals, PSI, bars, and specialized pressure units across industries.",
      content: "Pressure measurement serves diverse applications from weather forecasting to industrial processes. Atmospheric pressure uses millibars, inches of mercury, or hectopascals. Tire pressure uses PSI (pounds per square inch). Industrial applications use bars or pascals. Scientific work uses pascals exclusively. Vacuum measurements use torr or mmHg. High-pressure applications may use kilopascals or megapascals. Weather systems track pressure changes for forecasting. Key conversions: 1 atm = 101.325 kPa = 14.696 PSI = 760 mmHg = 29.92 inHg, 1 bar = 100 kPa = 14.504 PSI.",
      icon: ArrowRightLeft,
      readTime: "5 min read",
      category: "Pressure & Stress"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-foreground mb-4">
            Conversion Guides & Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive guides to master unit conversions across all categories. 
            From basic everyday conversions to advanced scientific applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => {
            const IconComponent = post.icon;
            return (
              <article key={post.id} className="blog-card group cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                      {post.category}
                    </span>
                    <div className="text-xs text-muted-foreground">
                      {post.readTime}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-primary font-semibold text-sm group-hover:text-accent transition-colors">
                  Read Full Guide
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a 
              href="#converter" 
              className="px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-bold hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Calculator className="w-5 h-5" />
              Start Converting Now
            </a>
            <a 
              href="#" 
              className="px-8 py-4 bg-secondary text-secondary-foreground rounded-2xl font-bold hover:bg-secondary/80 transition-all duration-300 border border-border flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              View All Formulas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}