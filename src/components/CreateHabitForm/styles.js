import styled from "styled-components"

export const Form = styled.form`
    display:flex;
    flex-direction: column;
    align-items: center;

    & :nth-child(5) {
        width: 100%;

        & > div {
            display: flex;
            align-items: center
        }
    
        @media (min-width: 768px) {
            width: 280px;
        }
    }

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