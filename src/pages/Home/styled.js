import styled from "styled-components";

const StyledHome= styled.div`
    font-family: var(--font-home);
display: flex ;
flex-direction: column;

div{
    display: flex;

    justify-content: center;
    align-items: center;
}
    h1{
        font-size: 50px;
    }

a{
    font-weight: bold;
    font-size: 30px;
}

 a+a{
    margin-left: 1rem;
    
 }

`

export default StyledHome