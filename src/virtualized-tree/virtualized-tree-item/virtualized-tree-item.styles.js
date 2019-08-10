import styled from "styled-components";

export const ItemContainer = styled.div`
  padding: 5px 0 5px ${({ level = 0 }) => level * 24}px;
  line-height: 24px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
`;

export const ItemName = styled.div`
  text-align: start;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ArrowContainer = styled.button`
  width: 24px;
  height: 24px;
  min-width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  border-radius: 50%;
`;

export const ChildrenContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
`;
