import { useState } from 'react';
import { Header } from '@/components/Header';
import { CategorySelector } from '@/components/CategorySelector';
import { SimpleConverter } from '@/components/SimpleConverter';
import { EducationalSection } from '@/components/EducationalSection';
import { conversionCategories } from '@/lib/conversions';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('length');
  
  const currentCategory = conversionCategories.find(
    (cat) => cat.id === activeCategory
  ) || conversionCategories[0];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Header />
        
        <div className="mb-12">
          <CategorySelector
            categories={conversionCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
        
        <SimpleConverter
          units={currentCategory.units}
          categoryId={currentCategory.id}
        />
        
        <EducationalSection />
        
        <footer className="mt-16 text-center py-8 border-t border-border">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Fast, Accurate, Beautiful
            </h3>
            <p className="text-muted-foreground">
              Convert units instantly with real-time calculations. No ads, no complexity - just pure conversion power.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
