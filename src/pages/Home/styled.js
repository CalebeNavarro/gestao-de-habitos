import styled from "styled-components";

const StyledHome= styled.div`

    display: flex ;

    color: var(--color-primary);
    font-family: var(--font-home);

    flex-direction: column;
    text-align:center;
    height: 90vh;

    align-items: center;
    justify-content: center;
    div{
        display: flex;
        width: 90vw;
        justify-content: space-around;

    }
    h1{
        margin: 1rem auto;
        font-size: 40px;
    }

    img{
        height:286px;
        margin:1rem auto;

        @keyframes floating {
            20% {margin-top: 1.1rem}
            30% {margin-top: 1.2rem}
            40% {margin-top: 1.3rem}
            50% {margin-top: 1.4rem}
            60% {margin-top: 1.4rem}
            70% {margin-top: 1.3rem}
            80% {margin-top: 1.2rem}
            90% {margin-top: 1.1rem}
            100% {margin-top: 1rem}
        }
        
        animation: floating 1.1s linear infinite;
    }

    figure {
        height: 500px;
    }

    a{
        color: var(--color-primary);
        font-weight: bold;
        font-size: 30px;
        margin-left: 1rem;
    }

    a:hover{
        transition: 500ms;
        color: var(--color-second);
    }

    a+a{
        margin-left :0 ;
        margin-right: 1rem;
    }

 @media only screen and (min-width: 768px) {
    h1{
        margin-bottom: 10px;
    }
    img{
        height: 380px ; 
    } 

    figure {
        height: 600px;
    }
 }

`

export default StyledHome