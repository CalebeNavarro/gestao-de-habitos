import styled from "styled-components";
import Img from './../../assets/habit.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  > button {
    margin: 10px 0;
    font-size: 1rem;
  }

  h1 {
    font-size: 50px;
  }

  blockquote {
    margin-top: 20px;
    max-width: 310px;
    margin-bottom: 10px;
    font-size: 20px;
    font-family: var(--font-home);
  }

  @media (min-width: 768px) {
    > button {
    font-size: 1.5rem;
    }

  }
`;

export const HabitCards = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  min-height: 300px;
  padding-top: 50px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1200px;
    overflow-y: auto;
    height: 480px;

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

export const Welcome = styled.h1`
  align-items: center;
  margin-top: 83px;
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

export const SecondFooter = styled.footer`
  width: 80vw;
  height: 50vh;
  background-image: url(${Img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;