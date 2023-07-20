import React, { useState } from 'react'
import axios from 'axios'

function UpdateUser() {

    const [state, setState] = useState({
        Name: "",
        userName:""
    });

    const submitForm = (event) => {
        event.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/1", { state })
            .then((response) => { 
                console.log(response.data);
            });
    }

    const handleChange = (event) => { 
        event.preventDefault();
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value
        });
    }

  return (
    <div>
      <p>
        <strong>UpdateUser</strong>
      </p>
      <div>
        <form onSubmit={submitForm}>
          <label>
            User Name:
            <input
              type="text"
              name="Name"
              placeholder="name"
              value={state.Name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="userName"
              placeholder="userName"
              value={state.userName}
              onChange={handleChange}
            />
                  </label>
                  <button type='submit'> Update </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser