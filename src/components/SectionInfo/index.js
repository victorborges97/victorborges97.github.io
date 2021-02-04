import React from "react";

import { Info } from "./styles";

const SectionInfo = ({ lightBg, children, id, heigth }) => {
  return (
    <Info heigth={heigth} lightBg={lightBg} id={`SectionInfo-${id}`} >
      {children}
    </Info>
  );
};

export default SectionInfo;
