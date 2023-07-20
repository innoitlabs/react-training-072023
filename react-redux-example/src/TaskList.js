import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from './actions';

function TaskList() {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    
    const handleDelete = (id) => { 
        dispatch(deleteTodo(id));
    }
  return (
    <div>
      <h3> Tasks List</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleDelete(task.id)}> delete </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList