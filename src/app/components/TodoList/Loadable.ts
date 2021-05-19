/**
 *
 * Asynchronously loads the component for TodoMapList
 *
 */

import { lazyLoad } from 'utils/loadable';

export const TodoList = lazyLoad(
  () => import('./index'),
  module => module.TodoList,
);
