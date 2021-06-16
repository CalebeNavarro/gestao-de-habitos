import styled from "styled-components";

export const SelectStyles = styled.select`
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 1px 3px -2px #9098a9;
  padding: 7px 40px 7px 12px;
  background-color: #6c63ff;
  transition: all 150ms ease;
  border-radius: 5px;
  border: 7px solid transparent;
  margin-bottom: 18px;

  :hover {
    background-color: darken(#9098a9, 2);
  }
  :active {
    background-color: darken(#9098a9, 5);
  }
`;

export const Option = styled.option``;
