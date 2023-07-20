import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { HelloContext, messages } from './context/hello-context';
import ButtonContext from './context/button-context';
import Message from "./Message";
import ActionContext, { fireAlertMessage, fireAsyncAlertMessage } from './context/action-context';


class App extends Component {
  
  _toggleMessage = () => { 
    this.setState(prevState => ({
      message
        : prevState.message === messages.message1
        ? messages.message2
        : messages.message1
    }));
  }

  state = {
    message: messages.message1,
    toggleMessage: this._toggleMessage,
  }

  render() { 
    return (
      <HelloContext.Provider value={this.state}>
        <ButtonContext.Provider value={{ title: 'Toggle Message' }}>
          <ActionContext.Provider value={{ alertMessage: fireAlertMessage, asyncAlertMessage: fireAsyncAlertMessage }}>
            <div className='App'>
              <Message />
            </div>
          </ActionContext.Provider>
        </ButtonContext.Provider>
      </HelloContext.Provider>
    );
  };
}

export default App;
