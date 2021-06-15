import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  align-items: center;

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
    overflow-y: auto;
    max-height: 340px;
    ::-webkit-scrollbar {
      width: 15px;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: #3f3d56;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: gray;
    }
  }
`;

export const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 40px;
  height: 400px;

  h1 {
    margin-top: 30px;
  }

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
    padding: 0 20px;
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
    padding: 0 20px;
    height: 350px;
    width: 200px;
    text-align: center;

    p {
      font-size: 12px;
      width: 200px;
    }
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
  background-color: black;
  text-align: center;

  a {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  a:visited {
    color: white;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
