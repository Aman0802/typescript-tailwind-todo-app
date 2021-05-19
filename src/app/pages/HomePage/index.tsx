import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';

import { useTodoSlice } from './slice/index';
import { selectTodo } from './slice/selectors';
import { HomePageState } from './interfaces';
import { TodoList } from 'app/components/TodoList/Loadable';
import { FilterBar } from 'app/components/FilterBar';

export function HomePage() {
  const { actions } = useTodoSlice();
  const dispatch = useDispatch();

  // TODO and FILTER State
  const [todo, setTodo] = useState<HomePageState['todo']>({
    name: '',
    isCompleted: false,
  });
  const [filter, setFilter] = useState<HomePageState['filter']>('All');

  // ACCESSING THE GLOBAL STORE
  const { todos } = useSelector(selectTodo);

  // ON BUTTON CLICK, resets the textbox
  const handleAddTodo = () => {
    dispatch(actions.addTodo(todo));
    setTodo({
      name: '',
      isCompleted: false,
    });
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

        {filter === 'All' && <TodoList todosToMap={todos} />}

        {filter === 'Completed' && (
          <TodoList todosToMap={todos?.filter(todo => todo.isCompleted)} />
        )}

        {filter === 'Active' && (
          <TodoList todosToMap={todos?.filter(todo => !todo.isCompleted)} />
        )}
      </div>
    </>
  );
}
