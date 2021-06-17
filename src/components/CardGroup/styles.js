import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 7px;
  border-radius: 10px;
  width: 310px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: all 1s;
  background-image: url(${(props) => props.background});

  div {
    width: 100%;
    height: 100%;
    padding: 10px;
    background-image: linear-gradient(to left, transparent, #000);
    color: #dedede;
    border-radius: 10px;
  }

  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
    background-position: 50% 50%;
    transform: scale(1.02);
  }
  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: bold;
    span {
      font-weight: normal;
    }
  }

  @media (min-width: 768px) {
    width: 500px;
    height: 100px;
    p {
      font-size: 18px;
      margin-left: 8px;
      margin: 4px;
      font-weight: bold;
      span {
        font-weight: normal;
      }
    }
  }
`;
