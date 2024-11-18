import React from "react";
import NavElement from "../products/components/NavElement";

const SidebarCategories = ({ categories }) => {
  const { parentCategories, subCategories } = categories;
  return (
    <div className="mt-5">
      <div>
        {parentCategories?.map((parentCategory) => {
          const subCategoriesOfParent = subCategories?.filter(
            (sCt) => sCt.parentCategory == parentCategory.id
          );
          return (
            <NavElement
              key={parentCategory.id}
              parentCategory={parentCategory}
              subCategoriesOfParent={subCategoriesOfParent}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SidebarCategories;
