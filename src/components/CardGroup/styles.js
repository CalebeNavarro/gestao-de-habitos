import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 10px;
  border-radius: 13px;
  width: 310px;
  cursor: pointer;

  background-color: var(--color-primary);

  p {
  }

  @media (min-width: 768px) {
    width: 540px;
  }
`;