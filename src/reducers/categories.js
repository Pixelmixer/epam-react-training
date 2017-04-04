const initialState = {
  childNodes: [
    {title: "Category 1", childNodes: [
      {title: "Category 1-1", tasks: [
        {title: 'Task 1-1-1', isDone: true, description: 'description 1-1-1'},
        {title: 'Task 1-1-2', isDone: true, description: 'description 1-1-2'}
      ]},
      {title: "Category 1-2", childNodes: [
        {title: "Category 1-2-1", tasks: [
          {title: 'Task 1-2-1-1', isDone: false, description: 'description 1-2-1-1'},
          {title: 'Task 1-2-1-2', isDone: true, description: 'description 1-2-1-2'},
        ]},
        {title: "Category 1-2-2", tasks: [
          {title: 'Task 1-2-2-1', isDone: true, description: 'description 1-2-2-1'},
          {title: 'Task 1-1-2-2', isDone: false, description: 'description 1-1-2-2'},
        ]}
      ]}
    ]},
    {title: "Category 2", childNodes: [
      {title: "Category 2-1", tasks: [
        {title: 'Task 2-1-1', isDone: true, description: 'description 2-1-1'},
        {title: 'Task 2-1-2', isDone: true, description: 'description 2-1-2'},
        {title: 'Task 2-1-3', isDone: false, description: 'description 2-1-3'},
      ]},
      {title: "Category 2-2", tasks: [
        {title: 'Task 2-2-1', isDone: true, description: 'description 2-2-1'},
        {title: 'Task 2-2-2', isDone: false, description: 'description 2-2-2'},
        {title: 'Task 2-2-3', isDone: false, description: 'description 2-2-3'},
      ]}
    ]},
    {title: "Category 3", childNodes: [
      {title: "Category 3-1", childNodes: [
        {title: "Category 3-1-1", tasks: [
          {title: 'Task 3-1-1-1', isDone: false, description: 'description 3-1-1-1'},
          {title: 'Task 3-1-1-2', isDone: true, description: 'description 3-1-1-2'},
          {title: 'Task 3-1-1-3', isDone: true, description: 'description 3-1-1-3'},
        ]},
        {title: "Category 3-1-2", tasks: [
          {title: 'Task 3-1-2-1', isDone: true, description: 'description 3-1-2-1'},
          {title: 'Task 3-1-2-2', isDone: true, description: 'description 3-1-2-2'},
          {title: 'Task 3-1-2-3', isDone: false, description: 'description 3-1-2-3'},
        ]},
      ]},
      {title: "Category 3-2", tasks: [
        {title: 'Task 3-2-1', isDone: false, description: 'description 3-2-1'},
        {title: 'Task 3-2-2', isDone: false, description: 'description 3-2-2'},
        {title: 'Task 3-2-3', isDone: false, description: 'description 3-2-3'},
      ]}
    ]}
  ]
};

const categories = (state = initialState, action) => {
  return state;
};

export default categories;
