import React from "react";
import NavBar from "../NavBar";
import Rodape from "../Rodape/Rodape";

import { Section, Info } from "./styles";

const SectionInfo = ({ lightBg, children, menuEfooter }) => {
  return (
    <Info lightBg={lightBg}>
      { menuEfooter && menuEfooter !== false &&
        <NavBar />
      }
      <Section>{children}</Section>
      { menuEfooter && menuEfooter !== false &&
        <Rodape />
      }
    </Info>
  );
};

export default SectionInfo;
