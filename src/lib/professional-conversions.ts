export interface ConversionUnit {
  name: string;
  symbol: string;
  toBase: number;
  fromBase?: (value: number) => number;
  toBaseFunc?: (value: number) => number;
}

export interface ConversionCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  units: ConversionUnit[];
}

export const conversionCategories: ConversionCategory[] = [
  {
    id: 'length',
    name: 'Length & Distance',
    description: 'Convert between various units of length and distance',
    icon: '📏',
    units: [
      { name: 'Millimeter', symbol: 'mm', toBase: 0.001 },
      { name: 'Centimeter', symbol: 'cm', toBase: 0.01 },
      { name: 'Meter', symbol: 'm', toBase: 1 },
      { name: 'Kilometer', symbol: 'km', toBase: 1000 },
      { name: 'Inch', symbol: 'in', toBase: 0.0254 },
      { name: 'Foot', symbol: 'ft', toBase: 0.3048 },
      { name: 'Yard', symbol: 'yd', toBase: 0.9144 },
      { name: 'Mile', symbol: 'mi', toBase: 1609.344 },
      { name: 'Nautical Mile', symbol: 'nmi', toBase: 1852 },
      { name: 'Micrometer', symbol: 'μm', toBase: 0.000001 },
      { name: 'Nanometer', symbol: 'nm', toBase: 0.000000001 },
      { name: 'Picometer', symbol: 'pm', toBase: 0.000000000001 },
      { name: 'Light Year', symbol: 'ly', toBase: 9460730472580800 },
      { name: 'Astronomical Unit', symbol: 'AU', toBase: 149597870700 },
      { name: 'Parsec', symbol: 'pc', toBase: 30856775814913673 },
    ]
  },
  {
    id: 'weight',
    name: 'Weight & Mass',
    description: 'Convert between different units of weight and mass',
    icon: '⚖️',
    units: [
      { name: 'Milligram', symbol: 'mg', toBase: 0.000001 },
      { name: 'Gram', symbol: 'g', toBase: 0.001 },
      { name: 'Kilogram', symbol: 'kg', toBase: 1 },
      { name: 'Tonne', symbol: 't', toBase: 1000 },
      { name: 'Ounce', symbol: 'oz', toBase: 0.0283495 },
      { name: 'Pound', symbol: 'lb', toBase: 0.453592 },
      { name: 'Stone', symbol: 'st', toBase: 6.35029 },
      { name: 'US Ton', symbol: 'ton', toBase: 907.185 },
      { name: 'Imperial Ton', symbol: 'imp ton', toBase: 1016.05 },
      { name: 'Carat', symbol: 'ct', toBase: 0.0002 },
      { name: 'Grain', symbol: 'gr', toBase: 0.0000647989 },
      { name: 'Dram', symbol: 'dr', toBase: 0.00177185 },
    ]
  },
  {
    id: 'temperature',
    name: 'Temperature',
    description: 'Convert between temperature scales',
    icon: '🌡️',
    units: [
      {
        name: 'Celsius',
        symbol: '°C',
        toBase: 1,
        toBaseFunc: (c: number) => c + 273.15,
        fromBase: (k: number) => k - 273.15
      },
      {
        name: 'Fahrenheit',
        symbol: '°F',
        toBase: 1,
        toBaseFunc: (f: number) => (f - 32) * 5/9 + 273.15,
        fromBase: (k: number) => (k - 273.15) * 9/5 + 32
      },
      {
        name: 'Kelvin',
        symbol: 'K',
        toBase: 1,
        toBaseFunc: (k: number) => k,
        fromBase: (k: number) => k
      },
      {
        name: 'Rankine',
        symbol: '°R',
        toBase: 1,
        toBaseFunc: (r: number) => r * 5/9,
        fromBase: (k: number) => k * 9/5
      },
      {
        name: 'Réaumur',
        symbol: '°Ré',
        toBase: 1,
        toBaseFunc: (re: number) => re * 5/4 + 273.15,
        fromBase: (k: number) => (k - 273.15) * 4/5
      }
    ]
  },
  {
    id: 'volume',
    name: 'Volume & Capacity',
    description: 'Convert between units of volume and capacity',
    icon: '🫗',
    units: [
      { name: 'Milliliter', symbol: 'ml', toBase: 0.001 },
      { name: 'Liter', symbol: 'l', toBase: 1 },
      { name: 'Cubic Meter', symbol: 'm³', toBase: 1000 },
      { name: 'Gallon (US)', symbol: 'gal', toBase: 3.78541 },
      { name: 'Gallon (UK)', symbol: 'gal (UK)', toBase: 4.54609 },
      { name: 'Quart (US)', symbol: 'qt', toBase: 0.946353 },
      { name: 'Pint (US)', symbol: 'pt', toBase: 0.473176 },
      { name: 'Cup (US)', symbol: 'cup', toBase: 0.236588 },
      { name: 'Fluid Ounce (US)', symbol: 'fl oz', toBase: 0.0295735 },
      { name: 'Tablespoon', symbol: 'tbsp', toBase: 0.0147868 },
      { name: 'Teaspoon', symbol: 'tsp', toBase: 0.00492892 },
      { name: 'Cubic Inch', symbol: 'in³', toBase: 0.0163871 },
      { name: 'Cubic Foot', symbol: 'ft³', toBase: 28.3168 },
      { name: 'Barrel (Oil)', symbol: 'bbl', toBase: 158.987 },
    ]
  },
  {
    id: 'area',
    name: 'Area & Surface',
    description: 'Convert between different area measurements',
    icon: '⬜',
    units: [
      { name: 'Square Millimeter', symbol: 'mm²', toBase: 0.000001 },
      { name: 'Square Centimeter', symbol: 'cm²', toBase: 0.0001 },
      { name: 'Square Meter', symbol: 'm²', toBase: 1 },
      { name: 'Square Kilometer', symbol: 'km²', toBase: 1000000 },
      { name: 'Square Inch', symbol: 'in²', toBase: 0.00064516 },
      { name: 'Square Foot', symbol: 'ft²', toBase: 0.092903 },
      { name: 'Square Yard', symbol: 'yd²', toBase: 0.836127 },
      { name: 'Acre', symbol: 'acre', toBase: 4046.86 },
      { name: 'Hectare', symbol: 'ha', toBase: 10000 },
      { name: 'Square Mile', symbol: 'mi²', toBase: 2589988.11 },
    ]
  },
  {
    id: 'time',
    name: 'Time & Duration',
    description: 'Convert between time units and durations',
    icon: '⏰',
    units: [
      { name: 'Nanosecond', symbol: 'ns', toBase: 0.000000001 },
      { name: 'Microsecond', symbol: 'μs', toBase: 0.000001 },
      { name: 'Millisecond', symbol: 'ms', toBase: 0.001 },
      { name: 'Second', symbol: 's', toBase: 1 },
      { name: 'Minute', symbol: 'min', toBase: 60 },
      { name: 'Hour', symbol: 'h', toBase: 3600 },
      { name: 'Day', symbol: 'd', toBase: 86400 },
      { name: 'Week', symbol: 'wk', toBase: 604800 },
      { name: 'Month', symbol: 'mo', toBase: 2629746 },
      { name: 'Year', symbol: 'yr', toBase: 31556952 },
      { name: 'Decade', symbol: 'decade', toBase: 315569520 },
      { name: 'Century', symbol: 'century', toBase: 3155695200 },
    ]
  },
  {
    id: 'energy',
    name: 'Energy & Work',
    description: 'Convert between energy and work units',
    icon: '⚡',
    units: [
      { name: 'Joule', symbol: 'J', toBase: 1 },
      { name: 'Kilojoule', symbol: 'kJ', toBase: 1000 },
      { name: 'Calorie', symbol: 'cal', toBase: 4.184 },
      { name: 'Kilocalorie', symbol: 'kcal', toBase: 4184 },
      { name: 'Watt Hour', symbol: 'Wh', toBase: 3600 },
      { name: 'Kilowatt Hour', symbol: 'kWh', toBase: 3600000 },
      { name: 'BTU', symbol: 'BTU', toBase: 1055.06 },
      { name: 'Foot Pound', symbol: 'ft⋅lb', toBase: 1.35582 },
      { name: 'Erg', symbol: 'erg', toBase: 0.0000001 },
      { name: 'Electronvolt', symbol: 'eV', toBase: 1.602176634e-19 },
    ]
  },
  {
    id: 'power',
    name: 'Power & Force',
    description: 'Convert between power and force measurements',
    icon: '💪',
    units: [
      { name: 'Watt', symbol: 'W', toBase: 1 },
      { name: 'Kilowatt', symbol: 'kW', toBase: 1000 },
      { name: 'Megawatt', symbol: 'MW', toBase: 1000000 },
      { name: 'Horsepower', symbol: 'hp', toBase: 745.7 },
      { name: 'Metric Horsepower', symbol: 'PS', toBase: 735.5 },
      { name: 'BTU/hour', symbol: 'BTU/h', toBase: 0.293071 },
      { name: 'Newton', symbol: 'N', toBase: 1 },
      { name: 'Kilonewton', symbol: 'kN', toBase: 1000 },
      { name: 'Pound Force', symbol: 'lbf', toBase: 4.44822 },
      { name: 'Dyne', symbol: 'dyn', toBase: 0.00001 },
    ]
  },
  {
    id: 'pressure',
    name: 'Pressure & Stress',
    description: 'Convert between pressure and stress units',
    icon: '🌪️',
    units: [
      { name: 'Pascal', symbol: 'Pa', toBase: 1 },
      { name: 'Kilopascal', symbol: 'kPa', toBase: 1000 },
      { name: 'Megapascal', symbol: 'MPa', toBase: 1000000 },
      { name: 'Bar', symbol: 'bar', toBase: 100000 },
      { name: 'Atmosphere', symbol: 'atm', toBase: 101325 },
      { name: 'PSI', symbol: 'psi', toBase: 6894.76 },
      { name: 'Torr', symbol: 'Torr', toBase: 133.322 },
      { name: 'mmHg', symbol: 'mmHg', toBase: 133.322 },
      { name: 'inHg', symbol: 'inHg', toBase: 3386.39 },
    ]
  },
  {
    id: 'speed',
    name: 'Speed & Velocity',
    description: 'Convert between speed and velocity units',
    icon: '🏃',
    units: [
      { name: 'Meter/Second', symbol: 'm/s', toBase: 1 },
      { name: 'Kilometer/Hour', symbol: 'km/h', toBase: 0.277778 },
      { name: 'Mile/Hour', symbol: 'mph', toBase: 0.44704 },
      { name: 'Foot/Second', symbol: 'ft/s', toBase: 0.3048 },
      { name: 'Knot', symbol: 'kn', toBase: 0.514444 },
      { name: 'Mach', symbol: 'M', toBase: 343 },
      { name: 'Speed of Light', symbol: 'c', toBase: 299792458 },
    ]
  },
  {
    id: 'digital',
    name: 'Digital Storage',
    description: 'Convert between digital storage units',
    icon: '💾',
    units: [
      { name: 'Bit', symbol: 'bit', toBase: 1 },
      { name: 'Byte', symbol: 'B', toBase: 8 },
      { name: 'Kilobyte', symbol: 'KB', toBase: 8000 },
      { name: 'Megabyte', symbol: 'MB', toBase: 8000000 },
      { name: 'Gigabyte', symbol: 'GB', toBase: 8000000000 },
      { name: 'Terabyte', symbol: 'TB', toBase: 8000000000000 },
      { name: 'Petabyte', symbol: 'PB', toBase: 8000000000000000 },
      { name: 'Kibibyte', symbol: 'KiB', toBase: 8192 },
      { name: 'Mebibyte', symbol: 'MiB', toBase: 8388608 },
      { name: 'Gibibyte', symbol: 'GiB', toBase: 8589934592 },
      { name: 'Tebibyte', symbol: 'TiB', toBase: 8796093022208 },
    ]
  }
];