import styled from "styled-components";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container } from "../../styles/GlobalStyles";

export const Nav = styled.nav`
  background: ${(props) => (props.background ? "#4b59f7" : "transparent")};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;

  transition: all 0.4s ease;
`;

export const NavBarContainer = styled(Container)`
  justify-content: space-between;
  display: flex;
  height: 80px ${Container};
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;

  &:hover {
    color: ${(props) => (props.hover ? "#24292e" : "#4b59f7")};
  }
`;

export const NavIcon = styled(FaCode)`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;

    &:hover {
      color: ${(props) => (props.hover ? "#24292e" : "#4b59f7")};
    }
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ Click }) => (Click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: ${(props) => (props.hover ? "#4b59f7" : "#24292e")};
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 0.2rem solid transparent;

  &:hover {
    border-bottom: 0.2rem solid #4b59f7;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: ${(props) => (props.hover ? "#24292e" : "#4b59f7")};
      transition: all 0.3s ease;
    }
  }
`;

// export const seila = styled.header``;

// export const seila = styled.header``;
