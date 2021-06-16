import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 10px;
  border-radius: 10px;
  width: 310px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: all 0.5s;
  /* background: radial-gradient(#76b2fe, #b69efe); */
  background-image: url(${(props) => props.background});

  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
    transform: scale(1.01);
  }
  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  @media (min-width: 768px) {
    width: 540px;
    p {
      font-size: 18px;
      margin-left: 8px;
    }
  }
`;
