import styled from "styled-components";

export const MemberDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
  font-size: 16px;
  width: 100%;
  height: 65px;
  font-family: var(--font-home);

  @media (min-width: 768px) {
    font-size: 20px;
    height: 70px;
  }
`;

export const MemberP = styled.p`
  span {
    font-weight: bold;
  }
`;
