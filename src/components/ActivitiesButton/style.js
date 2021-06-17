import styled from "styled-components";

export const StyledButton = styled.button`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: var(--color-primary);
    color: var(--white);
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