import styled from "styled-components";

export const RecursiveTreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 0;
  overflow: auto;
  overflow-x: hidden;
  max-height: 200px;
  border-bottom: 2px solid lightgrey;
  box-sizing: border-box;
  background-color: lightgoldenrodyellow;
`;

export const RecursiveTreeItem = styled.div`
  padding: 5px 0 5px ${({ level = 0 }) => level * 24}px;
  line-height: 24px;
  width: 100%;
  box-sizing: border-box;
`;

export const RecursiveItemName = styled.div`
  text-align: start;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
