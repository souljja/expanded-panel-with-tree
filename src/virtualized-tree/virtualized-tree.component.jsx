import React, { memo, useRef, useEffect } from "react";
import { data } from "./../tree-data";
import { AutoSizer, List } from "react-virtualized";
import { VirtualizedTreeContainer } from "./virtualized-tree.styles";
import { VirtualizedTreeItem } from "./virtualized-tree-item/virtualized-tree-item.component";

const ROW_HEIGHT = 34;

const getExpandedItemCount = item => {
  let count = 1;
  const { isOpen, hasChildren, children} = item;

  if (isOpen && hasChildren && children) {
    count += children
      .map(getExpandedItemCount)
      .reduce((total, count) => total + count, 0);
  }

  return count;
};

const containerStyles = { padding: "20px 0" };

export const VirtualizedTree = memo(props => {
  const listRef = useRef(null);
  useEffect(() => {
    listRef.current.scrollToPosition(20 + 1 * ROW_HEIGHT);
  }, [listRef.current]);

  const recomputeRowHeights = () => {
    if (listRef.current) {
      listRef.current.recomputeRowHeights();
    }
  };

  const renderItem = (node, keyPrefix, level) => {
    return (
      <VirtualizedTreeItem
        key={keyPrefix}
        level={level}
        node={node}
        recomputeRowHeights={recomputeRowHeights}
      >
        {node.hasChildren &&
          node.children &&
          node.children.map((node, index) =>
            renderItem(node, `${keyPrefix}-${index}`, level + 1)
          )}
      </VirtualizedTreeItem>
    );
  };

  const cellRenderer = params => (
    <div key={params.key} style={params.style}>
      {renderItem(data[params.index], params.index, 1)}
    </div>
  );

  const rowHeight = params =>
    getExpandedItemCount(data[params.index]) * ROW_HEIGHT;
  return (
    <VirtualizedTreeContainer>
      <AutoSizer>
        {({ width, height }) => (
          <List
            height={height}
            style={containerStyles}
            scrollToAlignment={"center"}
            ref={listRef}
            rowHeight={rowHeight}
            rowRenderer={cellRenderer}
            rowCount={data.length}
            width={width}
          />
        )}
      </AutoSizer>
    </VirtualizedTreeContainer>
  );
});
