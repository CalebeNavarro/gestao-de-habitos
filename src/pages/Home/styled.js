import styled from "styled-components";

const StyledHome= styled.div`

display: flex ;

color: var(--color-primary);
    font-family: var(--font-home);

flex-direction: column;
  text-align:center;

    align-items: center;
    justify-content: center;
div{
    display: flex;
    width: 80vw;
    justify-content: space-around;
    /* background-color: red; */

}
    h1{
        /* font-size: 50px; */
    }

    img{
     height:   286px;
    }

a{
color: var(--color-primary);
    font-weight: bold;
    font-size: 30px;
}

a:hover{
    transition: 500ms;
    color: var(--color-second);
}

 a+a{
    /* margin-left: 1rem; */
    
 }

 @media only screen and (min-width: 720px) {
     h1{
         margin-bottom: 10px;
     }
    img{
        /* width:; */
        height: 420px ;
    } 
 }

`

export default StyledHome