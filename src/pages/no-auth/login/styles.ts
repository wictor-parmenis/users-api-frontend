import { Heading } from "@chakra-ui/react";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  height: 100vh;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1400px) {
    padding: 0 50px 0 100px;
  }

  @media (max-width: 1100px) {
    padding: 0 25px 0 50px;
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 700px;
    height: auto;
    object-fit: cover;
    justify-self: self-end;

    @media (max-width: 900px) {
      display: flex;
      flex-direction: column;
      display: none;
    }
  }
`;

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
