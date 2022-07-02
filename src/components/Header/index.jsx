import React from 'react';
import * as S from './styles';
import Logo from '../../assets/logo.svg';
import { randomHex } from 'randomize-hex';

const index = ({ handleOpenModal }) => {
  return (
    <S.Container>
      <S.Content>
        <img src={Logo} alt="Logo" />
        
        <button onClick={() => handleOpenModal(true)}>Nova transação</button>
      </S.Content>
    </S.Container>
  );
};

export default index;
