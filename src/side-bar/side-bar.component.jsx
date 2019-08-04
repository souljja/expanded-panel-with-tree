import React, { useEffect, useState, useRef } from "react";
import { Button, SideBarContainer, Header } from "./side-bar.styles";
import { RecursiveTree } from "../recursive-tree/recursive-tree.component";

let lastPosition = 0;
export const SideBar = React.memo(props => {
  const [open, setOpen] = useState(true);
  const [style, setStyle] = useState({ width: 200 });
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef(null);
  const handleToggle = () => {
    setOpen(!open);
  };

  const handleMouseMove = event => {
    if (!dragging) {
      return;
    }
    const dx = lastPosition - event.clientX;
    lastPosition = event.clientX;
    const width = parseInt(getComputedStyle(containerRef.current).width) - dx;
    if (width > 200 && width < 350) {
      setStyle({ width });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseDown = event => {
    lastPosition = event.clientX;
    setDragging(true);
  };

  useEffect(() => {
    if (dragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  return (
    <>
      <Header>
        <Button onClick={handleToggle}>></Button>
      </Header>
      <SideBarContainer
        ref={containerRef}
        style={style}
        open={open}
        onMouseDown={handleMouseDown}
      >
        <RecursiveTree />
      </SideBarContainer>
    </>
  );
});
