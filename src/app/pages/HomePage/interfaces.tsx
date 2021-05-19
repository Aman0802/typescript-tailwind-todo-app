export interface TState {
  todo: {
    name: string;
    isCompleted: boolean;
  };
  filter: 'All' | 'Completed' | 'Active';
}
