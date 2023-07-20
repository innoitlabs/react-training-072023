import React from 'react'
import { HelloContext } from './context/hello-context'
import ButtonContext from './context/button-context'
import ActionContext from './context/action-context'

function Message() {
  return (
    <HelloContext.Consumer>
      {({ message, toggleMessage }) => (
        <header className="App-header">
          <h1 className="App-title">
            {message.firstWord + " " + message.secondWord}
          </h1>
          <ButtonContext.Consumer>
            {({ title }) => (
              <div>
                <button onClick={toggleMessage}> {title} </button>
                              <ActionContext.Consumer>
                                  { 
                                      ({ alertMessage, asyncAlertMessage }) => (
                                          <div>
                                              <button onClick={alertMessage(message.firstWord + ' ' + message.secondWord)}>
                                                  Fire Title as Alert Message
                                              </button>
                                              <button onClick={asyncAlertMessage(message.firstWord+ ' '+message.secondWord, 3000)}>
                                                  Fire Title as Alert Message after 3 sec
                                              </button>
                                          </div>
                                      )
                                  }
                                  
                </ActionContext.Consumer>
              </div>
            )}
          </ButtonContext.Consumer>
        </header>
      )}
    </HelloContext.Consumer>
  );
}

export default Message