import React from "react";
import TabNavigationButton from "./TabNavigationButton";

const SingleReportTab = ({
  tab,
  activeTab,
  handleTabChange,
  summaryTabRef,
  inView,
}) => {
  return (
    <>
      <TabNavigationButton
        tab={tab}
        activeTab={activeTab}
        handleTabChange={handleTabChange}
      />
      {activeTab === tab.id && (
        <div role={`tabpanel ${tab.id}`} className="py-4 tab-content">
          {tab.content}
        </div>
      )}
    </>
  );
};

export default SingleReportTab;
