import styled from "styled-components";
import background from "../../assets/BackgroundPopUp.png";

export const ModalDiv = styled.div`
    position: fixed;
    top: 80px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: 80%;
    height: 80%;
    padding: 2rem;
    background-color: var(--white);
    z-index: 100;

    @media screen and (min-width: 768px){
        display: ${(props) => props.isOpened ? "flex" : "none"};
        flex-direction: column;
        align-items: center;
        background-image: url(${background});
        background-size: 100% 100%;
        width: 75vw; 
        height: 45vw;
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