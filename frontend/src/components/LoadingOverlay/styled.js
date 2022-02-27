import styled from "styled-components";

export const LoadingOverlayStyled = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1000;
  left: 0px;
  opacity: 0.5;
  background-color: rgba(0, 0, 0, 0.5);

  .spinner-border {
    width: 3rem;
    height: 3rem;
    z-index: 20;
  }
`;
