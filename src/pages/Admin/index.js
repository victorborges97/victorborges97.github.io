import React, { useState } from "react";
import SectionInfo from "../../components/SectionInfo/index";

import { MainAdmin, Main } from "./styles";

const Admin = () => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  return (
    <SectionInfo id="admin" menuEfooter={false} >

      <Main>
        <MainAdmin>
          <MainAdmin.Header>
            <MainAdmin.HeaderText>Administraçao</MainAdmin.HeaderText>
          </MainAdmin.Header>

          <MainAdmin.Body>
            <MainAdmin.Form >
              <MainAdmin.FormGroup>
                <MainAdmin.Label forHtml="email" >Email</MainAdmin.Label>
                <MainAdmin.Input
                  name="email"
                  placeholder="Seu email"
                  required=""
                  id="email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </MainAdmin.FormGroup>
              <MainAdmin.FormGroup>
                <MainAdmin.Label forHtml="password" >Senha</MainAdmin.Label>
                <MainAdmin.Input
                  name="password"
                  required=""
                  placeholder="Sua senha"
                  id="password"
                  type="password"
                  value={pass}
                  onChange={e => setPass(e.target.value)}
                />
              </MainAdmin.FormGroup>
              <MainAdmin.CustonControl>
                <MainAdmin.InputCheckbox type="checkbox" id="customControlInline" />
                <MainAdmin.Label left forHtml="customControlInline">Me lembre</MainAdmin.Label>
              </MainAdmin.CustonControl>
              <MainAdmin.FormGroup top >
                <MainAdmin.Button type="submit">Entrar</MainAdmin.Button>
              </MainAdmin.FormGroup>
              <MainAdmin.FormGroup top>
                <MainAdmin.Link to="/forgot-password">
                  <i className="mdi mdi-lock mr-1"></i>
                  Esqueceu sua senha?
                </MainAdmin.Link>
              </MainAdmin.FormGroup>
            </MainAdmin.Form>
          </MainAdmin.Body>
        </MainAdmin>
      </Main>

    </SectionInfo>
  );
};

export default Admin;
