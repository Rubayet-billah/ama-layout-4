import NavElement from "./components/NavElement";

const ProductSidebar = ({ categories }) => {
  const { parentCategories, subCategories } = categories;
  return (
    <div className="mt-5">
      <h3 className="mb-5 text-xl font-bold text-secondary">
        Industry Experties
      </h3>
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

export default ProductSidebar;
