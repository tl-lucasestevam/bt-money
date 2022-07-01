import React from 'react';
import { GlobalStyle } from './styles/Global';
import Modal from 'react-modal';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import NewTransactionModal from './components/NewTransactionModal';
import { TransactionsProvider } from './contexts/TransactionsContext';

Modal.setAppElement('#root');

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    React.useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header handleOpenModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isModalOpen={isNewTransactionModalOpen}
        handleCloseModal={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
export default App;
