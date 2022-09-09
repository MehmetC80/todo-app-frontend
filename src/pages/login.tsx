import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import TextLink from '../components/ui/TextLink';
import { useLoginUserMutation } from '../service/todoApi';
import { setToken } from '../service/userSlice';

function LoginPage() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser] = useLoginUserMutation();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        loginUser({ name, password })
          .then((res: any) => {
            if (res.data.token) {
              dispatch(setToken(res.data.token));
              navigate('/');
            }
          })
          .catch((err: any) => {
            if (err) {
              console.log('Login fail');
            }
          });
      }}
      className='grid gap-4'
    >
      <div>
        <Input
          labelText='Benutzername'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Name...'
        />
      </div>
      <div>
        <Input
          labelText='Password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password...'
        />
      </div>
      <div>
        <Button type='submit'>Login</Button>
        <span className='pl-2'>
          <TextLink route='/register'>Registriern?</TextLink>
        </span>
      </div>
    </form>
  );
}

export default LoginPage;
