import styled from "styled-components";

export const Container = styled.div`
  display: ${props => props.display === "true"? 'none' : 'block'};
  width: 90%;
  margin: 20px auto;

  @media (min-width: 768px) {
    display: ${props => props.display === "true" ? 'none' : 'flex'};
    width: 90vw;
    height: 40vh;
    gap: 30px;
  }
`;

export const Img = styled.div`
  @media (min-width: 768px) {
    flex: 1;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;
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
    font-size: 30px;
    align-self: center;
  }
`;