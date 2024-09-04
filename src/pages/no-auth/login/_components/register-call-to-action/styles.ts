import { Heading } from "@chakra-ui/react";
import styled from "styled-components";

export const RegisterContainer = styled.div`
  margin-top: 60px;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const RegisterDisclaimer = styled(Heading)`
  justify-self: center;
`;

export const RegisterAnchor = styled.a`
  justify-self: center;
  font-weight: bold;
  cursor: pointer;
`;
