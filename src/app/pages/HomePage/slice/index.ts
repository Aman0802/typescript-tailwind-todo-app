import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { todoSaga } from './saga';
import { TodoState } from './types';
import { HomePageState } from '../interfaces';
import { updateTodos } from '../../../../utils/todos';

export const initialState: TodoState = {
  todos: [],
};

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<HomePageState['todo']>) {
      state.todos = [...state.todos, action.payload];
    },
    updateTodo(state, action: PayloadAction<HomePageState['todo']>) {
      state.todos = updateTodos(state.todos, action.payload);
    },
  },
});

export const { actions: todoActions } = slice;

export const useTodoSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: todoSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useTodoSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
