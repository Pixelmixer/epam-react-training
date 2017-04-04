const activeTasks = (state = [], action) => {
  switch (action.type) {
    case 'SET_ACTIVE_TASKS':
      return action.tasks;
    default:
      return state;
  }
};

export default activeTasks;
