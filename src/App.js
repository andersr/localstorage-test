import React, { useEffect, useState } from 'react';
import './App.css';

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
      <input placeholder="persistent input" value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}

export default App;
