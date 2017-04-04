import { combineReducers } from 'redux'
import categories from './categories'
import activeTasks from './activeTasks'

const todoApp = combineReducers({
  categories,
  activeTasks
});

export default todoApp
