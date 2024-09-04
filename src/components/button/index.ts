import { darken } from "polished";
import styled from "styled-components";

export const Button = styled.button`
  // TODO: turn a component
  padding: 10px;
  border: none;
  border-radius: 8px;
  background-color: #2667ff;
  color: #fff;
  cursor: pointer;
  width: 300px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  transition-delay: 0s, 0.3s;

  &:hover {
    background-color: ${darken(0.2, "#2667ff")};
  }
`;
