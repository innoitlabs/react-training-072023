import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Users() {
    const [post, setPost] = useState([])

    useEffect(() => { 
        async function fetchData() { 
            await axios
              .get("https://jsonplaceholder.typicode.com/users")
              .then((data) => {
                console.log(data?.data);
                setPost(data?.data);
              });
        }
        fetchData();
    }, []);
    
  return (
    <div>
      <strong>Users</strong>
      {post.map((item, i) => {
        return (
          <div key={i}>
            <p>{item?.name} </p>
          </div>
        );
      })}
    </div>
  );
}

export default Users