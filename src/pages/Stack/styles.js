import styled, { keyframes } from "styled-components";
import { Container } from "../../styles/GlobalStyles";

const isrotating = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

const shakeImg = keyframes`
  0% {
    transform: rotate(20deg);
  }
  25% {
    transform: rotate(-20deg);
  }
  50% {
    transform: rotate(20deg);
  }
  100% {
    transform: rotate(-20deg);
  }
`

export const Section = styled(Container)`
  height: 80vh;
  background: ${({ lightBg }) => (lightBg && "#fff")};
  color: ${({ lightBg }) => (lightBg && "#232323")};
  /* padding-top: 60px; */

  transition: all 0.4s ease;
`;

export const TituloPage = styled.h2`
  display: flex;
  justify-content: center;
`;

export const Lista = styled.div`
  display: flex;  
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: auto auto;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;

  @media (max-width: 400px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`

export const Item = styled.li`  
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  // padding: 10px 20px; 
  // background-color: #282828;
  width: 140px;
  height: 160px;
  margin: 5px;

  
`;

export const Titulo = styled.p`
  line-height: 1.8;
  // padding: 20px 0px;
  width: 140;
  height: 56px;
  margin-top: 5px;
`;

export const Foto = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%!important;
  // box-shadow: 0 0 0 1px #f8f8f8;
  cursor: pointer;

  :hover{
    animation:  ${({ rotate }) => (rotate ? isrotating : shakeImg)} 2s infinite linear;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;
