import React from 'react';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {
  const [formValues, handleInputChange] = useForm({
    email: '',
    password: '',
  });
  const { email, password } = formValues;

  const handleLogin = () => {
    console.log(email, password);
  };

  return (
    <div className='form__main'>
      <form action='addQuote' className='form' onSubmit={handleLogin}>
        <h2 className='form__title'>Login</h2>
        <input type='email' name='email' id='email' placeholder='e-mail' />
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Password'
        />
        <button type='submit' className='btn form__btn'>
          Login
        </button>
        <a href='register.html' className='link'>
          Create new Account
        </a>
      </form>
    </div>
  );
};
