import styled from "styled-components";

const StyledHome = styled.div`
  display: flex;
  color: var(--color-primary);
  flex-direction: column;
  text-align: center;
  height: 90vh;
  align-items: center;
  justify-content: center;
  div {
    display: flex;
    width: 90vw;
    justify-content: space-around;
  }
  h1 {
    margin: 1rem auto;
    font-size: 40px;
    font-family: var(--font-home);
    margin-top: 40px;
    padding-bottom: 20px;
  }

  img {
    height: 286px;
    margin: 1rem auto;

    @keyframes floating {
      0% {
        transform: translatey(0px);
      }
      50% {
        transform: translatey(-20px);
      }
      100% {
        transform: translatey(0px);
      }
    }

    animation: floating 6s ease-in-out infinite;
  }

  figure {
    height: 500px;
  }

  a {
    color: var(--color-primary);
    font-weight: bold;
    font-size: 30px;
    margin-left: 1rem;
    font-family: var(--font-home);
  }

  a:hover {
    transition: 500ms;
    color: var(--color-second);
  }

  a + a {
    margin-left: 0;
    margin-right: 1rem;
  }

  @media only screen and (min-width: 768px) {
    h1 {
      margin-bottom: 10px;
      font-size: 55px;
      margin-top: 40px;
      padding-bottom: 60px;
    }

    a {
      font-size: 62px;
    }
    img {
      height: 380px;
    }

    figure {
      height: 600px;
    }
  }
`;

export default StyledHome;
