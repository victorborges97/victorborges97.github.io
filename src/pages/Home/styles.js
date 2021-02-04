import styled, { keyframes } from "styled-components";

const colorCircle = keyframes`
  0%, 55% {
    filter: brightness(0) invert(1);
  }
  11%, 33% {
    filter: none;
  }
`;

export const SectionHome = styled.div`
  justify-content: center;
  display: flex;
  height: 90vh;
  /* height: 100%; */
  align-items: center;
  flex-direction: column;
  /* background: #9878; */
`;

export const TextoInitial = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  flex: 1;

  font-size: 7rem;
  line-height: 7rem;
  letter-spacing: -0.5rem;
  transition: all 0.2s;

  span {
    filter: brightness(0) invert(1);

    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 0 1.2rem;

    animation: ${colorCircle} 10s ease-in-out infinite;
  }

  span:nth-child(1) {
    background-image: linear-gradient(90deg, #4b59f7, #00dfd8);
  }
  span:nth-child(2) {
    background-image: linear-gradient(90deg, #7928ca, #ff0080);
    animation-delay: 3.33s;
  }
  span:nth-child(3) {
    background-image: linear-gradient(90deg, #fe8802, #e6326c);
    animation-delay: 6.66s;
  }

  @media screen and (max-width: 960px) {
    font-size: 5rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 3.5rem;
  }
`;

// export const Container = styled.div``;

// export const Container = styled.div``;

// export const Container = styled.div``;

// export const Container = styled.div``;

// export const Container = styled.div``;

// export const Container = styled.div``;

// export const Container = styled.div``;
