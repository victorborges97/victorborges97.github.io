import styled from "styled-components";
import { Container } from "../../styles/GlobalStyles";

export const ContainerFooter = styled(Container)`
`;

export const Footer = styled.footer`
  width: 100%;
  height: 40px;
  margin-top: 80px;
  display: flex;
  justify-content: center;

  position: relative;
`

export const Text = styled.p`
  position: absolute;
  bottom: 8px;  
  font-size: 15px;
  color: ${({ lightBg }) => (lightBg ? "#232323" : "#fff")};
`;

export const Link = styled.a`
  color: #4b59f7;
`;