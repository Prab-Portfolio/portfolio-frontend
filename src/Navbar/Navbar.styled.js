import styled from "styled-components";
import Theme from "../Theme/Theme";
import { Link } from "react-router-dom";

export const StyledNavbar = styled.header`
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin: 16px 0;
  padding: 3px;
`;

export const StyledText = styled(Link)`
  color: ${Theme.colors.text};
  font-size: large;
  font-weight: 800;
  font-family: PoppinBold;
  text-decoration: none;
`;
