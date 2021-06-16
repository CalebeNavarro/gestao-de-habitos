import styled from "styled-components";

export const Container = styled.div`
  margin-top: 83px;
  height: 100vh;

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
  min-height: 40%;

  .container-cards {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: center;
    max-width: 88%;
    gap: 12px;
  }

  @media (min-width: 768px) {
    .ContainerButton {
      position: relative;
      width: 6%;
    }

    margin-top: 50px;
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

export const NextButton = styled.button`
  cursor: pointer;
  position: absolute;
  display: ${(props) => (props.isHave ? "none" : "block")};
  right: 35px;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  border: solid 1px #999;
  border-radius: 100%;
  background-image: linear-gradient(315deg, #5de6de 0%, #b58ecc 74%);
  z-index: 1;
  transition: all 0.2s linear;
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 35%;
    height: 10%;
    top: 41%;
    left: 55%;
    background: #999;
    z-index: 2;
    transform: translate(-50%, -50%) rotate(45deg);
    transition: all 0.2s linear;
  }
  &:after {
    z-index: 3;
    top: 59%;
    left: 55%;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  &:hover {
    border: solid 8px #251941;
    &:after,
    &:before {
      background: #251941;
    }
  }
  &:active {
    border: solid 8px #111;
    &:after,
    &:before {
      background: #111;
    }
  }
`;
export const PrevButton = styled.button`
  cursor: pointer;
  position: absolute;
  display: ${(props) => (props.isHave ? "none" : "block")};
  left: 35px;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  border: solid 1px #999;
  border-radius: 100%;
  background-image: linear-gradient(315deg, #5de6de 0%, #b58ecc 74%);
  z-index: 1;
  transition: all 0.2s linear;
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 35%;
    height: 10%;
    top: 41%;
    left: 45%;
    background: #999;
    z-index: 2;
    transform: translate(-50%, -50%) rotate(135deg);
    transition: all 0.2s linear;
  }
  &:after {
    z-index: 3;
    top: 59%;
    left: 45%;
    transform: translate(-50%, -50%) rotate(-135deg);
  }
  &:hover {
    border: solid 8px #251941;
    &:after,
    &:before {
      background: #251941;
    }
  }
  &:active {
    border: solid 8px #111;
    &:after,
    &:before {
      background: #111;
    }
  }
`;
