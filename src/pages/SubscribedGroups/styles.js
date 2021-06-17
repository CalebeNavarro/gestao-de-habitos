import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin-top: 82px;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 50px;
    }
  }
`;

export const ContainerCards = styled.div`
  .container-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
  @media (min-width: 768px) {
    min-height: 55vh;
    .container-cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 1300px;
      gap: 12px;
      margin-top: 20px;
    }
  }
`;

export const Text = styled.p`
  width: 80vw;
  font-family: var(--font-home);
  text-align: center;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 20px;
    width: 50vw;
  }
`;

export const Image = styled.img`
  display: none;
  @media (min-width: 768px) {
    display: block;
    margin-top: 20px;
  }
`;
