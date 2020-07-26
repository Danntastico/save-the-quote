import React from 'react';
import { Quote } from './Quote';

export const QuoteList = () => {
  return (
    <section className='news'>
      <div className='news__header'>
        <h1 className='news__title'>
          <i className='fas fa-pen-nib'></i> Your Latest Quotes
        </h1>
      </div>
      <div className='news__list container'>
        <Quote />
      </div>
    </section>
  );
};
