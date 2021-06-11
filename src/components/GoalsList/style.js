import styled from "styled-components";

export const GoalsDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    align-items: center;
`

export const GoalsNameDiv = styled.div`
   display: none;

    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--white);
        font-size: 3rem;
        min-width: 300px;
        max-width: 700px;
        width: 43vw;
        height: 10vh;
        border: 2px solid black;
    }
`

export const GoalsListDiv = styled.div`
    display: ${(props) => props.goalsDivOpened ? "flex" : "none" };
    flex-direction: column;
    align-items: center;
    background-color: var(--white);
    border: 2px solid black;
    border-top: none;
    max-width: 700px;
    width: 80vw;
    min-height: 300px;
    max-height: 500px;
    overflow: auto;

    @media screen and (min-width: 768px){
        display: flex;
        min-width: 300px;
        max-width: 700px;
        width: 43vw;
        height: 50vh;
    }
`

export const SpaceDiv = styled.div`
    height: 10px;
`