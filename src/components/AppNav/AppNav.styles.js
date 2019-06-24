import styled from 'styled-components';
import {Button} from '@material-ui/core';

export const Bar = styled.div`
  height: 64px;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: ${(props) => props.background};
  transition: background-color 0.4s ease;
  z-index: 300;
  box-shadow: ${(props) =>
    props.background === 'transparent'
      ? 'none'
      : 'rgba(0, 0, 0, 0.09) 0px 2px 6px 0px'};
`;

export const Logo = styled.img`
  height: 100%;
  margin-left: 8%;
`;

export const BasicChangeableButton = styled(Button)`
  color: ${(props) => props.textColor} !important;
  background: transparent !important;
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  font-weight: 600 !important;
  font-size: 0.9rem !important;
  transition: 0.4s !important;
  padding: 0 30px !important;
  :hover {
    opacity: 0.5 !important;
  }
`;

export const UsefulLinks = styled.div`
  display: flex;
  justify-content: space-between;
  justify-items: space-between;
`;

export const ItemsContainer = styled.div`
  height: calc(100% - 30px);
  height: -webkit-calc(100% - 30px);
  height: -moz-calc(100% - 30px);
  width: 85%;
  display: flex;
  justify-content: space-between;
  justify-items: space-between;
  margin: 10px auto;
  position: absolute;
  left: 0;
  right: 0;
  padding: 0 10px;
  @media only screen and (max-width: 768px) {
    width: 95%;
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
