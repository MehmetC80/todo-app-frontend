import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Todo } from './todoApi';

// Define a type for the slice state
interface LocalTodosState {
  todos: Todo[];
}

// Define the initial state using that type
const initialState: LocalTodosState = {
  todos: [],
};

export const localTodosSlice = createSlice({
  name: 'localTodos',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
  },
});

export const { add } = localTodosSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.localTodos;

export default localTodosSlice.reducer;
