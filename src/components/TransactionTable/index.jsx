import React from 'react';
import * as S from './styles';
import { TransactionsContext } from '../../contexts/TransactionsContext';

const index = () => {
  const { transactions } = React.useContext(TransactionsContext);

  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td
                  className={transaction.type === 'deposit' ? 'green' : 'red'}
                >
                  {transaction.type === 'withdraw' ? '-' : null}
                  {new Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-br').format(
                    new Date(transaction.createAt),
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </S.Container>
  );
};

export default index;
