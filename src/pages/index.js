import React from 'react';

import NavBar from "../components/NavBar";
import Home from "./Home";
import Sobre from "./Sobre";
import Stack from "./Stack";
import Portfolio from "./Portfolio";
import { Container } from "../styles/GlobalStyles"
import Rodape from '../components/Rodape/Rodape';
import ButtonScroll from '../components/ButtonScroll/ButtonScroll';

const pages = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Home />
        <Sobre />
        <Stack />
        <Portfolio />
      </Container>
      <Rodape />
      <ButtonScroll />
    </>
  );
}

export default pages;