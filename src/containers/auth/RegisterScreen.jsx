import React from 'react';
import { useForm } from '../../hooks/useForm';

import validator from 'validator';

export const RegisterScreen = () => {
  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const { name, email, password, password2 } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log('Nice!');
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      return false;
    } else if (!validator.isEmail(email)) {
      return false;
    } else if (password !== password2 && password.length < 5) {
      return false;
    }

    return true;
  };

  return (
    <div class='form__main'>
      <div className='form__alertError'></div>
      <form
        action='addQuote'
        class='form register__form'
        onSubmit={handleSubmit}
      >
        <h2 className='form__title'>Register</h2>
        <input
          type='test'
          name='name'
          id='name'
          placeholder='Name'
          value={name}
          onChange={handleInputChange}
        />
        <input
          type='email'
          name='email'
          id='email'
          placeholder='e-mail'
          value={email}
          onChange={handleInputChange}
        />
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Password'
          value={password}
          onChange={handleInputChange}
        />
        <input
          type='password'
          name='password2'
          id='password2'
          placeholder='Confirm password'
          value={password2}
          onChange={handleInputChange}
        />
        <button type='submit' class='btn form__btn'>
          Register
        </button>
        <a href='register.html' class='link'>
          Do you have an account? Login
        </a>
      </form>
    </div>
  );
};
