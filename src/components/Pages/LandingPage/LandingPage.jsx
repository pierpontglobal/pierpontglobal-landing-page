import React from 'react';
import Greetings from './Sections/Greetings/Greetings';
import WhatWeDo from './Sections/WhatWeDo/WhatWeDo';
import Devices from './Devices/Devices';
import MainSections from './Sections/MainSections/MainSections';
import Footer from './Sections/Footer/Footer';
import Brands from './Sections/Brands/Brands';
import Testimonials from './Sections/Testimonials/Testimonials';
import styled from 'styled-components';
import SubscriptionDetails from './Sections/SubscriptionDetails/SubscriptionDetails';

const BrandsWrapper = styled.div`
  width: 70%;
  height: auto;
  margin-top: 200px;
  margin-bottom: 80px;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (max-width: 768px) {
    width: 80%;
    margin-top: 80px;
    margin-bottom: 0px;
  }
`;

const BrandsTitle = styled.div`
  width: 100%;
  margin-bottom: 98px;
  text-align: center;

  & > span {
    font-size: 2.8rem;
    font-weight: 200;
  }
`;

const TestimonialsWrapper = styled.div`
  width: 80%;
  height: auto;
  margin-top: 220px;
  margin-bottom: 102px;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (max-width: 768px) {
    margin-top: 102px;
    margin-bottom: 16px;
    width: 100%;
  }
`;

const LandingPage = (props) => {
  return (
    <div
      className="LandingPageWrapper"
      style={{overflow: 'hidden', position: 'relative'}}
    >
      <Greetings />
      <Devices />
      <MainSections />
      <SubscriptionDetails />
      <BrandsWrapper>
        <BrandsTitle>
          <span>
            Our corporate partners
          </span>
        </BrandsTitle>
        <Brands />
      </BrandsWrapper>
      <TestimonialsWrapper>
        <Testimonials />
      </TestimonialsWrapper>
      <Footer />
    </div>
  );
};

export default LandingPage;
