import React from "react";

import { Section, Info } from "./styles";

const SectionInfo = ({ lightBg, children, id }) => {
  return (
    <Info lightBg={lightBg} id={`SectionInfo-${id}`} >
      <Section>{children}</Section>
    </Info>
  );
};

export default SectionInfo;
