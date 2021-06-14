import styled from "styled-components";

// create a constants folder and include colors.js file
/**  
  add
  export const primary = "";
  export const secondary="";
  
**/

import { primary, secondary } from "../../constants/colors";

export const Button = styled.button`
  color: ${({ textColor }) => (textColor ? textColor : "#fff")};
  font-weight: 600;
  text-decoration: none;
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : secondary};
  cursor: ${({ cursor }) => (cursor ? cursor : "pointer")};
  transition: 0.3s ease-in-out;
  border: none;
  width: ${({ width }) => (width ? width : "160")}px;
  height: ${({ height }) => (height ? height : "55")}px;
  border-radius: ${({ bRadius }) => (bRadius ? bRadius : "0")}px;
  outline: none;

  :hover {
    background-color: ${({ hoverBgColor }) =>
      hoverBgColor ? hoverBgColor : primary};
    opacity: ${({ opacityOnHover }) =>
      opacityOnHover ? opacityOnHover : "0.8"};
  }
`;
