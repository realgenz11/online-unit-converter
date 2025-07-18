import { Category } from '@/lib/conversions';

interface CategorySelectorProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export function CategorySelector({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: CategorySelectorProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`category-btn ${
            activeCategory === category.id ? 'active' : ''
          }`}
        >
          <span className="mr-2 text-base">{category.icon}</span>
          <span className="hidden sm:inline">{category.name}</span>
          <span className="sm:hidden">{category.name.slice(0, 4)}</span>
        </button>
      ))}
    </div>
  );
}