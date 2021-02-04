import React from 'react';

import { ContainerFooter, Footer, Text, Link, ContainerIcons } from './styles';

const Rodape = ({ lightBg }) => {
  return (
    <ContainerFooter>
      <Footer lightBg={lightBg}>
        <ContainerIcons id="contact-social">
          <a target="_blank" without rel="noopener noreferrer" href="mailto:borges.jvdo@gmail.com" style={{ color: "#FFF", padding: 5 }}><i className="fas fa-envelope"></i></a>
          <a target="_blank" without rel="noopener noreferrer" href="https://instagram.com/jvborges.97" style={{ color: "#FFF", padding: 5 }}><i className="fab fa-instagram"></i></a>
          <a target="_blank" without rel="noopener noreferrer" href="https://github.com/victorborges97" style={{ color: "#FFF", padding: 5 }}><i className="fab fa-github"></i></a>
          <a target="_blank" without rel="noopener noreferrer" href="https://www.linkedin.com/in/joaovictor-borges/" style={{ color: "#FFF", padding: 5 }}><i className="fab fa-linkedin"></i></a>
        </ContainerIcons>
        <Text lightBg={lightBg}>© All Right Reserved By <Link href="https://github.com/victorborges97">João Victor Borges</Link></Text>
      </Footer>
    </ContainerFooter>
  )
}

export default Rodape;
