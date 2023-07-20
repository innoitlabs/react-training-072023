import logo from './logo.svg';
import './App.css';
import Users from './components/Users';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <div className="App">
      <AddUser />
      <UpdateUser />
      <Users />
    </div>
  );
}

export default App;
