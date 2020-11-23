import styled from "styled-components";
import { Container } from "../../styles/GlobalStyles";

export const ContainerFooter = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0px;
  z-index: 1;
`;

export const Text = styled.p`
 font-size: 15px;
 color: ${({ lightBg }) => (lightBg ? "#232323" : "#fff")};
`;

export const Link = styled.a`
  color: #4b59f7;
`;