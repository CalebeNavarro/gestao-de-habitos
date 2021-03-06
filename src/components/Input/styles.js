import styled from "styled-components";

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 7px;
  font-size: 1.2rem;

  label {
    font-size: 24px;
    font-family: "PT Serif", serif;
  }

  span {
    height: 20px;
    font-size: 16px;
    padding-left: 10px;
  }
`;

export const ContainerInput = styled.div`
  background-color: var(--background-gray);
  border: 1px solid var(--black);
  border-radius: 12px;
  box-shadow: 1px 1px var(--black);

  @media (min-width: 768px) {
    width: ${(props) => props.width}px;
  }

  input {
    background-color: var(--background-gray);
    border: none;
    font-size: 1.2rem;
    height: 46px;
    width: 85%;

    ::placeholder {
      color: var(--color-placeholder);
    }

    /* @media (min-width: 768px) {
      max-width: 450px;
    } */
  }

  svg {
    transform: translateY(4px);
    width: 10%;
    margin-left: 5px;
  }
`;
