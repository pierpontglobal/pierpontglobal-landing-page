import styled from 'styled-components';
import {Button} from '@material-ui/core';

export const Section = styled.div`
  height: 90vh;
  width: 100%;
  position: relative;
  min-height: 600px;
  max-height: 860px;
`;

export const Heading = styled.div`
  font-size: 36px;
  color: white;
  font-weight: 200;
`;

export const TextBody = styled.div`
  font-size: 18px;
  color: white;
  line-height: 30px;
  font-weight: 200;
  @media only screen and (min-width: 768px) {
    line-height: 36px;
    font-size: 24px;
    margin-right: 40%;
  }
`;

export const AccentButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%) !important;
  border-radius: 3 !important;
  border: 0 !important;
  color: white !important;
  height: 48px !important;
  padding: 0 30px !important;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3) !important;
`;

export const LightButton = styled(Button)`
  background: white !important;
`;
