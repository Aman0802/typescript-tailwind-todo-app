import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectTodos = (state: RootState) => state.todos || initialState;

export const selectTodo = createSelector([selectTodos], state => state);
