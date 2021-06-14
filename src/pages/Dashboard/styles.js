import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  min-height: 100vh;

  @media (min-width: 768px) {
  }
`;

export const HabitCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 300px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 1200px;
    overflow-y: scroll;
    max-height: 340px;
  }
`;

export const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 40px;
  height: 400px;

  p {
    width: 300px;
    font-size: 13px;
  }

  @media (max-width: 350px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    margin-top: 30px;
    margin-left: 20px;
    margin-right: 20px;
    padding-left: 20px;
    padding-right: 20px;
    height: 350px;
    width: 200px;
    text-align: center;

    p {
      font-size: 12px;
    }
  }

  @media (min-width: 768px) {
    height: 180px;
    margin: 0 auto;
  }
`;

export const DesktopNone = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 200px;
  @media (min-width: 768px) {
    display: none;
  }

  @media (max-width: 350px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    margin-top: 30px;
    margin-left: 20px;
    margin-right: 20px;
    padding-left: 20px;
    padding-right: 20px;
    height: 350px;
    width: 200px;
    text-align: center;

    p {
      font-size: 12px;
      width: 200px;
    }
  }
`;
