import React from "react";

import { Section, Info } from "./styles";

const SectionInfo = ({ lightBg, children }) => {
  return (
    <Info lightBg={lightBg}>
      <Section>{children}</Section>
    </Info>
  );
};

export default SectionInfo;
