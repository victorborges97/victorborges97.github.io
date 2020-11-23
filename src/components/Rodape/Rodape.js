import React from 'react';

import { ContainerFooter, Footer, Text, Link } from './styles';

const Rodape = ({ lightBg }) => {
  return (
    <ContainerFooter>
      <Footer>
        <Text lightBg={lightBg}>© All Right Reserved By <Link href={"https://github.com/victorborges97"}>João Victor Borges</Link></Text>
      </Footer>
    </ContainerFooter>
  )
}

export default Rodape;