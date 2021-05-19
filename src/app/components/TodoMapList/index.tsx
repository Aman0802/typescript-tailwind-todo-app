/**
 *
 * TodoMapList
 *
 */
import * as React from 'react';
import { TState } from '../../pages/HomePage/interfaces';
interface Props {
  todosToMap: TState['todo'][];
  setTodos: React.Dispatch<React.SetStateAction<TState['todo'][]>>;
  updateTodos: any;
}

export function TodoMapList({ todosToMap, setTodos, updateTodos }: Props) {
  return (
    <>
      {todosToMap?.map((todoItem, i) => (
        <div
          key={i}
          className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 mt-6"
        >
          <div className="flex items-baseline">
            <input
              className="mr-2"
              type="checkbox"
              defaultChecked={todoItem.isCompleted}
              onChange={() => setTodos(updateTodos(todoItem))}
            />
            <div className="text-xl font-medium text-black">
              {todoItem.name}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
