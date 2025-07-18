// Comprehensive unit conversion definitions with many more units

export interface Unit {
  symbol: string;
  name: string;
  factor: number; // Factor to convert to base unit
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  baseUnit: string;
  units: Unit[];
}

export const conversionCategories: Category[] = [
  {
    id: 'length',
    name: 'Length',
    icon: '📏',
    baseUnit: 'meter',
    units: [
      // Metric
      { symbol: 'nm', name: 'Nanometer', factor: 1e-9 },
      { symbol: 'μm', name: 'Micrometer', factor: 1e-6 },
      { symbol: 'mm', name: 'Millimeter', factor: 0.001 },
      { symbol: 'cm', name: 'Centimeter', factor: 0.01 },
      { symbol: 'dm', name: 'Decimeter', factor: 0.1 },
      { symbol: 'm', name: 'Meter', factor: 1 },
      { symbol: 'km', name: 'Kilometer', factor: 1000 },
      // Imperial/US
      { symbol: 'in', name: 'Inch', factor: 0.0254 },
      { symbol: 'ft', name: 'Foot', factor: 0.3048 },
      { symbol: 'yd', name: 'Yard', factor: 0.9144 },
      { symbol: 'mi', name: 'Mile', factor: 1609.344 },
      { symbol: 'nmi', name: 'Nautical Mile', factor: 1852 },
      // Special units
      { symbol: 'thou', name: 'Thousandth of inch', factor: 0.0000254 },
      { symbol: 'fathom', name: 'Fathom', factor: 1.8288 },
      { symbol: 'furlong', name: 'Furlong', factor: 201.168 },
      { symbol: 'chain', name: 'Chain', factor: 20.1168 },
      { symbol: 'rod', name: 'Rod', factor: 5.0292 },
      { symbol: 'ly', name: 'Light Year', factor: 9.461e15 },
      { symbol: 'au', name: 'Astronomical Unit', factor: 1.496e11 },
      { symbol: 'pc', name: 'Parsec', factor: 3.086e16 }
    ]
  },
  {
    id: 'weight',
    name: 'Weight',
    icon: '⚖️',
    baseUnit: 'kilogram',
    units: [
      // Metric
      { symbol: 'mg', name: 'Milligram', factor: 0.000001 },
      { symbol: 'g', name: 'Gram', factor: 0.001 },
      { symbol: 'kg', name: 'Kilogram', factor: 1 },
      { symbol: 't', name: 'Metric Ton', factor: 1000 },
      { symbol: 'kt', name: 'Kiloton', factor: 1000000 },
      { symbol: 'Mt', name: 'Megaton', factor: 1000000000 },
      // Imperial/US
      { symbol: 'oz', name: 'Ounce', factor: 0.0283495 },
      { symbol: 'lb', name: 'Pound', factor: 0.453592 },
      { symbol: 'st', name: 'Stone', factor: 6.35029 },
      { symbol: 'cwt', name: 'Hundredweight (US)', factor: 45.3592 },
      { symbol: 'ton(US)', name: 'Ton (US)', factor: 907.185 },
      { symbol: 'ton(UK)', name: 'Ton (UK)', factor: 1016.05 },
      // Troy weight
      { symbol: 'gr', name: 'Grain', factor: 0.0000647989 },
      { symbol: 'dwt', name: 'Pennyweight', factor: 0.00155517 },
      { symbol: 'oz t', name: 'Troy Ounce', factor: 0.0311035 },
      { symbol: 'lb t', name: 'Troy Pound', factor: 0.373242 },
      // Other
      { symbol: 'ct', name: 'Carat', factor: 0.0002 },
      { symbol: 'Da', name: 'Dalton', factor: 1.66054e-27 }
    ]
  },
  {
    id: 'temperature',
    name: 'Temperature',
    icon: '🌡️',
    baseUnit: 'celsius',
    units: [
      { symbol: '°C', name: 'Celsius', factor: 1 },
      { symbol: '°F', name: 'Fahrenheit', factor: 1 },
      { symbol: 'K', name: 'Kelvin', factor: 1 },
      { symbol: '°R', name: 'Rankine', factor: 1 },
      { symbol: '°Re', name: 'Réaumur', factor: 1 },
    ]
  },
  {
    id: 'volume',
    name: 'Volume',
    icon: '🥤',
    baseUnit: 'liter',
    units: [
      // Metric
      { symbol: 'ml', name: 'Milliliter', factor: 0.001 },
      { symbol: 'cl', name: 'Centiliter', factor: 0.01 },
      { symbol: 'dl', name: 'Deciliter', factor: 0.1 },
      { symbol: 'l', name: 'Liter', factor: 1 },
      { symbol: 'dal', name: 'Decaliter', factor: 10 },
      { symbol: 'hl', name: 'Hectoliter', factor: 100 },
      { symbol: 'kl', name: 'Kiloliter', factor: 1000 },
      { symbol: 'm³', name: 'Cubic Meter', factor: 1000 },
      { symbol: 'cm³', name: 'Cubic Centimeter', factor: 0.001 },
      { symbol: 'mm³', name: 'Cubic Millimeter', factor: 0.000001 },
      // US Liquid
      { symbol: 'tsp', name: 'Teaspoon (US)', factor: 0.00492892 },
      { symbol: 'tbsp', name: 'Tablespoon (US)', factor: 0.0147868 },
      { symbol: 'fl oz', name: 'Fluid Ounce (US)', factor: 0.0295735 },
      { symbol: 'cup', name: 'Cup (US)', factor: 0.236588 },
      { symbol: 'pt', name: 'Pint (US)', factor: 0.473176 },
      { symbol: 'qt', name: 'Quart (US)', factor: 0.946353 },
      { symbol: 'gal', name: 'Gallon (US)', factor: 3.78541 },
      // Imperial
      { symbol: 'fl oz (imp)', name: 'Fluid Ounce (Imperial)', factor: 0.0284131 },
      { symbol: 'pt (imp)', name: 'Pint (Imperial)', factor: 0.568261 },
      { symbol: 'qt (imp)', name: 'Quart (Imperial)', factor: 1.13652 },
      { symbol: 'gal (imp)', name: 'Gallon (Imperial)', factor: 4.54609 },
      // Other
      { symbol: 'bbl', name: 'Barrel (oil)', factor: 158.987 },
      { symbol: 'ft³', name: 'Cubic Foot', factor: 28.3168 },
      { symbol: 'in³', name: 'Cubic Inch', factor: 0.0163871 },
      { symbol: 'yd³', name: 'Cubic Yard', factor: 764.555 },
    ]
  },
  {
    id: 'area',
    name: 'Area',
    icon: '⬜',
    baseUnit: 'square meter',
    units: [
      // Metric
      { symbol: 'mm²', name: 'Square Millimeter', factor: 0.000001 },
      { symbol: 'cm²', name: 'Square Centimeter', factor: 0.0001 },
      { symbol: 'dm²', name: 'Square Decimeter', factor: 0.01 },
      { symbol: 'm²', name: 'Square Meter', factor: 1 },
      { symbol: 'dam²', name: 'Square Decameter', factor: 100 },
      { symbol: 'hm²', name: 'Square Hectometer', factor: 10000 },
      { symbol: 'km²', name: 'Square Kilometer', factor: 1000000 },
      { symbol: 'ha', name: 'Hectare', factor: 10000 },
      { symbol: 'a', name: 'Are', factor: 100 },
      // Imperial
      { symbol: 'in²', name: 'Square Inch', factor: 0.00064516 },
      { symbol: 'ft²', name: 'Square Foot', factor: 0.092903 },
      { symbol: 'yd²', name: 'Square Yard', factor: 0.836127 },
      { symbol: 'ac', name: 'Acre', factor: 4046.86 },
      { symbol: 'mi²', name: 'Square Mile', factor: 2589988.11 },
      // Other
      { symbol: 'rood', name: 'Rood', factor: 1011.71 },
      { symbol: 'perch', name: 'Square Perch', factor: 25.2929 },
    ]
  },
  {
    id: 'time',
    name: 'Time',
    icon: '⏰',
    baseUnit: 'second',
    units: [
      // Standard
      { symbol: 'ns', name: 'Nanosecond', factor: 1e-9 },
      { symbol: 'μs', name: 'Microsecond', factor: 1e-6 },
      { symbol: 'ms', name: 'Millisecond', factor: 0.001 },
      { symbol: 's', name: 'Second', factor: 1 },
      { symbol: 'min', name: 'Minute', factor: 60 },
      { symbol: 'h', name: 'Hour', factor: 3600 },
      { symbol: 'd', name: 'Day', factor: 86400 },
      { symbol: 'wk', name: 'Week', factor: 604800 },
      { symbol: 'mo', name: 'Month', factor: 2629746 },
      { symbol: 'yr', name: 'Year', factor: 31556952 },
      { symbol: 'decade', name: 'Decade', factor: 315569520 },
      { symbol: 'century', name: 'Century', factor: 3155695200 },
      { symbol: 'millennium', name: 'Millennium', factor: 31556952000 },
      // Astronomical
      { symbol: 'sidereal day', name: 'Sidereal Day', factor: 86164.1 },
      { symbol: 'lunar month', name: 'Lunar Month', factor: 2551443 },
      { symbol: 'tropical year', name: 'Tropical Year', factor: 31556925.2 },
    ]
  },
  {
    id: 'energy',
    name: 'Energy',
    icon: '⚡',
    baseUnit: 'joule',
    units: [
      // SI and metric
      { symbol: 'J', name: 'Joule', factor: 1 },
      { symbol: 'kJ', name: 'Kilojoule', factor: 1000 },
      { symbol: 'MJ', name: 'Megajoule', factor: 1000000 },
      { symbol: 'GJ', name: 'Gigajoule', factor: 1000000000 },
      { symbol: 'TJ', name: 'Terajoule', factor: 1000000000000 },
      // Other energy units
      { symbol: 'cal', name: 'Calorie (gram)', factor: 4.184 },
      { symbol: 'kcal', name: 'Kilocalorie', factor: 4184 },
      { symbol: 'Cal', name: 'Calorie (food)', factor: 4184 },
      { symbol: 'Wh', name: 'Watt Hour', factor: 3600 },
      { symbol: 'kWh', name: 'Kilowatt Hour', factor: 3600000 },
      { symbol: 'MWh', name: 'Megawatt Hour', factor: 3600000000 },
      { symbol: 'BTU', name: 'British Thermal Unit', factor: 1055.06 },
      { symbol: 'therm', name: 'Therm', factor: 105505600 },
      { symbol: 'eV', name: 'Electron Volt', factor: 1.602176634e-19 },
      { symbol: 'keV', name: 'Kiloelectron Volt', factor: 1.602176634e-16 },
      { symbol: 'MeV', name: 'Megaelectron Volt', factor: 1.602176634e-13 },
      { symbol: 'GeV', name: 'Gigaelectron Volt', factor: 1.602176634e-10 },
    ]
  },
  {
    id: 'power',
    name: 'Power',
    icon: '💪',
    baseUnit: 'watt',
    units: [
      // SI
      { symbol: 'W', name: 'Watt', factor: 1 },
      { symbol: 'kW', name: 'Kilowatt', factor: 1000 },
      { symbol: 'MW', name: 'Megawatt', factor: 1000000 },
      { symbol: 'GW', name: 'Gigawatt', factor: 1000000000 },
      { symbol: 'TW', name: 'Terawatt', factor: 1000000000000 },
      // Other
      { symbol: 'hp', name: 'Horsepower (mechanical)', factor: 745.7 },
      { symbol: 'hp (metric)', name: 'Horsepower (metric)', factor: 735.5 },
      { symbol: 'hp (electrical)', name: 'Horsepower (electrical)', factor: 746 },
      { symbol: 'BTU/h', name: 'BTU per Hour', factor: 0.293071 },
      { symbol: 'cal/s', name: 'Calorie per Second', factor: 4.184 },
      { symbol: 'kcal/h', name: 'Kilocalorie per Hour', factor: 1.163 },
    ]
  },
  {
    id: 'pressure',
    name: 'Pressure',
    icon: '🌪️',
    baseUnit: 'pascal',
    units: [
      // SI
      { symbol: 'Pa', name: 'Pascal', factor: 1 },
      { symbol: 'kPa', name: 'Kilopascal', factor: 1000 },
      { symbol: 'MPa', name: 'Megapascal', factor: 1000000 },
      { symbol: 'GPa', name: 'Gigapascal', factor: 1000000000 },
      // Common
      { symbol: 'bar', name: 'Bar', factor: 100000 },
      { symbol: 'mbar', name: 'Millibar', factor: 100 },
      { symbol: 'atm', name: 'Atmosphere', factor: 101325 },
      { symbol: 'torr', name: 'Torr', factor: 133.322 },
      { symbol: 'mmHg', name: 'Millimeter of Mercury', factor: 133.322 },
      { symbol: 'inHg', name: 'Inch of Mercury', factor: 3386.39 },
      { symbol: 'psi', name: 'Pound per Square Inch', factor: 6894.76 },
      { symbol: 'psf', name: 'Pound per Square Foot', factor: 47.8803 },
      { symbol: 'mmH2O', name: 'Millimeter of Water', factor: 9.80665 },
      { symbol: 'inH2O', name: 'Inch of Water', factor: 249.089 },
    ]
  }
];

// Enhanced conversion functions
export function convertValue(
  value: number,
  fromUnit: Unit,
  toUnit: Unit,
  categoryId: string
): number {
  if (categoryId === 'temperature') {
    return convertTemperature(value, fromUnit.symbol, toUnit.symbol);
  }
  
  // For other units, convert through base unit
  const baseValue = value * fromUnit.factor;
  return baseValue / toUnit.factor;
}

function convertTemperature(value: number, from: string, to: string): number {
  // Convert to Celsius first
  let celsius: number;
  
  switch (from) {
    case '°C':
      celsius = value;
      break;
    case '°F':
      celsius = (value - 32) * 5/9;
      break;
    case 'K':
      celsius = value - 273.15;
      break;
    case '°R':
      celsius = (value - 491.67) * 5/9;
      break;
    case '°Re':
      celsius = value * 5/4;
      break;
    default:
      celsius = value;
  }
  
  // Convert from Celsius to target
  switch (to) {
    case '°C':
      return celsius;
    case '°F':
      return celsius * 9/5 + 32;
    case 'K':
      return celsius + 273.15;
    case '°R':
      return (celsius + 273.15) * 9/5;
    case '°Re':
      return celsius * 4/5;
    default:
      return celsius;
  }
}

export function formatNumber(num: number): string {
  if (num === 0) return '0';
  
  const absNum = Math.abs(num);
  
  if (absNum >= 1e15) {
    return (num / 1e15).toFixed(2) + 'P';
  } else if (absNum >= 1e12) {
    return (num / 1e12).toFixed(2) + 'T';
  } else if (absNum >= 1e9) {
    return (num / 1e9).toFixed(2) + 'B';
  } else if (absNum >= 1e6) {
    return (num / 1e6).toFixed(2) + 'M';
  } else if (absNum >= 1e3) {
    return (num / 1e3).toFixed(2) + 'K';
  } else if (absNum >= 1) {
    return num.toFixed(8).replace(/\.?0+$/, '');
  } else if (absNum >= 0.001) {
    return num.toFixed(8).replace(/\.?0+$/, '');
  } else {
    return num.toExponential(3);
  }
}
