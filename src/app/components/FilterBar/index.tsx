import * as React from 'react';
import classnames from 'classnames';

import { HomePageState } from '../../pages/HomePage/interfaces';

interface Props {
  filter: HomePageState['filter'];
  setFilter: React.Dispatch<React.SetStateAction<HomePageState['filter']>>;
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
