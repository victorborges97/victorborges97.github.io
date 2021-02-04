import React from "react";
import SectionInfo from "../../components/SectionInfo/index";

import db from "../../db/db.json"

import { Section, TituloPage, Projets, Projet } from "./styles";

const Portfolio = () => {

  return (
    <SectionInfo id="projetos" menuEfooter >
      <Section>
        <TituloPage>Meus Projetos</TituloPage>
        <Projets>
          {
            db.porjetos.map(projet => {
              return (
                <Projet img={projet.img}>
                  <Projet.Title>{projet.title}</Projet.Title>
                </Projet>
              )
            })
          }
        </Projets>

      </Section>
    </SectionInfo>
  );
};

export default Portfolio;
