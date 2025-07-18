import { useState, useEffect } from 'react';
import { Unit, convertValue, formatNumber } from '@/lib/conversions';
import { ChevronDown } from 'lucide-react';

interface UnitConverterProps {
  units: Unit[];
  categoryId: string;
}

export function UnitConverter({ units, categoryId }: UnitConverterProps) {
  const [fromUnit, setFromUnit] = useState(units[0]);
  const [toUnit, setToUnit] = useState(units[1] || units[0]);
  const [fromValue, setFromValue] = useState('1');
  const [toValue, setToValue] = useState('');
  const [lastChanged, setLastChanged] = useState<'from' | 'to'>('from');

  // Convert values when inputs change
  useEffect(() => {
    const numValue = parseFloat(fromValue) || 0;
    if (lastChanged === 'from' && !isNaN(numValue)) {
      const converted = convertValue(numValue, fromUnit, toUnit, categoryId);
      setToValue(formatNumber(converted));
    }
  }, [fromValue, fromUnit, toUnit, categoryId, lastChanged]);

  useEffect(() => {
    const numValue = parseFloat(toValue) || 0;
    if (lastChanged === 'to' && !isNaN(numValue)) {
      const converted = convertValue(numValue, toUnit, fromUnit, categoryId);
      setFromValue(formatNumber(converted));
    }
  }, [toValue, fromUnit, toUnit, categoryId, lastChanged]);

  // Reset values when category changes
  useEffect(() => {
    setFromUnit(units[0]);
    setToUnit(units[1] || units[0]);
    setFromValue('1');
    setToValue('');
    setLastChanged('from');
  }, [units, categoryId]);

  const handleFromValueChange = (value: string) => {
    setFromValue(value);
    setLastChanged('from');
  };

  const handleToValueChange = (value: string) => {
    setToValue(value);
    setLastChanged('to');
  };

  const swapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    setFromValue(toValue);
    setToValue(fromValue);
    setLastChanged(lastChanged === 'from' ? 'to' : 'from');
  };

  return (
    <div className="converter-card fade-in max-w-2xl mx-auto">
      <div className="space-y-6">
        {/* From Section */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-muted-foreground">
            From
          </label>
          <div className="flex gap-3 flex-col sm:flex-row">
            <div className="flex-1">
              <input
                type="text"
                value={fromValue}
                onChange={(e) => handleFromValueChange(e.target.value)}
                placeholder="Enter value"
                className="converter-input"
              />
            </div>
            <div className="relative">
              <select
                value={fromUnit.symbol}
                onChange={(e) => {
                  const unit = units.find(u => u.symbol === e.target.value);
                  if (unit) setFromUnit(unit);
                }}
                className="unit-selector appearance-none pr-8 min-w-[120px]"
              >
                {units.map((unit) => (
                  <option key={unit.symbol} value={unit.symbol}>
                    {unit.symbol} - {unit.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 pointer-events-none text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center">
          <button
            onClick={swapUnits}
            className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary-dark transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <svg 
              className="h-5 w-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" 
              />
            </svg>
          </button>
        </div>

        {/* To Section */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-muted-foreground">
            To
          </label>
          <div className="flex gap-3 flex-col sm:flex-row">
            <div className="flex-1">
              <input
                type="text"
                value={toValue}
                onChange={(e) => handleToValueChange(e.target.value)}
                placeholder="Result"
                className="converter-input"
              />
            </div>
            <div className="relative">
              <select
                value={toUnit.symbol}
                onChange={(e) => {
                  const unit = units.find(u => u.symbol === e.target.value);
                  if (unit) setToUnit(unit);
                }}
                className="unit-selector appearance-none pr-8 min-w-[120px]"
              >
                {units.map((unit) => (
                  <option key={unit.symbol} value={unit.symbol}>
                    {unit.symbol} - {unit.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 pointer-events-none text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Quick conversion info */}
        <div className="text-center text-sm text-muted-foreground bg-secondary/30 rounded-lg p-3">
          1 {fromUnit.symbol} = {formatNumber(convertValue(1, fromUnit, toUnit, categoryId))} {toUnit.symbol}
        </div>
      </div>
    </div>
  );
}