import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import ArrowIconMui from '@material-ui/icons/ArrowDownward';

const ArrowAnim = () => {
  return keyframes`
    0% {
      transform: translateY(0px);
    }
    10% {
      transform: translateY(-24px);
    }
    15% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(0px);
    }
  `;
};

const ArrowIconWrapper = styled.div`
  animation: ${props => props.bottomReached ? 'none' : css`${ArrowAnim} 2s ease-in-out 1s infinite`};
  animation-fill-mode: forwards;
  opacity: ${props => props.bottomReached ? '1' : '0.7'};
  cursor: pointer;
  
  & > svg {
    font-size: 2.5rem !important;
    color: ${props => props.bottomReached ? 'white' : '#3a3e43'};
    transition: all .3s !important;
    transform: ${props => props.bottomReached ? 'rotate(-180deg)' : 'rotate(0deg)'} !important;
  }

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  position: fixed;
  z-index: 200;
  bottom: 16px;
  right: 24px;
  padding: 8px;
  background: transparent;
`;

class ArrowIndicator extends React.Component {
  state = {
    bottomReached: false,
  }

  componentDidMount = () => {
    const { landingRef } = this.props
    
    window.addEventListener('scroll', (data) => {
      const { bottomReached } = this.state;

      if (!bottomReached && (landingRef.current.scrollHeight - window.pageYOffset) <= 1150) {
        this.setState({
          bottomReached: true,
        });
        console.log(landingRef.current.scrollHeight - window.pageYOffset);
        console.log('to DOWN');
      }
      if (bottomReached && (landingRef.current.scrollHeight - window.pageYOffset) >= 1150) {
        this.setState({
          bottomReached: false,
        });
        console.log('to UP');
        console.log(landingRef.current.scrollHeight - window.pageYOffset);
      }
    })
  }

  scrollTo = (bottomReached) => {
    const { landingRef } = this.props
    if (bottomReached) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, landingRef.current.scrollHeight);
    }
  }

  render() {
    const  { bottomReached } = this.state;
    return (
      <Wrapper>
        <ArrowIconWrapper onClick={() => this.scrollTo(bottomReached)} bottomReached={bottomReached}>
          <ArrowIconMui />
        </ArrowIconWrapper>
      </Wrapper>
    );
  }
};

export default ArrowIndicator;

