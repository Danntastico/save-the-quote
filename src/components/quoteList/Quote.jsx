import React from 'react';

export const Quote = () => {
  return (
    <div className='quote'>
      <div className='quote__content'>
        <p className='quote__desc'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint tempora
          explicabo quos maxime temporibus voluptate ut perspiciatis earum,
          culpa mollitia. Impedit sit obcaecati in unde debitis. Ullam accusamus
          laborum totam.
        </p>
        <h3 className='quote__title'>Book Title</h3>
        <p className='quote__page'>page 73</p>
      </div>
      <div className='quote__icon'>
        <i className='fas fa-quote-right'></i>
      </div>
    </div>
  );
};
