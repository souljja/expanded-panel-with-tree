import React, { useCallback } from "react";
import { data } from "./../tree-data";
import { RecursiveTreeContainer } from "./recursive-tree.styles";
import { RecursiveTreeItem } from "./recursive-tree-item/recursive-tree-item.component";

export const RecursiveTree = React.memo(props => {
  const renderTree = useCallback(
    (node, level = 0) => (
      <RecursiveTreeItem key={node.id} level={level} node={node}>
        {node.hasChildren &&
          node.children &&
          node.children.map(node => renderTree(node, level + 1))}
      </RecursiveTreeItem>
    ),
    []
  );

  return (
    <RecursiveTreeContainer>
      {data.map(node => renderTree(node, 1))}
    </RecursiveTreeContainer>
  );
});
