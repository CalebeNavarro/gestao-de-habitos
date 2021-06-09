import styled from "styled-components";

export const HeaderDiv = styled.div`
    background-color: var(--color-primary);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    img {
        height: 60px;
    }

    @media screen and (min-width: 768px) {
        background-color: var(--background-second);
        flex-direction: row;
        justify-content: none;
        align-items: none;
        padding-left: 320px;
        img {
            position: absolute;
            top: 0;
            left: 0;
        }
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

    @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: row;

        & :first-child {
            width: 320px;
            background-color: ${(props) => {
                if(props.page === "subscribedgroups"){
                    return "var(--white)"
                }
                return "initial"
            }};
            color: ${(props) => {
                if(props.page === "subscribedgroups"){
                    return "var(--black)"
                }
                return "var(--white)"
            }};
        }

        & :nth-child(2){
            background-color: ${(props) => {
                if(props.page === "searchgroups"){
                    return "var(--white)"
                }
                return "initial"
            }};
            color: ${(props) => {
                if(props.page === "searchgroups"){
                    return "var(--black)"
                }
                return "var(--white)"
            }};
        }

        & :nth-child(3){
            background-color: ${(props) => {
                if(props.page === "creategroup"){
                    return "var(--white)"
                }
                return "initial"
            }};
            color: ${(props) => {
                if(props.page === "creategroup"){
                    return "var(--black)"
                }
                return "var(--white)"
            }};
        }

        & :last-child {
            margin-left: 140px;
            width: 180px;
        }

        button {
            border-top: none;
            width: 270px;
            font-size: 24px;
            height: 60px;
        }

        button:hover {
            background-color: var(--white);
            color: var(--black);
        }
    }
`

export const MenuButton = styled.button`
    position: absolute;
    background-color: var(--white);
    top: 0;
    right: 0;
    width: 64px;
    height: 64px;

    @media screen and (min-width: 768px) {
        display: none;
    }
`