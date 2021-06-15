import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* text-align: center; */

  h2 {
    margin-top: 82px;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 50px;
    }
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;

  @media (min-width: 768px) {
    max-height: 360px;
    overflow-y: auto;
    margin-top: 20px;
    ::-webkit-scrollbar {
      width: 15px;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: #3f3d56;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: gray;
    }
  }
`;
