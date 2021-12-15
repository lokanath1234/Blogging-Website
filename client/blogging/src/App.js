import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
function App() {

  let [message, setMessage] = useState("Hello there");

  useEffect(() => {
    axios.get('http://localhost:8000/').then(res => {
      setMessage(res.data.message)
    })
  }, [])

  return (
    <h1>{message}</h1>
  );
}

export default App;
