import styled from "styled-components"

export const Form = styled.form`
    display:flex;
    flex-direction: column;
    align-items: center;

    select {
        margin: 20px 0;

        box-shadow: 2px 2px 2px var(--black);
    }
`

export const NotifyP = styled.p`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`