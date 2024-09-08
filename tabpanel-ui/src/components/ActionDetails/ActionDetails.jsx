/* eslint-disable react/prop-types */
import JSONViewer from "../JSONViewer/JSONViewer";
import { styled } from "styled-components";
import TabPanel from "../TabPanel/TabPanel";

const StyledActionDetails = styled.div`
  padding: 10px;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;

  #jsonViewerContainer {
    background-color: #2a2f3a;
    padding: 10px;
  }
`;

// TODO: this will be a tabbed layout
function ActionDetails({ actionDetails }) {
  const tabs = Object.keys(actionDetails);
  console.log({ tabs });

  // Tabs and TabDetails

  const tabPanelData = tabs.map((tab) => ({
    tabName: tab,
    tabContent: (
      <div id="jsonViewerContainer">
        <JSONViewer payload={actionDetails.payload} />
      </div>
    ),
  }));

  // TODO: remove these dummy tabs
  tabPanelData.push({
    tabName: "Diff",
    tabContent: <div>This is diff tab</div>,
  });
  tabPanelData.push({
    tabName: "Current state",
    tabContent: <div>This is current state tab</div>,
  });

  return (
    <StyledActionDetails>
      <h2>Details</h2>
      <TabPanel data={tabPanelData} />
    </StyledActionDetails>
  );
}

export default ActionDetails;
