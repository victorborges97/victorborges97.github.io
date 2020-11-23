import React from "react";
import SectionInfo from "../../components/SectionInfo/index";

import { Section, TituloPage, Lista, Row, Foto, Item, Titulo } from "./styles";

const Stack = () => {
  return (
    <SectionInfo id="stack">
      <Section>
        <TituloPage>Minha Stack</TituloPage>

        <Lista>
          <Row>
            <Item>
              <Foto
                src={"https://raw.githubusercontent.com/victorborges97/victorborges97.github.io/master/src/assets/img/react.png"}
                rotate
              />
              <Titulo>
                ReactJS
              </Titulo>
            </Item>

            <Item>
              <Foto
                src={"https://raw.githubusercontent.com/victorborges97/victorborges97.github.io/master/src/assets/img/react.png"}
                rotate
              />
              <Titulo>
                React Native
              </Titulo>
            </Item>

            <Item>
              <Foto
                src={"https://raw.githubusercontent.com/victorborges97/victorborges97.github.io/master/src/assets/img/icons8-nodejs-144.png"}
              />
              <Titulo>
                NodeJS
              </Titulo>
            </Item>
          </Row>

          <Row>
            <Item>
              <Foto
                src={"https://raw.githubusercontent.com/victorborges97/victorborges97.github.io/master/src/assets/img/icons8-javascript-144.png"}
              />
              <Titulo>
                Javascritp
              </Titulo>
            </Item>

            <Item>
              <Foto
                src={"https://raw.githubusercontent.com/victorborges97/victorborges97.github.io/master/src/assets/img/icons8-html-5-144.png"}
              />
              <Titulo>
                HTML
              </Titulo>
            </Item>

            <Item>
              <Foto
                src={"https://raw.githubusercontent.com/victorborges97/victorborges97.github.io/master/src/assets/img/icons8-css3-144.png"}
              />
              <Titulo>
                CSS
              </Titulo>
            </Item>
          </Row>

        </Lista>

      </Section>
    </SectionInfo>
  );
};

export default Stack;
