export const updateTodos = (todos, todoToAdd) => {
  const shouldUpdate = todos.some(todoItem => {
    return todoItem.name === todoToAdd.name;
  });

  if (shouldUpdate) {
    return todos.map(todo => {
      if (todo.name === todoToAdd.name) {
        return {
          name: todo.name,
          isCompleted: !todoToAdd.isCompleted,
        };
      } else {
        return todo;
      }
    });
  } else {
    return todos;
  }
};
