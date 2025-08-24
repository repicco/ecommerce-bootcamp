import { categoryTable } from "@/db/schema";

import { Button } from "../ui/button";

interface CategorySelectorProps {
  categories: (typeof categoryTable.$inferSelect)[];
}

export const CategorySelector = ({ categories }: CategorySelectorProps) => {
  return (
    <div className="rounded-3xl bg-[#f4efff] p-6">
      <div className="grid grid-cols-2 gap-3">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant="ghost"
            className="bg-white rounded-full font-semibold text-xs"
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
};
