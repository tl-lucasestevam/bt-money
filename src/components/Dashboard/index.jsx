import React from 'react';
import * as S from './styles';
import Summary from '../Summary';
import TransactionTable from '../TransactionTable';

const index = () => {
  return (
    <S.Container>
      <Summary />
      <TransactionTable />
    </S.Container>
  );
};

export default index;
