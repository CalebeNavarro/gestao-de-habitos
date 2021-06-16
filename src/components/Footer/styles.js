import styled from "styled-components";

export const Container = styled.div`
  display: ${(props) => (props.display === "false" ? "none" : "block")};
  width: 90%;
  margin: 20px auto;
  font-family: var(--font-home);
  @media (min-width: 768px) {
    display: ${(props) => (props.display === "true" ? "none" : "flex")};
    width: 90vw;
    gap: 30px;
    height: 35vh;
    margin: 30px auto 0 auto;
  }

  @media (min-width: 1100px) {
    position: ${(props) => (props.fixDiv ? "absolute" : "static")};
    bottom: 0px;
  }
`;

export const Img = styled.div`
  @media (min-width: 768px) {
    flex: 1;
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;
    width: 3px;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    flex: 1;
    font-size: 25px;
    align-self: center;
  }
`;
