import styled from "styled-components";

export const MemberDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
  border: 1px transparent;
  background-color: black;
  color: white;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
  font-size: 11px;
  width: 100%;
  height: 40px;
  font-family: var(--font-home);

  @media (min-width: 768px) {
    font-size: 20px;
    height: 70px;
    width: 50%;
  }
`;

export const MemberP = styled.p`
  display: flex;
  span {
    font-weight: bold;
  }
`;
