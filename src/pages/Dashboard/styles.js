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
`;

export const Top = styled.div`
  position: fixed;
  color: white;
  height: 30px;
  width: 30px;
  left: 10px;
  top: 50%;
  border-radius: 50%;
  background-color: gray;
  text-align: center;
  a:visited {
    color: white;
  }
`;
