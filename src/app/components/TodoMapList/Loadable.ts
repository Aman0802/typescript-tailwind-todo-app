/**
 *
 * Asynchronously loads the component for TodoMapList
 *
 */

import { lazyLoad } from 'utils/loadable';

export const TodoMapList = lazyLoad(
  () => import('./index'),
  module => module.TodoMapList,
);
