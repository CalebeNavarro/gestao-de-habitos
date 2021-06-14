import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  padding: 0 15px;
  gap: 10px;

  button {
    margin-left: 10px;
    margin-bottom: 18px;
    height: 52px;
    width: 90px;
    background-color: black;
    color: var(--white);
    font-size: 18px;
    border-radius: 15px;
    border: 1px solid black;
      :hover {
        border: 1px solid var(--color-primary);
      }
    }

    @media (min-width: 768px) {
      flex-direction: row;
    }
`;
