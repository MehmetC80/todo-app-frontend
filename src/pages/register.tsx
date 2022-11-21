import Input from '../components/ui/Input';
import { useState } from 'react';
import Button from '../components/ui/Button';
import { useRegisterUserMutation } from '../service/todoApi';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setToken } from '../service/userSlice';
import TextLink from '../components/ui/TextLink';

export const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [registerUser] = useRegisterUserMutation();
  let navigate = useNavigate();
  return (
    <div className='grid gap-4'>
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
          type='password'
          labelText='Passwort'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Passwort...'
        />
      </div>
      <div>
        <Button
          onClick={() => {
            registerUser({ name, password }).then((response: any) => {
              if (response.data.token) {
                dispatch(setToken(response.data.token));

                navigate('/');
              }
            });
          }}
        >
          Registrieren
        </Button>
        <span className='pl-2'>
          <TextLink route='/login'>Login?</TextLink>
        </span>
      </div>
    </div>
  );
};
