// Unit conversion definitions and logic

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
      { symbol: 'mm', name: 'Millimeter', factor: 0.001 },
      { symbol: 'cm', name: 'Centimeter', factor: 0.01 },
      { symbol: 'm', name: 'Meter', factor: 1 },
      { symbol: 'km', name: 'Kilometer', factor: 1000 },
      { symbol: 'in', name: 'Inch', factor: 0.0254 },
      { symbol: 'ft', name: 'Foot', factor: 0.3048 },
      { symbol: 'yd', name: 'Yard', factor: 0.9144 },
      { symbol: 'mi', name: 'Mile', factor: 1609.344 },
    ]
  },
  {
    id: 'weight',
    name: 'Weight',
    icon: '⚖️',
    baseUnit: 'kilogram',
    units: [
      { symbol: 'mg', name: 'Milligram', factor: 0.000001 },
      { symbol: 'g', name: 'Gram', factor: 0.001 },
      { symbol: 'kg', name: 'Kilogram', factor: 1 },
      { symbol: 'oz', name: 'Ounce', factor: 0.0283495 },
      { symbol: 'lb', name: 'Pound', factor: 0.453592 },
      { symbol: 'st', name: 'Stone', factor: 6.35029 },
      { symbol: 't', name: 'Metric Ton', factor: 1000 },
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
    ]
  },
  {
    id: 'volume',
    name: 'Volume',
    icon: '🥤',
    baseUnit: 'liter',
    units: [
      { symbol: 'ml', name: 'Milliliter', factor: 0.001 },
      { symbol: 'l', name: 'Liter', factor: 1 },
      { symbol: 'gal', name: 'Gallon (US)', factor: 3.78541 },
      { symbol: 'qt', name: 'Quart (US)', factor: 0.946353 },
      { symbol: 'pt', name: 'Pint (US)', factor: 0.473176 },
      { symbol: 'cup', name: 'Cup (US)', factor: 0.236588 },
      { symbol: 'fl oz', name: 'Fluid Ounce (US)', factor: 0.0295735 },
      { symbol: 'tbsp', name: 'Tablespoon (US)', factor: 0.0147868 },
      { symbol: 'tsp', name: 'Teaspoon (US)', factor: 0.00492892 },
    ]
  },
  {
    id: 'area',
    name: 'Area',
    icon: '⬜',
    baseUnit: 'square meter',
    units: [
      { symbol: 'mm²', name: 'Square Millimeter', factor: 0.000001 },
      { symbol: 'cm²', name: 'Square Centimeter', factor: 0.0001 },
      { symbol: 'm²', name: 'Square Meter', factor: 1 },
      { symbol: 'km²', name: 'Square Kilometer', factor: 1000000 },
      { symbol: 'in²', name: 'Square Inch', factor: 0.00064516 },
      { symbol: 'ft²', name: 'Square Foot', factor: 0.092903 },
      { symbol: 'yd²', name: 'Square Yard', factor: 0.836127 },
      { symbol: 'ac', name: 'Acre', factor: 4046.86 },
      { symbol: 'ha', name: 'Hectare', factor: 10000 },
    ]
  },
  {
    id: 'time',
    name: 'Time',
    icon: '⏰',
    baseUnit: 'second',
    units: [
      { symbol: 'ms', name: 'Millisecond', factor: 0.001 },
      { symbol: 's', name: 'Second', factor: 1 },
      { symbol: 'min', name: 'Minute', factor: 60 },
      { symbol: 'h', name: 'Hour', factor: 3600 },
      { symbol: 'd', name: 'Day', factor: 86400 },
      { symbol: 'wk', name: 'Week', factor: 604800 },
      { symbol: 'mo', name: 'Month', factor: 2629746 },
      { symbol: 'yr', name: 'Year', factor: 31556952 },
    ]
  },
];

// Conversion functions
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
    default:
      return celsius;
  }
}

export function formatNumber(num: number): string {
  if (num === 0) return '0';
  
  const absNum = Math.abs(num);
  
  if (absNum >= 1e12) {
    return (num / 1e12).toFixed(2) + 'T';
  } else if (absNum >= 1e9) {
    return (num / 1e9).toFixed(2) + 'B';
  } else if (absNum >= 1e6) {
    return (num / 1e6).toFixed(2) + 'M';
  } else if (absNum >= 1e3) {
    return (num / 1e3).toFixed(2) + 'K';
  } else if (absNum >= 1) {
    return num.toFixed(6).replace(/\.?0+$/, '');
  } else if (absNum >= 0.001) {
    return num.toFixed(6).replace(/\.?0+$/, '');
  } else {
    return num.toExponential(2);
  }
}