import { Box } from "@chakra-ui/react";
import styled from "styled-components";

export const CustomBox = styled(Box)`
  width: 100%;
  -webkit-margin-start: inherit;
  margin-inline-start: inherit;
  -webkit-margin-end: inherit;
  margin-inline-end: inherit;
  margin-top: inherit;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    margin-top: 100px;
  }
`;
