import { useState, useEffect } from 'react';
import { Unit, convertValue, formatNumber } from '@/lib/conversions';
import { ArrowUpDown } from 'lucide-react';

interface UnitConverterProps {
  units: Unit[];
  categoryId: string;
}

export function SimpleConverter({ units, categoryId }: UnitConverterProps) {
  const [fromUnit, setFromUnit] = useState(units[0]);
  const [toUnit, setToUnit] = useState(units[1] || units[0]);
  const [fromValue, setFromValue] = useState('1');
  const [toValue, setToValue] = useState('');

  // Convert values when inputs change
  useEffect(() => {
    const numValue = parseFloat(fromValue) || 0;
    if (!isNaN(numValue)) {
      const converted = convertValue(numValue, fromUnit, toUnit, categoryId);
      setToValue(formatNumber(converted));
    } else {
      setToValue('');
    }
  }, [fromValue, fromUnit, toUnit, categoryId]);

  // Reset when category changes
  useEffect(() => {
    setFromUnit(units[0]);
    setToUnit(units[1] || units[0]);
    setFromValue('1');
  }, [units, categoryId]);

  const swapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    setFromValue(toValue);
  };

  return (
    <div className="converter-card fade-in max-w-3xl mx-auto">
      {/* From Input */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <input
              type="number"
              value={fromValue}
              onChange={(e) => setFromValue(e.target.value)}
              placeholder="Enter value"
              className="converter-input text-center"
            />
          </div>
          <div className="lg:w-48">
            <select
              value={fromUnit.symbol}
              onChange={(e) => {
                const unit = units.find(u => u.symbol === e.target.value);
                if (unit) setFromUnit(unit);
              }}
              className="unit-selector w-full h-full"
            >
              {units.map((unit) => (
                <option key={unit.symbol} value={unit.symbol}>
                  {unit.symbol} ({unit.name})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Swap Button */}
      <div className="flex justify-center mb-8">
        <button
          onClick={swapUnits}
          className="p-4 rounded-full bg-primary text-primary-foreground hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <ArrowUpDown className="h-6 w-6" />
        </button>
      </div>

      {/* To Input */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              value={toValue}
              readOnly
              placeholder="Result"
              className="converter-input text-center bg-muted/50"
            />
          </div>
          <div className="lg:w-48">
            <select
              value={toUnit.symbol}
              onChange={(e) => {
                const unit = units.find(u => u.symbol === e.target.value);
                if (unit) setToUnit(unit);
              }}
              className="unit-selector w-full h-full"
            >
              {units.map((unit) => (
                <option key={unit.symbol} value={unit.symbol}>
                  {unit.symbol} ({unit.name})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Quick Reference */}
      <div className="text-center p-4 bg-secondary/50 rounded-2xl">
        <p className="text-lg font-semibold text-secondary-foreground">
          1 {fromUnit.name} = {formatNumber(convertValue(1, fromUnit, toUnit, categoryId))} {toUnit.name}
        </p>
      </div>
    </div>
  );
}