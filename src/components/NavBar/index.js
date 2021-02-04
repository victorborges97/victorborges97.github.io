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
    if (window.scrollY >= 200) {
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
        <NavLogo to="SectionInfo-home" smooth={true} duration={1000} hover={NavBar}>
          <NavIcon hover={NavBar} />
          João Victor Borges
        </NavLogo>
        <MobileIcon onClick={handleClickMenuMobile} hover={NavBar}>
          {Click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu Click={Click} hover={NavBar}>
          <NavItem>
            <NavLinks to="SectionInfo-sobre" smooth={true} duration={1000} onClick={handleClickMenuMobile} hover={NavBar}>
              Sobre
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="SectionInfo-stack" smooth={true} duration={1000} onClick={handleClickMenuMobile} hover={NavBar}>
              Stack
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="SectionInfo-projetos" smooth={true} duration={1000} onClick={handleClickMenuMobile} hover={NavBar}>
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
