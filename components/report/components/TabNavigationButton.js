// components/TabNavigationButton.js
import React from "react";

const TabNavigationButton = ({
  tab,
  activeTab,
  handleTabChange,
  isFloating,
}) => {
  return (
    <input
      type="radio"
      name="rd-tabs"
      role={`tab ${tab.id}`}
      className={`mr-1 md:mx-4 tab border border-primary text-nowrap font-semibold ${
        activeTab === tab.id ? "bg-primary text-white" : "text-primary"
      }`}
      id={tab.id}
      aria-label={tab.label}
      checked={activeTab === tab.id}
      onChange={() => handleTabChange(tab.id)}
      style={{
        color: activeTab === tab.id ? "white" : "",
        borderRadius: isFloating ? "4px" : "4px 4px 0 0",
      }}
    />
  );
};

export default TabNavigationButton;
