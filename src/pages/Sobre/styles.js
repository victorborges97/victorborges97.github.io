import styled from "styled-components";
import { Container } from "../../styles/GlobalStyles";

export const Section = styled(Container)`
  height: 100%;
  background: ${({ lightBg }) => (lightBg && "#fff")};
  color: ${({ lightBg }) => (lightBg && "#232323")};
  padding-top: 60px;

  transition: all 0.4s ease;
`;

export const TituloPage = styled.h1`
  display: flex;
  justify-content: center;
`;

export const SobreContain = styled.div`
  display: flex;
  flex-direction: row;
  
  padding: 50px 0px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    padding: 50px 0px;
    transition: all 0.5s ease;
  }
`;

export const Foto = styled.img`
  width: 320px;
  height: 100%;
  border-radius: 50%!important;
  box-shadow: 0 0 0 1px #f8f8f8;

  transition: all 0.5s ease;

  @media screen and (max-width: 460px) {
    width: 280px;

    transition: all 0.5s ease;
  }

  @media screen and (max-width: 390px) {
    width: 200px;

    transition: all 0.5s ease;
  }
`;

export const SobreTexto = styled.div`
  padding-right: 10px;
  padding: 50px;

  @media screen and (max-width: 960px) {
    padding: 50px 0px;
  }
`;

export const SobreTitulo = styled.h4`
  font-weight: 600;
`;

export const SobreP = styled.p`
  line-height: 1.8;
  padding: 20px 0px;
`;

// export const Container = styled.div``;
