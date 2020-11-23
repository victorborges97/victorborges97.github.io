import React from 'react';

import { ContainerFooter, Text, Link } from './styles';

const Rodape = ({ lightBg }) => {
  return (
    <ContainerFooter>
      <footer>
        <Text lightBg={lightBg}>© All Right Reserved By <Link href={"https://github.com/victorborges97"}>João Victor Borges</Link></Text>
      </footer>
    </ContainerFooter>
  )
}

export default Rodape;