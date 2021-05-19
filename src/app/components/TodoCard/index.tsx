/**
 *
 * TodoCard
 *
 */
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { HomePageState } from '../../pages/HomePage/interfaces';
import { useTodoSlice } from '../../pages/HomePage/slice/index';

interface Props {
  todoItem: HomePageState['todo'];
}

export function TodoCard({ todoItem }: Props) {
  const { actions } = useTodoSlice();
  const dispatch = useDispatch();
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 mt-6">
      <div className="flex items-baseline">
        <input
          className="mr-2"
          type="checkbox"
          defaultChecked={todoItem.isCompleted}
          onChange={() => dispatch(actions.updateTodo(todoItem))}
        />
        <div className="text-xl font-medium text-black">{todoItem.name}</div>
      </div>
    </div>
  );
}
