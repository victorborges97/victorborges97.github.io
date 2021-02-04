import styled from "styled-components";

export const Span = styled.span`
  z-index: 2;
  position: fixed;
  bottom: 2vh;
  color: black;

  right: 5%;
  background-color: rgb(220,220,220,0.7);
  padding: 12px;
  overflow: visible;
  /* font-size: 1.5rem; */
  text-align: center;
  width: 48px;
  height: 48px;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;
  cursor: pointer;
`