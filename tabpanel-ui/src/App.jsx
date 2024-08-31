import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // eslint-disable-next-line no-undef, no-unused-vars
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      console.log(message);
    });
    
  })

  return (
    <>
      <h1>Vite + React</h1>
      <div id='messages'></div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
