import styled from "styled-components";
import { Container } from "../../styles/GlobalStyles";

export const Info = styled.div`
  color: ${({ lightBg }) => (lightBg ? "#24292e" : "#fff")};
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#24292e")};
`;

export const Section = styled(Container)``;
