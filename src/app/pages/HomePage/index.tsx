import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { TState } from './interfaces';
import { TodoMapList } from 'app/components/TodoMapList/Loadable';
import { FilterBar } from 'app/components/FilterBar';

export function HomePage() {
  const [todo, setTodo] = useState<TState['todo']>({
    name: '',
    isCompleted: false,
  });
  const [todos, setTodos] = useState<TState['todo'][]>([]);
  const [filter, setFilter] = useState<TState['filter']>('All');

  const handleAddTodo = () => {
    setTodos([...todos, todo]);
    setTodo({
      name: '',
      isCompleted: false,
    });
  };

  const updateTodos = todoToAdd => {
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

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div className="px-24 mt-10">
        <h1 className="text-2xl text-center font-bold mb-6">Todo App</h1>

        <div className="flex justify-center ">
          <input
            className="border-b-2 border-gray-400 mr-4"
            placeholder="Enter todo..."
            type="text"
            name="todoAdd"
            value={todo.name}
            onChange={e => setTodo({ ...todo, name: e.target.value })}
          />
          <button
            className="bg-blue-500 px-2 py-1 text-white rounded-sm"
            onClick={handleAddTodo}
          >
            Add Todo
          </button>
        </div>

        <FilterBar filter={filter} setFilter={setFilter} />

        {filter === 'All' && (
          <TodoMapList
            todosToMap={todos}
            setTodos={setTodos}
            updateTodos={updateTodos}
          />
        )}

        {filter === 'Completed' && (
          <TodoMapList
            todosToMap={todos?.filter(todo => todo.isCompleted)}
            setTodos={setTodos}
            updateTodos={updateTodos}
          />
        )}

        {filter === 'Active' && (
          <TodoMapList
            todosToMap={todos?.filter(todo => !todo.isCompleted)}
            setTodos={setTodos}
            updateTodos={updateTodos}
          />
        )}
      </div>
    </>
  );
}
