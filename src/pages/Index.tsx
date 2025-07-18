import { useState } from 'react';
import { Header } from '@/components/Header';
import { CategorySelector } from '@/components/CategorySelector';
import { UnitConverter } from '@/components/UnitConverter';
import { conversionCategories } from '@/lib/conversions';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('length');
  
  const currentCategory = conversionCategories.find(
    (cat) => cat.id === activeCategory
  ) || conversionCategories[0];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Header />
        
        <CategorySelector
          categories={conversionCategories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        <UnitConverter
          units={currentCategory.units}
          categoryId={currentCategory.id}
        />
        
        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <span>Made with ❤️ for seamless conversions</span>
            <span>•</span>
            <span>Fast • Accurate • Beautiful</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
