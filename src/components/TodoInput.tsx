import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import Button from './ui/Button';
import Input from './ui/Input';
import { useAddTodoMutation, useGetAllTodosQuery } from '../services/todoApi';
import { add } from '../services/localTodos';

export const TodoInput = () => {
  const [value, setValue] = useState('');
  const [addTodo, { isLoading }] = useAddTodoMutation();
  const { refetch } = useGetAllTodosQuery('');
  const dispatch = useDispatch();

  function handleAddTodo() {
    dispatch(
      add({
        text: value,
        createdAt: String(new Date().toLocaleDateString()),
      })
    );
    addTodo({
      text: value,
      createdAt: String(new Date().toLocaleDateString()),
    }).then(() => {
      setValue('');
      refetch();
    });
  }
  return (
    <div className='flex space-x-2 justify-center'>
      <div>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onEnter={handleAddTodo}
        />
      </div>
      <div>
        <Button onClick={handleAddTodo}>+</Button>
      </div>
    </div>
  );
};
