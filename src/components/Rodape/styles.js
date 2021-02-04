import styled from "styled-components";

export const ContainerFooter = styled.div`
`;

export const Footer = styled.footer`
  width: 100%;
  margin-top: 80px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ lightBg }) => (lightBg ? "#232323" : "#fff")};
`

export const Text = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;

  font-size: 15px;
  color: ${({ lightBg }) => (lightBg ? "#232323" : "#fff")};
`;

export const Link = styled.a`
  color: #4b59f7;
`;

export const ContainerIcons = styled.div`
  display: inline;
  color: #FFF
`;