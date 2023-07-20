import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Ios from './components/Ios';
import AndroidTech from './components/AndroidTech';
import ReactTech from './components/ReactTech';
import ReactNative from './components/ReactNative';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Technologies</h1>
        <nav>
          <ul>
            <li>
              {/* <a href="/android"> Android Tech </a> */}
              <Link to="/android/1"> Android Tech</Link>
            </li>
            <li>
              <a href="/ios"> iOS </a>
            </li>
            <li>
              <a href="/react"> React Tech </a>
            </li>
            <li>
              <a href="/reactnative"> React Native </a>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/android/:param1" element={<AndroidTech />} />
          <Route path="/ios" element={<Ios />} />
          <Route path="/react" element={<ReactTech />} />
          <Route path="/reactnative" element={<ReactNative />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
