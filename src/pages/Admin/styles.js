import styled from "styled-components";

export const Main = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
    /* background-color: #698; */
  justify-content: center;
`

export const MainAdmin = styled.div`
  height: 90%;
  width: 100%;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 0;
  background-color: #232323;
  background-clip: border-box;
  border-radius: .75rem;
  box-shadow: 0 0 1.5rem rgb(18 38 63 / 3%);
`

MainAdmin.Header = styled.div`
  margin-top: -10px;
  border-radius: .75rem;
  height: 45px;
  width: 100%;
  background-color: rgba(85,110,230,.25)!important;
`

MainAdmin.HeaderText = styled.div`
  color: #556ee6!important;
`

MainAdmin.Body = styled.div`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
  padding-top: 0!important;
  width: 100%;

`

MainAdmin.Form = styled.div`
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
  background-color: #556ee6;
  border-color: #556ee6;
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