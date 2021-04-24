import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt, FaExpandArrowsAlt } from "react-icons/fa";

export const Section = styled.div`
  background: ${({ lightBg }) => lightBg && "#fff"};
  color: ${({ lightBg }) => lightBg && "#232323"};
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
  background: ${({ img }) => (img ? null : "#323265")};
  margin: 10px;
  position: relative;
`;

Projet.Title = styled.h3`
  color: white;
  font-size: 14px;
  margin: 10px;
`;
Projet.Header = styled.div`
  cursor: pointer;
  width: 100%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  -webkit-transition: all 300ms ease-in-out;
  -moz-transition: all 300ms ease-in-out;
  -ms-transition: all 300ms ease-in-out;
  -o-transition: all 300ms ease-in-out;
  transition: all 300ms ease-in-out;

  &:hover {
    opacity: 1;
    background: rgba(75, 89, 247, 0.3);
  }
`;
Projet.FaExpandArrowsAlt = styled(FaExpandArrowsAlt).attrs((props) => ({
  color: "#FFF",
  size: 30,
  className: "expand"
}))``;

Projet.Footer = styled.div`
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

Projet.Icones = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

Projet.FaGithub = styled(FaGithub).attrs((props) => ({
  color: "#FFF",
  size: 15
}))`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
`;
Projet.FaExternalLinkAlt = styled(FaExternalLinkAlt).attrs((props) => ({
  color: "#FFF",
  size: 15
}))`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
`;
