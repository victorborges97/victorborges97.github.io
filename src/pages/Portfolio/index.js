import React, { useState } from "react";
import { Link } from "react-router-dom";
import Viewer from "react-viewer";
import SectionInfo from "../../components/SectionInfo/index";

import db from "../../db/db.json";
// import db2 from "../../db/db.json";

import { Section, TituloPage, Projets, Projet } from "./styles";

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([{ src: "" }]);

  const handleIsOpen = (projet) => {
    setImages(projet.img);
    setIsOpen(true);
  };

  return (
    <SectionInfo id="projetos" menuEfooter>
      <Section>
        <TituloPage>Meu portfólio</TituloPage>
        <Projets>
          {db.porjetos.map((projet) => {
            return (
              <Projet img={projet.img[0].src}>
                <Projet.Header onClick={() => handleIsOpen(projet)}>
                  <Projet.FaExpandArrowsAlt />
                </Projet.Header>
                <Projet.Footer>
                  <Projet.Title>{projet.title}</Projet.Title>

                  <Projet.Icones>
                    {projet.links.map((l, idx) =>
                      l.icon === "FaGithub"
                        ? l.link && (
                            <Link
                              to={{ pathname: l.link ? l.link : "" }}
                              target="_blank"
                            >
                              <Projet.FaGithub key={idx} />
                            </Link>
                          )
                        : l.link && (
                            <Link
                              to={{ pathname: l.link ? l.link : "" }}
                              target="_blank"
                            >
                              <Projet.FaExternalLinkAlt key={idx} />
                            </Link>
                          )
                    )}
                  </Projet.Icones>
                </Projet.Footer>
              </Projet>
            );
          })}
        </Projets>
        <Viewer
          visible={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
          images={images}
        />
      </Section>
    </SectionInfo>
  );
};

export default Portfolio;
