import React from "react";
import {
  RegisterAnchor,
  RegisterContainer,
  RegisterDisclaimer,
} from "./styles";

const RegisterCallToAction: React.FC = () => {
  // TODO: redirect to register page
  return (
    <RegisterContainer>
      <RegisterDisclaimer as="h3">Ainda não tem conta?</RegisterDisclaimer>
      <RegisterAnchor>Cadastre-se</RegisterAnchor>
    </RegisterContainer>
  );
};

export default RegisterCallToAction;
