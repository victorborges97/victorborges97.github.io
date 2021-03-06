import React from "react";
import SectionInfo from "../../components/SectionInfo/index";

import { Section, TituloPage, SobreContain, Foto, SobreTexto, SobreTitulo, SobreP } from "./styles";

const Sobre = () => {
  return (
    <SectionInfo id="sobre" menuEfooter >
      <Section>
        <TituloPage>Sobre mim</TituloPage>

        <SobreContain>
          <Foto
            src={"https://avatars1.githubusercontent.com/u/47835782?s=460&u=3c69157e2b492c8ee40466ea0066f8f8df87b4db&v=4"}
          />
          <SobreTexto>
            <SobreTitulo>Olá, sou o João Victor. Prazer em conhecê-lo!</SobreTitulo>
            <SobreP>
              Sou desenvolvedor Front-end e Mobile. Atualmente estou cursando Bacharel em
              Sistemas de Informação no Centro Universitario Redentor,
              desenvolvimento web e mobile é uma paixão minha. Sigo fazendo diversos cursos de aprimoramento profissional,
              sempre buscando novos desafios e minha evolução dia após dia para me tornar um profissional reconhecido no mercado!
            </SobreP>
          </SobreTexto>
        </SobreContain>
      </Section>
    </SectionInfo>
  );
};

export default Sobre;
