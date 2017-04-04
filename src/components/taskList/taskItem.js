import './taskItem.scss'
import React, { PropTypes } from 'react'

let TaskItem = ({ task }) => {
  return (
    <div className="task-item">
      <input type="checkbox" defaultChecked={task.isDone}/>
      <span>{task.title}</span>
    </div>
  )
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired
};

export default TaskItem;
