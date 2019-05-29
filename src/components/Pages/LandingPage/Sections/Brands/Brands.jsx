import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  box-shadow: 0px 0px 16px 2px rgb(115, 88, 255, 0.10);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: auto;
  }
`;

const Brand = styled.div`
  width: 200px;
  height: 100%;
  cursor: pointer;
  & > img {
    &:hover {
      filter: grayscale(20%);
      opacity: 0.8;
    }
    width: 120px;
    height: auto;
    filter: grayscale(100%);
    opacity: 0.4;
    transition: all 0.4s;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;
  }
`;

const Brands = (props) => {
  return (
    <Wrapper>
      <Brand>
        <img src="/images/banreservas.png" />
      </Brand>
      <Brand>
        <img src="/images/stripe.png" />
      </Brand>
      <Brand>
        <img src="/images/banreservas.png" />
      </Brand>
      <Brand>
        <img src="/images/stripe.png" />
      </Brand>
      <Brand>
        <img src="/images/banreservas.png" />
      </Brand>
      <Brand>
        <img src="/images/stripe.png" />
      </Brand>
    </Wrapper>
  );
};

export default Brands;
