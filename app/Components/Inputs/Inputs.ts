import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
