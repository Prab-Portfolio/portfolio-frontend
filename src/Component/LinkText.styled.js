import { Link } from "react-router-dom";
import styled from "styled-components";
import Theme from "../Theme/Theme";

export const LinkText=styled(Link)`
    color: ${Theme.colors.text};
    padding: 12px;
    text-decoration: none;
`
export const LinkAncorText=styled.a`
    color: ${Theme.colors.text};
    padding: 8px;
    text-decoration: none;
    background: ${Theme.colors.textCover};
    border: 12px;
    border-radius: 12px;

    &:hover{
        background-color:${Theme.colors.Hover} ;
    }
`