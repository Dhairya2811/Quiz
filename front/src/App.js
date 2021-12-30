import { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import './App.css';
import Start from './components/Start/Start';
const ENDPOINT = "http://localhost:5000";

function App() {
  const socket  = socketIOClient(ENDPOINT);
  const [starting, setStarting] = useState(true);
  useEffect(()=>{
    socket.on("starting", message=>{
      setStarting(message.start);
    });
  });  
  return (
    <div className="App">
      {starting ? (
        <Start socket={socket}/>
      ) : (
        <h2>Starting done</h2>
      )}
    </div>
  );
}

export default App;
