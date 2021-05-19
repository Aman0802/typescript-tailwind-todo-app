export interface HomePageState {
  todo: {
    name: string;
    isCompleted: boolean;
  };
  filter: 'All' | 'Completed' | 'Active';
}
