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
  height: 100%;
  background: ${({ lightBg }) => (lightBg && "#fff")};
  color: ${({ lightBg }) => (lightBg && "#232323")};
  padding-top: 60px;

  transition: all 0.4s ease;

  z-index: 1;

`;

export const TituloPage = styled.h1`
  display: flex;
  justify-content: center;
`;

export const Lista = styled.div`
  display: flex;  
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 80px auto;
`;

export const Row = styled.div`
  display: flex;
`

export const Item = styled.li`  
  display: flex;
  flex-direction: column;
  align-items: center;
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

// export const Container = styled.div``;
