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

    p {
        margin: 5px;
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
    width: 40%;
    padding: 5px;
    height: 20%;
    color: var(--white);
    background-color: var(--black);
    border-radius: 5px;

    @media screen and (min-width: 768px){
        min-height: 30px;
    }
`

export const UpdateGoalDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
`

export const UpdateGoalButton = styled(RemoveGoalButton)`
    background-color: var(--color-primary);
    width: 92.5%;
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