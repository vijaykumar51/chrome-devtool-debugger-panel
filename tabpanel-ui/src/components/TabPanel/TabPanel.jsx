/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function TabPanel({ data }) {
  const [activeTab, setActiveTab] = useState(data[0]?.tabName);

  const activeTabDetails = data.find((d) => d.tabName === activeTab);

  useEffect(() => setActiveTab(data[0]?.tabName), [data]);

  console.log({ data });

  const tabs = (
    <div className="tabHeader">
      {data.map((tab) => (
        <button
          key={tab.tabName}
          className={`tab ${activeTab === tab.tabName ? "activeTab" : ""}`}
          onClick={() => setActiveTab(tab.tabName)}
        >
          {/* TODO: capitalizing first letter. Find better way. */}
          {tab.tabName.replace(/^./, (str) => str.toUpperCase())}
        </button>
      ))}
    </div>
  );

  return (
    <div>
      {tabs}
      <div className="tabContentContainer">{activeTabDetails.tabContent}</div>
    </div>
  );
}

export default TabPanel;
