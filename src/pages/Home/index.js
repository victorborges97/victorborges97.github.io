import React from "react";
import SectionInfo from "../../components/SectionInfo/index";

import { TextoInitial, SectionHome } from "./styles";

const Home = () => {
  return (
    <SectionInfo id="home">
      <SectionHome>
        <TextoInitial>
          <span>STUDENT</span>
          <span>AND</span>
          <span>DEVELOPER</span>
        </TextoInitial>
      </SectionHome>
    </SectionInfo>
  );
};

export default Home;
