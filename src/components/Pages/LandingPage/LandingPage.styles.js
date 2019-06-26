import styled from 'styled-components';
import {Button} from '@material-ui/core';

export const Section = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  min-height: 600px;
`;

export const Heading = styled.div`
  font-size: 1.7rem;
  color: white;
  font-weight: 400;
  @media only screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
  @media only screen and (max-width: 480px) {
    font-size: 1.2rem;
    margin-top: 10%;
  }
`;

export const TextBody = styled.div`
  font-size: 1.22rem;
  color: white;
  line-height: 30px;
  font-weight: 200;
  max-width: 60%;
  @media only screen and (max-width: 768px) {
    line-height: 30px;
    font-size: 1.24rem;
    margin-right: 20%;
    max-width: 80%;
  }
  @media only screen and (max-width: 480px) {
    line-height: 30px;
    font-size: 1.16rem;
    margin-right: 5%;
    max-width: 90%;
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
  & > span {
    font-weight: 600;
  }
`;

export const LightButton = styled(Button)`
  background: white !important;
  & > span {
    font-weight: 600;
  }
`;

export const Sections = styled.div`
  width: 100%;
  height: auto;
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SectionsTitle = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > h1 {
    
  }
  @media only screen and (max-width: 768px) {
    & > h1 {
      font-size: 1.25em;
    }
    height: 80px;
  }
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.0em;
  font-weight: 600;
  margin-bottom: 24px;
`;

export const Message = styled.div`
  width: 100%;
  display: flex;
  padding: 32px;
  justify-content: center;
  align-items: center;
  font-size: 1.25em;
  font-weight: 400;
`;

export const Gif = styled.img`
  width: 20%;
  height: 18%;
`;

export const TitleMessage = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const SectionsContent = styled.div`
  width: 80%;
  margin: 0 auto;
  height: auto;
  display: flex;
`;
