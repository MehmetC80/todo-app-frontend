import { TodoInput } from '../components/TodoInput';
import { Todos } from '../components/Todos';

import { useSelector } from 'react-redux';
import { RootState } from '../store';

import { LogoutComponent } from '../components/user/LogoutComponent';

export const IndexPage = () => {
  const localTodoList = useSelector(
    (state: RootState) => state.localTodos.todos
  );
  const userState = useSelector((state: RootState) => state.user);

  return (
    <div className='grid gap-4 max-w-lg'>
      <TodoInput />
      {userState.name && (
        <div className='font-light'>Hallo, {userState.name}!</div>
      )}
      <Todos />
      <LogoutComponent />

      {/* <div>{JSON.stringify(localTodoList)}</div> */}
    </div>
  );
};
