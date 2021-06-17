import styled from "styled-components";

export const GoalForm = styled.form`
    display:flex;
    flex-direction: column;
    align-items: center;
`

export const NotifyP = styled.p`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const SelectDiv = styled.div`
    display: flex;
    align-items: center;
    width: 280px;
    height: 30px;
    background-color: var(--background-gray);
    font-size: 1.2rem;
    height: 46px;
    border: 1px solid var(--black);
    border-radius: 12px;
    box-shadow: 1px 1px var(--black);
    margin-bottom: 20px;

    @media screen and (min-width: 768px){
        width: 400px;
    }
`

export const IconDiv = styled.div`
    margin: 17px;
`

export const DifficultySelect = styled.select`
    width: 90%;
    height: 30px;
    border: none;
    background-color: var(--background-gray);
    border-radius: 5px;
    color: var(--color-placeholder);
    font-size: 1.2rem;
`

export const DifficultyP = styled.label`
    width: 100%;
    margin: 5px;
`