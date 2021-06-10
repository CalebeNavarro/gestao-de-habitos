import styled from "styled-components";

export const Container = styled.button`
  padding: 8px 0px;
  width: ${(props) => props.widthMobile + "px"};
  height: 42px;
  font-size: 22px;

  color: var(--white);
  background-color: var(--black);
  border-radius: 15px;
  border: 1px solid var(--black);

  :hover {
    border: 1px solid #731753;
  }

  @media (min-width: 768px) {
    width: ${(props) => props.widthDesktop + "px"};
    height: 45px;
    font-size: 28px;
  }

  @media (max-width: 350px) {
    width: 200px;
  }
`;
