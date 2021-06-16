import styled from "styled-components";

export const EditGrouph3 = styled.h3`
    position: absolute;
    top: 20px;
`

export const ButtonsDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 250px;
    position: absolute;
    top: 80px;
`

export const NameButton = styled.button`
    background-color: ${(props) => props.nameInput ? "var(--black)" : "var(--color-primary)"};
    color: var(--white);
    padding: 5px;
    width: 80px;
    border-radius: 5px;
`

export const DescriptionButton = styled(NameButton)`
    background-color: ${(props) => props.descriptionInput ? "var(--black)" : "var(--color-primary)"};
`

export const CategoryButton = styled(NameButton)`
    background-color: ${(props) => props.categoryInput ? "var(--black)" : "var(--color-primary)"};
`

export const EditForm = styled.form`
    position: absolute;
    top: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
`

export const NotifyP = styled.p`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`