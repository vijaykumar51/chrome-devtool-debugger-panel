/* eslint-disable no-undef */
import { useCallback, useEffect, useState } from "react";
import { styled } from "styled-components";
import "./App.css";
import Entry from "./components/Entry";

const getKey = () => (Math.random() + 1).toString(36).substring(2);

const StyledAppLayout = styled.div`
  display: flex;
  height: 100%;

  & > * {
    flex-grow: 1;
    flex-basis: 200px;
  }

  #messages {
    border-right: 2px solid #f5f5f5;
  }

  #actions {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 15px;
  }
`;
const mockData = {
  action: {
    instantRender: true,
    type: "forceUpdate",
    payload: {
      forceUpdateFeatures: {},
    },
  },
};
const initValue = new Map();
initValue.set(getKey(), mockData);

const isWebApp = !chrome.runtime;

// TODO: set messages to state and create a detail area and better visualization of actions in left pane

function App() {
  const [list, setList] = useState(isWebApp ? initValue : new Map());
  const [selectedAction, setSelectedAction] = useState();

  useEffect(() => {
    // eslint-disable-next-line no-undef, no-unused-vars
    if (isWebApp) return;
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      console.log(message);
      setList(new Map(list.set(getKey(), message.payload)));
    });
  });

  const onEntrySelection = useCallback((e) => {
    console.log(e);
    setSelectedAction(e);
  }, []);

  return (
    <StyledAppLayout>
      <div id="messages">
        <h2>Messages</h2>
        <button onClick={() => setList(new Map())}>Clear messages</button>
        <div id="actions">
          {Array.from(list.entries()).map(([key, value]) => (
            <Entry
              key={key}
              uniqueKey={key}
              payload={value}
              onClick={(e) => onEntrySelection(e)}
            />
          ))}
        </div>
      </div>
      <div id="details">
        <h2>Details</h2>
        {selectedAction && (
          <div>{JSON.stringify(list.get(selectedAction))}</div>
        )}
      </div>
    </StyledAppLayout>
  );
}

export default App;
