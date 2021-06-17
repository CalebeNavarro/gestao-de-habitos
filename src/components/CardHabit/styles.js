import styled from "styled-components";

export const HabitCard = styled.div`
  margin: 20px;
  padding: 20px;
  width: 300px;
  min-height: 200px;
  display: grid;
  grid-template-rows: 20px 50px 1fr 50px;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.5s;
  /* background: radial-gradient(#1fe4f5, #3fbafe); */
  background: radial-gradient(${props => props.objColor.first},${props => props.objColor.second});

  span, h2 {
    font-size: 1rem;
  }

  :hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
    transform: scale(1.01);
  }

  & > div {
    grid-row: 2/3;
    font-size: 30px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  & p {
    grid-row: 1/2;
    justify-self: end;
  }

  & h2 {
    grid-row: 3/4;
    font-weight: 400;
    color: #ffffff;
  }

  & section {
    grid-row: 4/5;
    align-self: center;
    text-align: center;

    & button {
      border: 1px solid pink;
    }

    & button:hover {
      border: 1px solid lightcoral;
    }
  }
    & section input {
      width: 80%;
    }
    & section button {
      width: 20%;
      background-color: pink;
      color: rgba(10, 10, 10, 0.9);
      padding: 10px 0;
      border-radius: 7px;

      & hover {
        
      }
    }

  a::after {
    position: absolute;
    top: 25px;
    left: 0;
    content: "";
    width: 0%;
    height: 3px;
    background-color: rgba(255, 255, 255, 0.6);
    transition: all 0.5s;
  }

  a:hover::after {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 500px;

    span, h2 {
      font-size: 1.4rem;
    }

  }
`;
