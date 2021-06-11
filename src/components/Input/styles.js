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
  }

  @media (min-width: 768px) {
    width: 450px;
  }
`;

export const ContainerInput = styled.div`
  padding: 10px;
  background-color: var(--background-gray);
  border: 1px solid var(--black);
  border-radius: 12px;
  box-shadow: 1px 1px var(--black);

  input {
    background-color: var(--background-gray);
    border: none;
    font-size: 1.2rem;

    ::placeholder {
      color: var(--color-placeholder);
    }
  }

  svg {
    transform: translateY(4px);
    margin: 0 10px;
  }
`;
