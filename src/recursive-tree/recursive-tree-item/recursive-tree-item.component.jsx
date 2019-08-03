import React, { useState } from "react";
import {
  ItemContainer,
  ItemName,
  ArrowContainer,
  ChildrenContainer
} from "./recursive-tree-item.styles";

export const RecursiveTreeItem = React.memo(props => {
  const [open, setOpen] = useState(false);

  const handleToggleArrow = () => {
    setOpen(!open);
  };

  const {
    level,
    node: { name, hasChildren, children }
  } = props;

  return (
    <>
      <ItemContainer level={level}>
        <ArrowContainer onClick={handleToggleArrow}>
          {hasChildren && "<"}
        </ArrowContainer>
        <ItemName>{name}</ItemName>
      </ItemContainer>
      {hasChildren && children && (
        <ChildrenContainer open={open}>{props.children}</ChildrenContainer>
      )}
    </>
  );
});
