import React, { Component } from 'react'
import MyPropsComponent from './MyPropsComponent';

class MyClassComponent extends Component {
    constructor() { 
        super();
        this.state = { username: "Prakash", city: "Bangalore"}; //class component
    }

    newState = () => { 
        this.setState({username:"Surya"})
    }

    render() {
        const { username, city } = this.state;//destructuring
        return (
          <>
            <div>
              Hello {username} from {city}, Welcome to Class Component
                </div>
                <button onClick={this.newState} > click to change name </button>
                <MyPropsComponent text="Random Text" />
          </>
        );
  }
}

export default MyClassComponent;