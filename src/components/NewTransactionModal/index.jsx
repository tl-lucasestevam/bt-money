import React from 'react';
import Modal from 'react-modal';
import api from '../../services/api';
import { TransactionsContext } from '../../contexts/TransactionsContext';

import modalFechar from '../../assets/fechar.svg';
import incomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saidas.svg';

import * as S from './styles';

const index = ({ isModalOpen, handleCloseModal }) => {
  const { createTransaction } = React.useContext(TransactionsContext);

  const [isDisabled, setIsDisabled] = React.useState(true);
  const [type, setType] = React.useState('deposit');
  const [title, setTitle] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [amount, setAmount] = React.useState(0);

  async function handleCreateNewTransaction(event) {
    event.preventDefault();
    if (verifyInputs()) return;

    await createTransaction({ title, amount, category, type });

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    setIsDisabled(true);

    handleCloseModal();
  }

  function verifyInputs() {
    if (amount === 0 || title === '' || category === '') {
      setIsDisabled(true);
      return true;
    } else {
      setIsDisabled(false);
      return false;
    }
  }

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <button onClick={handleCloseModal} className="react-modal-close">
        <img src={modalFechar} alt="Fechar Modal" />
      </button>

      <S.Container>
        <h2>Nova Transação</h2>
        <input
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            verifyInputs();
          }}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(e) => {
            setAmount(Number(e.target.value));
            verifyInputs();
          }}
        />

        <S.TransactionTypeContainer>
          <S.RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </S.RadioBox>

          <S.RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </S.RadioBox>
        </S.TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            verifyInputs();
          }}
        />
        <button
          type="submit"
          onClick={handleCreateNewTransaction}
          disabled={isDisabled ? true : false}
        >
          Cadastrar
        </button>
      </S.Container>
    </Modal>
  );
};

export default index;
