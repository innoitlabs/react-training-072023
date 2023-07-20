import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { MyContext } from './MyContext';
import MyComponent from './MyComponent';

function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <MyContext.Provider value={{ text, setText }}>
          {/*wrapped MyComponent in MyContext */}
          <MyComponent />
        </MyContext.Provider>
      </header>
    </div>
  );
}

export default App;
