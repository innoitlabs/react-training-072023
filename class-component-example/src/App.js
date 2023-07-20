//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
//import MyClassComponent from './MyClassComponent';

//function App()
class App extends Component {
  //Iniialization
  constructor() {
    super();
    this.state = { text: "example" };
    this.changeState = this.changeState.bind(this);
    console.log("Contructor - Initialization");
  }

  //Mounting
  componentDidMount() {
    console.log("componentDidMount - Mounting");
  }

  //Updating Phase
  shouldComponentUpdate(nextProps, nextState) { 
    console.log("shouldComponentUpdate - Updating");
    return this.state.text !== nextState.text;
  }

  componentDidUpdate() { 
    console.log("componentDidUpdate - Updating");
  }

  //Unmounting Phase
  componentWillUnmount() {
    console.log("componentWillUnmount - Unmounting");
    //alert("componentWillUnmount - Unmounting");
  }

  changeState() { 
    this.setState({text:"Life Cycle Methods"});
  }
  render() {
    console.log("render - Initialization");
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.changeState}> click to change text </button>
          {/* <MyClassComponent /> */}
        </header>
      </div>
    );
  }
}

export default App;
