import React, { PropTypes, Component } from 'react'
import TaskItem from './taskItem'
import { connect } from 'react-redux'

class TaskList extends Component {
  render() {
    const tasks = this.props.taskList.map((task, index) => {
      return <TaskItem key={index} task={task}/>
    });

    return (
      <div className="col-xs-6">{tasks}</div>
    )
  }
}

TaskList.propTypes = {
  taskList: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    taskList: state.activeTasks
  }
};

export default connect(mapStateToProps)(TaskList)