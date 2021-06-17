import styled from "styled-components";


export const SpecificGroupMain = styled.main`
  
`

export const SpecificGroupDiv = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top: 82px;
`

export const SpecificGroupInfo = styled.div`
    background-color: var(--white);
    width: 90vw;
    min-height: 180px;
    margin-bottom: 10px;
    border: 1px solid black;
    padding: 0 10px;
    position: relative;
`

export const SpecificGroupH3 = styled.h3`
    font-size: 1.8rem;
    margin: 4px;
    text-align: center;

    @media screen and (min-width: 768px) {
        font-size: 2.3rem;
    }
`

export const SpecificGroupP = styled.p`
    font-size: 1rem;
    margin: 2px;

    span {
        font-weight: bold;
    }

    @media screen and (min-width: 768px) {
        font-size: 1.5rem;
        width: 55vw;
    }
`


export const UnsubscribeButton = styled.button`
    position: absolute;
    right: 5px;
    bottom: 5px;
    background-color: var(--black);
    color: var(--white);
    font-size: 18px;
    padding: 5px;
    border-radius: 5px;

    &:hover {
        filter: brightness(0.8)
    }

    @media screen and (min-width: 768px){
        font-size: 24px;
    }
`

export const SubscribeButton = styled(UnsubscribeButton)`
    background-color: var(--color-primary);
`

export const EditGroupButton = styled(UnsubscribeButton)`
    background-color: red;
`

export const MembersButton = styled(UnsubscribeButton)`
    background-color: blue;
    left: 5px;

    @media screen and (min-width: 768px){
        left: initial;
        right: 150px;
    }
`


export const Container = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px){
        flex-direction: row;
        width: 90vw;
        height: 80vh;
        justify-content: space-between;
    }
`

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
export const ModalDiv = styled.div`
    font-size: 24px;

    h3 {
        margin-bottom: 50px;    
    }
   @media screen and (min-width: 768px){
       font-size:36px;
   }
`
