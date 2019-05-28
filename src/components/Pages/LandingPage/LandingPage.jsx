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
  width: 50%;
  height: auto;
  margin-top: 302px;
  margin-bottom: 102px;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (max-width: 768px) {
    width: 80%;
    margin-top: 80px;
    margin-bottom: 0px;
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
      <BrandsWrapper>
        <Brands />
      </BrandsWrapper>
      <TestimonialsWrapper>
        <Testimonials />
      </TestimonialsWrapper>
      <SubscriptionDetails />
      <Footer />
    </div>
  );
};

export default LandingPage;
