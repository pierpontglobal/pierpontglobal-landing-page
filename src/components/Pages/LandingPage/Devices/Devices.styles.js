import styled from 'styled-components';

export const DeviceHolder = styled.div`
  transform: rotate(-12deg) scale(1);
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  position: absolute;
  top: 30vh;
  right: -10%;
  z-index: 150;

  @media only screen and (max-width: 1230px) {
    transform: rotate(-12deg) scale(0.7);
    right: -20%;
  }

  @media only screen and (max-width: 1000px) {
    transform: rotate(-12deg) scale(0.5);
    right: -35%;
  }
`;
