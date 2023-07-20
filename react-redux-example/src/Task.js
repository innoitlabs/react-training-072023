import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from './actions';

function Task() {
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    function addNewTask() { 
        const task = inputRef.current.value.trim();
        if (task !== "") { 
            dispatch(addTodo(task));
            inputRef.current.value = "";
        }
    }
    
  return (
    <div>
      <input type="text" placeholder="Add task here..." ref={inputRef} />
      <button onClick={addNewTask}> Add task </button>
    </div>
  );
}

export default Task