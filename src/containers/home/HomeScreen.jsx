import React from 'react';
import { FloatingBtn } from '../../components/floatingBtn/FloatingBtn';
import { QuoteList } from '../../components/quoteList/QuoteList';

export const HomeScreen = () => {
  return (
    <div>
      <FloatingBtn />
      <QuoteList />
    </div>
  );
};
