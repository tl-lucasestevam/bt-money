import React from 'react';
import api from '../services/api';

export const TransactionsContext = React.createContext([]);

export function TransactionsProvider({ children }) {
  const [transactions, setTransactions] = React.useState([]);

  React.useEffect(() => {
    api
      .get('/transactions')
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionParam) {
    const transactionPost = await api.post('/transactions', {
      id: (transactions.length + 1).toString(),
      ...transactionParam,
      createAt: new Date(),
    });

    const transaction = transactionPost.data.transaction.requestBody;

    setTransactions([...transactions, JSON.parse(transaction)]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
