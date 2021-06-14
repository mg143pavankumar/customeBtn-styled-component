import styled from "styled-components";

// create a constants folder and include color.js file
/**  
  add
  export const primary = "";
  export const secondary="";
  
  you can change colors 
**/
import { primary, secondary } from "../../constants/colors";



const Button = styled.button`
  background-color: ${({ primaryColor }) => (primaryColor ? primaryColor : secondary)};
  padding: ${({ paddingAll }) => (paddingAll ? paddingAll : "10")}px;
  color: ${({ textColor }) => (textColor ? textColor : "#fff")};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "10"}px;
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "140")}px;
  width: ${({ width }) => (width ? width : "none")}px;
  height: ${({ height }) => (height ? height : "none")}px;
  position: relative;
  z-index: 1;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "500")};

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: ${({ secondaryColor }) =>
      secondaryColor ? secondaryColor : primary};
    border-top-left-radius: ${({ borderRadius }) =>
      borderRadius ? borderRadius : "10"}px;
    border-bottom-left-radius: ${({ borderRadius }) =>
      borderRadius ? borderRadius : "10"}px;
    transition: width 500ms, opacity 250ms linear;
    z-index: -1;
  }

  ::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background-color: ${({ secondaryColor }) =>
      secondaryColor ? secondaryColor : primary};
    border-top-right-radius: ${({ borderRadius }) =>
      borderRadius ? borderRadius : "10"}px;
    border-bottom-right-radius: ${({ borderRadius }) =>
      borderRadius ? borderRadius : "10"}px;
    transition: width 500ms, opacity 250ms linear;
    z-index: -1;
  }

  :hover:before {
    width: 0%;
    opacity: 0;
  }

  :hover:after {
    width: 0%;
    opacity: 0;
  }
`;

export default Button;
