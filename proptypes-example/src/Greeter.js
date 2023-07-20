import React from 'react'
import { PropTypes, array } from 'prop-types'

function Greeter(props) {
  return (
      <div>Hello, {props.name} your age is { props.age} </div>
  )
}

Greeter.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
};

export default Greeter

// string,
//     number,
//     object,
//     boolean,
//     function,
//     array,
