import styled from "styled-components";

export const LogInContainer = styled.div`
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

export const FormContainer = styled.form`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    font-size: 36px;
    margin-top: 60px;
  }
  .inputs-container {
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    margin: 50px auto 30px;
    .div-button {
      margin-top: 20px;
    }
  }

  p {
    margin-top: 18px;
    font-size: 20px;
    text-align: center;
  }

  @media (min-width: 768px) {
    height: 100vh;
    width: 50%;

    h1 {
      margin-top: 200px;
      font-size: 80px;
    }
  }
`;
