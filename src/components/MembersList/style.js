import styled from "styled-components";

export const MembersListDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  height: 100%;
  overflow-y: auto;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;
