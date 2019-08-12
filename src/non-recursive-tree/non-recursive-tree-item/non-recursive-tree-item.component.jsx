import React, { useState } from "react";
import {
  ItemContainer,
  ItemName,
  ArrowContainer
} from "./non-recursive-tree-item.styles";

export const NonRecursiveTreeItem = React.memo(props => {
  const [open, setOpen] = useState(false);

  const handleToggleArrow = () => {
    //props.node.isOpen = !props.node.isOpen;
    // setOpen(!open);
    props.toggleIsOpen();
  };

  const {
    level,
    node: { name, hasChildren }
  } = props;

  return (
    <ItemContainer level={level}>
      <ArrowContainer onClick={handleToggleArrow}>
        {hasChildren && "<"}
      </ArrowContainer>
      <ItemName>{name}</ItemName>
    </ItemContainer>
  );
});
