import React from 'react';

export const FloatingBtn = () => {
  return (
    <div className='floating__btn'>
      <a className='btn' href='addQuote.html'>
        <span className='add__btn'>
          <i className='fas fa-pen-nib'></i>
        </span>{' '}
        Add New Quote
      </a>
    </div>
  );
};
