import styled from "styled-components";

export const Container = styled.button`
  padding: 8px 0px;
  width: ${props => props.widthMobile + 'px'};
  height: 40px;
  font-size: 13px;

  color: var(--white);
  background-color: var(--black);
  border-radius: 15px; 
  border: 1px solid var(--black);

  :hover {
    border: 1px solid #731753;
  }

  @media (min-width: 768px) {
    width: ${props => props.widthDesktop + 'px'};
    height: 90px;
    font-size: 30px;
  }
`;