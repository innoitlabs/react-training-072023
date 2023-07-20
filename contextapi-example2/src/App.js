import { useContext } from 'react';
import './App.css';
import { UserContext } from './userContext.js';
function App() {
  const userContext = useContext(UserContext);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => userContext.happyBirthday()}>
         
          Happy Birthday {userContext.name}, You are turnig age { userContext.age}
         </button>
      </header>
    </div>
  );
}

export default App;
