/* eslint-disable no-undef */
import { useCallback, useEffect, useState } from "react";
import { styled } from "styled-components";

import "./App.css";
import Entry from "./components/Entry";

import {
  eventDetailMap,
  processedEventInfo,
  processEvent,
} from "./mock/mockData";
import ActionDetails from "./components/ActionDetails/ActionDetails";

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

const initEventStateValue = processedEventInfo;
console.log({ initEventStateValue });

const isWebApp = !chrome.runtime;

function App() {
  const [store, setStore] = useState(initEventStateValue);
  const [selectedAction, setSelectedAction] = useState();

  useEffect(() => {
    if (isWebApp) return;

    chrome.runtime.onMessage.addListener((message) => {
      // console.log(message);
      const newState = processEvent(message.payload);
      // console.log(newState);
      setStore([...newState]);
    });
  }, []);

  const onEntrySelection = useCallback((e) => {
    console.log(e);
    setSelectedAction(e);
  }, []);

  return (
    <StyledAppLayout>
      <div id="messages">
        <h2>Messages</h2>
        {/* <button
          onClick={() => {
            setSelectedAction();
          }}
        >
          Clear messages
        </button> */}
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
            actionDetails={eventDetailMap.get(selectedAction).details}
          />
        )}
      </div>
    </StyledAppLayout>
  );
}

export default App;
