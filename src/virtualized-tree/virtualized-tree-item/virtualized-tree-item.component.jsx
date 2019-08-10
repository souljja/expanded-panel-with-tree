import React, { useState } from "react";
import {
  ItemContainer,
  ItemName,
  ArrowContainer,
  ChildrenContainer
} from "./virtualized-tree-item.styles";

export const VirtualizedTreeItem = React.memo(props => {
  const handleToggleArrow = () => {
    props.node.isOpen = !props.node.isOpen;
    props.recomputeRowHeights();
  };

  const {
    level,
    node: { name, hasChildren, children, isOpen }
  } = props;

  return (
    <>
      <ItemContainer level={level}>
        <ArrowContainer onClick={handleToggleArrow}>
          {hasChildren && "<"}
        </ArrowContainer>
        <ItemName>{name}</ItemName>
      </ItemContainer>
      {hasChildren && children && isOpen && (
        <ChildrenContainer >{props.children}</ChildrenContainer>
      )}
    </>
  );
});
