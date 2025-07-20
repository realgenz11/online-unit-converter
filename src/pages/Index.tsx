import { useState } from 'react';
import { StickyHeader } from '@/components/StickyHeader';
import { EnhancedHeader } from '@/components/EnhancedHeader';
import { CategorySelector } from '@/components/CategorySelector';
import { SimpleConverter } from '@/components/SimpleConverter';
import { HowToUseSection } from '@/components/HowToUseSection';
import { NewBlogSection } from '@/components/NewBlogSection';
import { EducationalSection } from '@/components/EducationalSection';
import { ProfessionalFooter } from '@/components/ProfessionalFooter';
import { conversionCategories } from '@/lib/professional-conversions';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('length');
  
  const currentCategory = conversionCategories.find(
    (cat) => cat.id === activeCategory
  ) || conversionCategories[0];

  return (
    <div className="min-h-screen">
      <StickyHeader />
      <EnhancedHeader />
      
      <CategorySelector
        categories={conversionCategories.map(cat => ({
          id: cat.id,
          name: cat.name,
          baseUnit: cat.units[0].name,
          icon: cat.icon,
          units: cat.units.map(unit => ({
            name: unit.name,
            symbol: unit.symbol,
            factor: unit.toBase
          }))
        }))}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      
      <SimpleConverter
        units={currentCategory.units.map(unit => ({
          name: unit.name,
          symbol: unit.symbol,
          factor: unit.toBase
        }))}
        categoryId={currentCategory.id}
      />

      <HowToUseSection />
      <NewBlogSection />
      <EducationalSection />
      <ProfessionalFooter />
    </div>
  );
};

export default Index;
