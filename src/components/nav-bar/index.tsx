import { Heading } from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../../context/auth";
import { NavBarStyled } from "./styles";

const NavBar: React.FC = () => {
  const { isLogged } = useAuth();
  if (isLogged) {
    // if signup page: show login button;
    // if login page: show signup button;
    // if home page: show logout button;
  }
  return (
    <NavBarStyled>
      <Heading as="h2">Controle Financeiro</Heading>
    </NavBarStyled>
  );
};

export default NavBar;
