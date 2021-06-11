import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin-top: 83px;

  h2 {
    text-align: center;
    margin-bottom: 15px;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 50px;
    }
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;

  @media (min-width: 768px) {
    height: 200px;
    overflow-y: scroll;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  height: 100px;

  > button {
    margin: 20px 0;
    width: 120px;
  }

  button:first-child {
    position: absolute;
    left: 30px;
  }

  button:last-child {
    position: absolute;
    right: 30px;
  }

  @media (min-width: 768px) {
    padding: 0 100px;

    > button {
      width: 320px;
    }
  }

  @media (min-width: 1100px) {
    button:first-child {
      left: 130px;
    }

    button:last-child {
      right: 130px;
    }
  }
`;
