import React, { useState } from "react";

import { Wrapper, Container, Nav, Logo, Links, HyperLink } from "./styles";

const NavBar = () => {
  const [NavBar, setNavBar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 350) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <Container background={NavBar}>
      <Wrapper>
        <Logo>João Victor Borges</Logo>
        <Nav>
          <Links className="menu">
            <a href="#home">
              <HyperLink>Home</HyperLink>
            </a>
          </Links>
          <Links className="menu">
            <a href="#sobre">
              <HyperLink>Sobre</HyperLink>
            </a>
          </Links>
          <Links className="menu">
            <a href="#portifolio">
              <HyperLink>Portifolio</HyperLink>
            </a>
          </Links>
        </Nav>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
