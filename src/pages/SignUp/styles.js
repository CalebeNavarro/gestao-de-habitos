import styled, { keyframes } from "styled-components";

export const SignUpInContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;

  .div-img {
    height: 100vh;
    img {
      display: none;
    }
  }
  @media (min-width: 768px) {
    .div-img {
      height: 100vh;
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--background-second);
      img {
        display: block;
        width: 100%;
      }
    }
  }
`;

const appearFromRight = keyframes`
from{
  opacity: 0;
  transform: translateX(50px);
}
to {
  opacity: 1;
  transform: translateX(0px);
}
`;

export const FormContainer = styled.form`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${appearFromRight} 1s;

  h1 {
    text-align: center;
    font-size: 3rem;
  }
  .inputs-container {
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;

    .div-button {
      margin-top: 8px;
    }
    span {
      color: red;
    }
  }

  p {
    margin: 18px;
    font-size: 20px;
    text-align: center;
  }

  @media (min-width: 768px) {
    height: 100vh;
    width: 50%;

    h1 {
      font-size: 80px;
      margin-bottom: 2rem;
    }
    .inputs-container {
      .div-button {
        margin-top: 20px;
      }
    }

    p {
      margin-top: 25px;
    }
  }
`;
