import { useState } from 'react';
import { EnhancedHeader } from '@/components/EnhancedHeader';
import { CategorySelector } from '@/components/CategorySelector';
import { SimpleConverter } from '@/components/SimpleConverter';
import { BlogSection } from '@/components/BlogSection';
import { EducationalSection } from '@/components/EducationalSection';
import { conversionCategories } from '@/lib/enhanced-conversions';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('length');
  
  const currentCategory = conversionCategories.find(
    (cat) => cat.id === activeCategory
  ) || conversionCategories[0];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <EnhancedHeader />
          
          {/* Main Converter */}
          <div className="mb-16">
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
        </div>
      </div>

      {/* Content Sections */}
      <div className="bg-card-secondary/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogSection />
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <EducationalSection />
        </div>
      </div>
        
      {/* Enhanced Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Unit Converter Pro
              </h3>
              <p className="text-background/80 leading-relaxed">
                The most comprehensive, accurate, and beautiful unit converter on the web. Trusted by students, engineers, and professionals worldwide.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-background/80">
                <li>• 150+ units across 9 categories</li>
                <li>• Real-time conversion</li>
                <li>• Mobile optimized design</li>
                <li>• Educational content included</li>
                <li>• No ads or tracking</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-background/80">
                <li>• Length & Distance</li>
                <li>• Weight & Mass</li>
                <li>• Temperature</li>
                <li>• Volume & Capacity</li>
                <li>• Area & Surface</li>
                <li>• Time & Duration</li>
                <li>• Energy & Work</li>
                <li>• Power & Force</li>
                <li>• Pressure & Stress</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-background/20 text-center">
            <p className="text-background/60">
              © 2024 Unit Converter Pro. Built for precision, designed for simplicity.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
