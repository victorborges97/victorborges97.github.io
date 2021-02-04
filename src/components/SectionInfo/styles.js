import styled from "styled-components";

export const Info = styled.div`
  color: ${({ lightBg }) => (lightBg ? "#24292e" : "#fff")};
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#24292e")};
  height: ${({ height }) => (height && "100vh")};;
  padding-left: 20px;
  padding-right: 20px;
`;

