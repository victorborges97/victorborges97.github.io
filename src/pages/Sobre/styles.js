import styled from "styled-components";

export const Section = styled.div`
  height: 100%;
  background: ${({ lightBg }) => (lightBg && "#fff")};
  color: ${({ lightBg }) => (lightBg && "#232323")};
  padding-top: 15vh;
  transition: all .6s ease-in-out;
  -webkit-transition: all .6s ease-in-out;
  width: 100%;
`;

export const TituloPage = styled.h1`
  display: flex;
  justify-content: center;
`;

export const SobreContain = styled.div`
  display: flex;
  flex-direction: row;
  
  padding-top: 50px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    transition: all 0.5s ease;
  }
`;

export const Foto = styled.img`
  width: 320px;
  height: 100%;
  border-radius: 50%!important;
  box-shadow: 0 0 0 1px #f8f8f8;
  margin-bottom: 10px;
  margin-top: 10px;
  transition: all 0.5s ease;

  @media screen and (max-width: 960px) {
    width: 150px;

    transition: all 0.5s ease;
  }
`;

export const SobreTexto = styled.div`
  padding-right: 10px;
  padding: 50px;

  @media screen and (max-width: 960px) {
    padding: 10px 0px;
  }
`;

export const SobreTitulo = styled.h4`
  font-weight: 600;
`;

export const SobreP = styled.p`
  margin: 0;
  text-align: justify;
  line-height: 1.8rem;
  padding: 20px 0px;
  @media screen and (max-width: 960px) {
    /* width: 150px; */
    line-height: 1.5rem;
    transition: all 0.5s ease;
  }
`;
