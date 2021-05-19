/**
 *
 * Asynchronously loads the component for TodoCard
 *
 */

import { lazyLoad } from 'utils/loadable';

export const TodoCard = lazyLoad(
  () => import('./index'),
  module => module.TodoCard,
);
