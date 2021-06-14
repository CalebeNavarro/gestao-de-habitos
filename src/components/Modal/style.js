import styled from "styled-components";
import background from "../../assets/BackgroundPopUp.png";

export const BackgroundModal = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.9);
`;

export const ModalDiv = styled.div`
    position: fixed;
    top: 20px;
    margin: 64px auto auto;
    margin-left: 50% ;
    transform:translate(-50%);
    width: 80%; 
    height: 80%;
   
    padding: 2rem;
    background-color: var(--white);
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    font-size: 24px;

    @media screen and (min-width: 768px){
        display: ${(props) => props.isOpened ? "flex" : "none"};
        flex-direction: column;
        align-items: center;
        background-image: url(${background});
        background-size: 100% 100%;
        
    width: 720px;
    height: 460px;
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

export const FormContener= styled.div`
    
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;

    @media screen and (min-width: 768px){

        width: 100%;    
    }
`
