import styled from 'styled-components';

export const Stripes = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transform: skewY(-12deg);
  transform-origin: 0;
  -webkit-transform: skewY(-12deg);
  -webkit-transform-origin: 0;
  background: linear-gradient(150deg, #2769eb 40%, #62fbfc 94%);
`;

export const StripeNode = styled.div`
  position: absolute;
  z-index: 100;
`;

export const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0%;
  left: 0%;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  padding-top: 64px;
  flex-direction: column;
`;

export const Text = styled.div`
  width: 85%;
  height: 75%;
  min-height: 300px;

  @media only screen and (min-width: 768px) {
    height: 55%;
    width: 70%;
  }
`;
