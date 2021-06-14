import styled from "styled-components";

export const Container = styled.div`
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

  a:link {
    color: white;
  }
`;
