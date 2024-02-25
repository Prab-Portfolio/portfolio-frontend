import styled from "styled-components";
import Theme from "../Theme/Theme";

export const Button = styled.button`
  border-radius: 12px;
  background: ${Theme.colors.text};
  color: ${Theme.colors.white};
  font-size: large;
  padding: 4px;
  font-family: sans-serif;
  border: 1px solid #000;

  &:hover {
    background: transparent;
    border: 1px solid #000;
    color: #000;
  }
`;
