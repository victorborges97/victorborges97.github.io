import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => (props.background ? "#097deb" : "transparent")};
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 999;
  transition: all 0.4s ease;
`;

export const Wrapper = styled.header`
  max-width: 1280px;
  margin: 0 auto;
  justify-content: space-between;
  display: flex;
  padding: 30px 30px;
`;

export const Nav = styled.ul`
  display: flex;
`;

export const Logo = styled.h3`
  font-size: 20px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #097deb;
  }
`;

export const Links = styled.li`
  margin: 0px 30px 0px 0px;
  display: inline-block;
`;

export const HyperLink = styled.p`
  font-size: 16px;
  font-weight: 600;
  display: inline-block;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease;

  &:hover {
    color: #097deb;
  }
`;

// export const seila = styled.header``;

// export const seila = styled.header``;
