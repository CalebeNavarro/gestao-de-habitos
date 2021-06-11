import styled from "styled-components";

export const Container = styled.div`
`;

export const Form = styled.form`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  padding: 0 15px;

  button {
    margin-top: 10px;
    height: 52px;
    width: 90px;
    background-color: black;
    color: var(--white);
    font-size: 18px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    border: 1px solid black;

    :hover {
      border: 1px solid var(--color-primary);
    }
  }
`;