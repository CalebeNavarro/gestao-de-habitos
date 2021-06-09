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
        margin: 1rem auto;
        font-size: 40px;
    }

    img{
     height:   286px;
     margin:1rem auto;
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

 @media only screen and (min-width: 720px) {
     h1{
         margin-bottom: 10px;
     }
    img{
        /* width:; */
        height: 380px ;
    } 
 }

`

export default StyledHome