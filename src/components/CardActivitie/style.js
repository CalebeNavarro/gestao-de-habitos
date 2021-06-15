import styled from "styled-components";

export const ActivitieDiv = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 24px;
    align-items: space-evenly;
    border: 1px solid black;
    border-radius: 10px;
    padding: 15px;
    width: 90%;
    margin: 10px;
    color: var(--white);

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
`

export const ButtonsDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
`

export const UpdateTitleButton = styled.button`
    background-color: var(--white);
    width: 100%;
    padding: 5px;
    height: 30px;
    border: 1px solid black;
    border-radius: 5px;
`

export const RemoveActivityButton = styled(UpdateTitleButton)`
    width: 40%;
    background-color: var(--black);
    color: var(--white);
`
