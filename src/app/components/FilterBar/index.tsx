/**
 *
 * FilterBar
 *
 */
import * as React from 'react';
import classnames from 'classnames';

import { TState } from '../../pages/HomePage/interfaces';

interface Props {
  filter: TState['filter'];
  setFilter: React.Dispatch<React.SetStateAction<TState['filter']>>;
}

export function FilterBar({ filter, setFilter }: Props) {
  return (
    <div className="flex justify-center my-6">
      <div
        className={classnames('text-xl font-semibold mr-6 cursor-pointer', {
          'text-blue-500': filter === 'All',
        })}
        onClick={() => setFilter('All')}
      >
        All
      </div>
      <div
        className={classnames('text-xl font-semibold mr-6 cursor-pointer', {
          'text-blue-500': filter === 'Completed',
        })}
        onClick={() => setFilter('Completed')}
      >
        Completed
      </div>
      <div
        className={classnames('text-xl font-semibold mr-6 cursor-pointer', {
          'text-blue-500': filter === 'Active',
        })}
        onClick={() => setFilter('Active')}
      >
        Active
      </div>
    </div>
  );
}
