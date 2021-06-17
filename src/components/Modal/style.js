import styled from "styled-components";
import background from "../../assets/BackgroundPopUp.png";

export const BackgroundModal = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1;
`;

export const ModalDiv = styled.div`
    position: fixed;
    top: 20px;
    margin: 64px auto auto;
    margin-left: 50% ;
    transform:translate(-50%);
    min-width: 320px;
    width: 80%; 
    min-height: 500px;
    max-height: 700px;
    height: 80%;
    overflow: auto;
    padding: 2rem;
    background-image: url(${background});
    background-size:1000px 100%;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    font-size: 24px;
    margin-top: auto;
    margin-bottom: auto;
    top: 0;
    bottom: 0;

    @media screen and (min-width: 768px){
        display: ${(props) => props.isOpened ? "flex" : "none"};
        flex-direction: column;
        align-items: center;
        background-size: 100% 100%;
        width: 65vw;
        height: 50vw;
    }
`

export const CloseDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--black);
  color: white;
  width: 30px;
  height: 30px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

    &:hover {
        cursor: pointer;
        filter: brightness(0.6);
    }
`
