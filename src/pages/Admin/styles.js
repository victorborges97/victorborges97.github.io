import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
    /* background-color: #698; */
  justify-content: center;
`

export const MainAdmin = styled.div`
  /* height: 90%; */
  width: 100%;
  min-width: 300px;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #9991;
  background-clip: border-box;
  border-radius: .75rem;
  box-shadow: 0 0 1.5rem rgb(18 38 63 / 3%);

  @media screen and (max-width: 450px) {
    /* max-width: none; */
  }
`

MainAdmin.Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 8rem; */
  padding: 20px;
  width: 100%;
`

MainAdmin.HeaderText = styled.div`
  font-size: 24px;
  color: #FFF;
`

MainAdmin.Body = styled.div`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
  padding-top: 1.25rem;
  width: 100%;
`

MainAdmin.Form = styled.form`
  padding: .5rem;
  width: 100%;
  margin-top: 15px;
`

MainAdmin.FormGroup = styled.div`
margin-bottom: 1rem;
margin-top: ${({ top }) => top && `1rem`}
`

MainAdmin.Label = styled.label`
  cursor: default;
  font-weight: 500;
  display: inline-block;
  margin-bottom: .5rem;
  margin-left: ${({ left }) => left && `.8rem`};
`

MainAdmin.Input = styled.input`
  display: block;
  width: 100%;
  height: calc(1.5em + .94rem + 2px);
  padding: .47rem .75rem;
  font-size: .8125rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`

MainAdmin.CustonControl = styled.div`
  display: flex;
  -webkit-print-color-adjust: exact;
`

MainAdmin.InputCheckbox = styled.input`
    display: flex;
    margin-left: 10px;
    padding-left: 10px;
    width: 1rem;
    height: 1rem;
`

MainAdmin.Button = styled.button`
  cursor: pointer;
  width: 100%;
  color: #fff;
  background-color: rgba(85,110,230,.25);
  border-color: rgba(85,110,230,.25);
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: .47rem .75rem;
  font-size: .8125rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`

MainAdmin.Link = styled(Link)`
  color: #fff;
`