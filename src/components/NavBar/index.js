import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import {
  Nav,
  NavBarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./styles";

const NavBar = () => {
  const [NavBar, setNavBar] = useState(false);
  const [Click, setClick] = useState(false);

  //Função para ver o quanto rolou o scroll do mouse assim posso muda a cor conforme o tamanho que defini
  const changeBackground = () => {
    if (window.scrollY >= 350) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  //Função para abrir o menu mobile
  const handleClickMenuMobile = () => setClick(!Click);

  window.addEventListener("scroll", changeBackground);

  return (
    <Nav background={NavBar}>
      <NavBarContainer>
        <NavLogo to="/" hover={NavBar}>
          <NavIcon hover={NavBar} />
          João Victor Borges
        </NavLogo>
        <MobileIcon onClick={handleClickMenuMobile} hover={NavBar}>
          {Click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu Click={Click} hover={NavBar}>
          <NavItem>
            <NavLinks to="#home" hover={NavBar}>
              Home
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="#sobre" hover={NavBar}>
              Sobre
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="#portifolio" hover={NavBar}>
              Portfólio
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks hover={NavBar}>Currículo</NavLinks>
          </NavItem>
        </NavMenu>
      </NavBarContainer>
    </Nav>
  );
};

export default NavBar;

//
