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

// export const Container = styled.div``;

// export const Container = styled.div``;

// export const Container = styled.div``;

// export const Container = styled.div``;

// export const Container = styled.div``;

// export const Container = styled.div``;

// export const Container = styled.div``;
