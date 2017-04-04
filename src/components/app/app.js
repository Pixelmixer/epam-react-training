import './app.scss'
import React from 'react'
import CategoryListContainer from '../../containers/categoryListContainer'
import TaskList from '../taskList/taskList'

const App = () => (
  <div className="row">
    <CategoryListContainer/>
    <TaskList/>
  </div>
);

export default App
