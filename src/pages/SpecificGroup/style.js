import styled from "styled-components";


export const SpecificGroupMain = styled.main`
  
`

export const SpecificGroupDiv = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top: 82px;
`

export const SpecificGroupH3 = styled.h3`
    font-size: 1.8rem;
    margin: 8px;

    @media screen and (min-width: 768px) {
        font-size: 3rem;
    }
`

export const SpecificGroupP = styled.p`
    font-size: 1.5rem;
    margin: 2px;

    @media screen and (min-width: 768px) {
        font-size: 2rem;
    }
`

export const TriangleClosedDiv = styled.div`
    position: absolute;
    top: 10%;
    left: 15px;
    transform: rotate(0deg);
`

export const TriangleOpenedDiv = styled(TriangleClosedDiv)`
    transform: rotate(90deg);
    @keyframes opened {
        from {transform: rotate(0deg)}
        to {transform: rotate(90deg)}
    }
    animation: opened 0.1s linear;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 768px){
        flex-direction: row;
        width: 90vw;
        height: 80vh;
        align-items: center;
        justify-content: space-between;
    }
`

export const GoalsDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    align-items: center;
`

export const GoalsButton = styled.button`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: var(--white);
    margin-top: 20px;
    width: 80vw;
    min-height: 50px;
    height: 5vh;
    font-size: 32px;
    border: 2px solid black;

    @media screen and (min-width: 768px) {
        display: none;
    }
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

export const ActivitiesDiv = styled(GoalsDiv)`

`

export const ActivitiesButton = styled(GoalsButton)`
    background-color: var(--color-primary);
    color: var(--white);
`
export const ActivitiesNameDiv = styled(GoalsNameDiv)`

    @media screen and (min-width: 768px) {
        background-color: var(--color-primary);
        color: var(--white);
    }
`

export const ActivitiesListDiv = styled(GoalsListDiv)`
    display: ${(props) => props.activitiesDivOpened ? "flex" : "none" };
    background-color: var(--color-primary);
    color: var(--white);

    @media screen and (min-width: 768px){
        display: flex;
    }
`

export const SpaceDiv = styled.div`
    height: 10px;
`
export const ModalDiv = styled.div`
    font-size: 24px;

    h3 {
        margin-bottom: 50px;    
    }
   @media screen and (min-width: 768px){
       font-size:36px;
   }
`
