import React, { Component } from 'react'

class MyPropsComponent extends Component {
   
  render() {
    return (
        <div>{this.props.text}</div>
    )
  }
}

export default MyPropsComponent