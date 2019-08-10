import styled from "styled-components";

export const SideBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 60px;
  height: 100%;
  background-color: lightsteelblue;
  transform: translateX(${({ open }) => (open ? "0" : "calc(-100% - 5px)")});
  transition: transform 500ms ease-in-out;
  &:after {
    content: "";
    position: absolute;
    top:0;
    width: 5px;
    right: -5px;
    height: 100%;
    cursor: col-resize;
    background-color: lightgrey;
  }
`;
