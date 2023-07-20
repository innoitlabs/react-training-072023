import logo from './logo.svg';
import './App.css';
import Greeter from './Greeter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeter name="WillSmith" age={50} />
      </header>
    </div>
  );
}

export default App;
