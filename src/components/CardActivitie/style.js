import styled from "styled-components";

export const ActivitieDiv = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 24px;
    align-items: space-evenly;
    border: 1px solid black;
    background-color: #ffffff40;
    border-radius: 10px;
    padding: 15px;
    width: 90%;
    margin: 10px;
    color: black;

    p {
        margin: 5px;
    }
    
    span {
        font-weight: bold;
    }
`


export const UpdateTitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    justify-content: center;
    align-items: center;
`

export const UpdateActivityTitleDiv = styled.div`
    display: flex;
    margin-top: 3px;
`

export const TitleInput = styled.input`
    height: 23px;
    width: 60%;
    border-style: none;
    border: 1px solid black;
    border-radius: 5px 0 0 5px;
`

export const UpdateButton = styled.button`
    height: 23px;
    width: 40%;
    border: 1px solid black;
    border-left: none;
    border-radius: 0 5px 5px 0;
    background: radial-gradient(#DA22FF,#8E54E9);
    color: var(--white);
`

export const ButtonsDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
`

export const UpdateTitleButton = styled.button`
    background: radial-gradient(#DA22FF,#8E54E9);
    width: 100%;
    padding: 5px;
    height: 30px;
    border: 1px solid black;
    border-radius: 5px;
    color: var(--white);

    &:hover {
        filter: brightness(0.8);
    }
`

export const RemoveActivityButton = styled(UpdateTitleButton)`
    width: 40%;
    background: var(--black);
`
