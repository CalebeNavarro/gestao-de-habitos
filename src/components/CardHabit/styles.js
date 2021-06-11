import styled from "styled-components";

export const HabitCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  height: 150px;
  border-radius: 10px;
  background-color: var(--color-primary);
  color: var(--black);
  font-size: 13px;
  margin: 10px;

  @media (min-width: 768px) {
  }
`;
