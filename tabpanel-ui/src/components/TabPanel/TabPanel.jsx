/* eslint-disable react/prop-types */
import { useState } from "react";

function TabPanel({ data }) {
  const [activeTab, setActiveTab] = useState(data[0]?.tabName);

  const activeTabDetails = data.find((d) => d.tabName === activeTab);

  console.log({ data });

  const tabs = (
    <div className="tabHeader">
      {data.map((tab) => (
        <div
          key={tab.tabName}
          className="tab"
          onClick={() => setActiveTab(tab.tabName)}
        >
          {tab.tabName}
        </div>
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
