import React, { useEffect, useState } from 'react';
import './App.css';
import { Editor } from "./Editor";

function App() {
  const [value, setValue] = useState('')

  useEffect(() => {
    const str = localStorage.getItem('TEST_VALUE');
    if (str) {
      setValue(str);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('TEST_VALUE', value);
  }, [value])
  return (
    <div className="App">
      <Editor />
    </div>
  );
}

export default App;
