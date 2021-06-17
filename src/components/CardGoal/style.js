import styled from "styled-components";

export const GoalDiv = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 24px;
    border: 1px solid black;
    border-radius: 10px;
    padding: 15px;
    width: 90%;
    margin: 10px;
    background: #ffffff40;

    p {
        margin: 5px;
    }
    
    & p:last-of-type {
        display: ${props => props.display === "true" ? 'none' : 'line'};
    }

    span {
        font-weight: bold;
    }

`

export const ButtonsDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
`

export const RemoveGoalButton = styled.button`
    width: 38%;
    padding: 5px;
    height: 20%;
    color: var(--white);
    background-color: var(--black);
    border-radius: 5px;

    @media screen and (min-width: 768px){
        min-height: 30px;
    }
`

export const UpdateAchievedDiv = styled.div`
    display: ${props => props.display === "true" ? 'none' : 'flex'};
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 10px 0;

    input {
        width: 70%;
        max-width: 250px;
    }

    > button {
        background-color: black;
        color: white;
        padding: 2.5px 15px;
        border-radius: 5px;
    }

    button:hover {
        filter: brightness(0.8);
    }
`

export const UpdateAchievedButton = styled(RemoveGoalButton)`
    background: radial-gradient(#DA22FF,#8E54E9);
    width: 45%;
    height: initial;
`

export const UpdateGoalSelectDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-evenly;
    width: 92.5%;
    
    select {
        width: 50%;
    }
    button {
        background-color: var(--color-primary);
        color: var(--white);
        border-radius: 5px;
        margin: 2px;
        padding: 2px;
        width: 50%;
    }
`