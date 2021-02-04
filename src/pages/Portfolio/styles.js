import styled from "styled-components";
import { Container } from "../../styles/GlobalStyles";

export const Section = styled(Container)`
  height: 80vh;
  background: ${({ lightBg }) => (lightBg && "#fff")};
  color: ${({ lightBg }) => (lightBg && "#232323")};
  padding-top: 60px;
  
  transition: all 0.4s ease;
`;

export const TituloPage = styled.h1`
  display: flex;
  justify-content: center;
`;

export const Projets = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Projet = styled.div`
  height: 150px;
  min-height: 110px;
  max-height: 150px;
  width: 300px;
  min-width: 200px;
  max-width: 300px;
  background-image: ${({ img }) => img !== "" && img};
  background: ${({ img }) => img ? null : "#323265"};
  margin: 10px;
`;

Projet.Title = styled.h3`
  color: black;
  font-size: 14px;
  margin: 10px;
  
`;

// export const Container = styled.div``;

// export const Container = styled.div``;

// export const Container = styled.div``;

// export const Container = styled.div``;
