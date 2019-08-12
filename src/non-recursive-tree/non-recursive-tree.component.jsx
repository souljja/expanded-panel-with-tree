import React, { useState } from "react";
import { data } from "./../tree-data";
import { NonRecursiveTreeContainer } from './non-recursive-tree.styles';
import { NonRecursiveTreeItem } from "./non-recursive-tree-item/non-recursive-tree-item.component";

export const NonRecursiveTree = React.memo(props => {
  const [render, setRender] = useState(true);
  const getTree = () => {
    const tree = [];
    const clone = [...data];
    const stack = clone.map(node => ({ ...node, level: 1, toggleIsOpen: () => {
      node.isOpen = !node.isOpen;
      setRender(!render);
    }}));
    while (stack.length) {
      const current = stack.shift();
      if (current.hasChildren && current.children && current.isOpen) {
        Array.prototype.unshift.apply(
          stack,
          [...current.children]
            .reverse()
            .map(node => ({ ...node, level: current.level + 1, toggleIsOpen: () => {
              node.isOpen = !node.isOpen;
              setRender(!render);
            } }))
        );
      }
      tree.push(
        <NonRecursiveTreeItem
          key={current.id}
          node={current}
          isOpen={current.isOpen}
          toggleIsOpen={current.toggleIsOpen}
          level={current.level}
        />
      );
    }
    return tree;
  };
  return <NonRecursiveTreeContainer>{getTree()}</NonRecursiveTreeContainer>;
});
