import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  color: white;
  height: 30px;
  width: 30px;
  right: 12px;
  bottom: 5%;
  border-radius: 80%;
  background-color: black;
  text-align: center;
  opacity: 0.4;

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

  a:link {
    color: white;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
