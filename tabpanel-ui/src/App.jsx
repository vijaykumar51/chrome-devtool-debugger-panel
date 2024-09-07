/* eslint-disable no-undef */
import { useCallback, useEffect, useState } from "react";
import { styled } from "styled-components";

import "./App.css";
import Entry from "./components/Entry";

import { eventDetailMap, processedEventInfo } from "./mock/mockData";
import ActionDetails from "./components/ActionDetails/ActionDetails";

const getKey = () => (Math.random() + 1).toString(36).substring(2);

const StyledAppLayout = styled.div`
  display: flex;
  height: 100%;

  & > * {
    flex-grow: 1;
    flex-basis: 200px;
  }

  #messages {
    border-right: 2px solid #ccc;
    height: 100%;
    overflow: auto;
    padding: 10px;
  }

  #actions {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 15px;
  }
`;

const initValue = processedEventInfo;

console.log(initValue);

const isWebApp = !chrome.runtime;

// TODO: set messages to state and create a detail area and better visualization of actions in left pane

function App() {
  const [store] = useState(initValue);
  const [selectedAction, setSelectedAction] = useState();

  useEffect(() => {
    if (isWebApp) return;
    // eslint-disable-next-line no-unused-vars
    chrome.runtime.onMessage.addListener((message, _sender, _sendResponse) => {
      console.log(message);
      setList(new Map(list.set(getKey(), structuredClone(message.payload))));
    });
  });

  const onEntrySelection = useCallback((e) => {
    console.log(e);
    setSelectedAction(e);
  }, []);

  console.log(
    "selectedAction",
    store?.events?.filter((a) => a.id === selectedAction)
  );

  return (
    <StyledAppLayout>
      <div id="messages">
        <h2>Messages</h2>
        <button
          onClick={() => {
            setSelectedAction();
          }}
        >
          Clear messages
        </button>
        <div id="actions">
          {store?.map((event) => (
            <Entry
              key={event.id}
              eventDetails={event}
              onClick={(e) => onEntrySelection(e)}
            />
          ))}
        </div>
      </div>
      <div id="details">
        {selectedAction && (
          <ActionDetails
            selectedAction={selectedAction}
            payload={eventDetailMap.get(selectedAction).details.payload}
          />
        )}
      </div>
    </StyledAppLayout>
  );
}

export default App;
