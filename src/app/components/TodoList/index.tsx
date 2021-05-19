import * as React from 'react';

import { HomePageState } from '../../pages/HomePage/interfaces';
import { TodoCard } from '../TodoCard';
interface Props {
  todosToMap: HomePageState['todo'][];
}

export function TodoList({ todosToMap }: Props) {
  return (
    <>
      {todosToMap?.map((todoItem, i) => (
        <TodoCard key={i} todoItem={todoItem} />
      ))}
    </>
  );
}
