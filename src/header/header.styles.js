import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  height: 60px;
  padding-left: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: ${({ open }) => (open ? "calc(100% - 320px)" : "calc(100% - 60px)")};
  transition: width 500ms ease-in-out;
  background-color: lightblue;
`;

export const Button = styled.button`
  position: absolute;
  // left: 0;
  top: 0;
  bottom: 0;
  right: 100px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: white;
  z-index: 3;
  margin: auto 0;
`;
