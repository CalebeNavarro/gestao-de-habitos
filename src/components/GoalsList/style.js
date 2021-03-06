import styled from "styled-components";

export const GoalsDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    align-items: center;
`

export const GoalsNameDiv = styled.div`
   display: none;
   border-radius: 10px 10px 0 0;

    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        background: radial-gradient(#1488CC,#2B32B2);
        color: #dedede;
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
    background: radial-gradient(#1488CC,#2B32B2);
    border: 2px solid black;
    border-radius: 0 0 10px 10px;
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

export const ButtonsDivs = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 30px;
    margin: 10px 0;

    button {
        background-color: black;
        color: white;
        padding: 5px 20px;
        border-radius: 5px;
    }

    button:hover {
        filter: brightness(0.8);
    }

    & :first-child {
        background: ${props => props.whoButton === false && "radial-gradient(#DA22FF,#8E54E9)"};
    }

    & :last-child {
        background: ${props => props.whoButton && "radial-gradient(#DA22FF,#8E54E9)"};
    }

    @media (min-width: 768px) {
        button {
            padding:10px 30px;
            font-size: 20px;
        }
    }
`;

export const SpaceDiv = styled.div`
    height: 10px;
`