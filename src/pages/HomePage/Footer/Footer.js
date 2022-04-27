import React from 'react';
import { FooterContainer } from './Footer.styles';
import Container from '../../../styles/Container';

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <p>Esta aplicação web foi desenvolvida por <a href="https://projetoslucasbargas.com/" target="_blank" rel="noopener noreferrer">Lucas Bargas</a>.</p>
      </Container>
    </FooterContainer>
  )
}

export default Footer;
