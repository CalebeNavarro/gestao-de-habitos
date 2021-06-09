import styled from "styled-components";
import background from "../../assets/BackgroundPopUp.png";

export const ModalDiv = styled.div`
    position: fixed;
    top: 15%;
    left: auto;
    right: auto;
    width: 80%;
    height: 80%;
    padding: 2rem;
    background-color: var(--white);
    z-index: 1;

    @media screen and (min-width: 768px){
        display: ${(props) => props.isOpened ? "flex" : "none"};
        flex-direction: column;
        align-items: center;
        background-image: url(${background});
        background-size: 100% 100%;
        width: 676px; 
        height: 524px;
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

    &:hover {
        cursor: pointer;
        filter: brightness(0.6);
    }
`