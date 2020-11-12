import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
  }

  html {
    min-height: 100%;
    background: #24292e;
    color: #fff;
  }

  *, button, input {
    border: 0;
    // background: none;
    
  }

  ul {
    list-style: none;
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 50px;
  padding-right: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;
