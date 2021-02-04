import React from "react";

import { Section, Info } from "./styles";

const SectionInfo = ({ lightBg, children, id }) => {
  return (
    <Info lightBg={lightBg} id={`SectionInfo-${id}`} >
      {children}
    </Info>
  );
};

export default SectionInfo;
