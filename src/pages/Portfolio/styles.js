import styled from "styled-components";

export const Section = styled.div`
  background: ${({ lightBg }) => (lightBg && "#fff")};
  color: ${({ lightBg }) => (lightBg && "#232323")};
  padding-top: 15vh;
  width: 100%;
  
  transition: all 0.4s ease;
`;

export const TituloPage = styled.h1`
  display: flex;
  justify-content: center;
`;

export const Projets = styled.div`
  margin-top: 30px;  
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Projet = styled.div`
  height: 250px;
  min-height: 110px;
  max-height: 250px;
  width: 450px;
  min-width: 200px;
  max-width: 450px;
  background-image: url(${({ img }) => img !== "" && img});
  background-position: center;
  background-repeat: no-repeat; 
  background-size: cover; 
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
