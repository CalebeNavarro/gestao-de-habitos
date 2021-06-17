import styled from "styled-components";

export const Container = styled.div`
  margin-top: 83px;
  height: 100vh;

  h2 {
    text-align: center;
    font-size: 2rem;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 40%;

  .container-cards {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: center;
    max-width: 88%;
    gap: 12px;
  }

  .container-button {
    width: 88%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin-top: 25px;
  }

  @media (min-width: 768px) {
    margin-top: 50px;
  }
`;

export const NextButton = styled.button`
  cursor: pointer;
  display: ${(props) => (props.isHave ? "none" : "block")};
  margin-top: 50px;
  right: 10px;
  top: 55%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border: solid 1px #999;
  border-radius: 100%;
  background-color: #111;
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
    background: #fff;
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
    height: 60px;
    width: 60px;
  }

  &:active {
    border: solid 8px #111;
    &:after,
    &:before {
      background: #111;
    }
  }
  @media (min-width: 411px) {
    right: 30px;
    top: 48%;
  }

  @media (min-width: 768px) {
    right: 35px;
    top: 50%;
  }
`;
export const PrevButton = styled.button`
  cursor: pointer;
  display: ${(props) => (props.isHave ? "none" : "block")};
  margin-top: 50px;
  left: 10px;
  top: 55%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border: solid 1px #999;
  border-radius: 100%;
  background-color: #111;
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
    background: #fff;
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
    height: 60px;
    width: 60px;
  }
  &:active {
    border: solid 8px #111;
    &:after,
    &:before {
      background: #111;
    }
  }
  @media (min-width: 411px) {
    left: 30px;
    top: 48%;
  }
  @media (min-width: 768px) {
    left: 35px;
    top: 50%;
  }
`;
