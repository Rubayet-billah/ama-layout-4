import React from "react";
import { icons } from "lucide-react";

const LucidIcon = ({ name, classNames, size }) => {
  if (name) {
    const DynamicLucideIcon = icons[name];
    return <DynamicLucideIcon className={classNames} size={size || 48} />;
  } else {
    return "";
  }
};

export default LucidIcon;
