import axios from 'axios';
import React, { useState } from 'react';
import { UserModel } from '../models/UserModel';

function AddUser() {
    const [name, setName] = useState({
        name:" ",
    });

    const user = new UserModel("", "");
    
    const handleChange = (event) => { 
        event.preventDefault();
        setName({
            name : event.target.value,
        });
    }

    const config = {
      headers: {
        "Cache-Control:": "cache",
      },
    };

    const submitForm = (event) => {
        event.preventDefault();
        axios
          .post("https://jsonplaceholder.typicode.com/users", { name }, config)
          .then((response) => {
            console.log(response);
          });
    }


  return (
    <div>
      <p>
        <strong>AddUser</strong>
      </p>

      <div>
        <form onSubmit={submitForm}>
          <label>
            User Name:
            <input type="text" name="name" onChange={handleChange} />
                  </label>
            <button type='submit'> Add</button>
        </form>
      </div>
    </div>
  );
}

export default AddUser