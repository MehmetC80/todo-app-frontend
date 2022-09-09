import { Todo, useGetAllTodosQuery } from '../services/todoApi';

import TodoComponent from './TodoComponent';
export const Todos = () => {
  const { data, error, isLoading } = useGetAllTodosQuery('');
  if (isLoading) return null;
  if (data && data.length !== 0)
    return (
      <div className='rounded-lg shadow border p-4 grid gap-4'>
        {data.map((todo: Todo, i: number) => (
          <div key={i}>
            <TodoComponent todo={todo} index={i}></TodoComponent>
          </div>
        ))}
      </div>
    );
  return null;
};
