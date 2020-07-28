import React from 'react';
import { useForm } from '../../hooks/useForm';

import validator from 'validator';
import { useDispatch } from 'react-redux';
import { setError, removeError } from '../../actions/ui';

export const RegisterScreen = () => {
  const dispatch = useDispatch();

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
      dispatch(setError('Name is required'));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError('Email is not Valid'));
      return false;
    } else if (password !== password2 && password.length < 5) {
      dispatch(
        setError(
          'Password should be at least 6 characters and match each other'
        )
      );
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <div className='form__main'>
      <div className='form__alertError'></div>
      <form
        action='addQuote'
        className='form register__form'
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
        <button type='submit' className='btn form__btn'>
          Register
        </button>
        <a href='register.html' className='link'>
          Do you have an account? Login
        </a>
      </form>
    </div>
  );
};
