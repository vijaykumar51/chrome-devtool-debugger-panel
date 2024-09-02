/* eslint-disable no-undef */
import { useCallback, useEffect, useState } from "react";
import { styled } from "styled-components";

import "./App.css";
import Entry from "./components/Entry";

import { mockData } from "./mock/mockData";
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

const initValue = new Map();
initValue.set(getKey(), mockData);

const isWebApp = !chrome.runtime;

// TODO: set messages to state and create a detail area and better visualization of actions in left pane

function App() {
  const [list, setList] = useState(isWebApp ? initValue : new Map());
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

  return (
    <StyledAppLayout>
      <div id="messages">
        <h2>Messages</h2>
        <button
          onClick={() => {
            setList(new Map());
            setSelectedAction();
          }}
        >
          Clear messages
        </button>
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
        {selectedAction && (
          <ActionDetails
            selectedAction={selectedAction}
            payload={list.get(selectedAction).payload}
          />
        )}
      </div>
    </StyledAppLayout>
  );
}

export default App;
