import styled from "styled-components";

export const HeaderDiv = styled.div`
    background-color: var(--color-primary);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        height: 60px;
    }
`
export const MenuDiv = styled.div`
    display: ${(props) => props.menuOpened ? "flex" : "none"};
    flex-direction: column;
    width: 100%;

    button {
        width: 100%;
        background-color: var(--background-second);
        color: var(--white);
        font-size: 32px;
        height: 50px;
        border-top: 1px solid var(--white);
    }
`

export const MenuButton = styled.button`
    position: absolute;
    background-color: var(--white);
    top: 0;
    right: 0;
    width: 64px;
    height: 64px;
`