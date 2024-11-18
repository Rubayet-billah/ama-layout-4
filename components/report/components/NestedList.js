import React from "react";
import { Plus, X } from "lucide-react";

const NestedList = ({
  items,
  region = false,
  level = 1,
  parentIndex = "",
  parentPath = [],
}) => {
  const listStyletype = (level) => {
    switch (level) {
      case 1:
        return "list-[square]";
      case 2:
        return "list-[circle]";
      default:
        return "list-disc";
    }
  };

  return (
    <ul className={`mb-3 ${listStyletype(level)}`}>
      {items.map((item, index) => (
        <li key={index} className="ml-3">
          <span
            className={`mt-3 mb-2 list-disc ${
              parentPath.length > 0 ? "" : "font-semibold"
            } `}
          >
            {level == 1 && !region && "By "}
            {item.name}{" "}
          </span>

          {/* Recursively render sub-items if they exist */}
          {item.sub_items && item.sub_items.length > 0 && (
            <NestedList
              items={item.sub_items}
              level={level + 1}
              parentIndex={
                parentIndex ? `${parentIndex}.${index + 1}` : `${index + 1}`
              }
              parentPath={[...parentPath, index]}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default NestedList;
