import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import Admin_start from './components/Admin_start/Admin_start';
import './App.css';
const ENDPOINT = "https://das-quiz.herokuapp.com/";

function App() {
  const socket  = socketIOClient(ENDPOINT);
  const [starting, setStarting] = useState(true);
  return (
    <div className="App">
      <Admin_start socket={socket}/>
    </div>
  );
}

export default App;
